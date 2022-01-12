<template>
  <div class="container">
    <div class="header">
      <h1>Transifex Native playground</h1>
      <div class="picker">
        <LanguagePicker />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h3>Static content</h3>
        <div>
          <T _str="Hello world" />
        </div>
      </div>
      <div class="column">
        <h3>Dynamic content</h3>
        <div>
          <input v-model="string" />
          <p>
            <T _str="Hello {username}" :username="string" />
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h3>Pluralized</h3>
        <div>
          <input
            type="number"
            v-model="number"
          />
          <p>
            <T
              _str="{cnt, plural, one {You have # message} other {You have # messages}}"
              :cnt="number"
            />
          </p>
        </div>
      </div>
      <div class="column">
        <h3>Choice</h3>
        <div>
          <select v-model="choice">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p>
            <T
              _str="{username} is a {gender, select, male {boy} female {girl} other {person}}"
              :gender="choice"
              :username="string"
            />
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h3><code>$t</code> function with manipulation</h3>
        <div>
          <p>
            {{$t('Hello world').toUpperCase()}}
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h3><code>this.t</code> function with manipulation from script</h3>
        <div>
          <p>
            {{helloworld}}
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <h3>Raw HTML</h3>
        <div>
          <input v-model="string" />
          <p>
            <UT
              _str='<em style="color:red">Hello </em><strong style="color:blue">{username}</strong>'
              _inline="true"
              :username="string"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {LanguagePicker} from "@transifex/vue2"

export default {
  name: 'App',
  components: {
    LanguagePicker
  },
  computed: {
    helloworld: function() { return this.t('Hello world').toUpperCase() },
  },
  data(){
    return {
      string: 'Jon Doe',
      number: 1,
      choice: 'female',
    }
  }
}
</script>

<style>
html, body, #root {
  width: 100%;
  margin: 0px;
  padding: 0px;
  min-height: 100%;
}
body {
  font: 14px "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
}
h1 {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
  width: 50%;
}
h3 {
  font-size: 16px;
  display: block;
  background: #84ccff;
  padding: 10px 15px;
  border-radius: 3px 3px 0 0;
  font-weight: 400;
  margin: 0;
}
p {
  margin: 0;
}
.container {
  box-sizing: border-box;
  background: #fff;
  max-width: 940px;
  padding: 20px;
  width: 100%;
  clear: both;
}
.header {
  margin: 15px 10px 10px 10px;
  display: flex;
  flex-direction: row;
}
.picker {
  width: 50%;
  float: right;
  text-align: right;
}
.picker select {
  margin: 0;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 10px;
}
.column div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  padding: 15px;
  background: #f4f5f7;
  border-radius: 0 0 3px 3px;
  word-break: break-word;
}
input, select {
  padding:6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #fff;
  margin-bottom: 10px;
}

@media only screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}

</style>
