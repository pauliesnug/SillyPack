plugins {
    java

    alias(libs.plugins.loom)
    alias(libs.plugins.machete)
    `maven-publish`
}

group = "works.paulie"
version = "1.0.0+1.20.1"
val isAlpha = "alpha" in version.toString()
val isBeta = "beta" in version.toString()
if (isAlpha) println("sillymod alpha version detected.")
if (isBeta) println("sillymod beta version detected.")

repositories {
    mavenCentral()
    maven("https://maven.terraformersmc.com")
    maven("https://maven.quiltmc.org/repository/release")
    maven("https://jitpack.io")
    maven("https://oss.sonatype.org/content/repositories/snapshots")

    maven("https://api.modrinth.com/maven") {
        name = "Modrinth"
        content {
            includeGroup("maven.modrinth")
        }
    }
}

loom {
    runs {
        named("server") { ideConfigGenerated(false) }
    }

    mixin {
        useLegacyMixinAp.set(false)
    }
}

val minecraftVersion = libs.versions.minecraft.get()

dependencies {
    minecraft(libs.minecraft)
    mappings(loom.layered {
        libs.versions.quilt.mappings.orNull?.takeIf { it != "0" }?.let {
            mappings("org.quiltmc:quilt-mappings:$minecraftVersion+build.$it:intermediary-v2")
        }
        officialMojangMappings()
    })
    modImplementation(libs.fabric.loader)

    modImplementation(libs.fabric.api)
    modRuntimeOnly(libs.fabric.api)

    modImplementation(libs.mod.menu)
}

java {
    withSourcesJar()
    withJavadocJar()
}


tasks {
    processResources {
        val modId: String by project
        val modName: String by project
        val modDescription: String by project
        val githubProject: String by project

        inputs.property("id", modId)
        inputs.property("group", project.group)
        inputs.property("name", modName)
        inputs.property("description", modDescription)
        inputs.property("version", project.version)
        inputs.property("github", githubProject)

        filesMatching(listOf("fabric.mod.json", "quilt.mod.json")) {
            expand(
                "id" to modId,
                "group" to project.group,
                "name" to modName,
                "description" to modDescription,
                "version" to project.version,
                "github" to githubProject,
            )
        }
    }
}

publishing {
    publications {
        create<MavenPublication>("mod") {
            groupId = "works.paulie"
            artifactId = "sillymod"

            from(components["java"])
        }
    }

    repositories {}
}

tasks.getByName("generateMetadataFileForModPublication") {
    dependsOn("optimizeOutputsOfRemapJar")
}
