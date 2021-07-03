const nomes = ['Helena','Miguel','Alice','Arthur','Laura','Heitor','Manuela','Bernardo','Valentina','Davi','Sophia','Théo','Isabella','Lorenzo','Heloísa','Gabriel','Luiza','Pedro','Júlia','Benjamin','Lorena','Matheus','Lívia','Lucas','Maria Luiza','Nicolas','Cecília','Joaquim','Eloá','Samuel','Giovanna','Henrique','Maria Clara','Rafael','Maria Eduarda','Guilherme','Mariana','Enzo','Lara','Murilo','Beatriz','Benício','Antonella','Gustavo','Maria Júlia','Isaac','Emanuelly','João Miguel','Isadora','Lucca','Ana Clara','Enzo Gabriel','Melissa','Pedro Henrique','Ana Luiza','Felipe','Ana Júlia','João Pedro','Esther','Pietro','Lavínia','Anthony','Maitê','Daniel','Maria Cecília','Bryan','Maria Alice','Davi','Lucca','Sarah','Leonardo','Elisa','Vicente','Liz','Eduardo','Yasmin','Gael','Isabelly','Antônio','Alícia','Vitor','Clara','Noah','Isis','Caio','Rebeca','João','Rafaela','Emanuel','Marina','Cauã','Ana Laura','João Lucas','Maria Helena','Calebe','Agatha','Enrico','Gabriela','Vinícius','Catarina','Bento'];
const sobrenomes = ['Almeida','Alves','Andrade','Barbosa','Barros','Batista','Borges','Campos','Cardoso','Carvalho','Castro','Costa','Dias','Duarte','Freitas','Fernandes','Ferreira','Garcia','Gomes','Gonçalves','Lima','Lopes','Machado','Marques','Martins','Medeiros','Melo','Mendes','Miranda','Monteiro','Moraes'];
const petnomes = ['Astor','Ayla','Bel','Beto','Bidu','Bigode','Bili','Bob','Bolinha','Cacau','Chiara','Chico','Cindy','Cookie','Doug','Eddie','Emy','Estopa','Faísca','Floco','Flor','Foca','Fred','Fuzzy','Gigi','Greg','Guga','Guto','Iuri','Jade','Jimy','Joe','Jolie','Jonas','Juju','Kate','Kiki','Lady','Laila','Lara','Lassie','Lea','Leni','Léo','Lia','Lica','Lila','Lilica','Lobo','Lola','Mégui','Mimi','Nala','Neo','Nina','Nino','Olivia','Oscar','Pantufa','Pati','Peper','Pepi','Pérola','Pierre','Pietro','Pipa','Pitucha','Rico','Rob','Romeu','Rosita','Rubi','Safira','Salsa','Sissi','Sury','Susi','Teka','Tião','Tica','Tom','Tony','Totó','Tuca','Tuti','Valente','Vavá','Vini','Vivi','Wally','Will','Wolf','Xaila','Xandi','Xita','Xodó','Yago','Yani','Yumi'];
const petcores = ['caramelo', 'preto', 'malhado', 'pardo', 'pintado', 'cinza', 'bege', 'branco', 'marrom', 'dourado', 'albino','rajado'];
const dograca = ['Viralata','Affenpinscher','Afghan Hound','Airedale Terrier','Akita','Akita Americano','American Pit Bull Terrier','American Staffordshire Terrier','Australian Shepherd','Basenji','Basset Fulvo da Bretanha','Basset Hound','Beagle','Beagle-Harrier','Bearded Collie','Bedlington Terrier','Bernese Mountain Dog','Bichon Bolonhês','Bichon Frisé','Bichon Havanês','Boerboel','Boiadeiro de Entlebuch','Border Collie','Border Terrier','Borzoi','Boston Terrier','Bouvier de Flandres','Boxer','Braco Alemão Pelo Curto','Braco Alemão Pelo Duro','Braco Italiano','Buldogue Americano','Buldogue Francês','Buldogue Inglês','Bull Terrier','Bullmastiff','Cairn Terrier','Cane Corso','Cão de Crista Chinês','Cão de Santo Humberto','Cão D’água Espanhol','Cão D’água Português','Cão Lobo Checoslovaco','Cão Pelado Mexicano','Cão Pelado Peruano','Cavalier King Charles Spaniel','Cesky Terrier','Chesapeake Bay Retriever','Chihuahua','Chin','Chow-chow Pelo Curto','Chow-chow Pelo Longo','Cirneco do Etna','Clumber Spaniel','Cocker Spaniel Americano','Cocker Spaniel Inglês','Collie pelo longo','Coton de Tulear','Dachshund Teckel - Pelo Curto','Dálmata','Dandie Dinmont Terrier','Dobermann','Dogo Argentino','Dogo Canário','Dogue Alemão','Dogue de Bordeaux','Elkhound Norueguês Cinza','Fila Brasileiro','Flat-Coated Retriever','Fox Terrier Pelo Duro ','Fox Terrier Pelo Liso','Foxhound Inglês','Galgo Espanhol','Golden Retriever','Grande Münsterländer','Greyhound','Griffon Belga','Griffon de Bruxelas','Husky Siberiano','Ibizan Hound','Irish Soft Coated Wheaten Terrier','Irish Wolfhound','Jack Russell Terrier','Kerry Blue Terrier','Komondor','Kuvasz','Labrador Retriever','Lagotto Romagnolo','Lakeland Terrier','Leonberger','Lhasa Apso','Malamute do Alasca','Maltês','Mastiff','Mastim Espanhol','Mastino Napoletano','Mudi','Nordic Spitz','Norfolk Terrier','Norwich Terrier','Old English Sheepdog','Papillon','Parson Russell Terrier','Pastor Alemão','Pastor Beauceron','Pastor Belga','Pastor Bergamasco','Pastor Branco Suíço','Pastor Briard','Pastor da Ásia Central','Pastor de Shetland','Pastor dos Pirineus','Pastor Maremano Abruzês','Pastor Polonês','Pastor Polonês da Planície','Pequeno Basset Griffon da Vendéia','Pequeno Cão Leão','Pequeno Lebrel Italiano','Pequinês','Perdigueiro Português','Petit Brabançon','Pharaoh Hound','Pinscher Miniatura','Podengo Canário','Podengo Português','Pointer Inglês','Poodle Anão','Poodle Médio','Poodle Standard','Poodle Toy','Pug','Puli','Pumi','Rhodesian Ridgeback','Rottweiler','Saluki','Samoieda','São Bernardo','Schipperke','Schnauzer','Schnauzer Gigante','Schnauzer Miniatura','Scottish Terrier','Sealyham Terrier','Setter Gordon','Setter Inglês','Setter Irlandês Vermelho','Setter Irlandês Vermelho e Branco','Shar-pei','Shiba','Shih-Tzu','Silky Terrier Australiano','Skye Terrier','Smoushond Holandês','Spaniel Bretão','Spinone Italiano','Spitz Alemão Anão','Spitz Finlandês','Spitz Japonês Anão','Springer Spaniel Inglês','Stabyhoun','Staffordshire Bull Terrier','Terra Nova','Terrier Alemão de caça Jagd','Terrier Brasileiro','Terrier Irlandês de Glen do Imaal','Terrier Preto da Rússia','Tibetan Terrier','Tosa Inu','Vira-Latas','Vizsla','Volpino Italiano','Weimaraner','Welsh Corgi Cardigan','Welsh Corgi Pembroke','Welsh Springer Spaniel','Welsh Terrier','West Highland White Terrier','Whippet','Yorkshire Terrier'];
const catraca = ['Viralata','Abyssinian','American Bobtail Longhair','American Bobtail Shorthair','American Shorthair','American Wirehair','Arabian Mau','Asian Semi-long Hair','Australian Mist','Bengal','Bobtail Japonês','Bombaim','Brazilian Shorthair','British Longhair','Burmês','California Spangled Cat','Chausie','Cornish Rex','Curl Americano Pelo Curto','Curl Americano Pelo Longo','Cymric','Devon Rex','Domestic Long-Haired','Domestic Short-Haired','Don Sphynx','Egyptian Mau','European','Exotic Shorthair','German Rex','Havana','Himalaio','Khao Manee','Korat','Kurilian Bobtail Longhair','Kurilian Bobtail Shorthair','LaPerm Longhair','LaPerm Shorthair','Maine Coon','Manx','Mekong Bobtail','Munchkin Longhair','Munchkin Shorthair','Nebelung','Norwegian Forest Cat','Ocicat','Ojos Azules Shorthair','Oriental Longhair','Oriental Shorthair','Persa','Peterbald','Pixiebob Longhair','Pixiebob Shorthair','Ragamuffin','Ragdoll','Russo Azul','Sagrado da Birmânia','Savannah Cat','Scottish Fold','Selkirk Rex Longhair','Selkirk Rex Shorthair','Serengeti','Siamês','Siberian','Singapura','Snowshoe','Sokoke','Somali','Sphynx','Thai','Tonkinese Shorthair','Toyger','Turkish Angorá','Turkish Van','York Chocolate'];

