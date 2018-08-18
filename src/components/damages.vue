<template>
  <div class="main">
  <menus></menus>
    <v-card
      class="elevation-4 mb-3">
      <div class="item-container">
      <v-card v-for="ad in ads"
              :key="ad.id" class="item">
        <h3>{{ad.number}}.{{ad.title}}</h3>
      </v-card>
      </div>
    </v-card>
    <div class="main-info">
      <v-layout class="info">
        <v-flex>
          <v-card class="info-car">
            <v-card-media
              class="white--text"
              height="80px"
              src="/src/assets/background.png">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">09. Колесо переднее левое</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div class="card-info">
                <span class="grey--text"><h2>Фотографии</h2></span><br>
                <img src="../assets/03.expert.inspection.photo.png"/>
                <img src="../assets/03.expert.inspection.photo.png"/>
                <img src="../assets/03.expert.inspection.photo.png"/>
                <span class="grey--text"><h2>Тип повреждения</h2></span><br>
                <div class="checkbox">
                <v-checkbox
                  color="grey"
                  :label="'Деформация'"
                  v-model="checkbox"
                ></v-checkbox>
                <v-checkbox
                  color="grey"
                  :label="'Разрыв'"
                  v-model="checkbox"
                ></v-checkbox>
                <v-checkbox
                  color="grey"
                  :label="'Задир'"
                  v-model="checkbox"
                ></v-checkbox>
                <v-checkbox
                  color="grey"
                  :label="'Отсутствие'"
                  v-model="checkbox"
                ></v-checkbox>
                  <v-checkbox
                color="grey"
                :label="'Сквозная коррозия'"
                v-model="checkbox"
              ></v-checkbox>
                  <v-checkbox
                color="grey"
                :label="'Разрез'"
                v-model="checkbox"
              ></v-checkbox>
                </div>
                <span class="grey--text"><h2>Комментарий</h2></span><br>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="name"
                    label="Введите текст комментария"
                    required
                  ></v-text-field>
                </v-form>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn
                :to="'/infocar'"
                class="btn-see"
                color="red">Далее</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
import Menus from '../menus.vue';

export default {
  components: {
    Menus,
  },
  data() {
    return {
      ads: [
        {
          id: '1',
          title: 'Передний бампер',
          number: '01',
        },
        {
          id: '2',
          title: 'Капот',
          number: '02',
        },
        {
          id: '3',
          title: 'Левая передняя фара',
          number: '03',
        },
        {
          id: '4',
          title: 'Ветровое стекло',
          number: '04',
        },
        {
          id: '5',
          title: 'Колесо переднее левое',
          number: '06',
        }, {
          id: '7',
          title: 'Стекло левой передней двери',
          number: '07',
        },
        {
          id: '8',
          title: 'Левое зеркало заднего вида',
          number: '08',
        },
        {
          id: '9',
          title: 'Левая задняя дверь',
          number: '09',
        },
        {
          id: '10',
          title: 'Левая задняя стойка',
          number: '10',
        },
        {
          id: '11',
          title: 'Стекло левой задней двери',
          number: '11',
        },
        {
          id: '12',
          title: 'Решетка радиатора',
          number: '12',
        },
        {
          id: '13',
          title: 'Правая передняя фара',
          number: '13',
        }, {
          id: '14',
          title: 'Противотуманные фары',
          number: '14',
        },
      ],
    };
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
  .item{
    display: flex;
    width:50%;
    padding: 20px;
    margin: 25px;
    cursor: pointer;
  }
  .item-container{
    display: flex;
    flex-wrap: wrap;
  }
  .item:hover{
    background:#DA2337;
    color: white;
  }
  .info-car{
    background: white;
  }
  .btn-see{
    color: white;
  }
  .main-info{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .info{
    display: flex;
    justify-content: flex-end;
  }
  img{
    margin: 10px;
  }
  .checkbox {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 20px;
  }
</style>
