<template>
  <v-app>
    <v-app-bar app fixed>
      <v-toolbar-title>
        <a to="/">{{ $static.metadata.siteName }}</a>
      </v-toolbar-title>
      <v-spacer />
      <span class="pr-3">🔍</span>
      <v-text-field
              hide-details
              prepend-icon="mdi-search"
              single-line
              placeholder="フェミニン"
      ></v-text-field>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          text
          href="https://github.com/sakuramochi0/prettyrhythm-prismstone-album"
        >
          <v-icon>mdi-code</v-icon>
          GitHub
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
