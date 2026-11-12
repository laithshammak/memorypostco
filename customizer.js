/* Memory Post try-it preview. Uses three.js (MIT License, Copyright 2010-2026 three.js authors), fabric.js (MIT License, Copyright 2008-2015 Printio) and qrcode-generator (MIT License, Copyright 2009 Kazuhiko Arase). */
var ap=0,uu=1,lp=2;var Vs=1,cp=2,qr=3,hs=0,on=1,mi=2,Gs=0,Zr=1,du=2,fu=3,pu=4,hp=5;var Hs=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,_p=202,xp=203,mu=204,gu=205,vp=206,yp=207,Sp=208,bp=209,Mp=210,wp=211,Tp=212,Cp=213,Ep=214,ol=0,al=1,ll=2,zr=3,cl=4,hl=5,ul=6,dl=7,Bl=0,Ap=1,Rp=2,Un=0,_u=1,xu=2,vu=3,yu=4,Su=5,bu=6,Mu=7;var wu=300,Ws=301,Jr=302,Kr=303,kl=304,fl=1e3,li=1001,pl=1002,ze=1003,Pp=1004;var ta=1005;var Ye=1006,zl=1007;var Zn=1008;var mn=1009,Tu=1010,Cu=1011,$r=1012,Vl=1013,Jn=1014,Kn=1015,$n=1016,Gl=1017,Hl=1018,Xs=1020,Eu=35902,Au=35899,Ru=1021,Pu=1022,Qn=1023,Li=1026,Ni=1027,Du=1028,Wl=1029,us=1030,Xl=1031;var jl=1033,ea=33776,na=33777,ia=33778,sa=33779,Yl=35840,ql=35841,Zl=35842,Jl=35843,Kl=36196,$l=37492,Ql=37496,tc=37488,ec=37489,ra=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,_c=36492,xc=36494,vc=36495,yc=36283,Sc=36284,oa=36285,bc=36286;var Fo=2300,ml=2301,sl=2302,su=2303,ru=2400,ou=2401,au=2402;var Dp=3200;var aa=0,Ip=1,Ui="",je="srgb",No="srgb-linear",Uo="linear",ce="srgb";var rl=7680;var Op=519,Lp=512,Fp=513,Np=514,Iu=515,Up=516,Bp=517,Ou=518,Lu=519,kp=35044;var Fu="300 es",Fn=2e3,Vr=2001;function e_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function n_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zp(){let s=Bo("canvas");return s.style.display="block",s}var Bf={},Gr=null;function Nu(...s){let t="THREE."+s.shift();Gr?Gr("log",t,...s):console.log(t,...s)}function Vp(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=Vp(s);let t="THREE."+s.shift();if(Gr)Gr("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=Vp(s);let t="THREE."+s.shift();if(Gr)Gr("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Lo(...s){let t=s.join(" ");t in Bf||(Bf[t]=!0,Bt(...s))}function Gp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Hp={[ol]:ol,[ll]:ul,[cl]:cl,[zr]:hl,[al]:al,[ul]:ll,[dl]:dl,[hl]:zr},hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nh=Math.PI/180,gl=180/Math.PI;function la(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function i_(s,t){return(s%t+t)%t}function Uh(s,t,e){return(1-e)*s+e*t}function Wp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uu(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function s_(s,t){if(t.constructor===Float32Array)return s;let e=Uu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function r_(s,t){if(t.constructor===Float32Array)return s;let e=Uu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var ee=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ui=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),R=Math.sin(y);g=Math.sin(g*y)/R,a=Math.sin(a*y)/R,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bh.copy(this).projectOnVector(t),this.sub(Bh)}reflect(t){return this.sub(Bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bh=new q,kf=new ui,zt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],y=i[1],R=i[4],T=i[7],E=i[2],A=i[5],_=i[8];return r[0]=o*x+a*y+l*E,r[3]=o*m+a*R+l*A,r[6]=o*g+a*T+l*_,r[1]=c*x+h*y+u*E,r[4]=c*m+h*R+u*A,r[7]=c*g+h*T+u*_,r[2]=d*x+f*y+p*E,r[5]=d*m+f*R+p*A,r[8]=d*g+f*T+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Lo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kh.makeScale(t,e)),this}rotate(t){return Lo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kh.makeRotation(-t)),this}translate(t,e){return Lo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kh=new zt,zf=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vf=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){let s={enabled:!0,workingColorSpace:No,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Uo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[No]:{primaries:t,whitePoint:n,transfer:Uo,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:zf,fromXYZ:Vf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),s}var te=o_();function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function kr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Cr,_l=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cr===void 0&&(Cr=Bo("canvas")),Cr.width=t.width,Cr.height=t.height;let i=Cr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a_=0,Hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=la(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zh(i[o].image)):r.push(zh(i[o]))}else r=zh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function zh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_l.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var l_=0,Vh=new q,rn=class s extends hi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=li,i=li,r=Ye,o=Zn,a=Qn,l=mn,c=s.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=la(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fl:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fl:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=wu;rn.DEFAULT_ANISOTROPY=1;var Se=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,T=(f+1)/2,E=(g+1)/2,A=(h+d)/4,_=(u+x)/4,v=(p+m)/4;return R>T&&R>E?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=A/n,r=_/n):T>E?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=_/r,i=v/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new rn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ko=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ye=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Er.setFromMatrixColumn(t,0).length(),r=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(c_,t,h_)}lookAt(t,e,n){let i=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ki.crossVectors(n,Sn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ki.crossVectors(n,Sn)),Ki.normalize(),Ba.crossVectors(Sn,Ki),i[0]=Ki.x,i[4]=Ba.x,i[8]=Sn.x,i[1]=Ki.y,i[5]=Ba.y,i[9]=Sn.y,i[2]=Ki.z,i[6]=Ba.z,i[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],R=n[7],T=n[11],E=n[15],A=i[0],_=i[4],v=i[8],C=i[12],S=i[1],w=i[5],P=i[9],F=i[13],O=i[2],G=i[6],L=i[10],I=i[14],z=i[3],H=i[7],Y=i[11],et=i[15];return r[0]=o*A+a*S+l*O+c*z,r[4]=o*_+a*w+l*G+c*H,r[8]=o*v+a*P+l*L+c*Y,r[12]=o*C+a*F+l*I+c*et,r[1]=h*A+u*S+d*O+f*z,r[5]=h*_+u*w+d*G+f*H,r[9]=h*v+u*P+d*L+f*Y,r[13]=h*C+u*F+d*I+f*et,r[2]=p*A+x*S+m*O+g*z,r[6]=p*_+x*w+m*G+g*H,r[10]=p*v+x*P+m*L+g*Y,r[14]=p*C+x*F+m*I+g*et,r[3]=y*A+R*S+T*O+E*z,r[7]=y*_+R*w+T*G+E*H,r[11]=y*v+R*P+T*L+E*Y,r[15]=y*C+R*F+T*I+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*f-c*d,R=a*f-c*u,T=a*d-l*u,E=o*f-c*h,A=o*d-l*h,_=o*u-a*h;return e*(x*y-m*R+g*T)-n*(p*y-m*E+g*A)+i*(p*R-x*E+g*_)-r*(p*T-x*A+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,R=e*l-i*o,T=e*c-r*o,E=n*l-i*a,A=n*c-r*a,_=i*c-r*l,v=h*x-u*p,C=h*m-d*p,S=h*g-f*p,w=u*m-d*x,P=u*g-f*x,F=d*g-f*m,O=y*F-R*P+T*w+E*S-A*C+_*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/O;return t[0]=(a*F-l*P+c*w)*G,t[1]=(i*P-n*F-r*w)*G,t[2]=(x*_-m*A+g*E)*G,t[3]=(d*A-u*_-f*E)*G,t[4]=(l*S-o*F-c*C)*G,t[5]=(e*F-i*S+r*C)*G,t[6]=(m*T-p*_-g*R)*G,t[7]=(h*_-d*T+f*R)*G,t[8]=(o*P-a*S+c*v)*G,t[9]=(n*S-e*P-r*v)*G,t[10]=(p*A-x*T+g*y)*G,t[11]=(u*T-h*A-f*y)*G,t[12]=(a*C-o*w-l*v)*G,t[13]=(e*w-n*C+i*v)*G,t[14]=(x*R-p*E-m*y)*G,t[15]=(h*E-u*R+d*y)*G,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,R=l*h,T=l*u,E=n.x,A=n.y,_=n.z;return i[0]=(1-(x+g))*E,i[1]=(f+T)*E,i[2]=(p-R)*E,i[3]=0,i[4]=(f-T)*A,i[5]=(1-(d+g))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(p+R)*_,i[9]=(m-y)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Er.set(i[0],i[1],i[2]).length(),a=Er.set(i[4],i[5],i[6]).length(),l=Er.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xn.copy(this);let c=1/o,h=1/a,u=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,e.setFromRotationMatrix(Xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Fn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Fn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Vr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Fn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Fn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Vr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Er=new q,Xn=new ye,c_=new q(0,0,0),h_=new q(1,1,1),Ki=new q,Ba=new q,Sn=new q,Gf=new ye,Hf=new ui,di=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var zo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},u_=0,Wf=new q,Ar=new ui,Ei=new ye,ka=new q,Po=new q,d_=new q,f_=new ui,Xf=new q(1,0,0),jf=new q(0,1,0),Yf=new q(0,0,1),qf={type:"added"},p_={type:"removed"},Rr={type:"childadded",child:null},Gh={type:"childremoved",child:null},Qe=class s extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=la(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new q,e=new di,n=new ui,i=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new zt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(Xf,t)}rotateY(t){return this.rotateOnAxis(jf,t)}rotateZ(t){return this.rotateOnAxis(Yf,t)}translateOnAxis(t,e){return Wf.copy(t).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xf,t)}translateY(t){return this.translateOnAxis(jf,t)}translateZ(t){return this.translateOnAxis(Yf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ka.copy(t):ka.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Po,ka,this.up):Ei.lookAt(ka,Po,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),Ar.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qf),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(p_),Gh.child=t,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qf),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,d_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,f_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new q(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},m_={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},za={h:0,s:0,l:0};function Hh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=i_(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Hh(o,r,t+1/3),this.g=Hh(o,r,t),this.b=Hh(o,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let n=Xp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return te.workingToColorSpace($e.copy(this),t),Math.round(ne($e.r*255,0,255))*65536+Math.round(ne($e.g*255,0,255))*256+Math.round(ne($e.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace($e.copy(this),e);let n=$e.r,i=$e.g,r=$e.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=je){te.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,i=$e.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(za);let n=Uh($i.h,za.h,e),i=Uh($i.s,za.s,e),r=Uh($i.l,za.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new qt;qt.NAMES=Xp;var Vo=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new q,Ai=new q,Wh=new q,Ri=new q,Pr=new q,Dr=new q,Zf=new q,Xh=new q,jh=new q,Yh=new q,qh=new Se,Zh=new Se,Jh=new Se,ns=class s{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),jn.subVectors(t,e),i.cross(jn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){jn.subVectors(i,e),Ai.subVectors(n,e),Wh.subVectors(t,e);let o=jn.dot(jn),a=jn.dot(Ai),l=jn.dot(Wh),c=Ai.dot(Ai),h=Ai.dot(Wh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return qh.setScalar(0),Zh.setScalar(0),Jh.setScalar(0),qh.fromBufferAttribute(t,e),Zh.fromBufferAttribute(t,n),Jh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(qh,r.x),o.addScaledVector(Zh,r.y),o.addScaledVector(Jh,r.z),o}static isFrontFacing(t,e,n,i){return jn.subVectors(n,e),Ai.subVectors(t,e),jn.cross(Ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),jn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Pr.subVectors(i,n),Dr.subVectors(r,n),Xh.subVectors(t,n);let l=Pr.dot(Xh),c=Dr.dot(Xh);if(l<=0&&c<=0)return e.copy(n);jh.subVectors(t,i);let h=Pr.dot(jh),u=Dr.dot(jh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Pr,o);Yh.subVectors(t,r);let f=Pr.dot(Yh),p=Dr.dot(Yh);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Dr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Zf.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Zf,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(Pr,o).addScaledVector(Dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},is=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Va.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(t.matrixWorld),this.union(Va)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),Ga.subVectors(this.max,Do),Ir.subVectors(t.a,Do),Or.subVectors(t.b,Do),Lr.subVectors(t.c,Do),Qi.subVectors(Or,Ir),ts.subVectors(Lr,Or),Ls.subVectors(Ir,Lr);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-Ls.z,Ls.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,Ls.z,0,-Ls.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-Ls.y,Ls.x,0];return!Kh(e,Ir,Or,Lr,Ga)||(e=[1,0,0,0,1,0,0,0,1],!Kh(e,Ir,Or,Lr,Ga))?!1:(Ha.crossVectors(Qi,ts),e=[Ha.x,Ha.y,Ha.z],Kh(e,Ir,Or,Lr,Ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pi=[new q,new q,new q,new q,new q,new q,new q,new q],Yn=new q,Va=new is,Ir=new q,Or=new q,Lr=new q,Qi=new q,ts=new q,Ls=new q,Do=new q,Ga=new q,Ha=new q,Fs=new q;function Kh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fs.fromArray(s,r);let a=i.x*Math.abs(Fs.x)+i.y*Math.abs(Fs.y)+i.z*Math.abs(Fs.z),l=t.dot(Fs),c=e.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ie=new q,Wa=new ee,g_=0,ci=class extends hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kp,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=t!==void 0?Uu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wa.fromBufferAttribute(this,e),Wa.applyMatrix3(t),this.setXY(e,Wa.x,Wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):s_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):r_(t,this.array)}};var Go=class extends ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ho=class extends ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Nn=class extends ci{constructor(t,e,n){super(new Float32Array(t),e,n)}},__=new is,Io=new q,$h=new q,Xr=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):__.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);let e=Io.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add($h)),this.expandByPoint(Io.copy(t.center).sub($h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},x_=0,Ln=new ye,Qh=new Qe,Fr=new q,bn=new is,Oo=new is,ke=new q,ss=class s extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=la(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(e_(t)?Ho:Go)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(bn.min,Oo.min),bn.expandByPoint(ke),ke.addVectors(bn.max,Oo.max),bn.expandByPoint(ke)):(bn.expandByPoint(Oo.min),bn.expandByPoint(Oo.max))}bn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(t,c),ke.add(Fr)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ci(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new q,l[C]=new q;let h=new q,u=new q,d=new q,f=new ee,p=new ee,x=new ee,m=new q,g=new q;function y(C,S,w){c[C]=c[S]=c[w]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,w),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),x.fromBufferAttribute(r,w),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),a[C].add(m),a[S].add(m),a[w].add(m),l[C].add(g),l[S].add(g),l[w].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,S=R.length;C<S;++C){let w=R[C],P=w.start,F=w.count;for(let O=P,G=P+F;O<G;O+=3)y(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let T=new q,E=new q,A=new q,_=new q;function v(C){A.fromBufferAttribute(i,C),_.copy(A);let S=a[C];T.copy(S),T.sub(A.multiplyScalar(A.dot(S))).normalize(),E.crossVectors(_,S);let P=E.dot(l[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,P)}for(let C=0,S=n.count;C<S;++C)c[C]&&v(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new q,r=new q,o=new q,a=new q,l=new q,c=new q,h=new q,u=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new ci(d,h,u)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tu=new q,v_=new q,y_=new zt,qn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tu.subVectors(n,e).cross(v_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||y_.getNormalMatrix(t),i=this.coplanarPoint(tu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},S_=0,fi=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=la(),this.name="",this.type="Material",this.blending=Zr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Di=new q,eu=new q,Xa=new q,ja=new q,yl=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){eu.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),ja.copy(this.origin).sub(eu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xa),a=ja.dot(this.direction),l=-ja.dot(Xa),c=ja.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(eu).addScaledVector(Xa,d),f}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),i=Di.dot(Di)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,R=n.z-o.z,T=Math.abs(l),E=Math.abs(c),A=Math.abs(h),_,v,C,S,w,P,F,O,G,L,I,z;if(T>=E&&T>=A?(C=l,P=u,G=p,z=g,l>=0?(_=c,v=h,S=d,w=f,F=x,O=m,L=y,I=R):(_=h,v=c,S=f,w=d,F=m,O=x,L=R,I=y)):E>=A?(C=c,P=d,G=x,z=y,c>=0?(_=h,v=l,S=f,w=u,F=m,O=p,L=R,I=g):(_=l,v=h,S=u,w=f,F=p,O=m,L=g,I=R)):(C=h,P=f,G=m,z=R,h>=0?(_=l,v=c,S=u,w=d,F=p,O=x,L=g,I=y):(_=c,v=l,S=d,w=u,F=x,O=p,L=y,I=g)),C===0)return null;let H=_/C,Y=v/C,et=1/C,ft=S-H*P,St=w-Y*P,K=F-H*G,lt=O-Y*G,xt=L-H*z,Pt=I-Y*z,pt=xt*lt-Pt*K,Nt=ft*Pt-St*xt,re=K*St-lt*ft;if(i){if(pt<0||Nt<0||re<0)return null}else if((pt<0||Nt<0||re<0)&&(pt>0||Nt>0||re>0))return null;let Ft=pt+Nt+re;if(Ft===0)return null;let oe=et*(pt*P+Nt*G+re*z);return(Ft>0?oe<0:oe>0)?null:this.at(oe/Ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bs=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jf=new ye,Ns=new yl,Ya=new Xr,Kf=new q,qa=new q,Za=new q,Ja=new q,nu=new q,Ka=new q,$f=new q,$a=new q,pn=class extends Qe{constructor(t=new ss,e=new Bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(nu.fromBufferAttribute(u,t),o?Ka.addScaledVector(nu,h):Ka.addScaledVector(nu.sub(e),h))}e.add(Ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Ns.copy(t.ray).recast(t.near),!(Ya.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Ya,Kf)===null||Ns.origin.distanceToSquared(Kf)>(t.far-t.near)**2))&&(Jf.copy(r).invert(),Ns.copy(t.ray).applyMatrix4(Jf),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ns)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),R=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let T=y,E=R;T<E;T+=3){let A=a.getX(T),_=a.getX(T+1),v=a.getX(T+2);i=Qa(this,g,t,n,c,h,u,A,_,v),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),R=a.getX(m+1),T=a.getX(m+2);i=Qa(this,o,t,n,c,h,u,y,R,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=y,E=R;T<E;T+=3){let A=T,_=T+1,v=T+2;i=Qa(this,g,t,n,c,h,u,A,_,v),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,R=m+1,T=m+2;i=Qa(this,o,t,n,c,h,u,y,R,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function b_(s,t,e,n,i,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===hs,a),l===null)return null;$a.copy(a),$a.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:s}}function Qa(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,qa),s.getVertexPosition(l,Za),s.getVertexPosition(c,Ja);let h=b_(s,t,e,n,qa,Za,Ja,$f);if(h){let u=new q;ns.getBarycoord($f,qa,Za,Ja,u),i&&(h.uv=ns.getInterpolatedAttribute(i,a,l,c,u,new ee)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,l,c,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new q,materialIndex:0};ns.getNormal(qa,Za,Ja,d.normal),h.face=d,h.barycoord=u}return h}var Sl=class extends rn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ze,h=ze,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=new Xr,M_=new ee(.5,.5),tl=new q,rs=class{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],R=r[13],T=r[14],E=r[15];if(i[0].setComponents(c-o,f-h,g-p,E-y).normalize(),i[1].setComponents(c+o,f+h,g+p,E+y).normalize(),i[2].setComponents(c+a,f+u,g+x,E+R).normalize(),i[3].setComponents(c-a,f-u,g-x,E-R).normalize(),n)i[4].setComponents(l,d,m,T).normalize(),i[5].setComponents(c-l,f-d,g-m,E-T).normalize();else if(i[4].setComponents(c-l,f-d,g-m,E-T).normalize(),e===Fn)i[5].setComponents(c+l,f+d,g+m,E+T).normalize();else if(e===Vr)i[5].setComponents(l,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);let e=M_.distanceTo(t.center);return Us.radius=.7071067811865476+e,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(tl.x=i.normal.x>0?t.max.x:t.min.x,tl.y=i.normal.y>0?t.max.y:t.min.y,tl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qf=new ye,bl=class s{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Qf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new rs),n[i].setFromProjectionMatrix(Qf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new rs),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Wo=class extends rn{constructor(t=[],e=Ws,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ks=class extends rn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends rn{constructor(t,e,n=Jn,i,r,o,a=ze,l=ze,c,h=Li,u=1){if(h!==Li&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xo=class extends Fi{constructor(t,e=Jn,n=Ws,i,r,o=ze,a=ze,l,c=Li){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jo=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Tn=class s extends ss{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(u,2));function p(x,m,g,y,R,T,E,A,_,v,C){let S=T/_,w=E/v,P=T/2,F=E/2,O=A/2,G=_+1,L=v+1,I=0,z=0,H=new q;for(let Y=0;Y<L;Y++){let et=Y*w-F;for(let ft=0;ft<G;ft++){let St=ft*S-P;H[x]=St*y,H[m]=et*R,H[g]=O,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[g]=A>0?1:-1,h.push(H.x,H.y,H.z),u.push(ft/_),u.push(1-Y/v),I+=1}}for(let Y=0;Y<v;Y++)for(let et=0;et<_;et++){let ft=d+et+G*Y,St=d+et+G*(Y+1),K=d+(et+1)+G*(Y+1),lt=d+(et+1)+G*Y;l.push(ft,St,lt),l.push(St,K,lt),z+=6}a.addGroup(f,z,C),f+=z,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var os=class s extends ss{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let R=0;R<c;R++){let T=R*u-r;p.push(T,-y,0),x.push(0,0,1),m.push(R/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let R=y+c*g,T=y+c*(g+1),E=y+1+c*(g+1),A=y+1+c*g;f.push(R,T,A),f.push(T,E,A)}this.setIndex(f),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Yo=class extends fi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function js(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(tp(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(tp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function tn(s){let t={};for(let e=0;e<s.length;e++){let n=js(s[e]);for(let i in n)t[i]=n[i]}return t}function tp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function w_(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var jp={clone:js,merge:tn},T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=w_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(i.value);break;case"v3":this.uniforms[n].value=new q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ml=class extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qo=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var jr=class extends fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Bl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wl=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tl=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function el(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var as=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cl=class extends as{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=t,a=2*e-n;break;case au:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=t,l=2*n-e;break;case au:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,R=(-1-f)*m+(1.5+f)*x+.5*p,T=f*m-f*x;for(let E=0;E!==a;++E)r[E]=g*o[h+E]+y*o[c+E]+R*o[l+E]+T*o[u+E];return r}},El=class extends as{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Al=class extends as{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Rl=class extends as{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,y=u[g],R=u[g+1],T=t*d+p*2,E=h[T],A=h[T+1],_=A_(n,e,y,E,i);r[p]=Yp(_,x,R,A,m)}return r}};function Yp(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function E_(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function A_(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Yp(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=E_(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),el(t.settings)&&(n.settings={inTangents:Nr(t.settings.inTangents,Array),outTangents:Nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Rl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Fo:e=this.InterpolantFactoryMethodDiscrete;break;case ml:e=this.InterpolantFactoryMethodLinear;break;case sl:e=this.InterpolantFactoryMethodSmooth;break;case su:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;el(this.settings)&&(ep(this.settings.inTangents,t),ep(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;el(this.settings)&&(np(this.settings.inTangents,t),np(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&n_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,el(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function ep(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function np(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ml;var ls=class extends Cn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Fo;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}};Pl.prototype.ValueTypeName="color";var Dl=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}};Dl.prototype.ValueTypeName="number";var Il=class extends as{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zo=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};Zo.prototype.ValueTypeName="quaternion";Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Cn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Fo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Cn{constructor(t,e,n,i){super(t,e,n,i)}};Ol.prototype.ValueTypeName="vector";var Ll=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qp=new Ll,Fl=class{constructor(t){this.manager=t!==void 0?t:qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jo=class extends Qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ko=class extends Jo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},iu=new ye,ip=new q,sp=new q,Nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ip.setFromMatrixPosition(t.matrixWorld),e.position.copy(ip),sp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Vr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(iu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},nl=new q,il=new ui,ai=new q,$o=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nl,il,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,ai.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(nl,il,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new q,rp=new ee,op=new ee,Mn=class extends $o{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,e){return this.getViewBounds(t,rp,op),e.subVectors(op,rp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nh*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zs=class extends $o{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lu=class extends Nl{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends Jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new lu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ur=-90,Br=1,Yr=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Mn(Ur,Br,t,e);i.layers=this.layers,this.add(i);let r=new Mn(Ur,Br,t,e);r.layers=this.layers,this.add(r);let o=new Mn(Ur,Br,t,e);o.layers=this.layers,this.add(o);let a=new Mn(Ur,Br,t,e);a.layers=this.layers,this.add(a);let l=new Mn(Ur,Br,t,e);l.layers=this.layers,this.add(l);let c=new Mn(Ur,Br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ul=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ku="\\[\\]\\.:\\/",R_=new RegExp("["+ku+"]","g"),zu="[^"+ku+"]",P_="[^"+ku.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",zu),I_=/(WCOD+)?/.source.replace("WCOD",P_),O_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),L_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),F_=new RegExp("^"+D_+I_+O_+L_+"$"),N_=["material","materials","bones","map"],cu=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(R_,"")}static parseTrackName(t){let e=F_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);N_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=cu;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ew=new Float32Array(1);var hu=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Vu(s,t,e,n){let i=U_(n);switch(e){case Ru:return s*t;case Du:return s*t/i.components*i.byteLength;case Wl:return s*t/i.components*i.byteLength;case us:return s*t*2/i.components*i.byteLength;case Xl:return s*t*2/i.components*i.byteLength;case Pu:return s*t*3/i.components*i.byteLength;case Qn:return s*t*4/i.components*i.byteLength;case jl:return s*t*4/i.components*i.byteLength;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ql:case Jl:return Math.max(s,16)*Math.max(t,8)/4;case Yl:case Zl:return Math.max(s,8)*Math.max(t,8)/2;case Kl:case $l:case tc:case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ql:case ra:case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _c:case xc:case vc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case yc:case Sc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case oa:case bc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U_(s){switch(s){case mn:case Tu:return{byteLength:1,components:1};case $r:case Cu:case $n:return{byteLength:2,components:1};case Gl:case Hl:return{byteLength:2,components:4};case Jn:case Vl:case Kn:return{byteLength:4,components:1};case Eu:case Au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function gm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function k_(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ex=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ux=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,av=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:z_,alphahash_pars_fragment:V_,alphamap_fragment:G_,alphamap_pars_fragment:H_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:j_,aomap_pars_fragment:Y_,batching_pars_vertex:q_,batching_vertex:Z_,begin_vertex:J_,beginnormal_vertex:K_,bsdfs:$_,iridescence_fragment:Q_,bumpmap_pars_fragment:tx,clipping_planes_fragment:ex,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,defaultnormal_vertex:hx,displacementmap_pars_vertex:ux,displacementmap_vertex:dx,emissivemap_fragment:fx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:xx,envmap_pars_fragment:vx,envmap_pars_vertex:yx,envmap_physical_pars_fragment:Dx,envmap_vertex:Sx,fog_vertex:bx,fog_pars_vertex:Mx,fog_fragment:wx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Ex,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Rx,lights_pars_begin:Px,lights_toon_fragment:Ix,lights_toon_pars_fragment:Ox,lights_phong_fragment:Lx,lights_phong_pars_fragment:Fx,lights_physical_fragment:Nx,lights_physical_pars_fragment:Ux,lights_fragment_begin:Bx,lights_fragment_maps:kx,lights_fragment_end:zx,lightprobes_pars_fragment:Vx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Hx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:jx,map_pars_fragment:Yx,map_particle_fragment:qx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:Kx,morphinstance_vertex:$x,morphcolor_vertex:Qx,morphnormal_vertex:tv,morphtarget_pars_vertex:ev,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:sv,normal_pars_fragment:rv,normal_pars_vertex:ov,normal_vertex:av,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:cv,clearcoat_normal_fragment_maps:hv,clearcoat_pars_fragment:uv,iridescence_pars_fragment:dv,opaque_fragment:fv,packing:pv,premultiplied_alpha_fragment:mv,project_vertex:gv,dithering_fragment:_v,dithering_pars_fragment:xv,roughnessmap_fragment:vv,roughnessmap_pars_fragment:yv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:bv,shadowmap_vertex:Mv,shadowmask_pars_fragment:wv,skinbase_vertex:Tv,skinning_pars_vertex:Cv,skinning_vertex:Ev,skinnormal_vertex:Av,specularmap_fragment:Rv,specularmap_pars_fragment:Pv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Iv,transmission_fragment:Ov,transmission_pars_fragment:Lv,uv_pars_fragment:Fv,uv_pars_vertex:Nv,uv_vertex:Uv,worldpos_vertex:Bv,background_vert:kv,background_frag:zv,backgroundCube_vert:Vv,backgroundCube_frag:Gv,cube_vert:Hv,cube_frag:Wv,depth_vert:Xv,depth_frag:jv,distance_vert:Yv,distance_frag:qv,equirect_vert:Zv,equirect_frag:Jv,linedashed_vert:Kv,linedashed_frag:$v,meshbasic_vert:Qv,meshbasic_frag:ty,meshlambert_vert:ey,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:dy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:_y,sprite_frag:xy},yt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},_i={basic:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:tn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:tn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:tn([yt.points,yt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:tn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:tn([yt.common,yt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:tn([yt.sprite,yt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:tn([yt.common,yt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:tn([yt.lights,yt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};_i.physical={uniforms:tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Mc={r:0,b:0,g:0},vy=new ye,_m=new zt;_m.set(-1,0,0,0,1,0,0,0,1);function yy(s,t,e,n,i,r){let o=new qt(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){let T=y.backgroundBlurriness>0;R=t.get(R,T)}return R}function p(y){let R=!1,T=f(y);T===null?m(o,a):T&&T.isColor&&(m(T,1),R=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,R){let T=f(R);T&&T.isCubeTexture?(c===void 0&&(c=new pn(new Tn(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:js(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vy.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_m),c.material.toneMapped=te.getTransfer(T.colorSpace)!==ce,(h!==T||u!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,u=T.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new pn(new os(2,2),new pi({name:"BackgroundMaterial",uniforms:js(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=te.getTransfer(T.colorSpace)!==ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||u!==T.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=T,u=T.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,R){y.getRGB(Mc,Bu(s)),e.buffers.color.setClear(Mc.r,Mc.g,Mc.b,R,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,R=1){o.set(y),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Sy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(w,P,F,O,G){let L=!1,I=u(w,O,F,P);r!==I&&(r=I,c(r.object)),L=f(w,O,F,G),L&&p(w,O,F,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,T(w,P,F,O),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,P,F,O){let G=O.wireframe===!0,L=n[P.id];L===void 0&&(L={},n[P.id]=L);let I=w.isInstancedMesh===!0?w.id:0,z=L[I];z===void 0&&(z={},L[I]=z);let H=z[F.id];H===void 0&&(H={},z[F.id]=H);let Y=H[G];return Y===void 0&&(Y=d(l()),H[G]=Y),Y}function d(w){let P=[],F=[],O=[];for(let G=0;G<e;G++)P[G]=0,F[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:w,attributes:{},index:null}}function f(w,P,F,O){let G=r.attributes,L=P.attributes,I=0,z=F.getAttributes();for(let H in z)if(z[H].location>=0){let et=G[H],ft=L[H];if(ft===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;I++}return r.attributesNum!==I||r.index!==O}function p(w,P,F,O){let G={},L=P.attributes,I=0,z=F.getAttributes();for(let H in z)if(z[H].location>=0){let et=L[H];et===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(et=w.instanceColor));let ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),G[H]=ft,I++}r.attributes=G,r.attributesNum=I,r.index=O}function x(){let w=r.newAttributes;for(let P=0,F=w.length;P<F;P++)w[P]=0}function m(w){g(w,0)}function g(w,P){let F=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;F[w]=1,O[w]===0&&(s.enableVertexAttribArray(w),O[w]=1),G[w]!==P&&(s.vertexAttribDivisor(w,P),G[w]=P)}function y(){let w=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==w[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function R(w,P,F,O,G,L,I){I===!0?s.vertexAttribIPointer(w,P,F,G,L):s.vertexAttribPointer(w,P,F,O,G,L)}function T(w,P,F,O){x();let G=O.attributes,L=F.getAttributes(),I=P.defaultAttributeValues;for(let z in L){let H=L[z];if(H.location>=0){let Y=G[z];if(Y===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){let et=Y.normalized,ft=Y.itemSize,St=t.get(Y);if(St===void 0)continue;let K=St.buffer,lt=St.type,xt=St.bytesPerElement,Pt=lt===s.INT||lt===s.UNSIGNED_INT||Y.gpuType===Vl;if(Y.isInterleavedBufferAttribute){let pt=Y.data,Nt=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,re=Y.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Ft=0;Ft<H.locationSize;Ft++)g(H.location+Ft,pt.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)m(H.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Ft=0;Ft<H.locationSize;Ft++)R(H.location+Ft,ft/H.locationSize,lt,et,Nt*xt,(re+ft/H.locationSize*Ft)*xt,Pt)}else{if(Y.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)g(H.location+pt,Y.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pt=0;pt<H.locationSize;pt++)m(H.location+pt);s.bindBuffer(s.ARRAY_BUFFER,K);for(let pt=0;pt<H.locationSize;pt++)R(H.location+pt,ft/H.locationSize,lt,et,ft*xt,ft/H.locationSize*pt*xt,Pt)}}else if(I!==void 0){let et=I[z];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(H.location,et);break;case 3:s.vertexAttrib3fv(H.location,et);break;case 4:s.vertexAttrib4fv(H.location,et);break;default:s.vertexAttrib1fv(H.location,et)}}}}y()}function E(){C();for(let w in n){let P=n[w];for(let F in P){let O=P[F];for(let G in O){let L=O[G];for(let I in L)h(L[I].object),delete L[I];delete O[G]}}delete n[w]}}function A(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let F in P){let O=P[F];for(let G in O){let L=O[G];for(let I in L)h(L[I].object),delete L[I];delete O[G]}}delete n[w.id]}function _(w){for(let P in n){let F=n[P];for(let O in F){let G=F[O];if(G[w.id]===void 0)continue;let L=G[w.id];for(let I in L)h(L[I].object),delete L[I];delete G[w.id]}}}function v(w){for(let P in n){let F=n[P],O=w.isInstancedMesh===!0?w.id:0,G=F[O];if(G!==void 0){for(let L in G){let I=G[L];for(let z in I)h(I[z].object),delete I[z];delete G[L]}delete F[O],Object.keys(F).length===0&&delete n[P]}}}function C(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function by(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function My(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Qn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let v=_===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==mn&&_!==Kn&&!v&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:T,maxSamples:E,samples:A}}function wy(s){let t=this,e=null,n=0,i=!1,r=!1,o=new qn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,R=y*4,T=g.clippingState||null;l.value=T,T=h(p,d,R,f);for(let E=0;E!==R;++E)T[E]=e[E];g.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let R=0,T=f;R!==x;++R,T+=4)o.copy(u[R]).applyMatrix4(y,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ua=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tn(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Gs});r.uniforms.tEquirect.value=e;let o=new pn(i,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Ye),new Yr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Zp=256,Ty=3,Cy=20,xm=256,vm=16,Ey=3,Ay=new q,Ry=new qt,to=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Yr(1,10,null),this._boxMesh=new pn(new Tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Ay}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Ry));let m=new Yr(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Zp,Wp(t))}_fromTexture(t,e){t.mapping===Ws||t.mapping===Jr?this._setSize(t.image.length===0?Zp:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Jp(t,!1,!1),n=Math.log2(t)-Ty;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Jp(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ws||t.mapping===Jr?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Py(),this._integrationMaterial=Dy());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/vm);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-Ey)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(xm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Iy());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Jp(s,t,e){return new ua(s,{minFilter:Zn,generateMipmaps:t,type:$n,colorSpace:No,depthBuffer:e})}function da(s,t,e){return new pi({name:s,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:on,blending:Gs,depthTest:!1,depthWrite:!1})}function Py(){return da("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dy(){return da("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Iy(){return da("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kp(){return da("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $p(){return da("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Oy(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Kr||f===kl)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ua(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Kr||f===kl,x=f===Ws||f===Jr;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new to(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new to(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Kr?d.mapping=Ws:f===kl&&(d.mapping=Jr),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Ly(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Lo("WebGLRenderer: "+n+" extension not supported."),i}}}function Fy(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,R=m.count>=65535?Ho:Go,T=new R(Math.ceil(y/3)*6,1),E=T.array;if(x!==null){let _=x.array;g=x.version;for(let v=0,C=0;v<y;v+=3){let S=_[v+0],w=_[v+1],P=_[v+2];E[C++]=S,E[C++]=w,E[C++]=w,E[C++]=P,E[C++]=P,E[C++]=S}}else{g=m.version;for(let _=0,v=0;_<y;_+=3){let C=_+0,S=_+1,w=_+2;E[v++]=C,E[v++]=S,E[v++]=S,E[v++]=w,E[v++]=w,E[v++]=C}}T.version=g;let A=r.get(p);A&&t.remove(A),r.set(p,T)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Ny(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Uy(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function By(s,t,e){let n=new WeakMap,i=new Se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],R=0;f===!0&&(R=1),p===!0&&(R=2),x===!0&&(R=3);let T=a.attributes.position.count*R,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let A=new Float32Array(T*E*4*u),_=new ko(A,T,E,u);_.type=Kn,_.needsUpdate=!0;let v=R*4;for(let S=0;S<u;S++){let w=m[S],P=g[S],F=y[S],O=T*E*4*S;for(let G=0;G<w.count;G++){let L=G*v;f===!0&&(i.fromBufferAttribute(w,G),A[O+L+0]=i.x,A[O+L+1]=i.y,A[O+L+2]=i.z,A[O+L+3]=0),p===!0&&(i.fromBufferAttribute(P,G),A[O+L+4]=i.x,A[O+L+5]=i.y,A[O+L+6]=i.z,A[O+L+7]=0),x===!0&&(i.fromBufferAttribute(F,G),A[O+L+8]=i.x,A[O+L+9]=i.y,A[O+L+10]=i.z,A[O+L+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new ee(T,E)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ky(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var zy={[_u]:"LINEAR_TONE_MAPPING",[xu]:"REINHARD_TONE_MAPPING",[vu]:"CINEON_TONE_MAPPING",[yu]:"ACES_FILMIC_TONE_MAPPING",[bu]:"AGX_TONE_MAPPING",[Mu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};function Vy(s,t,e,n,i,r){let o=new wn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ss;h.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Nn([0,2,0,0,2,0],2));let u=new Ml({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new pn(h,u),f=new zs(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,R=[],T=!1;this.setSize=function(E,A){o.setSize(E,A),a!==null&&a.setSize(E,A),l!==null&&l.setSize(E,A);for(let _=0;_<R.length;_++){let v=R[_];v.setSize&&v.setSize(E,A)}},this.setEffects=function(E){R=E,T=R.length>0&&R[0].isRenderPass===!0;let A=o.width,_=o.height;R.length>0&&a===null&&(a=new wn(A,_,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new wn(A,_,{type:$n,depthBuffer:!1,stencilBuffer:!1}));let v=i===!0&&R.some(C=>C.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new Fi(A,_),r===!0&&(c.format=Ni,c.type=Xs)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let C=0;C<R.length;C++){let S=R[C];S.setSize&&S.setSize(A,_),v&&S.needsDepthTexture===!0&&S.setDepthTexture&&S.setDepthTexture(c)}},this.begin=function(E,A){if(m||E.toneMapping===Un&&R.length===0)return!1;if(y=A,A!==null){let _=A.width,v=A.height;(o.width!==_||o.height!==v)&&this.setSize(_,v)}return T===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=Un,!0},this.hasRenderPass=function(){return T},this.end=function(E,A){E.toneMapping=g,m=!0;let _=o,v=a;for(let C=0;C<R.length;C++){let S=R[C];S.enabled!==!1&&(S.render(E,v,_,A),S.needsSwap!==!1&&(_=v,v=v===a?l:a))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,u.defines={},te.getTransfer(p)===ce&&(u.defines.SRGB_TRANSFER="");let C=zy[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(y),E.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ym=new rn,Sm=new Fi(1,1),bm=new Xo(1),Mm=new ko,wm=new vl,Tm=new Wo,Qp=[],tm=[],em=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function eo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Qp[i];if(r===void 0&&(r=new Float32Array(i),Qp[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Cc(s,t){let e=tm[t];e===void 0&&(e=new Int32Array(t),tm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function Xy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function jy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;im.set(n),s.uniformMatrix2fv(this.addr,!1,im),Fe(e,n)}}function Yy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;nm.set(n),s.uniformMatrix3fv(this.addr,!1,nm),Fe(e,n)}}function qy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Le(e,n))return;em.set(n),s.uniformMatrix4fv(this.addr,!1,em),Fe(e,n)}}function Zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function Ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function $y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function Qy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function eS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function nS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function Ec(s){return s.version===0&&(s.compareFunction=Lu,s.needsUpdate=!0),s}function iS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ec(Sm):r=ym,e.setTexture2D(t||r,i)}function sS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wm,i)}function rS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ec(bm):r=Tm,e.setTextureCube(t||r,i)}function oS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mm,i)}function aS(s){switch(s){case 5126:return Gy;case 35664:return Hy;case 35665:return Wy;case 35666:return Xy;case 35674:return jy;case 35675:return Yy;case 35676:return qy;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Ky;case 35669:case 35673:return $y;case 5125:return Qy;case 36294:return tS;case 36295:return eS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}function lS(s,t){s.uniform1fv(this.addr,t)}function cS(s,t){let e=eo(t,this.size,2);s.uniform2fv(this.addr,e)}function hS(s,t){let e=eo(t,this.size,3);s.uniform3fv(this.addr,e)}function uS(s,t){let e=eo(t,this.size,4);s.uniform4fv(this.addr,e)}function dS(s,t){let e=eo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fS(s,t){let e=eo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function pS(s,t){let e=eo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function mS(s,t){s.uniform1iv(this.addr,t)}function gS(s,t){s.uniform2iv(this.addr,t)}function _S(s,t){s.uniform3iv(this.addr,t)}function xS(s,t){s.uniform4iv(this.addr,t)}function vS(s,t){s.uniform1uiv(this.addr,t)}function yS(s,t){s.uniform2uiv(this.addr,t)}function SS(s,t){s.uniform3uiv(this.addr,t)}function bS(s,t){s.uniform4uiv(this.addr,t)}function MS(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ec(Sm):o=ym;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function wS(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||wm,r[o])}function TS(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ec(bm):o=Tm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function CS(s,t,e){let n=this.cache,i=t.length,r=Cc(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Mm,r[o])}function ES(s){switch(s){case 5126:return lS;case 35664:return cS;case 35665:return hS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return xS;case 5125:return vS;case 36294:return yS;case 36295:return SS;case 36296:return bS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return CS}}var Wu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=aS(e.type)}},Xu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ES(e.type)}},ju=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function sm(s,t){s.seq.push(t),s.map[t.id]=t}function AS(s,t,e){let n=s.name,i=n.length;for(Gu.lastIndex=0;;){let r=Gu.exec(n),o=Gu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sm(e,c===void 0?new Wu(a,s,t):new Xu(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ju(a),sm(e,u)),e=u}}}var Qr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);AS(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function rm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var RS=37297,PS=0;function DS(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var om=new zt;function IS(s){te._getMatrix(om,te.workingColorSpace,s);let t=`mat3( ${om.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Uo:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function am(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+DS(s.getShaderSource(t),a)}else return r}function OS(s,t){let e=IS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LS={[_u]:"Linear",[xu]:"Reinhard",[vu]:"Cineon",[yu]:"ACESFilmic",[bu]:"AgX",[Mu]:"Neutral",[Su]:"Custom"};function FS(s,t){let e=LS[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wc=new q;function NS(){te.getLuminanceCoefficients(wc);let s=wc.x.toFixed(4),t=wc.y.toFixed(4),e=wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function BS(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kS(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ha(s){return s!==""}function lm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(s){return s.replace(zS,VS)}function VS(s,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Yu(e)}var GS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(s){return s.replace(GS,HS)}function HS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function um(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var WS={[Vs]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function XS(s){return WS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jS={[Jr]:"ENVMAP_MODE_REFRACTION"};function YS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qS={[Bl]:"ENVMAP_BLENDING_MULTIPLY",[Ap]:"ENVMAP_BLENDING_MIX",[Rp]:"ENVMAP_BLENDING_ADD"};function ZS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qS[s.combine]||"ENVMAP_BLENDING_NONE"}function JS(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=XS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=YS(e),u=ZS(e),d=US(e),f=BS(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ha).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(x=[um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[um(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Un?FS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,OS("linearToOutputTexel",e.outputColorSpace),NS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),o=Yu(o),o=lm(o,e),o=cm(o,e),a=Yu(a),a=lm(a,e),a=cm(a,e),o=hm(o),a=hm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,R=g+m+a,T=rm(i,i.VERTEX_SHADER,y),E=rm(i,i.FRAGMENT_SHADER,R);i.attachShader(p,T),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function A(S){if(s.debug.checkShaderErrors){let w=i.getProgramInfoLog(p)||"",P=i.getShaderInfoLog(T)||"",F=i.getShaderInfoLog(E)||"",O=w.trim(),G=P.trim(),L=F.trim(),I=!0,z=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,E);else{let H=am(i,T,"vertex"),Y=am(i,E,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+O+`
`+H+`
`+Y)}else O!==""?Bt("WebGLProgram: Program Info Log:",O):(G===""||L==="")&&(z=!1);z&&(S.diagnostics={runnable:I,programLog:O,vertexShader:{log:G,prefix:x},fragmentShader:{log:L,prefix:m}})}i.deleteShader(T),i.deleteShader(E),_=new Qr(i,p),v=kS(i,p)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,RS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=PS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=E,this}var KS=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zu(t),e.set(t,n)),n}},Zu=class{constructor(t){this.id=KS++,this.code=t,this.usedTimes=0}};function $S(s){return s===us||s===ra||s===oa}function QS(s,t,e,n,i,r){let o=new zo,a=new qu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,C,S,w,P){let F=S.fog,O=w.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?S.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,I=t.get(_.envMap||G,L),z=d[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=Y!==void 0?Y.length:0,ft=0;O.morphAttributes.position!==void 0&&(ft=1),O.morphAttributes.normal!==void 0&&(ft=2),O.morphAttributes.color!==void 0&&(ft=3);let St,K,lt,xt;if(z){let vt=_i[z];St=vt.vertexShader,K=vt.fragmentShader}else{St=_.vertexShader,K=_.fragmentShader;let vt=a.getVertexShaderStage(_),ue=a.getFragmentShaderStage(_);a.update(_,vt,ue),lt=vt.id,xt=ue.id}let Pt=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),Nt=w.isInstancedMesh===!0,re=w.isBatchedMesh===!0,Ft=!!_.map,oe=!!_.matcap,Kt=!!I,jt=Kt&&I.isPMREMTexture===!0,Ae=!!_.aoMap,be=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,On=!!_.displacementMap,Re=!!_.emissiveMap,yn=!!_.metalnessMap,wt=!!_.roughnessMap,Ut=_.anisotropy>0,U=_.clearcoat>0,Me=_.diffuseRoughness>0,Gt=_.dispersion>0,le=_.retroreflectivity>0,at=_.iridescence>0,_e=_.sheen>0,Ot=_.transmission>0,At=Ut&&!!_.anisotropyMap,D=U&&!!_.clearcoatMap,b=U&&!!_.clearcoatNormalMap,X=U&&!!_.clearcoatRoughnessMap,st=Me&&!!_.diffuseRoughnessMap,it=at&&!!_.iridescenceMap,ct=at&&!!_.iridescenceThicknessMap,gt=_e&&!!_.sheenColorMap,Q=_e&&!!_.sheenRoughnessMap,tt=!!_.specularMap,ut=!!_.specularColorMap,N=!!_.specularIntensityMap,nt=Ot&&!!_.transmissionMap,$=Ot&&!!_.thicknessMap,dt=!!_.gradientMap,ot=!!_.alphaMap,ht=_.alphaTest>0,Dt=!!_.alphaHash,Yt=!!_.extensions,rt=Un;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(rt=s.toneMapping);let Lt=jt?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,Ht={shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:K,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:re,batchingColor:re&&w._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&w.instanceColor!==null,instancingMorph:Nt&&w.morphTexture!==null,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:oe,envMap:Kt,envMapMode:Kt&&I.mapping,envMapPMREM:jt,envMapMaxLod:jt?Lt.length-1:null,envMapSize:jt?Lt[0].width:null,aoMap:Ae,lightMap:be,bumpMap:We,normalMap:ge,displacementMap:On,emissiveMap:Re,normalMapObjectSpace:ge&&_.normalMapType===Ip,normalMapTangentSpace:ge&&_.normalMapType===aa,packedNormalMap:ge&&_.normalMapType===aa&&$S(_.normalMap.format),metalnessMap:yn,roughnessMap:wt,anisotropy:Ut,anisotropyMap:At,clearcoat:U,clearcoatMap:D,clearcoatNormalMap:b,clearcoatRoughnessMap:X,diffuseRoughness:Me,diffuseRoughnessMap:st,dispersion:Gt,retroreflection:le,iridescence:at,iridescenceMap:it,iridescenceThicknessMap:ct,sheen:_e,sheenColorMap:gt,sheenRoughnessMap:Q,specularMap:tt,specularColorMap:ut,specularIntensityMap:N,transmission:Ot,transmissionMap:nt,thicknessMap:$,gradientMap:dt,opaque:_.transparent===!1&&_.blending===Zr&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:Dt,combine:_.combine,mapUv:Ft&&f(_.map.channel),aoMapUv:Ae&&f(_.aoMap.channel),lightMapUv:be&&f(_.lightMap.channel),bumpMapUv:We&&f(_.bumpMap.channel),normalMapUv:ge&&f(_.normalMap.channel),displacementMapUv:On&&f(_.displacementMap.channel),emissiveMapUv:Re&&f(_.emissiveMap.channel),metalnessMapUv:yn&&f(_.metalnessMap.channel),roughnessMapUv:wt&&f(_.roughnessMap.channel),anisotropyMapUv:At&&f(_.anisotropyMap.channel),clearcoatMapUv:D&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:st&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(_.sheenRoughnessMap.channel),specularMapUv:tt&&f(_.specularMap.channel),specularColorMapUv:ut&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:nt&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:ot&&f(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||Ut),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!O.attributes.uv&&(Ft||ot),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:w.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:ft,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:P.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:Re&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mi,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||re)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function x(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)v.push(C),v.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(v,_),g(v,_),v.push(s.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function m(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function g(_,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let v=d[_.type],C;if(v){let S=_i[v];C=jp.clone(S.uniforms)}else C=_.uniforms;return C}function R(_,v){let C=h.get(v);return C!==void 0?++C.usedTimes:(C=new JS(s,v,_,i),c.push(C),h.set(v,C)),C}function T(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:A}}function tb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function eb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function dm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=s[t];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),t++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let R=a(d,f,p,x,m,g);p.transmission>0?n.push(R):p.transparent===!0?i.push(R):e.push(R)}function c(d,f,p,x,m,g){let y=a(d,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(d,f){e.length>1&&e.sort(d||eb),n.length>1&&n.sort(f||dm),i.length>1&&i.sort(f||dm)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function nb(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new fm,s.set(n,[o])):i>=r.length?(o=new fm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ib(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new qt};break;case"SpotLight":e={position:new q,direction:new q,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[t.id]=e,e}}}function sb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var rb=0;function ob(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ab(s){let t=new ib,e=sb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);let i=new q,r=new ye,o=new ye;function a(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,R=0,T=0,E=0,A=0,_=0,v=0,C=0,S=0;c.sort(ob);for(let P=0,F=c.length;P<F;P++){let O=c[P],G=O.color,L=O.intensity,I=O.distance,z=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===us?z=O.shadow.map.texture:z=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=G.r*L,u+=G.g*L,d+=G.b*L;else if(O.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(O.sh.coefficients[H],L);S++}else if(O.isSunLight){let H=t.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,et=e.get(O);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=z;let ft=Y.getViewportCount();for(let St=0;St<ft;St++)n.sunShadowMatrix[x+St]=Y.getMatrix(St),n.sunShadowCascade[x+St]=Y._cascadeData[St];x+=ft,p++}n.sun[f]=H,f++}else if(O.isDirectionalLight){let H=t.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,et=e.get(O);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=O.shadow.matrix,E++}n.directional[m]=H,m++}else if(O.isSpotLight){let H=t.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(G).multiplyScalar(L),H.distance=I,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,n.spot[y]=H;let Y=O.shadow;if(O.map&&(n.spotLightMap[v]=O.map,v++,Y.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[y]=Y.matrix,O.castShadow){let et=e.get(O);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=z,_++}y++}else if(O.isRectAreaLight){let H=t.get(O);H.color.copy(G).multiplyScalar(L),H.halfWidth.set(O.width*.5,0,0),H.halfHeight.set(0,O.height*.5,0),n.rectArea[R]=H,R++}else if(O.isPointLight){let H=t.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),H.distance=O.distance,H.decay=O.decay,O.castShadow){let Y=O.shadow,et=e.get(O);et.shadowIntensity=Y.intensity,et.shadowBias=Y.bias,et.shadowNormalBias=Y.normalBias,et.shadowRadius=Y.radius,et.shadowMapSize=Y.mapSize,et.shadowCameraNear=Y.camera.near,et.shadowCameraFar=Y.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=O.shadow.matrix,A++}n.point[g]=H,g++}else if(O.isHemisphereLight){let H=t.get(O);H.skyColor.copy(O.color).multiplyScalar(L),H.groundColor.copy(O.groundColor).multiplyScalar(L),n.hemi[T]=H,T++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let w=n.hash;(w.sunLength!==f||w.directionalLength!==m||w.pointLength!==g||w.spotLength!==y||w.rectAreaLength!==R||w.hemiLength!==T||w.numSunShadows!==p||w.numDirectionalShadows!==E||w.numPointShadows!==A||w.numSpotShadows!==_||w.numSpotMaps!==v||w.numLightProbes!==S)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=R,n.point.length=g,n.hemi.length=T,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,w.sunLength=f,w.directionalLength=m,w.pointLength=g,w.spotLength=y,w.rectAreaLength=R,w.hemiLength=T,w.numSunShadows=p,w.numDirectionalShadows=E,w.numPointShadows=A,w.numSpotShadows=_,w.numSpotMaps=v,w.numLightProbes=S,n.version=rb++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,R=c.length;y<R;y++){let T=c[y];if(T.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),u++}else if(T.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),d++}else if(T.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),p++}else if(T.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function pm(s){let t=new ab(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lb(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new pm(s),t.set(i,[a])):r>=o.length?(a=new pm(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ub=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],db=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],mm=new ye,ca=new q,Hu=new q;function fb(s,t,e){let n=new rs,i=new ee,r=new ee,o=new Se,a=new wl,l=new Tl,c={},h=e.maxTextureSize,u={[hs]:on,[on]:hs,[mi]:mi},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:cb,fragmentShader:hb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ss;p.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vs;let g=this.type;this.render=function(A,_,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===cp&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vs);let C=s.getRenderTarget(),S=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),P=s.state;P.setBlending(Gs),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=g!==this.type;F&&_.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(G=>G.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,G=A.length;O<G;O++){let L=A[O],I=L.shadow;if(I===void 0){Bt("WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);let z=I.getFrameExtents();i.multiply(z),r.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,I.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,I.mapSize.y=r.y));let H=s.state.buffers.depth.getReversed();if(I.camera._reversedDepth=H,I.map===null||F===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===qr){if(L.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new wn(i.x,i.y,{format:us,type:$n,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),I.map.texture.name=L.name+".shadowMap",I.map.depthTexture=new Fi(i.x,i.y,Kn),I.map.depthTexture.name=L.name+".shadowMapDepth",I.map.depthTexture.format=Li,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ze,I.map.depthTexture.magFilter=ze}else L.isPointLight?(I.map=new ua(i.x),I.map.depthTexture=new Xo(i.x,Jn)):(I.map=new wn(i.x,i.y),I.map.depthTexture=new Fi(i.x,i.y,Jn)),I.map.depthTexture.name=L.name+".shadowMap",I.map.depthTexture.format=Li,this.type===Vs?(I.map.depthTexture.compareFunction=H?Ou:Iu,I.map.depthTexture.minFilter=Ye,I.map.depthTexture.magFilter=Ye):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=ze,I.map.depthTexture.magFilter=ze);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==i.x||I.map.height!==i.y)&&I.map.setSize(i.x,i.y);let Y=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();L.isPointLight!==!0&&I.updateMatrices(L,v);let et=(I.camera.layers.mask&4294967294)!==0?I.camera.layers:v.layers;for(let ft=0;ft<Y;ft++){let St=I.getCamera(ft);if(L.isPointLight){let K=I.camera,lt=I.matrix,xt=L.distance||K.far;xt!==K.far&&(K.far=xt,K.updateProjectionMatrix()),ca.setFromMatrixPosition(L.matrixWorld),K.position.copy(ca),Hu.copy(K.position),Hu.add(ub[ft]),K.up.copy(db[ft]),K.lookAt(Hu),K.updateMatrixWorld(),lt.makeTranslation(-ca.x,-ca.y,-ca.z),mm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),I._frustum.setFromProjectionMatrix(mm,K.coordinateSystem,K.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)s.setRenderTarget(I.map,ft),s.clear();else{ft===0&&(s.setRenderTarget(I.map),s.clear());let K=I.getViewport(ft);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),P.viewport(o)}n=I.getFrustum(ft),T(_,v,St,L,et,this.type)}I.isPointLightShadow!==!0&&this.type===qr&&y(I,v),I.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,S,w)};function y(A,_){let v=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new wn(i.x,i.y,{format:us,type:$n}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,v,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,v,f,x,null)}function R(A,_,v,C){let S=null,w=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)S=w;else if(S=v.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let P=S.uuid,F=_.uuid,O=c[P];O===void 0&&(O={},c[P]=O);let G=O[F];G===void 0&&(G=S.clone(),O[F]=G,_.addEventListener("dispose",E)),S=G}if(S.visible=_.visible,S.wireframe=_.wireframe,C===qr?S.side=_.shadowSide!==null?_.shadowSide:_.side:S.side=_.shadowSide!==null?_.shadowSide:u[_.side],S.alphaMap=_.alphaMap,S.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,S.map=_.map,S.clipShadows=_.clipShadows,S.clippingPlanes=_.clippingPlanes,S.clipIntersection=_.clipIntersection,S.displacementMap=_.displacementMap,S.displacementScale=_.displacementScale,S.displacementBias=_.displacementBias,S.wireframeLinewidth=_.wireframeLinewidth,S.linewidth=_.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let P=s.properties.get(S);P.light=v}return S}function T(A,_,v,C,S,w){if(A.visible===!1)return;if(A.layers.test(S)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===qr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let O=t.update(A),G=A.material;if(Array.isArray(G)){let L=O.groups;for(let I=0,z=L.length;I<z;I++){let H=L[I],Y=G[H.materialIndex];if(Y&&Y.visible){let et=R(A,Y,C,w);A.onBeforeShadow(s,A,_,v,O,et,H),s.renderBufferDirect(v,null,O,et,A,H),A.onAfterShadow(s,A,_,v,O,et,H)}}}else if(G.visible){let L=R(A,G,C,w);A.onBeforeShadow(s,A,_,v,O,L,null),s.renderBufferDirect(v,null,O,L,A,null),A.onAfterShadow(s,A,_,v,O,L,null)}}let F=A.children;for(let O=0,G=F.length;O<G;O++)T(F[O],_,v,C,S,w)}function E(A){A.target.removeEventListener("dispose",E);for(let v in c){let C=c[v],S=A.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}function pb(s,t){function e(){let N=!1,nt=new Se,$=null,dt=new Se(0,0,0,0);return{setMask:function(ot){$!==ot&&!N&&(s.colorMask(ot,ot,ot,ot),$=ot)},setLocked:function(ot){N=ot},setClear:function(ot,ht,Dt,Yt,rt){rt===!0&&(ot*=Yt,ht*=Yt,Dt*=Yt),nt.set(ot,ht,Dt,Yt),dt.equals(nt)===!1&&(s.clearColor(ot,ht,Dt,Yt),dt.copy(nt))},reset:function(){N=!1,$=null,dt.set(-1,0,0,0)}}}function n(){let N=!1,nt=!1,$=null,dt=null,ot=null;return{setReversed:function(ht){if(nt!==ht){let Dt=t.get("EXT_clip_control");ht?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),nt=ht;let Yt=ot;ot=null,this.setClear(Yt)}},getReversed:function(){return nt},setTest:function(ht){ht?pt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(ht){$!==ht&&!N&&(s.depthMask(ht),$=ht)},setFunc:function(ht){if(nt&&(ht=Hp[ht]),dt!==ht){switch(ht){case ol:s.depthFunc(s.NEVER);break;case al:s.depthFunc(s.ALWAYS);break;case ll:s.depthFunc(s.LESS);break;case zr:s.depthFunc(s.LEQUAL);break;case cl:s.depthFunc(s.EQUAL);break;case hl:s.depthFunc(s.GEQUAL);break;case ul:s.depthFunc(s.GREATER);break;case dl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=ht}},setLocked:function(ht){N=ht},setClear:function(ht){ot!==ht&&(ot=ht,nt&&(ht=1-ht),s.clearDepth(ht))},reset:function(){N=!1,$=null,dt=null,ot=null,nt=!1}}}function i(){let N=!1,nt=null,$=null,dt=null,ot=null,ht=null,Dt=null,Yt=null,rt=null;return{setTest:function(Lt){N||(Lt?pt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(Lt){nt!==Lt&&!N&&(s.stencilMask(Lt),nt=Lt)},setFunc:function(Lt,Ht,vt){($!==Lt||dt!==Ht||ot!==vt)&&(s.stencilFunc(Lt,Ht,vt),$=Lt,dt=Ht,ot=vt)},setOp:function(Lt,Ht,vt){(ht!==Lt||Dt!==Ht||Yt!==vt)&&(s.stencilOp(Lt,Ht,vt),ht=Lt,Dt=Ht,Yt=vt)},setLocked:function(Lt){N=Lt},setClear:function(Lt){rt!==Lt&&(s.clearStencil(Lt),rt=Lt)},reset:function(){N=!1,nt=null,$=null,dt=null,ot=null,ht=null,Dt=null,Yt=null,rt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,R=null,T=null,E=null,A=null,_=null,v=new qt(0,0,0),C=0,S=!1,w=null,P=null,F=null,O=null,G=null,L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=z>=2);let Y=null,et={},ft=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),K=new Se().fromArray(ft),lt=new Se().fromArray(St);function xt(N,nt,$,dt){let ot=new Uint8Array(4),ht=s.createTexture();s.bindTexture(N,ht),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<$;Dt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(nt+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return ht}let Pt={};Pt[s.TEXTURE_2D]=xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[s.TEXTURE_2D_ARRAY]=xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(s.DEPTH_TEST),o.setFunc(zr),We(!1),ge(uu),pt(s.CULL_FACE),Ae(Gs);function pt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Nt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function re(N,nt){return d[N]!==nt?(s.bindFramebuffer(N,nt),d[N]=nt,N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=nt),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ft(N,nt){let $=p,dt=!1;if(N){$=f.get(nt),$===void 0&&($=[],f.set(nt,$));let ot=N.textures;if($.length!==ot.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Dt=ot.length;ht<Dt;ht++)$[ht]=s.COLOR_ATTACHMENT0+ht;$.length=ot.length,dt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,dt=!0);dt&&s.drawBuffers($)}function oe(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let Kt={[Hs]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[dp]:s.FUNC_REVERSE_SUBTRACT};Kt[fp]=s.MIN,Kt[pp]=s.MAX;let jt={[mp]:s.ZERO,[gp]:s.ONE,[_p]:s.SRC_COLOR,[mu]:s.SRC_ALPHA,[Mp]:s.SRC_ALPHA_SATURATE,[Sp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[xp]:s.ONE_MINUS_SRC_COLOR,[gu]:s.ONE_MINUS_SRC_ALPHA,[bp]:s.ONE_MINUS_DST_COLOR,[yp]:s.ONE_MINUS_DST_ALPHA,[wp]:s.CONSTANT_COLOR,[Tp]:s.ONE_MINUS_CONSTANT_COLOR,[Cp]:s.CONSTANT_ALPHA,[Ep]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(N,nt,$,dt,ot,ht,Dt,Yt,rt,Lt){if(N===Gs){m===!0&&(Nt(s.BLEND),m=!1);return}if(m===!1&&(pt(s.BLEND),m=!0),N!==hp){if(N!==g||Lt!==S){if((y!==Hs||E!==Hs)&&(s.blendEquation(s.FUNC_ADD),y=Hs,E=Hs),Lt)switch(N){case Zr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case du:s.blendFunc(s.ONE,s.ONE);break;case fu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",N);break}else switch(N){case Zr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case du:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fu:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pu:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",N);break}R=null,T=null,A=null,_=null,v.set(0,0,0),C=0,g=N,S=Lt}return}ot=ot||nt,ht=ht||$,Dt=Dt||dt,(nt!==y||ot!==E)&&(s.blendEquationSeparate(Kt[nt],Kt[ot]),y=nt,E=ot),($!==R||dt!==T||ht!==A||Dt!==_)&&(s.blendFuncSeparate(jt[$],jt[dt],jt[ht],jt[Dt]),R=$,T=dt,A=ht,_=Dt),(Yt.equals(v)===!1||rt!==C)&&(s.blendColor(Yt.r,Yt.g,Yt.b,rt),v.copy(Yt),C=rt),g=N,S=!1}function be(N,nt){N.side===mi?Nt(s.CULL_FACE):pt(s.CULL_FACE);let $=N.side===on;nt&&($=!$),We($),N.blending===Zr&&N.transparent===!1?Ae(Gs):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let dt=N.stencilWrite;a.setTest(dt),dt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){w!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),w=N)}function ge(N){N!==ap?(pt(s.CULL_FACE),N!==P&&(N===uu?s.cullFace(s.BACK):N===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),P=N}function On(N){N!==F&&(I&&s.lineWidth(N),F=N)}function Re(N,nt,$){N?(pt(s.POLYGON_OFFSET_FILL),(O!==nt||G!==$)&&(O=nt,G=$,o.getReversed()&&(nt=-nt,$=-$),s.polygonOffset(nt,$))):Nt(s.POLYGON_OFFSET_FILL)}function yn(N){N?pt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function wt(N){N===void 0&&(N=s.TEXTURE0+L-1),Y!==N&&(s.activeTexture(N),Y=N)}function Ut(N,nt,$){$===void 0&&(Y===null?$=s.TEXTURE0+L-1:$=Y);let dt=et[$];dt===void 0&&(dt={type:void 0,texture:void 0},et[$]=dt),(dt.type!==N||dt.texture!==nt)&&(Y!==$&&(s.activeTexture($),Y=$),s.bindTexture(N,nt||Pt[N]),dt.type=N,dt.texture=nt)}function U(){let N=et[Y];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Me(){try{s.compressedTexImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Gt(){try{s.compressedTexImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function le(){try{s.texSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function at(){try{s.texSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Ot(){try{s.compressedTexSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function At(){try{s.texStorage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function D(){try{s.texStorage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function b(){try{s.texImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function X(){try{s.texImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function st(N){return u[N]!==void 0?u[N]:s.getParameter(N)}function it(N,nt){u[N]!==nt&&(s.pixelStorei(N,nt),u[N]=nt)}function ct(N){K.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function gt(N){lt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),lt.copy(N))}function Q(N,nt){let $=c.get(nt);$===void 0&&($=new WeakMap,c.set(nt,$));let dt=$.get(N);dt===void 0&&(dt=s.getUniformBlockIndex(nt,N.name),s.uniformBlockBinding(nt,dt,dt),$.set(N,dt))}function tt(N,nt,$){let ot=c.get(nt).get(N);l[ot]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ot,$),l[ot]=$)}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Y=null,et={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,R=null,T=null,E=null,A=null,_=null,v=new qt(0,0,0),C=0,S=!1,w=null,P=null,F=null,O=null,G=null,K.set(0,0,s.canvas.width,s.canvas.height),lt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Nt,bindFramebuffer:re,drawBuffers:Ft,useProgram:oe,setBlending:Ae,setMaterial:be,setFlipSided:We,setCullFace:ge,setLineWidth:On,setPolygonOffset:Re,setScissorTest:yn,activeTexture:wt,bindTexture:Ut,unbindTexture:U,compressedTexImage2D:Me,compressedTexImage3D:Gt,texImage2D:b,texImage3D:X,pixelStorei:it,getParameter:st,updateUBOMapping:Q,uniformBlockBinding:tt,texStorage2D:At,texStorage3D:D,texSubImage2D:le,texSubImage3D:at,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ot,scissor:ct,viewport:gt,reset:ut}}function mb(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,b){return m?new OffscreenCanvas(D,b):Bo("canvas")}function y(D,b,X){let st=1,it=At(D);if((it.width>X||it.height>X)&&(st=X/Math.max(it.width,it.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ct=Math.floor(st*it.width),gt=Math.floor(st*it.height);d===void 0&&(d=g(ct,gt));let Q=b?g(ct,gt):d;return Q.width=ct,Q.height=gt,Q.getContext("2d").drawImage(D,0,0,ct,gt),Bt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ct+"x"+gt+")."),Q}else return"data"in D&&Bt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),D;return D}function R(D){return D.generateMipmaps}function T(D){s.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(D,b,X,st,it,ct=!1){if(D!==null){if(s[D]!==void 0)return s[D];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let gt;st&&(gt=t.get("EXT_texture_norm16"),gt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===s.RED&&(X===s.FLOAT&&(Q=s.R32F),X===s.HALF_FLOAT&&(Q=s.R16F),X===s.UNSIGNED_BYTE&&(Q=s.R8),X===s.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),X===s.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.R8UI),X===s.UNSIGNED_SHORT&&(Q=s.R16UI),X===s.UNSIGNED_INT&&(Q=s.R32UI),X===s.BYTE&&(Q=s.R8I),X===s.SHORT&&(Q=s.R16I),X===s.INT&&(Q=s.R32I)),b===s.RG&&(X===s.FLOAT&&(Q=s.RG32F),X===s.HALF_FLOAT&&(Q=s.RG16F),X===s.UNSIGNED_BYTE&&(Q=s.RG8),X===s.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),X===s.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RG8UI),X===s.UNSIGNED_SHORT&&(Q=s.RG16UI),X===s.UNSIGNED_INT&&(Q=s.RG32UI),X===s.BYTE&&(Q=s.RG8I),X===s.SHORT&&(Q=s.RG16I),X===s.INT&&(Q=s.RG32I)),b===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),X===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),X===s.UNSIGNED_INT&&(Q=s.RGB32UI),X===s.BYTE&&(Q=s.RGB8I),X===s.SHORT&&(Q=s.RGB16I),X===s.INT&&(Q=s.RGB32I)),b===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),X===s.UNSIGNED_INT&&(Q=s.RGBA32UI),X===s.BYTE&&(Q=s.RGBA8I),X===s.SHORT&&(Q=s.RGBA16I),X===s.INT&&(Q=s.RGBA32I)),b===s.RGB&&(X===s.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),X===s.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),b===s.RGBA){let tt=ct?Uo:te.getTransfer(it);X===s.FLOAT&&(Q=s.RGBA32F),X===s.HALF_FLOAT&&(Q=s.RGBA16F),X===s.UNSIGNED_BYTE&&(Q=tt===ce?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),X===s.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(D,b){let X;return D?b===null||b===Jn||b===Xs?X=s.DEPTH24_STENCIL8:b===Kn?X=s.DEPTH32F_STENCIL8:b===$r&&(X=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jn||b===Xs?X=s.DEPTH_COMPONENT24:b===Kn?X=s.DEPTH_COMPONENT32F:b===$r&&(X=s.DEPTH_COMPONENT16),X}function v(D,b){return R(D)===!0||D.isFramebufferTexture&&D.minFilter!==ze&&D.minFilter!==Ye?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function C(D){let b=new WeakRef(D);n.get(D).__ref=b,p.add(b),x.register(D,b,b)}function S(D){let b=n.get(D).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function w(D){F(D.target)}function P(D){O(D.target)}function F(D){D.removeEventListener("dispose",w),S(D),L(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&u.delete(D)}function O(D){D.removeEventListener("dispose",P),S(D),z(D)}function G(){for(let D of p){let b=D.deref();b!==void 0&&(b.isRenderTarget===!0?O(b):F(b))}p.clear(),u.clear()}function L(D){let b=n.get(D);if(b.__webglInit===void 0)return;let X=D.source,st=f.get(X);if(st){let it=st[b.__cacheKey];it.usedTimes--,it.usedTimes===0&&I(D),Object.keys(st).length===0&&f.delete(X)}n.remove(D)}function I(D){let b=n.get(D);s.deleteTexture(b.__webglTexture);let X=D.source,st=f.get(X);delete st[b.__cacheKey],o.memory.textures--}function z(D){let b=n.get(D);b.__depthDisposeCallback&&b.__depthDisposeCallback();let X=D.depthTexture;if(X&&X.renderTarget===D&&F(X),D.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let ct=0;ct<b.__webglFramebuffer[it].length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[it][ct]);else s.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)s.deleteFramebuffer(b.__webglFramebuffer[it]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let st=D.textures;for(let it=0,ct=st.length;it<ct;it++){let gt=n.get(st[it]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(st[it])}n.remove(D)}let H=0;function Y(){H=0}function et(){return H}function ft(D){H=D}function St(){let D=H;return D>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,D}function K(D){let b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.mipmapsAutoUpdate),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function lt(D,b){let X=n.get(D);if(D.isVideoTexture&&_e(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let st=D.image;if(st===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{be(X,D,b);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function xt(D,b){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){be(X,D,b);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function Pt(D,b){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){be(X,D,b);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function pt(D,b){let X=n.get(D);if(D.version>0&&X.__version!==D.version){We(X,D,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}let Nt={[fl]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[pl]:s.MIRRORED_REPEAT},re={[ze]:s.NEAREST,[Pp]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[zl]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},Ft={[Lp]:s.NEVER,[Lu]:s.ALWAYS,[Fp]:s.LESS,[Iu]:s.LEQUAL,[Np]:s.EQUAL,[Ou]:s.GEQUAL,[Up]:s.GREATER,[Bp]:s.NOTEQUAL};function oe(D,b){if(b.type===Kn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ye||b.magFilter===zl||b.magFilter===ta||b.magFilter===Zn||b.minFilter===Ye||b.minFilter===zl||b.minFilter===ta||b.minFilter===Zn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Nt[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Nt[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Nt[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,re[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,re[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ft[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ze||b.minFilter!==ta&&b.minFilter!==Zn||b.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(D,b){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",w),C(b));let st=b.source,it=f.get(st);it===void 0&&(it={},f.set(st,it));let ct=K(b);if(ct!==D.__cacheKey){it[ct]===void 0&&(it[ct]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[ct].usedTimes++;let gt=it[D.__cacheKey];gt!==void 0&&(it[D.__cacheKey].usedTimes--,gt.usedTimes===0&&I(b)),D.__cacheKey=ct,D.__webglTexture=it[ct].texture}return X}function jt(D,b,X){return Math.floor(Math.floor(D/X)/b)}function Ae(D,b,X,st){let ct=D.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,X,st,b.data);else{ct.sort((N,nt)=>N.start-nt.start);let gt=0;for(let N=1;N<ct.length;N++){let nt=ct[gt],$=ct[N],dt=nt.start+nt.count,ot=jt($.start,b.width,4),ht=jt(nt.start,b.width,4);$.start<=dt+1&&ot===ht&&jt($.start+$.count-1,b.width,4)===ot?nt.count=Math.max(nt.count,$.start+$.count-nt.start):(++gt,ct[gt]=$)}ct.length=gt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ut=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let N=0,nt=ct.length;N<nt;N++){let $=ct[N],dt=Math.floor($.start/4),ot=Math.ceil($.count/4),ht=dt%b.width,Dt=Math.floor(dt/b.width),Yt=ot,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(s.TEXTURE_2D,0,ht,Dt,Yt,rt,X,st,b.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ut)}}function be(D,b,X){let st=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=s.TEXTURE_3D);let it=Kt(D,b),ct=b.source;e.bindTexture(st,D.__webglTexture,s.TEXTURE0+X);let gt=n.get(ct);if(ct.version!==gt.__version||it===!0){if(e.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let rt=te.getPrimaries(te.workingColorSpace),Lt=b.colorSpace===Ui?null:te.getPrimaries(b.colorSpace),Ht=b.colorSpace===Ui||rt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let tt=y(b.image,!1,i.maxTextureSize);tt=Ot(b,tt);let ut=r.convert(b.format,b.colorSpace),N=r.convert(b.type),nt=A(b.internalFormat,ut,N,b.normalized,b.colorSpace,b.isVideoTexture);oe(st,b);let $,dt=b.mipmaps,ot=b.isVideoTexture!==!0,ht=gt.__version===void 0||it===!0,Dt=ct.dataReady,Yt=v(b,tt);if(b.isDepthTexture)nt=_(b.format===Ni,b.type),ht&&(ot?e.texStorage2D(s.TEXTURE_2D,1,nt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,nt,tt.width,tt.height,0,ut,N,null));else if(b.isDataTexture)if(dt.length>0){ot&&ht&&e.texStorage2D(s.TEXTURE_2D,Yt,nt,dt[0].width,dt[0].height);for(let rt=0,Lt=dt.length;rt<Lt;rt++)$=dt[rt],ot?Dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,ut,N,$.data):e.texImage2D(s.TEXTURE_2D,rt,nt,$.width,$.height,0,ut,N,$.data);b.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(s.TEXTURE_2D,Yt,nt,tt.width,tt.height),Dt&&Ae(b,tt,ut,N)):e.texImage2D(s.TEXTURE_2D,0,nt,tt.width,tt.height,0,ut,N,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,nt,dt[0].width,dt[0].height,tt.depth);for(let rt=0,Lt=dt.length;rt<Lt;rt++)if($=dt[rt],b.format!==Qn)if(ut!==null)if(ot){if(Dt)if(b.layerUpdates.size>0){let Ht=Vu($.width,$.height,b.format,b.type);for(let vt of b.layerUpdates){let ue=$.data.subarray(vt*Ht/$.data.BYTES_PER_ELEMENT,(vt+1)*Ht/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,vt,$.width,$.height,1,ut,ue)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,tt.depth,ut,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,nt,$.width,$.height,tt.depth,0,$.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,$.width,$.height,tt.depth,ut,N,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,nt,$.width,$.height,tt.depth,0,ut,N,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(s.TEXTURE_2D,Yt,nt,dt[0].width,dt[0].height);for(let rt=0,Lt=dt.length;rt<Lt;rt++)$=dt[rt],b.format!==Qn?ut!==null?ot?Dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,ut,$.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,nt,$.width,$.height,0,$.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,$.width,$.height,ut,N,$.data):e.texImage2D(s.TEXTURE_2D,rt,nt,$.width,$.height,0,ut,N,$.data)}else if(b.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Yt,nt,tt.width,tt.height,tt.depth),Dt)if(b.layerUpdates.size>0){let rt=Vu(tt.width,tt.height,b.format,b.type);for(let Lt of b.layerUpdates){let Ht=tt.data.subarray(Lt*rt/tt.data.BYTES_PER_ELEMENT,(Lt+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Lt,tt.width,tt.height,1,ut,N,Ht)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,N,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,tt.width,tt.height,tt.depth,0,ut,N,tt.data);else if(b.isData3DTexture)ot?(ht&&e.texStorage3D(s.TEXTURE_3D,Yt,nt,tt.width,tt.height,tt.depth),Dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,N,tt.data)):e.texImage3D(s.TEXTURE_3D,0,nt,tt.width,tt.height,tt.depth,0,ut,N,tt.data);else if(b.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(s.TEXTURE_2D,Yt,nt,tt.width,tt.height);else{let rt=tt.width,Lt=tt.height;for(let Ht=0;Ht<Yt;Ht++)e.texImage2D(s.TEXTURE_2D,Ht,nt,rt,Lt,0,ut,N,null),rt>>=1,Lt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),tt.parentNode!==rt){rt.appendChild(tt),u.add(b),rt.onpaint=Lt=>{let Ht=Lt.changedElements;for(let vt of u)Ht.includes(vt.image)&&(vt.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let Ht=s.RGBA,vt=s.RGBA,ue=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ht,vt,ue,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ot&&ht){let rt=At(dt[0]);e.texStorage2D(s.TEXTURE_2D,Yt,nt,rt.width,rt.height)}for(let rt=0,Lt=dt.length;rt<Lt;rt++)$=dt[rt],ot?Dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,ut,N,$):e.texImage2D(s.TEXTURE_2D,rt,nt,ut,N,$);b.generateMipmaps=!1}else if(ot){if(ht){let rt=At(tt);e.texStorage2D(s.TEXTURE_2D,Yt,nt,rt.width,rt.height)}Dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,N,tt)}else e.texImage2D(s.TEXTURE_2D,0,nt,ut,N,tt);R(b)&&b.mipmapsAutoUpdate===!0&&T(st),gt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function We(D,b,X){if(b.image.length!==6)return;let st=Kt(D,b),it=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+X);let ct=n.get(it);if(it.version!==ct.__version||st===!0){e.activeTexture(s.TEXTURE0+X);let gt=te.getPrimaries(te.workingColorSpace),Q=b.colorSpace===Ui?null:te.getPrimaries(b.colorSpace),tt=b.colorSpace===Ui||gt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,nt=[];for(let vt=0;vt<6;vt++)!ut&&!N?nt[vt]=y(b.image[vt],!0,i.maxCubemapSize):nt[vt]=N?b.image[vt].image:b.image[vt],nt[vt]=Ot(b,nt[vt]);let $=nt[0],dt=r.convert(b.format,b.colorSpace),ot=r.convert(b.type),ht=A(b.internalFormat,dt,ot,b.normalized,b.colorSpace),Dt=b.isVideoTexture!==!0,Yt=ct.__version===void 0||st===!0,rt=it.dataReady,Lt=v(b,$);oe(s.TEXTURE_CUBE_MAP,b);let Ht;if(b.isDepthTexture){if(ht=_(b.format===Ni,b.type),Yt)if(Dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ht,$.width,$.height);else for(let vt=0;vt<6;vt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,$.width,$.height,0,dt,ot,null)}else if(ut){Dt&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ht,$.width,$.height);for(let vt=0;vt<6;vt++){Ht=nt[vt].mipmaps;for(let ue=0;ue<Ht.length;ue++){let Ue=Ht[ue];b.format!==Qn?dt!==null?Dt?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,0,0,Ue.width,Ue.height,dt,Ue.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,ht,Ue.width,Ue.height,0,Ue.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,0,0,Ue.width,Ue.height,dt,ot,Ue.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue,ht,Ue.width,Ue.height,0,dt,ot,Ue.data)}}}else{if(Ht=b.mipmaps,Dt&&Yt){Ht.length>0&&Lt++;let vt=At(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ht,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(N){Dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,nt[vt].width,nt[vt].height,dt,ot,nt[vt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,nt[vt].width,nt[vt].height,0,dt,ot,nt[vt].data);for(let ue=0;ue<Ht.length;ue++){let Zi=Ht[ue].image[vt].image;Dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,0,0,Zi.width,Zi.height,dt,ot,Zi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,ht,Zi.width,Zi.height,0,dt,ot,Zi.data)}}else{Dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,dt,ot,nt[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ht,dt,ot,nt[vt]);for(let ue=0;ue<Ht.length;ue++){let Ue=Ht[ue];Dt?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,0,0,dt,ot,Ue.image[vt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,ue+1,ht,dt,ot,Ue.image[vt])}}}R(b)&&b.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),ct.__version=it.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ge(D,b,X,st,it,ct){let gt=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),tt=A(X.internalFormat,gt,Q,X.normalized,X.colorSpace),ut=n.get(b),N=n.get(X);if(N.__renderTarget=b,!ut.__hasExternalTextures){let nt=Math.max(1,b.width>>ct),$=Math.max(1,b.height>>ct);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,ct,tt,nt,$,b.depth,0,gt,Q,null):e.texImage2D(it,ct,tt,nt,$,0,gt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),at(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,it,N.__webglTexture,0,le(b)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,it,N.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function On(D,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){let st=b.depthTexture,it=st&&st.isDepthTexture?st.type:null,ct=_(b.stencilBuffer,it),gt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;at(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le(b),ct,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,le(b),ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,D)}else{let st=b.textures;for(let it=0;it<st.length;it++){let ct=st[it],gt=r.convert(ct.format,ct.colorSpace),Q=r.convert(ct.type),tt=A(ct.internalFormat,gt,Q,ct.normalized,ct.colorSpace);at(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le(b),tt,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,le(b),tt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,tt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(D,b,X){let st=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(b.depthTexture);it.__renderTarget=b;let ct=st?b.depthTexture.image[0]:b.depthTexture.image;(!it.__webglTexture||ct.width!==b.width||ct.height!==b.height)&&(ct.width=b.width,ct.height=b.height,b.depthTexture.needsUpdate=!0),st?pt(b.depthTexture,0):lt(b.depthTexture,0);let gt=it.__webglTexture,Q=le(b),tt=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,ut=b.depthTexture.format===Ni?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Li)at(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,tt,gt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,ut,tt,gt,0);else if(b.depthTexture.format===Ni)at(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,tt,gt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,ut,tt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yn(D){let b=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){let st=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),st){let it=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,st.removeEventListener("dispose",it)};st.addEventListener("dispose",it),b.__depthDisposeCallback=it}b.__boundDepthTexture=st}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(X)for(let st=0;st<6;st++)Re(b.__webglFramebuffer[st],D,st);else D.texture.mipmaps.length>0?Re(b.__webglFramebuffer[0],D,0):Re(b.__webglFramebuffer,D,0);else if(X){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]===void 0)b.__webglDepthbuffer[st]=s.createRenderbuffer(),On(b.__webglDepthbuffer[st],D,!1);else{let it=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ct)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),On(b.__webglDepthbuffer,D,!1);else{let it=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(D,b,X){let st=n.get(D);b!==void 0&&ge(st.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&yn(D)}function Ut(D){let b=D.texture,X=n.get(D),st=n.get(b);D.addEventListener("dispose",P),C(D);let it=D.textures,ct=D.isWebGLCubeRenderTarget===!0,gt=it.length>1;if(gt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=b.version,o.memory.textures++),ct){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let tt=0;tt<b.mipmaps.length;tt++)X.__webglFramebuffer[Q][tt]=s.createFramebuffer()}else X.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)X.__webglFramebuffer[Q]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(gt)for(let Q=0,tt=it.length;Q<tt;Q++){let ut=n.get(it[Q]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&at(D)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<it.length;Q++){let tt=it[Q];X.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let ut=r.convert(tt.format,tt.colorSpace),N=r.convert(tt.type),nt=A(tt.internalFormat,ut,N,tt.normalized,tt.colorSpace,D.isXRRenderTarget===!0),$=le(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,nt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),On(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),oe(s.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)ge(X.__webglFramebuffer[Q][tt],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else ge(X.__webglFramebuffer[Q],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);R(b)?T(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Q=0,tt=it.length;Q<tt;Q++){let ut=it[Q],N=n.get(ut),nt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(nt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,N.__webglTexture),oe(nt,ut),ge(X.__webglFramebuffer,D,ut,s.COLOR_ATTACHMENT0+Q,nt,0),R(ut)&&T(nt)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,st.__webglTexture),oe(Q,b),b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)ge(X.__webglFramebuffer[tt],D,b,s.COLOR_ATTACHMENT0,Q,tt);else ge(X.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,Q,0);R(b)?T(Q):b.mipmaps.length>0&&s.texParameteri(Q,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&yn(D)}function U(D){let b=D.textures;for(let X=0,st=b.length;X<st;X++){let it=b[X];if(R(it)&&it.mipmapsAutoUpdate===!0){let ct=E(D),gt=n.get(it).__webglTexture;e.bindTexture(ct,gt),T(ct),e.unbindTexture()}}}let Me=[];function Gt(D){if(D.samples>0){if(at(D)===!1){let b=D.textures,X=D.width,st=D.height,it=s.COLOR_BUFFER_BIT,ct=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(D),Q=b.length>1;if(Q)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let N=n.get(b[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,X,st,0,0,X,st,it,s.NEAREST),l===!0&&(Me.length=0,Me.push(s.COLOR_ATTACHMENT0+ut),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Me.push(ct),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,gt.__webglColorRenderbuffer[ut]);let N=n.get(b[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function le(D){return Math.min(i.maxSamples,D.samples)}function at(D){let b=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _e(D){let b=o.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function Ot(D,b){let X=D.colorSpace,st=D.format,it=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==No&&X!==Ui&&(te.getTransfer(X)===ce?(st!==Qn||it!==mn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",X)),b}function At(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=St,this.resetTextureUnits=Y,this.getTextureUnits=et,this.setTextureUnits=ft,this.setTexture2D=lt,this.setTexture2DArray=xt,this.setTexture3D=Pt,this.setTextureCube=pt,this.rebindTextures=wt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=yn,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=at,this.dispose=G}function gb(s,t){function e(n,i=Ui){let r,o=te.getTransfer(i);if(n===mn)return s.UNSIGNED_BYTE;if(n===Gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tu)return s.BYTE;if(n===Cu)return s.SHORT;if(n===$r)return s.UNSIGNED_SHORT;if(n===Vl)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===Kn)return s.FLOAT;if(n===$n)return s.HALF_FLOAT;if(n===Ru)return s.ALPHA;if(n===Pu)return s.RGB;if(n===Qn)return s.RGBA;if(n===Li)return s.DEPTH_COMPONENT;if(n===Ni)return s.DEPTH_STENCIL;if(n===Du)return s.RED;if(n===Wl)return s.RED_INTEGER;if(n===us)return s.RG;if(n===Xl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===ea||n===na||n===ia||n===sa)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===ql||n===Zl||n===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===$l||n===Ql||n===tc||n===ec||n===ra||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===$l)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ra)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===xc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===Sc||n===oa||n===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pi({vertexShader:_b,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pn(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ku=class extends hi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Ju,g={},y=e.getContextAttributes(),R=null,T=null,E=[],A=[],_=new ee,v=null,C=null,S=new Mn;S.viewport=new Se;let w=new Mn;w.viewport=new Se;let P=[S,w],F=new Ul,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let lt=E[K];return lt===void 0&&(lt=new Wr,E[K]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(K){let lt=E[K];return lt===void 0&&(lt=new Wr,E[K]=lt),lt.getGripSpace()},this.getHand=function(K){let lt=E[K];return lt===void 0&&(lt=new Wr,E[K]=lt),lt.getHandSpace()};function L(K){let lt=A.indexOf(K.inputSource);if(lt===-1)return;let xt=E[lt];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||o),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",z);for(let K=0;K<E.length;K++){let lt=A[K];lt!==null&&(A[K]=null,E[K].disconnect(lt))}O=null,G=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(R),f=null,d=null,u=null,i=null,T=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(_.width,_.height,!1),C!==null){let K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",I),i.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Pt=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=y.stencil?Ni:Li,Pt=y.stencil?Xs:Jn);let Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new wn(d.textureWidth,d.textureHeight,{format:Qn,type:mn,depthTexture:new Fi(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new wn(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(K){for(let lt=0;lt<K.removed.length;lt++){let xt=K.removed[lt],Pt=A.indexOf(xt);Pt>=0&&(A[Pt]=null,E[Pt].disconnect(xt))}for(let lt=0;lt<K.added.length;lt++){let xt=K.added[lt],Pt=A.indexOf(xt);if(Pt===-1){for(let Nt=0;Nt<E.length;Nt++)if(Nt>=A.length){A.push(xt),Pt=Nt;break}else if(A[Nt]===null){A[Nt]=xt,Pt=Nt;break}if(Pt===-1)break}let pt=E[Pt];pt&&pt.connect(xt)}}function H(K,lt){lt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(lt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let lt=K.near,xt=K.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),F.near=w.near=S.near=lt,F.far=w.far=S.far=xt,(O!==F.near||G!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,G=F.far),F.layers.mask=K.layers.mask|6,S.layers.mask=F.layers.mask&-5,w.layers.mask=F.layers.mask&-3;let Pt=K.parent,pt=F.cameras;H(F,Pt);for(let Nt=0;Nt<pt.length;Nt++)H(pt[Nt],Pt);F.projectionMatrix.copy(S.projectionMatrix),F.projectionMatrixInverse.copy(S.projectionMatrixInverse),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),Y(K,F,Pt)};function Y(K,lt,xt){xt===null?K.matrix.copy(lt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(lt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=gl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(K){return g[K]};let et=null;function ft(K,lt){if(h=lt.getViewerPose(c||o),p=lt,h!==null){let xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let Pt=!1;xt.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let Ft=0;Ft<xt.length;Ft++){let oe=xt[Ft],Kt=null;if(f!==null)Kt=f.getViewport(oe);else{let Ae=u.getViewSubImage(d,oe);Kt=Ae.viewport,Ft===0&&(t.setRenderTargetTextures(T,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(T))}let jt=P[Ft];jt===void 0&&(jt=new Mn,jt.layers.enable(Ft),jt.viewport=new Se,P[Ft]=jt),jt.matrix.fromArray(oe.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(oe.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Ft===0&&(F.matrix.copy(jt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(jt)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ft=u.getDepthInformation(xt[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,i.renderState)}if(pt&&pt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Ft=0;Ft<xt.length;Ft++){let oe=xt[Ft].camera;if(oe){let Kt=g[oe];Kt||(Kt=new jo,g[oe]=Kt);let jt=u.getCameraImage(oe);Kt.sourceTexture=jt}}}}for(let xt=0;xt<E.length;xt++){let Pt=A[xt],pt=E[xt];Pt!==null&&pt!==void 0&&pt.update(Pt,lt,c||o)}et&&et(K,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),p=null}let St=new gm;St.setAnimationLoop(ft),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},vb=new ye,Cm=new zt;Cm.set(-1,0,0,0,1,0,0,0,1);function yb(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Bu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,R,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,T)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,R):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),R=y.envMap,T=y.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,R){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=R*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sb(s,t,e,n){let i={},r={};function o(y,R){let T=R.program;n.uniformBlockBinding(y,T,i[y.id])}function a(y,R){let T=i[y.id];T===void 0&&(p(y),T=l(y),i[y.id]=T,y.addEventListener("dispose",m));let E=R.program;n.updateUBOMapping(y,E);let A=t.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let R=s.createBuffer(),T=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,T,E),s.bindBuffer(s.UNIFORM_BUFFER,null),R}function c(y){let R=i[y.id],T=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let A=0,_=T.length;A<_;A++){let v=T[A];if(Array.isArray(v))for(let C=0,S=v.length;C<S;C++)h(v[C],A,C,E);else h(v,A,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,R,T,E){if(d(y,R,T,E)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let v=0;for(let C=0;C<_.length;C++){let S=_[C],w=x(S,!0);u(S,y.__data,v),v+=w.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,y.__data)}}function u(y,R,T){typeof y=="number"||typeof y=="boolean"?R[T]=y:y.isMatrix3?(R[T]=y.elements[0],R[T+1]=y.elements[1],R[T+2]=y.elements[2],R[T+3]=0,R[T+4]=y.elements[3],R[T+5]=y.elements[4],R[T+6]=y.elements[5],R[T+7]=0,R[T+8]=y.elements[6],R[T+9]=y.elements[7],R[T+10]=y.elements[8],R[T+11]=0):ArrayBuffer.isView(y)?R.set(y.subarray(0,R.length-T),T):y.toArray(R,T)}function d(y,R,T,E){let A=y.value,_=R+"_"+T;if(Array.isArray(A)){E[_]===void 0&&(E[_]=[]);let v=E[_],C=!1;for(let S=0;S<A.length;S++)f(A[S],v,S)===!0&&(C=!0);return C}return f(A,E,_)}function f(y,R,T){if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{let E=R[T];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let R=y.uniforms,T=0,E=16;for(let _=0,v=R.length;_<v;_++){let C=Array.isArray(R[_])?R[_]:[R[_]];for(let S=0,w=C.length;S<w;S++){let P=C[S],F=Array.isArray(P.value)?P.value:[P.value],O=Array.isArray(R[_])||Array.isArray(P.value),G=T;for(let I=0,z=F.length;I<z;I++){let H=F[I],Y=x(H,O),et=T%E,ft=et%Y.boundary,St=et+ft;T+=ft,St!==0&&E-St<Y.storage&&(T+=E-St),I===0&&(G=T),T+=Y.storage}let L=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new L((T-G)/Float32Array.BYTES_PER_ELEMENT),P.__offset=G}}let A=T%E;return A>0&&(T+=E-A),y.__size=T,y.__cache={},this}function x(y,R){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=16,T.storage=48):y.isMatrix4?(T.boundary=16,T.storage=64):y.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",y),R===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(y){let R=y.target;R.removeEventListener("dispose",m),s.deleteBuffer(i[R.id]),delete i[R.id],delete r[R.id]}function g(){for(let y in i)s.deleteBuffer(i[y]);i={},r={}}return{bind:o,update:a,dispose:g}}var bb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function Mb(){return gi===null&&(gi=new Sl(bb,16,16,us,$n),gi.name="DFG_LUT",gi.minFilter=Ye,gi.magFilter=Ye,gi.wrapS=li,gi.wrapT=li,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Tc=class{constructor(t={}){let{canvas:e=zp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([jl,Xl,Wl]),g=new Set([mn,Jn,$r,Xs,Gl,Hl]),y=new Uint32Array(4),R=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},E=null,A=null,_=[],v=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,w=!1,P=null,F=null,O=null,G=null;this._outputColorSpace=je;let L=0,I=0,z=null,H=-1,Y=null,et=new Se,ft=new Se,St=null,K=new qt(0),lt=0,xt=e.width,Pt=e.height,pt=1,Nt=null,re=null,Ft=new Se(0,0,xt,Pt),oe=new Se(0,0,xt,Pt),Kt=!1,jt=new rs,Ae=new bl,be=!1,We=!1,ge=new ye,On=new q,Re=new Se,yn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function Ut(){return z===null?pt:1}let U=n;function Me(M,B){return e.getContext(M,B)}let Gt,le,at,_e,Ot,At,D,b,X,st,it,ct,gt,Q,tt,ut,N,nt,$,dt,ot,ht,Dt;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){let B="webgl2";if(U=Me(B,M),U===null)throw Me(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(M){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),kt("WebGLRenderer: "+M.message),M}function Yt(){Gt=new Ly(U),Gt.init(),ot=new gb(U,Gt),le=new My(U,Gt,t,ot),at=new pb(U,Gt),le.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),F=U.createFramebuffer(),O=U.createFramebuffer(),G=U.createFramebuffer(),_e=new Uy(U),Ot=new tb,At=new mb(U,Gt,at,Ot,le,ot,_e),D=new Oy(S),b=new k_(U),ht=new Sy(U,b),X=new Fy(U,b,_e,ht),st=new ky(U,X,b,ht,_e),nt=new By(U,le,At),tt=new wy(Ot),it=new QS(S,D,Gt,le,ht,tt),ct=new yb(S,Ot),gt=new nb,Q=new lb(Gt),N=new yy(S,D,at,st,p,l),ut=new fb(S,st,le),Dt=new Sb(U,_e,le,at),$=new by(U,Gt,_e),dt=new Ny(U,Gt,_e),_e.programs=it.programs,S.capabilities=le,S.extensions=Gt,S.properties=Ot,S.renderLists=gt,S.shadowMap=ut,S.state=at,S.info=_e}x!==mn&&(C=new Vy(x,e.width,e.height,a,i,r));let rt=new Ku(S,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(M){M!==void 0&&(pt=M,this.setSize(xt,Pt,!1))},this.getSize=function(M){return M.set(xt,Pt)},this.setSize=function(M,B,Z=!0){if(rt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=M,Pt=B,e.width=Math.floor(M*pt),e.height=Math.floor(B*pt),Z===!0&&(e.style.width=M+"px",e.style.height=B+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(xt*pt,Pt*pt).floor()},this.setDrawingBufferSize=function(M,B,Z){xt=M,Pt=B,pt=Z,e.width=Math.floor(M*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(x===mn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(Ft)},this.setViewport=function(M,B,Z,W){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,B,Z,W),at.viewport(et.copy(Ft).multiplyScalar(Ut()).round())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,B,Z,W){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,B,Z,W),at.scissor(ft.copy(oe).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(M){at.setScissorTest(Kt=M)},this.setOpaqueSort=function(M){Nt=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,Z=!0){let W=0;if(M){let j=!1;if(z!==null){let _t=z.texture.format;j=m.has(_t)}if(j){let _t=z.texture.type,Tt=g.has(_t),mt=N.getClearColor(),bt=N.getClearAlpha(),Rt=mt.r,Vt=mt.g,$t=mt.b;Tt?(y[0]=Rt,y[1]=Vt,y[2]=$t,y[3]=bt,U.clearBufferuiv(U.COLOR,0,y)):(R[0]=Rt,R[1]=Vt,R[2]=$t,R[3]=bt,U.clearBufferiv(U.COLOR,0,R))}else W|=U.COLOR_BUFFER_BIT}B&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),N.dispose(),gt.dispose(),Q.dispose(),At.dispose(),Ot.dispose(),D.dispose(),st.dispose(),X.dispose(),ht.dispose(),Dt.dispose(),it.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Af),rt.removeEventListener("sessionend",Rf),Ds.stop()};function Lt(M){M.preventDefault(),Nu("WebGLRenderer: Context Lost."),w=!0}function Ht(){Nu("WebGLRenderer: Context Restored."),w=!1;let M=_e.autoReset,B=ut.enabled,Z=ut.autoUpdate,W=ut.needsUpdate,j=ut.type;Yt(),_e.autoReset=M,ut.enabled=B,ut.autoUpdate=Z,ut.needsUpdate=W,ut.type=j}function vt(M){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ue(M){let B=M.target;B.removeEventListener("dispose",ue),Ue(B)}function Ue(M){Zi(M),Ot.remove(M)}function Zi(M){let B=Ot.get(M).programs;B!==void 0&&(B.forEach(function(Z){it.releaseProgram(Z)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Z,W,j,_t){B===null&&(B=yn);let Tt=j.isMesh&&j.matrixWorld.determinantAffine()<0,mt=$0(M,B,Z,W,j);at.setMaterial(W,Tt);let bt=Z.index,Rt=1;if(W.wireframe===!0){if(bt=X.getWireframeAttribute(Z),bt===void 0)return;Rt=2}let Vt=Z.drawRange,$t=Z.attributes.position,Ct=Vt.start*Rt,Qt=(Vt.start+Vt.count)*Rt;_t!==null&&(Ct=Math.max(Ct,_t.start*Rt),Qt=Math.min(Qt,(_t.start+_t.count)*Rt)),bt!==null?(Ct=Math.max(Ct,0),Qt=Math.min(Qt,bt.count)):$t!=null&&(Ct=Math.max(Ct,0),Qt=Math.min(Qt,$t.count));let De=Qt-Ct;if(De<0||De===1/0)return;ht.setup(j,W,mt,Z,bt);let me,fe=$;if(bt!==null&&(me=b.get(bt),fe=dt,fe.setIndex(me)),j.isMesh)W.wireframe===!0?(at.setLineWidth(W.wireframeLinewidth*Ut()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(j.isLine){let Ze=W.linewidth;Ze===void 0&&(Ze=1),at.setLineWidth(Ze*Ut()),j.isLineSegments?fe.setMode(U.LINES):j.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else j.isPoints?fe.setMode(U.POINTS):j.isSprite&&fe.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ze=j._multiDrawStarts,Et=j._multiDrawCounts,sn=j._multiDrawCount,ae=bt?b.get(bt).bytesPerElement:1,Is=Ot.get(W).currentProgram.getUniforms();for(let Je=0;Je<sn;Je++)Is.setValue(U,"_gl_DrawID",Je),fe.render(Ze[Je]/ae,Et[Je])}else if(j.isInstancedMesh)fe.renderInstances(Ct,De,j.count);else if(Z.isInstancedBufferGeometry){let Ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Et=Math.min(Z.instanceCount,Ze);fe.renderInstances(Ct,De,Et)}else fe.render(Ct,De)};function Ef(M,B,Z,W){P!==null&&M.isNodeMaterial&&P.setObject(W,M),be===!0&&tt.setState(M,Z,!1),M.transparent===!0&&M.side===mi&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Ro(M,B,W),M.side=hs,M.needsUpdate=!0,Ro(M,B,W),M.side=mi):Ro(M,B,W)}this.compile=function(M,B,Z=null){Z===null&&(Z=M),P!==null&&P.renderStart(M,B,Z),A=Q.get(Z),A.init(B),v.push(A),Z.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),M!==Z&&M.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),P!==null&&P.updateLights(A.state.lightsArray),We=this.localClippingEnabled,be=tt.init(this.clippingPlanes,We),be===!0&&tt.setGlobalState(this.clippingPlanes,B),P!==null&&ut.render(A.state.shadowsArray,Z,B);let W=new Set;return M.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let _t=j.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){let mt=_t[Tt];Ef(mt,Z,B,j),W.add(mt)}else Ef(_t,Z,B,j),W.add(_t)}),A=v.pop(),P!==null&&P.renderEnd(),W},this.compileAsync=function(M,B,Z=null){let W=this.compile(M,B,Z);return new Promise(j=>{function _t(){if(W.forEach(function(Tt){let bt=Ot.get(Tt).currentProgram;(bt===void 0||bt.isReady())&&W.delete(Tt)}),W.size===0){j(M);return}setTimeout(_t,10)}Gt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Lh=null;function J0(M){Lh&&Lh(M)}function Af(){Ds.stop()}function Rf(){Ds.start()}let Ds=new gm;Ds.setAnimationLoop(J0),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(M){Lh=M,rt.setAnimationLoop(M),M===null?Ds.stop():Ds.start()},rt.addEventListener("sessionstart",Af),rt.addEventListener("sessionend",Rf),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P!==null&&P.renderStart(M,B);let Z=rt.enabled===!0&&rt.isPresenting===!0,W=C!==null&&(z===null||Z)&&C.begin(S,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,B,z),A=Q.get(M,v.length),A.init(B),A.state.textureUnits=At.getTextureUnits(),v.push(A),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Ae.setFromArrayCamera(B):jt.setFromProjectionMatrix(ge,Fn,B.reversedDepth),We=this.localClippingEnabled,be=tt.init(this.clippingPlanes,We),E=gt.get(M,_.length),E.init(),_.push(E),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let Tt=S.xr.getDepthSensingMesh();Tt!==null&&Fh(Tt,B,-1/0,S.sortObjects)}Fh(M,B,0,S.sortObjects),E.finish(),P!==null&&P.updateLights(A.state.lightsArray),S.sortObjects===!0&&E.sort(Nt,re),wt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,wt&&N.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),be===!0&&tt.beginShadows();let j=A.state.shadowsArray;if(ut.render(j,M,B),be===!0&&tt.endShadows(),(W&&C.hasRenderPass())===!1){let Tt=E.opaque,mt=E.transmissive;if(A.setupLights(),B.isArrayCamera){let bt=B.cameras;if(mt.length>0)for(let Rt=0,Vt=bt.length;Rt<Vt;Rt++){let $t=bt[Rt];Df(Tt,mt,M,$t)}wt&&N.render(M);for(let Rt=0,Vt=bt.length;Rt<Vt;Rt++){let $t=bt[Rt];Pf(E,M,$t,$t.viewport)}}else mt.length>0&&Df(Tt,mt,M,B),wt&&N.render(M),Pf(E,M,B)}z!==null&&I===0&&(At.updateMultisampleRenderTarget(z),At.updateRenderTargetMipmap(z)),W&&C.end(S),M.isScene===!0&&M.onAfterRender(S,M,B),ht.resetDefaultState(),H=-1,Y=null,v.pop(),v.length>0?(A=v[v.length-1],At.setTextureUnits(A.state.textureUnits),be===!0&&tt.setGlobalState(S.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,P!==null&&P.renderEnd()};function Fh(M,B,Z,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let Tt=B.isArrayCamera?Ae:jt;if(!M.frustumCulled||M.intersectsFrustum(Tt)){W&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ge);let mt=st.update(M),bt=M.material;bt.visible&&E.push(M,mt,bt,Z,Re.z,null,B)}}else if(M.isMesh||M.isLine||M.isPoints){let Tt=B.isArrayCamera?Ae:jt;if(!M.frustumCulled||M.intersectsFrustum(Tt)){let mt=st.update(M),bt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Re.copy(mt.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(ge)),Array.isArray(bt)){let Rt=mt.groups;for(let Vt=0,$t=Rt.length;Vt<$t;Vt++){let Ct=Rt[Vt],Qt=bt[Ct.materialIndex];Qt&&Qt.visible&&E.push(M,mt,Qt,Z,Re.z,Ct,B)}}else bt.visible&&E.push(M,mt,bt,Z,Re.z,null,B)}}}let _t=M.children;for(let Tt=0,mt=_t.length;Tt<mt;Tt++)Fh(_t[Tt],B,Z,W)}function Pf(M,B,Z,W){let{opaque:j,transmissive:_t,transparent:Tt}=M;A.setupLightsView(Z),be===!0&&tt.setGlobalState(S.clippingPlanes,Z),W&&at.viewport(et.copy(W)),j.length>0&&Na(j,B,Z),_t.length>0&&Na(_t,B,Z),Tt.length>0&&Na(Tt,B,Z),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Df(M,B,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){let Ct=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:Ct?$n:mn,minFilter:Zn,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let _t=A.state.transmissionRenderTarget[W.id],Tt=W.viewport||et;_t.setSize(Tt.z*S.transmissionResolutionScale,Tt.w*S.transmissionResolutionScale);let mt=S.getRenderTarget(),bt=S.getActiveCubeFace(),Rt=S.getActiveMipmapLevel();S.setRenderTarget(_t),S.getClearColor(K),lt=S.getClearAlpha(),lt<1&&S.setClearColor(16777215,.5),S.clear(),wt&&N.render(Z);let Vt=S.toneMapping;S.toneMapping=Un;let $t=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),be===!0&&tt.setGlobalState(S.clippingPlanes,W),Na(M,Z,W),At.updateMultisampleRenderTarget(_t),At.updateRenderTargetMipmap(_t),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Qt=0,De=B.length;Qt<De;Qt++){let me=B[Qt],{object:fe,geometry:Ze,material:Et,group:sn}=me;if(Et.side===mi&&fe.layers.test(W.layers)){let ae=Et.side;Et.side=on,Et.needsUpdate=!0,If(fe,Z,W,Ze,Et,sn),Et.side=ae,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(At.updateMultisampleRenderTarget(_t),At.updateRenderTargetMipmap(_t))}S.setRenderTarget(mt,bt,Rt),S.setClearColor(K,lt),$t!==void 0&&(W.viewport=$t),S.toneMapping=Vt}function Na(M,B,Z){let W=B.isScene===!0?B.overrideMaterial:null;for(let j=0,_t=M.length;j<_t;j++){let Tt=M[j],{object:mt,geometry:bt,group:Rt}=Tt,Vt=Tt.material;Vt.allowOverride===!0&&W!==null&&(Vt=W),mt.layers.test(Z.layers)&&If(mt,B,Z,bt,Vt,Rt)}}function If(M,B,Z,W,j,_t){P!==null&&j.isNodeMaterial&&P.setObject(M,j),M.onBeforeRender(S,B,Z,W,j,_t),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(S,B,Z,W,M,_t),j.transparent===!0&&j.side===mi&&j.forceSinglePass===!1?(j.side=on,j.needsUpdate=!0,S.renderBufferDirect(Z,B,W,j,M,_t),j.side=hs,j.needsUpdate=!0,S.renderBufferDirect(Z,B,W,j,M,_t),j.side=mi):S.renderBufferDirect(Z,B,W,j,M,_t),M.onAfterRender(S,B,Z,W,j,_t)}function Of(M){let B=0;for(let Z of M)Z.texture!==null&&B++;return B}function Ro(M,B,Z){B.isScene!==!0&&(B=yn);let W=Ot.get(M),j=A.state.lights,_t=A.state.shadowsArray,Tt=j.state.version,mt=it.getParameters(M,j.state,_t,B,Z,A.state.lightProbeGridArray),bt=it.getProgramCacheKey(mt),Rt=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;let Vt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=D.get(M.envMap||W.environment,Vt),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",ue),Rt=new Map,W.programs=Rt,W.programVariants=new Map);let $t=Rt.get(bt);if($t!==void 0){if(W.currentProgram===$t&&W.lightsStateVersion===Tt)return Ff(M,mt),$t}else mt.uniforms=it.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,Z,mt),M.onBeforeCompile(mt,S),$t=it.acquireProgram(mt,bt),Rt.set(bt,$t),W.uniforms=mt.uniforms;let Ct=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=tt.uniform),Ff(M,mt),W.needsLights=t_(M),W.lightsStateVersion=Tt,W.needsLights&&(Ct.ambientLightColor.value=j.state.ambient,Ct.lightProbe.value=j.state.probe,Ct.sunLights.value=j.state.sun,Ct.sunLightShadows.value=j.state.sunShadow,Ct.directionalLights.value=j.state.directional,Ct.directionalLightShadows.value=j.state.directionalShadow,Ct.spotLights.value=j.state.spot,Ct.spotLightShadows.value=j.state.spotShadow,Ct.rectAreaLights.value=j.state.rectArea,Ct.ltc_1.value=j.state.rectAreaLTC1,Ct.ltc_2.value=j.state.rectAreaLTC2,Ct.pointLights.value=j.state.point,Ct.pointLightShadows.value=j.state.pointShadow,Ct.hemisphereLights.value=j.state.hemi,Ct.sunShadowMatrix.value=j.state.sunShadowMatrix,Ct.sunShadowCascade.value=j.state.sunShadowCascade,Ct.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ct.spotLightMatrix.value=j.state.spotLightMatrix,Ct.spotLightMap.value=j.state.spotLightMap,Ct.pointShadowMatrix.value=j.state.pointShadowMatrix),W.numLightProbeGrids=Of(A.state.lightProbeGridArray),W.currentProgram=$t,W.uniformsList=null,$t}function K0(M,B,Z,W,j){let _t=Ot.get(M),Tt=_t.currentProgram.id+","+W+","+j,mt=_t.programVariants.get(Tt);return mt===void 0?(mt=Ro(M,B,Z),_t.programVariants.set(Tt,mt)):(_t.currentProgram=mt,_t.uniformsList=null,_t.outputColorSpace=W,_t.toneMapping=j),mt}function Lf(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Qr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Ff(M,B){let Z=Ot.get(M);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function $0(M,B,Z,W,j){B.isScene!==!0&&(B=yn),At.resetTextureUnits();let _t=B.fog,Tt=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,mt=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:te.workingColorSpace,bt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Rt=D.get(W.envMap||Tt,bt),Vt=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$t=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!Z.morphAttributes.position,Qt=!!Z.morphAttributes.normal,De=!!Z.morphAttributes.color,me=Un;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(me=S.toneMapping);let fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ze=fe!==void 0?fe.length:0,Et=Ot.get(W),sn=A.state.lights;if(be===!0&&(We===!0||M!==Y)){let we=M===Y&&W.id===H;tt.setState(W,M,we)}let ae=!1,Is=!1;W.version===Et.__version?Et.needsLights&&Et.lightsStateVersion!==sn.state.version||j.isBatchedMesh&&Et.batching===!1||!j.isBatchedMesh&&Et.batching===!0||j.isBatchedMesh&&Et.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Et.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Et.instancing===!1||!j.isInstancedMesh&&Et.instancing===!0||j.isSkinnedMesh&&Et.skinning===!1||!j.isSkinnedMesh&&Et.skinning===!0||j.isInstancedMesh&&Et.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Et.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Et.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Et.instancingMorph===!1&&j.morphTexture!==null||Et.envMap!==Rt||W.fog===!0&&Et.fog!==_t||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Vt||Et.vertexTangents!==$t||Et.morphTargets!==Ct||Et.morphNormals!==Qt||Et.morphColors!==De||Et.morphTargetsCount!==Ze||Et.numLightProbeGrids!==Of(A.state.lightProbeGridArray)?ae=!0:(Et.outputColorSpace!==mt||Et.toneMapping!==me)&&(Is=!0):(ae=!0,Et.__version=W.version);let Je=Et.currentProgram;(ae===!0||Is===!0)&&(Je=Is===!0?K0(W,B,j,mt,me):Ro(W,B,j),P&&W.isNodeMaterial&&P.onUpdateProgram(W,Je,Et));let Ua=!1,Ji=!1,Os=!1,se=Je.getUniforms(),Xe=Et.uniforms;if(at.useProgram(Je.program)&&(Ua=!0,Ji=!0,Os=!0),W.id!==H&&(H=W.id,Ji=!0),Ua||Y!==M){at.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),se.setValue(U,"projectionMatrix",M.projectionMatrix),se.setValue(U,"viewMatrix",M.matrixWorldInverse);let Be=se.map.cameraPosition;Be!==void 0&&Be.setValue(U,On.setFromMatrixPosition(M.matrixWorld)),le.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&se.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,Ji=!0,Os=!0)}if(Et.needsLights&&(sn.state.sunShadowMap.length>0&&se.setValue(U,"sunShadowMap",sn.state.sunShadowMap,At),sn.state.directionalShadowMap.length>0&&se.setValue(U,"directionalShadowMap",sn.state.directionalShadowMap,At),sn.state.spotShadowMap.length>0&&se.setValue(U,"spotShadowMap",sn.state.spotShadowMap,At),sn.state.pointShadowMap.length>0&&se.setValue(U,"pointShadowMap",sn.state.pointShadowMap,At)),j.isSkinnedMesh){se.setOptional(U,j,"bindMatrix"),se.setOptional(U,j,"bindMatrixInverse");let we=j.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),se.setValue(U,"boneTexture",we.boneTexture,At))}j.isBatchedMesh&&(se.setOptional(U,j,"batchingTexture"),se.setValue(U,"batchingTexture",j._matricesTexture,At),se.setOptional(U,j,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",j._indirectTexture,At),se.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",j._colorsTexture,At));let Wn=Z.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&nt.update(j,Z,Je),(Ji||Et.receiveShadow!==j.receiveShadow)&&(Et.receiveShadow=j.receiveShadow,se.setValue(U,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Xe.envMapIntensity.value=B.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Mb()),Ji){if(se.setValue(U,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&Q0(Xe,Os),_t&&W.fog===!0&&ct.refreshFogUniforms(Xe,_t),ct.refreshMaterialUniforms(Xe,W,pt,Pt,A.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.numLightProbeGrids>0){let we=T,Be=0;for(let Ci of A.state.lightProbeGridArray)Ci.texture!==null&&(we.textures[Be]=Ci.texture,we.min[Be]=Ci.boundingBox.min,we.max[Be]=Ci.boundingBox.max,we.resolution[Be]=Ci.resolution,Be++);for(let Ci in we)we[Ci].length=Be;Xe.probesSH.value=we.textures,Xe.probesMin.value=we.min,Xe.probesMax.value=we.max,Xe.probesResolution.value=we.resolution}Qr.upload(U,Lf(Et),Xe,At)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qr.upload(U,Lf(Et),Xe,At),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&se.setValue(U,"center",j.center),se.setValue(U,"modelViewMatrix",j.modelViewMatrix),se.setValue(U,"normalMatrix",j.normalMatrix),se.setValue(U,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){let we=W.uniformsGroups;for(let Be=0,Ci=we.length;Be<Ci;Be++){let Uf=we[Be];Dt.update(Uf,Je),Dt.bind(Uf,Je)}}return Je}function Q0(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function t_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,B,Z){let W=Ot.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ot.get(M.texture).__webglTexture=B,Ot.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let Z=Ot.get(M);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,Z=0){z=M,L=B,I=Z;let W=null,j=!1,_t=!1;if(M){let mt=Ot.get(M);if(mt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(U.FRAMEBUFFER,mt.__webglFramebuffer),et.copy(M.viewport),ft.copy(M.scissor),St=M.scissorTest,at.viewport(et),at.scissor(ft),at.setScissorTest(St),H=-1;return}else if(mt.__webglFramebuffer===void 0)At.setupRenderTarget(M);else if(mt.__hasExternalTextures)At.rebindTextures(M,Ot.get(M.texture).__webglTexture,Ot.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Vt=M.depthTexture;if(mt.__boundDepthTexture!==Vt){if(Vt!==null&&Ot.has(Vt)&&(M.width!==Vt.image.width||M.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");At.setupDepthRenderbuffer(M)}}let bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(_t=!0);let Rt=Ot.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[B])?W=Rt[B][Z]:W=Rt[B],j=!0):M.samples>0&&At.useMultisampledRTT(M)===!1?W=Ot.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?W=Rt[Z]:W=Rt,et.copy(M.viewport),ft.copy(M.scissor),St=M.scissorTest}else et.copy(Ft).multiplyScalar(pt).floor(),ft.copy(oe).multiplyScalar(pt).floor(),St=Kt;if(Z!==0&&(W=F),at.bindFramebuffer(U.FRAMEBUFFER,W)&&at.drawBuffers(M,W),at.viewport(et),at.scissor(ft),at.setScissorTest(St),j){let mt=Ot.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,mt.__webglTexture,Z)}else if(_t){let mt=B;for(let bt=0;bt<M.textures.length;bt++){let Rt=Ot.get(M.textures[bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+bt,Rt.__webglTexture,Z,mt)}}else if(M!==null&&Z!==0){let mt=Ot.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,Z)}H=-1};function Nf(M){let B=Ot.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=le.textureFormatReadable(M.format),B.__typeReadable=le.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,Z,W,j,_t,Tt,mt=0){if(!(M&&M.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(bt=bt[Tt],Array.isArray(bt)&&(bt=bt[0])),bt){at.bindFramebuffer(U.FRAMEBUFFER,bt);try{let Rt=M.textures[mt],Vt=Rt.format,$t=Rt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt);let Ct=Nf(Rt);if(Ct.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&Z>=0&&Z<=M.height-j&&U.readPixels(B,Z,W,j,ot.convert(Vt),ot.convert($t),_t)}finally{let Rt=z!==null?Ot.get(z).__webglFramebuffer:null;at.bindFramebuffer(U.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,B,Z,W,j,_t,Tt,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(bt=bt[Tt],Array.isArray(bt)&&(bt=bt[0])),bt)if(B>=0&&B<=M.width-W&&Z>=0&&Z<=M.height-j){at.bindFramebuffer(U.FRAMEBUFFER,bt);let Rt=M.textures[mt],Vt=Rt.format,$t=Rt.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt);let Ct=Nf(Rt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(B,Z,W,j,ot.convert(Vt),ot.convert($t),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let De=z!==null?Ot.get(z).__webglFramebuffer:null;at.bindFramebuffer(U.FRAMEBUFFER,De);let me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gp(U,me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Qt),U.deleteSync(me),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,Z=0){let W=Math.pow(2,-Z),j=Math.floor(M.image.width*W),_t=Math.floor(M.image.height*W),Tt=B!==null?B.x:0,mt=B!==null?B.y:0;At.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Tt,mt,j,_t),at.unbindTexture()},this.copyTextureToTexture=function(M,B,Z=null,W=null,j=0,_t=0){let Tt,mt,bt,Rt,Vt,$t,Ct,Qt,De,me=M.isCompressedTexture?M.mipmaps[_t]:M.image;if(Z!==null)Tt=Z.max.x-Z.min.x,mt=Z.max.y-Z.min.y,bt=Z.isBox3?Z.max.z-Z.min.z:1,Rt=Z.min.x,Vt=Z.min.y,$t=Z.isBox3?Z.min.z:0;else{let se=Math.pow(2,-j);Tt=Math.floor(me.width*se),mt=Math.floor(me.height*se),M.isDataArrayTexture?bt=me.depth:M.isData3DTexture?bt=Math.floor(me.depth*se):bt=1,Rt=0,Vt=0,$t=0}W!==null?(Ct=W.x,Qt=W.y,De=W.z):(Ct=0,Qt=0,De=0);let fe=ot.convert(B.format),Ze=ot.convert(B.type),Et;B.isData3DTexture?(At.setTexture3D(B,0),Et=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(At.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY):(At.setTexture2D(B,0),Et=U.TEXTURE_2D),at.activeTexture(U.TEXTURE0),at.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),at.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),at.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let sn=at.getParameter(U.UNPACK_ROW_LENGTH),ae=at.getParameter(U.UNPACK_IMAGE_HEIGHT),Is=at.getParameter(U.UNPACK_SKIP_PIXELS),Je=at.getParameter(U.UNPACK_SKIP_ROWS),Ua=at.getParameter(U.UNPACK_SKIP_IMAGES);at.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),at.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),at.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),at.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),at.pixelStorei(U.UNPACK_SKIP_IMAGES,$t);let Ji=M.isDataArrayTexture||M.isData3DTexture,Os=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let se=Ot.get(M),Xe=Ot.get(B),Wn=Ot.get(se.__renderTarget),we=Ot.get(Xe.__renderTarget);at.bindFramebuffer(U.READ_FRAMEBUFFER,Wn.__webglFramebuffer),at.bindFramebuffer(U.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Be=0;Be<bt;Be++)Ji&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.get(M).__webglTexture,j,$t+Be),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.get(B).__webglTexture,_t,De+Be)),U.blitFramebuffer(Rt,Vt,Rt+Tt,Vt+mt,Ct,Qt,Ct+Tt,Qt+mt,U.DEPTH_BUFFER_BIT,U.NEAREST);at.bindFramebuffer(U.READ_FRAMEBUFFER,null),at.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||M.isRenderTargetTexture||Ot.has(M)){let se=Ot.get(M),Xe=Ot.get(B);at.bindFramebuffer(U.READ_FRAMEBUFFER,O),at.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Wn=0;Wn<bt;Wn++)Ji?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,se.__webglTexture,j,$t+Wn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,se.__webglTexture,j),Os?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xe.__webglTexture,_t,De+Wn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xe.__webglTexture,_t),j!==0?U.blitFramebuffer(Rt,Vt,Rt+Tt,Vt+mt,Ct,Qt,Ct+Tt,Qt+mt,U.COLOR_BUFFER_BIT,U.NEAREST):Os?U.copyTexSubImage3D(Et,_t,Ct,Qt,De+Wn,Rt,Vt,Tt,mt):U.copyTexSubImage2D(Et,_t,Ct,Qt,Rt,Vt,Tt,mt);at.bindFramebuffer(U.READ_FRAMEBUFFER,null),at.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Os?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Et,_t,Ct,Qt,De,Tt,mt,bt,fe,Ze,me.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,_t,Ct,Qt,De,Tt,mt,bt,fe,me.data):U.texSubImage3D(Et,_t,Ct,Qt,De,Tt,mt,bt,fe,Ze,me):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_t,Ct,Qt,Tt,mt,fe,Ze,me.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_t,Ct,Qt,me.width,me.height,fe,me.data):U.texSubImage2D(U.TEXTURE_2D,_t,Ct,Qt,Tt,mt,fe,Ze,me);at.pixelStorei(U.UNPACK_ROW_LENGTH,sn),at.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae),at.pixelStorei(U.UNPACK_SKIP_PIXELS,Is),at.pixelStorei(U.UNPACK_SKIP_ROWS,Je),at.pixelStorei(U.UNPACK_SKIP_IMAGES,Ua),_t===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&U.generateMipmap(Et),at.unbindTexture()},this.initRenderTarget=function(M){Ot.get(M).__webglFramebuffer===void 0&&At.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?At.setTextureCube(M,0):M.isData3DTexture?At.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?At.setTexture2DArray(M,0):At.setTexture2D(M,0),at.unbindTexture()},this.resetState=function(){L=0,I=0,z=null,at.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var no=function(s,t){let i=s,r=fa[t],o=null,a=0,l=null,c=[],h={},u=function(_,v){a=i*4+17,o=(function(C){let S=new Array(C);for(let w=0;w<C;w+=1){S[w]=new Array(C);for(let P=0;P<C;P+=1)S[w][P]=null}return S})(a),d(0,0),d(a-7,0),d(0,a-7),x(),p(),g(_,v),i>=7&&m(_),l==null&&(l=T(i,r,c)),y(l,v)},d=function(_,v){for(let C=-1;C<=7;C+=1)if(!(_+C<=-1||a<=_+C))for(let S=-1;S<=7;S+=1)v+S<=-1||a<=v+S||(0<=C&&C<=6&&(S==0||S==6)||0<=S&&S<=6&&(C==0||C==6)||2<=C&&C<=4&&2<=S&&S<=4?o[_+C][v+S]=!0:o[_+C][v+S]=!1)},f=function(){let _=0,v=0;for(let C=0;C<8;C+=1){u(!0,C);let S=fs.getLostPoint(h);(C==0||_>S)&&(_=S,v=C)}return v},p=function(){for(let _=8;_<a-8;_+=1)o[_][6]==null&&(o[_][6]=_%2==0);for(let _=8;_<a-8;_+=1)o[6][_]==null&&(o[6][_]=_%2==0)},x=function(){let _=fs.getPatternPosition(i);for(let v=0;v<_.length;v+=1)for(let C=0;C<_.length;C+=1){let S=_[v],w=_[C];if(o[S][w]==null)for(let P=-2;P<=2;P+=1)for(let F=-2;F<=2;F+=1)P==-2||P==2||F==-2||F==2||P==0&&F==0?o[S+P][w+F]=!0:o[S+P][w+F]=!1}},m=function(_){let v=fs.getBCHTypeNumber(i);for(let C=0;C<18;C+=1){let S=!_&&(v>>C&1)==1;o[Math.floor(C/3)][C%3+a-8-3]=S}for(let C=0;C<18;C+=1){let S=!_&&(v>>C&1)==1;o[C%3+a-8-3][Math.floor(C/3)]=S}},g=function(_,v){let C=r<<3|v,S=fs.getBCHTypeInfo(C);for(let w=0;w<15;w+=1){let P=!_&&(S>>w&1)==1;w<6?o[w][8]=P:w<8?o[w+1][8]=P:o[a-15+w][8]=P}for(let w=0;w<15;w+=1){let P=!_&&(S>>w&1)==1;w<8?o[8][a-w-1]=P:w<9?o[8][15-w-1+1]=P:o[8][15-w-1]=P}o[a-8][8]=!_},y=function(_,v){let C=-1,S=a-1,w=7,P=0,F=fs.getMaskFunction(v);for(let O=a-1;O>0;O-=2)for(O==6&&(O-=1);;){for(let G=0;G<2;G+=1)if(o[S][O-G]==null){let L=!1;P<_.length&&(L=(_[P]>>>w&1)==1),F(S,O-G)&&(L=!L),o[S][O-G]=L,w-=1,w==-1&&(P+=1,w=7)}if(S+=C,S<0||a<=S){S-=C,C=-C;break}}},R=function(_,v){let C=0,S=0,w=0,P=new Array(v.length),F=new Array(v.length);for(let I=0;I<v.length;I+=1){let z=v[I].dataCount,H=v[I].totalCount-z;S=Math.max(S,z),w=Math.max(w,H),P[I]=new Array(z);for(let St=0;St<P[I].length;St+=1)P[I][St]=255&_.getBuffer()[St+C];C+=z;let Y=fs.getErrorCorrectPolynomial(H),ft=pa(P[I],Y.getLength()-1).mod(Y);F[I]=new Array(Y.getLength()-1);for(let St=0;St<F[I].length;St+=1){let K=St+ft.getLength()-F[I].length;F[I][St]=K>=0?ft.getAt(K):0}}let O=0;for(let I=0;I<v.length;I+=1)O+=v[I].totalCount;let G=new Array(O),L=0;for(let I=0;I<S;I+=1)for(let z=0;z<v.length;z+=1)I<P[z].length&&(G[L]=P[z][I],L+=1);for(let I=0;I<w;I+=1)for(let z=0;z<v.length;z+=1)I<F[z].length&&(G[L]=F[z][I],L+=1);return G},T=function(_,v,C){let S=Em.getRSBlocks(_,v),w=Am();for(let F=0;F<C.length;F+=1){let O=C[F];w.put(O.getMode(),4),w.put(O.getLength(),fs.getLengthInBits(O.getMode(),_)),O.write(w)}let P=0;for(let F=0;F<S.length;F+=1)P+=S[F].dataCount;if(w.getLengthInBits()>P*8)throw"code length overflow. ("+w.getLengthInBits()+">"+P*8+")";for(w.getLengthInBits()+4<=P*8&&w.put(0,4);w.getLengthInBits()%8!=0;)w.putBit(!1);for(;!(w.getLengthInBits()>=P*8||(w.put(236,8),w.getLengthInBits()>=P*8));)w.put(17,8);return R(w,S)};h.addData=function(_,v){v=v||"Byte";let C=null;switch(v){case"Numeric":C=wb(_);break;case"Alphanumeric":C=Tb(_);break;case"Byte":C=Cb(_);break;case"Kanji":C=Eb(_);break;default:throw"mode:"+v}c.push(C),l=null},h.isDark=function(_,v){if(_<0||a<=_||v<0||a<=v)throw _+","+v;return o[_][v]},h.getModuleCount=function(){return a},h.make=function(){if(i<1){let _=1;for(;_<40;_++){let v=Em.getRSBlocks(_,r),C=Am();for(let w=0;w<c.length;w++){let P=c[w];C.put(P.getMode(),4),C.put(P.getLength(),fs.getLengthInBits(P.getMode(),_)),P.write(C)}let S=0;for(let w=0;w<v.length;w++)S+=v[w].dataCount;if(C.getLengthInBits()<=S*8)break}i=_}u(!1,f())},h.createTableTag=function(_,v){_=_||2,v=typeof v>"u"?_*4:v;let C="";C+='<table style="',C+=" border-width: 0px; border-style: none;",C+=" border-collapse: collapse;",C+=" padding: 0px; margin: "+v+"px;",C+='">',C+="<tbody>";for(let S=0;S<h.getModuleCount();S+=1){C+="<tr>";for(let w=0;w<h.getModuleCount();w+=1)C+='<td style="',C+=" border-width: 0px; border-style: none;",C+=" border-collapse: collapse;",C+=" padding: 0px; margin: 0px;",C+=" width: "+_+"px;",C+=" height: "+_+"px;",C+=" background-color: ",C+=h.isDark(S,w)?"#000000":"#ffffff",C+=";",C+='"/>';C+="</tr>"}return C+="</tbody>",C+="</table>",C},h.createSvgTag=function(_,v,C,S){let w={};typeof arguments[0]=="object"&&(w=arguments[0],_=w.cellSize,v=w.margin,C=w.alt,S=w.title),_=_||2,v=typeof v>"u"?_*4:v,C=typeof C=="string"?{text:C}:C||{},C.text=C.text||null,C.id=C.text?C.id||"qrcode-description":null,S=typeof S=="string"?{text:S}:S||{},S.text=S.text||null,S.id=S.text?S.id||"qrcode-title":null;let P=h.getModuleCount()*_+v*2,F,O,G,L,I="",z;for(z="l"+_+",0 0,"+_+" -"+_+",0 0,-"+_+"z ",I+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',I+=w.scalable?"":' width="'+P+'px" height="'+P+'px"',I+=' viewBox="0 0 '+P+" "+P+'" ',I+=' preserveAspectRatio="xMinYMin meet"',I+=S.text||C.text?' role="img" aria-labelledby="'+E([S.id,C.id].join(" ").trim())+'"':"",I+=">",I+=S.text?'<title id="'+E(S.id)+'">'+E(S.text)+"</title>":"",I+=C.text?'<description id="'+E(C.id)+'">'+E(C.text)+"</description>":"",I+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',I+='<path d="',G=0;G<h.getModuleCount();G+=1)for(L=G*_+v,F=0;F<h.getModuleCount();F+=1)h.isDark(G,F)&&(O=F*_+v,I+="M"+O+","+L+z);return I+='" stroke="transparent" fill="black"/>',I+="</svg>",I},h.createDataURL=function(_,v){_=_||2,v=typeof v>"u"?_*4:v;let C=h.getModuleCount()*_+v*2,S=v,w=C-v;return Db(C,C,function(P,F){if(S<=P&&P<w&&S<=F&&F<w){let O=Math.floor((P-S)/_),G=Math.floor((F-S)/_);return h.isDark(G,O)?0:1}else return 1})},h.createImgTag=function(_,v,C){_=_||2,v=typeof v>"u"?_*4:v;let S=h.getModuleCount()*_+v*2,w="";return w+="<img",w+=' src="',w+=h.createDataURL(_,v),w+='"',w+=' width="',w+=S,w+='"',w+=' height="',w+=S,w+='"',C&&(w+=' alt="',w+=E(C),w+='"'),w+="/>",w};let E=function(_){let v="";for(let C=0;C<_.length;C+=1){let S=_.charAt(C);switch(S){case"<":v+="&lt;";break;case">":v+="&gt;";break;case"&":v+="&amp;";break;case'"':v+="&quot;";break;default:v+=S;break}}return v},A=function(_){_=typeof _>"u"?2:_;let C=h.getModuleCount()*1+_*2,S=_,w=C-_,P,F,O,G,L,I={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},z={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},H="";for(P=0;P<C;P+=2){for(O=Math.floor((P-S)/1),G=Math.floor((P+1-S)/1),F=0;F<C;F+=1)L="\u2588",S<=F&&F<w&&S<=P&&P<w&&h.isDark(O,Math.floor((F-S)/1))&&(L=" "),S<=F&&F<w&&S<=P+1&&P+1<w&&h.isDark(G,Math.floor((F-S)/1))?L+=" ":L+="\u2588",H+=_<1&&P+1>=w?z[L]:I[L];H+=`
`}return C%2&&_>0?H.substring(0,H.length-C-1)+Array(C+1).join("\u2580"):H.substring(0,H.length-1)};return h.createASCII=function(_,v){if(_=_||1,_<2)return A(v);_-=1,v=typeof v>"u"?_*2:v;let C=h.getModuleCount()*_+v*2,S=v,w=C-v,P,F,O,G,L=Array(_+1).join("\u2588\u2588"),I=Array(_+1).join("  "),z="",H="";for(P=0;P<C;P+=1){for(O=Math.floor((P-S)/_),H="",F=0;F<C;F+=1)G=1,S<=F&&F<w&&S<=P&&P<w&&h.isDark(O,Math.floor((F-S)/_))&&(G=0),H+=G?L:I;for(O=0;O<_;O+=1)z+=H+`
`}return z.substring(0,z.length-1)},h.renderTo2dContext=function(_,v){v=v||2;let C=h.getModuleCount();for(let S=0;S<C;S++)for(let w=0;w<C;w++)_.fillStyle=h.isDark(S,w)?"black":"white",_.fillRect(w*v,S*v,v,v)},h};no.stringToBytes=function(s){let t=[];for(let e=0;e<s.length;e+=1){let n=s.charCodeAt(e);t.push(n&255)}return t};no.createStringToBytes=function(s,t){let e=(function(){let i=Rb(s),r=function(){let l=i.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=i.read();if(l==-1)break;let c=r(),h=r(),u=r(),d=String.fromCharCode(l<<8|c),f=h<<8|u;a[d]=f,o+=1}if(o!=t)throw o+" != "+t;return a})(),n=63;return function(i){let r=[];for(let o=0;o<i.length;o+=1){let a=i.charCodeAt(o);if(a<128)r.push(a);else{let l=e[i.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(n)}}return r}};var en={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},fa={L:1,M:0,Q:3,H:2},ds={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},fs=(function(){let s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return i.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return(o<<10|a)^n},i.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return o<<12|a},i.getPatternPosition=function(o){return s[o-1]},i.getMaskFunction=function(o){switch(o){case ds.PATTERN000:return function(a,l){return(a+l)%2==0};case ds.PATTERN001:return function(a,l){return a%2==0};case ds.PATTERN010:return function(a,l){return l%3==0};case ds.PATTERN011:return function(a,l){return(a+l)%3==0};case ds.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case ds.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case ds.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case ds.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},i.getErrorCorrectPolynomial=function(o){let a=pa([1],0);for(let l=0;l<o;l+=1)a=a.multiply(pa([1,ps.gexp(l)],0));return a},i.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case en.MODE_NUMBER:return 10;case en.MODE_ALPHA_NUM:return 9;case en.MODE_8BIT_BYTE:return 8;case en.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case en.MODE_NUMBER:return 12;case en.MODE_ALPHA_NUM:return 11;case en.MODE_8BIT_BYTE:return 16;case en.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case en.MODE_NUMBER:return 14;case en.MODE_ALPHA_NUM:return 13;case en.MODE_8BIT_BYTE:return 16;case en.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},i.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let f=0,p=o.isDark(u,d);for(let x=-1;x<=1;x+=1)if(!(u+x<0||a<=u+x))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||x==0&&m==0||p==o.isDark(u+x,d+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let f=0;o.isDark(u,d)&&(f+=1),o.isDark(u+1,d)&&(f+=1),o.isDark(u,d+1)&&(f+=1),o.isDark(u+1,d+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(l+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(l+=40);let c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(c+=1);let h=Math.abs(100*c/a/a-50)/5;return l+=h*10,l},i})(),ps=(function(){let s=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)s[n]=1<<n;for(let n=8;n<256;n+=1)s[n]=s[n-4]^s[n-5]^s[n-6]^s[n-8];for(let n=0;n<255;n+=1)t[s[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return s[n]},e})(),pa=function(s,t){if(typeof s.length>"u")throw s.length+"/"+t;let e=(function(){let i=0;for(;i<s.length&&s[i]==0;)i+=1;let r=new Array(s.length-i+t);for(let o=0;o<s.length-i;o+=1)r[o]=s[o+i];return r})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let r=new Array(n.getLength()+i.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<i.getLength();a+=1)r[o+a]^=ps.gexp(ps.glog(n.getAt(o))+ps.glog(i.getAt(a)));return pa(r,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let r=ps.glog(n.getAt(0))-ps.glog(i.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<i.getLength();a+=1)o[a]^=ps.gexp(ps.glog(i.getAt(a))+r);return pa(o,0).mod(i)},n},Em=(function(){let s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,r){let o={};return o.totalCount=i,o.dataCount=r,o},e={},n=function(i,r){switch(r){case fa.L:return s[(i-1)*4+0];case fa.M:return s[(i-1)*4+1];case fa.Q:return s[(i-1)*4+2];case fa.H:return s[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,r){let o=n(i,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let h=o[c*3+0],u=o[c*3+1],d=o[c*3+2];for(let f=0;f<h;f+=1)l.push(t(u,d))}return l},e})(),Am=function(){let s=[],t=0,e={};return e.getBuffer=function(){return s},e.getAt=function(n){let i=Math.floor(n/8);return(s[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let r=0;r<i;r+=1)e.putBit((n>>>i-r-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);s.length<=i&&s.push(0),n&&(s[i]|=128>>>t%8),t+=1},e},wb=function(s){let t=en.MODE_NUMBER,e=s,n={};n.getMode=function(){return t},n.getLength=function(o){return e.length},n.write=function(o){let a=e,l=0;for(;l+2<a.length;)o.put(i(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(i(a.substring(l,l+1)),4):a.length-l==2&&o.put(i(a.substring(l,l+2)),7))};let i=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},Tb=function(s){let t=en.MODE_ALPHA_NUM,e=s,n={};n.getMode=function(){return t},n.getLength=function(r){return e.length},n.write=function(r){let o=e,a=0;for(;a+1<o.length;)r.put(i(o.charAt(a))*45+i(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(i(o.charAt(a)),6)};let i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},Cb=function(s){let t=en.MODE_8BIT_BYTE,e=s,n=no.stringToBytes(s),i={};return i.getMode=function(){return t},i.getLength=function(r){return n.length},i.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},i},Eb=function(s){let t=en.MODE_KANJI,e=s,n=no.stringToBytes;(function(o,a){let l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let i=n(s),r={};return r.getMode=function(){return t},r.getLength=function(o){return~~(i.length/2)},r.write=function(o){let a=i,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},Rm=function(){let s=[],t={};return t.writeByte=function(e){s.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let r=0;r<i;r+=1)t.writeByte(e[r+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return s},t.toString=function(){let e="";e+="[";for(let n=0;n<s.length;n+=1)n>0&&(e+=","),e+=s[n];return e+="]",e},t},Ab=function(){let s=0,t=0,e=0,n="",i={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return i.writeByte=function(a){for(s=s<<8|a&255,t+=8,e+=1;t>=6;)r(s>>>t-6),t-=6},i.flush=function(){if(t>0&&(r(s<<6-t),s=0,t=0),e%3!=0){let a=3-e%3;for(let l=0;l<a;l+=1)n+="="}},i.toString=function(){return n},i},Rb=function(s){let t=s,e=0,n=0,i=0,r={};r.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let l=t.charAt(e);if(e+=1,l=="=")return i=0,-1;if(l.match(/^\s$/))continue;n=n<<6|o(l.charCodeAt(0)),i+=6}let a=n>>>i-8&255;return i-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},Pb=function(s,t){let e=s,n=t,i=new Array(s*t),r={};r.setPixel=function(c,h,u){i[h*e+c]=u},r.write=function(c){c.writeString("GIF87a"),c.writeShort(e),c.writeShort(n),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(e),c.writeShort(n),c.writeByte(0);let h=2,u=a(h);c.writeByte(h);let d=0;for(;u.length-d>255;)c.writeByte(255),c.writeBytes(u,d,255),d+=255;c.writeByte(u.length-d),c.writeBytes(u,d,u.length-d),c.writeByte(0),c.writeString(";")};let o=function(c){let h=c,u=0,d=0,f={};return f.write=function(p,x){if(p>>>x)throw"length over";for(;u+x>=8;)h.writeByte(255&(p<<u|d)),x-=8-u,p>>>=8-u,d=0,u=0;d=p<<u|d,u=u+x},f.flush=function(){u>0&&h.writeByte(d)},f},a=function(c){let h=1<<c,u=(1<<c)+1,d=c+1,f=l();for(let y=0;y<h;y+=1)f.add(String.fromCharCode(y));f.add(String.fromCharCode(h)),f.add(String.fromCharCode(u));let p=Rm(),x=o(p);x.write(h,d);let m=0,g=String.fromCharCode(i[m]);for(m+=1;m<i.length;){let y=String.fromCharCode(i[m]);m+=1,f.contains(g+y)?g=g+y:(x.write(f.indexOf(g),d),f.size()<4095&&(f.size()==1<<d&&(d+=1),f.add(g+y)),g=y)}return x.write(f.indexOf(g),d),x.write(u,d),x.flush(),p.toByteArray()},l=function(){let c={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;c[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return c[d]},u.contains=function(d){return typeof c[d]<"u"},u};return r},Db=function(s,t,e){let n=Pb(s,t);for(let a=0;a<t;a+=1)for(let l=0;l<s;l+=1)n.setPixel(l,a,e(l,a));let i=Rm();n.write(i);let r=Ab(),o=i.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},$u=no,BE=no.stringToBytes;function V(s,t,e){return(t=(function(n){var i=(function(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)})(n,"string");return typeof i=="symbol"?i:i+""})(t))in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function Pm(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable}))),e.push.apply(e,n)}return e}function k(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Pm(Object(e),!0).forEach((function(n){V(s,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):Pm(Object(e)).forEach((function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(e,n))}))}return s}function ve(s,t){if(s==null)return{};var e,n,i=(function(o,a){if(o==null)return{};var l={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(a.indexOf(c)>=0)continue;l[c]=o[c]}return l})(s,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||{}.propertyIsEnumerable.call(s,e)&&(i[e]=s[e])}return i}function Ti(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))}var Uc=class{constructor(){V(this,"browserShadowBlurConstant",1),V(this,"DPI",96),V(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),V(this,"perfLimitSizeTotal",2097152),V(this,"maxCacheSideLimit",4096),V(this,"minCacheSideLimit",256),V(this,"disableStyleCopyPaste",!1),V(this,"enableGLFiltering",!0),V(this,"textureSize",4096),V(this,"forceGLPutImageData",!1),V(this,"cachesBoundsOfCurve",!1),V(this,"fontPaths",{}),V(this,"NUM_FRACTION_DIGITS",4)}},ie=new class extends Uc{constructor(s){super(),this.configure(s)}configure(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.assign(this,s)}addFonts(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.fontPaths=k(k({},this.fontPaths),s)}removeFonts(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach((s=>{delete this.fontPaths[s]}))}clearFonts(){this.fontPaths={}}restoreDefaults(s){let t=new Uc,e=s?.reduce(((n,i)=>(n[i]=t[i],n)),{})||t;this.configure(e)}},Ss=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return console[s]("fabric",...e)},Vn=class extends Error{constructor(t,e){super("fabric: ".concat(t),e)}},Bc=class extends Vn{constructor(t){super("".concat(t," 'options.signal' is in 'aborted' state"))}},ud=class{},dd=class extends ud{testPrecision(t,e){let n="precision ".concat(e,` float;
void main(){}`),i=t.createShader(t.FRAGMENT_SHADER);return!!i&&(t.shaderSource(i,n),t.compileShader(i),!!t.getShaderParameter(i,t.COMPILE_STATUS))}queryWebGL(t){let e=t.getContext("webgl");e&&(this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find((n=>this.testPrecision(e,n))),e.getExtension("WEBGL_lose_context").loseContext(),Ss("log","WebGL: max texture size ".concat(this.maxTextureSize)))}isSupported(t){return!!this.maxTextureSize&&this.maxTextureSize>=t}},Ib={},Dm;var bi=()=>Dm||(Dm={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new dd,dispose(){},copyPasteData:Ib}),yo=()=>bi().document,Pa=()=>bi().window,ug=()=>{var s;return Math.max((s=ie.devicePixelRatio)!==null&&s!==void 0?s:Pa().devicePixelRatio,1)},va=new class{constructor(){V(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache(s){let{fontFamily:t,fontStyle:e,fontWeight:n}=s;t=t.toLowerCase();let i=this.charWidthsCache;i.has(t)||i.set(t,new Map);let r=i.get(t),o="".concat(e.toLowerCase(),"_").concat((n+"").toLowerCase());return r.has(o)||r.set(o,new Map),r.get(o)}clearFontCache(s){s?this.charWidthsCache.delete((s||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(s){let{perfLimitSizeTotal:t}=ie,e=Math.sqrt(t*s);return[Math.floor(e),Math.floor(t/e)]}},fd="6.9.1";function dr(){}var bs=Math.PI/2,Hi=2*Math.PI,Gd=Math.PI/180,hn=Object.freeze([1,0,0,1,0,0]),Hd=16,ms=.4477152502,Wt="center",he="left",gn="top",pd="bottom",Pe="right",_n="none",Wd=/\r?\n/,dg="moving",dh="scaling",fg="rotating",Xd="rotate",pg="skewing",Ta="resizing",mg="modifyPoly",Ob="modifyPath",kc="changed",fh="scale",un="scaleX",Rn="scaleY",So="skewX",bo="skewY",Ne="fill",xn="stroke",zc="modified",io="json",Qu="svg",Mt=new class{constructor(){this[io]=new Map,this[Qu]=new Map}has(s){return this[io].has(s)}getClass(s){let t=this[io].get(s);if(!t)throw new Vn("No class registered for ".concat(s));return t}setClass(s,t){t?this[io].set(t,s):(this[io].set(s.type,s),this[io].set(s.type.toLowerCase(),s))}getSVGClass(s){return this[Qu].get(s)}setSVGClass(s,t){this[Qu].set(t??s.type.toLowerCase(),s)}},Vc=new class extends Array{remove(s){let t=this.indexOf(s);t>-1&&this.splice(t,1)}cancelAll(){let s=this.splice(0);return s.forEach((t=>t.abort())),s}cancelByCanvas(s){if(!s)return[];let t=this.filter((e=>{var n;return e.target===s||typeof e.target=="object"&&((n=e.target)===null||n===void 0?void 0:n.canvas)===s}));return t.forEach((e=>e.abort())),t}cancelByTarget(s){if(!s)return[];let t=this.filter((e=>e.target===s));return t.forEach((e=>e.abort())),t}},md=class{constructor(){V(this,"__eventListeners",{})}on(t,e){if(this.__eventListeners||(this.__eventListeners={}),typeof t=="object")return Object.entries(t).forEach((n=>{let[i,r]=n;this.on(i,r)})),()=>this.off(t);if(e){let n=t;return this.__eventListeners[n]||(this.__eventListeners[n]=[]),this.__eventListeners[n].push(e),()=>this.off(n,e)}return()=>!1}once(t,e){if(typeof t=="object"){let n=[];return Object.entries(t).forEach((i=>{let[r,o]=i;n.push(this.once(r,o))})),()=>n.forEach((i=>i()))}if(e){let n=this.on(t,(function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];e.call(this,...r),n()}));return n}return()=>!1}_removeEventListener(t,e){if(this.__eventListeners[t])if(e){let n=this.__eventListeners[t],i=n.indexOf(e);i>-1&&n.splice(i,1)}else this.__eventListeners[t]=[]}off(t,e){if(this.__eventListeners)if(t===void 0)for(let n in this.__eventListeners)this._removeEventListener(n);else typeof t=="object"?Object.entries(t).forEach((n=>{let[i,r]=n;this._removeEventListener(i,r)})):this._removeEventListener(t,e)}fire(t,e){var n;if(!this.__eventListeners)return;let i=(n=this.__eventListeners[t])===null||n===void 0?void 0:n.concat();if(i)for(let r=0;r<i.length;r++)i[r].call(this,e||{})}},Ys=(s,t)=>{let e=s.indexOf(t);return e!==-1&&s.splice(e,1),s},si=s=>{if(s===0)return 1;switch(Math.abs(s)/bs){case 1:case 3:return 0;case 2:return-1}return Math.cos(s)},ri=s=>{if(s===0)return 0;let t=s/bs,e=Math.sign(s);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(s)},J=class s{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new s(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new s(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new s(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new s(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new s(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new s(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new s(this.x/t.x,this.y/t.y)}scalarDivide(t){return new s(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.5;return e=Math.max(Math.min(1,e),0),new s(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new s(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new s(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return"".concat(this.x,",").concat(this.y)}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new s(this.x,this.y)}rotate(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:jd,n=ri(t),i=si(t),r=this.subtract(e);return new s(r.x*i-r.y*n,r.x*n+r.y*i).add(e)}transform(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return new s(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},jd=new J(0,0),Fc=s=>!!s&&Array.isArray(s._objects);function gg(s){class t extends s{constructor(){super(...arguments),V(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];let o=this._objects.push(...i);return i.forEach((a=>this._onObjectAdded(a))),o}insertAt(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return this._objects.splice(n,0,...r),r.forEach((a=>this._onObjectAdded(a))),this._objects.length}remove(){let n=this._objects,i=[];for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.forEach((l=>{let c=n.indexOf(l);c!==-1&&(n.splice(c,1),i.push(l),this._onObjectRemoved(l))})),i}forEachObject(n){this.getObjects().forEach(((i,r,o)=>n(i,r,o)))}getObjects(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length===0?[...this._objects]:this._objects.filter((o=>o.isType(...i)))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,i){return!!this._objects.includes(n)||!!i&&this._objects.some((r=>r instanceof t&&r.contains(n,!0)))}complexity(){return this._objects.reduce(((n,i)=>n+=i.complexity?i.complexity():0),0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(Ys(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(Ys(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let o=this.findNewLowerIndex(n,r,i);return Ys(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let o=this.findNewUpperIndex(n,r,i);return Ys(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,i){return n!==this._objects[i]&&(Ys(this._objects,n),this._objects.splice(i,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,i,r){let o;if(r){o=i;for(let a=i-1;a>=0;--a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i-1;return o}findNewUpperIndex(n,i,r){let o;if(r){o=i;for(let a=i+1;a<this._objects.length;++a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i+1;return o}collectObjects(n){let{left:i,top:r,width:o,height:a}=n,{includeIntersecting:l=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=[],h=new J(i,r),u=h.add(new J(o,a));for(let d=this._objects.length-1;d>=0;d--){let f=this._objects[d];f.selectable&&f.visible&&(l&&f.intersectsWithRect(h,u)||f.isContainedWithinRect(h,u)||l&&f.containsPoint(h)||l&&f.containsPoint(u))&&c.push(f)}return c}}return t}var Gc=class extends md{_setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(let e in t)this.set(e,t[e])}_setObject(t){for(let e in t)this._set(e,t[e])}set(t,e){return typeof t=="object"?this._setObject(t):this._set(t,e),this}_set(t,e){this[t]=e}toggle(t){let e=this.get(t);return typeof e=="boolean"&&this.set(t,!e),this}get(t){return this[t]}};function ya(s){return Pa().requestAnimationFrame(s)}function _g(s){return Pa().cancelAnimationFrame(s)}var Lb=0,Ms=()=>Lb++,Mi=()=>{let s=yo().createElement("canvas");if(!s||s.getContext===void 0)throw new Vn("Failed to create `canvas` element");return s},xg=()=>yo().createElement("img"),Pn=s=>{let t=Mi();return t.width=s.width,t.height=s.height,t},Yd=(s,t,e)=>s.toDataURL("image/".concat(t),e),qd=(s,t,e)=>new Promise(((n,i)=>{s.toBlob(n,"image/".concat(t),e)})),Te=s=>s*Gd,wi=s=>s/Gd,vg=s=>s.every(((t,e)=>t===hn[e])),nn=(s,t,e)=>new J(s).transform(t,e),An=s=>{let t=1/(s[0]*s[3]-s[1]*s[2]),e=[t*s[3],-t*s[1],-t*s[2],t*s[0],0,0],{x:n,y:i}=new J(s[4],s[5]).transform(e,!0);return e[4]=-n,e[5]=-i,e},Ce=(s,t,e)=>[s[0]*t[0]+s[2]*t[1],s[1]*t[0]+s[3]*t[1],s[0]*t[2]+s[2]*t[3],s[1]*t[2]+s[3]*t[3],e?0:s[0]*t[4]+s[2]*t[5]+s[4],e?0:s[1]*t[4]+s[3]*t[5]+s[5]],ph=(s,t)=>s.reduceRight(((e,n)=>n&&e?Ce(n,e,t):n||e),void 0)||hn.concat(),yg=s=>{let[t,e]=s;return Math.atan2(e,t)},po=s=>{let t=yg(s),e=Math.pow(s[0],2)+Math.pow(s[1],2),n=Math.sqrt(e),i=(s[0]*s[3]-s[2]*s[1])/n,r=Math.atan2(s[0]*s[2]+s[1]*s[3],e);return{angle:wi(t),scaleX:n,scaleY:i,skewX:wi(r),skewY:0,translateX:s[4]||0,translateY:s[5]||0}},Mo=function(s){return[1,0,0,1,s,arguments.length>1&&arguments[1]!==void 0?arguments[1]:0]};function yr(){let{angle:s=0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{x:t=0,y:e=0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Te(s),i=si(n),r=ri(n);return[i,r,-r,i,t?t-(i*t-r*e):0,e?e-(r*t+i*e):0]}var mh=function(s){return[s,0,0,arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,0,0]},Sg=s=>Math.tan(Te(s)),Zd=s=>[1,0,Sg(s),1,0,0],Jd=s=>[1,Sg(s),0,1,0,0],Da=s=>{let{scaleX:t=1,scaleY:e=1,flipX:n=!1,flipY:i=!1,skewX:r=0,skewY:o=0}=s,a=mh(n?-t:t,i?-e:e);return r&&(a=Ce(a,Zd(r),!0)),o&&(a=Ce(a,Jd(o),!0)),a},bg=s=>{let{translateX:t=0,translateY:e=0,angle:n=0}=s,i=Mo(t,e);n&&(i=Ce(i,yr({angle:n})));let r=Da(s);return vg(r)||(i=Ce(i,r)),i},Sa=function(s){let{signal:t,crossOrigin:e=null}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise((function(n,i){if(t&&t.aborted)return i(new Bc("loadImage"));let r=xg(),o;t&&(o=function(l){r.src="",i(l)},t.addEventListener("abort",o,{once:!0}));let a=function(){r.onload=r.onerror=null,o&&t?.removeEventListener("abort",o),n(r)};s?(r.onload=a,r.onerror=function(){o&&t?.removeEventListener("abort",o),i(new Vn("Error loading ".concat(r.src)))},e&&(r.crossOrigin=e),r.src=s):a()}))},mo=function(s){let{signal:t,reviver:e=dr}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((n,i)=>{let r=[];t&&t.addEventListener("abort",i,{once:!0}),Promise.all(s.map((o=>Mt.getClass(o.type).fromObject(o,{signal:t}).then((a=>(e(o,a),r.push(a),a)))))).then(n).catch((o=>{r.forEach((a=>{a.dispose&&a.dispose()})),i(o)})).finally((()=>{t&&t.removeEventListener("abort",i)}))}))},Ia=function(s){let{signal:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((e,n)=>{let i=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(s).map((a=>a&&a.type&&Mt.has(a.type)?mo([a],{signal:t}).then((l=>{let[c]=l;return i.push(c),c})):a)),o=Object.keys(s);Promise.all(r).then((a=>a.reduce(((l,c,h)=>(l[o[h]]=c,l)),{}))).then(e).catch((a=>{i.forEach((l=>{l.dispose&&l.dispose()})),n(a)})).finally((()=>{t&&t.removeEventListener("abort",n)}))}))},Sr=function(s){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).reduce(((t,e)=>(e in s&&(t[e]=s[e]),t)),{})},Kd=(s,t)=>Object.keys(s).reduce(((e,n)=>(t(s[n],n,s)&&(e[n]=s[n]),e)),{}),pe=(s,t)=>parseFloat(Number(s).toFixed(t)),go=s=>"matrix("+s.map((t=>pe(t,ie.NUM_FRACTION_DIGITS))).join(" ")+")",zn=s=>!!s&&s.toLive!==void 0,Im=s=>!!s&&typeof s.toObject=="function",Om=s=>!!s&&s.offsetX!==void 0&&"source"in s,qs=s=>!!s&&"multiSelectionStacking"in s;function Mg(s){let t=s&&ei(s),e=0,n=0;if(!s||!t)return{left:e,top:n};let i=s,r=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;i&&(i.parentNode||i.host)&&(i=i.parentNode||i.host,i===t?(e=o.scrollLeft||r.scrollLeft||0,n=o.scrollTop||r.scrollTop||0):(e+=i.scrollLeft||0,n+=i.scrollTop||0),i.nodeType!==1||i.style.position!=="fixed"););return{left:e,top:n}}var ei=s=>s.ownerDocument||null,wg=s=>{var t;return((t=s.ownerDocument)===null||t===void 0?void 0:t.defaultView)||null},Tg=function(s,t,e){let{width:n,height:i}=e,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;s.width=n,s.height=i,r>1&&(s.setAttribute("width",(n*r).toString()),s.setAttribute("height",(i*r).toString()),t.scale(r,r))},gd=(s,t)=>{let{width:e,height:n}=t;e&&(s.style.width=typeof e=="number"?"".concat(e,"px"):e),n&&(s.style.height=typeof n=="number"?"".concat(n,"px"):n)};function Lm(s){return s.onselectstart!==void 0&&(s.onselectstart=()=>!1),s.style.userSelect=_n,s}var Hc=class{constructor(t){V(this,"_originalCanvasStyle",void 0),V(this,"lower",void 0);let e=this.createLowerCanvas(t);this.lower={el:e,ctx:e.getContext("2d")}}createLowerCanvas(t){let e=(n=t)&&n.getContext!==void 0?t:t&&yo().getElementById(t)||Mi();var n;if(e.hasAttribute("data-fabric"))throw new Vn("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=e.style.cssText,e.setAttribute("data-fabric","main"),e.classList.add("lower-canvas"),e}cleanupDOM(t){let{width:e,height:n}=t,{el:i}=this.lower;i.classList.remove("lower-canvas"),i.removeAttribute("data-fabric"),i.setAttribute("width","".concat(e)),i.setAttribute("height","".concat(n)),i.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(t,e){let{el:n,ctx:i}=this.lower;Tg(n,i,t,e)}setCSSDimensions(t){gd(this.lower.el,t)}calcOffset(){return(function(t){var e;let n=t&&ei(t),i={left:0,top:0};if(!n)return i;let r=((e=wg(t))===null||e===void 0?void 0:e.getComputedStyle(t,null))||{};i.left+=parseInt(r.borderLeftWidth,10)||0,i.top+=parseInt(r.borderTopWidth,10)||0,i.left+=parseInt(r.paddingLeft,10)||0,i.top+=parseInt(r.paddingTop,10)||0;let o={left:0,top:0},a=n.documentElement;t.getBoundingClientRect!==void 0&&(o=t.getBoundingClientRect());let l=Mg(t);return{left:o.left+l.left-(a.clientLeft||0)+i.left,top:o.top+l.top-(a.clientTop||0)+i.top}})(this.lower.el)}dispose(){bi().dispose(this.lower.el),delete this.lower}},Fb={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...hn]},Nb=["objects"],gr=class s extends gg(Gc){get lowerCanvasEl(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.ctx}static getDefaults(){return s.ownDefaults}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new Hc(t)}add(){let t=super.add(...arguments);return arguments.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=super.insertAt(t,...n);return n.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),r}remove(){let t=super.remove(...arguments);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}_onObjectAdded(t){t.canvas&&t.canvas!==this&&(Ss("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?ug():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}setWidth(t,e){return this.setDimensions({width:t},e)}setHeight(t,e){return this.setDimensions({height:t},e)}_setDimensionsImpl(t){let{cssOnly:e=!1,backstoreOnly:n=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e){let i=k({width:this.width,height:this.height},t);this.elements.setDimensions(i,this.getRetinaScaling()),this.hasLostContext=!0,this.width=i.width,this.height=i.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return this.viewportTransform[0]}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,i=[...this.viewportTransform],r=nn(t,An(i));i[0]=e,i[3]=e;let o=nn(r,i);i[4]+=n.x-o.x,i[5]+=n.y-o.y,this.setViewportTransform(i)}setZoom(t){this.zoomToPoint(new J(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new J(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=ya((()=>this.renderAndReset())))}calcViewportBoundaries(){let t=this.width,e=this.height,n=An(this.viewportTransform),i=nn({x:0,y:0},n),r=nn({x:t,y:e},n),o=i.min(r),a=i.max(r);return this.vptCoords={tl:o,tr:new J(a.x,o.y),bl:new J(o.x,a.y),br:a}}cancelRequestedRender(){this.nextRenderHandle&&(_g(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,i=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality="best",this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),i&&(i._set("canvas",this),i.shouldCache(),i._transformDone=!0,i.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,i)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,i=e.length;n<i;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this["".concat(e,"Color")],i=this["".concat(e,"Image")],r=this.viewportTransform,o=this["".concat(e,"Vpt")];if(!n&&!i)return;let a=zn(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=a?n.toLive(t):n,o&&t.transform(...r),a){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(i){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=o,o&&t.transform(...r),i.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenter(){return{top:this.height/2,left:this.width/2}}getCenterPoint(){return new J(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new J(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new J(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new J(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new J(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return nn(this.getCenterPoint(),An(this.viewportTransform))}_centerObject(t,e){t.setXY(e,Wt,Wt),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,i=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return k(k(k({version:fd},Sr(this,e)),{},{objects:this._objects.filter((r=>!r.excludeFromExport)).map((r=>this._toObject(r,t,e)))},this.__serializeBgOverlay(t,e)),i?{clipPath:i}:null)}_toObject(t,e,n){let i;this.includeDefaultValues||(i=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!i),r}__serializeBgOverlay(t,e){let n={},i=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,a=this.overlayColor;return zn(o)?o.excludeFromExport||(n.background=o.toObject(e)):o&&(n.background=o),zn(a)?a.excludeFromExport||(n.overlay=a.toObject(e)):a&&(n.overlay=a),i&&!i.excludeFromExport&&(n.backgroundImage=this._toObject(i,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;t.reviver=e;let n=[];return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId,`)" >
`)),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||"".concat(this.width),i=e.height||"".concat(this.height),r=ie.NUM_FRACTION_DIGITS,o=e.viewBox,a;if(o)a='viewBox="'.concat(o.x," ").concat(o.y," ").concat(o.width," ").concat(o.height,'" ');else if(this.svgViewportTransformation){let l=this.viewportTransform;a='viewBox="'.concat(pe(-l[4]/l[0],r)," ").concat(pe(-l[5]/l[3],r)," ").concat(pe(this.width/l[0],r)," ").concat(pe(this.height/l[3],r),'" ')}else a='viewBox="0 0 '.concat(this.width," ").concat(this.height,'" ');t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',i,'" ',a,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",fd,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId="CLIPPATH_".concat(Ms()),'<clipPath id="'.concat(e.clipPathId,`" >
`).concat(e.toClipPathSVG(t.reviver),`</clipPath>
`)):""}createSVGRefElementsMarkup(){return["background","overlay"].map((t=>{let e=this["".concat(t,"Color")];if(zn(e)){let n=this["".concat(t,"Vpt")],i=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?i[0]:1),height:this.height/(n?i[3]:1)};return e.toSVG(r,{additionalTransform:n?go(i):""})}})).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=ie.fontPaths;this._objects.forEach((function r(o){t.push(o),Fc(o)&&o._objects.forEach(r)})),t.forEach((r=>{if(!(o=r)||typeof o._renderText!="function")return;var o;let{styles:a,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,a&&Object.values(a).forEach((c=>{Object.values(c).forEach((h=>{let{fontFamily:u=""}=h;!e[u]&&n[u]&&(e[u]=!0)}))})))}));let i=Object.keys(e).map((r=>`		@font-face {
			font-family: '`.concat(r,`';
			src: url('`).concat(n[r],`');
		}
`))).join("");return i?`	<style type="text/css"><![CDATA[
`.concat(i,`]]></style>
`):""}_setSVGObjects(t,e){this.forEachObject((n=>{n.excludeFromExport||this._setSVGObject(t,n,e)}))}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let i=this[e];i&&!i.excludeFromExport&&i.toSVG&&t.push(i.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this["".concat(e,"Color")];if(n)if(zn(n)){let i=n.repeat||"",r=this.width,o=this.height,a=this["".concat(e,"Vpt")]?go(An(this.viewportTransform)):"";t.push('<rect transform="'.concat(a," translate(").concat(r/2,",").concat(o/2,')" x="').concat(n.offsetX-r/2,'" y="').concat(n.offsetY-o/2,'" width="').concat(i!=="repeat-y"&&i!=="no-repeat"||!Om(n)?r:n.source.width,'" height="').concat(i!=="repeat-x"&&i!=="no-repeat"||!Om(n)?o:n.source.height,'" fill="url(#SVGID_').concat(n.id,`)"></rect>
`))}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e){let{signal:n}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t)return Promise.reject(new Vn("`json` is undefined"));let i=typeof t=="string"?JSON.parse(t):t,{objects:r=[]}=i,o=ve(i,Nb),{backgroundImage:a,background:l,overlayImage:c,overlay:h,clipPath:u}=o,d=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([mo(r,{reviver:e,signal:n}),Ia({backgroundImage:a,backgroundColor:l,overlayImage:c,overlayColor:h,clipPath:u},{signal:n})]).then((f=>{let[p,x]=f;return this.clear(),this.add(...p),this.set(o),this.set(x),this.renderOnAddRemove=d,this}))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=Pn(this);return new this.constructor(t)}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Yd(this.toCanvasElement(o,t),e,n)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return qd(this.toCanvasElement(o,t),e,n)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,{width:e,height:n,left:i,top:r,filter:o}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,u=this.height,d=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,x=[f,0,0,f,(p[4]-(i||0))*t,(p[5]-(r||0))*t],m=this.enableRetinaScaling,g=Pn({width:a,height:l}),y=o?this._objects.filter((R=>o(R))):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=x,this.width=a,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(g.getContext("2d"),y),this.viewportTransform=p,this.width=h,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=m,this.skipControlsDrawing=d,g}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),Vc.cancelByCanvas(this),this.disposed=!0,new Promise(((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()}))}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject((t=>t.dispose())),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return"#<Canvas (".concat(this.complexity(),"): { objects: ").concat(this._objects.length," }>")}};V(gr,"ownDefaults",Fb);var Ub=["touchstart","touchmove","touchend"],Cg=s=>{let t=Mg(s.target),e=(function(n){let i=n.changedTouches;return i&&i[0]?i[0]:n})(s);return new J(e.clientX+t.left,e.clientY+t.top)},Wc=s=>Ub.includes(s.type)||s.pointerType==="touch",Fm=s=>{s.preventDefault(),s.stopPropagation()},Si=s=>{let t=0,e=0,n=0,i=0;for(let r=0,o=s.length;r<o;r++){let{x:a,y:l}=s[r];(a>n||!r)&&(n=a),(a<t||!r)&&(t=a),(l>i||!r)&&(i=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:i-e}},Bb=["translateX","translateY","scaleX","scaleY"],Eg=(s,t)=>_o(s,Ce(t,s.calcOwnMatrix())),_o=(s,t)=>{let e=po(t),{translateX:n,translateY:i,scaleX:r,scaleY:o}=e,a=ve(e,Bb),l=new J(n,i);s.flipX=!1,s.flipY=!1,Object.assign(s,a),s.set({scaleX:r,scaleY:o}),s.setPositionByOrigin(l,Wt,Wt)},Ag=s=>{s.scaleX=1,s.scaleY=1,s.skewX=0,s.skewY=0,s.flipX=!1,s.flipY=!1,s.rotate(0)},$d=s=>({scaleX:s.scaleX,scaleY:s.scaleY,skewX:s.skewX,skewY:s.skewY,angle:s.angle,left:s.left,flipX:s.flipX,flipY:s.flipY,top:s.top}),gh=(s,t,e)=>{let n=s/2,i=t/2,r=[new J(-n,-i),new J(n,-i),new J(-n,i),new J(n,i)].map((a=>a.transform(e))),o=Si(r);return new J(o.width,o.height)},Oa=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hn;return Ce(An(arguments.length>1&&arguments[1]!==void 0?arguments[1]:hn),s)},Gi=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hn,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:hn;return s.transform(Oa(t,e))},Rg=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hn,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:hn;return s.transform(Oa(t,e),!0)},_d=(s,t,e)=>{let n=Oa(t,e);return _o(s,Ce(n,s.calcOwnMatrix())),n},Qd=(s,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)===null||e===void 0||e.fire("object:".concat(s),k(k({},t),{},{target:n})),n.fire(s,t)},kb={left:-.5,top:-.5,center:0,bottom:.5,right:.5},Oe=s=>typeof s=="string"?kb[s]:s-.5,Xc="not-allowed";function Pg(s){return Oe(s.originX)===Oe(Wt)&&Oe(s.originY)===Oe(Wt)}function Nm(s){return .5-Oe(s)}var ii=(s,t)=>s[t],tf=(s,t,e,n)=>({e:s,transform:t,pointer:new J(e,n)});function Dg(s,t){let e=s.getTotalAngle()+wi(Math.atan2(t.y,t.x))+360;return Math.round(e%360/45)}function _h(s,t,e,n,i){var r;let{target:o,corner:a}=s,l=o.controls[a],c=((r=o.canvas)===null||r===void 0?void 0:r.getZoom())||1,h=o.padding/c,u=(function(d,f,p,x){let m=d.getRelativeCenterPoint(),g=p!==void 0&&x!==void 0?d.translateToGivenOrigin(m,Wt,Wt,p,x):new J(d.left,d.top);return(d.angle?f.rotate(-Te(d.angle),m):f).subtract(g)})(o,new J(n,i),t,e);return u.x>=h&&(u.x-=h),u.x<=-h&&(u.x+=h),u.y>=h&&(u.y-=h),u.y<=h&&(u.y+=h),u.x-=l.offsetX,u.y-=l.offsetY,u}var Ig=(s,t,e,n)=>{let{target:i,offsetX:r,offsetY:o}=t,a=e-r,l=n-o,c=!ii(i,"lockMovementX")&&i.left!==a,h=!ii(i,"lockMovementY")&&i.top!==l;return c&&i.set(he,a),h&&i.set(gn,l),(c||h)&&Qd(dg,tf(s,t,e,n)),c||h},jc=s=>s.replace(/\s+/g," "),Um={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},td=(s,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+6*(t-s)*e:e<.5?t:e<2/3?s+(t-s)*(2/3-e)*6:s),Bm=(s,t,e,n)=>{s/=255,t/=255,e/=255;let i=Math.max(s,t,e),r=Math.min(s,t,e),o,a,l=(i+r)/2;if(i===r)o=a=0;else{let c=i-r;switch(a=l>.5?c/(2-i-r):c/(i+r),i){case s:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-s)/c+2;break;case e:o=(s-t)/c+4}o/=6}return[Math.round(360*o),Math.round(100*a),Math.round(100*l),n]},km=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"1";return parseFloat(s)/(s.endsWith("%")?100:1)},Ac=s=>Math.min(Math.round(s),255).toString(16).toUpperCase().padStart(2,"0"),zm=s=>{let[t,e,n,i=1]=s,r=Math.round(.3*t+.59*e+.11*n);return[r,r,r,i]},dn=class s{constructor(t){if(V(this,"isUnrecognised",!1),t)if(t instanceof s)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,i,r=1]=t;this.setSource([e,n,i,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in Um&&(t=Um[t]),t==="transparent"?[255,255,255,0]:s.sourceFromHex(t)||s.sourceFromRgb(t)||s.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return"rgb(".concat(t,",").concat(e,",").concat(n,")")}toRgba(){return"rgba(".concat(this.getSource().join(","),")")}toHsl(){let[t,e,n]=Bm(...this.getSource());return"hsl(".concat(t,",").concat(e,"%,").concat(n,"%)")}toHsla(){let[t,e,n,i]=Bm(...this.getSource());return"hsla(".concat(t,",").concat(e,"%,").concat(n,"%,").concat(i,")")}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,i]=this.getSource();return"".concat(Ac(t)).concat(Ac(e)).concat(Ac(n)).concat(Ac(Math.round(255*i)))}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(zm(this.getSource())),this}toBlackWhite(t){let[e,,,n]=zm(this.getSource()),i=e<(t||127)?0:255;return this.setSource([i,i,i,n]),this}overlayWith(t){t instanceof s||(t=new s(t));let e=this.getSource(),n=t.getSource(),[i,r,o]=e.map(((a,l)=>Math.round(.5*a+.5*n[l])));return this.setSource([i,r,o,e[3]]),this}static fromRgb(t){return s.fromRgba(t)}static fromRgba(t){return new s(s.sourceFromRgb(t))}static sourceFromRgb(t){let e=jc(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,i,r]=e.slice(1,4).map((o=>{let a=parseFloat(o);return o.endsWith("%")?Math.round(2.55*a):a}));return[n,i,r,km(e[4])]}}static fromHsl(t){return s.fromHsla(t)}static fromHsla(t){return new s(s.sourceFromHsl(t))}static sourceFromHsl(t){let e=jc(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(s.parseAngletoDegrees(e[1])%360+360)%360/360,i=parseFloat(e[2])/100,r=parseFloat(e[3])/100,o,a,l;if(i===0)o=a=l=r;else{let c=r<=.5?r*(i+1):r+i-r*i,h=2*r-c;o=td(h,c,n+1/3),a=td(h,c,n),l=td(h,c,n-1/3)}return[Math.round(255*o),Math.round(255*a),Math.round(255*l),km(e[4])]}static fromHex(t){return new s(s.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map((l=>l+l)):e.match(/.{2}/g);let[i,r,o,a=255]=n.map((l=>parseInt(l,16)));return[i,r,o,a/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?wi(n):e.includes("turn")?360*n:n}},fr=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hd,e=/\D{0,2}$/.exec(s),n=parseFloat(s),i=ie.DPI;switch(e?.[0]){case"mm":return n*i/25.4;case"cm":return n*i/2.54;case"in":return n*i;case"pt":return n*i/72;case"pc":return n*i/72*12;case"em":return n*t;default:return n}},Og=s=>{let[t,e]=s.trim().split(" "),[n,i]=(r=t)&&r!==_n?[r.slice(1,4),r.slice(5,8)]:r===_n?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:i}},Ca=function(s,t){let e,n,i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t)if(t.toLive)e="url(#SVGID_".concat(t.id,")");else{let r=new dn(t),o=r.getAlpha();e=r.toRgb(),o!==1&&(n=o.toString())}else e="none";return i?"".concat(s,": ").concat(e,"; ").concat(n?"".concat(s,"-opacity: ").concat(n,"; "):""):"".concat(s,'="').concat(e,'" ').concat(n?"".concat(s,'-opacity="').concat(n,'" '):"")},Yc=class{getSvgStyles(t){let e=this.fillRule?this.fillRule:"nonzero",n=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):_n,r=this.strokeDashOffset?this.strokeDashOffset:"0",o=this.strokeLineCap?this.strokeLineCap:"butt",a=this.strokeLineJoin?this.strokeLineJoin:"miter",l=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=this.opacity!==void 0?this.opacity:"1",h=this.visible?"":" visibility: hidden;",u=t?"":this.getSvgFilter(),d=Ca(Ne,this.fill);return[Ca(xn,this.stroke),"stroke-width: ",n,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",o,"; ","stroke-dashoffset: ",r,"; ","stroke-linejoin: ",a,"; ","stroke-miterlimit: ",l,"; ",d,"fill-rule: ",e,"; ","opacity: ",c,";",u,h].join("")}getSvgFilter(){return this.shadow?"filter: url(#SVGID_".concat(this.shadow.id,");"):""}getSvgCommons(){return[this.id?'id="'.concat(this.id,'" '):"",this.clipPath?'clip-path="url(#'.concat(this.clipPath.clipPathId,')" '):""].join("")}getSvgTransform(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t?this.calcTransformMatrix():this.calcOwnMatrix(),i='transform="'.concat(go(n));return"".concat(i).concat(e,'" ')}_toSVG(t){return[""]}toSVG(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})}toClipPathSVG(t){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})}_createBaseClipPathSVGMarkup(t){let{reviver:e,additionalTransform:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(""),r=t.indexOf("COMMON_PARTS");return t[r]=i,e?e(t.join("")):t.join("")}_createBaseSVGMarkup(t){let{noStyle:e,reviver:n,withShadow:i,additionalTransform:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e?"":'style="'.concat(this.getSvgStyles(),'" '),a=i?'style="'.concat(this.getSvgFilter(),'" '):"",l=this.clipPath,c=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",h=l&&l.absolutePositioned,u=this.stroke,d=this.fill,f=this.shadow,p=[],x=t.indexOf("COMMON_PARTS"),m;l&&(l.clipPathId="CLIPPATH_".concat(Ms()),m='<clipPath id="'.concat(l.clipPathId,`" >
`).concat(l.toClipPathSVG(n),`</clipPath>
`)),h&&p.push("<g ",a,this.getSvgCommons(),` >
`),p.push("<g ",this.getSvgTransform(!1),h?"":a+this.getSvgCommons(),` >
`);let g=[o,c,e?"":this.addPaintOrder()," ",r?'transform="'.concat(r,'" '):""].join("");return t[x]=g,zn(d)&&p.push(d.toSVG(this)),zn(u)&&p.push(u.toSVG(this)),f&&p.push(f.toSVG(this)),l&&p.push(m),p.push(t.join("")),p.push(`</g>
`),h&&p.push(`</g>
`),n?n(p.join("")):p.join("")}addPaintOrder(){return this.paintFirst!==Ne?' paint-order="'.concat(this.paintFirst,'" '):""}};function xh(s){return new RegExp("^("+s.join("|")+")\\b","i")}var _r="textDecorationThickness",Lg=["fontSize","fontWeight","fontFamily","fontStyle"],Fg=["underline","overline","linethrough"],Ng=[...Lg,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],Ug=[...Ng,...Fg,"textBackgroundColor","direction",_r],zb=[...Lg,...Fg,xn,"strokeWidth",Ne,"deltaY","textBackgroundColor",_r],Vb={_reNewline:Wd,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:he,fontStyle:"normal",lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:he,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[_r]:66.667},yi="justify",qc="justify-left",ba="justify-right",Ma="justify-center",Vm,Gm,Hm,ni=String.raw(Vm||(Vm=Ti(["[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"],["[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"]))),ed=String.raw(Gm||(Gm=Ti(["(?:s*,?s+|s*,s*)"],["(?:\\s*,?\\s+|\\s*,\\s*)"])));var Gb=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+ni+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+ni+"))?\\s+(.*)"),Hb={cx:he,x:he,r:"radius",cy:gn,y:gn,display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":_r},nd="font-size",id="clip-path",zE=xh(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),VE=xh(["symbol","image","marker","pattern","view","svg"]),Wm=xh(["symbol","g","a","svg","clipPath","defs"]),GE=new RegExp(String.raw(Hm||(Hm=Ti(["^s*(",")","(",")","(",")","(",")s*$"],["^\\s*(",")","(",")","(",")","(",")\\s*$"])),ni,ed,ni,ed,ni,ed,ni)),Wb=new J(1,0),Bg=new J,ef=(s,t)=>s.rotate(t),Zc=(s,t)=>new J(t).subtract(s),Jc=s=>s.distanceFrom(Bg),Kc=(s,t)=>Math.atan2(uo(s,t),zg(s,t)),kg=s=>Kc(Wb,s),vh=s=>s.eq(Bg)?s:s.scalarDivide(Jc(s)),nf=function(s){let t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return vh(new J(-s.y,s.x).scalarMultiply(t?1:-1))},uo=(s,t)=>s.x*t.y-s.y*t.x,zg=(s,t)=>s.x*t.x+s.y*t.y,xd=(s,t,e)=>{if(s.eq(t)||s.eq(e))return!0;let n=uo(t,e),i=uo(t,s),r=uo(e,s);return n>=0?i>=0&&r<=0:!(i<=0&&r>=0)},Xm="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",jm=new RegExp("(?:\\s|^)"+Xm+Xm+"("+ni+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),pr=class s{constructor(t){let e=typeof t=="string"?s.parseShadow(t):t;Object.assign(this,s.ownDefaults,e),this.id=Ms()}static parseShadow(t){let e=t.trim(),[,n=0,i=0,r=0]=(jm.exec(e)||[]).map((o=>parseFloat(o)||0));return{color:(e.replace(jm,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:i,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=ef(new J(this.offsetX,this.offsetY),Te(-t.angle)),n=new dn(this.color),i=40,r=40;return t.width&&t.height&&(i=100*pe((Math.abs(e.x)+this.blur)/t.width,ie.NUM_FRACTION_DIGITS)+20,r=100*pe((Math.abs(e.y)+this.blur)/t.height,ie.NUM_FRACTION_DIGITS)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),'<filter id="SVGID_'.concat(this.id,'" y="-').concat(r,'%" height="').concat(100+2*r,'%" x="-').concat(i,'%" width="').concat(100+2*i,`%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(pe(this.blur?this.blur/2:0,ie.NUM_FRACTION_DIGITS),`"></feGaussianBlur>
	<feOffset dx="`).concat(pe(e.x,ie.NUM_FRACTION_DIGITS),'" dy="').concat(pe(e.y,ie.NUM_FRACTION_DIGITS),`" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(n.toRgb(),'" flood-opacity="').concat(n.getAlpha(),`"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`)}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=s.ownDefaults;return this.includeDefaultValues?t:Kd(t,((n,i)=>n!==e[i]))}static async fromObject(t){return new this(t)}};V(pr,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),V(pr,"type","shadow"),Mt.setClass(pr,"shadow");var xr=(s,t,e)=>Math.max(s,Math.min(t,e)),Xb=[gn,he,un,Rn,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",So,bo],Wi=[Ne,xn,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],jb={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:he,originY:gn,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:Ne,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},sd=(s,t,e,n)=>(s<Math.abs(t)?(s=t,n=e/4):n=t===0&&s===0?e/Hi*Math.asin(1):e/Hi*Math.asin(t/s),{a:s,c:t,p:e,s:n}),Ym=(s,t,e,n,i)=>s*Math.pow(2,10*(n-=1))*Math.sin((n*i-t)*Hi/e),Vg=(s,t,e,n)=>-e*Math.cos(s/n*bs)+e+t,vd=(s,t,e,n)=>(s/=n)<1/2.75?e*(7.5625*s*s)+t:s<2/2.75?e*(7.5625*(s-=1.5/2.75)*s+.75)+t:s<2.5/2.75?e*(7.5625*(s-=2.25/2.75)*s+.9375)+t:e*(7.5625*(s-=2.625/2.75)*s+.984375)+t,qm=(s,t,e,n)=>e-vd(n-s,0,e,n)+t,Yb=Object.freeze({__proto__:null,defaultEasing:Vg,easeInBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*(s/=n)*s*((i+1)*s-i)+t},easeInBounce:qm,easeInCirc:(s,t,e,n)=>-e*(Math.sqrt(1-(s/=n)*s)-1)+t,easeInCubic:(s,t,e,n)=>e*(s/n)**3+t,easeInElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l}=sd(i,e,r,1.70158);return-Ym(o,a,l,s,n)+t},easeInExpo:(s,t,e,n)=>s===0?t:e*2**(10*(s/n-1))+t,easeInOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return(s/=n/2)<1?e/2*(s*s*((1+(i*=1.525))*s-i))+t:e/2*((s-=2)*s*((1+(i*=1.525))*s+i)+2)+t},easeInOutBounce:(s,t,e,n)=>s<n/2?.5*qm(2*s,0,e,n)+t:.5*vd(2*s-n,0,e,n)+.5*e+t,easeInOutCirc:(s,t,e,n)=>(s/=n/2)<1?-e/2*(Math.sqrt(1-s**2)-1)+t:e/2*(Math.sqrt(1-(s-=2)*s)+1)+t,easeInOutCubic:(s,t,e,n)=>(s/=n/2)<1?e/2*s**3+t:e/2*((s-2)**3+2)+t,easeInOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n/2)===2)return t+e;r||(r=n*(.3*1.5));let{a:o,s:a,p:l,c}=sd(i,e,r,1.70158);return s<1?-.5*Ym(o,a,l,s,n)+t:o*Math.pow(2,-10*(s-=1))*Math.sin((s*n-a)*Hi/l)*.5+c+t},easeInOutExpo:(s,t,e,n)=>s===0?t:s===n?t+e:(s/=n/2)<1?e/2*2**(10*(s-1))+t:e/2*-(2**(-10*--s)+2)+t,easeInOutQuad:(s,t,e,n)=>(s/=n/2)<1?e/2*s**2+t:-e/2*(--s*(s-2)-1)+t,easeInOutQuart:(s,t,e,n)=>(s/=n/2)<1?e/2*s**4+t:-e/2*((s-=2)*s**3-2)+t,easeInOutQuint:(s,t,e,n)=>(s/=n/2)<1?e/2*s**5+t:e/2*((s-2)**5+2)+t,easeInOutSine:(s,t,e,n)=>-e/2*(Math.cos(Math.PI*s/n)-1)+t,easeInQuad:(s,t,e,n)=>e*(s/=n)*s+t,easeInQuart:(s,t,e,n)=>e*(s/=n)*s**3+t,easeInQuint:(s,t,e,n)=>e*(s/n)**5+t,easeInSine:(s,t,e,n)=>-e*Math.cos(s/n*bs)+e+t,easeOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*((s=s/n-1)*s*((i+1)*s+i)+1)+t},easeOutBounce:vd,easeOutCirc:(s,t,e,n)=>e*Math.sqrt(1-(s=s/n-1)*s)+t,easeOutCubic:(s,t,e,n)=>e*((s/n-1)**3+1)+t,easeOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l,c}=sd(i,e,r,1.70158);return o*2**(-10*s)*Math.sin((s*n-a)*Hi/l)+c+t},easeOutExpo:(s,t,e,n)=>s===n?t+e:e*-(2**(-10*s/n)+1)+t,easeOutQuad:(s,t,e,n)=>-e*(s/=n)*(s-2)+t,easeOutQuart:(s,t,e,n)=>-e*((s=s/n-1)*s**3-1)+t,easeOutQuint:(s,t,e,n)=>e*((s/n-1)**5+1)+t,easeOutSine:(s,t,e,n)=>e*Math.sin(s/n*bs)+t}),qb=()=>!1,Ea=class{constructor(t){let{startValue:e,byValue:n,duration:i=500,delay:r=0,easing:o=Vg,onStart:a=dr,onChange:l=dr,onComplete:c=dr,abort:h=qb,target:u}=t;V(this,"_state","pending"),V(this,"durationProgress",0),V(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=i,this.delay=r,this.easing=o,this._onStart=a,this._onChange=l,this._onComplete=c,this._abort=h,this.target=u,this.startValue=e,this.byValue=n,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let t=e=>{this._state==="pending"&&(this.startTime=e||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?setTimeout((()=>ya(t)),this.delay):ya(t)}tick(t){let e=(t||+new Date)-this.startTime,n=Math.min(e,this.duration);this.durationProgress=n/this.duration;let{value:i,valueProgress:r}=this.calculate(n);this.value=Object.freeze(i),this.valueProgress=r,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):e>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister()):(this._onChange(this.value,this.valueProgress,this.durationProgress),ya(this.tick)))}register(){Vc.push(this)}unregister(){Vc.remove(this)}abort(){this._state="aborted",this.unregister()}},Zb=["startValue","endValue"],yd=class extends Ea{constructor(t){let{startValue:e=0,endValue:n=100}=t;super(k(k({},ve(t,Zb)),{},{startValue:e,byValue:n-e}))}calculate(t){let e=this.easing(t,this.startValue,this.byValue,this.duration);return{value:e,valueProgress:Math.abs((e-this.startValue)/this.byValue)}}},Jb=["startValue","endValue"],Sd=class extends Ea{constructor(t){let{startValue:e=[0],endValue:n=[100]}=t;super(k(k({},ve(t,Jb)),{},{startValue:e,byValue:n.map(((i,r)=>i-e[r]))}))}calculate(t){let e=this.startValue.map(((n,i)=>this.easing(t,n,this.byValue[i],this.duration,i)));return{value:e,valueProgress:Math.abs((e[0]-this.startValue[0])/this.byValue[0])}}},Kb=["startValue","endValue","easing","onChange","onComplete","abort"],$b=(s,t,e,n)=>t+e*(1-Math.cos(s/n*bs)),rd=s=>s&&((t,e,n)=>s(new dn(t).toRgba(),e,n)),bd=class extends Ea{constructor(t){let{startValue:e,endValue:n,easing:i=$b,onChange:r,onComplete:o,abort:a}=t,l=ve(t,Kb),c=new dn(e).getSource(),h=new dn(n).getSource();super(k(k({},l),{},{startValue:c,byValue:h.map(((u,d)=>u-c[d])),easing:i,onChange:rd(r),onComplete:rd(o),abort:rd(a)}))}calculate(t){let[e,n,i,r]=this.startValue.map(((a,l)=>this.easing(t,a,this.byValue[l],this.duration,l))),o=[...[e,n,i].map(Math.round),xr(0,r,1)];return{value:o,valueProgress:o.map(((a,l)=>this.byValue[l]!==0?Math.abs((a-this.startValue[l])/this.byValue[l]):0)).find((a=>a!==0))||0}}};function sf(s){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(s)?new Sd(s):new yd(s);return t.start(),t}function Gg(s){let t=new bd(s);return t.start(),t}var mr=class s{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some((e=>e.eq(t)))}append(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.points=this.points.concat(e.filter((i=>!this.includes(i)))),this}static isPointContained(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(i||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(i||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=Zc(e,n),o=Zc(e,t).divide(r);return i?Math.abs(o.x)===Math.abs(o.y):o.x===o.y&&o.x>=0&&o.x<=1}}static isPointInPolygon(t,e){let n=new J(t).setX(Math.min(t.x-1,...e.map((r=>r.x)))),i=0;for(let r=0;r<e.length;r++){let o=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(o.includes(t))return!0;i+=+(o.status==="Intersection")}return i%2==1}static intersectLineLine(t,e,n,i){let r=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=!(arguments.length>5&&arguments[5]!==void 0)||arguments[5],a=e.x-t.x,l=e.y-t.y,c=i.x-n.x,h=i.y-n.y,u=t.x-n.x,d=t.y-n.y,f=c*d-h*u,p=a*d-l*u,x=h*a-c*l;if(x!==0){let m=f/x,g=p/x;return(r||0<=m&&m<=1)&&(o||0<=g&&g<=1)?new s("Intersection").append(new J(t.x+m*a,t.y+m*l)):new s}if(f===0||p===0){let m=r||o||s.isPointContained(t,n,i)||s.isPointContained(e,n,i)||s.isPointContained(n,t,e)||s.isPointContained(i,t,e);return new s(m?"Coincident":void 0)}return new s("Parallel")}static intersectSegmentLine(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!0)}static intersectSegmentSegment(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!1)}static intersectLinePolygon(t,e,n){let i=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],r=new s,o=n.length;for(let a,l,c,h=0;h<o;h++){if(a=n[h],l=n[(h+1)%o],c=s.intersectLineLine(t,e,a,l,i,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return s.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new s,i=t.length,r=[];for(let o=0;o<i;o++){let a=t[o],l=t[(o+1)%i],c=s.intersectSegmentPolygon(a,l,e);c.status==="Coincident"?(r.push(c),n.append(a,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new s("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let i=e.min(n),r=e.max(n),o=new J(r.x,i.y),a=new J(i.x,r.y);return s.intersectPolygonPolygon(t,[i,o,r,a])}},Md=class extends Gc{getX(){return this.getXY().x}setX(t){this.setXY(this.getXY().setX(t))}getY(){return this.getXY().y}setY(t){this.setXY(this.getXY().setY(t))}getRelativeX(){return this.left}setRelativeX(t){this.left=t}getRelativeY(){return this.top}setRelativeY(t){this.top=t}getXY(){let t=this.getRelativeXY();return this.group?nn(t,this.group.calcTransformMatrix()):t}setXY(t,e,n){this.group&&(t=nn(t,An(this.group.calcTransformMatrix()))),this.setRelativeXY(t,e,n)}getRelativeXY(){return new J(this.left,this.top)}setRelativeXY(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.originX,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.originY;this.setPositionByOrigin(t,e,n)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:t,tr:e,br:n,bl:i}=this.aCoords||(this.aCoords=this.calcACoords()),r=[t,e,n,i];if(this.group){let o=this.group.calcTransformMatrix();return r.map((a=>nn(a,o)))}return r}intersectsWithRect(t,e){return mr.intersectPolygonRectangle(this.getCoords(),t,e).status==="Intersection"}intersectsWithObject(t){let e=mr.intersectPolygonPolygon(this.getCoords(),t.getCoords());return e.status==="Intersection"||e.status==="Coincident"||t.isContainedWithinObject(this)||this.isContainedWithinObject(t)}isContainedWithinObject(t){return this.getCoords().every((e=>t.containsPoint(e)))}isContainedWithinRect(t,e){let{left:n,top:i,width:r,height:o}=this.getBoundingRect();return n>=t.x&&n+r<=e.x&&i>=t.y&&i+o<=e.y}isOverlapping(t){return this.intersectsWithObject(t)||this.isContainedWithinObject(t)||t.isContainedWithinObject(this)}containsPoint(t){return mr.isPointInPolygon(t,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return!!this.getCoords().some((n=>n.x<=e.x&&n.x>=t.x&&n.y<=e.y&&n.y>=t.y))||!!this.intersectsWithRect(t,e)||this.containsPoint(t.midPointFrom(e))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return this.intersectsWithRect(t,e)?!0:this.getCoords().every((n=>(n.x>=e.x||n.x<=t.x)&&(n.y>=e.y||n.y<=t.y)))&&this.containsPoint(t.midPointFrom(e))}getBoundingRect(){return Si(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(t){this._set(un,t),this._set(Rn,t),this.setCoords()}scaleToWidth(t){let e=this.getBoundingRect().width/this.getScaledWidth();return this.scale(t/this.width/e)}scaleToHeight(t){let e=this.getBoundingRect().height/this.getScaledHeight();return this.scale(t/this.height/e)}getCanvasRetinaScaling(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.getRetinaScaling())||1}getTotalAngle(){return this.group?wi(yg(this.calcTransformMatrix())):this.angle}getViewportTransform(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.viewportTransform)||hn.concat()}calcACoords(){let t=yr({angle:this.angle}),{x:e,y:n}=this.getRelativeCenterPoint(),i=Mo(e,n),r=Ce(i,t),o=this._getTransformedDimensions(),a=o.x/2,l=o.y/2;return{tl:nn({x:-a,y:-l},r),tr:nn({x:a,y:-l},r),bl:nn({x:-a,y:l},r),br:nn({x:a,y:l},r)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=[];return!t&&this.group&&(e=this.group.transformMatrixKey(t)),e.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,Oe(this.originX),Oe(this.originY)),e}calcTransformMatrix(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=this.calcOwnMatrix();if(t||!this.group)return e;let n=this.transformMatrixKey(t),i=this.matrixCache;return i&&i.key.every(((r,o)=>r===n[o]))?i.value:(this.group&&(e=Ce(this.group.calcTransformMatrix(!1),e)),this.matrixCache={key:n,value:e},e)}calcOwnMatrix(){let t=this.transformMatrixKey(!0),e=this.ownMatrixCache;if(e&&e.key===t)return e.value;let n=this.getRelativeCenterPoint(),i={angle:this.angle,translateX:n.x,translateY:n.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY},r=bg(i);return this.ownMatrixCache={key:t,value:r},r}_getNonTransformedDimensions(){return new J(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(t){return this._getTransformedDimensions(t).transform(this.getViewportTransform(),!0).scalarAdd(2*this.padding)}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=k({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth},t),n=e.strokeWidth,i=n,r=0;this.strokeUniform&&(i=0,r=n);let o=e.width+i,a=e.height+i,l;return l=e.skewX===0&&e.skewY===0?new J(o*e.scaleX,a*e.scaleY):gh(o,a,Da(e)),l.scalarAdd(r)}translateToGivenOrigin(t,e,n,i,r){let o=t.x,a=t.y,l=Oe(i)-Oe(e),c=Oe(r)-Oe(n);if(l||c){let h=this._getTransformedDimensions();o+=l*h.x,a+=c*h.y}return new J(o,a)}translateToCenterPoint(t,e,n){if(e===Wt&&n===Wt)return t;let i=this.translateToGivenOrigin(t,e,n,Wt,Wt);return this.angle?i.rotate(Te(this.angle),t):i}translateToOriginPoint(t,e,n){let i=this.translateToGivenOrigin(t,Wt,Wt,e,n);return this.angle?i.rotate(Te(this.angle),t):i}getCenterPoint(){let t=this.getRelativeCenterPoint();return this.group?nn(t,this.group.calcTransformMatrix()):t}getRelativeCenterPoint(){return this.translateToCenterPoint(new J(this.left,this.top),this.originX,this.originY)}getPointByOrigin(t,e){return this.translateToOriginPoint(this.getRelativeCenterPoint(),t,e)}setPositionByOrigin(t,e,n){let i=this.translateToCenterPoint(t,e,n),r=this.translateToOriginPoint(i,this.originX,this.originY);this.set({left:r.x,top:r.y})}_getLeftTopCoords(){return this.translateToOriginPoint(this.getRelativeCenterPoint(),he,gn)}},Qb=["type"],tM=["extraParam"],Bi=class Nc extends Md{static getDefaults(){return Nc.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){Ss("warn","Setting type has no effect",t)}constructor(t){super(),V(this,"_cacheContext",null),Object.assign(this,Nc.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=Mi(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,i=ie.maxCacheSideLimit,r=ie.minCacheSideLimit;if(e<=i&&n<=i&&e*n<=ie.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let o=e/n,[a,l]=va.limitDimsByArea(o),c=xr(r,a,i),h=xr(r,l,i);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,i=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(i+2),zoomX:t.x,zoomY:t.y,x:n,y:i}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:i,zoomX:r,zoomY:o,x:a,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||i!==t.height,h=this.zoomX!==r||this.zoomY!==o;if(!t||!e)return!1;if(c||h){n!==t.width||i!==t.height?(t.width=n,t.height=i):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let u=a/2,d=l/2;return this.cacheTranslationX=Math.round(t.width/2-u)+u,this.cacheTranslationY=Math.round(t.height/2-d)+d,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,o),this.zoomX=r,this.zoomY=o,!0}return!1}setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new J(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=po(this.calcTransformMatrix());return new J(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!==un&&t!==Rn||(e=this._constrainScale(e)),t===un&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof pr||(e=new pr(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r}=this,{width:o,height:a}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r,width:o,height:a,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst===xn&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let i=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=i,this.stroke=r}createClipPathLayer(t,e){let n=Pn(e),i=n.getContext("2d");if(i.translate(e.cacheTranslationX,e.cacheTranslationY),i.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach((r=>{r.transform(i)})),e.parentClipPaths.push(t),t.absolutePositioned){let r=An(this.calcTransformMatrix());i.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(i),t.drawObject(i,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let i=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,i)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,zn(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,e){let{fill:n}=e;n&&(zn(n)?(t.fillStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.fillStyle=n)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,i=this.getCanvasRetinaScaling(),[r,,,o]=n?.viewportTransform||hn,a=r*i,l=o*i,c=e.nonScaling?new J(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*ie.browserShadowBlurConstant*(a+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*a*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!zn(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,i=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,i,r):t.transform(1,0,0,1,i,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:i,offsetY:r}}_renderPaintInOrder(t){this.paintFirst===xn?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),o=i.x/this.scaleX/r,a=i.y/this.scaleY/r,l=Pn({width:Math.ceil(o),height:Math.ceil(a)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,a),c.lineTo(0,a),c.closePath(),c.translate(o/2,a/2),c.scale(i.zoomX/this.scaleX/r,i.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/i.zoomX,r*this.scaleY/i.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))!==null&&n!==void 0?n:"")}_findCenterFromElement(){return new J(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(Mt.getClass("image"))(e)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=$d(this),n=this.group,i=this.shadow,r=Math.abs,o=t.enableRetinaScaling?ug():1,a=(t.multiplier||1)*o,l=t.canvasProvider||(y=>new gr(y,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&Ag(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&_d(this,this.getViewportTransform()),this.setCoords();let c=Mi(),h=this.getBoundingRect(),u=this.shadow,d=new J;if(u){let y=u.blur,R=u.nonScaling?new J(1,1):this.getObjectScaling();d.x=2*Math.round(r(u.offsetX)+y)*r(R.x),d.y=2*Math.round(r(u.offsetY)+y)*r(R.y)}let f=h.width+d.x,p=h.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let x=l(c);t.format==="jpeg"&&(x.backgroundColor="#fff"),this.setPositionByOrigin(new J(x.width/2,x.height/2),Wt,Wt);let m=this.canvas;x._objects=[this],this.set("canvas",x),this.setCoords();let g=x.toCanvasElement(a||1,t);return this.set("canvas",m),this.shadow=i,n&&(this.group=n),this.set(e),this.setCoords(),x._objects=[],x.destroy(),g}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yd(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qd(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.includes(this.constructor.type)||e.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:i}=this;if(e){let{x:r,y:o}=this.getRelativeCenterPoint();this.originX=Wt,this.originY=Wt,this.left=r,this.top=o}if(this.set("angle",t),e){let{x:r,y:o}=this.translateToOriginPoint(this.getRelativeCenterPoint(),n,i);this.left=r,this.top=o,this.originX=n,this.originY=i}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){Vc.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&bi().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce(((n,i)=>{let[r,o]=i;return n[r]=this._animate(r,o,e),n}),{})}_animate(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.split("."),r=this.constructor.colorProperties.includes(i[i.length-1]),{abort:o,startValue:a,onChange:l,onComplete:c}=n,h=k(k({},n),{},{target:this,startValue:a??i.reduce(((u,d)=>u[d]),this),endValue:e,abort:o?.bind(this),onChange:(u,d,f)=>{i.reduce(((p,x,m)=>(m===i.length-1&&(p[x]=u),p[x])),this),l&&l(u,d,f)},onComplete:(u,d,f)=>{this.setCoords(),c&&c(u,d,f)}});return r?Gg(h):sf(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let i,r=0;r<e.length;r++){if(i=e[r],i===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let o=0;o<n.length;o++){if(this===n[o])return{fork:[],otherFork:[t,...n.slice(0,o)],common:[this,...e]};if(i===n[o])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,o)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let i=e.fork.pop(),r=e.otherFork.pop(),o=n._objects.indexOf(i),a=n._objects.indexOf(r);return o>-1&&o>a}toObject(){let t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).concat(Nc.customProperties,this.constructor.customProperties||[]),e,n=ie.NUM_FRACTION_DIGITS,{clipPath:i,fill:r,stroke:o,shadow:a,strokeDashArray:l,left:c,top:h,originX:u,originY:d,width:f,height:p,strokeWidth:x,strokeLineCap:m,strokeDashOffset:g,strokeLineJoin:y,strokeUniform:R,strokeMiterLimit:T,scaleX:E,scaleY:A,angle:_,flipX:v,flipY:C,opacity:S,visible:w,backgroundColor:P,fillRule:F,paintFirst:O,globalCompositeOperation:G,skewX:L,skewY:I}=this;i&&!i.excludeFromExport&&(e=i.toObject(t.concat("inverted","absolutePositioned")));let z=Y=>pe(Y,n),H=k(k({},Sr(this,t)),{},{type:this.constructor.type,version:fd,originX:u,originY:d,left:z(c),top:z(h),width:z(f),height:z(p),fill:Im(r)?r.toObject():r,stroke:Im(o)?o.toObject():o,strokeWidth:z(x),strokeDashArray:l&&l.concat(),strokeLineCap:m,strokeDashOffset:g,strokeLineJoin:y,strokeUniform:R,strokeMiterLimit:z(T),scaleX:z(E),scaleY:z(A),angle:z(_),flipX:v,flipY:C,opacity:z(S),shadow:a&&a.toObject(),visible:w,backgroundColor:P,fillRule:F,paintFirst:O,globalCompositeOperation:G,skewX:z(L),skewY:z(I)},e?{clipPath:e}:null);return this.includeDefaultValues?H:this._removeDefaultValues(H)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return Kd(t,((i,r)=>{if(r===he||r===gn||r==="type")return!0;let o=n[r];return i!==o&&!(Array.isArray(i)&&Array.isArray(o)&&i.length===0&&o.length===0)}))}toString(){return"#<".concat(this.constructor.type,">")}static _fromObject(t){let e=ve(t,Qb),n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{extraParam:i}=n,r=ve(n,tM);return Ia(e,r).then((o=>i?(delete o[i],new this(e[i],o)):new this(o)))}static fromObject(t,e){return this._fromObject(t,e)}};V(Bi,"stateProperties",Xb),V(Bi,"cacheProperties",Wi),V(Bi,"ownDefaults",jb),V(Bi,"type","FabricObject"),V(Bi,"colorProperties",[Ne,xn,"backgroundColor"]),V(Bi,"customProperties",[]),Mt.setClass(Bi),Mt.setClass(Bi,"object");var ws=(s,t,e)=>(n,i,r,o)=>{let a=t(n,i,r,o);return a&&Qd(s,k(k({},tf(n,i,r,o)),e)),a};function br(s){return(t,e,n,i)=>{let{target:r,originX:o,originY:a}=e,l=r.getRelativeCenterPoint(),c=r.translateToOriginPoint(l,o,a),h=s(t,e,n,i);return r.setPositionByOrigin(c,e.originX,e.originY),h}}var wd=ws(Ta,br(((s,t,e,n)=>{let i=_h(t,t.originX,t.originY,e,n);if(Oe(t.originX)===Oe(Wt)||Oe(t.originX)===Oe(Pe)&&i.x<0||Oe(t.originX)===Oe(he)&&i.x>0){let{target:r}=t,o=r.strokeWidth/(r.strokeUniform?r.scaleX:1),a=Pg(t)?2:1,l=r.width,c=Math.abs(i.x*a/r.scaleX)-o;return r.set("width",Math.max(c,1)),l!==r.width}return!1})));function Hg(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?xn:Ne,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h,u=t,d=e;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",r>o?(h=r,s.scale(1,o/r),d=e*r/o):o>r?(h=o,s.scale(r/o,1),u=t*o/r):h=r,s.beginPath(),s.arc(u,d,h/2,0,Hi,!1),s[l](),c&&s.stroke(),s.restore()}function Wg(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?xn:Ne,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h=r/2,u=o/2;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",s.translate(t,e);let d=i.getTotalAngle();s.rotate(Te(d)),s["".concat(l,"Rect")](-h,-u,r,o),c&&s.strokeRect(-h,-u,r,o),s.restore()}var an=class{constructor(t){V(this,"visible",!0),V(this,"actionName",fh),V(this,"angle",0),V(this,"x",0),V(this,"y",0),V(this,"offsetX",0),V(this,"offsetY",0),V(this,"sizeX",0),V(this,"sizeY",0),V(this,"touchSizeX",0),V(this,"touchSizeY",0),V(this,"cursorStyle","crosshair"),V(this,"withConnection",!1),Object.assign(this,t)}shouldActivate(t,e,n,i){var r;let{tl:o,tr:a,br:l,bl:c}=i;return((r=e.canvas)===null||r===void 0?void 0:r.getActiveObject())===e&&e.isControlVisible(t)&&mr.isPointInPolygon(n,[o,a,l,c])}getActionHandler(t,e,n){return this.actionHandler}getMouseDownHandler(t,e,n){return this.mouseDownHandler}getMouseUpHandler(t,e,n){return this.mouseUpHandler}cursorStyleHandler(t,e,n){return e.cursorStyle}getActionName(t,e,n){return e.actionName}getVisibility(t,e){var n,i;return(n=(i=t._controlsVisibility)===null||i===void 0?void 0:i[e])!==null&&n!==void 0?n:this.visible}setVisibility(t,e,n){this.visible=t}positionHandler(t,e,n,i){return new J(this.x*t.x+this.offsetX,this.y*t.y+this.offsetY).transform(e)}calcCornerCoords(t,e,n,i,r,o){let a=ph([Mo(n,i),yr({angle:t}),mh((r?this.touchSizeX:this.sizeX)||e,(r?this.touchSizeY:this.sizeY)||e)]);return{tl:new J(-.5,-.5).transform(a),tr:new J(.5,-.5).transform(a),br:new J(.5,.5).transform(a),bl:new J(-.5,.5).transform(a)}}render(t,e,n,i,r){((i=i||{}).cornerStyle||r.cornerStyle)==="circle"?Hg.call(this,t,e,n,i,r):Wg.call(this,t,e,n,i,r)}},Xg=(s,t,e)=>e.lockRotation?Xc:t.cursorStyle,jg=ws(fg,br(((s,t,e,n)=>{let{target:i,ex:r,ey:o,theta:a,originX:l,originY:c}=t,h=i.translateToOriginPoint(i.getRelativeCenterPoint(),l,c);if(ii(i,"lockRotation"))return!1;let u=Math.atan2(o-h.y,r-h.x),d=Math.atan2(n-h.y,e-h.x),f=wi(d-u+a);if(i.snapAngle&&i.snapAngle>0){let x=i.snapAngle,m=i.snapThreshold||x,g=Math.ceil(f/x)*x,y=Math.floor(f/x)*x;Math.abs(f-y)<m?f=y:Math.abs(f-g)<m&&(f=g)}f<0&&(f=360+f),f%=360;let p=i.angle!==f;return i.angle=f,p})));function Yg(s,t){let e=t.canvas,n=s[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function qg(s,t,e){let n=ii(s,"lockScalingX"),i=ii(s,"lockScalingY");if(n&&i||!t&&(n||i)&&e||n&&t==="x"||i&&t==="y")return!0;let{width:r,height:o,strokeWidth:a}=s;return r===0&&a===0&&t!=="y"||o===0&&a===0&&t!=="x"}var eM=["e","se","s","sw","w","nw","n","ne","e"],ro=(s,t,e)=>{let n=Yg(s,e);if(qg(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",n))return Xc;let i=Dg(e,t);return"".concat(eM[i],"-resize")};function rf(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},r=t.target,o=i.by,a=Yg(s,r),l,c,h,u,d,f;if(qg(r,o,a))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=_h(t,t.originX,t.originY,e,n),d=o!=="y"?Math.sign(l.x||t.signX||1):1,f=o!=="x"?Math.sign(l.y||t.signY||1):1,t.signX||(t.signX=d),t.signY||(t.signY=f),ii(r,"lockScalingFlip")&&(t.signX!==d||t.signY!==f))return!1;if(u=r._getTransformedDimensions(),a&&!o){let m=Math.abs(l.x)+Math.abs(l.y),{original:g}=t,y=m/(Math.abs(u.x*g.scaleX/r.scaleX)+Math.abs(u.y*g.scaleY/r.scaleY));c=g.scaleX*y,h=g.scaleY*y}else c=Math.abs(l.x*r.scaleX/u.x),h=Math.abs(l.y*r.scaleY/u.y);Pg(t)&&(c*=2,h*=2),t.signX!==d&&o!=="y"&&(t.originX=Nm(t.originX),c*=-1,t.signX=d),t.signY!==f&&o!=="x"&&(t.originY=Nm(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,x=r.scaleY;return o?(o==="x"&&r.set(un,c),o==="y"&&r.set(Rn,h)):(!ii(r,"lockScalingX")&&r.set(un,c),!ii(r,"lockScalingY")&&r.set(Rn,h)),p!==r.scaleX||x!==r.scaleY}var _a=ws(dh,br(((s,t,e,n)=>rf(s,t,e,n)))),Zg=ws(dh,br(((s,t,e,n)=>rf(s,t,e,n,{by:"x"})))),Jg=ws(dh,br(((s,t,e,n)=>rf(s,t,e,n,{by:"y"})))),nM=["target","ex","ey","skewingSide"],od={x:{counterAxis:"y",scale:un,skew:So,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:Rn,skew:bo,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},iM=["ns","nesw","ew","nwse"],Kg=(s,t,e)=>{if(t.x!==0&&ii(e,"lockSkewingY")||t.y!==0&&ii(e,"lockSkewingX"))return Xc;let n=Dg(e,t)%4;return"".concat(iM[n],"-resize")};function $g(s,t,e,n,i){let{target:r}=e,{counterAxis:o,origin:a,lockSkewing:l,skew:c,flip:h}=od[s];if(ii(r,l))return!1;let{origin:u,flip:d}=od[o],f=Oe(e[u])*(r[d]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),x=.5*-((r[c]===0&&_h(e,Wt,Wt,n,i)[s]>0||r[c]>0?1:-1)*p)+.5;return ws(pg,br(((g,y,R,T)=>(function(E,A,_){let{target:v,ex:C,ey:S,skewingSide:w}=A,P=ve(A,nM),{skew:F}=od[E],O=_.subtract(new J(C,S)).divide(new J(v.scaleX,v.scaleY))[E],G=v[F],L=P[F],I=Math.tan(Te(L)),z=E==="y"?v._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:v._getTransformedDimensions({scaleX:1,scaleY:1}).y,H=2*O*w/Math.max(z,1)+I,Y=wi(Math.atan(H));v.set(F,Y);let et=G!==v[F];if(et&&E==="y"){let{skewX:ft,scaleX:St}=v,K=v._getTransformedDimensions({skewY:G}),lt=v._getTransformedDimensions(),xt=ft!==0?K.x/lt.x:1;xt!==1&&v.set(un,xt*St)}return et})(s,y,new J(R,T)))))(t,k(k({},e),{},{[a]:x,skewingSide:p}),n,i)}var Qg=(s,t,e,n)=>$g("x",s,t,e,n),t0=(s,t,e,n)=>$g("y",s,t,e,n);function yh(s,t){return s[t.canvas.altActionKey]}var xa=(s,t,e)=>{let n=yh(s,e);return t.x===0?n?So:Rn:t.y===0?n?bo:un:""},Js=(s,t,e)=>yh(s,e)?Kg(0,t,e):ro(s,t,e),Td=(s,t,e,n)=>yh(s,t.target)?t0(s,t,e,n):Zg(s,t,e,n),Cd=(s,t,e,n)=>yh(s,t.target)?Qg(s,t,e,n):Jg(s,t,e,n),of=()=>({ml:new an({x:-.5,y:0,cursorStyleHandler:Js,actionHandler:Td,getActionName:xa}),mr:new an({x:.5,y:0,cursorStyleHandler:Js,actionHandler:Td,getActionName:xa}),mb:new an({x:0,y:.5,cursorStyleHandler:Js,actionHandler:Cd,getActionName:xa}),mt:new an({x:0,y:-.5,cursorStyleHandler:Js,actionHandler:Cd,getActionName:xa}),tl:new an({x:-.5,y:-.5,cursorStyleHandler:ro,actionHandler:_a}),tr:new an({x:.5,y:-.5,cursorStyleHandler:ro,actionHandler:_a}),bl:new an({x:-.5,y:.5,cursorStyleHandler:ro,actionHandler:_a}),br:new an({x:.5,y:.5,cursorStyleHandler:ro,actionHandler:_a}),mtr:new an({x:0,y:-.5,actionHandler:jg,cursorStyleHandler:Xg,offsetY:-40,withConnection:!0,actionName:Xd})}),e0=()=>({mr:new an({x:.5,y:0,actionHandler:wd,cursorStyleHandler:Js,actionName:Ta}),ml:new an({x:-.5,y:0,actionHandler:wd,cursorStyleHandler:Js,actionName:Ta})}),n0=()=>k(k({},of()),e0()),$c=class s extends Bi{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,this.constructor.createControls(),s.ownDefaults),this.setOptions(t)}static createControls(){return{controls:of()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,i=e.action;if(this===n&&i&&i.startsWith(fh))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let i=n.length-1;i>=0;i--){let[r,o]=n[i],a=this.controls[r];if(a.shouldActivate(r,this,t,e?o.touchCorner:o.corner))return this.__corner=r,{key:r,control:a,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=this.getCenterPoint(),n=Mo(e.x,e.y),i=yr({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}),r=Ce(n,i),o=Ce(t,r),a=Ce(o,[1/t[0],0,0,1/t[3],0,0]),l=this.group?po(this.calcTransformMatrix()):void 0;l&&(l.scaleX=Math.abs(l.scaleX),l.scaleY=Math.abs(l.scaleY));let c=this._calculateCurrentDimensions(l),h={};return this.forEachControl(((u,d)=>{let f=u.positionHandler(c,a,this,u);h[d]=Object.assign(f,this._calcCornerCoords(u,f))})),h}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),i=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/i[0],1/i[3]),t.rotate(Te(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=k({hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray},n);t.save(),t.strokeStyle=i.borderColor,this._setLineDash(t,i.borderDashArray),this.strokeBorders(t,e),i.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{hasBorders:n,hasControls:i}=this,r=k({hasBorders:n,hasControls:i},e),o=this.getViewportTransform(),a=r.hasBorders,l=r.hasControls,c=Ce(o,this.calcTransformMatrix()),h=po(c);t.save(),t.translate(h.translateX,h.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(h.angle-=180),t.rotate(Te(this.group?h.angle:this.angle)),a&&this.drawBorders(t,h,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let i;if(n&&n.forActiveSelection||this.group){let r=gh(this.width,this.height,Da(e)),o=this.isStrokeAccountedForInDimensions()?jd:(this.strokeUniform?new J().scalarAdd(this.canvas?this.canvas.getZoom():1):new J(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);i=r.add(o).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else i=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,i,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl(((i,r)=>{i.withConnection&&i.getVisibility(this,r)&&(n=!0,t.moveTo(i.x*e.x,i.y*e.y),t.lineTo(i.x*e.x+i.offsetX,i.y*e.y+i.offsetY))})),n&&t.stroke()}drawControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:i,cornerDashArray:r,cornerColor:o}=this,a=k({cornerStrokeColor:i,cornerDashArray:r,cornerColor:o},e);t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=a.cornerColor,this.transparentCorners||(t.strokeStyle=a.cornerStrokeColor),this._setLineDash(t,a.cornerDashArray),this.forEachControl(((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,a,this)}})),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.entries(t).forEach((e=>{let[n,i]=e;return this.setControlVisible(n,i)}))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let i=this.width+4,r=this.height+4;return e.clearRect(-i/2,-r/2,i,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function i0(s,t){return t.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{n!=="constructor"&&Object.defineProperty(s.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))}))})),s}V($c,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var Ge=class extends $c{};i0(Ge,[Yc]),Mt.setClass(Ge),Mt.setClass(Ge,"object");var s0=(s,t,e,n)=>{let i=2*(n=Math.round(n))+1,{data:r}=s.getImageData(t-n,e-n,i,i);for(let o=3;o<r.length;o+=4)if(r[o]>0)return!1;return!0},Qc=class{constructor(t){this.options=t,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new J(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new J(1/this.options.scaleX,1/this.options.scaleY):new J(1,1)}createSideVector(t,e){let n=Zc(t,e);return this.options.strokeUniform?n.multiply(this.scale):n}projectOrthogonally(t,e,n){return this.applySkew(t.add(this.calcOrthogonalProjection(t,e,n)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(t){let e=new J(t);return e.y+=e.x*Math.tan(Te(this.options.skewY)),e.x+=e.y*Math.tan(Te(this.options.skewX)),e}scaleUnitVector(t,e){return t.multiply(this.strokeUniformScalar).scalarMultiply(e)}},sM=new J,th=class s extends Qc{static getOrthogonalRotationFactor(t,e){let n=e?Kc(t,e):kg(t);return Math.abs(n)<bs?-1:1}constructor(t,e,n,i){super(i),V(this,"AB",void 0),V(this,"AC",void 0),V(this,"alpha",void 0),V(this,"bisector",void 0),this.A=new J(t),this.B=new J(e),this.C=new J(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=Kc(this.AB,this.AC),this.bisector=vh(ef(this.AB.eq(sM)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e),r=nf(i),o=s.getOrthogonalRotationFactor(r,this.bisector);return this.scaleUnitVector(r,n*o)}projectBevel(){let t=[];return(this.alpha%Hi==0?[this.B]:[this.B,this.C]).forEach((e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))})),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),i=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?Jc(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return Jc(i)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(i))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],i=new J(s.getOrthogonalRotationFactor(this.bisector),s.getOrthogonalRotationFactor(new J(this.bisector.y,this.bisector.x)));return[new J(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),new J(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)].forEach((r=>{xd(r,t,e)&&n.push(this.A.add(r))})),n}projectRoundWithSkew(t,e){let n=[],{skewX:i,skewY:r,scaleX:o,scaleY:a,strokeUniform:l}=this.options,c=new J(Math.tan(Te(i)),Math.tan(Te(r))),h=this.strokeProjectionMagnitude,u=l?h/a/Math.sqrt(1/a**2+1/o**2*c.y**2):h/Math.sqrt(1+c.y**2),d=new J(Math.sqrt(Math.max(h**2-u**2,0)),u),f=l?h/Math.sqrt(1+c.x**2*(1/a)**2/(1/o+1/o*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new J(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map((x=>this.applySkew(l?x.multiply(this.strokeUniformScalar):x))).forEach((x=>{xd(x,t,e)&&n.push(this.applySkew(this.A).add(x))})),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%Hi==0,n=this.applySkew(this.A),i=t[e?0:2].subtract(n),r=t[e?1:0].subtract(n),o=e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)),a=uo(i,o)>0,l=a?i:r,c=a?r:i;return this.isSkewed()?t.push(...this.projectRoundWithSkew(l,c)):t.push(...this.projectRoundNoSkew(l,c)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector})))}},eh=class extends Qc{constructor(t,e,n){super(n),this.A=new J(t),this.T=new J(e)}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e);return this.scaleUnitVector(nf(i),n)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let t=[];if(!this.isSkewed()&&this.A.eq(this.T)){let e=new J(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.applySkew(this.A.add(e)),this.applySkew(this.A.subtract(e)))}else t.push(...new th(this.A,this.T,this.T,this.options).projectRound());return t}projectSquare(){let t=[];if(this.A.eq(this.T)){let e=new J(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.A.add(e),this.A.subtract(e))}else{let e=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),n=this.scaleUnitVector(vh(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),i=this.A.add(n);t.push(i.add(e),i.subtract(e))}return t.map((e=>this.applySkew(e)))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t})))}},r0=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=[];if(s.length===0)return n;let i=s.reduce(((r,o)=>(r[r.length-1].eq(o)||r.push(new J(o)),r)),[new J(s[0])]);if(i.length===1)e=!0;else if(!e){let r=i[0],o=((a,l)=>{for(let c=a.length-1;c>=0;c--)if(l(a[c],c,a))return c;return-1})(i,(a=>!a.eq(r)));i.splice(o+1)}return i.forEach(((r,o,a)=>{let l,c;o===0?(c=a[1],l=e?r:a[a.length-1]):o===a.length-1?(l=a[o-1],c=e?r:a[0]):(l=a[o-1],c=a[o+1]),e&&a.length===1?n.push(...new eh(r,r,t).project()):!e||o!==0&&o!==a.length-1?n.push(...new th(r,l,c,t).project()):n.push(...new eh(r,o===0?c:l,t).project())})),n},af=s=>{let t={};return Object.keys(s).forEach((e=>{t[e]={},Object.keys(s[e]).forEach((n=>{t[e][n]=k({},s[e][n])}))})),t},o0=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),ma,Sh=s=>{if(ma||ma||(ma="Intl"in Pa()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),ma){let t=ma.segment(s);return Array.from(t).map((e=>{let{segment:n}=e;return n}))}return rM(s)},rM=s=>{let t=[];for(let e,n=0;n<s.length;n++)(e=oM(s,n))!==!1&&t.push(e);return t},oM=(s,t)=>{let e=s.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return s.charAt(t);if(55296<=e&&e<=56319){if(s.length<=t+1)throw"High surrogate without following low surrogate";let i=s.charCodeAt(t+1);if(56320>i||i>57343)throw"High surrogate without following low surrogate";return s.charAt(t)+s.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=s.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},aM=Object.freeze({__proto__:null,capitalize:function(s){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return"".concat(s.charAt(0).toUpperCase()).concat(t?s.slice(1):s.slice(1).toLowerCase())},escapeXml:o0,graphemeSplit:Sh}),bh=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.fill!==t.fill||s.stroke!==t.stroke||s.strokeWidth!==t.strokeWidth||s.fontSize!==t.fontSize||s.fontFamily!==t.fontFamily||s.fontWeight!==t.fontWeight||s.fontStyle!==t.fontStyle||s.textDecorationThickness!==t.textDecorationThickness||s.textBackgroundColor!==t.textBackgroundColor||s.deltaY!==t.deltaY||e&&(s.overline!==t.overline||s.underline!==t.underline||s.linethrough!==t.linethrough)},a0=(s,t)=>{let e=t.split(`
`),n=[],i=-1,r={};s=af(s);for(let o=0;o<e.length;o++){let a=Sh(e[o]);if(s[o])for(let l=0;l<a.length;l++){i++;let c=s[o][l];c&&Object.keys(c).length>0&&(bh(r,c,!0)?n.push({start:i,end:i+1,style:c}):n[n.length-1].end++),r=c||{}}else i+=a.length,r={}}return n},l0=(s,t)=>{if(!Array.isArray(s))return af(s);let e=t.split(Wd),n={},i=-1,r=0;for(let o=0;o<e.length;o++){let a=Sh(e[o]);for(let l=0;l<a.length;l++)i++,s[r]&&s[r].start<=i&&i<s[r].end&&(n[o]=n[o]||{},n[o][l]=k({},s[r].style),i===s[r].end-1&&r++)}return n},Ts=["display","transform",Ne,"fill-opacity","fill-rule","opacity",xn,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function Zm(s,t){let e=s.nodeName,n=s.getAttribute("class"),i=s.getAttribute("id"),r="(?![a-zA-Z\\-]+)",o;if(o=new RegExp("^"+e,"i"),t=t.replace(o,""),i&&t.length&&(o=new RegExp("#"+i+r,"i"),t=t.replace(o,"")),n&&t.length){let a=n.split(" ");for(let l=a.length;l--;)o=new RegExp("\\."+a[l]+r,"i"),t=t.replace(o,"")}return t.length===0}function lM(s,t){let e=!0,n=Zm(s,t.pop());return n&&t.length&&(e=(function(i,r){let o,a=!0;for(;i.parentElement&&i.parentElement.nodeType===1&&r.length;)a&&(o=r.pop()),a=Zm(i=i.parentElement,o);return r.length===0})(s,t)),n&&e&&t.length===0}var cM=s=>{var t;return(t=Hb[s])!==null&&t!==void 0?t:s},hM=new RegExp("(".concat(ni,")"),"gi"),uM=s=>jc(s.replace(hM," $1 ").replace(/,/gi," ")),Jm,Km,$m,Qm,tg,eg,ng,cn="(".concat(ni,")"),dM=String.raw(Jm||(Jm=Ti(["(skewX)(",")"],["(skewX)\\(","\\)"])),cn),fM=String.raw(Km||(Km=Ti(["(skewY)(",")"],["(skewY)\\(","\\)"])),cn),pM=String.raw($m||($m=Ti(["(rotate)(","(?: "," ",")?)"],["(rotate)\\(","(?: "," ",")?\\)"])),cn,cn,cn),mM=String.raw(Qm||(Qm=Ti(["(scale)(","(?: ",")?)"],["(scale)\\(","(?: ",")?\\)"])),cn,cn),gM=String.raw(tg||(tg=Ti(["(translate)(","(?: ",")?)"],["(translate)\\(","(?: ",")?\\)"])),cn,cn),_M=String.raw(eg||(eg=Ti(["(matrix)("," "," "," "," "," ",")"],["(matrix)\\("," "," "," "," "," ","\\)"])),cn,cn,cn,cn,cn,cn),lf="(?:".concat(_M,"|").concat(gM,"|").concat(pM,"|").concat(mM,"|").concat(dM,"|").concat(fM,")"),xM="(?:".concat(lf,"*)"),vM=String.raw(ng||(ng=Ti(["^s*(?:","?)s*$"],["^\\s*(?:","?)\\s*$"])),xM),yM=new RegExp(vM),SM=new RegExp(lf),bM=new RegExp(lf,"g");function Ed(s){let t=[];if(!(s=uM(s).replace(/\s*([()])\s*/gi,"$1"))||s&&!yM.test(s))return[...hn];for(let e of s.matchAll(bM)){let n=SM.exec(e[0]);if(!n)continue;let i=hn,r=n.filter((p=>!!p)),[,o,...a]=r,[l,c,h,u,d,f]=a.map((p=>parseFloat(p)));switch(o){case"translate":i=Mo(l,c);break;case Xd:i=yr({angle:l},{x:c,y:h});break;case fh:i=mh(l,c);break;case So:i=Zd(l);break;case bo:i=Jd(l);break;case"matrix":i=[l,c,h,u,d,f]}t.push(i)}return ph(t)}function MM(s,t,e,n){let i=Array.isArray(t),r,o=t;if(s!==Ne&&s!==xn||t!==_n){if(s==="strokeUniform")return t==="non-scaling-stroke";if(s==="strokeDashArray")o=t===_n?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(s==="transformMatrix")o=e&&e.transformMatrix?Ce(e.transformMatrix,Ed(t)):Ed(t);else if(s==="visible")o=t!==_n&&t!=="hidden",e&&e.visible===!1&&(o=!1);else if(s==="opacity")o=parseFloat(t),e&&e.opacity!==void 0&&(o*=e.opacity);else if(s==="textAnchor")o=t==="start"?he:t==="end"?Pe:Wt;else if(s==="charSpacing"||s===_r)r=fr(t,n)/n*1e3;else if(s==="paintFirst"){let a=t.indexOf(Ne),l=t.indexOf(xn);o=Ne,(a>-1&&l>-1&&l<a||a===-1&&l>-1)&&(o=xn)}else{if(s==="href"||s==="xlink:href"||s==="font"||s==="id")return t;if(s==="imageSmoothing")return t==="optimizeQuality";r=i?t.map(fr):fr(t,n)}}else o="";return!i&&isNaN(r)?o:r}function wM(s,t){let e=s.match(Gb);if(!e)return;let n=e[1],i=e[3],r=e[4],o=e[5],a=e[6];n&&(t.fontStyle=n),i&&(t.fontWeight=isNaN(parseFloat(i))?i:parseFloat(i)),r&&(t.fontSize=fr(r)),a&&(t.fontFamily=a),o&&(t.lineHeight=o==="normal"?1:o)}function TM(s,t){s.replace(/;\s*$/,"").split(";").forEach((e=>{if(!e)return;let[n,i]=e.split(":");t[n.trim().toLowerCase()]=i.trim()}))}function CM(s){let t={},e=s.getAttribute("style");return e&&(typeof e=="string"?TM(e,t):(function(n,i){Object.entries(n).forEach((r=>{let[o,a]=r;a!==void 0&&(i[o.toLowerCase()]=a)}))})(e,t)),t}var EM={stroke:"strokeOpacity",fill:"fillOpacity"};function Xi(s,t,e){if(!s)return{};let n,i={},r=Hd;s.parentNode&&Wm.test(s.parentNode.nodeName)&&(i=Xi(s.parentElement,t,e),i.fontSize&&(n=r=fr(i.fontSize)));let o=k(k(k({},t.reduce(((c,h)=>{let u=s.getAttribute(h);return u&&(c[h]=u),c}),{})),(function(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u={};for(let d in h)lM(c,d.split(" "))&&(u=k(k({},u),h[d]));return u})(s,e)),CM(s));o[id]&&s.setAttribute(id,o[id]),o[nd]&&(n=fr(o[nd],r),o[nd]="".concat(n));let a={};for(let c in o){let h=cM(c),u=MM(h,o[c],i,n);a[h]=u}a&&a.font&&wM(a.font,a);let l=k(k({},i),a);return Wm.test(s.nodeName)?l:(function(c){let h=Ge.getDefaults();return Object.entries(EM).forEach((u=>{let[d,f]=u;if(c[f]===void 0||c[d]==="")return;if(c[d]===void 0){if(!h[d])return;c[d]=h[d]}if(c[d].indexOf("url(")===0)return;let p=new dn(c[d]);c[d]=p.setAlpha(pe(p.getAlpha()*c[f],2)).toRgba()})),c})(l)}var AM=["left","top","width","height","visible"],c0=["rx","ry"],kn=class s extends Ge{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,i=-e/2,r=-n/2,o=this.rx?Math.min(this.rx,e/2):0,a=this.ry?Math.min(this.ry,n/2):0,l=o!==0||a!==0;t.beginPath(),t.moveTo(i+o,r),t.lineTo(i+e-o,r),l&&t.bezierCurveTo(i+e-ms*o,r,i+e,r+ms*a,i+e,r+a),t.lineTo(i+e,r+n-a),l&&t.bezierCurveTo(i+e,r+n-ms*a,i+e-ms*o,r+n,i+e-o,r+n),t.lineTo(i+o,r+n),l&&t.bezierCurveTo(i+ms*o,r+n,i,r+n-ms*a,i,r+n-a),t.lineTo(i,r+a),l&&t.bezierCurveTo(i,r+ms*a,i+ms*o,r,i+o,r),t.closePath(),this._renderPaintInOrder(t)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...c0,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:i}=this;return["<rect ","COMMON_PARTS",'x="'.concat(-t/2,'" y="').concat(-e/2,'" rx="').concat(n,'" ry="').concat(i,'" width="').concat(t,'" height="').concat(e,`" />
`)]}static async fromElement(t,e,n){let i=Xi(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,width:a=0,height:l=0,visible:c=!0}=i,h=ve(i,AM);return new this(k(k(k({},e),h),{},{left:r,top:o,width:a,height:l,visible:!!(c&&a&&l)}))}};V(kn,"type","Rect"),V(kn,"cacheProperties",[...Wi,...c0]),V(kn,"ownDefaults",{rx:0,ry:0}),V(kn,"ATTRIBUTE_NAMES",[...Ts,"x","y","rx","ry","width","height"]),Mt.setClass(kn),Mt.setSVGClass(kn);var zi="initialization",nh="added",cf="removed",ih="imperative",h0=(s,t)=>{let{strokeUniform:e,strokeWidth:n,width:i,height:r,group:o}=t,a=o&&o!==s?Oa(o.calcTransformMatrix(),s.calcTransformMatrix()):null,l=a?t.getRelativeCenterPoint().transform(a):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?Rg(new J(n,n),void 0,s.calcTransformMatrix()):jd,u=!e&&c?n:0,d=gh(i+u,r+u,ph([a,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(d),l.add(d)]},xo=class{calcLayoutResult(t,e){if(this.shouldPerformLayout(t))return this.calcBoundingBox(e,t)}shouldPerformLayout(t){let{type:e,prevStrategy:n,strategy:i}=t;return e===zi||e===ih||!!n&&i!==n}shouldLayoutClipPath(t){let{type:e,target:{clipPath:n}}=t;return e!==zi&&n&&!n.absolutePositioned}getInitialSize(t,e){return e.size}calcBoundingBox(t,e){let{type:n,target:i}=e;if(n===ih&&e.overrides)return e.overrides;if(t.length===0)return;let{left:r,top:o,width:a,height:l}=Si(t.map((u=>h0(i,u))).reduce(((u,d)=>u.concat(d)),[])),c=new J(a,l),h=new J(r,o).add(c.scalarDivide(2));if(n===zi){let u=this.getInitialSize(e,{size:c,center:h});return{center:h,relativeCorrection:new J(0,0),size:u}}return{center:h.transform(i.calcOwnMatrix()),size:c}}};V(xo,"type","strategy");var Aa=class extends xo{shouldPerformLayout(t){return!0}};V(Aa,"type","fit-content"),Mt.setClass(Aa);var RM=["strategy"],PM=["target","strategy","bubbles","prevStrategy"],u0="layoutManager",vr=class{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Aa;V(this,"strategy",void 0),this.strategy=t,this._subscriptions=new Map}performLayout(t){let e=k(k({bubbles:!0,strategy:this.strategy},t),{},{prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}});this.onBeforeLayout(e);let n=this.getLayoutResult(e);n&&this.commitLayout(e,n),this.onAfterLayout(e,n),this._prevLayoutStrategy=e.strategy}attachHandlers(t,e){let{target:n}=e;return[zc,dg,Ta,fg,dh,pg,kc,mg,Ob].map((i=>t.on(i,(r=>this.performLayout(i===zc?{type:"object_modified",trigger:i,e:r,target:n}:{type:"object_modifying",trigger:i,e:r,target:n})))))}subscribe(t,e){this.unsubscribe(t,e);let n=this.attachHandlers(t,e);this._subscriptions.set(t,n)}unsubscribe(t,e){(this._subscriptions.get(t)||[]).forEach((n=>n())),this._subscriptions.delete(t)}unsubscribeTargets(t){t.targets.forEach((e=>this.unsubscribe(e,t)))}subscribeTargets(t){t.targets.forEach((e=>this.subscribe(e,t)))}onBeforeLayout(t){let{target:e,type:n}=t,{canvas:i}=e;if(n===zi||n===nh?this.subscribeTargets(t):n===cf&&this.unsubscribeTargets(t),e.fire("layout:before",{context:t}),i&&i.fire("object:layout:before",{target:e,context:t}),n===ih&&t.deep){let r=ve(t,RM);e.forEachObject((o=>o.layoutManager&&o.layoutManager.performLayout(k(k({},r),{},{bubbles:!1,target:o}))))}}getLayoutResult(t){let{target:e,strategy:n,type:i}=t,r=n.calcLayoutResult(t,e.getObjects());if(!r)return;let o=i===zi?new J:e.getRelativeCenterPoint(),{center:a,correction:l=new J,relativeCorrection:c=new J}=r,h=o.subtract(a).add(l).transform(i===zi?hn:An(e.calcOwnMatrix()),!0).add(c);return{result:r,prevCenter:o,nextCenter:a,offset:h}}commitLayout(t,e){let{target:n}=t,{result:{size:i},nextCenter:r}=e;var o,a;n.set({width:i.x,height:i.y}),this.layoutObjects(t,e),t.type===zi?n.set({left:(o=t.x)!==null&&o!==void 0?o:r.x+i.x*Oe(n.originX),top:(a=t.y)!==null&&a!==void 0?a:r.y+i.y*Oe(n.originY)}):(n.setPositionByOrigin(r,Wt,Wt),n.setCoords(),n.set("dirty",!0))}layoutObjects(t,e){let{target:n}=t;n.forEachObject((i=>{i.group===n&&this.layoutObject(t,e,i)})),t.strategy.shouldLayoutClipPath(t)&&this.layoutObject(t,e,n.clipPath)}layoutObject(t,e,n){let{offset:i}=e;n.set({left:n.left+i.x,top:n.top+i.y})}onAfterLayout(t,e){let{target:n,strategy:i,bubbles:r,prevStrategy:o}=t,a=ve(t,PM),{canvas:l}=n;n.fire("layout:after",{context:t,result:e}),l&&l.fire("object:layout:after",{context:t,result:e,target:n});let c=n.parent;r&&c!=null&&c.layoutManager&&((a.path||(a.path=[])).push(n),c.layoutManager.performLayout(k(k({},a),{},{target:c}))),n.set("dirty",!0)}dispose(){let{_subscriptions:t}=this;t.forEach((e=>e.forEach((n=>n())))),t.clear()}toObject(){return{type:u0,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};Mt.setClass(vr,u0);var DM=["type","objects","layoutManager"],Ad=class extends vr{performLayout(){}},ys=class s extends gg(Ge){static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),V(this,"_activeObjects",[]),V(this,"__objectSelectionTracker",void 0),V(this,"__objectSelectionDisposer",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject((i=>{this.enterGroup(i,!1)})),this.layoutManager=(n=e.layoutManager)!==null&&n!==void 0?n:new vr,this.layoutManager.performLayout({type:zi,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?(Ss("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||(Ss("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter(((e,n,i)=>this.canEnterGroup(e)&&i.indexOf(e)===n))}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let i=this._filterObjectsBeforeEnteringGroup(e),r=super.add(...i);return this._onAfterObjectsChange(nh,i),r}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=this._filterObjectsBeforeEnteringGroup(n),o=super.insertAt(t,...r);return this._onAfterObjectsChange(nh,r),o}remove(){let t=super.remove(...arguments);return this._onAfterObjectsChange(cf,t),t}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach((i=>{i._set(t,e)})),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,e){let{target:n}=e,i=this._activeObjects;if(t)i.push(n),this._set("dirty",!0);else if(i.length>0){let r=i.indexOf(n);r>-1&&(i.splice(r,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&_o(t,Ce(An(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||(_o(t,Ce(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=Ge.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var i;let o=this._objects[r];(i=this.canvas)!==null&&i!==void 0&&i.preserveObjectStacking&&o.group!==this?(t.save(),t.transform(...An(this.calcTransformMatrix())),o.render(t),t.restore()):o.group===this&&o.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject((t=>t.setCoords()))}triggerLayout(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.layoutManager.performLayout(k({target:this,type:ih},t))}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter((function(i){return!i.excludeFromExport})).map((function(i){let r=i.includeDefaultValues;i.includeDefaultValues=n;let o=i[t||"toObject"](e);return i.includeDefaultValues=r,o}))}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.layoutManager.toObject();return k(k(k({},super.toObject(["subTargetCheck","interactive",...t])),e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{}),{},{objects:this.__serializeObjects("toObject",t)})}toString(){return"#<Group: (".concat(this.complexity(),")>")}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject((t=>{this._watchObject(!1,t),t.dispose()})),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=kn.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let i=e.join("");return t?t(i):i}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let i=0;i<this._objects.length;i++)e.push("		",this._objects[i].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?"opacity: ".concat(this.opacity,";"):"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let i=0;i<this._objects.length;i++)e.push("	",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject(t,e){let{type:n,objects:i=[],layoutManager:r}=t,o=ve(t,DM);return Promise.all([mo(i,e),Ia(o,e)]).then((a=>{let[l,c]=a,h=new this(l,k(k(k({},o),c),{},{layoutManager:new Ad}));if(r){let u=Mt.getClass(r.type),d=Mt.getClass(r.strategy);h.layoutManager=new u(new d)}else h.layoutManager=new vr;return h.layoutManager.subscribeTargets({type:zi,target:h,targets:h.getObjects()}),h.setCoords(),h}))}};V(ys,"type","Group"),V(ys,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),Mt.setClass(ys);var d0=(s,t)=>Math.min(t.width/s.width,t.height/s.height),f0=(s,t)=>Math.max(t.width/s.width,t.height/s.height),Rd="\\s*,?\\s*",ga="".concat(Rd,"(").concat(ni,")"),IM="".concat(ga).concat(ga).concat(ga).concat(Rd,"([01])").concat(Rd,"([01])").concat(ga).concat(ga),OM={m:"l",M:"L"},LM=(s,t,e,n,i,r,o,a,l,c,h)=>{let u=si(s),d=ri(s),f=si(t),p=ri(t),x=e*i*f-n*r*p+o,m=n*i*f+e*r*p+a;return["C",c+l*(-e*i*d-n*r*u),h+l*(-n*i*d+e*r*u),x+l*(e*i*p+n*r*f),m+l*(n*i*p-e*r*f),x,m]},ig=(s,t,e,n)=>{let i=Math.atan2(t,s),r=Math.atan2(n,e);return r>=i?r-i:2*Math.PI-(i-r)};function Pd(s,t,e,n,i,r,o,a){let l;if(ie.cachesBoundsOfCurve&&(l=[...arguments].join(),va.boundsOfCurveCache[l]))return va.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,u=[],d=[[0,0],[0,0]],f=6*s-12*e+6*i,p=-3*s+9*e-9*i+3*o,x=3*e-3*s;for(let T=0;T<2;++T){if(T>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*a,x=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let C=-x/f;0<C&&C<1&&u.push(C);continue}let E=f*f-4*x*p;if(E<0)continue;let A=c(E),_=(-f+A)/(2*p);0<_&&_<1&&u.push(_);let v=(-f-A)/(2*p);0<v&&v<1&&u.push(v)}let m=u.length,g=m,y=m0(s,t,e,n,i,r,o,a);for(;m--;){let{x:T,y:E}=y(u[m]);d[0][m]=T,d[1][m]=E}d[0][g]=s,d[1][g]=t,d[0][g+1]=o,d[1][g+1]=a;let R=[new J(Math.min(...d[0]),Math.min(...d[1])),new J(Math.max(...d[0]),Math.max(...d[1]))];return ie.cachesBoundsOfCurve&&(va.boundsOfCurveCache[l]=R),R}var FM=(s,t,e)=>{let[n,i,r,o,a,l,c,h]=e,u=((d,f,p,x,m,g,y)=>{if(p===0||x===0)return[];let R=0,T=0,E=0,A=Math.PI,_=y*Gd,v=ri(_),C=si(_),S=.5*(-C*d-v*f),w=.5*(-C*f+v*d),P=p**2,F=x**2,O=w**2,G=S**2,L=P*F-P*O-F*G,I=Math.abs(p),z=Math.abs(x);if(L<0){let re=Math.sqrt(1-L/(P*F));I*=re,z*=re}else E=(m===g?-1:1)*Math.sqrt(L/(P*O+F*G));let H=E*I*w/z,Y=-E*z*S/I,et=C*H-v*Y+.5*d,ft=v*H+C*Y+.5*f,St=ig(1,0,(S-H)/I,(w-Y)/z),K=ig((S-H)/I,(w-Y)/z,(-S-H)/I,(-w-Y)/z);g===0&&K>0?K-=2*A:g===1&&K<0&&(K+=2*A);let lt=Math.ceil(Math.abs(K/A*2)),xt=[],Pt=K/lt,pt=8/3*Math.sin(Pt/4)*Math.sin(Pt/4)/Math.sin(Pt/2),Nt=St+Pt;for(let re=0;re<lt;re++)xt[re]=LM(St,Nt,C,v,I,z,et,ft,pt,R,T),R=xt[re][5],T=xt[re][6],St=Nt,Nt+=Pt;return xt})(c-s,h-t,i,r,a,l,o);for(let d=0,f=u.length;d<f;d++)u[d][1]+=s,u[d][2]+=t,u[d][3]+=s,u[d][4]+=t,u[d][5]+=s,u[d][6]+=t;return u},p0=s=>{let t=0,e=0,n=0,i=0,r=[],o,a=0,l=0;for(let c of s){let h=[...c],u;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],u=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],u=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],u=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],i=h[2],u=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":a=h[3],l=h[4],t=h[5],e=h[6],u=["C",h[1],h[2],a,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":o==="C"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[3],e=h[4],u=["C",a,l,h[1],h[2],t,e],a=u[3],l=u[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":a=h[1],l=h[2],t=h[3],e=h[4],u=["Q",a,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":o==="Q"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[1],e=h[2],u=["Q",a,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":FM(t,e,h).forEach((d=>r.push(d))),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=i,u=["Z"]}u?(r.push(u),o=u[0]):o=""}return r},sh=(s,t,e,n)=>Math.sqrt((e-s)**2+(n-t)**2),m0=(s,t,e,n,i,r,o,a)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),u=(f=>3*f*(1-f)**2)(l),d=(f=>(1-f)**3)(l);return new J(o*c+i*h+e*u+s*d,a*c+r*h+n*u+t*d)},g0=s=>s**2,_0=s=>2*s*(1-s),x0=s=>(1-s)**2,NM=(s,t,e,n,i,r,o,a)=>l=>{let c=g0(l),h=_0(l),u=x0(l),d=3*(u*(e-s)+h*(i-e)+c*(o-i)),f=3*(u*(n-t)+h*(r-n)+c*(a-r));return Math.atan2(f,d)},UM=(s,t,e,n,i,r)=>o=>{let a=g0(o),l=_0(o),c=x0(o);return new J(i*a+e*l+s*c,r*a+n*l+t*c)},BM=(s,t,e,n,i,r)=>o=>{let a=1-o,l=2*(a*(e-s)+o*(i-e)),c=2*(a*(n-t)+o*(r-n));return Math.atan2(c,l)},sg=(s,t,e)=>{let n=new J(t,e),i=0;for(let r=1;r<=100;r+=1){let o=s(r/100);i+=sh(n.x,n.y,o.x,o.y),n=o}return i},kM=(s,t)=>{let e,n=0,i=0,r={x:s.x,y:s.y},o=k({},r),a=.01,l=0,c=s.iterator,h=s.angleFinder;for(;i<t&&a>1e-4;)o=c(n),l=n,e=sh(r.x,r.y,o.x,o.y),e+i>t?(n-=a,a/=2):(r=o,n+=a,i+=e);return k(k({},o),{},{angle:h(l)})},hf=s=>{let t,e,n=0,i=0,r=0,o=0,a=0,l=[];for(let c of s){let h={x:i,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=o=i=c[1],e.y=a=r=c[2];break;case"L":e=h,e.length=sh(i,r,c[1],c[2]),i=c[1],r=c[2];break;case"C":t=m0(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=NM(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=sg(t,i,r),i=c[5],r=c[6];break;case"Q":t=UM(i,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=BM(i,r,c[1],c[2],c[3],c[4]),e.length=sg(t,i,r),i=c[3],r=c[4];break;case"Z":e=h,e.destX=o,e.destY=a,e.length=sh(i,r,o,a),i=o,r=a}n+=e.length,l.push(e)}return l.push({length:n,x:i,y:r}),l},v0=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:hf(s),n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let i=e[n],r=t/i.length,o=s[n];switch(i.command){case"M":return{x:i.x,y:i.y,angle:0};case"Z":return k(k({},new J(i.x,i.y).lerp(new J(i.destX,i.destY),r)),{},{angle:Math.atan2(i.destY-i.y,i.destX-i.x)});case"L":return k(k({},new J(i.x,i.y).lerp(new J(o[1],o[2]),r)),{},{angle:Math.atan2(o[2]-i.y,o[1]-i.x)});case"C":case"Q":return kM(i,t)}},zM=new RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),rg=new RegExp(IM,"g"),VM=new RegExp(ni,"gi"),GM={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},y0=s=>{var t;let e=[],n=(t=s.match(zM))!==null&&t!==void 0?t:[];for(let i of n){let r=i[0];if(r==="z"||r==="Z"){e.push([r]);continue}let o=GM[r.toLowerCase()],a=[];if(r==="a"||r==="A"){rg.lastIndex=0;for(let l=null;l=rg.exec(i);)a.push(...l.slice(1))}else a=i.match(VM)||[];for(let l=0;l<a.length;l+=o){let c=new Array(o),h=OM[r];c[0]=l>0&&h?h:r;for(let u=0;u<o;u++)c[u+1]=parseFloat(a[l+u]);e.push(c)}}return e},HM=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=new J(s[0]),n=new J(s[1]),i=1,r=0,o=[],a=s.length,l=a>2,c;for(l&&(i=s[2].x<n.x?-1:s[2].x===n.x?0:1,r=s[2].y<n.y?-1:s[2].y===n.y?0:1),o.push(["M",e.x-i*t,e.y-r*t]),c=1;c<a;c++){if(!e.eq(n)){let h=e.midPointFrom(n);o.push(["Q",e.x,e.y,h.x,h.y])}e=s[c],c+1<s.length&&(n=s[c+1])}return l&&(i=e.x>s[c-2].x?1:e.x===s[c-2].x?0:-1,r=e.y>s[c-2].y?1:e.y===s[c-2].y?0:-1),o.push(["L",e.x+i*t,e.y+r*t]),o},S0=(s,t)=>s.map((e=>e.map(((n,i)=>i===0||t===void 0?n:pe(n,t))).join(" "))).join(" ");function rh(s,t){let e=s.style;e&&t&&(typeof t=="string"?e.cssText+=";"+t:Object.entries(t).forEach((n=>{let[i,r]=n;return e.setProperty(i,r)})))}var WM=(s,t)=>Math.floor(Math.random()*(t-s+1))+s;function XM(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.onComplete||dr,n=new(Pa()).XMLHttpRequest,i=t.signal,r=function(){n.abort()},o=function(){i&&i.removeEventListener("abort",r),n.onerror=n.ontimeout=dr};if(i&&i.aborted)throw new Bc("request");return i&&i.addEventListener("abort",r,{once:!0}),n.onreadystatechange=function(){n.readyState===4&&(o(),e(n),n.onreadystatechange=dr)},n.onerror=n.ontimeout=o,n.open("get",s,!0),n.send(),n}var jM=(s,t)=>{let e=s._findCenterFromElement();s.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:i,scaleY:r,angle:o,skewX:a}=po(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(un,i),n.set(Rn,r),n.angle=o,n.skewX=a,n.skewY=0}})(s),e=e.transform(s.transformMatrix)),delete s.transformMatrix,t&&(s.scaleX*=t.scaleX,s.scaleY*=t.scaleY,s.cropX=t.cropX,s.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,s.width=t.width,s.height=t.height),s.setPositionByOrigin(e,Wt,Wt)},HE=Object.freeze({__proto__:null,addTransformToObject:Eg,animate:sf,animateColor:Gg,applyTransformToObject:_o,calcAngleBetweenVectors:Kc,calcDimensionsMatrix:Da,calcPlaneChangeMatrix:Oa,calcVectorRotation:kg,cancelAnimFrame:_g,capValue:xr,composeMatrix:bg,copyCanvasElement:s=>{var t;let e=Pn(s);return(t=e.getContext("2d"))===null||t===void 0||t.drawImage(s,0,0),e},cos:si,createCanvasElement:Mi,createImage:xg,createRotateMatrix:yr,createScaleMatrix:mh,createSkewXMatrix:Zd,createSkewYMatrix:Jd,createTranslateMatrix:Mo,createVector:Zc,crossProduct:uo,degreesToRadians:Te,dotProduct:zg,ease:Yb,enlivenObjectEnlivables:Ia,enlivenObjects:mo,findScaleToCover:f0,findScaleToFit:d0,getBoundsOfCurve:Pd,getOrthonormalVector:nf,getPathSegmentsInfo:hf,getPointOnPath:v0,getPointer:Cg,getRandomInt:WM,getRegularPolygonPath:(s,t)=>{let e=2*Math.PI/s,n=-bs;s%2==0&&(n+=e/2);let i=new Array(s+1);for(let r=0;r<s;r++){let o=r*e+n,{x:a,y:l}=new J(si(o),ri(o)).scalarMultiply(t);i[r]=[r===0?"M":"L",a,l]}return i[s]=["Z"],i},getSmoothPathFromPoints:HM,getSvgAttributes:s=>{let t=["instantiated_by_use","style","id","class"];switch(s){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},getUnitVector:vh,groupSVGElements:(s,t)=>s&&s.length===1?s[0]:new ys(s,t),hasStyleChanged:bh,invertTransform:An,isBetweenVectors:xd,isIdentityMatrix:vg,isTouchEvent:Wc,isTransparent:s0,joinPath:S0,loadImage:Sa,magnitude:Jc,makeBoundingBoxFromPoints:Si,makePathSimpler:p0,matrixToSVG:go,mergeClipPaths:(s,t)=>{var e;let n=s,i=t;n.inverted&&!i.inverted&&(n=t,i=s),_d(i,(e=i.group)===null||e===void 0?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&i.inverted;return r&&(n.inverted=i.inverted=!1),new ys([n],{clipPath:i,inverted:r})},multiplyTransformMatrices:Ce,multiplyTransformMatrixArray:ph,parsePath:y0,parsePreserveAspectRatioAttribute:Og,parseUnit:fr,pick:Sr,projectStrokeOnPoints:r0,qrDecompose:po,radiansToDegrees:wi,removeFromArray:Ys,removeTransformFromObject:(s,t)=>{let e=An(t),n=Ce(e,s.calcOwnMatrix());_o(s,n)},removeTransformMatrixForSvgParsing:jM,request:XM,requestAnimFrame:ya,resetObjectTransform:Ag,rotatePoint:(s,t,e)=>s.rotate(e,t),rotateVector:ef,saveObjectTransform:$d,sendObjectToPlane:_d,sendPointToPlane:Gi,sendVectorToPlane:Rg,setStyle:rh,sin:ri,sizeAfterTransform:gh,string:aM,stylesFromArray:l0,stylesToArray:a0,toBlob:qd,toDataURL:Yd,toFixed:pe,transformPath:(s,t,e)=>(e&&(t=Ce(t,[1,0,0,1,-e.x,-e.y])),s.map((n=>{let i=[...n];for(let r=1;r<n.length-1;r+=2){let{x:o,y:a}=nn({x:n[r],y:n[r+1]},t);i[r]=o,i[r+1]=a}return i}))),transformPoint:nn}),Dd=class extends Hc{constructor(t){let{allowTouchScrolling:e=!1,containerClass:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(t),V(this,"upper",void 0),V(this,"container",void 0);let{el:i}=this.lower,r=this.createUpperCanvas();this.upper={el:r,ctx:r.getContext("2d")},this.applyCanvasStyle(i,{allowTouchScrolling:e}),this.applyCanvasStyle(r,{allowTouchScrolling:e,styles:{position:"absolute",left:"0",top:"0"}});let o=this.createContainerElement();o.classList.add(n),i.parentNode&&i.parentNode.replaceChild(o,i),o.append(i,r),this.container=o}createUpperCanvas(){let{el:t}=this.lower,e=Mi();return e.className=t.className,e.classList.remove("lower-canvas"),e.classList.add("upper-canvas"),e.setAttribute("data-fabric","top"),e.style.cssText=t.style.cssText,e.setAttribute("draggable","true"),e}createContainerElement(){let t=yo().createElement("div");return t.setAttribute("data-fabric","wrapper"),rh(t,{position:"relative"}),Lm(t),t}applyCanvasStyle(t,e){let{styles:n,allowTouchScrolling:i}=e;rh(t,k(k({},n),{},{"touch-action":i?"manipulation":_n})),Lm(t)}setDimensions(t,e){super.setDimensions(t,e);let{el:n,ctx:i}=this.upper;Tg(n,i,t,e)}setCSSDimensions(t){super.setCSSDimensions(t),gd(this.upper.el,t),gd(this.container,t)}cleanupDOM(t){let e=this.container,{el:n}=this.lower,{el:i}=this.upper;super.cleanupDOM(t),e.removeChild(i),e.removeChild(n),e.parentNode&&e.parentNode.replaceChild(n,e)}dispose(){super.dispose(),bi().dispose(this.upper.el),delete this.upper,delete this.container}},oh=class s extends gr{constructor(){super(...arguments),V(this,"targets",[]),V(this,"_hoveredTargets",[]),V(this,"_currentTransform",null),V(this,"_groupSelector",null),V(this,"contextTopDirty",!1)}static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}get upperCanvasEl(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new Dd(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter((e=>!e.group&&e!==t)).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let i=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+i,-n+i),r.transform(...this.viewportTransform);let o=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=o,r.restore();let a=Math.round(i*this.getRetinaScaling());return s0(r,a,a,a)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find((n=>!!n&&t[n]===!0)):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),i=this._activeObject;return!!(!e||e&&i&&n.length>1&&n.indexOf(e)===-1&&i!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&i&&i!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let i;return e===fh||e===un||e===Rn||e===Ta?i=this.centeredScaling||t.centeredScaling:e===Xd&&(i=this.centeredRotation||t.centeredRotation),i?!n:n}_getOriginFromCorner(t,e){let n={x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=Pe:["mr","tr","br"].includes(e)&&(n.x=he),["tl","mt","tr"].includes(e)?n.y=pd:["bl","mb","br"].includes(e)&&(n.y=gn)),n}_setupCurrentTransform(t,e,n){var i;let r=e.group?Gi(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:o="",control:a}=e.getActiveControl()||{},l=n&&a?(i=a.getActionHandler(t,e,a))===null||i===void 0?void 0:i.bind(a):Ig,c=((f,p,x,m)=>{if(!p||!f)return"drag";let g=m.controls[p];return g.getActionName(x,g,m)})(n,o,t,e),h=t[this.centeredKey],u=this._shouldCenterTransform(e,c,h)?{x:Wt,y:Wt}:this._getOriginFromCorner(e,o),d={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:o,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:r.x-e.left,offsetY:r.y-e.top,originX:u.x,originY:u.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Te(e.angle),width:e.width,height:e.height,shiftKey:t.shiftKey,altKey:h,original:k(k({},$d(e)),{},{originX:u.x,originY:u.y})};this._currentTransform=d,this.fire("before:transform",{e:t,transform:d})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new J(e,n).transform(this.viewportTransform),a=new J(e+i,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(o.x,a.x),h=Math.min(o.y,a.y),u=Math.max(o.x,a.x),d=Math.max(o.y,a.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,u-c,d-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,u-=l,d-=l,Ge.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,u-c,d-h))}findTarget(t){if(this.skipTargetFind)return;let e=this.getViewportPoint(t),n=this._activeObject,i=this.getActiveObjects();if(this.targets=[],n&&i.length>=1){if(n.findControl(e,Wc(t))||i.length>1&&this.searchPossibleTargets([n],e))return n;if(n===this.searchPossibleTargets([n],e)){if(this.preserveObjectStacking){let r=this.targets;this.targets=[];let o=this.searchPossibleTargets(this._objects,e);return t[this.altSelectionKey]&&o&&o!==n?(this.targets=r,n):o}return n}}return this.searchPossibleTargets(this._objects,e)}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),i=this.getZoom(),r=t.padding/i;if(r){let[o,a,l,c]=n,h=Math.atan2(a.y-o.y,a.x-o.x),u=si(h)*r,d=ri(h)*r,f=u+d,p=u-d;n=[new J(o.x-p,o.y-f),new J(a.x+f,a.y-p),new J(l.x+p,l.y+f),new J(c.x-f,c.y+p)]}return mr.isPointInPolygon(e,n)}_checkTarget(t,e){return!!(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,Gi(e,void 0,this.viewportTransform))&&(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing||!this.isTargetTransparent(t,e.x,e.y)))}_searchPossibleTargets(t,e){let n=t.length;for(;n--;){let i=t[n];if(this._checkTarget(i,e)){if(Fc(i)&&i.subTargetCheck){let r=this._searchPossibleTargets(i._objects,e);r&&this.targets.push(r)}return i}}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e);if(n&&Fc(n)&&n.interactive&&this.targets[0]){let i=this.targets;for(let r=i.length-1;r>0;r--){let o=i[r];if(!Fc(o)||!o.interactive)return o}return i[0]}return n}getViewportPoint(t){return this._pointer?this._pointer:this.getPointer(t,!0)}getScenePoint(t){return this._absolutePointer?this._absolutePointer:this.getPointer(t)}getPointer(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=this.upperCanvasEl,i=n.getBoundingClientRect(),r=Cg(t),o=i.width||0,a=i.height||0;o&&a||(gn in i&&pd in i&&(a=Math.abs(i.top-i.bottom)),Pe in i&&he in i&&(o=Math.abs(i.right-i.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,e||(r=Gi(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=o===0||a===0?new J(1,1):new J(n.width/o,n.height/a);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=Mi(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return qs(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,i=!1,r=this.getActiveObjects(),o=[],a=[];t.forEach((l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),a.push(l))})),r.forEach((l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),o.push(l))})),t.length>0&&r.length>0?(i=!0,n&&this.fire("selection:updated",{e,selected:o,deselected:a})):r.length>0?(i=!0,this.fire("selection:created",{e,selected:o})):t.length>0&&(i=!0,this.fire("selection:cleared",{e,deselected:a})),i&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),i=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),i}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,qs(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),qs(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let i=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),i}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,i={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",i),n.fire(zc,i))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;qs(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let i=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(i),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&qs(e)&&this._activeObject===e){let n=Sr(t,["angle","flipX","flipY",he,un,Rn,So,bo,gn]);return Eg(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let i=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(i)}};V(oh,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!1});var Id=class{constructor(t){V(this,"targets",[]),V(this,"__disposer",void 0);let e=()=>{let{hiddenTextarea:i}=t.getActiveObject()||{};i&&i.focus()},n=t.upperCanvasEl;n.addEventListener("click",e),this.__disposer=()=>n.removeEventListener("click",e)}exitTextEditing(){this.target=void 0,this.targets.forEach((t=>{t.isEditing&&t.exitEditing()}))}add(t){this.targets.push(t)}remove(t){this.unregister(t),Ys(this.targets,t)}register(t){this.target=t}unregister(t){t===this.target&&(this.target=void 0)}onMouseMove(t){var e;!((e=this.target)===null||e===void 0)&&e.isEditing&&this.target.updateSelectionOnMouseMove(t)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},YM=["target","oldTarget","fireCanvas","e"],En={passive:!1},so=(s,t)=>{let e=s.getViewportPoint(t),n=s.getScenePoint(t);return{viewportPoint:e,scenePoint:n,pointer:e,absolutePointer:n}},gs=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.addEventListener(...e)},Bn=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.removeEventListener(...e)},qM={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},vo=class extends oh{constructor(t){super(t,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}),V(this,"_isClick",void 0),V(this,"textEditingManager",new Id(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach((e=>{this[e]=this[e].bind(this)})),this.addOrRemove(gs,"add")}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(t,e){let n=this.upperCanvasEl,i=this._getEventPrefix();t(wg(n),"resize",this._onResize),t(n,i+"down",this._onMouseDown),t(n,"".concat(i,"move"),this._onMouseMove,En),t(n,"".concat(i,"out"),this._onMouseOut),t(n,"".concat(i,"enter"),this._onMouseEnter),t(n,"wheel",this._onMouseWheel,{passive:!1}),t(n,"contextmenu",this._onContextMenu),t(n,"click",this._onClick),t(n,"dblclick",this._onClick),t(n,"dragstart",this._onDragStart),t(n,"dragend",this._onDragEnd),t(n,"dragover",this._onDragOver),t(n,"dragenter",this._onDragEnter),t(n,"dragleave",this._onDragLeave),t(n,"drop",this._onDrop),this.enablePointerEvents||t(n,"touchstart",this._onTouchStart,En)}removeListeners(){this.addOrRemove(Bn,"remove");let t=this._getEventPrefix(),e=ei(this.upperCanvasEl);Bn(e,"".concat(t,"up"),this._onMouseUp),Bn(e,"touchend",this._onTouchEnd,En),Bn(e,"".concat(t,"move"),this._onMouseMove,En),Bn(e,"touchmove",this._onMouseMove,En),clearTimeout(this._willAddMouseDown)}_onMouseWheel(t){this.__onMouseWheel(t)}_onMouseOut(t){let e=this._hoveredTarget,n=k({e:t},so(this,t));this.fire("mouse:out",k(k({},n),{},{target:e})),this._hoveredTarget=void 0,e&&e.fire("mouseout",k({},n)),this._hoveredTargets.forEach((i=>{this.fire("mouse:out",k(k({},n),{},{target:i})),i&&i.fire("mouseout",k({},n))})),this._hoveredTargets=[]}_onMouseEnter(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",k({e:t},so(this,t))),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(t){this._isClick=!1;let e=this.getActiveObject();if(e&&e.onDragStart(t)){this._dragSource=e;let n={e:t,target:e};return this.fire("dragstart",n),e.fire("dragstart",n),void gs(this.upperCanvasEl,"drag",this._onDragProgress)}Fm(t)}_renderDragEffects(t,e,n){let i=!1,r=this._dropTarget;r&&r!==e&&r!==n&&(r.clearContextTop(),i=!0),e?.clearContextTop(),n!==e&&n?.clearContextTop();let o=this.contextTop;o.save(),o.transform(...this.viewportTransform),e&&(o.save(),e.transform(o),e.renderDragSourceEffect(t),o.restore(),i=!0),n&&(o.save(),n.transform(o),n.renderDropTargetEffect(t),o.restore(),i=!0),o.restore(),i&&(this.contextTopDirty=!0)}_onDragEnd(t){let e=!!t.dataTransfer&&t.dataTransfer.dropEffect!==_n,n=e?this._activeObject:void 0,i={e:t,target:this._dragSource,subTargets:this.targets,dragSource:this._dragSource,didDrop:e,dropTarget:n};Bn(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",i),this._dragSource&&this._dragSource.fire("dragend",i),delete this._dragSource,this._onMouseUp(t)}_onDragProgress(t){let e={e:t,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",e),this._dragSource&&this._dragSource.fire("drag",e)}findDragTargets(t){return this.targets=[],{target:this._searchPossibleTargets(this._objects,this.getViewportPoint(t)),targets:[...this.targets]}}_onDragOver(t){let e="dragover",{target:n,targets:i}=this.findDragTargets(t),r=this._dragSource,o={e:t,target:n,subTargets:i,dragSource:r,canDrop:!1,dropTarget:void 0},a;this.fire(e,o),this._fireEnterLeaveEvents(n,o),n&&(n.canDrop(t)&&(a=n),n.fire(e,o));for(let l=0;l<i.length;l++){let c=i[l];c.canDrop(t)&&(a=c),c.fire(e,o)}this._renderDragEffects(t,r,a),this._dropTarget=a}_onDragEnter(t){let{target:e,targets:n}=this.findDragTargets(t),i={e:t,target:e,subTargets:n,dragSource:this._dragSource};this.fire("dragenter",i),this._fireEnterLeaveEvents(e,i)}_onDragLeave(t){let e={e:t,target:this._draggedoverTarget,subTargets:this.targets,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(void 0,e),this._renderDragEffects(t,this._dragSource),this._dropTarget=void 0,this.targets=[],this._hoveredTargets=[]}_onDrop(t){let{target:e,targets:n}=this.findDragTargets(t),i=this._basicEventHandler("drop:before",k({e:t,target:e,subTargets:n,dragSource:this._dragSource},so(this,t)));i.didDrop=!1,i.dropTarget=void 0,this._basicEventHandler("drop",i),this.fire("drop:after",i)}_onContextMenu(t){let e=this.findTarget(t),n=this.targets||[],i=this._basicEventHandler("contextmenu:before",{e:t,target:e,subTargets:n});return this.stopContextMenu&&Fm(t),this._basicEventHandler("contextmenu",i),!1}_onClick(t){let e=t.detail;e>3||e<2||(this._cacheTransformEventData(t),e==2&&t.type==="dblclick"&&this._handleEvent(t,"dblclick"),e==3&&this._handleEvent(t,"tripleclick"),this._resetTransformEventData())}getPointerId(t){let e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1}_isMainEvent(t){return t.isPrimary===!0||t.isPrimary!==!1&&(t.type==="touchend"&&t.touches.length===0||!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(t){let e=!this.allowTouchScrolling,n=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(t)),this.__onMouseDown(t),(this.isDrawingMode||n&&this._target===n)&&(e=!0),e&&t.preventDefault(),this._resetTransformEventData();let i=this.upperCanvasEl,r=this._getEventPrefix(),o=ei(i);gs(o,"touchend",this._onTouchEnd,En),e&&gs(o,"touchmove",this._onMouseMove,En),Bn(i,"".concat(r,"down"),this._onMouseDown)}_onMouseDown(t){this.__onMouseDown(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();Bn(e,"".concat(n,"move"),this._onMouseMove,En);let i=ei(e);gs(i,"".concat(n,"up"),this._onMouseUp),gs(i,"".concat(n,"move"),this._onMouseMove,En)}_onTouchEnd(t){if(t.touches.length>0)return;this.__onMouseUp(t),this._resetTransformEventData(),delete this.mainTouchId;let e=this._getEventPrefix(),n=ei(this.upperCanvasEl);Bn(n,"touchend",this._onTouchEnd,En),Bn(n,"touchmove",this._onMouseMove,En),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout((()=>{gs(this.upperCanvasEl,"".concat(e,"down"),this._onMouseDown),this._willAddMouseDown=0}),400)}_onMouseUp(t){this.__onMouseUp(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();if(this._isMainEvent(t)){let i=ei(this.upperCanvasEl);Bn(i,"".concat(n,"up"),this._onMouseUp),Bn(i,"".concat(n,"move"),this._onMouseMove,En),gs(e,"".concat(n,"move"),this._onMouseMove,En)}}_onMouseMove(t){let e=this.getActiveObject();!this.allowTouchScrolling&&(!e||!e.shouldStartDragging(t))&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(t){let e=this.getActiveObject();return!!e!=!!t||e&&t&&e!==t}__onMouseUp(t){var e;this._cacheTransformEventData(t),this._handleEvent(t,"up:before");let n=this._currentTransform,i=this._isClick,r=this._target,{button:o}=t;if(o)return(this.fireMiddleClick&&o===1||this.fireRightClick&&o===2)&&this._handleEvent(t,"up"),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(t);if(!this._isMainEvent(t))return;let a,l,c=!1;if(n&&(this._finalizeCurrentTransform(t),c=n.actionPerformed),!i){let h=r===this._activeObject;this.handleSelection(t),c||(c=this._shouldRender(r)||!h&&r===this._activeObject)}if(r){let h=r.findControl(this.getViewportPoint(t),Wc(t)),{key:u,control:d}=h||{};if(l=u,r.selectable&&r!==this._activeObject&&r.activeOn==="up")this.setActiveObject(r,t),c=!0;else if(d){let f=d.getMouseUpHandler(t,r,d);f&&(a=this.getScenePoint(t),f.call(d,t,n,a.x,a.y))}r.isMoving=!1}if(n&&(n.target!==r||n.corner!==l)){let h=n.target&&n.target.controls[n.corner],u=h&&h.getMouseUpHandler(t,n.target,h);a=a||this.getScenePoint(t),u&&u.call(h,t,n,a.x,a.y)}this._setCursorFromEvent(t,r),this._handleEvent(t,"up"),this._groupSelector=null,this._currentTransform=null,r&&(r.__corner=void 0),c?this.requestRenderAll():i||(e=this._activeObject)!==null&&e!==void 0&&e.isEditing||this.renderTop()}_basicEventHandler(t,e){let{target:n,subTargets:i=[]}=e;this.fire(t,e),n&&n.fire(t,e);for(let r=0;r<i.length;r++)i[r]!==n&&i[r].fire(t,e);return e}_handleEvent(t,e,n){let i=this._target,r=this.targets||[],o=k(k(k({e:t,target:i,subTargets:r},so(this,t)),{},{transform:this._currentTransform},e==="up:before"||e==="up"?{isClick:this._isClick,currentTarget:this.findTarget(t),currentSubTargets:this.targets}:{}),e==="down:before"||e==="down"?n:{});this.fire("mouse:".concat(e),o),i&&i.fire("mouse".concat(e),o);for(let a=0;a<r.length;a++)r[a]!==i&&r[a].fire("mouse".concat(e),o)}_onMouseDownInDrawingMode(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(t),this.requestRenderAll());let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(t){if(this._isCurrentlyDrawing){let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")}_onMouseUpInDrawingMode(t){let e=this.getScenePoint(t);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:t,pointer:e}):this._isCurrentlyDrawing=!1,this._handleEvent(t,"up")}__onMouseDown(t){this._isClick=!0,this._cacheTransformEventData(t),this._handleEvent(t,"down:before");let e=this._target,n=!!e&&e===this._activeObject,{button:i}=t;if(i)return(this.fireMiddleClick&&i===1||this.fireRightClick&&i===2)&&this._handleEvent(t,"down",{alreadySelected:n}),void this._resetTransformEventData();if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(t);if(!this._isMainEvent(t)||this._currentTransform)return;let r=this._shouldRender(e),o=!1;if(this.handleMultiSelection(t,e)?(e=this._activeObject,o=!0,r=!0):this._shouldClearSelection(t,e)&&this.discardActiveObject(t),this.selection&&(!e||!e.selectable&&!e.isEditing&&e!==this._activeObject)){let a=this.getScenePoint(t);this._groupSelector={x:a.x,y:a.y,deltaY:0,deltaX:0}}if(n=!!e&&e===this._activeObject,e){e.selectable&&e.activeOn==="down"&&this.setActiveObject(e,t);let a=e.findControl(this.getViewportPoint(t),Wc(t));if(e===this._activeObject&&(a||!o)){this._setupCurrentTransform(t,e,n);let l=a?a.control:void 0,c=this.getScenePoint(t),h=l&&l.getMouseDownHandler(t,e,l);h&&h.call(l,t,this._currentTransform,c.x,c.y)}}r&&(this._objectsToRender=void 0),this._handleEvent(t,"down",{alreadySelected:n}),r&&this.requestRenderAll()}_resetTransformEventData(){this._target=this._pointer=this._absolutePointer=void 0}_cacheTransformEventData(t){this._resetTransformEventData(),this._pointer=this.getViewportPoint(t),this._absolutePointer=Gi(this._pointer,void 0,this.viewportTransform),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)}__onMouseMove(t){if(this._isClick=!1,this._cacheTransformEventData(t),this._handleEvent(t,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(t);if(!this._isMainEvent(t))return;let e=this._groupSelector;if(e){let n=this.getScenePoint(t);e.deltaX=n.x-e.x,e.deltaY=n.y-e.y,this.renderTop()}else if(this._currentTransform)this._transformObject(t);else{let n=this.findTarget(t);this._setCursorFromEvent(t,n),this._fireOverOutEvents(t,n)}this.textEditingManager.onMouseMove(t),this._handleEvent(t,"move"),this._resetTransformEventData()}_fireOverOutEvents(t,e){let n=this._hoveredTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("mouse",{e:t,target:e,oldTarget:n,fireCanvas:!0});for(let a=0;a<o;a++)r[a]===e||i[a]&&i[a]===n||this.fireSyntheticInOutEvents("mouse",{e:t,target:r[a],oldTarget:i[a]});this._hoveredTarget=e,this._hoveredTargets=this.targets.concat()}_fireEnterLeaveEvents(t,e){let n=this._draggedoverTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("drag",k(k({},e),{},{target:t,oldTarget:n,fireCanvas:!0}));for(let a=0;a<o;a++)this.fireSyntheticInOutEvents("drag",k(k({},e),{},{target:r[a],oldTarget:i[a]}));this._draggedoverTarget=t}fireSyntheticInOutEvents(t,e){let{target:n,oldTarget:i,fireCanvas:r,e:o}=e,a=ve(e,YM),{targetIn:l,targetOut:c,canvasIn:h,canvasOut:u}=qM[t],d=i!==n;if(i&&d){let f=k(k({},a),{},{e:o,target:i,nextTarget:n},so(this,o));r&&this.fire(u,f),i.fire(c,f)}if(n&&d){let f=k(k({},a),{},{e:o,target:n,previousTarget:i},so(this,o));r&&this.fire(h,f),n.fire(l,f)}}__onMouseWheel(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()}_transformObject(t){let e=this.getScenePoint(t),n=this._currentTransform,i=n.target,r=i.group?Gi(e,void 0,i.group.calcTransformMatrix()):e;n.shiftKey=t.shiftKey,n.altKey=!!this.centeredKey&&t[this.centeredKey],this._performTransformAction(t,n,r),n.actionPerformed&&this.requestRenderAll()}_performTransformAction(t,e,n){let{action:i,actionHandler:r,target:o}=e,a=!!r&&r(t,e,n.x,n.y);a&&o.setCoords(),i==="drag"&&a&&(e.target.isMoving=!0,this.setCursor(e.target.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a}_setCursorFromEvent(t,e){if(!e)return void this.setCursor(this.defaultCursor);let n=e.hoverCursor||this.hoverCursor,i=qs(this._activeObject)?this._activeObject:null,r=(!i||e.group!==i)&&e.findControl(this.getViewportPoint(t));if(r){let o=r.control;this.setCursor(o.cursorStyleHandler(t,o,e))}else e.subTargetCheck&&this.targets.concat().reverse().map((o=>{n=o.hoverCursor||n})),this.setCursor(n)}handleMultiSelection(t,e){let n=this._activeObject,i=qs(n);if(n&&this._isSelectionKeyPressed(t)&&this.selection&&e&&e.selectable&&(n!==e||i)&&(i||!e.isDescendantOf(n)&&!n.isDescendantOf(e))&&!e.onSelect({e:t})&&!n.getActiveControl()){if(i){let r=n.getObjects();if(e===n){let o=this.getViewportPoint(t);if(!(e=this.searchPossibleTargets(r,o)||this.searchPossibleTargets(this._objects,o))||!e.selectable)return!1}e.group===n?(n.remove(e),this._hoveredTarget=e,this._hoveredTargets=[...this.targets],n.size()===1&&this._setActiveObject(n.item(0),t)):(n.multiSelectAdd(e),this._hoveredTarget=n,this._hoveredTargets=[...this.targets]),this._fireSelectionEvents(r,t)}else{n.isEditing&&n.exitEditing();let r=new(Mt.getClass("ActiveSelection"))([],{canvas:this});r.multiSelectAdd(n,e),this._hoveredTarget=r,this._setActiveObject(r,t),this._fireSelectionEvents([n],t)}return!0}return!1}handleSelection(t){if(!this.selection||!this._groupSelector)return!1;let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new J(e,n),a=o.add(new J(i,r)),l=o.min(a),c=o.max(a).subtract(l),h=this.collectObjects({left:l.x,top:l.y,width:c.x,height:c.y},{includeIntersecting:!this.selectionFullyContained}),u=o.eq(a)?h[0]?[h[0]]:[]:h.length>1?h.filter((d=>!d.onSelect({e:t}))).reverse():h;if(u.length===1)this.setActiveObject(u[0],t);else if(u.length>1){let d=Mt.getClass("ActiveSelection");this.setActiveObject(new d(u,{canvas:this}),t)}return this._groupSelector=null,!0}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,{upper:n}=this.elements;n.ctx=void 0;let i=super.toCanvasElement(t,e);return n.ctx=n.el.getContext("2d"),i}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},b0={x1:0,y1:0,x2:0,y2:0},ZM=k(k({},b0),{},{r1:0,r2:0}),oo=(s,t)=>isNaN(s)&&typeof t=="number"?t:s;function M0(s){return s&&/%$/.test(s)&&Number.isFinite(parseFloat(s))}function w0(s,t){let e=typeof s=="number"?s:typeof s=="string"?parseFloat(s)/(M0(s)?100:1):NaN;return xr(0,oo(e,t),1)}var JM=/\s*;\s*/,KM=/\s*:\s*/;function $M(s,t){let e,n,i=s.getAttribute("style");if(i){let o=i.split(JM);o[o.length-1]===""&&o.pop();for(let a=o.length;a--;){let[l,c]=o[a].split(KM).map((h=>h.trim()));l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}let r=new dn(e||s.getAttribute("stop-color")||"rgb(0,0,0)");return{offset:w0(s.getAttribute("offset"),0),color:r.toRgb(),opacity:oo(parseFloat(n||s.getAttribute("stop-opacity")||""),1)*r.getAlpha()*t}}function QM(s,t){let e=[],n=s.getElementsByTagName("stop"),i=w0(t,1);for(let r=n.length;r--;)e.push($M(n[r],i));return e}function T0(s){return s.nodeName==="linearGradient"||s.nodeName==="LINEARGRADIENT"?"linear":"radial"}function C0(s){return s.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function ti(s,t){return s.getAttribute(t)}function t1(s,t){return(function(e,n){let i,{width:r,height:o,gradientUnits:a}=n;return Object.entries(e).reduce(((l,c)=>{let[h,u]=c;if(u==="Infinity")i=1;else if(u==="-Infinity")i=0;else{let d=typeof u=="string";i=d?parseFloat(u):u,d&&M0(u)&&(i*=.01,a==="pixels"&&(h!=="x1"&&h!=="x2"&&h!=="r2"||(i*=r),h!=="y1"&&h!=="y2"||(i*=o)))}return l[h]=i,l}),{})})(T0(s)==="linear"?(function(e){return{x1:ti(e,"x1")||0,y1:ti(e,"y1")||0,x2:ti(e,"x2")||"100%",y2:ti(e,"y2")||0}})(s):(function(e){return{x1:ti(e,"fx")||ti(e,"cx")||"50%",y1:ti(e,"fy")||ti(e,"cy")||"50%",r1:0,x2:ti(e,"cx")||"50%",y2:ti(e,"cy")||"50%",r2:ti(e,"r")||"50%"}})(s),k(k({},t),{},{gradientUnits:C0(s)}))}var ao=class{constructor(t){let{type:e="linear",gradientUnits:n="pixels",coords:i={},colorStops:r=[],offsetX:o=0,offsetY:a=0,gradientTransform:l,id:c}=t||{};Object.assign(this,{type:e,gradientUnits:n,coords:k(k({},e==="radial"?ZM:b0),i),colorStops:r,offsetX:o,offsetY:a,gradientTransform:l,id:c?"".concat(c,"_").concat(Ms()):Ms()})}addColorStop(t){for(let e in t){let n=new dn(t[e]);this.colorStops.push({offset:parseFloat(e),color:n.toRgb(),opacity:n.getAlpha()})}return this}toObject(t){return k(k({},Sr(this,t)),{},{type:this.type,coords:k({},this.coords),colorStops:this.colorStops.map((e=>k({},e))),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0})}toSVG(t){let{additionalTransform:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],i=this.gradientTransform?this.gradientTransform.concat():hn.concat(),r=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",o=this.colorStops.map((u=>k({},u))).sort(((u,d)=>u.offset-d.offset)),a=-this.offsetX,l=-this.offsetY;var c;r==="objectBoundingBox"?(a/=t.width,l/=t.height):(a+=t.width/2,l+=t.height/2),(c=t)&&typeof c._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(a-=t.pathOffset.x,l-=t.pathOffset.y),i[4]-=a,i[5]-=l;let h=['id="SVGID_'.concat(this.id,'"'),'gradientUnits="'.concat(r,'"'),'gradientTransform="'.concat(e?e+" ":"").concat(go(i),'"'),""].join(" ");if(this.type==="linear"){let{x1:u,y1:d,x2:f,y2:p}=this.coords;n.push("<linearGradient ",h,' x1="',u,'" y1="',d,'" x2="',f,'" y2="',p,`">
`)}else if(this.type==="radial"){let{x1:u,y1:d,x2:f,y2:p,r1:x,r2:m}=this.coords,g=x>m;n.push("<radialGradient ",h,' cx="',g?u:f,'" cy="',g?d:p,'" r="',g?x:m,'" fx="',g?f:u,'" fy="',g?p:d,`">
`),g&&(o.reverse(),o.forEach((R=>{R.offset=1-R.offset})));let y=Math.min(x,m);if(y>0){let R=y/Math.max(x,m);o.forEach((T=>{T.offset+=R*(1-T.offset)}))}}return o.forEach((u=>{let{color:d,offset:f,opacity:p}=u;n.push("<stop ",'offset="',100*f+"%",'" style="stop-color:',d,p!==void 0?";stop-opacity: "+p:";",`"/>
`)})),n.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),n.join("")}toLive(t){let{x1:e,y1:n,x2:i,y2:r,r1:o,r2:a}=this.coords,l=this.type==="linear"?t.createLinearGradient(e,n,i,r):t.createRadialGradient(e,n,o,i,r,a);return this.colorStops.forEach((c=>{let{color:h,opacity:u,offset:d}=c;l.addColorStop(d,u!==void 0?new dn(h).setAlpha(u).toRgba():h)})),l}static async fromObject(t){let{colorStops:e,gradientTransform:n}=t;return new this(k(k({},t),{},{colorStops:e?e.map((i=>k({},i))):void 0,gradientTransform:n?[...n]:void 0}))}static fromElement(t,e,n){let i=C0(t),r=e._findCenterFromElement();return new this(k({id:t.getAttribute("id")||void 0,type:T0(t),coords:t1(t,{width:n.viewBoxWidth||n.width,height:n.viewBoxHeight||n.height}),colorStops:QM(t,n.opacity),gradientUnits:i,gradientTransform:Ed(t.getAttribute("gradientTransform")||"")},i==="pixels"?{offsetX:e.width/2-r.x,offsetY:e.height/2-r.y}:{offsetX:0,offsetY:0}))}};V(ao,"type","Gradient"),Mt.setClass(ao,"gradient"),Mt.setClass(ao,"linear"),Mt.setClass(ao,"radial");var e1=["type","source","patternTransform"],wa=class{get type(){return"pattern"}set type(t){Ss("warn","Setting type has no effect",t)}constructor(t){V(this,"repeat","repeat"),V(this,"offsetX",0),V(this,"offsetY",0),V(this,"crossOrigin",""),this.id=Ms(),Object.assign(this,t)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(t){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?t.createPattern(this.source,this.repeat):null}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{repeat:e,crossOrigin:n}=this;return k(k({},Sr(this,t)),{},{type:"pattern",source:this.sourceToString(),repeat:e,crossOrigin:n,offsetX:pe(this.offsetX,ie.NUM_FRACTION_DIGITS),offsetY:pe(this.offsetY,ie.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null})}toSVG(t){let{width:e,height:n}=t,{source:i,repeat:r,id:o}=this,a=oo(this.offsetX/e,0),l=oo(this.offsetY/n,0),c=r==="repeat-y"||r==="no-repeat"?1+Math.abs(a||0):oo(i.width/e,0),h=r==="repeat-x"||r==="no-repeat"?1+Math.abs(l||0):oo(i.height/n,0);return['<pattern id="SVGID_'.concat(o,'" x="').concat(a,'" y="').concat(l,'" width="').concat(c,'" height="').concat(h,'">'),'<image x="0" y="0" width="'.concat(i.width,'" height="').concat(i.height,'" xlink:href="').concat(this.sourceToString(),'"></image>'),"</pattern>",""].join(`
`)}static async fromObject(t,e){let{type:n,source:i,patternTransform:r}=t,o=ve(t,e1),a=await Sa(i,k(k({},e),{},{crossOrigin:o.crossOrigin}));return new this(k(k({},o),{},{patternTransform:r&&r.slice(0),source:a}))}};V(wa,"type","Pattern"),Mt.setClass(wa),Mt.setClass(wa,"pattern");var n1=["path","left","top"],i1=["d"],ki=class s extends Ge{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{path:n,left:i,top:r}=e,o=ve(e,n1);super(),Object.assign(this,s.ownDefaults),this.setOptions(o),this._setPath(t||[],!0),typeof i=="number"&&this.set(he,i),typeof r=="number"&&this.set(gn,r)}_setPath(t,e){this.path=p0(Array.isArray(t)?t:y0(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new J(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let i of this.path)switch(i[0]){case"L":t.lineTo(i[1]+e,i[2]+n);break;case"M":t.moveTo(i[1]+e,i[2]+n);break;case"C":t.bezierCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n,i[5]+e,i[6]+n);break;case"Q":t.quadraticCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return"#<Path (".concat(this.complexity(),'): { "top": ').concat(this.top,', "left": ').concat(this.left," }>")}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return k(k({},super.toObject(t)),{},{path:this.path.map((e=>e.slice()))})}toDatalessObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){let t=S0(this.path,ie.NUM_FRACTION_DIGITS);return["<path ","COMMON_PARTS",'d="'.concat(t,`" stroke-linecap="round" />
`)]}_getOffsetTransform(){let t=ie.NUM_FRACTION_DIGITS;return" translate(".concat(pe(-this.pathOffset.x,t),", ").concat(pe(-this.pathOffset.y,t),")")}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:i}=this._calcDimensions();this.set({width:e,height:n,pathOffset:i}),t&&this.setPositionByOrigin(i,Wt,Wt)}_calcBoundsFromPath(){let t=[],e=0,n=0,i=0,r=0;for(let o of this.path)switch(o[0]){case"L":i=o[1],r=o[2],t.push({x:e,y:n},{x:i,y:r});break;case"M":i=o[1],r=o[2],e=i,n=r;break;case"C":t.push(...Pd(i,r,o[1],o[2],o[3],o[4],o[5],o[6])),i=o[5],r=o[6];break;case"Q":t.push(...Pd(i,r,o[1],o[2],o[1],o[2],o[3],o[4])),i=o[3],r=o[4];break;case"Z":i=e,r=n}return Si(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return k(k({},t),{},{pathOffset:new J(t.left+t.width/2,t.top+t.height/2)})}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let i=Xi(t,this.ATTRIBUTE_NAMES,n),{d:r}=i;return new this(r,k(k(k({},ve(i,i1)),e),{},{left:void 0,top:void 0}))}};V(ki,"type","Path"),V(ki,"cacheProperties",[...Wi,"path","fillRule"]),V(ki,"ATTRIBUTE_NAMES",[...Ts,"d"]),Mt.setClass(ki),Mt.setSVGClass(ki);var s1=["left","top","radius"],E0=["radius","startAngle","endAngle","counterClockwise"],vi=class s extends Ge{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,Te(this.startAngle),Te(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(un)}getRadiusY(){return this.get("radius")*this.get(Rn)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...E0,...t])}_toSVG(){let t=(this.endAngle-this.startAngle)%360;if(t===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',"".concat(this.radius),`" />
`];{let{radius:e}=this,n=Te(this.startAngle),i=Te(this.endAngle),r=si(n)*e,o=ri(n)*e,a=si(i)*e,l=ri(i)*e,c=t>180?1:0,h=this.counterClockwise?0:1;return['<path d="M '.concat(r," ").concat(o," A ").concat(e," ").concat(e," 0 ").concat(c," ").concat(h," ").concat(a," ").concat(l,'" '),"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let i=Xi(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,radius:a=0}=i;return new this(k(k({},ve(i,s1)),{},{radius:a,left:r-a,top:o-a}))}static fromObject(t){return super._fromObject(t)}};V(vi,"type","Circle"),V(vi,"cacheProperties",[...Wi,...E0]),V(vi,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),V(vi,"ATTRIBUTE_NAMES",["cx","cy","r",...Ts]),Mt.setClass(vi),Mt.setSVGClass(vi);var r1=["x1","y1","x2","y2"],o1=["x1","y1","x2","y2"],Od=["x1","x2","y1","y2"],Zs=class s extends Ge{constructor(){let[t,e,n,i]=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0,0,0],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=i,this._setWidthHeight();let{left:o,top:a}=r;typeof o=="number"&&this.set(he,o),typeof a=="number"&&this.set(gn,a)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:i}=this;this.width=Math.abs(n-t),this.height=Math.abs(i-e);let{left:r,top:o,width:a,height:l}=Si([{x:t,y:e},{x:n,y:i}]),c=new J(r+a/2,o+l/2);this.setPositionByOrigin(c,Wt,Wt)}_set(t,e){return super._set(t,e),Od.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var i;zn(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(i=this.stroke)!==null&&i!==void 0?i:t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new J((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return k(k({},super.toObject(t)),this.calcLinePoints())}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:i,width:r,height:o}=this,a=t<=e?-1:1,l=n<=i?-1:1;return{x1:a*r/2,x2:a*-r/2,y1:l*o/2,y2:l*-o/2}}_toSVG(){let{x1:t,x2:e,y1:n,y2:i}=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="'.concat(t,'" y1="').concat(n,'" x2="').concat(e,'" y2="').concat(i,`" />
`)]}static async fromElement(t,e,n){let i=Xi(t,this.ATTRIBUTE_NAMES,n),{x1:r=0,y1:o=0,x2:a=0,y2:l=0}=i;return new this([r,o,a,l],ve(i,r1))}static fromObject(t){let{x1:e,y1:n,x2:i,y2:r}=t,o=ve(t,o1);return this._fromObject(k(k({},o),{},{points:[e,n,i,r]}),{extraParam:"points"})}};V(Zs,"type","Line"),V(Zs,"cacheProperties",[...Wi,...Od]),V(Zs,"ATTRIBUTE_NAMES",Ts.concat(Od)),Mt.setClass(Zs),Mt.setSVGClass(Zs);var lo=class s extends Ge{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',"".concat(-t," ").concat(e,",0 ").concat(-e,",").concat(t," ").concat(e),'" />']}};V(lo,"type","Triangle"),V(lo,"ownDefaults",{width:100,height:100}),Mt.setClass(lo),Mt.setSVGClass(lo);var A0=["rx","ry"],_s=class s extends Ge{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(un)}getRy(){return this.get("ry")*this.get(Rn)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...A0,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" rx="'.concat(this.rx,'" ry="').concat(this.ry,`" />
`)]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,Hi,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let i=Xi(t,this.ATTRIBUTE_NAMES,n);return i.left=(i.left||0)-i.rx,i.top=(i.top||0)-i.ry,new this(i)}};function a1(s){if(!s)return[];let t=s.replace(/,/g," ").trim().split(/\s+/),e=[];for(let n=0;n<t.length;n+=2)e.push({x:parseFloat(t[n]),y:parseFloat(t[n+1])});return e}V(_s,"type","Ellipse"),V(_s,"cacheProperties",[...Wi,...A0]),V(_s,"ownDefaults",{rx:0,ry:0}),V(_s,"ATTRIBUTE_NAMES",[...Ts,"cx","cy","rx","ry"]),Mt.setClass(_s),Mt.setSVGClass(_s);var l1=["left","top"],R0={exactBoundingBox:!1},xi=class s extends Ge{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),V(this,"strokeDiff",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:i}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set(he,n),typeof i=="number"&&this.set(gn,i)}isOpen(){return!0}_projectStrokeOnPoints(t){return r0(this.points,t,this.isOpen())}_calcDimensions(t){t=k({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth},t||{});let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map((c=>c.projectedPoint)):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new J,strokeOffset:new J,strokeDiff:new J};let n=Si(e),i=Da(k(k({},t),{},{scaleX:1,scaleY:1})),r=Si(this.points.map((c=>nn(c,i,!0)))),o=new J(this.scaleX,this.scaleY),a=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(a-=l*Math.tan(Te(this.skewX)),l-=a*Math.tan(Te(this.skewY))),k(k({},n),{},{pathOffset:new J(a,l),strokeOffset:new J(r.left,r.top).subtract(new J(n.left,n.top)).multiply(o),strokeDiff:new J(n.width,n.height).subtract(new J(r.width,r.height)).multiply(o)})}_findCenterFromElement(){let t=Si(this.points);return new J(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}=this._calcDimensions();this.set({width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}),t&&this.setPositionByOrigin(new J(e+i/2,n+r/2),Wt,Wt)}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new J(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.exactBoundingBox){let o;if(Object.keys(t).some((a=>this.strokeUniform||this.constructor.layoutProperties.includes(a)))){var e,n;let{width:a,height:l}=this._calcDimensions(t);o=new J((e=t.width)!==null&&e!==void 0?e:a,(n=t.height)!==null&&n!==void 0?n:l)}else{var i,r;o=new J((i=t.width)!==null&&i!==void 0?i:this.width,(r=t.height)!==null&&r!==void 0?r:this.height)}return o.multiply(new J(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,i=super._set(t,e);return this.exactBoundingBox&&n&&((t===un||t===Rn)&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),i}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return k(k({},super.toObject(t)),{},{points:this.points.map((e=>{let{x:n,y:i}=e;return{x:n,y:i}}))})}_toSVG(){let t=[],e=this.pathOffset.x,n=this.pathOffset.y,i=ie.NUM_FRACTION_DIGITS;for(let r=0,o=this.points.length;r<o;r++)t.push(pe(this.points[r].x-e,i),",",pe(this.points[r].y-n,i)," ");return["<".concat(this.constructor.type.toLowerCase()," "),"COMMON_PARTS",'points="'.concat(t.join(""),`" />
`)]}_render(t){let e=this.points.length,n=this.pathOffset.x,i=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-i);for(let r=0;r<e;r++){let o=this.points[r];t.lineTo(o.x-n,o.y-i)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){return new this(a1(t.getAttribute("points")),k(k({},ve(Xi(t,this.ATTRIBUTE_NAMES,n),l1)),e))}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};V(xi,"ownDefaults",R0),V(xi,"type","Polyline"),V(xi,"layoutProperties",[So,bo,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),V(xi,"cacheProperties",[...Wi,"points"]),V(xi,"ATTRIBUTE_NAMES",[...Ts]),Mt.setClass(xi),Mt.setSVGClass(xi);var xs=class extends xi{isOpen(){return!1}};V(xs,"ownDefaults",R0),V(xs,"type","Polygon"),Mt.setClass(xs),Mt.setSVGClass(xs);var ah=class extends Ge{isEmptyStyles(t){if(!this.styles||t!==void 0&&!this.styles[t])return!0;let e=t===void 0?this.styles:{line:this.styles[t]};for(let n in e)for(let i in e[n])for(let r in e[n][i])return!1;return!0}styleHas(t,e){if(!this.styles||e!==void 0&&!this.styles[e])return!1;let n=e===void 0?this.styles:{0:this.styles[e]};for(let i in n)for(let r in n[i])if(n[i][r][t]!==void 0)return!0;return!1}cleanStyle(t){if(!this.styles)return!1;let e=this.styles,n,i,r=0,o=!0,a=0;for(let l in e){n=0;for(let c in e[l]){let h=e[l][c]||{};r++,h[t]!==void 0?(i?h[t]!==i&&(o=!1):i=h[t],h[t]===this[t]&&delete h[t]):o=!1,Object.keys(h).length!==0?n++:delete e[l][c]}n===0&&delete e[l]}for(let l=0;l<this._textLines.length;l++)a+=this._textLines[l].length;o&&r===a&&(this[t]=i,this.removeStyle(t))}removeStyle(t){if(!this.styles)return;let e=this.styles,n,i,r;for(i in e){for(r in n=e[i],n)delete n[r][t],Object.keys(n[r]).length===0&&delete n[r];Object.keys(n).length===0&&delete e[i]}}_extendStyles(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);this._getLineStyle(n)||this._setLineStyle(n);let r=Kd(k(k({},this._getStyleDeclaration(n,i)),e),(o=>o!==void 0));this._setStyleDeclaration(n,i,r)}getSelectionStyles(t,e,n){let i=[];for(let r=t;r<(e||t);r++)i.push(this.getStyleAtPosition(r,n));return i}getStyleAtPosition(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);return e?this.getCompleteStyleDeclaration(n,i):this._getStyleDeclaration(n,i)}setSelectionStyles(t,e,n){for(let i=e;i<(n||e);i++)this._extendStyles(i,t);this._forceClearCache=!0}_getStyleDeclaration(t,e){var n;let i=this.styles&&this.styles[t];return i&&(n=i[e])!==null&&n!==void 0?n:{}}getCompleteStyleDeclaration(t,e){return k(k({},Sr(this,this.constructor._styleProperties)),this._getStyleDeclaration(t,e))}_setStyleDeclaration(t,e,n){this.styles[t][e]=n}_deleteStyleDeclaration(t,e){delete this.styles[t][e]}_getLineStyle(t){return!!this.styles[t]}_setLineStyle(t){this.styles[t]={}}_deleteLineStyle(t){delete this.styles[t]}};V(ah,"_styleProperties",zb);var c1=/  +/g,h1=/"/g;function ad(s,t,e,n,i){return"		".concat((function(r,o){let{left:a,top:l,width:c,height:h}=o,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ie.NUM_FRACTION_DIGITS,d=Ca(Ne,r,!1),[f,p,x,m]=[a,l,c,h].map((g=>pe(g,u)));return"<rect ".concat(d,' x="').concat(f,'" y="').concat(p,'" width="').concat(x,'" height="').concat(m,'"></rect>')})(s,{left:t,top:e,width:n,height:i}),`
`)}var u1=["textAnchor","textDecoration","dx","dy","top","left","fontSize","strokeWidth"],ld,Ve=class s extends ah{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),V(this,"__charBounds",[]),Object.assign(this,s.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=hf(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes(yi)&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,i,r,o,a;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign===yi||l!==c-1&&!this.isEndOfWrapping(l))&&(i=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(a=this.textLines[l].match(this._reSpacesAndTabs)))){n=a.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)o=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(o.width+=t,o.kernedWidth+=t,o.left+=i,i+=t):o.left+=i}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,i;for(i=0;i<n.length;i++){if(t<=n[i].length)return{lineIndex:i,charIndex:t};t-=n[i].length+this.missingNewlineOffset(i,e)}return{lineIndex:i-1,charIndex:n[i-1].length<t?n[i-1].length:t}}toString(){return"#<Text (".concat(this.complexity(),'): { "text": "').concat(this.text,'", "fontFamily": "').concat(this.fontFamily,'" }>')}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst===xn?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case Wt:t.textBaseline="middle";break;case"ascender":t.textBaseline=gn;break;case"descender":t.textBaseline=pd}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let i=this.getLineWidth(e);i>t&&(t=i)}return t}_renderTextLine(t,e,n,i,r,o){this._renderChars(t,e,n,i,r,o)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),i=this._getTopOffset();for(let r=0,o=this._textLines.length;r<o;r++){let a=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){i+=a;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,u,d=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),x=this.getHeightOfLineImpl(r);for(let m=0;m<l;m++){let g=this.__charBounds[r][m];u=this.getValueOfPropertyAt(r,m,"textBackgroundColor"),this.path?(t.save(),t.translate(g.renderLeft,g.renderTop),t.rotate(g.angle),t.fillStyle=u,u&&t.fillRect(-g.width/2,-x*(1-this._fontSizeFraction),g.width,x),t.restore()):u!==p?(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=p,p&&t.fillRect(h,i,d,x),f=g.left,d=g.width,p=u):d+=g.kernedWidth}u&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=u,t.fillRect(h,i,d,x)),i+=a}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,i){let r=va.getFontCache(e),o=this._getFontDeclaration(e),a=n?n+t:t,l=n&&o===this._getFontDeclaration(i),c=e.fontSize/this.CACHE_FONT_SIZE,h,u,d,f;if(n&&r.has(n)&&(d=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(a)&&(u=r.get(a),f=u-d),h===void 0||d===void 0||u===void 0){let p=(function(){return ld||(ld=Pn({width:0,height:0}).getContext("2d")),ld})();this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),d===void 0&&l&&n&&(d=p.measureText(n).width,r.set(n,d)),l&&u===void 0&&(u=p.measureText(a).width,r.set(a,u),f=u-d)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,i=0,r=this.pathSide===Pe,o=this.path,a=this._textLines[t],l=a.length,c=new Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let u=a[h];n=this._getGraphemeBox(u,t,h,e),c[h]=n,i+=n.kernedWidth,e=u}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},o&&o.segmentsInfo){let h=0,u=o.segmentsInfo[o.segmentsInfo.length-1].length;switch(this.textAlign){case he:h=r?u-i:0;break;case Wt:h=(u-i)/2;break;case Pe:h=r?0:u-i}h+=this.pathStartOffset*(r?-1:1);for(let d=r?l-1:0;r?d>=0:d<l;r?d--:d++)n=c[d],h>u?h%=u:h<0&&(h+=u),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:i,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,i=this.path,r=v0(i.path,n,i.segmentsInfo);e.renderLeft=r.x-i.pathOffset.x,e.renderTop=r.y-i.pathOffset.y,e.angle=r.angle+(this.pathSide===Pe?Math.PI:0)}_getGraphemeBox(t,e,n,i,r){let o=this.getCompleteStyleDeclaration(e,n),a=i?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,o,i,a),c,h=l.kernedWidth,u=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,h+=c);let d={width:u,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];d.left=f.left+f.width+l.kernedWidth-l.width}return d}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let i=1,r=this._textLines[t].length;i<r;i++)n=Math.max(this.getHeightOfChar(t,i),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,i=this._getLeftOffset(),r=this._getTopOffset();for(let o=0,a=this._textLines.length;o<a;o++)this._renderTextLine(e,t,this._textLines[o],i+this._getLineLeftOffset(o),r+n+this.getHeightOfLineImpl(o),o),n+=this.getHeightOfLine(o);t.restore()}_renderTextFill(t){(this.fill||this.styleHas(Ne))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,i,r,o){let a=this.textAlign.includes(yi),l=this.path,c=!a&&this.charSpacing===0&&this.isEmptyStyles(o)&&!l,h=this.direction==="ltr",u=this.direction==="ltr"?1:-1,d=e.direction,f,p,x,m,g,y="",R=0;if(e.save(),d!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?he:Pe),r-=this.getHeightOfLineImpl(o)*this._fontSizeFraction,c)return this._renderChar(t,e,o,0,n.join(""),i,r),void e.restore();for(let T=0,E=n.length-1;T<=E;T++)m=T===E||this.charSpacing||l,y+=n[T],x=this.__charBounds[o][T],R===0?(i+=u*(x.kernedWidth-x.width),R+=x.width):R+=x.kernedWidth,a&&!m&&this._reSpaceAndTab.test(n[T])&&(m=!0),m||(f=f||this.getCompleteStyleDeclaration(o,T),p=this.getCompleteStyleDeclaration(o,T+1),m=bh(f,p,!1)),m&&(l?(e.save(),e.translate(x.renderLeft,x.renderTop),e.rotate(x.angle),this._renderChar(t,e,o,T,y,-R/2,0),e.restore()):(g=i,this._renderChar(t,e,o,T,y,g,r)),y="",f=p,i+=u*R,R=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,i=Pn({width:e,height:n}),r=i.getContext("2d");return i.width=e,i.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(i,"no-repeat")}handleFiller(t,e,n){let i,r;return zn(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(i=-this.width/2,r=-this.height/2,t.translate(i,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:i,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,e){let{stroke:n,strokeWidth:i}=e;return t.lineWidth=i,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",n)}_setFillStyles(t,e){let{fill:n}=e;return this.handleFiller(t,"fillStyle",n)}_renderChar(t,e,n,i,r,o,a){let l=this._getStyleDeclaration(n,i),c=this.getCompleteStyleDeclaration(n,i),h=t==="fillText"&&c.fill,u=t==="strokeText"&&c.stroke&&c.strokeWidth;if(u||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(a+=l.deltaY),h){let d=this._setFillStyles(e,c);e.fillText(r,o-d.offsetX,a-d.offsetY)}if(u){let d=this._setStrokeStyles(e,c);e.strokeText(r,o-d.offsetX,a-d.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let i=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"fontSize"),o=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"deltaY"),a={fontSize:r*n.size,deltaY:o+r*n.baseline};this.setSelectionStyles(a,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,i=this.textAlign,r=this.direction,o=this.isEndOfWrapping(t),a=0;return i===yi||i===Ma&&!o||i===ba&&!o||i===qc&&!o?0:(i===Wt&&(a=n/2),i===Pe&&(a=n),i===Ma&&(a=n/2),i===ba&&(a=n),r==="rtl"&&(i===Pe||i===yi||i===ba?a=0:i===he||i===qc?a=-n:i!==Wt&&i!==Ma||(a=-n/2)),a)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing!==0?this.fontSize*this.charSpacing/1e3:0}getValueOfPropertyAt(t,e,n){var i;return(i=this._getStyleDeclaration(t,e)[n])!==null&&i!==void 0?i:this[n]}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),i=this._getLeftOffset(),r=this.path,o=this._getWidthOfCharSpacing(),a=e==="linethrough"?.5:e==="overline"?1:0,l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let u=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=u;continue}let d=this._textLines[c],f=u/this.lineHeight,p=this._getLineLeftOffset(c),x=0,m=0,g=this.getValueOfPropertyAt(c,0,e),y=this.getValueOfPropertyAt(c,0,Ne),R=this.getValueOfPropertyAt(c,0,_r),T=g,E=y,A=R,_=n+f*(1-this._fontSizeFraction),v=this.getHeightOfChar(c,0),C=this.getValueOfPropertyAt(c,0,"deltaY");for(let P=0,F=d.length;P<F;P++){let O=this.__charBounds[c][P];T=this.getValueOfPropertyAt(c,P,e),E=this.getValueOfPropertyAt(c,P,Ne),A=this.getValueOfPropertyAt(c,P,_r);let G=this.getHeightOfChar(c,P),L=this.getValueOfPropertyAt(c,P,"deltaY");if(r&&T&&E){let I=this.fontSize*A/1e3;t.save(),t.fillStyle=y,t.translate(O.renderLeft,O.renderTop),t.rotate(O.angle),t.fillRect(-O.kernedWidth/2,l*G+L-a*I,O.kernedWidth,I),t.restore()}else if((T!==g||E!==y||G!==v||A!==R||L!==C)&&m>0){let I=this.fontSize*R/1e3,z=i+p+x;this.direction==="rtl"&&(z=this.width-z-m),g&&y&&R&&(t.fillStyle=y,t.fillRect(z,_+l*v+C-a*I,m,I)),x=O.left,m=O.width,g=T,R=A,y=E,v=G,C=L}else m+=O.kernedWidth}let S=i+p+x;this.direction==="rtl"&&(S=this.width-S-m),t.fillStyle=E;let w=this.fontSize*A/1e3;T&&E&&A&&t.fillRect(S,_+l*v+C-a*w,m-o,w),n+=u}this._removeShadow(t)}_getFontDeclaration(){let{fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:i=this.fontSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=t.includes("'")||t.includes('"')||t.includes(",")||s.genericFonts.includes(t.toLowerCase())?t:'"'.concat(t,'"');return[e,n,"".concat(r?this.CACHE_FONT_SIZE:i,"px"),o].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return Sh(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=new Array(e.length),i=[`
`],r=[];for(let o=0;o<e.length;o++)n[o]=this.graphemeSplit(e[o]),r=r.concat(n[o],i);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return k(k({},super.toObject([...Ug,...t])),{},{styles:a0(this.styles,this.text)},this.path?{path:this.path.toObject()}:{})}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let i=!1,r=!1;if(typeof t=="object")for(let o in t)o==="path"&&this.setPathInfo(),i=i||n.includes(o),r=r||o==="path";else i=n.includes(t),r=t==="path";return r&&this.setPathInfo(),i&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let i=Xi(t,s.ATTRIBUTE_NAMES,n),r=k(k({},e),i),{textAnchor:o=he,textDecoration:a="",dx:l=0,dy:c=0,top:h=0,left:u=0,fontSize:d=Hd,strokeWidth:f=1}=r,p=ve(r,u1),x=new this(jc(t.textContent||"").trim(),k({left:u+l,top:h+c,underline:a.includes("underline"),overline:a.includes("overline"),linethrough:a.includes("line-through"),strokeWidth:0,fontSize:d},p)),m=x.getScaledHeight()/x.height,g=((x.height+x.strokeWidth)*x.lineHeight-x.height)*m,y=x.getScaledHeight()+g,R=0;return o===Wt&&(R=x.getScaledWidth()/2),o===Pe&&(R=x.getScaledWidth()),x.set({left:x.left-R,top:x.top-(y-x.fontSize*(.07+x._fontSizeFraction))/x.lineHeight,strokeWidth:f}),x}static fromObject(t){return this._fromObject(k(k({},t),{},{styles:l0(t.styles||{},t.text)}),{extraParam:"text"})}};V(Ve,"textLayoutProperties",Ng),V(Ve,"cacheProperties",[...Wi,...Ug]),V(Ve,"ownDefaults",Vb),V(Ve,"type","Text"),V(Ve,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),V(Ve,"ATTRIBUTE_NAMES",Ts.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-anchor")),i0(Ve,[class extends Yc{_toSVG(){let s=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(s.textTop,s.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(s){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:s,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:s,withShadow:!0,additionalTransform:go(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg(s){let{textBgRects:t,textSpans:e}=s,n=this.getSvgTextDecoration(this);return[t.join(""),'		<text xml:space="preserve" ','font-family="'.concat(this.fontFamily.replace(h1,"'"),'" '),'font-size="'.concat(this.fontSize,'" '),this.fontStyle?'font-style="'.concat(this.fontStyle,'" '):"",this.fontWeight?'font-weight="'.concat(this.fontWeight,'" '):"",n?'text-decoration="'.concat(n,'" '):"",this.direction==="rtl"?'direction="'.concat(this.direction,'" '):"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",e.join(""),`</text>
`]}_getSVGTextAndBg(s,t){let e=[],n=[],i,r=s;this.backgroundColor&&n.push(...ad(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let o=0,a=this._textLines.length;o<a;o++)i=this._getLineLeftOffset(o),this.direction==="rtl"&&(i+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,t+i,r),this._setSVGTextLineText(e,o,t+i,r),r+=this.getHeightOfLine(o);return{textSpans:e,textBgRects:n}}_createTextCharSpan(s,t,e,n,i){let r=ie.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,s!==s.trim()||!!s.match(c1)),a=o?'style="'.concat(o,'"'):"",l=t.deltaY,c=l?' dy="'.concat(pe(l,r),'" '):"",{angle:h,renderLeft:u,renderTop:d,width:f}=i,p="";if(u!==void 0){let x=f/2;h&&(p=' rotate="'.concat(pe(wi(h),r),'"'));let m=yr({angle:wi(h)});m[4]=u,m[5]=d;let g=new J(-x,0).transform(m);e=g.x,n=g.y}return'<tspan x="'.concat(pe(e,r),'" y="').concat(pe(n,r),'" ').concat(c).concat(p).concat(a,">").concat(o0(s),"</tspan>")}_setSVGTextLineText(s,t,e,n){let i=this.getHeightOfLine(t),r=this.textAlign.includes(yi),o=this._textLines[t],a,l,c,h,u,d="",f=0;n+=i*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,x=o.length-1;p<=x;p++)u=p===x||this.charSpacing||this.path,d+=o[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!u&&this._reSpaceAndTab.test(o[p])&&(u=!0),u||(a=a||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),u=bh(a,l,!0)),u&&(h=this._getStyleDeclaration(t,p),s.push(this._createTextCharSpan(d,h,e,n,c)),d="",a=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(s,t,e,n){let i=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,o,a=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<i.length;h++){let{left:u,width:d,kernedWidth:f}=this.__charBounds[t][h];o=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),o!==c?(c&&s.push(...ad(c,e+l,n,a,r)),l=u,a=d,c=o):a+=f}o&&s.push(...ad(c,e+l,n,a,r))}_getSVGLineTopOffset(s){let t,e=0;for(t=0;t<s;t++)e+=this.getHeightOfLine(t);let n=this.getHeightOfLine(t);return{lineTop:e,offset:(this._fontSizeMult-this._fontSizeFraction)*n/(this.lineHeight*this._fontSizeMult)}}getSvgStyles(s){return"".concat(super.getSvgStyles(s)," text-decoration-thickness: ").concat(pe(this.textDecorationThickness*this.getObjectScaling().y/10,ie.NUM_FRACTION_DIGITS),"%; white-space: pre;")}getSvgSpanStyles(s,t){let{fontFamily:e,strokeWidth:n,stroke:i,fill:r,fontSize:o,fontStyle:a,fontWeight:l,deltaY:c,textDecorationThickness:h,linethrough:u,overline:d,underline:f}=s,p=this.getSvgTextDecoration({underline:f??this.underline,overline:d??this.overline,linethrough:u??this.linethrough}),x=h||this.textDecorationThickness;return[i?Ca(xn,i):"",n?"stroke-width: ".concat(n,"; "):"",e?"font-family: ".concat(e.includes("'")||e.includes('"')?e:"'".concat(e,"'"),"; "):"",o?"font-size: ".concat(o,"px; "):"",a?"font-style: ".concat(a,"; "):"",l?"font-weight: ".concat(l,"; "):"",p?"text-decoration: ".concat(p,"; text-decoration-thickness: ").concat(pe(x*this.getObjectScaling().y/10,ie.NUM_FRACTION_DIGITS),"%; "):"",r?Ca(Ne,r):"",c?"baseline-shift: ".concat(-c,"; "):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(s){return["overline","underline","line-through"].filter((t=>s[t.replace("-","")])).join(" ")}}]),Mt.setClass(Ve),Mt.setSVGClass(Ve);var Ld=class{constructor(t){V(this,"target",void 0),V(this,"__mouseDownInPlace",!1),V(this,"__dragStartFired",!1),V(this,"__isDraggingOver",!1),V(this,"__dragStartSelection",void 0),V(this,"__dragImageDisposer",void 0),V(this,"_dispose",void 0),this.target=t;let e=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{e.forEach((n=>n())),this._dispose=void 0}}isPointerOverSelection(t){let e=this.target,n=e.getSelectionStartFromPointer(t);return e.isEditing&&n>=e.selectionStart&&n<=e.selectionEnd&&e.selectionStart<e.selectionEnd}start(t){return this.__mouseDownInPlace=this.isPointerOverSelection(t)}isActive(){return this.__mouseDownInPlace}end(t){let e=this.isActive();return e&&!this.__dragStartFired&&(this.target.setCursorByClick(t),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,e}getDragStartSelection(){return this.__dragStartSelection}setDragImage(t,e){var n;let{selectionStart:i,selectionEnd:r}=e,o=this.target,a=o.canvas,l=new J(o.flipX?-1:1,o.flipY?-1:1),c=o._getCursorBoundaries(i),h=new J(c.left+c.leftOffset,c.top+c.topOffset).multiply(l).transform(o.calcTransformMatrix()),u=a.getScenePoint(t).subtract(h),d=o.getCanvasRetinaScaling(),f=o.getBoundingRect(),p=h.subtract(new J(f.left,f.top)),x=a.viewportTransform,m=p.add(u).transform(x,!0),g=o.backgroundColor,y=af(o.styles);o.backgroundColor="";let R={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};o.setSelectionStyles(R,0,i),o.setSelectionStyles(R,r,o.text.length),o.dirty=!0;let T=o.toCanvasElement({enableRetinaScaling:a.enableRetinaScaling,viewportTransform:!0});o.backgroundColor=g,o.styles=y,o.dirty=!0,rh(T,{position:"fixed",left:"".concat(-T.width,"px"),border:_n,width:"".concat(T.width/d,"px"),height:"".concat(T.height/d,"px")}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{T.remove()},ei(t.target||this.target.hiddenTextarea).body.appendChild(T),(n=t.dataTransfer)===null||n===void 0||n.setDragImage(T,m.x,m.y)}onDragStart(t){this.__dragStartFired=!0;let e=this.target,n=this.isActive();if(n&&t.dataTransfer){let i=this.__dragStartSelection={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd},r=e._text.slice(i.selectionStart,i.selectionEnd).join(""),o=k({text:e.text,value:r},i);t.dataTransfer.setData("text/plain",r),t.dataTransfer.setData("application/fabric",JSON.stringify({value:r,styles:e.getSelectionStyles(i.selectionStart,i.selectionEnd,!0)})),t.dataTransfer.effectAllowed="copyMove",this.setDragImage(t,o)}return e.abortCursorAnimation(),n}canDrop(t){if(this.target.editable&&!this.target.getActiveControl()&&!t.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let e=this.target.getSelectionStartFromPointer(t),n=this.__dragStartSelection;return e<n.selectionStart||e>n.selectionEnd}return!0}return!1}targetCanDrop(t){return this.target.canDrop(t)}dragEnterHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n&&(this.__isDraggingOver=!0)}dragOverHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n?this.__isDraggingOver=!0:this.__isDraggingOver&&!n&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(e.preventDefault(),t.canDrop=!0,t.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(t){var e;let{e:n}=t,i=n.defaultPrevented;this.__isDraggingOver=!1,n.preventDefault();let r=(e=n.dataTransfer)===null||e===void 0?void 0:e.getData("text/plain");if(r&&!i){let o=this.target,a=o.canvas,l=o.getSelectionStartFromPointer(n),{styles:c}=n.dataTransfer.types.includes("application/fabric")?JSON.parse(n.dataTransfer.getData("application/fabric")):{},h=r[Math.max(0,r.length-1)],u=0;if(this.__dragStartSelection){let d=this.__dragStartSelection.selectionStart,f=this.__dragStartSelection.selectionEnd;l>d&&l<=f?l=d:l>f&&(l-=f-d),o.removeChars(d,f),delete this.__dragStartSelection}o._reNewline.test(h)&&(o._reNewline.test(o._text[l])||l===o._text.length)&&(r=r.trimEnd()),t.didDrop=!0,t.dropTarget=o,o.insertChars(r,c,l),a.setActiveObject(o),o.enterEditing(n),o.selectionStart=Math.min(l+u,o._text.length),o.selectionEnd=Math.min(o.selectionStart+r.length,o._text.length),o.hiddenTextarea.value=o.text,o._updateTextarea(),o.hiddenTextarea.focus(),o.fire(kc,{index:l+u,action:"drop"}),a.fire("text:changed",{target:o}),a.contextTopDirty=!0,a.requestRenderAll()}}dragEndHandler(t){let{e}=t;if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var n;let i=this.target,r=this.target.canvas,{selectionStart:o,selectionEnd:a}=this.__dragStartSelection,l=((n=e.dataTransfer)===null||n===void 0?void 0:n.dropEffect)||_n;l===_n?(i.selectionStart=o,i.selectionEnd=a,i._updateTextarea(),i.hiddenTextarea.focus()):(i.clearContextTop(),l==="move"&&(i.removeChars(o,a),i.selectionStart=i.selectionEnd=o,i.hiddenTextarea&&(i.hiddenTextarea.value=i.text),i._updateTextarea(),i.fire(kc,{index:o,action:"dragend"}),r.fire("text:changed",{target:i}),r.requestRenderAll()),i.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},og=/[ \n\.,;!\?\-]/,Fd=class extends Ve{constructor(){super(...arguments),V(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(t){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(t)}_animateCursor(t){let{toValue:e,duration:n,delay:i,onComplete:r}=t;return sf({startValue:this._currentCursorOpacity,endValue:e,duration:n,delay:i,onComplete:r,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:o=>{this._currentCursorOpacity=o,this.renderCursorOrSelection()}})}_tick(t){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(t||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var t;(t=this._currentTickCompleteState)===null||t===void 0||t.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(t){this.abortCursorAnimation(),this._tick(t?0:this.cursorDelay)}abortCursorAnimation(){let t=!1;[this._currentTickState,this._currentTickCompleteState].forEach((e=>{e&&!e.isDone()&&(t=!0,e.abort())})),this._currentCursorOpacity=1,t&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some((t=>!t||t.isDone()))&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(t){let e=0,n=t-1;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n--;for(;/\S/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findWordBoundaryRight(t){let e=0,n=t;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n++;for(;/\S/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}findLineBoundaryLeft(t){let e=0,n=t-1;for(;!/\n/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findLineBoundaryRight(t){let e=0,n=t;for(;!/\n/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}searchWordBoundary(t,e){let n=this._text,i=t>0&&this._reSpace.test(n[t])&&(e===-1||!Wd.test(n[t-1]))?t-1:t,r=n[i];for(;i>0&&i<n.length&&!og.test(r);)i+=e,r=n[i];return e===-1&&og.test(r)&&i++,i}selectWord(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.searchWordBoundary(t,-1),i=Math.max(n,this.searchWordBoundary(t,1));this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(t){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",t?{e:t}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:t}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(t){if(this.getActiveControl())return;let e=this.hiddenTextarea;ei(e).activeElement!==e&&e.focus();let n=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;(n===this.__selectionStartOnMouseDown&&i!==r||i!==n&&r!==n)&&(n>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=n):(this.selectionStart=n,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(t,e,n){let i=n.slice(0,t),r=this.graphemeSplit(i).length;if(t===e)return{selectionStart:r,selectionEnd:r};let o=n.slice(t,e);return{selectionStart:r,selectionEnd:r+this.graphemeSplit(o).length}}fromGraphemeToStringSelection(t,e,n){let i=n.slice(0,t).join("").length;return t===e?{selectionStart:i,selectionEnd:i}:{selectionStart:i,selectionEnd:i+n.slice(t,e).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){if(!this.hiddenTextarea)return;this.cursorOffsetCache={};let t=this.hiddenTextarea;this.text=t.value,this.set("dirty",!0),this.initDimensions(),this.setCoords();let e=this.fromStringToGraphemeSelection(t.selectionStart,t.selectionEnd,t.value);this.selectionEnd=this.selectionStart=e.selectionEnd,this.inCompositionMode||(this.selectionStart=e.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex,o=this.getValueOfPropertyAt(i,r,"fontSize")*this.lineHeight,a=e.leftOffset,l=this.getCanvasRetinaScaling(),c=this.canvas.upperCanvasEl,h=c.width/l,u=c.height/l,d=h-o,f=u-o,p=new J(e.left+a,e.top+e.topOffset+o).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new J(c.clientWidth/h,c.clientHeight/u));return p.x<0&&(p.x=0),p.x>d&&(p.x=d),p.y<0&&(p.y=0),p.y>f&&(p.y=f),p.x+=this.canvas._offset.left,p.y+=this.canvas._offset.top,{left:"".concat(p.x,"px"),top:"".concat(p.y,"px"),fontSize:"".concat(o,"px"),charHeight:o}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}_exitEditing(){let t=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,t&&(t.blur&&t.blur(),t.parentNode&&t.parentNode.removeChild(t)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop()}exitEditingImpl(){this._exitEditing(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let t=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),t&&this.fire(zc),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let t in this.styles)this._textLines[t]||delete this.styles[t]}removeStyleFromTo(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t,!0),{lineIndex:r,charIndex:o}=this.get2DCursorLocation(e,!0);if(n!==r){if(this.styles[n])for(let a=i;a<this._unwrappedTextLines[n].length;a++)delete this.styles[n][a];if(this.styles[r])for(let a=o;a<this._unwrappedTextLines[r].length;a++){let l=this.styles[r][a];l&&(this.styles[n]||(this.styles[n]={}),this.styles[n][i+a-o]=l)}for(let a=n+1;a<=r;a++)delete this.styles[a];this.shiftLineStyles(r,n-r)}else if(this.styles[n]){let a=this.styles[n],l=o-i;for(let c=i;c<o;c++)delete a[c];for(let c in this.styles[n]){let h=parseInt(c,10);h>=o&&(a[h-l]=a[c],delete a[c])}}}shiftLineStyles(t,e){let n=Object.assign({},this.styles);for(let i in this.styles){let r=parseInt(i,10);r>t&&(this.styles[r+e]=n[r],n[r-e]||delete this.styles[r])}}insertNewlineStyleObject(t,e,n,i){let r={},o=this._unwrappedTextLines[t].length,a=o===e,l=!1;n||(n=1),this.shiftLineStyles(t,n);let c=this.styles[t]?this.styles[t][e===0?e:e-1]:void 0;for(let u in this.styles[t]){let d=parseInt(u,10);d>=e&&(l=!0,r[d-e]=this.styles[t][u],a&&e===0||delete this.styles[t][u])}let h=!1;for(l&&!a&&(this.styles[t+n]=r,h=!0),(h||o>e)&&n--;n>0;)i&&i[n-1]?this.styles[t+n]={0:k({},i[n-1])}:c?this.styles[t+n]={0:k({},c)}:delete this.styles[t+n],n--;this._forceClearCache=!0}insertCharStyleObject(t,e,n,i){this.styles||(this.styles={});let r=this.styles[t],o=r?k({},r):{};n||(n=1);for(let l in o){let c=parseInt(l,10);c>=e&&(r[c+n]=o[c],o[c-n]||delete r[c])}if(this._forceClearCache=!0,i){for(;n--;)Object.keys(i[n]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+n]=k({},i[n]));return}if(!r)return;let a=r[e?e-1:1];for(;a&&n--;)this.styles[t][e+n]=k({},a)}insertNewStyleBlock(t,e,n){let i=this.get2DCursorLocation(e,!0),r=[0],o,a=0;for(let l=0;l<t.length;l++)t[l]===`
`?(a++,r[a]=0):r[a]++;for(r[0]>0&&(this.insertCharStyleObject(i.lineIndex,i.charIndex,r[0],n),n=n&&n.slice(r[0]+1)),a&&this.insertNewlineStyleObject(i.lineIndex,i.charIndex+r[0],a),o=1;o<a;o++)r[o]>0?this.insertCharStyleObject(i.lineIndex+o,0,r[o],n):n&&this.styles[i.lineIndex+o]&&n[0]&&(this.styles[i.lineIndex+o][0]=n[0]),n=n&&n.slice(r[o]+1);r[o]>0&&this.insertCharStyleObject(i.lineIndex+o,0,r[o],n)}removeChars(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t+1;this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;i>n&&this.removeStyleFromTo(n,i);let r=this.graphemeSplit(t);this.insertNewStyleBlock(r,n,e),this._text=[...this._text.slice(0,n),...r,...this._text.slice(i)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(t,e,n){n<=t?(e===t?this._selectionDirection=he:this._selectionDirection===Pe&&(this._selectionDirection=he,this.selectionEnd=t),this.selectionStart=n):n>t&&n<e?this._selectionDirection===Pe?this.selectionEnd=n:this.selectionStart=n:(e===t?this._selectionDirection=Pe:this._selectionDirection===he&&(this._selectionDirection=Pe,this.selectionStart=e),this.selectionEnd=n)}},Nd=class extends Fd{initHiddenTextarea(){let t=this.canvas&&ei(this.canvas.getElement())||yo(),e=t.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map((o=>{let[a,l]=o;return e.setAttribute(a,l)}));let{top:n,left:i,fontSize:r}=this._calcTextareaPosition();e.style.cssText="position: absolute; top: ".concat(n,"; left: ").concat(i,"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r,";"),(this.hiddenTextareaContainer||t.body).appendChild(e),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map((o=>{let[a,l]=o;return e.addEventListener(a,this[l].bind(this))})),this.hiddenTextarea=e}blur(){this.abortCursorAnimation()}onKeyDown(t){if(!this.isEditing)return;let e=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(t.keyCode in e)this[e[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown)||!t.ctrlKey&&!t.metaKey)return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(t){let e=this.fromPaste,{value:n,selectionStart:i,selectionEnd:r}=this.hiddenTextarea;if(this.fromPaste=!1,t&&t.stopPropagation(),!this.isEditing)return;let o=()=>{this.updateFromTextArea(),this.fire(kc),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void o();let a=this._splitTextIntoLines(n).graphemeText,l=this._text.length,c=a.length,h=this.selectionStart,u=this.selectionEnd,d=h!==u,f,p,x,m,g=c-l,y=this.fromStringToGraphemeSelection(i,r,n),R=h>y.selectionStart;d?(p=this._text.slice(h,u),g+=u-h):c<l&&(p=R?this._text.slice(u+g,u):this._text.slice(h,h-g));let T=a.slice(y.selectionEnd-g,y.selectionEnd);if(p&&p.length&&(T.length&&(f=this.getSelectionStyles(h,h+1,!1),f=T.map((()=>f[0]))),d?(x=h,m=u):R?(x=u-p.length,m=u):(x=u,m=u+p.length),this.removeStyleFromTo(x,m)),T.length){let{copyPasteData:E}=bi();e&&T.join("")===E.copiedText&&!ie.disableStyleCopyPaste&&(f=E.copiedTextStyle),this.insertNewStyleBlock(T,h,f)}o()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate(t){let{target:e}=t,{selectionStart:n,selectionEnd:i}=e;this.compositionStart=n,this.compositionEnd=i,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:t}=bi();t.copiedText=this.getSelectedText(),ie.disableStyleCopyPaste?t.copiedTextStyle=void 0:t.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(t,e){let n,i=this._getLineLeftOffset(t);return e>0&&(n=this.__charBounds[t][e-1],i+=n.left+n.width),i}getDownCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===this._textLines.length-1||t.metaKey||t.keyCode===34)return this._text.length-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r+1,a);return this._textLines[r].slice(o).length+l+1+this.missingNewlineOffset(r)}_getSelectionForOffset(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart}getUpCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===0||t.metaKey||t.keyCode===33)return-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r-1,a),c=this._textLines[r].slice(0,o),h=this.missingNewlineOffset(r-1);return-this._textLines[r-1].length+l-c.length+(1-h)}_getIndexOnLine(t,e){let n=this._textLines[t],i,r,o=this._getLineLeftOffset(t),a=0;for(let l=0,c=n.length;l<c;l++)if(i=this.__charBounds[t][l].width,o+=i,o>e){r=!0;let h=o-i,u=o,d=Math.abs(h-e);a=Math.abs(u-e)<d?l:l-1;break}return r||(a=n.length-1),a}moveCursorDown(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)}moveCursorUp(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",t)}_moveCursorUpOrDown(t,e){let n=this["get".concat(t,"CursorOffset")](e,this._selectionDirection===Pe);if(e.shiftKey?this.moveCursorWithShift(n):this.moveCursorWithoutShift(n),n!==0){let i=this.text.length;this.selectionStart=xr(0,this.selectionStart,i),this.selectionEnd=xr(0,this.selectionEnd,i),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(t){let e=this._selectionDirection===he?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),t!==0}moveCursorWithoutShift(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),t!==0}moveCursorLeft(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",t)}_move(t,e,n){let i;if(t.altKey)i=this["findWordBoundary".concat(n)](this[e]);else{if(!t.metaKey&&t.keyCode!==35&&t.keyCode!==36)return this[e]+=n==="Left"?-1:1,!0;i=this["findLineBoundary".concat(n)](this[e])}return i!==void 0&&this[e]!==i&&(this[e]=i,!0)}_moveLeft(t,e){return this._move(t,e,"Left")}_moveRight(t,e){return this._move(t,e,"Right")}moveCursorLeftWithoutShift(t){let e=!0;return this._selectionDirection=he,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e}moveCursorLeftWithShift(t){return this._selectionDirection===Pe&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):this.selectionStart!==0?(this._selectionDirection=he,this._moveLeft(t,"selectionStart")):void 0}moveCursorRight(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)}_moveCursorLeftOrRight(t,e){let n="moveCursor".concat(t).concat(e.shiftKey?"WithShift":"WithoutShift");this._currentCursorOpacity=1,this[n](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(t){return this._selectionDirection===he&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection=Pe,this._moveRight(t,"selectionEnd")):void 0}moveCursorRightWithoutShift(t){let e=!0;return this._selectionDirection=Pe,this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e}},ag=s=>!!s.button,Ud=class extends Nd{constructor(){super(...arguments),V(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new Ld(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(t){return this.draggableTextDelegate.onDragStart(t)}canDrop(t){return this.draggableTextDelegate.canDrop(t)}doubleClickHandler(t){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}tripleClickHandler(t){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}_mouseDownHandler(t){let{e,alreadySelected:n}=t;this.canvas&&this.editable&&!ag(e)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(e)||(this.canvas.textEditingManager.register(this),n&&(this.inCompositionMode=!1,this.setCursorByClick(e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=n||this.isEditing)))}mouseUpHandler(t){let{e,transform:n}=t,i=this.draggableTextDelegate.end(e);if(this.canvas){this.canvas.textEditingManager.unregister(this);let r=this.canvas._activeObject;if(r&&r!==this)return}!this.editable||this.group&&!this.group.interactive||n&&n.actionPerformed||ag(e)||i||this.selected&&!this.getActiveControl()&&(this.enterEditing(e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(t){let e=this.getSelectionStartFromPointer(t),n=this.selectionStart,i=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(n,i,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(t){let e=this.canvas.getScenePoint(t).transform(An(this.calcTransformMatrix())).add(new J(-this._getLeftOffset(),-this._getTopOffset())),n=0,i=0,r=0;for(let c=0;c<this._textLines.length&&n<=e.y;c++)n+=this.getHeightOfLine(c),r=c,c>0&&(i+=this._textLines[c-1].length+this.missingNewlineOffset(c-1));let o=Math.abs(this._getLineLeftOffset(r)),a=this._textLines[r].length,l=this.__charBounds[r];for(let c=0;c<a;c++){let h=o+l[c].kernedWidth;if(e.x<=h){Math.abs(e.x-h)<=Math.abs(e.x-o)&&i++;break}o=h,i++}return Math.min(this.flipX?a-i:i,this._text.length)}},Rc="moveCursorUp",Pc="moveCursorDown",Dc="moveCursorLeft",Ic="moveCursorRight",Oc="exitEditing",lg=(s,t)=>{let e=t.getRetinaScaling();s.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;s.transform(n[0],n[1],n[2],n[3],n[4],n[5])},d1=k({selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:Oc,27:Oc,33:Rc,34:Pc,35:Ic,36:Dc,37:Dc,38:Rc,39:Ic,40:Pc},keysMapRtl:{9:Oc,27:Oc,33:Rc,34:Pc,35:Dc,36:Ic,37:Ic,38:Rc,39:Dc,40:Pc},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"}},{_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1}),vs=class s extends Ud{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,k(k({},s.ownDefaults),e)),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof vo&&this.canvas.textEditingManager.remove(this),e instanceof vo&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart||0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionEnd,n=arguments.length>2?arguments[2]:void 0;return super.getSelectionStyles(t,e,n)}setSelectionStyles(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionStart||0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.selectionEnd;return super.setSelectionStyles(t,e,n)}get2DCursorLocation(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0;return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),i=n.length>0,r,o=t;if(i){r=Pn(t.canvas),o=r.getContext("2d"),lg(o,this.canvas);let a=this.calcTransformMatrix();o.transform(a[0],a[1],a[2],a[3],a[4],a[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(o,e):this.renderCursor(o,e),i)for(let a of n){let l=a.clipPath,c=Pn(t.canvas),h=c.getContext("2d");if(lg(h,this.canvas),!l.absolutePositioned){let u=a.calcTransformMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(o,l,c)}i&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0,n=this._getLeftOffset(),i=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:i,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:i,lineIndex:r}=this.get2DCursorLocation(t);for(let c=0;c<r;c++)e+=this.getHeightOfLine(c);let o=this._getLineLeftOffset(r),a=this.__charBounds[r][i];a&&(n=a.left),this.charSpacing!==0&&i===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let l={top:e,left:o+(n>0?n:0)};return this.direction==="rtl"&&(this.textAlign===Pe||this.textAlign===yi||this.textAlign===ba?l.left*=-1:this.textAlign===he||this.textAlign===qc?l.left=o-(n>0?n:0):this.textAlign!==Wt&&this.textAlign!==Ma||(l.left=o-(n>0?n:0))),l}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,o=this.getValueOfPropertyAt(i,r,"fontSize"),a=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/a,c=this.getValueOfPropertyAt(i,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(i)/this.lineHeight-o*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(i,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:o}}_renderCursor(t,e,n){let{color:i,opacity:r,left:o,top:a,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=i,t.globalAlpha=r,t.fillRect(o,a,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let i=e.selectionStart,r=e.selectionEnd,o=this.textAlign.includes(yi),a=this.get2DCursorLocation(i),l=this.get2DCursorLocation(r),c=a.lineIndex,h=l.lineIndex,u=a.charIndex<0?0:a.charIndex,d=l.charIndex<0?0:l.charIndex;for(let f=c;f<=h;f++){let p=this._getLineLeftOffset(f)||0,x=this.getHeightOfLine(f),m=0,g=0,y=0;if(f===c&&(g=this.__charBounds[c][u].left),f>=c&&f<h)y=o&&!this.isEndOfWrapping(f)?this.width:this.getLineWidth(f)||5;else if(f===h)if(d===0)y=this.__charBounds[h][d].left;else{let _=this._getWidthOfCharSpacing();y=this.__charBounds[h][d-1].left+this.__charBounds[h][d-1].width-_}m=x,(this.lineHeight<1||f===h&&this.lineHeight>1)&&(x/=this.lineHeight);let R=n.left+p+g,T=x,E=0,A=y-g;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",T=1,E=x):t.fillStyle=this.selectionColor,this.direction==="rtl"&&(this.textAlign===Pe||this.textAlign===yi||this.textAlign===ba?R=this.width-R-A:this.textAlign===he||this.textAlign===qc?R=n.left+p-y:this.textAlign!==Wt&&this.textAlign!==Ma||(R=n.left+p-y)),t.fillRect(R,n.top+n.topOffset+E,A,T),n.topOffset+=m}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,Ne)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};V(vs,"ownDefaults",d1),V(vs,"type","IText"),Mt.setClass(vs),Mt.setClass(vs,"i-text");var co=class s extends vs{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(t,k(k({},s.ownDefaults),e))}static createControls(){return{controls:n0()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes(yi)&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,i=0,r={};for(let o=0;o<t.graphemeLines.length;o++)t.graphemeText[i]===`
`&&o>0?(n=0,i++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[i])&&o>0&&(n++,i++),r[o]={line:e,offset:n},i+=t.graphemeLines[o].length,n+=t.graphemeLines[o].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n=0,i=t+1,r=!1,o=this._styleMap[t],a=this._styleMap[t+1];o&&(t=o.line,n=o.offset),a&&(i=a.line,r=i===t,e=a.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let u=parseInt(h,10);if(u>=n&&(!r||u<e))for(let d in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let i=this._styleMap[t];super._setStyleDeclaration(i.line,i.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),i=[];for(let r=0;r<n.wordsData.length;r++)i.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,i}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",i=0;return{wordsData:t.map(((r,o)=>{let a=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map((c=>{let h=e?[c]:this.graphemeSplit(c),u=this._measureWord(h,o,a);return i=Math.max(u,i),a+=h.length+n.length,{word:h,width:u}}))})),largestWordWidth:i}}_measureWord(t,e){let n,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=0;for(let o=0,a=t.length;o<a;o++)r+=this._getGraphemeBox(t[o],e,o+i,n,!0).kernedWidth,n=t[o];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,n){let{largestWordWidth:i,wordsData:r}=n,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=this._getWidthOfCharSpacing(),l=this.splitByGrapheme,c=[],h=l?"":" ",u=0,d=[],f=0,p=0,x=!0;e-=o;let m=Math.max(e,i,this.dynamicMinWidth),g=r[t],y;for(f=0,y=0;y<g.length;y++){let{word:R,width:T}=g[y];f+=R.length,u+=p+T-a,u>m&&!x?(c.push(d),d=[],u=T,x=!0):u+=a,x||l||d.push(h),d=d.concat(R),p=l?0:this._measureWord([h],t,f),f++,x=!1}return y&&c.push(d),i+o>this.dynamicMinWidth&&(this.dynamicMinWidth=i-a+o),c}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?this.isEndOfWrapping(t)?1:0:1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=n[r].join("");return e.lines=i,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let i=this._styleMap[e].line;t.set("".concat(i),!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject(["minWidth","splitByGrapheme",...t])}};V(co,"type","Textbox"),V(co,"textLayoutProperties",[...vs.textLayoutProperties,"width"]),V(co,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),Mt.setClass(co);var lh=class extends xo{shouldPerformLayout(t){return!!t.target.clipPath&&super.shouldPerformLayout(t)}shouldLayoutClipPath(){return!1}calcLayoutResult(t,e){let{target:n}=t,{clipPath:i,group:r}=n;if(!i||!this.shouldPerformLayout(t))return;let{width:o,height:a}=Si(h0(n,i)),l=new J(o,a);if(i.absolutePositioned)return{center:Gi(i.getRelativeCenterPoint(),void 0,r?r.calcTransformMatrix():void 0),size:l};{let c=i.getRelativeCenterPoint().transform(n.calcOwnMatrix(),!0);if(this.shouldPerformLayout(t)){let{center:h=new J,correction:u=new J}=this.calcBoundingBox(e,t)||{};return{center:h.add(c),correction:u.subtract(c),size:l}}return{center:n.getRelativeCenterPoint().add(c),size:l}}}};V(lh,"type","clip-path"),Mt.setClass(lh);var ch=class extends xo{getInitialSize(t,e){let{target:n}=t,{size:i}=e;return new J(n.width||i.x,n.height||i.y)}};V(ch,"type","fixed"),Mt.setClass(ch);var Bd=class extends vr{subscribeTargets(t){let e=t.target;t.targets.reduce(((n,i)=>(i.parent&&n.add(i.parent),n)),new Set).forEach((n=>{n.layoutManager.subscribeTargets({target:n,targets:[e]})}))}unsubscribeTargets(t){let e=t.target,n=e.getObjects();t.targets.reduce(((i,r)=>(r.parent&&i.add(r.parent),i)),new Set).forEach((i=>{!n.some((r=>r.parent===i))&&i.layoutManager.unsubscribeTargets({target:i,targets:[e]})}))}},ho=class s extends ys{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(e);let{left:n,top:i,layoutManager:r}=e;this.groupInit(t,{left:n,top:i,layoutManager:r??new Bd})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.multiSelectionStacking==="selection-order"?this.add(...e):e.forEach((i=>{let r=this._objects.findIndex((a=>a.isInFrontOf(i))),o=r===-1?this.size():r;this.insertAt(o,i)}))}canEnterGroup(t){return this.getObjects().some((e=>e.isDescendantOf(t)||t.isDescendantOf(e)))?(Ss("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach((i=>{let{parent:r}=i;r&&n.add(r)})),t===cf?n.forEach((i=>{i._onAfterObjectsChange(nh,e)})):n.forEach((i=>{i._set("dirty",!0)}))}onDeselect(){return this.removeAll(),!1}toString(){return"#<ActiveSelection: (".concat(this.complexity(),")>")}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let i=k(k({hasControls:!1},n),{},{forActiveSelection:!0});for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,i);super._renderControls(t,e),t.restore()}};V(ho,"type","ActiveSelection"),V(ho,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),Mt.setClass(ho),Mt.setClass(ho,"activeSelection");var kd=class{constructor(){V(this,"resources",{})}applyFilters(t,e,n,i,r){let o=r.getContext("2d");if(!o)return;o.drawImage(e,0,0,n,i);let a={sourceWidth:n,sourceHeight:i,imageData:o.getImageData(0,0,n,i),originalEl:e,originalImageData:o.getImageData(0,0,n,i),canvasEl:r,ctx:o,filterBackend:this};t.forEach((c=>{c.applyTo(a)}));let{imageData:l}=a;return l.width===n&&l.height===i||(r.width=l.width,r.height=l.height),o.putImageData(l,0,0),a}},hh=class{constructor(){let{tileSize:t=ie.textureSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};V(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),V(this,"resources",{}),this.tileSize=t,this.setupGLContext(t,t),this.captureGPUInfo()}setupGLContext(t,e){this.dispose(),this.createWebGLCanvas(t,e)}createWebGLCanvas(t,e){let n=Pn({width:t,height:e}),i=n.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});i&&(i.clearColor(0,0,0,0),this.canvas=n,this.gl=i)}applyFilters(t,e,n,i,r,o){let a=this.gl,l=r.getContext("2d");if(!a||!l)return;let c;o&&(c=this.getCachedTexture(o,e));let h={originalWidth:e.width||e.naturalWidth||0,originalHeight:e.height||e.naturalHeight||0,sourceWidth:n,sourceHeight:i,destinationWidth:n,destinationHeight:i,context:a,sourceTexture:this.createTexture(a,n,i,c?void 0:e),targetTexture:this.createTexture(a,n,i),originalTexture:c||this.createTexture(a,n,i,c?void 0:e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:r},u=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,u),t.forEach((d=>{d&&d.applyTo(h)})),(function(d){let f=d.targetCanvas,p=f.width,x=f.height,m=d.destinationWidth,g=d.destinationHeight;p===m&&x===g||(f.width=m,f.height=g)})(h),this.copyGLTo2D(a,h),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(h.sourceTexture),a.deleteTexture(h.targetTexture),a.deleteFramebuffer(u),l.setTransform(1,0,0,1,0,0),h}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(t,e,n,i,r){let{NEAREST:o,TEXTURE_2D:a,RGBA:l,UNSIGNED_BYTE:c,CLAMP_TO_EDGE:h,TEXTURE_MAG_FILTER:u,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:f,TEXTURE_WRAP_T:p}=t,x=t.createTexture();return t.bindTexture(a,x),t.texParameteri(a,u,r||o),t.texParameteri(a,d,r||o),t.texParameteri(a,f,h),t.texParameteri(a,p,h),i?t.texImage2D(a,0,l,l,c,i):t.texImage2D(a,0,l,e,n,0,l,c,null),x}getCachedTexture(t,e,n){let{textureCache:i}=this;if(i[t])return i[t];{let r=this.createTexture(this.gl,e.width,e.height,e,n);return r&&(i[t]=r),r}}evictCachesForKey(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])}copyGLTo2D(t,e){let n=t.canvas,i=e.targetCanvas,r=i.getContext("2d");if(!r)return;r.translate(0,i.height),r.scale(1,-1);let o=n.height-i.height;r.drawImage(n,0,o,i.width,i.height,0,0,i.width,i.height)}copyGLTo2DPutImageData(t,e){let n=e.targetCanvas.getContext("2d"),i=e.destinationWidth,r=e.destinationHeight,o=i*r*4;if(!n)return;let a=new Uint8Array(this.imageBuffer,0,o),l=new Uint8ClampedArray(this.imageBuffer,0,o);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,a);let c=new ImageData(l,i,r);n.putImageData(c,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let t=this.gl,e={renderer:"",vendor:""};if(!t)return e;let n=t.getExtension("WEBGL_debug_renderer_info");if(n){let i=t.getParameter(n.UNMASKED_RENDERER_WEBGL),r=t.getParameter(n.UNMASKED_VENDOR_WEBGL);i&&(e.renderer=i.toLowerCase()),r&&(e.vendor=r.toLowerCase())}return this.gpuInfo=e,e}},cd;function f1(){let{WebGLProbe:s}=bi();return s.queryWebGL(Mi()),ie.enableGLFiltering&&s.isSupported(ie.textureSize)?new hh({tileSize:ie.textureSize}):new kd}function hd(){return!cd&&(!(arguments.length>0&&arguments[0]!==void 0)||arguments[0])&&(cd=f1()),cd}var p1=["filters","resizeFilter","src","crossOrigin","type"],P0=["cropX","cropY"],ln=class s extends Ge{static getDefaults(){return k(k({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),V(this,"_lastScaleX",1),V(this,"_lastScaleY",1),V(this,"_filterScalingX",1),V(this,"_filterScalingY",1),this.filters=[],Object.assign(this,s.ownDefaults),this.setOptions(e),this.cacheKey="texture".concat(Ms()),this.setElement(typeof t=="string"?(this.canvas&&ei(this.canvas.getElement())||yo()).getElementById(t):t,e)}getElement(){return this._element}setElement(t){var e;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._element=t,this._originalElement=t,this._setWidthHeight(n),(e=t.classList)===null||e===void 0||e.add(s.CSS_CANVAS),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=hd(!1);e instanceof hh&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach((t=>{let e=this[t];e&&bi().dispose(e),this[t]=void 0}))}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return this.filters.forEach((n=>{n&&e.push(n.toObject())})),k(k({},super.toObject([...P0,...t])),{},{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e},this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{})}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,i=-this.height/2,r=[],o=[],a="",l="";if(!e)return[];if(this.hasCrop()){let c=Ms();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+i+'" width="'+this.width+'" height="'+this.height+`" />
`,`</clipPath>
`),a=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",'xlink:href="'.concat(this.getSvgSrc(!0),'" x="').concat(n-this.cropX,'" y="').concat(i-this.cropY,'" width="').concat(e.width||e.naturalWidth,'" height="').concat(e.height||e.naturalHeight,'"').concat(l).concat(a,`></image>
`)),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,o=['	<rect x="'.concat(n,'" y="').concat(i,'" width="').concat(this.width,'" height="').concat(this.height,'" style="').concat(this.getSvgStyles(),`" />
`)],this.fill=c}return r=this.paintFirst!==Ne?r.concat(o,t):r.concat(t,o),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t){let{crossOrigin:e,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Sa(t,{crossOrigin:e,signal:n}).then((i=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(i)}))}toString(){return'#<Image: { src: "'.concat(this.getSrc(),'" }>')}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),i=n.x,r=n.y,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||i>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=i,void(this._lastScaleY=r);let a=Pn(o),{width:l,height:c}=o;this._element=a,this._lastScaleX=t.scaleX=i,this._lastScaleY=t.scaleY=r,hd().applyFilters([t],o,l,c,this._element),this._filterScalingX=a.width/this._originalElement.width,this._filterScalingY=a.height/this._originalElement.height}applyFilters(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.filters||[];if(t=t.filter((r=>r&&!r.isNeutralState())),this.set("dirty",!0),this.removeTexture("".concat(this.cacheKey,"_filtered")),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,i=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=Pn({width:n,height:i});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,i),this._lastScaleX=1,this._lastScaleY=1);hd().applyFilters(t,this._originalElement,n,i,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,i=this._filterScalingY,r=this.width,o=this.height,a=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,u=a*n,d=l*i,f=Math.min(r*n,c-u),p=Math.min(o*i,h-d),x=-r/2,m=-o/2,g=Math.min(r,c/n-a),y=Math.min(o,h/i-l);e&&t.drawImage(e,u,d,f,p,x,m,g,y)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight(){let{width:t,height:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=Og(this.preserveAspectRatio||""),e=this.width,n=this.height,i={width:e,height:n},r,o=this._element.width,a=this._element.height,l=1,c=1,h=0,u=0,d=0,f=0;return!t||t.alignX===_n&&t.alignY===_n?(l=e/o,c=n/a):(t.meetOrSlice==="meet"&&(l=c=d0(this._element,i),r=(e-o*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-a*c)/2,t.alignY==="Min"&&(u=-r),t.alignY==="Max"&&(u=r)),t.meetOrSlice==="slice"&&(l=c=f0(this._element,i),r=o-e/l,t.alignX==="Mid"&&(d=r/2),t.alignX==="Max"&&(d=r),r=a-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),o=e/l,a=n/c)),{width:o,height:a,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:u,cropX:d,cropY:f}}static fromObject(t,e){let{filters:n,resizeFilter:i,src:r,crossOrigin:o,type:a}=t,l=ve(t,p1);return Promise.all([Sa(r,k(k({},e),{},{crossOrigin:o})),n&&mo(n,e),i&&mo([i],e),Ia(l,e)]).then((c=>{let[h,u=[],[d]=[],f={}]=c;return new this(h,k(k({},l),{},{src:r,filters:u,resizeFilter:d},f))}))}static fromURL(t){let{crossOrigin:e=null,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return Sa(t,{crossOrigin:e,signal:n}).then((r=>new this(r,i)))}static async fromElement(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=Xi(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(i["xlink:href"]||i.href,e,i).catch((r=>(Ss("log","Unable to parse Image",r),null)))}};V(ln,"type","Image"),V(ln,"cacheProperties",[...Wi,...P0]),V(ln,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),V(ln,"CSS_CANVAS","canvas-img"),V(ln,"ATTRIBUTE_NAMES",[...Ts,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),Mt.setClass(ln),Mt.setSVGClass(ln);var WE=xh(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var D0=mg,cg=s=>function(t,e,n){let{points:i,pathOffset:r}=n;return new J(i[s]).subtract(r).transform(Ce(n.getViewportTransform(),n.calcTransformMatrix()))},I0=(s,t,e,n)=>{let{target:i,pointIndex:r}=t,o=i,a=Gi(new J(e,n),void 0,o.calcOwnMatrix());return o.points[r]=a.add(o.pathOffset),o.setDimensions(),o.set("dirty",!0),!0},O0=(s,t)=>function(e,n,i,r){let o=n.target,a=new J(o.points[(s>0?s:o.points.length)-1]),l=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),c=t(e,k(k({},n),{},{pointIndex:s}),i,r),h=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(l);return o.left-=h.x,o.top-=h.y,c},hg=s=>ws(D0,O0(s,I0)),zd=(s,t,e)=>{let{path:n,pathOffset:i}=s,r=n[t];return new J(r[e]-i.x,r[e+1]-i.y).transform(Ce(s.getViewportTransform(),s.calcTransformMatrix()))};function m1(s,t,e){let{commandIndex:n,pointIndex:i}=this;return zd(e,n,i)}function g1(s,t,e,n){let{target:i}=t,{commandIndex:r,pointIndex:o}=this,a=((l,c,h,u,d)=>{let{path:f,pathOffset:p}=l,x=f[(u>0?u:f.length)-1],m=new J(x[d],x[d+1]),g=m.subtract(p).transform(l.calcOwnMatrix()),y=Gi(new J(c,h),void 0,l.calcOwnMatrix());f[u][d]=y.x+p.x,f[u][d+1]=y.y+p.y,l.setDimensions();let R=m.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(g);return l.left-=R.x,l.top-=R.y,l.set("dirty",!0),!0})(i,e,n,r,o);return Qd(this.actionName,k(k({},tf(s,t,e,n)),{},{commandIndex:r,pointIndex:o})),a}var uh=class extends an{constructor(t){super(t)}render(t,e,n,i,r){let o=k(k({},i),{},{cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill});super.render(t,e,n,o,r)}},Vd=class extends uh{constructor(t){super(t)}render(t,e,n,i,r){let{path:o}=r,{commandIndex:a,pointIndex:l,connectToCommandIndex:c,connectToPointIndex:h}=this;t.save(),t.strokeStyle=this.controlStroke,this.connectionDashArray&&t.setLineDash(this.connectionDashArray);let[u]=o[a],d=zd(r,c,h);if(u==="Q"){let f=zd(r,a,l+2);t.moveTo(f.x,f.y),t.lineTo(e,n)}else t.moveTo(e,n);t.lineTo(d.x,d.y),t.stroke(),t.restore(),super.render(t,e,n,i,r)}},Lc=(s,t,e,n,i,r)=>new(e?Vd:uh)(k(k({commandIndex:s,pointIndex:t,actionName:"modifyPath",positionHandler:m1,actionHandler:g1,connectToCommandIndex:i,connectToPointIndex:r},n),e?n.controlPointStyle:n.pointStyle)),XE=Object.freeze({__proto__:null,changeWidth:wd,createObjectDefaultControls:of,createPathControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={},n="M";return s.path.forEach(((i,r)=>{let o=i[0];switch(o!=="Z"&&(e["c_".concat(r,"_").concat(o)]=Lc(r,i.length-2,!1,t)),o){case"C":e["c_".concat(r,"_C_CP_1")]=Lc(r,1,!0,t,r-1,(a=>a==="C"?5:a==="Q"?3:1)(n)),e["c_".concat(r,"_C_CP_2")]=Lc(r,3,!0,t,r,5);break;case"Q":e["c_".concat(r,"_Q_CP_1")]=Lc(r,1,!0,t,r,3)}n=o})),e},createPolyActionHandler:hg,createPolyControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={};for(let n=0;n<(typeof s=="number"?s:s.points.length);n++)e["p".concat(n)]=new an(k({actionName:D0,positionHandler:cg(n),actionHandler:hg(n)},t));return e},createPolyPositionHandler:cg,createResizeControls:e0,createTextboxDefaultControls:n0,dragHandler:Ig,factoryPolyActionHandler:O0,getLocalPoint:_h,polyActionHandler:I0,renderCircleControl:Hg,renderSquareControl:Wg,rotationStyleHandler:Xg,rotationWithSnapping:jg,scaleCursorStyleHandler:ro,scaleOrSkewActionName:xa,scaleSkewCursorStyleHandler:Js,scalingEqually:_a,scalingX:Zg,scalingXOrSkewingY:Td,scalingY:Jg,scalingYOrSkewingX:Cd,skewCursorStyleHandler:Kg,skewHandlerX:Qg,skewHandlerY:t0,wrapWithFireEvent:ws,wrapWithFixedAnchor:br}),Mh=s=>s.webgl!==void 0;var uf="precision highp float",_1=`
    `.concat(uf,`;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`),x1=["type"],v1=["type"],y1=new RegExp(uf,"g"),Ee=class{get type(){return this.constructor.type}constructor(){let t=ve(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x1);Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return _1}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getFragmentSource(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.getVertexSource(),{WebGLProbe:{GLPrecision:i="highp"}}=bi();i!=="highp"&&(e=e.replace(y1,uf.replace("highp",i)));let r=t.createShader(t.VERTEX_SHADER),o=t.createShader(t.FRAGMENT_SHADER),a=t.createProgram();if(!r||!o||!a)throw new Vn("Vertex, fragment shader or program creation error");if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new Vn("Vertex shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(r)));if(t.shaderSource(o,e),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS))throw new Vn("Fragment shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(o)));if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))throw new Vn('Shader link error for "'.concat(this.type,'" ').concat(t.getProgramInfoLog(a)));let l=this.getUniformLocations(t,a)||{};return l.uStepW=t.getUniformLocation(a,"uStepW"),l.uStepH=t.getUniformLocation(a,"uStepH"),{program:a,attributeLocations:this.getAttributeLocations(t,a),uniformLocations:l}}getAttributeLocations(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}}getUniformLocations(t,e){let n=this.constructor.uniformLocations,i={};for(let r=0;r<n.length;r++)i[n[r]]=t.getUniformLocation(e,n[r]);return i}sendAttributeData(t,e,n){let i=e.aPosition,r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}_setupFrameBuffer(t){let e=t.context;if(t.passes>1){let n=t.destinationWidth,i=t.destinationHeight;t.sourceWidth===n&&t.sourceHeight===i||(e.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(e,n,i)),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.targetTexture,0)}else e.bindFramebuffer(e.FRAMEBUFFER,null),e.finish()}_swapTextures(t){t.passes--,t.pass++;let e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e}isNeutralState(t){return!1}applyTo(t){Mh(t)?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){}getCacheKey(){return this.type}retrieveShader(t){let e=this.getCacheKey();return t.programCache[e]||(t.programCache[e]=this.createProgram(t.context)),t.programCache[e]}applyToWebGL(t){let e=t.context,n=this.retrieveShader(t);t.pass===0&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(n.program),this.sendAttributeData(e,n.attributeLocations,t.aPosition),e.uniform1f(n.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(n.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,n.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(t,e,n){t.activeTexture(n),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)}unbindAdditionalTexture(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)}sendUniformData(t,e){}createHelpLayer(t){if(!t.helpLayer){let{sourceWidth:e,sourceHeight:n}=t,i=Pn({width:e,height:n});t.helpLayer=i}}toObject(){let t=Object.keys(this.constructor.defaults||{});return k({type:this.type},t.reduce(((e,n)=>(e[n]=this[n],e)),{}))}toJSON(){return this.toObject()}static async fromObject(t,e){return new this(ve(t,v1))}};V(Ee,"type","BaseFilter"),V(Ee,"uniformLocations",[]);var S1={multiply:`gl_FragColor.rgb *= uColor.rgb;
`,screen:`gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,add:`gl_FragColor.rgb += uColor.rgb;
`,difference:`gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,subtract:`gl_FragColor.rgb -= uColor.rgb;
`,lighten:`gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,darken:`gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,exclusion:`gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,overlay:`
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `,tint:`
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    `},Ks=class extends Ee{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(S1[this.mode],`
        }
      }
      `)}applyTo2d(t){let{imageData:{data:e}}=t,n=new dn(this.color).getSource(),i=this.alpha,r=n[0]*i,o=n[1]*i,a=n[2]*i,l=1-i;for(let c=0;c<e.length;c+=4){let h=e[c],u=e[c+1],d=e[c+2],f,p,x;switch(this.mode){case"multiply":f=h*r/255,p=u*o/255,x=d*a/255;break;case"screen":f=255-(255-h)*(255-r)/255,p=255-(255-u)*(255-o)/255,x=255-(255-d)*(255-a)/255;break;case"add":f=h+r,p=u+o,x=d+a;break;case"difference":f=Math.abs(h-r),p=Math.abs(u-o),x=Math.abs(d-a);break;case"subtract":f=h-r,p=u-o,x=d-a;break;case"darken":f=Math.min(h,r),p=Math.min(u,o),x=Math.min(d,a);break;case"lighten":f=Math.max(h,r),p=Math.max(u,o),x=Math.max(d,a);break;case"overlay":f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255,p=o<128?2*u*o/255:255-2*(255-u)*(255-o)/255,x=a<128?2*d*a/255:255-2*(255-d)*(255-a)/255;break;case"exclusion":f=r+h-2*r*h/255,p=o+u-2*o*u/255,x=a+d-2*a*d/255;break;case"tint":f=r+h*l,p=o+u*l,x=a+d*l}e[c]=f,e[c+1]=p,e[c+2]=x}}sendUniformData(t,e){let n=new dn(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,t.uniform4fv(e.uColor,n)}};V(Ks,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),V(Ks,"type","BlendColor"),V(Ks,"uniformLocations",["uColor"]),Mt.setClass(Ks);var b1={multiply:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `,mask:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    `},M1=["type","image"],$s=class extends Ee{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return b1[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(t){let e=t.context,n=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,n,e.TEXTURE1),super.applyToWebGL(t),this.unbindAdditionalTexture(e,e.TEXTURE1)}createTexture(t,e){return t.getCachedTexture(e.cacheKey,e.getElement())}calculateMatrix(){let t=this.image,{width:e,height:n}=t.getElement();return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/n,1]}applyTo2d(t){let{imageData:{data:e,width:n,height:i},filterBackend:{resources:r}}=t,o=this.image;r.blendImage||(r.blendImage=Mi());let a=r.blendImage,l=a.getContext("2d");a.width!==n||a.height!==i?(a.width=n,a.height=i):l.clearRect(0,0,n,i),l.setTransform(o.scaleX,0,0,o.scaleY,o.left,o.top),l.drawImage(o.getElement(),0,0,n,i);let c=l.getImageData(0,0,n,i).data;for(let h=0;h<e.length;h+=4){let u=e[h],d=e[h+1],f=e[h+2],p=e[h+3],x=c[h],m=c[h+1],g=c[h+2],y=c[h+3];switch(this.mode){case"multiply":e[h]=u*x/255,e[h+1]=d*m/255,e[h+2]=f*g/255,e[h+3]=p*y/255;break;case"mask":e[h+3]=y}}}sendUniformData(t,e){let n=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,n)}toObject(){return k(k({},super.toObject()),{},{image:this.image&&this.image.toObject()})}static async fromObject(t,e){let{type:n,image:i}=t,r=ve(t,M1);return ln.fromObject(i,e).then((o=>new this(k(k({},r),{},{image:o}))))}};V($s,"type","BlendImage"),V($s,"defaults",{mode:"multiply",alpha:1}),V($s,"uniformLocations",["uTransformMatrix","uImage"]),Mt.setClass($s);var Qs=class extends Ee{getFragmentSource(){return`
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float totalC = 0.0;
      float totalA = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);
        float weight = 1.0 - abs(percent);
        float alpha = weight * sample.a;
        color.rgb += sample.rgb * alpha;
        color.a += alpha;
        totalA += weight;
        totalC += alpha;
      }
      gl_FragColor.rgb = color.rgb / totalC;
      gl_FragColor.a = color.a / totalA;
    }
  `}applyTo(t){Mh(t)?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;this.aspectRatio=n/i,this.horizontal=!0;let r=this.getBlurValue()*n,o=new Uint8ClampedArray(e),a=15,l=4*n;for(let c=0;c<e.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c-c%l,m=x+l;for(let g=-14;g<a;g++){let y=g/a,R=4*Math.floor(r*y),T=1-Math.abs(y),E=c+R;E<x?E=x:E>m&&(E=m);let A=e[E+3]*T;h+=e[E]*A,u+=e[E+1]*A,d+=e[E+2]*A,f+=A,p+=T}o[c]=h/f,o[c+1]=u/f,o[c+2]=d/f,o[c+3]=f/p}this.horizontal=!1,r=this.getBlurValue()*i;for(let c=0;c<o.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c%l,m=o.length-l+x;for(let g=-14;g<a;g++){let y=g/a,R=Math.floor(r*y)*l,T=1-Math.abs(y),E=c+R;E<x?E=x:E>m&&(E=m);let A=o[E+3]*T;h+=o[E]*A,u+=o[E+1]*A,d+=o[E+2]*A,f+=A,p+=T}e[c]=h/f,e[c+1]=u/f,e[c+2]=d/f,e[c+3]=f/p}}sendUniformData(t,e){let n=this.chooseRightDelta();t.uniform2fv(e.uDelta,n)}isNeutralState(){return this.blur===0}getBlurValue(){let t=1,{horizontal:e,aspectRatio:n}=this;return e?n>1&&(t=1/n):n<1&&(t=n),t*this.blur*.12}chooseRightDelta(){let t=this.getBlurValue();return this.horizontal?[t,0]:[0,t]}};V(Qs,"type","Blur"),V(Qs,"defaults",{blur:0}),V(Qs,"uniformLocations",["uDelta"]),Mt.setClass(Qs);var tr=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.round(255*this.brightness);for(let i=0;i<e.length;i+=4)e[i]+=n,e[i+1]+=n,e[i+2]+=n}isNeutralState(){return this.brightness===0}sendUniformData(t,e){t.uniform1f(e.uBrightness,this.brightness)}};V(tr,"type","Brightness"),V(tr,"defaults",{brightness:0}),V(tr,"uniformLocations",["uBrightness"]),Mt.setClass(tr);var L0={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},Vi=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`}applyTo2d(t){let e=t.imageData.data,n=this.matrix,i=this.colorsOnly;for(let r=0;r<e.length;r+=4){let o=e[r],a=e[r+1],l=e[r+2];if(e[r]=o*n[0]+a*n[1]+l*n[2]+255*n[4],e[r+1]=o*n[5]+a*n[6]+l*n[7]+255*n[9],e[r+2]=o*n[10]+a*n[11]+l*n[12]+255*n[14],!i){let c=e[r+3];e[r]+=c*n[3],e[r+1]+=c*n[8],e[r+2]+=c*n[13],e[r+3]=o*n[15]+a*n[16]+l*n[17]+c*n[18]+255*n[19]}}}sendUniformData(t,e){let n=this.matrix,i=[n[0],n[1],n[2],n[3],n[5],n[6],n[7],n[8],n[10],n[11],n[12],n[13],n[15],n[16],n[17],n[18]],r=[n[4],n[9],n[14],n[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,i),t.uniform4fv(e.uConstants,r)}toObject(){return k(k({},super.toObject()),{},{matrix:[...this.matrix]})}};function Mr(s,t){var e;let n=(V(e=class extends Vi{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",s),V(e,"defaults",{colorsOnly:!1,matrix:t}),e);return Mt.setClass(n,s),n}V(Vi,"type","ColorMatrix"),V(Vi,"defaults",L0),V(Vi,"uniformLocations",["uColorMatrix","uConstants"]),Mt.setClass(Vi);var w1=Mr("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),T1=Mr("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),C1=Mr("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),E1=Mr("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),A1=Mr("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),R1=Mr("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),P1=Mr("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),Ra=class extends Ee{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.subFilters=t.subFilters||[]}applyTo(t){Mh(t)&&(t.passes+=this.subFilters.length-1),this.subFilters.forEach((e=>{e.applyTo(t)}))}toObject(){return{type:this.type,subFilters:this.subFilters.map((t=>t.toObject()))}}isNeutralState(){return!this.subFilters.some((t=>!t.isNeutralState()))}static fromObject(t,e){return Promise.all((t.subFilters||[]).map((n=>Mt.getClass(n.type).fromObject(n,e)))).then((n=>new this({subFilters:n})))}};V(Ra,"type","Composed"),Mt.setClass(Ra);var er=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.floor(255*this.contrast),i=259*(n+255)/(255*(259-n));for(let r=0;r<e.length;r+=4)e[r]=i*(e[r]-128)+128,e[r+1]=i*(e[r+1]-128)+128,e[r+2]=i*(e[r+2]-128)+128}sendUniformData(t,e){t.uniform1f(e.uContrast,this.contrast)}};V(er,"type","Contrast"),V(er,"defaults",{contrast:0}),V(er,"uniformLocations",["uContrast"]),Mt.setClass(er);var D1={Convolute_3_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_3_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_5_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_5_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_7_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_7_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_9_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_9_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `},nr=class extends Ee{getCacheKey(){return"".concat(this.type,"_").concat(Math.sqrt(this.matrix.length),"_").concat(this.opaque?1:0)}getFragmentSource(){return D1[this.getCacheKey()]}applyTo2d(t){let e=t.imageData,n=e.data,i=this.matrix,r=Math.round(Math.sqrt(i.length)),o=Math.floor(r/2),a=e.width,l=e.height,c=t.ctx.createImageData(a,l),h=c.data,u=this.opaque?1:0,d,f,p,x,m,g,y,R,T,E,A,_,v;for(A=0;A<l;A++)for(E=0;E<a;E++){for(m=4*(A*a+E),d=0,f=0,p=0,x=0,v=0;v<r;v++)for(_=0;_<r;_++)y=A+v-o,g=E+_-o,y<0||y>=l||g<0||g>=a||(R=4*(y*a+g),T=i[v*r+_],d+=n[R]*T,f+=n[R+1]*T,p+=n[R+2]*T,u||(x+=n[R+3]*T));h[m]=d,h[m+1]=f,h[m+2]=p,h[m+3]=u?n[m+3]:x}t.imageData=c}sendUniformData(t,e){t.uniform1fv(e.uMatrix,this.matrix)}toObject(){return k(k({},super.toObject()),{},{opaque:this.opaque,matrix:[...this.matrix]})}};V(nr,"type","Convolute"),V(nr,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),V(nr,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),Mt.setClass(nr);var F0="Gamma",ir=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.gamma=t.gamma||this.constructor.defaults.gamma.concat()}applyTo2d(t){let{imageData:{data:e}}=t,n=this.gamma,i=1/n[0],r=1/n[1],o=1/n[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let a=this.rgbValues;for(let l=0;l<256;l++)a.r[l]=255*Math.pow(l/255,i),a.g[l]=255*Math.pow(l/255,r),a.b[l]=255*Math.pow(l/255,o);for(let l=0;l<e.length;l+=4)e[l]=a.r[e[l]],e[l+1]=a.g[e[l+1]],e[l+2]=a.b[e[l+2]]}sendUniformData(t,e){t.uniform3fv(e.uGamma,this.gamma)}isNeutralState(){let{gamma:t}=this;return t[0]===1&&t[1]===1&&t[2]===1}toObject(){return{type:F0,gamma:this.gamma.concat()}}};V(ir,"type",F0),V(ir,"defaults",{gamma:[1,1,1]}),V(ir,"uniformLocations",["uGamma"]),Mt.setClass(ir);var I1={average:`
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `,lightness:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,luminosity:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `},sr=class extends Ee{applyTo2d(t){let{imageData:{data:e}}=t;for(let n,i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2];switch(this.mode){case"average":n=(r+o+a)/3;break;case"lightness":n=(Math.min(r,o,a)+Math.max(r,o,a))/2;break;case"luminosity":n=.21*r+.72*o+.07*a}e[i+2]=e[i+1]=e[i]=n}}getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return I1[this.mode]}sendUniformData(t,e){t.uniform1i(e.uMode,1)}isNeutralState(){return!1}};V(sr,"type","Grayscale"),V(sr,"defaults",{mode:"average"}),V(sr,"uniformLocations",["uMode"]),Mt.setClass(sr);var O1=k(k({},L0),{},{rotation:0}),fo=class extends Vi{calculateMatrix(){let t=this.rotation*Math.PI,e=si(t),n=ri(t),i=1/3,r=Math.sqrt(i)*n,o=1-e;this.matrix=[e+o/3,i*o-r,i*o+r,0,0,i*o+r,e+i*o,i*o-r,0,0,i*o-r,i*o+r,e+i*o,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(t){this.calculateMatrix(),super.applyTo(t)}toObject(){return{type:this.type,rotation:this.rotation}}};V(fo,"type","HueRotation"),V(fo,"defaults",O1),Mt.setClass(fo);var rr=class extends Ee{applyTo2d(t){let{imageData:{data:e}}=t;for(let n=0;n<e.length;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2],this.alpha&&(e[n+3]=255-e[n+3])}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`}isNeutralState(){return!this.invert}sendUniformData(t,e){t.uniform1i(e.uInvert,Number(this.invert)),t.uniform1i(e.uAlpha,Number(this.alpha))}};V(rr,"type","Invert"),V(rr,"defaults",{alpha:!1,invert:!0}),V(rr,"uniformLocations",["uInvert","uAlpha"]),Mt.setClass(rr);var or=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=this.noise;for(let i=0;i<e.length;i+=4){let r=(.5-Math.random())*n;e[i]+=r,e[i+1]+=r,e[i+2]+=r}}sendUniformData(t,e){t.uniform1f(e.uNoise,this.noise/255),t.uniform1f(e.uSeed,Math.random())}isNeutralState(){return this.noise===0}};V(or,"type","Noise"),V(or,"defaults",{noise:0}),V(or,"uniformLocations",["uNoise","uSeed"]),Mt.setClass(or);var ar=class extends Ee{applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;for(let r=0;r<i;r+=this.blocksize)for(let o=0;o<n;o+=this.blocksize){let a=4*r*n+4*o,l=e[a],c=e[a+1],h=e[a+2],u=e[a+3];for(let d=r;d<Math.min(r+this.blocksize,i);d++)for(let f=o;f<Math.min(o+this.blocksize,n);f++){let p=4*d*n+4*f;e[p]=l,e[p+1]=c,e[p+2]=h,e[p+3]=u}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`}sendUniformData(t,e){t.uniform1f(e.uBlocksize,this.blocksize)}};V(ar,"type","Pixelate"),V(ar,"defaults",{blocksize:4}),V(ar,"uniformLocations",["uBlocksize"]),Mt.setClass(ar);var lr=class extends Ee{getFragmentSource(){return`
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`}applyTo2d(t){let{imageData:{data:e}}=t,n=255*this.distance,i=new dn(this.color).getSource(),r=[i[0]-n,i[1]-n,i[2]-n],o=[i[0]+n,i[1]+n,i[2]+n];for(let a=0;a<e.length;a+=4){let l=e[a],c=e[a+1],h=e[a+2];l>r[0]&&c>r[1]&&h>r[2]&&l<o[0]&&c<o[1]&&h<o[2]&&(e[a+3]=0)}}sendUniformData(t,e){let n=new dn(this.color).getSource(),i=this.distance,r=[0+n[0]/255-i,0+n[1]/255-i,0+n[2]/255-i,1],o=[n[0]/255+i,n[1]/255+i,n[2]/255+i,1];t.uniform4fv(e.uLow,r),t.uniform4fv(e.uHigh,o)}};V(lr,"type","RemoveColor"),V(lr,"defaults",{color:"#FFFFFF",distance:.02,useAlpha:!1}),V(lr,"uniformLocations",["uLow","uHigh"]),Mt.setClass(lr);var cr=class extends Ee{sendUniformData(t,e){t.uniform2fv(e.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),t.uniform1fv(e.uTaps,this.taps)}getFilterWindow(){let t=this.tempScale;return Math.ceil(this.lanczosLobes/t)}getCacheKey(){let t=this.getFilterWindow();return"".concat(this.type,"_").concat(t)}getFragmentSource(){let t=this.getFilterWindow();return this.generateShader(t)}getTaps(){let t=this.lanczosCreate(this.lanczosLobes),e=this.tempScale,n=this.getFilterWindow(),i=new Array(n);for(let r=1;r<=n;r++)i[r-1]=t(r*e);return i}generateShader(t){let e=new Array(t);for(let n=1;n<=t;n++)e[n-1]="".concat(n,".0 * uDelta");return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[`.concat(t,`];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        `).concat(e.map(((n,i)=>`
              color += texture2D(uTexture, vTexCoord + `.concat(n,") * uTaps[").concat(i,"] + texture2D(uTexture, vTexCoord - ").concat(n,") * uTaps[").concat(i,`];
              sum += 2.0 * uTaps[`).concat(i,`];
            `))).join(`
`),`
        gl_FragColor = color / sum;
      }
    `)}applyToForWebgl(t){t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,super.applyTo(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,super.applyTo(t),t.sourceHeight=t.destinationHeight}applyTo(t){Mh(t)?this.applyToForWebgl(t):this.applyTo2d(t)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(t){return e=>{if(e>=t||e<=-t)return 0;if(e<11920929e-14&&e>-11920929e-14)return 1;let n=(e*=Math.PI)/t;return Math.sin(e)/e*Math.sin(n)/n}}applyTo2d(t){let e=t.imageData,n=this.scaleX,i=this.scaleY;this.rcpScaleX=1/n,this.rcpScaleY=1/i;let r=e.width,o=e.height,a=Math.round(r*n),l=Math.round(o*i),c;c=this.resizeType==="sliceHack"?this.sliceByTwo(t,r,o,a,l):this.resizeType==="hermite"?this.hermiteFastResize(t,r,o,a,l):this.resizeType==="bilinear"?this.bilinearFiltering(t,r,o,a,l):this.resizeType==="lanczos"?this.lanczosResize(t,r,o,a,l):new ImageData(a,l),t.imageData=c}sliceByTwo(t,e,n,i,r){let o=t.imageData,a=.5,l=!1,c=!1,h=e*a,u=n*a,d=t.filterBackend.resources,f=0,p=0,x=e,m=0;d.sliceByTwo||(d.sliceByTwo=Mi());let g=d.sliceByTwo;(g.width<1.5*e||g.height<n)&&(g.width=1.5*e,g.height=n);let y=g.getContext("2d");for(y.clearRect(0,0,1.5*e,n),y.putImageData(o,0,0),i=Math.floor(i),r=Math.floor(r);!l||!c;)e=h,n=u,i<Math.floor(h*a)?h=Math.floor(h*a):(h=i,l=!0),r<Math.floor(u*a)?u=Math.floor(u*a):(u=r,c=!0),y.drawImage(g,f,p,e,n,x,m,h,u),f=x,p=m,m+=u;return y.getImageData(f,p,i,r)}lanczosResize(t,e,n,i,r){let o=t.imageData.data,a=t.ctx.createImageData(i,r),l=a.data,c=this.lanczosCreate(this.lanczosLobes),h=this.rcpScaleX,u=this.rcpScaleY,d=2/this.rcpScaleX,f=2/this.rcpScaleY,p=Math.ceil(h*this.lanczosLobes/2),x=Math.ceil(u*this.lanczosLobes/2),m={},g={x:0,y:0},y={x:0,y:0};return(function R(T){let E,A,_,v,C,S,w,P,F,O,G;for(g.x=(T+.5)*h,y.x=Math.floor(g.x),E=0;E<r;E++){for(g.y=(E+.5)*u,y.y=Math.floor(g.y),C=0,S=0,w=0,P=0,F=0,A=y.x-p;A<=y.x+p;A++)if(!(A<0||A>=e)){O=Math.floor(1e3*Math.abs(A-g.x)),m[O]||(m[O]={});for(let L=y.y-x;L<=y.y+x;L++)L<0||L>=n||(G=Math.floor(1e3*Math.abs(L-g.y)),m[O][G]||(m[O][G]=c(Math.sqrt(Math.pow(O*d,2)+Math.pow(G*f,2))/1e3)),_=m[O][G],_>0&&(v=4*(L*e+A),C+=_,S+=_*o[v],w+=_*o[v+1],P+=_*o[v+2],F+=_*o[v+3]))}v=4*(E*i+T),l[v]=S/C,l[v+1]=w/C,l[v+2]=P/C,l[v+3]=F/C}return++T<i?R(T):a})(0)}bilinearFiltering(t,e,n,i,r){let o,a,l,c,h,u,d,f,p,x,m,g,y,R=0,T=this.rcpScaleX,E=this.rcpScaleY,A=4*(e-1),_=t.imageData.data,v=t.ctx.createImageData(i,r),C=v.data;for(d=0;d<r;d++)for(f=0;f<i;f++)for(h=Math.floor(T*f),u=Math.floor(E*d),p=T*f-h,x=E*d-u,y=4*(u*e+h),m=0;m<4;m++)o=_[y+m],a=_[y+4+m],l=_[y+A+m],c=_[y+A+4+m],g=o*(1-p)*(1-x)+a*p*(1-x)+l*x*(1-p)+c*p*x,C[R++]=g;return v}hermiteFastResize(t,e,n,i,r){let o=this.rcpScaleX,a=this.rcpScaleY,l=Math.ceil(o/2),c=Math.ceil(a/2),h=t.imageData.data,u=t.ctx.createImageData(i,r),d=u.data;for(let f=0;f<r;f++)for(let p=0;p<i;p++){let x=4*(p+f*i),m=0,g=0,y=0,R=0,T=0,E=0,A=0,_=(f+.5)*a;for(let v=Math.floor(f*a);v<(f+1)*a;v++){let C=Math.abs(_-(v+.5))/c,S=(p+.5)*o,w=C*C;for(let P=Math.floor(p*o);P<(p+1)*o;P++){let F=Math.abs(S-(P+.5))/l,O=Math.sqrt(w+F*F);O>1&&O<-1||(m=2*O*O*O-3*O*O+1,m>0&&(F=4*(P+v*e),A+=m*h[F+3],y+=m,h[F+3]<255&&(m=m*h[F+3]/250),R+=m*h[F],T+=m*h[F+1],E+=m*h[F+2],g+=m))}}d[x]=R/g,d[x+1]=T/g,d[x+2]=E/g,d[x+3]=A/y}return u}};V(cr,"type","Resize"),V(cr,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),V(cr,"uniformLocations",["uDelta","uTaps"]),Mt.setClass(cr);var hr=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.saturation;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a);e[i]+=l!==r?(l-r)*n:0,e[i+1]+=l!==o?(l-o)*n:0,e[i+2]+=l!==a?(l-a)*n:0}}sendUniformData(t,e){t.uniform1f(e.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};V(hr,"type","Saturation"),V(hr,"defaults",{saturation:0}),V(hr,"uniformLocations",["uSaturation"]),Mt.setClass(hr);var ur=class extends Ee{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.vibrance;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a),c=(r+o+a)/3,h=2*Math.abs(l-c)/255*n;e[i]+=l!==r?(l-r)*h:0,e[i+1]+=l!==o?(l-o)*h:0,e[i+2]+=l!==a?(l-a)*h:0}}sendUniformData(t,e){t.uniform1f(e.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};V(ur,"type","Vibrance"),V(ur,"defaults",{vibrance:0}),V(ur,"uniformLocations",["uVibrance"]),Mt.setClass(ur);var jE=Object.freeze({__proto__:null,BaseFilter:Ee,BlackWhite:P1,BlendColor:Ks,BlendImage:$s,Blur:Qs,Brightness:tr,Brownie:w1,ColorMatrix:Vi,Composed:Ra,Contrast:er,Convolute:nr,Gamma:ir,Grayscale:sr,HueRotation:fo,Invert:rr,Kodachrome:C1,Noise:or,Pixelate:ar,Polaroid:A1,RemoveColor:lr,Resize:cr,Saturation:hr,Sepia:R1,Technicolor:E1,Vibrance:ur,Vintage:T1});var To=476,wo=3369,La=70,df=[["Block","Barlow Condensed",800],["Plain","Barlow",600],["Script","Caveat",600],["Marker","Permanent Marker",400],["Hand","Covered By Your Grace",400]],L1={cornerSize:14,touchCornerSize:32,transparentCorners:!1,cornerColor:"#FFFFFF",cornerStrokeColor:"#14213D",borderColor:"#F2A900",borderScaleFactor:2,cornerStyle:"circle",padding:8,lockScalingFlip:!0},Co={left:To/2,originX:"center",originY:"center"},ff=(s,t)=>document.fonts&&document.fonts.load?document.fonts.load(`${t} 48px "${s}"`).catch(()=>{}):Promise.resolve();function pf(s){let t=parseInt(String(s).slice(1),16);if(isNaN(t))return 1;let e=[t>>16&255,t>>8&255,t&255].map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*e[0]+.7152*e[1]+.0722*e[2]}function ji(s){return s.set(L1),(s instanceof Ve||s instanceof ln)&&s.setControlsVisibility({ml:!1,mr:!1,mt:!1,mb:!1}),s}function wh(s,t){return ji(new Ve(String(s),Object.assign({},Co,{fontFamily:"Barlow Condensed",fontWeight:800},t)))}function N0(s,t){return s.width>t&&s.set("fontSize",Math.max(20,Math.floor(s.fontSize*t/s.width))),s}function F1(s,t,e){let n=[];for(let i=0;i<s*2;i++){let r=i%2?e:t,o=Math.PI*i/s-Math.PI/2;n.push({x:Math.cos(o)*r,y:Math.sin(o)*r})}return n}var N1={rect:(s,t)=>ji(new kn(Object.assign({},Co,{top:s,width:300,height:220,fill:t}))),circle:(s,t)=>ji(new vi(Object.assign({},Co,{top:s,radius:130,fill:t}))),star:(s,t)=>ji(new xs(F1(5,150,62),Object.assign({},Co,{top:s,fill:t}))),heart:(s,t)=>ji(new ki("M 150 270 C 60 200 0 150 0 85 C 0 35 38 0 82 0 C 110 0 136 16 150 42 C 164 16 190 0 218 0 C 262 0 300 35 300 85 C 300 150 240 200 150 270 Z",Object.assign({},Co,{top:s,fill:t})))};function U1(s,t,e){let n=(r,o)=>ji(new kn({left:0,top:r,width:To,height:La,fill:o})),i=[n(0,s===0?e.bandTop:e.bandMid),n(wo-La,s===0?e.bandMid:e.bandBottom)];return s===0?(i.push(wh(e.head.toUpperCase(),{top:La+170,fontFamily:"Barlow",fontWeight:600,fontSize:32,charSpacing:260,fill:t.accentText})),i.push(N0(wh(e.name.toUpperCase(),{top:La+420+915,angle:90,fontSize:560,fill:t.text}),1830))):i.push(N0(wh(e.second.toUpperCase(),{top:La+110+1500,angle:90,fontSize:436,fill:t.accentText}),3e3)),i}function U0(s){ie.configure({devicePixelRatio:Math.min(window.devicePixelRatio||1,2)});let t=s.overlay,e=L=>t.querySelector("#"+L),n=[0,1,2,3].map(()=>[null,null]),i=null,r=null,o=[],a=!1,l=0,c=null,h=["fit",.42,.65,1],u=-1;function d(L){let I=e("fx-scroll"),z=Math.max(220,Math.min(400,I.clientWidth-32));return h[L]==="fit"?Math.max(56,Math.min(z,Math.floor((I.clientHeight-40)*To/wo))):Math.round(z*h[L])}function f(L){u=Math.max(0,Math.min(h.length-1,L));let I=e("fx-scroll"),z=e("fx-wrap"),H=z.offsetHeight?(I.scrollTop+I.clientHeight/2-16)/z.offsetHeight:0,Y=d(u),et=Y/To;i.setDimensions({width:Y,height:Math.round(wo*et)}),i.setZoom(et),i.getObjects().forEach(ft=>ft.setCoords()),i.requestRenderAll(),I.scrollTop=Math.max(0,H*z.offsetHeight-I.clientHeight/2+16),e("fx-out").disabled=u===0,e("fx-in").disabled=u===h.length-1,t.dataset.level=String(u)}function p(L){if(n[L][0])return Promise.resolve();let I=s.getRoles(),z=s.getWords();return Promise.all([ff("Barlow Condensed",800),ff("Barlow",600)]).then(()=>{n[L][0]||[0,1].forEach(H=>{let Y=new gr(void 0,{width:To,height:wo,backgroundColor:I.main,enableRetinaScaling:!1,renderOnAddRemove:!1});U1(H,I,z).forEach(et=>Y.add(et)),Y.renderAll(),n[L][H]={json:Y.toJSON(),bmp:Y.toCanvasElement(1)},Y.dispose()})})}function x(){t.dataset.count=i?String(i.getObjects().length):"0"}function m(){e("fx-undo").disabled=o.length<2}function g(){if(!i)return;let L=i.getActiveObject(),I=L instanceof Ve,z=L instanceof ln;if(e("fx-add").hidden=!!L,e("fx-sel").hidden=!L,e("fx-textrow").hidden=!I,e("fx-tip").hidden=I,e("fx-tiptext").textContent=L?"Drag it to move. Pull a corner to resize. The top handle turns it.":"Tap a piece to change it. Minus and plus show more or less of the panel.",I){let H=e("fx-text");document.activeElement!==H&&(H.value=L.text),e("fx-font").value=String(Math.max(0,df.findIndex(Y=>Y[1]===L.fontFamily)))}e("fx-colors").style.visibility=z?"hidden":"visible",e("fx-colorlabel").textContent=z?"Photo":L?"Color":"Background",x()}function y(){a||!i||(o.push(JSON.stringify(i.toJSON())),o.length>20&&o.shift(),m(),x())}function R(L){return i.loadFromJSON(L).then(()=>{i.getObjects().forEach(ji),i.discardActiveObject(),i.requestRenderAll()})}function T(){o.length<2||a||(o.pop(),a=!0,R(JSON.parse(o[o.length-1])).then(()=>{a=!1,g(),m()}))}function E(L,I){return p(L).then(()=>{r={side:L,sec:I},c=document.activeElement,t.hidden=!1,document.documentElement.classList.add("fx-open");let z=e("fx-scroll");return i||(i=new vo(e("fx-canvas"),{allowTouchScrolling:!0,preserveObjectStacking:!0,selection:!1,enableRetinaScaling:!0,stopContextMenu:!0}),["selection:created","selection:updated","selection:cleared"].forEach(H=>i.on(H,g)),i.on("object:modified",y)),f(u<0?z.clientWidth<520?0:h.length-1:u),e("fx-title").textContent="Face "+(L+1)+", "+(I===0?"top half":"bottom half"),R(n[L][I].json).then(()=>{o=[JSON.stringify(i.toJSON())],z.scrollTop=0,g(),m();try{e("fx-done").focus({preventScroll:!0})}catch{}})})}function A(){!i||!r||(i.discardActiveObject(),i.renderAll(),n[r.side][r.sec]={json:i.toJSON(),bmp:i.toCanvasElement(To/i.width)})}function _(){A();let L=r;r=null,t.hidden=!0,document.documentElement.classList.remove("fx-open");try{c&&c.focus&&c.focus({preventScroll:!0})}catch{}c=null,L&&s.onDone(L.side,L.sec)}function v(){let L=e("fx-scroll").getBoundingClientRect(),I=e("fx-wrap").getBoundingClientRect(),z=(L.top+L.height/2-I.top)/i.getZoom();return Math.max(180,Math.min(wo-180,z))}let C=0;function S(L){L.set("top",Math.min(wo-120,L.top+C++%5*70)),L.setCoords(),i.add(L),i.setActiveObject(L),i.requestRenderAll(),y(),g()}let w=()=>pf(i.backgroundColor)<.4;function P(){S(wh("YOUR WORDS",{top:v(),fontSize:96,fill:w()?"#F7F2E8":"#14213D"}));let L=e("fx-text");L.value="YOUR WORDS",L.focus(),L.select()}function F(L){let I=s.getRoles();S(N1[L](v(),pf(I.accent)===pf(i.backgroundColor)?I.text:I.accent))}function O(L){if(!L||!/^image\//.test(L.type))return;let I=URL.createObjectURL(L),z=new Image;z.onload=()=>{let H=Math.min(1,1400/Math.max(z.naturalWidth,z.naturalHeight)),Y=document.createElement("canvas");Y.width=Math.max(1,Math.round(z.naturalWidth*H)),Y.height=Math.max(1,Math.round(z.naturalHeight*H)),Y.getContext("2d").drawImage(z,0,0,Y.width,Y.height),URL.revokeObjectURL(I),ln.fromURL(Y.toDataURL("image/jpeg",.88)).then(et=>{let ft=400/et.width;et.set(Object.assign({},Co,{top:v(),scaleX:ft,scaleY:ft})),S(ji(et))})},z.onerror=()=>URL.revokeObjectURL(I),z.src=I}df.forEach((L,I)=>{let z=document.createElement("option");z.value=String(I),z.textContent=L[0],e("fx-font").appendChild(z)}),s.palette.concat([["Bright white","#FFFFFF"]]).forEach(([L,I])=>{let z=document.createElement("button");z.type="button",z.className="fx-sw",z.style.background=I,z.title=L,z.setAttribute("aria-label",L),z.dataset.hex=I,e("fx-colors").appendChild(z)}),e("fx-colors").addEventListener("click",L=>{let I=L.target.closest("[data-hex]");if(!I||!i)return;let z=i.getActiveObject();z&&!(z instanceof ln)?z.set("fill",I.dataset.hex):z||(i.backgroundColor=I.dataset.hex),i.requestRenderAll(),y()}),e("fx-add").addEventListener("click",L=>{let I=L.target.closest("[data-add]");!I||!i||(I.dataset.add==="text"?P():F(I.dataset.add))}),e("fx-photo").addEventListener("change",L=>{O(L.target.files&&L.target.files[0]),L.target.value=""}),e("fx-text").addEventListener("input",L=>{let I=i&&i.getActiveObject();I instanceof Ve&&(I.set("text",L.target.value.length?L.target.value:" "),I.setCoords(),i.requestRenderAll(),clearTimeout(l),l=setTimeout(y,600))}),e("fx-font").addEventListener("change",L=>{let I=i&&i.getActiveObject(),z=df[+L.target.value];!(I instanceof Ve)||!z||ff(z[1],z[2]).then(()=>{I.set({fontFamily:z[1],fontWeight:z[2]}),I.setCoords(),i.requestRenderAll(),y()})});let G=L=>()=>{let I=i&&i.getActiveObject();I&&(L(I),i.requestRenderAll())};return e("fx-front").addEventListener("click",G(L=>{i.bringObjectForward(L),y()})),e("fx-back").addEventListener("click",G(L=>{i.sendObjectBackwards(L),y()})),e("fx-del").addEventListener("click",G(L=>{i.remove(L),i.discardActiveObject(),y(),g()})),e("fx-dup").addEventListener("click",G(L=>{L.clone().then(I=>{I.set({left:L.left+30,top:L.top+40}),S(ji(I))})})),e("fx-clear").addEventListener("click",()=>{i&&(i.remove(...i.getObjects()),i.discardActiveObject(),i.requestRenderAll(),y(),g())}),e("fx-more").addEventListener("click",()=>{i&&(i.discardActiveObject(),i.requestRenderAll(),g())}),e("fx-out").addEventListener("click",()=>{i&&f(u-1)}),e("fx-in").addEventListener("click",()=>{i&&f(u+1)}),e("fx-undo").addEventListener("click",T),e("fx-done").addEventListener("click",_),document.addEventListener("keydown",L=>{if(!t.hidden){if(L.key==="Escape"){_();return}if((L.key==="Delete"||L.key==="Backspace")&&!/^(INPUT|SELECT|TEXTAREA)$/.test(L.target.tagName)){let I=i&&i.getActiveObject();I&&(L.preventDefault(),i.remove(I),i.discardActiveObject(),i.requestRenderAll(),y(),g())}}}),{art:n,ensure:p,open:E,close:_}}var Ih=.0254,vf=5.25*Ih,Rh=34.5*Ih,j0=0,Y0=.03,mf=.045,Th=.15,yf=Y0+2*Rh+j0,Sf=.005,bf=.022,Ch=vf+.009,Eh=yf+Sf+bf,Tr=384,Ah=Math.round(Tr*34.5/5.25),Ph=Tr*.1875/5.25,de=476,Rs=3369,oi=6738,Yi=70,gf=(Tr-2*Ph)/de,Xt=Yi,Jt=Rs+Yi,Mf=[["Navy","#14213D"],["Royal","#1F4FBF"],["Sky","#6CB4EE"],["Forest","#14532D"],["Kelly","#1E9E4A"],["Teal","#178F8B"],["Maroon","#6B1524"],["Red","#B3202A"],["Coral","#EF6A55"],["Orange","#F26B21"],["Gold","#F2A900"],["Purple","#4B2A85"],["Pink","#E75480"],["Black","#161616"],["Silver","#B8BCC2"],["White","#F7F2E8"]],B0=Object.fromEntries(Mf),k0="#F7F2E8",Ps="#14213D",Dn="#FFD23F",In="#F7F2E8",Ao={graduation:{label:"Graduation",main:"Navy",accent:"Gold",name:"Maya",samples:["grad","caps","skyline","field","grad"]},birthday:{label:"Birthday",main:"Coral",accent:"Teal",name:"Eli",samples:["balloons","cake","bokeh","road","balloons"]},"senior-night":{label:"Senior night",main:"Maroon",accent:"Black",name:"Jordan",samples:["field","bokeh","skyline","field","road"]}};function z0(s){let t=parseInt(s.slice(1),16),e=[t>>16&255,t>>8&255,t&255].map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*e[0]+.7152*e[1]+.0722*e[2]}function Eo(s,t){let e=z0(s),n=z0(t);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}var Fa=s=>Eo(k0,s)>=2.4?k0:Ps;function Hn(s,t,e,n){return Eo(s,t)>=e?s:n}var It={occasion:"graduation",name:"",year:"2027",school:"",age:"10",number:"12",sport:"",team:"",line1:"",line2:"",line3:"",main:null,accent:null,photos:[],bw:!0,faces:["name","photos","name","photos"],msg:"",more:"",from:"",line4:"",link:"",signed:!1},vn=(s,t)=>String(s||"").trim()||t,q0={};function Tf(){let s=Ao[It.occasion],t=B0[It.main||s.main],e=B0[It.accent||s.accent],n=Fa(t),i=Hn(e,t,2.2,n),r=Eo(t,In)>=1.6?t:Eo(e,In)>=1.6?e:Ps,o=Fa(r),a=Hn(e,r,2.2,o),l=Eo(t,In)>=3?t:Eo(e,In)>=3?e:Ps,c=Fa(e);return{main:t,accent:e,text:n,accentText:i,blockBg:r,blockInk:o,blockAccent:a,caption:l,accentInk:c}}function He(s,t,e,n,i,r){s.fillStyle=r,s.fillRect(t,e,n,i)}function _f(s,t,e,n){He(s,0,t,de,e,n)}function Es(s,t,e,n){_f(s,0,Yi,t),_f(s,Rs-Yi,2*Yi,e),_f(s,oi-Yi,Yi,n)}function As(s,t,e,n,i=3){He(s,(de-e)/2,t,e,i,n)}function V0(s,t,e){let n=0;for(let i of t)n+=s.measureText(i).width+e;return n-e}function Cf(s,t,e,n,i){for(let r of t)s.fillText(r,e,n),e+=s.measureText(r).width+i}function Oh(s,t,e,n,i,r){s.font=e(n);let o=V0(s,t,i*n);return o>r&&(n=Math.max(8,Math.floor(n*r/o)),s.font=e(n),o=V0(s,t,i*n)),{size:n,w:o}}function qi(s,t,e,n,i=40,r=.3,o=600,a="Barlow",l=1.75){s.fillStyle=n,s.textAlign="left",s.textBaseline="alphabetic",t.forEach((c,h)=>{let u=String(c).toUpperCase(),d=Oh(s,u,f=>`${o} ${f}px "${a}"`,i,r,de-44);Cf(s,u,(de-d.w)/2,e+h*l*i+1.275*i,r*d.size)})}function wr(s,t,e,n,i,r,o=800,a=.03){let l=String(t).toUpperCase(),c=Oh(s,l,u=>`${o} ${u}px "Barlow Condensed"`,i,a,n),h=.7*c.size;s.save(),s.translate(de/2,e+(n-c.w)/2),s.rotate(Math.PI/2),s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Cf(s,l,0,h/2,a*c.size),s.restore()}function Cs(s,t,e,n,i){let r=Oh(s,t,o=>`800 ${o}px "Barlow Condensed"`,n,0,de-30);s.fillStyle=i,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,de/2,e+.83*n-(n-r.size)*.35)}function fn(s,t,e,n,i,r,o,a=44){He(s,34,t,de-68,e,n),i=i.filter(h=>String(h).trim());let l=1.5*a,c=t+(e-i.length*l)/2;s.textAlign="left",s.textBaseline="alphabetic",i.forEach((h,u)=>{let d=String(h).toUpperCase(),f=Oh(s,d,p=>`700 ${p}px "Barlow Condensed"`,a,.14,de-68-36);s.fillStyle=o&&u===0?o:r,Cf(s,d,(de-f.w)/2,c+u*l+1.15*a-(a-f.size)*.3,.14*f.size)})}var Gn=(s,t,e,n)=>qi(s,[t],e,n,30,.34,600);function B1(s,t,e,n,i,r,o=.38){let a=t.naturalWidth||t.width,l=t.naturalHeight||t.height,c=Math.max(i/a,r/l),h=i/c,u=r/c;s.drawImage(t,(a-h)/2,(l-u)*o,h,u,e,n,i,r)}function qe(s,t,e,n){let r=de-68;He(s,29,e-5,r+10,n+10,"#FFFFFF");let o=It.photos.length>0,a=o?It.photos[t]:q0[Ao[It.occasion].samples[t]];if(a){B1(s,o?It.bw?a.gray:a.color:a,34,e,r,n);return}He(s,34,e,r,n,"#E1DACB"),s.strokeStyle="#A99F8C",s.lineWidth=3,s.setLineDash([14,12]),s.strokeRect(48,e+14,r-28,n-28),s.setLineDash([]),He(s,de/2-26,e+n/2-3,52,6,"#A99F8C"),He(s,de/2-3,e+n/2-26,6,52,"#A99F8C")}function k1(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function G0(s,t,e,n,i,r){let o=k1(r);for(let a=0;a<i;a++){let l=o()<.5?8+o()*88:de-96+o()*88,c=e+o()*(n-e),h=9+o()*11;s.fillStyle=t[Math.floor(o()*t.length)],o()<.5?(s.beginPath(),s.arc(l+h/2,c+h/2,h/2,0,6.2832),s.fill()):(s.save(),s.translate(l+h*.75,c+h*.28),s.rotate((o()-.5)*2.1),s.fillRect(-h*.75,-h*.28,h*1.5,h*.55),s.restore())}}var z1=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one"],V1=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),G1={graduation:{A(s,t,e){He(s,0,0,de,oi,t.main),Es(s,t.accent,t.accent,t.accent),qi(s,["Congrats, grad"],Xt+150,t.accentText,32,.26),As(s,Xt+250,90,t.accentText),wr(s,e.name,Xt+420,1830,560,t.text),As(s,Xt+2330,90,t.accentText),qi(s,[e.school],Xt+2380,t.text,36,.22),wr(s,"Class of "+e.year,Jt+110,3e3,436,t.accentText)},B(s,t,e){He(s,0,0,de,oi,In),Es(s,t.accent,t.accent,t.accent),qe(s,0,Xt+90,900),Gn(s,"Freshman year",Xt+1020,t.caption),qe(s,1,Xt+1130,900),Gn(s,"Senior year",Xt+2060,t.caption),qe(s,2,Xt+2170,700),fn(s,Xt+2930,250,t.blockBg,[e.school,"Class of "+e.year],t.blockInk,t.blockAccent),fn(s,Jt+50,170,t.blockBg,["#"+V1(e.name).replace(/[^A-Za-z0-9]/g,"")+"Grad"+e.year.slice(-2)],t.blockAccent),qe(s,3,Jt+300,820),Gn(s,"Then",Jt+1150,t.caption),qe(s,4,Jt+1260,980),Gn(s,"And now",Jt+2270,t.caption),fn(s,Jt+2420,760,t.blockBg,[e.line1,e.line2,e.line3],t.blockInk,t.blockAccent,64)}},birthday:{A(s,t,e){He(s,0,0,de,oi,t.main);let n=[Hn(Dn,t.main,1.5,t.text),t.text,Hn(t.accent,t.main,1.5,t.text)];G0(s,n,Xt+60,Rs-Yi-60,34,5),G0(s,n,Jt+60,oi-Yi-60,34,8),Es(s,Dn,t.accent,Dn),qi(s,["Happy birthday"],Xt+150,t.text,32,.26),As(s,Xt+250,90,Hn(Dn,t.main,1.5,t.text)),wr(s,e.name,Xt+520,1500,660,t.text),As(s,Xt+2120,90,Hn(Dn,t.main,1.5,t.text));let i=parseInt(e.age,10);qi(s,["Look who is "+(z1[i]||e.age)],Xt+2170,t.text,32,.26);let r=String(e.age);r.length===1?Cs(s,r,Jt+690,1e3,t.text):r.length===2?(Cs(s,r[0],Jt+240,1e3,t.text),Cs(s,r[1],Jt+1140,1e3,t.text)):(Cs(s,r[0],Jt+210,720,t.text),Cs(s,r[1],Jt+890,720,t.text),Cs(s,r[2],Jt+1570,720,t.text)),fn(s,Jt+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,Hn(Dn,t.accent,2.2,t.accentInk),64)},B(s,t,e){He(s,0,0,de,oi,In),Es(s,Dn,t.accent,Dn),qe(s,0,Xt+90,980),Gn(s,"Look who is "+e.age,Xt+1100,t.caption),qe(s,1,Xt+1210,860),Gn(s,"Make a wish",Xt+2100,t.caption),qe(s,2,Xt+2210,900),fn(s,Jt+50,170,t.blockBg,[e.age+" years of "+e.name],t.blockInk),qe(s,3,Jt+300,900),Gn(s,"Then",Jt+1230,t.caption),qe(s,4,Jt+1340,900),Gn(s,"And now",Jt+2270,t.caption),fn(s,Jt+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,Hn(Dn,t.accent,2.2,t.accentInk),64)}},"senior-night":{A(s,t,e){He(s,0,0,de,oi,t.main),Es(s,t.accent,t.accent,t.accent),qi(s,["Senior night"],Xt+150,t.text,32,.26),As(s,Xt+250,90,t.text),wr(s,e.name,Xt+400,1850,520,t.text),Cs(s,e.number,Xt+2330,600,t.text),wr(s,"Senior night "+e.year,Jt+110,3e3,344,t.text)},B(s,t,e){He(s,0,0,de,oi,In),Es(s,t.accent,t.accent,t.accent),fn(s,Xt+60,330,t.blockBg,["#"+e.number],t.blockInk,null,190),qe(s,0,Xt+470,1e3),Gn(s,"Freshman year",Xt+1500,t.caption),qe(s,1,Xt+1610,760),Gn(s,"Senior year",Xt+2400,t.caption),fn(s,Xt+2520,250,Hn(t.accent,In,1.6,Ps),[e.sport],Fa(Hn(t.accent,In,1.6,Ps))),qe(s,2,Xt+2840,340),fn(s,Jt+50,170,Hn(t.accent,In,1.6,Ps),["Class of "+e.year],Fa(Hn(t.accent,In,1.6,Ps))),qe(s,3,Jt+300,1e3),Gn(s,"Under the lights",Jt+1330,t.caption),qe(s,4,Jt+1440,800),fn(s,Jt+2420,760,t.blockBg,[e.team,"Class of "+e.year],t.blockInk,null,44)}}},H0={name:"Big name",photos:"Photo strip",message:"Family message",party:"Party and QR code",sign:"Sign-it",free:"Design it yourself"},H1=typeof window<"u"&&Array.isArray(window.MP_HOLD)?window.MP_HOLD:[],Dh=null;function xf(s,t){It.occasion==="birthday"?Es(s,Dn,t.accent,Dn):Es(s,t.accent,t.accent,t.accent)}function W1(s){let t=String(s).trim(),e=t.length/2;if(t.length<=10||t.indexOf(" ")<0)return[t];let n=-1;for(let i=0;i<t.length;i++)t[i]===" "&&(n<0||Math.abs(i-e)<Math.abs(n-e))&&(n=i);return[t.slice(0,n),t.slice(n+1)]}function X1(s){return It.occasion==="birthday"?[s.name,"Turning "+s.age]:It.occasion==="senior-night"?[s.name,"#"+s.number]:[s.name,"Class of "+s.year]}function j1(s,t,e,n){let i;try{i=$u(0,"M"),i.addData(t),i.make()}catch{i=$u(0,"M"),i.addData("https://memorypostco.com"),i.make()}let r=i.getModuleCount(),o=3,a=n/(r+2*o),l=(de-n)/2;He(s,l,e,n,n,"#FFFFFF"),s.fillStyle=Ps;for(let c=0;c<r;c++)for(let h=0;h<r;h++)i.isDark(c,h)&&s.fillRect(l+(o+h)*a,e+(o+c)*a,a+.35,a+.35)}var wf=['600 {s}px "Caveat"','400 {s}px "Permanent Marker"','400 {s}px "Reenie Beanie"','400 {s}px "Covered By Your Grace"'],Y1=[[["So proud of you,","{NAME}!   Aunt Dana"],40,640,0,64,-4],[["GO GET 'EM","   Coach R."],150,905,1,40,3],[["Love you kiddo","      Grandpa"],56,1120,2,74,-2],[["Room 204 forever!","        Priya"],70,1370,3,54,4],[["Don't forget us :)","   Sam + Jo"],36,1650,0,60,-6],[["Keep running,","kid.   Mr. Alvarez"],84,1890,2,68,2],[["YOU DID IT!!","       Tess"],44,2180,1,44,-3],[["Proud neighbors","since day one","  The Okafors"],130,2370,3,52,3],[["Call your mother.","     Love, Dad"],44,2700,0,68,-3],[["Best friend ever.","       Dev"],60,2975,2,66,3],[["Number one fan","   your sister"],60,3560,0,66,-5],[["We watched you","grow up. So proud.","  Mrs. Lindqvist"],96,3830,3,50,2],[["CONGRATS {NAMEUP}","    Uncle Ray"],40,4170,1,42,-2],[["Save me a seat!","      Nana"],130,4420,0,60,5],[["Never change.","OK, change","a little.   Leo"],50,4770,2,72,-4],[["See you soon.","     Imani"],140,5150,3,54,3],[["Proud of you","always.   Mom"],48,5420,0,70,-3],[["WE LOVE YOU","   Tio Beto"],150,5720,1,36,2]];function q1(s,t){s.textAlign="left",s.textBaseline="top",Y1.forEach(([e,n,i,r,o,a])=>{let l=e.map(u=>u.replace("{NAMEUP}",t.name.toUpperCase()).replace("{NAME}",t.name));s.save(),s.translate(n,i),s.rotate(a*Math.PI/180),s.fillStyle="#1d1d1f",s.globalAlpha=.93,s.font=wf[r].replace("{s}",o);let c=Math.max.apply(null,l.map(u=>s.measureText(u).width)),h=de-n-14;c>h&&(o=Math.max(18,Math.floor(o*h/c)),s.font=wf[r].replace("{s}",o)),l.forEach((u,d)=>s.fillText(u,0,d*o)),s.restore()})}var W0={message(s,t,e){He(s,0,0,de,oi,t.main),xf(s,t),qi(s,["A note from home"],Xt+150,t.accentText,32,.26),As(s,Xt+250,90,t.accentText),wr(s,e.msg,Xt+360,2800,400,t.text),W1(e.more).forEach((n,i)=>Cs(s,n.toUpperCase(),Jt+190+i*125,118,t.accentText)),As(s,Jt+500,90,t.accentText),qe(s,4,Jt+600,1700),fn(s,Jt+2420,760,t.accent,["Love,",e.from],t.accentInk,null,52)},party(s,t,e){He(s,0,0,de,oi,t.main),xf(s,t),qi(s,["You are invited"],Xt+150,t.accentText,32,.26),As(s,Xt+250,90,t.accentText),wr(s,e.line1,Xt+380,2780,500,t.accentText),fn(s,Jt+60,640,t.accent,[e.line2,e.line3,e.line4],t.accentInk,null,46),j1(s,e.link,Jt+860,360),qi(s,["Scan for","the album"],Jt+1250,t.text,30,.34,600),qe(s,3,Jt+1500,760),fn(s,Jt+2420,760,In,X1(e),t.caption,null,52)},sign(s,t,e){He(s,0,0,de,oi,In),xf(s,t),fn(s,Xt+60,330,t.blockBg,["Leave "+e.name,"a note"],t.blockInk,t.blockAccent,62),Gn(s,"Sign anywhere",Xt+440,t.caption),It.signed&&q1(s,e),fn(s,Jt+2810,370,t.blockBg,["Thank you","for coming"],t.blockInk,t.blockAccent,52)}};function Z1(s,t,e,n){let i=Dh&&Dh[t]&&Dh[t][e];i&&i.bmp?s.drawImage(i.bmp,0,e*Rs,de,Rs):He(s,0,e*Rs,de,Rs,n.main)}function J1(){let s=Z0(),t=It.occasion,e=Tf();return{name:s.name,head:t==="birthday"?"Happy birthday":t==="senior-night"?"Senior night":"Congrats, grad",second:t==="birthday"?"Turning "+s.age:t==="senior-night"?"Senior night "+s.year:"Class of "+s.year,bandTop:t==="birthday"?Dn:e.accent,bandMid:e.accent,bandBottom:t==="birthday"?Dn:e.accent}}function K1(s,t,e,n){let i=G1[It.occasion];s==="photos"?i.B(t,e,n):W0[s]?W0[s](t,e,n):i.A(t,e,n)}function Z0(){let s=Ao[It.occasion],t=It.occasion==="graduation";return{name:vn(It.name,s.name).slice(0,16),year:vn(It.year,"2027").replace(/[^0-9]/g,"").slice(0,4)||"2027",school:vn(It.school,"Northside High").slice(0,26),age:String(Math.min(120,Math.max(1,parseInt(It.age,10)||10))),number:vn(It.number,"12").replace(/[^0-9]/g,"").slice(0,2)||"12",sport:vn(It.sport,"Varsity soccer").slice(0,22),team:vn(It.team,"Northside Hawks").slice(0,22),line1:vn(It.line1,t?"Open house":"Party").slice(0,16),line2:vn(It.line2,t?"Sat June 12":"Sat May 8").slice(0,16),line3:vn(It.line3,t?"2 to 6 pm":"2 pm").slice(0,16),line4:vn(It.line4,"418 Alder Lane").slice(0,18),msg:vn(It.msg,"So proud of you").slice(0,18),more:vn(It.more,"We saw all of it.").slice(0,24),from:vn(It.from,"Mom and Dad").slice(0,16),link:vn(It.link,"https://memorypostco.com").slice(0,120)}}function $1(s){let e=s.naturalWidth,n=s.naturalHeight,i=Math.min(1,720/Math.max(e,n)),r=Math.max(1,Math.round(e*i)),o=Math.max(1,Math.round(n*i)),a=document.createElement("canvas");a.width=r,a.height=o,a.getContext("2d").drawImage(s,0,0,r,o);let l=document.createElement("canvas");l.width=r,l.height=o;let c=l.getContext("2d");c.drawImage(a,0,0);let h=c.getImageData(0,0,r,o),u=h.data;for(let d=0;d<u.length;d+=4){let f=.299*u[d]+.587*u[d+1]+.114*u[d+2];f=Math.max(0,Math.min(255,(f-128)*1.06+128)),u[d]=u[d+1]=u[d+2]=f}return c.putImageData(h,0,0),{color:a,gray:l,width:r,height:o,naturalWidth:r,naturalHeight:o}}function Q1(s,t){let e=Array.from(s).filter(r=>/^image\//.test(r.type)).slice(0,5),n=e.length,i=[];if(!n)return t(i);e.forEach((r,o)=>{let a=URL.createObjectURL(r),l=new Image;l.onload=()=>{try{i[o]=$1(l)}catch{}URL.revokeObjectURL(a),--n||t(i.filter(Boolean))},l.onerror=()=>{URL.revokeObjectURL(a),--n||t(i.filter(Boolean))},l.src=a})}function tw(s){let t=s.querySelector("#make-stage"),e=s.querySelector("#make-canvas"),n=e.getContext&&e.getContext("2d");if(!n)return null;let i=document.createElement("canvas"),r;try{r=new Tc({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}if(!r.getContext())return null;r.outputColorSpace=je,r.toneMapping=Un,r.shadowMap.enabled=!0,r.shadowMap.type=Vs;let o=Math.min(window.innerWidth,window.innerHeight)<700,a=new Vo,l=document.createElement("canvas");l.width=64,l.height=256;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,256);[[0,"#86A9E4"],[.3,"#C4D8F3"],[.44,"#FFFFFF"],[.5,"#FFFFFF"],[.53,"#8E978B"],[1,"#596257"]].forEach(([wt,Ut])=>h.addColorStop(wt,Ut)),c.fillStyle=h,c.fillRect(0,0,64,256);let u=new ks(l);u.mapping=Kr,u.colorSpace=je;let d=()=>{let wt=new to(r);a.environment=wt.fromEquirectangular(u).texture,wt.dispose()};d(),a.add(new Ko(16777215,12765627,1.02));let f=new Qo(16774890,3.3);f.position.set(-.8,4.9,3.3),f.target.position.set(0,.9,0),f.castShadow=!0,f.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(f.shadow.camera,{left:-1.2,right:1.2,top:1.4,bottom:-1.2,near:1,far:9}),f.shadow.bias=-4e-4,f.shadow.normalBias=.002,f.shadow.radius=7,a.add(f,f.target);let p=Math.min(8,r.capabilities.getMaxAnisotropy()),x=[],m=wt=>(x[wt]||(x[wt]=[0,1].map(()=>{let Ut=document.createElement("canvas");Ut.width=Tr,Ut.height=Ah;let U=new ks(Ut);return U.colorSpace=je,U.anisotropy=p,U.minFilter=Zn,U.magFilter=Ye,U.generateMipmaps=!0,{cv:Ut,t:U}})),x[wt]),g=new jr({color:15131612}),y=[0,1,2,3].map(wt=>[0,1].map(Ut=>new jr({map:m(wt%2)[Ut].t}))),R=new qo({color:14869216,roughness:.26,metalness:1,envMapIntensity:1.25}),T=new Bs({color:789516}),E=new Ii;a.add(E);let A=(wt,Ut,U,Me=!0)=>{let Gt=new pn(wt,Ut);return Gt.position.y=U,Gt.castShadow=Me,E.add(Gt),Gt};[1,0].forEach((wt,Ut)=>{let U=[y[1][wt],y[3][wt],g,g,y[0][wt],y[2][wt]];A(new Tn(vf,Rh,vf),U,Y0+Rh/2+Ut*(Rh+j0))}),A(new Tn(5*Ih,.03,5*Ih),g,yf+Sf-.015,!1),A(new Tn(Ch,bf-.003,Ch),R,yf+Sf+(bf-.003)/2),A(new Tn(Ch-.006,.003,Ch-.006),R,Eh-.0015),A(new Tn(Th,mf-.004,Th),R,(mf-.004)/2),A(new Tn(Th-.008,.004,Th-.008),R,mf-.002);let _=new pn(new os(6,6),new Yo({opacity:.2}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,a.add(_);let v=document.createElement("canvas");v.width=v.height=128;let C=v.getContext("2d"),S=C.createRadialGradient(64,64,4,64,64,62);S.addColorStop(0,"rgba(0,0,0,.5)"),S.addColorStop(.45,"rgba(0,0,0,.2)"),S.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=S,C.fillRect(0,0,128,128);let w=new pn(new os(.46,.46),new Bs({map:new ks(v),transparent:!0,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=.0015,a.add(w);let P=new zs(-1,1,1,-1,.1,40),F=.115,O=new q(0,Eh/2-.02,0),G=-.7,L=0,I=null,z=!0,H=!1,Y=0,et=0,ft=0,St=1,K=1,lt=1.36,xt=1.06,Pt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,pt=s.querySelector("#mk-zoom");function Nt(){let wt=Math.max(1.06,.15*ft/et);K=Math.max(1,Math.min(2.3,2*wt*et/ft/.3)),St>K&&(St=1),xt=wt/St,P.top=xt,P.bottom=-xt,P.left=-xt*et/ft,P.right=xt*et/ft,St>1&&(lt=Math.max(xt-.1,Math.min(Eh+.12-xt,lt))),O.set(0,St>1?lt:Eh/2-.02,0),P.position.set(0,O.y+Math.sin(F)*12,Math.cos(F)*12),P.lookAt(O),P.updateProjectionMatrix(),P.updateMatrixWorld();let Ut=new q(0,0,0).project(P);t.style.setProperty("--lawn",Math.max(0,Math.round((Ut.y+1)/2*ft+ft*.125*St))+"px"),pt&&(pt.hidden=K<1.4,pt.setAttribute("aria-pressed",St>1?"true":"false"),pt.textContent=St>1?"Zoom out":"Zoom"),e.style.touchAction=St>1?"none":"pan-y",z=!0,Kt()}function re(){E.rotation.y=G,r.render(a,P),n.clearRect(0,0,e.width,e.height),n.drawImage(i,0,0),z=!1}function Ft(){let wt=e.clientWidth,Ut=e.clientHeight;!wt||!Ut||(et=wt,ft=Ut,r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(et,ft,!1),Nt(),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height),H&&re())}function oe(){if(Y=0,I!==null){let wt=I-G;Math.abs(wt)<.002?(G=I,I=null):G+=wt*.16,z=!0}Math.abs(L)>4e-4?(G+=L,L*=.93,z=!0):L=0,z&&et&&H&&re(),(I!==null||L!==0)&&Kt()}i.addEventListener("webglcontextrestored",()=>{d(),x.forEach(wt=>wt.forEach(Ut=>{Ut.t.needsUpdate=!0})),z=!0,Kt()});function Kt(){Y||(Y=requestAnimationFrame(oe))}let jt=!1,Ae=0,be=0;e.addEventListener("pointerdown",wt=>{jt=!0,Ae=wt.clientX,be=wt.clientY,L=0,I=null;try{e.setPointerCapture(wt.pointerId)}catch{}t.classList.add("turned")}),e.addEventListener("pointermove",wt=>{if(!jt)return;let Ut=wt.clientX-Ae,U=wt.clientY-be;Ae=wt.clientX,be=wt.clientY,G+=Ut*.011,L=Ut*.011,St>1&&U&&(lt+=U*(2*xt/ft),Nt()),z=!0,Kt()}),pt&&pt.addEventListener("click",()=>{St=St>1?1:K,t.classList.add("turned"),Nt()});let We=()=>{jt=!1,Kt()};e.addEventListener("pointerup",We),e.addEventListener("pointercancel",We);let ge=wt=>{L=0;let Ut=Math.PI/2;I=Math.round(((I===null?G:I)- -.7)/Ut+wt)*Ut-.7,t.classList.add("turned"),Kt()};function On(){let wt=Tf(),Ut=Z0(),U=[],Me=It.faces.map((Gt,le)=>Gt==="free"?"free"+le:Gt);Me.forEach(Gt=>{U.indexOf(Gt)<0&&U.push(Gt)}),U.forEach((Gt,le)=>[0,1].forEach(at=>{let{cv:_e,t:Ot}=m(le)[at],At=_e.getContext("2d");At.setTransform(1,0,0,1,0,0),At.fillStyle="#EEECE6",At.fillRect(0,0,Tr,Ah),At.save(),At.beginPath(),At.rect(Ph,0,Tr-2*Ph,Ah),At.clip(),At.setTransform(gf,0,0,gf,Ph,-at*Rs*gf),Gt.slice(0,4)==="free"?Z1(At,+Gt.slice(4),at,wt):K1(Gt,At,wt,Ut),At.restore(),At.setTransform(1,0,0,1,0,0),At.fillStyle="rgba(0,0,0,.26)",At.fillRect(0,at===0?Ah-2:0,Tr,2),Ot.needsUpdate=!0})),Me.forEach((Gt,le)=>[0,1].forEach(at=>{let _e=y[le][at],Ot=m(U.indexOf(Gt))[at].t;_e.map!==Ot&&(_e.map=Ot,_e.needsUpdate=!0)})),H=!0,z=!0,Kt()}"ResizeObserver"in window?new ResizeObserver(Ft).observe(t):window.addEventListener("resize",Ft),Ft(),Pt||(G=-1.75,I=-.7);let Re=wt=>{L=0;let Ut=wt===0?-.7:-1.22-(wt-1)*Math.PI/2,U=I===null?G:I,Me=2*Math.PI;Ut+=Math.round((U-Ut)/Me)*Me,I=Ut,Kt()};return{paint:On,turn:ge,showSide:Re,front:()=>{let wt=0,Ut=9;for(let U=0;U<4;U++){let Me=Math.abs(((G+U*Math.PI/2)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);Me<Ut&&(Ut=Me,wt=U)}return wt},show:wt=>{let Ut=It.faces.indexOf(wt==="B"?"photos":"name");Re(Ut<0?0:Ut)}}}function X0(){let s=document.getElementById("make");if(!s)return;let t=tw(s);if(!t)return;let e=s.closest("section"),n=S=>s.querySelector("#"+S),i=0,r=!1,o=S=>{clearTimeout(i),i=setTimeout(t.paint,S?0:70)},a=S=>{S.isTrusted!==!1&&!r&&(r=!0,A())};s.addEventListener("input",a,!0),s.addEventListener("change",a,!0),s.addEventListener("click",S=>{S.target.closest&&S.target.closest("[data-occ],.make-turn button,#mk-clear,#mk-design,#mk-free button")&&a(S)},!0),n("make-canvas").addEventListener("pointerdown",a);let l=(S,w)=>{let P=n(S);Mf.forEach(([F,O])=>{let G=document.createElement("label");G.className="swc",G.title=F,G.innerHTML=`<input type="radio" name="${w}" value="${F}"><span style="background:${O}"></span><b>${F}</b>`,P.appendChild(G)}),P.addEventListener("change",F=>{It[w]=F.target.value,A(),o(!0)})};l("mk-main","main"),l("mk-accent","accent");let c=()=>{let S=Ao[It.occasion];s.querySelectorAll('input[name="main"]').forEach(w=>{w.checked=w.value===(It.main||S.main)}),s.querySelectorAll('input[name="accent"]').forEach(w=>{w.checked=w.value===(It.accent||S.accent)})};function h(){s.querySelectorAll("[data-for],[data-face]").forEach(S=>{let w=S.dataset.for,P=S.dataset.face,F=w?w.split(" ").indexOf(It.occasion)>=0:!1,O=P?P.split(" ").some(G=>It.faces.indexOf(G)>=0):!1;S.hidden=!(F||O)})}function u(S){It.occasion=S,s.querySelectorAll("[data-occ]").forEach(F=>F.setAttribute("aria-pressed",F.dataset.occ===S?"true":"false")),h();let w=Ao[S],P=S==="graduation";n("mk-name").placeholder=w.name,n("mk-l1").placeholder=P?"Open house":"Party",n("mk-l2").placeholder=P?"Sat June 12":"Sat May 8",n("mk-l3").placeholder=P?"2 to 6 pm":"2 pm",c(),A(),t.show("A"),o(!0)}s.querySelectorAll("[data-occ]").forEach(S=>S.addEventListener("click",()=>u(S.dataset.occ)));let d=(S,w)=>{let P=n(S);P&&P.addEventListener("input",()=>{It[w]=P.value,o(!1)})};[["mk-name","name"],["mk-year","year"],["mk-school","school"],["mk-age","age"],["mk-number","number"],["mk-sport","sport"],["mk-team","team"],["mk-l1","line1"],["mk-l2","line2"],["mk-l3","line3"],["mk-year2","year"]].forEach(([S,w])=>d(S,w)),[["mk-msg","msg"],["mk-more","more"],["mk-from","from"],["mk-l4","line4"],["mk-link","link"]].forEach(([S,w])=>d(S,w));let f=document.getElementById("fx"),p=f?U0({overlay:f,palette:Mf,getRoles:Tf,getWords:J1,onDone:S=>{t.showSide(S),o(!0)}}):null;Dh=p?p.art:null;let x=n("mk-free");function m(){x&&(x.textContent="",It.faces.forEach((S,w)=>{S==="free"&&[0,1].forEach(P=>{let F=document.createElement("button");F.type="button",F.className="btn btn-line",F.textContent="Edit face "+(w+1)+", "+(P===0?"top half":"bottom half"),F.addEventListener("click",()=>p.open(w,P)),x.appendChild(F)})}))}let g=n("mk-design");g&&(g.hidden=!p,p&&g.addEventListener("click",()=>{let S=It.faces.indexOf("free");if(S<0){S=t.front(),It.faces[S]="free";let w=n("mk-face"+(S+1));w&&(w.value="free")}p.ensure(S).then(()=>{h(),m(),o(!0),p.open(S,0)})})),[0,1,2,3].forEach(S=>{let w=n("mk-face"+(S+1));w&&(Object.keys(H0).forEach(P=>{if(P==="free"&&!p||H1.indexOf(P)>=0)return;let F=document.createElement("option");F.value=P,F.textContent=H0[P],w.appendChild(F)}),w.value=It.faces[S],w.addEventListener("change",()=>{It.faces[S]=w.value;let P=()=>{h(),m(),t.showSide(S),o(!0)};w.value==="free"?p.ensure(S).then(P):P()}))}),s.querySelectorAll("[data-face]").forEach(S=>S.addEventListener("focusin",()=>{let w=It.faces.indexOf(S.dataset.face.split(" ")[0]);w>=0&&t.showSide(w)}));let y=n("mk-signed");y&&y.addEventListener("change",()=>{It.signed=y.checked,o(!0),It.signed&&document.fonts&&document.fonts.load&&Promise.all(wf.map(S=>document.fonts.load(S.replace("{s}","40")))).then(()=>o(!0)).catch(()=>{})}),n("mk-year").addEventListener("input",()=>{n("mk-year2").value=n("mk-year").value}),n("mk-year2").addEventListener("input",()=>{n("mk-year").value=n("mk-year2").value});let R=n("mk-photo-note"),T=s.querySelector('label[for="mk-photos"]'),E=S=>{let w=It.photos.length;T&&(T.textContent=w===0?"Add up to 5 photos":w<5?"Add more photos":"Swap in new photos"),n("mk-clear").hidden=w===0,R.textContent=(S?"That file could not be read. Try a JPG or PNG photo. ":"")+(w===0?"Sample photos are showing. Yours stay on your device.":w+" of 5 photos on the post. They stay on your device.")};n("mk-photos").addEventListener("change",S=>{let w=S.target.files?S.target.files.length:0;Q1(S.target.files,P=>{P.length&&(It.photos=It.photos.concat(P).slice(-5),t.show("B")),E(w>0&&!P.length),S.target.value="",A(),o(!0)})}),n("mk-clear").addEventListener("click",()=>{It.photos=[],E(!1),A(),o(!0)}),n("mk-bw").addEventListener("change",S=>{It.bw=S.target.checked,o(!0)}),n("mk-left").addEventListener("click",()=>t.turn(-1)),n("mk-right").addEventListener("click",()=>t.turn(1));function A(){let S=Ao[It.occasion];window.MP_DESIGN=r?"Tried the preview: "+S.label+", "+(It.main||S.main)+" and "+(It.accent||S.accent)+".":""}let _=n("mk-join");_&&_.addEventListener("click",()=>{let S=document.getElementById("f-occasion");S&&(S.selectedIndex={graduation:0,birthday:1,"senior-night":2}[It.occasion])}),["grad","caps","skyline","field","road","balloons","cake","bokeh"].forEach(S=>{let w=new Image;w.onload=()=>{q0[S]=w,o(!1)},w.src="img/sample-"+S+".jpg"}),(document.fonts&&document.fonts.load?Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 32px "Barlow"')]).catch(()=>{}):Promise.resolve()).then(()=>o(!0)),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>o(!0)),e.classList.add("has-make"),s.hidden=!1,u("graduation"),window.dispatchEvent(new Event("resize"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",X0):X0();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
