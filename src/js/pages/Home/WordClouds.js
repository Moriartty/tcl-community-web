let S = require('components/WordCloud');
class WordClouds extends React.Component {
    componentDidMount () {
        var color = 'white';
        var sc = S.SvgCloud('#my_favorite_latin_words',
            { font_color: color });
        let index = 0;
        const texts = ['投资理财', '篮球', '旅游', '美食', '电影', '历史', '足球', '科技', '数码', '程序猿', '宅', '新闻', '学生',
            '互联网',
            '动漫'];
        let list = [];
        for (let i = 0; i < 16; i++) {
            list.push({
                text: texts[i],
                weight: Math.random() * 2
            });
        }
        sc.drawWordCloud(list);
        // setInterval(() => {
        //     list.push({
        //         text: 'moriarty' + index,
        //         weight: Math.random() * 5
        //     });
        //     sc.drawWordCloud(list);
        //     if (++index > 10) {
        //         index = 0;
        //         list = [];
        //     }
        // }, 1000);
    }
    render () {
        const { width, height } = this.props;
        return (
            <div id="my_favorite_latin_words" style={{ width: width, height: height, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
        );
    }
}
export default WordClouds;
