<template>
  <div class="main">
    <div class="main-card">
    <v-container class="card">
      <v-layout row>
        <v-flex>
          <form class="search">
            <input type="text" placeholder="Искать здесь...">
            <button class="btn-block" type="submit"></button>
          </form>
          <p class="text--secondary mb-3">Найдено </p>
          <v-card
            class="elevation-4 mb-3"
            v-for="ad in ads"
            :key="ad.id">
              <v-flex xs4>
              </v-flex>
            <div class="table">
              <v-flex xs8>
                <v-card-text>
                  <h2 class="text--primary">{{ad.title}}</h2>
                  <p></p>
                  <p><b>{{ad.number}} <br> {{ad.author}}</b></p>
                  <p class="status-info"><b>{{ad.num}}</b> <br/> {{ad.status}}</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-flex>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
<div class="main-info">
    <v-layout class="info">
      <v-flex>
        <v-card class="info-car">
          <v-card-media
            class="white--text"
            height="200px"
            src="/src/assets/background.png">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">KIA Cerato</span>
                  <p></p>
                  <p></p>
                  <p></p>
                  <div class="write">
                    <p>Год <br> <span class="grey--text">2017</span></p>
                  <p> Л/С <br> <span class="grey--text">150</span></p>
                  <p> Гос.Номер <br> <span class="grey--text">Е627ЕП 73</span></p>
                    <p> Цвет: <br><span class="grey--text">Баклажановый</span> </p>
                  <p> VIN: <br><span class="grey--text">KL6H6J7J3H475</span></p>
                    <v-btn class="btn-document" outline color="#1F2229">Документы</v-btn>
                    <v-btn class="btn-close" color="crimson" icon>x</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div class="card-info">
              <span class="grey--text">Заемщик</span><br>
              <span><p>Ушаков Владимир Ильиич<p></p></span><br>
              <span class="grey--text">Адрес регистрации</span><p>Ул.Ленина 43</p>
            </div>
            <div class="text-two">
              <span class="grey--text">Номер кредитного договора</span><br>
              <span><p>HB127848-21<p></p></span><br>
              <span class="grey--text">Статус кредитного договора</span><p>Изъятие остановлено</p>
            </div>
            <div class="text-three">
              <span class="grey--text">Сумма долга</span><br>
              <span><p>920 910.00<p></p></span><br>
              <span class="grey--text">Подстатус кредитного договора</span>
              <p>Изъятие остановлено</p>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              :to="'/infocar'"
              class="btn-see"
              color="red">Начать осмотр</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ads: [
        {
          id: '1',
          title: 'KIA Cerato',
          number: 'E627PK 89  |  VIN: KL6H6J7J3H475',
          author: 'Иванов Иван Сергеевич',
          num: 'HB127639022',
          status: 'Изъятие остановлено',
        },
        {
          id: '2',
          title: 'Mazda 3 turbo',
          number: 'E557OK 89  |  VIN: KLF16J7J3H475',
          author: 'Иванов Иван Сергеевич',
          num: 'HB127639022',
          status: 'Изъятие остановлено',
        },
        {
          id: '3',
          title: 'Renaut Logan',
          number: 'E627PK 116  |  VIN: KL629J7J3H475',
          author: 'Иванов Иван Сергеевич',
          num: 'HB127639022',
          status: 'Изъятие остановлено',
        },
        {
          id: '4',
          title: 'Peugeot ',
          number: 'O927PK 21  |  VIN: UJ616J7J3H475',
          author: 'Иванов Иван Сергеевич',
          num: 'HB127639022',
          status: 'Изъятие остановлено',
        },
        {
          id: '5',
          title: 'Citroen Berlingo',
          number: 'E127CK 73  |  VIN: TL6Y617J3H475',
          author: 'Иванов Иван Сергеевич',
          num: 'HB127639022',
          status: 'Изъятие остановлено',
        },
        {
          id: '6',
          title: 'Citroen Berlingo',
          number: 'C637PK 77  |  VIN: IL646J7J3H775',
          author: 'Иванов Иван Сергеевич',
          num: 'HB127639022',
          status: 'Изъятие остановлено',
        },
      ],
    };
  },

};
</script>
<style scoped>
  .main {
    display: flex;
  }
  .main-card{
    display: flex;
    justify-content: flex-start;

  }
  .main-info{
    display: flex;
    flex-direction: column;
    width: 100%;

  }
  .elevation-4.mb-3{
    width: 750px;
    height: 115px;
    background: white;
    cursor: pointer;

  }
  .elevation-4.mb-3:hover{
    background:#DA2337;
    color: white;
  }
  .btn-document{
    position: relative;
    left: 250px;
    top: 70px;
  }
  .btn-close{
    position: relative;
    left: 200px;
    top: -50px;
  }
  .search{
    width: 750px;
    height: 50px;
  }
  * {box-sizing: border-box;}
  form {
    position: relative;
    width: 500px;
    margin: 0 auto;
    background: white;
  }
  input, button {
    border: none;
    outline: none;
    background: transparent;

  }
  input {
    width: 100%;
    height: 42px;
    padding-left: 15px;
  }
  .btn-block{
    height: 42px;
    width: 42px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #DA2337;
  }

  .status-info{
    position: relative;
    left: 578px;
    top: -80px;
  }
  .info{
    display: flex;
    justify-content: flex-end;
  }
  .write{
    display:flex;
    justify-content: flex-start;
  }
  .write>p{
    padding: 10px;
    border-right: 2px solid grey;
  }
  .btn-see{
    color: white;
  }
  @media (max-width: 768px) {
    .main {
      flex-direction: column;
    }
    .elevation-4.mb-3{
      width: 100%;
      height: auto;
    }
    .status-info{
      position: initial;
    }
    .search{
      width: 100%;
      margin-bottom: 15px;
    }
  }
  .info-car{
    background: white;
  }
</style>
