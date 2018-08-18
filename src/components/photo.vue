<template>
  <div class="main">
  <menus></menus>
    <v-card
      class="elevation-4 mb-3">
      <h2>Общий вид</h2>
      <div class="item-container">
        <div class="item">
          <img src="../assets/03.expert.inspection.photo.png"/>
          <h3>Спереди слева</h3>
        </div>
        <div class="item">
          <img src="../assets/03.expert.inspection.photo.png"/>
          <h3>Сзади слева</h3>
        </div>
        <div class="item">
          <img src="../assets/03.expert.inspection.photo.png"/>
          <h3>Круговое видео</h3>
        </div>
        <div class="item">
          <img src="../assets/03.expert.inspection.photo.png"/>
          <h3>Спереди справа</h3>
        </div>
        <div class="item">
          <img src="../assets/03.expert.inspection.photo.png"/>
          <h3>Сзади справа</h3>
        </div>
      </div>
      <h2>Подробно</h2>
      <div class="item-container">
      <div class="item">
        <img src="../assets/03.expert.inspection.photo.png"/>
        <h3>Фото VIN кода</h3>
      </div>
        <div class="item">
          <img src="../assets/03.expert.inspection.photo.png"/>
          <h3>Фото показаний одометра <br>
            при включенном<br>
            зажигании (при наличии<br>
            ключей от ТС)</h3>
        </div>
          <div class="item">
            <img src="../assets/03.expert.inspection.photo.png"/>
            <h3>Фото задней части салона</h3>
          </div>
            <div class="item">
              <img src="../assets/03.expert.inspection.photo.png"/>
              <h3>Фото передней части <br> салона</h3>
            </div>
              <div class="item">
                <img src="../assets/03.expert.inspection.photo.png"/>
                <h3>Фото шин и дисков</h3>
              </div>
                <div class="item">
                  <img src="../assets/03.expert.inspection.photo.png"/>
                  <h3>Фото подкапотного <br> пространства</h3>
                </div>
      </div>
      <v-btn  :to="'/damages'" class="btn-next" color="red">Продолжить</v-btn>
    </v-card>
  </div>
</template>
<script>
import Menus from '../menus.vue';

export default {
  components: {
    Menus,
  },
};
</script>
<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    width: 902px;
    color: black;
  }
  .elevation-4.mb-3{
    background: white;
    padding: 40px;
    margin:25px 30px;
  }
  .btn-next{
    color: white;
  }
  img{
    width: 150px;
    height: 100px;
    margin: 20px;

  }
  .item-container{
    display: flex;
    flex-wrap: wrap;
  }
  .item{
    font-size: 12px;
    display: flex;
    width: 50%;
    border-bottom: 3px solid whitesmoke;
  }
  h3{
    margin: 10px;
    position: relative;
    top: 30px;
  }
</style>
