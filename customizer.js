/* Memory Post try-it preview. Uses three.js (MIT License, Copyright 2010-2026 three.js authors), fabric.js (MIT License, Copyright 2008-2015 Printio) and qrcode-generator (MIT License, Copyright 2009 Kazuhiko Arase). */
var $p=0,id=1,Qp=2;var vr=1,tm=2,Eo=3,Hs=0,Dn=1,Xi=2,yr=0,Ao=1,sd=2,rd=3,od=4,em=5;var Sr=100,nm=101,im=102,sm=103,rm=104,om=200,am=201,lm=202,cm=203,ad=204,ld=205,hm=206,um=207,dm=208,fm=209,pm=210,mm=211,gm=212,_m=213,xm=214,ql=0,Zl=1,Kl=2,vo=3,Jl=4,$l=5,Ql=6,tc=7,Cc=0,vm=1,ym=2,ci=0,cd=1,hd=2,ud=3,dd=4,fd=5,pd=6,md=7;var gd=300,br=301,Ro=302,Po=303,Ec=304,ec=1e3,ki=1001,nc=1002,ln=1003,Sm=1004;var Fa=1005;var mn=1006,Ac=1007;var Mi=1008;var zn=1009,_d=1010,xd=1011,Do=1012,Rc=1013,wi=1014,Ti=1015,Ci=1016,Pc=1017,Dc=1018,Mr=1020,vd=35902,yd=35899,Sd=1021,bd=1022,Ei=1023,ds=1026,ps=1027,Md=1028,Ic=1029,Ws=1030,Oc=1031;var Lc=1033,Na=33776,Ua=33777,ka=33778,Ba=33779,Fc=35840,Nc=35841,Uc=35842,kc=35843,Bc=36196,zc=37492,Vc=37496,Gc=37488,Hc=37489,za=37490,Wc=37491,Xc=37808,jc=37809,Yc=37810,qc=37811,Zc=37812,Kc=37813,Jc=37814,$c=37815,Qc=37816,th=37817,eh=37818,nh=37819,ih=37820,sh=37821,rh=36492,oh=36494,ah=36495,lh=36283,ch=36284,Va=36285,hh=36286;var ga=2300,ic=2301,jl=2302,Ku=2303,Ju=2400,$u=2401,Qu=2402;var bm=3200;var Ga=0,Mm=1,ms="",pn="srgb",_a="srgb-linear",xa="linear",we="srgb";var Yl=7680;var wm=519,Tm=512,Cm=513,Em=514,wd=515,Am=516,Rm=517,Td=518,Cd=519,Pm=35044;var Ed="300 es",ai=2e3,yo=2001;function X_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function j_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dm(){let s=va("canvas");return s.style.display="block",s}var Rp={},So=null;function Ad(...s){let t="THREE."+s.shift();So?So("log",t,...s):console.log(t,...s)}function Im(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Zt(...s){s=Im(s);let t="THREE."+s.shift();if(So)So("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Jt(...s){s=Im(s);let t="THREE."+s.shift();if(So)So("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ma(...s){let t=s.join(" ");t in Rp||(Rp[t]=!0,Zt(...s))}function Om(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Lm={[ql]:ql,[Kl]:Ql,[Jl]:Jl,[vo]:$l,[Zl]:Zl,[Ql]:Kl,[tc]:tc,[$l]:vo},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Au=Math.PI/180,sc=180/Math.PI;function Ha(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function me(s,t,e){return Math.max(t,Math.min(e,s))}function Y_(s,t){return(s%t+t)%t}function Ru(s,t,e){return(1-e)*s+e*t}function Fm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rd(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function q_(s,t){if(t.constructor===Float32Array)return s;let e=Rd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Z_(s,t){if(t.constructor===Float32Array)return s;let e=Rd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var pe=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);g=Math.sin(g*S)/A,a=Math.sin(a*S)/A,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},it=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pu.copy(this).projectOnVector(t),this.sub(Pu)}reflect(t){return this.sub(Pu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pu=new it,Pp=new Vi,$t=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],S=i[1],A=i[4],w=i[7],E=i[2],R=i[5],_=i[8];return r[0]=o*x+a*S+l*E,r[3]=o*m+a*A+l*R,r[6]=o*g+a*w+l*_,r[1]=c*x+h*S+u*E,r[4]=c*m+h*A+u*R,r[7]=c*g+h*w+u*_,r[2]=d*x+f*S+p*E,r[5]=d*m+f*A+p*R,r[8]=d*g+f*w+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Du.makeScale(t,e)),this}rotate(t){return ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Du.makeRotation(-t)),this}translate(t,e){return ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Du.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Du=new $t,Dp=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ip=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K_(){let s={enabled:!0,workingColorSpace:_a,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(i.r=xo(i.r),i.g=xo(i.g),i.b=xo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ms?xa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[_a]:{primaries:t,whitePoint:n,transfer:xa,toXYZ:Dp,fromXYZ:Ip,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:we,toXYZ:Dp,fromXYZ:Ip,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}var fe=K_();function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var so,rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{so===void 0&&(so=va("canvas")),so.width=t.width,so.height=t.height;let i=so.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=so}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=va("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=us(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(us(e[n]/255)*255):e[n]=us(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},J_=0,bo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ha(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Iu(i[o].image)):r.push(Iu(i[o]))}else r=Iu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Iu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var $_=0,Ou=new it,Pn=class s extends zi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ki,i=ki,r=mn,o=Mi,a=Ei,l=zn,c=s.DEFAULT_ANISOTROPY,h=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ha(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ec:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ec:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=gd;Pn.DEFAULT_ANISOTROPY=1;var ze=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,w=(f+1)/2,E=(g+1)/2,R=(h+d)/4,_=(u+x)/4,v=(p+m)/4;return A>w&&A>E?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=R/n,r=_/n):w>E?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=R/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=_/r,i=v/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oc=class extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Pn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new bo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends Pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ac=class extends Pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Be=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ro.setFromMatrixColumn(t,0).length(),r=1/ro.setFromMatrixColumn(t,1).length(),o=1/ro.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q_,t,tx)}lookAt(t,e,n){let i=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ps.crossVectors(n,jn),Ps.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ps.crossVectors(n,jn)),Ps.normalize(),Cl.crossVectors(jn,Ps),i[0]=Ps.x,i[4]=Cl.x,i[8]=jn.x,i[1]=Ps.y,i[5]=Cl.y,i[9]=jn.y,i[2]=Ps.z,i[6]=Cl.z,i[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],S=n[3],A=n[7],w=n[11],E=n[15],R=i[0],_=i[4],v=i[8],T=i[12],C=i[1],P=i[5],F=i[9],z=i[13],I=i[2],X=i[6],q=i[10],U=i[14],et=i[3],L=i[7],H=i[11],Z=i[15];return r[0]=o*R+a*C+l*I+c*et,r[4]=o*_+a*P+l*X+c*L,r[8]=o*v+a*F+l*q+c*H,r[12]=o*T+a*z+l*U+c*Z,r[1]=h*R+u*C+d*I+f*et,r[5]=h*_+u*P+d*X+f*L,r[9]=h*v+u*F+d*q+f*H,r[13]=h*T+u*z+d*U+f*Z,r[2]=p*R+x*C+m*I+g*et,r[6]=p*_+x*P+m*X+g*L,r[10]=p*v+x*F+m*q+g*H,r[14]=p*T+x*z+m*U+g*Z,r[3]=S*R+A*C+w*I+E*et,r[7]=S*_+A*P+w*X+E*L,r[11]=S*v+A*F+w*q+E*H,r[15]=S*T+A*z+w*U+E*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],S=l*f-c*d,A=a*f-c*u,w=a*d-l*u,E=o*f-c*h,R=o*d-l*h,_=o*u-a*h;return e*(x*S-m*A+g*w)-n*(p*S-m*E+g*R)+i*(p*A-x*E+g*_)-r*(p*w-x*R+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],S=e*a-n*o,A=e*l-i*o,w=e*c-r*o,E=n*l-i*a,R=n*c-r*a,_=i*c-r*l,v=h*x-u*p,T=h*m-d*p,C=h*g-f*p,P=u*m-d*x,F=u*g-f*x,z=d*g-f*m,I=S*z-A*F+w*P+E*C-R*T+_*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/I;return t[0]=(a*z-l*F+c*P)*X,t[1]=(i*F-n*z-r*P)*X,t[2]=(x*_-m*R+g*E)*X,t[3]=(d*R-u*_-f*E)*X,t[4]=(l*C-o*z-c*T)*X,t[5]=(e*z-i*C+r*T)*X,t[6]=(m*w-p*_-g*A)*X,t[7]=(h*_-d*w+f*A)*X,t[8]=(o*F-a*C+c*v)*X,t[9]=(n*C-e*F-r*v)*X,t[10]=(p*R-x*w+g*S)*X,t[11]=(u*w-h*R-f*S)*X,t[12]=(a*T-o*P-l*v)*X,t[13]=(e*P-n*T+i*v)*X,t[14]=(x*A-p*E-m*S)*X,t[15]=(h*E-u*A+d*S)*X,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,S=l*c,A=l*h,w=l*u,E=n.x,R=n.y,_=n.z;return i[0]=(1-(x+g))*E,i[1]=(f+w)*E,i[2]=(p-A)*E,i[3]=0,i[4]=(f-w)*R,i[5]=(1-(d+g))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(p+A)*_,i[9]=(m-S)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ro.set(i[0],i[1],i[2]).length(),a=ro.set(i[4],i[5],i[6]).length(),l=ro.set(i[8],i[9],i[10]).length();r<0&&(o=-o),vi.copy(this);let c=1/o,h=1/a,u=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=u,vi.elements[9]*=u,vi.elements[10]*=u,e.setFromRotationMatrix(vi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=ai,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ai)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ai,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ai)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===yo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ro=new it,vi=new Be,Q_=new it(0,0,0),tx=new it(1,1,1),Ps=new it,Cl=new it,jn=new it,Op=new Be,Lp=new Vi,Gi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Op.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Op,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";var Sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ex=0,Fp=new it,oo=new Vi,rs=new Be,El=new it,ua=new it,nx=new it,ix=new Vi,Np=new it(1,0,0),Up=new it(0,1,0),kp=new it(0,0,1),Bp={type:"added"},sx={type:"removed"},ao={type:"childadded",child:null},Lu={type:"childremoved",child:null},Mn=class s extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new it,e=new Gi,n=new Vi,i=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new $t}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(Np,t)}rotateY(t){return this.rotateOnAxis(Up,t)}rotateZ(t){return this.rotateOnAxis(kp,t)}translateOnAxis(t,e){return Fp.copy(t).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Np,t)}translateY(t){return this.translateOnAxis(Up,t)}translateZ(t){return this.translateOnAxis(kp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?El.copy(t):El.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(ua,El,this.up):rs.lookAt(El,ua,this.up),this.quaternion.setFromRotationMatrix(rs),i&&(rs.extractRotation(i.matrixWorld),oo.setFromRotationMatrix(rs),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bp),ao.child=t,this.dispatchEvent(ao),ao.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sx),Lu.child=t,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bp),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,nx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new it(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hs=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},rx={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Al={h:0,s:0,l:0};function Fu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=Y_(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fu(o,r,t+1/3),this.g=Fu(o,r,t),this.b=Fu(o,r,t-1/3)}return fe.colorSpaceToWorking(this,i),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=Nm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return fe.workingToColorSpace(bn.copy(this),t),Math.round(me(bn.r*255,0,255))*65536+Math.round(me(bn.g*255,0,255))*256+Math.round(me(bn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,r=bn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=pn){fe.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(Al);let n=Ru(Ds.h,Al.h,e),i=Ru(Ds.s,Al.s,e),r=Ru(Ds.l,Al.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new re;re.NAMES=Nm;var ba=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yi=new it,os=new it,Nu=new it,as=new it,lo=new it,co=new it,zp=new it,Uu=new it,ku=new it,Bu=new it,zu=new ze,Vu=new ze,Gu=new ze,Fs=class s{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yi.subVectors(t,e),i.cross(yi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yi.subVectors(i,e),os.subVectors(n,e),Nu.subVectors(t,e);let o=yi.dot(yi),a=yi.dot(os),l=yi.dot(Nu),c=os.dot(os),h=os.dot(Nu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,as)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,as.x),l.addScaledVector(o,as.y),l.addScaledVector(a,as.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return zu.setScalar(0),Vu.setScalar(0),Gu.setScalar(0),zu.fromBufferAttribute(t,e),Vu.fromBufferAttribute(t,n),Gu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(zu,r.x),o.addScaledVector(Vu,r.y),o.addScaledVector(Gu,r.z),o}static isFrontFacing(t,e,n,i){return yi.subVectors(n,e),os.subVectors(t,e),yi.cross(os).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),os.subVectors(this.a,this.b),yi.cross(os).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;lo.subVectors(i,n),co.subVectors(r,n),Uu.subVectors(t,n);let l=lo.dot(Uu),c=co.dot(Uu);if(l<=0&&c<=0)return e.copy(n);ku.subVectors(t,i);let h=lo.dot(ku),u=co.dot(ku);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(lo,o);Bu.subVectors(t,r);let f=lo.dot(Bu),p=co.dot(Bu);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(co,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return zp.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(zp,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(lo,o).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ns=class{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(t.matrixWorld),this.union(Rl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(da),Pl.subVectors(this.max,da),ho.subVectors(t.a,da),uo.subVectors(t.b,da),fo.subVectors(t.c,da),Is.subVectors(uo,ho),Os.subVectors(fo,uo),dr.subVectors(ho,fo);let e=[0,-Is.z,Is.y,0,-Os.z,Os.y,0,-dr.z,dr.y,Is.z,0,-Is.x,Os.z,0,-Os.x,dr.z,0,-dr.x,-Is.y,Is.x,0,-Os.y,Os.x,0,-dr.y,dr.x,0];return!Hu(e,ho,uo,fo,Pl)||(e=[1,0,0,0,1,0,0,0,1],!Hu(e,ho,uo,fo,Pl))?!1:(Dl.crossVectors(Is,Os),e=[Dl.x,Dl.y,Dl.z],Hu(e,ho,uo,fo,Pl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ls=[new it,new it,new it,new it,new it,new it,new it,new it],Si=new it,Rl=new Ns,ho=new it,uo=new it,fo=new it,Is=new it,Os=new it,dr=new it,da=new it,Pl=new it,Dl=new it,fr=new it;function Hu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fr.fromArray(s,r);let a=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),l=t.dot(fr),c=e.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ke=new it,Il=new pe,ox=0,Bi=class extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ox++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pm,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=t!==void 0?Rd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Il.fromBufferAttribute(this,e),Il.applyMatrix3(t),this.setXY(e,Il.x,Il.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix3(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):q_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Z_(t,this.array)}};var Ma=class extends Bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wa=class extends Bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var li=class extends Bi{constructor(t,e,n){super(new Float32Array(t),e,n)}},ax=new Ns,fa=new it,Wu=new it,wo=class{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ax.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fa.subVectors(t,this.center);let e=fa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fa.copy(t.center).add(Wu)),this.expandByPoint(fa.copy(t.center).sub(Wu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lx=0,oi=new Be,Xu=new Mn,po=new it,Yn=new Ns,pa=new Ns,an=new it,Us=class s extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(X_(t)?wa:Ma)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,n){return oi.makeTranslation(t,e,n),this.applyMatrix4(oi),this}scale(t,e,n){return oi.makeScale(t,e,n),this.applyMatrix4(oi),this}lookAt(t){return Xu.lookAt(t),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new li(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){let n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Yn.min,pa.min),Yn.expandByPoint(an),an.addVectors(Yn.max,pa.max),Yn.expandByPoint(an)):(Yn.expandByPoint(pa.min),Yn.expandByPoint(pa.max))}Yn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(po.fromBufferAttribute(t,c),an.add(po)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Bi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)a[T]=new it,l[T]=new it;let h=new it,u=new it,d=new it,f=new pe,p=new pe,x=new pe,m=new it,g=new it;function S(T,C,P){c[T]=c[C]=c[P]=1,h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),a[T].add(m),a[C].add(m),a[P].add(m),l[T].add(g),l[C].add(g),l[P].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,C=A.length;T<C;++T){let P=A[T],F=P.start,z=P.count;for(let I=F,X=F+z;I<X;I+=3)S(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let w=new it,E=new it,R=new it,_=new it;function v(T){R.fromBufferAttribute(i,T),_.copy(R);let C=a[T];w.copy(C),w.sub(R.multiplyScalar(R.dot(C))).normalize(),E.crossVectors(_,C);let F=E.dot(l[T])<0?-1:1;o.setXYZW(T,w.x,w.y,w.z,F)}for(let T=0,C=n.count;T<C;++T)c[T]&&v(T);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new it,r=new it,o=new it,a=new it,l=new it,c=new it,h=new it,u=new it;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Bi(d,h,u)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ju=new it,cx=new it,hx=new $t,bi=class{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ju.subVectors(n,e).cross(cx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hx.getNormalMatrix(t),i=this.coplanarPoint(ju).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ux=0,Hi=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ha(),this.name="",this.type="Material",this.blending=Ao,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yl,this.stencilZFail=Yl,this.stencilZPass=Yl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new bi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var cs=new it,Yu=new it,Ol=new it,Ll=new it,lc=class{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cs.copy(this.origin).addScaledVector(this.direction,e),cs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yu.copy(t).add(e).multiplyScalar(.5),Ol.copy(e).sub(t).normalize(),Ll.copy(this.origin).sub(Yu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ol),a=Ll.dot(this.direction),l=-Ll.dot(Ol),c=Ll.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yu).addScaledVector(Ol,d),f}intersectSphere(t,e){if(t.radius<0)return null;cs.subVectors(t.center,this.origin);let n=cs.dot(this.direction),i=cs.dot(cs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,S=n.y-o.y,A=n.z-o.z,w=Math.abs(l),E=Math.abs(c),R=Math.abs(h),_,v,T,C,P,F,z,I,X,q,U,et;if(w>=E&&w>=R?(T=l,F=u,X=p,et=g,l>=0?(_=c,v=h,C=d,P=f,z=x,I=m,q=S,U=A):(_=h,v=c,C=f,P=d,z=m,I=x,q=A,U=S)):E>=R?(T=c,F=d,X=x,et=S,c>=0?(_=h,v=l,C=f,P=u,z=m,I=p,q=A,U=g):(_=l,v=h,C=u,P=f,z=p,I=m,q=g,U=A)):(T=h,F=f,X=m,et=A,h>=0?(_=l,v=c,C=u,P=d,z=p,I=x,q=g,U=S):(_=c,v=l,C=d,P=u,z=x,I=p,q=S,U=g)),T===0)return null;let L=_/T,H=v/T,Z=1/T,ut=C-L*F,_t=P-H*F,J=z-L*X,yt=I-H*X,wt=q-L*et,Ut=U-H*et,St=wt*yt-Ut*J,Yt=ut*Ut-_t*wt,ae=J*_t-yt*ut;if(i){if(St<0||Yt<0||ae<0)return null}else if((St<0||Yt<0||ae<0)&&(St>0||Yt>0||ae>0))return null;let jt=St+Yt+ae;if(jt===0)return null;let _e=Z*(St*F+Yt*X+ae*et);return(jt>0?_e<0:_e>0)?null:this.at(_e/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gr=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vp=new Be,pr=new lc,Fl=new wo,Gp=new it,Nl=new it,Ul=new it,kl=new it,qu=new it,Bl=new it,Hp=new it,zl=new it,Bn=class extends Mn{constructor(t=new Us,e=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(qu.fromBufferAttribute(u,t),o?Bl.addScaledVector(qu,h):Bl.addScaledVector(qu.sub(e),h))}e.add(Bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(r),pr.copy(t.ray).recast(t.near),!(Fl.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Fl,Gp)===null||pr.origin.distanceToSquared(Gp)>(t.far-t.near)**2))&&(Vp.copy(r).invert(),pr.copy(t.ray).applyMatrix4(Vp),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,E=A;w<E;w+=3){let R=a.getX(w),_=a.getX(w+1),v=a.getX(w+2);i=Vl(this,g,t,n,c,h,u,R,_,v),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let S=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);i=Vl(this,o,t,n,c,h,u,S,A,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,E=A;w<E;w+=3){let R=w,_=w+1,v=w+2;i=Vl(this,g,t,n,c,h,u,R,_,v),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let S=m,A=m+1,w=m+2;i=Vl(this,o,t,n,c,h,u,S,A,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function dx(s,t,e,n,i,r,o,a){let l;if(t.side===Dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hs,a),l===null)return null;zl.copy(a),zl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(zl);return c<e.near||c>e.far?null:{distance:c,point:zl.clone(),object:s}}function Vl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Nl),s.getVertexPosition(l,Ul),s.getVertexPosition(c,kl);let h=dx(s,t,e,n,Nl,Ul,kl,Hp);if(h){let u=new it;Fs.getBarycoord(Hp,Nl,Ul,kl,u),i&&(h.uv=Fs.getInterpolatedAttribute(i,a,l,c,u,new pe)),r&&(h.uv1=Fs.getInterpolatedAttribute(r,a,l,c,u,new pe)),o&&(h.normal=Fs.getInterpolatedAttribute(o,a,l,c,u,new it),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new it,materialIndex:0};Fs.getNormal(Nl,Ul,kl,d.normal),h.face=d,h.barycoord=u}return h}var cc=class extends Pn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ln,h=ln,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mr=new wo,fx=new pe(.5,.5),Gl=new it,ks=class{constructor(t=new bi,e=new bi,n=new bi,i=new bi,r=new bi,o=new bi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],S=r[12],A=r[13],w=r[14],E=r[15];if(i[0].setComponents(c-o,f-h,g-p,E-S).normalize(),i[1].setComponents(c+o,f+h,g+p,E+S).normalize(),i[2].setComponents(c+a,f+u,g+x,E+A).normalize(),i[3].setComponents(c-a,f-u,g-x,E-A).normalize(),n)i[4].setComponents(l,d,m,w).normalize(),i[5].setComponents(c-l,f-d,g-m,E-w).normalize();else if(i[4].setComponents(c-l,f-d,g-m,E-w).normalize(),e===ai)i[5].setComponents(c+l,f+d,g+m,E+w).normalize();else if(e===yo)i[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){mr.center.set(0,0,0);let e=fx.distanceTo(t.center);return mr.radius=.7071067811865476+e,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Gl.x=i.normal.x>0?t.max.x:t.min.x,Gl.y=i.normal.y>0?t.max.y:t.min.y,Gl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wp=new Be,hc=class s{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Wp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ks),n[i].setFromProjectionMatrix(Wp,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ks),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ta=class extends Pn{constructor(t=[],e=br,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends Pn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends Pn{constructor(t,e,n=wi,i,r,o,a=ln,l=ln,c,h=ds,u=1){if(h!==ds&&h!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ca=class extends fs{constructor(t,e=wi,n=br,i,r,o=ln,a=ln,l,c=ds){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ea=class extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Kn=class s extends Us{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(h,3)),this.setAttribute("uv",new li(u,2));function p(x,m,g,S,A,w,E,R,_,v,T){let C=w/_,P=E/v,F=w/2,z=E/2,I=R/2,X=_+1,q=v+1,U=0,et=0,L=new it;for(let H=0;H<q;H++){let Z=H*P-z;for(let ut=0;ut<X;ut++){let _t=ut*C-F;L[x]=_t*S,L[m]=Z*A,L[g]=I,c.push(L.x,L.y,L.z),L[x]=0,L[m]=0,L[g]=R>0?1:-1,h.push(L.x,L.y,L.z),u.push(ut/_),u.push(1-H/v),U+=1}}for(let H=0;H<v;H++)for(let Z=0;Z<_;Z++){let ut=d+Z+X*H,_t=d+Z+X*(H+1),J=d+(Z+1)+X*(H+1),yt=d+(Z+1)+X*H;l.push(ut,_t,yt),l.push(_t,J,yt),et+=6}a.addGroup(f,et,T),f+=et,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bs=class s extends Us{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let S=g*d-o;for(let A=0;A<c;A++){let w=A*u-r;p.push(w,-S,0),x.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let A=S+c*g,w=S+c*(g+1),E=S+1+c*(g+1),R=S+1+c*g;f.push(A,w,R),f.push(w,E,R)}this.setIndex(f),this.setAttribute("position",new li(p,3)),this.setAttribute("normal",new li(x,3)),this.setAttribute("uv",new li(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Aa=class extends Hi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function wr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Xp(i))i.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Xp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function wn(s){let t={};for(let e=0;e<s.length;e++){let n=wr(s[e]);for(let i in n)t[i]=n[i]}return t}function Xp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function px(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Um={clone:wr,merge:wn},mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wi=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=px(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new re().setHex(i.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new it().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},uc=class extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ra=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var To=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Cc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dc=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mo(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Hl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var zs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pc=class extends zs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $u:r=t,a=2*e-n;break;case Qu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $u:o=t,l=2*n-e;break;case Qu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,A=(-1-f)*m+(1.5+f)*x+.5*p,w=f*m-f*x;for(let E=0;E!==a;++E)r[E]=g*o[h+E]+S*o[c+E]+A*o[l+E]+w*o[u+E];return r}},mc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},gc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},_c=class extends zs{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,S=u[g],A=u[g+1],w=t*d+p*2,E=h[w],R=h[w+1],_=xx(n,e,S,E,i);r[p]=km(_,x,A,R,m)}return r}};function km(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function _x(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function xx(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=km(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=_x(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Jn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mo(e,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mo(t.times,Array),values:mo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Hl(t.settings)&&(n.settings={inTangents:mo(t.settings.inTangents,Array),outTangents:mo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _c(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case ic:e=this.InterpolantFactoryMethodLinear;break;case jl:e=this.InterpolantFactoryMethodSmooth;break;case Ku:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return ic;case this.InterpolantFactoryMethodSmooth:return jl;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Hl(this.settings)&&(jp(this.settings.inTangents,t),jp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Hl(this.settings)&&(Yp(this.settings.inTangents,t),Yp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&j_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Hl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function jp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Yp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Jn.prototype.ValueTypeName="";Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=ic;var Vs=class extends Jn{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=ga;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}};xc.prototype.ValueTypeName="color";var vc=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}};vc.prototype.ValueTypeName="number";var yc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Vi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pa=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Jn{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=ga;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Jn{constructor(t,e,n,i){super(t,e,n,i)}};Sc.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bm=new bc,Mc=class{constructor(t){this.manager=t!==void 0?t:Bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends Mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ia=class extends Da{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Zu=new Be,qp=new it,Zp=new it,wc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qp.setFromMatrixPosition(t.matrixWorld),e.position.copy(qp),Zp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Zu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===yo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Zu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wl=new it,Xl=new Vi,Ui=new it,Oa=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wl,Xl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wl,Xl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ls=new it,Kp=new pe,Jp=new pe,qn=class extends Oa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,e){return this.getViewBounds(t,Kp,Jp),e.subVectors(Jp,Kp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Au*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xr=class extends Oa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},td=class extends wc{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},La=class extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new td}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var go=-90,_o=1,Co=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qn(go,_o,t,e);i.layers=this.layers,this.add(i);let r=new qn(go,_o,t,e);r.layers=this.layers,this.add(r);let o=new qn(go,_o,t,e);o.layers=this.layers,this.add(o);let a=new qn(go,_o,t,e);a.layers=this.layers,this.add(a);let l=new qn(go,_o,t,e);l.layers=this.layers,this.add(l);let c=new qn(go,_o,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Tc=class extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Dd="\\[\\]\\.:\\/",vx=new RegExp("["+Dd+"]","g"),Id="[^"+Dd+"]",yx="[^"+Dd.replace("\\.","")+"]",Sx=/((?:WC+[\/:])*)/.source.replace("WC",Id),bx=/(WCOD+)?/.source.replace("WCOD",yx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),Tx=new RegExp("^"+Sx+bx+Mx+wx+"$"),Cx=["material","materials","bones","map"],ed=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vx,"")}static parseTrackName(t){let e=Tx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=ed;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zw=new Float32Array(1);var nd=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Od(s,t,e,n){let i=Ex(n);switch(e){case Sd:return s*t;case Md:return s*t/i.components*i.byteLength;case Ic:return s*t/i.components*i.byteLength;case Ws:return s*t*2/i.components*i.byteLength;case Oc:return s*t*2/i.components*i.byteLength;case bd:return s*t*3/i.components*i.byteLength;case Ei:return s*t*4/i.components*i.byteLength;case Lc:return s*t*4/i.components*i.byteLength;case Na:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nc:case kc:return Math.max(s,16)*Math.max(t,8)/4;case Fc:case Uc:return Math.max(s,8)*Math.max(t,8)/2;case Bc:case zc:case Gc:case Hc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vc:case za:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $c:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case th:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case eh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case sh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case rh:case oh:case ah:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lh:case ch:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Va:case hh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ex(s){switch(s){case zn:case _d:return{byteLength:1,components:1};case Do:case xd:case Ci:return{byteLength:2,components:1};case Pc:case Dc:return{byteLength:2,components:4};case wi:case Rc:case Ti:return{byteLength:4,components:1};case vd:case yd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ag(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rx(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
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
#endif`,Ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
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
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hx=`#ifdef USE_IRIDESCENCE
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
#endif`,Wx=`#ifdef USE_BUMPMAP
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qx=`#define PI 3.141592653589793
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
} // validated`,tv=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gv=`#ifdef USE_GRADIENTMAP
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
}`,_v=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sv=`#ifdef USE_ENVMAP
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
#endif`,bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cv=`PhysicalMaterial material;
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
#endif`,Ev=`uniform sampler2D dfgLUT;
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
}`,Av=`
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
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bv=`#if defined( USE_POINTS_UV )
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
#endif`,zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hv=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`#ifdef USE_MORPHTARGETS
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
#endif`,jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$v=`#ifdef USE_NORMALMAP
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
#endif`,Qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,py=`float getShadowMask() {
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
}`,my=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gy=`#ifdef USE_SKINNING
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
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,vy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,by=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,My=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Py=`uniform sampler2D t2D;
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform float backgroundBlurriness;
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
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
}`,Ny=`#if DEPTH_PACKING == 3200
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
}`,Uy=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Hy=`#include <common>
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#define LAMBERT
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
}`,jy=`#define LAMBERT
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
}`,Yy=`#define MATCAP
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
}`,qy=`#define MATCAP
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
}`,Zy=`#define NORMAL
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
}`,Ky=`#define NORMAL
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
}`,Jy=`#define PHONG
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
}`,$y=`#define PHONG
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
}`,Qy=`#define STANDARD
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
}`,tS=`#define STANDARD
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
}`,eS=`#define TOON
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
}`,nS=`#define TOON
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
}`,iS=`uniform float size;
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
}`,sS=`uniform vec3 diffuse;
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
}`,rS=`#include <common>
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
}`,oS=`uniform vec3 color;
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
}`,aS=`uniform float rotation;
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
}`,lS=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Px,alphahash_pars_fragment:Dx,alphamap_fragment:Ix,alphamap_pars_fragment:Ox,alphatest_fragment:Lx,alphatest_pars_fragment:Fx,aomap_fragment:Nx,aomap_pars_fragment:Ux,batching_pars_vertex:kx,batching_vertex:Bx,begin_vertex:zx,beginnormal_vertex:Vx,bsdfs:Gx,iridescence_fragment:Hx,bumpmap_pars_fragment:Wx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:qx,color_fragment:Zx,color_pars_fragment:Kx,color_pars_vertex:Jx,color_vertex:$x,common:Qx,defaultnormal_vertex:tv,displacementmap_pars_vertex:ev,displacementmap_vertex:nv,emissivemap_fragment:iv,emissivemap_pars_fragment:sv,colorspace_fragment:rv,colorspace_pars_fragment:ov,envmap_fragment:av,envmap_common_pars_fragment:lv,envmap_pars_fragment:cv,envmap_pars_vertex:hv,envmap_physical_pars_fragment:Sv,envmap_vertex:uv,fog_vertex:dv,fog_pars_vertex:fv,fog_fragment:pv,fog_pars_fragment:mv,gradientmap_pars_fragment:gv,lightmap_pars_fragment:_v,lights_lambert_fragment:xv,lights_lambert_pars_fragment:vv,lights_pars_begin:yv,lights_toon_fragment:bv,lights_toon_pars_fragment:Mv,lights_phong_fragment:wv,lights_phong_pars_fragment:Tv,lights_physical_fragment:Cv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Av,lights_fragment_maps:Rv,lights_fragment_end:Pv,lightprobes_pars_fragment:Dv,logdepthbuf_fragment:Iv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Fv,map_fragment:Nv,map_pars_fragment:Uv,map_particle_fragment:kv,map_particle_pars_fragment:Bv,metalnessmap_fragment:zv,metalnessmap_pars_fragment:Vv,morphinstance_vertex:Gv,morphcolor_vertex:Hv,morphnormal_vertex:Wv,morphtarget_pars_vertex:Xv,morphtarget_vertex:jv,normal_fragment_begin:Yv,normal_fragment_maps:qv,normal_pars_fragment:Zv,normal_pars_vertex:Kv,normal_vertex:Jv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:Qv,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ey,iridescence_pars_fragment:ny,opaque_fragment:iy,packing:sy,premultiplied_alpha_fragment:ry,project_vertex:oy,dithering_fragment:ay,dithering_pars_fragment:ly,roughnessmap_fragment:cy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:uy,shadowmap_pars_vertex:dy,shadowmap_vertex:fy,shadowmask_pars_fragment:py,skinbase_vertex:my,skinning_pars_vertex:gy,skinning_vertex:_y,skinnormal_vertex:xy,specularmap_fragment:vy,specularmap_pars_fragment:yy,tonemapping_fragment:Sy,tonemapping_pars_fragment:by,transmission_fragment:My,transmission_pars_fragment:wy,uv_pars_fragment:Ty,uv_pars_vertex:Cy,uv_vertex:Ey,worldpos_vertex:Ay,background_vert:Ry,background_frag:Py,backgroundCube_vert:Dy,backgroundCube_frag:Iy,cube_vert:Oy,cube_frag:Ly,depth_vert:Fy,depth_frag:Ny,distance_vert:Uy,distance_frag:ky,equirect_vert:By,equirect_frag:zy,linedashed_vert:Vy,linedashed_frag:Gy,meshbasic_vert:Hy,meshbasic_frag:Wy,meshlambert_vert:Xy,meshlambert_frag:jy,meshmatcap_vert:Yy,meshmatcap_frag:qy,meshnormal_vert:Zy,meshnormal_frag:Ky,meshphong_vert:Jy,meshphong_frag:$y,meshphysical_vert:Qy,meshphysical_frag:tS,meshtoon_vert:eS,meshtoon_frag:nS,points_vert:iS,points_frag:sS,shadow_vert:rS,shadow_frag:oS,sprite_vert:aS,sprite_frag:lS},Pt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Yi={basic:{uniforms:wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:wn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:wn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:wn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:wn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:wn([Pt.points,Pt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:wn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:wn([Pt.common,Pt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:wn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:wn([Pt.sprite,Pt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:wn([Pt.common,Pt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:wn([Pt.lights,Pt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Yi.physical={uniforms:wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var uh={r:0,b:0,g:0},cS=new Be,lg=new $t;lg.set(-1,0,0,0,1,0,0,0,1);function hS(s,t,e,n,i,r){let o=new re(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let w=S.backgroundBlurriness>0;A=t.get(A,w)}return A}function p(S){let A=!1,w=f(S);w===null?m(o,a):w&&w.isColor&&(m(w,1),A=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,A){let w=f(A);w&&w.isCubeTexture?(c===void 0&&(c=new Bn(new Kn(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:wr(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cS.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lg),c.material.toneMapped=fe.getTransfer(w.colorSpace)!==we,(h!==w||u!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Bn(new Bs(2,2),new Wi({name:"BackgroundMaterial",uniforms:wr(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=fe.getTransfer(w.colorSpace)!==we,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(uh,Pd(s)),e.buffers.color.setClear(uh.r,uh.g,uh.b,A,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:x,dispose:g}}function uS(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(P,F,z,I,X){let q=!1,U=u(P,I,z,F);r!==U&&(r=U,c(r.object)),q=f(P,I,z,X),q&&p(P,I,z,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,w(P,F,z,I),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function u(P,F,z,I){let X=I.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let U=P.isInstancedMesh===!0?P.id:0,et=q[U];et===void 0&&(et={},q[U]=et);let L=et[z.id];L===void 0&&(L={},et[z.id]=L);let H=L[X];return H===void 0&&(H=d(l()),L[X]=H),H}function d(P){let F=[],z=[],I=[];for(let X=0;X<e;X++)F[X]=0,z[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,F,z,I){let X=r.attributes,q=F.attributes,U=0,et=z.getAttributes();for(let L in et)if(et[L].location>=0){let Z=X[L],ut=q[L];if(ut===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),Z===void 0||Z.attribute!==ut||ut&&Z.data!==ut.data)return!0;U++}return r.attributesNum!==U||r.index!==I}function p(P,F,z,I){let X={},q=F.attributes,U=0,et=z.getAttributes();for(let L in et)if(et[L].location>=0){let Z=q[L];Z===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let ut={};ut.attribute=Z,Z&&Z.data&&(ut.data=Z.data),X[L]=ut,U++}r.attributes=X,r.attributesNum=U,r.index=I}function x(){let P=r.newAttributes;for(let F=0,z=P.length;F<z;F++)P[F]=0}function m(P){g(P,0)}function g(P,F){let z=r.newAttributes,I=r.enabledAttributes,X=r.attributeDivisors;z[P]=1,I[P]===0&&(s.enableVertexAttribArray(P),I[P]=1),X[P]!==F&&(s.vertexAttribDivisor(P,F),X[P]=F)}function S(){let P=r.newAttributes,F=r.enabledAttributes;for(let z=0,I=F.length;z<I;z++)F[z]!==P[z]&&(s.disableVertexAttribArray(z),F[z]=0)}function A(P,F,z,I,X,q,U){U===!0?s.vertexAttribIPointer(P,F,z,X,q):s.vertexAttribPointer(P,F,z,I,X,q)}function w(P,F,z,I){x();let X=I.attributes,q=z.getAttributes(),U=F.defaultAttributeValues;for(let et in q){let L=q[et];if(L.location>=0){let H=X[et];if(H===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){let Z=H.normalized,ut=H.itemSize,_t=t.get(H);if(_t===void 0)continue;let J=_t.buffer,yt=_t.type,wt=_t.bytesPerElement,Ut=yt===s.INT||yt===s.UNSIGNED_INT||H.gpuType===Rc;if(H.isInterleavedBufferAttribute){let St=H.data,Yt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,ae=H.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let jt=0;jt<L.locationSize;jt++)g(L.location+jt,St.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<L.locationSize;jt++)m(L.location+jt);s.bindBuffer(s.ARRAY_BUFFER,J);for(let jt=0;jt<L.locationSize;jt++)A(L.location+jt,ut/L.locationSize,yt,Z,Yt*wt,(ae+ut/L.locationSize*jt)*wt,Ut)}else{if(H.isInstancedBufferAttribute){for(let St=0;St<L.locationSize;St++)g(L.location+St,H.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let St=0;St<L.locationSize;St++)m(L.location+St);s.bindBuffer(s.ARRAY_BUFFER,J);for(let St=0;St<L.locationSize;St++)A(L.location+St,ut/L.locationSize,yt,Z,ut*wt,ut/L.locationSize*St*wt,Ut)}}else if(U!==void 0){let Z=U[et];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(L.location,Z);break;case 3:s.vertexAttrib3fv(L.location,Z);break;case 4:s.vertexAttrib4fv(L.location,Z);break;default:s.vertexAttrib1fv(L.location,Z)}}}}S()}function E(){T();for(let P in n){let F=n[P];for(let z in F){let I=F[z];for(let X in I){let q=I[X];for(let U in q)h(q[U].object),delete q[U];delete I[X]}}delete n[P]}}function R(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let z in F){let I=F[z];for(let X in I){let q=I[X];for(let U in q)h(q[U].object),delete q[U];delete I[X]}}delete n[P.id]}function _(P){for(let F in n){let z=n[F];for(let I in z){let X=z[I];if(X[P.id]===void 0)continue;let q=X[P.id];for(let U in q)h(q[U].object),delete q[U];delete X[P.id]}}}function v(P){for(let F in n){let z=n[F],I=P.isInstancedMesh===!0?P.id:0,X=z[I];if(X!==void 0){for(let q in X){let U=X[q];for(let et in U)h(U[et].object),delete U[et];delete X[q]}delete z[I],Object.keys(z).length===0&&delete n[F]}}}function T(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function dS(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function fS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Ei&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let v=_===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==zn&&_!==Ti&&!v&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:w,maxSamples:E,samples:R}}function pS(s){let t=this,e=null,n=0,i=!1,r=!1,o=new bi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,w=g.clippingState||null;l.value=w,w=h(p,d,A,f);for(let E=0;E!==A;++E)w[E]=e[E];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,w=f;A!==x;++A,w+=4)o.copy(u[A]).applyMatrix4(S,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ja=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ta(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kn(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:yr});r.uniforms.tEquirect.value=e;let o=new Bn(i,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=mn),new Co(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},zm=256,mS=3,gS=20,cg=256,hg=16,_S=3,xS=new it,vS=new re,Oo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Co(1,10,null),this._boxMesh=new Bn(new Kn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=xS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(vS));let m=new Co(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zm,Fm(t))}_fromTexture(t,e){t.mapping===br||t.mapping===Ro?this._setSize(t.image.length===0?zm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vm(t,!1,!1),n=Math.log2(t)-mS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===br||t.mapping===Ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=yS(),this._integrationMaterial=SS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/hg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-_S)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(cg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=bS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vm(s,t,e){return new ja(s,{minFilter:Mi,generateMipmaps:t,type:Ci,colorSpace:_a,depthBuffer:e})}function Ya(s,t,e){return new Wi({name:s,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:Dn,blending:yr,depthTest:!1,depthWrite:!1})}function yS(){return Ya("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cg}u

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
	`)}function SS(){return Ya("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hg}},`

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
	`)}function bS(){return Ya("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gS}
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
	`)}function Gm(){return Ya("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hm(){return Ya("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function MS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Po||f===Ec)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new ja(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Po||f===Ec,x=f===br||f===Ro;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Oo(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return p&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Oo(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Po?d.mapping=br:f===Ec&&(d.mapping=Ro),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function wS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ma("WebGLRenderer: "+n+" extension not supported."),i}}}function TS(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let S=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?wa:Ma,w=new A(Math.ceil(S/3)*6,1),E=w.array;if(x!==null){let _=x.array;g=x.version;for(let v=0,T=0;v<S;v+=3){let C=_[v+0],P=_[v+1],F=_[v+2];E[T++]=C,E[T++]=P,E[T++]=P,E[T++]=F,E[T++]=F,E[T++]=C}}else{g=m.version;for(let _=0,v=0;_<S;_+=3){let T=_+0,C=_+1,P=_+2;E[v++]=T,E[v++]=C,E[v++]=C,E[v++]=P,E[v++]=P,E[v++]=T}}w.version=g;let R=r.get(p);R&&t.remove(R),r.set(p,w)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function CS(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ES(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function AS(s,t,e){let n=new WeakMap,i=new ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let w=a.attributes.position.count*A,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let R=new Float32Array(w*E*4*u),_=new ya(R,w,E,u);_.type=Ti,_.needsUpdate=!0;let v=A*4;for(let C=0;C<u;C++){let P=m[C],F=g[C],z=S[C],I=w*E*4*C;for(let X=0;X<P.count;X++){let q=X*v;f===!0&&(i.fromBufferAttribute(P,X),R[I+q+0]=i.x,R[I+q+1]=i.y,R[I+q+2]=i.z,R[I+q+3]=0),p===!0&&(i.fromBufferAttribute(F,X),R[I+q+4]=i.x,R[I+q+5]=i.y,R[I+q+6]=i.z,R[I+q+7]=0),x===!0&&(i.fromBufferAttribute(z,X),R[I+q+8]=i.x,R[I+q+9]=i.y,R[I+q+10]=i.z,R[I+q+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new pe(w,E)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function RS(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var PS={[cd]:"LINEAR_TONE_MAPPING",[hd]:"REINHARD_TONE_MAPPING",[ud]:"CINEON_TONE_MAPPING",[dd]:"ACES_FILMIC_TONE_MAPPING",[pd]:"AGX_TONE_MAPPING",[md]:"NEUTRAL_TONE_MAPPING",[fd]:"CUSTOM_TONE_MAPPING"};function DS(s,t,e,n,i,r){let o=new Zn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Us;h.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new li([0,2,0,0,2,0],2));let u=new uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Bn(h,u),f=new xr(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,S=null,A=[],w=!1;this.setSize=function(E,R){o.setSize(E,R),a!==null&&a.setSize(E,R),l!==null&&l.setSize(E,R);for(let _=0;_<A.length;_++){let v=A[_];v.setSize&&v.setSize(E,R)}},this.setEffects=function(E){A=E,w=A.length>0&&A[0].isRenderPass===!0;let R=o.width,_=o.height;A.length>0&&a===null&&(a=new Zn(R,_,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(R,_,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));let v=i===!0&&A.some(T=>T.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new fs(R,_),r===!0&&(c.format=ps,c.type=Mr)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let T=0;T<A.length;T++){let C=A[T];C.setSize&&C.setSize(R,_),v&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,R){if(m||E.toneMapping===ci&&A.length===0)return!1;if(S=R,R!==null){let _=R.width,v=R.height;(o.width!==_||o.height!==v)&&this.setSize(_,v)}return w===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=ci,!0},this.hasRenderPass=function(){return w},this.end=function(E,R){E.toneMapping=g,m=!0;let _=o,v=a;for(let T=0;T<A.length;T++){let C=A[T];C.enabled!==!1&&(C.render(E,v,_,R),C.needsSwap!==!1&&(_=v,v=v===a?l:a))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,u.defines={},fe.getTransfer(p)===we&&(u.defines.SRGB_TRANSFER="");let T=PS[x];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(S),E.render(d,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ug=new Pn,dg=new fs(1,1),fg=new Ca(1),pg=new ya,mg=new ac,gg=new Ta,Wm=[],Xm=[],jm=new Float32Array(16),Ym=new Float32Array(9),qm=new Float32Array(4);function Lo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Wm[i];if(r===void 0&&(r=new Float32Array(i),Wm[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ph(s,t){let e=Xm[t];e===void 0&&(e=new Int32Array(t),Xm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function IS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function OS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),Qe(e,t)}}function LS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),Qe(e,t)}}function FS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),Qe(e,t)}}function NS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;qm.set(n),s.uniformMatrix2fv(this.addr,!1,qm),Qe(e,n)}}function US(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;Ym.set(n),s.uniformMatrix3fv(this.addr,!1,Ym),Qe(e,n)}}function kS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;jm.set(n),s.uniformMatrix4fv(this.addr,!1,jm),Qe(e,n)}}function BS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),Qe(e,t)}}function VS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),Qe(e,t)}}function GS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),Qe(e,t)}}function HS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function WS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),Qe(e,t)}}function XS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),Qe(e,t)}}function jS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),Qe(e,t)}}function mh(s){return s.version===0&&(s.compareFunction=Cd,s.needsUpdate=!0),s}function YS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=mh(dg):r=ug,e.setTexture2D(t||r,i)}function qS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mg,i)}function ZS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=mh(fg):r=gg,e.setTextureCube(t||r,i)}function KS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pg,i)}function JS(s){switch(s){case 5126:return IS;case 35664:return OS;case 35665:return LS;case 35666:return FS;case 35674:return NS;case 35675:return US;case 35676:return kS;case 5124:case 35670:return BS;case 35667:case 35671:return zS;case 35668:case 35672:return VS;case 35669:case 35673:return GS;case 5125:return HS;case 36294:return WS;case 36295:return XS;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return YS;case 35679:case 36299:case 36307:return qS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return KS}}function $S(s,t){s.uniform1fv(this.addr,t)}function QS(s,t){let e=Lo(t,this.size,2);s.uniform2fv(this.addr,e)}function tb(s,t){let e=Lo(t,this.size,3);s.uniform3fv(this.addr,e)}function eb(s,t){let e=Lo(t,this.size,4);s.uniform4fv(this.addr,e)}function nb(s,t){let e=Lo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ib(s,t){let e=Lo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sb(s,t){let e=Lo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rb(s,t){s.uniform1iv(this.addr,t)}function ob(s,t){s.uniform2iv(this.addr,t)}function ab(s,t){s.uniform3iv(this.addr,t)}function lb(s,t){s.uniform4iv(this.addr,t)}function cb(s,t){s.uniform1uiv(this.addr,t)}function hb(s,t){s.uniform2uiv(this.addr,t)}function ub(s,t){s.uniform3uiv(this.addr,t)}function db(s,t){s.uniform4uiv(this.addr,t)}function fb(s,t,e){let n=this.cache,i=t.length,r=ph(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=mh(dg):o=ug;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function pb(s,t,e){let n=this.cache,i=t.length,r=ph(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||mg,r[o])}function mb(s,t,e){let n=this.cache,i=t.length,r=ph(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=mh(fg):o=gg;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function gb(s,t,e){let n=this.cache,i=t.length,r=ph(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||pg,r[o])}function _b(s){switch(s){case 5126:return $S;case 35664:return QS;case 35665:return tb;case 35666:return eb;case 35674:return nb;case 35675:return ib;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ob;case 35668:case 35672:return ab;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return hb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}var Nd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=JS(e.type)}},Ud=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_b(e.type)}},kd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ld=/(\w+)(\])?(\[|\.)?/g;function Zm(s,t){s.seq.push(t),s.map[t.id]=t}function xb(s,t,e){let n=s.name,i=n.length;for(Ld.lastIndex=0;;){let r=Ld.exec(n),o=Ld.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zm(e,c===void 0?new Nd(a,s,t):new Ud(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new kd(a),Zm(e,u)),e=u}}}var Io=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xb(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Km(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vb=37297,yb=0;function Sb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jm=new $t;function bb(s){fe._getMatrix(Jm,fe.workingColorSpace,s);let t=`mat3( ${Jm.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(s)){case xa:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $m(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Sb(s.getShaderSource(t),a)}else return r}function Mb(s,t){let e=bb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var wb={[cd]:"Linear",[hd]:"Reinhard",[ud]:"Cineon",[dd]:"ACESFilmic",[pd]:"AgX",[md]:"Neutral",[fd]:"Custom"};function Tb(s,t){let e=wb[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dh=new it;function Cb(){fe.getLuminanceCoefficients(dh);let s=dh.x.toFixed(4),t=dh.y.toFixed(4),e=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function Ab(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xa(s){return s!==""}function Qm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function tg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(s){return s.replace(Pb,Db)}function Db(s,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bd(e)}var Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(s){return s.replace(Ib,Ob)}function Ob(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ng(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Lb={[vr]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function Fb(s){return Lb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nb={[Ro]:"ENVMAP_MODE_REFRACTION"};function Ub(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kb={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[vm]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function Bb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kb[s.combine]||"ENVMAP_BLENDING_NONE"}function zb(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Fb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ub(e),u=Bb(e),d=Eb(e),f=Ab(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Xa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Xa).join(`
`),m.length>0&&(m+=`
`)):(x=[ng(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),m=[ng(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?oe.tonemapping_pars_fragment:"",e.toneMapping!==ci?Tb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Mb("linearToOutputTexel",e.outputColorSpace),Cb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xa).join(`
`)),o=Bd(o),o=Qm(o,e),o=tg(o,e),a=Bd(a),a=Qm(a,e),a=tg(a,e),o=eg(o),a=eg(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=g+x+o,A=g+m+a,w=Km(i,i.VERTEX_SHADER,S),E=Km(i,i.FRAGMENT_SHADER,A);i.attachShader(p,w),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function R(C){if(s.debug.checkShaderErrors){let P=i.getProgramInfoLog(p)||"",F=i.getShaderInfoLog(w)||"",z=i.getShaderInfoLog(E)||"",I=P.trim(),X=F.trim(),q=z.trim(),U=!0,et=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,E);else{let L=$m(i,w,"vertex"),H=$m(i,E,"fragment");Jt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+L+`
`+H)}else I!==""?Zt("WebGLProgram: Program Info Log:",I):(X===""||q==="")&&(et=!1);et&&(C.diagnostics={runnable:U,programLog:I,vertexShader:{log:X,prefix:x},fragmentShader:{log:q,prefix:m}})}i.deleteShader(w),i.deleteShader(E),_=new Io(i,p),v=Rb(i,p)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(p,vb)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yb++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}var Vb=0,zd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vd(t),e.set(t,n)),n}},Vd=class{constructor(t){this.id=Vb++,this.code=t,this.usedTimes=0}};function Gb(s){return s===Ws||s===za||s===Va}function Hb(s,t,e,n,i,r){let o=new Sa,a=new zd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,v,T,C,P,F){let z=C.fog,I=P.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||X,q),et=d[_.type],L=n.precision;_.precision!==null&&(L=n.getMaxPrecision(_.precision),L!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",L,"instead."));let H=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=H!==void 0?H.length:0,ut=0;I.morphAttributes.position!==void 0&&(ut=1),I.morphAttributes.normal!==void 0&&(ut=2),I.morphAttributes.color!==void 0&&(ut=3);let _t,J,yt,wt;if(et){let Rt=Yi[et];_t=Rt.vertexShader,J=Rt.fragmentShader}else{_t=_.vertexShader,J=_.fragmentShader;let Rt=a.getVertexShaderStage(_),Se=a.getFragmentShaderStage(_);a.update(_,Rt,Se),yt=Rt.id,wt=Se.id}let Ut=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Yt=P.isInstancedMesh===!0,ae=P.isBatchedMesh===!0,jt=!!_.map,_e=!!_.matcap,ce=!!U,te=ce&&U.isPMREMTexture===!0,Ee=!!_.aoMap,Fe=!!_.lightMap,qe=!!_.bumpMap&&_.wireframe===!1,Ae=!!_.normalMap,xn=!!_.displacementMap,Pe=!!_.emissiveMap,En=!!_.metalnessMap,Lt=!!_.roughnessMap,Ht=_.anisotropy>0,N=_.clearcoat>0,Re=_.diffuseRoughness>0,Kt=_.dispersion>0,xe=_.retroreflectivity>0,xt=_.iridescence>0,Me=_.sheen>0,Vt=_.transmission>0,kt=Ht&&!!_.anisotropyMap,D=N&&!!_.clearcoatMap,b=N&&!!_.clearcoatNormalMap,$=N&&!!_.clearcoatRoughnessMap,mt=Re&&!!_.diffuseRoughnessMap,ht=xt&&!!_.iridescenceMap,bt=xt&&!!_.iridescenceThicknessMap,Ct=Me&&!!_.sheenColorMap,at=Me&&!!_.sheenRoughnessMap,lt=!!_.specularMap,Tt=!!_.specularColorMap,k=!!_.specularIntensityMap,ct=Vt&&!!_.transmissionMap,ot=Vt&&!!_.thicknessMap,gt=!!_.gradientMap,pt=!!_.alphaMap,Mt=_.alphaTest>0,Ft=!!_.alphaHash,Qt=!!_.extensions,ft=ci;_.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ft=s.toneMapping);let Wt=te?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,ee={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:_t,fragmentShader:J,defines:_.defines,customVertexShaderID:yt,customFragmentShaderID:wt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:L,batching:ae,batchingColor:ae&&P._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&P.instanceColor!==null,instancingMorph:Yt&&P.morphTexture!==null,outputColorSpace:Ut===null?s.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:_e,envMap:ce,envMapMode:ce&&U.mapping,envMapPMREM:te,envMapMaxLod:te?Wt.length-1:null,envMapSize:te?Wt[0].width:null,aoMap:Ee,lightMap:Fe,bumpMap:qe,normalMap:Ae,displacementMap:xn,emissiveMap:Pe,normalMapObjectSpace:Ae&&_.normalMapType===Mm,normalMapTangentSpace:Ae&&_.normalMapType===Ga,packedNormalMap:Ae&&_.normalMapType===Ga&&Gb(_.normalMap.format),metalnessMap:En,roughnessMap:Lt,anisotropy:Ht,anisotropyMap:kt,clearcoat:N,clearcoatMap:D,clearcoatNormalMap:b,clearcoatRoughnessMap:$,diffuseRoughness:Re,diffuseRoughnessMap:mt,dispersion:Kt,retroreflection:xe,iridescence:xt,iridescenceMap:ht,iridescenceThicknessMap:bt,sheen:Me,sheenColorMap:Ct,sheenRoughnessMap:at,specularMap:lt,specularColorMap:Tt,specularIntensityMap:k,transmission:Vt,transmissionMap:ct,thicknessMap:ot,gradientMap:gt,opaque:_.transparent===!1&&_.blending===Ao&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:Mt,alphaHash:Ft,combine:_.combine,mapUv:jt&&f(_.map.channel),aoMapUv:Ee&&f(_.aoMap.channel),lightMapUv:Fe&&f(_.lightMap.channel),bumpMapUv:qe&&f(_.bumpMap.channel),normalMapUv:Ae&&f(_.normalMap.channel),displacementMapUv:xn&&f(_.displacementMap.channel),emissiveMapUv:Pe&&f(_.emissiveMap.channel),metalnessMapUv:En&&f(_.metalnessMap.channel),roughnessMapUv:Lt&&f(_.roughnessMap.channel),anisotropyMapUv:kt&&f(_.anisotropyMap.channel),clearcoatMapUv:D&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:at&&f(_.sheenRoughnessMap.channel),specularMapUv:lt&&f(_.specularMap.channel),specularColorMapUv:Tt&&f(_.specularColorMap.channel),specularIntensityMapUv:k&&f(_.specularIntensityMap.channel),transmissionMapUv:ct&&f(_.transmissionMap.channel),thicknessMapUv:ot&&f(_.thicknessMap.channel),alphaMapUv:pt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ae||Ht),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(jt||pt),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ut,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:F.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:Pe&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xi,flipSided:_.side===Dn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&_.extensions.multiDraw===!0||ae)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function x(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let T in _.defines)v.push(T),v.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(m(v,_),g(v,_),v.push(s.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function m(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function g(_,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let v=d[_.type],T;if(v){let C=Yi[v];T=Um.clone(C.uniforms)}else T=_.uniforms;return T}function A(_,v){let T=h.get(v);return T!==void 0?++T.usedTimes:(T=new zb(s,v,_,i),c.push(T),h.set(v,T)),T}function w(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function Wb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Xb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ig(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function sg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let S=s[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,x,m,g,S){S.reversedDepth===!0&&(m=-m);let A=a(d,f,p,x,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):e.push(A)}function c(d,f,p,x,m,g){let S=a(d,f,p,x,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||Xb),n.length>1&&n.sort(f||ig),i.length>1&&i.sort(f||ig)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function jb(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new sg,s.set(n,[o])):i>=r.length?(o=new sg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Yb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new it,color:new re};break;case"SpotLight":e={position:new it,direction:new it,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new it,halfWidth:new it,halfHeight:new it};break}return s[t.id]=e,e}}}function qb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Zb=0;function Kb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Jb(s){let t=new Yb,e=qb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new it);let i=new it,r=new Be,o=new Be;function a(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,S=0,A=0,w=0,E=0,R=0,_=0,v=0,T=0,C=0;c.sort(Kb);for(let F=0,z=c.length;F<z;F++){let I=c[F],X=I.color,q=I.intensity,U=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ws?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*q,u+=X.g*q,d+=X.b*q;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],q);C++}else if(I.isSunLight){let L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=et;let ut=H.getViewportCount();for(let _t=0;_t<ut;_t++)n.sunShadowMatrix[x+_t]=H.getMatrix(_t),n.sunShadowCascade[x+_t]=H._cascadeData[_t];x+=ut,p++}n.sun[f]=L,f++}else if(I.isDirectionalLight){let L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=I.shadow.matrix,E++}n.directional[m]=L,m++}else if(I.isSpotLight){let L=t.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(X).multiplyScalar(q),L.distance=U,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[S]=L;let H=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,H.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[S]=H.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=et,_++}S++}else if(I.isRectAreaLight){let L=t.get(I);L.color.copy(X).multiplyScalar(q),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=L,A++}else if(I.isPointLight){let L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let H=I.shadow,Z=e.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=I.shadow.matrix,R++}n.point[g]=L,g++}else if(I.isHemisphereLight){let L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(q),L.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[w]=L,w++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==S||P.rectAreaLength!==A||P.hemiLength!==w||P.numSunShadows!==p||P.numDirectionalShadows!==E||P.numPointShadows!==R||P.numSpotShadows!==_||P.numSpotMaps!==v||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=g,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=S,P.rectAreaLength=A,P.hemiLength=w,P.numSunShadows=p,P.numDirectionalShadows=E,P.numPointShadows=R,P.numSpotShadows=_,P.numSpotMaps=v,P.numLightProbes=C,n.version=Zb++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let w=c[S];if(w.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(g),u++}else if(w.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),d++}else if(w.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),p++}else if(w.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function rg(s){let t=new Jb(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function $b(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new rg(s),t.set(i,[a])):r>=o.length?(a=new rg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
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
}`,e1=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],n1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],og=new Be,Wa=new it,Fd=new it;function i1(s,t,e){let n=new ks,i=new pe,r=new pe,o=new ze,a=new dc,l=new fc,c={},h=e.maxTextureSize,u={[Hs]:Dn,[Dn]:Hs,[Xi]:Xi},d=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Qb,fragmentShader:t1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Us;p.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let g=this.type;this.render=function(R,_,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===tm&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vr);let T=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(yr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=g!==this.type;z&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=R.length;I<X;I++){let q=R[I],U=q.shadow;if(U===void 0){Zt("WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let et=U.getFrameExtents();i.multiply(et),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,U.mapSize.y=r.y));let L=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=L,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Eo){if(q.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Zn(i.x,i.y,{format:Ws,type:Ci,minFilter:mn,magFilter:mn,generateMipmaps:!1}),U.map.texture.name=q.name+".shadowMap",U.map.depthTexture=new fs(i.x,i.y,Ti),U.map.depthTexture.name=q.name+".shadowMapDepth",U.map.depthTexture.format=ds,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln}else q.isPointLight?(U.map=new ja(i.x),U.map.depthTexture=new Ca(i.x,wi)):(U.map=new Zn(i.x,i.y),U.map.depthTexture=new fs(i.x,i.y,wi)),U.map.depthTexture.name=q.name+".shadowMap",U.map.depthTexture.format=ds,this.type===vr?(U.map.depthTexture.compareFunction=L?Td:wd,U.map.depthTexture.minFilter=mn,U.map.depthTexture.magFilter=mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ln,U.map.depthTexture.magFilter=ln);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let H=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();q.isPointLight!==!0&&U.updateMatrices(q,v);let Z=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:v.layers;for(let ut=0;ut<H;ut++){let _t=U.getCamera(ut);if(q.isPointLight){let J=U.camera,yt=U.matrix,wt=q.distance||J.far;wt!==J.far&&(J.far=wt,J.updateProjectionMatrix()),Wa.setFromMatrixPosition(q.matrixWorld),J.position.copy(Wa),Fd.copy(J.position),Fd.add(e1[ut]),J.up.copy(n1[ut]),J.lookAt(Fd),J.updateMatrixWorld(),yt.makeTranslation(-Wa.x,-Wa.y,-Wa.z),og.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),U._frustum.setFromProjectionMatrix(og,J.coordinateSystem,J.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,ut),s.clear();else{ut===0&&(s.setRenderTarget(U.map),s.clear());let J=U.getViewport(ut);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),F.viewport(o)}n=U.getFrustum(ut),w(_,v,_t,q,Z,this.type)}U.isPointLightShadow!==!0&&this.type===Eo&&S(U,v),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,C,P)};function S(R,_){let v=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Zn(i.x,i.y,{format:Ws,type:Ci}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(_,null,v,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(_,null,v,f,x,null)}function A(R,_,v,T){let C=null,P=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,z=_.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let X=I[z];X===void 0&&(X=C.clone(),I[z]=X,_.addEventListener("dispose",E)),C=X}if(C.visible=_.visible,C.wireframe=_.wireframe,T===Eo?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=s.properties.get(C);F.light=v}return C}function w(R,_,v,T,C,P){if(R.visible===!1)return;if(R.layers.test(C)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===Eo)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);let I=t.update(R),X=R.material;if(Array.isArray(X)){let q=I.groups;for(let U=0,et=q.length;U<et;U++){let L=q[U],H=X[L.materialIndex];if(H&&H.visible){let Z=A(R,H,T,P);R.onBeforeShadow(s,R,_,v,I,Z,L),s.renderBufferDirect(v,null,I,Z,R,L),R.onAfterShadow(s,R,_,v,I,Z,L)}}}else if(X.visible){let q=A(R,X,T,P);R.onBeforeShadow(s,R,_,v,I,q,null),s.renderBufferDirect(v,null,I,q,R,null),R.onAfterShadow(s,R,_,v,I,q,null)}}let z=R.children;for(let I=0,X=z.length;I<X;I++)w(z[I],_,v,T,C,P)}function E(R){R.target.removeEventListener("dispose",E);for(let v in c){let T=c[v],C=R.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function s1(s,t){function e(){let k=!1,ct=new ze,ot=null,gt=new ze(0,0,0,0);return{setMask:function(pt){ot!==pt&&!k&&(s.colorMask(pt,pt,pt,pt),ot=pt)},setLocked:function(pt){k=pt},setClear:function(pt,Mt,Ft,Qt,ft){ft===!0&&(pt*=Qt,Mt*=Qt,Ft*=Qt),ct.set(pt,Mt,Ft,Qt),gt.equals(ct)===!1&&(s.clearColor(pt,Mt,Ft,Qt),gt.copy(ct))},reset:function(){k=!1,ot=null,gt.set(-1,0,0,0)}}}function n(){let k=!1,ct=!1,ot=null,gt=null,pt=null;return{setReversed:function(Mt){if(ct!==Mt){let Ft=t.get("EXT_clip_control");Mt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),ct=Mt;let Qt=pt;pt=null,this.setClear(Qt)}},getReversed:function(){return ct},setTest:function(Mt){Mt?St(s.DEPTH_TEST):Yt(s.DEPTH_TEST)},setMask:function(Mt){ot!==Mt&&!k&&(s.depthMask(Mt),ot=Mt)},setFunc:function(Mt){if(ct&&(Mt=Lm[Mt]),gt!==Mt){switch(Mt){case ql:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case Kl:s.depthFunc(s.LESS);break;case vo:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case $l:s.depthFunc(s.GEQUAL);break;case Ql:s.depthFunc(s.GREATER);break;case tc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Mt}},setLocked:function(Mt){k=Mt},setClear:function(Mt){pt!==Mt&&(pt=Mt,ct&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){k=!1,ot=null,gt=null,pt=null,ct=!1}}}function i(){let k=!1,ct=null,ot=null,gt=null,pt=null,Mt=null,Ft=null,Qt=null,ft=null;return{setTest:function(Wt){k||(Wt?St(s.STENCIL_TEST):Yt(s.STENCIL_TEST))},setMask:function(Wt){ct!==Wt&&!k&&(s.stencilMask(Wt),ct=Wt)},setFunc:function(Wt,ee,Rt){(ot!==Wt||gt!==ee||pt!==Rt)&&(s.stencilFunc(Wt,ee,Rt),ot=Wt,gt=ee,pt=Rt)},setOp:function(Wt,ee,Rt){(Mt!==Wt||Ft!==ee||Qt!==Rt)&&(s.stencilOp(Wt,ee,Rt),Mt=Wt,Ft=ee,Qt=Rt)},setLocked:function(Wt){k=Wt},setClear:function(Wt){ft!==Wt&&(s.clearStencil(Wt),ft=Wt)},reset:function(){k=!1,ct=null,ot=null,gt=null,pt=null,Mt=null,Ft=null,Qt=null,ft=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,S=null,A=null,w=null,E=null,R=null,_=null,v=new re(0,0,0),T=0,C=!1,P=null,F=null,z=null,I=null,X=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,et=0,L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(L)[1]),U=et>=1):L.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),U=et>=2);let H=null,Z={},ut=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),J=new ze().fromArray(ut),yt=new ze().fromArray(_t);function wt(k,ct,ot,gt){let pt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(k,Mt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<ot;Ft++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ct+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return Mt}let Ut={};Ut[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(s.DEPTH_TEST),o.setFunc(vo),qe(!1),Ae(id),St(s.CULL_FACE),Ee(yr);function St(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function Yt(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function ae(k,ct){return d[k]!==ct?(s.bindFramebuffer(k,ct),d[k]=ct,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function jt(k,ct){let ot=p,gt=!1;if(k){ot=f.get(ct),ot===void 0&&(ot=[],f.set(ct,ot));let pt=k.textures;if(ot.length!==pt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Ft=pt.length;Mt<Ft;Mt++)ot[Mt]=s.COLOR_ATTACHMENT0+Mt;ot.length=pt.length,gt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ot)}function _e(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let ce={[Sr]:s.FUNC_ADD,[nm]:s.FUNC_SUBTRACT,[im]:s.FUNC_REVERSE_SUBTRACT};ce[sm]=s.MIN,ce[rm]=s.MAX;let te={[om]:s.ZERO,[am]:s.ONE,[lm]:s.SRC_COLOR,[ad]:s.SRC_ALPHA,[pm]:s.SRC_ALPHA_SATURATE,[dm]:s.DST_COLOR,[hm]:s.DST_ALPHA,[cm]:s.ONE_MINUS_SRC_COLOR,[ld]:s.ONE_MINUS_SRC_ALPHA,[fm]:s.ONE_MINUS_DST_COLOR,[um]:s.ONE_MINUS_DST_ALPHA,[mm]:s.CONSTANT_COLOR,[gm]:s.ONE_MINUS_CONSTANT_COLOR,[_m]:s.CONSTANT_ALPHA,[xm]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(k,ct,ot,gt,pt,Mt,Ft,Qt,ft,Wt){if(k===yr){m===!0&&(Yt(s.BLEND),m=!1);return}if(m===!1&&(St(s.BLEND),m=!0),k!==em){if(k!==g||Wt!==C){if((S!==Sr||E!==Sr)&&(s.blendEquation(s.FUNC_ADD),S=Sr,E=Sr),Wt)switch(k){case Ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sd:s.blendFunc(s.ONE,s.ONE);break;case rd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case od:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case sd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rd:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case od:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",k);break}A=null,w=null,R=null,_=null,v.set(0,0,0),T=0,g=k,C=Wt}return}pt=pt||ct,Mt=Mt||ot,Ft=Ft||gt,(ct!==S||pt!==E)&&(s.blendEquationSeparate(ce[ct],ce[pt]),S=ct,E=pt),(ot!==A||gt!==w||Mt!==R||Ft!==_)&&(s.blendFuncSeparate(te[ot],te[gt],te[Mt],te[Ft]),A=ot,w=gt,R=Mt,_=Ft),(Qt.equals(v)===!1||ft!==T)&&(s.blendColor(Qt.r,Qt.g,Qt.b,ft),v.copy(Qt),T=ft),g=k,C=!1}function Fe(k,ct){k.side===Xi?Yt(s.CULL_FACE):St(s.CULL_FACE);let ot=k.side===Dn;ct&&(ot=!ot),qe(ot),k.blending===Ao&&k.transparent===!1?Ee(yr):Ee(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let gt=k.stencilWrite;a.setTest(gt),gt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):Yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(k){P!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),P=k)}function Ae(k){k!==$p?(St(s.CULL_FACE),k!==F&&(k===id?s.cullFace(s.BACK):k===Qp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Yt(s.CULL_FACE),F=k}function xn(k){k!==z&&(U&&s.lineWidth(k),z=k)}function Pe(k,ct,ot){k?(St(s.POLYGON_OFFSET_FILL),(I!==ct||X!==ot)&&(I=ct,X=ot,o.getReversed()&&(ct=-ct,ot=-ot),s.polygonOffset(ct,ot))):Yt(s.POLYGON_OFFSET_FILL)}function En(k){k?St(s.SCISSOR_TEST):Yt(s.SCISSOR_TEST)}function Lt(k){k===void 0&&(k=s.TEXTURE0+q-1),H!==k&&(s.activeTexture(k),H=k)}function Ht(k,ct,ot){ot===void 0&&(H===null?ot=s.TEXTURE0+q-1:ot=H);let gt=Z[ot];gt===void 0&&(gt={type:void 0,texture:void 0},Z[ot]=gt),(gt.type!==k||gt.texture!==ct)&&(H!==ot&&(s.activeTexture(ot),H=ot),s.bindTexture(k,ct||Ut[k]),gt.type=k,gt.texture=ct)}function N(){let k=Z[H];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Re(){try{s.compressedTexImage2D(...arguments)}catch(k){Jt("WebGLState:",k)}}function Kt(){try{s.compressedTexImage3D(...arguments)}catch(k){Jt("WebGLState:",k)}}function xe(){try{s.texSubImage2D(...arguments)}catch(k){Jt("WebGLState:",k)}}function xt(){try{s.texSubImage3D(...arguments)}catch(k){Jt("WebGLState:",k)}}function Me(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Jt("WebGLState:",k)}}function Vt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Jt("WebGLState:",k)}}function kt(){try{s.texStorage2D(...arguments)}catch(k){Jt("WebGLState:",k)}}function D(){try{s.texStorage3D(...arguments)}catch(k){Jt("WebGLState:",k)}}function b(){try{s.texImage2D(...arguments)}catch(k){Jt("WebGLState:",k)}}function $(){try{s.texImage3D(...arguments)}catch(k){Jt("WebGLState:",k)}}function mt(k){return u[k]!==void 0?u[k]:s.getParameter(k)}function ht(k,ct){u[k]!==ct&&(s.pixelStorei(k,ct),u[k]=ct)}function bt(k){J.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),J.copy(k))}function Ct(k){yt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),yt.copy(k))}function at(k,ct){let ot=c.get(ct);ot===void 0&&(ot=new WeakMap,c.set(ct,ot));let gt=ot.get(k);gt===void 0&&(gt=s.getUniformBlockIndex(ct,k.name),s.uniformBlockBinding(ct,gt,gt),ot.set(k,gt))}function lt(k,ct,ot){let pt=c.get(ct).get(k);l[pt]!==ot&&(s.bindBufferBase(s.UNIFORM_BUFFER,pt,ot),l[pt]=ot)}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,Z={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,S=null,A=null,w=null,E=null,R=null,_=null,v=new re(0,0,0),T=0,C=!1,P=null,F=null,z=null,I=null,X=null,J.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:St,disable:Yt,bindFramebuffer:ae,drawBuffers:jt,useProgram:_e,setBlending:Ee,setMaterial:Fe,setFlipSided:qe,setCullFace:Ae,setLineWidth:xn,setPolygonOffset:Pe,setScissorTest:En,activeTexture:Lt,bindTexture:Ht,unbindTexture:N,compressedTexImage2D:Re,compressedTexImage3D:Kt,texImage2D:b,texImage3D:$,pixelStorei:ht,getParameter:mt,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:kt,texStorage3D:D,texSubImage2D:xe,texSubImage3D:xt,compressedTexSubImage2D:Me,compressedTexSubImage3D:Vt,scissor:bt,viewport:Ct,reset:Tt}}function r1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,b){return m?new OffscreenCanvas(D,b):va("canvas")}function S(D,b,$){let mt=1,ht=kt(D);if((ht.width>$||ht.height>$)&&(mt=$/Math.max(ht.width,ht.height)),mt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let bt=Math.floor(mt*ht.width),Ct=Math.floor(mt*ht.height);d===void 0&&(d=g(bt,Ct));let at=b?g(bt,Ct):d;return at.width=bt,at.height=Ct,at.getContext("2d").drawImage(D,0,0,bt,Ct),Zt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+bt+"x"+Ct+")."),at}else return"data"in D&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),D;return D}function A(D){return D.generateMipmaps}function w(D){s.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(D,b,$,mt,ht,bt=!1){if(D!==null){if(s[D]!==void 0)return s[D];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ct;mt&&(Ct=t.get("EXT_texture_norm16"),Ct||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=b;if(b===s.RED&&($===s.FLOAT&&(at=s.R32F),$===s.HALF_FLOAT&&(at=s.R16F),$===s.UNSIGNED_BYTE&&(at=s.R8),$===s.UNSIGNED_SHORT&&Ct&&(at=Ct.R16_EXT),$===s.SHORT&&Ct&&(at=Ct.R16_SNORM_EXT)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.R8UI),$===s.UNSIGNED_SHORT&&(at=s.R16UI),$===s.UNSIGNED_INT&&(at=s.R32UI),$===s.BYTE&&(at=s.R8I),$===s.SHORT&&(at=s.R16I),$===s.INT&&(at=s.R32I)),b===s.RG&&($===s.FLOAT&&(at=s.RG32F),$===s.HALF_FLOAT&&(at=s.RG16F),$===s.UNSIGNED_BYTE&&(at=s.RG8),$===s.UNSIGNED_SHORT&&Ct&&(at=Ct.RG16_EXT),$===s.SHORT&&Ct&&(at=Ct.RG16_SNORM_EXT)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RG8UI),$===s.UNSIGNED_SHORT&&(at=s.RG16UI),$===s.UNSIGNED_INT&&(at=s.RG32UI),$===s.BYTE&&(at=s.RG8I),$===s.SHORT&&(at=s.RG16I),$===s.INT&&(at=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RGB8UI),$===s.UNSIGNED_SHORT&&(at=s.RGB16UI),$===s.UNSIGNED_INT&&(at=s.RGB32UI),$===s.BYTE&&(at=s.RGB8I),$===s.SHORT&&(at=s.RGB16I),$===s.INT&&(at=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),$===s.UNSIGNED_INT&&(at=s.RGBA32UI),$===s.BYTE&&(at=s.RGBA8I),$===s.SHORT&&(at=s.RGBA16I),$===s.INT&&(at=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_SHORT&&Ct&&(at=Ct.RGB16_EXT),$===s.SHORT&&Ct&&(at=Ct.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),b===s.RGBA){let lt=bt?xa:fe.getTransfer(ht);$===s.FLOAT&&(at=s.RGBA32F),$===s.HALF_FLOAT&&(at=s.RGBA16F),$===s.UNSIGNED_BYTE&&(at=lt===we?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Ct&&(at=Ct.RGBA16_EXT),$===s.SHORT&&Ct&&(at=Ct.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function _(D,b){let $;return D?b===null||b===wi||b===Mr?$=s.DEPTH24_STENCIL8:b===Ti?$=s.DEPTH32F_STENCIL8:b===Do&&($=s.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wi||b===Mr?$=s.DEPTH_COMPONENT24:b===Ti?$=s.DEPTH_COMPONENT32F:b===Do&&($=s.DEPTH_COMPONENT16),$}function v(D,b){return A(D)===!0||D.isFramebufferTexture&&D.minFilter!==ln&&D.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function T(D){let b=new WeakRef(D);n.get(D).__ref=b,p.add(b),x.register(D,b,b)}function C(D){let b=n.get(D).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function P(D){z(D.target)}function F(D){I(D.target)}function z(D){D.removeEventListener("dispose",P),C(D),q(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&u.delete(D)}function I(D){D.removeEventListener("dispose",F),C(D),et(D)}function X(){for(let D of p){let b=D.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):z(b))}p.clear(),u.clear()}function q(D){let b=n.get(D);if(b.__webglInit===void 0)return;let $=D.source,mt=f.get($);if(mt){let ht=mt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&U(D),Object.keys(mt).length===0&&f.delete($)}n.remove(D)}function U(D){let b=n.get(D);s.deleteTexture(b.__webglTexture);let $=D.source,mt=f.get($);delete mt[b.__cacheKey],o.memory.textures--}function et(D){let b=n.get(D);b.__depthDisposeCallback&&b.__depthDisposeCallback();let $=D.depthTexture;if($&&$.renderTarget===D&&z($),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let bt=0;bt<b.__webglFramebuffer[ht].length;bt++)s.deleteFramebuffer(b.__webglFramebuffer[ht][bt]);else s.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)s.deleteFramebuffer(b.__webglFramebuffer[ht]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let mt=D.textures;for(let ht=0,bt=mt.length;ht<bt;ht++){let Ct=n.get(mt[ht]);Ct.__webglTexture&&(s.deleteTexture(Ct.__webglTexture),o.memory.textures--),n.remove(mt[ht])}n.remove(D)}let L=0;function H(){L=0}function Z(){return L}function ut(D){L=D}function _t(){let D=L;return D>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,D}function J(D){let b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.mipmapsAutoUpdate),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function yt(D,b){let $=n.get(D);if(D.isVideoTexture&&Me(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){let mt=D.image;if(mt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe($,D,b);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function wt(D,b){let $=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Fe($,D,b);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function Ut(D,b){let $=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Fe($,D,b);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function St(D,b){let $=n.get(D);if(D.version>0&&$.__version!==D.version){qe($,D,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}let Yt={[ec]:s.REPEAT,[ki]:s.CLAMP_TO_EDGE,[nc]:s.MIRRORED_REPEAT},ae={[ln]:s.NEAREST,[Sm]:s.NEAREST_MIPMAP_NEAREST,[Fa]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},jt={[Tm]:s.NEVER,[Cd]:s.ALWAYS,[Cm]:s.LESS,[wd]:s.LEQUAL,[Em]:s.EQUAL,[Td]:s.GEQUAL,[Am]:s.GREATER,[Rm]:s.NOTEQUAL};function _e(D,b){if(b.type===Ti&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===Ac||b.magFilter===Fa||b.magFilter===Mi||b.minFilter===mn||b.minFilter===Ac||b.minFilter===Fa||b.minFilter===Mi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Yt[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Yt[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Yt[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ae[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,jt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ln||b.minFilter!==Fa&&b.minFilter!==Mi||b.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ce(D,b){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",P),T(b));let mt=b.source,ht=f.get(mt);ht===void 0&&(ht={},f.set(mt,ht));let bt=J(b);if(bt!==D.__cacheKey){ht[bt]===void 0&&(ht[bt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ht[bt].usedTimes++;let Ct=ht[D.__cacheKey];Ct!==void 0&&(ht[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&U(b)),D.__cacheKey=bt,D.__webglTexture=ht[bt].texture}return $}function te(D,b,$){return Math.floor(Math.floor(D/$)/b)}function Ee(D,b,$,mt){let bt=D.updateRanges;if(bt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,mt,b.data);else{bt.sort((k,ct)=>k.start-ct.start);let Ct=0;for(let k=1;k<bt.length;k++){let ct=bt[Ct],ot=bt[k],gt=ct.start+ct.count,pt=te(ot.start,b.width,4),Mt=te(ct.start,b.width,4);ot.start<=gt+1&&pt===Mt&&te(ot.start+ot.count-1,b.width,4)===pt?ct.count=Math.max(ct.count,ot.start+ot.count-ct.start):(++Ct,bt[Ct]=ot)}bt.length=Ct+1;let at=e.getParameter(s.UNPACK_ROW_LENGTH),lt=e.getParameter(s.UNPACK_SKIP_PIXELS),Tt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let k=0,ct=bt.length;k<ct;k++){let ot=bt[k],gt=Math.floor(ot.start/4),pt=Math.ceil(ot.count/4),Mt=gt%b.width,Ft=Math.floor(gt/b.width),Qt=pt,ft=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ft),e.texSubImage2D(s.TEXTURE_2D,0,Mt,Ft,Qt,ft,$,mt,b.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Tt)}}function Fe(D,b,$){let mt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=s.TEXTURE_3D);let ht=ce(D,b),bt=b.source;e.bindTexture(mt,D.__webglTexture,s.TEXTURE0+$);let Ct=n.get(bt);if(bt.version!==Ct.__version||ht===!0){if(e.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ft=fe.getPrimaries(fe.workingColorSpace),Wt=b.colorSpace===ms?null:fe.getPrimaries(b.colorSpace),ee=b.colorSpace===ms||ft===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let lt=S(b.image,!1,i.maxTextureSize);lt=Vt(b,lt);let Tt=r.convert(b.format,b.colorSpace),k=r.convert(b.type),ct=R(b.internalFormat,Tt,k,b.normalized,b.colorSpace,b.isVideoTexture);_e(mt,b);let ot,gt=b.mipmaps,pt=b.isVideoTexture!==!0,Mt=Ct.__version===void 0||ht===!0,Ft=bt.dataReady,Qt=v(b,lt);if(b.isDepthTexture)ct=_(b.format===ps,b.type),Mt&&(pt?e.texStorage2D(s.TEXTURE_2D,1,ct,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,ct,lt.width,lt.height,0,Tt,k,null));else if(b.isDataTexture)if(gt.length>0){pt&&Mt&&e.texStorage2D(s.TEXTURE_2D,Qt,ct,gt[0].width,gt[0].height);for(let ft=0,Wt=gt.length;ft<Wt;ft++)ot=gt[ft],pt?Ft&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,ot.width,ot.height,Tt,k,ot.data):e.texImage2D(s.TEXTURE_2D,ft,ct,ot.width,ot.height,0,Tt,k,ot.data);b.generateMipmaps=!1}else pt?(Mt&&e.texStorage2D(s.TEXTURE_2D,Qt,ct,lt.width,lt.height),Ft&&Ee(b,lt,Tt,k)):e.texImage2D(s.TEXTURE_2D,0,ct,lt.width,lt.height,0,Tt,k,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pt&&Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Qt,ct,gt[0].width,gt[0].height,lt.depth);for(let ft=0,Wt=gt.length;ft<Wt;ft++)if(ot=gt[ft],b.format!==Ei)if(Tt!==null)if(pt){if(Ft)if(b.layerUpdates.size>0){let ee=Od(ot.width,ot.height,b.format,b.type);for(let Rt of b.layerUpdates){let Se=ot.data.subarray(Rt*ee/ot.data.BYTES_PER_ELEMENT,(Rt+1)*ee/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Rt,ot.width,ot.height,1,Tt,Se)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,ot.width,ot.height,lt.depth,Tt,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,ct,ot.width,ot.height,lt.depth,0,ot.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Ft&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,ot.width,ot.height,lt.depth,Tt,k,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,ct,ot.width,ot.height,lt.depth,0,Tt,k,ot.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{pt&&Mt&&e.texStorage2D(s.TEXTURE_2D,Qt,ct,gt[0].width,gt[0].height);for(let ft=0,Wt=gt.length;ft<Wt;ft++)ot=gt[ft],b.format!==Ei?Tt!==null?pt?Ft&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,ot.width,ot.height,Tt,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,ct,ot.width,ot.height,0,ot.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Ft&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,ot.width,ot.height,Tt,k,ot.data):e.texImage2D(s.TEXTURE_2D,ft,ct,ot.width,ot.height,0,Tt,k,ot.data)}else if(b.isDataArrayTexture)if(pt){if(Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Qt,ct,lt.width,lt.height,lt.depth),Ft)if(b.layerUpdates.size>0){let ft=Od(lt.width,lt.height,b.format,b.type);for(let Wt of b.layerUpdates){let ee=lt.data.subarray(Wt*ft/lt.data.BYTES_PER_ELEMENT,(Wt+1)*ft/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Wt,lt.width,lt.height,1,Tt,k,ee)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Tt,k,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,lt.width,lt.height,lt.depth,0,Tt,k,lt.data);else if(b.isData3DTexture)pt?(Mt&&e.texStorage3D(s.TEXTURE_3D,Qt,ct,lt.width,lt.height,lt.depth),Ft&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Tt,k,lt.data)):e.texImage3D(s.TEXTURE_3D,0,ct,lt.width,lt.height,lt.depth,0,Tt,k,lt.data);else if(b.isFramebufferTexture){if(Mt)if(pt)e.texStorage2D(s.TEXTURE_2D,Qt,ct,lt.width,lt.height);else{let ft=lt.width,Wt=lt.height;for(let ee=0;ee<Qt;ee++)e.texImage2D(s.TEXTURE_2D,ee,ct,ft,Wt,0,Tt,k,null),ft>>=1,Wt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let ft=s.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),lt.parentNode!==ft){ft.appendChild(lt),u.add(b),ft.onpaint=Wt=>{let ee=Wt.changedElements;for(let Rt of u)ee.includes(Rt.image)&&(Rt.needsUpdate=!0)},ft.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,lt);else{let ee=s.RGBA,Rt=s.RGBA,Se=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ee,Rt,Se,lt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(gt.length>0){if(pt&&Mt){let ft=kt(gt[0]);e.texStorage2D(s.TEXTURE_2D,Qt,ct,ft.width,ft.height)}for(let ft=0,Wt=gt.length;ft<Wt;ft++)ot=gt[ft],pt?Ft&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Tt,k,ot):e.texImage2D(s.TEXTURE_2D,ft,ct,Tt,k,ot);b.generateMipmaps=!1}else if(pt){if(Mt){let ft=kt(lt);e.texStorage2D(s.TEXTURE_2D,Qt,ct,ft.width,ft.height)}Ft&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,k,lt)}else e.texImage2D(s.TEXTURE_2D,0,ct,Tt,k,lt);A(b)&&b.mipmapsAutoUpdate===!0&&w(mt),Ct.__version=bt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function qe(D,b,$){if(b.image.length!==6)return;let mt=ce(D,b),ht=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);let bt=n.get(ht);if(ht.version!==bt.__version||mt===!0){e.activeTexture(s.TEXTURE0+$);let Ct=fe.getPrimaries(fe.workingColorSpace),at=b.colorSpace===ms?null:fe.getPrimaries(b.colorSpace),lt=b.colorSpace===ms||Ct===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,k=b.image[0]&&b.image[0].isDataTexture,ct=[];for(let Rt=0;Rt<6;Rt++)!Tt&&!k?ct[Rt]=S(b.image[Rt],!0,i.maxCubemapSize):ct[Rt]=k?b.image[Rt].image:b.image[Rt],ct[Rt]=Vt(b,ct[Rt]);let ot=ct[0],gt=r.convert(b.format,b.colorSpace),pt=r.convert(b.type),Mt=R(b.internalFormat,gt,pt,b.normalized,b.colorSpace),Ft=b.isVideoTexture!==!0,Qt=bt.__version===void 0||mt===!0,ft=ht.dataReady,Wt=v(b,ot);_e(s.TEXTURE_CUBE_MAP,b);let ee;if(b.isDepthTexture){if(Mt=_(b.format===ps,b.type),Qt)if(Ft)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Mt,ot.width,ot.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Mt,ot.width,ot.height,0,gt,pt,null)}else if(Tt){Ft&&Qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,Mt,ot.width,ot.height);for(let Rt=0;Rt<6;Rt++){ee=ct[Rt].mipmaps;for(let Se=0;Se<ee.length;Se++){let Xe=ee[Se];b.format!==Ei?gt!==null?Ft?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se,0,0,Xe.width,Xe.height,gt,Xe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se,Mt,Xe.width,Xe.height,0,Xe.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se,0,0,Xe.width,Xe.height,gt,pt,Xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se,Mt,Xe.width,Xe.height,0,gt,pt,Xe.data)}}}else{if(ee=b.mipmaps,Ft&&Qt){ee.length>0&&Wt++;let Rt=kt(ct[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,Mt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(k){Ft?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,ct[Rt].width,ct[Rt].height,gt,pt,ct[Rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Mt,ct[Rt].width,ct[Rt].height,0,gt,pt,ct[Rt].data);for(let Se=0;Se<ee.length;Se++){let rn=ee[Se].image[Rt].image;Ft?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se+1,0,0,rn.width,rn.height,gt,pt,rn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se+1,Mt,rn.width,rn.height,0,gt,pt,rn.data)}}else{Ft?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,gt,pt,ct[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Mt,gt,pt,ct[Rt]);for(let Se=0;Se<ee.length;Se++){let Xe=ee[Se];Ft?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se+1,0,0,gt,pt,Xe.image[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Se+1,Mt,gt,pt,Xe.image[Rt])}}}A(b)&&b.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),bt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ae(D,b,$,mt,ht,bt){let Ct=r.convert($.format,$.colorSpace),at=r.convert($.type),lt=R($.internalFormat,Ct,at,$.normalized,$.colorSpace),Tt=n.get(b),k=n.get($);if(k.__renderTarget=b,!Tt.__hasExternalTextures){let ct=Math.max(1,b.width>>bt),ot=Math.max(1,b.height>>bt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,bt,lt,ct,ot,b.depth,0,Ct,at,null):e.texImage2D(ht,bt,lt,ct,ot,0,Ct,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),xt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,ht,k.__webglTexture,0,xe(b)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,ht,k.__webglTexture,bt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function xn(D,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){let mt=b.depthTexture,ht=mt&&mt.isDepthTexture?mt.type:null,bt=_(b.stencilBuffer,ht),Ct=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe(b),bt,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe(b),bt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,bt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{let mt=b.textures;for(let ht=0;ht<mt.length;ht++){let bt=mt[ht],Ct=r.convert(bt.format,bt.colorSpace),at=r.convert(bt.type),lt=R(bt.internalFormat,Ct,at,bt.normalized,bt.colorSpace);xt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe(b),lt,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe(b),lt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,lt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(D,b,$){let mt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(b.depthTexture);ht.__renderTarget=b;let bt=mt?b.depthTexture.image[0]:b.depthTexture.image;(!ht.__webglTexture||bt.width!==b.width||bt.height!==b.height)&&(bt.width=b.width,bt.height=b.height,b.depthTexture.needsUpdate=!0),mt?St(b.depthTexture,0):yt(b.depthTexture,0);let Ct=ht.__webglTexture,at=xe(b),lt=mt?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,Tt=b.depthTexture.format===ps?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ds)xt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Tt,lt,Ct,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Tt,lt,Ct,0);else if(b.depthTexture.format===ps)xt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Tt,lt,Ct,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Tt,lt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function En(D){let b=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){let mt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){let ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",ht)};mt.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=mt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let mt=0;mt<6;mt++)Pe(b.__webglFramebuffer[mt],D,mt);else D.texture.mipmaps.length>0?Pe(b.__webglFramebuffer[0],D,0):Pe(b.__webglFramebuffer,D,0);else if($){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=s.createRenderbuffer(),xn(b.__webglDepthbuffer[mt],D,!1);else{let ht=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=b.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,bt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),xn(b.__webglDepthbuffer,D,!1);else{let ht=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,bt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(D,b,$){let mt=n.get(D);b!==void 0&&Ae(mt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&En(D)}function Ht(D){let b=D.texture,$=n.get(D),mt=n.get(b);D.addEventListener("dispose",F),T(D);let ht=D.textures,bt=D.isWebGLCubeRenderTarget===!0,Ct=ht.length>1;if(Ct||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=b.version,o.memory.textures++),bt){$.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps.length>0){$.__webglFramebuffer[at]=[];for(let lt=0;lt<b.mipmaps.length;lt++)$.__webglFramebuffer[at][lt]=s.createFramebuffer()}else $.__webglFramebuffer[at]=s.createFramebuffer()}else{if(b.mipmaps.length>0){$.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)$.__webglFramebuffer[at]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let at=0,lt=ht.length;at<lt;at++){let Tt=n.get(ht[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&xt(D)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let at=0;at<ht.length;at++){let lt=ht[at];$.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[at]);let Tt=r.convert(lt.format,lt.colorSpace),k=r.convert(lt.type),ct=R(lt.internalFormat,Tt,k,lt.normalized,lt.colorSpace,D.isXRRenderTarget===!0),ot=xe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,ct,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,$.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),xn($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){e.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),_e(s.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Ae($.__webglFramebuffer[at][lt],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else Ae($.__webglFramebuffer[at],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);A(b)?w(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(Ct){for(let at=0,lt=ht.length;at<lt;at++){let Tt=ht[at],k=n.get(Tt),ct=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ct=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,k.__webglTexture),_e(ct,Tt),Ae($.__webglFramebuffer,D,Tt,s.COLOR_ATTACHMENT0+at,ct,0),A(Tt)&&w(ct)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,mt.__webglTexture),_e(at,b),b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Ae($.__webglFramebuffer[lt],D,b,s.COLOR_ATTACHMENT0,at,lt);else Ae($.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,at,0);A(b)?w(at):b.mipmaps.length>0&&s.texParameteri(at,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&En(D)}function N(D){let b=D.textures;for(let $=0,mt=b.length;$<mt;$++){let ht=b[$];if(A(ht)&&ht.mipmapsAutoUpdate===!0){let bt=E(D),Ct=n.get(ht).__webglTexture;e.bindTexture(bt,Ct),w(bt),e.unbindTexture()}}}let Re=[];function Kt(D){if(D.samples>0){if(xt(D)===!1){let b=D.textures,$=D.width,mt=D.height,ht=s.COLOR_BUFFER_BIT,bt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),at=b.length>1;if(at)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);let k=n.get(b[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,$,mt,0,0,$,mt,ht,s.NEAREST),l===!0&&(Re.length=0,Re.push(s.COLOR_ATTACHMENT0+Tt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Re.push(bt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);let k=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,k,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function xe(D){return Math.min(i.maxSamples,D.samples)}function xt(D){let b=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Me(D){let b=o.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function Vt(D,b){let $=D.colorSpace,mt=D.format,ht=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==_a&&$!==ms&&(fe.getTransfer($)===we?(mt!==Ei||ht!==zn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",$)),b}function kt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=_t,this.resetTextureUnits=H,this.getTextureUnits=Z,this.setTextureUnits=ut,this.setTexture2D=yt,this.setTexture2DArray=wt,this.setTexture3D=Ut,this.setTextureCube=St,this.rebindTextures=Lt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=En,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=xt,this.dispose=X}function o1(s,t){function e(n,i=ms){let r,o=fe.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===Pc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_d)return s.BYTE;if(n===xd)return s.SHORT;if(n===Do)return s.UNSIGNED_SHORT;if(n===Rc)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===Ti)return s.FLOAT;if(n===Ci)return s.HALF_FLOAT;if(n===Sd)return s.ALPHA;if(n===bd)return s.RGB;if(n===Ei)return s.RGBA;if(n===ds)return s.DEPTH_COMPONENT;if(n===ps)return s.DEPTH_STENCIL;if(n===Md)return s.RED;if(n===Ic)return s.RED_INTEGER;if(n===Ws)return s.RG;if(n===Oc)return s.RG_INTEGER;if(n===Lc)return s.RGBA_INTEGER;if(n===Na||n===Ua||n===ka||n===Ba)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===Nc||n===Uc||n===kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===zc||n===Vc||n===Gc||n===Hc||n===za||n===Wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bc||n===zc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gc)return r.COMPRESSED_R11_EAC;if(n===Hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===Wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xc||n===jc||n===Yc||n===qc||n===Zc||n===Kc||n===Jc||n===$c||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===th)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eh)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nh)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ih)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sh)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rh||n===oh||n===ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rh)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===ch||n===Va||n===hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`,Gd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ea(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Wi({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hd=class extends zi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Gd,g={},S=e.getContextAttributes(),A=null,w=null,E=[],R=[],_=new pe,v=null,T=null,C=new qn;C.viewport=new ze;let P=new qn;P.viewport=new ze;let F=[C,P],z=new Tc,I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let yt=E[J];return yt===void 0&&(yt=new Mo,E[J]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(J){let yt=E[J];return yt===void 0&&(yt=new Mo,E[J]=yt),yt.getGripSpace()},this.getHand=function(J){let yt=E[J];return yt===void 0&&(yt=new Mo,E[J]=yt),yt.getHandSpace()};function q(J){let yt=R.indexOf(J.inputSource);if(yt===-1)return;let wt=E[yt];wt!==void 0&&(wt.update(J.inputSource,J.frame,c||o),wt.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",et);for(let J=0;J<E.length;J++){let yt=R[J];yt!==null&&(R[J]=null,E[J].disconnect(yt))}I=null,X=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(A),f=null,d=null,u=null,i=null,w=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(_.width,_.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",U),i.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ut=null,St=null;S.depth&&(St=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?ps:ds,Ut=S.stencil?Mr:wi);let Yt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Zn(d.textureWidth,d.textureHeight,{format:Ei,type:zn,depthTexture:new fs(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(J){for(let yt=0;yt<J.removed.length;yt++){let wt=J.removed[yt],Ut=R.indexOf(wt);Ut>=0&&(R[Ut]=null,E[Ut].disconnect(wt))}for(let yt=0;yt<J.added.length;yt++){let wt=J.added[yt],Ut=R.indexOf(wt);if(Ut===-1){for(let Yt=0;Yt<E.length;Yt++)if(Yt>=R.length){R.push(wt),Ut=Yt;break}else if(R[Yt]===null){R[Yt]=wt,Ut=Yt;break}if(Ut===-1)break}let St=E[Ut];St&&St.connect(wt)}}function L(J,yt){yt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(yt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let yt=J.near,wt=J.far;m.texture!==null&&(m.depthNear>0&&(yt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),z.near=P.near=C.near=yt,z.far=P.far=C.far=wt,(I!==z.near||X!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,X=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Ut=J.parent,St=z.cameras;L(z,Ut);for(let Yt=0;Yt<St.length;Yt++)L(St[Yt],Ut);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),H(J,z,Ut)};function H(J,yt,wt){wt===null?J.matrix.copy(yt.matrixWorld):(J.matrix.copy(wt.matrixWorld),J.matrix.invert(),J.matrix.multiply(yt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(yt.projectionMatrix),J.projectionMatrixInverse.copy(yt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return g[J]};let Z=null;function ut(J,yt){if(h=yt.getViewerPose(c||o),p=yt,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let Ut=!1;wt.length!==z.cameras.length&&(z.cameras.length=0,Ut=!0);for(let jt=0;jt<wt.length;jt++){let _e=wt[jt],ce=null;if(f!==null)ce=f.getViewport(_e);else{let Ee=u.getViewSubImage(d,_e);ce=Ee.viewport,jt===0&&(t.setRenderTargetTextures(w,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(w))}let te=F[jt];te===void 0&&(te=new qn,te.layers.enable(jt),te.viewport=new ze,F[jt]=te),te.matrix.fromArray(_e.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(_e.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ce.x,ce.y,ce.width,ce.height),jt===0&&(z.matrix.copy(te.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ut===!0&&z.cameras.push(te)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let jt=u.getDepthInformation(wt[0]);jt&&jt.isValid&&jt.texture&&m.init(jt,i.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let jt=0;jt<wt.length;jt++){let _e=wt[jt].camera;if(_e){let ce=g[_e];ce||(ce=new Ea,g[_e]=ce);let te=u.getCameraImage(_e);ce.sourceTexture=te}}}}for(let wt=0;wt<E.length;wt++){let Ut=R[wt],St=E[wt];Ut!==null&&St!==void 0&&St.update(Ut,yt,c||o)}Z&&Z(J,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),p=null}let _t=new ag;_t.setAnimationLoop(ut),this.setAnimationLoop=function(J){Z=J},this.dispose=function(){}}},c1=new Be,_g=new $t;_g.set(-1,0,0,0,1,0,0,0,1);function h1(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Pd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,A,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,w)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),A=S.envMap,w=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_g),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function u1(s,t,e,n){let i={},r={};function o(S,A){let w=A.program;n.uniformBlockBinding(S,w,i[S.id])}function a(S,A){let w=i[S.id];w===void 0&&(p(S),w=l(S),i[S.id]=w,S.addEventListener("dispose",m));let E=A.program;n.updateUBOMapping(S,E);let R=t.render.frame;r[S.id]!==R&&(c(S),r[S.id]=R)}function l(S){let A=s.createBuffer(),w=S.__size,E=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function c(S){let A=i[S.id],w=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let R=0,_=w.length;R<_;R++){let v=w[R];if(Array.isArray(v))for(let T=0,C=v.length;T<C;T++)h(v[T],R,T,E);else h(v,R,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,A,w,E){if(d(S,A,w,E)===!0){let R=S.__offset,_=S.value;if(Array.isArray(_)){let v=0;for(let T=0;T<_.length;T++){let C=_[T],P=x(C,!0);u(C,S.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,R,S.__data)}}function u(S,A,w){typeof S=="number"||typeof S=="boolean"?A[w]=S:S.isMatrix3?(A[w]=S.elements[0],A[w+1]=S.elements[1],A[w+2]=S.elements[2],A[w+3]=0,A[w+4]=S.elements[3],A[w+5]=S.elements[4],A[w+6]=S.elements[5],A[w+7]=0,A[w+8]=S.elements[6],A[w+9]=S.elements[7],A[w+10]=S.elements[8],A[w+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-w),w):S.toArray(A,w)}function d(S,A,w,E){let R=S.value,_=A+"_"+w;if(Array.isArray(R)){E[_]===void 0&&(E[_]=[]);let v=E[_],T=!1;for(let C=0;C<R.length;C++)f(R[C],v,C)===!0&&(T=!0);return T}return f(R,E,_)}function f(S,A,w){if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:ArrayBuffer.isView(S)?A[w]=S.slice():A[w]=S.clone(),!0;{let E=A[w];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return A[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function p(S){let A=S.uniforms,w=0,E=16;for(let _=0,v=A.length;_<v;_++){let T=Array.isArray(A[_])?A[_]:[A[_]];for(let C=0,P=T.length;C<P;C++){let F=T[C],z=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(A[_])||Array.isArray(F.value),X=w;for(let U=0,et=z.length;U<et;U++){let L=z[U],H=x(L,I),Z=w%E,ut=Z%H.boundary,_t=Z+ut;w+=ut,_t!==0&&E-_t<H.storage&&(w+=E-_t),U===0&&(X=w),w+=H.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((w-X)/Float32Array.BYTES_PER_ELEMENT),F.__offset=X}}let R=w%E;return R>0&&(w+=E-R),S.__size=w,S.__cache={},this}function x(S,A){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=16,w.storage=48):S.isMatrix4?(w.boundary=16,w.storage=64):S.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(S){let A=S.target;A.removeEventListener("dispose",m),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}var d1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function f1(){return ji===null&&(ji=new cc(d1,16,16,Ws,Ci),ji.name="DFG_LUT",ji.minFilter=mn,ji.magFilter=mn,ji.wrapS=ki,ji.wrapT=ki,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var fh=class{constructor(t={}){let{canvas:e=Dm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=zn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Lc,Oc,Ic]),g=new Set([zn,wi,Do,Mr,Pc,Dc]),S=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},E=null,R=null,_=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,z=null,I=null,X=null;this._outputColorSpace=pn;let q=0,U=0,et=null,L=-1,H=null,Z=new ze,ut=new ze,_t=null,J=new re(0),yt=0,wt=e.width,Ut=e.height,St=1,Yt=null,ae=null,jt=new ze(0,0,wt,Ut),_e=new ze(0,0,wt,Ut),ce=!1,te=new ks,Ee=new hc,Fe=!1,qe=!1,Ae=new Be,xn=new it,Pe=new ze,En={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Ht(){return et===null?St:1}let N=n;function Re(M,V){return e.getContext(M,V)}let Kt,xe,xt,Me,Vt,kt,D,b,$,mt,ht,bt,Ct,at,lt,Tt,k,ct,ot,gt,pt,Mt,Ft;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),N===null){let V="webgl2";if(N=Re(V,M),N===null)throw Re(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(M){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Jt("WebGLRenderer: "+M.message),M}function Qt(){Kt=new wS(N),Kt.init(),pt=new o1(N,Kt),xe=new fS(N,Kt,t,pt),xt=new s1(N,Kt),xe.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),z=N.createFramebuffer(),I=N.createFramebuffer(),X=N.createFramebuffer(),Me=new ES(N),Vt=new Wb,kt=new r1(N,Kt,xt,Vt,xe,pt,Me),D=new MS(C),b=new Rx(N),Mt=new uS(N,b),$=new TS(N,b,Me,Mt),mt=new RS(N,$,b,Mt,Me),ct=new AS(N,xe,kt),lt=new pS(Vt),ht=new Hb(C,D,Kt,xe,Mt,lt),bt=new h1(C,Vt),Ct=new jb,at=new $b(Kt),k=new hS(C,D,xt,mt,p,l),Tt=new i1(C,mt,xe),Ft=new u1(N,Me,xe,xt),ot=new dS(N,Kt,Me),gt=new CS(N,Kt,Me),Me.programs=ht.programs,C.capabilities=xe,C.extensions=Kt,C.properties=Vt,C.renderLists=Ct,C.shadowMap=Tt,C.state=xt,C.info=Me}x!==zn&&(T=new DS(x,e.width,e.height,a,i,r));let ft=new Hd(C,N);this.xr=ft,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(M){M!==void 0&&(St=M,this.setSize(wt,Ut,!1))},this.getSize=function(M){return M.set(wt,Ut)},this.setSize=function(M,V,rt=!0){if(ft.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=M,Ut=V,e.width=Math.floor(M*St),e.height=Math.floor(V*St),rt===!0&&(e.style.width=M+"px",e.style.height=V+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(wt*St,Ut*St).floor()},this.setDrawingBufferSize=function(M,V,rt){wt=M,Ut=V,St=rt,e.width=Math.floor(M*rt),e.height=Math.floor(V*rt),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(x===zn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(jt)},this.setViewport=function(M,V,rt,Q){M.isVector4?jt.set(M.x,M.y,M.z,M.w):jt.set(M,V,rt,Q),xt.viewport(Z.copy(jt).multiplyScalar(Ht()).round())},this.getScissor=function(M){return M.copy(_e)},this.setScissor=function(M,V,rt,Q){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,V,rt,Q),xt.scissor(ut.copy(_e).multiplyScalar(Ht()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(M){xt.setScissorTest(ce=M)},this.setOpaqueSort=function(M){Yt=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,rt=!0){let Q=0;if(M){let tt=!1;if(et!==null){let At=et.texture.format;tt=m.has(At)}if(tt){let At=et.texture.type,Nt=g.has(At),Et=k.getClearColor(),Dt=k.getClearAlpha(),Gt=Et.r,ne=Et.g,ue=Et.b;Nt?(S[0]=Gt,S[1]=ne,S[2]=ue,S[3]=Dt,N.clearBufferuiv(N.COLOR,0,S)):(A[0]=Gt,A[1]=ne,A[2]=ue,A[3]=Dt,N.clearBufferiv(N.COLOR,0,A))}else Q|=N.COLOR_BUFFER_BIT}V&&(Q|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),k.dispose(),Ct.dispose(),at.dispose(),kt.dispose(),Vt.dispose(),D.dispose(),mt.dispose(),$.dispose(),Mt.dispose(),Ft.dispose(),ht.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ca),ft.removeEventListener("sessionend",ha),y.stop()};function Wt(M){M.preventDefault(),Ad("WebGLRenderer: Context Lost."),P=!0}function ee(){Ad("WebGLRenderer: Context Restored."),P=!1;let M=Me.autoReset,V=Tt.enabled,rt=Tt.autoUpdate,Q=Tt.needsUpdate,tt=Tt.type;Qt(),Me.autoReset=M,Tt.enabled=V,Tt.autoUpdate=rt,Tt.needsUpdate=Q,Tt.type=tt}function Rt(M){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Se(M){let V=M.target;V.removeEventListener("dispose",Se),Xe(V)}function Xe(M){rn(M),Vt.remove(M)}function rn(M){let V=Vt.get(M).programs;V!==void 0&&(V.forEach(function(rt){ht.releaseProgram(rt)}),M.isShaderMaterial&&ht.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,rt,Q,tt,At){V===null&&(V=En);let Nt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Et=dn(M,V,rt,Q,tt);xt.setMaterial(Q,Nt);let Dt=rt.index,Gt=1;if(Q.wireframe===!0){if(Dt=$.getWireframeAttribute(rt),Dt===void 0)return;Gt=2}let ne=rt.drawRange,ue=rt.attributes.position,Bt=ne.start*Gt,de=(ne.start+ne.count)*Gt;At!==null&&(Bt=Math.max(Bt,At.start*Gt),de=Math.min(de,(At.start+At.count)*Gt)),Dt!==null?(Bt=Math.max(Bt,0),de=Math.min(de,Dt.count)):ue!=null&&(Bt=Math.max(Bt,0),de=Math.min(de,ue.count));let Ze=de-Bt;if(Ze<0||Ze===1/0)return;Mt.setup(tt,Q,Et,rt,Dt);let Le,De=ot;if(Dt!==null&&(Le=b.get(Dt),De=gt,De.setIndex(Le)),tt.isMesh)Q.wireframe===!0?(xt.setLineWidth(Q.wireframeLinewidth*Ht()),De.setMode(N.LINES)):De.setMode(N.TRIANGLES);else if(tt.isLine){let vn=Q.linewidth;vn===void 0&&(vn=1),xt.setLineWidth(vn*Ht()),tt.isLineSegments?De.setMode(N.LINES):tt.isLineLoop?De.setMode(N.LINE_LOOP):De.setMode(N.LINE_STRIP)}else tt.isPoints?De.setMode(N.POINTS):tt.isSprite&&De.setMode(N.TRIANGLES);if(tt.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let vn=tt._multiDrawStarts,zt=tt._multiDrawCounts,Rn=tt._multiDrawCount,be=Dt?b.get(Dt).bytesPerElement:1,hr=Vt.get(Q).currentProgram.getUniforms();for(let yn=0;yn<Rn;yn++)hr.setValue(N,"_gl_DrawID",yn),De.render(vn[yn]/be,zt[yn])}else if(tt.isInstancedMesh)De.renderInstances(Bt,Ze,tt.count);else if(rt.isInstancedBufferGeometry){let vn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,zt=Math.min(rt.instanceCount,vn);De.renderInstances(Bt,Ze,zt)}else De.render(Bt,Ze)};function kn(M,V,rt,Q){F!==null&&M.isNodeMaterial&&F.setObject(Q,M),Fe===!0&&lt.setState(M,rt,!1),M.transparent===!0&&M.side===Xi&&M.forceSinglePass===!1?(M.side=Dn,M.needsUpdate=!0,dt(M,V,Q),M.side=Hs,M.needsUpdate=!0,dt(M,V,Q),M.side=Xi):dt(M,V,Q)}this.compile=function(M,V,rt=null){rt===null&&(rt=M),F!==null&&F.renderStart(M,V,rt),R=at.get(rt),R.init(V),v.push(R),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(V.layers)&&(R.pushLight(tt),tt.castShadow&&R.pushShadow(tt))}),M!==rt&&M.traverseVisible(function(tt){tt.isLight&&tt.layers.test(V.layers)&&(R.pushLight(tt),tt.castShadow&&R.pushShadow(tt))}),R.setupLights(),F!==null&&F.updateLights(R.state.lightsArray),qe=this.localClippingEnabled,Fe=lt.init(this.clippingPlanes,qe),Fe===!0&&lt.setGlobalState(this.clippingPlanes,V),F!==null&&Tt.render(R.state.shadowsArray,rt,V);let Q=new Set;return M.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let At=tt.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){let Et=At[Nt];kn(Et,rt,V,tt),Q.add(Et)}else kn(At,rt,V,tt),Q.add(At)}),R=v.pop(),F!==null&&F.renderEnd(),Q},this.compileAsync=function(M,V,rt=null){let Q=this.compile(M,V,rt);return new Promise(tt=>{function At(){if(Q.forEach(function(Nt){let Dt=Vt.get(Nt).currentProgram;(Dt===void 0||Dt.isReady())&&Q.delete(Nt)}),Q.size===0){tt(M);return}setTimeout(At,10)}Kt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let An=null;function bl(M){An&&An(M)}function ca(){y.stop()}function ha(){y.start()}let y=new ag;y.setAnimationLoop(bl),typeof self<"u"&&y.setContext(self),this.setAnimationLoop=function(M){An=M,ft.setAnimationLoop(M),M===null?y.stop():y.start()},ft.addEventListener("sessionstart",ca),ft.addEventListener("sessionend",ha),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(M,V);let rt=ft.enabled===!0&&ft.isPresenting===!0,Q=T!==null&&(et===null||rt)&&T.begin(C,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,V,et),R=at.get(M,v.length),R.init(V),R.state.textureUnits=kt.getTextureUnits(),v.push(R),Ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Ee.setFromArrayCamera(V):te.setFromProjectionMatrix(Ae,ai,V.reversedDepth),qe=this.localClippingEnabled,Fe=lt.init(this.clippingPlanes,qe),E=Ct.get(M,_.length),E.init(),_.push(E),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let Nt=C.xr.getDepthSensingMesh();Nt!==null&&O(Nt,V,-1/0,C.sortObjects)}O(M,V,0,C.sortObjects),E.finish(),F!==null&&F.updateLights(R.state.lightsArray),C.sortObjects===!0&&E.sort(Yt,ae),Lt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Lt&&k.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&lt.beginShadows();let tt=R.state.shadowsArray;if(Tt.render(tt,M,V),Fe===!0&&lt.endShadows(),(Q&&T.hasRenderPass())===!1){let Nt=E.opaque,Et=E.transmissive;if(R.setupLights(),V.isArrayCamera){let Dt=V.cameras;if(Et.length>0)for(let Gt=0,ne=Dt.length;Gt<ne;Gt++){let ue=Dt[Gt];Y(Nt,Et,M,ue)}Lt&&k.render(M);for(let Gt=0,ne=Dt.length;Gt<ne;Gt++){let ue=Dt[Gt];B(E,M,ue,ue.viewport)}}else Et.length>0&&Y(Nt,Et,M,V),Lt&&k.render(M),B(E,M,V)}et!==null&&U===0&&(kt.updateMultisampleRenderTarget(et),kt.updateRenderTargetMipmap(et)),Q&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,V),Mt.resetDefaultState(),L=-1,H=null,v.pop(),v.length>0?(R=v[v.length-1],kt.setTextureUnits(R.state.textureUnits),Fe===!0&&lt.setGlobalState(C.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,F!==null&&F.renderEnd()};function O(M,V,rt,Q){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)rt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){let Nt=V.isArrayCamera?Ee:te;if(!M.frustumCulled||M.intersectsFrustum(Nt)){Q&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);let Et=mt.update(M),Dt=M.material;Dt.visible&&E.push(M,Et,Dt,rt,Pe.z,null,V)}}else if(M.isMesh||M.isLine||M.isPoints){let Nt=V.isArrayCamera?Ee:te;if(!M.frustumCulled||M.intersectsFrustum(Nt)){let Et=mt.update(M),Dt=M.material;if(Q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Pe.copy(Et.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(Dt)){let Gt=Et.groups;for(let ne=0,ue=Gt.length;ne<ue;ne++){let Bt=Gt[ne],de=Dt[Bt.materialIndex];de&&de.visible&&E.push(M,Et,de,rt,Pe.z,Bt,V)}}else Dt.visible&&E.push(M,Et,Dt,rt,Pe.z,null,V)}}}let At=M.children;for(let Nt=0,Et=At.length;Nt<Et;Nt++)O(At[Nt],V,rt,Q)}function B(M,V,rt,Q){let{opaque:tt,transmissive:At,transparent:Nt}=M;R.setupLightsView(rt),Fe===!0&&lt.setGlobalState(C.clippingPlanes,rt),Q&&xt.viewport(Z.copy(Q)),tt.length>0&&nt(tt,V,rt),At.length>0&&nt(At,V,rt),Nt.length>0&&nt(Nt,V,rt),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Y(M,V,rt,Q){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Q.id]===void 0){let Bt=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Q.id]=new Zn(1,1,{generateMipmaps:!0,type:Bt?Ci:zn,minFilter:Mi,samples:Math.max(4,xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let At=R.state.transmissionRenderTarget[Q.id],Nt=Q.viewport||Z;At.setSize(Nt.z*C.transmissionResolutionScale,Nt.w*C.transmissionResolutionScale);let Et=C.getRenderTarget(),Dt=C.getActiveCubeFace(),Gt=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(J),yt=C.getClearAlpha(),yt<1&&C.setClearColor(16777215,.5),C.clear(),Lt&&k.render(rt);let ne=C.toneMapping;C.toneMapping=ci;let ue=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),R.setupLightsView(Q),Fe===!0&&lt.setGlobalState(C.clippingPlanes,Q),nt(M,rt,Q),kt.updateMultisampleRenderTarget(At),kt.updateRenderTargetMipmap(At),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let de=0,Ze=V.length;de<Ze;de++){let Le=V[de],{object:De,geometry:vn,material:zt,group:Rn}=Le;if(zt.side===Xi&&De.layers.test(Q.layers)){let be=zt.side;zt.side=Dn,zt.needsUpdate=!0,j(De,rt,Q,vn,zt,Rn),zt.side=be,zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(kt.updateMultisampleRenderTarget(At),kt.updateRenderTargetMipmap(At))}C.setRenderTarget(Et,Dt,Gt),C.setClearColor(J,yt),ue!==void 0&&(Q.viewport=ue),C.toneMapping=ne}function nt(M,V,rt){let Q=V.isScene===!0?V.overrideMaterial:null;for(let tt=0,At=M.length;tt<At;tt++){let Nt=M[tt],{object:Et,geometry:Dt,group:Gt}=Nt,ne=Nt.material;ne.allowOverride===!0&&Q!==null&&(ne=Q),Et.layers.test(rt.layers)&&j(Et,V,rt,Dt,ne,Gt)}}function j(M,V,rt,Q,tt,At){F!==null&&tt.isNodeMaterial&&F.setObject(M,tt),M.onBeforeRender(C,V,rt,Q,tt,At),M.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),tt.onBeforeRender(C,V,rt,Q,M,At),tt.transparent===!0&&tt.side===Xi&&tt.forceSinglePass===!1?(tt.side=Dn,tt.needsUpdate=!0,C.renderBufferDirect(rt,V,Q,tt,M,At),tt.side=Hs,tt.needsUpdate=!0,C.renderBufferDirect(rt,V,Q,tt,M,At),tt.side=Xi):C.renderBufferDirect(rt,V,Q,tt,M,At),M.onAfterRender(C,V,rt,Q,tt,At)}function K(M){let V=0;for(let rt of M)rt.texture!==null&&V++;return V}function dt(M,V,rt){V.isScene!==!0&&(V=En);let Q=Vt.get(M),tt=R.state.lights,At=R.state.shadowsArray,Nt=tt.state.version,Et=ht.getParameters(M,tt.state,At,V,rt,R.state.lightProbeGridArray),Dt=ht.getProgramCacheKey(Et),Gt=Q.programs;Q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,Q.fog=V.fog;let ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;Q.envMap=D.get(M.envMap||Q.environment,ne),Q.envMapRotation=Q.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,Gt===void 0&&(M.addEventListener("dispose",Se),Gt=new Map,Q.programs=Gt,Q.programVariants=new Map);let ue=Gt.get(Dt);if(ue!==void 0){if(Q.currentProgram===ue&&Q.lightsStateVersion===Nt)return ve(M,Et),ue}else Et.uniforms=ht.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,rt,Et),M.onBeforeCompile(Et,C),ue=ht.acquireProgram(Et,Dt),Gt.set(Dt,ue),Q.uniforms=Et.uniforms;let Bt=Q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=lt.uniform),ve(M,Et),Q.needsLights=Eu(M),Q.lightsStateVersion=Nt,Q.needsLights&&(Bt.ambientLightColor.value=tt.state.ambient,Bt.lightProbe.value=tt.state.probe,Bt.sunLights.value=tt.state.sun,Bt.sunLightShadows.value=tt.state.sunShadow,Bt.directionalLights.value=tt.state.directional,Bt.directionalLightShadows.value=tt.state.directionalShadow,Bt.spotLights.value=tt.state.spot,Bt.spotLightShadows.value=tt.state.spotShadow,Bt.rectAreaLights.value=tt.state.rectArea,Bt.ltc_1.value=tt.state.rectAreaLTC1,Bt.ltc_2.value=tt.state.rectAreaLTC2,Bt.pointLights.value=tt.state.point,Bt.pointLightShadows.value=tt.state.pointShadow,Bt.hemisphereLights.value=tt.state.hemi,Bt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Bt.sunShadowCascade.value=tt.state.sunShadowCascade,Bt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Bt.spotLightMatrix.value=tt.state.spotLightMatrix,Bt.spotLightMap.value=tt.state.spotLightMap,Bt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.numLightProbeGrids=K(R.state.lightProbeGridArray),Q.currentProgram=ue,Q.uniformsList=null,ue}function Xt(M,V,rt,Q,tt){let At=Vt.get(M),Nt=At.currentProgram.id+","+Q+","+tt,Et=At.programVariants.get(Nt);return Et===void 0?(Et=dt(M,V,rt),At.programVariants.set(Nt,Et)):(At.currentProgram=Et,At.uniformsList=null,At.outputColorSpace=Q,At.toneMapping=tt),Et}function Ne(M){if(M.uniformsList===null){let V=M.currentProgram.getUniforms();M.uniformsList=Io.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function ve(M,V){let rt=Vt.get(M);rt.outputColorSpace=V.outputColorSpace,rt.batching=V.batching,rt.batchingColor=V.batchingColor,rt.instancing=V.instancing,rt.instancingColor=V.instancingColor,rt.instancingMorph=V.instancingMorph,rt.skinning=V.skinning,rt.morphTargets=V.morphTargets,rt.morphNormals=V.morphNormals,rt.morphColors=V.morphColors,rt.morphTargetsCount=V.morphTargetsCount,rt.numClippingPlanes=V.numClippingPlanes,rt.numIntersection=V.numClipIntersection,rt.vertexAlphas=V.vertexAlphas,rt.vertexTangents=V.vertexTangents,rt.toneMapping=V.toneMapping}function dn(M,V,rt,Q,tt){V.isScene!==!0&&(V=En),kt.resetTextureUnits();let At=V.fog,Nt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?V.environment:null,Et=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:fe.workingColorSpace,Dt=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Gt=D.get(Q.envMap||Nt,Dt),ne=Q.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ue=!!rt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Bt=!!rt.morphAttributes.position,de=!!rt.morphAttributes.normal,Ze=!!rt.morphAttributes.color,Le=ci;Q.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Le=C.toneMapping);let De=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,vn=De!==void 0?De.length:0,zt=Vt.get(Q),Rn=R.state.lights;if(Fe===!0&&(qe===!0||M!==H)){let Ve=M===H&&Q.id===L;lt.setState(Q,M,Ve)}let be=!1,hr=!1;Q.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==Rn.state.version||tt.isBatchedMesh&&zt.batching===!1||!tt.isBatchedMesh&&zt.batching===!0||tt.isBatchedMesh&&zt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&zt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&zt.instancing===!1||!tt.isInstancedMesh&&zt.instancing===!0||tt.isSkinnedMesh&&zt.skinning===!1||!tt.isSkinnedMesh&&zt.skinning===!0||tt.isInstancedMesh&&zt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&zt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&zt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&zt.instancingMorph===!1&&tt.morphTexture!==null||zt.envMap!==Gt||Q.fog===!0&&zt.fog!==At||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==lt.numPlanes||zt.numIntersection!==lt.numIntersection)||zt.vertexAlphas!==ne||zt.vertexTangents!==ue||zt.morphTargets!==Bt||zt.morphNormals!==de||zt.morphColors!==Ze||zt.morphTargetsCount!==vn||zt.numLightProbeGrids!==K(R.state.lightProbeGridArray)?be=!0:(zt.outputColorSpace!==Et||zt.toneMapping!==Le)&&(hr=!0):(be=!0,zt.__version=Q.version);let yn=zt.currentProgram;(be===!0||hr===!0)&&(yn=hr===!0?Xt(Q,V,tt,Et,Le):dt(Q,V,tt),F&&Q.isNodeMaterial&&F.onUpdateProgram(Q,yn,zt));let Tl=!1,Rs=!1,ur=!1,ye=yn.getUniforms(),fn=zt.uniforms;if(xt.useProgram(yn.program)&&(Tl=!0,Rs=!0,ur=!0),Q.id!==L&&(L=Q.id,Rs=!0),Tl||H!==M){xt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ye.setValue(N,"projectionMatrix",M.projectionMatrix),ye.setValue(N,"viewMatrix",M.matrixWorldInverse);let on=ye.map.cameraPosition;on!==void 0&&on.setValue(N,xn.setFromMatrixPosition(M.matrixWorld)),xe.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ye.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,Rs=!0,ur=!0)}if(zt.needsLights&&(Rn.state.sunShadowMap.length>0&&ye.setValue(N,"sunShadowMap",Rn.state.sunShadowMap,kt),Rn.state.directionalShadowMap.length>0&&ye.setValue(N,"directionalShadowMap",Rn.state.directionalShadowMap,kt),Rn.state.spotShadowMap.length>0&&ye.setValue(N,"spotShadowMap",Rn.state.spotShadowMap,kt),Rn.state.pointShadowMap.length>0&&ye.setValue(N,"pointShadowMap",Rn.state.pointShadowMap,kt)),tt.isSkinnedMesh){ye.setOptional(N,tt,"bindMatrix"),ye.setOptional(N,tt,"bindMatrixInverse");let Ve=tt.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ye.setValue(N,"boneTexture",Ve.boneTexture,kt))}tt.isBatchedMesh&&(ye.setOptional(N,tt,"batchingTexture"),ye.setValue(N,"batchingTexture",tt._matricesTexture,kt),ye.setOptional(N,tt,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",tt._indirectTexture,kt),ye.setOptional(N,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",tt._colorsTexture,kt));let xi=rt.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&ct.update(tt,rt,yn),(Rs||zt.receiveShadow!==tt.receiveShadow)&&(zt.receiveShadow=tt.receiveShadow,ye.setValue(N,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&V.environment!==null&&(fn.envMapIntensity.value=V.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=f1()),Rs){if(ye.setValue(N,"toneMappingExposure",C.toneMappingExposure),zt.needsLights&&Ml(fn,ur),At&&Q.fog===!0&&bt.refreshFogUniforms(fn,At),bt.refreshMaterialUniforms(fn,Q,St,Ut,R.state.transmissionRenderTarget[M.id]),zt.needsLights&&zt.numLightProbeGrids>0){let Ve=w,on=0;for(let ss of R.state.lightProbeGridArray)ss.texture!==null&&(Ve.textures[on]=ss.texture,Ve.min[on]=ss.boundingBox.min,Ve.max[on]=ss.boundingBox.max,Ve.resolution[on]=ss.resolution,on++);for(let ss in Ve)Ve[ss].length=on;fn.probesSH.value=Ve.textures,fn.probesMin.value=Ve.min,fn.probesMax.value=Ve.max,fn.probesResolution.value=Ve.resolution}Io.upload(N,Ne(zt),fn,kt)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Io.upload(N,Ne(zt),fn,kt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ye.setValue(N,"center",tt.center),ye.setValue(N,"modelViewMatrix",tt.modelViewMatrix),ye.setValue(N,"normalMatrix",tt.normalMatrix),ye.setValue(N,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let Ve=Q.uniformsGroups;for(let on=0,ss=Ve.length;on<ss;on++){let Ap=Ve[on];Ft.update(Ap,yn),Ft.bind(Ap,yn)}}return yn}function Ml(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.sunLights.needsUpdate=V,M.sunLightShadows.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function Eu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,V,rt){let Q=Vt.get(M);Q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Vt.get(M.texture).__webglTexture=V,Vt.get(M.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:rt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){let rt=Vt.get(M);rt.__webglFramebuffer=V,rt.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(M,V=0,rt=0){et=M,q=V,U=rt;let Q=null,tt=!1,At=!1;if(M){let Et=Vt.get(M);if(Et.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(N.FRAMEBUFFER,Et.__webglFramebuffer),Z.copy(M.viewport),ut.copy(M.scissor),_t=M.scissorTest,xt.viewport(Z),xt.scissor(ut),xt.setScissorTest(_t),L=-1;return}else if(Et.__webglFramebuffer===void 0)kt.setupRenderTarget(M);else if(Et.__hasExternalTextures)kt.rebindTextures(M,Vt.get(M.texture).__webglTexture,Vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ne=M.depthTexture;if(Et.__boundDepthTexture!==ne){if(ne!==null&&Vt.has(ne)&&(M.width!==ne.image.width||M.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(M)}}let Dt=M.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(At=!0);let Gt=Vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[V])?Q=Gt[V][rt]:Q=Gt[V],tt=!0):M.samples>0&&kt.useMultisampledRTT(M)===!1?Q=Vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?Q=Gt[rt]:Q=Gt,Z.copy(M.viewport),ut.copy(M.scissor),_t=M.scissorTest}else Z.copy(jt).multiplyScalar(St).floor(),ut.copy(_e).multiplyScalar(St).floor(),_t=ce;if(rt!==0&&(Q=z),xt.bindFramebuffer(N.FRAMEBUFFER,Q)&&xt.drawBuffers(M,Q),xt.viewport(Z),xt.scissor(ut),xt.setScissorTest(_t),tt){let Et=Vt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Et.__webglTexture,rt)}else if(At){let Et=V;for(let Dt=0;Dt<M.textures.length;Dt++){let Gt=Vt.get(M.textures[Dt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Dt,Gt.__webglTexture,rt,Et)}}else if(M!==null&&rt!==0){let Et=Vt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,rt)}L=-1};function wl(M){let V=Vt.get(M);return(V.__readFormat!==M.format||V.__readType!==M.type)&&(V.__readFormat=M.format,V.__readType=M.type,V.__formatReadable=xe.textureFormatReadable(M.format),V.__typeReadable=xe.textureTypeReadable(M.type)),V}this.readRenderTargetPixels=function(M,V,rt,Q,tt,At,Nt,Et=0){if(!(M&&M.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Nt!==void 0&&(Dt=Dt[Nt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){xt.bindFramebuffer(N.FRAMEBUFFER,Dt);try{let Gt=M.textures[Et],ne=Gt.format,ue=Gt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et);let Bt=wl(Gt);if(Bt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-Q&&rt>=0&&rt<=M.height-tt&&N.readPixels(V,rt,Q,tt,pt.convert(ne),pt.convert(ue),At)}finally{let Gt=et!==null?Vt.get(et).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(M,V,rt,Q,tt,At,Nt,Et=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Nt!==void 0&&(Dt=Dt[Nt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(V>=0&&V<=M.width-Q&&rt>=0&&rt<=M.height-tt){xt.bindFramebuffer(N.FRAMEBUFFER,Dt);let Gt=M.textures[Et],ne=Gt.format,ue=Gt.type;M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Et);let Bt=wl(Gt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,de),N.bufferData(N.PIXEL_PACK_BUFFER,At.byteLength,N.STREAM_READ),N.readPixels(V,rt,Q,tt,pt.convert(ne),pt.convert(ue),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ze=et!==null?Vt.get(et).__webglFramebuffer:null;xt.bindFramebuffer(N.FRAMEBUFFER,Ze);let Le=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Om(N,Le,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,de),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,At),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(de),N.deleteSync(Le),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,rt=0){let Q=Math.pow(2,-rt),tt=Math.floor(M.image.width*Q),At=Math.floor(M.image.height*Q),Nt=V!==null?V.x:0,Et=V!==null?V.y:0;kt.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,rt,0,0,Nt,Et,tt,At),xt.unbindTexture()},this.copyTextureToTexture=function(M,V,rt=null,Q=null,tt=0,At=0){let Nt,Et,Dt,Gt,ne,ue,Bt,de,Ze,Le=M.isCompressedTexture?M.mipmaps[At]:M.image;if(rt!==null)Nt=rt.max.x-rt.min.x,Et=rt.max.y-rt.min.y,Dt=rt.isBox3?rt.max.z-rt.min.z:1,Gt=rt.min.x,ne=rt.min.y,ue=rt.isBox3?rt.min.z:0;else{let ye=Math.pow(2,-tt);Nt=Math.floor(Le.width*ye),Et=Math.floor(Le.height*ye),M.isDataArrayTexture?Dt=Le.depth:M.isData3DTexture?Dt=Math.floor(Le.depth*ye):Dt=1,Gt=0,ne=0,ue=0}Q!==null?(Bt=Q.x,de=Q.y,Ze=Q.z):(Bt=0,de=0,Ze=0);let De=pt.convert(V.format),vn=pt.convert(V.type),zt;V.isData3DTexture?(kt.setTexture3D(V,0),zt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(kt.setTexture2DArray(V,0),zt=N.TEXTURE_2D_ARRAY):(kt.setTexture2D(V,0),zt=N.TEXTURE_2D),xt.activeTexture(N.TEXTURE0),xt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),xt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),xt.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let Rn=xt.getParameter(N.UNPACK_ROW_LENGTH),be=xt.getParameter(N.UNPACK_IMAGE_HEIGHT),hr=xt.getParameter(N.UNPACK_SKIP_PIXELS),yn=xt.getParameter(N.UNPACK_SKIP_ROWS),Tl=xt.getParameter(N.UNPACK_SKIP_IMAGES);xt.pixelStorei(N.UNPACK_ROW_LENGTH,Le.width),xt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Le.height),xt.pixelStorei(N.UNPACK_SKIP_PIXELS,Gt),xt.pixelStorei(N.UNPACK_SKIP_ROWS,ne),xt.pixelStorei(N.UNPACK_SKIP_IMAGES,ue);let Rs=M.isDataArrayTexture||M.isData3DTexture,ur=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){let ye=Vt.get(M),fn=Vt.get(V),xi=Vt.get(ye.__renderTarget),Ve=Vt.get(fn.__renderTarget);xt.bindFramebuffer(N.READ_FRAMEBUFFER,xi.__webglFramebuffer),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let on=0;on<Dt;on++)Rs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.get(M).__webglTexture,tt,ue+on),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Vt.get(V).__webglTexture,At,Ze+on)),N.blitFramebuffer(Gt,ne,Gt+Nt,ne+Et,Bt,de,Bt+Nt,de+Et,N.DEPTH_BUFFER_BIT,N.NEAREST);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(tt!==0||M.isRenderTargetTexture||Vt.has(M)){let ye=Vt.get(M),fn=Vt.get(V);xt.bindFramebuffer(N.READ_FRAMEBUFFER,I),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,X);for(let xi=0;xi<Dt;xi++)Rs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,tt,ue+xi):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,tt),ur?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fn.__webglTexture,At,Ze+xi):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fn.__webglTexture,At),tt!==0?N.blitFramebuffer(Gt,ne,Gt+Nt,ne+Et,Bt,de,Bt+Nt,de+Et,N.COLOR_BUFFER_BIT,N.NEAREST):ur?N.copyTexSubImage3D(zt,At,Bt,de,Ze+xi,Gt,ne,Nt,Et):N.copyTexSubImage2D(zt,At,Bt,de,Gt,ne,Nt,Et);xt.bindFramebuffer(N.READ_FRAMEBUFFER,null),xt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ur?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(zt,At,Bt,de,Ze,Nt,Et,Dt,De,vn,Le.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,At,Bt,de,Ze,Nt,Et,Dt,De,Le.data):N.texSubImage3D(zt,At,Bt,de,Ze,Nt,Et,Dt,De,vn,Le):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,At,Bt,de,Nt,Et,De,vn,Le.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,At,Bt,de,Le.width,Le.height,De,Le.data):N.texSubImage2D(N.TEXTURE_2D,At,Bt,de,Nt,Et,De,vn,Le);xt.pixelStorei(N.UNPACK_ROW_LENGTH,Rn),xt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be),xt.pixelStorei(N.UNPACK_SKIP_PIXELS,hr),xt.pixelStorei(N.UNPACK_SKIP_ROWS,yn),xt.pixelStorei(N.UNPACK_SKIP_IMAGES,Tl),At===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&N.generateMipmap(zt),xt.unbindTexture()},this.initRenderTarget=function(M){Vt.get(M).__webglFramebuffer===void 0&&kt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?kt.setTextureCube(M,0):M.isData3DTexture?kt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?kt.setTexture2DArray(M,0):kt.setTexture2D(M,0),xt.unbindTexture()},this.resetState=function(){q=0,U=0,et=null,xt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var Fo=function(s,t){let i=s,r=qa[t],o=null,a=0,l=null,c=[],h={},u=function(_,v){a=i*4+17,o=(function(T){let C=new Array(T);for(let P=0;P<T;P+=1){C[P]=new Array(T);for(let F=0;F<T;F+=1)C[P][F]=null}return C})(a),d(0,0),d(a-7,0),d(0,a-7),x(),p(),g(_,v),i>=7&&m(_),l==null&&(l=w(i,r,c)),S(l,v)},d=function(_,v){for(let T=-1;T<=7;T+=1)if(!(_+T<=-1||a<=_+T))for(let C=-1;C<=7;C+=1)v+C<=-1||a<=v+C||(0<=T&&T<=6&&(C==0||C==6)||0<=C&&C<=6&&(T==0||T==6)||2<=T&&T<=4&&2<=C&&C<=4?o[_+T][v+C]=!0:o[_+T][v+C]=!1)},f=function(){let _=0,v=0;for(let T=0;T<8;T+=1){u(!0,T);let C=js.getLostPoint(h);(T==0||_>C)&&(_=C,v=T)}return v},p=function(){for(let _=8;_<a-8;_+=1)o[_][6]==null&&(o[_][6]=_%2==0);for(let _=8;_<a-8;_+=1)o[6][_]==null&&(o[6][_]=_%2==0)},x=function(){let _=js.getPatternPosition(i);for(let v=0;v<_.length;v+=1)for(let T=0;T<_.length;T+=1){let C=_[v],P=_[T];if(o[C][P]==null)for(let F=-2;F<=2;F+=1)for(let z=-2;z<=2;z+=1)F==-2||F==2||z==-2||z==2||F==0&&z==0?o[C+F][P+z]=!0:o[C+F][P+z]=!1}},m=function(_){let v=js.getBCHTypeNumber(i);for(let T=0;T<18;T+=1){let C=!_&&(v>>T&1)==1;o[Math.floor(T/3)][T%3+a-8-3]=C}for(let T=0;T<18;T+=1){let C=!_&&(v>>T&1)==1;o[T%3+a-8-3][Math.floor(T/3)]=C}},g=function(_,v){let T=r<<3|v,C=js.getBCHTypeInfo(T);for(let P=0;P<15;P+=1){let F=!_&&(C>>P&1)==1;P<6?o[P][8]=F:P<8?o[P+1][8]=F:o[a-15+P][8]=F}for(let P=0;P<15;P+=1){let F=!_&&(C>>P&1)==1;P<8?o[8][a-P-1]=F:P<9?o[8][15-P-1+1]=F:o[8][15-P-1]=F}o[a-8][8]=!_},S=function(_,v){let T=-1,C=a-1,P=7,F=0,z=js.getMaskFunction(v);for(let I=a-1;I>0;I-=2)for(I==6&&(I-=1);;){for(let X=0;X<2;X+=1)if(o[C][I-X]==null){let q=!1;F<_.length&&(q=(_[F]>>>P&1)==1),z(C,I-X)&&(q=!q),o[C][I-X]=q,P-=1,P==-1&&(F+=1,P=7)}if(C+=T,C<0||a<=C){C-=T,T=-T;break}}},A=function(_,v){let T=0,C=0,P=0,F=new Array(v.length),z=new Array(v.length);for(let U=0;U<v.length;U+=1){let et=v[U].dataCount,L=v[U].totalCount-et;C=Math.max(C,et),P=Math.max(P,L),F[U]=new Array(et);for(let _t=0;_t<F[U].length;_t+=1)F[U][_t]=255&_.getBuffer()[_t+T];T+=et;let H=js.getErrorCorrectPolynomial(L),ut=Za(F[U],H.getLength()-1).mod(H);z[U]=new Array(H.getLength()-1);for(let _t=0;_t<z[U].length;_t+=1){let J=_t+ut.getLength()-z[U].length;z[U][_t]=J>=0?ut.getAt(J):0}}let I=0;for(let U=0;U<v.length;U+=1)I+=v[U].totalCount;let X=new Array(I),q=0;for(let U=0;U<C;U+=1)for(let et=0;et<v.length;et+=1)U<F[et].length&&(X[q]=F[et][U],q+=1);for(let U=0;U<P;U+=1)for(let et=0;et<v.length;et+=1)U<z[et].length&&(X[q]=z[et][U],q+=1);return X},w=function(_,v,T){let C=xg.getRSBlocks(_,v),P=vg();for(let z=0;z<T.length;z+=1){let I=T[z];P.put(I.getMode(),4),P.put(I.getLength(),js.getLengthInBits(I.getMode(),_)),I.write(P)}let F=0;for(let z=0;z<C.length;z+=1)F+=C[z].dataCount;if(P.getLengthInBits()>F*8)throw"code length overflow. ("+P.getLengthInBits()+">"+F*8+")";for(P.getLengthInBits()+4<=F*8&&P.put(0,4);P.getLengthInBits()%8!=0;)P.putBit(!1);for(;!(P.getLengthInBits()>=F*8||(P.put(236,8),P.getLengthInBits()>=F*8));)P.put(17,8);return A(P,C)};h.addData=function(_,v){v=v||"Byte";let T=null;switch(v){case"Numeric":T=p1(_);break;case"Alphanumeric":T=m1(_);break;case"Byte":T=g1(_);break;case"Kanji":T=_1(_);break;default:throw"mode:"+v}c.push(T),l=null},h.isDark=function(_,v){if(_<0||a<=_||v<0||a<=v)throw _+","+v;return o[_][v]},h.getModuleCount=function(){return a},h.make=function(){if(i<1){let _=1;for(;_<40;_++){let v=xg.getRSBlocks(_,r),T=vg();for(let P=0;P<c.length;P++){let F=c[P];T.put(F.getMode(),4),T.put(F.getLength(),js.getLengthInBits(F.getMode(),_)),F.write(T)}let C=0;for(let P=0;P<v.length;P++)C+=v[P].dataCount;if(T.getLengthInBits()<=C*8)break}i=_}u(!1,f())},h.createTableTag=function(_,v){_=_||2,v=typeof v>"u"?_*4:v;let T="";T+='<table style="',T+=" border-width: 0px; border-style: none;",T+=" border-collapse: collapse;",T+=" padding: 0px; margin: "+v+"px;",T+='">',T+="<tbody>";for(let C=0;C<h.getModuleCount();C+=1){T+="<tr>";for(let P=0;P<h.getModuleCount();P+=1)T+='<td style="',T+=" border-width: 0px; border-style: none;",T+=" border-collapse: collapse;",T+=" padding: 0px; margin: 0px;",T+=" width: "+_+"px;",T+=" height: "+_+"px;",T+=" background-color: ",T+=h.isDark(C,P)?"#000000":"#ffffff",T+=";",T+='"/>';T+="</tr>"}return T+="</tbody>",T+="</table>",T},h.createSvgTag=function(_,v,T,C){let P={};typeof arguments[0]=="object"&&(P=arguments[0],_=P.cellSize,v=P.margin,T=P.alt,C=P.title),_=_||2,v=typeof v>"u"?_*4:v,T=typeof T=="string"?{text:T}:T||{},T.text=T.text||null,T.id=T.text?T.id||"qrcode-description":null,C=typeof C=="string"?{text:C}:C||{},C.text=C.text||null,C.id=C.text?C.id||"qrcode-title":null;let F=h.getModuleCount()*_+v*2,z,I,X,q,U="",et;for(et="l"+_+",0 0,"+_+" -"+_+",0 0,-"+_+"z ",U+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',U+=P.scalable?"":' width="'+F+'px" height="'+F+'px"',U+=' viewBox="0 0 '+F+" "+F+'" ',U+=' preserveAspectRatio="xMinYMin meet"',U+=C.text||T.text?' role="img" aria-labelledby="'+E([C.id,T.id].join(" ").trim())+'"':"",U+=">",U+=C.text?'<title id="'+E(C.id)+'">'+E(C.text)+"</title>":"",U+=T.text?'<description id="'+E(T.id)+'">'+E(T.text)+"</description>":"",U+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',U+='<path d="',X=0;X<h.getModuleCount();X+=1)for(q=X*_+v,z=0;z<h.getModuleCount();z+=1)h.isDark(X,z)&&(I=z*_+v,U+="M"+I+","+q+et);return U+='" stroke="transparent" fill="black"/>',U+="</svg>",U},h.createDataURL=function(_,v){_=_||2,v=typeof v>"u"?_*4:v;let T=h.getModuleCount()*_+v*2,C=v,P=T-v;return S1(T,T,function(F,z){if(C<=F&&F<P&&C<=z&&z<P){let I=Math.floor((F-C)/_),X=Math.floor((z-C)/_);return h.isDark(X,I)?0:1}else return 1})},h.createImgTag=function(_,v,T){_=_||2,v=typeof v>"u"?_*4:v;let C=h.getModuleCount()*_+v*2,P="";return P+="<img",P+=' src="',P+=h.createDataURL(_,v),P+='"',P+=' width="',P+=C,P+='"',P+=' height="',P+=C,P+='"',T&&(P+=' alt="',P+=E(T),P+='"'),P+="/>",P};let E=function(_){let v="";for(let T=0;T<_.length;T+=1){let C=_.charAt(T);switch(C){case"<":v+="&lt;";break;case">":v+="&gt;";break;case"&":v+="&amp;";break;case'"':v+="&quot;";break;default:v+=C;break}}return v},R=function(_){_=typeof _>"u"?2:_;let T=h.getModuleCount()*1+_*2,C=_,P=T-_,F,z,I,X,q,U={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},et={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},L="";for(F=0;F<T;F+=2){for(I=Math.floor((F-C)/1),X=Math.floor((F+1-C)/1),z=0;z<T;z+=1)q="\u2588",C<=z&&z<P&&C<=F&&F<P&&h.isDark(I,Math.floor((z-C)/1))&&(q=" "),C<=z&&z<P&&C<=F+1&&F+1<P&&h.isDark(X,Math.floor((z-C)/1))?q+=" ":q+="\u2588",L+=_<1&&F+1>=P?et[q]:U[q];L+=`
`}return T%2&&_>0?L.substring(0,L.length-T-1)+Array(T+1).join("\u2580"):L.substring(0,L.length-1)};return h.createASCII=function(_,v){if(_=_||1,_<2)return R(v);_-=1,v=typeof v>"u"?_*2:v;let T=h.getModuleCount()*_+v*2,C=v,P=T-v,F,z,I,X,q=Array(_+1).join("\u2588\u2588"),U=Array(_+1).join("  "),et="",L="";for(F=0;F<T;F+=1){for(I=Math.floor((F-C)/_),L="",z=0;z<T;z+=1)X=1,C<=z&&z<P&&C<=F&&F<P&&h.isDark(I,Math.floor((z-C)/_))&&(X=0),L+=X?q:U;for(I=0;I<_;I+=1)et+=L+`
`}return et.substring(0,et.length-1)},h.renderTo2dContext=function(_,v){v=v||2;let T=h.getModuleCount();for(let C=0;C<T;C++)for(let P=0;P<T;P++)_.fillStyle=h.isDark(C,P)?"black":"white",_.fillRect(P*v,C*v,v,v)},h};Fo.stringToBytes=function(s){let t=[];for(let e=0;e<s.length;e+=1){let n=s.charCodeAt(e);t.push(n&255)}return t};Fo.createStringToBytes=function(s,t){let e=(function(){let i=v1(s),r=function(){let l=i.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=i.read();if(l==-1)break;let c=r(),h=r(),u=r(),d=String.fromCharCode(l<<8|c),f=h<<8|u;a[d]=f,o+=1}if(o!=t)throw o+" != "+t;return a})(),n=63;return function(i){let r=[];for(let o=0;o<i.length;o+=1){let a=i.charCodeAt(o);if(a<128)r.push(a);else{let l=e[i.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(n)}}return r}};var Tn={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},qa={L:1,M:0,Q:3,H:2},Xs={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},js=(function(){let s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return i.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return(o<<10|a)^n},i.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return o<<12|a},i.getPatternPosition=function(o){return s[o-1]},i.getMaskFunction=function(o){switch(o){case Xs.PATTERN000:return function(a,l){return(a+l)%2==0};case Xs.PATTERN001:return function(a,l){return a%2==0};case Xs.PATTERN010:return function(a,l){return l%3==0};case Xs.PATTERN011:return function(a,l){return(a+l)%3==0};case Xs.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case Xs.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case Xs.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case Xs.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},i.getErrorCorrectPolynomial=function(o){let a=Za([1],0);for(let l=0;l<o;l+=1)a=a.multiply(Za([1,Ys.gexp(l)],0));return a},i.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case Tn.MODE_NUMBER:return 10;case Tn.MODE_ALPHA_NUM:return 9;case Tn.MODE_8BIT_BYTE:return 8;case Tn.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case Tn.MODE_NUMBER:return 12;case Tn.MODE_ALPHA_NUM:return 11;case Tn.MODE_8BIT_BYTE:return 16;case Tn.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case Tn.MODE_NUMBER:return 14;case Tn.MODE_ALPHA_NUM:return 13;case Tn.MODE_8BIT_BYTE:return 16;case Tn.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},i.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let f=0,p=o.isDark(u,d);for(let x=-1;x<=1;x+=1)if(!(u+x<0||a<=u+x))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||x==0&&m==0||p==o.isDark(u+x,d+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let f=0;o.isDark(u,d)&&(f+=1),o.isDark(u+1,d)&&(f+=1),o.isDark(u,d+1)&&(f+=1),o.isDark(u+1,d+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(l+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(l+=40);let c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(c+=1);let h=Math.abs(100*c/a/a-50)/5;return l+=h*10,l},i})(),Ys=(function(){let s=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)s[n]=1<<n;for(let n=8;n<256;n+=1)s[n]=s[n-4]^s[n-5]^s[n-6]^s[n-8];for(let n=0;n<255;n+=1)t[s[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return s[n]},e})(),Za=function(s,t){if(typeof s.length>"u")throw s.length+"/"+t;let e=(function(){let i=0;for(;i<s.length&&s[i]==0;)i+=1;let r=new Array(s.length-i+t);for(let o=0;o<s.length-i;o+=1)r[o]=s[o+i];return r})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let r=new Array(n.getLength()+i.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<i.getLength();a+=1)r[o+a]^=Ys.gexp(Ys.glog(n.getAt(o))+Ys.glog(i.getAt(a)));return Za(r,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let r=Ys.glog(n.getAt(0))-Ys.glog(i.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<i.getLength();a+=1)o[a]^=Ys.gexp(Ys.glog(i.getAt(a))+r);return Za(o,0).mod(i)},n},xg=(function(){let s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,r){let o={};return o.totalCount=i,o.dataCount=r,o},e={},n=function(i,r){switch(r){case qa.L:return s[(i-1)*4+0];case qa.M:return s[(i-1)*4+1];case qa.Q:return s[(i-1)*4+2];case qa.H:return s[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,r){let o=n(i,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let h=o[c*3+0],u=o[c*3+1],d=o[c*3+2];for(let f=0;f<h;f+=1)l.push(t(u,d))}return l},e})(),vg=function(){let s=[],t=0,e={};return e.getBuffer=function(){return s},e.getAt=function(n){let i=Math.floor(n/8);return(s[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let r=0;r<i;r+=1)e.putBit((n>>>i-r-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);s.length<=i&&s.push(0),n&&(s[i]|=128>>>t%8),t+=1},e},p1=function(s){let t=Tn.MODE_NUMBER,e=s,n={};n.getMode=function(){return t},n.getLength=function(o){return e.length},n.write=function(o){let a=e,l=0;for(;l+2<a.length;)o.put(i(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(i(a.substring(l,l+1)),4):a.length-l==2&&o.put(i(a.substring(l,l+2)),7))};let i=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},m1=function(s){let t=Tn.MODE_ALPHA_NUM,e=s,n={};n.getMode=function(){return t},n.getLength=function(r){return e.length},n.write=function(r){let o=e,a=0;for(;a+1<o.length;)r.put(i(o.charAt(a))*45+i(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(i(o.charAt(a)),6)};let i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},g1=function(s){let t=Tn.MODE_8BIT_BYTE,e=s,n=Fo.stringToBytes(s),i={};return i.getMode=function(){return t},i.getLength=function(r){return n.length},i.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},i},_1=function(s){let t=Tn.MODE_KANJI,e=s,n=Fo.stringToBytes;(function(o,a){let l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let i=n(s),r={};return r.getMode=function(){return t},r.getLength=function(o){return~~(i.length/2)},r.write=function(o){let a=i,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},yg=function(){let s=[],t={};return t.writeByte=function(e){s.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let r=0;r<i;r+=1)t.writeByte(e[r+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return s},t.toString=function(){let e="";e+="[";for(let n=0;n<s.length;n+=1)n>0&&(e+=","),e+=s[n];return e+="]",e},t},x1=function(){let s=0,t=0,e=0,n="",i={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return i.writeByte=function(a){for(s=s<<8|a&255,t+=8,e+=1;t>=6;)r(s>>>t-6),t-=6},i.flush=function(){if(t>0&&(r(s<<6-t),s=0,t=0),e%3!=0){let a=3-e%3;for(let l=0;l<a;l+=1)n+="="}},i.toString=function(){return n},i},v1=function(s){let t=s,e=0,n=0,i=0,r={};r.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let l=t.charAt(e);if(e+=1,l=="=")return i=0,-1;if(l.match(/^\s$/))continue;n=n<<6|o(l.charCodeAt(0)),i+=6}let a=n>>>i-8&255;return i-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},y1=function(s,t){let e=s,n=t,i=new Array(s*t),r={};r.setPixel=function(c,h,u){i[h*e+c]=u},r.write=function(c){c.writeString("GIF87a"),c.writeShort(e),c.writeShort(n),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(e),c.writeShort(n),c.writeByte(0);let h=2,u=a(h);c.writeByte(h);let d=0;for(;u.length-d>255;)c.writeByte(255),c.writeBytes(u,d,255),d+=255;c.writeByte(u.length-d),c.writeBytes(u,d,u.length-d),c.writeByte(0),c.writeString(";")};let o=function(c){let h=c,u=0,d=0,f={};return f.write=function(p,x){if(p>>>x)throw"length over";for(;u+x>=8;)h.writeByte(255&(p<<u|d)),x-=8-u,p>>>=8-u,d=0,u=0;d=p<<u|d,u=u+x},f.flush=function(){u>0&&h.writeByte(d)},f},a=function(c){let h=1<<c,u=(1<<c)+1,d=c+1,f=l();for(let S=0;S<h;S+=1)f.add(String.fromCharCode(S));f.add(String.fromCharCode(h)),f.add(String.fromCharCode(u));let p=yg(),x=o(p);x.write(h,d);let m=0,g=String.fromCharCode(i[m]);for(m+=1;m<i.length;){let S=String.fromCharCode(i[m]);m+=1,f.contains(g+S)?g=g+S:(x.write(f.indexOf(g),d),f.size()<4095&&(f.size()==1<<d&&(d+=1),f.add(g+S)),g=S)}return x.write(f.indexOf(g),d),x.write(u,d),x.flush(),p.toByteArray()},l=function(){let c={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;c[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return c[d]},u.contains=function(d){return typeof c[d]<"u"},u};return r},S1=function(s,t,e){let n=y1(s,t);for(let a=0;a<t;a+=1)for(let l=0;l<s;l+=1)n.setPixel(l,a,e(l,a));let i=yg();n.write(i);let r=x1(),o=i.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},Wd=Fo,IA=Fo.stringToBytes;function W(s,t,e){return(t=(function(n){var i=(function(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)})(n,"string");return typeof i=="symbol"?i:i+""})(t))in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function Sg(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable}))),e.push.apply(e,n)}return e}function G(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Sg(Object(e),!0).forEach((function(n){W(s,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):Sg(Object(e)).forEach((function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(e,n))}))}return s}function ke(s,t){if(s==null)return{};var e,n,i=(function(o,a){if(o==null)return{};var l={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(a.indexOf(c)>=0)continue;l[c]=o[c]}return l})(s,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||{}.propertyIsEnumerable.call(s,e)&&(i[e]=s[e])}return i}function ns(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))}var Th=class{constructor(){W(this,"browserShadowBlurConstant",1),W(this,"DPI",96),W(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),W(this,"perfLimitSizeTotal",2097152),W(this,"maxCacheSideLimit",4096),W(this,"minCacheSideLimit",256),W(this,"disableStyleCopyPaste",!1),W(this,"enableGLFiltering",!0),W(this,"textureSize",4096),W(this,"forceGLPutImageData",!1),W(this,"cachesBoundsOfCurve",!1),W(this,"fontPaths",{}),W(this,"NUM_FRACTION_DIGITS",4)}},ge=new class extends Th{constructor(s){super(),this.configure(s)}configure(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.assign(this,s)}addFonts(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.fontPaths=G(G({},this.fontPaths),s)}removeFonts(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach((s=>{delete this.fontPaths[s]}))}clearFonts(){this.fontPaths={}}restoreDefaults(s){let t=new Th,e=s?.reduce(((n,i)=>(n[i]=t[i],n)),{})||t;this.configure(e)}},$s=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return console[s]("fabric",...e)},fi=class extends Error{constructor(t,e){super("fabric: ".concat(t),e)}},Ch=class extends fi{constructor(t){super("".concat(t," 'options.signal' is in 'aborted' state"))}},sf=class{},rf=class extends sf{testPrecision(t,e){let n="precision ".concat(e,` float;
void main(){}`),i=t.createShader(t.FRAGMENT_SHADER);return!!i&&(t.shaderSource(i,n),t.compileShader(i),!!t.getShaderParameter(i,t.COMPILE_STATUS))}queryWebGL(t){let e=t.getContext("webgl");e&&(this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find((n=>this.testPrecision(e,n))),e.getExtension("WEBGL_lose_context").loseContext(),$s("log","WebGL: max texture size ".concat(this.maxTextureSize)))}isSupported(t){return!!this.maxTextureSize&&this.maxTextureSize>=t}},b1={},bg;var Qi=()=>bg||(bg={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new rf,dispose(){},copyPasteData:b1}),Qo=()=>Qi().document,hl=()=>Qi().window,n0=()=>{var s;return Math.max((s=ge.devicePixelRatio)!==null&&s!==void 0?s:hl().devicePixelRatio,1)},tl=new class{constructor(){W(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache(s){let{fontFamily:t,fontStyle:e,fontWeight:n}=s;t=t.toLowerCase();let i=this.charWidthsCache;i.has(t)||i.set(t,new Map);let r=i.get(t),o="".concat(e.toLowerCase(),"_").concat((n+"").toLowerCase());return r.has(o)||r.set(o,new Map),r.get(o)}clearFontCache(s){s?this.charWidthsCache.delete((s||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(s){let{perfLimitSizeTotal:t}=ge,e=Math.sqrt(t*s);return[Math.floor(e),Math.floor(t/e)]}},of="6.9.1";function Wr(){}var Qs=Math.PI/2,ys=2*Math.PI,Ff=Math.PI/180,Ln=Object.freeze([1,0,0,1,0,0]),Nf=16,qs=.4477152502,ie="center",Te="left",Vn="top",af="bottom",Ye="right",Gn="none",Uf=/\r?\n/,i0="moving",tu="scaling",s0="rotating",kf="rotate",r0="skewing",rl="resizing",o0="modifyPoly",M1="modifyPath",Eh="changed",eu="scale",Fn="scaleX",ei="scaleY",ta="skewX",ea="skewY",tn="fill",Hn="stroke",Ah="modified",No="json",Xd="svg",It=new class{constructor(){this[No]=new Map,this[Xd]=new Map}has(s){return this[No].has(s)}getClass(s){let t=this[No].get(s);if(!t)throw new fi("No class registered for ".concat(s));return t}setClass(s,t){t?this[No].set(t,s):(this[No].set(s.type,s),this[No].set(s.type.toLowerCase(),s))}getSVGClass(s){return this[Xd].get(s)}setSVGClass(s,t){this[Xd].set(t??s.type.toLowerCase(),s)}},Rh=new class extends Array{remove(s){let t=this.indexOf(s);t>-1&&this.splice(t,1)}cancelAll(){let s=this.splice(0);return s.forEach((t=>t.abort())),s}cancelByCanvas(s){if(!s)return[];let t=this.filter((e=>{var n;return e.target===s||typeof e.target=="object"&&((n=e.target)===null||n===void 0?void 0:n.canvas)===s}));return t.forEach((e=>e.abort())),t}cancelByTarget(s){if(!s)return[];let t=this.filter((e=>e.target===s));return t.forEach((e=>e.abort())),t}},lf=class{constructor(){W(this,"__eventListeners",{})}on(t,e){if(this.__eventListeners||(this.__eventListeners={}),typeof t=="object")return Object.entries(t).forEach((n=>{let[i,r]=n;this.on(i,r)})),()=>this.off(t);if(e){let n=t;return this.__eventListeners[n]||(this.__eventListeners[n]=[]),this.__eventListeners[n].push(e),()=>this.off(n,e)}return()=>!1}once(t,e){if(typeof t=="object"){let n=[];return Object.entries(t).forEach((i=>{let[r,o]=i;n.push(this.once(r,o))})),()=>n.forEach((i=>i()))}if(e){let n=this.on(t,(function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];e.call(this,...r),n()}));return n}return()=>!1}_removeEventListener(t,e){if(this.__eventListeners[t])if(e){let n=this.__eventListeners[t],i=n.indexOf(e);i>-1&&n.splice(i,1)}else this.__eventListeners[t]=[]}off(t,e){if(this.__eventListeners)if(t===void 0)for(let n in this.__eventListeners)this._removeEventListener(n);else typeof t=="object"?Object.entries(t).forEach((n=>{let[i,r]=n;this._removeEventListener(i,r)})):this._removeEventListener(t,e)}fire(t,e){var n;if(!this.__eventListeners)return;let i=(n=this.__eventListeners[t])===null||n===void 0?void 0:n.concat();if(i)for(let r=0;r<i.length;r++)i[r].call(this,e||{})}},Tr=(s,t)=>{let e=s.indexOf(t);return e!==-1&&s.splice(e,1),s},Oi=s=>{if(s===0)return 1;switch(Math.abs(s)/Qs){case 1:case 3:return 0;case 2:return-1}return Math.cos(s)},Li=s=>{if(s===0)return 0;let t=s/Qs,e=Math.sign(s);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(s)},st=class s{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new s(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new s(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new s(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new s(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new s(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new s(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new s(this.x/t.x,this.y/t.y)}scalarDivide(t){return new s(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.5;return e=Math.max(Math.min(1,e),0),new s(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new s(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new s(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return"".concat(this.x,",").concat(this.y)}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new s(this.x,this.y)}rotate(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Bf,n=Li(t),i=Oi(t),r=this.subtract(e);return new s(r.x*i-r.y*n,r.x*n+r.y*i).add(e)}transform(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return new s(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},Bf=new st(0,0),Mh=s=>!!s&&Array.isArray(s._objects);function a0(s){class t extends s{constructor(){super(...arguments),W(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];let o=this._objects.push(...i);return i.forEach((a=>this._onObjectAdded(a))),o}insertAt(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return this._objects.splice(n,0,...r),r.forEach((a=>this._onObjectAdded(a))),this._objects.length}remove(){let n=this._objects,i=[];for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.forEach((l=>{let c=n.indexOf(l);c!==-1&&(n.splice(c,1),i.push(l),this._onObjectRemoved(l))})),i}forEachObject(n){this.getObjects().forEach(((i,r,o)=>n(i,r,o)))}getObjects(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length===0?[...this._objects]:this._objects.filter((o=>o.isType(...i)))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,i){return!!this._objects.includes(n)||!!i&&this._objects.some((r=>r instanceof t&&r.contains(n,!0)))}complexity(){return this._objects.reduce(((n,i)=>n+=i.complexity?i.complexity():0),0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(Tr(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(Tr(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let o=this.findNewLowerIndex(n,r,i);return Tr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let o=this.findNewUpperIndex(n,r,i);return Tr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,i){return n!==this._objects[i]&&(Tr(this._objects,n),this._objects.splice(i,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,i,r){let o;if(r){o=i;for(let a=i-1;a>=0;--a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i-1;return o}findNewUpperIndex(n,i,r){let o;if(r){o=i;for(let a=i+1;a<this._objects.length;++a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i+1;return o}collectObjects(n){let{left:i,top:r,width:o,height:a}=n,{includeIntersecting:l=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=[],h=new st(i,r),u=h.add(new st(o,a));for(let d=this._objects.length-1;d>=0;d--){let f=this._objects[d];f.selectable&&f.visible&&(l&&f.intersectsWithRect(h,u)||f.isContainedWithinRect(h,u)||l&&f.containsPoint(h)||l&&f.containsPoint(u))&&c.push(f)}return c}}return t}var Ph=class extends lf{_setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(let e in t)this.set(e,t[e])}_setObject(t){for(let e in t)this._set(e,t[e])}set(t,e){return typeof t=="object"?this._setObject(t):this._set(t,e),this}_set(t,e){this[t]=e}toggle(t){let e=this.get(t);return typeof e=="boolean"&&this.set(t,!e),this}get(t){return this[t]}};function el(s){return hl().requestAnimationFrame(s)}function l0(s){return hl().cancelAnimationFrame(s)}var w1=0,tr=()=>w1++,ts=()=>{let s=Qo().createElement("canvas");if(!s||s.getContext===void 0)throw new fi("Failed to create `canvas` element");return s},c0=()=>Qo().createElement("img"),ni=s=>{let t=ts();return t.width=s.width,t.height=s.height,t},zf=(s,t,e)=>s.toDataURL("image/".concat(t),e),Vf=(s,t,e)=>new Promise(((n,i)=>{s.toBlob(n,"image/".concat(t),e)})),Ge=s=>s*Ff,es=s=>s/Ff,h0=s=>s.every(((t,e)=>t===Ln[e])),Cn=(s,t,e)=>new st(s).transform(t,e),ti=s=>{let t=1/(s[0]*s[3]-s[1]*s[2]),e=[t*s[3],-t*s[1],-t*s[2],t*s[0],0,0],{x:n,y:i}=new st(s[4],s[5]).transform(e,!0);return e[4]=-n,e[5]=-i,e},He=(s,t,e)=>[s[0]*t[0]+s[2]*t[1],s[1]*t[0]+s[3]*t[1],s[0]*t[2]+s[2]*t[3],s[1]*t[2]+s[3]*t[3],e?0:s[0]*t[4]+s[2]*t[5]+s[4],e?0:s[1]*t[4]+s[3]*t[5]+s[5]],nu=(s,t)=>s.reduceRight(((e,n)=>n&&e?He(n,e,t):n||e),void 0)||Ln.concat(),u0=s=>{let[t,e]=s;return Math.atan2(e,t)},Yo=s=>{let t=u0(s),e=Math.pow(s[0],2)+Math.pow(s[1],2),n=Math.sqrt(e),i=(s[0]*s[3]-s[2]*s[1])/n,r=Math.atan2(s[0]*s[2]+s[1]*s[3],e);return{angle:es(t),scaleX:n,scaleY:i,skewX:es(r),skewY:0,translateX:s[4]||0,translateY:s[5]||0}},na=function(s){return[1,0,0,1,s,arguments.length>1&&arguments[1]!==void 0?arguments[1]:0]};function $r(){let{angle:s=0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{x:t=0,y:e=0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Ge(s),i=Oi(n),r=Li(n);return[i,r,-r,i,t?t-(i*t-r*e):0,e?e-(r*t+i*e):0]}var iu=function(s){return[s,0,0,arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,0,0]},d0=s=>Math.tan(Ge(s)),Gf=s=>[1,0,d0(s),1,0,0],Hf=s=>[1,d0(s),0,1,0,0],ul=s=>{let{scaleX:t=1,scaleY:e=1,flipX:n=!1,flipY:i=!1,skewX:r=0,skewY:o=0}=s,a=iu(n?-t:t,i?-e:e);return r&&(a=He(a,Gf(r),!0)),o&&(a=He(a,Hf(o),!0)),a},f0=s=>{let{translateX:t=0,translateY:e=0,angle:n=0}=s,i=na(t,e);n&&(i=He(i,$r({angle:n})));let r=ul(s);return h0(r)||(i=He(i,r)),i},nl=function(s){let{signal:t,crossOrigin:e=null}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise((function(n,i){if(t&&t.aborted)return i(new Ch("loadImage"));let r=c0(),o;t&&(o=function(l){r.src="",i(l)},t.addEventListener("abort",o,{once:!0}));let a=function(){r.onload=r.onerror=null,o&&t?.removeEventListener("abort",o),n(r)};s?(r.onload=a,r.onerror=function(){o&&t?.removeEventListener("abort",o),i(new fi("Error loading ".concat(r.src)))},e&&(r.crossOrigin=e),r.src=s):a()}))},qo=function(s){let{signal:t,reviver:e=Wr}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((n,i)=>{let r=[];t&&t.addEventListener("abort",i,{once:!0}),Promise.all(s.map((o=>It.getClass(o.type).fromObject(o,{signal:t}).then((a=>(e(o,a),r.push(a),a)))))).then(n).catch((o=>{r.forEach((a=>{a.dispose&&a.dispose()})),i(o)})).finally((()=>{t&&t.removeEventListener("abort",i)}))}))},dl=function(s){let{signal:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((e,n)=>{let i=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(s).map((a=>a&&a.type&&It.has(a.type)?qo([a],{signal:t}).then((l=>{let[c]=l;return i.push(c),c})):a)),o=Object.keys(s);Promise.all(r).then((a=>a.reduce(((l,c,h)=>(l[o[h]]=c,l)),{}))).then(e).catch((a=>{i.forEach((l=>{l.dispose&&l.dispose()})),n(a)})).finally((()=>{t&&t.removeEventListener("abort",n)}))}))},Qr=function(s){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).reduce(((t,e)=>(e in s&&(t[e]=s[e]),t)),{})},Wf=(s,t)=>Object.keys(s).reduce(((e,n)=>(t(s[n],n,s)&&(e[n]=s[n]),e)),{}),Ie=(s,t)=>parseFloat(Number(s).toFixed(t)),Zo=s=>"matrix("+s.map((t=>Ie(t,ge.NUM_FRACTION_DIGITS))).join(" ")+")",di=s=>!!s&&s.toLive!==void 0,Mg=s=>!!s&&typeof s.toObject=="function",wg=s=>!!s&&s.offsetX!==void 0&&"source"in s,Cr=s=>!!s&&"multiSelectionStacking"in s;function p0(s){let t=s&&Ri(s),e=0,n=0;if(!s||!t)return{left:e,top:n};let i=s,r=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;i&&(i.parentNode||i.host)&&(i=i.parentNode||i.host,i===t?(e=o.scrollLeft||r.scrollLeft||0,n=o.scrollTop||r.scrollTop||0):(e+=i.scrollLeft||0,n+=i.scrollTop||0),i.nodeType!==1||i.style.position!=="fixed"););return{left:e,top:n}}var Ri=s=>s.ownerDocument||null,m0=s=>{var t;return((t=s.ownerDocument)===null||t===void 0?void 0:t.defaultView)||null},g0=function(s,t,e){let{width:n,height:i}=e,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;s.width=n,s.height=i,r>1&&(s.setAttribute("width",(n*r).toString()),s.setAttribute("height",(i*r).toString()),t.scale(r,r))},cf=(s,t)=>{let{width:e,height:n}=t;e&&(s.style.width=typeof e=="number"?"".concat(e,"px"):e),n&&(s.style.height=typeof n=="number"?"".concat(n,"px"):n)};function Tg(s){return s.onselectstart!==void 0&&(s.onselectstart=()=>!1),s.style.userSelect=Gn,s}var Dh=class{constructor(t){W(this,"_originalCanvasStyle",void 0),W(this,"lower",void 0);let e=this.createLowerCanvas(t);this.lower={el:e,ctx:e.getContext("2d")}}createLowerCanvas(t){let e=(n=t)&&n.getContext!==void 0?t:t&&Qo().getElementById(t)||ts();var n;if(e.hasAttribute("data-fabric"))throw new fi("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=e.style.cssText,e.setAttribute("data-fabric","main"),e.classList.add("lower-canvas"),e}cleanupDOM(t){let{width:e,height:n}=t,{el:i}=this.lower;i.classList.remove("lower-canvas"),i.removeAttribute("data-fabric"),i.setAttribute("width","".concat(e)),i.setAttribute("height","".concat(n)),i.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(t,e){let{el:n,ctx:i}=this.lower;g0(n,i,t,e)}setCSSDimensions(t){cf(this.lower.el,t)}calcOffset(){return(function(t){var e;let n=t&&Ri(t),i={left:0,top:0};if(!n)return i;let r=((e=m0(t))===null||e===void 0?void 0:e.getComputedStyle(t,null))||{};i.left+=parseInt(r.borderLeftWidth,10)||0,i.top+=parseInt(r.borderTopWidth,10)||0,i.left+=parseInt(r.paddingLeft,10)||0,i.top+=parseInt(r.paddingTop,10)||0;let o={left:0,top:0},a=n.documentElement;t.getBoundingClientRect!==void 0&&(o=t.getBoundingClientRect());let l=p0(t);return{left:o.left+l.left-(a.clientLeft||0)+i.left,top:o.top+l.top-(a.clientTop||0)+i.top}})(this.lower.el)}dispose(){Qi().dispose(this.lower.el),delete this.lower}},T1={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...Ln]},C1=["objects"],er=class s extends a0(Ph){get lowerCanvasEl(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.ctx}static getDefaults(){return s.ownDefaults}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new Dh(t)}add(){let t=super.add(...arguments);return arguments.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=super.insertAt(t,...n);return n.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),r}remove(){let t=super.remove(...arguments);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}_onObjectAdded(t){t.canvas&&t.canvas!==this&&($s("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?n0():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}setWidth(t,e){return this.setDimensions({width:t},e)}setHeight(t,e){return this.setDimensions({height:t},e)}_setDimensionsImpl(t){let{cssOnly:e=!1,backstoreOnly:n=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e){let i=G({width:this.width,height:this.height},t);this.elements.setDimensions(i,this.getRetinaScaling()),this.hasLostContext=!0,this.width=i.width,this.height=i.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return this.viewportTransform[0]}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,i=[...this.viewportTransform],r=Cn(t,ti(i));i[0]=e,i[3]=e;let o=Cn(r,i);i[4]+=n.x-o.x,i[5]+=n.y-o.y,this.setViewportTransform(i)}setZoom(t){this.zoomToPoint(new st(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new st(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=el((()=>this.renderAndReset())))}calcViewportBoundaries(){let t=this.width,e=this.height,n=ti(this.viewportTransform),i=Cn({x:0,y:0},n),r=Cn({x:t,y:e},n),o=i.min(r),a=i.max(r);return this.vptCoords={tl:o,tr:new st(a.x,o.y),bl:new st(o.x,a.y),br:a}}cancelRequestedRender(){this.nextRenderHandle&&(l0(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,i=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality="best",this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),i&&(i._set("canvas",this),i.shouldCache(),i._transformDone=!0,i.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,i)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,i=e.length;n<i;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this["".concat(e,"Color")],i=this["".concat(e,"Image")],r=this.viewportTransform,o=this["".concat(e,"Vpt")];if(!n&&!i)return;let a=di(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=a?n.toLive(t):n,o&&t.transform(...r),a){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(i){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=o,o&&t.transform(...r),i.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenter(){return{top:this.height/2,left:this.width/2}}getCenterPoint(){return new st(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new st(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new st(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return Cn(this.getCenterPoint(),ti(this.viewportTransform))}_centerObject(t,e){t.setXY(e,ie,ie),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,i=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return G(G(G({version:of},Qr(this,e)),{},{objects:this._objects.filter((r=>!r.excludeFromExport)).map((r=>this._toObject(r,t,e)))},this.__serializeBgOverlay(t,e)),i?{clipPath:i}:null)}_toObject(t,e,n){let i;this.includeDefaultValues||(i=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!i),r}__serializeBgOverlay(t,e){let n={},i=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,a=this.overlayColor;return di(o)?o.excludeFromExport||(n.background=o.toObject(e)):o&&(n.background=o),di(a)?a.excludeFromExport||(n.overlay=a.toObject(e)):a&&(n.overlay=a),i&&!i.excludeFromExport&&(n.backgroundImage=this._toObject(i,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;t.reviver=e;let n=[];return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId,`)" >
`)),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||"".concat(this.width),i=e.height||"".concat(this.height),r=ge.NUM_FRACTION_DIGITS,o=e.viewBox,a;if(o)a='viewBox="'.concat(o.x," ").concat(o.y," ").concat(o.width," ").concat(o.height,'" ');else if(this.svgViewportTransformation){let l=this.viewportTransform;a='viewBox="'.concat(Ie(-l[4]/l[0],r)," ").concat(Ie(-l[5]/l[3],r)," ").concat(Ie(this.width/l[0],r)," ").concat(Ie(this.height/l[3],r),'" ')}else a='viewBox="0 0 '.concat(this.width," ").concat(this.height,'" ');t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',i,'" ',a,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",of,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId="CLIPPATH_".concat(tr()),'<clipPath id="'.concat(e.clipPathId,`" >
`).concat(e.toClipPathSVG(t.reviver),`</clipPath>
`)):""}createSVGRefElementsMarkup(){return["background","overlay"].map((t=>{let e=this["".concat(t,"Color")];if(di(e)){let n=this["".concat(t,"Vpt")],i=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?i[0]:1),height:this.height/(n?i[3]:1)};return e.toSVG(r,{additionalTransform:n?Zo(i):""})}})).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=ge.fontPaths;this._objects.forEach((function r(o){t.push(o),Mh(o)&&o._objects.forEach(r)})),t.forEach((r=>{if(!(o=r)||typeof o._renderText!="function")return;var o;let{styles:a,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,a&&Object.values(a).forEach((c=>{Object.values(c).forEach((h=>{let{fontFamily:u=""}=h;!e[u]&&n[u]&&(e[u]=!0)}))})))}));let i=Object.keys(e).map((r=>`		@font-face {
			font-family: '`.concat(r,`';
			src: url('`).concat(n[r],`');
		}
`))).join("");return i?`	<style type="text/css"><![CDATA[
`.concat(i,`]]></style>
`):""}_setSVGObjects(t,e){this.forEachObject((n=>{n.excludeFromExport||this._setSVGObject(t,n,e)}))}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let i=this[e];i&&!i.excludeFromExport&&i.toSVG&&t.push(i.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this["".concat(e,"Color")];if(n)if(di(n)){let i=n.repeat||"",r=this.width,o=this.height,a=this["".concat(e,"Vpt")]?Zo(ti(this.viewportTransform)):"";t.push('<rect transform="'.concat(a," translate(").concat(r/2,",").concat(o/2,')" x="').concat(n.offsetX-r/2,'" y="').concat(n.offsetY-o/2,'" width="').concat(i!=="repeat-y"&&i!=="no-repeat"||!wg(n)?r:n.source.width,'" height="').concat(i!=="repeat-x"&&i!=="no-repeat"||!wg(n)?o:n.source.height,'" fill="url(#SVGID_').concat(n.id,`)"></rect>
`))}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e){let{signal:n}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t)return Promise.reject(new fi("`json` is undefined"));let i=typeof t=="string"?JSON.parse(t):t,{objects:r=[]}=i,o=ke(i,C1),{backgroundImage:a,background:l,overlayImage:c,overlay:h,clipPath:u}=o,d=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([qo(r,{reviver:e,signal:n}),dl({backgroundImage:a,backgroundColor:l,overlayImage:c,overlayColor:h,clipPath:u},{signal:n})]).then((f=>{let[p,x]=f;return this.clear(),this.add(...p),this.set(o),this.set(x),this.renderOnAddRemove=d,this}))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=ni(this);return new this.constructor(t)}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return zf(this.toCanvasElement(o,t),e,n)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Vf(this.toCanvasElement(o,t),e,n)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,{width:e,height:n,left:i,top:r,filter:o}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,u=this.height,d=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,x=[f,0,0,f,(p[4]-(i||0))*t,(p[5]-(r||0))*t],m=this.enableRetinaScaling,g=ni({width:a,height:l}),S=o?this._objects.filter((A=>o(A))):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=x,this.width=a,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(g.getContext("2d"),S),this.viewportTransform=p,this.width=h,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=m,this.skipControlsDrawing=d,g}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),Rh.cancelByCanvas(this),this.disposed=!0,new Promise(((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()}))}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject((t=>t.dispose())),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return"#<Canvas (".concat(this.complexity(),"): { objects: ").concat(this._objects.length," }>")}};W(er,"ownDefaults",T1);var E1=["touchstart","touchmove","touchend"],_0=s=>{let t=p0(s.target),e=(function(n){let i=n.changedTouches;return i&&i[0]?i[0]:n})(s);return new st(e.clientX+t.left,e.clientY+t.top)},Ih=s=>E1.includes(s.type)||s.pointerType==="touch",Cg=s=>{s.preventDefault(),s.stopPropagation()},$i=s=>{let t=0,e=0,n=0,i=0;for(let r=0,o=s.length;r<o;r++){let{x:a,y:l}=s[r];(a>n||!r)&&(n=a),(a<t||!r)&&(t=a),(l>i||!r)&&(i=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:i-e}},A1=["translateX","translateY","scaleX","scaleY"],x0=(s,t)=>Ko(s,He(t,s.calcOwnMatrix())),Ko=(s,t)=>{let e=Yo(t),{translateX:n,translateY:i,scaleX:r,scaleY:o}=e,a=ke(e,A1),l=new st(n,i);s.flipX=!1,s.flipY=!1,Object.assign(s,a),s.set({scaleX:r,scaleY:o}),s.setPositionByOrigin(l,ie,ie)},v0=s=>{s.scaleX=1,s.scaleY=1,s.skewX=0,s.skewY=0,s.flipX=!1,s.flipY=!1,s.rotate(0)},Xf=s=>({scaleX:s.scaleX,scaleY:s.scaleY,skewX:s.skewX,skewY:s.skewY,angle:s.angle,left:s.left,flipX:s.flipX,flipY:s.flipY,top:s.top}),su=(s,t,e)=>{let n=s/2,i=t/2,r=[new st(-n,-i),new st(n,-i),new st(-n,i),new st(n,i)].map((a=>a.transform(e))),o=$i(r);return new st(o.width,o.height)},fl=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ln;return He(ti(arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ln),s)},vs=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ln,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ln;return s.transform(fl(t,e))},y0=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ln,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ln;return s.transform(fl(t,e),!0)},hf=(s,t,e)=>{let n=fl(t,e);return Ko(s,He(n,s.calcOwnMatrix())),n},jf=(s,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)===null||e===void 0||e.fire("object:".concat(s),G(G({},t),{},{target:n})),n.fire(s,t)},R1={left:-.5,top:-.5,center:0,bottom:.5,right:.5},Je=s=>typeof s=="string"?R1[s]:s-.5,Oh="not-allowed";function S0(s){return Je(s.originX)===Je(ie)&&Je(s.originY)===Je(ie)}function Eg(s){return .5-Je(s)}var Ii=(s,t)=>s[t],Yf=(s,t,e,n)=>({e:s,transform:t,pointer:new st(e,n)});function b0(s,t){let e=s.getTotalAngle()+es(Math.atan2(t.y,t.x))+360;return Math.round(e%360/45)}function ru(s,t,e,n,i){var r;let{target:o,corner:a}=s,l=o.controls[a],c=((r=o.canvas)===null||r===void 0?void 0:r.getZoom())||1,h=o.padding/c,u=(function(d,f,p,x){let m=d.getRelativeCenterPoint(),g=p!==void 0&&x!==void 0?d.translateToGivenOrigin(m,ie,ie,p,x):new st(d.left,d.top);return(d.angle?f.rotate(-Ge(d.angle),m):f).subtract(g)})(o,new st(n,i),t,e);return u.x>=h&&(u.x-=h),u.x<=-h&&(u.x+=h),u.y>=h&&(u.y-=h),u.y<=h&&(u.y+=h),u.x-=l.offsetX,u.y-=l.offsetY,u}var M0=(s,t,e,n)=>{let{target:i,offsetX:r,offsetY:o}=t,a=e-r,l=n-o,c=!Ii(i,"lockMovementX")&&i.left!==a,h=!Ii(i,"lockMovementY")&&i.top!==l;return c&&i.set(Te,a),h&&i.set(Vn,l),(c||h)&&jf(i0,Yf(s,t,e,n)),c||h},Lh=s=>s.replace(/\s+/g," "),Ag={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},jd=(s,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+6*(t-s)*e:e<.5?t:e<2/3?s+(t-s)*(2/3-e)*6:s),Rg=(s,t,e,n)=>{s/=255,t/=255,e/=255;let i=Math.max(s,t,e),r=Math.min(s,t,e),o,a,l=(i+r)/2;if(i===r)o=a=0;else{let c=i-r;switch(a=l>.5?c/(2-i-r):c/(i+r),i){case s:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-s)/c+2;break;case e:o=(s-t)/c+4}o/=6}return[Math.round(360*o),Math.round(100*a),Math.round(100*l),n]},Pg=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"1";return parseFloat(s)/(s.endsWith("%")?100:1)},gh=s=>Math.min(Math.round(s),255).toString(16).toUpperCase().padStart(2,"0"),Dg=s=>{let[t,e,n,i=1]=s,r=Math.round(.3*t+.59*e+.11*n);return[r,r,r,i]},Nn=class s{constructor(t){if(W(this,"isUnrecognised",!1),t)if(t instanceof s)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,i,r=1]=t;this.setSource([e,n,i,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in Ag&&(t=Ag[t]),t==="transparent"?[255,255,255,0]:s.sourceFromHex(t)||s.sourceFromRgb(t)||s.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return"rgb(".concat(t,",").concat(e,",").concat(n,")")}toRgba(){return"rgba(".concat(this.getSource().join(","),")")}toHsl(){let[t,e,n]=Rg(...this.getSource());return"hsl(".concat(t,",").concat(e,"%,").concat(n,"%)")}toHsla(){let[t,e,n,i]=Rg(...this.getSource());return"hsla(".concat(t,",").concat(e,"%,").concat(n,"%,").concat(i,")")}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,i]=this.getSource();return"".concat(gh(t)).concat(gh(e)).concat(gh(n)).concat(gh(Math.round(255*i)))}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(Dg(this.getSource())),this}toBlackWhite(t){let[e,,,n]=Dg(this.getSource()),i=e<(t||127)?0:255;return this.setSource([i,i,i,n]),this}overlayWith(t){t instanceof s||(t=new s(t));let e=this.getSource(),n=t.getSource(),[i,r,o]=e.map(((a,l)=>Math.round(.5*a+.5*n[l])));return this.setSource([i,r,o,e[3]]),this}static fromRgb(t){return s.fromRgba(t)}static fromRgba(t){return new s(s.sourceFromRgb(t))}static sourceFromRgb(t){let e=Lh(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,i,r]=e.slice(1,4).map((o=>{let a=parseFloat(o);return o.endsWith("%")?Math.round(2.55*a):a}));return[n,i,r,Pg(e[4])]}}static fromHsl(t){return s.fromHsla(t)}static fromHsla(t){return new s(s.sourceFromHsl(t))}static sourceFromHsl(t){let e=Lh(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(s.parseAngletoDegrees(e[1])%360+360)%360/360,i=parseFloat(e[2])/100,r=parseFloat(e[3])/100,o,a,l;if(i===0)o=a=l=r;else{let c=r<=.5?r*(i+1):r+i-r*i,h=2*r-c;o=jd(h,c,n+1/3),a=jd(h,c,n),l=jd(h,c,n-1/3)}return[Math.round(255*o),Math.round(255*a),Math.round(255*l),Pg(e[4])]}static fromHex(t){return new s(s.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map((l=>l+l)):e.match(/.{2}/g);let[i,r,o,a=255]=n.map((l=>parseInt(l,16)));return[i,r,o,a/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?es(n):e.includes("turn")?360*n:n}},Xr=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nf,e=/\D{0,2}$/.exec(s),n=parseFloat(s),i=ge.DPI;switch(e?.[0]){case"mm":return n*i/25.4;case"cm":return n*i/2.54;case"in":return n*i;case"pt":return n*i/72;case"pc":return n*i/72*12;case"em":return n*t;default:return n}},w0=s=>{let[t,e]=s.trim().split(" "),[n,i]=(r=t)&&r!==Gn?[r.slice(1,4),r.slice(5,8)]:r===Gn?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:i}},ol=function(s,t){let e,n,i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t)if(t.toLive)e="url(#SVGID_".concat(t.id,")");else{let r=new Nn(t),o=r.getAlpha();e=r.toRgb(),o!==1&&(n=o.toString())}else e="none";return i?"".concat(s,": ").concat(e,"; ").concat(n?"".concat(s,"-opacity: ").concat(n,"; "):""):"".concat(s,'="').concat(e,'" ').concat(n?"".concat(s,'-opacity="').concat(n,'" '):"")},Fh=class{getSvgStyles(t){let e=this.fillRule?this.fillRule:"nonzero",n=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):Gn,r=this.strokeDashOffset?this.strokeDashOffset:"0",o=this.strokeLineCap?this.strokeLineCap:"butt",a=this.strokeLineJoin?this.strokeLineJoin:"miter",l=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=this.opacity!==void 0?this.opacity:"1",h=this.visible?"":" visibility: hidden;",u=t?"":this.getSvgFilter(),d=ol(tn,this.fill);return[ol(Hn,this.stroke),"stroke-width: ",n,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",o,"; ","stroke-dashoffset: ",r,"; ","stroke-linejoin: ",a,"; ","stroke-miterlimit: ",l,"; ",d,"fill-rule: ",e,"; ","opacity: ",c,";",u,h].join("")}getSvgFilter(){return this.shadow?"filter: url(#SVGID_".concat(this.shadow.id,");"):""}getSvgCommons(){return[this.id?'id="'.concat(this.id,'" '):"",this.clipPath?'clip-path="url(#'.concat(this.clipPath.clipPathId,')" '):""].join("")}getSvgTransform(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t?this.calcTransformMatrix():this.calcOwnMatrix(),i='transform="'.concat(Zo(n));return"".concat(i).concat(e,'" ')}_toSVG(t){return[""]}toSVG(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})}toClipPathSVG(t){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})}_createBaseClipPathSVGMarkup(t){let{reviver:e,additionalTransform:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(""),r=t.indexOf("COMMON_PARTS");return t[r]=i,e?e(t.join("")):t.join("")}_createBaseSVGMarkup(t){let{noStyle:e,reviver:n,withShadow:i,additionalTransform:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e?"":'style="'.concat(this.getSvgStyles(),'" '),a=i?'style="'.concat(this.getSvgFilter(),'" '):"",l=this.clipPath,c=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",h=l&&l.absolutePositioned,u=this.stroke,d=this.fill,f=this.shadow,p=[],x=t.indexOf("COMMON_PARTS"),m;l&&(l.clipPathId="CLIPPATH_".concat(tr()),m='<clipPath id="'.concat(l.clipPathId,`" >
`).concat(l.toClipPathSVG(n),`</clipPath>
`)),h&&p.push("<g ",a,this.getSvgCommons(),` >
`),p.push("<g ",this.getSvgTransform(!1),h?"":a+this.getSvgCommons(),` >
`);let g=[o,c,e?"":this.addPaintOrder()," ",r?'transform="'.concat(r,'" '):""].join("");return t[x]=g,di(d)&&p.push(d.toSVG(this)),di(u)&&p.push(u.toSVG(this)),f&&p.push(f.toSVG(this)),l&&p.push(m),p.push(t.join("")),p.push(`</g>
`),h&&p.push(`</g>
`),n?n(p.join("")):p.join("")}addPaintOrder(){return this.paintFirst!==tn?' paint-order="'.concat(this.paintFirst,'" '):""}};function ou(s){return new RegExp("^("+s.join("|")+")\\b","i")}var Zr="textDecorationThickness",T0=["fontSize","fontWeight","fontFamily","fontStyle"],C0=["underline","overline","linethrough"],E0=[...T0,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],A0=[...E0,...C0,"textBackgroundColor","direction",Zr],P1=[...T0,...C0,Hn,"strokeWidth",tn,"deltaY","textBackgroundColor",Zr],D1={_reNewline:Uf,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:Te,fontStyle:"normal",lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:Te,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[Zr]:66.667},Ki="justify",Nh="justify-left",il="justify-right",sl="justify-center",Ig,Og,Lg,Pi=String.raw(Ig||(Ig=ns(["[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"],["[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"]))),Yd=String.raw(Og||(Og=ns(["(?:s*,?s+|s*,s*)"],["(?:\\s*,?\\s+|\\s*,\\s*)"])));var I1=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+Pi+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+Pi+"))?\\s+(.*)"),O1={cx:Te,x:Te,r:"radius",cy:Vn,y:Vn,display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":Zr},qd="font-size",Zd="clip-path",LA=ou(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),FA=ou(["symbol","image","marker","pattern","view","svg"]),Fg=ou(["symbol","g","a","svg","clipPath","defs"]),NA=new RegExp(String.raw(Lg||(Lg=ns(["^s*(",")","(",")","(",")","(",")s*$"],["^\\s*(",")","(",")","(",")","(",")\\s*$"])),Pi,Yd,Pi,Yd,Pi,Yd,Pi)),L1=new st(1,0),R0=new st,qf=(s,t)=>s.rotate(t),Uh=(s,t)=>new st(t).subtract(s),kh=s=>s.distanceFrom(R0),Bh=(s,t)=>Math.atan2(Xo(s,t),D0(s,t)),P0=s=>Bh(L1,s),au=s=>s.eq(R0)?s:s.scalarDivide(kh(s)),Zf=function(s){let t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return au(new st(-s.y,s.x).scalarMultiply(t?1:-1))},Xo=(s,t)=>s.x*t.y-s.y*t.x,D0=(s,t)=>s.x*t.x+s.y*t.y,uf=(s,t,e)=>{if(s.eq(t)||s.eq(e))return!0;let n=Xo(t,e),i=Xo(t,s),r=Xo(e,s);return n>=0?i>=0&&r<=0:!(i<=0&&r>=0)},Ng="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",Ug=new RegExp("(?:\\s|^)"+Ng+Ng+"("+Pi+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),jr=class s{constructor(t){let e=typeof t=="string"?s.parseShadow(t):t;Object.assign(this,s.ownDefaults,e),this.id=tr()}static parseShadow(t){let e=t.trim(),[,n=0,i=0,r=0]=(Ug.exec(e)||[]).map((o=>parseFloat(o)||0));return{color:(e.replace(Ug,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:i,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=qf(new st(this.offsetX,this.offsetY),Ge(-t.angle)),n=new Nn(this.color),i=40,r=40;return t.width&&t.height&&(i=100*Ie((Math.abs(e.x)+this.blur)/t.width,ge.NUM_FRACTION_DIGITS)+20,r=100*Ie((Math.abs(e.y)+this.blur)/t.height,ge.NUM_FRACTION_DIGITS)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),'<filter id="SVGID_'.concat(this.id,'" y="-').concat(r,'%" height="').concat(100+2*r,'%" x="-').concat(i,'%" width="').concat(100+2*i,`%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(Ie(this.blur?this.blur/2:0,ge.NUM_FRACTION_DIGITS),`"></feGaussianBlur>
	<feOffset dx="`).concat(Ie(e.x,ge.NUM_FRACTION_DIGITS),'" dy="').concat(Ie(e.y,ge.NUM_FRACTION_DIGITS),`" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(n.toRgb(),'" flood-opacity="').concat(n.getAlpha(),`"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`)}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=s.ownDefaults;return this.includeDefaultValues?t:Wf(t,((n,i)=>n!==e[i]))}static async fromObject(t){return new this(t)}};W(jr,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),W(jr,"type","shadow"),It.setClass(jr,"shadow");var Kr=(s,t,e)=>Math.max(s,Math.min(t,e)),F1=[Vn,Te,Fn,ei,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",ta,ea],Ss=[tn,Hn,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],N1={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:Te,originY:Vn,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:tn,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},Kd=(s,t,e,n)=>(s<Math.abs(t)?(s=t,n=e/4):n=t===0&&s===0?e/ys*Math.asin(1):e/ys*Math.asin(t/s),{a:s,c:t,p:e,s:n}),kg=(s,t,e,n,i)=>s*Math.pow(2,10*(n-=1))*Math.sin((n*i-t)*ys/e),I0=(s,t,e,n)=>-e*Math.cos(s/n*Qs)+e+t,df=(s,t,e,n)=>(s/=n)<1/2.75?e*(7.5625*s*s)+t:s<2/2.75?e*(7.5625*(s-=1.5/2.75)*s+.75)+t:s<2.5/2.75?e*(7.5625*(s-=2.25/2.75)*s+.9375)+t:e*(7.5625*(s-=2.625/2.75)*s+.984375)+t,Bg=(s,t,e,n)=>e-df(n-s,0,e,n)+t,U1=Object.freeze({__proto__:null,defaultEasing:I0,easeInBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*(s/=n)*s*((i+1)*s-i)+t},easeInBounce:Bg,easeInCirc:(s,t,e,n)=>-e*(Math.sqrt(1-(s/=n)*s)-1)+t,easeInCubic:(s,t,e,n)=>e*(s/n)**3+t,easeInElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l}=Kd(i,e,r,1.70158);return-kg(o,a,l,s,n)+t},easeInExpo:(s,t,e,n)=>s===0?t:e*2**(10*(s/n-1))+t,easeInOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return(s/=n/2)<1?e/2*(s*s*((1+(i*=1.525))*s-i))+t:e/2*((s-=2)*s*((1+(i*=1.525))*s+i)+2)+t},easeInOutBounce:(s,t,e,n)=>s<n/2?.5*Bg(2*s,0,e,n)+t:.5*df(2*s-n,0,e,n)+.5*e+t,easeInOutCirc:(s,t,e,n)=>(s/=n/2)<1?-e/2*(Math.sqrt(1-s**2)-1)+t:e/2*(Math.sqrt(1-(s-=2)*s)+1)+t,easeInOutCubic:(s,t,e,n)=>(s/=n/2)<1?e/2*s**3+t:e/2*((s-2)**3+2)+t,easeInOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n/2)===2)return t+e;r||(r=n*(.3*1.5));let{a:o,s:a,p:l,c}=Kd(i,e,r,1.70158);return s<1?-.5*kg(o,a,l,s,n)+t:o*Math.pow(2,-10*(s-=1))*Math.sin((s*n-a)*ys/l)*.5+c+t},easeInOutExpo:(s,t,e,n)=>s===0?t:s===n?t+e:(s/=n/2)<1?e/2*2**(10*(s-1))+t:e/2*-(2**(-10*--s)+2)+t,easeInOutQuad:(s,t,e,n)=>(s/=n/2)<1?e/2*s**2+t:-e/2*(--s*(s-2)-1)+t,easeInOutQuart:(s,t,e,n)=>(s/=n/2)<1?e/2*s**4+t:-e/2*((s-=2)*s**3-2)+t,easeInOutQuint:(s,t,e,n)=>(s/=n/2)<1?e/2*s**5+t:e/2*((s-2)**5+2)+t,easeInOutSine:(s,t,e,n)=>-e/2*(Math.cos(Math.PI*s/n)-1)+t,easeInQuad:(s,t,e,n)=>e*(s/=n)*s+t,easeInQuart:(s,t,e,n)=>e*(s/=n)*s**3+t,easeInQuint:(s,t,e,n)=>e*(s/n)**5+t,easeInSine:(s,t,e,n)=>-e*Math.cos(s/n*Qs)+e+t,easeOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*((s=s/n-1)*s*((i+1)*s+i)+1)+t},easeOutBounce:df,easeOutCirc:(s,t,e,n)=>e*Math.sqrt(1-(s=s/n-1)*s)+t,easeOutCubic:(s,t,e,n)=>e*((s/n-1)**3+1)+t,easeOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l,c}=Kd(i,e,r,1.70158);return o*2**(-10*s)*Math.sin((s*n-a)*ys/l)+c+t},easeOutExpo:(s,t,e,n)=>s===n?t+e:e*-(2**(-10*s/n)+1)+t,easeOutQuad:(s,t,e,n)=>-e*(s/=n)*(s-2)+t,easeOutQuart:(s,t,e,n)=>-e*((s=s/n-1)*s**3-1)+t,easeOutQuint:(s,t,e,n)=>e*((s/n-1)**5+1)+t,easeOutSine:(s,t,e,n)=>e*Math.sin(s/n*Qs)+t}),k1=()=>!1,al=class{constructor(t){let{startValue:e,byValue:n,duration:i=500,delay:r=0,easing:o=I0,onStart:a=Wr,onChange:l=Wr,onComplete:c=Wr,abort:h=k1,target:u}=t;W(this,"_state","pending"),W(this,"durationProgress",0),W(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=i,this.delay=r,this.easing=o,this._onStart=a,this._onChange=l,this._onComplete=c,this._abort=h,this.target=u,this.startValue=e,this.byValue=n,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let t=e=>{this._state==="pending"&&(this.startTime=e||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?setTimeout((()=>el(t)),this.delay):el(t)}tick(t){let e=(t||+new Date)-this.startTime,n=Math.min(e,this.duration);this.durationProgress=n/this.duration;let{value:i,valueProgress:r}=this.calculate(n);this.value=Object.freeze(i),this.valueProgress=r,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):e>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister()):(this._onChange(this.value,this.valueProgress,this.durationProgress),el(this.tick)))}register(){Rh.push(this)}unregister(){Rh.remove(this)}abort(){this._state="aborted",this.unregister()}},B1=["startValue","endValue"],ff=class extends al{constructor(t){let{startValue:e=0,endValue:n=100}=t;super(G(G({},ke(t,B1)),{},{startValue:e,byValue:n-e}))}calculate(t){let e=this.easing(t,this.startValue,this.byValue,this.duration);return{value:e,valueProgress:Math.abs((e-this.startValue)/this.byValue)}}},z1=["startValue","endValue"],pf=class extends al{constructor(t){let{startValue:e=[0],endValue:n=[100]}=t;super(G(G({},ke(t,z1)),{},{startValue:e,byValue:n.map(((i,r)=>i-e[r]))}))}calculate(t){let e=this.startValue.map(((n,i)=>this.easing(t,n,this.byValue[i],this.duration,i)));return{value:e,valueProgress:Math.abs((e[0]-this.startValue[0])/this.byValue[0])}}},V1=["startValue","endValue","easing","onChange","onComplete","abort"],G1=(s,t,e,n)=>t+e*(1-Math.cos(s/n*Qs)),Jd=s=>s&&((t,e,n)=>s(new Nn(t).toRgba(),e,n)),mf=class extends al{constructor(t){let{startValue:e,endValue:n,easing:i=G1,onChange:r,onComplete:o,abort:a}=t,l=ke(t,V1),c=new Nn(e).getSource(),h=new Nn(n).getSource();super(G(G({},l),{},{startValue:c,byValue:h.map(((u,d)=>u-c[d])),easing:i,onChange:Jd(r),onComplete:Jd(o),abort:Jd(a)}))}calculate(t){let[e,n,i,r]=this.startValue.map(((a,l)=>this.easing(t,a,this.byValue[l],this.duration,l))),o=[...[e,n,i].map(Math.round),Kr(0,r,1)];return{value:o,valueProgress:o.map(((a,l)=>this.byValue[l]!==0?Math.abs((a-this.startValue[l])/this.byValue[l]):0)).find((a=>a!==0))||0}}};function Kf(s){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(s)?new pf(s):new ff(s);return t.start(),t}function O0(s){let t=new mf(s);return t.start(),t}var Yr=class s{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some((e=>e.eq(t)))}append(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.points=this.points.concat(e.filter((i=>!this.includes(i)))),this}static isPointContained(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(i||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(i||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=Uh(e,n),o=Uh(e,t).divide(r);return i?Math.abs(o.x)===Math.abs(o.y):o.x===o.y&&o.x>=0&&o.x<=1}}static isPointInPolygon(t,e){let n=new st(t).setX(Math.min(t.x-1,...e.map((r=>r.x)))),i=0;for(let r=0;r<e.length;r++){let o=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(o.includes(t))return!0;i+=+(o.status==="Intersection")}return i%2==1}static intersectLineLine(t,e,n,i){let r=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=!(arguments.length>5&&arguments[5]!==void 0)||arguments[5],a=e.x-t.x,l=e.y-t.y,c=i.x-n.x,h=i.y-n.y,u=t.x-n.x,d=t.y-n.y,f=c*d-h*u,p=a*d-l*u,x=h*a-c*l;if(x!==0){let m=f/x,g=p/x;return(r||0<=m&&m<=1)&&(o||0<=g&&g<=1)?new s("Intersection").append(new st(t.x+m*a,t.y+m*l)):new s}if(f===0||p===0){let m=r||o||s.isPointContained(t,n,i)||s.isPointContained(e,n,i)||s.isPointContained(n,t,e)||s.isPointContained(i,t,e);return new s(m?"Coincident":void 0)}return new s("Parallel")}static intersectSegmentLine(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!0)}static intersectSegmentSegment(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!1)}static intersectLinePolygon(t,e,n){let i=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],r=new s,o=n.length;for(let a,l,c,h=0;h<o;h++){if(a=n[h],l=n[(h+1)%o],c=s.intersectLineLine(t,e,a,l,i,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return s.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new s,i=t.length,r=[];for(let o=0;o<i;o++){let a=t[o],l=t[(o+1)%i],c=s.intersectSegmentPolygon(a,l,e);c.status==="Coincident"?(r.push(c),n.append(a,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new s("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let i=e.min(n),r=e.max(n),o=new st(r.x,i.y),a=new st(i.x,r.y);return s.intersectPolygonPolygon(t,[i,o,r,a])}},gf=class extends Ph{getX(){return this.getXY().x}setX(t){this.setXY(this.getXY().setX(t))}getY(){return this.getXY().y}setY(t){this.setXY(this.getXY().setY(t))}getRelativeX(){return this.left}setRelativeX(t){this.left=t}getRelativeY(){return this.top}setRelativeY(t){this.top=t}getXY(){let t=this.getRelativeXY();return this.group?Cn(t,this.group.calcTransformMatrix()):t}setXY(t,e,n){this.group&&(t=Cn(t,ti(this.group.calcTransformMatrix()))),this.setRelativeXY(t,e,n)}getRelativeXY(){return new st(this.left,this.top)}setRelativeXY(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.originX,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.originY;this.setPositionByOrigin(t,e,n)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:t,tr:e,br:n,bl:i}=this.aCoords||(this.aCoords=this.calcACoords()),r=[t,e,n,i];if(this.group){let o=this.group.calcTransformMatrix();return r.map((a=>Cn(a,o)))}return r}intersectsWithRect(t,e){return Yr.intersectPolygonRectangle(this.getCoords(),t,e).status==="Intersection"}intersectsWithObject(t){let e=Yr.intersectPolygonPolygon(this.getCoords(),t.getCoords());return e.status==="Intersection"||e.status==="Coincident"||t.isContainedWithinObject(this)||this.isContainedWithinObject(t)}isContainedWithinObject(t){return this.getCoords().every((e=>t.containsPoint(e)))}isContainedWithinRect(t,e){let{left:n,top:i,width:r,height:o}=this.getBoundingRect();return n>=t.x&&n+r<=e.x&&i>=t.y&&i+o<=e.y}isOverlapping(t){return this.intersectsWithObject(t)||this.isContainedWithinObject(t)||t.isContainedWithinObject(this)}containsPoint(t){return Yr.isPointInPolygon(t,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return!!this.getCoords().some((n=>n.x<=e.x&&n.x>=t.x&&n.y<=e.y&&n.y>=t.y))||!!this.intersectsWithRect(t,e)||this.containsPoint(t.midPointFrom(e))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return this.intersectsWithRect(t,e)?!0:this.getCoords().every((n=>(n.x>=e.x||n.x<=t.x)&&(n.y>=e.y||n.y<=t.y)))&&this.containsPoint(t.midPointFrom(e))}getBoundingRect(){return $i(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(t){this._set(Fn,t),this._set(ei,t),this.setCoords()}scaleToWidth(t){let e=this.getBoundingRect().width/this.getScaledWidth();return this.scale(t/this.width/e)}scaleToHeight(t){let e=this.getBoundingRect().height/this.getScaledHeight();return this.scale(t/this.height/e)}getCanvasRetinaScaling(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.getRetinaScaling())||1}getTotalAngle(){return this.group?es(u0(this.calcTransformMatrix())):this.angle}getViewportTransform(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.viewportTransform)||Ln.concat()}calcACoords(){let t=$r({angle:this.angle}),{x:e,y:n}=this.getRelativeCenterPoint(),i=na(e,n),r=He(i,t),o=this._getTransformedDimensions(),a=o.x/2,l=o.y/2;return{tl:Cn({x:-a,y:-l},r),tr:Cn({x:a,y:-l},r),bl:Cn({x:-a,y:l},r),br:Cn({x:a,y:l},r)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=[];return!t&&this.group&&(e=this.group.transformMatrixKey(t)),e.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,Je(this.originX),Je(this.originY)),e}calcTransformMatrix(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=this.calcOwnMatrix();if(t||!this.group)return e;let n=this.transformMatrixKey(t),i=this.matrixCache;return i&&i.key.every(((r,o)=>r===n[o]))?i.value:(this.group&&(e=He(this.group.calcTransformMatrix(!1),e)),this.matrixCache={key:n,value:e},e)}calcOwnMatrix(){let t=this.transformMatrixKey(!0),e=this.ownMatrixCache;if(e&&e.key===t)return e.value;let n=this.getRelativeCenterPoint(),i={angle:this.angle,translateX:n.x,translateY:n.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY},r=f0(i);return this.ownMatrixCache={key:t,value:r},r}_getNonTransformedDimensions(){return new st(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(t){return this._getTransformedDimensions(t).transform(this.getViewportTransform(),!0).scalarAdd(2*this.padding)}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=G({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth},t),n=e.strokeWidth,i=n,r=0;this.strokeUniform&&(i=0,r=n);let o=e.width+i,a=e.height+i,l;return l=e.skewX===0&&e.skewY===0?new st(o*e.scaleX,a*e.scaleY):su(o,a,ul(e)),l.scalarAdd(r)}translateToGivenOrigin(t,e,n,i,r){let o=t.x,a=t.y,l=Je(i)-Je(e),c=Je(r)-Je(n);if(l||c){let h=this._getTransformedDimensions();o+=l*h.x,a+=c*h.y}return new st(o,a)}translateToCenterPoint(t,e,n){if(e===ie&&n===ie)return t;let i=this.translateToGivenOrigin(t,e,n,ie,ie);return this.angle?i.rotate(Ge(this.angle),t):i}translateToOriginPoint(t,e,n){let i=this.translateToGivenOrigin(t,ie,ie,e,n);return this.angle?i.rotate(Ge(this.angle),t):i}getCenterPoint(){let t=this.getRelativeCenterPoint();return this.group?Cn(t,this.group.calcTransformMatrix()):t}getRelativeCenterPoint(){return this.translateToCenterPoint(new st(this.left,this.top),this.originX,this.originY)}getPointByOrigin(t,e){return this.translateToOriginPoint(this.getRelativeCenterPoint(),t,e)}setPositionByOrigin(t,e,n){let i=this.translateToCenterPoint(t,e,n),r=this.translateToOriginPoint(i,this.originX,this.originY);this.set({left:r.x,top:r.y})}_getLeftTopCoords(){return this.translateToOriginPoint(this.getRelativeCenterPoint(),Te,Vn)}},H1=["type"],W1=["extraParam"],gs=class wh extends gf{static getDefaults(){return wh.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){$s("warn","Setting type has no effect",t)}constructor(t){super(),W(this,"_cacheContext",null),Object.assign(this,wh.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=ts(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,i=ge.maxCacheSideLimit,r=ge.minCacheSideLimit;if(e<=i&&n<=i&&e*n<=ge.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let o=e/n,[a,l]=tl.limitDimsByArea(o),c=Kr(r,a,i),h=Kr(r,l,i);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,i=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(i+2),zoomX:t.x,zoomY:t.y,x:n,y:i}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:i,zoomX:r,zoomY:o,x:a,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||i!==t.height,h=this.zoomX!==r||this.zoomY!==o;if(!t||!e)return!1;if(c||h){n!==t.width||i!==t.height?(t.width=n,t.height=i):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let u=a/2,d=l/2;return this.cacheTranslationX=Math.round(t.width/2-u)+u,this.cacheTranslationY=Math.round(t.height/2-d)+d,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,o),this.zoomX=r,this.zoomY=o,!0}return!1}setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new st(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=Yo(this.calcTransformMatrix());return new st(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!==Fn&&t!==ei||(e=this._constrainScale(e)),t===Fn&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof jr||(e=new jr(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r}=this,{width:o,height:a}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r,width:o,height:a,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst===Hn&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let i=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=i,this.stroke=r}createClipPathLayer(t,e){let n=ni(e),i=n.getContext("2d");if(i.translate(e.cacheTranslationX,e.cacheTranslationY),i.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach((r=>{r.transform(i)})),e.parentClipPaths.push(t),t.absolutePositioned){let r=ti(this.calcTransformMatrix());i.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(i),t.drawObject(i,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let i=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,i)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,di(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,e){let{fill:n}=e;n&&(di(n)?(t.fillStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.fillStyle=n)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,i=this.getCanvasRetinaScaling(),[r,,,o]=n?.viewportTransform||Ln,a=r*i,l=o*i,c=e.nonScaling?new st(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*ge.browserShadowBlurConstant*(a+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*a*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!di(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,i=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,i,r):t.transform(1,0,0,1,i,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:i,offsetY:r}}_renderPaintInOrder(t){this.paintFirst===Hn?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),o=i.x/this.scaleX/r,a=i.y/this.scaleY/r,l=ni({width:Math.ceil(o),height:Math.ceil(a)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,a),c.lineTo(0,a),c.closePath(),c.translate(o/2,a/2),c.scale(i.zoomX/this.scaleX/r,i.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/i.zoomX,r*this.scaleY/i.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))!==null&&n!==void 0?n:"")}_findCenterFromElement(){return new st(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(It.getClass("image"))(e)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Xf(this),n=this.group,i=this.shadow,r=Math.abs,o=t.enableRetinaScaling?n0():1,a=(t.multiplier||1)*o,l=t.canvasProvider||(S=>new er(S,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&v0(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&hf(this,this.getViewportTransform()),this.setCoords();let c=ts(),h=this.getBoundingRect(),u=this.shadow,d=new st;if(u){let S=u.blur,A=u.nonScaling?new st(1,1):this.getObjectScaling();d.x=2*Math.round(r(u.offsetX)+S)*r(A.x),d.y=2*Math.round(r(u.offsetY)+S)*r(A.y)}let f=h.width+d.x,p=h.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let x=l(c);t.format==="jpeg"&&(x.backgroundColor="#fff"),this.setPositionByOrigin(new st(x.width/2,x.height/2),ie,ie);let m=this.canvas;x._objects=[this],this.set("canvas",x),this.setCoords();let g=x.toCanvasElement(a||1,t);return this.set("canvas",m),this.shadow=i,n&&(this.group=n),this.set(e),this.setCoords(),x._objects=[],x.destroy(),g}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zf(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vf(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.includes(this.constructor.type)||e.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:i}=this;if(e){let{x:r,y:o}=this.getRelativeCenterPoint();this.originX=ie,this.originY=ie,this.left=r,this.top=o}if(this.set("angle",t),e){let{x:r,y:o}=this.translateToOriginPoint(this.getRelativeCenterPoint(),n,i);this.left=r,this.top=o,this.originX=n,this.originY=i}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){Rh.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&Qi().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce(((n,i)=>{let[r,o]=i;return n[r]=this._animate(r,o,e),n}),{})}_animate(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.split("."),r=this.constructor.colorProperties.includes(i[i.length-1]),{abort:o,startValue:a,onChange:l,onComplete:c}=n,h=G(G({},n),{},{target:this,startValue:a??i.reduce(((u,d)=>u[d]),this),endValue:e,abort:o?.bind(this),onChange:(u,d,f)=>{i.reduce(((p,x,m)=>(m===i.length-1&&(p[x]=u),p[x])),this),l&&l(u,d,f)},onComplete:(u,d,f)=>{this.setCoords(),c&&c(u,d,f)}});return r?O0(h):Kf(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let i,r=0;r<e.length;r++){if(i=e[r],i===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let o=0;o<n.length;o++){if(this===n[o])return{fork:[],otherFork:[t,...n.slice(0,o)],common:[this,...e]};if(i===n[o])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,o)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let i=e.fork.pop(),r=e.otherFork.pop(),o=n._objects.indexOf(i),a=n._objects.indexOf(r);return o>-1&&o>a}toObject(){let t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).concat(wh.customProperties,this.constructor.customProperties||[]),e,n=ge.NUM_FRACTION_DIGITS,{clipPath:i,fill:r,stroke:o,shadow:a,strokeDashArray:l,left:c,top:h,originX:u,originY:d,width:f,height:p,strokeWidth:x,strokeLineCap:m,strokeDashOffset:g,strokeLineJoin:S,strokeUniform:A,strokeMiterLimit:w,scaleX:E,scaleY:R,angle:_,flipX:v,flipY:T,opacity:C,visible:P,backgroundColor:F,fillRule:z,paintFirst:I,globalCompositeOperation:X,skewX:q,skewY:U}=this;i&&!i.excludeFromExport&&(e=i.toObject(t.concat("inverted","absolutePositioned")));let et=H=>Ie(H,n),L=G(G({},Qr(this,t)),{},{type:this.constructor.type,version:of,originX:u,originY:d,left:et(c),top:et(h),width:et(f),height:et(p),fill:Mg(r)?r.toObject():r,stroke:Mg(o)?o.toObject():o,strokeWidth:et(x),strokeDashArray:l&&l.concat(),strokeLineCap:m,strokeDashOffset:g,strokeLineJoin:S,strokeUniform:A,strokeMiterLimit:et(w),scaleX:et(E),scaleY:et(R),angle:et(_),flipX:v,flipY:T,opacity:et(C),shadow:a&&a.toObject(),visible:P,backgroundColor:F,fillRule:z,paintFirst:I,globalCompositeOperation:X,skewX:et(q),skewY:et(U)},e?{clipPath:e}:null);return this.includeDefaultValues?L:this._removeDefaultValues(L)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return Wf(t,((i,r)=>{if(r===Te||r===Vn||r==="type")return!0;let o=n[r];return i!==o&&!(Array.isArray(i)&&Array.isArray(o)&&i.length===0&&o.length===0)}))}toString(){return"#<".concat(this.constructor.type,">")}static _fromObject(t){let e=ke(t,H1),n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{extraParam:i}=n,r=ke(n,W1);return dl(e,r).then((o=>i?(delete o[i],new this(e[i],o)):new this(o)))}static fromObject(t,e){return this._fromObject(t,e)}};W(gs,"stateProperties",F1),W(gs,"cacheProperties",Ss),W(gs,"ownDefaults",N1),W(gs,"type","FabricObject"),W(gs,"colorProperties",[tn,Hn,"backgroundColor"]),W(gs,"customProperties",[]),It.setClass(gs),It.setClass(gs,"object");var nr=(s,t,e)=>(n,i,r,o)=>{let a=t(n,i,r,o);return a&&jf(s,G(G({},Yf(n,i,r,o)),e)),a};function to(s){return(t,e,n,i)=>{let{target:r,originX:o,originY:a}=e,l=r.getRelativeCenterPoint(),c=r.translateToOriginPoint(l,o,a),h=s(t,e,n,i);return r.setPositionByOrigin(c,e.originX,e.originY),h}}var _f=nr(rl,to(((s,t,e,n)=>{let i=ru(t,t.originX,t.originY,e,n);if(Je(t.originX)===Je(ie)||Je(t.originX)===Je(Ye)&&i.x<0||Je(t.originX)===Je(Te)&&i.x>0){let{target:r}=t,o=r.strokeWidth/(r.strokeUniform?r.scaleX:1),a=S0(t)?2:1,l=r.width,c=Math.abs(i.x*a/r.scaleX)-o;return r.set("width",Math.max(c,1)),l!==r.width}return!1})));function L0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?Hn:tn,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h,u=t,d=e;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",r>o?(h=r,s.scale(1,o/r),d=e*r/o):o>r?(h=o,s.scale(r/o,1),u=t*o/r):h=r,s.beginPath(),s.arc(u,d,h/2,0,ys,!1),s[l](),c&&s.stroke(),s.restore()}function F0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?Hn:tn,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h=r/2,u=o/2;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",s.translate(t,e);let d=i.getTotalAngle();s.rotate(Ge(d)),s["".concat(l,"Rect")](-h,-u,r,o),c&&s.strokeRect(-h,-u,r,o),s.restore()}var In=class{constructor(t){W(this,"visible",!0),W(this,"actionName",eu),W(this,"angle",0),W(this,"x",0),W(this,"y",0),W(this,"offsetX",0),W(this,"offsetY",0),W(this,"sizeX",0),W(this,"sizeY",0),W(this,"touchSizeX",0),W(this,"touchSizeY",0),W(this,"cursorStyle","crosshair"),W(this,"withConnection",!1),Object.assign(this,t)}shouldActivate(t,e,n,i){var r;let{tl:o,tr:a,br:l,bl:c}=i;return((r=e.canvas)===null||r===void 0?void 0:r.getActiveObject())===e&&e.isControlVisible(t)&&Yr.isPointInPolygon(n,[o,a,l,c])}getActionHandler(t,e,n){return this.actionHandler}getMouseDownHandler(t,e,n){return this.mouseDownHandler}getMouseUpHandler(t,e,n){return this.mouseUpHandler}cursorStyleHandler(t,e,n){return e.cursorStyle}getActionName(t,e,n){return e.actionName}getVisibility(t,e){var n,i;return(n=(i=t._controlsVisibility)===null||i===void 0?void 0:i[e])!==null&&n!==void 0?n:this.visible}setVisibility(t,e,n){this.visible=t}positionHandler(t,e,n,i){return new st(this.x*t.x+this.offsetX,this.y*t.y+this.offsetY).transform(e)}calcCornerCoords(t,e,n,i,r,o){let a=nu([na(n,i),$r({angle:t}),iu((r?this.touchSizeX:this.sizeX)||e,(r?this.touchSizeY:this.sizeY)||e)]);return{tl:new st(-.5,-.5).transform(a),tr:new st(.5,-.5).transform(a),br:new st(.5,.5).transform(a),bl:new st(-.5,.5).transform(a)}}render(t,e,n,i,r){((i=i||{}).cornerStyle||r.cornerStyle)==="circle"?L0.call(this,t,e,n,i,r):F0.call(this,t,e,n,i,r)}},N0=(s,t,e)=>e.lockRotation?Oh:t.cursorStyle,U0=nr(s0,to(((s,t,e,n)=>{let{target:i,ex:r,ey:o,theta:a,originX:l,originY:c}=t,h=i.translateToOriginPoint(i.getRelativeCenterPoint(),l,c);if(Ii(i,"lockRotation"))return!1;let u=Math.atan2(o-h.y,r-h.x),d=Math.atan2(n-h.y,e-h.x),f=es(d-u+a);if(i.snapAngle&&i.snapAngle>0){let x=i.snapAngle,m=i.snapThreshold||x,g=Math.ceil(f/x)*x,S=Math.floor(f/x)*x;Math.abs(f-S)<m?f=S:Math.abs(f-g)<m&&(f=g)}f<0&&(f=360+f),f%=360;let p=i.angle!==f;return i.angle=f,p})));function k0(s,t){let e=t.canvas,n=s[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function B0(s,t,e){let n=Ii(s,"lockScalingX"),i=Ii(s,"lockScalingY");if(n&&i||!t&&(n||i)&&e||n&&t==="x"||i&&t==="y")return!0;let{width:r,height:o,strokeWidth:a}=s;return r===0&&a===0&&t!=="y"||o===0&&a===0&&t!=="x"}var X1=["e","se","s","sw","w","nw","n","ne","e"],ko=(s,t,e)=>{let n=k0(s,e);if(B0(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",n))return Oh;let i=b0(e,t);return"".concat(X1[i],"-resize")};function Jf(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},r=t.target,o=i.by,a=k0(s,r),l,c,h,u,d,f;if(B0(r,o,a))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=ru(t,t.originX,t.originY,e,n),d=o!=="y"?Math.sign(l.x||t.signX||1):1,f=o!=="x"?Math.sign(l.y||t.signY||1):1,t.signX||(t.signX=d),t.signY||(t.signY=f),Ii(r,"lockScalingFlip")&&(t.signX!==d||t.signY!==f))return!1;if(u=r._getTransformedDimensions(),a&&!o){let m=Math.abs(l.x)+Math.abs(l.y),{original:g}=t,S=m/(Math.abs(u.x*g.scaleX/r.scaleX)+Math.abs(u.y*g.scaleY/r.scaleY));c=g.scaleX*S,h=g.scaleY*S}else c=Math.abs(l.x*r.scaleX/u.x),h=Math.abs(l.y*r.scaleY/u.y);S0(t)&&(c*=2,h*=2),t.signX!==d&&o!=="y"&&(t.originX=Eg(t.originX),c*=-1,t.signX=d),t.signY!==f&&o!=="x"&&(t.originY=Eg(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,x=r.scaleY;return o?(o==="x"&&r.set(Fn,c),o==="y"&&r.set(ei,h)):(!Ii(r,"lockScalingX")&&r.set(Fn,c),!Ii(r,"lockScalingY")&&r.set(ei,h)),p!==r.scaleX||x!==r.scaleY}var $a=nr(tu,to(((s,t,e,n)=>Jf(s,t,e,n)))),z0=nr(tu,to(((s,t,e,n)=>Jf(s,t,e,n,{by:"x"})))),V0=nr(tu,to(((s,t,e,n)=>Jf(s,t,e,n,{by:"y"})))),j1=["target","ex","ey","skewingSide"],$d={x:{counterAxis:"y",scale:Fn,skew:ta,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:ei,skew:ea,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},Y1=["ns","nesw","ew","nwse"],G0=(s,t,e)=>{if(t.x!==0&&Ii(e,"lockSkewingY")||t.y!==0&&Ii(e,"lockSkewingX"))return Oh;let n=b0(e,t)%4;return"".concat(Y1[n],"-resize")};function H0(s,t,e,n,i){let{target:r}=e,{counterAxis:o,origin:a,lockSkewing:l,skew:c,flip:h}=$d[s];if(Ii(r,l))return!1;let{origin:u,flip:d}=$d[o],f=Je(e[u])*(r[d]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),x=.5*-((r[c]===0&&ru(e,ie,ie,n,i)[s]>0||r[c]>0?1:-1)*p)+.5;return nr(r0,to(((g,S,A,w)=>(function(E,R,_){let{target:v,ex:T,ey:C,skewingSide:P}=R,F=ke(R,j1),{skew:z}=$d[E],I=_.subtract(new st(T,C)).divide(new st(v.scaleX,v.scaleY))[E],X=v[z],q=F[z],U=Math.tan(Ge(q)),et=E==="y"?v._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:v._getTransformedDimensions({scaleX:1,scaleY:1}).y,L=2*I*P/Math.max(et,1)+U,H=es(Math.atan(L));v.set(z,H);let Z=X!==v[z];if(Z&&E==="y"){let{skewX:ut,scaleX:_t}=v,J=v._getTransformedDimensions({skewY:X}),yt=v._getTransformedDimensions(),wt=ut!==0?J.x/yt.x:1;wt!==1&&v.set(Fn,wt*_t)}return Z})(s,S,new st(A,w)))))(t,G(G({},e),{},{[a]:x,skewingSide:p}),n,i)}var W0=(s,t,e,n)=>H0("x",s,t,e,n),X0=(s,t,e,n)=>H0("y",s,t,e,n);function lu(s,t){return s[t.canvas.altActionKey]}var Qa=(s,t,e)=>{let n=lu(s,e);return t.x===0?n?ta:ei:t.y===0?n?ea:Fn:""},Ar=(s,t,e)=>lu(s,e)?G0(0,t,e):ko(s,t,e),xf=(s,t,e,n)=>lu(s,t.target)?X0(s,t,e,n):z0(s,t,e,n),vf=(s,t,e,n)=>lu(s,t.target)?W0(s,t,e,n):V0(s,t,e,n),$f=()=>({ml:new In({x:-.5,y:0,cursorStyleHandler:Ar,actionHandler:xf,getActionName:Qa}),mr:new In({x:.5,y:0,cursorStyleHandler:Ar,actionHandler:xf,getActionName:Qa}),mb:new In({x:0,y:.5,cursorStyleHandler:Ar,actionHandler:vf,getActionName:Qa}),mt:new In({x:0,y:-.5,cursorStyleHandler:Ar,actionHandler:vf,getActionName:Qa}),tl:new In({x:-.5,y:-.5,cursorStyleHandler:ko,actionHandler:$a}),tr:new In({x:.5,y:-.5,cursorStyleHandler:ko,actionHandler:$a}),bl:new In({x:-.5,y:.5,cursorStyleHandler:ko,actionHandler:$a}),br:new In({x:.5,y:.5,cursorStyleHandler:ko,actionHandler:$a}),mtr:new In({x:0,y:-.5,actionHandler:U0,cursorStyleHandler:N0,offsetY:-40,withConnection:!0,actionName:kf})}),j0=()=>({mr:new In({x:.5,y:0,actionHandler:_f,cursorStyleHandler:Ar,actionName:rl}),ml:new In({x:-.5,y:0,actionHandler:_f,cursorStyleHandler:Ar,actionName:rl})}),Y0=()=>G(G({},$f()),j0()),zh=class s extends gs{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,this.constructor.createControls(),s.ownDefaults),this.setOptions(t)}static createControls(){return{controls:$f()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,i=e.action;if(this===n&&i&&i.startsWith(eu))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let i=n.length-1;i>=0;i--){let[r,o]=n[i],a=this.controls[r];if(a.shouldActivate(r,this,t,e?o.touchCorner:o.corner))return this.__corner=r,{key:r,control:a,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=this.getCenterPoint(),n=na(e.x,e.y),i=$r({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}),r=He(n,i),o=He(t,r),a=He(o,[1/t[0],0,0,1/t[3],0,0]),l=this.group?Yo(this.calcTransformMatrix()):void 0;l&&(l.scaleX=Math.abs(l.scaleX),l.scaleY=Math.abs(l.scaleY));let c=this._calculateCurrentDimensions(l),h={};return this.forEachControl(((u,d)=>{let f=u.positionHandler(c,a,this,u);h[d]=Object.assign(f,this._calcCornerCoords(u,f))})),h}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),i=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/i[0],1/i[3]),t.rotate(Ge(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=G({hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray},n);t.save(),t.strokeStyle=i.borderColor,this._setLineDash(t,i.borderDashArray),this.strokeBorders(t,e),i.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{hasBorders:n,hasControls:i}=this,r=G({hasBorders:n,hasControls:i},e),o=this.getViewportTransform(),a=r.hasBorders,l=r.hasControls,c=He(o,this.calcTransformMatrix()),h=Yo(c);t.save(),t.translate(h.translateX,h.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(h.angle-=180),t.rotate(Ge(this.group?h.angle:this.angle)),a&&this.drawBorders(t,h,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let i;if(n&&n.forActiveSelection||this.group){let r=su(this.width,this.height,ul(e)),o=this.isStrokeAccountedForInDimensions()?Bf:(this.strokeUniform?new st().scalarAdd(this.canvas?this.canvas.getZoom():1):new st(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);i=r.add(o).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else i=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,i,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl(((i,r)=>{i.withConnection&&i.getVisibility(this,r)&&(n=!0,t.moveTo(i.x*e.x,i.y*e.y),t.lineTo(i.x*e.x+i.offsetX,i.y*e.y+i.offsetY))})),n&&t.stroke()}drawControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:i,cornerDashArray:r,cornerColor:o}=this,a=G({cornerStrokeColor:i,cornerDashArray:r,cornerColor:o},e);t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=a.cornerColor,this.transparentCorners||(t.strokeStyle=a.cornerStrokeColor),this._setLineDash(t,a.cornerDashArray),this.forEachControl(((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,a,this)}})),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.entries(t).forEach((e=>{let[n,i]=e;return this.setControlVisible(n,i)}))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let i=this.width+4,r=this.height+4;return e.clearRect(-i/2,-r/2,i,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function q0(s,t){return t.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{n!=="constructor"&&Object.defineProperty(s.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))}))})),s}W(zh,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var cn=class extends zh{};q0(cn,[Fh]),It.setClass(cn),It.setClass(cn,"object");var Z0=(s,t,e,n)=>{let i=2*(n=Math.round(n))+1,{data:r}=s.getImageData(t-n,e-n,i,i);for(let o=3;o<r.length;o+=4)if(r[o]>0)return!1;return!0},Vh=class{constructor(t){this.options=t,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new st(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new st(1/this.options.scaleX,1/this.options.scaleY):new st(1,1)}createSideVector(t,e){let n=Uh(t,e);return this.options.strokeUniform?n.multiply(this.scale):n}projectOrthogonally(t,e,n){return this.applySkew(t.add(this.calcOrthogonalProjection(t,e,n)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(t){let e=new st(t);return e.y+=e.x*Math.tan(Ge(this.options.skewY)),e.x+=e.y*Math.tan(Ge(this.options.skewX)),e}scaleUnitVector(t,e){return t.multiply(this.strokeUniformScalar).scalarMultiply(e)}},q1=new st,Gh=class s extends Vh{static getOrthogonalRotationFactor(t,e){let n=e?Bh(t,e):P0(t);return Math.abs(n)<Qs?-1:1}constructor(t,e,n,i){super(i),W(this,"AB",void 0),W(this,"AC",void 0),W(this,"alpha",void 0),W(this,"bisector",void 0),this.A=new st(t),this.B=new st(e),this.C=new st(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=Bh(this.AB,this.AC),this.bisector=au(qf(this.AB.eq(q1)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e),r=Zf(i),o=s.getOrthogonalRotationFactor(r,this.bisector);return this.scaleUnitVector(r,n*o)}projectBevel(){let t=[];return(this.alpha%ys==0?[this.B]:[this.B,this.C]).forEach((e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))})),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),i=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?kh(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return kh(i)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(i))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],i=new st(s.getOrthogonalRotationFactor(this.bisector),s.getOrthogonalRotationFactor(new st(this.bisector.y,this.bisector.x)));return[new st(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),new st(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)].forEach((r=>{uf(r,t,e)&&n.push(this.A.add(r))})),n}projectRoundWithSkew(t,e){let n=[],{skewX:i,skewY:r,scaleX:o,scaleY:a,strokeUniform:l}=this.options,c=new st(Math.tan(Ge(i)),Math.tan(Ge(r))),h=this.strokeProjectionMagnitude,u=l?h/a/Math.sqrt(1/a**2+1/o**2*c.y**2):h/Math.sqrt(1+c.y**2),d=new st(Math.sqrt(Math.max(h**2-u**2,0)),u),f=l?h/Math.sqrt(1+c.x**2*(1/a)**2/(1/o+1/o*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new st(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map((x=>this.applySkew(l?x.multiply(this.strokeUniformScalar):x))).forEach((x=>{uf(x,t,e)&&n.push(this.applySkew(this.A).add(x))})),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%ys==0,n=this.applySkew(this.A),i=t[e?0:2].subtract(n),r=t[e?1:0].subtract(n),o=e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)),a=Xo(i,o)>0,l=a?i:r,c=a?r:i;return this.isSkewed()?t.push(...this.projectRoundWithSkew(l,c)):t.push(...this.projectRoundNoSkew(l,c)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector})))}},Hh=class extends Vh{constructor(t,e,n){super(n),this.A=new st(t),this.T=new st(e)}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e);return this.scaleUnitVector(Zf(i),n)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let t=[];if(!this.isSkewed()&&this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.applySkew(this.A.add(e)),this.applySkew(this.A.subtract(e)))}else t.push(...new Gh(this.A,this.T,this.T,this.options).projectRound());return t}projectSquare(){let t=[];if(this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.A.add(e),this.A.subtract(e))}else{let e=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),n=this.scaleUnitVector(au(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),i=this.A.add(n);t.push(i.add(e),i.subtract(e))}return t.map((e=>this.applySkew(e)))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t})))}},K0=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=[];if(s.length===0)return n;let i=s.reduce(((r,o)=>(r[r.length-1].eq(o)||r.push(new st(o)),r)),[new st(s[0])]);if(i.length===1)e=!0;else if(!e){let r=i[0],o=((a,l)=>{for(let c=a.length-1;c>=0;c--)if(l(a[c],c,a))return c;return-1})(i,(a=>!a.eq(r)));i.splice(o+1)}return i.forEach(((r,o,a)=>{let l,c;o===0?(c=a[1],l=e?r:a[a.length-1]):o===a.length-1?(l=a[o-1],c=e?r:a[0]):(l=a[o-1],c=a[o+1]),e&&a.length===1?n.push(...new Hh(r,r,t).project()):!e||o!==0&&o!==a.length-1?n.push(...new Gh(r,l,c,t).project()):n.push(...new Hh(r,o===0?c:l,t).project())})),n},Qf=s=>{let t={};return Object.keys(s).forEach((e=>{t[e]={},Object.keys(s[e]).forEach((n=>{t[e][n]=G({},s[e][n])}))})),t},J0=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Ka,cu=s=>{if(Ka||Ka||(Ka="Intl"in hl()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),Ka){let t=Ka.segment(s);return Array.from(t).map((e=>{let{segment:n}=e;return n}))}return Z1(s)},Z1=s=>{let t=[];for(let e,n=0;n<s.length;n++)(e=K1(s,n))!==!1&&t.push(e);return t},K1=(s,t)=>{let e=s.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return s.charAt(t);if(55296<=e&&e<=56319){if(s.length<=t+1)throw"High surrogate without following low surrogate";let i=s.charCodeAt(t+1);if(56320>i||i>57343)throw"High surrogate without following low surrogate";return s.charAt(t)+s.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=s.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},J1=Object.freeze({__proto__:null,capitalize:function(s){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return"".concat(s.charAt(0).toUpperCase()).concat(t?s.slice(1):s.slice(1).toLowerCase())},escapeXml:J0,graphemeSplit:cu}),hu=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.fill!==t.fill||s.stroke!==t.stroke||s.strokeWidth!==t.strokeWidth||s.fontSize!==t.fontSize||s.fontFamily!==t.fontFamily||s.fontWeight!==t.fontWeight||s.fontStyle!==t.fontStyle||s.textDecorationThickness!==t.textDecorationThickness||s.textBackgroundColor!==t.textBackgroundColor||s.deltaY!==t.deltaY||e&&(s.overline!==t.overline||s.underline!==t.underline||s.linethrough!==t.linethrough)},$0=(s,t)=>{let e=t.split(`
`),n=[],i=-1,r={};s=Qf(s);for(let o=0;o<e.length;o++){let a=cu(e[o]);if(s[o])for(let l=0;l<a.length;l++){i++;let c=s[o][l];c&&Object.keys(c).length>0&&(hu(r,c,!0)?n.push({start:i,end:i+1,style:c}):n[n.length-1].end++),r=c||{}}else i+=a.length,r={}}return n},Q0=(s,t)=>{if(!Array.isArray(s))return Qf(s);let e=t.split(Uf),n={},i=-1,r=0;for(let o=0;o<e.length;o++){let a=cu(e[o]);for(let l=0;l<a.length;l++)i++,s[r]&&s[r].start<=i&&i<s[r].end&&(n[o]=n[o]||{},n[o][l]=G({},s[r].style),i===s[r].end-1&&r++)}return n},ir=["display","transform",tn,"fill-opacity","fill-rule","opacity",Hn,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function zg(s,t){let e=s.nodeName,n=s.getAttribute("class"),i=s.getAttribute("id"),r="(?![a-zA-Z\\-]+)",o;if(o=new RegExp("^"+e,"i"),t=t.replace(o,""),i&&t.length&&(o=new RegExp("#"+i+r,"i"),t=t.replace(o,"")),n&&t.length){let a=n.split(" ");for(let l=a.length;l--;)o=new RegExp("\\."+a[l]+r,"i"),t=t.replace(o,"")}return t.length===0}function $1(s,t){let e=!0,n=zg(s,t.pop());return n&&t.length&&(e=(function(i,r){let o,a=!0;for(;i.parentElement&&i.parentElement.nodeType===1&&r.length;)a&&(o=r.pop()),a=zg(i=i.parentElement,o);return r.length===0})(s,t)),n&&e&&t.length===0}var Q1=s=>{var t;return(t=O1[s])!==null&&t!==void 0?t:s},tM=new RegExp("(".concat(Pi,")"),"gi"),eM=s=>Lh(s.replace(tM," $1 ").replace(/,/gi," ")),Vg,Gg,Hg,Wg,Xg,jg,Yg,On="(".concat(Pi,")"),nM=String.raw(Vg||(Vg=ns(["(skewX)(",")"],["(skewX)\\(","\\)"])),On),iM=String.raw(Gg||(Gg=ns(["(skewY)(",")"],["(skewY)\\(","\\)"])),On),sM=String.raw(Hg||(Hg=ns(["(rotate)(","(?: "," ",")?)"],["(rotate)\\(","(?: "," ",")?\\)"])),On,On,On),rM=String.raw(Wg||(Wg=ns(["(scale)(","(?: ",")?)"],["(scale)\\(","(?: ",")?\\)"])),On,On),oM=String.raw(Xg||(Xg=ns(["(translate)(","(?: ",")?)"],["(translate)\\(","(?: ",")?\\)"])),On,On),aM=String.raw(jg||(jg=ns(["(matrix)("," "," "," "," "," ",")"],["(matrix)\\("," "," "," "," "," ","\\)"])),On,On,On,On,On,On),tp="(?:".concat(aM,"|").concat(oM,"|").concat(sM,"|").concat(rM,"|").concat(nM,"|").concat(iM,")"),lM="(?:".concat(tp,"*)"),cM=String.raw(Yg||(Yg=ns(["^s*(?:","?)s*$"],["^\\s*(?:","?)\\s*$"])),lM),hM=new RegExp(cM),uM=new RegExp(tp),dM=new RegExp(tp,"g");function yf(s){let t=[];if(!(s=eM(s).replace(/\s*([()])\s*/gi,"$1"))||s&&!hM.test(s))return[...Ln];for(let e of s.matchAll(dM)){let n=uM.exec(e[0]);if(!n)continue;let i=Ln,r=n.filter((p=>!!p)),[,o,...a]=r,[l,c,h,u,d,f]=a.map((p=>parseFloat(p)));switch(o){case"translate":i=na(l,c);break;case kf:i=$r({angle:l},{x:c,y:h});break;case eu:i=iu(l,c);break;case ta:i=Gf(l);break;case ea:i=Hf(l);break;case"matrix":i=[l,c,h,u,d,f]}t.push(i)}return nu(t)}function fM(s,t,e,n){let i=Array.isArray(t),r,o=t;if(s!==tn&&s!==Hn||t!==Gn){if(s==="strokeUniform")return t==="non-scaling-stroke";if(s==="strokeDashArray")o=t===Gn?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(s==="transformMatrix")o=e&&e.transformMatrix?He(e.transformMatrix,yf(t)):yf(t);else if(s==="visible")o=t!==Gn&&t!=="hidden",e&&e.visible===!1&&(o=!1);else if(s==="opacity")o=parseFloat(t),e&&e.opacity!==void 0&&(o*=e.opacity);else if(s==="textAnchor")o=t==="start"?Te:t==="end"?Ye:ie;else if(s==="charSpacing"||s===Zr)r=Xr(t,n)/n*1e3;else if(s==="paintFirst"){let a=t.indexOf(tn),l=t.indexOf(Hn);o=tn,(a>-1&&l>-1&&l<a||a===-1&&l>-1)&&(o=Hn)}else{if(s==="href"||s==="xlink:href"||s==="font"||s==="id")return t;if(s==="imageSmoothing")return t==="optimizeQuality";r=i?t.map(Xr):Xr(t,n)}}else o="";return!i&&isNaN(r)?o:r}function pM(s,t){let e=s.match(I1);if(!e)return;let n=e[1],i=e[3],r=e[4],o=e[5],a=e[6];n&&(t.fontStyle=n),i&&(t.fontWeight=isNaN(parseFloat(i))?i:parseFloat(i)),r&&(t.fontSize=Xr(r)),a&&(t.fontFamily=a),o&&(t.lineHeight=o==="normal"?1:o)}function mM(s,t){s.replace(/;\s*$/,"").split(";").forEach((e=>{if(!e)return;let[n,i]=e.split(":");t[n.trim().toLowerCase()]=i.trim()}))}function gM(s){let t={},e=s.getAttribute("style");return e&&(typeof e=="string"?mM(e,t):(function(n,i){Object.entries(n).forEach((r=>{let[o,a]=r;a!==void 0&&(i[o.toLowerCase()]=a)}))})(e,t)),t}var _M={stroke:"strokeOpacity",fill:"fillOpacity"};function bs(s,t,e){if(!s)return{};let n,i={},r=Nf;s.parentNode&&Fg.test(s.parentNode.nodeName)&&(i=bs(s.parentElement,t,e),i.fontSize&&(n=r=Xr(i.fontSize)));let o=G(G(G({},t.reduce(((c,h)=>{let u=s.getAttribute(h);return u&&(c[h]=u),c}),{})),(function(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u={};for(let d in h)$1(c,d.split(" "))&&(u=G(G({},u),h[d]));return u})(s,e)),gM(s));o[Zd]&&s.setAttribute(Zd,o[Zd]),o[qd]&&(n=Xr(o[qd],r),o[qd]="".concat(n));let a={};for(let c in o){let h=Q1(c),u=fM(h,o[c],i,n);a[h]=u}a&&a.font&&pM(a.font,a);let l=G(G({},i),a);return Fg.test(s.nodeName)?l:(function(c){let h=cn.getDefaults();return Object.entries(_M).forEach((u=>{let[d,f]=u;if(c[f]===void 0||c[d]==="")return;if(c[d]===void 0){if(!h[d])return;c[d]=h[d]}if(c[d].indexOf("url(")===0)return;let p=new Nn(c[d]);c[d]=p.setAlpha(Ie(p.getAlpha()*c[f],2)).toRgba()})),c})(l)}var xM=["left","top","width","height","visible"],t_=["rx","ry"],Qn=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,i=-e/2,r=-n/2,o=this.rx?Math.min(this.rx,e/2):0,a=this.ry?Math.min(this.ry,n/2):0,l=o!==0||a!==0;t.beginPath(),t.moveTo(i+o,r),t.lineTo(i+e-o,r),l&&t.bezierCurveTo(i+e-qs*o,r,i+e,r+qs*a,i+e,r+a),t.lineTo(i+e,r+n-a),l&&t.bezierCurveTo(i+e,r+n-qs*a,i+e-qs*o,r+n,i+e-o,r+n),t.lineTo(i+o,r+n),l&&t.bezierCurveTo(i+qs*o,r+n,i,r+n-qs*a,i,r+n-a),t.lineTo(i,r+a),l&&t.bezierCurveTo(i,r+qs*a,i+qs*o,r,i+o,r),t.closePath(),this._renderPaintInOrder(t)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...t_,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:i}=this;return["<rect ","COMMON_PARTS",'x="'.concat(-t/2,'" y="').concat(-e/2,'" rx="').concat(n,'" ry="').concat(i,'" width="').concat(t,'" height="').concat(e,`" />
`)]}static async fromElement(t,e,n){let i=bs(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,width:a=0,height:l=0,visible:c=!0}=i,h=ke(i,xM);return new this(G(G(G({},e),h),{},{left:r,top:o,width:a,height:l,visible:!!(c&&a&&l)}))}};W(Qn,"type","Rect"),W(Qn,"cacheProperties",[...Ss,...t_]),W(Qn,"ownDefaults",{rx:0,ry:0}),W(Qn,"ATTRIBUTE_NAMES",[...ir,"x","y","rx","ry","width","height"]),It.setClass(Qn),It.setSVGClass(Qn);var _s="initialization",Wh="added",ep="removed",Xh="imperative",e_=(s,t)=>{let{strokeUniform:e,strokeWidth:n,width:i,height:r,group:o}=t,a=o&&o!==s?fl(o.calcTransformMatrix(),s.calcTransformMatrix()):null,l=a?t.getRelativeCenterPoint().transform(a):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?y0(new st(n,n),void 0,s.calcTransformMatrix()):Bf,u=!e&&c?n:0,d=su(i+u,r+u,nu([a,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(d),l.add(d)]},Jo=class{calcLayoutResult(t,e){if(this.shouldPerformLayout(t))return this.calcBoundingBox(e,t)}shouldPerformLayout(t){let{type:e,prevStrategy:n,strategy:i}=t;return e===_s||e===Xh||!!n&&i!==n}shouldLayoutClipPath(t){let{type:e,target:{clipPath:n}}=t;return e!==_s&&n&&!n.absolutePositioned}getInitialSize(t,e){return e.size}calcBoundingBox(t,e){let{type:n,target:i}=e;if(n===Xh&&e.overrides)return e.overrides;if(t.length===0)return;let{left:r,top:o,width:a,height:l}=$i(t.map((u=>e_(i,u))).reduce(((u,d)=>u.concat(d)),[])),c=new st(a,l),h=new st(r,o).add(c.scalarDivide(2));if(n===_s){let u=this.getInitialSize(e,{size:c,center:h});return{center:h,relativeCorrection:new st(0,0),size:u}}return{center:h.transform(i.calcOwnMatrix()),size:c}}};W(Jo,"type","strategy");var ll=class extends Jo{shouldPerformLayout(t){return!0}};W(ll,"type","fit-content"),It.setClass(ll);var vM=["strategy"],yM=["target","strategy","bubbles","prevStrategy"],n_="layoutManager",Jr=class{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new ll;W(this,"strategy",void 0),this.strategy=t,this._subscriptions=new Map}performLayout(t){let e=G(G({bubbles:!0,strategy:this.strategy},t),{},{prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}});this.onBeforeLayout(e);let n=this.getLayoutResult(e);n&&this.commitLayout(e,n),this.onAfterLayout(e,n),this._prevLayoutStrategy=e.strategy}attachHandlers(t,e){let{target:n}=e;return[Ah,i0,rl,s0,tu,r0,Eh,o0,M1].map((i=>t.on(i,(r=>this.performLayout(i===Ah?{type:"object_modified",trigger:i,e:r,target:n}:{type:"object_modifying",trigger:i,e:r,target:n})))))}subscribe(t,e){this.unsubscribe(t,e);let n=this.attachHandlers(t,e);this._subscriptions.set(t,n)}unsubscribe(t,e){(this._subscriptions.get(t)||[]).forEach((n=>n())),this._subscriptions.delete(t)}unsubscribeTargets(t){t.targets.forEach((e=>this.unsubscribe(e,t)))}subscribeTargets(t){t.targets.forEach((e=>this.subscribe(e,t)))}onBeforeLayout(t){let{target:e,type:n}=t,{canvas:i}=e;if(n===_s||n===Wh?this.subscribeTargets(t):n===ep&&this.unsubscribeTargets(t),e.fire("layout:before",{context:t}),i&&i.fire("object:layout:before",{target:e,context:t}),n===Xh&&t.deep){let r=ke(t,vM);e.forEachObject((o=>o.layoutManager&&o.layoutManager.performLayout(G(G({},r),{},{bubbles:!1,target:o}))))}}getLayoutResult(t){let{target:e,strategy:n,type:i}=t,r=n.calcLayoutResult(t,e.getObjects());if(!r)return;let o=i===_s?new st:e.getRelativeCenterPoint(),{center:a,correction:l=new st,relativeCorrection:c=new st}=r,h=o.subtract(a).add(l).transform(i===_s?Ln:ti(e.calcOwnMatrix()),!0).add(c);return{result:r,prevCenter:o,nextCenter:a,offset:h}}commitLayout(t,e){let{target:n}=t,{result:{size:i},nextCenter:r}=e;var o,a;n.set({width:i.x,height:i.y}),this.layoutObjects(t,e),t.type===_s?n.set({left:(o=t.x)!==null&&o!==void 0?o:r.x+i.x*Je(n.originX),top:(a=t.y)!==null&&a!==void 0?a:r.y+i.y*Je(n.originY)}):(n.setPositionByOrigin(r,ie,ie),n.setCoords(),n.set("dirty",!0))}layoutObjects(t,e){let{target:n}=t;n.forEachObject((i=>{i.group===n&&this.layoutObject(t,e,i)})),t.strategy.shouldLayoutClipPath(t)&&this.layoutObject(t,e,n.clipPath)}layoutObject(t,e,n){let{offset:i}=e;n.set({left:n.left+i.x,top:n.top+i.y})}onAfterLayout(t,e){let{target:n,strategy:i,bubbles:r,prevStrategy:o}=t,a=ke(t,yM),{canvas:l}=n;n.fire("layout:after",{context:t,result:e}),l&&l.fire("object:layout:after",{context:t,result:e,target:n});let c=n.parent;r&&c!=null&&c.layoutManager&&((a.path||(a.path=[])).push(n),c.layoutManager.performLayout(G(G({},a),{},{target:c}))),n.set("dirty",!0)}dispose(){let{_subscriptions:t}=this;t.forEach((e=>e.forEach((n=>n())))),t.clear()}toObject(){return{type:n_,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};It.setClass(Jr,n_);var SM=["type","objects","layoutManager"],Sf=class extends Jr{performLayout(){}},Js=class s extends a0(cn){static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),W(this,"_activeObjects",[]),W(this,"__objectSelectionTracker",void 0),W(this,"__objectSelectionDisposer",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject((i=>{this.enterGroup(i,!1)})),this.layoutManager=(n=e.layoutManager)!==null&&n!==void 0?n:new Jr,this.layoutManager.performLayout({type:_s,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?($s("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||($s("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter(((e,n,i)=>this.canEnterGroup(e)&&i.indexOf(e)===n))}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let i=this._filterObjectsBeforeEnteringGroup(e),r=super.add(...i);return this._onAfterObjectsChange(Wh,i),r}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=this._filterObjectsBeforeEnteringGroup(n),o=super.insertAt(t,...r);return this._onAfterObjectsChange(Wh,r),o}remove(){let t=super.remove(...arguments);return this._onAfterObjectsChange(ep,t),t}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach((i=>{i._set(t,e)})),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,e){let{target:n}=e,i=this._activeObjects;if(t)i.push(n),this._set("dirty",!0);else if(i.length>0){let r=i.indexOf(n);r>-1&&(i.splice(r,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&Ko(t,He(ti(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||(Ko(t,He(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=cn.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var i;let o=this._objects[r];(i=this.canvas)!==null&&i!==void 0&&i.preserveObjectStacking&&o.group!==this?(t.save(),t.transform(...ti(this.calcTransformMatrix())),o.render(t),t.restore()):o.group===this&&o.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject((t=>t.setCoords()))}triggerLayout(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.layoutManager.performLayout(G({target:this,type:Xh},t))}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter((function(i){return!i.excludeFromExport})).map((function(i){let r=i.includeDefaultValues;i.includeDefaultValues=n;let o=i[t||"toObject"](e);return i.includeDefaultValues=r,o}))}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.layoutManager.toObject();return G(G(G({},super.toObject(["subTargetCheck","interactive",...t])),e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{}),{},{objects:this.__serializeObjects("toObject",t)})}toString(){return"#<Group: (".concat(this.complexity(),")>")}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject((t=>{this._watchObject(!1,t),t.dispose()})),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=Qn.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let i=e.join("");return t?t(i):i}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let i=0;i<this._objects.length;i++)e.push("		",this._objects[i].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?"opacity: ".concat(this.opacity,";"):"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let i=0;i<this._objects.length;i++)e.push("	",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject(t,e){let{type:n,objects:i=[],layoutManager:r}=t,o=ke(t,SM);return Promise.all([qo(i,e),dl(o,e)]).then((a=>{let[l,c]=a,h=new this(l,G(G(G({},o),c),{},{layoutManager:new Sf}));if(r){let u=It.getClass(r.type),d=It.getClass(r.strategy);h.layoutManager=new u(new d)}else h.layoutManager=new Jr;return h.layoutManager.subscribeTargets({type:_s,target:h,targets:h.getObjects()}),h.setCoords(),h}))}};W(Js,"type","Group"),W(Js,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),It.setClass(Js);var i_=(s,t)=>Math.min(t.width/s.width,t.height/s.height),s_=(s,t)=>Math.max(t.width/s.width,t.height/s.height),bf="\\s*,?\\s*",Ja="".concat(bf,"(").concat(Pi,")"),bM="".concat(Ja).concat(Ja).concat(Ja).concat(bf,"([01])").concat(bf,"([01])").concat(Ja).concat(Ja),MM={m:"l",M:"L"},wM=(s,t,e,n,i,r,o,a,l,c,h)=>{let u=Oi(s),d=Li(s),f=Oi(t),p=Li(t),x=e*i*f-n*r*p+o,m=n*i*f+e*r*p+a;return["C",c+l*(-e*i*d-n*r*u),h+l*(-n*i*d+e*r*u),x+l*(e*i*p+n*r*f),m+l*(n*i*p-e*r*f),x,m]},qg=(s,t,e,n)=>{let i=Math.atan2(t,s),r=Math.atan2(n,e);return r>=i?r-i:2*Math.PI-(i-r)};function Mf(s,t,e,n,i,r,o,a){let l;if(ge.cachesBoundsOfCurve&&(l=[...arguments].join(),tl.boundsOfCurveCache[l]))return tl.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,u=[],d=[[0,0],[0,0]],f=6*s-12*e+6*i,p=-3*s+9*e-9*i+3*o,x=3*e-3*s;for(let w=0;w<2;++w){if(w>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*a,x=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let T=-x/f;0<T&&T<1&&u.push(T);continue}let E=f*f-4*x*p;if(E<0)continue;let R=c(E),_=(-f+R)/(2*p);0<_&&_<1&&u.push(_);let v=(-f-R)/(2*p);0<v&&v<1&&u.push(v)}let m=u.length,g=m,S=o_(s,t,e,n,i,r,o,a);for(;m--;){let{x:w,y:E}=S(u[m]);d[0][m]=w,d[1][m]=E}d[0][g]=s,d[1][g]=t,d[0][g+1]=o,d[1][g+1]=a;let A=[new st(Math.min(...d[0]),Math.min(...d[1])),new st(Math.max(...d[0]),Math.max(...d[1]))];return ge.cachesBoundsOfCurve&&(tl.boundsOfCurveCache[l]=A),A}var TM=(s,t,e)=>{let[n,i,r,o,a,l,c,h]=e,u=((d,f,p,x,m,g,S)=>{if(p===0||x===0)return[];let A=0,w=0,E=0,R=Math.PI,_=S*Ff,v=Li(_),T=Oi(_),C=.5*(-T*d-v*f),P=.5*(-T*f+v*d),F=p**2,z=x**2,I=P**2,X=C**2,q=F*z-F*I-z*X,U=Math.abs(p),et=Math.abs(x);if(q<0){let ae=Math.sqrt(1-q/(F*z));U*=ae,et*=ae}else E=(m===g?-1:1)*Math.sqrt(q/(F*I+z*X));let L=E*U*P/et,H=-E*et*C/U,Z=T*L-v*H+.5*d,ut=v*L+T*H+.5*f,_t=qg(1,0,(C-L)/U,(P-H)/et),J=qg((C-L)/U,(P-H)/et,(-C-L)/U,(-P-H)/et);g===0&&J>0?J-=2*R:g===1&&J<0&&(J+=2*R);let yt=Math.ceil(Math.abs(J/R*2)),wt=[],Ut=J/yt,St=8/3*Math.sin(Ut/4)*Math.sin(Ut/4)/Math.sin(Ut/2),Yt=_t+Ut;for(let ae=0;ae<yt;ae++)wt[ae]=wM(_t,Yt,T,v,U,et,Z,ut,St,A,w),A=wt[ae][5],w=wt[ae][6],_t=Yt,Yt+=Ut;return wt})(c-s,h-t,i,r,a,l,o);for(let d=0,f=u.length;d<f;d++)u[d][1]+=s,u[d][2]+=t,u[d][3]+=s,u[d][4]+=t,u[d][5]+=s,u[d][6]+=t;return u},r_=s=>{let t=0,e=0,n=0,i=0,r=[],o,a=0,l=0;for(let c of s){let h=[...c],u;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],u=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],u=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],u=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],i=h[2],u=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":a=h[3],l=h[4],t=h[5],e=h[6],u=["C",h[1],h[2],a,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":o==="C"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[3],e=h[4],u=["C",a,l,h[1],h[2],t,e],a=u[3],l=u[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":a=h[1],l=h[2],t=h[3],e=h[4],u=["Q",a,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":o==="Q"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[1],e=h[2],u=["Q",a,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":TM(t,e,h).forEach((d=>r.push(d))),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=i,u=["Z"]}u?(r.push(u),o=u[0]):o=""}return r},jh=(s,t,e,n)=>Math.sqrt((e-s)**2+(n-t)**2),o_=(s,t,e,n,i,r,o,a)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),u=(f=>3*f*(1-f)**2)(l),d=(f=>(1-f)**3)(l);return new st(o*c+i*h+e*u+s*d,a*c+r*h+n*u+t*d)},a_=s=>s**2,l_=s=>2*s*(1-s),c_=s=>(1-s)**2,CM=(s,t,e,n,i,r,o,a)=>l=>{let c=a_(l),h=l_(l),u=c_(l),d=3*(u*(e-s)+h*(i-e)+c*(o-i)),f=3*(u*(n-t)+h*(r-n)+c*(a-r));return Math.atan2(f,d)},EM=(s,t,e,n,i,r)=>o=>{let a=a_(o),l=l_(o),c=c_(o);return new st(i*a+e*l+s*c,r*a+n*l+t*c)},AM=(s,t,e,n,i,r)=>o=>{let a=1-o,l=2*(a*(e-s)+o*(i-e)),c=2*(a*(n-t)+o*(r-n));return Math.atan2(c,l)},Zg=(s,t,e)=>{let n=new st(t,e),i=0;for(let r=1;r<=100;r+=1){let o=s(r/100);i+=jh(n.x,n.y,o.x,o.y),n=o}return i},RM=(s,t)=>{let e,n=0,i=0,r={x:s.x,y:s.y},o=G({},r),a=.01,l=0,c=s.iterator,h=s.angleFinder;for(;i<t&&a>1e-4;)o=c(n),l=n,e=jh(r.x,r.y,o.x,o.y),e+i>t?(n-=a,a/=2):(r=o,n+=a,i+=e);return G(G({},o),{},{angle:h(l)})},np=s=>{let t,e,n=0,i=0,r=0,o=0,a=0,l=[];for(let c of s){let h={x:i,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=o=i=c[1],e.y=a=r=c[2];break;case"L":e=h,e.length=jh(i,r,c[1],c[2]),i=c[1],r=c[2];break;case"C":t=o_(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=CM(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=Zg(t,i,r),i=c[5],r=c[6];break;case"Q":t=EM(i,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=AM(i,r,c[1],c[2],c[3],c[4]),e.length=Zg(t,i,r),i=c[3],r=c[4];break;case"Z":e=h,e.destX=o,e.destY=a,e.length=jh(i,r,o,a),i=o,r=a}n+=e.length,l.push(e)}return l.push({length:n,x:i,y:r}),l},h_=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:np(s),n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let i=e[n],r=t/i.length,o=s[n];switch(i.command){case"M":return{x:i.x,y:i.y,angle:0};case"Z":return G(G({},new st(i.x,i.y).lerp(new st(i.destX,i.destY),r)),{},{angle:Math.atan2(i.destY-i.y,i.destX-i.x)});case"L":return G(G({},new st(i.x,i.y).lerp(new st(o[1],o[2]),r)),{},{angle:Math.atan2(o[2]-i.y,o[1]-i.x)});case"C":case"Q":return RM(i,t)}},PM=new RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),Kg=new RegExp(bM,"g"),DM=new RegExp(Pi,"gi"),IM={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},u_=s=>{var t;let e=[],n=(t=s.match(PM))!==null&&t!==void 0?t:[];for(let i of n){let r=i[0];if(r==="z"||r==="Z"){e.push([r]);continue}let o=IM[r.toLowerCase()],a=[];if(r==="a"||r==="A"){Kg.lastIndex=0;for(let l=null;l=Kg.exec(i);)a.push(...l.slice(1))}else a=i.match(DM)||[];for(let l=0;l<a.length;l+=o){let c=new Array(o),h=MM[r];c[0]=l>0&&h?h:r;for(let u=0;u<o;u++)c[u+1]=parseFloat(a[l+u]);e.push(c)}}return e},OM=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=new st(s[0]),n=new st(s[1]),i=1,r=0,o=[],a=s.length,l=a>2,c;for(l&&(i=s[2].x<n.x?-1:s[2].x===n.x?0:1,r=s[2].y<n.y?-1:s[2].y===n.y?0:1),o.push(["M",e.x-i*t,e.y-r*t]),c=1;c<a;c++){if(!e.eq(n)){let h=e.midPointFrom(n);o.push(["Q",e.x,e.y,h.x,h.y])}e=s[c],c+1<s.length&&(n=s[c+1])}return l&&(i=e.x>s[c-2].x?1:e.x===s[c-2].x?0:-1,r=e.y>s[c-2].y?1:e.y===s[c-2].y?0:-1),o.push(["L",e.x+i*t,e.y+r*t]),o},d_=(s,t)=>s.map((e=>e.map(((n,i)=>i===0||t===void 0?n:Ie(n,t))).join(" "))).join(" ");function Yh(s,t){let e=s.style;e&&t&&(typeof t=="string"?e.cssText+=";"+t:Object.entries(t).forEach((n=>{let[i,r]=n;return e.setProperty(i,r)})))}var LM=(s,t)=>Math.floor(Math.random()*(t-s+1))+s;function FM(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.onComplete||Wr,n=new(hl()).XMLHttpRequest,i=t.signal,r=function(){n.abort()},o=function(){i&&i.removeEventListener("abort",r),n.onerror=n.ontimeout=Wr};if(i&&i.aborted)throw new Ch("request");return i&&i.addEventListener("abort",r,{once:!0}),n.onreadystatechange=function(){n.readyState===4&&(o(),e(n),n.onreadystatechange=Wr)},n.onerror=n.ontimeout=o,n.open("get",s,!0),n.send(),n}var NM=(s,t)=>{let e=s._findCenterFromElement();s.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:i,scaleY:r,angle:o,skewX:a}=Yo(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(Fn,i),n.set(ei,r),n.angle=o,n.skewX=a,n.skewY=0}})(s),e=e.transform(s.transformMatrix)),delete s.transformMatrix,t&&(s.scaleX*=t.scaleX,s.scaleY*=t.scaleY,s.cropX=t.cropX,s.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,s.width=t.width,s.height=t.height),s.setPositionByOrigin(e,ie,ie)},UA=Object.freeze({__proto__:null,addTransformToObject:x0,animate:Kf,animateColor:O0,applyTransformToObject:Ko,calcAngleBetweenVectors:Bh,calcDimensionsMatrix:ul,calcPlaneChangeMatrix:fl,calcVectorRotation:P0,cancelAnimFrame:l0,capValue:Kr,composeMatrix:f0,copyCanvasElement:s=>{var t;let e=ni(s);return(t=e.getContext("2d"))===null||t===void 0||t.drawImage(s,0,0),e},cos:Oi,createCanvasElement:ts,createImage:c0,createRotateMatrix:$r,createScaleMatrix:iu,createSkewXMatrix:Gf,createSkewYMatrix:Hf,createTranslateMatrix:na,createVector:Uh,crossProduct:Xo,degreesToRadians:Ge,dotProduct:D0,ease:U1,enlivenObjectEnlivables:dl,enlivenObjects:qo,findScaleToCover:s_,findScaleToFit:i_,getBoundsOfCurve:Mf,getOrthonormalVector:Zf,getPathSegmentsInfo:np,getPointOnPath:h_,getPointer:_0,getRandomInt:LM,getRegularPolygonPath:(s,t)=>{let e=2*Math.PI/s,n=-Qs;s%2==0&&(n+=e/2);let i=new Array(s+1);for(let r=0;r<s;r++){let o=r*e+n,{x:a,y:l}=new st(Oi(o),Li(o)).scalarMultiply(t);i[r]=[r===0?"M":"L",a,l]}return i[s]=["Z"],i},getSmoothPathFromPoints:OM,getSvgAttributes:s=>{let t=["instantiated_by_use","style","id","class"];switch(s){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},getUnitVector:au,groupSVGElements:(s,t)=>s&&s.length===1?s[0]:new Js(s,t),hasStyleChanged:hu,invertTransform:ti,isBetweenVectors:uf,isIdentityMatrix:h0,isTouchEvent:Ih,isTransparent:Z0,joinPath:d_,loadImage:nl,magnitude:kh,makeBoundingBoxFromPoints:$i,makePathSimpler:r_,matrixToSVG:Zo,mergeClipPaths:(s,t)=>{var e;let n=s,i=t;n.inverted&&!i.inverted&&(n=t,i=s),hf(i,(e=i.group)===null||e===void 0?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&i.inverted;return r&&(n.inverted=i.inverted=!1),new Js([n],{clipPath:i,inverted:r})},multiplyTransformMatrices:He,multiplyTransformMatrixArray:nu,parsePath:u_,parsePreserveAspectRatioAttribute:w0,parseUnit:Xr,pick:Qr,projectStrokeOnPoints:K0,qrDecompose:Yo,radiansToDegrees:es,removeFromArray:Tr,removeTransformFromObject:(s,t)=>{let e=ti(t),n=He(e,s.calcOwnMatrix());Ko(s,n)},removeTransformMatrixForSvgParsing:NM,request:FM,requestAnimFrame:el,resetObjectTransform:v0,rotatePoint:(s,t,e)=>s.rotate(e,t),rotateVector:qf,saveObjectTransform:Xf,sendObjectToPlane:hf,sendPointToPlane:vs,sendVectorToPlane:y0,setStyle:Yh,sin:Li,sizeAfterTransform:su,string:J1,stylesFromArray:Q0,stylesToArray:$0,toBlob:Vf,toDataURL:zf,toFixed:Ie,transformPath:(s,t,e)=>(e&&(t=He(t,[1,0,0,1,-e.x,-e.y])),s.map((n=>{let i=[...n];for(let r=1;r<n.length-1;r+=2){let{x:o,y:a}=Cn({x:n[r],y:n[r+1]},t);i[r]=o,i[r+1]=a}return i}))),transformPoint:Cn}),wf=class extends Dh{constructor(t){let{allowTouchScrolling:e=!1,containerClass:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(t),W(this,"upper",void 0),W(this,"container",void 0);let{el:i}=this.lower,r=this.createUpperCanvas();this.upper={el:r,ctx:r.getContext("2d")},this.applyCanvasStyle(i,{allowTouchScrolling:e}),this.applyCanvasStyle(r,{allowTouchScrolling:e,styles:{position:"absolute",left:"0",top:"0"}});let o=this.createContainerElement();o.classList.add(n),i.parentNode&&i.parentNode.replaceChild(o,i),o.append(i,r),this.container=o}createUpperCanvas(){let{el:t}=this.lower,e=ts();return e.className=t.className,e.classList.remove("lower-canvas"),e.classList.add("upper-canvas"),e.setAttribute("data-fabric","top"),e.style.cssText=t.style.cssText,e.setAttribute("draggable","true"),e}createContainerElement(){let t=Qo().createElement("div");return t.setAttribute("data-fabric","wrapper"),Yh(t,{position:"relative"}),Tg(t),t}applyCanvasStyle(t,e){let{styles:n,allowTouchScrolling:i}=e;Yh(t,G(G({},n),{},{"touch-action":i?"manipulation":Gn})),Tg(t)}setDimensions(t,e){super.setDimensions(t,e);let{el:n,ctx:i}=this.upper;g0(n,i,t,e)}setCSSDimensions(t){super.setCSSDimensions(t),cf(this.upper.el,t),cf(this.container,t)}cleanupDOM(t){let e=this.container,{el:n}=this.lower,{el:i}=this.upper;super.cleanupDOM(t),e.removeChild(i),e.removeChild(n),e.parentNode&&e.parentNode.replaceChild(n,e)}dispose(){super.dispose(),Qi().dispose(this.upper.el),delete this.upper,delete this.container}},qh=class s extends er{constructor(){super(...arguments),W(this,"targets",[]),W(this,"_hoveredTargets",[]),W(this,"_currentTransform",null),W(this,"_groupSelector",null),W(this,"contextTopDirty",!1)}static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}get upperCanvasEl(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new wf(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter((e=>!e.group&&e!==t)).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let i=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+i,-n+i),r.transform(...this.viewportTransform);let o=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=o,r.restore();let a=Math.round(i*this.getRetinaScaling());return Z0(r,a,a,a)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find((n=>!!n&&t[n]===!0)):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),i=this._activeObject;return!!(!e||e&&i&&n.length>1&&n.indexOf(e)===-1&&i!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&i&&i!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let i;return e===eu||e===Fn||e===ei||e===rl?i=this.centeredScaling||t.centeredScaling:e===kf&&(i=this.centeredRotation||t.centeredRotation),i?!n:n}_getOriginFromCorner(t,e){let n={x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=Ye:["mr","tr","br"].includes(e)&&(n.x=Te),["tl","mt","tr"].includes(e)?n.y=af:["bl","mb","br"].includes(e)&&(n.y=Vn)),n}_setupCurrentTransform(t,e,n){var i;let r=e.group?vs(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:o="",control:a}=e.getActiveControl()||{},l=n&&a?(i=a.getActionHandler(t,e,a))===null||i===void 0?void 0:i.bind(a):M0,c=((f,p,x,m)=>{if(!p||!f)return"drag";let g=m.controls[p];return g.getActionName(x,g,m)})(n,o,t,e),h=t[this.centeredKey],u=this._shouldCenterTransform(e,c,h)?{x:ie,y:ie}:this._getOriginFromCorner(e,o),d={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:o,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:r.x-e.left,offsetY:r.y-e.top,originX:u.x,originY:u.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Ge(e.angle),width:e.width,height:e.height,shiftKey:t.shiftKey,altKey:h,original:G(G({},Xf(e)),{},{originX:u.x,originY:u.y})};this._currentTransform=d,this.fire("before:transform",{e:t,transform:d})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n).transform(this.viewportTransform),a=new st(e+i,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(o.x,a.x),h=Math.min(o.y,a.y),u=Math.max(o.x,a.x),d=Math.max(o.y,a.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,u-c,d-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,u-=l,d-=l,cn.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,u-c,d-h))}findTarget(t){if(this.skipTargetFind)return;let e=this.getViewportPoint(t),n=this._activeObject,i=this.getActiveObjects();if(this.targets=[],n&&i.length>=1){if(n.findControl(e,Ih(t))||i.length>1&&this.searchPossibleTargets([n],e))return n;if(n===this.searchPossibleTargets([n],e)){if(this.preserveObjectStacking){let r=this.targets;this.targets=[];let o=this.searchPossibleTargets(this._objects,e);return t[this.altSelectionKey]&&o&&o!==n?(this.targets=r,n):o}return n}}return this.searchPossibleTargets(this._objects,e)}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),i=this.getZoom(),r=t.padding/i;if(r){let[o,a,l,c]=n,h=Math.atan2(a.y-o.y,a.x-o.x),u=Oi(h)*r,d=Li(h)*r,f=u+d,p=u-d;n=[new st(o.x-p,o.y-f),new st(a.x+f,a.y-p),new st(l.x+p,l.y+f),new st(c.x-f,c.y+p)]}return Yr.isPointInPolygon(e,n)}_checkTarget(t,e){return!!(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,vs(e,void 0,this.viewportTransform))&&(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing||!this.isTargetTransparent(t,e.x,e.y)))}_searchPossibleTargets(t,e){let n=t.length;for(;n--;){let i=t[n];if(this._checkTarget(i,e)){if(Mh(i)&&i.subTargetCheck){let r=this._searchPossibleTargets(i._objects,e);r&&this.targets.push(r)}return i}}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e);if(n&&Mh(n)&&n.interactive&&this.targets[0]){let i=this.targets;for(let r=i.length-1;r>0;r--){let o=i[r];if(!Mh(o)||!o.interactive)return o}return i[0]}return n}getViewportPoint(t){return this._pointer?this._pointer:this.getPointer(t,!0)}getScenePoint(t){return this._absolutePointer?this._absolutePointer:this.getPointer(t)}getPointer(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=this.upperCanvasEl,i=n.getBoundingClientRect(),r=_0(t),o=i.width||0,a=i.height||0;o&&a||(Vn in i&&af in i&&(a=Math.abs(i.top-i.bottom)),Ye in i&&Te in i&&(o=Math.abs(i.right-i.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,e||(r=vs(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=o===0||a===0?new st(1,1):new st(n.width/o,n.height/a);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=ts(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return Cr(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,i=!1,r=this.getActiveObjects(),o=[],a=[];t.forEach((l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),a.push(l))})),r.forEach((l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),o.push(l))})),t.length>0&&r.length>0?(i=!0,n&&this.fire("selection:updated",{e,selected:o,deselected:a})):r.length>0?(i=!0,this.fire("selection:created",{e,selected:o})):t.length>0&&(i=!0,this.fire("selection:cleared",{e,deselected:a})),i&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),i=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),i}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,Cr(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),Cr(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let i=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),i}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,i={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",i),n.fire(Ah,i))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;Cr(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let i=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(i),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&Cr(e)&&this._activeObject===e){let n=Qr(t,["angle","flipX","flipY",Te,Fn,ei,ta,ea,Vn]);return x0(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let i=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(i)}};W(qh,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!1});var Tf=class{constructor(t){W(this,"targets",[]),W(this,"__disposer",void 0);let e=()=>{let{hiddenTextarea:i}=t.getActiveObject()||{};i&&i.focus()},n=t.upperCanvasEl;n.addEventListener("click",e),this.__disposer=()=>n.removeEventListener("click",e)}exitTextEditing(){this.target=void 0,this.targets.forEach((t=>{t.isEditing&&t.exitEditing()}))}add(t){this.targets.push(t)}remove(t){this.unregister(t),Tr(this.targets,t)}register(t){this.target=t}unregister(t){t===this.target&&(this.target=void 0)}onMouseMove(t){var e;!((e=this.target)===null||e===void 0)&&e.isEditing&&this.target.updateSelectionOnMouseMove(t)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},UM=["target","oldTarget","fireCanvas","e"],$n={passive:!1},Uo=(s,t)=>{let e=s.getViewportPoint(t),n=s.getScenePoint(t);return{viewportPoint:e,scenePoint:n,pointer:e,absolutePointer:n}},Zs=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.addEventListener(...e)},hi=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.removeEventListener(...e)},kM={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},$o=class extends qh{constructor(t){super(t,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}),W(this,"_isClick",void 0),W(this,"textEditingManager",new Tf(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach((e=>{this[e]=this[e].bind(this)})),this.addOrRemove(Zs,"add")}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(t,e){let n=this.upperCanvasEl,i=this._getEventPrefix();t(m0(n),"resize",this._onResize),t(n,i+"down",this._onMouseDown),t(n,"".concat(i,"move"),this._onMouseMove,$n),t(n,"".concat(i,"out"),this._onMouseOut),t(n,"".concat(i,"enter"),this._onMouseEnter),t(n,"wheel",this._onMouseWheel,{passive:!1}),t(n,"contextmenu",this._onContextMenu),t(n,"click",this._onClick),t(n,"dblclick",this._onClick),t(n,"dragstart",this._onDragStart),t(n,"dragend",this._onDragEnd),t(n,"dragover",this._onDragOver),t(n,"dragenter",this._onDragEnter),t(n,"dragleave",this._onDragLeave),t(n,"drop",this._onDrop),this.enablePointerEvents||t(n,"touchstart",this._onTouchStart,$n)}removeListeners(){this.addOrRemove(hi,"remove");let t=this._getEventPrefix(),e=Ri(this.upperCanvasEl);hi(e,"".concat(t,"up"),this._onMouseUp),hi(e,"touchend",this._onTouchEnd,$n),hi(e,"".concat(t,"move"),this._onMouseMove,$n),hi(e,"touchmove",this._onMouseMove,$n),clearTimeout(this._willAddMouseDown)}_onMouseWheel(t){this.__onMouseWheel(t)}_onMouseOut(t){let e=this._hoveredTarget,n=G({e:t},Uo(this,t));this.fire("mouse:out",G(G({},n),{},{target:e})),this._hoveredTarget=void 0,e&&e.fire("mouseout",G({},n)),this._hoveredTargets.forEach((i=>{this.fire("mouse:out",G(G({},n),{},{target:i})),i&&i.fire("mouseout",G({},n))})),this._hoveredTargets=[]}_onMouseEnter(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",G({e:t},Uo(this,t))),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(t){this._isClick=!1;let e=this.getActiveObject();if(e&&e.onDragStart(t)){this._dragSource=e;let n={e:t,target:e};return this.fire("dragstart",n),e.fire("dragstart",n),void Zs(this.upperCanvasEl,"drag",this._onDragProgress)}Cg(t)}_renderDragEffects(t,e,n){let i=!1,r=this._dropTarget;r&&r!==e&&r!==n&&(r.clearContextTop(),i=!0),e?.clearContextTop(),n!==e&&n?.clearContextTop();let o=this.contextTop;o.save(),o.transform(...this.viewportTransform),e&&(o.save(),e.transform(o),e.renderDragSourceEffect(t),o.restore(),i=!0),n&&(o.save(),n.transform(o),n.renderDropTargetEffect(t),o.restore(),i=!0),o.restore(),i&&(this.contextTopDirty=!0)}_onDragEnd(t){let e=!!t.dataTransfer&&t.dataTransfer.dropEffect!==Gn,n=e?this._activeObject:void 0,i={e:t,target:this._dragSource,subTargets:this.targets,dragSource:this._dragSource,didDrop:e,dropTarget:n};hi(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",i),this._dragSource&&this._dragSource.fire("dragend",i),delete this._dragSource,this._onMouseUp(t)}_onDragProgress(t){let e={e:t,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",e),this._dragSource&&this._dragSource.fire("drag",e)}findDragTargets(t){return this.targets=[],{target:this._searchPossibleTargets(this._objects,this.getViewportPoint(t)),targets:[...this.targets]}}_onDragOver(t){let e="dragover",{target:n,targets:i}=this.findDragTargets(t),r=this._dragSource,o={e:t,target:n,subTargets:i,dragSource:r,canDrop:!1,dropTarget:void 0},a;this.fire(e,o),this._fireEnterLeaveEvents(n,o),n&&(n.canDrop(t)&&(a=n),n.fire(e,o));for(let l=0;l<i.length;l++){let c=i[l];c.canDrop(t)&&(a=c),c.fire(e,o)}this._renderDragEffects(t,r,a),this._dropTarget=a}_onDragEnter(t){let{target:e,targets:n}=this.findDragTargets(t),i={e:t,target:e,subTargets:n,dragSource:this._dragSource};this.fire("dragenter",i),this._fireEnterLeaveEvents(e,i)}_onDragLeave(t){let e={e:t,target:this._draggedoverTarget,subTargets:this.targets,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(void 0,e),this._renderDragEffects(t,this._dragSource),this._dropTarget=void 0,this.targets=[],this._hoveredTargets=[]}_onDrop(t){let{target:e,targets:n}=this.findDragTargets(t),i=this._basicEventHandler("drop:before",G({e:t,target:e,subTargets:n,dragSource:this._dragSource},Uo(this,t)));i.didDrop=!1,i.dropTarget=void 0,this._basicEventHandler("drop",i),this.fire("drop:after",i)}_onContextMenu(t){let e=this.findTarget(t),n=this.targets||[],i=this._basicEventHandler("contextmenu:before",{e:t,target:e,subTargets:n});return this.stopContextMenu&&Cg(t),this._basicEventHandler("contextmenu",i),!1}_onClick(t){let e=t.detail;e>3||e<2||(this._cacheTransformEventData(t),e==2&&t.type==="dblclick"&&this._handleEvent(t,"dblclick"),e==3&&this._handleEvent(t,"tripleclick"),this._resetTransformEventData())}getPointerId(t){let e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1}_isMainEvent(t){return t.isPrimary===!0||t.isPrimary!==!1&&(t.type==="touchend"&&t.touches.length===0||!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(t){let e=!this.allowTouchScrolling,n=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(t)),this.__onMouseDown(t),(this.isDrawingMode||n&&this._target===n)&&(e=!0),e&&t.preventDefault(),this._resetTransformEventData();let i=this.upperCanvasEl,r=this._getEventPrefix(),o=Ri(i);Zs(o,"touchend",this._onTouchEnd,$n),e&&Zs(o,"touchmove",this._onMouseMove,$n),hi(i,"".concat(r,"down"),this._onMouseDown)}_onMouseDown(t){this.__onMouseDown(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();hi(e,"".concat(n,"move"),this._onMouseMove,$n);let i=Ri(e);Zs(i,"".concat(n,"up"),this._onMouseUp),Zs(i,"".concat(n,"move"),this._onMouseMove,$n)}_onTouchEnd(t){if(t.touches.length>0)return;this.__onMouseUp(t),this._resetTransformEventData(),delete this.mainTouchId;let e=this._getEventPrefix(),n=Ri(this.upperCanvasEl);hi(n,"touchend",this._onTouchEnd,$n),hi(n,"touchmove",this._onMouseMove,$n),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout((()=>{Zs(this.upperCanvasEl,"".concat(e,"down"),this._onMouseDown),this._willAddMouseDown=0}),400)}_onMouseUp(t){this.__onMouseUp(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();if(this._isMainEvent(t)){let i=Ri(this.upperCanvasEl);hi(i,"".concat(n,"up"),this._onMouseUp),hi(i,"".concat(n,"move"),this._onMouseMove,$n),Zs(e,"".concat(n,"move"),this._onMouseMove,$n)}}_onMouseMove(t){let e=this.getActiveObject();!this.allowTouchScrolling&&(!e||!e.shouldStartDragging(t))&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(t){let e=this.getActiveObject();return!!e!=!!t||e&&t&&e!==t}__onMouseUp(t){var e;this._cacheTransformEventData(t),this._handleEvent(t,"up:before");let n=this._currentTransform,i=this._isClick,r=this._target,{button:o}=t;if(o)return(this.fireMiddleClick&&o===1||this.fireRightClick&&o===2)&&this._handleEvent(t,"up"),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(t);if(!this._isMainEvent(t))return;let a,l,c=!1;if(n&&(this._finalizeCurrentTransform(t),c=n.actionPerformed),!i){let h=r===this._activeObject;this.handleSelection(t),c||(c=this._shouldRender(r)||!h&&r===this._activeObject)}if(r){let h=r.findControl(this.getViewportPoint(t),Ih(t)),{key:u,control:d}=h||{};if(l=u,r.selectable&&r!==this._activeObject&&r.activeOn==="up")this.setActiveObject(r,t),c=!0;else if(d){let f=d.getMouseUpHandler(t,r,d);f&&(a=this.getScenePoint(t),f.call(d,t,n,a.x,a.y))}r.isMoving=!1}if(n&&(n.target!==r||n.corner!==l)){let h=n.target&&n.target.controls[n.corner],u=h&&h.getMouseUpHandler(t,n.target,h);a=a||this.getScenePoint(t),u&&u.call(h,t,n,a.x,a.y)}this._setCursorFromEvent(t,r),this._handleEvent(t,"up"),this._groupSelector=null,this._currentTransform=null,r&&(r.__corner=void 0),c?this.requestRenderAll():i||(e=this._activeObject)!==null&&e!==void 0&&e.isEditing||this.renderTop()}_basicEventHandler(t,e){let{target:n,subTargets:i=[]}=e;this.fire(t,e),n&&n.fire(t,e);for(let r=0;r<i.length;r++)i[r]!==n&&i[r].fire(t,e);return e}_handleEvent(t,e,n){let i=this._target,r=this.targets||[],o=G(G(G({e:t,target:i,subTargets:r},Uo(this,t)),{},{transform:this._currentTransform},e==="up:before"||e==="up"?{isClick:this._isClick,currentTarget:this.findTarget(t),currentSubTargets:this.targets}:{}),e==="down:before"||e==="down"?n:{});this.fire("mouse:".concat(e),o),i&&i.fire("mouse".concat(e),o);for(let a=0;a<r.length;a++)r[a]!==i&&r[a].fire("mouse".concat(e),o)}_onMouseDownInDrawingMode(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(t),this.requestRenderAll());let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(t){if(this._isCurrentlyDrawing){let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")}_onMouseUpInDrawingMode(t){let e=this.getScenePoint(t);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:t,pointer:e}):this._isCurrentlyDrawing=!1,this._handleEvent(t,"up")}__onMouseDown(t){this._isClick=!0,this._cacheTransformEventData(t),this._handleEvent(t,"down:before");let e=this._target,n=!!e&&e===this._activeObject,{button:i}=t;if(i)return(this.fireMiddleClick&&i===1||this.fireRightClick&&i===2)&&this._handleEvent(t,"down",{alreadySelected:n}),void this._resetTransformEventData();if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(t);if(!this._isMainEvent(t)||this._currentTransform)return;let r=this._shouldRender(e),o=!1;if(this.handleMultiSelection(t,e)?(e=this._activeObject,o=!0,r=!0):this._shouldClearSelection(t,e)&&this.discardActiveObject(t),this.selection&&(!e||!e.selectable&&!e.isEditing&&e!==this._activeObject)){let a=this.getScenePoint(t);this._groupSelector={x:a.x,y:a.y,deltaY:0,deltaX:0}}if(n=!!e&&e===this._activeObject,e){e.selectable&&e.activeOn==="down"&&this.setActiveObject(e,t);let a=e.findControl(this.getViewportPoint(t),Ih(t));if(e===this._activeObject&&(a||!o)){this._setupCurrentTransform(t,e,n);let l=a?a.control:void 0,c=this.getScenePoint(t),h=l&&l.getMouseDownHandler(t,e,l);h&&h.call(l,t,this._currentTransform,c.x,c.y)}}r&&(this._objectsToRender=void 0),this._handleEvent(t,"down",{alreadySelected:n}),r&&this.requestRenderAll()}_resetTransformEventData(){this._target=this._pointer=this._absolutePointer=void 0}_cacheTransformEventData(t){this._resetTransformEventData(),this._pointer=this.getViewportPoint(t),this._absolutePointer=vs(this._pointer,void 0,this.viewportTransform),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)}__onMouseMove(t){if(this._isClick=!1,this._cacheTransformEventData(t),this._handleEvent(t,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(t);if(!this._isMainEvent(t))return;let e=this._groupSelector;if(e){let n=this.getScenePoint(t);e.deltaX=n.x-e.x,e.deltaY=n.y-e.y,this.renderTop()}else if(this._currentTransform)this._transformObject(t);else{let n=this.findTarget(t);this._setCursorFromEvent(t,n),this._fireOverOutEvents(t,n)}this.textEditingManager.onMouseMove(t),this._handleEvent(t,"move"),this._resetTransformEventData()}_fireOverOutEvents(t,e){let n=this._hoveredTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("mouse",{e:t,target:e,oldTarget:n,fireCanvas:!0});for(let a=0;a<o;a++)r[a]===e||i[a]&&i[a]===n||this.fireSyntheticInOutEvents("mouse",{e:t,target:r[a],oldTarget:i[a]});this._hoveredTarget=e,this._hoveredTargets=this.targets.concat()}_fireEnterLeaveEvents(t,e){let n=this._draggedoverTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("drag",G(G({},e),{},{target:t,oldTarget:n,fireCanvas:!0}));for(let a=0;a<o;a++)this.fireSyntheticInOutEvents("drag",G(G({},e),{},{target:r[a],oldTarget:i[a]}));this._draggedoverTarget=t}fireSyntheticInOutEvents(t,e){let{target:n,oldTarget:i,fireCanvas:r,e:o}=e,a=ke(e,UM),{targetIn:l,targetOut:c,canvasIn:h,canvasOut:u}=kM[t],d=i!==n;if(i&&d){let f=G(G({},a),{},{e:o,target:i,nextTarget:n},Uo(this,o));r&&this.fire(u,f),i.fire(c,f)}if(n&&d){let f=G(G({},a),{},{e:o,target:n,previousTarget:i},Uo(this,o));r&&this.fire(h,f),n.fire(l,f)}}__onMouseWheel(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()}_transformObject(t){let e=this.getScenePoint(t),n=this._currentTransform,i=n.target,r=i.group?vs(e,void 0,i.group.calcTransformMatrix()):e;n.shiftKey=t.shiftKey,n.altKey=!!this.centeredKey&&t[this.centeredKey],this._performTransformAction(t,n,r),n.actionPerformed&&this.requestRenderAll()}_performTransformAction(t,e,n){let{action:i,actionHandler:r,target:o}=e,a=!!r&&r(t,e,n.x,n.y);a&&o.setCoords(),i==="drag"&&a&&(e.target.isMoving=!0,this.setCursor(e.target.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a}_setCursorFromEvent(t,e){if(!e)return void this.setCursor(this.defaultCursor);let n=e.hoverCursor||this.hoverCursor,i=Cr(this._activeObject)?this._activeObject:null,r=(!i||e.group!==i)&&e.findControl(this.getViewportPoint(t));if(r){let o=r.control;this.setCursor(o.cursorStyleHandler(t,o,e))}else e.subTargetCheck&&this.targets.concat().reverse().map((o=>{n=o.hoverCursor||n})),this.setCursor(n)}handleMultiSelection(t,e){let n=this._activeObject,i=Cr(n);if(n&&this._isSelectionKeyPressed(t)&&this.selection&&e&&e.selectable&&(n!==e||i)&&(i||!e.isDescendantOf(n)&&!n.isDescendantOf(e))&&!e.onSelect({e:t})&&!n.getActiveControl()){if(i){let r=n.getObjects();if(e===n){let o=this.getViewportPoint(t);if(!(e=this.searchPossibleTargets(r,o)||this.searchPossibleTargets(this._objects,o))||!e.selectable)return!1}e.group===n?(n.remove(e),this._hoveredTarget=e,this._hoveredTargets=[...this.targets],n.size()===1&&this._setActiveObject(n.item(0),t)):(n.multiSelectAdd(e),this._hoveredTarget=n,this._hoveredTargets=[...this.targets]),this._fireSelectionEvents(r,t)}else{n.isEditing&&n.exitEditing();let r=new(It.getClass("ActiveSelection"))([],{canvas:this});r.multiSelectAdd(n,e),this._hoveredTarget=r,this._setActiveObject(r,t),this._fireSelectionEvents([n],t)}return!0}return!1}handleSelection(t){if(!this.selection||!this._groupSelector)return!1;let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n),a=o.add(new st(i,r)),l=o.min(a),c=o.max(a).subtract(l),h=this.collectObjects({left:l.x,top:l.y,width:c.x,height:c.y},{includeIntersecting:!this.selectionFullyContained}),u=o.eq(a)?h[0]?[h[0]]:[]:h.length>1?h.filter((d=>!d.onSelect({e:t}))).reverse():h;if(u.length===1)this.setActiveObject(u[0],t);else if(u.length>1){let d=It.getClass("ActiveSelection");this.setActiveObject(new d(u,{canvas:this}),t)}return this._groupSelector=null,!0}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,{upper:n}=this.elements;n.ctx=void 0;let i=super.toCanvasElement(t,e);return n.ctx=n.el.getContext("2d"),i}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},f_={x1:0,y1:0,x2:0,y2:0},BM=G(G({},f_),{},{r1:0,r2:0}),Bo=(s,t)=>isNaN(s)&&typeof t=="number"?t:s;function p_(s){return s&&/%$/.test(s)&&Number.isFinite(parseFloat(s))}function m_(s,t){let e=typeof s=="number"?s:typeof s=="string"?parseFloat(s)/(p_(s)?100:1):NaN;return Kr(0,Bo(e,t),1)}var zM=/\s*;\s*/,VM=/\s*:\s*/;function GM(s,t){let e,n,i=s.getAttribute("style");if(i){let o=i.split(zM);o[o.length-1]===""&&o.pop();for(let a=o.length;a--;){let[l,c]=o[a].split(VM).map((h=>h.trim()));l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}let r=new Nn(e||s.getAttribute("stop-color")||"rgb(0,0,0)");return{offset:m_(s.getAttribute("offset"),0),color:r.toRgb(),opacity:Bo(parseFloat(n||s.getAttribute("stop-opacity")||""),1)*r.getAlpha()*t}}function HM(s,t){let e=[],n=s.getElementsByTagName("stop"),i=m_(t,1);for(let r=n.length;r--;)e.push(GM(n[r],i));return e}function g_(s){return s.nodeName==="linearGradient"||s.nodeName==="LINEARGRADIENT"?"linear":"radial"}function __(s){return s.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function Ai(s,t){return s.getAttribute(t)}function WM(s,t){return(function(e,n){let i,{width:r,height:o,gradientUnits:a}=n;return Object.entries(e).reduce(((l,c)=>{let[h,u]=c;if(u==="Infinity")i=1;else if(u==="-Infinity")i=0;else{let d=typeof u=="string";i=d?parseFloat(u):u,d&&p_(u)&&(i*=.01,a==="pixels"&&(h!=="x1"&&h!=="x2"&&h!=="r2"||(i*=r),h!=="y1"&&h!=="y2"||(i*=o)))}return l[h]=i,l}),{})})(g_(s)==="linear"?(function(e){return{x1:Ai(e,"x1")||0,y1:Ai(e,"y1")||0,x2:Ai(e,"x2")||"100%",y2:Ai(e,"y2")||0}})(s):(function(e){return{x1:Ai(e,"fx")||Ai(e,"cx")||"50%",y1:Ai(e,"fy")||Ai(e,"cy")||"50%",r1:0,x2:Ai(e,"cx")||"50%",y2:Ai(e,"cy")||"50%",r2:Ai(e,"r")||"50%"}})(s),G(G({},t),{},{gradientUnits:__(s)}))}var zo=class{constructor(t){let{type:e="linear",gradientUnits:n="pixels",coords:i={},colorStops:r=[],offsetX:o=0,offsetY:a=0,gradientTransform:l,id:c}=t||{};Object.assign(this,{type:e,gradientUnits:n,coords:G(G({},e==="radial"?BM:f_),i),colorStops:r,offsetX:o,offsetY:a,gradientTransform:l,id:c?"".concat(c,"_").concat(tr()):tr()})}addColorStop(t){for(let e in t){let n=new Nn(t[e]);this.colorStops.push({offset:parseFloat(e),color:n.toRgb(),opacity:n.getAlpha()})}return this}toObject(t){return G(G({},Qr(this,t)),{},{type:this.type,coords:G({},this.coords),colorStops:this.colorStops.map((e=>G({},e))),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0})}toSVG(t){let{additionalTransform:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],i=this.gradientTransform?this.gradientTransform.concat():Ln.concat(),r=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",o=this.colorStops.map((u=>G({},u))).sort(((u,d)=>u.offset-d.offset)),a=-this.offsetX,l=-this.offsetY;var c;r==="objectBoundingBox"?(a/=t.width,l/=t.height):(a+=t.width/2,l+=t.height/2),(c=t)&&typeof c._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(a-=t.pathOffset.x,l-=t.pathOffset.y),i[4]-=a,i[5]-=l;let h=['id="SVGID_'.concat(this.id,'"'),'gradientUnits="'.concat(r,'"'),'gradientTransform="'.concat(e?e+" ":"").concat(Zo(i),'"'),""].join(" ");if(this.type==="linear"){let{x1:u,y1:d,x2:f,y2:p}=this.coords;n.push("<linearGradient ",h,' x1="',u,'" y1="',d,'" x2="',f,'" y2="',p,`">
`)}else if(this.type==="radial"){let{x1:u,y1:d,x2:f,y2:p,r1:x,r2:m}=this.coords,g=x>m;n.push("<radialGradient ",h,' cx="',g?u:f,'" cy="',g?d:p,'" r="',g?x:m,'" fx="',g?f:u,'" fy="',g?p:d,`">
`),g&&(o.reverse(),o.forEach((A=>{A.offset=1-A.offset})));let S=Math.min(x,m);if(S>0){let A=S/Math.max(x,m);o.forEach((w=>{w.offset+=A*(1-w.offset)}))}}return o.forEach((u=>{let{color:d,offset:f,opacity:p}=u;n.push("<stop ",'offset="',100*f+"%",'" style="stop-color:',d,p!==void 0?";stop-opacity: "+p:";",`"/>
`)})),n.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),n.join("")}toLive(t){let{x1:e,y1:n,x2:i,y2:r,r1:o,r2:a}=this.coords,l=this.type==="linear"?t.createLinearGradient(e,n,i,r):t.createRadialGradient(e,n,o,i,r,a);return this.colorStops.forEach((c=>{let{color:h,opacity:u,offset:d}=c;l.addColorStop(d,u!==void 0?new Nn(h).setAlpha(u).toRgba():h)})),l}static async fromObject(t){let{colorStops:e,gradientTransform:n}=t;return new this(G(G({},t),{},{colorStops:e?e.map((i=>G({},i))):void 0,gradientTransform:n?[...n]:void 0}))}static fromElement(t,e,n){let i=__(t),r=e._findCenterFromElement();return new this(G({id:t.getAttribute("id")||void 0,type:g_(t),coords:WM(t,{width:n.viewBoxWidth||n.width,height:n.viewBoxHeight||n.height}),colorStops:HM(t,n.opacity),gradientUnits:i,gradientTransform:yf(t.getAttribute("gradientTransform")||"")},i==="pixels"?{offsetX:e.width/2-r.x,offsetY:e.height/2-r.y}:{offsetX:0,offsetY:0}))}};W(zo,"type","Gradient"),It.setClass(zo,"gradient"),It.setClass(zo,"linear"),It.setClass(zo,"radial");var XM=["type","source","patternTransform"],qr=class{get type(){return"pattern"}set type(t){$s("warn","Setting type has no effect",t)}constructor(t){W(this,"repeat","repeat"),W(this,"offsetX",0),W(this,"offsetY",0),W(this,"crossOrigin",""),this.id=tr(),Object.assign(this,t)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(t){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?t.createPattern(this.source,this.repeat):null}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{repeat:e,crossOrigin:n}=this;return G(G({},Qr(this,t)),{},{type:"pattern",source:this.sourceToString(),repeat:e,crossOrigin:n,offsetX:Ie(this.offsetX,ge.NUM_FRACTION_DIGITS),offsetY:Ie(this.offsetY,ge.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null})}toSVG(t){let{width:e,height:n}=t,{source:i,repeat:r,id:o}=this,a=Bo(this.offsetX/e,0),l=Bo(this.offsetY/n,0),c=r==="repeat-y"||r==="no-repeat"?1+Math.abs(a||0):Bo(i.width/e,0),h=r==="repeat-x"||r==="no-repeat"?1+Math.abs(l||0):Bo(i.height/n,0);return['<pattern id="SVGID_'.concat(o,'" x="').concat(a,'" y="').concat(l,'" width="').concat(c,'" height="').concat(h,'">'),'<image x="0" y="0" width="'.concat(i.width,'" height="').concat(i.height,'" xlink:href="').concat(this.sourceToString(),'"></image>'),"</pattern>",""].join(`
`)}static async fromObject(t,e){let{type:n,source:i,patternTransform:r}=t,o=ke(t,XM),a=await nl(i,G(G({},e),{},{crossOrigin:o.crossOrigin}));return new this(G(G({},o),{},{patternTransform:r&&r.slice(0),source:a}))}};W(qr,"type","Pattern"),It.setClass(qr),It.setClass(qr,"pattern");var jM=["path","left","top"],YM=["d"],Ji=class s extends cn{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{path:n,left:i,top:r}=e,o=ke(e,jM);super(),Object.assign(this,s.ownDefaults),this.setOptions(o),this._setPath(t||[],!0),typeof i=="number"&&this.set(Te,i),typeof r=="number"&&this.set(Vn,r)}_setPath(t,e){this.path=r_(Array.isArray(t)?t:u_(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new st(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let i of this.path)switch(i[0]){case"L":t.lineTo(i[1]+e,i[2]+n);break;case"M":t.moveTo(i[1]+e,i[2]+n);break;case"C":t.bezierCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n,i[5]+e,i[6]+n);break;case"Q":t.quadraticCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return"#<Path (".concat(this.complexity(),'): { "top": ').concat(this.top,', "left": ').concat(this.left," }>")}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),{},{path:this.path.map((e=>e.slice()))})}toDatalessObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){let t=d_(this.path,ge.NUM_FRACTION_DIGITS);return["<path ","COMMON_PARTS",'d="'.concat(t,`" stroke-linecap="round" />
`)]}_getOffsetTransform(){let t=ge.NUM_FRACTION_DIGITS;return" translate(".concat(Ie(-this.pathOffset.x,t),", ").concat(Ie(-this.pathOffset.y,t),")")}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:i}=this._calcDimensions();this.set({width:e,height:n,pathOffset:i}),t&&this.setPositionByOrigin(i,ie,ie)}_calcBoundsFromPath(){let t=[],e=0,n=0,i=0,r=0;for(let o of this.path)switch(o[0]){case"L":i=o[1],r=o[2],t.push({x:e,y:n},{x:i,y:r});break;case"M":i=o[1],r=o[2],e=i,n=r;break;case"C":t.push(...Mf(i,r,o[1],o[2],o[3],o[4],o[5],o[6])),i=o[5],r=o[6];break;case"Q":t.push(...Mf(i,r,o[1],o[2],o[1],o[2],o[3],o[4])),i=o[3],r=o[4];break;case"Z":i=e,r=n}return $i(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return G(G({},t),{},{pathOffset:new st(t.left+t.width/2,t.top+t.height/2)})}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let i=bs(t,this.ATTRIBUTE_NAMES,n),{d:r}=i;return new this(r,G(G(G({},ke(i,YM)),e),{},{left:void 0,top:void 0}))}};W(Ji,"type","Path"),W(Ji,"cacheProperties",[...Ss,"path","fillRule"]),W(Ji,"ATTRIBUTE_NAMES",[...ir,"d"]),It.setClass(Ji),It.setSVGClass(Ji);var qM=["left","top","radius"],x_=["radius","startAngle","endAngle","counterClockwise"],Zi=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,Ge(this.startAngle),Ge(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(Fn)}getRadiusY(){return this.get("radius")*this.get(ei)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...x_,...t])}_toSVG(){let t=(this.endAngle-this.startAngle)%360;if(t===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',"".concat(this.radius),`" />
`];{let{radius:e}=this,n=Ge(this.startAngle),i=Ge(this.endAngle),r=Oi(n)*e,o=Li(n)*e,a=Oi(i)*e,l=Li(i)*e,c=t>180?1:0,h=this.counterClockwise?0:1;return['<path d="M '.concat(r," ").concat(o," A ").concat(e," ").concat(e," 0 ").concat(c," ").concat(h," ").concat(a," ").concat(l,'" '),"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let i=bs(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,radius:a=0}=i;return new this(G(G({},ke(i,qM)),{},{radius:a,left:r-a,top:o-a}))}static fromObject(t){return super._fromObject(t)}};W(Zi,"type","Circle"),W(Zi,"cacheProperties",[...Ss,...x_]),W(Zi,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),W(Zi,"ATTRIBUTE_NAMES",["cx","cy","r",...ir]),It.setClass(Zi),It.setSVGClass(Zi);var ZM=["x1","y1","x2","y2"],KM=["x1","y1","x2","y2"],Cf=["x1","x2","y1","y2"],Er=class s extends cn{constructor(){let[t,e,n,i]=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0,0,0],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=i,this._setWidthHeight();let{left:o,top:a}=r;typeof o=="number"&&this.set(Te,o),typeof a=="number"&&this.set(Vn,a)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:i}=this;this.width=Math.abs(n-t),this.height=Math.abs(i-e);let{left:r,top:o,width:a,height:l}=$i([{x:t,y:e},{x:n,y:i}]),c=new st(r+a/2,o+l/2);this.setPositionByOrigin(c,ie,ie)}_set(t,e){return super._set(t,e),Cf.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var i;di(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(i=this.stroke)!==null&&i!==void 0?i:t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new st((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),this.calcLinePoints())}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:i,width:r,height:o}=this,a=t<=e?-1:1,l=n<=i?-1:1;return{x1:a*r/2,x2:a*-r/2,y1:l*o/2,y2:l*-o/2}}_toSVG(){let{x1:t,x2:e,y1:n,y2:i}=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="'.concat(t,'" y1="').concat(n,'" x2="').concat(e,'" y2="').concat(i,`" />
`)]}static async fromElement(t,e,n){let i=bs(t,this.ATTRIBUTE_NAMES,n),{x1:r=0,y1:o=0,x2:a=0,y2:l=0}=i;return new this([r,o,a,l],ke(i,ZM))}static fromObject(t){let{x1:e,y1:n,x2:i,y2:r}=t,o=ke(t,KM);return this._fromObject(G(G({},o),{},{points:[e,n,i,r]}),{extraParam:"points"})}};W(Er,"type","Line"),W(Er,"cacheProperties",[...Ss,...Cf]),W(Er,"ATTRIBUTE_NAMES",ir.concat(Cf)),It.setClass(Er),It.setSVGClass(Er);var Vo=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',"".concat(-t," ").concat(e,",0 ").concat(-e,",").concat(t," ").concat(e),'" />']}};W(Vo,"type","Triangle"),W(Vo,"ownDefaults",{width:100,height:100}),It.setClass(Vo),It.setSVGClass(Vo);var v_=["rx","ry"],Ks=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(Fn)}getRy(){return this.get("ry")*this.get(ei)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...v_,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" rx="'.concat(this.rx,'" ry="').concat(this.ry,`" />
`)]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,ys,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let i=bs(t,this.ATTRIBUTE_NAMES,n);return i.left=(i.left||0)-i.rx,i.top=(i.top||0)-i.ry,new this(i)}};function JM(s){if(!s)return[];let t=s.replace(/,/g," ").trim().split(/\s+/),e=[];for(let n=0;n<t.length;n+=2)e.push({x:parseFloat(t[n]),y:parseFloat(t[n+1])});return e}W(Ks,"type","Ellipse"),W(Ks,"cacheProperties",[...Ss,...v_]),W(Ks,"ownDefaults",{rx:0,ry:0}),W(Ks,"ATTRIBUTE_NAMES",[...ir,"cx","cy","rx","ry"]),It.setClass(Ks),It.setSVGClass(Ks);var $M=["left","top"],y_={exactBoundingBox:!1},qi=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),W(this,"strokeDiff",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:i}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set(Te,n),typeof i=="number"&&this.set(Vn,i)}isOpen(){return!0}_projectStrokeOnPoints(t){return K0(this.points,t,this.isOpen())}_calcDimensions(t){t=G({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth},t||{});let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map((c=>c.projectedPoint)):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new st,strokeOffset:new st,strokeDiff:new st};let n=$i(e),i=ul(G(G({},t),{},{scaleX:1,scaleY:1})),r=$i(this.points.map((c=>Cn(c,i,!0)))),o=new st(this.scaleX,this.scaleY),a=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(a-=l*Math.tan(Ge(this.skewX)),l-=a*Math.tan(Ge(this.skewY))),G(G({},n),{},{pathOffset:new st(a,l),strokeOffset:new st(r.left,r.top).subtract(new st(n.left,n.top)).multiply(o),strokeDiff:new st(n.width,n.height).subtract(new st(r.width,r.height)).multiply(o)})}_findCenterFromElement(){let t=$i(this.points);return new st(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}=this._calcDimensions();this.set({width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}),t&&this.setPositionByOrigin(new st(e+i/2,n+r/2),ie,ie)}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new st(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.exactBoundingBox){let o;if(Object.keys(t).some((a=>this.strokeUniform||this.constructor.layoutProperties.includes(a)))){var e,n;let{width:a,height:l}=this._calcDimensions(t);o=new st((e=t.width)!==null&&e!==void 0?e:a,(n=t.height)!==null&&n!==void 0?n:l)}else{var i,r;o=new st((i=t.width)!==null&&i!==void 0?i:this.width,(r=t.height)!==null&&r!==void 0?r:this.height)}return o.multiply(new st(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,i=super._set(t,e);return this.exactBoundingBox&&n&&((t===Fn||t===ei)&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),i}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),{},{points:this.points.map((e=>{let{x:n,y:i}=e;return{x:n,y:i}}))})}_toSVG(){let t=[],e=this.pathOffset.x,n=this.pathOffset.y,i=ge.NUM_FRACTION_DIGITS;for(let r=0,o=this.points.length;r<o;r++)t.push(Ie(this.points[r].x-e,i),",",Ie(this.points[r].y-n,i)," ");return["<".concat(this.constructor.type.toLowerCase()," "),"COMMON_PARTS",'points="'.concat(t.join(""),`" />
`)]}_render(t){let e=this.points.length,n=this.pathOffset.x,i=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-i);for(let r=0;r<e;r++){let o=this.points[r];t.lineTo(o.x-n,o.y-i)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){return new this(JM(t.getAttribute("points")),G(G({},ke(bs(t,this.ATTRIBUTE_NAMES,n),$M)),e))}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};W(qi,"ownDefaults",y_),W(qi,"type","Polyline"),W(qi,"layoutProperties",[ta,ea,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),W(qi,"cacheProperties",[...Ss,"points"]),W(qi,"ATTRIBUTE_NAMES",[...ir]),It.setClass(qi),It.setSVGClass(qi);var Go=class extends qi{isOpen(){return!1}};W(Go,"ownDefaults",y_),W(Go,"type","Polygon"),It.setClass(Go),It.setSVGClass(Go);var Zh=class extends cn{isEmptyStyles(t){if(!this.styles||t!==void 0&&!this.styles[t])return!0;let e=t===void 0?this.styles:{line:this.styles[t]};for(let n in e)for(let i in e[n])for(let r in e[n][i])return!1;return!0}styleHas(t,e){if(!this.styles||e!==void 0&&!this.styles[e])return!1;let n=e===void 0?this.styles:{0:this.styles[e]};for(let i in n)for(let r in n[i])if(n[i][r][t]!==void 0)return!0;return!1}cleanStyle(t){if(!this.styles)return!1;let e=this.styles,n,i,r=0,o=!0,a=0;for(let l in e){n=0;for(let c in e[l]){let h=e[l][c]||{};r++,h[t]!==void 0?(i?h[t]!==i&&(o=!1):i=h[t],h[t]===this[t]&&delete h[t]):o=!1,Object.keys(h).length!==0?n++:delete e[l][c]}n===0&&delete e[l]}for(let l=0;l<this._textLines.length;l++)a+=this._textLines[l].length;o&&r===a&&(this[t]=i,this.removeStyle(t))}removeStyle(t){if(!this.styles)return;let e=this.styles,n,i,r;for(i in e){for(r in n=e[i],n)delete n[r][t],Object.keys(n[r]).length===0&&delete n[r];Object.keys(n).length===0&&delete e[i]}}_extendStyles(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);this._getLineStyle(n)||this._setLineStyle(n);let r=Wf(G(G({},this._getStyleDeclaration(n,i)),e),(o=>o!==void 0));this._setStyleDeclaration(n,i,r)}getSelectionStyles(t,e,n){let i=[];for(let r=t;r<(e||t);r++)i.push(this.getStyleAtPosition(r,n));return i}getStyleAtPosition(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);return e?this.getCompleteStyleDeclaration(n,i):this._getStyleDeclaration(n,i)}setSelectionStyles(t,e,n){for(let i=e;i<(n||e);i++)this._extendStyles(i,t);this._forceClearCache=!0}_getStyleDeclaration(t,e){var n;let i=this.styles&&this.styles[t];return i&&(n=i[e])!==null&&n!==void 0?n:{}}getCompleteStyleDeclaration(t,e){return G(G({},Qr(this,this.constructor._styleProperties)),this._getStyleDeclaration(t,e))}_setStyleDeclaration(t,e,n){this.styles[t][e]=n}_deleteStyleDeclaration(t,e){delete this.styles[t][e]}_getLineStyle(t){return!!this.styles[t]}_setLineStyle(t){this.styles[t]={}}_deleteLineStyle(t){delete this.styles[t]}};W(Zh,"_styleProperties",P1);var QM=/  +/g,tw=/"/g;function Qd(s,t,e,n,i){return"		".concat((function(r,o){let{left:a,top:l,width:c,height:h}=o,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ge.NUM_FRACTION_DIGITS,d=ol(tn,r,!1),[f,p,x,m]=[a,l,c,h].map((g=>Ie(g,u)));return"<rect ".concat(d,' x="').concat(f,'" y="').concat(p,'" width="').concat(x,'" height="').concat(m,'"></rect>')})(s,{left:t,top:e,width:n,height:i}),`
`)}var ew=["textAnchor","textDecoration","dx","dy","top","left","fontSize","strokeWidth"],tf,je=class s extends Zh{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),W(this,"__charBounds",[]),Object.assign(this,s.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=np(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes(Ki)&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,i,r,o,a;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign===Ki||l!==c-1&&!this.isEndOfWrapping(l))&&(i=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(a=this.textLines[l].match(this._reSpacesAndTabs)))){n=a.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)o=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(o.width+=t,o.kernedWidth+=t,o.left+=i,i+=t):o.left+=i}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,i;for(i=0;i<n.length;i++){if(t<=n[i].length)return{lineIndex:i,charIndex:t};t-=n[i].length+this.missingNewlineOffset(i,e)}return{lineIndex:i-1,charIndex:n[i-1].length<t?n[i-1].length:t}}toString(){return"#<Text (".concat(this.complexity(),'): { "text": "').concat(this.text,'", "fontFamily": "').concat(this.fontFamily,'" }>')}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst===Hn?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case ie:t.textBaseline="middle";break;case"ascender":t.textBaseline=Vn;break;case"descender":t.textBaseline=af}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let i=this.getLineWidth(e);i>t&&(t=i)}return t}_renderTextLine(t,e,n,i,r,o){this._renderChars(t,e,n,i,r,o)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),i=this._getTopOffset();for(let r=0,o=this._textLines.length;r<o;r++){let a=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){i+=a;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,u,d=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),x=this.getHeightOfLineImpl(r);for(let m=0;m<l;m++){let g=this.__charBounds[r][m];u=this.getValueOfPropertyAt(r,m,"textBackgroundColor"),this.path?(t.save(),t.translate(g.renderLeft,g.renderTop),t.rotate(g.angle),t.fillStyle=u,u&&t.fillRect(-g.width/2,-x*(1-this._fontSizeFraction),g.width,x),t.restore()):u!==p?(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=p,p&&t.fillRect(h,i,d,x),f=g.left,d=g.width,p=u):d+=g.kernedWidth}u&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=u,t.fillRect(h,i,d,x)),i+=a}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,i){let r=tl.getFontCache(e),o=this._getFontDeclaration(e),a=n?n+t:t,l=n&&o===this._getFontDeclaration(i),c=e.fontSize/this.CACHE_FONT_SIZE,h,u,d,f;if(n&&r.has(n)&&(d=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(a)&&(u=r.get(a),f=u-d),h===void 0||d===void 0||u===void 0){let p=(function(){return tf||(tf=ni({width:0,height:0}).getContext("2d")),tf})();this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),d===void 0&&l&&n&&(d=p.measureText(n).width,r.set(n,d)),l&&u===void 0&&(u=p.measureText(a).width,r.set(a,u),f=u-d)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,i=0,r=this.pathSide===Ye,o=this.path,a=this._textLines[t],l=a.length,c=new Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let u=a[h];n=this._getGraphemeBox(u,t,h,e),c[h]=n,i+=n.kernedWidth,e=u}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},o&&o.segmentsInfo){let h=0,u=o.segmentsInfo[o.segmentsInfo.length-1].length;switch(this.textAlign){case Te:h=r?u-i:0;break;case ie:h=(u-i)/2;break;case Ye:h=r?0:u-i}h+=this.pathStartOffset*(r?-1:1);for(let d=r?l-1:0;r?d>=0:d<l;r?d--:d++)n=c[d],h>u?h%=u:h<0&&(h+=u),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:i,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,i=this.path,r=h_(i.path,n,i.segmentsInfo);e.renderLeft=r.x-i.pathOffset.x,e.renderTop=r.y-i.pathOffset.y,e.angle=r.angle+(this.pathSide===Ye?Math.PI:0)}_getGraphemeBox(t,e,n,i,r){let o=this.getCompleteStyleDeclaration(e,n),a=i?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,o,i,a),c,h=l.kernedWidth,u=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,h+=c);let d={width:u,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];d.left=f.left+f.width+l.kernedWidth-l.width}return d}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let i=1,r=this._textLines[t].length;i<r;i++)n=Math.max(this.getHeightOfChar(t,i),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,i=this._getLeftOffset(),r=this._getTopOffset();for(let o=0,a=this._textLines.length;o<a;o++)this._renderTextLine(e,t,this._textLines[o],i+this._getLineLeftOffset(o),r+n+this.getHeightOfLineImpl(o),o),n+=this.getHeightOfLine(o);t.restore()}_renderTextFill(t){(this.fill||this.styleHas(tn))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,i,r,o){let a=this.textAlign.includes(Ki),l=this.path,c=!a&&this.charSpacing===0&&this.isEmptyStyles(o)&&!l,h=this.direction==="ltr",u=this.direction==="ltr"?1:-1,d=e.direction,f,p,x,m,g,S="",A=0;if(e.save(),d!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?Te:Ye),r-=this.getHeightOfLineImpl(o)*this._fontSizeFraction,c)return this._renderChar(t,e,o,0,n.join(""),i,r),void e.restore();for(let w=0,E=n.length-1;w<=E;w++)m=w===E||this.charSpacing||l,S+=n[w],x=this.__charBounds[o][w],A===0?(i+=u*(x.kernedWidth-x.width),A+=x.width):A+=x.kernedWidth,a&&!m&&this._reSpaceAndTab.test(n[w])&&(m=!0),m||(f=f||this.getCompleteStyleDeclaration(o,w),p=this.getCompleteStyleDeclaration(o,w+1),m=hu(f,p,!1)),m&&(l?(e.save(),e.translate(x.renderLeft,x.renderTop),e.rotate(x.angle),this._renderChar(t,e,o,w,S,-A/2,0),e.restore()):(g=i,this._renderChar(t,e,o,w,S,g,r)),S="",f=p,i+=u*A,A=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,i=ni({width:e,height:n}),r=i.getContext("2d");return i.width=e,i.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(i,"no-repeat")}handleFiller(t,e,n){let i,r;return di(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(i=-this.width/2,r=-this.height/2,t.translate(i,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:i,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,e){let{stroke:n,strokeWidth:i}=e;return t.lineWidth=i,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",n)}_setFillStyles(t,e){let{fill:n}=e;return this.handleFiller(t,"fillStyle",n)}_renderChar(t,e,n,i,r,o,a){let l=this._getStyleDeclaration(n,i),c=this.getCompleteStyleDeclaration(n,i),h=t==="fillText"&&c.fill,u=t==="strokeText"&&c.stroke&&c.strokeWidth;if(u||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(a+=l.deltaY),h){let d=this._setFillStyles(e,c);e.fillText(r,o-d.offsetX,a-d.offsetY)}if(u){let d=this._setStrokeStyles(e,c);e.strokeText(r,o-d.offsetX,a-d.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let i=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"fontSize"),o=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"deltaY"),a={fontSize:r*n.size,deltaY:o+r*n.baseline};this.setSelectionStyles(a,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,i=this.textAlign,r=this.direction,o=this.isEndOfWrapping(t),a=0;return i===Ki||i===sl&&!o||i===il&&!o||i===Nh&&!o?0:(i===ie&&(a=n/2),i===Ye&&(a=n),i===sl&&(a=n/2),i===il&&(a=n),r==="rtl"&&(i===Ye||i===Ki||i===il?a=0:i===Te||i===Nh?a=-n:i!==ie&&i!==sl||(a=-n/2)),a)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing!==0?this.fontSize*this.charSpacing/1e3:0}getValueOfPropertyAt(t,e,n){var i;return(i=this._getStyleDeclaration(t,e)[n])!==null&&i!==void 0?i:this[n]}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),i=this._getLeftOffset(),r=this.path,o=this._getWidthOfCharSpacing(),a=e==="linethrough"?.5:e==="overline"?1:0,l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let u=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=u;continue}let d=this._textLines[c],f=u/this.lineHeight,p=this._getLineLeftOffset(c),x=0,m=0,g=this.getValueOfPropertyAt(c,0,e),S=this.getValueOfPropertyAt(c,0,tn),A=this.getValueOfPropertyAt(c,0,Zr),w=g,E=S,R=A,_=n+f*(1-this._fontSizeFraction),v=this.getHeightOfChar(c,0),T=this.getValueOfPropertyAt(c,0,"deltaY");for(let F=0,z=d.length;F<z;F++){let I=this.__charBounds[c][F];w=this.getValueOfPropertyAt(c,F,e),E=this.getValueOfPropertyAt(c,F,tn),R=this.getValueOfPropertyAt(c,F,Zr);let X=this.getHeightOfChar(c,F),q=this.getValueOfPropertyAt(c,F,"deltaY");if(r&&w&&E){let U=this.fontSize*R/1e3;t.save(),t.fillStyle=S,t.translate(I.renderLeft,I.renderTop),t.rotate(I.angle),t.fillRect(-I.kernedWidth/2,l*X+q-a*U,I.kernedWidth,U),t.restore()}else if((w!==g||E!==S||X!==v||R!==A||q!==T)&&m>0){let U=this.fontSize*A/1e3,et=i+p+x;this.direction==="rtl"&&(et=this.width-et-m),g&&S&&A&&(t.fillStyle=S,t.fillRect(et,_+l*v+T-a*U,m,U)),x=I.left,m=I.width,g=w,A=R,S=E,v=X,T=q}else m+=I.kernedWidth}let C=i+p+x;this.direction==="rtl"&&(C=this.width-C-m),t.fillStyle=E;let P=this.fontSize*R/1e3;w&&E&&R&&t.fillRect(C,_+l*v+T-a*P,m-o,P),n+=u}this._removeShadow(t)}_getFontDeclaration(){let{fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:i=this.fontSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=t.includes("'")||t.includes('"')||t.includes(",")||s.genericFonts.includes(t.toLowerCase())?t:'"'.concat(t,'"');return[e,n,"".concat(r?this.CACHE_FONT_SIZE:i,"px"),o].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return cu(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=new Array(e.length),i=[`
`],r=[];for(let o=0;o<e.length;o++)n[o]=this.graphemeSplit(e[o]),r=r.concat(n[o],i);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject([...A0,...t])),{},{styles:$0(this.styles,this.text)},this.path?{path:this.path.toObject()}:{})}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let i=!1,r=!1;if(typeof t=="object")for(let o in t)o==="path"&&this.setPathInfo(),i=i||n.includes(o),r=r||o==="path";else i=n.includes(t),r=t==="path";return r&&this.setPathInfo(),i&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let i=bs(t,s.ATTRIBUTE_NAMES,n),r=G(G({},e),i),{textAnchor:o=Te,textDecoration:a="",dx:l=0,dy:c=0,top:h=0,left:u=0,fontSize:d=Nf,strokeWidth:f=1}=r,p=ke(r,ew),x=new this(Lh(t.textContent||"").trim(),G({left:u+l,top:h+c,underline:a.includes("underline"),overline:a.includes("overline"),linethrough:a.includes("line-through"),strokeWidth:0,fontSize:d},p)),m=x.getScaledHeight()/x.height,g=((x.height+x.strokeWidth)*x.lineHeight-x.height)*m,S=x.getScaledHeight()+g,A=0;return o===ie&&(A=x.getScaledWidth()/2),o===Ye&&(A=x.getScaledWidth()),x.set({left:x.left-A,top:x.top-(S-x.fontSize*(.07+x._fontSizeFraction))/x.lineHeight,strokeWidth:f}),x}static fromObject(t){return this._fromObject(G(G({},t),{},{styles:Q0(t.styles||{},t.text)}),{extraParam:"text"})}};W(je,"textLayoutProperties",E0),W(je,"cacheProperties",[...Ss,...A0]),W(je,"ownDefaults",D1),W(je,"type","Text"),W(je,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),W(je,"ATTRIBUTE_NAMES",ir.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-anchor")),q0(je,[class extends Fh{_toSVG(){let s=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(s.textTop,s.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(s){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:s,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:s,withShadow:!0,additionalTransform:Zo(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg(s){let{textBgRects:t,textSpans:e}=s,n=this.getSvgTextDecoration(this);return[t.join(""),'		<text xml:space="preserve" ','font-family="'.concat(this.fontFamily.replace(tw,"'"),'" '),'font-size="'.concat(this.fontSize,'" '),this.fontStyle?'font-style="'.concat(this.fontStyle,'" '):"",this.fontWeight?'font-weight="'.concat(this.fontWeight,'" '):"",n?'text-decoration="'.concat(n,'" '):"",this.direction==="rtl"?'direction="'.concat(this.direction,'" '):"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",e.join(""),`</text>
`]}_getSVGTextAndBg(s,t){let e=[],n=[],i,r=s;this.backgroundColor&&n.push(...Qd(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let o=0,a=this._textLines.length;o<a;o++)i=this._getLineLeftOffset(o),this.direction==="rtl"&&(i+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,t+i,r),this._setSVGTextLineText(e,o,t+i,r),r+=this.getHeightOfLine(o);return{textSpans:e,textBgRects:n}}_createTextCharSpan(s,t,e,n,i){let r=ge.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,s!==s.trim()||!!s.match(QM)),a=o?'style="'.concat(o,'"'):"",l=t.deltaY,c=l?' dy="'.concat(Ie(l,r),'" '):"",{angle:h,renderLeft:u,renderTop:d,width:f}=i,p="";if(u!==void 0){let x=f/2;h&&(p=' rotate="'.concat(Ie(es(h),r),'"'));let m=$r({angle:es(h)});m[4]=u,m[5]=d;let g=new st(-x,0).transform(m);e=g.x,n=g.y}return'<tspan x="'.concat(Ie(e,r),'" y="').concat(Ie(n,r),'" ').concat(c).concat(p).concat(a,">").concat(J0(s),"</tspan>")}_setSVGTextLineText(s,t,e,n){let i=this.getHeightOfLine(t),r=this.textAlign.includes(Ki),o=this._textLines[t],a,l,c,h,u,d="",f=0;n+=i*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,x=o.length-1;p<=x;p++)u=p===x||this.charSpacing||this.path,d+=o[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!u&&this._reSpaceAndTab.test(o[p])&&(u=!0),u||(a=a||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),u=hu(a,l,!0)),u&&(h=this._getStyleDeclaration(t,p),s.push(this._createTextCharSpan(d,h,e,n,c)),d="",a=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(s,t,e,n){let i=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,o,a=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<i.length;h++){let{left:u,width:d,kernedWidth:f}=this.__charBounds[t][h];o=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),o!==c?(c&&s.push(...Qd(c,e+l,n,a,r)),l=u,a=d,c=o):a+=f}o&&s.push(...Qd(c,e+l,n,a,r))}_getSVGLineTopOffset(s){let t,e=0;for(t=0;t<s;t++)e+=this.getHeightOfLine(t);let n=this.getHeightOfLine(t);return{lineTop:e,offset:(this._fontSizeMult-this._fontSizeFraction)*n/(this.lineHeight*this._fontSizeMult)}}getSvgStyles(s){return"".concat(super.getSvgStyles(s)," text-decoration-thickness: ").concat(Ie(this.textDecorationThickness*this.getObjectScaling().y/10,ge.NUM_FRACTION_DIGITS),"%; white-space: pre;")}getSvgSpanStyles(s,t){let{fontFamily:e,strokeWidth:n,stroke:i,fill:r,fontSize:o,fontStyle:a,fontWeight:l,deltaY:c,textDecorationThickness:h,linethrough:u,overline:d,underline:f}=s,p=this.getSvgTextDecoration({underline:f??this.underline,overline:d??this.overline,linethrough:u??this.linethrough}),x=h||this.textDecorationThickness;return[i?ol(Hn,i):"",n?"stroke-width: ".concat(n,"; "):"",e?"font-family: ".concat(e.includes("'")||e.includes('"')?e:"'".concat(e,"'"),"; "):"",o?"font-size: ".concat(o,"px; "):"",a?"font-style: ".concat(a,"; "):"",l?"font-weight: ".concat(l,"; "):"",p?"text-decoration: ".concat(p,"; text-decoration-thickness: ").concat(Ie(x*this.getObjectScaling().y/10,ge.NUM_FRACTION_DIGITS),"%; "):"",r?ol(tn,r):"",c?"baseline-shift: ".concat(-c,"; "):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(s){return["overline","underline","line-through"].filter((t=>s[t.replace("-","")])).join(" ")}}]),It.setClass(je),It.setSVGClass(je);var Ef=class{constructor(t){W(this,"target",void 0),W(this,"__mouseDownInPlace",!1),W(this,"__dragStartFired",!1),W(this,"__isDraggingOver",!1),W(this,"__dragStartSelection",void 0),W(this,"__dragImageDisposer",void 0),W(this,"_dispose",void 0),this.target=t;let e=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{e.forEach((n=>n())),this._dispose=void 0}}isPointerOverSelection(t){let e=this.target,n=e.getSelectionStartFromPointer(t);return e.isEditing&&n>=e.selectionStart&&n<=e.selectionEnd&&e.selectionStart<e.selectionEnd}start(t){return this.__mouseDownInPlace=this.isPointerOverSelection(t)}isActive(){return this.__mouseDownInPlace}end(t){let e=this.isActive();return e&&!this.__dragStartFired&&(this.target.setCursorByClick(t),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,e}getDragStartSelection(){return this.__dragStartSelection}setDragImage(t,e){var n;let{selectionStart:i,selectionEnd:r}=e,o=this.target,a=o.canvas,l=new st(o.flipX?-1:1,o.flipY?-1:1),c=o._getCursorBoundaries(i),h=new st(c.left+c.leftOffset,c.top+c.topOffset).multiply(l).transform(o.calcTransformMatrix()),u=a.getScenePoint(t).subtract(h),d=o.getCanvasRetinaScaling(),f=o.getBoundingRect(),p=h.subtract(new st(f.left,f.top)),x=a.viewportTransform,m=p.add(u).transform(x,!0),g=o.backgroundColor,S=Qf(o.styles);o.backgroundColor="";let A={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};o.setSelectionStyles(A,0,i),o.setSelectionStyles(A,r,o.text.length),o.dirty=!0;let w=o.toCanvasElement({enableRetinaScaling:a.enableRetinaScaling,viewportTransform:!0});o.backgroundColor=g,o.styles=S,o.dirty=!0,Yh(w,{position:"fixed",left:"".concat(-w.width,"px"),border:Gn,width:"".concat(w.width/d,"px"),height:"".concat(w.height/d,"px")}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{w.remove()},Ri(t.target||this.target.hiddenTextarea).body.appendChild(w),(n=t.dataTransfer)===null||n===void 0||n.setDragImage(w,m.x,m.y)}onDragStart(t){this.__dragStartFired=!0;let e=this.target,n=this.isActive();if(n&&t.dataTransfer){let i=this.__dragStartSelection={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd},r=e._text.slice(i.selectionStart,i.selectionEnd).join(""),o=G({text:e.text,value:r},i);t.dataTransfer.setData("text/plain",r),t.dataTransfer.setData("application/fabric",JSON.stringify({value:r,styles:e.getSelectionStyles(i.selectionStart,i.selectionEnd,!0)})),t.dataTransfer.effectAllowed="copyMove",this.setDragImage(t,o)}return e.abortCursorAnimation(),n}canDrop(t){if(this.target.editable&&!this.target.getActiveControl()&&!t.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let e=this.target.getSelectionStartFromPointer(t),n=this.__dragStartSelection;return e<n.selectionStart||e>n.selectionEnd}return!0}return!1}targetCanDrop(t){return this.target.canDrop(t)}dragEnterHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n&&(this.__isDraggingOver=!0)}dragOverHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n?this.__isDraggingOver=!0:this.__isDraggingOver&&!n&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(e.preventDefault(),t.canDrop=!0,t.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(t){var e;let{e:n}=t,i=n.defaultPrevented;this.__isDraggingOver=!1,n.preventDefault();let r=(e=n.dataTransfer)===null||e===void 0?void 0:e.getData("text/plain");if(r&&!i){let o=this.target,a=o.canvas,l=o.getSelectionStartFromPointer(n),{styles:c}=n.dataTransfer.types.includes("application/fabric")?JSON.parse(n.dataTransfer.getData("application/fabric")):{},h=r[Math.max(0,r.length-1)],u=0;if(this.__dragStartSelection){let d=this.__dragStartSelection.selectionStart,f=this.__dragStartSelection.selectionEnd;l>d&&l<=f?l=d:l>f&&(l-=f-d),o.removeChars(d,f),delete this.__dragStartSelection}o._reNewline.test(h)&&(o._reNewline.test(o._text[l])||l===o._text.length)&&(r=r.trimEnd()),t.didDrop=!0,t.dropTarget=o,o.insertChars(r,c,l),a.setActiveObject(o),o.enterEditing(n),o.selectionStart=Math.min(l+u,o._text.length),o.selectionEnd=Math.min(o.selectionStart+r.length,o._text.length),o.hiddenTextarea.value=o.text,o._updateTextarea(),o.hiddenTextarea.focus(),o.fire(Eh,{index:l+u,action:"drop"}),a.fire("text:changed",{target:o}),a.contextTopDirty=!0,a.requestRenderAll()}}dragEndHandler(t){let{e}=t;if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var n;let i=this.target,r=this.target.canvas,{selectionStart:o,selectionEnd:a}=this.__dragStartSelection,l=((n=e.dataTransfer)===null||n===void 0?void 0:n.dropEffect)||Gn;l===Gn?(i.selectionStart=o,i.selectionEnd=a,i._updateTextarea(),i.hiddenTextarea.focus()):(i.clearContextTop(),l==="move"&&(i.removeChars(o,a),i.selectionStart=i.selectionEnd=o,i.hiddenTextarea&&(i.hiddenTextarea.value=i.text),i._updateTextarea(),i.fire(Eh,{index:o,action:"dragend"}),r.fire("text:changed",{target:i}),r.requestRenderAll()),i.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},Jg=/[ \n\.,;!\?\-]/,Af=class extends je{constructor(){super(...arguments),W(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(t){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(t)}_animateCursor(t){let{toValue:e,duration:n,delay:i,onComplete:r}=t;return Kf({startValue:this._currentCursorOpacity,endValue:e,duration:n,delay:i,onComplete:r,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:o=>{this._currentCursorOpacity=o,this.renderCursorOrSelection()}})}_tick(t){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(t||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var t;(t=this._currentTickCompleteState)===null||t===void 0||t.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(t){this.abortCursorAnimation(),this._tick(t?0:this.cursorDelay)}abortCursorAnimation(){let t=!1;[this._currentTickState,this._currentTickCompleteState].forEach((e=>{e&&!e.isDone()&&(t=!0,e.abort())})),this._currentCursorOpacity=1,t&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some((t=>!t||t.isDone()))&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(t){let e=0,n=t-1;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n--;for(;/\S/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findWordBoundaryRight(t){let e=0,n=t;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n++;for(;/\S/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}findLineBoundaryLeft(t){let e=0,n=t-1;for(;!/\n/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findLineBoundaryRight(t){let e=0,n=t;for(;!/\n/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}searchWordBoundary(t,e){let n=this._text,i=t>0&&this._reSpace.test(n[t])&&(e===-1||!Uf.test(n[t-1]))?t-1:t,r=n[i];for(;i>0&&i<n.length&&!Jg.test(r);)i+=e,r=n[i];return e===-1&&Jg.test(r)&&i++,i}selectWord(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.searchWordBoundary(t,-1),i=Math.max(n,this.searchWordBoundary(t,1));this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(t){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",t?{e:t}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:t}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(t){if(this.getActiveControl())return;let e=this.hiddenTextarea;Ri(e).activeElement!==e&&e.focus();let n=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;(n===this.__selectionStartOnMouseDown&&i!==r||i!==n&&r!==n)&&(n>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=n):(this.selectionStart=n,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(t,e,n){let i=n.slice(0,t),r=this.graphemeSplit(i).length;if(t===e)return{selectionStart:r,selectionEnd:r};let o=n.slice(t,e);return{selectionStart:r,selectionEnd:r+this.graphemeSplit(o).length}}fromGraphemeToStringSelection(t,e,n){let i=n.slice(0,t).join("").length;return t===e?{selectionStart:i,selectionEnd:i}:{selectionStart:i,selectionEnd:i+n.slice(t,e).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){if(!this.hiddenTextarea)return;this.cursorOffsetCache={};let t=this.hiddenTextarea;this.text=t.value,this.set("dirty",!0),this.initDimensions(),this.setCoords();let e=this.fromStringToGraphemeSelection(t.selectionStart,t.selectionEnd,t.value);this.selectionEnd=this.selectionStart=e.selectionEnd,this.inCompositionMode||(this.selectionStart=e.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex,o=this.getValueOfPropertyAt(i,r,"fontSize")*this.lineHeight,a=e.leftOffset,l=this.getCanvasRetinaScaling(),c=this.canvas.upperCanvasEl,h=c.width/l,u=c.height/l,d=h-o,f=u-o,p=new st(e.left+a,e.top+e.topOffset+o).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new st(c.clientWidth/h,c.clientHeight/u));return p.x<0&&(p.x=0),p.x>d&&(p.x=d),p.y<0&&(p.y=0),p.y>f&&(p.y=f),p.x+=this.canvas._offset.left,p.y+=this.canvas._offset.top,{left:"".concat(p.x,"px"),top:"".concat(p.y,"px"),fontSize:"".concat(o,"px"),charHeight:o}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}_exitEditing(){let t=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,t&&(t.blur&&t.blur(),t.parentNode&&t.parentNode.removeChild(t)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop()}exitEditingImpl(){this._exitEditing(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let t=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),t&&this.fire(Ah),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let t in this.styles)this._textLines[t]||delete this.styles[t]}removeStyleFromTo(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t,!0),{lineIndex:r,charIndex:o}=this.get2DCursorLocation(e,!0);if(n!==r){if(this.styles[n])for(let a=i;a<this._unwrappedTextLines[n].length;a++)delete this.styles[n][a];if(this.styles[r])for(let a=o;a<this._unwrappedTextLines[r].length;a++){let l=this.styles[r][a];l&&(this.styles[n]||(this.styles[n]={}),this.styles[n][i+a-o]=l)}for(let a=n+1;a<=r;a++)delete this.styles[a];this.shiftLineStyles(r,n-r)}else if(this.styles[n]){let a=this.styles[n],l=o-i;for(let c=i;c<o;c++)delete a[c];for(let c in this.styles[n]){let h=parseInt(c,10);h>=o&&(a[h-l]=a[c],delete a[c])}}}shiftLineStyles(t,e){let n=Object.assign({},this.styles);for(let i in this.styles){let r=parseInt(i,10);r>t&&(this.styles[r+e]=n[r],n[r-e]||delete this.styles[r])}}insertNewlineStyleObject(t,e,n,i){let r={},o=this._unwrappedTextLines[t].length,a=o===e,l=!1;n||(n=1),this.shiftLineStyles(t,n);let c=this.styles[t]?this.styles[t][e===0?e:e-1]:void 0;for(let u in this.styles[t]){let d=parseInt(u,10);d>=e&&(l=!0,r[d-e]=this.styles[t][u],a&&e===0||delete this.styles[t][u])}let h=!1;for(l&&!a&&(this.styles[t+n]=r,h=!0),(h||o>e)&&n--;n>0;)i&&i[n-1]?this.styles[t+n]={0:G({},i[n-1])}:c?this.styles[t+n]={0:G({},c)}:delete this.styles[t+n],n--;this._forceClearCache=!0}insertCharStyleObject(t,e,n,i){this.styles||(this.styles={});let r=this.styles[t],o=r?G({},r):{};n||(n=1);for(let l in o){let c=parseInt(l,10);c>=e&&(r[c+n]=o[c],o[c-n]||delete r[c])}if(this._forceClearCache=!0,i){for(;n--;)Object.keys(i[n]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+n]=G({},i[n]));return}if(!r)return;let a=r[e?e-1:1];for(;a&&n--;)this.styles[t][e+n]=G({},a)}insertNewStyleBlock(t,e,n){let i=this.get2DCursorLocation(e,!0),r=[0],o,a=0;for(let l=0;l<t.length;l++)t[l]===`
`?(a++,r[a]=0):r[a]++;for(r[0]>0&&(this.insertCharStyleObject(i.lineIndex,i.charIndex,r[0],n),n=n&&n.slice(r[0]+1)),a&&this.insertNewlineStyleObject(i.lineIndex,i.charIndex+r[0],a),o=1;o<a;o++)r[o]>0?this.insertCharStyleObject(i.lineIndex+o,0,r[o],n):n&&this.styles[i.lineIndex+o]&&n[0]&&(this.styles[i.lineIndex+o][0]=n[0]),n=n&&n.slice(r[o]+1);r[o]>0&&this.insertCharStyleObject(i.lineIndex+o,0,r[o],n)}removeChars(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t+1;this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;i>n&&this.removeStyleFromTo(n,i);let r=this.graphemeSplit(t);this.insertNewStyleBlock(r,n,e),this._text=[...this._text.slice(0,n),...r,...this._text.slice(i)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(t,e,n){n<=t?(e===t?this._selectionDirection=Te:this._selectionDirection===Ye&&(this._selectionDirection=Te,this.selectionEnd=t),this.selectionStart=n):n>t&&n<e?this._selectionDirection===Ye?this.selectionEnd=n:this.selectionStart=n:(e===t?this._selectionDirection=Ye:this._selectionDirection===Te&&(this._selectionDirection=Ye,this.selectionStart=e),this.selectionEnd=n)}},Rf=class extends Af{initHiddenTextarea(){let t=this.canvas&&Ri(this.canvas.getElement())||Qo(),e=t.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map((o=>{let[a,l]=o;return e.setAttribute(a,l)}));let{top:n,left:i,fontSize:r}=this._calcTextareaPosition();e.style.cssText="position: absolute; top: ".concat(n,"; left: ").concat(i,"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r,";"),(this.hiddenTextareaContainer||t.body).appendChild(e),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map((o=>{let[a,l]=o;return e.addEventListener(a,this[l].bind(this))})),this.hiddenTextarea=e}blur(){this.abortCursorAnimation()}onKeyDown(t){if(!this.isEditing)return;let e=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(t.keyCode in e)this[e[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown)||!t.ctrlKey&&!t.metaKey)return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(t){let e=this.fromPaste,{value:n,selectionStart:i,selectionEnd:r}=this.hiddenTextarea;if(this.fromPaste=!1,t&&t.stopPropagation(),!this.isEditing)return;let o=()=>{this.updateFromTextArea(),this.fire(Eh),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void o();let a=this._splitTextIntoLines(n).graphemeText,l=this._text.length,c=a.length,h=this.selectionStart,u=this.selectionEnd,d=h!==u,f,p,x,m,g=c-l,S=this.fromStringToGraphemeSelection(i,r,n),A=h>S.selectionStart;d?(p=this._text.slice(h,u),g+=u-h):c<l&&(p=A?this._text.slice(u+g,u):this._text.slice(h,h-g));let w=a.slice(S.selectionEnd-g,S.selectionEnd);if(p&&p.length&&(w.length&&(f=this.getSelectionStyles(h,h+1,!1),f=w.map((()=>f[0]))),d?(x=h,m=u):A?(x=u-p.length,m=u):(x=u,m=u+p.length),this.removeStyleFromTo(x,m)),w.length){let{copyPasteData:E}=Qi();e&&w.join("")===E.copiedText&&!ge.disableStyleCopyPaste&&(f=E.copiedTextStyle),this.insertNewStyleBlock(w,h,f)}o()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate(t){let{target:e}=t,{selectionStart:n,selectionEnd:i}=e;this.compositionStart=n,this.compositionEnd=i,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:t}=Qi();t.copiedText=this.getSelectedText(),ge.disableStyleCopyPaste?t.copiedTextStyle=void 0:t.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(t,e){let n,i=this._getLineLeftOffset(t);return e>0&&(n=this.__charBounds[t][e-1],i+=n.left+n.width),i}getDownCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===this._textLines.length-1||t.metaKey||t.keyCode===34)return this._text.length-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r+1,a);return this._textLines[r].slice(o).length+l+1+this.missingNewlineOffset(r)}_getSelectionForOffset(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart}getUpCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===0||t.metaKey||t.keyCode===33)return-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r-1,a),c=this._textLines[r].slice(0,o),h=this.missingNewlineOffset(r-1);return-this._textLines[r-1].length+l-c.length+(1-h)}_getIndexOnLine(t,e){let n=this._textLines[t],i,r,o=this._getLineLeftOffset(t),a=0;for(let l=0,c=n.length;l<c;l++)if(i=this.__charBounds[t][l].width,o+=i,o>e){r=!0;let h=o-i,u=o,d=Math.abs(h-e);a=Math.abs(u-e)<d?l:l-1;break}return r||(a=n.length-1),a}moveCursorDown(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)}moveCursorUp(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",t)}_moveCursorUpOrDown(t,e){let n=this["get".concat(t,"CursorOffset")](e,this._selectionDirection===Ye);if(e.shiftKey?this.moveCursorWithShift(n):this.moveCursorWithoutShift(n),n!==0){let i=this.text.length;this.selectionStart=Kr(0,this.selectionStart,i),this.selectionEnd=Kr(0,this.selectionEnd,i),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(t){let e=this._selectionDirection===Te?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),t!==0}moveCursorWithoutShift(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),t!==0}moveCursorLeft(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",t)}_move(t,e,n){let i;if(t.altKey)i=this["findWordBoundary".concat(n)](this[e]);else{if(!t.metaKey&&t.keyCode!==35&&t.keyCode!==36)return this[e]+=n==="Left"?-1:1,!0;i=this["findLineBoundary".concat(n)](this[e])}return i!==void 0&&this[e]!==i&&(this[e]=i,!0)}_moveLeft(t,e){return this._move(t,e,"Left")}_moveRight(t,e){return this._move(t,e,"Right")}moveCursorLeftWithoutShift(t){let e=!0;return this._selectionDirection=Te,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e}moveCursorLeftWithShift(t){return this._selectionDirection===Ye&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):this.selectionStart!==0?(this._selectionDirection=Te,this._moveLeft(t,"selectionStart")):void 0}moveCursorRight(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)}_moveCursorLeftOrRight(t,e){let n="moveCursor".concat(t).concat(e.shiftKey?"WithShift":"WithoutShift");this._currentCursorOpacity=1,this[n](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(t){return this._selectionDirection===Te&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection=Ye,this._moveRight(t,"selectionEnd")):void 0}moveCursorRightWithoutShift(t){let e=!0;return this._selectionDirection=Ye,this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e}},$g=s=>!!s.button,Pf=class extends Rf{constructor(){super(...arguments),W(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new Ef(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(t){return this.draggableTextDelegate.onDragStart(t)}canDrop(t){return this.draggableTextDelegate.canDrop(t)}doubleClickHandler(t){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}tripleClickHandler(t){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}_mouseDownHandler(t){let{e,alreadySelected:n}=t;this.canvas&&this.editable&&!$g(e)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(e)||(this.canvas.textEditingManager.register(this),n&&(this.inCompositionMode=!1,this.setCursorByClick(e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=n||this.isEditing)))}mouseUpHandler(t){let{e,transform:n}=t,i=this.draggableTextDelegate.end(e);if(this.canvas){this.canvas.textEditingManager.unregister(this);let r=this.canvas._activeObject;if(r&&r!==this)return}!this.editable||this.group&&!this.group.interactive||n&&n.actionPerformed||$g(e)||i||this.selected&&!this.getActiveControl()&&(this.enterEditing(e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(t){let e=this.getSelectionStartFromPointer(t),n=this.selectionStart,i=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(n,i,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(t){let e=this.canvas.getScenePoint(t).transform(ti(this.calcTransformMatrix())).add(new st(-this._getLeftOffset(),-this._getTopOffset())),n=0,i=0,r=0;for(let c=0;c<this._textLines.length&&n<=e.y;c++)n+=this.getHeightOfLine(c),r=c,c>0&&(i+=this._textLines[c-1].length+this.missingNewlineOffset(c-1));let o=Math.abs(this._getLineLeftOffset(r)),a=this._textLines[r].length,l=this.__charBounds[r];for(let c=0;c<a;c++){let h=o+l[c].kernedWidth;if(e.x<=h){Math.abs(e.x-h)<=Math.abs(e.x-o)&&i++;break}o=h,i++}return Math.min(this.flipX?a-i:i,this._text.length)}},_h="moveCursorUp",xh="moveCursorDown",vh="moveCursorLeft",yh="moveCursorRight",Sh="exitEditing",Qg=(s,t)=>{let e=t.getRetinaScaling();s.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;s.transform(n[0],n[1],n[2],n[3],n[4],n[5])},nw=G({selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:Sh,27:Sh,33:_h,34:xh,35:yh,36:vh,37:vh,38:_h,39:yh,40:xh},keysMapRtl:{9:Sh,27:Sh,33:_h,34:xh,35:vh,36:yh,37:yh,38:_h,39:vh,40:xh},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"}},{_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1}),Di=class s extends Pf{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,G(G({},s.ownDefaults),e)),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof $o&&this.canvas.textEditingManager.remove(this),e instanceof $o&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart||0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionEnd,n=arguments.length>2?arguments[2]:void 0;return super.getSelectionStyles(t,e,n)}setSelectionStyles(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionStart||0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.selectionEnd;return super.setSelectionStyles(t,e,n)}get2DCursorLocation(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0;return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),i=n.length>0,r,o=t;if(i){r=ni(t.canvas),o=r.getContext("2d"),Qg(o,this.canvas);let a=this.calcTransformMatrix();o.transform(a[0],a[1],a[2],a[3],a[4],a[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(o,e):this.renderCursor(o,e),i)for(let a of n){let l=a.clipPath,c=ni(t.canvas),h=c.getContext("2d");if(Qg(h,this.canvas),!l.absolutePositioned){let u=a.calcTransformMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(o,l,c)}i&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0,n=this._getLeftOffset(),i=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:i,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:i,lineIndex:r}=this.get2DCursorLocation(t);for(let c=0;c<r;c++)e+=this.getHeightOfLine(c);let o=this._getLineLeftOffset(r),a=this.__charBounds[r][i];a&&(n=a.left),this.charSpacing!==0&&i===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let l={top:e,left:o+(n>0?n:0)};return this.direction==="rtl"&&(this.textAlign===Ye||this.textAlign===Ki||this.textAlign===il?l.left*=-1:this.textAlign===Te||this.textAlign===Nh?l.left=o-(n>0?n:0):this.textAlign!==ie&&this.textAlign!==sl||(l.left=o-(n>0?n:0))),l}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,o=this.getValueOfPropertyAt(i,r,"fontSize"),a=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/a,c=this.getValueOfPropertyAt(i,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(i)/this.lineHeight-o*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(i,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:o}}_renderCursor(t,e,n){let{color:i,opacity:r,left:o,top:a,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=i,t.globalAlpha=r,t.fillRect(o,a,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let i=e.selectionStart,r=e.selectionEnd,o=this.textAlign.includes(Ki),a=this.get2DCursorLocation(i),l=this.get2DCursorLocation(r),c=a.lineIndex,h=l.lineIndex,u=a.charIndex<0?0:a.charIndex,d=l.charIndex<0?0:l.charIndex;for(let f=c;f<=h;f++){let p=this._getLineLeftOffset(f)||0,x=this.getHeightOfLine(f),m=0,g=0,S=0;if(f===c&&(g=this.__charBounds[c][u].left),f>=c&&f<h)S=o&&!this.isEndOfWrapping(f)?this.width:this.getLineWidth(f)||5;else if(f===h)if(d===0)S=this.__charBounds[h][d].left;else{let _=this._getWidthOfCharSpacing();S=this.__charBounds[h][d-1].left+this.__charBounds[h][d-1].width-_}m=x,(this.lineHeight<1||f===h&&this.lineHeight>1)&&(x/=this.lineHeight);let A=n.left+p+g,w=x,E=0,R=S-g;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",w=1,E=x):t.fillStyle=this.selectionColor,this.direction==="rtl"&&(this.textAlign===Ye||this.textAlign===Ki||this.textAlign===il?A=this.width-A-R:this.textAlign===Te||this.textAlign===Nh?A=n.left+p-S:this.textAlign!==ie&&this.textAlign!==sl||(A=n.left+p-S)),t.fillRect(A,n.top+n.topOffset+E,R,w),n.topOffset+=m}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,tn)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};W(Di,"ownDefaults",nw),W(Di,"type","IText"),It.setClass(Di),It.setClass(Di,"i-text");var Ho=class s extends Di{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(t,G(G({},s.ownDefaults),e))}static createControls(){return{controls:Y0()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes(Ki)&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,i=0,r={};for(let o=0;o<t.graphemeLines.length;o++)t.graphemeText[i]===`
`&&o>0?(n=0,i++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[i])&&o>0&&(n++,i++),r[o]={line:e,offset:n},i+=t.graphemeLines[o].length,n+=t.graphemeLines[o].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n=0,i=t+1,r=!1,o=this._styleMap[t],a=this._styleMap[t+1];o&&(t=o.line,n=o.offset),a&&(i=a.line,r=i===t,e=a.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let u=parseInt(h,10);if(u>=n&&(!r||u<e))for(let d in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let i=this._styleMap[t];super._setStyleDeclaration(i.line,i.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),i=[];for(let r=0;r<n.wordsData.length;r++)i.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,i}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",i=0;return{wordsData:t.map(((r,o)=>{let a=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map((c=>{let h=e?[c]:this.graphemeSplit(c),u=this._measureWord(h,o,a);return i=Math.max(u,i),a+=h.length+n.length,{word:h,width:u}}))})),largestWordWidth:i}}_measureWord(t,e){let n,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=0;for(let o=0,a=t.length;o<a;o++)r+=this._getGraphemeBox(t[o],e,o+i,n,!0).kernedWidth,n=t[o];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,n){let{largestWordWidth:i,wordsData:r}=n,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=this._getWidthOfCharSpacing(),l=this.splitByGrapheme,c=[],h=l?"":" ",u=0,d=[],f=0,p=0,x=!0;e-=o;let m=Math.max(e,i,this.dynamicMinWidth),g=r[t],S;for(f=0,S=0;S<g.length;S++){let{word:A,width:w}=g[S];f+=A.length,u+=p+w-a,u>m&&!x?(c.push(d),d=[],u=w,x=!0):u+=a,x||l||d.push(h),d=d.concat(A),p=l?0:this._measureWord([h],t,f),f++,x=!1}return S&&c.push(d),i+o>this.dynamicMinWidth&&(this.dynamicMinWidth=i-a+o),c}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?this.isEndOfWrapping(t)?1:0:1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=n[r].join("");return e.lines=i,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let i=this._styleMap[e].line;t.set("".concat(i),!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject(["minWidth","splitByGrapheme",...t])}};W(Ho,"type","Textbox"),W(Ho,"textLayoutProperties",[...Di.textLayoutProperties,"width"]),W(Ho,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),It.setClass(Ho);var Kh=class extends Jo{shouldPerformLayout(t){return!!t.target.clipPath&&super.shouldPerformLayout(t)}shouldLayoutClipPath(){return!1}calcLayoutResult(t,e){let{target:n}=t,{clipPath:i,group:r}=n;if(!i||!this.shouldPerformLayout(t))return;let{width:o,height:a}=$i(e_(n,i)),l=new st(o,a);if(i.absolutePositioned)return{center:vs(i.getRelativeCenterPoint(),void 0,r?r.calcTransformMatrix():void 0),size:l};{let c=i.getRelativeCenterPoint().transform(n.calcOwnMatrix(),!0);if(this.shouldPerformLayout(t)){let{center:h=new st,correction:u=new st}=this.calcBoundingBox(e,t)||{};return{center:h.add(c),correction:u.subtract(c),size:l}}return{center:n.getRelativeCenterPoint().add(c),size:l}}}};W(Kh,"type","clip-path"),It.setClass(Kh);var Jh=class extends Jo{getInitialSize(t,e){let{target:n}=t,{size:i}=e;return new st(n.width||i.x,n.height||i.y)}};W(Jh,"type","fixed"),It.setClass(Jh);var Df=class extends Jr{subscribeTargets(t){let e=t.target;t.targets.reduce(((n,i)=>(i.parent&&n.add(i.parent),n)),new Set).forEach((n=>{n.layoutManager.subscribeTargets({target:n,targets:[e]})}))}unsubscribeTargets(t){let e=t.target,n=e.getObjects();t.targets.reduce(((i,r)=>(r.parent&&i.add(r.parent),i)),new Set).forEach((i=>{!n.some((r=>r.parent===i))&&i.layoutManager.unsubscribeTargets({target:i,targets:[e]})}))}},Wo=class s extends Js{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(e);let{left:n,top:i,layoutManager:r}=e;this.groupInit(t,{left:n,top:i,layoutManager:r??new Df})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.multiSelectionStacking==="selection-order"?this.add(...e):e.forEach((i=>{let r=this._objects.findIndex((a=>a.isInFrontOf(i))),o=r===-1?this.size():r;this.insertAt(o,i)}))}canEnterGroup(t){return this.getObjects().some((e=>e.isDescendantOf(t)||t.isDescendantOf(e)))?($s("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach((i=>{let{parent:r}=i;r&&n.add(r)})),t===ep?n.forEach((i=>{i._onAfterObjectsChange(Wh,e)})):n.forEach((i=>{i._set("dirty",!0)}))}onDeselect(){return this.removeAll(),!1}toString(){return"#<ActiveSelection: (".concat(this.complexity(),")>")}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let i=G(G({hasControls:!1},n),{},{forActiveSelection:!0});for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,i);super._renderControls(t,e),t.restore()}};W(Wo,"type","ActiveSelection"),W(Wo,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),It.setClass(Wo),It.setClass(Wo,"activeSelection");var If=class{constructor(){W(this,"resources",{})}applyFilters(t,e,n,i,r){let o=r.getContext("2d");if(!o)return;o.drawImage(e,0,0,n,i);let a={sourceWidth:n,sourceHeight:i,imageData:o.getImageData(0,0,n,i),originalEl:e,originalImageData:o.getImageData(0,0,n,i),canvasEl:r,ctx:o,filterBackend:this};t.forEach((c=>{c.applyTo(a)}));let{imageData:l}=a;return l.width===n&&l.height===i||(r.width=l.width,r.height=l.height),o.putImageData(l,0,0),a}},$h=class{constructor(){let{tileSize:t=ge.textureSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};W(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),W(this,"resources",{}),this.tileSize=t,this.setupGLContext(t,t),this.captureGPUInfo()}setupGLContext(t,e){this.dispose(),this.createWebGLCanvas(t,e)}createWebGLCanvas(t,e){let n=ni({width:t,height:e}),i=n.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});i&&(i.clearColor(0,0,0,0),this.canvas=n,this.gl=i)}applyFilters(t,e,n,i,r,o){let a=this.gl,l=r.getContext("2d");if(!a||!l)return;let c;o&&(c=this.getCachedTexture(o,e));let h={originalWidth:e.width||e.naturalWidth||0,originalHeight:e.height||e.naturalHeight||0,sourceWidth:n,sourceHeight:i,destinationWidth:n,destinationHeight:i,context:a,sourceTexture:this.createTexture(a,n,i,c?void 0:e),targetTexture:this.createTexture(a,n,i),originalTexture:c||this.createTexture(a,n,i,c?void 0:e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:r},u=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,u),t.forEach((d=>{d&&d.applyTo(h)})),(function(d){let f=d.targetCanvas,p=f.width,x=f.height,m=d.destinationWidth,g=d.destinationHeight;p===m&&x===g||(f.width=m,f.height=g)})(h),this.copyGLTo2D(a,h),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(h.sourceTexture),a.deleteTexture(h.targetTexture),a.deleteFramebuffer(u),l.setTransform(1,0,0,1,0,0),h}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(t,e,n,i,r){let{NEAREST:o,TEXTURE_2D:a,RGBA:l,UNSIGNED_BYTE:c,CLAMP_TO_EDGE:h,TEXTURE_MAG_FILTER:u,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:f,TEXTURE_WRAP_T:p}=t,x=t.createTexture();return t.bindTexture(a,x),t.texParameteri(a,u,r||o),t.texParameteri(a,d,r||o),t.texParameteri(a,f,h),t.texParameteri(a,p,h),i?t.texImage2D(a,0,l,l,c,i):t.texImage2D(a,0,l,e,n,0,l,c,null),x}getCachedTexture(t,e,n){let{textureCache:i}=this;if(i[t])return i[t];{let r=this.createTexture(this.gl,e.width,e.height,e,n);return r&&(i[t]=r),r}}evictCachesForKey(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])}copyGLTo2D(t,e){let n=t.canvas,i=e.targetCanvas,r=i.getContext("2d");if(!r)return;r.translate(0,i.height),r.scale(1,-1);let o=n.height-i.height;r.drawImage(n,0,o,i.width,i.height,0,0,i.width,i.height)}copyGLTo2DPutImageData(t,e){let n=e.targetCanvas.getContext("2d"),i=e.destinationWidth,r=e.destinationHeight,o=i*r*4;if(!n)return;let a=new Uint8Array(this.imageBuffer,0,o),l=new Uint8ClampedArray(this.imageBuffer,0,o);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,a);let c=new ImageData(l,i,r);n.putImageData(c,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let t=this.gl,e={renderer:"",vendor:""};if(!t)return e;let n=t.getExtension("WEBGL_debug_renderer_info");if(n){let i=t.getParameter(n.UNMASKED_RENDERER_WEBGL),r=t.getParameter(n.UNMASKED_VENDOR_WEBGL);i&&(e.renderer=i.toLowerCase()),r&&(e.vendor=r.toLowerCase())}return this.gpuInfo=e,e}},ef;function iw(){let{WebGLProbe:s}=Qi();return s.queryWebGL(ts()),ge.enableGLFiltering&&s.isSupported(ge.textureSize)?new $h({tileSize:ge.textureSize}):new If}function nf(){return!ef&&(!(arguments.length>0&&arguments[0]!==void 0)||arguments[0])&&(ef=iw()),ef}var sw=["filters","resizeFilter","src","crossOrigin","type"],S_=["cropX","cropY"],ui=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),W(this,"_lastScaleX",1),W(this,"_lastScaleY",1),W(this,"_filterScalingX",1),W(this,"_filterScalingY",1),this.filters=[],Object.assign(this,s.ownDefaults),this.setOptions(e),this.cacheKey="texture".concat(tr()),this.setElement(typeof t=="string"?(this.canvas&&Ri(this.canvas.getElement())||Qo()).getElementById(t):t,e)}getElement(){return this._element}setElement(t){var e;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._element=t,this._originalElement=t,this._setWidthHeight(n),(e=t.classList)===null||e===void 0||e.add(s.CSS_CANVAS),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=nf(!1);e instanceof $h&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach((t=>{let e=this[t];e&&Qi().dispose(e),this[t]=void 0}))}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return this.filters.forEach((n=>{n&&e.push(n.toObject())})),G(G({},super.toObject([...S_,...t])),{},{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e},this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{})}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,i=-this.height/2,r=[],o=[],a="",l="";if(!e)return[];if(this.hasCrop()){let c=tr();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+i+'" width="'+this.width+'" height="'+this.height+`" />
`,`</clipPath>
`),a=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",'xlink:href="'.concat(this.getSvgSrc(!0),'" x="').concat(n-this.cropX,'" y="').concat(i-this.cropY,'" width="').concat(e.width||e.naturalWidth,'" height="').concat(e.height||e.naturalHeight,'"').concat(l).concat(a,`></image>
`)),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,o=['	<rect x="'.concat(n,'" y="').concat(i,'" width="').concat(this.width,'" height="').concat(this.height,'" style="').concat(this.getSvgStyles(),`" />
`)],this.fill=c}return r=this.paintFirst!==tn?r.concat(o,t):r.concat(t,o),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t){let{crossOrigin:e,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return nl(t,{crossOrigin:e,signal:n}).then((i=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(i)}))}toString(){return'#<Image: { src: "'.concat(this.getSrc(),'" }>')}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),i=n.x,r=n.y,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||i>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=i,void(this._lastScaleY=r);let a=ni(o),{width:l,height:c}=o;this._element=a,this._lastScaleX=t.scaleX=i,this._lastScaleY=t.scaleY=r,nf().applyFilters([t],o,l,c,this._element),this._filterScalingX=a.width/this._originalElement.width,this._filterScalingY=a.height/this._originalElement.height}applyFilters(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.filters||[];if(t=t.filter((r=>r&&!r.isNeutralState())),this.set("dirty",!0),this.removeTexture("".concat(this.cacheKey,"_filtered")),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,i=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=ni({width:n,height:i});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,i),this._lastScaleX=1,this._lastScaleY=1);nf().applyFilters(t,this._originalElement,n,i,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,i=this._filterScalingY,r=this.width,o=this.height,a=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,u=a*n,d=l*i,f=Math.min(r*n,c-u),p=Math.min(o*i,h-d),x=-r/2,m=-o/2,g=Math.min(r,c/n-a),S=Math.min(o,h/i-l);e&&t.drawImage(e,u,d,f,p,x,m,g,S)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight(){let{width:t,height:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=w0(this.preserveAspectRatio||""),e=this.width,n=this.height,i={width:e,height:n},r,o=this._element.width,a=this._element.height,l=1,c=1,h=0,u=0,d=0,f=0;return!t||t.alignX===Gn&&t.alignY===Gn?(l=e/o,c=n/a):(t.meetOrSlice==="meet"&&(l=c=i_(this._element,i),r=(e-o*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-a*c)/2,t.alignY==="Min"&&(u=-r),t.alignY==="Max"&&(u=r)),t.meetOrSlice==="slice"&&(l=c=s_(this._element,i),r=o-e/l,t.alignX==="Mid"&&(d=r/2),t.alignX==="Max"&&(d=r),r=a-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),o=e/l,a=n/c)),{width:o,height:a,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:u,cropX:d,cropY:f}}static fromObject(t,e){let{filters:n,resizeFilter:i,src:r,crossOrigin:o,type:a}=t,l=ke(t,sw);return Promise.all([nl(r,G(G({},e),{},{crossOrigin:o})),n&&qo(n,e),i&&qo([i],e),dl(l,e)]).then((c=>{let[h,u=[],[d]=[],f={}]=c;return new this(h,G(G({},l),{},{src:r,filters:u,resizeFilter:d},f))}))}static fromURL(t){let{crossOrigin:e=null,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return nl(t,{crossOrigin:e,signal:n}).then((r=>new this(r,i)))}static async fromElement(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=bs(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(i["xlink:href"]||i.href,e,i).catch((r=>($s("log","Unable to parse Image",r),null)))}};W(ui,"type","Image"),W(ui,"cacheProperties",[...Ss,...S_]),W(ui,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),W(ui,"CSS_CANVAS","canvas-img"),W(ui,"ATTRIBUTE_NAMES",[...ir,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),It.setClass(ui),It.setSVGClass(ui);var kA=ou(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var b_=o0,t0=s=>function(t,e,n){let{points:i,pathOffset:r}=n;return new st(i[s]).subtract(r).transform(He(n.getViewportTransform(),n.calcTransformMatrix()))},M_=(s,t,e,n)=>{let{target:i,pointIndex:r}=t,o=i,a=vs(new st(e,n),void 0,o.calcOwnMatrix());return o.points[r]=a.add(o.pathOffset),o.setDimensions(),o.set("dirty",!0),!0},w_=(s,t)=>function(e,n,i,r){let o=n.target,a=new st(o.points[(s>0?s:o.points.length)-1]),l=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),c=t(e,G(G({},n),{},{pointIndex:s}),i,r),h=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(l);return o.left-=h.x,o.top-=h.y,c},e0=s=>nr(b_,w_(s,M_)),Of=(s,t,e)=>{let{path:n,pathOffset:i}=s,r=n[t];return new st(r[e]-i.x,r[e+1]-i.y).transform(He(s.getViewportTransform(),s.calcTransformMatrix()))};function rw(s,t,e){let{commandIndex:n,pointIndex:i}=this;return Of(e,n,i)}function ow(s,t,e,n){let{target:i}=t,{commandIndex:r,pointIndex:o}=this,a=((l,c,h,u,d)=>{let{path:f,pathOffset:p}=l,x=f[(u>0?u:f.length)-1],m=new st(x[d],x[d+1]),g=m.subtract(p).transform(l.calcOwnMatrix()),S=vs(new st(c,h),void 0,l.calcOwnMatrix());f[u][d]=S.x+p.x,f[u][d+1]=S.y+p.y,l.setDimensions();let A=m.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(g);return l.left-=A.x,l.top-=A.y,l.set("dirty",!0),!0})(i,e,n,r,o);return jf(this.actionName,G(G({},Yf(s,t,e,n)),{},{commandIndex:r,pointIndex:o})),a}var Qh=class extends In{constructor(t){super(t)}render(t,e,n,i,r){let o=G(G({},i),{},{cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill});super.render(t,e,n,o,r)}},Lf=class extends Qh{constructor(t){super(t)}render(t,e,n,i,r){let{path:o}=r,{commandIndex:a,pointIndex:l,connectToCommandIndex:c,connectToPointIndex:h}=this;t.save(),t.strokeStyle=this.controlStroke,this.connectionDashArray&&t.setLineDash(this.connectionDashArray);let[u]=o[a],d=Of(r,c,h);if(u==="Q"){let f=Of(r,a,l+2);t.moveTo(f.x,f.y),t.lineTo(e,n)}else t.moveTo(e,n);t.lineTo(d.x,d.y),t.stroke(),t.restore(),super.render(t,e,n,i,r)}},bh=(s,t,e,n,i,r)=>new(e?Lf:Qh)(G(G({commandIndex:s,pointIndex:t,actionName:"modifyPath",positionHandler:rw,actionHandler:ow,connectToCommandIndex:i,connectToPointIndex:r},n),e?n.controlPointStyle:n.pointStyle)),BA=Object.freeze({__proto__:null,changeWidth:_f,createObjectDefaultControls:$f,createPathControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={},n="M";return s.path.forEach(((i,r)=>{let o=i[0];switch(o!=="Z"&&(e["c_".concat(r,"_").concat(o)]=bh(r,i.length-2,!1,t)),o){case"C":e["c_".concat(r,"_C_CP_1")]=bh(r,1,!0,t,r-1,(a=>a==="C"?5:a==="Q"?3:1)(n)),e["c_".concat(r,"_C_CP_2")]=bh(r,3,!0,t,r,5);break;case"Q":e["c_".concat(r,"_Q_CP_1")]=bh(r,1,!0,t,r,3)}n=o})),e},createPolyActionHandler:e0,createPolyControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={};for(let n=0;n<(typeof s=="number"?s:s.points.length);n++)e["p".concat(n)]=new In(G({actionName:b_,positionHandler:t0(n),actionHandler:e0(n)},t));return e},createPolyPositionHandler:t0,createResizeControls:j0,createTextboxDefaultControls:Y0,dragHandler:M0,factoryPolyActionHandler:w_,getLocalPoint:ru,polyActionHandler:M_,renderCircleControl:L0,renderSquareControl:F0,rotationStyleHandler:N0,rotationWithSnapping:U0,scaleCursorStyleHandler:ko,scaleOrSkewActionName:Qa,scaleSkewCursorStyleHandler:Ar,scalingEqually:$a,scalingX:z0,scalingXOrSkewingY:xf,scalingY:V0,scalingYOrSkewingX:vf,skewCursorStyleHandler:G0,skewHandlerX:W0,skewHandlerY:X0,wrapWithFireEvent:nr,wrapWithFixedAnchor:to}),uu=s=>s.webgl!==void 0;var ip="precision highp float",aw=`
    `.concat(ip,`;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`),lw=["type"],cw=["type"],hw=new RegExp(ip,"g"),We=class{get type(){return this.constructor.type}constructor(){let t=ke(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},lw);Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return aw}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getFragmentSource(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.getVertexSource(),{WebGLProbe:{GLPrecision:i="highp"}}=Qi();i!=="highp"&&(e=e.replace(hw,ip.replace("highp",i)));let r=t.createShader(t.VERTEX_SHADER),o=t.createShader(t.FRAGMENT_SHADER),a=t.createProgram();if(!r||!o||!a)throw new fi("Vertex, fragment shader or program creation error");if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new fi("Vertex shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(r)));if(t.shaderSource(o,e),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS))throw new fi("Fragment shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(o)));if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))throw new fi('Shader link error for "'.concat(this.type,'" ').concat(t.getProgramInfoLog(a)));let l=this.getUniformLocations(t,a)||{};return l.uStepW=t.getUniformLocation(a,"uStepW"),l.uStepH=t.getUniformLocation(a,"uStepH"),{program:a,attributeLocations:this.getAttributeLocations(t,a),uniformLocations:l}}getAttributeLocations(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}}getUniformLocations(t,e){let n=this.constructor.uniformLocations,i={};for(let r=0;r<n.length;r++)i[n[r]]=t.getUniformLocation(e,n[r]);return i}sendAttributeData(t,e,n){let i=e.aPosition,r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}_setupFrameBuffer(t){let e=t.context;if(t.passes>1){let n=t.destinationWidth,i=t.destinationHeight;t.sourceWidth===n&&t.sourceHeight===i||(e.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(e,n,i)),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.targetTexture,0)}else e.bindFramebuffer(e.FRAMEBUFFER,null),e.finish()}_swapTextures(t){t.passes--,t.pass++;let e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e}isNeutralState(t){return!1}applyTo(t){uu(t)?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){}getCacheKey(){return this.type}retrieveShader(t){let e=this.getCacheKey();return t.programCache[e]||(t.programCache[e]=this.createProgram(t.context)),t.programCache[e]}applyToWebGL(t){let e=t.context,n=this.retrieveShader(t);t.pass===0&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(n.program),this.sendAttributeData(e,n.attributeLocations,t.aPosition),e.uniform1f(n.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(n.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,n.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(t,e,n){t.activeTexture(n),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)}unbindAdditionalTexture(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)}sendUniformData(t,e){}createHelpLayer(t){if(!t.helpLayer){let{sourceWidth:e,sourceHeight:n}=t,i=ni({width:e,height:n});t.helpLayer=i}}toObject(){let t=Object.keys(this.constructor.defaults||{});return G({type:this.type},t.reduce(((e,n)=>(e[n]=this[n],e)),{}))}toJSON(){return this.toObject()}static async fromObject(t,e){return new this(ke(t,cw))}};W(We,"type","BaseFilter"),W(We,"uniformLocations",[]);var uw={multiply:`gl_FragColor.rgb *= uColor.rgb;
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
    `},Rr=class extends We{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(uw[this.mode],`
        }
      }
      `)}applyTo2d(t){let{imageData:{data:e}}=t,n=new Nn(this.color).getSource(),i=this.alpha,r=n[0]*i,o=n[1]*i,a=n[2]*i,l=1-i;for(let c=0;c<e.length;c+=4){let h=e[c],u=e[c+1],d=e[c+2],f,p,x;switch(this.mode){case"multiply":f=h*r/255,p=u*o/255,x=d*a/255;break;case"screen":f=255-(255-h)*(255-r)/255,p=255-(255-u)*(255-o)/255,x=255-(255-d)*(255-a)/255;break;case"add":f=h+r,p=u+o,x=d+a;break;case"difference":f=Math.abs(h-r),p=Math.abs(u-o),x=Math.abs(d-a);break;case"subtract":f=h-r,p=u-o,x=d-a;break;case"darken":f=Math.min(h,r),p=Math.min(u,o),x=Math.min(d,a);break;case"lighten":f=Math.max(h,r),p=Math.max(u,o),x=Math.max(d,a);break;case"overlay":f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255,p=o<128?2*u*o/255:255-2*(255-u)*(255-o)/255,x=a<128?2*d*a/255:255-2*(255-d)*(255-a)/255;break;case"exclusion":f=r+h-2*r*h/255,p=o+u-2*o*u/255,x=a+d-2*a*d/255;break;case"tint":f=r+h*l,p=o+u*l,x=a+d*l}e[c]=f,e[c+1]=p,e[c+2]=x}}sendUniformData(t,e){let n=new Nn(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,t.uniform4fv(e.uColor,n)}};W(Rr,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),W(Rr,"type","BlendColor"),W(Rr,"uniformLocations",["uColor"]),It.setClass(Rr);var dw={multiply:`
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
    `},fw=["type","image"],Pr=class extends We{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return dw[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(t){let e=t.context,n=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,n,e.TEXTURE1),super.applyToWebGL(t),this.unbindAdditionalTexture(e,e.TEXTURE1)}createTexture(t,e){return t.getCachedTexture(e.cacheKey,e.getElement())}calculateMatrix(){let t=this.image,{width:e,height:n}=t.getElement();return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/n,1]}applyTo2d(t){let{imageData:{data:e,width:n,height:i},filterBackend:{resources:r}}=t,o=this.image;r.blendImage||(r.blendImage=ts());let a=r.blendImage,l=a.getContext("2d");a.width!==n||a.height!==i?(a.width=n,a.height=i):l.clearRect(0,0,n,i),l.setTransform(o.scaleX,0,0,o.scaleY,o.left,o.top),l.drawImage(o.getElement(),0,0,n,i);let c=l.getImageData(0,0,n,i).data;for(let h=0;h<e.length;h+=4){let u=e[h],d=e[h+1],f=e[h+2],p=e[h+3],x=c[h],m=c[h+1],g=c[h+2],S=c[h+3];switch(this.mode){case"multiply":e[h]=u*x/255,e[h+1]=d*m/255,e[h+2]=f*g/255,e[h+3]=p*S/255;break;case"mask":e[h+3]=S}}}sendUniformData(t,e){let n=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,n)}toObject(){return G(G({},super.toObject()),{},{image:this.image&&this.image.toObject()})}static async fromObject(t,e){let{type:n,image:i}=t,r=ke(t,fw);return ui.fromObject(i,e).then((o=>new this(G(G({},r),{},{image:o}))))}};W(Pr,"type","BlendImage"),W(Pr,"defaults",{mode:"multiply",alpha:1}),W(Pr,"uniformLocations",["uTransformMatrix","uImage"]),It.setClass(Pr);var Dr=class extends We{getFragmentSource(){return`
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
  `}applyTo(t){uu(t)?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;this.aspectRatio=n/i,this.horizontal=!0;let r=this.getBlurValue()*n,o=new Uint8ClampedArray(e),a=15,l=4*n;for(let c=0;c<e.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c-c%l,m=x+l;for(let g=-14;g<a;g++){let S=g/a,A=4*Math.floor(r*S),w=1-Math.abs(S),E=c+A;E<x?E=x:E>m&&(E=m);let R=e[E+3]*w;h+=e[E]*R,u+=e[E+1]*R,d+=e[E+2]*R,f+=R,p+=w}o[c]=h/f,o[c+1]=u/f,o[c+2]=d/f,o[c+3]=f/p}this.horizontal=!1,r=this.getBlurValue()*i;for(let c=0;c<o.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c%l,m=o.length-l+x;for(let g=-14;g<a;g++){let S=g/a,A=Math.floor(r*S)*l,w=1-Math.abs(S),E=c+A;E<x?E=x:E>m&&(E=m);let R=o[E+3]*w;h+=o[E]*R,u+=o[E+1]*R,d+=o[E+2]*R,f+=R,p+=w}e[c]=h/f,e[c+1]=u/f,e[c+2]=d/f,e[c+3]=f/p}}sendUniformData(t,e){let n=this.chooseRightDelta();t.uniform2fv(e.uDelta,n)}isNeutralState(){return this.blur===0}getBlurValue(){let t=1,{horizontal:e,aspectRatio:n}=this;return e?n>1&&(t=1/n):n<1&&(t=n),t*this.blur*.12}chooseRightDelta(){let t=this.getBlurValue();return this.horizontal?[t,0]:[0,t]}};W(Dr,"type","Blur"),W(Dr,"defaults",{blur:0}),W(Dr,"uniformLocations",["uDelta"]),It.setClass(Dr);var Ir=class extends We{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.round(255*this.brightness);for(let i=0;i<e.length;i+=4)e[i]+=n,e[i+1]+=n,e[i+2]+=n}isNeutralState(){return this.brightness===0}sendUniformData(t,e){t.uniform1f(e.uBrightness,this.brightness)}};W(Ir,"type","Brightness"),W(Ir,"defaults",{brightness:0}),W(Ir,"uniformLocations",["uBrightness"]),It.setClass(Ir);var T_={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},xs=class extends We{getFragmentSource(){return`
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
  }`}applyTo2d(t){let e=t.imageData.data,n=this.matrix,i=this.colorsOnly;for(let r=0;r<e.length;r+=4){let o=e[r],a=e[r+1],l=e[r+2];if(e[r]=o*n[0]+a*n[1]+l*n[2]+255*n[4],e[r+1]=o*n[5]+a*n[6]+l*n[7]+255*n[9],e[r+2]=o*n[10]+a*n[11]+l*n[12]+255*n[14],!i){let c=e[r+3];e[r]+=c*n[3],e[r+1]+=c*n[8],e[r+2]+=c*n[13],e[r+3]=o*n[15]+a*n[16]+l*n[17]+c*n[18]+255*n[19]}}}sendUniformData(t,e){let n=this.matrix,i=[n[0],n[1],n[2],n[3],n[5],n[6],n[7],n[8],n[10],n[11],n[12],n[13],n[15],n[16],n[17],n[18]],r=[n[4],n[9],n[14],n[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,i),t.uniform4fv(e.uConstants,r)}toObject(){return G(G({},super.toObject()),{},{matrix:[...this.matrix]})}};function eo(s,t){var e;let n=(W(e=class extends xs{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",s),W(e,"defaults",{colorsOnly:!1,matrix:t}),e);return It.setClass(n,s),n}W(xs,"type","ColorMatrix"),W(xs,"defaults",T_),W(xs,"uniformLocations",["uColorMatrix","uConstants"]),It.setClass(xs);var pw=eo("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),mw=eo("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),gw=eo("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),_w=eo("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),xw=eo("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),vw=eo("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),yw=eo("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),cl=class extends We{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.subFilters=t.subFilters||[]}applyTo(t){uu(t)&&(t.passes+=this.subFilters.length-1),this.subFilters.forEach((e=>{e.applyTo(t)}))}toObject(){return{type:this.type,subFilters:this.subFilters.map((t=>t.toObject()))}}isNeutralState(){return!this.subFilters.some((t=>!t.isNeutralState()))}static fromObject(t,e){return Promise.all((t.subFilters||[]).map((n=>It.getClass(n.type).fromObject(n,e)))).then((n=>new this({subFilters:n})))}};W(cl,"type","Composed"),It.setClass(cl);var Or=class extends We{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.floor(255*this.contrast),i=259*(n+255)/(255*(259-n));for(let r=0;r<e.length;r+=4)e[r]=i*(e[r]-128)+128,e[r+1]=i*(e[r+1]-128)+128,e[r+2]=i*(e[r+2]-128)+128}sendUniformData(t,e){t.uniform1f(e.uContrast,this.contrast)}};W(Or,"type","Contrast"),W(Or,"defaults",{contrast:0}),W(Or,"uniformLocations",["uContrast"]),It.setClass(Or);var Sw={Convolute_3_1:`
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
    `},Lr=class extends We{getCacheKey(){return"".concat(this.type,"_").concat(Math.sqrt(this.matrix.length),"_").concat(this.opaque?1:0)}getFragmentSource(){return Sw[this.getCacheKey()]}applyTo2d(t){let e=t.imageData,n=e.data,i=this.matrix,r=Math.round(Math.sqrt(i.length)),o=Math.floor(r/2),a=e.width,l=e.height,c=t.ctx.createImageData(a,l),h=c.data,u=this.opaque?1:0,d,f,p,x,m,g,S,A,w,E,R,_,v;for(R=0;R<l;R++)for(E=0;E<a;E++){for(m=4*(R*a+E),d=0,f=0,p=0,x=0,v=0;v<r;v++)for(_=0;_<r;_++)S=R+v-o,g=E+_-o,S<0||S>=l||g<0||g>=a||(A=4*(S*a+g),w=i[v*r+_],d+=n[A]*w,f+=n[A+1]*w,p+=n[A+2]*w,u||(x+=n[A+3]*w));h[m]=d,h[m+1]=f,h[m+2]=p,h[m+3]=u?n[m+3]:x}t.imageData=c}sendUniformData(t,e){t.uniform1fv(e.uMatrix,this.matrix)}toObject(){return G(G({},super.toObject()),{},{opaque:this.opaque,matrix:[...this.matrix]})}};W(Lr,"type","Convolute"),W(Lr,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),W(Lr,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),It.setClass(Lr);var C_="Gamma",Fr=class extends We{getFragmentSource(){return`
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
`}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.gamma=t.gamma||this.constructor.defaults.gamma.concat()}applyTo2d(t){let{imageData:{data:e}}=t,n=this.gamma,i=1/n[0],r=1/n[1],o=1/n[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let a=this.rgbValues;for(let l=0;l<256;l++)a.r[l]=255*Math.pow(l/255,i),a.g[l]=255*Math.pow(l/255,r),a.b[l]=255*Math.pow(l/255,o);for(let l=0;l<e.length;l+=4)e[l]=a.r[e[l]],e[l+1]=a.g[e[l+1]],e[l+2]=a.b[e[l+2]]}sendUniformData(t,e){t.uniform3fv(e.uGamma,this.gamma)}isNeutralState(){let{gamma:t}=this;return t[0]===1&&t[1]===1&&t[2]===1}toObject(){return{type:C_,gamma:this.gamma.concat()}}};W(Fr,"type",C_),W(Fr,"defaults",{gamma:[1,1,1]}),W(Fr,"uniformLocations",["uGamma"]),It.setClass(Fr);var bw={average:`
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
    `},Nr=class extends We{applyTo2d(t){let{imageData:{data:e}}=t;for(let n,i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2];switch(this.mode){case"average":n=(r+o+a)/3;break;case"lightness":n=(Math.min(r,o,a)+Math.max(r,o,a))/2;break;case"luminosity":n=.21*r+.72*o+.07*a}e[i+2]=e[i+1]=e[i]=n}}getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return bw[this.mode]}sendUniformData(t,e){t.uniform1i(e.uMode,1)}isNeutralState(){return!1}};W(Nr,"type","Grayscale"),W(Nr,"defaults",{mode:"average"}),W(Nr,"uniformLocations",["uMode"]),It.setClass(Nr);var Mw=G(G({},T_),{},{rotation:0}),jo=class extends xs{calculateMatrix(){let t=this.rotation*Math.PI,e=Oi(t),n=Li(t),i=1/3,r=Math.sqrt(i)*n,o=1-e;this.matrix=[e+o/3,i*o-r,i*o+r,0,0,i*o+r,e+i*o,i*o-r,0,0,i*o-r,i*o+r,e+i*o,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(t){this.calculateMatrix(),super.applyTo(t)}toObject(){return{type:this.type,rotation:this.rotation}}};W(jo,"type","HueRotation"),W(jo,"defaults",Mw),It.setClass(jo);var Ur=class extends We{applyTo2d(t){let{imageData:{data:e}}=t;for(let n=0;n<e.length;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2],this.alpha&&(e[n+3]=255-e[n+3])}getFragmentSource(){return`
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
`}isNeutralState(){return!this.invert}sendUniformData(t,e){t.uniform1i(e.uInvert,Number(this.invert)),t.uniform1i(e.uAlpha,Number(this.alpha))}};W(Ur,"type","Invert"),W(Ur,"defaults",{alpha:!1,invert:!0}),W(Ur,"uniformLocations",["uInvert","uAlpha"]),It.setClass(Ur);var kr=class extends We{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=this.noise;for(let i=0;i<e.length;i+=4){let r=(.5-Math.random())*n;e[i]+=r,e[i+1]+=r,e[i+2]+=r}}sendUniformData(t,e){t.uniform1f(e.uNoise,this.noise/255),t.uniform1f(e.uSeed,Math.random())}isNeutralState(){return this.noise===0}};W(kr,"type","Noise"),W(kr,"defaults",{noise:0}),W(kr,"uniformLocations",["uNoise","uSeed"]),It.setClass(kr);var Br=class extends We{applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;for(let r=0;r<i;r+=this.blocksize)for(let o=0;o<n;o+=this.blocksize){let a=4*r*n+4*o,l=e[a],c=e[a+1],h=e[a+2],u=e[a+3];for(let d=r;d<Math.min(r+this.blocksize,i);d++)for(let f=o;f<Math.min(o+this.blocksize,n);f++){let p=4*d*n+4*f;e[p]=l,e[p+1]=c,e[p+2]=h,e[p+3]=u}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
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
`}sendUniformData(t,e){t.uniform1f(e.uBlocksize,this.blocksize)}};W(Br,"type","Pixelate"),W(Br,"defaults",{blocksize:4}),W(Br,"uniformLocations",["uBlocksize"]),It.setClass(Br);var zr=class extends We{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=255*this.distance,i=new Nn(this.color).getSource(),r=[i[0]-n,i[1]-n,i[2]-n],o=[i[0]+n,i[1]+n,i[2]+n];for(let a=0;a<e.length;a+=4){let l=e[a],c=e[a+1],h=e[a+2];l>r[0]&&c>r[1]&&h>r[2]&&l<o[0]&&c<o[1]&&h<o[2]&&(e[a+3]=0)}}sendUniformData(t,e){let n=new Nn(this.color).getSource(),i=this.distance,r=[0+n[0]/255-i,0+n[1]/255-i,0+n[2]/255-i,1],o=[n[0]/255+i,n[1]/255+i,n[2]/255+i,1];t.uniform4fv(e.uLow,r),t.uniform4fv(e.uHigh,o)}};W(zr,"type","RemoveColor"),W(zr,"defaults",{color:"#FFFFFF",distance:.02,useAlpha:!1}),W(zr,"uniformLocations",["uLow","uHigh"]),It.setClass(zr);var Vr=class extends We{sendUniformData(t,e){t.uniform2fv(e.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),t.uniform1fv(e.uTaps,this.taps)}getFilterWindow(){let t=this.tempScale;return Math.ceil(this.lanczosLobes/t)}getCacheKey(){let t=this.getFilterWindow();return"".concat(this.type,"_").concat(t)}getFragmentSource(){let t=this.getFilterWindow();return this.generateShader(t)}getTaps(){let t=this.lanczosCreate(this.lanczosLobes),e=this.tempScale,n=this.getFilterWindow(),i=new Array(n);for(let r=1;r<=n;r++)i[r-1]=t(r*e);return i}generateShader(t){let e=new Array(t);for(let n=1;n<=t;n++)e[n-1]="".concat(n,".0 * uDelta");return`
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
    `)}applyToForWebgl(t){t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,super.applyTo(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,super.applyTo(t),t.sourceHeight=t.destinationHeight}applyTo(t){uu(t)?this.applyToForWebgl(t):this.applyTo2d(t)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(t){return e=>{if(e>=t||e<=-t)return 0;if(e<11920929e-14&&e>-11920929e-14)return 1;let n=(e*=Math.PI)/t;return Math.sin(e)/e*Math.sin(n)/n}}applyTo2d(t){let e=t.imageData,n=this.scaleX,i=this.scaleY;this.rcpScaleX=1/n,this.rcpScaleY=1/i;let r=e.width,o=e.height,a=Math.round(r*n),l=Math.round(o*i),c;c=this.resizeType==="sliceHack"?this.sliceByTwo(t,r,o,a,l):this.resizeType==="hermite"?this.hermiteFastResize(t,r,o,a,l):this.resizeType==="bilinear"?this.bilinearFiltering(t,r,o,a,l):this.resizeType==="lanczos"?this.lanczosResize(t,r,o,a,l):new ImageData(a,l),t.imageData=c}sliceByTwo(t,e,n,i,r){let o=t.imageData,a=.5,l=!1,c=!1,h=e*a,u=n*a,d=t.filterBackend.resources,f=0,p=0,x=e,m=0;d.sliceByTwo||(d.sliceByTwo=ts());let g=d.sliceByTwo;(g.width<1.5*e||g.height<n)&&(g.width=1.5*e,g.height=n);let S=g.getContext("2d");for(S.clearRect(0,0,1.5*e,n),S.putImageData(o,0,0),i=Math.floor(i),r=Math.floor(r);!l||!c;)e=h,n=u,i<Math.floor(h*a)?h=Math.floor(h*a):(h=i,l=!0),r<Math.floor(u*a)?u=Math.floor(u*a):(u=r,c=!0),S.drawImage(g,f,p,e,n,x,m,h,u),f=x,p=m,m+=u;return S.getImageData(f,p,i,r)}lanczosResize(t,e,n,i,r){let o=t.imageData.data,a=t.ctx.createImageData(i,r),l=a.data,c=this.lanczosCreate(this.lanczosLobes),h=this.rcpScaleX,u=this.rcpScaleY,d=2/this.rcpScaleX,f=2/this.rcpScaleY,p=Math.ceil(h*this.lanczosLobes/2),x=Math.ceil(u*this.lanczosLobes/2),m={},g={x:0,y:0},S={x:0,y:0};return(function A(w){let E,R,_,v,T,C,P,F,z,I,X;for(g.x=(w+.5)*h,S.x=Math.floor(g.x),E=0;E<r;E++){for(g.y=(E+.5)*u,S.y=Math.floor(g.y),T=0,C=0,P=0,F=0,z=0,R=S.x-p;R<=S.x+p;R++)if(!(R<0||R>=e)){I=Math.floor(1e3*Math.abs(R-g.x)),m[I]||(m[I]={});for(let q=S.y-x;q<=S.y+x;q++)q<0||q>=n||(X=Math.floor(1e3*Math.abs(q-g.y)),m[I][X]||(m[I][X]=c(Math.sqrt(Math.pow(I*d,2)+Math.pow(X*f,2))/1e3)),_=m[I][X],_>0&&(v=4*(q*e+R),T+=_,C+=_*o[v],P+=_*o[v+1],F+=_*o[v+2],z+=_*o[v+3]))}v=4*(E*i+w),l[v]=C/T,l[v+1]=P/T,l[v+2]=F/T,l[v+3]=z/T}return++w<i?A(w):a})(0)}bilinearFiltering(t,e,n,i,r){let o,a,l,c,h,u,d,f,p,x,m,g,S,A=0,w=this.rcpScaleX,E=this.rcpScaleY,R=4*(e-1),_=t.imageData.data,v=t.ctx.createImageData(i,r),T=v.data;for(d=0;d<r;d++)for(f=0;f<i;f++)for(h=Math.floor(w*f),u=Math.floor(E*d),p=w*f-h,x=E*d-u,S=4*(u*e+h),m=0;m<4;m++)o=_[S+m],a=_[S+4+m],l=_[S+R+m],c=_[S+R+4+m],g=o*(1-p)*(1-x)+a*p*(1-x)+l*x*(1-p)+c*p*x,T[A++]=g;return v}hermiteFastResize(t,e,n,i,r){let o=this.rcpScaleX,a=this.rcpScaleY,l=Math.ceil(o/2),c=Math.ceil(a/2),h=t.imageData.data,u=t.ctx.createImageData(i,r),d=u.data;for(let f=0;f<r;f++)for(let p=0;p<i;p++){let x=4*(p+f*i),m=0,g=0,S=0,A=0,w=0,E=0,R=0,_=(f+.5)*a;for(let v=Math.floor(f*a);v<(f+1)*a;v++){let T=Math.abs(_-(v+.5))/c,C=(p+.5)*o,P=T*T;for(let F=Math.floor(p*o);F<(p+1)*o;F++){let z=Math.abs(C-(F+.5))/l,I=Math.sqrt(P+z*z);I>1&&I<-1||(m=2*I*I*I-3*I*I+1,m>0&&(z=4*(F+v*e),R+=m*h[z+3],S+=m,h[z+3]<255&&(m=m*h[z+3]/250),A+=m*h[z],w+=m*h[z+1],E+=m*h[z+2],g+=m))}}d[x]=A/g,d[x+1]=w/g,d[x+2]=E/g,d[x+3]=R/S}return u}};W(Vr,"type","Resize"),W(Vr,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),W(Vr,"uniformLocations",["uDelta","uTaps"]),It.setClass(Vr);var Gr=class extends We{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.saturation;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a);e[i]+=l!==r?(l-r)*n:0,e[i+1]+=l!==o?(l-o)*n:0,e[i+2]+=l!==a?(l-a)*n:0}}sendUniformData(t,e){t.uniform1f(e.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};W(Gr,"type","Saturation"),W(Gr,"defaults",{saturation:0}),W(Gr,"uniformLocations",["uSaturation"]),It.setClass(Gr);var Hr=class extends We{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.vibrance;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a),c=(r+o+a)/3,h=2*Math.abs(l-c)/255*n;e[i]+=l!==r?(l-r)*h:0,e[i+1]+=l!==o?(l-o)*h:0,e[i+2]+=l!==a?(l-a)*h:0}}sendUniformData(t,e){t.uniform1f(e.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};W(Hr,"type","Vibrance"),W(Hr,"defaults",{vibrance:0}),W(Hr,"uniformLocations",["uVibrance"]),It.setClass(Hr);var zA=Object.freeze({__proto__:null,BaseFilter:We,BlackWhite:yw,BlendColor:Rr,BlendImage:Pr,Blur:Dr,Brightness:Ir,Brownie:pw,ColorMatrix:xs,Composed:cl,Contrast:Or,Convolute:Lr,Gamma:Fr,Grayscale:Nr,HueRotation:jo,Invert:Ur,Kodachrome:gw,Noise:kr,Pixelate:Br,Polaroid:xw,RemoveColor:zr,Resize:Vr,Saturation:Gr,Sepia:vw,Technicolor:_w,Vibrance:Hr,Vintage:mw});var qt=s=>Math.round(s*100)/100,ml=s=>s*Math.PI/180,nn=s=>"M"+s.map(t=>qt(t[0])+" "+qt(t[1])).join("L")+"Z",en=(s,t,e,n)=>`M${qt(s-e)} ${qt(t)}A${qt(e)} ${qt(n)} 0 1 1 ${qt(s+e)} ${qt(t)}A${qt(e)} ${qt(n)} 0 1 1 ${qt(s-e)} ${qt(t)}Z`,E_=(s,t,e,n)=>`M${qt(s-e)} ${qt(t)}A${qt(e)} ${qt(n)} 0 1 0 ${qt(s+e)} ${qt(t)}A${qt(e)} ${qt(n)} 0 1 0 ${qt(s-e)} ${qt(t)}Z`,ii=(s,t,e,n,i=0)=>i?`M${qt(s+i)} ${qt(t)}H${qt(s+e-i)}Q${qt(s+e)} ${qt(t)} ${qt(s+e)} ${qt(t+i)}V${qt(t+n-i)}Q${qt(s+e)} ${qt(t+n)} ${qt(s+e-i)} ${qt(t+n)}H${qt(s+i)}Q${qt(s)} ${qt(t+n)} ${qt(s)} ${qt(t+n-i)}V${qt(t+i)}Q${qt(s)} ${qt(t)} ${qt(s+i)} ${qt(t)}Z`:`M${qt(s)} ${qt(t)}H${qt(s+e)}V${qt(t+n)}H${qt(s)}Z`,pl=(s,t,e,n)=>`M${qt(s)} ${qt(t)}V${qt(t+n)}H${qt(s+e)}V${qt(t)}Z`,sp=(s,t,e,n,i,r=-90)=>nn(Array.from({length:e*2},(o,a)=>{let l=ml(r+a*180/e),c=a%2?i:n;return[s+Math.cos(l)*c,t+Math.sin(l)*c]})),pi=(s,t,e,n)=>[s+Math.cos(ml(n))*e,t+Math.sin(ml(n))*e];function ia(s,t,e,n,i,r,o=16){let a=[],l=[];for(let c=0;c<=o;c++){let h=n+(i-n)*c/o;a.push(pi(s,t,e+r/2,h)),l.unshift(pi(s,t,e-r/2,h))}return nn(a.concat(l))}function ww(){let s=7,t=()=>(s=s*16807%2147483647,s/2147483647),e="";for(let n=0;n<16;n++){let i=8+t()*84,r=8+t()*84,o=3+t()*3.5;if(n%3===0)e+=en(i,r,o,o);else{let a=t()*180,l=Math.cos(ml(a)),c=Math.sin(ml(a)),h=o*1.9,u=o*.7;e+=nn([[-h,-u],[h,-u],[h,u],[-h,u]].map(([d,f])=>[i+d*l-f*c,r+d*c+f*l]))}}return e}function Tw(){let s=en(50,50,46,46)+E_(50,50,41,41)+nn([0,1,2,3,4].map(t=>pi(50,50,16,-90+72*t)));for(let t=0;t<5;t++){let e=-90+72*t;s+=nn([pi(50,50,14,e-7),pi(50,50,31,e-3.4),pi(50,50,31,e+3.4),pi(50,50,14,e+7)]),s+=nn([pi(50,50,30,e-15),pi(50,50,43,e-21),pi(50,50,43,e+21),pi(50,50,30,e+15)])}return s}function Cw(){let s="";for(let t=0;t<6;t++){let[e,n]=pi(50,50,26,t*60-90);s+=en(e,n,17,17)}return s+E_(50,50,11,11)}function Ew(){let s=ii(2,14,96,3.5,1.5);for(let t=0;t<5;t++)s+=nn([[5+19*t,17.5],[19+19*t,17.5],[12+19*t,42]]);return s}var rp=[["box","Box",null,300,.7],["round","Rounded box",null,300,.7],["circle","Circle",null,240,1],["line","Line",null,300,.035],["triangle","Triangle",nn([[50,6],[96,92],[4,92]]),240,1],["diamond","Diamond",nn([[50,3],[93,50],[50,97],[7,50]]),220,1],["star","Star",sp(50,53,5,50,20),260,1],["heart","Heart","M50 91C22 69 5 52 5 32C5 18 16 7 30 7C39 7 46 12 50 20C54 12 61 7 70 7C84 7 95 18 95 32C95 52 78 69 50 91Z",240,1],["sparkle","Sparkle","M50 3Q56 44 97 50Q56 56 50 97Q44 56 3 50Q44 44 50 3Z",220,1],["seal","Seal",sp(50,50,18,48,41),280,1],["ribbon","Ribbon",nn([[2,30],[98,30],[87,50],[98,70],[2,70],[13,50]]),400,1],["pennant","Pennant",nn([[5,14],[96,50],[5,86]]),320,1],["bunting","Bunting",Ew(),440,1],["shield","Shield","M50 4L90 15V46C90 70 73 88 50 97C27 88 10 70 10 46V15Z",260,1],["arrow","Arrow",nn([[5,38],[57,38],[57,17],[96,50],[57,83],[57,62],[5,62]]),300,1],["bubble","Speech bubble",ii(6,10,88,58,16)+nn([[26,66],[48,66],[22,93]]),320,1],["cap","Graduation cap",nn([[50,13],[97,35],[50,57],[3,35]])+"M24 49L50 61L76 49V68C76 76 64 82 50 82C36 82 24 76 24 68Z"+nn([[86.4,40.6],[89.6,39.1],[89.6,67],[86.4,67]])+ii(84.5,67,7,15,2.5),320,1],["balloon","Balloon",en(50,37,29,34)+nn([[45.5,70],[54.5,70],[57.5,79],[42.5,79]])+"M49 79C55 85 43 90 49 97L52 97C46 90 58 85 52 79Z",240,1],["cake","Cake",ii(7,85,86,8,3)+ii(14,59,72,26,4)+ii(26,37,48,22,4)+ii(34.5,22,5,15,1.2)+ii(47.5,22,5,15,1.2)+ii(60.5,22,5,15,1.2)+en(37,14.5,3.2,5.2)+en(50,14.5,3.2,5.2)+en(63,14.5,3.2,5.2),280,1],["trophy","Trophy","M28 7H72V30C72 46 62 56 50 56C38 56 28 46 28 30Z"+ia(28,22,13,90,270,5)+ia(72,22,13,-90,90,5)+ii(45.5,55,9,18)+nn([[33,72],[67,72],[72,85],[28,85]])+ii(21,85,58,9,2),280,1],["crown","Crown",nn([[9,31],[29,54],[50,19],[71,54],[91,31],[84,79],[16,79]])+ii(16,83,68,10,2)+en(9,26,5.5,5.5)+en(50,13,6.5,6.5)+en(91,26,5.5,5.5),300,1],["confetti","Confetti",ww(),380,1],["sun","Sun",sp(50,50,12,49,30)+en(50,50,25,25),260,1],["flower","Flower",Cw(),260,1],["bolt","Lightning",nn([[59,3],[19,55],[44,55],[35,97],[81,40],[55,40]]),220,1],["note","Music note",en(30,79,17,13)+ii(41,13,6.5,68)+"M47.5 13C63 17 78 26 75 48C70 35 60 31 47.5 31Z",240,1],["paw","Paw",en(50,67,25,20)+en(21,41,10.5,13.5)+en(40,24,10.5,13.5)+en(60,24,10.5,13.5)+en(79,41,10.5,13.5),240,1],["football","Football","M4 50C24 16 76 16 96 50C76 84 24 84 4 50Z"+pl(32,48,36,4)+[36,44.7,53.3,62].map(s=>pl(s-1.5,41,3,7)+pl(s-1.5,52,3,7)).join(""),340,1],["basketball","Basketball",en(50,50,46,46)+pl(48.4,4.6,3.2,90.8)+[[6,20.4],[23.6,24.8],[51.6,24.8],[79.6,14.4]].map(([s,t])=>pl(s,48.4,t,3.2)).join("")+ia(-12,50,34,47,-47,3.2)+ia(112,50,34,227,133,3.2),260,1],["soccer","Soccer ball",Tw(),260,1],["baseball","Baseball",en(50,50,46,46)+ia(-10,50,42,44,-44,3.4)+ia(110,50,42,224,136,3.4),260,1]],Aw={back:"M14.5 5l-7 7 7 7",undo:"M4 9h11a5 5 0 010 10H8M4 9l4-4M4 9l4 4",redo:"M20 9H9a5 5 0 000 10h7M20 9l-4-4M20 9l-4 4",designs:"M4 4h7v16H4zM14 4h6v7h-6zM14 14h6v6h-6z",text:"M5 7V4h14v3M12 4v16M8.5 20h7",photos:"M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 9.6v.01",art:"M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.4l6-.8z",ground:"M12 3c4 5 6 8.2 6 11a6 6 0 01-12 0c0-2.8 2-6 6-11z",post:"M9 3h6v17H9zM6 21h12",plus:"M12 5v14M5 12h14",minus:"M5 12h14",copy:"M8 8h12v12H8zM16 8V4H4v12h4",up:"M12 4l8 5-8 5-8-5zM4 14l8 5 8-5",down:"M12 20l8-5-8-5-8 5zM4 10l8-5 8 5",center:"M12 3v18M6 7h12v3H6zM8 14h8v3H8z",trash:"M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13",turn:"M5 12a7 7 0 0112-5l2 2M19 5v4h-4M19 12a7 7 0 01-12 5l-2-2M5 19v-4h4",upload:"M12 16V4M7 9l5-5 5 5M4 20h16",crop:"M6 2v16h16M2 6h16v16",swap:"M4 8h13l-3-3M20 16H7l3 3",check:"M5 12.5l4.5 4.5L19 7",close:"M6 6l12 12M18 6L6 18",left:"M14.5 6l-6 6 6 6",right:"M9.5 6l6 6-6 6"},Ms=(s,t=20)=>`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Aw[s]}"/></svg>`,A_=[["none","Plain"],["stripes","Stripes"],["pin","Pinstripes"],["dots","Dots"],["checks","Checks"],["zigzag","Zigzag"],["flecks","Flecks"]];function op(s,t,e){let i=document.createElement("canvas");i.width=i.height=96;let r=i.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,96,96),r.fillStyle=e,r.strokeStyle=e,r.globalAlpha=.55,s==="stripes"){r.lineWidth=22,r.beginPath();for(let o=-96;o<192;o+=48)r.moveTo(o,108),r.lineTo(o+96+24,-12);r.stroke()}else if(s==="pin")for(let o=10;o<96;o+=24)r.fillRect(o,0,4,96);else if(s==="dots")[[24,24],[72,72]].forEach(([o,a])=>{r.beginPath(),r.arc(o,a,9,0,6.2832),r.fill()});else if(s==="checks")r.fillRect(0,0,48,48),r.fillRect(48,48,48,48);else if(s==="zigzag"){r.lineWidth=9,r.lineJoin="miter",r.beginPath();for(let o=12;o<144;o+=48){r.moveTo(-12,o+12);for(let a=0;a<=120;a+=24)r.lineTo(a,o+(a/24%2?-12:12))}r.stroke()}else if(s==="flecks"){let o=11,a=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<7;l++){let c=8+a()*80,h=8+a()*80;r.save(),r.translate(c,h),r.rotate(a()*3.1),r.fillRect(-9,-3,18,6),r.restore()}}return i}var Oe=476,Ce=6738,gl=3369,ap=Oe/4.875,P_=.036,Rw=.7,Pw="#E3E8F0",sr=[["Block","Barlow Condensed",800],["Clean","Barlow",600],["Varsity","Graduate",400],["Tall","Bebas Neue",400],["Poster","Anton",400],["Slab","Alfa Slab One",400],["Serif","DM Serif Display",400],["Classic","Playfair Display",700],["Retro script","Pacifico",400],["Formal script","Great Vibes",400],["Handwritten","Caveat",600],["Marker","Permanent Marker",400]],ws=["role","loose","pid","bw","zoomK","fx","fy","bgc","pat","fg","art","cover","wrap"],Dw={cornerSize:13,touchCornerSize:34,transparentCorners:!1,cornerColor:"#FFFFFF",cornerStrokeColor:"#14213D",borderColor:"#F2A900",borderScaleFactor:2,cornerStyle:"circle",padding:6,lockScalingFlip:!0,snapAngle:45,snapThreshold:4},Iw=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,sa=(s,t)=>document.fonts&&document.fonts.load?document.fonts.load(`${t} 48px "${s}"`).catch(()=>{}):Promise.resolve(),hn=(s,t,e)=>Math.max(t,Math.min(e,s));function vt(s,t,...e){let n=document.createElement(s);return Object.keys(t||{}).forEach(i=>{let r=t[i];r===!1||r==null||(i==="html"?n.innerHTML=r:i==="on"?Object.keys(r).forEach(o=>n.addEventListener(o,r[o])):i==="style"?Object.assign(n.style,r):i in n&&i!=="list"&&typeof r!="string"?n[i]=r:n.setAttribute(i,r))}),e.forEach(i=>{i!=null&&i!==!1&&n.appendChild(typeof i=="string"?document.createTextNode(i):i)}),n}var oa=new Map,Ow=0;function vl(s){return s.pid||(s.pid="x"+ ++Ow),oa.has(s.pid)||oa.set(s.pid,s),oa.get(s.pid)}var Ts=s=>[s.naturalWidth||s.width,s.naturalHeight||s.height];function du(s){if(s.gray)return s.gray;let[t,e]=Ts(s.color),n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");i.drawImage(s.color,0,0);try{let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=hn((.299*o[a]+.587*o[a+1]+.114*o[a+2]-128)*1.06+128,0,255);o[a]=o[a+1]=o[a+2]=l}i.putImageData(r,0,0)}catch{}return s.gray=n,n}var lp=null;function D_(){if(lp)return lp;let s=document.createElement("canvas");s.width=400,s.height=500;let t=s.getContext("2d");return t.fillStyle="#E1DACB",t.fillRect(0,0,400,500),t.strokeStyle="#A99F8C",t.lineWidth=4,t.setLineDash([16,14]),t.strokeRect(22,22,356,456),t.setLineDash([]),t.fillStyle="#A99F8C",t.fillRect(170,245,60,10),t.fillRect(195,220,10,60),lp=s,s}var gn=class s extends ui{getSrc(){return"mp:"+(this.pid||"")}toObject(t=[]){let e=super.toObject(ws.concat(t));return delete e.filters,delete e.crossOrigin,e}static fromObject(t){let e=Object.assign({},t);["type","src","filters","resizeFilter","crossOrigin","version"].forEach(i=>delete e[i]);let n=oa.get(e.pid);return Promise.resolve(new s(n?e.bw?du(n):n.color:D_(),e))}};gn.type="Photo";It.setClass(gn);It.setClass(gn,"Photo");function mi(s,t,e){let[n,i]=Ts(s.getElement()),r=s.wrap==null?1:4,o=Math.max(t*r/n,e/i)*(s.zoomK||1),a=t*r/o,l=e/o,c=hn((s.fx==null?.5:s.fx)*n,a/2,n-a/2),h=hn((s.fy==null?.5:s.fy)*i,l/2,i-l/2);s.set({cropX:c-a/2+(s.wrap||0)*a/r,cropY:h-l/2,width:a/r,height:l,scaleX:o,scaleY:o}),s.fx=Math.round(c/n*1e6)/1e6,s.fy=Math.round(h/i*1e6)/1e6,s.setCoords()}var hp=s=>s instanceof gn&&(!!s.cover||s.wrap!=null),R_=s=>s.forEach(t=>{hp(t)&&(t.set({left:0,top:0,angle:0}),mi(t,Oe,Ce))}),aa=class s extends Qn{toObject(t=[]){let e=super.toObject(ws.concat(t));return e.fill=this.bgc,e}static fromObject(t){let e=Object.assign({},t);delete e.type,delete e.version;let n=new s(e);return ra(n),Promise.resolve(n)}};aa.type="Ground";It.setClass(aa);It.setClass(aa,"Ground");function ra(s){s.set({fill:s.pat&&s.pat!=="none"?new qr({source:op(s.pat,s.bgc,s.fg||"#FFFFFF"),repeat:"repeat"}):s.bgc,dirty:!0})}var _l=s=>{let t=new aa({left:0,top:0,width:Oe,height:Ce,bgc:s,pat:"none",fg:"#FFFFFF",role:"ground",selectable:!1,evented:!1,strokeWidth:0});return ra(t),t};function si(s){if(s.role==="ground")return s.set({selectable:!1,evented:!1}),s;s.set(Dw),s.loose&&(s.perPixelTargetFind=!0);let t=hp(s);s.set({lockMovementX:t,lockMovementY:t,lockScalingX:t,lockScalingY:t,lockRotation:t,hasControls:!t,hoverCursor:t?"grab":null});let e=s instanceof je,n=s instanceof gn&&s.role!=="photo";return s.setControlsVisibility({ml:!e&&!n,mr:!e&&!n,mt:!e&&!n,mb:!e&&!n}),e&&s.set({editable:!Iw,cursorColor:"#F2A900",selectionColor:"rgba(242,169,0,.35)",editingBorderColor:"#F2A900"}),s}var fu=s=>P_*s.fontSize*(s.scaleY||1);function xl(s){let t=s.getCenterPoint();if(!(s instanceof je))return t;let e=s.angle*Math.PI/180;return new st(t.x+Math.sin(e)*fu(s),t.y-Math.cos(e)*fu(s))}function cp(s,t,e){if(s instanceof je){let n=s.angle*Math.PI/180;t-=Math.sin(n)*fu(s),e+=Math.cos(n)*fu(s)}s.setPositionByOrigin(new st(t,e),"center","center"),s.setCoords()}function Lw(s){if(s.t==="rect")return si(new Qn({left:s.x,top:s.y,width:s.w,height:s.h,fill:s.fill,role:"shape",strokeWidth:0}));if(s.t==="text"){let e=(s.angle||0)*Math.PI/180,n=P_*s.size,i=new Di(s.text,{originX:"center",originY:"center",left:s.cx-Math.sin(e)*n,top:s.cy+Math.cos(e)*n,angle:s.angle||0,fontFamily:s.family,fontWeight:s.weight,fontSize:s.size,charSpacing:Math.round(s.sp*1e3),fill:s.fill,role:"text"}),r=Array.from(s.text).length;return s.w&&r>1&&i.set("charSpacing",Math.round(i.charSpacing+(s.w-i.width)/(r-1)/s.size*1e3)),si(i)}if(s.t==="photo"){let e=s.entry?vl(s.entry):null,n=e?s.bw?du(e):e.color:D_(),i=new gn(n,{left:s.x,top:s.y,pid:e?e.pid:"",bw:!!s.bw,role:"photo",zoomK:1,fx:.5}),[,r]=Ts(n),[o]=Ts(n),a=Math.max(s.w/o,s.h/r),l=s.h/a;return i.fy=((r-l)*(s.bias==null?.5:s.bias)+l/2)/r,mi(i,s.w,s.h),s.frame&&i.set({left:s.x-s.frame,top:s.y-s.frame,stroke:"#FFFFFF",strokeWidth:2*s.frame,strokeUniform:!0,paintFirst:"stroke"}),si(i)}let t=vl({color:s.canvas});return si(new gn(t.color,{left:s.x,top:s.y,scaleX:s.w/t.color.width,scaleY:s.h/t.color.height,pid:t.pid,role:"art",loose:!!s.loose}))}function I_(s){ge.configure({devicePixelRatio:Math.min(window.devicePixelRatio||1,2)});let t=s.root,e=y=>t.querySelector("#"+y),n=[null,null,null,null],i=[[],[],[],[]],r=[0,0,0,0],o=["","","",""],a=[0,0,0,0],l=null,c=-1,h=!1,u=!1,d="",f="",p=[],x=null,m=null,g=null,S=0,A=0,w=sr[0],E="",R=!1,_=[1,2,3,0],v=hp,T=y=>v(y)&&!(x&&x.o===y),C=y=>v(y)?[Oe,Ce]:[y.width*y.scaleX,y.height*y.scaleY],P=()=>l.getObjects().find(y=>y instanceof gn&&y.wrap!=null),F=y=>y.type==="Photo"&&y.wrap!=null,z=y=>y?[y.pid,!!y.bw,y.zoomK,y.fx,y.fy].join("|"):"",I=()=>{let y=s.lead&&s.lead()||s.library()[0];return y?vl(y):null};function X(y,O,B){let Y=new gn(y.color,{left:0,top:0,pid:y.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.45,strokeWidth:0,cover:!B,wrap:B?_[O]:void 0});return mi(Y,Oe,Ce),si(Y)}function q(y){x&&x.o!==y&&v(x.o)&&(x.o.lockMovementX=x.o.lockMovementY=!0,x.o.hoverCursor="grab"),x=y?{o:y,left:y.left,top:y.top,fx:y.fx,fy:y.fy}:null,y&&v(y)&&(y.lockMovementX=y.lockMovementY=!1,y.hoverCursor="move")}let U=()=>window.innerWidth<760,et=()=>Promise.all([sa("Barlow Condensed",800),sa("Barlow Condensed",700),sa("Barlow",600)]);function L(y){let O=s.pieces(y);return[_l(O.bg)].concat(O.items.map(Lw))}function H(y){let O=new er(void 0,{width:Oe,height:Ce,enableRetinaScaling:!1,renderOnAddRemove:!1});y.forEach(Y=>O.add(Y)),O.renderAll();let B={json:O.toObject(ws),full:O.toCanvasElement(1)};return O.dispose(),B}function Z(y,O){if(n[y]&&(n[y].edited||!O))return Promise.resolve();O=O||n[y]&&n[y].origin||"name";let B=++a[y];return et().then(()=>{let Y=s.stamp?s.stamp():"";if(B!==a[y]||n[y]&&n[y].edited)return;let nt=H(L(O));n[y]={json:nt.json,full:nt.full,origin:O,edited:!1},o[y]=Y,i[y]=[JSON.stringify(nt.json)],r[y]=0})}function ut(){let y=s.stamp?s.stamp():"",O=[];return n.forEach((B,Y)=>{B&&!B.edited&&B.origin&&o[Y]!==y&&O.push(Z(Y,B.origin).then(()=>Y===c&&l?te(n[Y].json):null))}),Promise.all(O).then(()=>(O.length&&(Me(),An()),O.length))}function _t(y,O,B){let Y=l.width,nt=l.height,j=Math.min(.9,(nt-48)/Ce),K=Oe*y,dt=Ce*y;y=hn(y,j,3.2),O=K<=Y-24?(Y-Oe*y)/2:hn(O,Y-Oe*y-36,36),B=dt<=nt-48?(nt-Ce*y)/2:hn(B,nt-Ce*y-90,24),l.setViewportTransform([y,0,0,y,O,B]),e("st-zout").disabled=y<=j+1e-4,e("st-zin").disabled=y>=3.2-1e-4,t.dataset.zoom=y.toFixed(3),t.dataset.view=[y,O,B].map(Xt=>Math.round(Xt*1e3)/1e3).join(","),e("st-zfit").textContent=y<=j+.001?"Close up":"Whole face",jt(),kt()}let J=()=>l.viewportTransform;function yt(y,O,B){let Y=J(),nt=(y-Y[4])/Y[0],j=(O-Y[5])/Y[0],K=Math.min(.9,(l.height-48)/Ce);B=hn(B,K,3.2),_t(B,y-nt*B,O-j*B)}function wt(){let y=l.width,O=U()?hn(y*.62,150,240):hn(y*.46,300,440);_t(O/Oe,0,24)}function Ut(){_t(1e-4,0,0)}let St=()=>requestAnimationFrame(()=>{ae(),Ut(),e("st-panel").scrollTop=0});function Yt(y){let O=y.getCenterPoint(),B=J(),Y=O.y*B[0]+B[5];(Y<60||Y>l.height-60)&&_t(B[0],B[4],l.height/2-O.y*B[0])}function ae(){let y=e("st-cv"),O=y.clientWidth,B=y.clientHeight;if(!(!l||!O||!B)&&(O!==l.width||B!==l.height)){let Y=J(),nt=!l.__sized,j=Y[0]<=Math.min(.9,(l.height-48)/Ce)+.001;l.__sized=!0,l.setDimensions({width:O,height:B}),nt?wt():j?Ut():_t(Y[0],Y[4],Y[5]),Me()}}function jt(){let y=e("st-ruler"),O=Math.min(window.devicePixelRatio||1,2),B=y.clientWidth,Y=y.clientHeight;if(!B||!Y)return;(y.width!==Math.round(B*O)||y.height!==Math.round(Y*O))&&(y.width=Math.round(B*O),y.height=Math.round(Y*O));let nt=y.getContext("2d"),j=J(),K=ap*j[0];nt.setTransform(O,0,0,O,0,0),nt.clearRect(0,0,B,Y);let dt=K>=34?1:K>=12?3:K>=6?6:12;nt.fillStyle="#5B6780",nt.strokeStyle="#8B95A8",nt.lineWidth=1,nt.font="500 10.5px Barlow, system-ui, sans-serif",nt.textAlign="right",nt.textBaseline="middle";for(let Ne=0;Ne<=69;Ne++){let ve=Math.round(j[5]+Ne*K)+.5;if(ve<-4||ve>Y+4)continue;let dn=Ne%dt===0;K<5&&!dn||(nt.beginPath(),nt.moveTo(B-(dn?9:4),ve),nt.lineTo(B,ve),nt.stroke(),dn&&nt.fillText(Ne+(Ne===0?" in":""),B-11,Ne===0?ve+6:ve))}let Xt=j[5]+gl*j[0];Xt>0&&Xt<Y&&(nt.fillStyle="#B67A00",nt.beginPath(),nt.moveTo(B,Xt),nt.lineTo(B-8,Xt-5),nt.lineTo(B-8,Xt+5),nt.closePath(),nt.fill())}function _e(y){if(u)return;let O=J(),B=O[4],Y=O[5],nt=Oe*O[0],j=Ce*O[0],K=l.getRetinaScaling();y.save(),y.setTransform(K,0,0,K,0,0),y.strokeStyle="rgba(20,33,61,.55)",y.lineWidth=1,y.strokeRect(Math.round(B)-.5,Math.round(Y)-.5,Math.round(nt)+1,Math.round(j)+1);let dt=Math.round(Y+gl*O[0])+.5;y.setLineDash([7,5]),y.strokeStyle="#F2A900",y.lineWidth=1.5,y.beginPath(),y.moveTo(B-10,dt),y.lineTo(B+nt+10,dt),y.stroke(),y.setLineDash([]),y.font="600 11px Barlow, system-ui, sans-serif",y.fillStyle="#8A5E00",y.textBaseline="bottom",B+nt+96<l.width&&y.fillText("seam",B+nt+14,dt+5),y.strokeStyle="#E0457B",y.lineWidth=1,p.forEach(([Xt,Ne])=>{if(y.beginPath(),Xt==="v"){let ve=Math.round(B+Ne*O[0])+.5;y.moveTo(ve,Math.max(0,Y)),y.lineTo(ve,Math.min(l.height,Y+j))}else{let ve=Math.round(Y+Ne*O[0])+.5;y.moveTo(B,ve),y.lineTo(B+nt,ve)}y.stroke()}),y.restore()}function ce(){l=new $o(e("st-canvas"),{preserveObjectStacking:!0,selection:!1,enableRetinaScaling:!0,stopContextMenu:!0,controlsAboveOverlay:!0,fireRightClick:!1,targetFindTolerance:6}),l.overlayImage=new Ji(`M-90000 -90000H90000V90000H-90000ZM0 0V${Ce}H${Oe}V0Z`,{fill:Pw,strokeWidth:0,objectCaching:!1,selectable:!1,evented:!1}),["selection:created","selection:updated","selection:cleared"].forEach(j=>l.on(j,()=>{d="",q(null);let K=l.getActiveObject();K&&U()&&rn(""),ft(),K&&!v(K)&&Yt(K)})),l.on("after:render",({ctx:j})=>_e(j)),l.on("object:modified",({target:j})=>{p=[],x&&x.o===j&&(x.fx=j.fx,x.fy=j.fy),j instanceof je&&(j.scaleX!==1||j.scaleY!==1)&&j.set({fontSize:Math.max(8,j.fontSize*j.scaleX),scaleX:1,scaleY:1}),N(!0),ft()}),l.on("text:editing:entered",ft),l.on("text:editing:exited",()=>{N(!0),ft()}),l.on("text:changed",()=>{N(!1);let j=e("st-words");j&&document.activeElement!==j&&(j.value=l.getActiveObject().text)}),l.on("object:scaling",({target:j,transform:K})=>{j instanceof gn&&j.role==="photo"&&!v(j)&&K&&/^m[lrtb]$/.test(K.corner||"")&&mi(j,j.width*j.scaleX,j.height*j.scaleY)}),l.on("object:moving",({target:j})=>{if(x&&x.o===j){let ve=-j.angle*Math.PI/180,dn=j.left-x.left,Ml=j.top-x.top,Eu=dn*Math.cos(ve)-Ml*Math.sin(ve),wl=dn*Math.sin(ve)+Ml*Math.cos(ve),[M,V]=Ts(j.getElement());j.fx=x.fx-Eu/(j.scaleX*M),j.fy=x.fy-wl/(j.scaleY*V),j.set({left:x.left,top:x.top}),mi(j,...C(j));return}let K=xl(j),dt=7/J()[0];p=[];let Xt=K.x,Ne=K.y;Math.abs(K.x-Oe/2)<dt&&(Xt=Oe/2,p.push(["v",Xt])),[gl/2,gl+gl/2].forEach(ve=>{Math.abs(K.y-ve)<dt&&(Ne=ve,p.push(["h",ve]))}),p.length&&cp(j,Xt,Ne)}),l.on("mouse:up",()=>{p.length&&(p=[],l.requestRenderAll())});let y=null;l.on("mouse:down",({e:j,target:K})=>{(!K||T(K))&&j.type.indexOf("touch")<0&&(y={x:j.clientX,y:j.clientY,v:J().slice()})}),l.on("mouse:move",({e:j})=>{y&&j.buttons!==0?_t(y.v[0],y.v[4]+j.clientX-y.x,y.v[5]+j.clientY-y.y):y=null}),l.on("mouse:up",()=>{y=null}),l.on("mouse:wheel",({e:j})=>{j.preventDefault(),j.stopPropagation();let K=J(),dt=l.upperCanvasEl.getBoundingClientRect();j.ctrlKey||j.metaKey?yt(j.clientX-dt.left,j.clientY-dt.top,K[0]*Math.exp(-j.deltaY*.01)):_t(K[0],K[4]-(j.shiftKey?j.deltaY:j.deltaX),K[5]-(j.shiftKey?0:j.deltaY))});let O=l.wrapperEl,B=null,Y=j=>{let K=O.getBoundingClientRect();return{x:j.clientX-K.left,y:j.clientY-K.top}},nt=j=>{let K=Y(j.touches[0]),dt=Y(j.touches[1]);return{d:Math.hypot(K.x-dt.x,K.y-dt.y)||1,x:(K.x+dt.x)/2,y:(K.y+dt.y)/2}};O.addEventListener("touchstart",j=>{if(j.touches.length===2){l._currentTransform=null,B=Object.assign({kind:"pinch",v:J().slice()},nt(j)),j.preventDefault(),j.stopPropagation();return}if(j.touches.length!==1)return;let K=l.findTarget(j),dt=l.getActiveObject();if(dt&&K===dt&&!T(dt)){B=null;return}let Xt=Y(j.touches[0]);B={kind:"tap",x:Xt.x,y:Xt.y,v:J().slice(),target:K},j.preventDefault(),j.stopPropagation()},{capture:!0,passive:!1}),O.addEventListener("touchmove",j=>{if(!B)return;if(j.preventDefault(),j.stopPropagation(),B.kind==="pinch"&&j.touches.length>=2){let dt=nt(j),Xt=B.v[0]*dt.d/B.d,Ne=(B.x-B.v[4])/B.v[0],ve=(B.y-B.v[5])/B.v[0],dn=hn(Xt,Math.min(.9,(l.height-48)/Ce),3.2);_t(dn,dt.x-Ne*dn,dt.y-ve*dn);return}if(j.touches.length!==1)return;let K=Y(j.touches[0]);if(B.kind==="pinch"){B={kind:"pan",x:K.x,y:K.y,v:J().slice()};return}B.kind==="tap"&&Math.hypot(K.x-B.x,K.y-B.y)>7&&(B.kind="pan"),B.kind==="pan"&&_t(B.v[0],B.v[4]+K.x-B.x,B.v[5]+K.y-B.y)},{capture:!0,passive:!1}),O.addEventListener("touchend",j=>{if(B){if(j.touches.length===0){if(B.kind==="tap"){let K=l.getActiveObject();K&&K.isEditing&&K.exitEditing(),B.target?l.setActiveObject(B.target):l.discardActiveObject(),l.requestRenderAll()}B=null}else if(B.kind==="pinch"&&j.touches.length===1){let K=Y(j.touches[0]);B={kind:"pan",x:K.x,y:K.y,v:J().slice()}}j.preventDefault()}},{capture:!0,passive:!1}),"ResizeObserver"in window?new ResizeObserver(ae).observe(e("st-cv")):window.addEventListener("resize",ae)}function te(y){h=!0;let O=J().slice();return l.loadFromJSON(y).then(()=>{l.getObjects().forEach(si),R_(l.getObjects()),l.discardActiveObject(),l.setViewportTransform(O),l.requestRenderAll(),h=!1,R=!1,ft(),xn()})}let Ee=()=>l.getObjects().find(y=>y.role==="ground"),Fe=()=>l.getObjects().filter(y=>y.role!=="ground");function qe(){t.dataset.count=l?String(Fe().length):"0";let y=l&&Ee();t.dataset.ground=y?y.bgc+"|"+(y.pat||"none"):"",Ae()}function Ae(){let y=l&&l.getActiveObject();t.dataset.info=y?JSON.stringify({role:y.role||"",text:y.text||"",font:y.fontFamily||"",size:Math.round(y.fontSize||0),fill:typeof y.fill=="string"?y.fill:"",x:Math.round(xl(y).x),y:Math.round(xl(y).y),angle:Math.round(y.angle||0),pid:y.pid||"",bw:!!y.bw,w:Math.round(y.getScaledWidth()),h:Math.round(y.getScaledHeight()),zoom:y.zoomK||0,fx:y.fx||0,opacity:y.opacity,editing:!!y.isEditing,cover:!!y.cover,wrap:y.wrap==null?-1:y.wrap,even:Math.abs((y.scaleX||1)-(y.scaleY||1))<1e-6}):""}function xn(){e("st-undo").disabled=c<0||r[c]<1,e("st-redo").disabled=c<0||r[c]>=i[c].length-1,qe()}function Pe(){if(!l||c<0||h)return;let y=J(),O=l.getActiveObject(),B=O&&O.isEditing;u=!0;let Y=l.toCanvasElement(1/y[0],{left:y[4],top:y[5],width:Oe*y[0],height:Ce*y[0]});u=!1,n[c].full=Y,n[c].json=l.toObject(ws),B||l.requestRenderAll(),s.onChange(c),Vt(c);let nt=P();nt&&z(nt)!==E&&(E=z(nt),En(nt))}function En(y){let O={pid:y.pid,bw:!!y.bw,zoomK:y.zoomK,fx:y.fx,fy:y.fy},B=nt=>(nt.objects.filter(F).forEach(j=>Object.assign(j,O)),nt),Y=[];[0,1,2,3].forEach(nt=>{let j=n[nt];nt===c||!j||(i[nt]=i[nt].map(K=>K.indexOf('"wrap"')<0?K:JSON.stringify(B(JSON.parse(K)))),j.json.objects.some(F)&&(B(j.json),Y.push(Lt(nt,!0))))}),Y.length&&Promise.all(Y).then(()=>s.onChange(c))}function Lt(y,O){let B=n[y],Y=++a[y],nt=new er(void 0,{width:Oe,height:Ce,enableRetinaScaling:!1,renderOnAddRemove:!1});return nt.loadFromJSON(B.json).then(()=>{Y===a[y]&&n[y]===B&&y!==c&&(R_(nt.getObjects()),nt.renderAll(),B.json=nt.toObject(ws),B.full=nt.toCanvasElement(1),O||s.onChange(y),Vt(y)),nt.dispose()})}function Ht(){if(c<0||h||!R)return;R=!1;let y=JSON.stringify(l.toObject(ws)),O=i[c];O[r[c]]!==y&&(O.length=r[c]+1,O.push(y),O.length>40&&O.shift(),r[c]=O.length-1,xn())}function N(y){h||c<0||(n[c].edited=!0,R=!0,clearTimeout(S),S=setTimeout(Pe,y?60:220),clearTimeout(A),y?Ht():A=setTimeout(Ht,500),qe(),l.requestRenderAll())}function Re(y){if(h||c<0)return;clearTimeout(A),Ht();let O=r[c]+y;O<0||O>=i[c].length||(r[c]=O,n[c].edited=!0,te(JSON.parse(i[c][O])).then(()=>{Pe()}))}function Kt(y){if(h)return Promise.resolve();c>=0&&l&&(clearTimeout(S),clearTimeout(A),Ht(),Pe());let O=s.kindOf(y);return O!=="free"&&(n[y]=null),(O==="free"&&n[y]?Promise.resolve():Z(y,O==="free"?"name":O)).then(()=>(O!=="free"&&s.setKind(y,"free"),c=y,t.dataset.face=String(y+1),e("st-facename").textContent="Face "+(y+1)+" of 4",te(n[y].json))).then(()=>{E=z(P()),wt(),Me(),An(),s.turnTo(y),xn()})}function xe(y,O){return g=document.activeElement,t.hidden=!1,document.documentElement.classList.add("st-open"),s.onOpen(e("st-post")),l||ce(),Se(),rn(O||(U()?"":"designs")),ae(),Kt(y??0).then(()=>{ae();try{e("st-done").focus({preventScroll:!0})}catch{}})}function xt(){if(!l||t.hidden)return;let y=l.getActiveObject();y&&y.isEditing&&y.exitEditing(),l.discardActiveObject(),clearTimeout(S),clearTimeout(A),Ht(),Pe(),n.forEach((O,B)=>{O&&!O.edited&&(s.setKind(B,O.origin),n[B]=null,i[B]=[],r[B]=0)}),c=-1,t.hidden=!0,document.documentElement.classList.remove("st-open"),t.removeAttribute("data-post"),s.onClose();try{g&&g.focus&&g.focus({preventScroll:!0})}catch{}g=null}function Me(){let y=e("st-nav");if(!l)return;let O=hn(e("st-stage").clientHeight-(U()?84:92),160,640),B=Math.max(12,Math.round(O*Oe/Ce));y.textContent="",(U()?[c]:[0,1,2,3]).forEach(Y=>{if(Y<0)return;let nt=vt("canvas",{width:B*2,height:O*2,style:{width:B+"px",height:O+"px"}}),j=vt("button",{type:"button",class:"st-strip"+(Y===c?" on":""),"aria-label":"Face "+(Y+1)+(Y===c?", on the table":""),"data-side":String(Y),on:{click:()=>{Y!==c&&Kt(Y)}}},nt,vt("span",{class:"st-win"}),U()?null:vt("b",{},String(Y+1)));if(y.appendChild(j),Y===c){let K=dt=>{let Xt=nt.getBoundingClientRect(),Ne=(dt.clientY-Xt.top)/Xt.height*Ce,ve=J();_t(ve[0],ve[4],l.height/2-Ne*ve[0])};nt.addEventListener("pointerdown",dt=>{nt.setPointerCapture(dt.pointerId),K(dt),nt.onpointermove=K}),nt.addEventListener("pointerup",()=>{nt.onpointermove=null}),nt.addEventListener("pointercancel",()=>{nt.onpointermove=null})}}),[0,1,2,3].forEach(Vt),kt()}function Vt(y){let O=e("st-nav").querySelector('[data-side="'+y+'"]');if(!O)return;let B=O.querySelector("canvas"),Y=B.getContext("2d");Y.setTransform(1,0,0,1,0,0),Y.clearRect(0,0,B.width,B.height),n[y]&&n[y].full?Y.drawImage(n[y].full,0,0,B.width,B.height):s.drawSide(y,B)}function kt(){let y=e("st-nav").querySelector(".st-strip.on");if(!y||!l)return;let O=y.querySelector("canvas"),B=y.querySelector(".st-win"),Y=J(),nt=O.clientHeight/Ce,j=hn(-Y[5]/Y[0],0,Ce),K=hn((l.height-Y[5])/Y[0],0,Ce);B.style.top=O.offsetTop+j*nt+"px",B.style.height=Math.max(6,(K-j)*nt)+"px",B.hidden=K-j>=Ce-1}function D(){let y=J();return hn((l.height/2-y[5])/y[0],200,Ce-200)}let b=0;function $(y){y.set({top:hn(y.top+b++%4*60,60,Ce-60)}),y.setCoords(),l.add(y),l.setActiveObject(y),N(!0),ft()}let mt=()=>ct(Ee()?Ee().bgc:"#FFFFFF")<.4;function ht(y,O){let B=O&&O.font||w;return sa(B[1],B[2]).then(()=>{let Y=new Di(y,Object.assign({originX:"center",originY:"center",left:Oe/2,top:D(),fontFamily:B[1],fontWeight:B[2],fontSize:96,fill:mt()?"#F7F2E8":"#14213D",role:"text"},O&&O.set||{}));Y.angle===0&&Y.width>Oe-40&&Y.set("fontSize",Math.max(20,Math.floor(Y.fontSize*(Oe-40)/Y.width))),$(si(Y))})}function bt(y){let O=rp.find(Xt=>Xt[0]===y),B=s.getRoles(),Y=Ee(),nt=Y&&ct(B.accent)===ct(Y.bgc)?B.text:B.accent,j=Math.min(O[3],Oe-60),K={originX:"center",originY:"center",left:Oe/2,top:D(),fill:nt,role:"shape",art:y,strokeWidth:0},dt;y==="box"||y==="round"||y==="line"?dt=new Qn(Object.assign(K,{width:j,height:j*O[4],rx:y==="round"?28:0,ry:y==="round"?28:0})):y==="circle"?dt=new Zi(Object.assign(K,{radius:j/2})):(dt=new Ji(O[2],K),dt.set({scaleX:j/100,scaleY:j/100})),$(si(dt))}function Ct(y){let O=l.getActiveObject();if(O instanceof gn&&O.role==="photo"){let[dt,Xt]=C(O);O.pid=y.pid,O.setElement(O.bw?du(y):y.color),O.zoomK=1,O.fx=.5,O.fy=.42,mi(O,dt,Xt),N(!0),ft();return}let[B,Y]=Ts(y.color),nt=340,j=hn(nt*Y/B,240,520),K=new gn(y.color,{left:(Oe-nt)/2,top:D()-j/2,pid:y.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.42,stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"});mi(K,nt,j),$(si(K))}function at(y){h||c<0||y==="photo1"&&!I()||(h=!0,et().then(()=>{let O=y==="blank",B=y==="photo1",Y=s.getRoles().main,nt=O?[_l(Y)]:B?[_l(Y),X(I(),c,!1)]:L(y);l.discardActiveObject(),l.remove(...l.getObjects()),nt.forEach(j=>l.add(j)),h=!1,!O&&!B&&(n[c].origin=y),N(!0),n[c].edited=O||B,o[c]=s.stamp?s.stamp():"",ft(),An(),B&&(l.setActiveObject(nt[1]),rn("photos"),ft(),St())}))}function lt(){let y=I();if(h||c<0||!y)return;clearTimeout(A),Ht();let O=s.getRoles().main,B=X(y,c,!0);l.discardActiveObject(),l.remove(...l.getObjects()),l.add(_l(O)),l.add(B),[0,1,2,3].forEach(Y=>{if(Y===c)return;let nt=H([_l(O),X(y,Y,!0)]),j=n[Y]?n[Y].origin:s.kindOf(Y),K=n[Y]&&n[Y].edited?i[Y].slice(0,r[Y]+1):[];n[Y]={json:nt.json,full:nt.full,origin:j==="free"?"name":j,edited:!0},i[Y]=K.concat(JSON.stringify(nt.json)).slice(-40),r[Y]=i[Y].length-1,s.setKind(Y,"free")}),E=z(B),N(!0),Me(),l.setActiveObject(B),rn("photos"),ft(),St()}function Tt(y){return xe(y,"photos").then(()=>{if(n.some(O=>O&&O.edited)){let O=e("st-wrapall");if(O){O.scrollIntoView({block:"center"});try{O.focus({preventScroll:!0})}catch{}}}else lt()})}function k(y){if(h||c<0||y===c)return;clearTimeout(S),clearTimeout(A),Ht(),Pe();let O=n[c],B=document.createElement("canvas");B.width=Oe,B.height=Ce,B.getContext("2d").drawImage(O.full,0,0),n[y]={json:JSON.parse(JSON.stringify(O.json)),full:B,origin:O.origin,edited:!0};let Y=n[y].json.objects.filter(F);Y.forEach(nt=>{nt.wrap=_[y]}),i[y]=[JSON.stringify(n[y].json)],r[y]=0,s.setKind(y,"free"),s.onChange(y),Vt(y),Y.length&&Lt(y).then(()=>{i[y]=[JSON.stringify(n[y].json)],r[y]=0})}function ct(y){let O=parseInt(String(y).slice(1),16);if(isNaN(O))return 1;let B=[O>>16&255,O>>8&255,O&255].map(Y=>(Y/=255,Y<=.03928?Y/12.92:Math.pow((Y+.055)/1.055,2.4)));return .2126*B[0]+.7152*B[1]+.0722*B[2]}let ot=()=>l&&l.getActiveObject(),gt=y=>()=>{let O=ot();O&&(y(O),O.setCoords(),N(!0),ft())},pt=(y,O,B,Y)=>vt("button",Object.assign({type:"button",class:"st-b"+(Y&&Y.cls?" "+Y.cls:""),title:y,"aria-label":y,"aria-pressed":Y&&Y.pressed!=null?String(Y.pressed):null,on:{click:B}},Y&&Y.attrs||{}),O?vt("span",{html:Ms(O,18)}):null,Y&&Y.iconOnly?null:vt("span",{},Y&&Y.text||y)),Mt=y=>y.fontSize*(y.scaleY||1)*Rw/ap;function Ft(y,O){let B=vt("div",{class:"st-sw"});return s.palette.concat([["Bright white","#FFFFFF"]]).forEach(([Y,nt])=>B.appendChild(vt("button",{type:"button",class:"st-chip"+(String(y).toUpperCase()===nt.toUpperCase()?" on":""),title:Y,"aria-label":Y,style:{background:nt},on:{click:()=>O(nt)}}))),B.appendChild(vt("label",{class:"st-any",title:"Any color"},vt("span",{},"Any color"),vt("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(y)?y:"#14213D","aria-label":"Any color",on:{input:Y=>O(Y.target.value,!0)}}))),B}let Qt=(y,O,B,Y,nt,j,K)=>{let dt=vt("output",{},K(nt));return vt("label",{class:"st-slide"},vt("span",{},y),vt("input",{type:"range",min:String(O),max:String(B),step:String(Y),value:String(nt),"aria-label":y,on:{input:Xt=>{dt.textContent=K(+Xt.target.value),j(+Xt.target.value)}}}),dt)};function ft(){if(!l)return;let y=ot(),O=e("st-ctx"),B=e("st-more");O.textContent="",B.textContent="",t.dataset.sel=y?y.role||"shape":"",Ae();let Y=K=>()=>{d=d===K?"":K,q(d==="adjust"?ot():null),ft()},nt=(K,dt)=>vt("button",{type:"button",class:"st-b st-colorbtn","aria-label":dt,title:dt,"aria-expanded":String(d==="color"),on:{click:Y("color")}},vt("i",{style:{background:/^#/.test(K)?K:"#888"}}),vt("span",{},dt)),j=()=>[vt("span",{class:"st-gap"}),pt("Center","center",gt(K=>cp(K,Oe/2,xl(K).y)),{iconOnly:!0}),pt("Bring forward","up",gt(K=>l.bringObjectForward(K)),{iconOnly:!0}),pt("Send back","down",gt(K=>{l.getObjects().indexOf(K)>1&&l.sendObjectBackwards(K)}),{iconOnly:!0}),pt("Copy","copy",ee,{iconOnly:!0}),pt("Delete","trash",Wt,{iconOnly:!0,cls:"st-del"})].forEach(K=>O.appendChild(K));if(!y){let K=Ee();O.appendChild(vt("span",{class:"st-tip"},U()?"Tap anything to change it. Pinch to zoom.":"Click anything on the design to change it. Double-click words to retype them.")),K&&(O.appendChild(vt("span",{class:"st-gap"})),O.appendChild(nt(K.bgc,"Background"))),d==="color"&&K&&B.appendChild(Ft(K.bgc,(dt,Xt)=>{K.bgc=dt,ra(K),N(!Xt),Xt||ft()}));return}if(y instanceof je){let K=sr.find(dt=>dt[1]===y.fontFamily)||sr[0];O.appendChild(vt("input",{id:"st-words",class:"st-words",type:"text",maxlength:"80",autocomplete:"off","aria-label":"Words",value:y.text,on:{input:dt=>{y.set("text",dt.target.value.length?dt.target.value:" "),y.setCoords(),N(!1)}}})),O.appendChild(pt("Lettering: "+K[0],"text",()=>rn("text"),{text:K[0],cls:"st-fontbtn"})),O.appendChild(vt("span",{class:"st-size"},pt("Smaller","minus",gt(dt=>dt.set("fontSize",Math.max(10,dt.fontSize/1.08))),{iconOnly:!0}),vt("output",{title:"How tall the capital letters print"},Mt(y).toFixed(1)+" in"),pt("Larger","plus",gt(dt=>dt.set("fontSize",Math.min(1400,dt.fontSize*1.08))),{iconOnly:!0}))),O.appendChild(nt(y.fill,"Color")),O.appendChild(pt("Spacing",null,Y("space"),{pressed:d==="space"})),O.appendChild(pt(Math.abs(y.angle%180)>45?"Set across":"Set down the post","turn",gt(dt=>{let Xt=xl(dt);dt.set("angle",Math.abs(dt.angle%180)>45?0:90),cp(dt,Xt.x,Xt.y)}),{iconOnly:!0})),j(),d==="color"&&B.appendChild(Ft(y.fill,(dt,Xt)=>{y.set("fill",dt),N(!Xt),Xt||ft()})),d==="space"&&B.appendChild(Qt("Space between letters",-60,600,10,y.charSpacing,dt=>{y.set("charSpacing",dt),y.setCoords(),N(!1)},dt=>(dt>0?"+":"")+Math.round(dt/10)));return}if(y instanceof gn&&y.role==="photo"){O.appendChild(pt("Swap photo","swap",()=>rn("photos"))),O.appendChild(pt("Black and white",null,gt(K=>{let dt=oa.get(K.pid);if(!dt)return;let[Xt,Ne]=C(K);K.bw=!K.bw,K.setElement(K.bw?du(dt):dt.color),mi(K,Xt,Ne)}),{pressed:!!y.bw})),O.appendChild(pt("Move and zoom","crop",Y("adjust"),{pressed:d==="adjust"})),v(y)?(y.cover?O.appendChild(pt("Put it in a frame",null,gt(K=>{d="",q(null),K.cover=!1,K.zoomK=1,mi(K,340,440),K.set({left:68,top:hn(D()-220,40,Ce-480),stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),si(K),l.bringObjectToFront(K),requestAnimationFrame(()=>{wt(),Yt(K)})}))):O.appendChild(vt("span",{class:"st-tip"},"One photo around all four faces")),O.appendChild(vt("span",{class:"st-gap"})),O.appendChild(pt("Delete","trash",Wt,{iconOnly:!0,cls:"st-del"}))):(O.appendChild(pt("Border",null,Y("border"),{pressed:d==="border"})),O.appendChild(pt("Fill the face",null,gt(K=>{d="",q(null),K.set({angle:0,left:0,top:0,stroke:null,strokeWidth:0,cover:!0}),K.zoomK=1,mi(K,Oe,Ce),l.moveObjectTo(K,1),si(K),St()}))),j()),d==="adjust"&&(B.appendChild(Qt("Zoom",1,3,.02,y.zoomK||1,K=>{y.zoomK=K,mi(y,...C(y)),x&&(x.fx=y.fx,x.fy=y.fy),N(!1)},K=>Math.round(K*100)+"%")),B.appendChild(vt("span",{class:"st-tip"},y.wrap!=null?"Drag the photo to slide it around the post.":y.cover?"Drag the photo to choose the part that shows.":"Drag the photo to move it inside its frame."))),d==="border"&&(B.appendChild(Qt("Border",0,30,1,y.stroke?y.strokeWidth/2:0,K=>{let dt=y.getCenterPoint();y.set({stroke:K?y.stroke||"#FFFFFF":null,strokeWidth:2*K,strokeUniform:!0,paintFirst:"stroke"}),y.setPositionByOrigin(dt,"center","center"),y.setCoords(),N(!1)},K=>K?(K/ap).toFixed(2)+" in":"None")),B.appendChild(Ft(y.stroke||"#FFFFFF",(K,dt)=>{y.strokeWidth||y.set({strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),y.set("stroke",K),N(!dt),dt||ft()})));return}y instanceof gn?O.appendChild(vt("span",{class:"st-tip"},"Drag to move. Pull a corner to resize.")):(O.appendChild(nt(y.fill,"Color")),O.appendChild(pt("See-through",null,Y("fade"),{pressed:d==="fade"})),d==="color"&&B.appendChild(Ft(y.fill,(K,dt)=>{y.set("fill",K),N(!dt),dt||ft()})),d==="fade"&&B.appendChild(Qt("See-through",0,90,5,Math.round((1-y.opacity)*100),K=>{y.set("opacity",1-K/100),N(!1)},K=>K+"%"))),j()}function Wt(){let y=ot();y&&(l.remove(y),l.discardActiveObject(),N(!0),ft())}function ee(){let y=ot();!y||v(y)||y.clone(ws).then(O=>{O.set({left:y.left+26,top:y.top+40}),l.add(si(O)),l.setActiveObject(O),N(!0),ft()})}let Rt=[["designs","Designs","designs"],["text","Lettering","text"],["photos","Photos","photos"],["art","Artwork","art"],["ground","Background","ground"],["post","Post","post"]];function Se(){let y=e("st-rail");y.textContent="",Rt.forEach(([O,B,Y])=>y.appendChild(vt("button",{type:"button",class:"st-tab"+(O==="post"?" st-tab-post":""),"data-tab":O,"aria-pressed":"false",on:{click:()=>{O==="post"?(t.toggleAttribute("data-post"),rn(""),Xe()):rn(f===O&&U()?"":O)}}},vt("span",{html:Ms(Y,22)}),vt("span",{},B))))}function Xe(){e("st-rail").querySelectorAll(".st-tab").forEach(y=>y.setAttribute("aria-pressed",String(y.dataset.tab===f||y.dataset.tab==="post"&&t.hasAttribute("data-post"))))}function rn(y){f=y,t.dataset.tab=y,y&&t.removeAttribute("data-post"),Xe(),An(),requestAnimationFrame(ae)}let kn=(y,...O)=>vt("section",{class:"st-sec"},y?vt("h3",{},y):null,...O);function An(){let y=e("st-panel");if(y&&(y.textContent="",!(!f||c<0))){if(y.appendChild(vt("div",{class:"st-phead"},vt("strong",{},(Rt.find(O=>O[0]===f)||[])[1]||""),pt("Close","close",()=>rn(""),{iconOnly:!0,cls:"st-pclose"}))),f==="designs"){let O=s.fields(),B=vt("div",{class:"st-seg"});O.occasions.forEach(([dt,Xt])=>B.appendChild(vt("button",{type:"button","aria-pressed":String(O.occasion===dt),on:{click:()=>{s.setField("occasion",dt),ut().then(An)}}},Xt)));let Y=0,nt=dt=>Xt=>{s.setField(dt,Xt.target.value),clearTimeout(Y),Y=setTimeout(()=>ut().then(ha),350)};y.appendChild(kn("Make it yours",B,vt("div",{class:"st-two"},vt("label",{},vt("span",{},"Name"),vt("input",{type:"text",maxlength:"16",value:O.name,placeholder:O.namePlaceholder,on:{input:nt("name")}})),vt("label",{},vt("span",{},O.second.label),vt("input",{type:"text",inputmode:"numeric",maxlength:"4",value:O.second.value,placeholder:O.second.placeholder,on:{input:nt(O.second.key)}}))),vt("div",{class:"st-lab"},"Main color"),bl(O.main,"main"),vt("div",{class:"st-lab"},"Second color"),bl(O.accent,"accent")));let j=vt("div",{class:"st-cards",id:"st-cards"});s.kinds.forEach(([dt,Xt])=>j.appendChild(vt("button",{type:"button",class:"st-card"+(n[c]&&n[c].origin===dt&&!n[c].edited?" on":""),"data-kind":dt,on:{click:()=>at(dt)}},vt("canvas",{width:176,height:520}),vt("span",{},Xt)))),j.appendChild(vt("button",{type:"button",class:"st-card","data-kind":"photo1",on:{click:()=>at("photo1")}},vt("canvas",{width:176,height:520}),vt("span",{},"Full photo"))),j.appendChild(vt("button",{type:"button",class:"st-card","data-kind":"wrap",on:{click:ca(lt)}},vt("canvas",{width:176,height:520}),vt("span",{},"Wrap-around photo"))),j.appendChild(vt("button",{type:"button",class:"st-card","data-kind":"blank",on:{click:()=>at("blank")}},vt("canvas",{width:176,height:520}),vt("span",{},"Blank"))),y.appendChild(kn("Designs for face "+(c+1),j,vt("p",{class:"st-fine"},"Pick one, then change anything on it. Undo brings the last design back.")));let K=vt("div",{class:"st-seg"});[0,1,2,3].filter(dt=>dt!==c).forEach(dt=>K.appendChild(vt("button",{type:"button",on:{click:Xt=>{k(dt),Xt.target.textContent="Face "+(dt+1)+" done"}}},"Face "+(dt+1)))),y.appendChild(kn("Use this design on another face too",K)),ha()}else if(f==="text"){let O=vt("div",{class:"st-adds"});[["Add a headline","YOUR HEADLINE",{font:sr[0]}],["Add a small line","A LINE OF SMALL WORDS",{font:sr[1],set:{fontSize:34,charSpacing:260}}],["Add words down the post","DOWN THE POST",{font:sr[0],set:{angle:90,fontSize:300}}],["Add script","With love",{font:sr[8],set:{fontSize:110}}]].forEach(([j,K,dt])=>O.appendChild(vt("button",{type:"button",class:"st-add",style:{fontFamily:`"${dt.font[1]}"`,fontWeight:String(dt.font[2])},on:{click:()=>ht(K,dt)}},j)));let B=vt("div",{class:"st-fonts"}),Y=ot(),nt=Y instanceof je?Y.fontFamily:w[1];sr.forEach(j=>{sa(j[1],j[2]),B.appendChild(vt("button",{type:"button",class:"st-font"+(j[1]===nt?" on":""),on:{click:()=>{w=j;let K=ot();K instanceof je?sa(j[1],j[2]).then(()=>{K.set({fontFamily:j[1],fontWeight:j[2]}),K.setCoords(),N(!0),ft(),An()}):ht(j[0]==="Formal script"||j[0]==="Retro script"||j[0]==="Handwritten"?"Your words":"YOUR WORDS",{font:j})}}},vt("span",{style:{fontFamily:`"${j[1]}"`,fontWeight:String(j[2])}},s.fields().name||s.fields().namePlaceholder),vt("small",{},j[0])))}),y.appendChild(kn("Add words",O)),y.appendChild(kn(Y instanceof je?"Lettering for the words you picked":"Lettering",B))}else if(f==="photos"){let O=ot(),B=O instanceof gn&&O.role==="photo",Y=vt("div",{class:"st-photos"}),nt=vt("input",{type:"file",accept:"image/*",multiple:!0,class:"st-file",id:"st-file",on:{change:j=>{s.addPhotos(j.target.files).then(K=>{j.target.value="",(K.length===1||K.length&&v(ot()))&&Ct(vl(K[0])),An()})}}});s.library().forEach(j=>{let K=vl(j),dt=vt("canvas",{width:180,height:180}),Xt=dt.getContext("2d"),[Ne,ve]=Ts(K.color),dn=Math.max(180/Ne,180/ve);Xt.drawImage(K.color,(Ne-180/dn)/2,(ve-180/dn)*.4,180/dn,180/dn,0,0,180,180),Y.appendChild(vt("button",{type:"button",class:"st-photo","aria-label":K.sample?"Sample photo":"Your photo",on:{click:()=>Ct(K)}},dt,K.sample?vt("small",{},"Sample"):null))}),y.appendChild(kn(B?"Swap the photo you picked":"Photos",vt("label",{class:"st-upload",for:"st-file"},vt("span",{html:Ms("upload",20)}),vt("span",{},"Add your photos")),nt,vt("p",{class:"st-fine"},B?v(O)?"Tap a photo to use it instead. Your photos stay on this device.":"Tap a photo to put it in the frame you picked.":"Tap a photo to place it. Your photos stay on this device."),Y)),y.appendChild(kn("Just a photo",vt("div",{class:"st-adds"},vt("button",{type:"button",class:"st-add st-plain",id:"st-one",on:{click:()=>at("photo1")}},"Fill this face with one photo"),vt("button",{type:"button",class:"st-add st-plain",id:"st-wrapall",on:{click:ca(lt)}},"Wrap one photo around the post")),vt("p",{class:"st-fine"},"The photo covers everything, edge to edge. A tall photo with its subject in the middle works best. Move and zoom chooses the part that shows.")))}else if(f==="art"){let O=vt("div",{class:"st-arts"});rp.forEach(([B,Y,nt])=>O.appendChild(vt("button",{type:"button",class:"st-art",title:Y,"aria-label":Y,on:{click:()=>bt(B)},html:`<svg viewBox="0 0 100 100" aria-hidden="true">${nt?`<path d="${nt}"/>`:B==="circle"?'<circle cx="50" cy="50" r="40"/>':B==="line"?'<rect x="8" y="46" width="84" height="8"/>':`<rect x="12" y="24" width="76" height="52" rx="${B==="round"?12:0}"/>`}</svg>`}))),y.appendChild(kn("Artwork",O,vt("p",{class:"st-fine"},"Tap a piece to drop it on the design, then give it any color.")))}else if(f==="ground"){let O=Ee();if(!O)return;let B=vt("div",{class:"st-pats"});A_.forEach(([Y,nt])=>{let j=Y==="none"?vt("canvas",{width:96,height:96}):op(Y,O.bgc,O.fg);if(Y==="none"){let K=j.getContext("2d");K.fillStyle=O.bgc,K.fillRect(0,0,96,96)}B.appendChild(vt("button",{type:"button",class:"st-pat"+((O.pat||"none")===Y?" on":""),on:{click:()=>{O.pat=Y,ra(O),N(!0),An()}}},j,vt("span",{},nt)))}),y.appendChild(kn("Background color",Ft(O.bgc,(Y,nt)=>{O.bgc=Y,ra(O),N(!nt),nt||(ft(),An())}))),y.appendChild(kn("Pattern",B)),O.pat&&O.pat!=="none"&&y.appendChild(kn("Pattern color",Ft(O.fg,(Y,nt)=>{O.fg=Y,ra(O),N(!nt),nt||An()})))}}}function bl(y,O){let B=vt("div",{class:"st-sw"});return s.palette.forEach(([Y,nt])=>B.appendChild(vt("button",{type:"button",class:"st-chip"+(y===Y?" on":""),title:Y,"aria-label":Y,"aria-pressed":String(y===Y),style:{background:nt},on:{click:()=>{s.setField(O,Y),ut().then(An)}}}))),B}function ca(y){return O=>{let B=O.currentTarget,Y=B.querySelector("span")||B;if(B.dataset.ask){delete B.dataset.ask,y();return}B.dataset.ask="1",B.dataset.was=Y.textContent,Y.textContent="Replaces all four faces. Tap again.",setTimeout(()=>{B.dataset.ask&&(delete B.dataset.ask,Y.textContent=B.dataset.was)},6e3)}}function ha(){let y=e("st-cards");y&&y.querySelectorAll(".st-card").forEach(O=>{let B=O.querySelector("canvas");if(O.dataset.kind==="photo1"||O.dataset.kind==="wrap"){let Y=B.getContext("2d"),nt=I();if(Y.fillStyle=s.getRoles().main,Y.fillRect(0,0,B.width,B.height),nt){let j=nt.color,[K,dt]=Ts(j),Xt=Math.max(B.width/K,B.height/dt);Y.drawImage(j,(K-B.width/Xt)/2,(dt-B.height/Xt)*.4,B.width/Xt,B.height/Xt,0,0,B.width,B.height)}O.dataset.kind==="wrap"&&(Y.fillStyle="#fff",[1,2,3].forEach(j=>Y.fillRect(Math.round(j*B.width/4)-2,0,4,B.height)))}else if(O.dataset.kind==="blank"){let Y=B.getContext("2d");Y.fillStyle=s.getRoles().main,Y.fillRect(0,0,B.width,B.height)}else s.drawKind(O.dataset.kind,B)})}return e("st-undo").innerHTML=Ms("undo")+"<span>Undo</span>",e("st-redo").innerHTML=Ms("redo")+"<span>Redo</span>",e("st-close").innerHTML=Ms("back")+"<span>Back</span>",e("st-prev").innerHTML=Ms("left",18),e("st-next").innerHTML=Ms("right",18),e("st-undo").addEventListener("click",()=>Re(-1)),e("st-redo").addEventListener("click",()=>Re(1)),e("st-done").addEventListener("click",xt),e("st-close").addEventListener("click",xt),e("st-prev").addEventListener("click",()=>Kt((c+3)%4)),e("st-next").addEventListener("click",()=>Kt((c+1)%4)),e("st-zout").addEventListener("click",()=>{let y=J();yt(l.width/2,l.height/2,y[0]/1.35)}),e("st-zin").addEventListener("click",()=>{let y=J();yt(l.width/2,l.height/2,y[0]*1.35)}),e("st-zfit").addEventListener("click",()=>{J()[0]<=Math.min(.9,(l.height-48)/Ce)+.001?wt():Ut()}),document.addEventListener("keydown",y=>{if(t.hidden||!l)return;let O=ot(),B=/^(INPUT|SELECT|TEXTAREA)$/.test(y.target.tagName)||O&&O.isEditing,Y=y.ctrlKey||y.metaKey,nt=y.key.toLowerCase();if(y.key==="Escape"){if(O&&O.isEditing)return;O?(l.discardActiveObject(),l.requestRenderAll()):xt();return}if(!B)if(Y&&nt==="z")y.preventDefault(),Re(y.shiftKey?1:-1);else if(Y&&nt==="y")y.preventDefault(),Re(1);else if(Y&&nt==="c"&&O&&!v(O))O.clone(ws).then(j=>{m=j});else if(Y&&nt==="v"&&m)y.preventDefault(),m.clone(ws).then(j=>{j.set({left:j.left+26,top:hn(D()-100,0,Ce-100)}),l.add(si(j)),l.setActiveObject(j),N(!0),ft()});else if(Y&&nt==="d"&&O)y.preventDefault(),ee();else if((y.key==="Delete"||y.key==="Backspace")&&O)y.preventDefault(),Wt();else if(O&&/^arrow/.test(nt)&&v(O)){y.preventDefault();let j=y.shiftKey?40:8,[K,dt]=Ts(O.getElement());O.fx-=(nt==="arrowleft"?-j:nt==="arrowright"?j:0)/(O.scaleX*K),O.fy-=(nt==="arrowup"?-j:nt==="arrowdown"?j:0)/(O.scaleY*dt),mi(O,Oe,Ce),x&&x.o===O&&(x.fx=O.fx,x.fy=O.fy),N(!1)}else if(O&&/^arrow/.test(nt)){y.preventDefault();let j=y.shiftKey?10:2;O.set({left:O.left+(nt==="arrowleft"?-j:nt==="arrowright"?j:0),top:O.top+(nt==="arrowup"?-j:nt==="arrowdown"?j:0)}),O.setCoords(),N(!1)}else nt==="+"||nt==="="?e("st-zin").click():nt==="-"&&e("st-zout").click()}),{art:n,open:xe,openWrap:Tt,close:xt,start:Z,refresh:ut,show:Kt,isOpen:()=>!t.hidden,store:oa}}var bu=.0254,gp=5.25*bu,vu=34.5*bu,V_=0,G_=.03,up=.045,pu=.15,_p=G_+2*vu+V_,xp=.005,vp=.022,mu=gp+.009,gu=_p+xp+vp,io=384,_u=Math.round(io*34.5/5.25),yu=io*.1875/5.25,le=476,is=3369,ri=6738,Cs=70,dp=(io-2*yu)/le,se=Cs,he=is+Cs,yp=[["Navy","#14213D"],["Royal","#1F4FBF"],["Sky","#6CB4EE"],["Forest","#14532D"],["Kelly","#1E9E4A"],["Teal","#178F8B"],["Maroon","#6B1524"],["Red","#B3202A"],["Coral","#EF6A55"],["Orange","#F26B21"],["Gold","#F2A900"],["Purple","#4B2A85"],["Pink","#E75480"],["Black","#161616"],["Silver","#B8BCC2"],["White","#F7F2E8"]],O_=Object.fromEntries(yp),L_="#F7F2E8",cr="#14213D",Fi="#FFD23F",Xn="#F7F2E8",Ni={graduation:{label:"Graduation",main:"Navy",accent:"Gold",name:"Maya",samples:["grad","caps","skyline","field","grad"]},birthday:{label:"Birthday",main:"Coral",accent:"Teal",name:"Eli",samples:["balloons","cake","bokeh","road","balloons"]},"senior-night":{label:"Senior night",main:"Maroon",accent:"Black",name:"Jordan",samples:["field","bokeh","skyline","field","road"]}};function F_(s){let t=parseInt(s.slice(1),16),e=[t>>16&255,t>>8&255,t&255].map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*e[0]+.7152*e[1]+.0722*e[2]}function la(s,t){let e=F_(s),n=F_(t);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}var yl=s=>la(L_,s)>=2.4?L_:cr;function _i(s,t,e,n){return la(s,t)>=e?s:n}var Ot={occasion:"graduation",name:"",year:"2027",school:"",age:"10",number:"12",sport:"",team:"",line1:"",line2:"",line3:"",main:null,accent:null,photos:[],bw:!0,faces:["name","photos","name","photos"],msg:"",more:"",from:"",line4:"",link:"",signed:!1},Wn=(s,t)=>String(s||"").trim()||t,Es={};function Sl(){let s=Ni[Ot.occasion],t=O_[Ot.main||s.main],e=O_[Ot.accent||s.accent],n=yl(t),i=_i(e,t,2.2,n),r=la(t,Xn)>=1.6?t:la(e,Xn)>=1.6?e:cr,o=yl(r),a=_i(e,r,2.2,o),l=la(t,Xn)>=3?t:la(e,Xn)>=3?e:cr,c=yl(e);return{main:t,accent:e,text:n,accentText:i,blockBg:r,blockInk:o,blockAccent:a,caption:l,accentInk:c}}var sn=null,Cp=.7,Tu=(s,t,e,n,i,r,o,a,l,c)=>{String(s).trim()&&sn.push({t:"text",text:String(s),cx:t,cy:e,size:n,sp:i,weight:r,family:o,fill:a,angle:l||0,w:c||0})};function H_(s,t,e,n,i,r){let o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*i)),o.height=Math.max(1,Math.round(n*i));let a=o.getContext("2d");a.scale(i,i),a.translate(-s,-t);let l=sn;sn=null;try{r(a)}finally{sn=l}return o}function un(s,t,e,n,i,r){if(sn){sn.push({t:"rect",x:t,y:e,w:n,h:i,fill:r});return}s.fillStyle=r,s.fillRect(t,e,n,i)}function fp(s,t,e,n){un(s,0,t,le,e,n)}function ar(s,t,e,n){fp(s,0,Cs,t),fp(s,is-Cs,2*Cs,e),fp(s,ri-Cs,Cs,n)}function lr(s,t,e,n,i=3){un(s,(le-e)/2,t,e,i,n)}function N_(s,t,e){let n=0;for(let i of t)n+=s.measureText(i).width+e;return n-e}function Ep(s,t,e,n,i){for(let r of t)s.fillText(r,e,n),e+=s.measureText(r).width+i}function Cu(s,t,e,n,i,r){s.font=e(n);let o=N_(s,t,i*n);return o>r&&(n=Math.max(8,Math.floor(n*r/o)),s.font=e(n),o=N_(s,t,i*n)),{size:n,w:o}}function As(s,t,e,n,i=40,r=.3,o=600,a="Barlow",l=1.75){s.fillStyle=n,s.textAlign="left",s.textBaseline="alphabetic",t.forEach((c,h)=>{let u=String(c).toUpperCase(),d=Cu(s,u,p=>`${o} ${p}px "${a}"`,i,r,le-44),f=e+h*l*i+1.275*i;if(sn){Tu(u,le/2,f-Cp*d.size/2,d.size,r,o,a,n,0,d.w);return}Ep(s,u,(le-d.w)/2,f,r*d.size)})}function no(s,t,e,n,i,r,o=800,a=.03){let l=String(t).toUpperCase(),c=Cu(s,l,u=>`${o} ${u}px "Barlow Condensed"`,i,a,n),h=.7*c.size;if(sn){Tu(l,le/2,e+n/2,c.size,a,o,"Barlow Condensed",r,90,c.w);return}s.save(),s.translate(le/2,e+(n-c.w)/2),s.rotate(Math.PI/2),s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Ep(s,l,0,h/2,a*c.size),s.restore()}function rr(s,t,e,n,i){let r=Cu(s,t,a=>`800 ${a}px "Barlow Condensed"`,n,0,le-30),o=e+.83*n-(n-r.size)*.35;if(sn){Tu(t,le/2,o-Cp*r.size/2,r.size,0,800,"Barlow Condensed",i);return}s.fillStyle=i,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,le/2,o)}function Un(s,t,e,n,i,r,o,a=44){un(s,34,t,le-68,e,n),i=i.filter(h=>String(h).trim());let l=1.5*a,c=t+(e-i.length*l)/2;s.textAlign="left",s.textBaseline="alphabetic",i.forEach((h,u)=>{let d=String(h).toUpperCase(),f=Cu(s,d,m=>`700 ${m}px "Barlow Condensed"`,a,.14,le-68-36),p=c+u*l+1.15*a-(a-f.size)*.3,x=o&&u===0?o:r;if(sn){Tu(d,le/2,p-Cp*f.size/2,f.size,.14,700,"Barlow Condensed",x,0,f.w);return}s.fillStyle=x,Ep(s,d,(le-f.w)/2,p,.14*f.size)})}var gi=(s,t,e,n)=>As(s,[t],e,n,30,.34,600);function Fw(s,t,e,n,i,r,o=.38){let a=t.naturalWidth||t.width,l=t.naturalHeight||t.height,c=Math.max(i/a,r/l),h=i/c,u=r/c;s.drawImage(t,(a-h)/2,(l-u)*o,h,u,e,n,i,r)}function _n(s,t,e,n){let r=le-68,o=Ot.photos.length>0,a=o?Ot.photos[t]:Es[Ni[Ot.occasion].samples[t]],l=a?o?Ot.bw?a.gray:a.color:a:null;if(sn){sn.push({t:"photo",entry:a?o?a:Tp(Ni[Ot.occasion].samples[t]):null,bw:!!(o&&Ot.bw),x:34,y:e,w:r,h:n,frame:5,bias:.38});return}if(un(s,29,e-5,r+10,n+10,"#FFFFFF"),l){Fw(s,l,34,e,r,n);return}un(s,34,e,r,n,"#E1DACB"),s.strokeStyle="#A99F8C",s.lineWidth=3,s.setLineDash([14,12]),s.strokeRect(48,e+14,r-28,n-28),s.setLineDash([]),un(s,le/2-26,e+n/2-3,52,6,"#A99F8C"),un(s,le/2-3,e+n/2-26,6,52,"#A99F8C")}function Nw(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Sp(s,t,e,n,i,r){if(sn){sn.push({t:"art",canvas:H_(0,e-24,le,n-e+48,.5,a=>Sp(a,t,e,n,i,r)),x:0,y:e-24,w:le,h:n-e+48,loose:!0});return}let o=Nw(r);for(let a=0;a<i;a++){let l=o()<.5?8+o()*88:le-96+o()*88,c=e+o()*(n-e),h=9+o()*11;s.fillStyle=t[Math.floor(o()*t.length)],o()<.5?(s.beginPath(),s.arc(l+h/2,c+h/2,h/2,0,6.2832),s.fill()):(s.save(),s.translate(l+h*.75,c+h*.28),s.rotate((o()-.5)*2.1),s.fillRect(-h*.75,-h*.28,h*1.5,h*.55),s.restore())}}var Uw=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one"],kw=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),Bw={graduation:{A(s,t,e){un(s,0,0,le,ri,t.main),ar(s,t.accent,t.accent,t.accent),As(s,["Congrats, grad"],se+150,t.accentText,32,.26),lr(s,se+250,90,t.accentText),no(s,e.name,se+420,1830,560,t.text),lr(s,se+2330,90,t.accentText),As(s,[e.school],se+2380,t.text,36,.22),no(s,"Class of "+e.year,he+110,3e3,436,t.accentText)},B(s,t,e){un(s,0,0,le,ri,Xn),ar(s,t.accent,t.accent,t.accent),_n(s,0,se+90,900),gi(s,"Freshman year",se+1020,t.caption),_n(s,1,se+1130,900),gi(s,"Senior year",se+2060,t.caption),_n(s,2,se+2170,700),Un(s,se+2930,250,t.blockBg,[e.school,"Class of "+e.year],t.blockInk,t.blockAccent),Un(s,he+50,170,t.blockBg,["#"+kw(e.name).replace(/[^A-Za-z0-9]/g,"")+"Grad"+e.year.slice(-2)],t.blockAccent),_n(s,3,he+300,820),gi(s,"Then",he+1150,t.caption),_n(s,4,he+1260,980),gi(s,"And now",he+2270,t.caption),Un(s,he+2420,760,t.blockBg,[e.line1,e.line2,e.line3],t.blockInk,t.blockAccent,64)}},birthday:{A(s,t,e){un(s,0,0,le,ri,t.main);let n=[_i(Fi,t.main,1.5,t.text),t.text,_i(t.accent,t.main,1.5,t.text)];Sp(s,n,se+60,is-Cs-60,34,5),Sp(s,n,he+60,ri-Cs-60,34,8),ar(s,Fi,t.accent,Fi),As(s,["Happy birthday"],se+150,t.text,32,.26),lr(s,se+250,90,_i(Fi,t.main,1.5,t.text)),no(s,e.name,se+520,1500,660,t.text),lr(s,se+2120,90,_i(Fi,t.main,1.5,t.text));let i=parseInt(e.age,10);As(s,["Look who is "+(Uw[i]||e.age)],se+2170,t.text,32,.26);let r=String(e.age);r.length===1?rr(s,r,he+690,1e3,t.text):r.length===2?(rr(s,r[0],he+240,1e3,t.text),rr(s,r[1],he+1140,1e3,t.text)):(rr(s,r[0],he+210,720,t.text),rr(s,r[1],he+890,720,t.text),rr(s,r[2],he+1570,720,t.text)),Un(s,he+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,_i(Fi,t.accent,2.2,t.accentInk),64)},B(s,t,e){un(s,0,0,le,ri,Xn),ar(s,Fi,t.accent,Fi),_n(s,0,se+90,980),gi(s,"Look who is "+e.age,se+1100,t.caption),_n(s,1,se+1210,860),gi(s,"Make a wish",se+2100,t.caption),_n(s,2,se+2210,900),Un(s,he+50,170,t.blockBg,[e.age+" years of "+e.name],t.blockInk),_n(s,3,he+300,900),gi(s,"Then",he+1230,t.caption),_n(s,4,he+1340,900),gi(s,"And now",he+2270,t.caption),Un(s,he+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,_i(Fi,t.accent,2.2,t.accentInk),64)}},"senior-night":{A(s,t,e){un(s,0,0,le,ri,t.main),ar(s,t.accent,t.accent,t.accent),As(s,["Senior night"],se+150,t.text,32,.26),lr(s,se+250,90,t.text),no(s,e.name,se+400,1850,520,t.text),rr(s,e.number,se+2330,600,t.text),no(s,"Senior night "+e.year,he+110,3e3,344,t.text)},B(s,t,e){un(s,0,0,le,ri,Xn),ar(s,t.accent,t.accent,t.accent),Un(s,se+60,330,t.blockBg,["#"+e.number],t.blockInk,null,190),_n(s,0,se+470,1e3),gi(s,"Freshman year",se+1500,t.caption),_n(s,1,se+1610,760),gi(s,"Senior year",se+2400,t.caption),Un(s,se+2520,250,_i(t.accent,Xn,1.6,cr),[e.sport],yl(_i(t.accent,Xn,1.6,cr))),_n(s,2,se+2840,340),Un(s,he+50,170,_i(t.accent,Xn,1.6,cr),["Class of "+e.year],yl(_i(t.accent,Xn,1.6,cr))),_n(s,3,he+300,1e3),gi(s,"Under the lights",he+1330,t.caption),_n(s,4,he+1440,800),Un(s,he+2420,760,t.blockBg,[e.team,"Class of "+e.year],t.blockInk,null,44)}}},xu={name:"Big name",photos:"Photo strip",message:"Family message",party:"Party and QR code",sign:"Sign-it",free:"Design it yourself"},U_=typeof window<"u"&&Array.isArray(window.MP_HOLD)?window.MP_HOLD:[],bp=null;function pp(s,t){Ot.occasion==="birthday"?ar(s,Fi,t.accent,Fi):ar(s,t.accent,t.accent,t.accent)}function zw(s){let t=String(s).trim(),e=t.length/2;if(t.length<=10||t.indexOf(" ")<0)return[t];let n=-1;for(let i=0;i<t.length;i++)t[i]===" "&&(n<0||Math.abs(i-e)<Math.abs(n-e))&&(n=i);return[t.slice(0,n),t.slice(n+1)]}function Vw(s){return Ot.occasion==="birthday"?[s.name,"Turning "+s.age]:Ot.occasion==="senior-night"?[s.name,"#"+s.number]:[s.name,"Class of "+s.year]}function W_(s,t,e,n){let i;try{i=Wd(0,"M"),i.addData(t),i.make()}catch{i=Wd(0,"M"),i.addData("https://memorypostco.com"),i.make()}let r=i.getModuleCount(),o=3,a=n/(r+2*o),l=(le-n)/2;if(sn){sn.push({t:"art",canvas:H_(l,e,n,n,2,c=>W_(c,t,e,n)),x:l,y:e,w:n,h:n});return}un(s,l,e,n,n,"#FFFFFF"),s.fillStyle=cr;for(let c=0;c<r;c++)for(let h=0;h<r;h++)i.isDark(c,h)&&s.fillRect(l+(o+h)*a,e+(o+c)*a,a+.35,a+.35)}var Mp=['600 {s}px "Caveat"','400 {s}px "Permanent Marker"','400 {s}px "Reenie Beanie"','400 {s}px "Covered By Your Grace"'],Gw=[[["So proud of you,","{NAME}!   Aunt Dana"],40,640,0,64,-4],[["GO GET 'EM","   Coach R."],150,905,1,40,3],[["Love you kiddo","      Grandpa"],56,1120,2,74,-2],[["Room 204 forever!","        Priya"],70,1370,3,54,4],[["Don't forget us :)","   Sam + Jo"],36,1650,0,60,-6],[["Keep running,","kid.   Mr. Alvarez"],84,1890,2,68,2],[["YOU DID IT!!","       Tess"],44,2180,1,44,-3],[["Proud neighbors","since day one","  The Okafors"],130,2370,3,52,3],[["Call your mother.","     Love, Dad"],44,2700,0,68,-3],[["Best friend ever.","       Dev"],60,2975,2,66,3],[["Number one fan","   your sister"],60,3560,0,66,-5],[["We watched you","grow up. So proud.","  Mrs. Lindqvist"],96,3830,3,50,2],[["CONGRATS {NAMEUP}","    Uncle Ray"],40,4170,1,42,-2],[["Save me a seat!","      Nana"],130,4420,0,60,5],[["Never change.","OK, change","a little.   Leo"],50,4770,2,72,-4],[["See you soon.","     Imani"],140,5150,3,54,3],[["Proud of you","always.   Mom"],48,5420,0,70,-3],[["WE LOVE YOU","   Tio Beto"],150,5720,1,36,2]];function Hw(s,t){s.textAlign="left",s.textBaseline="top",Gw.forEach(([e,n,i,r,o,a])=>{let l=e.map(u=>u.replace("{NAMEUP}",t.name.toUpperCase()).replace("{NAME}",t.name));s.save(),s.translate(n,i),s.rotate(a*Math.PI/180),s.fillStyle="#1d1d1f",s.globalAlpha=.93,s.font=Mp[r].replace("{s}",o);let c=Math.max.apply(null,l.map(u=>s.measureText(u).width)),h=le-n-14;c>h&&(o=Math.max(18,Math.floor(o*h/c)),s.font=Mp[r].replace("{s}",o)),l.forEach((u,d)=>s.fillText(u,0,d*o)),s.restore()})}var k_={message(s,t,e){un(s,0,0,le,ri,t.main),pp(s,t),As(s,["A note from home"],se+150,t.accentText,32,.26),lr(s,se+250,90,t.accentText),no(s,e.msg,se+360,2800,400,t.text),zw(e.more).forEach((n,i)=>rr(s,n.toUpperCase(),he+190+i*125,118,t.accentText)),lr(s,he+500,90,t.accentText),_n(s,4,he+600,1700),Un(s,he+2420,760,t.accent,["Love,",e.from],t.accentInk,null,52)},party(s,t,e){un(s,0,0,le,ri,t.main),pp(s,t),As(s,["You are invited"],se+150,t.accentText,32,.26),lr(s,se+250,90,t.accentText),no(s,e.line1,se+380,2780,500,t.accentText),Un(s,he+60,640,t.accent,[e.line2,e.line3,e.line4],t.accentInk,null,46),W_(s,e.link,he+860,360),As(s,["Scan for","the album"],he+1250,t.text,30,.34,600),_n(s,3,he+1500,760),Un(s,he+2420,760,Xn,Vw(e),t.caption,null,52)},sign(s,t,e){un(s,0,0,le,ri,Xn),pp(s,t),Un(s,se+60,330,t.blockBg,["Leave "+e.name,"a note"],t.blockInk,t.blockAccent,62),gi(s,"Sign anywhere",se+440,t.caption),Ot.signed&&!sn&&Hw(s,e),Un(s,he+2810,370,t.blockBg,["Thank you","for coming"],t.blockInk,t.blockAccent,52)}};function wp(s,t,e,n){let i=bp&&bp[t];i&&i.full?s.drawImage(i.full,0,e*is,le,is,0,e*is,le,is):un(s,0,e*is,le,is,n.main)}var mp=null;function Ww(s){let t=Sl(),e=wu(),n=[];mp||(mp=document.createElement("canvas").getContext("2d")),sn=n;try{Mu(s==="free"?"name":s,mp,t,e)}catch{}finally{sn=null}let i=Xn,r=[];return n.forEach(o=>{o.t==="rect"&&o.x<=0&&o.y<=0&&o.w>=le&&o.h>=ri?i=o.fill:r.push(o)}),{bg:i,items:r}}var or=[],Tp=s=>Es[s]?Es[s].entry||(Es[s].entry={pid:"sample-"+s,color:Es[s],gray:Es[s],sample:!0}):null,Su=0,Xw=()=>JSON.stringify(Object.assign({},Ot,{photos:Su,faces:0,signed:0}))+Object.keys(Es).length;function Mu(s,t,e,n){let i=Bw[Ot.occasion];s==="photos"?i.B(t,e,n):k_[s]?k_[s](t,e,n):i.A(t,e,n)}function wu(){let s=Ni[Ot.occasion],t=Ot.occasion==="graduation";return{name:Wn(Ot.name,s.name).slice(0,16),year:Wn(Ot.year,"2027").replace(/[^0-9]/g,"").slice(0,4)||"2027",school:Wn(Ot.school,"Northside High").slice(0,26),age:String(Math.min(120,Math.max(1,parseInt(Ot.age,10)||10))),number:Wn(Ot.number,"12").replace(/[^0-9]/g,"").slice(0,2)||"12",sport:Wn(Ot.sport,"Varsity soccer").slice(0,22),team:Wn(Ot.team,"Northside Hawks").slice(0,22),line1:Wn(Ot.line1,t?"Open house":"Party").slice(0,16),line2:Wn(Ot.line2,t?"Sat June 12":"Sat May 8").slice(0,16),line3:Wn(Ot.line3,t?"2 to 6 pm":"2 pm").slice(0,16),line4:Wn(Ot.line4,"418 Alder Lane").slice(0,18),msg:Wn(Ot.msg,"So proud of you").slice(0,18),more:Wn(Ot.more,"We saw all of it.").slice(0,24),from:Wn(Ot.from,"Mom and Dad").slice(0,16),link:Wn(Ot.link,"https://memorypostco.com").slice(0,120)}}var jw=0;function Yw(s,t){let e=s.naturalWidth,n=s.naturalHeight,i=Math.min(1,t/Math.max(e,n)),r=Math.max(1,Math.round(e*i)),o=Math.max(1,Math.round(n*i)),a=document.createElement("canvas");a.width=r,a.height=o,a.getContext("2d").drawImage(s,0,0,r,o);let l={pid:"p"+ ++jw,color:a,width:r,height:o,naturalWidth:r,naturalHeight:o},c=null;return Object.defineProperty(l,"gray",{get(){if(c)return c;c=document.createElement("canvas"),c.width=r,c.height=o;let h=c.getContext("2d");h.drawImage(a,0,0);let u=h.getImageData(0,0,r,o),d=u.data;for(let f=0;f<d.length;f+=4){let p=.299*d[f]+.587*d[f+1]+.114*d[f+2];p=Math.max(0,Math.min(255,(p-128)*1.06+128)),d[f]=d[f+1]=d[f+2]=p}return h.putImageData(u,0,0),c}}),l}function B_(s,t,e=5){let n=Array.from(s).filter(o=>/^image\//.test(o.type)).slice(0,e),i=n.length,r=[];if(!i)return t(r);n.forEach((o,a)=>{let l=URL.createObjectURL(o),c=new Image;c.onload=()=>{try{r[a]=Yw(c,or.length+a<12?1280:720)}catch{}URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.onerror=()=>{URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.src=l})}function qw(s){let t=s.querySelector("#make-stage"),e=s.querySelector("#make-canvas"),n=e.getContext&&e.getContext("2d");if(!n)return null;let i=document.createElement("canvas"),r;try{r=new fh({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}if(!r.getContext())return null;r.outputColorSpace=pn,r.toneMapping=ci,r.shadowMap.enabled=!0,r.shadowMap.type=vr;let o=Math.min(window.innerWidth,window.innerHeight)<700,a=new ba,l=document.createElement("canvas");l.width=64,l.height=256;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,256);[[0,"#86A9E4"],[.3,"#C4D8F3"],[.44,"#FFFFFF"],[.5,"#FFFFFF"],[.53,"#8E978B"],[1,"#596257"]].forEach(([Lt,Ht])=>h.addColorStop(Lt,Ht)),c.fillStyle=h,c.fillRect(0,0,64,256);let u=new _r(l);u.mapping=Po,u.colorSpace=pn;let d=()=>{let Lt=new Oo(r);a.environment=Lt.fromEquirectangular(u).texture,Lt.dispose()};d(),a.add(new Ia(16777215,12765627,1.02));let f=new La(16774890,3.3);f.position.set(-.8,4.9,3.3),f.target.position.set(0,.9,0),f.castShadow=!0,f.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(f.shadow.camera,{left:-1.2,right:1.2,top:1.4,bottom:-1.2,near:1,far:9}),f.shadow.bias=-4e-4,f.shadow.normalBias=.002,f.shadow.radius=7,a.add(f,f.target);let p=Math.min(8,r.capabilities.getMaxAnisotropy()),x=[],m=Lt=>(x[Lt]||(x[Lt]=[0,1].map(()=>{let Ht=document.createElement("canvas");Ht.width=io,Ht.height=_u;let N=new _r(Ht);return N.colorSpace=pn,N.anisotropy=p,N.minFilter=Mi,N.magFilter=mn,N.generateMipmaps=!0,{cv:Ht,t:N}})),x[Lt]),g=new To({color:15131612}),S=[0,1,2,3].map(Lt=>[0,1].map(Ht=>new To({map:m(Lt%2)[Ht].t}))),A=new Ra({color:14869216,roughness:.26,metalness:1,envMapIntensity:1.25}),w=new gr({color:789516}),E=new hs;a.add(E);let R=(Lt,Ht,N,Re=!0)=>{let Kt=new Bn(Lt,Ht);return Kt.position.y=N,Kt.castShadow=Re,E.add(Kt),Kt};[1,0].forEach((Lt,Ht)=>{let N=[S[1][Lt],S[3][Lt],g,g,S[0][Lt],S[2][Lt]];R(new Kn(gp,vu,gp),N,G_+vu/2+Ht*(vu+V_))}),R(new Kn(5*bu,.03,5*bu),g,_p+xp-.015,!1),R(new Kn(mu,vp-.003,mu),A,_p+xp+(vp-.003)/2),R(new Kn(mu-.006,.003,mu-.006),A,gu-.0015),R(new Kn(pu,up-.004,pu),A,(up-.004)/2),R(new Kn(pu-.008,.004,pu-.008),A,up-.002);let _=new Bn(new Bs(6,6),new Aa({opacity:.2}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,a.add(_);let v=document.createElement("canvas");v.width=v.height=128;let T=v.getContext("2d"),C=T.createRadialGradient(64,64,4,64,64,62);C.addColorStop(0,"rgba(0,0,0,.5)"),C.addColorStop(.45,"rgba(0,0,0,.2)"),C.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=C,T.fillRect(0,0,128,128);let P=new Bn(new Bs(.46,.46),new gr({map:new _r(v),transparent:!0,depthWrite:!1}));P.rotation.x=-Math.PI/2,P.position.y=.0015,a.add(P);let F=new xr(-1,1,1,-1,.1,40),z=.115,I=new it(0,gu/2-.02,0),X=-.7,q=0,U=null,et=!0,L=!1,H=0,Z=0,ut=0,_t=1,J=1,yt=1.36,wt=1.06,Ut=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,St=s.querySelector("#mk-zoom");function Yt(){let Lt=Math.max(1.06,.15*ut/Z);J=Math.max(1,Math.min(2.3,2*Lt*Z/ut/.3)),_t>J&&(_t=1),wt=Lt/_t,F.top=wt,F.bottom=-wt,F.left=-wt*Z/ut,F.right=wt*Z/ut,_t>1&&(yt=Math.max(wt-.1,Math.min(gu+.12-wt,yt))),I.set(0,_t>1?yt:gu/2-.02,0),F.position.set(0,I.y+Math.sin(z)*12,Math.cos(z)*12),F.lookAt(I),F.updateProjectionMatrix(),F.updateMatrixWorld();let Ht=new it(0,0,0).project(F);t.style.setProperty("--lawn",Math.max(0,Math.round((Ht.y+1)/2*ut+ut*.125*_t))+"px"),St&&(St.hidden=J<1.4,St.setAttribute("aria-pressed",_t>1?"true":"false"),St.textContent=_t>1?"Zoom out":"Zoom"),e.style.touchAction=_t>1?"none":"pan-y",et=!0,ce()}function ae(){E.rotation.y=X,r.render(a,F),n.clearRect(0,0,e.width,e.height),n.drawImage(i,0,0),et=!1}function jt(){let Lt=e.clientWidth,Ht=e.clientHeight;!Lt||!Ht||(Z=Lt,ut=Ht,r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(Z,ut,!1),Yt(),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height),L&&ae())}function _e(){if(H=0,U!==null){let Lt=U-X;Math.abs(Lt)<.002?(X=U,U=null):X+=Lt*.16,et=!0}Math.abs(q)>4e-4?(X+=q,q*=.93,et=!0):q=0,et&&Z&&L&&ae(),(U!==null||q!==0)&&ce()}i.addEventListener("webglcontextrestored",()=>{d(),x.forEach(Lt=>Lt.forEach(Ht=>{Ht.t.needsUpdate=!0})),et=!0,ce()});function ce(){H||(H=requestAnimationFrame(_e))}let te=!1,Ee=0,Fe=0;e.addEventListener("pointerdown",Lt=>{te=!0,Ee=Lt.clientX,Fe=Lt.clientY,q=0,U=null;try{e.setPointerCapture(Lt.pointerId)}catch{}t.classList.add("turned")}),e.addEventListener("pointermove",Lt=>{if(!te)return;let Ht=Lt.clientX-Ee,N=Lt.clientY-Fe;Ee=Lt.clientX,Fe=Lt.clientY,X+=Ht*.011,q=Ht*.011,_t>1&&N&&(yt+=N*(2*wt/ut),Yt()),et=!0,ce()}),St&&St.addEventListener("click",()=>{_t=_t>1?1:J,t.classList.add("turned"),Yt()});let qe=()=>{te=!1,ce()};e.addEventListener("pointerup",qe),e.addEventListener("pointercancel",qe);let Ae=Lt=>{q=0;let Ht=Math.PI/2;U=Math.round(((U===null?X:U)- -.7)/Ht+Lt)*Ht-.7,t.classList.add("turned"),ce()};function xn(){let Lt=Sl(),Ht=wu(),N=[],Re=Ot.faces.map((Kt,xe)=>Kt==="free"?"free"+xe:Kt);Re.forEach(Kt=>{N.indexOf(Kt)<0&&N.push(Kt)}),N.forEach((Kt,xe)=>[0,1].forEach(xt=>{let{cv:Me,t:Vt}=m(xe)[xt],kt=Me.getContext("2d");kt.setTransform(1,0,0,1,0,0),kt.fillStyle="#EEECE6",kt.fillRect(0,0,io,_u),kt.save(),kt.beginPath(),kt.rect(yu,0,io-2*yu,_u),kt.clip(),kt.setTransform(dp,0,0,dp,yu,-xt*is*dp),Kt.slice(0,4)==="free"?wp(kt,+Kt.slice(4),xt,Lt):Mu(Kt,kt,Lt,Ht),kt.restore(),kt.setTransform(1,0,0,1,0,0),kt.fillStyle="rgba(0,0,0,.26)",kt.fillRect(0,xt===0?_u-2:0,io,2),Vt.needsUpdate=!0})),Re.forEach((Kt,xe)=>[0,1].forEach(xt=>{let Me=S[xe][xt],Vt=m(N.indexOf(Kt))[xt].t;Me.map!==Vt&&(Me.map=Vt,Me.needsUpdate=!0)})),L=!0,et=!0,ce()}"ResizeObserver"in window?new ResizeObserver(jt).observe(t):window.addEventListener("resize",jt),jt(),Ut||(X=-1.75,U=-.7);let Pe=Lt=>{q=0;let Ht=Lt===0?-.7:-1.22-(Lt-1)*Math.PI/2,N=U===null?X:U,Re=2*Math.PI;Ht+=Math.round((N-Ht)/Re)*Re,U=Ht,ce()};return{paint:xn,turn:Ae,showSide:Pe,front:()=>{let Lt=0,Ht=9;for(let N=0;N<4;N++){let Re=Math.abs(((X+N*Math.PI/2)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);Re<Ht&&(Ht=Re,Lt=N)}return Lt},show:Lt=>{let Ht=Ot.faces.indexOf(Lt==="B"?"photos":"name");Pe(Ht<0?0:Ht)}}}function z_(){let s=document.getElementById("make");if(!s)return;let t=qw(s);if(!t)return;let e=s.closest("section"),n=L=>s.querySelector("#"+L),i=0,r=!1,o=null,a=L=>{clearTimeout(i),i=setTimeout(t.paint,L?0:70),o&&o()},l=L=>{L.isTrusted!==!1&&!r&&(r=!0,X())};s.addEventListener("input",l,!0),s.addEventListener("change",l,!0),s.addEventListener("click",L=>{L.target.closest&&L.target.closest("[data-occ],.make-turn button,#mk-clear,#mk-design,#mk-studio,#mk-wrap,#mk-free button")&&l(L)},!0),n("make-canvas").addEventListener("pointerdown",l);let c=(L,H)=>{let Z=n(L);yp.forEach(([ut,_t])=>{let J=document.createElement("label");J.className="swc",J.title=ut,J.innerHTML=`<input type="radio" name="${H}" value="${ut}"><span style="background:${_t}"></span><b>${ut}</b>`,Z.appendChild(J)}),Z.addEventListener("change",ut=>{Ot[H]=ut.target.value,X(),a(!0)})};c("mk-main","main"),c("mk-accent","accent");let h=()=>{let L=Ni[Ot.occasion];s.querySelectorAll('input[name="main"]').forEach(H=>{H.checked=H.value===(Ot.main||L.main)}),s.querySelectorAll('input[name="accent"]').forEach(H=>{H.checked=H.value===(Ot.accent||L.accent)})};function u(){s.querySelectorAll("[data-for],[data-face]").forEach(L=>{let H=L.dataset.for,Z=L.dataset.face,ut=H?H.split(" ").indexOf(Ot.occasion)>=0:!1,_t=Z?Z.split(" ").some(J=>Ot.faces.indexOf(J)>=0):!1;L.hidden=!(ut||_t)})}function d(L){Ot.occasion=L,s.querySelectorAll("[data-occ]").forEach(ut=>ut.setAttribute("aria-pressed",ut.dataset.occ===L?"true":"false")),u();let H=Ni[L],Z=L==="graduation";n("mk-name").placeholder=H.name,n("mk-l1").placeholder=Z?"Open house":"Party",n("mk-l2").placeholder=Z?"Sat June 12":"Sat May 8",n("mk-l3").placeholder=Z?"2 to 6 pm":"2 pm",h(),X(),t.show("A"),a(!0)}s.querySelectorAll("[data-occ]").forEach(L=>L.addEventListener("click",()=>d(L.dataset.occ)));let f=(L,H)=>{let Z=n(L);Z&&Z.addEventListener("input",()=>{Ot[H]=Z.value,a(!1)})};[["mk-name","name"],["mk-year","year"],["mk-school","school"],["mk-age","age"],["mk-number","number"],["mk-sport","sport"],["mk-team","team"],["mk-l1","line1"],["mk-l2","line2"],["mk-l3","line3"],["mk-year2","year"]].forEach(([L,H])=>f(L,H)),[["mk-msg","msg"],["mk-more","more"],["mk-from","from"],["mk-l4","line4"],["mk-link","link"]].forEach(([L,H])=>f(L,H));let p=document.getElementById("st"),x=n("make-stage"),m=x.parentNode,g=x.nextSibling,S=(L,H)=>{Ot.faces[L]=H;let Z=n("mk-face"+(L+1));Z&&(Z.value=H)},A={name:["mk-name"],year:["mk-year","mk-year2"],age:["mk-age"],number:["mk-number"]},w=p?I_({root:p,palette:yp,getRoles:Sl,pieces:Ww,stamp:Xw,kinds:Object.keys(xu).filter(L=>L!=="free"&&U_.indexOf(L)<0).map(L=>[L,xu[L]]),kindOf:L=>Ot.faces[L],setKind:(L,H)=>{S(L,H),u(),_()},turnTo:L=>t.showSide(L),onChange:()=>t.paint(),onOpen:L=>{L.appendChild(x)},onClose:()=>{m.insertBefore(x,g),u(),_(),a(!0)},fields:()=>{let L=Ot.occasion,H=Ni[L],Z=L==="birthday"?{key:"age",label:"Turning",value:Ot.age,placeholder:"10"}:L==="senior-night"?{key:"number",label:"Number",value:Ot.number,placeholder:"12"}:{key:"year",label:"Class year",value:Ot.year,placeholder:"2027"};return{occasion:L,occasions:Object.keys(Ni).map(ut=>[ut,Ni[ut].label]),name:Ot.name,namePlaceholder:H.name,second:Z,main:Ot.main||H.main,accent:Ot.accent||H.accent}},setField:(L,H)=>{if(r=!0,L==="occasion"){d(H);return}Ot[L]=H,(L==="main"||L==="accent")&&h(),(A[L]||[]).forEach(Z=>{let ut=n(Z);ut&&(ut.value=H)}),X(),a(!0)},library:()=>or.slice().reverse().concat(Object.keys(Es).map(Tp).filter(Boolean)),lead:()=>or.length?or[or.length-1]:Tp(Ni[Ot.occasion].samples[0]),addPhotos:L=>new Promise(H=>B_(L,Z=>{Z.length&&(Z.forEach(ut=>or.push(ut)),Ot.photos=or.slice(-5),Su++),I(!1),X(),a(!0),H(Z)},12)),drawKind:(L,H)=>{let Z=H.getContext("2d"),ut=H.width/le;Z.setTransform(1,0,0,1,0,0),Z.clearRect(0,0,H.width,H.height),Z.save(),Z.setTransform(ut,0,0,ut,0,0),Z.beginPath(),Z.rect(0,0,le,H.height/ut),Z.clip(),Mu(L,Z,Sl(),wu()),Z.restore()},drawSide:(L,H)=>{let Z=H.getContext("2d"),ut=Ot.faces[L],_t=Sl();Z.setTransform(H.width/le,0,0,H.height/ri,0,0),ut==="free"?(wp(Z,L,0,_t),wp(Z,L,1,_t)):Mu(ut,Z,_t,wu())}}):null;bp=w?w.art:null;let E=0;w&&(o=()=>{clearTimeout(E),E=setTimeout(()=>w.refresh().then(L=>{L&&t.paint()}),320)});let R=n("mk-free");function _(){R&&(R.textContent="",Ot.faces.forEach((L,H)=>{if(L!=="free")return;let Z=document.createElement("button");Z.type="button",Z.className="btn btn-line",Z.textContent="Edit face "+(H+1)+" in the studio",Z.addEventListener("click",()=>w.open(H)),R.appendChild(Z)}))}let v=n("mk-design");v&&(v.hidden=!w,w&&v.addEventListener("click",()=>w.open(t.front())));let T=document.getElementById("mk-studio-row");T&&w&&(T.hidden=!1,n("mk-studio").addEventListener("click",()=>w.open(t.front())));let C=document.getElementById("mk-wrap-row");C&&w&&(C.hidden=!1,n("mk-wrap").addEventListener("click",()=>w.openWrap(t.front()))),[0,1,2,3].forEach(L=>{let H=n("mk-face"+(L+1));H&&(Object.keys(xu).forEach(Z=>{if(Z==="free"&&!w||U_.indexOf(Z)>=0)return;let ut=document.createElement("option");ut.value=Z,ut.textContent=xu[Z],H.appendChild(ut)}),H.value=Ot.faces[L],H.addEventListener("change",()=>{let Z=Ot.faces[L];Ot.faces[L]=H.value;let ut=()=>{u(),_(),t.showSide(L),a(!0)};H.value==="free"?w.start(L,Z==="free"?null:Z).then(ut):ut()}))}),s.querySelectorAll("[data-face]").forEach(L=>L.addEventListener("focusin",()=>{let H=Ot.faces.indexOf(L.dataset.face.split(" ")[0]);H>=0&&t.showSide(H)}));let P=n("mk-signed");P&&P.addEventListener("change",()=>{Ot.signed=P.checked,a(!0),Ot.signed&&document.fonts&&document.fonts.load&&Promise.all(Mp.map(L=>document.fonts.load(L.replace("{s}","40")))).then(()=>a(!0)).catch(()=>{})}),n("mk-year").addEventListener("input",()=>{n("mk-year2").value=n("mk-year").value}),n("mk-year2").addEventListener("input",()=>{n("mk-year").value=n("mk-year2").value});let F=n("mk-photo-note"),z=s.querySelector('label[for="mk-photos"]'),I=L=>{let H=Ot.photos.length;z&&(z.textContent=H===0?"Add up to 5 photos":H<5?"Add more photos":"Swap in new photos"),n("mk-clear").hidden=H===0,F.textContent=(L?"That file could not be read. Try a JPG or PNG photo. ":"")+(H===0?"Sample photos are showing. Yours stay on your device.":H+" of 5 photos on the post. They stay on your device.")};n("mk-photos").addEventListener("change",L=>{let H=L.target.files?L.target.files.length:0;B_(L.target.files,Z=>{Z.length&&(Z.forEach(ut=>or.push(ut)),Ot.photos=Ot.photos.concat(Z).slice(-5),Su++,t.show("B")),I(H>0&&!Z.length),L.target.value="",X(),a(!0)})}),n("mk-clear").addEventListener("click",()=>{Ot.photos=[],Su++,I(!1),X(),a(!0)}),n("mk-bw").addEventListener("change",L=>{Ot.bw=L.target.checked,a(!0)}),n("mk-left").addEventListener("click",()=>t.turn(-1)),n("mk-right").addEventListener("click",()=>t.turn(1));function X(){let L=Ni[Ot.occasion];window.MP_DESIGN=r?"Tried the preview: "+L.label+", "+(Ot.main||L.main)+" and "+(Ot.accent||L.accent)+".":""}let q=n("mk-join");q&&q.addEventListener("click",()=>{let L=document.getElementById("f-occasion");L&&(L.selectedIndex={graduation:0,birthday:1,"senior-night":2}[Ot.occasion])}),["grad","caps","skyline","field","road","balloons","cake","bokeh"].forEach(L=>{let H=new Image;H.onload=()=>{Es[L]=H,a(!1)},H.src="img/sample-"+L+".jpg"}),(document.fonts&&document.fonts.load?Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 32px "Barlow"')]).catch(()=>{}):Promise.resolve()).then(()=>a(!0)),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>a(!0)),e.classList.add("has-make"),s.hidden=!1,d("graduation"),window.dispatchEvent(new Event("resize"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z_):z_();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
