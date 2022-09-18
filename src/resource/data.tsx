import tomato from "../resource/vegetable/tomato.jpg";
import tomato2 from "../resource/vegetable/tomato2.jpeg";
import tomato3 from "../resource/vegetable/tomato3.jpg";
import tomato4 from "../resource/vegetable/tomato2.jpeg";
import daikon from "../resource/vegetable/daikon.jpeg";
import gobou from "../resource/vegetable/gobou.jpeg";
import ninjin from "../resource/vegetable/ninjin.jpeg";
import papurika from "../resource/vegetable/papurika.jpg";
import piman from "../resource/vegetable/piman.jpg";
import ninjin2 from "../resource/vegetable/ninjin2.jpg";
import komatsuna from "../resource/vegetable/komatsuna.jpg";

//People
import ojisan from "../resource/people/ojisan.png";
import natsume from "../resource/people/natume.jpeg";
import hideyo from "../resource/people/nideyo.jpg";
import people from "../resource/people/people.jpg";
//Creater
import nobunaga from "../resource/people/nobunaga.jpg";
import ieyasu from "../resource/people/ieyasu.jpg";
import hideyoshi from "../resource/people/hideyosi.jpg";

export type DateSet = {
    id: number;
    category: string;
    image: string;
    userName: string;
    userImage: string;
    createrName: string;
    createrImage: string;
    createrProfile: string;
    date: string;
    contexts: string;
    overview: string;
    Buy: string;
    Nice: number;
};

export const Data: Array<DateSet> = [
    { id: 1, category: "トマト", image: tomato, userName: "taketo", userImage: ojisan, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "クックパッドマートで購入しました！こちらのページで情報が見れます。https://www.tabechoku.com/products/164054", Nice: 180 },
    {
        id: 2, category: "だいこん", image: daikon, userName: "shida", userImage: ojisan, createrName: "家康", createrImage: ieyasu, createrProfile: "果菜類の栽培が得意です。先祖代々受け継いできた栽培手法、最新鋭の設備で栽培しています。", date: "2022.03.21", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 12
    },
    { id: 3, category: "ごぼう", image: gobou, userName: "kuroki", userImage: ojisan, createrName: "家康", createrImage: ieyasu, createrProfile: "果菜類の栽培が得意です。先祖代々受け継いできた栽培手法、最新鋭の設備で栽培しています。", date: "2022.04.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 10 },
    { id: 4, category: "にんじん", image: ninjin, userName: "taketo", userImage: ojisan, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2022.09.16", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 0 },
    { id: 5, category: "パプリカ", image: papurika, userName: "野口", userImage: hideyo, createrName: "豊富", createrImage: hideyoshi, createrProfile: "農家界の天下統一を目指しています。そのために私は、見た目、味、無農薬全てにこだわりを持って栽培しています。", date: "2022.07.11", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 0 },
    { id: 6, category: "ピーマン", image: piman, userName: "夏目漱石", userImage: natsume, createrName: "豊富", createrImage: hideyoshi, createrProfile: "農家界の天下統一を目指しています。そのために私は、見た目、味、無農薬全てにこだわりを持って栽培しています。", date: "2022.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 0 },
    { id: 7, category: "トマト", image: tomato, userName: "大崎", userImage: ojisan, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 8 },
    { id: 8, category: "トマト", image: tomato2, userName: "田中", userImage: people, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 9 },
    { id: 9, category: "トマト", image: tomato3, userName: "佐藤", userImage: people, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 80 },
    { id: 10, category: "トマト", image: tomato4, userName: "鈴木", userImage: people, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 30 },
    { id: 12, category: "にんじん", image: ninjin2, userName: "鈴木", userImage: people, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 30 },
    { id: 13, category: "こまつな", image: komatsuna, userName: "鈴木", userImage: people, createrName: "Oda a.k.a. Nobunaga", createrImage: nobunaga, createrProfile: "〇〇県〇〇市で農家を営んでいます。\n私の作る作物は全て無農薬で栽培しているところがポイントです。これによって、野菜本来の味を楽しむことができると思っています。また、徹底した温度、水やり量を管理しており、一般的なトマトよりも糖度がxx高いです。", date: "2020.09.01", contexts: "〇〇県〇〇さんが作られたトマトです。\nトマトが嫌いな友人に\n\n「これを食べてみてくれ！このトマトでも無理ならもう一生トマトは諦めてもいい！」\nと言って、誕生日プレゼントとして贈られていただきました。\n\nそしたらなんと美味しかったそうです！\n\n本人に今までのトマトと何が違ったのか効いてみたところ「甘い！今までトマトの苦味が苦手だったが、このトマトなら平気だった」と話していました。\nぜひ身近にトマト嫌いの人がいる方にはおすすめです。\n", overview: "〇〇県〇〇さんが作られたトマトです。", Buy: "xxxxxのxxxxで購入できました", Nice: 30 },
]