console.log(`nomes: ${nomes.length}`);
console.log(`sobrenomes: ${sobrenomes.length}`);
console.log(`pet nomes: ${petnomes.length}`);
console.log(`pet cores: ${petcores.length}`);
console.log(`dog racas: ${dograca.length}`);
console.log(`cat racas: ${catraca.length}`);

function gerar(tipo){
	let divResultado = document.getElementById('resultado');
	divResultado.innerHTML='';

	let possibilidades;
	let tabela;

	switch(tipo){
		case 'HN':
			possibilidades=nomes;
			tabela='HumanoNome';
			break;
		case 'HS':
			possibilidades=sobrenomes;
			tabela='HumanoSobrenome';
			break;
		case 'PN':
			possibilidades=petnomes;
			tabela='PetNome';
			break;
		case 'PC':
			possibilidades=petcores;
			tabela='PetCor';
			break;
		case 'DR':
			possibilidades=dograca;
			tabela='DogRaca';
			break;
		case 'CR':
			possibilidades=catraca;
			tabela='CatRaca'
;			break;
	}

	divResultado.innerHTML+=`INSERT INTO ${tabela} VALUES`;
	for(let i=0;i<possibilidades.length;i++){
		if(i!=0){
			divResultado.innerHTML+=`,`;
		}
		divResultado.innerHTML+=`(0, "${possibilidades[i]}")`;
	}
	divResultado.innerHTML+=`;`;
}