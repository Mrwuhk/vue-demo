<template>
  <div>
    <!-- /*
      <div v-bind:class="isRed?'red':'green'">1111</div>
      <div :class="{'red':true,'big':true}">多个样式</div>
      <ul>
        <li
          v-for="stu in stus"
          :key="stu.id"
          :class="{'red': stu.score === 'A','green': stu.score === 'B'}"
        >
          {{stu.name}}
        </li>
         <button v-on:click="isRed=!isRed">点我大变化</button>
        <button @click="changeStyle()">点我大变化</button>
          <button v-on:click="remove()">删除</button>

      </ul>
      */  -->
      <ul >
        <li v-for="(hero,index) in heros" :key="index" :class="{'A':'red','B':'green','SSS':'pink'}[hero.score]">
        {{hero.name}},{{hero.score}}
        <button @click="del(index)">删除</button>
        </li>
      </ul>
      英雄姓名
      <input type="text" name="" v-model="name"><br/>
      英雄成绩
      <input type="text" v-model="score">
      <button @click="addHero" >增加英雄</button>
      <button @click="redirect">跳转到connector页面</button>
  </div>
</template>

<script>

export default {
  /*
  data(){
    return{
        isRed:false,
        stus:[{name:'jack',score:'A'},{name:'yuheng',score:'B'}],
    }
  },
    methods:{
      changeStyle(){
        this.isRed=!this.isRed;
        this.stus.push({
          id: this.stus.length,
          name:'hengheng',
          score:'A',
        })

      },
      remove(){
        this.stus=this.stus.slice(0,this.stus.length-1);
      }
  }*/
  data(){
    return{
      name:'',
      score:'',
      heros:[{
        id:1,
        name:'奥利安纳',
        score:'A'
      },
      {
        id:2,
        name:'李白',
        score:'B'
      },{
        id:3,
        name:'yuheng',
        score:'SSS'
      },

      ]
    }
  },
  methods: {
    addHero(){
      this.heros.push({
       name:this.name,
       score:this.score,
      });
      this.name= "";
      this.score="";
    },
    del(index){
      this.heros.splice(index,1);
    },
    redirect(){
      this.$router.push('/connector');
    }
  },

}

</script>

<style>
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .big {
      font-size: 50px;
  }
  .pink {
    background-color: pink;
  }
  .black {
    background-color: black;
  }

</style>
