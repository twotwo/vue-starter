<template>
  <div class="skills">
    <h3>How to put skills on a software engineer resume?</h3>
    <ul>
      <li>整理自身技能表(见下表)</li>
      <li>检索目标JD中的Skills Keywords，与技能表进行匹配</li>
      <li>把匹配到的技能放入 Skills 和 Experience 中</li>
    </ul>
    <h3>Skill Table</h3>
    <table>
      <caption>Software Engineer Skills</caption>
      <tbody>
        <tr>
          <th>"Soft" Skills</th>
          <th>"Hard" Skills</th>
          <th>Languages</th>
        </tr>
        <tr>
          <td>Creativity</td>
          <td>Devops</td>
          <td>Java(10+Years)</td>
        </tr>
        <tr>
          <td>Leadership</td>
          <td>Software Architecture</td>
          <td>Python(10+Years)</td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>Data Structures</td>
          <td>SQL(10+Years)</td>
        </tr>
        <tr>
          <td>Critical Thinking</td>
          <td>Coding</td>
          <td>Bash Shell(10+ Years)</td>
        </tr>
        <tr>
          <td>Calm Demeanor</td>
          <td>Open Source Experience</td>
          <td>Java Script(2 Years)</td>
        </tr>
        <tr>
          <td>Collaboration</td>
          <td>Web Development</td>
          <td>Lua</td>
        </tr>
        <tr>
          <td>Inquisitiveness</td>
          <td>Debugging</td>
          <td>Scala</td>
        </tr>
        <tr>
          <td>Enthusiasm</td>
          <td>Problem Solving</td>
          <td>Groovy</td>
        </tr>
        <tr>
          <td>Positive Attitude</td>
          <td></td>
          <td>PHP</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "skills",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

table {
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
}

th {
  background-color: #f2f2f2;
  border: 1px solid black;
}

td {
  border: 1px solid black;
  text-align: left;
}

ul {
  // list-style-type: none;
  display: inline-block;
  text-align: left;
}

// li {
//   margin: 0 auto;
//   text-align: left;
// }

a {
  color: #42b983;
}
</style>
