<template>
  <v-container>
    <h1 class="text-h2">Editor</h1>
    <v-btn @click="test">tamere</v-btn>
    <div id="editorjs" class="elevation-2"></div>
  </v-container>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Lucas from '../../tools/lucas'
import Center from '../../tools/center/index'

export default {
  data: () => ({
    editor: null,
    config: {
      holder: 'editorjs',
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4],
            defaultLevel: 1,
          },
        },
        lucas: Lucas,
        center: Center,
      },
      data: {"time":1595598508152,"blocks":[{"type":"header","data":{"text":"sdqkfsdf","level":1}},{"type":"paragraph","data":{"text":"<div style=\"\"><a href=\"http://lol.com\">dsqfkdsf</a></div>"}},{"type":"paragraph","data":{"text":"<a href=\"http://lol.com\">fqsdf</a>"}},{"type":"lucas","data":{}}],"version":"2.18.0"}
    }
  }),
  methods: {
    async test () {
      let r = await this.editor.save()
      console.log(r)
      console.log(JSON.stringify(r))
    }
  },
  mounted () {
    this.editor = new EditorJS(this.config)
  }
}
</script>
