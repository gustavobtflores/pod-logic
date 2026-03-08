// Mock data for the Pod-logic podcast app
// This replaces the external API that is no longer available

export const mockPodcastDetails = {
	name: "Pod-logic",
	description: "Bem-vindo ao Pod-logic, o podcast onde exploramos os temas mais fascinantes da tecnologia, ciência e inovação. Em cada episódio, convidamos especialistas para discutir desde inteligência artificial até as últimas descobertas científicas. Prepare-se para expandir seus horizontes e mergulhar em conversas que desafiam o pensamento convencional. Sintonize-se e faça parte desta jornada de conhecimento e descoberta!",
	cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=400&fit=crop",
	episodes: [
		{
			id: 1,
			name: "O Futuro da Inteligência Artificial",
			description: "Neste episódio, mergulhamos no mundo da IA e discutimos como ela está transformando nossas vidas. Desde assistentes virtuais até carros autônomos, exploramos as possibilidades e desafios desta tecnologia revolucionária. Conversamos sobre ética, regulações e o impacto no mercado de trabalho. Será que a IA vai substituir os humanos ou nos tornar mais produtivos? Descubra nesta conversa fascinante com especialistas da área.",
			episodeNumber: "1",
			duration: 3250,
			cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
			participants: ["Carlos Mendes", "Ana Silva", "Pedro Costa"],
			audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
		},
		{
			id: 2,
			name: "Blockchain Além das Criptomoedas",
			description: "Blockchain é muito mais que Bitcoin e Ethereum. Neste episódio, exploramos as aplicações práticas desta tecnologia em setores como saúde, logística, votação digital e cadeia de suprimentos. Nossos convidados explicam como o blockchain está criando transparência e segurança em transações ao redor do mundo. Descubra por que grandes empresas estão investindo bilhões nesta tecnologia e como ela pode mudar a forma como confiamos uns nos outros.",
			episodeNumber: "2",
			duration: 2840,
			cover: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop",
			participants: ["Mariana Santos", "João Oliveira"],
			audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
		},
		{
			id: 3,
			name: "A Revolução da Computação Quântica",
			description: "A computação quântica promete revolucionar a forma como processamos informação. Neste episódio, desmistificamos conceitos complexos como qubits, superposição e emaranhamento. Nossos especialistas explicam como computadores quânticos podem resolver problemas impossíveis para computadores clássicos, desde descobrir novos medicamentos até otimizar cadeias logísticas globais. Será que estamos prestes a ver uma nova era da computação?",
			episodeNumber: "3",
			duration: 3120,
			cover: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop",
			participants: ["Dr. Ricardo Lima", "Fernanda Torres", "Luiz Henrique"],
			audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
		},
		{
			id: 4,
			name: "Sustentabilidade e Tecnologia Verde",
			description: "Como a tecnologia pode ajudar a salvar o planeta? Neste episódio, discutimos inovações em energia renovável, agricultura sustentável, economia circular e smart cities. Nossos convidados compartilham projetos inspiradores que estão fazendo a diferença no combate às mudanças climáticas. De painéis solares mais eficientes até algoritmos que reduzem desperdício de alimentos, descubra como a inovação tecnológica está sendo nossa aliada na busca por um futuro sustentável.",
			episodeNumber: "4",
			duration: 2950,
			cover: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=400&fit=crop",
			participants: ["Amanda Green", "Roberto Natureza"],
			audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
		},
		{
			id: 5,
			name: "O Cérebro Humano: Fronteiras da Neurociência",
			description: "O cérebro humano é o órgão mais complexo do universo conhecido. Neste episódio, neurocientistas discutem as últimas descobertas sobre neuroplasticidade, memória, sono e consciência. Exploramos tecnologias emergentes como interfaces cérebro-computador, neurofeedback e tratamentos inovadores para doenças neurológicas. Como podemos potencializar nossa capacidade cognitiva? A mente humana ainda guarda segredos que estamos apenas começando a desvendar.",
			episodeNumber: "5",
			duration: 3580,
			cover: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
			participants: ["Dra. Helena Brain", "Prof. Miguel Neuron", "Carla Sinapse"],
			audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
		},
		{
			id: 6,
			name: "Realidade Virtual e o Metaverso",
			description: "Realidade Virtual, Aumentada e Mista estão transformando a forma como interagimos com o mundo digital. Neste episódio, exploramos o conceito de metaverso e suas aplicações além dos jogos: educação imersiva, treinamento profissional, turismo virtual e terapia. Nossos especialistas discutem os desafios técnicos, questões de privacidade e o futuro da presença digital. Estamos caminhando para um mundo onde fronteiras físicas e digitais se confundem?",
			episodeNumber: "6",
			duration: 3015,
			cover: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop",
			participants: ["Bruno Virtual", "Diana Reality"],
			audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
		}
	]
};

// Helper function to get episode by ID
export const getMockEpisodeById = (id) => {
	const episodeId = parseInt(id, 10);
	const episode = mockPodcastDetails.episodes.find(ep => ep.id === episodeId);
	
	if (!episode) {
		return null;
	}
	
	return {
		id: episode.id.toString(),
		name: episode.name,
		description: episode.description,
		participants: episode.participants,
		episodeNumber: episode.episodeNumber,
		cover: episode.cover,
		audio: episode.audio
	};
};

export default mockPodcastDetails;
