let pr = window.devicePixelRatio || 1,
    w = window.innerWidth-5,
    h = window.innerHeight-5,
    q,
    r = 0,
    u = Math.PI*2,
    v = Math.cos,
    dist = 90;
class EvanYou extends React.PureComponent{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.canvas = document.getElementsByTagName('canvas')[0],
        this.ctx = canvas.getContext('2d');
        this.canvas.width = w*pr;
        this.canvas.height = h*pr;
        this.ctx.scale(pr,pr);
        this.ctx.globalAlpha = 0.6;
        document.onclick = this.rePaint;
        document.ontouchstart = this.rePaint;
        this.rePaint();
    }
    getY = (y) => {
        var result = y+(Math.random()*2-1.1)*dist;
        return (result>h||result<0)?this.getY(y):result;
    }
    rePaint = () => {
        this.ctx.clearRect(0,0,w,h);
        q=[{x:0,y:h*0.7+dist},{x:0,y:h*0.7-dist}];
        while(q[1].x<w+dist)
            this.draw(q[0],q[1]);
    }
    draw = (point1,point2) => {
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x,point1.y);
        this.ctx.lineTo(point2.x,point2.y);
        var k = point2.x+(Math.random()*2-0.25)*dist,
            n = this.getY(point2.y);
        this.ctx.lineTo(k,n);
        this.ctx.closePath();
        r-=u/-50;
        // ctx.fillStyle = '#000'
        this.ctx.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16);
        this.ctx.fill();
        q[0] = q[1];
        q[1] = {x:k,y:n}
    }
    render(){
        return (
            <React.Fragment>
                <canvas id="canvas" style={{position:'absolute'}}></canvas>
            </React.Fragment>
        )
    }
}
export default EvanYou;