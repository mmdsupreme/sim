<template>
  <div class="main">
    <menus></menus>
      <v-container class="card"  fluid grid-list-xl>
        <v-layout wrap align-center>
          <v-flex>
            <v-card
              class="elevation-4 mb-3">
                <h2>Информация из КХД</h2>
                <div class="fields-wrapper">
                  <v-flex xs6 v-for="ad in ads"
                          :key="ad.id" class="item">
                    <v-combobox
                      v-model="select"
                      :items="ad.item"
                      :label="ad.title"
                   ></v-combobox>
                  </v-flex>
                </div>
              <h2>Общая информация</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="inf in info"
                        :key="inf.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="inf.item"
                    :label="inf.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <h2>Двигатель/КПП/АКБ/Привод</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="en in engine"
                        :key="en.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="en.item"
                    :label="en.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <h2>Ключи сигнализация</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="KeyS in KeySign"
                        :key="KeyS.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="KeyS.item"
                    :label="KeyS.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <h2>Резина/Ремонтный комплект</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="rub in rubber"
                        :key="rub.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="rub.item"
                    :label="rub.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <h2>Комфорт в салоне</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="sal in salon"
                        :key="sal.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="sal.item"
                    :label="sal.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <h2>Комплектация</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="equip in equipment"
                        :key="equip.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="equip.item"
                    :label="equip.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <h2>Дополнительное оборудывание</h2>
              <div class="fields-wrapper">
                <v-flex xs6 v-for="add in additional"
                        :key="add.id" class="item">
                  <v-combobox
                    v-model="select"
                    :items="add.item"
                    :label="add.title"
                  ></v-combobox>
                </v-flex>
              </div>
              <v-btn  :to="'/photo'" class="btn-next" color="red">Продолжить</v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
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
      select: '',
      ads: [
        {
          id: '1',
          title: 'Марка',
          item: ['Kia', 'Mitsubishi', 'Toyota', 'Ford', 'Lada', 'Nissan', 'Audi'],
        },
        {
          id: '2',
          title: 'Год выпуска',
          item: ['2000', '2001', '2002', '2003', '2004', '2005', '2006'],
        },
        {
          id: '3',
          title: 'Цвет',
          item: ['Белый', 'Черный', 'Синий', 'Красный', 'Желтый', 'Голубой', 'Зеденый'],
        },
        {
          id: '4',
          title: 'Модель',
          item: [],
        },
        {
          id: '5',
          title: 'Л/С',
          item: [],
        },
        {
          id: '6',
          title: 'Гос.номер',
          item: [],
        },
        {
          id: '6',
          title: 'VIN:',
          item: [],
        },
      ],
      info: [
        {
          id: '1',
          title: 'ПТС',
          item: ['1', '2', '3', '4', '4+'],
        },
        {
          id: '2',
          title: 'Тип кузова',
          item: ['Седан', 'Хэтчбек', 'Универсал', 'Купе', 'Кабриолет'],
        },
        {
          id: '3',
          title: 'Пробег',
          item: [],
        },
      ],
      engine: [
        {
          id: '1',
          title: 'Тип двигателя',
          item: ['Бензиновый', 'Дизельный', 'Электро'],
        },
        {
          id: '2',
          title: 'Тип КПП',
          item: ['Автомат', 'Механика'],
        },
        {
          id: '3',
          title: 'АКБ',
          item: ['есть', 'нет'],
        },
        {
          id: '4',
          title: 'Объем двигателя(куб. см.)',
          item: [],
        },
        {
          id: '5',
          title: 'Тип привода',
          item: ['Передний', 'Задний'],
        },
      ],
      KeySign: [
        {
          id: '1',
          // eslint-disable-next-line
          title: 'Безключевой доступ \ Start Engine',
          item: ['Да', 'Нет'],
        },
        {
          id: '2',
          title: 'Количество ключей',
          item: ['1', '2', '3', '4', '5'],
        },
        {
          id: '3',
          title: 'Количество брелоков от сигнализации',
          item: ['1', '2', '3', '4', '5'],
        },
        {
          id: '4',
          title: 'А/Сигнализация',
          item: ['Есть', 'Нет'],
        },
        {
          id: '5',
          title: 'Название А/Сигнализации',
          item: [],
        },
      ],
      rubber: [
        {
          id: '1',
          title: 'Марка/Модель резины',
          item: [],
        },
        {
          id: '2',
          title: 'Запасное колесо',
          item: ['Есть', 'Нет'],
        },
        {
          id: '3',
          title: 'Ремкомплект',
          item: ['Балоновый ключ'],
        },
        {
          id: '4',
          title: 'Запасное колесо:комментарий',
          item: [],
        },
      ],
      salon: [
        {
          id: '1',
          title: 'Климат-Контроль',
          item: ['Есть', 'Нет'],
        },
        {
          id: '2',
          title: 'Дополнительный ряд сидений',
          item: ['Да', 'Нет'],
        },
        {
          id: '3',
          title: 'Электрорегулировка водительского сиденья',
          item: ['Да', 'Нет'],
        },
        {
          id: '4',
          title: 'Обивка сидений',
          item: ['Комбинированные'],
        },
        {
          id: '5',
          title: 'А/Магнитола',
          item: ['Есть', 'Нет'],
        },
        {
          id: '6',
          title: 'А/Магнитола:комментарий',
          item: [],
        },
        {
          id: '7',
          title: 'Кондиционер',
          item: ['Есть', 'Нет'],
        },
        {
          id: '8',
          title: 'Электрорегулировка пассажирского сиденья',
          item: ['Есть', 'Нет'],
        },
      ],
      equipment: [
        {
          id: '1',
          title: 'Фары',
          item: ['Галоген', 'Ксенон', 'Светодиод'],
        },
        {
          id: '2',
          title: 'Камера обзора (штатная)',
          item: ['Круговой обзор'],
        },
        {
          id: '3',
          title: 'Литые диски',
          item: ['Есть', 'Нет'],
        },
        {
          id: '4',
          title: 'Колпаки колес',
          item: ['Есть', 'Нет'],
        },
        {
          id: '5',
          title: 'Противотуманные фары',
          item: ['Есть', 'Нет'],
        },
        {
          id: '6',
          title: 'Защита бампера переднаяя (дуга)',
          item: ['Есть', 'Нет'],
        },
        {
          id: '7',
          title: 'Ступень правая',
          item: ['Есть', 'Нет'],
        },
        {
          id: '8',
          title: 'Газовое оборудывание',
          item: ['Есть', 'Нет'],
        },
        {
          id: '9',
          title: 'Люк',
          item: ['Есть', 'Нет'],
        },
        {
          id: '10',
          title: 'Крыша с панорманым остекленением',
          item: ['Есть', 'Нет'],
        },
        {
          id: '11',
          title: 'Коврики салона',
          item: ['Есть', 'Нет'],
        },
        {
          id: 'Парк контроль',
          title: 'Газов',
          item: ['Передний', 'Задний'],
        },
        {
          id: '13',
          title: 'Ходовые огни',
          item: ['Галоген', 'Ксенон', 'Светодиод'],
        },
        {
          id: '14',
          title: 'Литые диски:комментарий',
          item: [],
        },
        {
          id: '15',
          title: 'Колпаки колес:комментарий',
          item: ['Галоген', 'Ксенон', 'Светодиод'],
        },
        {
          id: '16',
          title: 'Тягово-сцепное устройство(фаркоп)',
          item: ['Есть', 'Нет'],
        },
        {
          id: '17',
          title: 'Защита бампера задняя (дуга)',
          item: ['Есть', 'Нет'],
        },
        {
          id: '18',
          title: 'Ступень левая',
          item: ['Есть', 'Нет'],
        },
        {
          id: '19',
          title: 'Коврики багажника',
          item: ['Есть', 'Нет'],
        },
        {
          id: '20',
          title: 'Система контроля мертвых зон',
          item: ['Есть', 'Нет'],
        },
        {
          id: '21',
          title: 'Рейлинги на крыше',
          item: ['Есть', 'Нет'],
        },
        {
          id: '22',
          title: 'Рейлинги на крыше (комментарий)',
          item: [],
        },


      ],
      additional: [
        {
          id: '1',
          title: 'Блокиратор КПП',
          item: ['Есть', 'Нет'],
        },
        {
          id: '2',
          title: 'Бокс на крышу',
          item: ['Да', 'Нет'],
        },
        {
          id: '3',
          title: 'Дефлекторы окон (ветровики)',
          item: ['Есть', 'Нет'],
        },
        {
          id: '4',
          title: 'Защита картера',
          item: ['Есть', 'Нет'],
        },
        {
          id: '5',
          title: 'Кунг',
          item: ['Есть', 'Нет'],
        },
        {
          id: '6',
          title: 'Парковочная система задняя',
          item: ['Есть', 'Нет'],
        },
        {
          id: '7',
          title: 'Предпусковой обогреватель',
          item: ['Есть', 'Нет'],
        },
        {
          id: '8',
          title: 'Усиленный задний бампер',
          item: ['Да', 'Нет'],
        },
        {
          id: '9',
          title: 'Усиленный передний бампер',
          item: ['Да', 'Нет'],
        },
        {
          id: '10',
          title: 'Блокиратор рулевого вала',
          item: ['Есть', 'Нет'],
        },
        {
          id: '12',
          title: 'Брызговики',
          item: ['Есть', 'Нет'],
        },
        {
          id: '13',
          title: 'Дефлектор капота',
          item: ['Есть', 'Нет'],
        },
        {
          id: '14',
          title: 'Дополнительные противотуманные фары',
          item: ['Есть', 'Нет'],
        },
        {
          id: '15',
          title: 'Защита порогов',
          item: ['Есть', 'Нет'],
        },
        {
          id: '16',
          title: 'Лебедка',
          item: ['Есть', 'Нет'],
        },
        {
          id: '17',
          title: 'Парковочная система передняя',
          item: ['Есть', 'Нет'],
        },
        {
          id: '18',
          title: 'Спойлер',
          item: ['Есть', 'Нет'],
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
  width: 900px;
  color: black;
}
  .elevation-4.mb-3{
    background: white;
    padding: 40px;
    margin: 0 5px;
  }
  .fields-wrapper {
    display: flex;
    flex-wrap: wrap;
    color: grey;
  }
  .fields-wrapper .item {
    width: 50%;
  }
  .btn-next{
    color: white;
  }
</style>
