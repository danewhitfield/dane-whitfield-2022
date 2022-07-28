import me from '../img/me.png';
import shrelNewsFe from '../img/shrelNewsFe.png';
import shrelNewsBe from '../img/shrelNewsBe.png';
import pushSkillFe from '../img/pushSkillFe.png';
import pushSkillBe from '../img/pushSkillBe.png';
import fitCheck from '../img/fitcheck-preview.png';
import shrelify from '../img/shrelify.png';
import codeify from '../img/code-ify.png';
import typeNsee from '../img/type-n-see.png';
import paradise from '../img/paradise.png';
// import customCoverLetter from '../img/cover-letter-customiser.png';
// import fitCheck from 'https://fitcheck.netlify.app/';

export let colors = ['rgb(47, 231, 190)', 'rgb(255, 130, 53)'];

export const info = {
	firstName: 'Dane',
	lastName: 'Whitfield',
	initials: 'DW',
	position: 'Junior Software Developer',
	selfPortrait: me,
	gradient: `-webkit-linear-gradient(135deg, ${colors})`,
	baseColor: colors[0],
	miniBio: [
		{
			emoji: '🌎',
			text: 'UK',
		},
		{
			emoji: '💼',
			text: 'Full Stack Developer',
		},
		{
			emoji: '📧',
			text: 'danewhitfield.dev@gmail.com',
		},
	],
	socials: [
		{
			link: 'https://instagram.com/danejoelwhitfield',
			icon: 'fa fa-instagram',
			label: 'instagram',
		},
		{
			link: 'https://github.com/danewhitfield',
			icon: 'fa fa-github',
			label: 'github',
		},
		{
			link: 'https://www.linkedin.com/in/danewhitfield/',
			icon: 'fa fa-linkedin',
			label: 'linkedin',
		},
		// {
		// 	link: 'https://dev.to/danewhitfield',
		// 	icon: 'fa fa-dev',
		// 	label: 'dev',
		// },
	],
	bio: "Hey! My name is Dane. I'm a Junior Software Developer currently working within the Renewable Energy space. I graduated my intensive bootcamp with #Northcoders early 2022. I enjoy developing things that provide value to others, and I believe tech will one day bring us all together. I also spend my spare time creating pointless programs and software, for no reason.",
	skills: {
		proficientWith: [
			'javascript',
			'typescript',
			'react',
			'threejs',
			'react-three-fiber',
			'drei',
			'git',
			'github',
			'azure devops',
			'express',
			'nodejs',
			'postgres',
			'TDD - Cypress | Jest',
			'netlify',
			'heroku',
			'blender',
			'adobe illustrator',
			'adobe photoshop',
			'fusion360',
		],
		exposedTo: ['mongodb', 'threejs', 'azure', 'nextjs', 'python'],
	},
	hobbies: [
		{
			label: 'coding',
			emoji: '👨‍💻',
		},
		{
			label: 'breaking stuff',
			emoji: '🔨',
		},
		{
			label: 'dirt biking',
			emoji: '🏍️',
		},
		{
			label: '3D animation, design & development',
			emoji: '🎨',
		},
	],
	portfolio: [
		{
			title: 'FitCheck✓',
			live: 'https://fitcheck.netlify.app/',
			source: 'https://github.com/danewhitfield/FitCheck',
			image: fitCheck,
		},
		{
			title: 'Shrelington News - Backend',
			live: 'https://shrelington-news.herokuapp.com/api',
			source: 'https://github.com/danewhitfield/be-nc-news-project',
			image: shrelNewsBe,
		},
		{
			title: 'Shrelington News - Frontend',
			live: 'https://shrelington-news.netlify.app',
			source: 'https://github.com/danewhitfield/shrelington-news-fe-v1',
			image: shrelNewsFe,
		},
		{
			title: '.push(skill) - Frontend',
			live: 'https://pushskill.netlify.app/',
			source: 'https://github.com/adampaulsackfield/pushskill-fe',
			image: pushSkillFe,
		},
		{
			title: '.push(skill) - Backend',
			live: 'https://pushskill.herokuapp.com/api/hc',
			source: 'https://github.com/adampaulsackfield/pushskill-be',
			image: pushSkillBe,
		},
		{
			title: 'code-ify',
			source: 'https://github.com/danewhitfield/code-ify',
			image: codeify,
		},
		{
			title: 'type-n-see',
			live: 'https://type-n-see.netlify.app/',
			source: 'https://github.com/danewhitfield/dictionary-app',
			image: typeNsee,
		},
		{
			title: 'Shrelify - NPM Package',
			live: 'https://socket.dev/npm/package/shrelify-ubuntu',
			source: 'https://github.com/danewhitfield/shrelify-npm-ubuntu',
			image: shrelify,
		},
		{
			title: 'Paradise - 3D Modelling',
			live: 'https://www.instagram.com/p/CWv_icvjGQF/?hl=en',
			image: paradise,
		},
	],
};
