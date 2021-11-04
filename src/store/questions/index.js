const state = () => {[
	{
		question: `гадайте перший контейнер «Просвіта»-лаунж.
		А тепер скажіть, яку з цих світлин зробив Кароль Дівольд?`,
		points: 1,
		prompt: null,
		answers: [
			{
				isRight: true,
				isChecked: null,
				answer: 'Фото 1',
				imgUrl: '../assets/q1-img1.jpg',
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Фото 2',
				imgUrl: '../assets/q1-img2.jpg',
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Фото 3',
				imgUrl: '../assets/q1-img3.jpg',
			},
		]
	},
	{
		question: `Оберіть, в якому році назва «Україна» вперше з’явилася на європейській карті?`,
		points: 1,
		prompt: 'Пiдказка: це карта Радзивiлла.',
		answers: [
			{
				isRight: false,
				isChecked: null,
				answer: '1662 рік',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: '1650 рік',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: '1660 рік',
				imgUrl: null,
			},
			{
				isRight: true,
				isChecked: null,
				answer: '1613 рік',
				imgUrl: null,
			}
		]
	},
	{
		question: `Інтерактивні карти бачили? Бачили! Тоді відповідайте, як ніколи не називалося місто Дніпро?`,
		points: 1,
		prompt: null,
		answers: [
			{
				isRight: false,
				isChecked: null,
				answer: 'Новий Кодак',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Новоросійськ',
				imgUrl: null,
			},
			{
				isRight: true,
				isChecked: null,
				answer: 'Ворошиловград',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Катеринослав',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Дніпропетровськ',
				imgUrl: null,
			}
		]
	},
	{
		question: `Звертаємося до ваших рецепторів нюху: петрикор — це аромат чого?`,
		points: 1,
		prompt: null,
		answers: [
			{
				isRight: true,
				isChecked: null,
				answer: 'Землі після дощу',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Вологого піску',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Ранкової трави',
				imgUrl: null,
			},
			{
				isRight: false,
				isChecked: null,
				answer: 'Степу перед грозою',
				imgUrl: null,
			}
		]
	}
]}

const getters = {

}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
