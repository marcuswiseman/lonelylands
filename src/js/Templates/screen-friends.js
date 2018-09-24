Vue.component('screen-friends', {
	template: `
		<div v-if="user.character_creation == 0 && panel.active == 'friends'" class="o-layout">
			<button @click="panel.active = ''" class="c-button c-button--dingey u-margin-bottom-small">Go Back</button><br>
		</div>
	`,
	props: ['user', 'panel'],
	data() {
		return {}
	}
});