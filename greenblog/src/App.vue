<template>
  <div id="app">
    <v-app>
      <!-- 버튼을 눌렀을때 아래 router-view의 화면을 바꿀 수 있도록 -->
      <v-app-bar app color="primary" dark>
        <v-toolbar-title @click="blog">blog</v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-if="login">
          <v-btn outlined @click="$router.push('/board')">글 목록</v-btn>
          <v-btn outlined @click="$router.push(`/user/${user}`)">{{user}}님의 정보</v-btn>
          <v-btn @click="logout">로그아웃</v-btn>
        </div>
        <v-btn v-else @click="$router.push('/login')">로그인</v-btn>
      </v-app-bar>
      
      <v-main>
        <!-- 라우터된 화면이 보이는 공간 -->
        <router-view @login-user="showLogin" />
      </v-main>
      
    </v-app>
  </div>
</template>

<script>
export default {
  name : "app",
  data : ()=> ({ // => 가 funtion을 뜻함 , {}안의 것들을 return하겠단 뜻
    login : false,
    user : "",
  }),
  methods : {
    showLogin : function(user) {
      this.user = user;
      this.login = true;
    },
    logout : function() {
      this.user = "";
      this.login = false;
      // 로그아웃시 처음화면으로 돌아가기위함
      this.$router.push('/');
    },
    blog : function() {
      this.login = false;
      this.$router.push('/');
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
