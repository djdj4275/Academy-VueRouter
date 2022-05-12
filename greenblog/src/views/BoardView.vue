<template>
    <div class="board">
        <h1>게시글 목록입니다</h1>
        <router-link to="/board/1">1</router-link> | <!-- router-link to를 하면 눌렀을때 그곳으로 이동 -->
        <router-link to="/board/2">2</router-link> |
        <router-link to="/board/3">3</router-link> |
        <router-link to="/board/4">4</router-link> |

        <br>
        <a v-for="n in 10" :key="n">
            <router-link :to="`/board/${n}`">{{n}}</router-link> |
        </a>
        <br>
        <a v-for="n in num" :key="n">
            <router-link :to="`/board/${n}`">{{n}}</router-link> |
        </a>
        <!-- 위에 작성한 router-link의 컴포넌트가 보이게 만듬 -->
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'BoardView',
    data : ()=> ({
        num : 10,
    })
}
</script>