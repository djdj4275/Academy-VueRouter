<template>
    <div class="page">
        <!-- 동적 라우터를 이용하여 $route의 값을 저장하고 가져올수있음 -->
        <!-- index.js의 route 안에서 PageComponent의 params인 page값을 들고옴 -->
        <p>{{$route.params.page}}페이지입니다</p>
        <!-- 주소의 값을 들고옴 -->
    </div>
</template>

<script>

export default {
    name: 'PageComponent',
}
</script>