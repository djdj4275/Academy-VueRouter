<template>
    <v-container>
        <v-card class="pa-10">
            <!-- 뷰티파이를 이용해서 입력창 디자인 -->
            <v-text-field ref="textField" label="아이디" v-model="user"></v-text-field>
            <v-text-field label="패스워드" type="password"></v-text-field>
            <v-card-actions>
                <!-- 로그인 버튼을 누르면 loginUser메소드 호출 -->
                <v-btn @click="loginUser"> 로그인 </v-btn>
                <!-- 취소버튼을 누르면 라우터의 push를 이용하여 '/'로 이동 -->
                <v-btn @click="$router.push('/')"> 취소 </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name : "LoginView",
    data : ()=>({
        user : "",
    }),
    mounted() {
        //this.$refs를 통해 어떤 함수와 속성이 있는지 확인하고 사용
        //현재 있는 ref중에서 text-field에 접근해 focus를 들고오겠다
        console.log(this.$refs); // ref=이름 을 달아준 모든 DOM출력
        console.log(this.$refs.textField); // 접근한 textField의 사용가능한 속성과 값들을 보여줌
        this.$refs.textField.onFocus();
        this.user = this.$refs.textField.autofocus = true;
    },
    methods : {
        // login-user 이벤트를 보내고, this.user 값을 전달
        loginUser : function() {
            this.$emit("login-user", this.user)
            // 컴포넌트를 '/' 로 바꿈
            this.$router.push('/');
        }
    }
}
</script>
