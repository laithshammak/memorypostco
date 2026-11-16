/* Memory Post try-it preview. Uses three.js (MIT License, Copyright 2010-2026 three.js authors), fabric.js (MIT License, Copyright 2008-2015 Printio) and qrcode-generator (MIT License, Copyright 2009 Kazuhiko Arase). */
var om=0,ad=1,am=2;var xr=1,lm=2,Ro=3,Hs=0,Rn=1,ji=2,vr=0,Po=1,ld=2,cd=3,hd=4,cm=5;var yr=100,hm=101,um=102,dm=103,fm=104,pm=200,mm=201,gm=202,_m=203,ud=204,dd=205,xm=206,vm=207,ym=208,Sm=209,bm=210,Mm=211,wm=212,Tm=213,Cm=214,$l=0,Ql=1,tc=2,So=3,ec=4,nc=5,ic=6,sc=7,Pc=0,Em=1,Am=2,ai=0,fd=1,pd=2,md=3,gd=4,_d=5,xd=6,vd=7;var yd=300,Sr=301,Do=302,Io=303,Dc=304,rc=1e3,Bi=1001,oc=1002,an=1003,Rm=1004;var ka=1005;var mn=1006,Ic=1007;var bi=1008;var Un=1009,Sd=1010,bd=1011,Oo=1012,Oc=1013,Mi=1014,wi=1015,Ti=1016,Lc=1017,Fc=1018,br=1020,Md=35902,wd=35899,Td=1021,Cd=1022,Ci=1023,fs=1026,ms=1027,Ed=1028,Nc=1029,Ws=1030,kc=1031;var Uc=1033,Ua=33776,Ba=33777,za=33778,Va=33779,Bc=35840,zc=35841,Vc=35842,Gc=35843,Hc=36196,Wc=37492,Xc=37496,jc=37488,Yc=37489,Ga=37490,qc=37491,Zc=37808,Jc=37809,Kc=37810,$c=37811,Qc=37812,th=37813,eh=37814,nh=37815,ih=37816,sh=37817,rh=37818,oh=37819,ah=37820,lh=37821,ch=36492,hh=36494,uh=36495,dh=36283,fh=36284,Ha=36285,ph=36286;var xa=2300,ac=2301,Jl=2302,td=2303,ed=2400,nd=2401,id=2402;var Pm=3200;var Wa=0,Dm=1,gs="",pn="srgb",va="srgb-linear",ya="linear",Ae="srgb";var Kl=7680;var Im=519,Om=512,Lm=513,Fm=514,Ad=515,Nm=516,km=517,Rd=518,Pd=519,Um=35044;var Dd="300 es",ri=2e3,bo=2001;function nx(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ix(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bm(){let s=Sa("canvas");return s.style.display="block",s}var kp={},Mo=null;function Id(...s){let t="THREE."+s.shift();Mo?Mo("log",t,...s):console.log(t,...s)}function zm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Kt(...s){s=zm(s);let t="THREE."+s.shift();if(Mo)Mo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function te(...s){s=zm(s);let t="THREE."+s.shift();if(Mo)Mo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function _a(...s){let t=s.join(" ");t in kp||(kp[t]=!0,Kt(...s))}function Vm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Gm={[$l]:$l,[tc]:ic,[ec]:ec,[So]:nc,[Ql]:Ql,[ic]:tc,[sc]:sc,[nc]:So},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Iu=Math.PI/180,lc=180/Math.PI;function Xa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function sx(s,t){return(s%t+t)%t}function Ou(s,t,e){return(1-e)*s+e*t}function Hm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Od(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rx(s,t){if(t.constructor===Float32Array)return s;let e=Od(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function ox(s,t){if(t.constructor===Float32Array)return s;let e=Od(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var xe=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let _=1-a;if(m<.9995){let S=Math.acos(m),P=Math.sin(S);_=Math.sin(_*S)/P,a=Math.sin(a*S)/P,l=l*_+d*a,c=c*_+f*a,h=h*_+p*a,u=u*_+x*a}else{l=l*_+d*a,c=c*_+f*a,h=h*_+p*a,u=u*_+x*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},it=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Up.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Up.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lu.copy(this).projectOnVector(t),this.sub(Lu)}reflect(t){return this.sub(Lu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lu=new it,Up=new Gi,ne=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],_=i[6],S=i[1],P=i[4],w=i[7],R=i[2],D=i[5],g=i[8];return r[0]=o*x+a*S+l*R,r[3]=o*m+a*P+l*D,r[6]=o*_+a*w+l*g,r[1]=c*x+h*S+u*R,r[4]=c*m+h*P+u*D,r[7]=c*_+h*w+u*g,r[2]=d*x+f*S+p*R,r[5]=d*m+f*P+p*D,r[8]=d*_+f*w+p*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _a("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fu.makeScale(t,e)),this}rotate(t){return _a("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fu.makeRotation(-t)),this}translate(t,e){return _a("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Fu=new ne,Bp=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){let s={enabled:!0,workingColorSpace:va,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gs?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[va]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Bp,fromXYZ:zp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}var _e=ax();function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var oo,cc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{oo===void 0&&(oo=Sa("canvas")),oo.width=t.width,oo.height=t.height;let i=oo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=oo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lx=0,wo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Xa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Nu(i[o].image)):r.push(Nu(i[o]))}else r=Nu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var cx=0,ku=new it,An=class s extends Vi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Bi,i=Bi,r=mn,o=bi,a=Ci,l=Un,c=s.DEFAULT_ANISOTROPY,h=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Xa(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ku).x}get height(){return this.source.getSize(ku).y}get depth(){return this.source.getSize(ku).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rc:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rc:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=yd;An.DEFAULT_ANISOTROPY=1;var Be=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,w=(f+1)/2,R=(_+1)/2,D=(h+d)/4,g=(u+x)/4,v=(p+m)/4;return P>w&&P>R?P<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(P),i=D/n,r=g/n):w>R?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=D/i,r=v/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=g/r,i=v/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hc=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new An({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends hc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ba=class extends An{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uc=class extends An{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ue=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=p,_[11]=x,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ao.setFromMatrixColumn(t,0).length(),r=1/ao.setFromMatrixColumn(t,1).length(),o=1/ao.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hx,t,ux)}lookAt(t,e,n){let i=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ps.crossVectors(n,Wn),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ps.crossVectors(n,Wn)),Ps.normalize(),Pl.crossVectors(Wn,Ps),i[0]=Ps.x,i[4]=Pl.x,i[8]=Wn.x,i[1]=Ps.y,i[5]=Pl.y,i[9]=Wn.y,i[2]=Ps.z,i[6]=Pl.z,i[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],_=n[14],S=n[3],P=n[7],w=n[11],R=n[15],D=i[0],g=i[4],v=i[8],E=i[12],C=i[1],I=i[5],F=i[9],z=i[13],L=i[2],j=i[6],q=i[10],U=i[14],J=i[3],K=i[7],ot=i[11],dt=i[15];return r[0]=o*D+a*C+l*L+c*J,r[4]=o*g+a*I+l*j+c*K,r[8]=o*v+a*F+l*q+c*ot,r[12]=o*E+a*z+l*U+c*dt,r[1]=h*D+u*C+d*L+f*J,r[5]=h*g+u*I+d*j+f*K,r[9]=h*v+u*F+d*q+f*ot,r[13]=h*E+u*z+d*U+f*dt,r[2]=p*D+x*C+m*L+_*J,r[6]=p*g+x*I+m*j+_*K,r[10]=p*v+x*F+m*q+_*ot,r[14]=p*E+x*z+m*U+_*dt,r[3]=S*D+P*C+w*L+R*J,r[7]=S*g+P*I+w*j+R*K,r[11]=S*v+P*F+w*q+R*ot,r[15]=S*E+P*z+w*U+R*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],_=t[15],S=l*f-c*d,P=a*f-c*u,w=a*d-l*u,R=o*f-c*h,D=o*d-l*h,g=o*u-a*h;return e*(x*S-m*P+_*w)-n*(p*S-m*R+_*D)+i*(p*P-x*R+_*g)-r*(p*w-x*D+m*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],_=t[15],S=e*a-n*o,P=e*l-i*o,w=e*c-r*o,R=n*l-i*a,D=n*c-r*a,g=i*c-r*l,v=h*x-u*p,E=h*m-d*p,C=h*_-f*p,I=u*m-d*x,F=u*_-f*x,z=d*_-f*m,L=S*z-P*F+w*I+R*C-D*E+g*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/L;return t[0]=(a*z-l*F+c*I)*j,t[1]=(i*F-n*z-r*I)*j,t[2]=(x*g-m*D+_*R)*j,t[3]=(d*D-u*g-f*R)*j,t[4]=(l*C-o*z-c*E)*j,t[5]=(e*z-i*C+r*E)*j,t[6]=(m*w-p*g-_*P)*j,t[7]=(h*g-d*w+f*P)*j,t[8]=(o*F-a*C+c*v)*j,t[9]=(n*C-e*F-r*v)*j,t[10]=(p*D-x*w+_*S)*j,t[11]=(u*w-h*D-f*S)*j,t[12]=(a*E-o*I-l*v)*j,t[13]=(e*I-n*E+i*v)*j,t[14]=(x*P-p*R-m*S)*j,t[15]=(h*R-u*P+d*S)*j,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,_=a*u,S=l*c,P=l*h,w=l*u,R=n.x,D=n.y,g=n.z;return i[0]=(1-(x+_))*R,i[1]=(f+w)*R,i[2]=(p-P)*R,i[3]=0,i[4]=(f-w)*D,i[5]=(1-(d+_))*D,i[6]=(m+S)*D,i[7]=0,i[8]=(p+P)*g,i[9]=(m-S)*g,i[10]=(1-(d+x))*g,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ao.set(i[0],i[1],i[2]).length(),a=ao.set(i[4],i[5],i[6]).length(),l=ao.set(i[8],i[9],i[10]).length();r<0&&(o=-o),xi.copy(this);let c=1/o,h=1/a,u=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,e.setFromRotationMatrix(xi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=ri,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===bo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ri,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ri)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===bo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ao=new it,xi=new Ue,hx=new it(0,0,0),ux=new it(1,1,1),Ps=new it,Pl=new it,Wn=new it,Vp=new Ue,Gp=new Gi,Hi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dx=0,Hp=new it,lo=new Gi,os=new Ue,Dl=new it,fa=new it,fx=new it,px=new Gi,Wp=new it(1,0,0),Xp=new it(0,1,0),jp=new it(0,0,1),Yp={type:"added"},mx={type:"removed"},co={type:"childadded",child:null},Uu={type:"childremoved",child:null},bn=class s extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new it,e=new Hi,n=new Gi,i=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ne}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lo.setFromAxisAngle(t,e),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,e){return lo.setFromAxisAngle(t,e),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(Wp,t)}rotateY(t){return this.rotateOnAxis(Xp,t)}rotateZ(t){return this.rotateOnAxis(jp,t)}translateOnAxis(t,e){return Hp.copy(t).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wp,t)}translateY(t){return this.translateOnAxis(Xp,t)}translateZ(t){return this.translateOnAxis(jp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Dl.copy(t):Dl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(fa,Dl,this.up):os.lookAt(Dl,fa,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),lo.setFromRotationMatrix(os),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yp),co.child=t,this.dispatchEvent(co),co.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mx),Uu.child=t,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yp),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,fx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,px,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new it(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var us=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},gx={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),_=this._getHandJoint(c,x);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Bu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=sx(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bu(o,r,t+1/3),this.g=Bu(o,r,t),this.b=Bu(o,r,t-1/3)}return _e.colorSpaceToWorking(this,i),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=Wm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return _e.workingToColorSpace(Sn.copy(this),t),Math.round(ve(Sn.r*255,0,255))*65536+Math.round(ve(Sn.g*255,0,255))*256+Math.round(ve(Sn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=pn){_e.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,i=Sn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(Il);let n=Ou(Ds.h,Il.h,e),i=Ou(Ds.s,Il.s,e),r=Ou(Ds.l,Il.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new ce;ce.NAMES=Wm;var wa=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vi=new it,as=new it,zu=new it,ls=new it,ho=new it,uo=new it,qp=new it,Vu=new it,Gu=new it,Hu=new it,Wu=new Be,Xu=new Be,ju=new Be,Fs=class s{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vi.subVectors(t,e),i.cross(vi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vi.subVectors(i,e),as.subVectors(n,e),zu.subVectors(t,e);let o=vi.dot(vi),a=vi.dot(as),l=vi.dot(zu),c=as.dot(as),h=as.dot(zu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ls.x),l.addScaledVector(o,ls.y),l.addScaledVector(a,ls.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Wu.setScalar(0),Xu.setScalar(0),ju.setScalar(0),Wu.fromBufferAttribute(t,e),Xu.fromBufferAttribute(t,n),ju.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wu,r.x),o.addScaledVector(Xu,r.y),o.addScaledVector(ju,r.z),o}static isFrontFacing(t,e,n,i){return vi.subVectors(n,e),as.subVectors(t,e),vi.cross(as).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),vi.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ho.subVectors(i,n),uo.subVectors(r,n),Vu.subVectors(t,n);let l=ho.dot(Vu),c=uo.dot(Vu);if(l<=0&&c<=0)return e.copy(n);Gu.subVectors(t,i);let h=ho.dot(Gu),u=uo.dot(Gu);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ho,o);Hu.subVectors(t,r);let f=ho.dot(Hu),p=uo.dot(Hu);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(uo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return qp.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(qp,a);let _=1/(m+x+d);return o=x*_,a=d*_,e.copy(n).addScaledVector(ho,o).addScaledVector(uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ns=class{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ol.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ol.copy(n.boundingBox)),Ol.applyMatrix4(t.matrixWorld),this.union(Ol)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Ll.subVectors(this.max,pa),fo.subVectors(t.a,pa),po.subVectors(t.b,pa),mo.subVectors(t.c,pa),Is.subVectors(po,fo),Os.subVectors(mo,po),ur.subVectors(fo,mo);let e=[0,-Is.z,Is.y,0,-Os.z,Os.y,0,-ur.z,ur.y,Is.z,0,-Is.x,Os.z,0,-Os.x,ur.z,0,-ur.x,-Is.y,Is.x,0,-Os.y,Os.x,0,-ur.y,ur.x,0];return!Yu(e,fo,po,mo,Ll)||(e=[1,0,0,0,1,0,0,0,1],!Yu(e,fo,po,mo,Ll))?!1:(Fl.crossVectors(Is,Os),e=[Fl.x,Fl.y,Fl.z],Yu(e,fo,po,mo,Ll))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cs=[new it,new it,new it,new it,new it,new it,new it,new it],yi=new it,Ol=new Ns,fo=new it,po=new it,mo=new it,Is=new it,Os=new it,ur=new it,pa=new it,Ll=new it,Fl=new it,dr=new it;function Yu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){dr.fromArray(s,r);let a=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=t.dot(dr),c=e.dot(dr),h=n.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new it,Nl=new xe,_x=0,zi=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Um,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=t!==void 0?Od(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nl.fromBufferAttribute(this,e),Nl.applyMatrix3(t),this.setXY(e,Nl.x,Nl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rx(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ox(t,this.array)}};var Ta=class extends zi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends zi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oi=class extends zi{constructor(t,e,n){super(new Float32Array(t),e,n)}},xx=new Ns,ma=new it,qu=new it,Co=class{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(qu)),this.expandByPoint(ma.copy(t.center).sub(qu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vx=0,si=new Ue,Zu=new bn,go=new it,Xn=new Ns,ga=new Ns,on=new it,ks=class s extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nx(t)?Ca:Ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return Zu.lookAt(t),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Xn.min,ga.min),Xn.expandByPoint(on),on.addVectors(Xn.max,ga.max),Xn.expandByPoint(on)):(Xn.expandByPoint(ga.min),Xn.expandByPoint(ga.max))}Xn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(go.fromBufferAttribute(t,c),on.add(go)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let E=0;E<n.count;E++)a[E]=new it,l[E]=new it;let h=new it,u=new it,d=new it,f=new xe,p=new xe,x=new xe,m=new it,_=new it;function S(E,C,I){c[E]=c[C]=c[I]=1,h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,I),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(F),_.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(F),a[E].add(m),a[C].add(m),a[I].add(m),l[E].add(_),l[C].add(_),l[I].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let E=0,C=P.length;E<C;++E){let I=P[E],F=I.start,z=I.count;for(let L=F,j=F+z;L<j;L+=3)S(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new it,R=new it,D=new it,g=new it;function v(E){D.fromBufferAttribute(i,E),g.copy(D);let C=a[E];w.copy(C),w.sub(D.multiplyScalar(D.dot(C))).normalize(),R.crossVectors(g,C);let F=R.dot(l[E])<0?-1:1;o.setXYZW(E,w.x,w.y,w.z,F)}for(let E=0,C=n.count;E<C;++E)c[E]&&v(E);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new it,r=new it,o=new it,a=new it,l=new it,c=new it,h=new it,u=new it;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let _=0;_<h;_++)d[p++]=c[f++]}return new zi(d,h,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ju=new it,yx=new it,Sx=new ne,Si=class{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ju.subVectors(n,e).cross(yx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sx.getNormalMatrix(t),i=this.coplanarPoint(Ju).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bx=0,Wi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Po,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kl,this.stencilZFail=Kl,this.stencilZPass=Kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Si().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hs=new it,Ku=new it,kl=new it,Ul=new it,dc=class{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,e),hs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ku.copy(t).add(e).multiplyScalar(.5),kl.copy(e).sub(t).normalize(),Ul.copy(this.origin).sub(Ku);let r=t.distanceTo(e)*.5,o=-this.direction.dot(kl),a=Ul.dot(this.direction),l=-Ul.dot(kl),c=Ul.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ku).addScaledVector(kl,d),f}intersectSphere(t,e){if(t.radius<0)return null;hs.subVectors(t.center,this.origin);let n=hs.dot(this.direction),i=hs.dot(hs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,_=n.x-o.x,S=n.y-o.y,P=n.z-o.z,w=Math.abs(l),R=Math.abs(c),D=Math.abs(h),g,v,E,C,I,F,z,L,j,q,U,J;if(w>=R&&w>=D?(E=l,F=u,j=p,J=_,l>=0?(g=c,v=h,C=d,I=f,z=x,L=m,q=S,U=P):(g=h,v=c,C=f,I=d,z=m,L=x,q=P,U=S)):R>=D?(E=c,F=d,j=x,J=S,c>=0?(g=h,v=l,C=f,I=u,z=m,L=p,q=P,U=_):(g=l,v=h,C=u,I=f,z=p,L=m,q=_,U=P)):(E=h,F=f,j=m,J=P,h>=0?(g=l,v=c,C=u,I=d,z=p,L=x,q=_,U=S):(g=c,v=l,C=d,I=u,z=x,L=p,q=S,U=_)),E===0)return null;let K=g/E,ot=v/E,dt=1/E,Pt=C-K*F,At=I-ot*F,Q=z-K*j,wt=L-ot*j,Ct=q-K*J,Bt=U-ot*J,vt=Ct*wt-Bt*Q,Gt=Pt*Bt-At*Ct,se=Q*At-wt*Pt;if(i){if(vt<0||Gt<0||se<0)return null}else if((vt<0||Gt<0||se<0)&&(vt>0||Gt>0||se>0))return null;let Wt=vt+Gt+se;if(Wt===0)return null;let pe=dt*(vt*F+Gt*j+se*J);return(Wt>0?pe<0:pe>0)?null:this.at(pe/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mr=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zp=new Ue,fr=new dc,Bl=new Co,Jp=new it,zl=new it,Vl=new it,Gl=new it,$u=new it,Hl=new it,Kp=new it,Wl=new it,kn=class extends bn{constructor(t=new ks,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&($u.fromBufferAttribute(u,t),o?Hl.addScaledVector($u,h):Hl.addScaledVector($u.sub(e),h))}e.add(Hl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(r),fr.copy(t.ray).recast(t.near),!(Bl.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Bl,Jp)===null||fr.origin.distanceToSquared(Jp)>(t.far-t.near)**2))&&(Zp.copy(r).invert(),fr.copy(t.ray).applyMatrix4(Zp),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],_=o[m.materialIndex],S=Math.max(m.start,f.start),P=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,R=P;w<R;w+=3){let D=a.getX(w),g=a.getX(w+1),v=a.getX(w+2);i=Xl(this,_,t,n,c,h,u,D,g,v),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,_=x;m<_;m+=3){let S=a.getX(m),P=a.getX(m+1),w=a.getX(m+2);i=Xl(this,o,t,n,c,h,u,S,P,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],_=o[m.materialIndex],S=Math.max(m.start,f.start),P=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,R=P;w<R;w+=3){let D=w,g=w+1,v=w+2;i=Xl(this,_,t,n,c,h,u,D,g,v),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,_=x;m<_;m+=3){let S=m,P=m+1,w=m+2;i=Xl(this,o,t,n,c,h,u,S,P,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Mx(s,t,e,n,i,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hs,a),l===null)return null;Wl.copy(a),Wl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Wl);return c<e.near||c>e.far?null:{distance:c,point:Wl.clone(),object:s}}function Xl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,zl),s.getVertexPosition(l,Vl),s.getVertexPosition(c,Gl);let h=Mx(s,t,e,n,zl,Vl,Gl,Kp);if(h){let u=new it;Fs.getBarycoord(Kp,zl,Vl,Gl,u),i&&(h.uv=Fs.getInterpolatedAttribute(i,a,l,c,u,new xe)),r&&(h.uv1=Fs.getInterpolatedAttribute(r,a,l,c,u,new xe)),o&&(h.normal=Fs.getInterpolatedAttribute(o,a,l,c,u,new it),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new it,materialIndex:0};Fs.getNormal(zl,Vl,Gl,d.normal),h.face=d,h.barycoord=u}return h}var fc=class extends An{constructor(t=null,e=1,n=1,i,r,o,a,l,c=an,h=an,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=new Co,wx=new xe(.5,.5),jl=new it,Us=class{constructor(t=new Si,e=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],_=r[11],S=r[12],P=r[13],w=r[14],R=r[15];if(i[0].setComponents(c-o,f-h,_-p,R-S).normalize(),i[1].setComponents(c+o,f+h,_+p,R+S).normalize(),i[2].setComponents(c+a,f+u,_+x,R+P).normalize(),i[3].setComponents(c-a,f-u,_-x,R-P).normalize(),n)i[4].setComponents(l,d,m,w).normalize(),i[5].setComponents(c-l,f-d,_-m,R-w).normalize();else if(i[4].setComponents(c-l,f-d,_-m,R-w).normalize(),e===ri)i[5].setComponents(c+l,f+d,_+m,R+w).normalize();else if(e===bo)i[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);let e=wx.distanceTo(t.center);return pr.radius=.7071067811865476+e,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(jl.x=i.normal.x>0?t.max.x:t.min.x,jl.y=i.normal.y>0?t.max.y:t.min.y,jl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$p=new Ue,pc=class s{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];$p.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Us),n[i].setFromProjectionMatrix($p,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Us),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ea=class extends An{constructor(t=[],e=Sr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gr=class extends An{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends An{constructor(t,e,n=Mi,i,r,o,a=an,l=an,c,h=fs,u=1){if(h!==fs&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Aa=class extends ps{constructor(t,e=Mi,n=Sr,i,r,o=an,a=an,l,c=fs){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ra=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qn=class s extends ks{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(u,2));function p(x,m,_,S,P,w,R,D,g,v,E){let C=w/g,I=R/v,F=w/2,z=R/2,L=D/2,j=g+1,q=v+1,U=0,J=0,K=new it;for(let ot=0;ot<q;ot++){let dt=ot*I-z;for(let Pt=0;Pt<j;Pt++){let At=Pt*C-F;K[x]=At*S,K[m]=dt*P,K[_]=L,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[_]=D>0?1:-1,h.push(K.x,K.y,K.z),u.push(Pt/g),u.push(1-ot/v),U+=1}}for(let ot=0;ot<v;ot++)for(let dt=0;dt<g;dt++){let Pt=d+dt+j*ot,At=d+dt+j*(ot+1),Q=d+(dt+1)+j*(ot+1),wt=d+(dt+1)+j*ot;l.push(Pt,At,wt),l.push(At,Q,wt),J+=6}a.addGroup(f,J,E),f+=J,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bs=class s extends ks{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let _=0;_<h;_++){let S=_*d-o;for(let P=0;P<c;P++){let w=P*u-r;p.push(w,-S,0),x.push(0,0,1),m.push(P/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){let P=S+c*_,w=S+c*(_+1),R=S+1+c*(_+1),D=S+1+c*_;f.push(P,w,D),f.push(w,R,D)}this.setIndex(f),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Pa=class extends Wi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Mr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Qp(i))i.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Qp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Mn(s){let t={};for(let e=0;e<s.length;e++){let n=Mr(s[e]);for(let i in n)t[i]=n[i]}return t}function Qp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Tx(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ld(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Xm={clone:Mr,merge:Mn},Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xi=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Tx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new it().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mc=class extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Da=class extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Eo=class extends Wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Pc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gc=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _o(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Yl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var zs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xc=class extends zs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ed,endingEnd:ed}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nd:r=t,a=2*e-n;break;case id:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nd:o=t,l=2*n-e;break;case id:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,_=-d*m+2*d*x-d*p,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,P=(-1-f)*m+(1.5+f)*x+.5*p,w=f*m-f*x;for(let R=0;R!==a;++R)r[R]=_*o[h+R]+S*o[c+R]+P*o[l+R]+w*o[u+R];return r}},vc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},yc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sc=class extends zs{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],_=f*d+p*2,S=u[_],P=u[_+1],w=t*d+p*2,R=h[w],D=h[w+1],g=Rx(n,e,S,R,i);r[p]=jm(g,x,P,D,m)}return r}};function jm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Ax(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Rx(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=jm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Ax(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_o(e,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_o(t.times,Array),values:_o(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Yl(t.settings)&&(n.settings={inTangents:_o(t.settings.inTangents,Array),outTangents:_o(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xa:e=this.InterpolantFactoryMethodDiscrete;break;case ac:e=this.InterpolantFactoryMethodLinear;break;case Jl:e=this.InterpolantFactoryMethodSmooth;break;case td:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return ac;case this.InterpolantFactoryMethodSmooth:return Jl;case this.InterpolantFactoryMethodBezier:return td}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Yl(this.settings)&&(tm(this.settings.inTangents,t),tm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Yl(this.settings)&&(em(this.settings.inTangents,t),em(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){te("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ix(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){te("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Yl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function tm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function em(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=ac;var Vs=class extends Zn{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=xa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var bc=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};bc.prototype.ValueTypeName="color";var Mc=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Mc.prototype.ValueTypeName="number";var wc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ia=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Zn{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=xa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Tc.prototype.ValueTypeName="vector";var Cc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ym=new Cc,Ec=class{constructor(t){this.manager=t!==void 0?t:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oa=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},La=class extends Oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qu=new Ue,nm=new it,im=new it,Ac=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nm.setFromMatrixPosition(t.matrixWorld),e.position.copy(nm),im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(im),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===bo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Qu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ql=new it,Zl=new Gi,Ui=new it,Fa=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ql,Zl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Zl,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ql,Zl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ql,Zl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ls=new it,sm=new xe,rm=new xe,jn=class extends Fa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Iu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lc*2*Math.atan(Math.tan(Iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,e){return this.getViewBounds(t,sm,rm),e.subVectors(rm,sm)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Iu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _r=class extends Fa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sd=class extends Ac{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new sd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xo=-90,vo=1,Ao=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jn(xo,vo,t,e);i.layers=this.layers,this.add(i);let r=new jn(xo,vo,t,e);r.layers=this.layers,this.add(r);let o=new jn(xo,vo,t,e);o.layers=this.layers,this.add(o);let a=new jn(xo,vo,t,e);a.layers=this.layers,this.add(a);let l=new jn(xo,vo,t,e);l.layers=this.layers,this.add(l);let c=new jn(xo,vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Rc=class extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Fd="\\[\\]\\.:\\/",Px=new RegExp("["+Fd+"]","g"),Nd="[^"+Fd+"]",Dx="[^"+Fd.replace("\\.","")+"]",Ix=/((?:WC+[\/:])*)/.source.replace("WC",Nd),Ox=/(WCOD+)?/.source.replace("WCOD",Dx),Lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),Fx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),Nx=new RegExp("^"+Ix+Ox+Lx+Fx+"$"),kx=["material","materials","bones","map"],rd=class{constructor(t,e,n){let i=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ne=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Px,"")}static parseTrackName(t){let e=Nx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);kx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;te("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=rd;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hT=new Float32Array(1);var od=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function kd(s,t,e,n){let i=Ux(n);switch(e){case Td:return s*t;case Ed:return s*t/i.components*i.byteLength;case Nc:return s*t/i.components*i.byteLength;case Ws:return s*t*2/i.components*i.byteLength;case kc:return s*t*2/i.components*i.byteLength;case Cd:return s*t*3/i.components*i.byteLength;case Ci:return s*t*4/i.components*i.byteLength;case Uc:return s*t*4/i.components*i.byteLength;case Ua:case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zc:case Gc:return Math.max(s,16)*Math.max(t,8)/4;case Bc:case Vc:return Math.max(s,8)*Math.max(t,8)/2;case Hc:case Wc:case jc:case Yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Ga:case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case th:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ih:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oh:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ah:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ch:case hh:case uh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case dh:case fh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ha:case ph:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ux(s){switch(s){case Un:case Sd:return{byteLength:1,components:1};case Oo:case bd:case Ti:return{byteLength:2,components:1};case Lc:case Fc:return{byteLength:2,components:4};case Mi:case Oc:case wi:return{byteLength:4,components:1};case Md:case wd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mg(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function zx(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gx=`#ifdef USE_ALPHAHASH
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
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yx=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tv=`#ifdef USE_IRIDESCENCE
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
#endif`,ev=`#ifdef USE_BUMPMAP
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hv=`#define PI 3.141592653589793
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
} // validated`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ev=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
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
#endif`,Uv=`uniform sampler2D dfgLUT;
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
}`,Bv=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jv=`#if defined( USE_POINTS_UV )
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
#endif`,Kv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ty=`#if defined( USE_MORPHCOLORS )
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
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
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
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ty=`float getShadowMask() {
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
}`,Cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ey=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform float backgroundBlurriness;
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,qy=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,eS=`uniform vec3 diffuse;
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define LAMBERT
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
}`,sS=`#define MATCAP
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
}`,rS=`#define MATCAP
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
}`,oS=`#define NORMAL
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
}`,aS=`#define NORMAL
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
}`,lS=`#define PHONG
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
}`,cS=`#define PHONG
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
}`,hS=`#define STANDARD
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
}`,uS=`#define STANDARD
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
}`,dS=`#define TOON
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
}`,fS=`#define TOON
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
}`,pS=`uniform float size;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,_S=`uniform vec3 color;
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
}`,xS=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Vx,alphahash_pars_fragment:Gx,alphamap_fragment:Hx,alphamap_pars_fragment:Wx,alphatest_fragment:Xx,alphatest_pars_fragment:jx,aomap_fragment:Yx,aomap_pars_fragment:qx,batching_pars_vertex:Zx,batching_vertex:Jx,begin_vertex:Kx,beginnormal_vertex:$x,bsdfs:Qx,iridescence_fragment:tv,bumpmap_pars_fragment:ev,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:rv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:lv,color_vertex:cv,common:hv,defaultnormal_vertex:uv,displacementmap_pars_vertex:dv,displacementmap_vertex:fv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:gv,colorspace_pars_fragment:_v,envmap_fragment:xv,envmap_common_pars_fragment:vv,envmap_pars_fragment:yv,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Iv,envmap_vertex:bv,fog_vertex:Mv,fog_pars_vertex:wv,fog_fragment:Tv,fog_pars_fragment:Cv,gradientmap_pars_fragment:Ev,lightmap_pars_fragment:Av,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Pv,lights_pars_begin:Dv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Lv,lights_phong_fragment:Fv,lights_phong_pars_fragment:Nv,lights_physical_fragment:kv,lights_physical_pars_fragment:Uv,lights_fragment_begin:Bv,lights_fragment_maps:zv,lights_fragment_end:Vv,lightprobes_pars_fragment:Gv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:jv,map_fragment:Yv,map_pars_fragment:qv,map_particle_fragment:Zv,map_particle_pars_fragment:Jv,metalnessmap_fragment:Kv,metalnessmap_pars_fragment:$v,morphinstance_vertex:Qv,morphcolor_vertex:ty,morphnormal_vertex:ey,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:sy,normal_fragment_maps:ry,normal_pars_fragment:oy,normal_pars_vertex:ay,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:dy,iridescence_pars_fragment:fy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:_y,dithering_fragment:xy,dithering_pars_fragment:vy,roughnessmap_fragment:yy,roughnessmap_pars_fragment:Sy,shadowmap_pars_fragment:by,shadowmap_pars_vertex:My,shadowmap_vertex:wy,shadowmask_pars_fragment:Ty,skinbase_vertex:Cy,skinning_pars_vertex:Ey,skinning_vertex:Ay,skinnormal_vertex:Ry,specularmap_fragment:Py,specularmap_pars_fragment:Dy,tonemapping_fragment:Iy,tonemapping_pars_fragment:Oy,transmission_fragment:Ly,transmission_pars_fragment:Fy,uv_pars_fragment:Ny,uv_pars_vertex:ky,uv_vertex:Uy,worldpos_vertex:By,background_vert:zy,background_frag:Vy,backgroundCube_vert:Gy,backgroundCube_frag:Hy,cube_vert:Wy,cube_frag:Xy,depth_vert:jy,depth_frag:Yy,distance_vert:qy,distance_frag:Zy,equirect_vert:Jy,equirect_frag:Ky,linedashed_vert:$y,linedashed_frag:Qy,meshbasic_vert:tS,meshbasic_frag:eS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:sS,meshmatcap_frag:rS,meshnormal_vert:oS,meshnormal_frag:aS,meshphong_vert:lS,meshphong_frag:cS,meshphysical_vert:hS,meshphysical_frag:uS,meshtoon_vert:dS,meshtoon_frag:fS,points_vert:pS,points_frag:mS,shadow_vert:gS,shadow_frag:_S,sprite_vert:xS,sprite_frag:vS},Nt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},qi={basic:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Mn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Mn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Mn([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Mn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Mn([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Mn([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Mn([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Mn([Nt.lights,Nt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};qi.physical={uniforms:Mn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var mh={r:0,b:0,g:0},yS=new Ue,gg=new ne;gg.set(-1,0,0,0,1,0,0,0,1);function SS(s,t,e,n,i,r){let o=new ce(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){let w=S.backgroundBlurriness>0;P=t.get(P,w)}return P}function p(S){let P=!1,w=f(S);w===null?m(o,a):w&&w.isColor&&(m(w,1),P=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,P){let w=f(P);w&&w.isCubeTexture?(c===void 0&&(c=new kn(new qn(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Mr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,D,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(P.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gg),c.material.toneMapped=_e.getTransfer(w.colorSpace)!==Ae,(h!==w||u!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new kn(new Bs(2,2),new Xi({name:"BackgroundMaterial",uniforms:Mr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=_e.getTransfer(w.colorSpace)!==Ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,P){S.getRGB(mh,Ld(s)),e.buffers.color.setClear(mh.r,mh.g,mh.b,P,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,P=1){o.set(S),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:x,dispose:_}}function bS(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(I,F,z,L,j){let q=!1,U=u(I,L,z,F);r!==U&&(r=U,c(r.object)),q=f(I,L,z,j),q&&p(I,L,z,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,w(I,F,z,L),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,F,z,L){let j=L.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let U=I.isInstancedMesh===!0?I.id:0,J=q[U];J===void 0&&(J={},q[U]=J);let K=J[z.id];K===void 0&&(K={},J[z.id]=K);let ot=K[j];return ot===void 0&&(ot=d(l()),K[j]=ot),ot}function d(I){let F=[],z=[],L=[];for(let j=0;j<e;j++)F[j]=0,z[j]=0,L[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,F,z,L){let j=r.attributes,q=F.attributes,U=0,J=z.getAttributes();for(let K in J)if(J[K].location>=0){let dt=j[K],Pt=q[K];if(Pt===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(Pt=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(Pt=I.instanceColor)),dt===void 0||dt.attribute!==Pt||Pt&&dt.data!==Pt.data)return!0;U++}return r.attributesNum!==U||r.index!==L}function p(I,F,z,L){let j={},q=F.attributes,U=0,J=z.getAttributes();for(let K in J)if(J[K].location>=0){let dt=q[K];dt===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor));let Pt={};Pt.attribute=dt,dt&&dt.data&&(Pt.data=dt.data),j[K]=Pt,U++}r.attributes=j,r.attributesNum=U,r.index=L}function x(){let I=r.newAttributes;for(let F=0,z=I.length;F<z;F++)I[F]=0}function m(I){_(I,0)}function _(I,F){let z=r.newAttributes,L=r.enabledAttributes,j=r.attributeDivisors;z[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),j[I]!==F&&(s.vertexAttribDivisor(I,F),j[I]=F)}function S(){let I=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==I[z]&&(s.disableVertexAttribArray(z),F[z]=0)}function P(I,F,z,L,j,q,U){U===!0?s.vertexAttribIPointer(I,F,z,j,q):s.vertexAttribPointer(I,F,z,L,j,q)}function w(I,F,z,L){x();let j=L.attributes,q=z.getAttributes(),U=F.defaultAttributeValues;for(let J in q){let K=q[J];if(K.location>=0){let ot=j[J];if(ot===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor)),ot!==void 0){let dt=ot.normalized,Pt=ot.itemSize,At=t.get(ot);if(At===void 0)continue;let Q=At.buffer,wt=At.type,Ct=At.bytesPerElement,Bt=wt===s.INT||wt===s.UNSIGNED_INT||ot.gpuType===Oc;if(ot.isInterleavedBufferAttribute){let vt=ot.data,Gt=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,se=ot.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Wt=0;Wt<K.locationSize;Wt++)_(K.location+Wt,vt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Wt=0;Wt<K.locationSize;Wt++)m(K.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Wt=0;Wt<K.locationSize;Wt++)P(K.location+Wt,Pt/K.locationSize,wt,dt,Gt*Ct,(se+Pt/K.locationSize*Wt)*Ct,Bt)}else{if(ot.isInstancedBufferAttribute){for(let vt=0;vt<K.locationSize;vt++)_(K.location+vt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let vt=0;vt<K.locationSize;vt++)m(K.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let vt=0;vt<K.locationSize;vt++)P(K.location+vt,Pt/K.locationSize,wt,dt,Pt*Ct,Pt/K.locationSize*vt*Ct,Bt)}}else if(U!==void 0){let dt=U[J];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(K.location,dt);break;case 3:s.vertexAttrib3fv(K.location,dt);break;case 4:s.vertexAttrib4fv(K.location,dt);break;default:s.vertexAttrib1fv(K.location,dt)}}}}S()}function R(){E();for(let I in n){let F=n[I];for(let z in F){let L=F[z];for(let j in L){let q=L[j];for(let U in q)h(q[U].object),delete q[U];delete L[j]}}delete n[I]}}function D(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let z in F){let L=F[z];for(let j in L){let q=L[j];for(let U in q)h(q[U].object),delete q[U];delete L[j]}}delete n[I.id]}function g(I){for(let F in n){let z=n[F];for(let L in z){let j=z[L];if(j[I.id]===void 0)continue;let q=j[I.id];for(let U in q)h(q[U].object),delete q[U];delete j[I.id]}}}function v(I){for(let F in n){let z=n[F],L=I.isInstancedMesh===!0?I.id:0,j=z[L];if(j!==void 0){for(let q in j){let U=j[q];for(let J in U)h(U[J].object),delete U[J];delete j[q]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function E(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function MS(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==Ci&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let v=g===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Un&&g!==wi&&!v&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:w,maxSamples:R,samples:D}}function TS(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Si,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,_=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,P=S*4,w=_.clippingState||null;l.value=w,w=h(p,d,P,f);for(let R=0;R!==P;++R)w[R]=e[R];_.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let _=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let P=0,w=f;P!==x;++P,w+=4)o.copy(u[P]).applyMatrix4(S,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var qa=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qn(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:vr});r.uniforms.tEquirect.value=e;let o=new kn(i,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=mn),new Ao(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},qm=256,CS=3,ES=20,_g=256,xg=16,AS=3,RS=new it,PS=new ce,Fo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ao(1,10,null),this._boxMesh=new kn(new qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=RS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(PS));let m=new Ao(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(qm,Hm(t))}_fromTexture(t,e){t.mapping===Sr||t.mapping===Do?this._setSize(t.image.length===0?qm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Zm(t,!1,!1),n=Math.log2(t)-CS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Sr||t.mapping===Do?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=DS(),this._integrationMaterial=IS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/xg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-AS)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(_g*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=OS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Zm(s,t,e){return new qa(s,{minFilter:bi,generateMipmaps:t,type:Ti,colorSpace:va,depthBuffer:e})}function Za(s,t,e){return new Xi({name:s,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:Rn,blending:vr,depthTest:!1,depthWrite:!1})}function DS(){return Za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_g}u

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
	`)}function IS(){return Za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xg}},`

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
	`)}function OS(){return Za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ES}
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
	`)}function Jm(){return Za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Km(){return Za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function LS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Io||f===Dc)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new qa(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Io||f===Dc,x=f===Sr||f===Do;if(p||x){let m=e.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Fo(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return p&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new Fo(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Io?d.mapping=Sr:f===Dc&&(d.mapping=Do),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function FS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_a("WebGLRenderer: "+n+" extension not supported."),i}}}function NS(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let S=x!==null?x.array.length:m.array.length/3-1,P=m.count>=65535?Ca:Ta,w=new P(Math.ceil(S/3)*6,1),R=w.array;if(x!==null){let g=x.array;_=x.version;for(let v=0,E=0;v<S;v+=3){let C=g[v+0],I=g[v+1],F=g[v+2];R[E++]=C,R[E++]=I,R[E++]=I,R[E++]=F,R[E++]=F,R[E++]=C}}else{_=m.version;for(let g=0,v=0;g<S;g+=3){let E=g+0,C=g+1,I=g+2;R[v++]=E,R[v++]=C,R[v++]=C,R[v++]=I,R[v++]=I,R[v++]=E}}w.version=_;let D=r.get(p);D&&t.remove(D),r.set(p,w)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function kS(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function US(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function BS(s,t,e){let n=new WeakMap,i=new Be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],P=0;f===!0&&(P=1),p===!0&&(P=2),x===!0&&(P=3);let w=a.attributes.position.count*P,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let D=new Float32Array(w*R*4*u),g=new ba(D,w,R,u);g.type=wi,g.needsUpdate=!0;let v=P*4;for(let C=0;C<u;C++){let I=m[C],F=_[C],z=S[C],L=w*R*4*C;for(let j=0;j<I.count;j++){let q=j*v;f===!0&&(i.fromBufferAttribute(I,j),D[L+q+0]=i.x,D[L+q+1]=i.y,D[L+q+2]=i.z,D[L+q+3]=0),p===!0&&(i.fromBufferAttribute(F,j),D[L+q+4]=i.x,D[L+q+5]=i.y,D[L+q+6]=i.z,D[L+q+7]=0),x===!0&&(i.fromBufferAttribute(z,j),D[L+q+8]=i.x,D[L+q+9]=i.y,D[L+q+10]=i.z,D[L+q+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new xe(w,R)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zS(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var VS={[fd]:"LINEAR_TONE_MAPPING",[pd]:"REINHARD_TONE_MAPPING",[md]:"CINEON_TONE_MAPPING",[gd]:"ACES_FILMIC_TONE_MAPPING",[xd]:"AGX_TONE_MAPPING",[vd]:"NEUTRAL_TONE_MAPPING",[_d]:"CUSTOM_TONE_MAPPING"};function GS(s,t,e,n,i,r){let o=new Yn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ks;h.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new oi([0,2,0,0,2,0],2));let u=new mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new kn(h,u),f=new _r(-1,1,1,-1,0,1),p=null,x=null,m=!1,_,S=null,P=[],w=!1;this.setSize=function(R,D){o.setSize(R,D),a!==null&&a.setSize(R,D),l!==null&&l.setSize(R,D);for(let g=0;g<P.length;g++){let v=P[g];v.setSize&&v.setSize(R,D)}},this.setEffects=function(R){P=R,w=P.length>0&&P[0].isRenderPass===!0;let D=o.width,g=o.height;P.length>0&&a===null&&(a=new Yn(D,g,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Yn(D,g,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));let v=i===!0&&P.some(E=>E.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new ps(D,g),r===!0&&(c.format=ms,c.type=br)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let E=0;E<P.length;E++){let C=P[E];C.setSize&&C.setSize(D,g),v&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(R,D){if(m||R.toneMapping===ai&&P.length===0)return!1;if(S=D,D!==null){let g=D.width,v=D.height;(o.width!==g||o.height!==v)&&this.setSize(g,v)}return w===!1&&R.setRenderTarget(o),_=R.toneMapping,R.toneMapping=ai,!0},this.hasRenderPass=function(){return w},this.end=function(R,D){R.toneMapping=_,m=!0;let g=o,v=a;for(let E=0;E<P.length;E++){let C=P[E];C.enabled!==!1&&(C.render(R,v,g,D),C.needsSwap!==!1&&(g=v,v=v===a?l:a))}if(p!==R.outputColorSpace||x!==R.toneMapping){p=R.outputColorSpace,x=R.toneMapping,u.defines={},_e.getTransfer(p)===Ae&&(u.defines.SRGB_TRANSFER="");let E=VS[x];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(S),R.render(d,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var vg=new An,yg=new ps(1,1),Sg=new Aa(1),bg=new ba,Mg=new uc,wg=new Ea,$m=[],Qm=[],tg=new Float32Array(16),eg=new Float32Array(9),ng=new Float32Array(4);function No(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=$m[i];if(r===void 0&&(r=new Float32Array(i),$m[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function $e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xh(s,t){let e=Qm[t];e===void 0&&(e=new Int32Array(t),Qm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function HS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function WS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2fv(this.addr,t),$e(e,t)}}function XS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;s.uniform3fv(this.addr,t),$e(e,t)}}function jS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4fv(this.addr,t),$e(e,t)}}function YS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;ng.set(n),s.uniformMatrix2fv(this.addr,!1,ng),$e(e,n)}}function qS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;eg.set(n),s.uniformMatrix3fv(this.addr,!1,eg),$e(e,n)}}function ZS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;tg.set(n),s.uniformMatrix4fv(this.addr,!1,tg),$e(e,n)}}function JS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function KS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2iv(this.addr,t),$e(e,t)}}function $S(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3iv(this.addr,t),$e(e,t)}}function QS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4iv(this.addr,t),$e(e,t)}}function tb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function eb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;s.uniform2uiv(this.addr,t),$e(e,t)}}function nb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;s.uniform3uiv(this.addr,t),$e(e,t)}}function ib(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;s.uniform4uiv(this.addr,t),$e(e,t)}}function vh(s){return s.version===0&&(s.compareFunction=Pd,s.needsUpdate=!0),s}function sb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=vh(yg):r=vg,e.setTexture2D(t||r,i)}function rb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mg,i)}function ob(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=vh(Sg):r=wg,e.setTextureCube(t||r,i)}function ab(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bg,i)}function lb(s){switch(s){case 5126:return HS;case 35664:return WS;case 35665:return XS;case 35666:return jS;case 35674:return YS;case 35675:return qS;case 35676:return ZS;case 5124:case 35670:return JS;case 35667:case 35671:return KS;case 35668:case 35672:return $S;case 35669:case 35673:return QS;case 5125:return tb;case 36294:return eb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}function cb(s,t){s.uniform1fv(this.addr,t)}function hb(s,t){let e=No(t,this.size,2);s.uniform2fv(this.addr,e)}function ub(s,t){let e=No(t,this.size,3);s.uniform3fv(this.addr,e)}function db(s,t){let e=No(t,this.size,4);s.uniform4fv(this.addr,e)}function fb(s,t){let e=No(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function pb(s,t){let e=No(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function mb(s,t){let e=No(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gb(s,t){s.uniform1iv(this.addr,t)}function _b(s,t){s.uniform2iv(this.addr,t)}function xb(s,t){s.uniform3iv(this.addr,t)}function vb(s,t){s.uniform4iv(this.addr,t)}function yb(s,t){s.uniform1uiv(this.addr,t)}function Sb(s,t){s.uniform2uiv(this.addr,t)}function bb(s,t){s.uniform3uiv(this.addr,t)}function Mb(s,t){s.uniform4uiv(this.addr,t)}function wb(s,t,e){let n=this.cache,i=t.length,r=xh(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=vh(yg):o=vg;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Tb(s,t,e){let n=this.cache,i=t.length,r=xh(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Mg,r[o])}function Cb(s,t,e){let n=this.cache,i=t.length,r=xh(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=vh(Sg):o=wg;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Eb(s,t,e){let n=this.cache,i=t.length,r=xh(e,i);Ke(n,r)||(s.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||bg,r[o])}function Ab(s){switch(s){case 5126:return cb;case 35664:return hb;case 35665:return ub;case 35666:return db;case 35674:return fb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return xb;case 35669:case 35673:return vb;case 5125:return yb;case 36294:return Sb;case 36295:return bb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Eb}}var zd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lb(e.type)}},Vd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ab(e.type)}},Gd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ud=/(\w+)(\])?(\[|\.)?/g;function ig(s,t){s.seq.push(t),s.map[t.id]=t}function Rb(s,t,e){let n=s.name,i=n.length;for(Ud.lastIndex=0;;){let r=Ud.exec(n),o=Ud.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ig(e,c===void 0?new zd(a,s,t):new Vd(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Gd(a),ig(e,u)),e=u}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Rb(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function sg(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Pb=37297,Db=0;function Ib(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var rg=new ne;function Ob(s){_e._getMatrix(rg,_e.workingColorSpace,s);let t=`mat3( ${rg.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(s)){case ya:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function og(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ib(s.getShaderSource(t),a)}else return r}function Lb(s,t){let e=Ob(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Fb={[fd]:"Linear",[pd]:"Reinhard",[md]:"Cineon",[gd]:"ACESFilmic",[xd]:"AgX",[vd]:"Neutral",[_d]:"Custom"};function Nb(s,t){let e=Fb[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gh=new it;function kb(){_e.getLuminanceCoefficients(gh);let s=gh.x.toFixed(4),t=gh.y.toFixed(4),e=gh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function Bb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ya(s){return s!==""}function ag(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace(Vb,Gb)}function Gb(s,t){let e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Hd(e)}var Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(s){return s.replace(Hb,Wb)}function Wb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Xb={[xr]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function jb(s){return Xb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yb={[Do]:"ENVMAP_MODE_REFRACTION"};function qb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zb={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[Em]:"ENVMAP_BLENDING_MIX",[Am]:"ENVMAP_BLENDING_ADD"};function Jb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[s.combine]||"ENVMAP_BLENDING_NONE"}function Kb(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=jb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qb(e),u=Jb(e),d=Ub(e),f=Bb(r),p=i.createProgram(),x,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ya).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(x=[hg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[hg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?he.tonemapping_pars_fragment:"",e.toneMapping!==ai?Nb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Lb("linearToOutputTexel",e.outputColorSpace),kb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ya).join(`
`)),o=Hd(o),o=ag(o,e),o=lg(o,e),a=Hd(a),a=ag(a,e),a=lg(a,e),o=cg(o),a=cg(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=_+x+o,P=_+m+a,w=sg(i,i.VERTEX_SHADER,S),R=sg(i,i.FRAGMENT_SHADER,P);i.attachShader(p,w),i.attachShader(p,R),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(C){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(p)||"",F=i.getShaderInfoLog(w)||"",z=i.getShaderInfoLog(R)||"",L=I.trim(),j=F.trim(),q=z.trim(),U=!0,J=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,R);else{let K=og(i,w,"vertex"),ot=og(i,R,"fragment");te("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+K+`
`+ot)}else L!==""?Kt("WebGLProgram: Program Info Log:",L):(j===""||q==="")&&(J=!1);J&&(C.diagnostics={runnable:U,programLog:L,vertexShader:{log:j,prefix:x},fragmentShader:{log:q,prefix:m}})}i.deleteShader(w),i.deleteShader(R),g=new Lo(i,p),v=zb(i,p)}let g;this.getUniforms=function(){return g===void 0&&D(this),g};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(p,Pb)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Db++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=R,this}var $b=0,Wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xd(t),e.set(t,n)),n}},Xd=class{constructor(t){this.id=$b++,this.code=t,this.usedTimes=0}};function Qb(s){return s===Ws||s===Ga||s===Ha}function t1(s,t,e,n,i,r){let o=new Ma,a=new Wd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,v,E,C,I,F){let z=C.fog,L=I.geometry,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,U=t.get(g.envMap||j,q),J=d[g.type],K=n.precision;g.precision!==null&&(K=n.getMaxPrecision(g.precision),K!==g.precision&&Kt("WebGLProgram.getParameters:",g.precision,"not supported, using",K,"instead."));let ot=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,dt=ot!==void 0?ot.length:0,Pt=0;L.morphAttributes.position!==void 0&&(Pt=1),L.morphAttributes.normal!==void 0&&(Pt=2),L.morphAttributes.color!==void 0&&(Pt=3);let At,Q,wt,Ct;if(J){let Ft=qi[J];At=Ft.vertexShader,Q=Ft.fragmentShader}else{At=g.vertexShader,Q=g.fragmentShader;let Ft=a.getVertexShaderStage(g),we=a.getFragmentShaderStage(g);a.update(g,Ft,we),wt=Ft.id,Ct=we.id}let Bt=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Gt=I.isInstancedMesh===!0,se=I.isBatchedMesh===!0,Wt=!!g.map,pe=!!g.matcap,ee=!!U,$t=ee&&U.isPMREMTexture===!0,be=!!g.aoMap,Me=!!g.lightMap,De=!!g.bumpMap&&g.wireframe===!1,Ce=!!g.normalMap,Ye=!!g.displacementMap,Ee=!!g.emissiveMap,dn=!!g.metalnessMap,Lt=!!g.roughnessMap,H=g.anisotropy>0,T=g.clearcoat>0,gt=g.diffuseRoughness>0,Tt=g.dispersion>0,Qt=g.retroreflectivity>0,xt=g.iridescence>0,ue=g.sheen>0,zt=g.transmission>0,ut=H&&!!g.anisotropyMap,A=T&&!!g.clearcoatMap,b=T&&!!g.clearcoatNormalMap,Z=T&&!!g.clearcoatRoughnessMap,mt=gt&&!!g.diffuseRoughnessMap,ct=xt&&!!g.iridescenceMap,St=xt&&!!g.iridescenceThicknessMap,Dt=ue&&!!g.sheenColorMap,at=ue&&!!g.sheenRoughnessMap,lt=!!g.specularMap,Rt=!!g.specularColorMap,B=!!g.specularIntensityMap,ht=zt&&!!g.transmissionMap,rt=zt&&!!g.thicknessMap,yt=!!g.gradientMap,_t=!!g.alphaMap,Et=g.alphaTest>0,Ht=!!g.alphaHash,ie=!!g.extensions,pt=ai;g.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(pt=s.toneMapping);let qt=$t?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,re={shaderID:J,shaderType:g.type,shaderName:g.name,vertexShader:At,fragmentShader:Q,defines:g.defines,customVertexShaderID:wt,customFragmentShaderID:Ct,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:K,batching:se,batchingColor:se&&I._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&I.instanceColor!==null,instancingMorph:Gt&&I.morphTexture!==null,outputColorSpace:Bt===null?s.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Wt,matcap:pe,envMap:ee,envMapMode:ee&&U.mapping,envMapPMREM:$t,envMapMaxLod:$t?qt.length-1:null,envMapSize:$t?qt[0].width:null,aoMap:be,lightMap:Me,bumpMap:De,normalMap:Ce,displacementMap:Ye,emissiveMap:Ee,normalMapObjectSpace:Ce&&g.normalMapType===Dm,normalMapTangentSpace:Ce&&g.normalMapType===Wa,packedNormalMap:Ce&&g.normalMapType===Wa&&Qb(g.normalMap.format),metalnessMap:dn,roughnessMap:Lt,anisotropy:H,anisotropyMap:ut,clearcoat:T,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:Z,diffuseRoughness:gt,diffuseRoughnessMap:mt,dispersion:Tt,retroreflection:Qt,iridescence:xt,iridescenceMap:ct,iridescenceThicknessMap:St,sheen:ue,sheenColorMap:Dt,sheenRoughnessMap:at,specularMap:lt,specularColorMap:Rt,specularIntensityMap:B,transmission:zt,transmissionMap:ht,thicknessMap:rt,gradientMap:yt,opaque:g.transparent===!1&&g.blending===Po&&g.alphaToCoverage===!1,alphaMap:_t,alphaTest:Et,alphaHash:Ht,combine:g.combine,mapUv:Wt&&f(g.map.channel),aoMapUv:be&&f(g.aoMap.channel),lightMapUv:Me&&f(g.lightMap.channel),bumpMapUv:De&&f(g.bumpMap.channel),normalMapUv:Ce&&f(g.normalMap.channel),displacementMapUv:Ye&&f(g.displacementMap.channel),emissiveMapUv:Ee&&f(g.emissiveMap.channel),metalnessMapUv:dn&&f(g.metalnessMap.channel),roughnessMapUv:Lt&&f(g.roughnessMap.channel),anisotropyMapUv:ut&&f(g.anisotropyMap.channel),clearcoatMapUv:A&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:ct&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:St&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:at&&f(g.sheenRoughnessMap.channel),specularMapUv:lt&&f(g.specularMap.channel),specularColorMapUv:Rt&&f(g.specularColorMap.channel),specularIntensityMapUv:B&&f(g.specularIntensityMap.channel),transmissionMapUv:ht&&f(g.transmissionMap.channel),thicknessMapUv:rt&&f(g.thicknessMap.channel),alphaMapUv:_t&&f(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ce||H),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Wt||_t),fog:!!z,useFog:g.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Ce===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:vt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Pt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:F.filter(Ft=>Ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:Wt&&g.map.isVideoTexture===!0&&_e.getTransfer(g.map.colorSpace)===Ae,decodeVideoTextureEmissive:Ee&&g.emissiveMap.isVideoTexture===!0&&_e.getTransfer(g.emissiveMap.colorSpace)===Ae,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ji,flipSided:g.side===Rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ie&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&g.extensions.multiDraw===!0||se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function x(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let E in g.defines)v.push(E),v.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(m(v,g),_(v,g),v.push(s.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function m(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function _(g,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function S(g){let v=d[g.type],E;if(v){let C=qi[v];E=Xm.clone(C.uniforms)}else E=g.uniforms;return E}function P(g,v){let E=h.get(v);return E!==void 0?++E.usedTimes:(E=new Kb(s,v,g,i),c.push(E),h.set(v,E)),E}function w(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function R(g){a.remove(g)}function D(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:S,acquireProgram:P,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:D}}function e1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function n1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ug(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,_){let S=s[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:_},s[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=m,S.group=_),t++,S}function l(d,f,p,x,m,_,S){S.reversedDepth===!0&&(m=-m);let P=a(d,f,p,x,m,_);p.transmission>0?n.push(P):p.transparent===!0?i.push(P):e.push(P)}function c(d,f,p,x,m,_){let S=a(d,f,p,x,m,_);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||n1),n.length>1&&n.sort(f||ug),i.length>1&&i.sort(f||ug)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function i1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new dg,s.set(n,[o])):i>=r.length?(o=new dg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function s1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new it,color:new ce};break;case"SpotLight":e={position:new it,direction:new it,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new it,halfWidth:new it,halfHeight:new it};break}return s[t.id]=e,e}}}function r1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var o1=0;function a1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function l1(s){let t=new s1,e=r1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new it);let i=new it,r=new Ue,o=new Ue;function a(c){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,x=0,m=0,_=0,S=0,P=0,w=0,R=0,D=0,g=0,v=0,E=0,C=0;c.sort(a1);for(let F=0,z=c.length;F<z;F++){let L=c[F],j=L.color,q=L.intensity,U=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ws?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=j.r*q,u+=j.g*q,d+=j.b*q;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],q);C++}else if(L.isSunLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,dt=e.get(L);dt.shadowIntensity=ot.intensity,dt.shadowBias=ot.bias,dt.shadowNormalBias=ot.normalBias,dt.shadowRadius=ot.radius,dt.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[p]=dt,n.sunShadowMap[p]=J;let Pt=ot.getViewportCount();for(let At=0;At<Pt;At++)n.sunShadowMatrix[x+At]=ot.getMatrix(At),n.sunShadowCascade[x+At]=ot._cascadeData[At];x+=Pt,p++}n.sun[f]=K,f++}else if(L.isDirectionalLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,dt=e.get(L);dt.shadowIntensity=ot.intensity,dt.shadowBias=ot.bias,dt.shadowNormalBias=ot.normalBias,dt.shadowRadius=ot.radius,dt.shadowMapSize=ot.mapSize,n.directionalShadow[m]=dt,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=L.shadow.matrix,R++}n.directional[m]=K,m++}else if(L.isSpotLight){let K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(j).multiplyScalar(q),K.distance=U,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[S]=K;let ot=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,ot.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[S]=ot.matrix,L.castShadow){let dt=e.get(L);dt.shadowIntensity=ot.intensity,dt.shadowBias=ot.bias,dt.shadowNormalBias=ot.normalBias,dt.shadowRadius=ot.radius,dt.shadowMapSize=ot.mapSize,n.spotShadow[S]=dt,n.spotShadowMap[S]=J,g++}S++}else if(L.isRectAreaLight){let K=t.get(L);K.color.copy(j).multiplyScalar(q),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[P]=K,P++}else if(L.isPointLight){let K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let ot=L.shadow,dt=e.get(L);dt.shadowIntensity=ot.intensity,dt.shadowBias=ot.bias,dt.shadowNormalBias=ot.normalBias,dt.shadowRadius=ot.radius,dt.shadowMapSize=ot.mapSize,dt.shadowCameraNear=ot.camera.near,dt.shadowCameraFar=ot.camera.far,n.pointShadow[_]=dt,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=L.shadow.matrix,D++}n.point[_]=K,_++}else if(L.isHemisphereLight){let K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(q),K.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[w]=K,w++}}P>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==_||I.spotLength!==S||I.rectAreaLength!==P||I.hemiLength!==w||I.numSunShadows!==p||I.numDirectionalShadows!==R||I.numPointShadows!==D||I.numSpotShadows!==g||I.numSpotMaps!==v||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=P,n.point.length=_,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.sunLength=f,I.directionalLength=m,I.pointLength=_,I.spotLength=S,I.rectAreaLength=P,I.hemiLength=w,I.numSunShadows=p,I.numDirectionalShadows=R,I.numPointShadows=D,I.numSpotShadows=g,I.numSpotMaps=v,I.numLightProbes=C,n.version=o1++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,_=h.matrixWorldInverse;for(let S=0,P=c.length;S<P;S++){let w=c[S];if(w.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),u++}else if(w.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(_),d++}else if(w.isSpotLight){let R=n.spot[p];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(i),R.direction.transformDirection(_),p++}else if(w.isRectAreaLight){let R=n.rectArea[x];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),o.identity(),r.copy(w.matrixWorld),r.premultiply(_),o.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(_),f++}else if(w.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:n}}function fg(s){let t=new l1(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function c1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new fg(s),t.set(i,[a])):r>=o.length?(a=new fg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`,d1=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],f1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],pg=new Ue,ja=new it,Bd=new it;function p1(s,t,e){let n=new Us,i=new xe,r=new xe,o=new Be,a=new gc,l=new _c,c={},h=e.maxTextureSize,u={[Hs]:Rn,[Rn]:Hs,[ji]:ji},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:h1,fragmentShader:u1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ks;p.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let _=this.type;this.render=function(D,g,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===lm&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);let E=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(vr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=_!==this.type;z&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(j=>j.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,j=D.length;L<j;L++){let q=D[L],U=q.shadow;if(U===void 0){Kt("WebGLShadowMap:",q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let J=U.getFrameExtents();i.multiply(J),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,U.mapSize.y=r.y));let K=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=K,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ro){if(q.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Yn(i.x,i.y,{format:Ws,type:Ti,minFilter:mn,magFilter:mn,generateMipmaps:!1}),U.map.texture.name=q.name+".shadowMap",U.map.depthTexture=new ps(i.x,i.y,wi),U.map.depthTexture.name=q.name+".shadowMapDepth",U.map.depthTexture.format=fs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an}else q.isPointLight?(U.map=new qa(i.x),U.map.depthTexture=new Aa(i.x,Mi)):(U.map=new Yn(i.x,i.y),U.map.depthTexture=new ps(i.x,i.y,Mi)),U.map.depthTexture.name=q.name+".shadowMap",U.map.depthTexture.format=fs,this.type===xr?(U.map.depthTexture.compareFunction=K?Rd:Ad,U.map.depthTexture.minFilter=mn,U.map.depthTexture.magFilter=mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let ot=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();q.isPointLight!==!0&&U.updateMatrices(q,v);let dt=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:v.layers;for(let Pt=0;Pt<ot;Pt++){let At=U.getCamera(Pt);if(q.isPointLight){let Q=U.camera,wt=U.matrix,Ct=q.distance||Q.far;Ct!==Q.far&&(Q.far=Ct,Q.updateProjectionMatrix()),ja.setFromMatrixPosition(q.matrixWorld),Q.position.copy(ja),Bd.copy(Q.position),Bd.add(d1[Pt]),Q.up.copy(f1[Pt]),Q.lookAt(Bd),Q.updateMatrixWorld(),wt.makeTranslation(-ja.x,-ja.y,-ja.z),pg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(pg,Q.coordinateSystem,Q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,Pt),s.clear();else{Pt===0&&(s.setRenderTarget(U.map),s.clear());let Q=U.getViewport(Pt);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(o)}n=U.getFrustum(Pt),w(g,v,At,q,dt,this.type)}U.isPointLightShadow!==!0&&this.type===Ro&&S(U,v),U.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(E,C,I)};function S(D,g){let v=t.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null?D.mapPass=new Yn(i.x,i.y,{format:Ws,type:Ti}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(g,null,v,d,x,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value.set(D.map.width,D.map.height),f.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(g,null,v,f,x,null)}function P(D,g,v,E){let C=null,I=v.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)C=I;else if(C=v.isPointLight===!0?l:a,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let F=C.uuid,z=g.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let j=L[z];j===void 0&&(j=C.clone(),L[z]=j,g.addEventListener("dispose",R)),C=j}if(C.visible=g.visible,C.wireframe=g.wireframe,E===Ro?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:u[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=s.properties.get(C);F.light=v}return C}function w(D,g,v,E,C,I){if(D.visible===!1)return;if(D.layers.test(C)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&I===Ro)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,D.matrixWorld);let L=t.update(D),j=D.material;if(Array.isArray(j)){let q=L.groups;for(let U=0,J=q.length;U<J;U++){let K=q[U],ot=j[K.materialIndex];if(ot&&ot.visible){let dt=P(D,ot,E,I);D.onBeforeShadow(s,D,g,v,L,dt,K),s.renderBufferDirect(v,null,L,dt,D,K),D.onAfterShadow(s,D,g,v,L,dt,K)}}}else if(j.visible){let q=P(D,j,E,I);D.onBeforeShadow(s,D,g,v,L,q,null),s.renderBufferDirect(v,null,L,q,D,null),D.onAfterShadow(s,D,g,v,L,q,null)}}let z=D.children;for(let L=0,j=z.length;L<j;L++)w(z[L],g,v,E,C,I)}function R(D){D.target.removeEventListener("dispose",R);for(let v in c){let E=c[v],C=D.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function m1(s,t){function e(){let B=!1,ht=new Be,rt=null,yt=new Be(0,0,0,0);return{setMask:function(_t){rt!==_t&&!B&&(s.colorMask(_t,_t,_t,_t),rt=_t)},setLocked:function(_t){B=_t},setClear:function(_t,Et,Ht,ie,pt){pt===!0&&(_t*=ie,Et*=ie,Ht*=ie),ht.set(_t,Et,Ht,ie),yt.equals(ht)===!1&&(s.clearColor(_t,Et,Ht,ie),yt.copy(ht))},reset:function(){B=!1,rt=null,yt.set(-1,0,0,0)}}}function n(){let B=!1,ht=!1,rt=null,yt=null,_t=null;return{setReversed:function(Et){if(ht!==Et){let Ht=t.get("EXT_clip_control");Et?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),ht=Et;let ie=_t;_t=null,this.setClear(ie)}},getReversed:function(){return ht},setTest:function(Et){Et?vt(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(Et){rt!==Et&&!B&&(s.depthMask(Et),rt=Et)},setFunc:function(Et){if(ht&&(Et=Gm[Et]),yt!==Et){switch(Et){case $l:s.depthFunc(s.NEVER);break;case Ql:s.depthFunc(s.ALWAYS);break;case tc:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case ec:s.depthFunc(s.EQUAL);break;case nc:s.depthFunc(s.GEQUAL);break;case ic:s.depthFunc(s.GREATER);break;case sc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Et}},setLocked:function(Et){B=Et},setClear:function(Et){_t!==Et&&(_t=Et,ht&&(Et=1-Et),s.clearDepth(Et))},reset:function(){B=!1,rt=null,yt=null,_t=null,ht=!1}}}function i(){let B=!1,ht=null,rt=null,yt=null,_t=null,Et=null,Ht=null,ie=null,pt=null;return{setTest:function(qt){B||(qt?vt(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(qt){ht!==qt&&!B&&(s.stencilMask(qt),ht=qt)},setFunc:function(qt,re,Ft){(rt!==qt||yt!==re||_t!==Ft)&&(s.stencilFunc(qt,re,Ft),rt=qt,yt=re,_t=Ft)},setOp:function(qt,re,Ft){(Et!==qt||Ht!==re||ie!==Ft)&&(s.stencilOp(qt,re,Ft),Et=qt,Ht=re,ie=Ft)},setLocked:function(qt){B=qt},setClear:function(qt){pt!==qt&&(s.clearStencil(qt),pt=qt)},reset:function(){B=!1,ht=null,rt=null,yt=null,_t=null,Et=null,Ht=null,ie=null,pt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,_=null,S=null,P=null,w=null,R=null,D=null,g=null,v=new ce(0,0,0),E=0,C=!1,I=null,F=null,z=null,L=null,j=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,J=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),U=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),U=J>=2);let ot=null,dt={},Pt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Q=new Be().fromArray(Pt),wt=new Be().fromArray(At);function Ct(B,ht,rt,yt){let _t=new Uint8Array(4),Et=s.createTexture();s.bindTexture(B,Et),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<rt;Ht++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(ht+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return Et}let Bt={};Bt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Bt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Bt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),vt(s.DEPTH_TEST),o.setFunc(So),De(!1),Ce(ad),vt(s.CULL_FACE),be(vr);function vt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Gt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function se(B,ht){return d[B]!==ht?(s.bindFramebuffer(B,ht),d[B]=ht,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Wt(B,ht){let rt=p,yt=!1;if(B){rt=f.get(ht),rt===void 0&&(rt=[],f.set(ht,rt));let _t=B.textures;if(rt.length!==_t.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,Ht=_t.length;Et<Ht;Et++)rt[Et]=s.COLOR_ATTACHMENT0+Et;rt.length=_t.length,yt=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,yt=!0);yt&&s.drawBuffers(rt)}function pe(B){return x!==B?(s.useProgram(B),x=B,!0):!1}let ee={[yr]:s.FUNC_ADD,[hm]:s.FUNC_SUBTRACT,[um]:s.FUNC_REVERSE_SUBTRACT};ee[dm]=s.MIN,ee[fm]=s.MAX;let $t={[pm]:s.ZERO,[mm]:s.ONE,[gm]:s.SRC_COLOR,[ud]:s.SRC_ALPHA,[bm]:s.SRC_ALPHA_SATURATE,[ym]:s.DST_COLOR,[xm]:s.DST_ALPHA,[_m]:s.ONE_MINUS_SRC_COLOR,[dd]:s.ONE_MINUS_SRC_ALPHA,[Sm]:s.ONE_MINUS_DST_COLOR,[vm]:s.ONE_MINUS_DST_ALPHA,[Mm]:s.CONSTANT_COLOR,[wm]:s.ONE_MINUS_CONSTANT_COLOR,[Tm]:s.CONSTANT_ALPHA,[Cm]:s.ONE_MINUS_CONSTANT_ALPHA};function be(B,ht,rt,yt,_t,Et,Ht,ie,pt,qt){if(B===vr){m===!0&&(Gt(s.BLEND),m=!1);return}if(m===!1&&(vt(s.BLEND),m=!0),B!==cm){if(B!==_||qt!==C){if((S!==yr||R!==yr)&&(s.blendEquation(s.FUNC_ADD),S=yr,R=yr),qt)switch(B){case Po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ld:s.blendFunc(s.ONE,s.ONE);break;case cd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:te("WebGLState: Invalid blending: ",B);break}else switch(B){case Po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ld:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case cd:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hd:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",B);break}P=null,w=null,D=null,g=null,v.set(0,0,0),E=0,_=B,C=qt}return}_t=_t||ht,Et=Et||rt,Ht=Ht||yt,(ht!==S||_t!==R)&&(s.blendEquationSeparate(ee[ht],ee[_t]),S=ht,R=_t),(rt!==P||yt!==w||Et!==D||Ht!==g)&&(s.blendFuncSeparate($t[rt],$t[yt],$t[Et],$t[Ht]),P=rt,w=yt,D=Et,g=Ht),(ie.equals(v)===!1||pt!==E)&&(s.blendColor(ie.r,ie.g,ie.b,pt),v.copy(ie),E=pt),_=B,C=!1}function Me(B,ht){B.side===ji?Gt(s.CULL_FACE):vt(s.CULL_FACE);let rt=B.side===Rn;ht&&(rt=!rt),De(rt),B.blending===Po&&B.transparent===!1?be(vr):be(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let yt=B.stencilWrite;a.setTest(yt),yt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?vt(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(B){I!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),I=B)}function Ce(B){B!==om?(vt(s.CULL_FACE),B!==F&&(B===ad?s.cullFace(s.BACK):B===am?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),F=B}function Ye(B){B!==z&&(U&&s.lineWidth(B),z=B)}function Ee(B,ht,rt){B?(vt(s.POLYGON_OFFSET_FILL),(L!==ht||j!==rt)&&(L=ht,j=rt,o.getReversed()&&(ht=-ht,rt=-rt),s.polygonOffset(ht,rt))):Gt(s.POLYGON_OFFSET_FILL)}function dn(B){B?vt(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function Lt(B){B===void 0&&(B=s.TEXTURE0+q-1),ot!==B&&(s.activeTexture(B),ot=B)}function H(B,ht,rt){rt===void 0&&(ot===null?rt=s.TEXTURE0+q-1:rt=ot);let yt=dt[rt];yt===void 0&&(yt={type:void 0,texture:void 0},dt[rt]=yt),(yt.type!==B||yt.texture!==ht)&&(ot!==rt&&(s.activeTexture(rt),ot=rt),s.bindTexture(B,ht||Bt[B]),yt.type=B,yt.texture=ht)}function T(){let B=dt[ot];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(B){te("WebGLState:",B)}}function Tt(){try{s.compressedTexImage3D(...arguments)}catch(B){te("WebGLState:",B)}}function Qt(){try{s.texSubImage2D(...arguments)}catch(B){te("WebGLState:",B)}}function xt(){try{s.texSubImage3D(...arguments)}catch(B){te("WebGLState:",B)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(B){te("WebGLState:",B)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(B){te("WebGLState:",B)}}function ut(){try{s.texStorage2D(...arguments)}catch(B){te("WebGLState:",B)}}function A(){try{s.texStorage3D(...arguments)}catch(B){te("WebGLState:",B)}}function b(){try{s.texImage2D(...arguments)}catch(B){te("WebGLState:",B)}}function Z(){try{s.texImage3D(...arguments)}catch(B){te("WebGLState:",B)}}function mt(B){return u[B]!==void 0?u[B]:s.getParameter(B)}function ct(B,ht){u[B]!==ht&&(s.pixelStorei(B,ht),u[B]=ht)}function St(B){Q.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function Dt(B){wt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),wt.copy(B))}function at(B,ht){let rt=c.get(ht);rt===void 0&&(rt=new WeakMap,c.set(ht,rt));let yt=rt.get(B);yt===void 0&&(yt=s.getUniformBlockIndex(ht,B.name),s.uniformBlockBinding(ht,yt,yt),rt.set(B,yt))}function lt(B,ht,rt){let _t=c.get(ht).get(B);l[_t]!==rt&&(s.bindBufferBase(s.UNIFORM_BUFFER,_t,rt),l[_t]=rt)}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},ot=null,dt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,_=null,S=null,P=null,w=null,R=null,D=null,g=null,v=new ce(0,0,0),E=0,C=!1,I=null,F=null,z=null,L=null,j=null,Q.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:vt,disable:Gt,bindFramebuffer:se,drawBuffers:Wt,useProgram:pe,setBlending:be,setMaterial:Me,setFlipSided:De,setCullFace:Ce,setLineWidth:Ye,setPolygonOffset:Ee,setScissorTest:dn,activeTexture:Lt,bindTexture:H,unbindTexture:T,compressedTexImage2D:gt,compressedTexImage3D:Tt,texImage2D:b,texImage3D:Z,pixelStorei:ct,getParameter:mt,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:ut,texStorage3D:A,texSubImage2D:Qt,texSubImage3D:xt,compressedTexSubImage2D:ue,compressedTexSubImage3D:zt,scissor:St,viewport:Dt,reset:Rt}}function g1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return m?new OffscreenCanvas(A,b):Sa("canvas")}function S(A,b,Z){let mt=1,ct=ut(A);if((ct.width>Z||ct.height>Z)&&(mt=Z/Math.max(ct.width,ct.height)),mt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let St=Math.floor(mt*ct.width),Dt=Math.floor(mt*ct.height);d===void 0&&(d=_(St,Dt));let at=b?_(St,Dt):d;return at.width=St,at.height=Dt,at.getContext("2d").drawImage(A,0,0,St,Dt),Kt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+St+"x"+Dt+")."),at}else return"data"in A&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),A;return A}function P(A){return A.generateMipmaps}function w(A){s.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(A,b,Z,mt,ct,St=!1){if(A!==null){if(s[A]!==void 0)return s[A];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Dt;mt&&(Dt=t.get("EXT_texture_norm16"),Dt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=b;if(b===s.RED&&(Z===s.FLOAT&&(at=s.R32F),Z===s.HALF_FLOAT&&(at=s.R16F),Z===s.UNSIGNED_BYTE&&(at=s.R8),Z===s.UNSIGNED_SHORT&&Dt&&(at=Dt.R16_EXT),Z===s.SHORT&&Dt&&(at=Dt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.R8UI),Z===s.UNSIGNED_SHORT&&(at=s.R16UI),Z===s.UNSIGNED_INT&&(at=s.R32UI),Z===s.BYTE&&(at=s.R8I),Z===s.SHORT&&(at=s.R16I),Z===s.INT&&(at=s.R32I)),b===s.RG&&(Z===s.FLOAT&&(at=s.RG32F),Z===s.HALF_FLOAT&&(at=s.RG16F),Z===s.UNSIGNED_BYTE&&(at=s.RG8),Z===s.UNSIGNED_SHORT&&Dt&&(at=Dt.RG16_EXT),Z===s.SHORT&&Dt&&(at=Dt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RG8UI),Z===s.UNSIGNED_SHORT&&(at=s.RG16UI),Z===s.UNSIGNED_INT&&(at=s.RG32UI),Z===s.BYTE&&(at=s.RG8I),Z===s.SHORT&&(at=s.RG16I),Z===s.INT&&(at=s.RG32I)),b===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(at=s.RGB16UI),Z===s.UNSIGNED_INT&&(at=s.RGB32UI),Z===s.BYTE&&(at=s.RGB8I),Z===s.SHORT&&(at=s.RGB16I),Z===s.INT&&(at=s.RGB32I)),b===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),Z===s.UNSIGNED_INT&&(at=s.RGBA32UI),Z===s.BYTE&&(at=s.RGBA8I),Z===s.SHORT&&(at=s.RGBA16I),Z===s.INT&&(at=s.RGBA32I)),b===s.RGB&&(Z===s.UNSIGNED_SHORT&&Dt&&(at=Dt.RGB16_EXT),Z===s.SHORT&&Dt&&(at=Dt.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),b===s.RGBA){let lt=St?ya:_e.getTransfer(ct);Z===s.FLOAT&&(at=s.RGBA32F),Z===s.HALF_FLOAT&&(at=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(at=lt===Ae?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Dt&&(at=Dt.RGBA16_EXT),Z===s.SHORT&&Dt&&(at=Dt.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function g(A,b){let Z;return A?b===null||b===Mi||b===br?Z=s.DEPTH24_STENCIL8:b===wi?Z=s.DEPTH32F_STENCIL8:b===Oo&&(Z=s.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mi||b===br?Z=s.DEPTH_COMPONENT24:b===wi?Z=s.DEPTH_COMPONENT32F:b===Oo&&(Z=s.DEPTH_COMPONENT16),Z}function v(A,b){return P(A)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function E(A){let b=new WeakRef(A);n.get(A).__ref=b,p.add(b),x.register(A,b,b)}function C(A){let b=n.get(A).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function I(A){z(A.target)}function F(A){L(A.target)}function z(A){A.removeEventListener("dispose",I),C(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function L(A){A.removeEventListener("dispose",F),C(A),J(A)}function j(){for(let A of p){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):z(b))}p.clear(),u.clear()}function q(A){let b=n.get(A);if(b.__webglInit===void 0)return;let Z=A.source,mt=f.get(Z);if(mt){let ct=mt[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&U(A),Object.keys(mt).length===0&&f.delete(Z)}n.remove(A)}function U(A){let b=n.get(A);s.deleteTexture(b.__webglTexture);let Z=A.source,mt=f.get(Z);delete mt[b.__cacheKey],o.memory.textures--}function J(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let Z=A.depthTexture;if(Z&&Z.renderTarget===A&&z(Z),A.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let St=0;St<b.__webglFramebuffer[ct].length;St++)s.deleteFramebuffer(b.__webglFramebuffer[ct][St]);else s.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[ct]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let mt=A.textures;for(let ct=0,St=mt.length;ct<St;ct++){let Dt=n.get(mt[ct]);Dt.__webglTexture&&(s.deleteTexture(Dt.__webglTexture),o.memory.textures--),n.remove(mt[ct])}n.remove(A)}let K=0;function ot(){K=0}function dt(){return K}function Pt(A){K=A}function At(){let A=K;return A>=i.maxTextures&&Kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),K+=1,A}function Q(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function wt(A,b){let Z=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&Z.__version!==A.version){let mt=A.image;if(mt===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,A,b);return}}else A.isExternalTexture&&(Z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+b)}function Ct(A,b){let Z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){Me(Z,A,b);return}else A.isExternalTexture&&(Z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+b)}function Bt(A,b){let Z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&Z.__version!==A.version){Me(Z,A,b);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+b)}function vt(A,b){let Z=n.get(A);if(A.version>0&&Z.__version!==A.version){De(Z,A,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+b)}let Gt={[rc]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[oc]:s.MIRRORED_REPEAT},se={[an]:s.NEAREST,[Rm]:s.NEAREST_MIPMAP_NEAREST,[ka]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[Ic]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},Wt={[Om]:s.NEVER,[Pd]:s.ALWAYS,[Lm]:s.LESS,[Ad]:s.LEQUAL,[Fm]:s.EQUAL,[Rd]:s.GEQUAL,[Nm]:s.GREATER,[km]:s.NOTEQUAL};function pe(A,b){if(b.type===wi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===Ic||b.magFilter===ka||b.magFilter===bi||b.minFilter===mn||b.minFilter===Ic||b.minFilter===ka||b.minFilter===bi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Gt[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Gt[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Gt[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,se[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Wt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==ka&&b.minFilter!==bi||b.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ee(A,b){let Z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",I),E(b));let mt=b.source,ct=f.get(mt);ct===void 0&&(ct={},f.set(mt,ct));let St=Q(b);if(St!==A.__cacheKey){ct[St]===void 0&&(ct[St]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ct[St].usedTimes++;let Dt=ct[A.__cacheKey];Dt!==void 0&&(ct[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&U(b)),A.__cacheKey=St,A.__webglTexture=ct[St].texture}return Z}function $t(A,b,Z){return Math.floor(Math.floor(A/Z)/b)}function be(A,b,Z,mt){let St=A.updateRanges;if(St.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Z,mt,b.data);else{St.sort((B,ht)=>B.start-ht.start);let Dt=0;for(let B=1;B<St.length;B++){let ht=St[Dt],rt=St[B],yt=ht.start+ht.count,_t=$t(rt.start,b.width,4),Et=$t(ht.start,b.width,4);rt.start<=yt+1&&_t===Et&&$t(rt.start+rt.count-1,b.width,4)===_t?ht.count=Math.max(ht.count,rt.start+rt.count-ht.start):(++Dt,St[Dt]=rt)}St.length=Dt+1;let at=e.getParameter(s.UNPACK_ROW_LENGTH),lt=e.getParameter(s.UNPACK_SKIP_PIXELS),Rt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let B=0,ht=St.length;B<ht;B++){let rt=St[B],yt=Math.floor(rt.start/4),_t=Math.ceil(rt.count/4),Et=yt%b.width,Ht=Math.floor(yt/b.width),ie=_t,pt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(s.UNPACK_SKIP_ROWS,Ht),e.texSubImage2D(s.TEXTURE_2D,0,Et,Ht,ie,pt,Z,mt,b.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Rt)}}function Me(A,b,Z){let mt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=s.TEXTURE_3D);let ct=ee(A,b),St=b.source;e.bindTexture(mt,A.__webglTexture,s.TEXTURE0+Z);let Dt=n.get(St);if(St.version!==Dt.__version||ct===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let pt=_e.getPrimaries(_e.workingColorSpace),qt=b.colorSpace===gs?null:_e.getPrimaries(b.colorSpace),re=b.colorSpace===gs||pt===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let lt=S(b.image,!1,i.maxTextureSize);lt=zt(b,lt);let Rt=r.convert(b.format,b.colorSpace),B=r.convert(b.type),ht=D(b.internalFormat,Rt,B,b.normalized,b.colorSpace,b.isVideoTexture);pe(mt,b);let rt,yt=b.mipmaps,_t=b.isVideoTexture!==!0,Et=Dt.__version===void 0||ct===!0,Ht=St.dataReady,ie=v(b,lt);if(b.isDepthTexture)ht=g(b.format===ms,b.type),Et&&(_t?e.texStorage2D(s.TEXTURE_2D,1,ht,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,ht,lt.width,lt.height,0,Rt,B,null));else if(b.isDataTexture)if(yt.length>0){_t&&Et&&e.texStorage2D(s.TEXTURE_2D,ie,ht,yt[0].width,yt[0].height);for(let pt=0,qt=yt.length;pt<qt;pt++)rt=yt[pt],_t?Ht&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,rt.width,rt.height,Rt,B,rt.data):e.texImage2D(s.TEXTURE_2D,pt,ht,rt.width,rt.height,0,Rt,B,rt.data);b.generateMipmaps=!1}else _t?(Et&&e.texStorage2D(s.TEXTURE_2D,ie,ht,lt.width,lt.height),Ht&&be(b,lt,Rt,B)):e.texImage2D(s.TEXTURE_2D,0,ht,lt.width,lt.height,0,Rt,B,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){_t&&Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ie,ht,yt[0].width,yt[0].height,lt.depth);for(let pt=0,qt=yt.length;pt<qt;pt++)if(rt=yt[pt],b.format!==Ci)if(Rt!==null)if(_t){if(Ht)if(b.layerUpdates.size>0){let re=kd(rt.width,rt.height,b.format,b.type);for(let Ft of b.layerUpdates){let we=rt.data.subarray(Ft*re/rt.data.BYTES_PER_ELEMENT,(Ft+1)*re/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,Ft,rt.width,rt.height,1,Rt,we)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,rt.width,rt.height,lt.depth,Rt,rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,ht,rt.width,rt.height,lt.depth,0,rt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?Ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,rt.width,rt.height,lt.depth,Rt,B,rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,ht,rt.width,rt.height,lt.depth,0,Rt,B,rt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{_t&&Et&&e.texStorage2D(s.TEXTURE_2D,ie,ht,yt[0].width,yt[0].height);for(let pt=0,qt=yt.length;pt<qt;pt++)rt=yt[pt],b.format!==Ci?Rt!==null?_t?Ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,rt.width,rt.height,Rt,rt.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,ht,rt.width,rt.height,0,rt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Ht&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,rt.width,rt.height,Rt,B,rt.data):e.texImage2D(s.TEXTURE_2D,pt,ht,rt.width,rt.height,0,Rt,B,rt.data)}else if(b.isDataArrayTexture)if(_t){if(Et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ie,ht,lt.width,lt.height,lt.depth),Ht)if(b.layerUpdates.size>0){let pt=kd(lt.width,lt.height,b.format,b.type);for(let qt of b.layerUpdates){let re=lt.data.subarray(qt*pt/lt.data.BYTES_PER_ELEMENT,(qt+1)*pt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qt,lt.width,lt.height,1,Rt,B,re)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Rt,B,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,lt.width,lt.height,lt.depth,0,Rt,B,lt.data);else if(b.isData3DTexture)_t?(Et&&e.texStorage3D(s.TEXTURE_3D,ie,ht,lt.width,lt.height,lt.depth),Ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Rt,B,lt.data)):e.texImage3D(s.TEXTURE_3D,0,ht,lt.width,lt.height,lt.depth,0,Rt,B,lt.data);else if(b.isFramebufferTexture){if(Et)if(_t)e.texStorage2D(s.TEXTURE_2D,ie,ht,lt.width,lt.height);else{let pt=lt.width,qt=lt.height;for(let re=0;re<ie;re++)e.texImage2D(s.TEXTURE_2D,re,ht,pt,qt,0,Rt,B,null),pt>>=1,qt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let pt=s.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),lt.parentNode!==pt){pt.appendChild(lt),u.add(b),pt.onpaint=qt=>{let re=qt.changedElements;for(let Ft of u)re.includes(Ft.image)&&(Ft.needsUpdate=!0)},pt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,lt);else{let re=s.RGBA,Ft=s.RGBA,we=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,re,Ft,we,lt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(yt.length>0){if(_t&&Et){let pt=ut(yt[0]);e.texStorage2D(s.TEXTURE_2D,ie,ht,pt.width,pt.height)}for(let pt=0,qt=yt.length;pt<qt;pt++)rt=yt[pt],_t?Ht&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Rt,B,rt):e.texImage2D(s.TEXTURE_2D,pt,ht,Rt,B,rt);b.generateMipmaps=!1}else if(_t){if(Et){let pt=ut(lt);e.texStorage2D(s.TEXTURE_2D,ie,ht,pt.width,pt.height)}Ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,B,lt)}else e.texImage2D(s.TEXTURE_2D,0,ht,Rt,B,lt);P(b)&&b.mipmapsAutoUpdate===!0&&w(mt),Dt.__version=St.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function De(A,b,Z){if(b.image.length!==6)return;let mt=ee(A,b),ct=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+Z);let St=n.get(ct);if(ct.version!==St.__version||mt===!0){e.activeTexture(s.TEXTURE0+Z);let Dt=_e.getPrimaries(_e.workingColorSpace),at=b.colorSpace===gs?null:_e.getPrimaries(b.colorSpace),lt=b.colorSpace===gs||Dt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Rt=b.isCompressedTexture||b.image[0].isCompressedTexture,B=b.image[0]&&b.image[0].isDataTexture,ht=[];for(let Ft=0;Ft<6;Ft++)!Rt&&!B?ht[Ft]=S(b.image[Ft],!0,i.maxCubemapSize):ht[Ft]=B?b.image[Ft].image:b.image[Ft],ht[Ft]=zt(b,ht[Ft]);let rt=ht[0],yt=r.convert(b.format,b.colorSpace),_t=r.convert(b.type),Et=D(b.internalFormat,yt,_t,b.normalized,b.colorSpace),Ht=b.isVideoTexture!==!0,ie=St.__version===void 0||mt===!0,pt=ct.dataReady,qt=v(b,rt);pe(s.TEXTURE_CUBE_MAP,b);let re;if(b.isDepthTexture){if(Et=g(b.format===ms,b.type),ie)if(Ht)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Et,rt.width,rt.height);else for(let Ft=0;Ft<6;Ft++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,rt.width,rt.height,0,yt,_t,null)}else if(Rt){Ht&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,Et,rt.width,rt.height);for(let Ft=0;Ft<6;Ft++){re=ht[Ft].mipmaps;for(let we=0;we<re.length;we++){let We=re[we];b.format!==Ci?yt!==null?Ht?pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we,0,0,We.width,We.height,yt,We.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we,Et,We.width,We.height,0,We.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we,0,0,We.width,We.height,yt,_t,We.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we,Et,We.width,We.height,0,yt,_t,We.data)}}}else{if(re=b.mipmaps,Ht&&ie){re.length>0&&qt++;let Ft=ut(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,Et,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(B){Ht?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,ht[Ft].width,ht[Ft].height,yt,_t,ht[Ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,ht[Ft].width,ht[Ft].height,0,yt,_t,ht[Ft].data);for(let we=0;we<re.length;we++){let sn=re[we].image[Ft].image;Ht?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we+1,0,0,sn.width,sn.height,yt,_t,sn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we+1,Et,sn.width,sn.height,0,yt,_t,sn.data)}}else{Ht?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,yt,_t,ht[Ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,yt,_t,ht[Ft]);for(let we=0;we<re.length;we++){let We=re[we];Ht?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we+1,0,0,yt,_t,We.image[Ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,we+1,Et,yt,_t,We.image[Ft])}}}P(b)&&b.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),St.__version=ct.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ce(A,b,Z,mt,ct,St){let Dt=r.convert(Z.format,Z.colorSpace),at=r.convert(Z.type),lt=D(Z.internalFormat,Dt,at,Z.normalized,Z.colorSpace),Rt=n.get(b),B=n.get(Z);if(B.__renderTarget=b,!Rt.__hasExternalTextures){let ht=Math.max(1,b.width>>St),rt=Math.max(1,b.height>>St);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,St,lt,ht,rt,b.depth,0,Dt,at,null):e.texImage2D(ct,St,lt,ht,rt,0,Dt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),xt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,ct,B.__webglTexture,0,Qt(b)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,ct,B.__webglTexture,St),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(A,b,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer){let mt=b.depthTexture,ct=mt&&mt.isDepthTexture?mt.type:null,St=g(b.stencilBuffer,ct),Dt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt(b),St,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt(b),St,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,St,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,A)}else{let mt=b.textures;for(let ct=0;ct<mt.length;ct++){let St=mt[ct],Dt=r.convert(St.format,St.colorSpace),at=r.convert(St.type),lt=D(St.internalFormat,Dt,at,St.normalized,St.colorSpace);xt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt(b),lt,b.width,b.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt(b),lt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,lt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(A,b,Z){let mt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(b.depthTexture);ct.__renderTarget=b;let St=mt?b.depthTexture.image[0]:b.depthTexture.image;(!ct.__webglTexture||St.width!==b.width||St.height!==b.height)&&(St.width=b.width,St.height=b.height,b.depthTexture.needsUpdate=!0),mt?vt(b.depthTexture,0):wt(b.depthTexture,0);let Dt=ct.__webglTexture,at=Qt(b),lt=mt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,Rt=b.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===fs)xt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Rt,lt,Dt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Rt,lt,Dt,0);else if(b.depthTexture.format===ms)xt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Rt,lt,Dt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Rt,lt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dn(A){let b=n.get(A),Z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let mt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){let ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",ct)};mt.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=mt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let mt=0;mt<6;mt++)Ee(b.__webglFramebuffer[mt],A,mt);else A.texture.mipmaps.length>0?Ee(b.__webglFramebuffer[0],A,0):Ee(b.__webglFramebuffer,A,0);else if(Z){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=s.createRenderbuffer(),Ye(b.__webglDepthbuffer[mt],A,!1);else{let ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=b.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,St)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Ye(b.__webglDepthbuffer,A,!1);else{let ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,St)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(A,b,Z){let mt=n.get(A);b!==void 0&&Ce(mt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&dn(A)}function H(A){let b=A.texture,Z=n.get(A),mt=n.get(b);A.addEventListener("dispose",F),E(A);let ct=A.textures,St=A.isWebGLCubeRenderTarget===!0,Dt=ct.length>1;if(Dt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=b.version,o.memory.textures++),St){Z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps.length>0){Z.__webglFramebuffer[at]=[];for(let lt=0;lt<b.mipmaps.length;lt++)Z.__webglFramebuffer[at][lt]=s.createFramebuffer()}else Z.__webglFramebuffer[at]=s.createFramebuffer()}else{if(b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)Z.__webglFramebuffer[at]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let at=0,lt=ct.length;at<lt;at++){let Rt=n.get(ct[at]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&xt(A)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let at=0;at<ct.length;at++){let lt=ct[at];Z.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[at]);let Rt=r.convert(lt.format,lt.colorSpace),B=r.convert(lt.type),ht=D(lt.internalFormat,Rt,B,lt.normalized,lt.colorSpace,A.isXRRenderTarget===!0),rt=Qt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Z.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(Z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(St){e.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),pe(s.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Ce(Z.__webglFramebuffer[at][lt],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else Ce(Z.__webglFramebuffer[at],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);P(b)?w(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(Dt){for(let at=0,lt=ct.length;at<lt;at++){let Rt=ct[at],B=n.get(Rt),ht=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,B.__webglTexture),pe(ht,Rt),Ce(Z.__webglFramebuffer,A,Rt,s.COLOR_ATTACHMENT0+at,ht,0),P(Rt)&&w(ht)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,mt.__webglTexture),pe(at,b),b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Ce(Z.__webglFramebuffer[lt],A,b,s.COLOR_ATTACHMENT0,at,lt);else Ce(Z.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,at,0);P(b)?w(at):b.mipmaps.length>0&&s.texParameteri(at,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&dn(A)}function T(A){let b=A.textures;for(let Z=0,mt=b.length;Z<mt;Z++){let ct=b[Z];if(P(ct)&&ct.mipmapsAutoUpdate===!0){let St=R(A),Dt=n.get(ct).__webglTexture;e.bindTexture(St,Dt),w(St),e.unbindTexture()}}}let gt=[];function Tt(A){if(A.samples>0){if(xt(A)===!1){let b=A.textures,Z=A.width,mt=A.height,ct=s.COLOR_BUFFER_BIT,St=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=n.get(A),at=b.length>1;if(at)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);let B=n.get(b[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,Z,mt,0,0,Z,mt,ct,s.NEAREST),l===!0&&(gt.length=0,gt.push(s.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&gt.push(St),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Rt]);let B=n.get(b[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,B,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Qt(A){return Math.min(i.maxSamples,A.samples)}function xt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ue(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function zt(A,b){let Z=A.colorSpace,mt=A.format,ct=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Z!==va&&Z!==gs&&(_e.getTransfer(Z)===Ae?(mt!==Ci||ct!==Un)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",Z)),b}function ut(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=ot,this.getTextureUnits=dt,this.setTextureUnits=Pt,this.setTexture2D=wt,this.setTexture2DArray=Ct,this.setTexture3D=Bt,this.setTextureCube=vt,this.rebindTextures=Lt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=dn,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=xt,this.dispose=j}function _1(s,t){function e(n,i=gs){let r,o=_e.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===Lc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sd)return s.BYTE;if(n===bd)return s.SHORT;if(n===Oo)return s.UNSIGNED_SHORT;if(n===Oc)return s.INT;if(n===Mi)return s.UNSIGNED_INT;if(n===wi)return s.FLOAT;if(n===Ti)return s.HALF_FLOAT;if(n===Td)return s.ALPHA;if(n===Cd)return s.RGB;if(n===Ci)return s.RGBA;if(n===fs)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===Ed)return s.RED;if(n===Nc)return s.RED_INTEGER;if(n===Ws)return s.RG;if(n===kc)return s.RG_INTEGER;if(n===Uc)return s.RGBA_INTEGER;if(n===Ua||n===Ba||n===za||n===Va)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===zc||n===Vc||n===Gc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hc||n===Wc||n===Xc||n===jc||n===Yc||n===Ga||n===qc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hc||n===Wc)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jc)return r.COMPRESSED_R11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return r.COMPRESSED_RG11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===Jc||n===Kc||n===$c||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===hh||n===uh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ch)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===fh||n===Ha||n===ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
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

}`,jd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xi({vertexShader:x1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kn(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yd=class extends Vi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new jd,_={},S=e.getContextAttributes(),P=null,w=null,R=[],D=[],g=new xe,v=null,E=null,C=new jn;C.viewport=new Be;let I=new jn;I.viewport=new Be;let F=[C,I],z=new Rc,L=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let wt=R[Q];return wt===void 0&&(wt=new To,R[Q]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(Q){let wt=R[Q];return wt===void 0&&(wt=new To,R[Q]=wt),wt.getGripSpace()},this.getHand=function(Q){let wt=R[Q];return wt===void 0&&(wt=new To,R[Q]=wt),wt.getHandSpace()};function q(Q){let wt=D.indexOf(Q.inputSource);if(wt===-1)return;let Ct=R[wt];Ct!==void 0&&(Ct.update(Q.inputSource,Q.frame,c||o),Ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function U(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",J);for(let Q=0;Q<R.length;Q++){let wt=D[Q];wt!==null&&(D[Q]=null,R[Q].disconnect(wt))}L=null,j=null,m.reset();for(let Q in _)delete _[Q];if(t.setRenderTarget(P),f=null,d=null,u=null,i=null,w=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(g.width,g.height,!1),E!==null){let Q=E.camera;Q.fov=E.fov,Q.zoom=E.zoom,Q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(P=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",U),i.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Bt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=S.stencil?ms:fs,Bt=S.stencil?br:Mi);let Gt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Yn(d.textureWidth,d.textureHeight,{format:Ci,type:Un,depthTexture:new ps(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Q){for(let wt=0;wt<Q.removed.length;wt++){let Ct=Q.removed[wt],Bt=D.indexOf(Ct);Bt>=0&&(D[Bt]=null,R[Bt].disconnect(Ct))}for(let wt=0;wt<Q.added.length;wt++){let Ct=Q.added[wt],Bt=D.indexOf(Ct);if(Bt===-1){for(let Gt=0;Gt<R.length;Gt++)if(Gt>=D.length){D.push(Ct),Bt=Gt;break}else if(D[Gt]===null){D[Gt]=Ct,Bt=Gt;break}if(Bt===-1)break}let vt=R[Bt];vt&&vt.connect(Ct)}}function K(Q,wt){wt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(wt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let wt=Q.near,Ct=Q.far;m.texture!==null&&(m.depthNear>0&&(wt=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),z.near=I.near=C.near=wt,z.far=I.far=C.far=Ct,(L!==z.near||j!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,j=z.far),z.layers.mask=Q.layers.mask|6,C.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let Bt=Q.parent,vt=z.cameras;K(z,Bt);for(let Gt=0;Gt<vt.length;Gt++)K(vt[Gt],Bt);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),E===null&&Q.isPerspectiveCamera&&(E={camera:Q,fov:Q.fov,zoom:Q.zoom}),ot(Q,z,Bt)};function ot(Q,wt,Ct){Ct===null?Q.matrix.copy(wt.matrixWorld):(Q.matrix.copy(Ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(wt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(wt.projectionMatrix),Q.projectionMatrixInverse.copy(wt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return _[Q]};let dt=null;function Pt(Q,wt){if(h=wt.getViewerPose(c||o),p=wt,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let Bt=!1;Ct.length!==z.cameras.length&&(z.cameras.length=0,Bt=!0);for(let Wt=0;Wt<Ct.length;Wt++){let pe=Ct[Wt],ee=null;if(f!==null)ee=f.getViewport(pe);else{let be=u.getViewSubImage(d,pe);ee=be.viewport,Wt===0&&(t.setRenderTargetTextures(w,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(w))}let $t=F[Wt];$t===void 0&&($t=new jn,$t.layers.enable(Wt),$t.viewport=new Be,F[Wt]=$t),$t.matrix.fromArray(pe.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(pe.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ee.x,ee.y,ee.width,ee.height),Wt===0&&(z.matrix.copy($t.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Bt===!0&&z.cameras.push($t)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Wt=u.getDepthInformation(Ct[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,i.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<Ct.length;Wt++){let pe=Ct[Wt].camera;if(pe){let ee=_[pe];ee||(ee=new Ra,_[pe]=ee);let $t=u.getCameraImage(pe);ee.sourceTexture=$t}}}}for(let Ct=0;Ct<R.length;Ct++){let Bt=D[Ct],vt=R[Ct];Bt!==null&&vt!==void 0&&vt.update(Bt,wt,c||o)}dt&&dt(Q,wt),wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:wt}),p=null}let At=new mg;At.setAnimationLoop(Pt),this.setAnimationLoop=function(Q){dt=Q},this.dispose=function(){}}},y1=new Ue,Tg=new ne;Tg.set(-1,0,0,0,1,0,0,0,1);function S1(s,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,Ld(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,S,P,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),u(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),d(m,_),_.isMeshPhysicalMaterial&&f(m,_,w)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),x(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,S,P):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Rn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Rn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let S=t.get(_),P=S.envMap,w=S.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(w)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tg),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,S,P){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*S,m.scale.value=P*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function u(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,S){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Rn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function x(m,_){let S=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(s,t,e,n){let i={},r={};function o(S,P){let w=P.program;n.uniformBlockBinding(S,w,i[S.id])}function a(S,P){let w=i[S.id];w===void 0&&(p(S),w=l(S),i[S.id]=w,S.addEventListener("dispose",m));let R=P.program;n.updateUBOMapping(S,R);let D=t.render.frame;r[S.id]!==D&&(c(S),r[S.id]=D)}function l(S){let P=s.createBuffer(),w=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,w,R),s.bindBuffer(s.UNIFORM_BUFFER,null),P}function c(S){let P=i[S.id],w=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let D=0,g=w.length;D<g;D++){let v=w[D];if(Array.isArray(v))for(let E=0,C=v.length;E<C;E++)h(v[E],D,E,R);else h(v,D,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,P,w,R){if(d(S,P,w,R)===!0){let D=S.__offset,g=S.value;if(Array.isArray(g)){let v=0;for(let E=0;E<g.length;E++){let C=g[E],I=x(C,!0);u(C,S.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,S.__data)}}function u(S,P,w){typeof S=="number"||typeof S=="boolean"?P[w]=S:S.isMatrix3?(P[w]=S.elements[0],P[w+1]=S.elements[1],P[w+2]=S.elements[2],P[w+3]=0,P[w+4]=S.elements[3],P[w+5]=S.elements[4],P[w+6]=S.elements[5],P[w+7]=0,P[w+8]=S.elements[6],P[w+9]=S.elements[7],P[w+10]=S.elements[8],P[w+11]=0):ArrayBuffer.isView(S)?P.set(S.subarray(0,P.length-w),w):S.toArray(P,w)}function d(S,P,w,R){let D=S.value,g=P+"_"+w;if(Array.isArray(D)){R[g]===void 0&&(R[g]=[]);let v=R[g],E=!1;for(let C=0;C<D.length;C++)f(D[C],v,C)===!0&&(E=!0);return E}return f(D,R,g)}function f(S,P,w){if(P[w]===void 0)return typeof S=="number"||typeof S=="boolean"?P[w]=S:ArrayBuffer.isView(S)?P[w]=S.slice():P[w]=S.clone(),!0;{let R=P[w];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return P[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function p(S){let P=S.uniforms,w=0,R=16;for(let g=0,v=P.length;g<v;g++){let E=Array.isArray(P[g])?P[g]:[P[g]];for(let C=0,I=E.length;C<I;C++){let F=E[C],z=Array.isArray(F.value)?F.value:[F.value],L=Array.isArray(P[g])||Array.isArray(F.value),j=w;for(let U=0,J=z.length;U<J;U++){let K=z[U],ot=x(K,L),dt=w%R,Pt=dt%ot.boundary,At=dt+Pt;w+=Pt,At!==0&&R-At<ot.storage&&(w+=R-At),U===0&&(j=w),w+=ot.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((w-j)/Float32Array.BYTES_PER_ELEMENT),F.__offset=j}}let D=w%R;return D>0&&(w+=R-D),S.__size=w,S.__cache={},this}function x(S,P){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=16,w.storage=48):S.isMatrix4?(w.boundary=16,w.storage=64):S.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",S),P===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(S){let P=S.target;P.removeEventListener("dispose",m),s.deleteBuffer(i[P.id]),delete i[P.id],delete r[P.id]}function _(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:_}}var M1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function w1(){return Yi===null&&(Yi=new fc(M1,16,16,Ws,Ti),Yi.name="DFG_LUT",Yi.minFilter=mn,Yi.magFilter=mn,Yi.wrapS=Bi,Yi.wrapT=Bi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var _h=class{constructor(t={}){let{canvas:e=Bm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Uc,kc,Nc]),_=new Set([Un,Mi,Oo,br,Lc,Fc]),S=new Uint32Array(4),P=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},R=null,D=null,g=[],v=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,F=null,z=null,L=null,j=null;this._outputColorSpace=pn;let q=0,U=0,J=null,K=-1,ot=null,dt=new Be,Pt=new Be,At=null,Q=new ce(0),wt=0,Ct=e.width,Bt=e.height,vt=1,Gt=null,se=null,Wt=new Be(0,0,Ct,Bt),pe=new Be(0,0,Ct,Bt),ee=!1,$t=new Us,be=new pc,Me=!1,De=!1,Ce=new Ue,Ye=new it,Ee=new Be,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function H(){return J===null?vt:1}let T=n;function gt(M,k){return e.getContext(M,k)}let Tt,Qt,xt,ue,zt,ut,A,b,Z,mt,ct,St,Dt,at,lt,Rt,B,ht,rt,yt,_t,Et,Ht;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),T===null){let k="webgl2";if(T=gt(k,M),T===null)throw gt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(M){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),te("WebGLRenderer: "+M.message),M}function ie(){Tt=new FS(T),Tt.init(),_t=new _1(T,Tt),Qt=new wS(T,Tt,t,_t),xt=new m1(T,Tt),Qt.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),z=T.createFramebuffer(),L=T.createFramebuffer(),j=T.createFramebuffer(),ue=new US(T),zt=new e1,ut=new g1(T,Tt,xt,zt,Qt,_t,ue),A=new LS(C),b=new zx(T),Et=new bS(T,b),Z=new NS(T,b,ue,Et),mt=new zS(T,Z,b,Et,ue),ht=new BS(T,Qt,ut),lt=new TS(zt),ct=new t1(C,A,Tt,Qt,Et,lt),St=new S1(C,zt),Dt=new i1,at=new c1(Tt),B=new SS(C,A,xt,mt,p,l),Rt=new p1(C,mt,Qt),Ht=new b1(T,ue,Qt,xt),rt=new MS(T,Tt,ue),yt=new kS(T,Tt,ue),ue.programs=ct.programs,C.capabilities=Qt,C.extensions=Tt,C.properties=zt,C.renderLists=Dt,C.shadowMap=Rt,C.state=xt,C.info=ue}x!==Un&&(E=new GS(x,e.width,e.height,a,i,r));let pt=new Yd(C,T);this.xr=pt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=Tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(M){M!==void 0&&(vt=M,this.setSize(Ct,Bt,!1))},this.getSize=function(M){return M.set(Ct,Bt)},this.setSize=function(M,k,tt=!0){if(pt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=M,Bt=k,e.width=Math.floor(M*vt),e.height=Math.floor(k*vt),tt===!0&&(e.style.width=M+"px",e.style.height=k+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(Ct*vt,Bt*vt).floor()},this.setDrawingBufferSize=function(M,k,tt){Ct=M,Bt=k,vt=tt,e.width=Math.floor(M*tt),e.height=Math.floor(k*tt),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(x===Un){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(dt)},this.getViewport=function(M){return M.copy(Wt)},this.setViewport=function(M,k,tt,$){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,k,tt,$),xt.viewport(dt.copy(Wt).multiplyScalar(H()).round())},this.getScissor=function(M){return M.copy(pe)},this.setScissor=function(M,k,tt,$){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,k,tt,$),xt.scissor(Pt.copy(pe).multiplyScalar(H()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){xt.setScissorTest(ee=M)},this.setOpaqueSort=function(M){Gt=M},this.setTransparentSort=function(M){se=M},this.getClearColor=function(M){return M.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,tt=!0){let $=0;if(M){let et=!1;if(J!==null){let Ot=J.texture.format;et=m.has(Ot)}if(et){let Ot=J.texture.type,Vt=_.has(Ot),It=B.getClearColor(),kt=B.getClearAlpha(),Yt=It.r,oe=It.g,me=It.b;Vt?(S[0]=Yt,S[1]=oe,S[2]=me,S[3]=kt,T.clearBufferuiv(T.COLOR,0,S)):(P[0]=Yt,P[1]=oe,P[2]=me,P[3]=kt,T.clearBufferiv(T.COLOR,0,P))}else $|=T.COLOR_BUFFER_BIT}k&&($|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),B.dispose(),Dt.dispose(),at.dispose(),ut.dispose(),zt.dispose(),A.dispose(),mt.dispose(),Z.dispose(),Et.dispose(),Ht.dispose(),ct.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ha),pt.removeEventListener("sessionend",ua),ki.stop()};function qt(M){M.preventDefault(),Id("WebGLRenderer: Context Lost."),I=!0}function re(){Id("WebGLRenderer: Context Restored."),I=!1;let M=ue.autoReset,k=Rt.enabled,tt=Rt.autoUpdate,$=Rt.needsUpdate,et=Rt.type;ie(),ue.autoReset=M,Rt.enabled=k,Rt.autoUpdate=tt,Rt.needsUpdate=$,Rt.type=et}function Ft(M){te("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function we(M){let k=M.target;k.removeEventListener("dispose",we),We(k)}function We(M){sn(M),zt.remove(M)}function sn(M){let k=zt.get(M).programs;k!==void 0&&(k.forEach(function(tt){ct.releaseProgram(tt)}),M.isShaderMaterial&&ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,tt,$,et,Ot){k===null&&(k=dn);let Vt=et.isMesh&&et.matrixWorld.determinantAffine()<0,It=W(M,k,tt,$,et);xt.setMaterial($,Vt);let kt=tt.index,Yt=1;if($.wireframe===!0){if(kt=Z.getWireframeAttribute(tt),kt===void 0)return;Yt=2}let oe=tt.drawRange,me=tt.attributes.position,Xt=oe.start*Yt,ge=(oe.start+oe.count)*Yt;Ot!==null&&(Xt=Math.max(Xt,Ot.start*Yt),ge=Math.min(ge,(Ot.start+Ot.count)*Yt)),kt!==null?(Xt=Math.max(Xt,0),ge=Math.min(ge,kt.count)):me!=null&&(Xt=Math.max(Xt,0),ge=Math.min(ge,me.count));let qe=ge-Xt;if(qe<0||qe===1/0)return;Et.setup(et,$,It,tt,kt);let Fe,Ie=rt;if(kt!==null&&(Fe=b.get(kt),Ie=yt,Ie.setIndex(Fe)),et.isMesh)$.wireframe===!0?(xt.setLineWidth($.wireframeLinewidth*H()),Ie.setMode(T.LINES)):Ie.setMode(T.TRIANGLES);else if(et.isLine){let xn=$.linewidth;xn===void 0&&(xn=1),xt.setLineWidth(xn*H()),et.isLineSegments?Ie.setMode(T.LINES):et.isLineLoop?Ie.setMode(T.LINE_LOOP):Ie.setMode(T.LINE_STRIP)}else et.isPoints?Ie.setMode(T.POINTS):et.isSprite&&Ie.setMode(T.TRIANGLES);if(et.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let xn=et._multiDrawStarts,jt=et._multiDrawCounts,En=et._multiDrawCount,Te=kt?b.get(kt).bytesPerElement:1,cr=zt.get($).currentProgram.getUniforms();for(let vn=0;vn<En;vn++)cr.setValue(T,"_gl_DrawID",vn),Ie.render(xn[vn]/Te,jt[vn])}else if(et.isInstancedMesh)Ie.renderInstances(Xt,qe,et.count);else if(tt.isInstancedBufferGeometry){let xn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,jt=Math.min(tt.instanceCount,xn);Ie.renderInstances(Xt,qe,jt)}else Ie.render(Xt,qe)};function Nn(M,k,tt,$){F!==null&&M.isNodeMaterial&&F.setObject($,M),Me===!0&&lt.setState(M,tt,!1),M.transparent===!0&&M.side===ji&&M.forceSinglePass===!1?(M.side=Rn,M.needsUpdate=!0,O(M,k,$),M.side=Hs,M.needsUpdate=!0,O(M,k,$),M.side=ji):O(M,k,$)}this.compile=function(M,k,tt=null){tt===null&&(tt=M),F!==null&&F.renderStart(M,k,tt),D=at.get(tt),D.init(k),v.push(D),tt.traverseVisible(function(et){et.isLight&&et.layers.test(k.layers)&&(D.pushLight(et),et.castShadow&&D.pushShadow(et))}),M!==tt&&M.traverseVisible(function(et){et.isLight&&et.layers.test(k.layers)&&(D.pushLight(et),et.castShadow&&D.pushShadow(et))}),D.setupLights(),F!==null&&F.updateLights(D.state.lightsArray),De=this.localClippingEnabled,Me=lt.init(this.clippingPlanes,De),Me===!0&&lt.setGlobalState(this.clippingPlanes,k),F!==null&&Rt.render(D.state.shadowsArray,tt,k);let $=new Set;return M.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Ot=et.material;if(Ot)if(Array.isArray(Ot))for(let Vt=0;Vt<Ot.length;Vt++){let It=Ot[Vt];Nn(It,tt,k,et),$.add(It)}else Nn(Ot,tt,k,et),$.add(Ot)}),D=v.pop(),F!==null&&F.renderEnd(),$},this.compileAsync=function(M,k,tt=null){let $=this.compile(M,k,tt);return new Promise(et=>{function Ot(){if($.forEach(function(Vt){let kt=zt.get(Vt).currentProgram;(kt===void 0||kt.isReady())&&$.delete(Vt)}),$.size===0){et(M);return}setTimeout(Ot,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Cn=null;function Cl(M){Cn&&Cn(M)}function ha(){ki.stop()}function ua(){ki.start()}let ki=new mg;ki.setAnimationLoop(Cl),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){Cn=M,pt.setAnimationLoop(M),M===null?ki.stop():ki.start()},pt.addEventListener("sessionstart",ha),pt.addEventListener("sessionend",ua),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(M,k);let tt=pt.enabled===!0&&pt.isPresenting===!0,$=E!==null&&(J===null||tt)&&E.begin(C,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(k),k=pt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,k,J),D=at.get(M,v.length),D.init(k),D.state.textureUnits=ut.getTextureUnits(),v.push(D),Ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?be.setFromArrayCamera(k):$t.setFromProjectionMatrix(Ce,ri,k.reversedDepth),De=this.localClippingEnabled,Me=lt.init(this.clippingPlanes,De),R=Dt.get(M,g.length),R.init(),g.push(R),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){let Vt=C.xr.getDepthSensingMesh();Vt!==null&&da(Vt,k,-1/0,C.sortObjects)}da(M,k,0,C.sortObjects),R.finish(),F!==null&&F.updateLights(D.state.lightsArray),C.sortObjects===!0&&R.sort(Gt,se),Lt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Lt&&B.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),Me===!0&&lt.beginShadows();let et=D.state.shadowsArray;if(Rt.render(et,M,k),Me===!0&&lt.endShadows(),($&&E.hasRenderPass())===!1){let Vt=R.opaque,It=R.transmissive;if(D.setupLights(),k.isArrayCamera){let kt=k.cameras;if(It.length>0)for(let Yt=0,oe=kt.length;Yt<oe;Yt++){let me=kt[Yt];Al(Vt,It,M,me)}Lt&&B.render(M);for(let Yt=0,oe=kt.length;Yt<oe;Yt++){let me=kt[Yt];El(R,M,me,me.viewport)}}else It.length>0&&Al(Vt,It,M,k),Lt&&B.render(M),El(R,M,k)}J!==null&&U===0&&(ut.updateMultisampleRenderTarget(J),ut.updateRenderTargetMipmap(J)),$&&E.end(C),M.isScene===!0&&M.onAfterRender(C,M,k),Et.resetDefaultState(),K=-1,ot=null,v.pop(),v.length>0?(D=v[v.length-1],ut.setTextureUnits(D.state.textureUnits),Me===!0&&lt.setGlobalState(C.clippingPlanes,D.state.camera)):D=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,F!==null&&F.renderEnd()};function da(M,k,tt,$){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)tt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)D.pushLight(M),M.castShadow&&D.pushShadow(M);else if(M.isSprite){let Vt=k.isArrayCamera?be:$t;if(!M.frustumCulled||M.intersectsFrustum(Vt)){$&&Ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ce);let It=mt.update(M),kt=M.material;kt.visible&&R.push(M,It,kt,tt,Ee.z,null,k)}}else if(M.isMesh||M.isLine||M.isPoints){let Vt=k.isArrayCamera?be:$t;if(!M.frustumCulled||M.intersectsFrustum(Vt)){let It=mt.update(M),kt=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ee.copy(M.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ee.copy(It.boundingSphere.center)),Ee.applyMatrix4(M.matrixWorld).applyMatrix4(Ce)),Array.isArray(kt)){let Yt=It.groups;for(let oe=0,me=Yt.length;oe<me;oe++){let Xt=Yt[oe],ge=kt[Xt.materialIndex];ge&&ge.visible&&R.push(M,It,ge,tt,Ee.z,Xt,k)}}else kt.visible&&R.push(M,It,kt,tt,Ee.z,null,k)}}}let Ot=M.children;for(let Vt=0,It=Ot.length;Vt<It;Vt++)da(Ot[Vt],k,tt,$)}function El(M,k,tt,$){let{opaque:et,transmissive:Ot,transparent:Vt}=M;D.setupLightsView(tt),Me===!0&&lt.setGlobalState(C.clippingPlanes,tt),$&&xt.viewport(dt.copy($)),et.length>0&&ro(et,k,tt),Ot.length>0&&ro(Ot,k,tt),Vt.length>0&&ro(Vt,k,tt),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Al(M,k,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[$.id]===void 0){let Xt=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[$.id]=new Yn(1,1,{generateMipmaps:!0,type:Xt?Ti:Un,minFilter:bi,samples:Math.max(4,Qt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Ot=D.state.transmissionRenderTarget[$.id],Vt=$.viewport||dt;Ot.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);let It=C.getRenderTarget(),kt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(Ot),C.getClearColor(Q),wt=C.getClearAlpha(),wt<1&&C.setClearColor(16777215,.5),C.clear(),Lt&&B.render(tt);let oe=C.toneMapping;C.toneMapping=ai;let me=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),D.setupLightsView($),Me===!0&&lt.setGlobalState(C.clippingPlanes,$),ro(M,tt,$),ut.updateMultisampleRenderTarget(Ot),ut.updateRenderTargetMipmap(Ot),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let ge=0,qe=k.length;ge<qe;ge++){let Fe=k[ge],{object:Ie,geometry:xn,material:jt,group:En}=Fe;if(jt.side===ji&&Ie.layers.test($.layers)){let Te=jt.side;jt.side=Rn,jt.needsUpdate=!0,Du(Ie,tt,$,xn,jt,En),jt.side=Te,jt.needsUpdate=!0,Xt=!0}}Xt===!0&&(ut.updateMultisampleRenderTarget(Ot),ut.updateRenderTargetMipmap(Ot))}C.setRenderTarget(It,kt,Yt),C.setClearColor(Q,wt),me!==void 0&&($.viewport=me),C.toneMapping=oe}function ro(M,k,tt){let $=k.isScene===!0?k.overrideMaterial:null;for(let et=0,Ot=M.length;et<Ot;et++){let Vt=M[et],{object:It,geometry:kt,group:Yt}=Vt,oe=Vt.material;oe.allowOverride===!0&&$!==null&&(oe=$),It.layers.test(tt.layers)&&Du(It,k,tt,kt,oe,Yt)}}function Du(M,k,tt,$,et,Ot){F!==null&&et.isNodeMaterial&&F.setObject(M,et),M.onBeforeRender(C,k,tt,$,et,Ot),M.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),et.onBeforeRender(C,k,tt,$,M,Ot),et.transparent===!0&&et.side===ji&&et.forceSinglePass===!1?(et.side=Rn,et.needsUpdate=!0,C.renderBufferDirect(tt,k,$,et,M,Ot),et.side=Hs,et.needsUpdate=!0,C.renderBufferDirect(tt,k,$,et,M,Ot),et.side=ji):C.renderBufferDirect(tt,k,$,et,M,Ot),M.onAfterRender(C,k,tt,$,et,Ot)}function y(M){let k=0;for(let tt of M)tt.texture!==null&&k++;return k}function O(M,k,tt){k.isScene!==!0&&(k=dn);let $=zt.get(M),et=D.state.lights,Ot=D.state.shadowsArray,Vt=et.state.version,It=ct.getParameters(M,et.state,Ot,k,tt,D.state.lightProbeGridArray),kt=ct.getProgramCacheKey(It),Yt=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;let oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=A.get(M.envMap||$.environment,oe),$.envMapRotation=$.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Yt===void 0&&(M.addEventListener("dispose",we),Yt=new Map,$.programs=Yt,$.programVariants=new Map);let me=Yt.get(kt);if(me!==void 0){if($.currentProgram===me&&$.lightsStateVersion===Vt)return nt(M,It),me}else It.uniforms=ct.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,tt,It),M.onBeforeCompile(It,C),me=ct.acquireProgram(It,kt),Yt.set(kt,me),$.uniforms=It.uniforms;let Xt=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Xt.clippingPlanes=lt.uniform),nt(M,It),$.needsLights=ft(M),$.lightsStateVersion=Vt,$.needsLights&&(Xt.ambientLightColor.value=et.state.ambient,Xt.lightProbe.value=et.state.probe,Xt.sunLights.value=et.state.sun,Xt.sunLightShadows.value=et.state.sunShadow,Xt.directionalLights.value=et.state.directional,Xt.directionalLightShadows.value=et.state.directionalShadow,Xt.spotLights.value=et.state.spot,Xt.spotLightShadows.value=et.state.spotShadow,Xt.rectAreaLights.value=et.state.rectArea,Xt.ltc_1.value=et.state.rectAreaLTC1,Xt.ltc_2.value=et.state.rectAreaLTC2,Xt.pointLights.value=et.state.point,Xt.pointLightShadows.value=et.state.pointShadow,Xt.hemisphereLights.value=et.state.hemi,Xt.sunShadowMatrix.value=et.state.sunShadowMatrix,Xt.sunShadowCascade.value=et.state.sunShadowCascade,Xt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Xt.spotLightMatrix.value=et.state.spotLightMatrix,Xt.spotLightMap.value=et.state.spotLightMap,Xt.pointShadowMatrix.value=et.state.pointShadowMatrix),$.numLightProbeGrids=y(D.state.lightProbeGridArray),$.currentProgram=me,$.uniformsList=null,me}function N(M,k,tt,$,et){let Ot=zt.get(M),Vt=Ot.currentProgram.id+","+$+","+et,It=Ot.programVariants.get(Vt);return It===void 0?(It=O(M,k,tt),Ot.programVariants.set(Vt,It)):(Ot.currentProgram=It,Ot.uniformsList=null,Ot.outputColorSpace=$,Ot.toneMapping=et),It}function V(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=Lo.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function nt(M,k){let tt=zt.get(M);tt.outputColorSpace=k.outputColorSpace,tt.batching=k.batching,tt.batchingColor=k.batchingColor,tt.instancing=k.instancing,tt.instancingColor=k.instancingColor,tt.instancingMorph=k.instancingMorph,tt.skinning=k.skinning,tt.morphTargets=k.morphTargets,tt.morphNormals=k.morphNormals,tt.morphColors=k.morphColors,tt.morphTargetsCount=k.morphTargetsCount,tt.numClippingPlanes=k.numClippingPlanes,tt.numIntersection=k.numClipIntersection,tt.vertexAlphas=k.vertexAlphas,tt.vertexTangents=k.vertexTangents,tt.toneMapping=k.toneMapping}function W(M,k,tt,$,et){k.isScene!==!0&&(k=dn),ut.resetTextureUnits();let Ot=k.fog,Vt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,It=J===null?C.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:_e.workingColorSpace,kt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Yt=A.get($.envMap||Vt,kt),oe=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,me=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,qe=!!tt.morphAttributes.color,Fe=ai;$.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Fe=C.toneMapping);let Ie=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,xn=Ie!==void 0?Ie.length:0,jt=zt.get($),En=D.state.lights;if(Me===!0&&(De===!0||M!==ot)){let ze=M===ot&&$.id===K;lt.setState($,M,ze)}let Te=!1,cr=!1;$.version===jt.__version?jt.needsLights&&jt.lightsStateVersion!==En.state.version||et.isBatchedMesh&&jt.batching===!1||!et.isBatchedMesh&&jt.batching===!0||et.isBatchedMesh&&jt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&jt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&jt.instancing===!1||!et.isInstancedMesh&&jt.instancing===!0||et.isSkinnedMesh&&jt.skinning===!1||!et.isSkinnedMesh&&jt.skinning===!0||et.isInstancedMesh&&jt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&jt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&jt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&jt.instancingMorph===!1&&et.morphTexture!==null||jt.envMap!==Yt||$.fog===!0&&jt.fog!==Ot||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==lt.numPlanes||jt.numIntersection!==lt.numIntersection)||jt.vertexAlphas!==oe||jt.vertexTangents!==me||jt.morphTargets!==Xt||jt.morphNormals!==ge||jt.morphColors!==qe||jt.morphTargetsCount!==xn||jt.numLightProbeGrids!==y(D.state.lightProbeGridArray)?Te=!0:(jt.outputColorSpace!==It||jt.toneMapping!==Fe)&&(cr=!0):(Te=!0,jt.__version=$.version);let vn=jt.currentProgram;(Te===!0||cr===!0)&&(vn=cr===!0?N($,k,et,It,Fe):O($,k,et),F&&$.isNodeMaterial&&F.onUpdateProgram($,vn,jt));let Rl=!1,Rs=!1,hr=!1,Se=vn.getUniforms(),fn=jt.uniforms;if(xt.useProgram(vn.program)&&(Rl=!0,Rs=!0,hr=!0),$.id!==K&&(K=$.id,Rs=!0),Rl||ot!==M){xt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Se.setValue(T,"projectionMatrix",M.projectionMatrix),Se.setValue(T,"viewMatrix",M.matrixWorldInverse);let rn=Se.map.cameraPosition;rn!==void 0&&rn.setValue(T,Ye.setFromMatrixPosition(M.matrixWorld)),Qt.logarithmicDepthBuffer&&Se.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Se.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,Rs=!0,hr=!0)}if(jt.needsLights&&(En.state.sunShadowMap.length>0&&Se.setValue(T,"sunShadowMap",En.state.sunShadowMap,ut),En.state.directionalShadowMap.length>0&&Se.setValue(T,"directionalShadowMap",En.state.directionalShadowMap,ut),En.state.spotShadowMap.length>0&&Se.setValue(T,"spotShadowMap",En.state.spotShadowMap,ut),En.state.pointShadowMap.length>0&&Se.setValue(T,"pointShadowMap",En.state.pointShadowMap,ut)),et.isSkinnedMesh){Se.setOptional(T,et,"bindMatrix"),Se.setOptional(T,et,"bindMatrixInverse");let ze=et.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Se.setValue(T,"boneTexture",ze.boneTexture,ut))}et.isBatchedMesh&&(Se.setOptional(T,et,"batchingTexture"),Se.setValue(T,"batchingTexture",et._matricesTexture,ut),Se.setOptional(T,et,"batchingIdTexture"),Se.setValue(T,"batchingIdTexture",et._indirectTexture,ut),Se.setOptional(T,et,"batchingColorTexture"),et._colorsTexture!==null&&Se.setValue(T,"batchingColorTexture",et._colorsTexture,ut));let _i=tt.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&ht.update(et,tt,vn),(Rs||jt.receiveShadow!==et.receiveShadow)&&(jt.receiveShadow=et.receiveShadow,Se.setValue(T,"receiveShadow",et.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=w1()),Rs){if(Se.setValue(T,"toneMappingExposure",C.toneMappingExposure),jt.needsLights&&Y(fn,hr),Ot&&$.fog===!0&&St.refreshFogUniforms(fn,Ot),St.refreshMaterialUniforms(fn,$,vt,Bt,D.state.transmissionRenderTarget[M.id]),jt.needsLights&&jt.numLightProbeGrids>0){let ze=w,rn=0;for(let rs of D.state.lightProbeGridArray)rs.texture!==null&&(ze.textures[rn]=rs.texture,ze.min[rn]=rs.boundingBox.min,ze.max[rn]=rs.boundingBox.max,ze.resolution[rn]=rs.resolution,rn++);for(let rs in ze)ze[rs].length=rn;fn.probesSH.value=ze.textures,fn.probesMin.value=ze.min,fn.probesMax.value=ze.max,fn.probesResolution.value=ze.resolution}Lo.upload(T,V(jt),fn,ut)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Lo.upload(T,V(jt),fn,ut),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Se.setValue(T,"center",et.center),Se.setValue(T,"modelViewMatrix",et.modelViewMatrix),Se.setValue(T,"normalMatrix",et.normalMatrix),Se.setValue(T,"modelMatrix",et.matrixWorld),$.uniformsGroups!==void 0){let ze=$.uniformsGroups;for(let rn=0,rs=ze.length;rn<rs;rn++){let Np=ze[rn];Ht.update(Np,vn),Ht.bind(Np,vn)}}return vn}function Y(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.sunLights.needsUpdate=k,M.sunLightShadows.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function ft(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,k,tt){let $=zt.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),zt.get(M.texture).__webglTexture=k,zt.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){let tt=zt.get(M);tt.__webglFramebuffer=k,tt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,tt=0){J=M,q=k,U=tt;let $=null,et=!1,Ot=!1;if(M){let It=zt.get(M);if(It.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(T.FRAMEBUFFER,It.__webglFramebuffer),dt.copy(M.viewport),Pt.copy(M.scissor),At=M.scissorTest,xt.viewport(dt),xt.scissor(Pt),xt.setScissorTest(At),K=-1;return}else if(It.__webglFramebuffer===void 0)ut.setupRenderTarget(M);else if(It.__hasExternalTextures)ut.rebindTextures(M,zt.get(M.texture).__webglTexture,zt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let oe=M.depthTexture;if(It.__boundDepthTexture!==oe){if(oe!==null&&zt.has(oe)&&(M.width!==oe.image.width||M.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(M)}}let kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ot=!0);let Yt=zt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?$=Yt[k][tt]:$=Yt[k],et=!0):M.samples>0&&ut.useMultisampledRTT(M)===!1?$=zt.get(M).__webglMultisampledFramebuffer:Array.isArray(Yt)?$=Yt[tt]:$=Yt,dt.copy(M.viewport),Pt.copy(M.scissor),At=M.scissorTest}else dt.copy(Wt).multiplyScalar(vt).floor(),Pt.copy(pe).multiplyScalar(vt).floor(),At=ee;if(tt!==0&&($=z),xt.bindFramebuffer(T.FRAMEBUFFER,$)&&xt.drawBuffers(M,$),xt.viewport(dt),xt.scissor(Pt),xt.setScissorTest(At),et){let It=zt.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,It.__webglTexture,tt)}else if(Ot){let It=k;for(let kt=0;kt<M.textures.length;kt++){let Yt=zt.get(M.textures[kt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,tt,It)}}else if(M!==null&&tt!==0){let It=zt.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,It.__webglTexture,tt)}K=-1};function Zt(M){let k=zt.get(M);return(k.__readFormat!==M.format||k.__readType!==M.type)&&(k.__readFormat=M.format,k.__readType=M.type,k.__formatReadable=Qt.textureFormatReadable(M.format),k.__typeReadable=Qt.textureTypeReadable(M.type)),k}this.readRenderTargetPixels=function(M,k,tt,$,et,Ot,Vt,It=0){if(!(M&&M.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt],Array.isArray(kt)&&(kt=kt[0])),kt){xt.bindFramebuffer(T.FRAMEBUFFER,kt);try{let Yt=M.textures[It],oe=Yt.format,me=Yt.type;M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+It);let Xt=Zt(Yt);if(Xt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-$&&tt>=0&&tt<=M.height-et&&T.readPixels(k,tt,$,et,_t.convert(oe),_t.convert(me),Ot)}finally{let Yt=J!==null?zt.get(J).__webglFramebuffer:null;xt.bindFramebuffer(T.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(M,k,tt,$,et,Ot,Vt,It=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt],Array.isArray(kt)&&(kt=kt[0])),kt)if(k>=0&&k<=M.width-$&&tt>=0&&tt<=M.height-et){xt.bindFramebuffer(T.FRAMEBUFFER,kt);let Yt=M.textures[It],oe=Yt.format,me=Yt.type;M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+It);let Xt=Zt(Yt);if(Xt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ge),T.bufferData(T.PIXEL_PACK_BUFFER,Ot.byteLength,T.STREAM_READ),T.readPixels(k,tt,$,et,_t.convert(oe),_t.convert(me),0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null);let qe=J!==null?zt.get(J).__webglFramebuffer:null;xt.bindFramebuffer(T.FRAMEBUFFER,qe);let Fe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Vm(T,Fe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ge),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ot),T.bindBuffer(T.PIXEL_PACK_BUFFER,null),T.deleteBuffer(ge),T.deleteSync(Fe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,tt=0){let $=Math.pow(2,-tt),et=Math.floor(M.image.width*$),Ot=Math.floor(M.image.height*$),Vt=k!==null?k.x:0,It=k!==null?k.y:0;ut.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,tt,0,0,Vt,It,et,Ot),xt.unbindTexture()},this.copyTextureToTexture=function(M,k,tt=null,$=null,et=0,Ot=0){let Vt,It,kt,Yt,oe,me,Xt,ge,qe,Fe=M.isCompressedTexture?M.mipmaps[Ot]:M.image;if(tt!==null)Vt=tt.max.x-tt.min.x,It=tt.max.y-tt.min.y,kt=tt.isBox3?tt.max.z-tt.min.z:1,Yt=tt.min.x,oe=tt.min.y,me=tt.isBox3?tt.min.z:0;else{let Se=Math.pow(2,-et);Vt=Math.floor(Fe.width*Se),It=Math.floor(Fe.height*Se),M.isDataArrayTexture?kt=Fe.depth:M.isData3DTexture?kt=Math.floor(Fe.depth*Se):kt=1,Yt=0,oe=0,me=0}$!==null?(Xt=$.x,ge=$.y,qe=$.z):(Xt=0,ge=0,qe=0);let Ie=_t.convert(k.format),xn=_t.convert(k.type),jt;k.isData3DTexture?(ut.setTexture3D(k,0),jt=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ut.setTexture2DArray(k,0),jt=T.TEXTURE_2D_ARRAY):(ut.setTexture2D(k,0),jt=T.TEXTURE_2D),xt.activeTexture(T.TEXTURE0),xt.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),xt.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),xt.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);let En=xt.getParameter(T.UNPACK_ROW_LENGTH),Te=xt.getParameter(T.UNPACK_IMAGE_HEIGHT),cr=xt.getParameter(T.UNPACK_SKIP_PIXELS),vn=xt.getParameter(T.UNPACK_SKIP_ROWS),Rl=xt.getParameter(T.UNPACK_SKIP_IMAGES);xt.pixelStorei(T.UNPACK_ROW_LENGTH,Fe.width),xt.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Fe.height),xt.pixelStorei(T.UNPACK_SKIP_PIXELS,Yt),xt.pixelStorei(T.UNPACK_SKIP_ROWS,oe),xt.pixelStorei(T.UNPACK_SKIP_IMAGES,me);let Rs=M.isDataArrayTexture||M.isData3DTexture,hr=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){let Se=zt.get(M),fn=zt.get(k),_i=zt.get(Se.__renderTarget),ze=zt.get(fn.__renderTarget);xt.bindFramebuffer(T.READ_FRAMEBUFFER,_i.__webglFramebuffer),xt.bindFramebuffer(T.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let rn=0;rn<kt;rn++)Rs&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,zt.get(M).__webglTexture,et,me+rn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,zt.get(k).__webglTexture,Ot,qe+rn)),T.blitFramebuffer(Yt,oe,Yt+Vt,oe+It,Xt,ge,Xt+Vt,ge+It,T.DEPTH_BUFFER_BIT,T.NEAREST);xt.bindFramebuffer(T.READ_FRAMEBUFFER,null),xt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(et!==0||M.isRenderTargetTexture||zt.has(M)){let Se=zt.get(M),fn=zt.get(k);xt.bindFramebuffer(T.READ_FRAMEBUFFER,L),xt.bindFramebuffer(T.DRAW_FRAMEBUFFER,j);for(let _i=0;_i<kt;_i++)Rs?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Se.__webglTexture,et,me+_i):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Se.__webglTexture,et),hr?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,fn.__webglTexture,Ot,qe+_i):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,fn.__webglTexture,Ot),et!==0?T.blitFramebuffer(Yt,oe,Yt+Vt,oe+It,Xt,ge,Xt+Vt,ge+It,T.COLOR_BUFFER_BIT,T.NEAREST):hr?T.copyTexSubImage3D(jt,Ot,Xt,ge,qe+_i,Yt,oe,Vt,It):T.copyTexSubImage2D(jt,Ot,Xt,ge,Yt,oe,Vt,It);xt.bindFramebuffer(T.READ_FRAMEBUFFER,null),xt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else hr?M.isDataTexture||M.isData3DTexture?T.texSubImage3D(jt,Ot,Xt,ge,qe,Vt,It,kt,Ie,xn,Fe.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(jt,Ot,Xt,ge,qe,Vt,It,kt,Ie,Fe.data):T.texSubImage3D(jt,Ot,Xt,ge,qe,Vt,It,kt,Ie,xn,Fe):M.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ot,Xt,ge,Vt,It,Ie,xn,Fe.data):M.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ot,Xt,ge,Fe.width,Fe.height,Ie,Fe.data):T.texSubImage2D(T.TEXTURE_2D,Ot,Xt,ge,Vt,It,Ie,xn,Fe);xt.pixelStorei(T.UNPACK_ROW_LENGTH,En),xt.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Te),xt.pixelStorei(T.UNPACK_SKIP_PIXELS,cr),xt.pixelStorei(T.UNPACK_SKIP_ROWS,vn),xt.pixelStorei(T.UNPACK_SKIP_IMAGES,Rl),Ot===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&T.generateMipmap(jt),xt.unbindTexture()},this.initRenderTarget=function(M){zt.get(M).__webglFramebuffer===void 0&&ut.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ut.setTextureCube(M,0):M.isData3DTexture?ut.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ut.setTexture2DArray(M,0):ut.setTexture2D(M,0),xt.unbindTexture()},this.resetState=function(){q=0,U=0,J=null,xt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ko=function(s,t){let i=s,r=Ja[t],o=null,a=0,l=null,c=[],h={},u=function(g,v){a=i*4+17,o=(function(E){let C=new Array(E);for(let I=0;I<E;I+=1){C[I]=new Array(E);for(let F=0;F<E;F+=1)C[I][F]=null}return C})(a),d(0,0),d(a-7,0),d(0,a-7),x(),p(),_(g,v),i>=7&&m(g),l==null&&(l=w(i,r,c)),S(l,v)},d=function(g,v){for(let E=-1;E<=7;E+=1)if(!(g+E<=-1||a<=g+E))for(let C=-1;C<=7;C+=1)v+C<=-1||a<=v+C||(0<=E&&E<=6&&(C==0||C==6)||0<=C&&C<=6&&(E==0||E==6)||2<=E&&E<=4&&2<=C&&C<=4?o[g+E][v+C]=!0:o[g+E][v+C]=!1)},f=function(){let g=0,v=0;for(let E=0;E<8;E+=1){u(!0,E);let C=js.getLostPoint(h);(E==0||g>C)&&(g=C,v=E)}return v},p=function(){for(let g=8;g<a-8;g+=1)o[g][6]==null&&(o[g][6]=g%2==0);for(let g=8;g<a-8;g+=1)o[6][g]==null&&(o[6][g]=g%2==0)},x=function(){let g=js.getPatternPosition(i);for(let v=0;v<g.length;v+=1)for(let E=0;E<g.length;E+=1){let C=g[v],I=g[E];if(o[C][I]==null)for(let F=-2;F<=2;F+=1)for(let z=-2;z<=2;z+=1)F==-2||F==2||z==-2||z==2||F==0&&z==0?o[C+F][I+z]=!0:o[C+F][I+z]=!1}},m=function(g){let v=js.getBCHTypeNumber(i);for(let E=0;E<18;E+=1){let C=!g&&(v>>E&1)==1;o[Math.floor(E/3)][E%3+a-8-3]=C}for(let E=0;E<18;E+=1){let C=!g&&(v>>E&1)==1;o[E%3+a-8-3][Math.floor(E/3)]=C}},_=function(g,v){let E=r<<3|v,C=js.getBCHTypeInfo(E);for(let I=0;I<15;I+=1){let F=!g&&(C>>I&1)==1;I<6?o[I][8]=F:I<8?o[I+1][8]=F:o[a-15+I][8]=F}for(let I=0;I<15;I+=1){let F=!g&&(C>>I&1)==1;I<8?o[8][a-I-1]=F:I<9?o[8][15-I-1+1]=F:o[8][15-I-1]=F}o[a-8][8]=!g},S=function(g,v){let E=-1,C=a-1,I=7,F=0,z=js.getMaskFunction(v);for(let L=a-1;L>0;L-=2)for(L==6&&(L-=1);;){for(let j=0;j<2;j+=1)if(o[C][L-j]==null){let q=!1;F<g.length&&(q=(g[F]>>>I&1)==1),z(C,L-j)&&(q=!q),o[C][L-j]=q,I-=1,I==-1&&(F+=1,I=7)}if(C+=E,C<0||a<=C){C-=E,E=-E;break}}},P=function(g,v){let E=0,C=0,I=0,F=new Array(v.length),z=new Array(v.length);for(let U=0;U<v.length;U+=1){let J=v[U].dataCount,K=v[U].totalCount-J;C=Math.max(C,J),I=Math.max(I,K),F[U]=new Array(J);for(let At=0;At<F[U].length;At+=1)F[U][At]=255&g.getBuffer()[At+E];E+=J;let ot=js.getErrorCorrectPolynomial(K),Pt=Ka(F[U],ot.getLength()-1).mod(ot);z[U]=new Array(ot.getLength()-1);for(let At=0;At<z[U].length;At+=1){let Q=At+Pt.getLength()-z[U].length;z[U][At]=Q>=0?Pt.getAt(Q):0}}let L=0;for(let U=0;U<v.length;U+=1)L+=v[U].totalCount;let j=new Array(L),q=0;for(let U=0;U<C;U+=1)for(let J=0;J<v.length;J+=1)U<F[J].length&&(j[q]=F[J][U],q+=1);for(let U=0;U<I;U+=1)for(let J=0;J<v.length;J+=1)U<z[J].length&&(j[q]=z[J][U],q+=1);return j},w=function(g,v,E){let C=Cg.getRSBlocks(g,v),I=Eg();for(let z=0;z<E.length;z+=1){let L=E[z];I.put(L.getMode(),4),I.put(L.getLength(),js.getLengthInBits(L.getMode(),g)),L.write(I)}let F=0;for(let z=0;z<C.length;z+=1)F+=C[z].dataCount;if(I.getLengthInBits()>F*8)throw"code length overflow. ("+I.getLengthInBits()+">"+F*8+")";for(I.getLengthInBits()+4<=F*8&&I.put(0,4);I.getLengthInBits()%8!=0;)I.putBit(!1);for(;!(I.getLengthInBits()>=F*8||(I.put(236,8),I.getLengthInBits()>=F*8));)I.put(17,8);return P(I,C)};h.addData=function(g,v){v=v||"Byte";let E=null;switch(v){case"Numeric":E=T1(g);break;case"Alphanumeric":E=C1(g);break;case"Byte":E=E1(g);break;case"Kanji":E=A1(g);break;default:throw"mode:"+v}c.push(E),l=null},h.isDark=function(g,v){if(g<0||a<=g||v<0||a<=v)throw g+","+v;return o[g][v]},h.getModuleCount=function(){return a},h.make=function(){if(i<1){let g=1;for(;g<40;g++){let v=Cg.getRSBlocks(g,r),E=Eg();for(let I=0;I<c.length;I++){let F=c[I];E.put(F.getMode(),4),E.put(F.getLength(),js.getLengthInBits(F.getMode(),g)),F.write(E)}let C=0;for(let I=0;I<v.length;I++)C+=v[I].dataCount;if(E.getLengthInBits()<=C*8)break}i=g}u(!1,f())},h.createTableTag=function(g,v){g=g||2,v=typeof v>"u"?g*4:v;let E="";E+='<table style="',E+=" border-width: 0px; border-style: none;",E+=" border-collapse: collapse;",E+=" padding: 0px; margin: "+v+"px;",E+='">',E+="<tbody>";for(let C=0;C<h.getModuleCount();C+=1){E+="<tr>";for(let I=0;I<h.getModuleCount();I+=1)E+='<td style="',E+=" border-width: 0px; border-style: none;",E+=" border-collapse: collapse;",E+=" padding: 0px; margin: 0px;",E+=" width: "+g+"px;",E+=" height: "+g+"px;",E+=" background-color: ",E+=h.isDark(C,I)?"#000000":"#ffffff",E+=";",E+='"/>';E+="</tr>"}return E+="</tbody>",E+="</table>",E},h.createSvgTag=function(g,v,E,C){let I={};typeof arguments[0]=="object"&&(I=arguments[0],g=I.cellSize,v=I.margin,E=I.alt,C=I.title),g=g||2,v=typeof v>"u"?g*4:v,E=typeof E=="string"?{text:E}:E||{},E.text=E.text||null,E.id=E.text?E.id||"qrcode-description":null,C=typeof C=="string"?{text:C}:C||{},C.text=C.text||null,C.id=C.text?C.id||"qrcode-title":null;let F=h.getModuleCount()*g+v*2,z,L,j,q,U="",J;for(J="l"+g+",0 0,"+g+" -"+g+",0 0,-"+g+"z ",U+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',U+=I.scalable?"":' width="'+F+'px" height="'+F+'px"',U+=' viewBox="0 0 '+F+" "+F+'" ',U+=' preserveAspectRatio="xMinYMin meet"',U+=C.text||E.text?' role="img" aria-labelledby="'+R([C.id,E.id].join(" ").trim())+'"':"",U+=">",U+=C.text?'<title id="'+R(C.id)+'">'+R(C.text)+"</title>":"",U+=E.text?'<description id="'+R(E.id)+'">'+R(E.text)+"</description>":"",U+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',U+='<path d="',j=0;j<h.getModuleCount();j+=1)for(q=j*g+v,z=0;z<h.getModuleCount();z+=1)h.isDark(j,z)&&(L=z*g+v,U+="M"+L+","+q+J);return U+='" stroke="transparent" fill="black"/>',U+="</svg>",U},h.createDataURL=function(g,v){g=g||2,v=typeof v>"u"?g*4:v;let E=h.getModuleCount()*g+v*2,C=v,I=E-v;return I1(E,E,function(F,z){if(C<=F&&F<I&&C<=z&&z<I){let L=Math.floor((F-C)/g),j=Math.floor((z-C)/g);return h.isDark(j,L)?0:1}else return 1})},h.createImgTag=function(g,v,E){g=g||2,v=typeof v>"u"?g*4:v;let C=h.getModuleCount()*g+v*2,I="";return I+="<img",I+=' src="',I+=h.createDataURL(g,v),I+='"',I+=' width="',I+=C,I+='"',I+=' height="',I+=C,I+='"',E&&(I+=' alt="',I+=R(E),I+='"'),I+="/>",I};let R=function(g){let v="";for(let E=0;E<g.length;E+=1){let C=g.charAt(E);switch(C){case"<":v+="&lt;";break;case">":v+="&gt;";break;case"&":v+="&amp;";break;case'"':v+="&quot;";break;default:v+=C;break}}return v},D=function(g){g=typeof g>"u"?2:g;let E=h.getModuleCount()*1+g*2,C=g,I=E-g,F,z,L,j,q,U={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},J={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},K="";for(F=0;F<E;F+=2){for(L=Math.floor((F-C)/1),j=Math.floor((F+1-C)/1),z=0;z<E;z+=1)q="\u2588",C<=z&&z<I&&C<=F&&F<I&&h.isDark(L,Math.floor((z-C)/1))&&(q=" "),C<=z&&z<I&&C<=F+1&&F+1<I&&h.isDark(j,Math.floor((z-C)/1))?q+=" ":q+="\u2588",K+=g<1&&F+1>=I?J[q]:U[q];K+=`
`}return E%2&&g>0?K.substring(0,K.length-E-1)+Array(E+1).join("\u2580"):K.substring(0,K.length-1)};return h.createASCII=function(g,v){if(g=g||1,g<2)return D(v);g-=1,v=typeof v>"u"?g*2:v;let E=h.getModuleCount()*g+v*2,C=v,I=E-v,F,z,L,j,q=Array(g+1).join("\u2588\u2588"),U=Array(g+1).join("  "),J="",K="";for(F=0;F<E;F+=1){for(L=Math.floor((F-C)/g),K="",z=0;z<E;z+=1)j=1,C<=z&&z<I&&C<=F&&F<I&&h.isDark(L,Math.floor((z-C)/g))&&(j=0),K+=j?q:U;for(L=0;L<g;L+=1)J+=K+`
`}return J.substring(0,J.length-1)},h.renderTo2dContext=function(g,v){v=v||2;let E=h.getModuleCount();for(let C=0;C<E;C++)for(let I=0;I<E;I++)g.fillStyle=h.isDark(C,I)?"black":"white",g.fillRect(I*v,C*v,v,v)},h};ko.stringToBytes=function(s){let t=[];for(let e=0;e<s.length;e+=1){let n=s.charCodeAt(e);t.push(n&255)}return t};ko.createStringToBytes=function(s,t){let e=(function(){let i=P1(s),r=function(){let l=i.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=i.read();if(l==-1)break;let c=r(),h=r(),u=r(),d=String.fromCharCode(l<<8|c),f=h<<8|u;a[d]=f,o+=1}if(o!=t)throw o+" != "+t;return a})(),n=63;return function(i){let r=[];for(let o=0;o<i.length;o+=1){let a=i.charCodeAt(o);if(a<128)r.push(a);else{let l=e[i.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(n)}}return r}};var wn={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Ja={L:1,M:0,Q:3,H:2},Xs={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},js=(function(){let s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return i.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return(o<<10|a)^n},i.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return o<<12|a},i.getPatternPosition=function(o){return s[o-1]},i.getMaskFunction=function(o){switch(o){case Xs.PATTERN000:return function(a,l){return(a+l)%2==0};case Xs.PATTERN001:return function(a,l){return a%2==0};case Xs.PATTERN010:return function(a,l){return l%3==0};case Xs.PATTERN011:return function(a,l){return(a+l)%3==0};case Xs.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case Xs.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case Xs.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case Xs.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},i.getErrorCorrectPolynomial=function(o){let a=Ka([1],0);for(let l=0;l<o;l+=1)a=a.multiply(Ka([1,Ys.gexp(l)],0));return a},i.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case wn.MODE_NUMBER:return 10;case wn.MODE_ALPHA_NUM:return 9;case wn.MODE_8BIT_BYTE:return 8;case wn.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case wn.MODE_NUMBER:return 12;case wn.MODE_ALPHA_NUM:return 11;case wn.MODE_8BIT_BYTE:return 16;case wn.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case wn.MODE_NUMBER:return 14;case wn.MODE_ALPHA_NUM:return 13;case wn.MODE_8BIT_BYTE:return 16;case wn.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},i.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let f=0,p=o.isDark(u,d);for(let x=-1;x<=1;x+=1)if(!(u+x<0||a<=u+x))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||x==0&&m==0||p==o.isDark(u+x,d+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let f=0;o.isDark(u,d)&&(f+=1),o.isDark(u+1,d)&&(f+=1),o.isDark(u,d+1)&&(f+=1),o.isDark(u+1,d+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(l+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(l+=40);let c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(c+=1);let h=Math.abs(100*c/a/a-50)/5;return l+=h*10,l},i})(),Ys=(function(){let s=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)s[n]=1<<n;for(let n=8;n<256;n+=1)s[n]=s[n-4]^s[n-5]^s[n-6]^s[n-8];for(let n=0;n<255;n+=1)t[s[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return s[n]},e})(),Ka=function(s,t){if(typeof s.length>"u")throw s.length+"/"+t;let e=(function(){let i=0;for(;i<s.length&&s[i]==0;)i+=1;let r=new Array(s.length-i+t);for(let o=0;o<s.length-i;o+=1)r[o]=s[o+i];return r})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let r=new Array(n.getLength()+i.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<i.getLength();a+=1)r[o+a]^=Ys.gexp(Ys.glog(n.getAt(o))+Ys.glog(i.getAt(a)));return Ka(r,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let r=Ys.glog(n.getAt(0))-Ys.glog(i.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<i.getLength();a+=1)o[a]^=Ys.gexp(Ys.glog(i.getAt(a))+r);return Ka(o,0).mod(i)},n},Cg=(function(){let s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,r){let o={};return o.totalCount=i,o.dataCount=r,o},e={},n=function(i,r){switch(r){case Ja.L:return s[(i-1)*4+0];case Ja.M:return s[(i-1)*4+1];case Ja.Q:return s[(i-1)*4+2];case Ja.H:return s[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,r){let o=n(i,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let h=o[c*3+0],u=o[c*3+1],d=o[c*3+2];for(let f=0;f<h;f+=1)l.push(t(u,d))}return l},e})(),Eg=function(){let s=[],t=0,e={};return e.getBuffer=function(){return s},e.getAt=function(n){let i=Math.floor(n/8);return(s[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let r=0;r<i;r+=1)e.putBit((n>>>i-r-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);s.length<=i&&s.push(0),n&&(s[i]|=128>>>t%8),t+=1},e},T1=function(s){let t=wn.MODE_NUMBER,e=s,n={};n.getMode=function(){return t},n.getLength=function(o){return e.length},n.write=function(o){let a=e,l=0;for(;l+2<a.length;)o.put(i(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(i(a.substring(l,l+1)),4):a.length-l==2&&o.put(i(a.substring(l,l+2)),7))};let i=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},C1=function(s){let t=wn.MODE_ALPHA_NUM,e=s,n={};n.getMode=function(){return t},n.getLength=function(r){return e.length},n.write=function(r){let o=e,a=0;for(;a+1<o.length;)r.put(i(o.charAt(a))*45+i(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(i(o.charAt(a)),6)};let i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},E1=function(s){let t=wn.MODE_8BIT_BYTE,e=s,n=ko.stringToBytes(s),i={};return i.getMode=function(){return t},i.getLength=function(r){return n.length},i.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},i},A1=function(s){let t=wn.MODE_KANJI,e=s,n=ko.stringToBytes;(function(o,a){let l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let i=n(s),r={};return r.getMode=function(){return t},r.getLength=function(o){return~~(i.length/2)},r.write=function(o){let a=i,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},Ag=function(){let s=[],t={};return t.writeByte=function(e){s.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let r=0;r<i;r+=1)t.writeByte(e[r+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return s},t.toString=function(){let e="";e+="[";for(let n=0;n<s.length;n+=1)n>0&&(e+=","),e+=s[n];return e+="]",e},t},R1=function(){let s=0,t=0,e=0,n="",i={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return i.writeByte=function(a){for(s=s<<8|a&255,t+=8,e+=1;t>=6;)r(s>>>t-6),t-=6},i.flush=function(){if(t>0&&(r(s<<6-t),s=0,t=0),e%3!=0){let a=3-e%3;for(let l=0;l<a;l+=1)n+="="}},i.toString=function(){return n},i},P1=function(s){let t=s,e=0,n=0,i=0,r={};r.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let l=t.charAt(e);if(e+=1,l=="=")return i=0,-1;if(l.match(/^\s$/))continue;n=n<<6|o(l.charCodeAt(0)),i+=6}let a=n>>>i-8&255;return i-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},D1=function(s,t){let e=s,n=t,i=new Array(s*t),r={};r.setPixel=function(c,h,u){i[h*e+c]=u},r.write=function(c){c.writeString("GIF87a"),c.writeShort(e),c.writeShort(n),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(e),c.writeShort(n),c.writeByte(0);let h=2,u=a(h);c.writeByte(h);let d=0;for(;u.length-d>255;)c.writeByte(255),c.writeBytes(u,d,255),d+=255;c.writeByte(u.length-d),c.writeBytes(u,d,u.length-d),c.writeByte(0),c.writeString(";")};let o=function(c){let h=c,u=0,d=0,f={};return f.write=function(p,x){if(p>>>x)throw"length over";for(;u+x>=8;)h.writeByte(255&(p<<u|d)),x-=8-u,p>>>=8-u,d=0,u=0;d=p<<u|d,u=u+x},f.flush=function(){u>0&&h.writeByte(d)},f},a=function(c){let h=1<<c,u=(1<<c)+1,d=c+1,f=l();for(let S=0;S<h;S+=1)f.add(String.fromCharCode(S));f.add(String.fromCharCode(h)),f.add(String.fromCharCode(u));let p=Ag(),x=o(p);x.write(h,d);let m=0,_=String.fromCharCode(i[m]);for(m+=1;m<i.length;){let S=String.fromCharCode(i[m]);m+=1,f.contains(_+S)?_=_+S:(x.write(f.indexOf(_),d),f.size()<4095&&(f.size()==1<<d&&(d+=1),f.add(_+S)),_=S)}return x.write(f.indexOf(_),d),x.write(u,d),x.flush(),p.toByteArray()},l=function(){let c={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;c[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return c[d]},u.contains=function(d){return typeof c[d]<"u"},u};return r},I1=function(s,t,e){let n=D1(s,t);for(let a=0;a<t;a+=1)for(let l=0;l<s;l+=1)n.setPixel(l,a,e(l,a));let i=Ag();n.write(i);let r=R1(),o=i.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},qd=ko,YA=ko.stringToBytes;function X(s,t,e){return(t=(function(n){var i=(function(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)})(n,"string");return typeof i=="symbol"?i:i+""})(t))in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function Rg(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable}))),e.push.apply(e,n)}return e}function G(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Rg(Object(e),!0).forEach((function(n){X(s,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):Rg(Object(e)).forEach((function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(e,n))}))}return s}function ke(s,t){if(s==null)return{};var e,n,i=(function(o,a){if(o==null)return{};var l={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(a.indexOf(c)>=0)continue;l[c]=o[c]}return l})(s,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||{}.propertyIsEnumerable.call(s,e)&&(i[e]=s[e])}return i}function is(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))}var Rh=class{constructor(){X(this,"browserShadowBlurConstant",1),X(this,"DPI",96),X(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),X(this,"perfLimitSizeTotal",2097152),X(this,"maxCacheSideLimit",4096),X(this,"minCacheSideLimit",256),X(this,"disableStyleCopyPaste",!1),X(this,"enableGLFiltering",!0),X(this,"textureSize",4096),X(this,"forceGLPutImageData",!1),X(this,"cachesBoundsOfCurve",!1),X(this,"fontPaths",{}),X(this,"NUM_FRACTION_DIGITS",4)}},ye=new class extends Rh{constructor(s){super(),this.configure(s)}configure(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.assign(this,s)}addFonts(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.fontPaths=G(G({},this.fontPaths),s)}removeFonts(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach((s=>{delete this.fontPaths[s]}))}clearFonts(){this.fontPaths={}}restoreDefaults(s){let t=new Rh,e=s?.reduce(((n,i)=>(n[i]=t[i],n)),{})||t;this.configure(e)}},$s=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return console[s]("fabric",...e)},ui=class extends Error{constructor(t,e){super("fabric: ".concat(t),e)}},Ph=class extends ui{constructor(t){super("".concat(t," 'options.signal' is in 'aborted' state"))}},lf=class{},cf=class extends lf{testPrecision(t,e){let n="precision ".concat(e,` float;
void main(){}`),i=t.createShader(t.FRAGMENT_SHADER);return!!i&&(t.shaderSource(i,n),t.compileShader(i),!!t.getShaderParameter(i,t.COMPILE_STATUS))}queryWebGL(t){let e=t.getContext("webgl");e&&(this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find((n=>this.testPrecision(e,n))),e.getExtension("WEBGL_lose_context").loseContext(),$s("log","WebGL: max texture size ".concat(this.maxTextureSize)))}isSupported(t){return!!this.maxTextureSize&&this.maxTextureSize>=t}},O1={},Pg;var ts=()=>Pg||(Pg={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new cf,dispose(){},copyPasteData:O1}),ea=()=>ts().document,dl=()=>ts().window,h0=()=>{var s;return Math.max((s=ye.devicePixelRatio)!==null&&s!==void 0?s:dl().devicePixelRatio,1)},nl=new class{constructor(){X(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache(s){let{fontFamily:t,fontStyle:e,fontWeight:n}=s;t=t.toLowerCase();let i=this.charWidthsCache;i.has(t)||i.set(t,new Map);let r=i.get(t),o="".concat(e.toLowerCase(),"_").concat((n+"").toLowerCase());return r.has(o)||r.set(o,new Map),r.get(o)}clearFontCache(s){s?this.charWidthsCache.delete((s||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(s){let{perfLimitSizeTotal:t}=ye,e=Math.sqrt(t*s);return[Math.floor(e),Math.floor(t/e)]}},hf="6.9.1";function Hr(){}var Qs=Math.PI/2,Ss=2*Math.PI,Bf=Math.PI/180,In=Object.freeze([1,0,0,1,0,0]),zf=16,qs=.4477152502,ae="center",Re="left",Bn="top",uf="bottom",je="right",zn="none",Vf=/\r?\n/,u0="moving",su="scaling",d0="rotating",Gf="rotate",f0="skewing",al="resizing",p0="modifyPoly",L1="modifyPath",Dh="changed",ru="scale",On="scaleX",Qn="scaleY",na="skewX",ia="skewY",Qe="fill",Vn="stroke",Ih="modified",Uo="json",Zd="svg",Ut=new class{constructor(){this[Uo]=new Map,this[Zd]=new Map}has(s){return this[Uo].has(s)}getClass(s){let t=this[Uo].get(s);if(!t)throw new ui("No class registered for ".concat(s));return t}setClass(s,t){t?this[Uo].set(t,s):(this[Uo].set(s.type,s),this[Uo].set(s.type.toLowerCase(),s))}getSVGClass(s){return this[Zd].get(s)}setSVGClass(s,t){this[Zd].set(t??s.type.toLowerCase(),s)}},Oh=new class extends Array{remove(s){let t=this.indexOf(s);t>-1&&this.splice(t,1)}cancelAll(){let s=this.splice(0);return s.forEach((t=>t.abort())),s}cancelByCanvas(s){if(!s)return[];let t=this.filter((e=>{var n;return e.target===s||typeof e.target=="object"&&((n=e.target)===null||n===void 0?void 0:n.canvas)===s}));return t.forEach((e=>e.abort())),t}cancelByTarget(s){if(!s)return[];let t=this.filter((e=>e.target===s));return t.forEach((e=>e.abort())),t}},df=class{constructor(){X(this,"__eventListeners",{})}on(t,e){if(this.__eventListeners||(this.__eventListeners={}),typeof t=="object")return Object.entries(t).forEach((n=>{let[i,r]=n;this.on(i,r)})),()=>this.off(t);if(e){let n=t;return this.__eventListeners[n]||(this.__eventListeners[n]=[]),this.__eventListeners[n].push(e),()=>this.off(n,e)}return()=>!1}once(t,e){if(typeof t=="object"){let n=[];return Object.entries(t).forEach((i=>{let[r,o]=i;n.push(this.once(r,o))})),()=>n.forEach((i=>i()))}if(e){let n=this.on(t,(function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];e.call(this,...r),n()}));return n}return()=>!1}_removeEventListener(t,e){if(this.__eventListeners[t])if(e){let n=this.__eventListeners[t],i=n.indexOf(e);i>-1&&n.splice(i,1)}else this.__eventListeners[t]=[]}off(t,e){if(this.__eventListeners)if(t===void 0)for(let n in this.__eventListeners)this._removeEventListener(n);else typeof t=="object"?Object.entries(t).forEach((n=>{let[i,r]=n;this._removeEventListener(i,r)})):this._removeEventListener(t,e)}fire(t,e){var n;if(!this.__eventListeners)return;let i=(n=this.__eventListeners[t])===null||n===void 0?void 0:n.concat();if(i)for(let r=0;r<i.length;r++)i[r].call(this,e||{})}},wr=(s,t)=>{let e=s.indexOf(t);return e!==-1&&s.splice(e,1),s},Ii=s=>{if(s===0)return 1;switch(Math.abs(s)/Qs){case 1:case 3:return 0;case 2:return-1}return Math.cos(s)},Oi=s=>{if(s===0)return 0;let t=s/Qs,e=Math.sign(s);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(s)},st=class s{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new s(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new s(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new s(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new s(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new s(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new s(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new s(this.x/t.x,this.y/t.y)}scalarDivide(t){return new s(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.5;return e=Math.max(Math.min(1,e),0),new s(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new s(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new s(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return"".concat(this.x,",").concat(this.y)}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new s(this.x,this.y)}rotate(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Hf,n=Oi(t),i=Ii(t),r=this.subtract(e);return new s(r.x*i-r.y*n,r.x*n+r.y*i).add(e)}transform(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return new s(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},Hf=new st(0,0),Eh=s=>!!s&&Array.isArray(s._objects);function m0(s){class t extends s{constructor(){super(...arguments),X(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];let o=this._objects.push(...i);return i.forEach((a=>this._onObjectAdded(a))),o}insertAt(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return this._objects.splice(n,0,...r),r.forEach((a=>this._onObjectAdded(a))),this._objects.length}remove(){let n=this._objects,i=[];for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.forEach((l=>{let c=n.indexOf(l);c!==-1&&(n.splice(c,1),i.push(l),this._onObjectRemoved(l))})),i}forEachObject(n){this.getObjects().forEach(((i,r,o)=>n(i,r,o)))}getObjects(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length===0?[...this._objects]:this._objects.filter((o=>o.isType(...i)))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,i){return!!this._objects.includes(n)||!!i&&this._objects.some((r=>r instanceof t&&r.contains(n,!0)))}complexity(){return this._objects.reduce(((n,i)=>n+=i.complexity?i.complexity():0),0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(wr(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(wr(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let o=this.findNewLowerIndex(n,r,i);return wr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let o=this.findNewUpperIndex(n,r,i);return wr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,i){return n!==this._objects[i]&&(wr(this._objects,n),this._objects.splice(i,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,i,r){let o;if(r){o=i;for(let a=i-1;a>=0;--a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i-1;return o}findNewUpperIndex(n,i,r){let o;if(r){o=i;for(let a=i+1;a<this._objects.length;++a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i+1;return o}collectObjects(n){let{left:i,top:r,width:o,height:a}=n,{includeIntersecting:l=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=[],h=new st(i,r),u=h.add(new st(o,a));for(let d=this._objects.length-1;d>=0;d--){let f=this._objects[d];f.selectable&&f.visible&&(l&&f.intersectsWithRect(h,u)||f.isContainedWithinRect(h,u)||l&&f.containsPoint(h)||l&&f.containsPoint(u))&&c.push(f)}return c}}return t}var Lh=class extends df{_setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(let e in t)this.set(e,t[e])}_setObject(t){for(let e in t)this._set(e,t[e])}set(t,e){return typeof t=="object"?this._setObject(t):this._set(t,e),this}_set(t,e){this[t]=e}toggle(t){let e=this.get(t);return typeof e=="boolean"&&this.set(t,!e),this}get(t){return this[t]}};function il(s){return dl().requestAnimationFrame(s)}function g0(s){return dl().cancelAnimationFrame(s)}var F1=0,tr=()=>F1++,es=()=>{let s=ea().createElement("canvas");if(!s||s.getContext===void 0)throw new ui("Failed to create `canvas` element");return s},_0=()=>ea().createElement("img"),ti=s=>{let t=es();return t.width=s.width,t.height=s.height,t},Wf=(s,t,e)=>s.toDataURL("image/".concat(t),e),Xf=(s,t,e)=>new Promise(((n,i)=>{s.toBlob(n,"image/".concat(t),e)})),Ve=s=>s*Bf,ns=s=>s/Bf,x0=s=>s.every(((t,e)=>t===In[e])),Tn=(s,t,e)=>new st(s).transform(t,e),$n=s=>{let t=1/(s[0]*s[3]-s[1]*s[2]),e=[t*s[3],-t*s[1],-t*s[2],t*s[0],0,0],{x:n,y:i}=new st(s[4],s[5]).transform(e,!0);return e[4]=-n,e[5]=-i,e},Ge=(s,t,e)=>[s[0]*t[0]+s[2]*t[1],s[1]*t[0]+s[3]*t[1],s[0]*t[2]+s[2]*t[3],s[1]*t[2]+s[3]*t[3],e?0:s[0]*t[4]+s[2]*t[5]+s[4],e?0:s[1]*t[4]+s[3]*t[5]+s[5]],ou=(s,t)=>s.reduceRight(((e,n)=>n&&e?Ge(n,e,t):n||e),void 0)||In.concat(),v0=s=>{let[t,e]=s;return Math.atan2(e,t)},Zo=s=>{let t=v0(s),e=Math.pow(s[0],2)+Math.pow(s[1],2),n=Math.sqrt(e),i=(s[0]*s[3]-s[2]*s[1])/n,r=Math.atan2(s[0]*s[2]+s[1]*s[3],e);return{angle:ns(t),scaleX:n,scaleY:i,skewX:ns(r),skewY:0,translateX:s[4]||0,translateY:s[5]||0}},sa=function(s){return[1,0,0,1,s,arguments.length>1&&arguments[1]!==void 0?arguments[1]:0]};function Kr(){let{angle:s=0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{x:t=0,y:e=0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Ve(s),i=Ii(n),r=Oi(n);return[i,r,-r,i,t?t-(i*t-r*e):0,e?e-(r*t+i*e):0]}var au=function(s){return[s,0,0,arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,0,0]},y0=s=>Math.tan(Ve(s)),jf=s=>[1,0,y0(s),1,0,0],Yf=s=>[1,y0(s),0,1,0,0],fl=s=>{let{scaleX:t=1,scaleY:e=1,flipX:n=!1,flipY:i=!1,skewX:r=0,skewY:o=0}=s,a=au(n?-t:t,i?-e:e);return r&&(a=Ge(a,jf(r),!0)),o&&(a=Ge(a,Yf(o),!0)),a},S0=s=>{let{translateX:t=0,translateY:e=0,angle:n=0}=s,i=sa(t,e);n&&(i=Ge(i,Kr({angle:n})));let r=fl(s);return x0(r)||(i=Ge(i,r)),i},sl=function(s){let{signal:t,crossOrigin:e=null}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise((function(n,i){if(t&&t.aborted)return i(new Ph("loadImage"));let r=_0(),o;t&&(o=function(l){r.src="",i(l)},t.addEventListener("abort",o,{once:!0}));let a=function(){r.onload=r.onerror=null,o&&t?.removeEventListener("abort",o),n(r)};s?(r.onload=a,r.onerror=function(){o&&t?.removeEventListener("abort",o),i(new ui("Error loading ".concat(r.src)))},e&&(r.crossOrigin=e),r.src=s):a()}))},Jo=function(s){let{signal:t,reviver:e=Hr}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((n,i)=>{let r=[];t&&t.addEventListener("abort",i,{once:!0}),Promise.all(s.map((o=>Ut.getClass(o.type).fromObject(o,{signal:t}).then((a=>(e(o,a),r.push(a),a)))))).then(n).catch((o=>{r.forEach((a=>{a.dispose&&a.dispose()})),i(o)})).finally((()=>{t&&t.removeEventListener("abort",i)}))}))},pl=function(s){let{signal:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((e,n)=>{let i=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(s).map((a=>a&&a.type&&Ut.has(a.type)?Jo([a],{signal:t}).then((l=>{let[c]=l;return i.push(c),c})):a)),o=Object.keys(s);Promise.all(r).then((a=>a.reduce(((l,c,h)=>(l[o[h]]=c,l)),{}))).then(e).catch((a=>{i.forEach((l=>{l.dispose&&l.dispose()})),n(a)})).finally((()=>{t&&t.removeEventListener("abort",n)}))}))},$r=function(s){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).reduce(((t,e)=>(e in s&&(t[e]=s[e]),t)),{})},qf=(s,t)=>Object.keys(s).reduce(((e,n)=>(t(s[n],n,s)&&(e[n]=s[n]),e)),{}),Oe=(s,t)=>parseFloat(Number(s).toFixed(t)),Ko=s=>"matrix("+s.map((t=>Oe(t,ye.NUM_FRACTION_DIGITS))).join(" ")+")",hi=s=>!!s&&s.toLive!==void 0,Dg=s=>!!s&&typeof s.toObject=="function",Ig=s=>!!s&&s.offsetX!==void 0&&"source"in s,Tr=s=>!!s&&"multiSelectionStacking"in s;function b0(s){let t=s&&Ai(s),e=0,n=0;if(!s||!t)return{left:e,top:n};let i=s,r=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;i&&(i.parentNode||i.host)&&(i=i.parentNode||i.host,i===t?(e=o.scrollLeft||r.scrollLeft||0,n=o.scrollTop||r.scrollTop||0):(e+=i.scrollLeft||0,n+=i.scrollTop||0),i.nodeType!==1||i.style.position!=="fixed"););return{left:e,top:n}}var Ai=s=>s.ownerDocument||null,M0=s=>{var t;return((t=s.ownerDocument)===null||t===void 0?void 0:t.defaultView)||null},w0=function(s,t,e){let{width:n,height:i}=e,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;s.width=n,s.height=i,r>1&&(s.setAttribute("width",(n*r).toString()),s.setAttribute("height",(i*r).toString()),t.scale(r,r))},ff=(s,t)=>{let{width:e,height:n}=t;e&&(s.style.width=typeof e=="number"?"".concat(e,"px"):e),n&&(s.style.height=typeof n=="number"?"".concat(n,"px"):n)};function Og(s){return s.onselectstart!==void 0&&(s.onselectstart=()=>!1),s.style.userSelect=zn,s}var Fh=class{constructor(t){X(this,"_originalCanvasStyle",void 0),X(this,"lower",void 0);let e=this.createLowerCanvas(t);this.lower={el:e,ctx:e.getContext("2d")}}createLowerCanvas(t){let e=(n=t)&&n.getContext!==void 0?t:t&&ea().getElementById(t)||es();var n;if(e.hasAttribute("data-fabric"))throw new ui("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=e.style.cssText,e.setAttribute("data-fabric","main"),e.classList.add("lower-canvas"),e}cleanupDOM(t){let{width:e,height:n}=t,{el:i}=this.lower;i.classList.remove("lower-canvas"),i.removeAttribute("data-fabric"),i.setAttribute("width","".concat(e)),i.setAttribute("height","".concat(n)),i.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(t,e){let{el:n,ctx:i}=this.lower;w0(n,i,t,e)}setCSSDimensions(t){ff(this.lower.el,t)}calcOffset(){return(function(t){var e;let n=t&&Ai(t),i={left:0,top:0};if(!n)return i;let r=((e=M0(t))===null||e===void 0?void 0:e.getComputedStyle(t,null))||{};i.left+=parseInt(r.borderLeftWidth,10)||0,i.top+=parseInt(r.borderTopWidth,10)||0,i.left+=parseInt(r.paddingLeft,10)||0,i.top+=parseInt(r.paddingTop,10)||0;let o={left:0,top:0},a=n.documentElement;t.getBoundingClientRect!==void 0&&(o=t.getBoundingClientRect());let l=b0(t);return{left:o.left+l.left-(a.clientLeft||0)+i.left,top:o.top+l.top-(a.clientTop||0)+i.top}})(this.lower.el)}dispose(){ts().dispose(this.lower.el),delete this.lower}},N1={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...In]},k1=["objects"],er=class s extends m0(Lh){get lowerCanvasEl(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.ctx}static getDefaults(){return s.ownDefaults}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new Fh(t)}add(){let t=super.add(...arguments);return arguments.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=super.insertAt(t,...n);return n.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),r}remove(){let t=super.remove(...arguments);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}_onObjectAdded(t){t.canvas&&t.canvas!==this&&($s("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?h0():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}setWidth(t,e){return this.setDimensions({width:t},e)}setHeight(t,e){return this.setDimensions({height:t},e)}_setDimensionsImpl(t){let{cssOnly:e=!1,backstoreOnly:n=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e){let i=G({width:this.width,height:this.height},t);this.elements.setDimensions(i,this.getRetinaScaling()),this.hasLostContext=!0,this.width=i.width,this.height=i.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return this.viewportTransform[0]}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,i=[...this.viewportTransform],r=Tn(t,$n(i));i[0]=e,i[3]=e;let o=Tn(r,i);i[4]+=n.x-o.x,i[5]+=n.y-o.y,this.setViewportTransform(i)}setZoom(t){this.zoomToPoint(new st(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new st(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=il((()=>this.renderAndReset())))}calcViewportBoundaries(){let t=this.width,e=this.height,n=$n(this.viewportTransform),i=Tn({x:0,y:0},n),r=Tn({x:t,y:e},n),o=i.min(r),a=i.max(r);return this.vptCoords={tl:o,tr:new st(a.x,o.y),bl:new st(o.x,a.y),br:a}}cancelRequestedRender(){this.nextRenderHandle&&(g0(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,i=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality="best",this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),i&&(i._set("canvas",this),i.shouldCache(),i._transformDone=!0,i.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,i)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,i=e.length;n<i;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this["".concat(e,"Color")],i=this["".concat(e,"Image")],r=this.viewportTransform,o=this["".concat(e,"Vpt")];if(!n&&!i)return;let a=hi(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=a?n.toLive(t):n,o&&t.transform(...r),a){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(i){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=o,o&&t.transform(...r),i.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenter(){return{top:this.height/2,left:this.width/2}}getCenterPoint(){return new st(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new st(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new st(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return Tn(this.getCenterPoint(),$n(this.viewportTransform))}_centerObject(t,e){t.setXY(e,ae,ae),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,i=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return G(G(G({version:hf},$r(this,e)),{},{objects:this._objects.filter((r=>!r.excludeFromExport)).map((r=>this._toObject(r,t,e)))},this.__serializeBgOverlay(t,e)),i?{clipPath:i}:null)}_toObject(t,e,n){let i;this.includeDefaultValues||(i=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!i),r}__serializeBgOverlay(t,e){let n={},i=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,a=this.overlayColor;return hi(o)?o.excludeFromExport||(n.background=o.toObject(e)):o&&(n.background=o),hi(a)?a.excludeFromExport||(n.overlay=a.toObject(e)):a&&(n.overlay=a),i&&!i.excludeFromExport&&(n.backgroundImage=this._toObject(i,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;t.reviver=e;let n=[];return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId,`)" >
`)),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||"".concat(this.width),i=e.height||"".concat(this.height),r=ye.NUM_FRACTION_DIGITS,o=e.viewBox,a;if(o)a='viewBox="'.concat(o.x," ").concat(o.y," ").concat(o.width," ").concat(o.height,'" ');else if(this.svgViewportTransformation){let l=this.viewportTransform;a='viewBox="'.concat(Oe(-l[4]/l[0],r)," ").concat(Oe(-l[5]/l[3],r)," ").concat(Oe(this.width/l[0],r)," ").concat(Oe(this.height/l[3],r),'" ')}else a='viewBox="0 0 '.concat(this.width," ").concat(this.height,'" ');t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',i,'" ',a,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",hf,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId="CLIPPATH_".concat(tr()),'<clipPath id="'.concat(e.clipPathId,`" >
`).concat(e.toClipPathSVG(t.reviver),`</clipPath>
`)):""}createSVGRefElementsMarkup(){return["background","overlay"].map((t=>{let e=this["".concat(t,"Color")];if(hi(e)){let n=this["".concat(t,"Vpt")],i=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?i[0]:1),height:this.height/(n?i[3]:1)};return e.toSVG(r,{additionalTransform:n?Ko(i):""})}})).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=ye.fontPaths;this._objects.forEach((function r(o){t.push(o),Eh(o)&&o._objects.forEach(r)})),t.forEach((r=>{if(!(o=r)||typeof o._renderText!="function")return;var o;let{styles:a,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,a&&Object.values(a).forEach((c=>{Object.values(c).forEach((h=>{let{fontFamily:u=""}=h;!e[u]&&n[u]&&(e[u]=!0)}))})))}));let i=Object.keys(e).map((r=>`		@font-face {
			font-family: '`.concat(r,`';
			src: url('`).concat(n[r],`');
		}
`))).join("");return i?`	<style type="text/css"><![CDATA[
`.concat(i,`]]></style>
`):""}_setSVGObjects(t,e){this.forEachObject((n=>{n.excludeFromExport||this._setSVGObject(t,n,e)}))}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let i=this[e];i&&!i.excludeFromExport&&i.toSVG&&t.push(i.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this["".concat(e,"Color")];if(n)if(hi(n)){let i=n.repeat||"",r=this.width,o=this.height,a=this["".concat(e,"Vpt")]?Ko($n(this.viewportTransform)):"";t.push('<rect transform="'.concat(a," translate(").concat(r/2,",").concat(o/2,')" x="').concat(n.offsetX-r/2,'" y="').concat(n.offsetY-o/2,'" width="').concat(i!=="repeat-y"&&i!=="no-repeat"||!Ig(n)?r:n.source.width,'" height="').concat(i!=="repeat-x"&&i!=="no-repeat"||!Ig(n)?o:n.source.height,'" fill="url(#SVGID_').concat(n.id,`)"></rect>
`))}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e){let{signal:n}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t)return Promise.reject(new ui("`json` is undefined"));let i=typeof t=="string"?JSON.parse(t):t,{objects:r=[]}=i,o=ke(i,k1),{backgroundImage:a,background:l,overlayImage:c,overlay:h,clipPath:u}=o,d=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([Jo(r,{reviver:e,signal:n}),pl({backgroundImage:a,backgroundColor:l,overlayImage:c,overlayColor:h,clipPath:u},{signal:n})]).then((f=>{let[p,x]=f;return this.clear(),this.add(...p),this.set(o),this.set(x),this.renderOnAddRemove=d,this}))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=ti(this);return new this.constructor(t)}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Wf(this.toCanvasElement(o,t),e,n)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Xf(this.toCanvasElement(o,t),e,n)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,{width:e,height:n,left:i,top:r,filter:o}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,u=this.height,d=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,x=[f,0,0,f,(p[4]-(i||0))*t,(p[5]-(r||0))*t],m=this.enableRetinaScaling,_=ti({width:a,height:l}),S=o?this._objects.filter((P=>o(P))):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=x,this.width=a,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(_.getContext("2d"),S),this.viewportTransform=p,this.width=h,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=m,this.skipControlsDrawing=d,_}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),Oh.cancelByCanvas(this),this.disposed=!0,new Promise(((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()}))}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject((t=>t.dispose())),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return"#<Canvas (".concat(this.complexity(),"): { objects: ").concat(this._objects.length," }>")}};X(er,"ownDefaults",N1);var U1=["touchstart","touchmove","touchend"],T0=s=>{let t=b0(s.target),e=(function(n){let i=n.changedTouches;return i&&i[0]?i[0]:n})(s);return new st(e.clientX+t.left,e.clientY+t.top)},Nh=s=>U1.includes(s.type)||s.pointerType==="touch",Lg=s=>{s.preventDefault(),s.stopPropagation()},Qi=s=>{let t=0,e=0,n=0,i=0;for(let r=0,o=s.length;r<o;r++){let{x:a,y:l}=s[r];(a>n||!r)&&(n=a),(a<t||!r)&&(t=a),(l>i||!r)&&(i=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:i-e}},B1=["translateX","translateY","scaleX","scaleY"],C0=(s,t)=>$o(s,Ge(t,s.calcOwnMatrix())),$o=(s,t)=>{let e=Zo(t),{translateX:n,translateY:i,scaleX:r,scaleY:o}=e,a=ke(e,B1),l=new st(n,i);s.flipX=!1,s.flipY=!1,Object.assign(s,a),s.set({scaleX:r,scaleY:o}),s.setPositionByOrigin(l,ae,ae)},E0=s=>{s.scaleX=1,s.scaleY=1,s.skewX=0,s.skewY=0,s.flipX=!1,s.flipY=!1,s.rotate(0)},Zf=s=>({scaleX:s.scaleX,scaleY:s.scaleY,skewX:s.skewX,skewY:s.skewY,angle:s.angle,left:s.left,flipX:s.flipX,flipY:s.flipY,top:s.top}),lu=(s,t,e)=>{let n=s/2,i=t/2,r=[new st(-n,-i),new st(n,-i),new st(-n,i),new st(n,i)].map((a=>a.transform(e))),o=Qi(r);return new st(o.width,o.height)},ml=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:In;return Ge($n(arguments.length>1&&arguments[1]!==void 0?arguments[1]:In),s)},ys=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:In,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:In;return s.transform(ml(t,e))},A0=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:In,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:In;return s.transform(ml(t,e),!0)},pf=(s,t,e)=>{let n=ml(t,e);return $o(s,Ge(n,s.calcOwnMatrix())),n},Jf=(s,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)===null||e===void 0||e.fire("object:".concat(s),G(G({},t),{},{target:n})),n.fire(s,t)},z1={left:-.5,top:-.5,center:0,bottom:.5,right:.5},Je=s=>typeof s=="string"?z1[s]:s-.5,kh="not-allowed";function R0(s){return Je(s.originX)===Je(ae)&&Je(s.originY)===Je(ae)}function Fg(s){return .5-Je(s)}var Di=(s,t)=>s[t],Kf=(s,t,e,n)=>({e:s,transform:t,pointer:new st(e,n)});function P0(s,t){let e=s.getTotalAngle()+ns(Math.atan2(t.y,t.x))+360;return Math.round(e%360/45)}function cu(s,t,e,n,i){var r;let{target:o,corner:a}=s,l=o.controls[a],c=((r=o.canvas)===null||r===void 0?void 0:r.getZoom())||1,h=o.padding/c,u=(function(d,f,p,x){let m=d.getRelativeCenterPoint(),_=p!==void 0&&x!==void 0?d.translateToGivenOrigin(m,ae,ae,p,x):new st(d.left,d.top);return(d.angle?f.rotate(-Ve(d.angle),m):f).subtract(_)})(o,new st(n,i),t,e);return u.x>=h&&(u.x-=h),u.x<=-h&&(u.x+=h),u.y>=h&&(u.y-=h),u.y<=h&&(u.y+=h),u.x-=l.offsetX,u.y-=l.offsetY,u}var D0=(s,t,e,n)=>{let{target:i,offsetX:r,offsetY:o}=t,a=e-r,l=n-o,c=!Di(i,"lockMovementX")&&i.left!==a,h=!Di(i,"lockMovementY")&&i.top!==l;return c&&i.set(Re,a),h&&i.set(Bn,l),(c||h)&&Jf(u0,Kf(s,t,e,n)),c||h},Uh=s=>s.replace(/\s+/g," "),Ng={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},Jd=(s,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+6*(t-s)*e:e<.5?t:e<2/3?s+(t-s)*(2/3-e)*6:s),kg=(s,t,e,n)=>{s/=255,t/=255,e/=255;let i=Math.max(s,t,e),r=Math.min(s,t,e),o,a,l=(i+r)/2;if(i===r)o=a=0;else{let c=i-r;switch(a=l>.5?c/(2-i-r):c/(i+r),i){case s:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-s)/c+2;break;case e:o=(s-t)/c+4}o/=6}return[Math.round(360*o),Math.round(100*a),Math.round(100*l),n]},Ug=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"1";return parseFloat(s)/(s.endsWith("%")?100:1)},yh=s=>Math.min(Math.round(s),255).toString(16).toUpperCase().padStart(2,"0"),Bg=s=>{let[t,e,n,i=1]=s,r=Math.round(.3*t+.59*e+.11*n);return[r,r,r,i]},Ln=class s{constructor(t){if(X(this,"isUnrecognised",!1),t)if(t instanceof s)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,i,r=1]=t;this.setSource([e,n,i,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in Ng&&(t=Ng[t]),t==="transparent"?[255,255,255,0]:s.sourceFromHex(t)||s.sourceFromRgb(t)||s.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return"rgb(".concat(t,",").concat(e,",").concat(n,")")}toRgba(){return"rgba(".concat(this.getSource().join(","),")")}toHsl(){let[t,e,n]=kg(...this.getSource());return"hsl(".concat(t,",").concat(e,"%,").concat(n,"%)")}toHsla(){let[t,e,n,i]=kg(...this.getSource());return"hsla(".concat(t,",").concat(e,"%,").concat(n,"%,").concat(i,")")}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,i]=this.getSource();return"".concat(yh(t)).concat(yh(e)).concat(yh(n)).concat(yh(Math.round(255*i)))}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(Bg(this.getSource())),this}toBlackWhite(t){let[e,,,n]=Bg(this.getSource()),i=e<(t||127)?0:255;return this.setSource([i,i,i,n]),this}overlayWith(t){t instanceof s||(t=new s(t));let e=this.getSource(),n=t.getSource(),[i,r,o]=e.map(((a,l)=>Math.round(.5*a+.5*n[l])));return this.setSource([i,r,o,e[3]]),this}static fromRgb(t){return s.fromRgba(t)}static fromRgba(t){return new s(s.sourceFromRgb(t))}static sourceFromRgb(t){let e=Uh(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,i,r]=e.slice(1,4).map((o=>{let a=parseFloat(o);return o.endsWith("%")?Math.round(2.55*a):a}));return[n,i,r,Ug(e[4])]}}static fromHsl(t){return s.fromHsla(t)}static fromHsla(t){return new s(s.sourceFromHsl(t))}static sourceFromHsl(t){let e=Uh(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(s.parseAngletoDegrees(e[1])%360+360)%360/360,i=parseFloat(e[2])/100,r=parseFloat(e[3])/100,o,a,l;if(i===0)o=a=l=r;else{let c=r<=.5?r*(i+1):r+i-r*i,h=2*r-c;o=Jd(h,c,n+1/3),a=Jd(h,c,n),l=Jd(h,c,n-1/3)}return[Math.round(255*o),Math.round(255*a),Math.round(255*l),Ug(e[4])]}static fromHex(t){return new s(s.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map((l=>l+l)):e.match(/.{2}/g);let[i,r,o,a=255]=n.map((l=>parseInt(l,16)));return[i,r,o,a/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?ns(n):e.includes("turn")?360*n:n}},Wr=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:zf,e=/\D{0,2}$/.exec(s),n=parseFloat(s),i=ye.DPI;switch(e?.[0]){case"mm":return n*i/25.4;case"cm":return n*i/2.54;case"in":return n*i;case"pt":return n*i/72;case"pc":return n*i/72*12;case"em":return n*t;default:return n}},I0=s=>{let[t,e]=s.trim().split(" "),[n,i]=(r=t)&&r!==zn?[r.slice(1,4),r.slice(5,8)]:r===zn?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:i}},ll=function(s,t){let e,n,i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t)if(t.toLive)e="url(#SVGID_".concat(t.id,")");else{let r=new Ln(t),o=r.getAlpha();e=r.toRgb(),o!==1&&(n=o.toString())}else e="none";return i?"".concat(s,": ").concat(e,"; ").concat(n?"".concat(s,"-opacity: ").concat(n,"; "):""):"".concat(s,'="').concat(e,'" ').concat(n?"".concat(s,'-opacity="').concat(n,'" '):"")},Bh=class{getSvgStyles(t){let e=this.fillRule?this.fillRule:"nonzero",n=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):zn,r=this.strokeDashOffset?this.strokeDashOffset:"0",o=this.strokeLineCap?this.strokeLineCap:"butt",a=this.strokeLineJoin?this.strokeLineJoin:"miter",l=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=this.opacity!==void 0?this.opacity:"1",h=this.visible?"":" visibility: hidden;",u=t?"":this.getSvgFilter(),d=ll(Qe,this.fill);return[ll(Vn,this.stroke),"stroke-width: ",n,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",o,"; ","stroke-dashoffset: ",r,"; ","stroke-linejoin: ",a,"; ","stroke-miterlimit: ",l,"; ",d,"fill-rule: ",e,"; ","opacity: ",c,";",u,h].join("")}getSvgFilter(){return this.shadow?"filter: url(#SVGID_".concat(this.shadow.id,");"):""}getSvgCommons(){return[this.id?'id="'.concat(this.id,'" '):"",this.clipPath?'clip-path="url(#'.concat(this.clipPath.clipPathId,')" '):""].join("")}getSvgTransform(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t?this.calcTransformMatrix():this.calcOwnMatrix(),i='transform="'.concat(Ko(n));return"".concat(i).concat(e,'" ')}_toSVG(t){return[""]}toSVG(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})}toClipPathSVG(t){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})}_createBaseClipPathSVGMarkup(t){let{reviver:e,additionalTransform:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(""),r=t.indexOf("COMMON_PARTS");return t[r]=i,e?e(t.join("")):t.join("")}_createBaseSVGMarkup(t){let{noStyle:e,reviver:n,withShadow:i,additionalTransform:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e?"":'style="'.concat(this.getSvgStyles(),'" '),a=i?'style="'.concat(this.getSvgFilter(),'" '):"",l=this.clipPath,c=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",h=l&&l.absolutePositioned,u=this.stroke,d=this.fill,f=this.shadow,p=[],x=t.indexOf("COMMON_PARTS"),m;l&&(l.clipPathId="CLIPPATH_".concat(tr()),m='<clipPath id="'.concat(l.clipPathId,`" >
`).concat(l.toClipPathSVG(n),`</clipPath>
`)),h&&p.push("<g ",a,this.getSvgCommons(),` >
`),p.push("<g ",this.getSvgTransform(!1),h?"":a+this.getSvgCommons(),` >
`);let _=[o,c,e?"":this.addPaintOrder()," ",r?'transform="'.concat(r,'" '):""].join("");return t[x]=_,hi(d)&&p.push(d.toSVG(this)),hi(u)&&p.push(u.toSVG(this)),f&&p.push(f.toSVG(this)),l&&p.push(m),p.push(t.join("")),p.push(`</g>
`),h&&p.push(`</g>
`),n?n(p.join("")):p.join("")}addPaintOrder(){return this.paintFirst!==Qe?' paint-order="'.concat(this.paintFirst,'" '):""}};function hu(s){return new RegExp("^("+s.join("|")+")\\b","i")}var qr="textDecorationThickness",O0=["fontSize","fontWeight","fontFamily","fontStyle"],L0=["underline","overline","linethrough"],F0=[...O0,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],N0=[...F0,...L0,"textBackgroundColor","direction",qr],V1=[...O0,...L0,Vn,"strokeWidth",Qe,"deltaY","textBackgroundColor",qr],G1={_reNewline:Vf,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:Re,fontStyle:"normal",lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:Re,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[qr]:66.667},Ki="justify",zh="justify-left",rl="justify-right",ol="justify-center",zg,Vg,Gg,Ri=String.raw(zg||(zg=is(["[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"],["[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"]))),Kd=String.raw(Vg||(Vg=is(["(?:s*,?s+|s*,s*)"],["(?:\\s*,?\\s+|\\s*,\\s*)"])));var H1=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+Ri+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+Ri+"))?\\s+(.*)"),W1={cx:Re,x:Re,r:"radius",cy:Bn,y:Bn,display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":qr},$d="font-size",Qd="clip-path",ZA=hu(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),JA=hu(["symbol","image","marker","pattern","view","svg"]),Hg=hu(["symbol","g","a","svg","clipPath","defs"]),KA=new RegExp(String.raw(Gg||(Gg=is(["^s*(",")","(",")","(",")","(",")s*$"],["^\\s*(",")","(",")","(",")","(",")\\s*$"])),Ri,Kd,Ri,Kd,Ri,Kd,Ri)),X1=new st(1,0),k0=new st,$f=(s,t)=>s.rotate(t),Vh=(s,t)=>new st(t).subtract(s),Gh=s=>s.distanceFrom(k0),Hh=(s,t)=>Math.atan2(Yo(s,t),B0(s,t)),U0=s=>Hh(X1,s),uu=s=>s.eq(k0)?s:s.scalarDivide(Gh(s)),Qf=function(s){let t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return uu(new st(-s.y,s.x).scalarMultiply(t?1:-1))},Yo=(s,t)=>s.x*t.y-s.y*t.x,B0=(s,t)=>s.x*t.x+s.y*t.y,mf=(s,t,e)=>{if(s.eq(t)||s.eq(e))return!0;let n=Yo(t,e),i=Yo(t,s),r=Yo(e,s);return n>=0?i>=0&&r<=0:!(i<=0&&r>=0)},Wg="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",Xg=new RegExp("(?:\\s|^)"+Wg+Wg+"("+Ri+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),Xr=class s{constructor(t){let e=typeof t=="string"?s.parseShadow(t):t;Object.assign(this,s.ownDefaults,e),this.id=tr()}static parseShadow(t){let e=t.trim(),[,n=0,i=0,r=0]=(Xg.exec(e)||[]).map((o=>parseFloat(o)||0));return{color:(e.replace(Xg,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:i,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=$f(new st(this.offsetX,this.offsetY),Ve(-t.angle)),n=new Ln(this.color),i=40,r=40;return t.width&&t.height&&(i=100*Oe((Math.abs(e.x)+this.blur)/t.width,ye.NUM_FRACTION_DIGITS)+20,r=100*Oe((Math.abs(e.y)+this.blur)/t.height,ye.NUM_FRACTION_DIGITS)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),'<filter id="SVGID_'.concat(this.id,'" y="-').concat(r,'%" height="').concat(100+2*r,'%" x="-').concat(i,'%" width="').concat(100+2*i,`%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(Oe(this.blur?this.blur/2:0,ye.NUM_FRACTION_DIGITS),`"></feGaussianBlur>
	<feOffset dx="`).concat(Oe(e.x,ye.NUM_FRACTION_DIGITS),'" dy="').concat(Oe(e.y,ye.NUM_FRACTION_DIGITS),`" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(n.toRgb(),'" flood-opacity="').concat(n.getAlpha(),`"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`)}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=s.ownDefaults;return this.includeDefaultValues?t:qf(t,((n,i)=>n!==e[i]))}static async fromObject(t){return new this(t)}};X(Xr,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),X(Xr,"type","shadow"),Ut.setClass(Xr,"shadow");var Zr=(s,t,e)=>Math.max(s,Math.min(t,e)),j1=[Bn,Re,On,Qn,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",na,ia],bs=[Qe,Vn,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],Y1={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:Re,originY:Bn,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:Qe,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},tf=(s,t,e,n)=>(s<Math.abs(t)?(s=t,n=e/4):n=t===0&&s===0?e/Ss*Math.asin(1):e/Ss*Math.asin(t/s),{a:s,c:t,p:e,s:n}),jg=(s,t,e,n,i)=>s*Math.pow(2,10*(n-=1))*Math.sin((n*i-t)*Ss/e),z0=(s,t,e,n)=>-e*Math.cos(s/n*Qs)+e+t,gf=(s,t,e,n)=>(s/=n)<1/2.75?e*(7.5625*s*s)+t:s<2/2.75?e*(7.5625*(s-=1.5/2.75)*s+.75)+t:s<2.5/2.75?e*(7.5625*(s-=2.25/2.75)*s+.9375)+t:e*(7.5625*(s-=2.625/2.75)*s+.984375)+t,Yg=(s,t,e,n)=>e-gf(n-s,0,e,n)+t,q1=Object.freeze({__proto__:null,defaultEasing:z0,easeInBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*(s/=n)*s*((i+1)*s-i)+t},easeInBounce:Yg,easeInCirc:(s,t,e,n)=>-e*(Math.sqrt(1-(s/=n)*s)-1)+t,easeInCubic:(s,t,e,n)=>e*(s/n)**3+t,easeInElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l}=tf(i,e,r,1.70158);return-jg(o,a,l,s,n)+t},easeInExpo:(s,t,e,n)=>s===0?t:e*2**(10*(s/n-1))+t,easeInOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return(s/=n/2)<1?e/2*(s*s*((1+(i*=1.525))*s-i))+t:e/2*((s-=2)*s*((1+(i*=1.525))*s+i)+2)+t},easeInOutBounce:(s,t,e,n)=>s<n/2?.5*Yg(2*s,0,e,n)+t:.5*gf(2*s-n,0,e,n)+.5*e+t,easeInOutCirc:(s,t,e,n)=>(s/=n/2)<1?-e/2*(Math.sqrt(1-s**2)-1)+t:e/2*(Math.sqrt(1-(s-=2)*s)+1)+t,easeInOutCubic:(s,t,e,n)=>(s/=n/2)<1?e/2*s**3+t:e/2*((s-2)**3+2)+t,easeInOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n/2)===2)return t+e;r||(r=n*(.3*1.5));let{a:o,s:a,p:l,c}=tf(i,e,r,1.70158);return s<1?-.5*jg(o,a,l,s,n)+t:o*Math.pow(2,-10*(s-=1))*Math.sin((s*n-a)*Ss/l)*.5+c+t},easeInOutExpo:(s,t,e,n)=>s===0?t:s===n?t+e:(s/=n/2)<1?e/2*2**(10*(s-1))+t:e/2*-(2**(-10*--s)+2)+t,easeInOutQuad:(s,t,e,n)=>(s/=n/2)<1?e/2*s**2+t:-e/2*(--s*(s-2)-1)+t,easeInOutQuart:(s,t,e,n)=>(s/=n/2)<1?e/2*s**4+t:-e/2*((s-=2)*s**3-2)+t,easeInOutQuint:(s,t,e,n)=>(s/=n/2)<1?e/2*s**5+t:e/2*((s-2)**5+2)+t,easeInOutSine:(s,t,e,n)=>-e/2*(Math.cos(Math.PI*s/n)-1)+t,easeInQuad:(s,t,e,n)=>e*(s/=n)*s+t,easeInQuart:(s,t,e,n)=>e*(s/=n)*s**3+t,easeInQuint:(s,t,e,n)=>e*(s/n)**5+t,easeInSine:(s,t,e,n)=>-e*Math.cos(s/n*Qs)+e+t,easeOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*((s=s/n-1)*s*((i+1)*s+i)+1)+t},easeOutBounce:gf,easeOutCirc:(s,t,e,n)=>e*Math.sqrt(1-(s=s/n-1)*s)+t,easeOutCubic:(s,t,e,n)=>e*((s/n-1)**3+1)+t,easeOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l,c}=tf(i,e,r,1.70158);return o*2**(-10*s)*Math.sin((s*n-a)*Ss/l)+c+t},easeOutExpo:(s,t,e,n)=>s===n?t+e:e*-(2**(-10*s/n)+1)+t,easeOutQuad:(s,t,e,n)=>-e*(s/=n)*(s-2)+t,easeOutQuart:(s,t,e,n)=>-e*((s=s/n-1)*s**3-1)+t,easeOutQuint:(s,t,e,n)=>e*((s/n-1)**5+1)+t,easeOutSine:(s,t,e,n)=>e*Math.sin(s/n*Qs)+t}),Z1=()=>!1,cl=class{constructor(t){let{startValue:e,byValue:n,duration:i=500,delay:r=0,easing:o=z0,onStart:a=Hr,onChange:l=Hr,onComplete:c=Hr,abort:h=Z1,target:u}=t;X(this,"_state","pending"),X(this,"durationProgress",0),X(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=i,this.delay=r,this.easing=o,this._onStart=a,this._onChange=l,this._onComplete=c,this._abort=h,this.target=u,this.startValue=e,this.byValue=n,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let t=e=>{this._state==="pending"&&(this.startTime=e||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?setTimeout((()=>il(t)),this.delay):il(t)}tick(t){let e=(t||+new Date)-this.startTime,n=Math.min(e,this.duration);this.durationProgress=n/this.duration;let{value:i,valueProgress:r}=this.calculate(n);this.value=Object.freeze(i),this.valueProgress=r,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):e>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister()):(this._onChange(this.value,this.valueProgress,this.durationProgress),il(this.tick)))}register(){Oh.push(this)}unregister(){Oh.remove(this)}abort(){this._state="aborted",this.unregister()}},J1=["startValue","endValue"],_f=class extends cl{constructor(t){let{startValue:e=0,endValue:n=100}=t;super(G(G({},ke(t,J1)),{},{startValue:e,byValue:n-e}))}calculate(t){let e=this.easing(t,this.startValue,this.byValue,this.duration);return{value:e,valueProgress:Math.abs((e-this.startValue)/this.byValue)}}},K1=["startValue","endValue"],xf=class extends cl{constructor(t){let{startValue:e=[0],endValue:n=[100]}=t;super(G(G({},ke(t,K1)),{},{startValue:e,byValue:n.map(((i,r)=>i-e[r]))}))}calculate(t){let e=this.startValue.map(((n,i)=>this.easing(t,n,this.byValue[i],this.duration,i)));return{value:e,valueProgress:Math.abs((e[0]-this.startValue[0])/this.byValue[0])}}},$1=["startValue","endValue","easing","onChange","onComplete","abort"],Q1=(s,t,e,n)=>t+e*(1-Math.cos(s/n*Qs)),ef=s=>s&&((t,e,n)=>s(new Ln(t).toRgba(),e,n)),vf=class extends cl{constructor(t){let{startValue:e,endValue:n,easing:i=Q1,onChange:r,onComplete:o,abort:a}=t,l=ke(t,$1),c=new Ln(e).getSource(),h=new Ln(n).getSource();super(G(G({},l),{},{startValue:c,byValue:h.map(((u,d)=>u-c[d])),easing:i,onChange:ef(r),onComplete:ef(o),abort:ef(a)}))}calculate(t){let[e,n,i,r]=this.startValue.map(((a,l)=>this.easing(t,a,this.byValue[l],this.duration,l))),o=[...[e,n,i].map(Math.round),Zr(0,r,1)];return{value:o,valueProgress:o.map(((a,l)=>this.byValue[l]!==0?Math.abs((a-this.startValue[l])/this.byValue[l]):0)).find((a=>a!==0))||0}}};function tp(s){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(s)?new xf(s):new _f(s);return t.start(),t}function V0(s){let t=new vf(s);return t.start(),t}var jr=class s{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some((e=>e.eq(t)))}append(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.points=this.points.concat(e.filter((i=>!this.includes(i)))),this}static isPointContained(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(i||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(i||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=Vh(e,n),o=Vh(e,t).divide(r);return i?Math.abs(o.x)===Math.abs(o.y):o.x===o.y&&o.x>=0&&o.x<=1}}static isPointInPolygon(t,e){let n=new st(t).setX(Math.min(t.x-1,...e.map((r=>r.x)))),i=0;for(let r=0;r<e.length;r++){let o=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(o.includes(t))return!0;i+=+(o.status==="Intersection")}return i%2==1}static intersectLineLine(t,e,n,i){let r=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=!(arguments.length>5&&arguments[5]!==void 0)||arguments[5],a=e.x-t.x,l=e.y-t.y,c=i.x-n.x,h=i.y-n.y,u=t.x-n.x,d=t.y-n.y,f=c*d-h*u,p=a*d-l*u,x=h*a-c*l;if(x!==0){let m=f/x,_=p/x;return(r||0<=m&&m<=1)&&(o||0<=_&&_<=1)?new s("Intersection").append(new st(t.x+m*a,t.y+m*l)):new s}if(f===0||p===0){let m=r||o||s.isPointContained(t,n,i)||s.isPointContained(e,n,i)||s.isPointContained(n,t,e)||s.isPointContained(i,t,e);return new s(m?"Coincident":void 0)}return new s("Parallel")}static intersectSegmentLine(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!0)}static intersectSegmentSegment(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!1)}static intersectLinePolygon(t,e,n){let i=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],r=new s,o=n.length;for(let a,l,c,h=0;h<o;h++){if(a=n[h],l=n[(h+1)%o],c=s.intersectLineLine(t,e,a,l,i,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return s.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new s,i=t.length,r=[];for(let o=0;o<i;o++){let a=t[o],l=t[(o+1)%i],c=s.intersectSegmentPolygon(a,l,e);c.status==="Coincident"?(r.push(c),n.append(a,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new s("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let i=e.min(n),r=e.max(n),o=new st(r.x,i.y),a=new st(i.x,r.y);return s.intersectPolygonPolygon(t,[i,o,r,a])}},yf=class extends Lh{getX(){return this.getXY().x}setX(t){this.setXY(this.getXY().setX(t))}getY(){return this.getXY().y}setY(t){this.setXY(this.getXY().setY(t))}getRelativeX(){return this.left}setRelativeX(t){this.left=t}getRelativeY(){return this.top}setRelativeY(t){this.top=t}getXY(){let t=this.getRelativeXY();return this.group?Tn(t,this.group.calcTransformMatrix()):t}setXY(t,e,n){this.group&&(t=Tn(t,$n(this.group.calcTransformMatrix()))),this.setRelativeXY(t,e,n)}getRelativeXY(){return new st(this.left,this.top)}setRelativeXY(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.originX,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.originY;this.setPositionByOrigin(t,e,n)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:t,tr:e,br:n,bl:i}=this.aCoords||(this.aCoords=this.calcACoords()),r=[t,e,n,i];if(this.group){let o=this.group.calcTransformMatrix();return r.map((a=>Tn(a,o)))}return r}intersectsWithRect(t,e){return jr.intersectPolygonRectangle(this.getCoords(),t,e).status==="Intersection"}intersectsWithObject(t){let e=jr.intersectPolygonPolygon(this.getCoords(),t.getCoords());return e.status==="Intersection"||e.status==="Coincident"||t.isContainedWithinObject(this)||this.isContainedWithinObject(t)}isContainedWithinObject(t){return this.getCoords().every((e=>t.containsPoint(e)))}isContainedWithinRect(t,e){let{left:n,top:i,width:r,height:o}=this.getBoundingRect();return n>=t.x&&n+r<=e.x&&i>=t.y&&i+o<=e.y}isOverlapping(t){return this.intersectsWithObject(t)||this.isContainedWithinObject(t)||t.isContainedWithinObject(this)}containsPoint(t){return jr.isPointInPolygon(t,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return!!this.getCoords().some((n=>n.x<=e.x&&n.x>=t.x&&n.y<=e.y&&n.y>=t.y))||!!this.intersectsWithRect(t,e)||this.containsPoint(t.midPointFrom(e))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return this.intersectsWithRect(t,e)?!0:this.getCoords().every((n=>(n.x>=e.x||n.x<=t.x)&&(n.y>=e.y||n.y<=t.y)))&&this.containsPoint(t.midPointFrom(e))}getBoundingRect(){return Qi(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(t){this._set(On,t),this._set(Qn,t),this.setCoords()}scaleToWidth(t){let e=this.getBoundingRect().width/this.getScaledWidth();return this.scale(t/this.width/e)}scaleToHeight(t){let e=this.getBoundingRect().height/this.getScaledHeight();return this.scale(t/this.height/e)}getCanvasRetinaScaling(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.getRetinaScaling())||1}getTotalAngle(){return this.group?ns(v0(this.calcTransformMatrix())):this.angle}getViewportTransform(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.viewportTransform)||In.concat()}calcACoords(){let t=Kr({angle:this.angle}),{x:e,y:n}=this.getRelativeCenterPoint(),i=sa(e,n),r=Ge(i,t),o=this._getTransformedDimensions(),a=o.x/2,l=o.y/2;return{tl:Tn({x:-a,y:-l},r),tr:Tn({x:a,y:-l},r),bl:Tn({x:-a,y:l},r),br:Tn({x:a,y:l},r)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=[];return!t&&this.group&&(e=this.group.transformMatrixKey(t)),e.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,Je(this.originX),Je(this.originY)),e}calcTransformMatrix(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=this.calcOwnMatrix();if(t||!this.group)return e;let n=this.transformMatrixKey(t),i=this.matrixCache;return i&&i.key.every(((r,o)=>r===n[o]))?i.value:(this.group&&(e=Ge(this.group.calcTransformMatrix(!1),e)),this.matrixCache={key:n,value:e},e)}calcOwnMatrix(){let t=this.transformMatrixKey(!0),e=this.ownMatrixCache;if(e&&e.key===t)return e.value;let n=this.getRelativeCenterPoint(),i={angle:this.angle,translateX:n.x,translateY:n.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY},r=S0(i);return this.ownMatrixCache={key:t,value:r},r}_getNonTransformedDimensions(){return new st(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(t){return this._getTransformedDimensions(t).transform(this.getViewportTransform(),!0).scalarAdd(2*this.padding)}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=G({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth},t),n=e.strokeWidth,i=n,r=0;this.strokeUniform&&(i=0,r=n);let o=e.width+i,a=e.height+i,l;return l=e.skewX===0&&e.skewY===0?new st(o*e.scaleX,a*e.scaleY):lu(o,a,fl(e)),l.scalarAdd(r)}translateToGivenOrigin(t,e,n,i,r){let o=t.x,a=t.y,l=Je(i)-Je(e),c=Je(r)-Je(n);if(l||c){let h=this._getTransformedDimensions();o+=l*h.x,a+=c*h.y}return new st(o,a)}translateToCenterPoint(t,e,n){if(e===ae&&n===ae)return t;let i=this.translateToGivenOrigin(t,e,n,ae,ae);return this.angle?i.rotate(Ve(this.angle),t):i}translateToOriginPoint(t,e,n){let i=this.translateToGivenOrigin(t,ae,ae,e,n);return this.angle?i.rotate(Ve(this.angle),t):i}getCenterPoint(){let t=this.getRelativeCenterPoint();return this.group?Tn(t,this.group.calcTransformMatrix()):t}getRelativeCenterPoint(){return this.translateToCenterPoint(new st(this.left,this.top),this.originX,this.originY)}getPointByOrigin(t,e){return this.translateToOriginPoint(this.getRelativeCenterPoint(),t,e)}setPositionByOrigin(t,e,n){let i=this.translateToCenterPoint(t,e,n),r=this.translateToOriginPoint(i,this.originX,this.originY);this.set({left:r.x,top:r.y})}_getLeftTopCoords(){return this.translateToOriginPoint(this.getRelativeCenterPoint(),Re,Bn)}},tM=["type"],eM=["extraParam"],_s=class Ah extends yf{static getDefaults(){return Ah.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){$s("warn","Setting type has no effect",t)}constructor(t){super(),X(this,"_cacheContext",null),Object.assign(this,Ah.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=es(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,i=ye.maxCacheSideLimit,r=ye.minCacheSideLimit;if(e<=i&&n<=i&&e*n<=ye.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let o=e/n,[a,l]=nl.limitDimsByArea(o),c=Zr(r,a,i),h=Zr(r,l,i);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,i=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(i+2),zoomX:t.x,zoomY:t.y,x:n,y:i}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:i,zoomX:r,zoomY:o,x:a,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||i!==t.height,h=this.zoomX!==r||this.zoomY!==o;if(!t||!e)return!1;if(c||h){n!==t.width||i!==t.height?(t.width=n,t.height=i):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let u=a/2,d=l/2;return this.cacheTranslationX=Math.round(t.width/2-u)+u,this.cacheTranslationY=Math.round(t.height/2-d)+d,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,o),this.zoomX=r,this.zoomY=o,!0}return!1}setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new st(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=Zo(this.calcTransformMatrix());return new st(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!==On&&t!==Qn||(e=this._constrainScale(e)),t===On&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof Xr||(e=new Xr(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r}=this,{width:o,height:a}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r,width:o,height:a,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst===Vn&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let i=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=i,this.stroke=r}createClipPathLayer(t,e){let n=ti(e),i=n.getContext("2d");if(i.translate(e.cacheTranslationX,e.cacheTranslationY),i.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach((r=>{r.transform(i)})),e.parentClipPaths.push(t),t.absolutePositioned){let r=$n(this.calcTransformMatrix());i.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(i),t.drawObject(i,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let i=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,i)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,hi(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,e){let{fill:n}=e;n&&(hi(n)?(t.fillStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.fillStyle=n)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,i=this.getCanvasRetinaScaling(),[r,,,o]=n?.viewportTransform||In,a=r*i,l=o*i,c=e.nonScaling?new st(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*ye.browserShadowBlurConstant*(a+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*a*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!hi(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,i=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,i,r):t.transform(1,0,0,1,i,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:i,offsetY:r}}_renderPaintInOrder(t){this.paintFirst===Vn?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),o=i.x/this.scaleX/r,a=i.y/this.scaleY/r,l=ti({width:Math.ceil(o),height:Math.ceil(a)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,a),c.lineTo(0,a),c.closePath(),c.translate(o/2,a/2),c.scale(i.zoomX/this.scaleX/r,i.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/i.zoomX,r*this.scaleY/i.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))!==null&&n!==void 0?n:"")}_findCenterFromElement(){return new st(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(Ut.getClass("image"))(e)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Zf(this),n=this.group,i=this.shadow,r=Math.abs,o=t.enableRetinaScaling?h0():1,a=(t.multiplier||1)*o,l=t.canvasProvider||(S=>new er(S,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&E0(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&pf(this,this.getViewportTransform()),this.setCoords();let c=es(),h=this.getBoundingRect(),u=this.shadow,d=new st;if(u){let S=u.blur,P=u.nonScaling?new st(1,1):this.getObjectScaling();d.x=2*Math.round(r(u.offsetX)+S)*r(P.x),d.y=2*Math.round(r(u.offsetY)+S)*r(P.y)}let f=h.width+d.x,p=h.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let x=l(c);t.format==="jpeg"&&(x.backgroundColor="#fff"),this.setPositionByOrigin(new st(x.width/2,x.height/2),ae,ae);let m=this.canvas;x._objects=[this],this.set("canvas",x),this.setCoords();let _=x.toCanvasElement(a||1,t);return this.set("canvas",m),this.shadow=i,n&&(this.group=n),this.set(e),this.setCoords(),x._objects=[],x.destroy(),_}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wf(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xf(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.includes(this.constructor.type)||e.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:i}=this;if(e){let{x:r,y:o}=this.getRelativeCenterPoint();this.originX=ae,this.originY=ae,this.left=r,this.top=o}if(this.set("angle",t),e){let{x:r,y:o}=this.translateToOriginPoint(this.getRelativeCenterPoint(),n,i);this.left=r,this.top=o,this.originX=n,this.originY=i}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){Oh.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&ts().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce(((n,i)=>{let[r,o]=i;return n[r]=this._animate(r,o,e),n}),{})}_animate(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.split("."),r=this.constructor.colorProperties.includes(i[i.length-1]),{abort:o,startValue:a,onChange:l,onComplete:c}=n,h=G(G({},n),{},{target:this,startValue:a??i.reduce(((u,d)=>u[d]),this),endValue:e,abort:o?.bind(this),onChange:(u,d,f)=>{i.reduce(((p,x,m)=>(m===i.length-1&&(p[x]=u),p[x])),this),l&&l(u,d,f)},onComplete:(u,d,f)=>{this.setCoords(),c&&c(u,d,f)}});return r?V0(h):tp(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let i,r=0;r<e.length;r++){if(i=e[r],i===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let o=0;o<n.length;o++){if(this===n[o])return{fork:[],otherFork:[t,...n.slice(0,o)],common:[this,...e]};if(i===n[o])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,o)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let i=e.fork.pop(),r=e.otherFork.pop(),o=n._objects.indexOf(i),a=n._objects.indexOf(r);return o>-1&&o>a}toObject(){let t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).concat(Ah.customProperties,this.constructor.customProperties||[]),e,n=ye.NUM_FRACTION_DIGITS,{clipPath:i,fill:r,stroke:o,shadow:a,strokeDashArray:l,left:c,top:h,originX:u,originY:d,width:f,height:p,strokeWidth:x,strokeLineCap:m,strokeDashOffset:_,strokeLineJoin:S,strokeUniform:P,strokeMiterLimit:w,scaleX:R,scaleY:D,angle:g,flipX:v,flipY:E,opacity:C,visible:I,backgroundColor:F,fillRule:z,paintFirst:L,globalCompositeOperation:j,skewX:q,skewY:U}=this;i&&!i.excludeFromExport&&(e=i.toObject(t.concat("inverted","absolutePositioned")));let J=ot=>Oe(ot,n),K=G(G({},$r(this,t)),{},{type:this.constructor.type,version:hf,originX:u,originY:d,left:J(c),top:J(h),width:J(f),height:J(p),fill:Dg(r)?r.toObject():r,stroke:Dg(o)?o.toObject():o,strokeWidth:J(x),strokeDashArray:l&&l.concat(),strokeLineCap:m,strokeDashOffset:_,strokeLineJoin:S,strokeUniform:P,strokeMiterLimit:J(w),scaleX:J(R),scaleY:J(D),angle:J(g),flipX:v,flipY:E,opacity:J(C),shadow:a&&a.toObject(),visible:I,backgroundColor:F,fillRule:z,paintFirst:L,globalCompositeOperation:j,skewX:J(q),skewY:J(U)},e?{clipPath:e}:null);return this.includeDefaultValues?K:this._removeDefaultValues(K)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return qf(t,((i,r)=>{if(r===Re||r===Bn||r==="type")return!0;let o=n[r];return i!==o&&!(Array.isArray(i)&&Array.isArray(o)&&i.length===0&&o.length===0)}))}toString(){return"#<".concat(this.constructor.type,">")}static _fromObject(t){let e=ke(t,tM),n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{extraParam:i}=n,r=ke(n,eM);return pl(e,r).then((o=>i?(delete o[i],new this(e[i],o)):new this(o)))}static fromObject(t,e){return this._fromObject(t,e)}};X(_s,"stateProperties",j1),X(_s,"cacheProperties",bs),X(_s,"ownDefaults",Y1),X(_s,"type","FabricObject"),X(_s,"colorProperties",[Qe,Vn,"backgroundColor"]),X(_s,"customProperties",[]),Ut.setClass(_s),Ut.setClass(_s,"object");var nr=(s,t,e)=>(n,i,r,o)=>{let a=t(n,i,r,o);return a&&Jf(s,G(G({},Kf(n,i,r,o)),e)),a};function Qr(s){return(t,e,n,i)=>{let{target:r,originX:o,originY:a}=e,l=r.getRelativeCenterPoint(),c=r.translateToOriginPoint(l,o,a),h=s(t,e,n,i);return r.setPositionByOrigin(c,e.originX,e.originY),h}}var Sf=nr(al,Qr(((s,t,e,n)=>{let i=cu(t,t.originX,t.originY,e,n);if(Je(t.originX)===Je(ae)||Je(t.originX)===Je(je)&&i.x<0||Je(t.originX)===Je(Re)&&i.x>0){let{target:r}=t,o=r.strokeWidth/(r.strokeUniform?r.scaleX:1),a=R0(t)?2:1,l=r.width,c=Math.abs(i.x*a/r.scaleX)-o;return r.set("width",Math.max(c,1)),l!==r.width}return!1})));function G0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?Vn:Qe,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h,u=t,d=e;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",r>o?(h=r,s.scale(1,o/r),d=e*r/o):o>r?(h=o,s.scale(r/o,1),u=t*o/r):h=r,s.beginPath(),s.arc(u,d,h/2,0,Ss,!1),s[l](),c&&s.stroke(),s.restore()}function H0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?Vn:Qe,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h=r/2,u=o/2;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",s.translate(t,e);let d=i.getTotalAngle();s.rotate(Ve(d)),s["".concat(l,"Rect")](-h,-u,r,o),c&&s.strokeRect(-h,-u,r,o),s.restore()}var Pn=class{constructor(t){X(this,"visible",!0),X(this,"actionName",ru),X(this,"angle",0),X(this,"x",0),X(this,"y",0),X(this,"offsetX",0),X(this,"offsetY",0),X(this,"sizeX",0),X(this,"sizeY",0),X(this,"touchSizeX",0),X(this,"touchSizeY",0),X(this,"cursorStyle","crosshair"),X(this,"withConnection",!1),Object.assign(this,t)}shouldActivate(t,e,n,i){var r;let{tl:o,tr:a,br:l,bl:c}=i;return((r=e.canvas)===null||r===void 0?void 0:r.getActiveObject())===e&&e.isControlVisible(t)&&jr.isPointInPolygon(n,[o,a,l,c])}getActionHandler(t,e,n){return this.actionHandler}getMouseDownHandler(t,e,n){return this.mouseDownHandler}getMouseUpHandler(t,e,n){return this.mouseUpHandler}cursorStyleHandler(t,e,n){return e.cursorStyle}getActionName(t,e,n){return e.actionName}getVisibility(t,e){var n,i;return(n=(i=t._controlsVisibility)===null||i===void 0?void 0:i[e])!==null&&n!==void 0?n:this.visible}setVisibility(t,e,n){this.visible=t}positionHandler(t,e,n,i){return new st(this.x*t.x+this.offsetX,this.y*t.y+this.offsetY).transform(e)}calcCornerCoords(t,e,n,i,r,o){let a=ou([sa(n,i),Kr({angle:t}),au((r?this.touchSizeX:this.sizeX)||e,(r?this.touchSizeY:this.sizeY)||e)]);return{tl:new st(-.5,-.5).transform(a),tr:new st(.5,-.5).transform(a),br:new st(.5,.5).transform(a),bl:new st(-.5,.5).transform(a)}}render(t,e,n,i,r){((i=i||{}).cornerStyle||r.cornerStyle)==="circle"?G0.call(this,t,e,n,i,r):H0.call(this,t,e,n,i,r)}},W0=(s,t,e)=>e.lockRotation?kh:t.cursorStyle,X0=nr(d0,Qr(((s,t,e,n)=>{let{target:i,ex:r,ey:o,theta:a,originX:l,originY:c}=t,h=i.translateToOriginPoint(i.getRelativeCenterPoint(),l,c);if(Di(i,"lockRotation"))return!1;let u=Math.atan2(o-h.y,r-h.x),d=Math.atan2(n-h.y,e-h.x),f=ns(d-u+a);if(i.snapAngle&&i.snapAngle>0){let x=i.snapAngle,m=i.snapThreshold||x,_=Math.ceil(f/x)*x,S=Math.floor(f/x)*x;Math.abs(f-S)<m?f=S:Math.abs(f-_)<m&&(f=_)}f<0&&(f=360+f),f%=360;let p=i.angle!==f;return i.angle=f,p})));function j0(s,t){let e=t.canvas,n=s[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function Y0(s,t,e){let n=Di(s,"lockScalingX"),i=Di(s,"lockScalingY");if(n&&i||!t&&(n||i)&&e||n&&t==="x"||i&&t==="y")return!0;let{width:r,height:o,strokeWidth:a}=s;return r===0&&a===0&&t!=="y"||o===0&&a===0&&t!=="x"}var nM=["e","se","s","sw","w","nw","n","ne","e"],zo=(s,t,e)=>{let n=j0(s,e);if(Y0(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",n))return kh;let i=P0(e,t);return"".concat(nM[i],"-resize")};function ep(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},r=t.target,o=i.by,a=j0(s,r),l,c,h,u,d,f;if(Y0(r,o,a))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=cu(t,t.originX,t.originY,e,n),d=o!=="y"?Math.sign(l.x||t.signX||1):1,f=o!=="x"?Math.sign(l.y||t.signY||1):1,t.signX||(t.signX=d),t.signY||(t.signY=f),Di(r,"lockScalingFlip")&&(t.signX!==d||t.signY!==f))return!1;if(u=r._getTransformedDimensions(),a&&!o){let m=Math.abs(l.x)+Math.abs(l.y),{original:_}=t,S=m/(Math.abs(u.x*_.scaleX/r.scaleX)+Math.abs(u.y*_.scaleY/r.scaleY));c=_.scaleX*S,h=_.scaleY*S}else c=Math.abs(l.x*r.scaleX/u.x),h=Math.abs(l.y*r.scaleY/u.y);R0(t)&&(c*=2,h*=2),t.signX!==d&&o!=="y"&&(t.originX=Fg(t.originX),c*=-1,t.signX=d),t.signY!==f&&o!=="x"&&(t.originY=Fg(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,x=r.scaleY;return o?(o==="x"&&r.set(On,c),o==="y"&&r.set(Qn,h)):(!Di(r,"lockScalingX")&&r.set(On,c),!Di(r,"lockScalingY")&&r.set(Qn,h)),p!==r.scaleX||x!==r.scaleY}var tl=nr(su,Qr(((s,t,e,n)=>ep(s,t,e,n)))),q0=nr(su,Qr(((s,t,e,n)=>ep(s,t,e,n,{by:"x"})))),Z0=nr(su,Qr(((s,t,e,n)=>ep(s,t,e,n,{by:"y"})))),iM=["target","ex","ey","skewingSide"],nf={x:{counterAxis:"y",scale:On,skew:na,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:Qn,skew:ia,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},sM=["ns","nesw","ew","nwse"],J0=(s,t,e)=>{if(t.x!==0&&Di(e,"lockSkewingY")||t.y!==0&&Di(e,"lockSkewingX"))return kh;let n=P0(e,t)%4;return"".concat(sM[n],"-resize")};function K0(s,t,e,n,i){let{target:r}=e,{counterAxis:o,origin:a,lockSkewing:l,skew:c,flip:h}=nf[s];if(Di(r,l))return!1;let{origin:u,flip:d}=nf[o],f=Je(e[u])*(r[d]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),x=.5*-((r[c]===0&&cu(e,ae,ae,n,i)[s]>0||r[c]>0?1:-1)*p)+.5;return nr(f0,Qr(((_,S,P,w)=>(function(R,D,g){let{target:v,ex:E,ey:C,skewingSide:I}=D,F=ke(D,iM),{skew:z}=nf[R],L=g.subtract(new st(E,C)).divide(new st(v.scaleX,v.scaleY))[R],j=v[z],q=F[z],U=Math.tan(Ve(q)),J=R==="y"?v._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:v._getTransformedDimensions({scaleX:1,scaleY:1}).y,K=2*L*I/Math.max(J,1)+U,ot=ns(Math.atan(K));v.set(z,ot);let dt=j!==v[z];if(dt&&R==="y"){let{skewX:Pt,scaleX:At}=v,Q=v._getTransformedDimensions({skewY:j}),wt=v._getTransformedDimensions(),Ct=Pt!==0?Q.x/wt.x:1;Ct!==1&&v.set(On,Ct*At)}return dt})(s,S,new st(P,w)))))(t,G(G({},e),{},{[a]:x,skewingSide:p}),n,i)}var $0=(s,t,e,n)=>K0("x",s,t,e,n),Q0=(s,t,e,n)=>K0("y",s,t,e,n);function du(s,t){return s[t.canvas.altActionKey]}var el=(s,t,e)=>{let n=du(s,e);return t.x===0?n?na:Qn:t.y===0?n?ia:On:""},Er=(s,t,e)=>du(s,e)?J0(0,t,e):zo(s,t,e),bf=(s,t,e,n)=>du(s,t.target)?Q0(s,t,e,n):q0(s,t,e,n),Mf=(s,t,e,n)=>du(s,t.target)?$0(s,t,e,n):Z0(s,t,e,n),np=()=>({ml:new Pn({x:-.5,y:0,cursorStyleHandler:Er,actionHandler:bf,getActionName:el}),mr:new Pn({x:.5,y:0,cursorStyleHandler:Er,actionHandler:bf,getActionName:el}),mb:new Pn({x:0,y:.5,cursorStyleHandler:Er,actionHandler:Mf,getActionName:el}),mt:new Pn({x:0,y:-.5,cursorStyleHandler:Er,actionHandler:Mf,getActionName:el}),tl:new Pn({x:-.5,y:-.5,cursorStyleHandler:zo,actionHandler:tl}),tr:new Pn({x:.5,y:-.5,cursorStyleHandler:zo,actionHandler:tl}),bl:new Pn({x:-.5,y:.5,cursorStyleHandler:zo,actionHandler:tl}),br:new Pn({x:.5,y:.5,cursorStyleHandler:zo,actionHandler:tl}),mtr:new Pn({x:0,y:-.5,actionHandler:X0,cursorStyleHandler:W0,offsetY:-40,withConnection:!0,actionName:Gf})}),t_=()=>({mr:new Pn({x:.5,y:0,actionHandler:Sf,cursorStyleHandler:Er,actionName:al}),ml:new Pn({x:-.5,y:0,actionHandler:Sf,cursorStyleHandler:Er,actionName:al})}),e_=()=>G(G({},np()),t_()),Wh=class s extends _s{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,this.constructor.createControls(),s.ownDefaults),this.setOptions(t)}static createControls(){return{controls:np()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,i=e.action;if(this===n&&i&&i.startsWith(ru))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let i=n.length-1;i>=0;i--){let[r,o]=n[i],a=this.controls[r];if(a.shouldActivate(r,this,t,e?o.touchCorner:o.corner))return this.__corner=r,{key:r,control:a,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=this.getCenterPoint(),n=sa(e.x,e.y),i=Kr({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}),r=Ge(n,i),o=Ge(t,r),a=Ge(o,[1/t[0],0,0,1/t[3],0,0]),l=this.group?Zo(this.calcTransformMatrix()):void 0;l&&(l.scaleX=Math.abs(l.scaleX),l.scaleY=Math.abs(l.scaleY));let c=this._calculateCurrentDimensions(l),h={};return this.forEachControl(((u,d)=>{let f=u.positionHandler(c,a,this,u);h[d]=Object.assign(f,this._calcCornerCoords(u,f))})),h}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),i=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/i[0],1/i[3]),t.rotate(Ve(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=G({hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray},n);t.save(),t.strokeStyle=i.borderColor,this._setLineDash(t,i.borderDashArray),this.strokeBorders(t,e),i.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{hasBorders:n,hasControls:i}=this,r=G({hasBorders:n,hasControls:i},e),o=this.getViewportTransform(),a=r.hasBorders,l=r.hasControls,c=Ge(o,this.calcTransformMatrix()),h=Zo(c);t.save(),t.translate(h.translateX,h.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(h.angle-=180),t.rotate(Ve(this.group?h.angle:this.angle)),a&&this.drawBorders(t,h,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let i;if(n&&n.forActiveSelection||this.group){let r=lu(this.width,this.height,fl(e)),o=this.isStrokeAccountedForInDimensions()?Hf:(this.strokeUniform?new st().scalarAdd(this.canvas?this.canvas.getZoom():1):new st(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);i=r.add(o).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else i=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,i,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl(((i,r)=>{i.withConnection&&i.getVisibility(this,r)&&(n=!0,t.moveTo(i.x*e.x,i.y*e.y),t.lineTo(i.x*e.x+i.offsetX,i.y*e.y+i.offsetY))})),n&&t.stroke()}drawControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:i,cornerDashArray:r,cornerColor:o}=this,a=G({cornerStrokeColor:i,cornerDashArray:r,cornerColor:o},e);t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=a.cornerColor,this.transparentCorners||(t.strokeStyle=a.cornerStrokeColor),this._setLineDash(t,a.cornerDashArray),this.forEachControl(((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,a,this)}})),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.entries(t).forEach((e=>{let[n,i]=e;return this.setControlVisible(n,i)}))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let i=this.width+4,r=this.height+4;return e.clearRect(-i/2,-r/2,i,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function n_(s,t){return t.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{n!=="constructor"&&Object.defineProperty(s.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))}))})),s}X(Wh,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var ln=class extends Wh{};n_(ln,[Bh]),Ut.setClass(ln),Ut.setClass(ln,"object");var i_=(s,t,e,n)=>{let i=2*(n=Math.round(n))+1,{data:r}=s.getImageData(t-n,e-n,i,i);for(let o=3;o<r.length;o+=4)if(r[o]>0)return!1;return!0},Xh=class{constructor(t){this.options=t,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new st(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new st(1/this.options.scaleX,1/this.options.scaleY):new st(1,1)}createSideVector(t,e){let n=Vh(t,e);return this.options.strokeUniform?n.multiply(this.scale):n}projectOrthogonally(t,e,n){return this.applySkew(t.add(this.calcOrthogonalProjection(t,e,n)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(t){let e=new st(t);return e.y+=e.x*Math.tan(Ve(this.options.skewY)),e.x+=e.y*Math.tan(Ve(this.options.skewX)),e}scaleUnitVector(t,e){return t.multiply(this.strokeUniformScalar).scalarMultiply(e)}},rM=new st,jh=class s extends Xh{static getOrthogonalRotationFactor(t,e){let n=e?Hh(t,e):U0(t);return Math.abs(n)<Qs?-1:1}constructor(t,e,n,i){super(i),X(this,"AB",void 0),X(this,"AC",void 0),X(this,"alpha",void 0),X(this,"bisector",void 0),this.A=new st(t),this.B=new st(e),this.C=new st(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=Hh(this.AB,this.AC),this.bisector=uu($f(this.AB.eq(rM)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e),r=Qf(i),o=s.getOrthogonalRotationFactor(r,this.bisector);return this.scaleUnitVector(r,n*o)}projectBevel(){let t=[];return(this.alpha%Ss==0?[this.B]:[this.B,this.C]).forEach((e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))})),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),i=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?Gh(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return Gh(i)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(i))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],i=new st(s.getOrthogonalRotationFactor(this.bisector),s.getOrthogonalRotationFactor(new st(this.bisector.y,this.bisector.x)));return[new st(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),new st(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)].forEach((r=>{mf(r,t,e)&&n.push(this.A.add(r))})),n}projectRoundWithSkew(t,e){let n=[],{skewX:i,skewY:r,scaleX:o,scaleY:a,strokeUniform:l}=this.options,c=new st(Math.tan(Ve(i)),Math.tan(Ve(r))),h=this.strokeProjectionMagnitude,u=l?h/a/Math.sqrt(1/a**2+1/o**2*c.y**2):h/Math.sqrt(1+c.y**2),d=new st(Math.sqrt(Math.max(h**2-u**2,0)),u),f=l?h/Math.sqrt(1+c.x**2*(1/a)**2/(1/o+1/o*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new st(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map((x=>this.applySkew(l?x.multiply(this.strokeUniformScalar):x))).forEach((x=>{mf(x,t,e)&&n.push(this.applySkew(this.A).add(x))})),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%Ss==0,n=this.applySkew(this.A),i=t[e?0:2].subtract(n),r=t[e?1:0].subtract(n),o=e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)),a=Yo(i,o)>0,l=a?i:r,c=a?r:i;return this.isSkewed()?t.push(...this.projectRoundWithSkew(l,c)):t.push(...this.projectRoundNoSkew(l,c)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector})))}},Yh=class extends Xh{constructor(t,e,n){super(n),this.A=new st(t),this.T=new st(e)}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e);return this.scaleUnitVector(Qf(i),n)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let t=[];if(!this.isSkewed()&&this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.applySkew(this.A.add(e)),this.applySkew(this.A.subtract(e)))}else t.push(...new jh(this.A,this.T,this.T,this.options).projectRound());return t}projectSquare(){let t=[];if(this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.A.add(e),this.A.subtract(e))}else{let e=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),n=this.scaleUnitVector(uu(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),i=this.A.add(n);t.push(i.add(e),i.subtract(e))}return t.map((e=>this.applySkew(e)))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t})))}},s_=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=[];if(s.length===0)return n;let i=s.reduce(((r,o)=>(r[r.length-1].eq(o)||r.push(new st(o)),r)),[new st(s[0])]);if(i.length===1)e=!0;else if(!e){let r=i[0],o=((a,l)=>{for(let c=a.length-1;c>=0;c--)if(l(a[c],c,a))return c;return-1})(i,(a=>!a.eq(r)));i.splice(o+1)}return i.forEach(((r,o,a)=>{let l,c;o===0?(c=a[1],l=e?r:a[a.length-1]):o===a.length-1?(l=a[o-1],c=e?r:a[0]):(l=a[o-1],c=a[o+1]),e&&a.length===1?n.push(...new Yh(r,r,t).project()):!e||o!==0&&o!==a.length-1?n.push(...new jh(r,l,c,t).project()):n.push(...new Yh(r,o===0?c:l,t).project())})),n},ip=s=>{let t={};return Object.keys(s).forEach((e=>{t[e]={},Object.keys(s[e]).forEach((n=>{t[e][n]=G({},s[e][n])}))})),t},r_=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$a,fu=s=>{if($a||$a||($a="Intl"in dl()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),$a){let t=$a.segment(s);return Array.from(t).map((e=>{let{segment:n}=e;return n}))}return oM(s)},oM=s=>{let t=[];for(let e,n=0;n<s.length;n++)(e=aM(s,n))!==!1&&t.push(e);return t},aM=(s,t)=>{let e=s.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return s.charAt(t);if(55296<=e&&e<=56319){if(s.length<=t+1)throw"High surrogate without following low surrogate";let i=s.charCodeAt(t+1);if(56320>i||i>57343)throw"High surrogate without following low surrogate";return s.charAt(t)+s.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=s.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},lM=Object.freeze({__proto__:null,capitalize:function(s){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return"".concat(s.charAt(0).toUpperCase()).concat(t?s.slice(1):s.slice(1).toLowerCase())},escapeXml:r_,graphemeSplit:fu}),pu=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.fill!==t.fill||s.stroke!==t.stroke||s.strokeWidth!==t.strokeWidth||s.fontSize!==t.fontSize||s.fontFamily!==t.fontFamily||s.fontWeight!==t.fontWeight||s.fontStyle!==t.fontStyle||s.textDecorationThickness!==t.textDecorationThickness||s.textBackgroundColor!==t.textBackgroundColor||s.deltaY!==t.deltaY||e&&(s.overline!==t.overline||s.underline!==t.underline||s.linethrough!==t.linethrough)},o_=(s,t)=>{let e=t.split(`
`),n=[],i=-1,r={};s=ip(s);for(let o=0;o<e.length;o++){let a=fu(e[o]);if(s[o])for(let l=0;l<a.length;l++){i++;let c=s[o][l];c&&Object.keys(c).length>0&&(pu(r,c,!0)?n.push({start:i,end:i+1,style:c}):n[n.length-1].end++),r=c||{}}else i+=a.length,r={}}return n},a_=(s,t)=>{if(!Array.isArray(s))return ip(s);let e=t.split(Vf),n={},i=-1,r=0;for(let o=0;o<e.length;o++){let a=fu(e[o]);for(let l=0;l<a.length;l++)i++,s[r]&&s[r].start<=i&&i<s[r].end&&(n[o]=n[o]||{},n[o][l]=G({},s[r].style),i===s[r].end-1&&r++)}return n},ir=["display","transform",Qe,"fill-opacity","fill-rule","opacity",Vn,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function qg(s,t){let e=s.nodeName,n=s.getAttribute("class"),i=s.getAttribute("id"),r="(?![a-zA-Z\\-]+)",o;if(o=new RegExp("^"+e,"i"),t=t.replace(o,""),i&&t.length&&(o=new RegExp("#"+i+r,"i"),t=t.replace(o,"")),n&&t.length){let a=n.split(" ");for(let l=a.length;l--;)o=new RegExp("\\."+a[l]+r,"i"),t=t.replace(o,"")}return t.length===0}function cM(s,t){let e=!0,n=qg(s,t.pop());return n&&t.length&&(e=(function(i,r){let o,a=!0;for(;i.parentElement&&i.parentElement.nodeType===1&&r.length;)a&&(o=r.pop()),a=qg(i=i.parentElement,o);return r.length===0})(s,t)),n&&e&&t.length===0}var hM=s=>{var t;return(t=W1[s])!==null&&t!==void 0?t:s},uM=new RegExp("(".concat(Ri,")"),"gi"),dM=s=>Uh(s.replace(uM," $1 ").replace(/,/gi," ")),Zg,Jg,Kg,$g,Qg,t0,e0,Dn="(".concat(Ri,")"),fM=String.raw(Zg||(Zg=is(["(skewX)(",")"],["(skewX)\\(","\\)"])),Dn),pM=String.raw(Jg||(Jg=is(["(skewY)(",")"],["(skewY)\\(","\\)"])),Dn),mM=String.raw(Kg||(Kg=is(["(rotate)(","(?: "," ",")?)"],["(rotate)\\(","(?: "," ",")?\\)"])),Dn,Dn,Dn),gM=String.raw($g||($g=is(["(scale)(","(?: ",")?)"],["(scale)\\(","(?: ",")?\\)"])),Dn,Dn),_M=String.raw(Qg||(Qg=is(["(translate)(","(?: ",")?)"],["(translate)\\(","(?: ",")?\\)"])),Dn,Dn),xM=String.raw(t0||(t0=is(["(matrix)("," "," "," "," "," ",")"],["(matrix)\\("," "," "," "," "," ","\\)"])),Dn,Dn,Dn,Dn,Dn,Dn),sp="(?:".concat(xM,"|").concat(_M,"|").concat(mM,"|").concat(gM,"|").concat(fM,"|").concat(pM,")"),vM="(?:".concat(sp,"*)"),yM=String.raw(e0||(e0=is(["^s*(?:","?)s*$"],["^\\s*(?:","?)\\s*$"])),vM),SM=new RegExp(yM),bM=new RegExp(sp),MM=new RegExp(sp,"g");function wf(s){let t=[];if(!(s=dM(s).replace(/\s*([()])\s*/gi,"$1"))||s&&!SM.test(s))return[...In];for(let e of s.matchAll(MM)){let n=bM.exec(e[0]);if(!n)continue;let i=In,r=n.filter((p=>!!p)),[,o,...a]=r,[l,c,h,u,d,f]=a.map((p=>parseFloat(p)));switch(o){case"translate":i=sa(l,c);break;case Gf:i=Kr({angle:l},{x:c,y:h});break;case ru:i=au(l,c);break;case na:i=jf(l);break;case ia:i=Yf(l);break;case"matrix":i=[l,c,h,u,d,f]}t.push(i)}return ou(t)}function wM(s,t,e,n){let i=Array.isArray(t),r,o=t;if(s!==Qe&&s!==Vn||t!==zn){if(s==="strokeUniform")return t==="non-scaling-stroke";if(s==="strokeDashArray")o=t===zn?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(s==="transformMatrix")o=e&&e.transformMatrix?Ge(e.transformMatrix,wf(t)):wf(t);else if(s==="visible")o=t!==zn&&t!=="hidden",e&&e.visible===!1&&(o=!1);else if(s==="opacity")o=parseFloat(t),e&&e.opacity!==void 0&&(o*=e.opacity);else if(s==="textAnchor")o=t==="start"?Re:t==="end"?je:ae;else if(s==="charSpacing"||s===qr)r=Wr(t,n)/n*1e3;else if(s==="paintFirst"){let a=t.indexOf(Qe),l=t.indexOf(Vn);o=Qe,(a>-1&&l>-1&&l<a||a===-1&&l>-1)&&(o=Vn)}else{if(s==="href"||s==="xlink:href"||s==="font"||s==="id")return t;if(s==="imageSmoothing")return t==="optimizeQuality";r=i?t.map(Wr):Wr(t,n)}}else o="";return!i&&isNaN(r)?o:r}function TM(s,t){let e=s.match(H1);if(!e)return;let n=e[1],i=e[3],r=e[4],o=e[5],a=e[6];n&&(t.fontStyle=n),i&&(t.fontWeight=isNaN(parseFloat(i))?i:parseFloat(i)),r&&(t.fontSize=Wr(r)),a&&(t.fontFamily=a),o&&(t.lineHeight=o==="normal"?1:o)}function CM(s,t){s.replace(/;\s*$/,"").split(";").forEach((e=>{if(!e)return;let[n,i]=e.split(":");t[n.trim().toLowerCase()]=i.trim()}))}function EM(s){let t={},e=s.getAttribute("style");return e&&(typeof e=="string"?CM(e,t):(function(n,i){Object.entries(n).forEach((r=>{let[o,a]=r;a!==void 0&&(i[o.toLowerCase()]=a)}))})(e,t)),t}var AM={stroke:"strokeOpacity",fill:"fillOpacity"};function Ms(s,t,e){if(!s)return{};let n,i={},r=zf;s.parentNode&&Hg.test(s.parentNode.nodeName)&&(i=Ms(s.parentElement,t,e),i.fontSize&&(n=r=Wr(i.fontSize)));let o=G(G(G({},t.reduce(((c,h)=>{let u=s.getAttribute(h);return u&&(c[h]=u),c}),{})),(function(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u={};for(let d in h)cM(c,d.split(" "))&&(u=G(G({},u),h[d]));return u})(s,e)),EM(s));o[Qd]&&s.setAttribute(Qd,o[Qd]),o[$d]&&(n=Wr(o[$d],r),o[$d]="".concat(n));let a={};for(let c in o){let h=hM(c),u=wM(h,o[c],i,n);a[h]=u}a&&a.font&&TM(a.font,a);let l=G(G({},i),a);return Hg.test(s.nodeName)?l:(function(c){let h=ln.getDefaults();return Object.entries(AM).forEach((u=>{let[d,f]=u;if(c[f]===void 0||c[d]==="")return;if(c[d]===void 0){if(!h[d])return;c[d]=h[d]}if(c[d].indexOf("url(")===0)return;let p=new Ln(c[d]);c[d]=p.setAlpha(Oe(p.getAlpha()*c[f],2)).toRgba()})),c})(l)}var RM=["left","top","width","height","visible"],l_=["rx","ry"],Kn=class s extends ln{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,i=-e/2,r=-n/2,o=this.rx?Math.min(this.rx,e/2):0,a=this.ry?Math.min(this.ry,n/2):0,l=o!==0||a!==0;t.beginPath(),t.moveTo(i+o,r),t.lineTo(i+e-o,r),l&&t.bezierCurveTo(i+e-qs*o,r,i+e,r+qs*a,i+e,r+a),t.lineTo(i+e,r+n-a),l&&t.bezierCurveTo(i+e,r+n-qs*a,i+e-qs*o,r+n,i+e-o,r+n),t.lineTo(i+o,r+n),l&&t.bezierCurveTo(i+qs*o,r+n,i,r+n-qs*a,i,r+n-a),t.lineTo(i,r+a),l&&t.bezierCurveTo(i,r+qs*a,i+qs*o,r,i+o,r),t.closePath(),this._renderPaintInOrder(t)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...l_,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:i}=this;return["<rect ","COMMON_PARTS",'x="'.concat(-t/2,'" y="').concat(-e/2,'" rx="').concat(n,'" ry="').concat(i,'" width="').concat(t,'" height="').concat(e,`" />
`)]}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,width:a=0,height:l=0,visible:c=!0}=i,h=ke(i,RM);return new this(G(G(G({},e),h),{},{left:r,top:o,width:a,height:l,visible:!!(c&&a&&l)}))}};X(Kn,"type","Rect"),X(Kn,"cacheProperties",[...bs,...l_]),X(Kn,"ownDefaults",{rx:0,ry:0}),X(Kn,"ATTRIBUTE_NAMES",[...ir,"x","y","rx","ry","width","height"]),Ut.setClass(Kn),Ut.setSVGClass(Kn);var xs="initialization",qh="added",rp="removed",Zh="imperative",c_=(s,t)=>{let{strokeUniform:e,strokeWidth:n,width:i,height:r,group:o}=t,a=o&&o!==s?ml(o.calcTransformMatrix(),s.calcTransformMatrix()):null,l=a?t.getRelativeCenterPoint().transform(a):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?A0(new st(n,n),void 0,s.calcTransformMatrix()):Hf,u=!e&&c?n:0,d=lu(i+u,r+u,ou([a,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(d),l.add(d)]},Qo=class{calcLayoutResult(t,e){if(this.shouldPerformLayout(t))return this.calcBoundingBox(e,t)}shouldPerformLayout(t){let{type:e,prevStrategy:n,strategy:i}=t;return e===xs||e===Zh||!!n&&i!==n}shouldLayoutClipPath(t){let{type:e,target:{clipPath:n}}=t;return e!==xs&&n&&!n.absolutePositioned}getInitialSize(t,e){return e.size}calcBoundingBox(t,e){let{type:n,target:i}=e;if(n===Zh&&e.overrides)return e.overrides;if(t.length===0)return;let{left:r,top:o,width:a,height:l}=Qi(t.map((u=>c_(i,u))).reduce(((u,d)=>u.concat(d)),[])),c=new st(a,l),h=new st(r,o).add(c.scalarDivide(2));if(n===xs){let u=this.getInitialSize(e,{size:c,center:h});return{center:h,relativeCorrection:new st(0,0),size:u}}return{center:h.transform(i.calcOwnMatrix()),size:c}}};X(Qo,"type","strategy");var hl=class extends Qo{shouldPerformLayout(t){return!0}};X(hl,"type","fit-content"),Ut.setClass(hl);var PM=["strategy"],DM=["target","strategy","bubbles","prevStrategy"],h_="layoutManager",Jr=class{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new hl;X(this,"strategy",void 0),this.strategy=t,this._subscriptions=new Map}performLayout(t){let e=G(G({bubbles:!0,strategy:this.strategy},t),{},{prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}});this.onBeforeLayout(e);let n=this.getLayoutResult(e);n&&this.commitLayout(e,n),this.onAfterLayout(e,n),this._prevLayoutStrategy=e.strategy}attachHandlers(t,e){let{target:n}=e;return[Ih,u0,al,d0,su,f0,Dh,p0,L1].map((i=>t.on(i,(r=>this.performLayout(i===Ih?{type:"object_modified",trigger:i,e:r,target:n}:{type:"object_modifying",trigger:i,e:r,target:n})))))}subscribe(t,e){this.unsubscribe(t,e);let n=this.attachHandlers(t,e);this._subscriptions.set(t,n)}unsubscribe(t,e){(this._subscriptions.get(t)||[]).forEach((n=>n())),this._subscriptions.delete(t)}unsubscribeTargets(t){t.targets.forEach((e=>this.unsubscribe(e,t)))}subscribeTargets(t){t.targets.forEach((e=>this.subscribe(e,t)))}onBeforeLayout(t){let{target:e,type:n}=t,{canvas:i}=e;if(n===xs||n===qh?this.subscribeTargets(t):n===rp&&this.unsubscribeTargets(t),e.fire("layout:before",{context:t}),i&&i.fire("object:layout:before",{target:e,context:t}),n===Zh&&t.deep){let r=ke(t,PM);e.forEachObject((o=>o.layoutManager&&o.layoutManager.performLayout(G(G({},r),{},{bubbles:!1,target:o}))))}}getLayoutResult(t){let{target:e,strategy:n,type:i}=t,r=n.calcLayoutResult(t,e.getObjects());if(!r)return;let o=i===xs?new st:e.getRelativeCenterPoint(),{center:a,correction:l=new st,relativeCorrection:c=new st}=r,h=o.subtract(a).add(l).transform(i===xs?In:$n(e.calcOwnMatrix()),!0).add(c);return{result:r,prevCenter:o,nextCenter:a,offset:h}}commitLayout(t,e){let{target:n}=t,{result:{size:i},nextCenter:r}=e;var o,a;n.set({width:i.x,height:i.y}),this.layoutObjects(t,e),t.type===xs?n.set({left:(o=t.x)!==null&&o!==void 0?o:r.x+i.x*Je(n.originX),top:(a=t.y)!==null&&a!==void 0?a:r.y+i.y*Je(n.originY)}):(n.setPositionByOrigin(r,ae,ae),n.setCoords(),n.set("dirty",!0))}layoutObjects(t,e){let{target:n}=t;n.forEachObject((i=>{i.group===n&&this.layoutObject(t,e,i)})),t.strategy.shouldLayoutClipPath(t)&&this.layoutObject(t,e,n.clipPath)}layoutObject(t,e,n){let{offset:i}=e;n.set({left:n.left+i.x,top:n.top+i.y})}onAfterLayout(t,e){let{target:n,strategy:i,bubbles:r,prevStrategy:o}=t,a=ke(t,DM),{canvas:l}=n;n.fire("layout:after",{context:t,result:e}),l&&l.fire("object:layout:after",{context:t,result:e,target:n});let c=n.parent;r&&c!=null&&c.layoutManager&&((a.path||(a.path=[])).push(n),c.layoutManager.performLayout(G(G({},a),{},{target:c}))),n.set("dirty",!0)}dispose(){let{_subscriptions:t}=this;t.forEach((e=>e.forEach((n=>n())))),t.clear()}toObject(){return{type:h_,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};Ut.setClass(Jr,h_);var IM=["type","objects","layoutManager"],Tf=class extends Jr{performLayout(){}},Ks=class s extends m0(ln){static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),X(this,"_activeObjects",[]),X(this,"__objectSelectionTracker",void 0),X(this,"__objectSelectionDisposer",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject((i=>{this.enterGroup(i,!1)})),this.layoutManager=(n=e.layoutManager)!==null&&n!==void 0?n:new Jr,this.layoutManager.performLayout({type:xs,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?($s("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||($s("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter(((e,n,i)=>this.canEnterGroup(e)&&i.indexOf(e)===n))}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let i=this._filterObjectsBeforeEnteringGroup(e),r=super.add(...i);return this._onAfterObjectsChange(qh,i),r}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=this._filterObjectsBeforeEnteringGroup(n),o=super.insertAt(t,...r);return this._onAfterObjectsChange(qh,r),o}remove(){let t=super.remove(...arguments);return this._onAfterObjectsChange(rp,t),t}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach((i=>{i._set(t,e)})),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,e){let{target:n}=e,i=this._activeObjects;if(t)i.push(n),this._set("dirty",!0);else if(i.length>0){let r=i.indexOf(n);r>-1&&(i.splice(r,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&$o(t,Ge($n(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||($o(t,Ge(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=ln.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var i;let o=this._objects[r];(i=this.canvas)!==null&&i!==void 0&&i.preserveObjectStacking&&o.group!==this?(t.save(),t.transform(...$n(this.calcTransformMatrix())),o.render(t),t.restore()):o.group===this&&o.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject((t=>t.setCoords()))}triggerLayout(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.layoutManager.performLayout(G({target:this,type:Zh},t))}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter((function(i){return!i.excludeFromExport})).map((function(i){let r=i.includeDefaultValues;i.includeDefaultValues=n;let o=i[t||"toObject"](e);return i.includeDefaultValues=r,o}))}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.layoutManager.toObject();return G(G(G({},super.toObject(["subTargetCheck","interactive",...t])),e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{}),{},{objects:this.__serializeObjects("toObject",t)})}toString(){return"#<Group: (".concat(this.complexity(),")>")}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject((t=>{this._watchObject(!1,t),t.dispose()})),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=Kn.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let i=e.join("");return t?t(i):i}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let i=0;i<this._objects.length;i++)e.push("		",this._objects[i].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?"opacity: ".concat(this.opacity,";"):"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let i=0;i<this._objects.length;i++)e.push("	",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject(t,e){let{type:n,objects:i=[],layoutManager:r}=t,o=ke(t,IM);return Promise.all([Jo(i,e),pl(o,e)]).then((a=>{let[l,c]=a,h=new this(l,G(G(G({},o),c),{},{layoutManager:new Tf}));if(r){let u=Ut.getClass(r.type),d=Ut.getClass(r.strategy);h.layoutManager=new u(new d)}else h.layoutManager=new Jr;return h.layoutManager.subscribeTargets({type:xs,target:h,targets:h.getObjects()}),h.setCoords(),h}))}};X(Ks,"type","Group"),X(Ks,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),Ut.setClass(Ks);var u_=(s,t)=>Math.min(t.width/s.width,t.height/s.height),d_=(s,t)=>Math.max(t.width/s.width,t.height/s.height),Cf="\\s*,?\\s*",Qa="".concat(Cf,"(").concat(Ri,")"),OM="".concat(Qa).concat(Qa).concat(Qa).concat(Cf,"([01])").concat(Cf,"([01])").concat(Qa).concat(Qa),LM={m:"l",M:"L"},FM=(s,t,e,n,i,r,o,a,l,c,h)=>{let u=Ii(s),d=Oi(s),f=Ii(t),p=Oi(t),x=e*i*f-n*r*p+o,m=n*i*f+e*r*p+a;return["C",c+l*(-e*i*d-n*r*u),h+l*(-n*i*d+e*r*u),x+l*(e*i*p+n*r*f),m+l*(n*i*p-e*r*f),x,m]},n0=(s,t,e,n)=>{let i=Math.atan2(t,s),r=Math.atan2(n,e);return r>=i?r-i:2*Math.PI-(i-r)};function Ef(s,t,e,n,i,r,o,a){let l;if(ye.cachesBoundsOfCurve&&(l=[...arguments].join(),nl.boundsOfCurveCache[l]))return nl.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,u=[],d=[[0,0],[0,0]],f=6*s-12*e+6*i,p=-3*s+9*e-9*i+3*o,x=3*e-3*s;for(let w=0;w<2;++w){if(w>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*a,x=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let E=-x/f;0<E&&E<1&&u.push(E);continue}let R=f*f-4*x*p;if(R<0)continue;let D=c(R),g=(-f+D)/(2*p);0<g&&g<1&&u.push(g);let v=(-f-D)/(2*p);0<v&&v<1&&u.push(v)}let m=u.length,_=m,S=p_(s,t,e,n,i,r,o,a);for(;m--;){let{x:w,y:R}=S(u[m]);d[0][m]=w,d[1][m]=R}d[0][_]=s,d[1][_]=t,d[0][_+1]=o,d[1][_+1]=a;let P=[new st(Math.min(...d[0]),Math.min(...d[1])),new st(Math.max(...d[0]),Math.max(...d[1]))];return ye.cachesBoundsOfCurve&&(nl.boundsOfCurveCache[l]=P),P}var NM=(s,t,e)=>{let[n,i,r,o,a,l,c,h]=e,u=((d,f,p,x,m,_,S)=>{if(p===0||x===0)return[];let P=0,w=0,R=0,D=Math.PI,g=S*Bf,v=Oi(g),E=Ii(g),C=.5*(-E*d-v*f),I=.5*(-E*f+v*d),F=p**2,z=x**2,L=I**2,j=C**2,q=F*z-F*L-z*j,U=Math.abs(p),J=Math.abs(x);if(q<0){let se=Math.sqrt(1-q/(F*z));U*=se,J*=se}else R=(m===_?-1:1)*Math.sqrt(q/(F*L+z*j));let K=R*U*I/J,ot=-R*J*C/U,dt=E*K-v*ot+.5*d,Pt=v*K+E*ot+.5*f,At=n0(1,0,(C-K)/U,(I-ot)/J),Q=n0((C-K)/U,(I-ot)/J,(-C-K)/U,(-I-ot)/J);_===0&&Q>0?Q-=2*D:_===1&&Q<0&&(Q+=2*D);let wt=Math.ceil(Math.abs(Q/D*2)),Ct=[],Bt=Q/wt,vt=8/3*Math.sin(Bt/4)*Math.sin(Bt/4)/Math.sin(Bt/2),Gt=At+Bt;for(let se=0;se<wt;se++)Ct[se]=FM(At,Gt,E,v,U,J,dt,Pt,vt,P,w),P=Ct[se][5],w=Ct[se][6],At=Gt,Gt+=Bt;return Ct})(c-s,h-t,i,r,a,l,o);for(let d=0,f=u.length;d<f;d++)u[d][1]+=s,u[d][2]+=t,u[d][3]+=s,u[d][4]+=t,u[d][5]+=s,u[d][6]+=t;return u},f_=s=>{let t=0,e=0,n=0,i=0,r=[],o,a=0,l=0;for(let c of s){let h=[...c],u;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],u=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],u=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],u=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],i=h[2],u=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":a=h[3],l=h[4],t=h[5],e=h[6],u=["C",h[1],h[2],a,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":o==="C"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[3],e=h[4],u=["C",a,l,h[1],h[2],t,e],a=u[3],l=u[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":a=h[1],l=h[2],t=h[3],e=h[4],u=["Q",a,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":o==="Q"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[1],e=h[2],u=["Q",a,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":NM(t,e,h).forEach((d=>r.push(d))),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=i,u=["Z"]}u?(r.push(u),o=u[0]):o=""}return r},Jh=(s,t,e,n)=>Math.sqrt((e-s)**2+(n-t)**2),p_=(s,t,e,n,i,r,o,a)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),u=(f=>3*f*(1-f)**2)(l),d=(f=>(1-f)**3)(l);return new st(o*c+i*h+e*u+s*d,a*c+r*h+n*u+t*d)},m_=s=>s**2,g_=s=>2*s*(1-s),__=s=>(1-s)**2,kM=(s,t,e,n,i,r,o,a)=>l=>{let c=m_(l),h=g_(l),u=__(l),d=3*(u*(e-s)+h*(i-e)+c*(o-i)),f=3*(u*(n-t)+h*(r-n)+c*(a-r));return Math.atan2(f,d)},UM=(s,t,e,n,i,r)=>o=>{let a=m_(o),l=g_(o),c=__(o);return new st(i*a+e*l+s*c,r*a+n*l+t*c)},BM=(s,t,e,n,i,r)=>o=>{let a=1-o,l=2*(a*(e-s)+o*(i-e)),c=2*(a*(n-t)+o*(r-n));return Math.atan2(c,l)},i0=(s,t,e)=>{let n=new st(t,e),i=0;for(let r=1;r<=100;r+=1){let o=s(r/100);i+=Jh(n.x,n.y,o.x,o.y),n=o}return i},zM=(s,t)=>{let e,n=0,i=0,r={x:s.x,y:s.y},o=G({},r),a=.01,l=0,c=s.iterator,h=s.angleFinder;for(;i<t&&a>1e-4;)o=c(n),l=n,e=Jh(r.x,r.y,o.x,o.y),e+i>t?(n-=a,a/=2):(r=o,n+=a,i+=e);return G(G({},o),{},{angle:h(l)})},op=s=>{let t,e,n=0,i=0,r=0,o=0,a=0,l=[];for(let c of s){let h={x:i,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=o=i=c[1],e.y=a=r=c[2];break;case"L":e=h,e.length=Jh(i,r,c[1],c[2]),i=c[1],r=c[2];break;case"C":t=p_(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=kM(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=i0(t,i,r),i=c[5],r=c[6];break;case"Q":t=UM(i,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=BM(i,r,c[1],c[2],c[3],c[4]),e.length=i0(t,i,r),i=c[3],r=c[4];break;case"Z":e=h,e.destX=o,e.destY=a,e.length=Jh(i,r,o,a),i=o,r=a}n+=e.length,l.push(e)}return l.push({length:n,x:i,y:r}),l},x_=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:op(s),n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let i=e[n],r=t/i.length,o=s[n];switch(i.command){case"M":return{x:i.x,y:i.y,angle:0};case"Z":return G(G({},new st(i.x,i.y).lerp(new st(i.destX,i.destY),r)),{},{angle:Math.atan2(i.destY-i.y,i.destX-i.x)});case"L":return G(G({},new st(i.x,i.y).lerp(new st(o[1],o[2]),r)),{},{angle:Math.atan2(o[2]-i.y,o[1]-i.x)});case"C":case"Q":return zM(i,t)}},VM=new RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),s0=new RegExp(OM,"g"),GM=new RegExp(Ri,"gi"),HM={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},v_=s=>{var t;let e=[],n=(t=s.match(VM))!==null&&t!==void 0?t:[];for(let i of n){let r=i[0];if(r==="z"||r==="Z"){e.push([r]);continue}let o=HM[r.toLowerCase()],a=[];if(r==="a"||r==="A"){s0.lastIndex=0;for(let l=null;l=s0.exec(i);)a.push(...l.slice(1))}else a=i.match(GM)||[];for(let l=0;l<a.length;l+=o){let c=new Array(o),h=LM[r];c[0]=l>0&&h?h:r;for(let u=0;u<o;u++)c[u+1]=parseFloat(a[l+u]);e.push(c)}}return e},WM=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=new st(s[0]),n=new st(s[1]),i=1,r=0,o=[],a=s.length,l=a>2,c;for(l&&(i=s[2].x<n.x?-1:s[2].x===n.x?0:1,r=s[2].y<n.y?-1:s[2].y===n.y?0:1),o.push(["M",e.x-i*t,e.y-r*t]),c=1;c<a;c++){if(!e.eq(n)){let h=e.midPointFrom(n);o.push(["Q",e.x,e.y,h.x,h.y])}e=s[c],c+1<s.length&&(n=s[c+1])}return l&&(i=e.x>s[c-2].x?1:e.x===s[c-2].x?0:-1,r=e.y>s[c-2].y?1:e.y===s[c-2].y?0:-1),o.push(["L",e.x+i*t,e.y+r*t]),o},y_=(s,t)=>s.map((e=>e.map(((n,i)=>i===0||t===void 0?n:Oe(n,t))).join(" "))).join(" ");function Kh(s,t){let e=s.style;e&&t&&(typeof t=="string"?e.cssText+=";"+t:Object.entries(t).forEach((n=>{let[i,r]=n;return e.setProperty(i,r)})))}var XM=(s,t)=>Math.floor(Math.random()*(t-s+1))+s;function jM(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.onComplete||Hr,n=new(dl()).XMLHttpRequest,i=t.signal,r=function(){n.abort()},o=function(){i&&i.removeEventListener("abort",r),n.onerror=n.ontimeout=Hr};if(i&&i.aborted)throw new Ph("request");return i&&i.addEventListener("abort",r,{once:!0}),n.onreadystatechange=function(){n.readyState===4&&(o(),e(n),n.onreadystatechange=Hr)},n.onerror=n.ontimeout=o,n.open("get",s,!0),n.send(),n}var YM=(s,t)=>{let e=s._findCenterFromElement();s.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:i,scaleY:r,angle:o,skewX:a}=Zo(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(On,i),n.set(Qn,r),n.angle=o,n.skewX=a,n.skewY=0}})(s),e=e.transform(s.transformMatrix)),delete s.transformMatrix,t&&(s.scaleX*=t.scaleX,s.scaleY*=t.scaleY,s.cropX=t.cropX,s.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,s.width=t.width,s.height=t.height),s.setPositionByOrigin(e,ae,ae)},$A=Object.freeze({__proto__:null,addTransformToObject:C0,animate:tp,animateColor:V0,applyTransformToObject:$o,calcAngleBetweenVectors:Hh,calcDimensionsMatrix:fl,calcPlaneChangeMatrix:ml,calcVectorRotation:U0,cancelAnimFrame:g0,capValue:Zr,composeMatrix:S0,copyCanvasElement:s=>{var t;let e=ti(s);return(t=e.getContext("2d"))===null||t===void 0||t.drawImage(s,0,0),e},cos:Ii,createCanvasElement:es,createImage:_0,createRotateMatrix:Kr,createScaleMatrix:au,createSkewXMatrix:jf,createSkewYMatrix:Yf,createTranslateMatrix:sa,createVector:Vh,crossProduct:Yo,degreesToRadians:Ve,dotProduct:B0,ease:q1,enlivenObjectEnlivables:pl,enlivenObjects:Jo,findScaleToCover:d_,findScaleToFit:u_,getBoundsOfCurve:Ef,getOrthonormalVector:Qf,getPathSegmentsInfo:op,getPointOnPath:x_,getPointer:T0,getRandomInt:XM,getRegularPolygonPath:(s,t)=>{let e=2*Math.PI/s,n=-Qs;s%2==0&&(n+=e/2);let i=new Array(s+1);for(let r=0;r<s;r++){let o=r*e+n,{x:a,y:l}=new st(Ii(o),Oi(o)).scalarMultiply(t);i[r]=[r===0?"M":"L",a,l]}return i[s]=["Z"],i},getSmoothPathFromPoints:WM,getSvgAttributes:s=>{let t=["instantiated_by_use","style","id","class"];switch(s){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},getUnitVector:uu,groupSVGElements:(s,t)=>s&&s.length===1?s[0]:new Ks(s,t),hasStyleChanged:pu,invertTransform:$n,isBetweenVectors:mf,isIdentityMatrix:x0,isTouchEvent:Nh,isTransparent:i_,joinPath:y_,loadImage:sl,magnitude:Gh,makeBoundingBoxFromPoints:Qi,makePathSimpler:f_,matrixToSVG:Ko,mergeClipPaths:(s,t)=>{var e;let n=s,i=t;n.inverted&&!i.inverted&&(n=t,i=s),pf(i,(e=i.group)===null||e===void 0?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&i.inverted;return r&&(n.inverted=i.inverted=!1),new Ks([n],{clipPath:i,inverted:r})},multiplyTransformMatrices:Ge,multiplyTransformMatrixArray:ou,parsePath:v_,parsePreserveAspectRatioAttribute:I0,parseUnit:Wr,pick:$r,projectStrokeOnPoints:s_,qrDecompose:Zo,radiansToDegrees:ns,removeFromArray:wr,removeTransformFromObject:(s,t)=>{let e=$n(t),n=Ge(e,s.calcOwnMatrix());$o(s,n)},removeTransformMatrixForSvgParsing:YM,request:jM,requestAnimFrame:il,resetObjectTransform:E0,rotatePoint:(s,t,e)=>s.rotate(e,t),rotateVector:$f,saveObjectTransform:Zf,sendObjectToPlane:pf,sendPointToPlane:ys,sendVectorToPlane:A0,setStyle:Kh,sin:Oi,sizeAfterTransform:lu,string:lM,stylesFromArray:a_,stylesToArray:o_,toBlob:Xf,toDataURL:Wf,toFixed:Oe,transformPath:(s,t,e)=>(e&&(t=Ge(t,[1,0,0,1,-e.x,-e.y])),s.map((n=>{let i=[...n];for(let r=1;r<n.length-1;r+=2){let{x:o,y:a}=Tn({x:n[r],y:n[r+1]},t);i[r]=o,i[r+1]=a}return i}))),transformPoint:Tn}),Af=class extends Fh{constructor(t){let{allowTouchScrolling:e=!1,containerClass:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(t),X(this,"upper",void 0),X(this,"container",void 0);let{el:i}=this.lower,r=this.createUpperCanvas();this.upper={el:r,ctx:r.getContext("2d")},this.applyCanvasStyle(i,{allowTouchScrolling:e}),this.applyCanvasStyle(r,{allowTouchScrolling:e,styles:{position:"absolute",left:"0",top:"0"}});let o=this.createContainerElement();o.classList.add(n),i.parentNode&&i.parentNode.replaceChild(o,i),o.append(i,r),this.container=o}createUpperCanvas(){let{el:t}=this.lower,e=es();return e.className=t.className,e.classList.remove("lower-canvas"),e.classList.add("upper-canvas"),e.setAttribute("data-fabric","top"),e.style.cssText=t.style.cssText,e.setAttribute("draggable","true"),e}createContainerElement(){let t=ea().createElement("div");return t.setAttribute("data-fabric","wrapper"),Kh(t,{position:"relative"}),Og(t),t}applyCanvasStyle(t,e){let{styles:n,allowTouchScrolling:i}=e;Kh(t,G(G({},n),{},{"touch-action":i?"manipulation":zn})),Og(t)}setDimensions(t,e){super.setDimensions(t,e);let{el:n,ctx:i}=this.upper;w0(n,i,t,e)}setCSSDimensions(t){super.setCSSDimensions(t),ff(this.upper.el,t),ff(this.container,t)}cleanupDOM(t){let e=this.container,{el:n}=this.lower,{el:i}=this.upper;super.cleanupDOM(t),e.removeChild(i),e.removeChild(n),e.parentNode&&e.parentNode.replaceChild(n,e)}dispose(){super.dispose(),ts().dispose(this.upper.el),delete this.upper,delete this.container}},$h=class s extends er{constructor(){super(...arguments),X(this,"targets",[]),X(this,"_hoveredTargets",[]),X(this,"_currentTransform",null),X(this,"_groupSelector",null),X(this,"contextTopDirty",!1)}static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}get upperCanvasEl(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new Af(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter((e=>!e.group&&e!==t)).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let i=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+i,-n+i),r.transform(...this.viewportTransform);let o=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=o,r.restore();let a=Math.round(i*this.getRetinaScaling());return i_(r,a,a,a)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find((n=>!!n&&t[n]===!0)):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),i=this._activeObject;return!!(!e||e&&i&&n.length>1&&n.indexOf(e)===-1&&i!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&i&&i!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let i;return e===ru||e===On||e===Qn||e===al?i=this.centeredScaling||t.centeredScaling:e===Gf&&(i=this.centeredRotation||t.centeredRotation),i?!n:n}_getOriginFromCorner(t,e){let n={x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=je:["mr","tr","br"].includes(e)&&(n.x=Re),["tl","mt","tr"].includes(e)?n.y=uf:["bl","mb","br"].includes(e)&&(n.y=Bn)),n}_setupCurrentTransform(t,e,n){var i;let r=e.group?ys(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:o="",control:a}=e.getActiveControl()||{},l=n&&a?(i=a.getActionHandler(t,e,a))===null||i===void 0?void 0:i.bind(a):D0,c=((f,p,x,m)=>{if(!p||!f)return"drag";let _=m.controls[p];return _.getActionName(x,_,m)})(n,o,t,e),h=t[this.centeredKey],u=this._shouldCenterTransform(e,c,h)?{x:ae,y:ae}:this._getOriginFromCorner(e,o),d={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:o,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:r.x-e.left,offsetY:r.y-e.top,originX:u.x,originY:u.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Ve(e.angle),width:e.width,height:e.height,shiftKey:t.shiftKey,altKey:h,original:G(G({},Zf(e)),{},{originX:u.x,originY:u.y})};this._currentTransform=d,this.fire("before:transform",{e:t,transform:d})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n).transform(this.viewportTransform),a=new st(e+i,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(o.x,a.x),h=Math.min(o.y,a.y),u=Math.max(o.x,a.x),d=Math.max(o.y,a.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,u-c,d-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,u-=l,d-=l,ln.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,u-c,d-h))}findTarget(t){if(this.skipTargetFind)return;let e=this.getViewportPoint(t),n=this._activeObject,i=this.getActiveObjects();if(this.targets=[],n&&i.length>=1){if(n.findControl(e,Nh(t))||i.length>1&&this.searchPossibleTargets([n],e))return n;if(n===this.searchPossibleTargets([n],e)){if(this.preserveObjectStacking){let r=this.targets;this.targets=[];let o=this.searchPossibleTargets(this._objects,e);return t[this.altSelectionKey]&&o&&o!==n?(this.targets=r,n):o}return n}}return this.searchPossibleTargets(this._objects,e)}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),i=this.getZoom(),r=t.padding/i;if(r){let[o,a,l,c]=n,h=Math.atan2(a.y-o.y,a.x-o.x),u=Ii(h)*r,d=Oi(h)*r,f=u+d,p=u-d;n=[new st(o.x-p,o.y-f),new st(a.x+f,a.y-p),new st(l.x+p,l.y+f),new st(c.x-f,c.y+p)]}return jr.isPointInPolygon(e,n)}_checkTarget(t,e){return!!(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,ys(e,void 0,this.viewportTransform))&&(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing||!this.isTargetTransparent(t,e.x,e.y)))}_searchPossibleTargets(t,e){let n=t.length;for(;n--;){let i=t[n];if(this._checkTarget(i,e)){if(Eh(i)&&i.subTargetCheck){let r=this._searchPossibleTargets(i._objects,e);r&&this.targets.push(r)}return i}}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e);if(n&&Eh(n)&&n.interactive&&this.targets[0]){let i=this.targets;for(let r=i.length-1;r>0;r--){let o=i[r];if(!Eh(o)||!o.interactive)return o}return i[0]}return n}getViewportPoint(t){return this._pointer?this._pointer:this.getPointer(t,!0)}getScenePoint(t){return this._absolutePointer?this._absolutePointer:this.getPointer(t)}getPointer(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=this.upperCanvasEl,i=n.getBoundingClientRect(),r=T0(t),o=i.width||0,a=i.height||0;o&&a||(Bn in i&&uf in i&&(a=Math.abs(i.top-i.bottom)),je in i&&Re in i&&(o=Math.abs(i.right-i.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,e||(r=ys(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=o===0||a===0?new st(1,1):new st(n.width/o,n.height/a);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=es(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return Tr(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,i=!1,r=this.getActiveObjects(),o=[],a=[];t.forEach((l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),a.push(l))})),r.forEach((l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),o.push(l))})),t.length>0&&r.length>0?(i=!0,n&&this.fire("selection:updated",{e,selected:o,deselected:a})):r.length>0?(i=!0,this.fire("selection:created",{e,selected:o})):t.length>0&&(i=!0,this.fire("selection:cleared",{e,deselected:a})),i&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),i=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),i}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,Tr(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),Tr(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let i=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),i}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,i={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",i),n.fire(Ih,i))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;Tr(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let i=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(i),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&Tr(e)&&this._activeObject===e){let n=$r(t,["angle","flipX","flipY",Re,On,Qn,na,ia,Bn]);return C0(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let i=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(i)}};X($h,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!1});var Rf=class{constructor(t){X(this,"targets",[]),X(this,"__disposer",void 0);let e=()=>{let{hiddenTextarea:i}=t.getActiveObject()||{};i&&i.focus()},n=t.upperCanvasEl;n.addEventListener("click",e),this.__disposer=()=>n.removeEventListener("click",e)}exitTextEditing(){this.target=void 0,this.targets.forEach((t=>{t.isEditing&&t.exitEditing()}))}add(t){this.targets.push(t)}remove(t){this.unregister(t),wr(this.targets,t)}register(t){this.target=t}unregister(t){t===this.target&&(this.target=void 0)}onMouseMove(t){var e;!((e=this.target)===null||e===void 0)&&e.isEditing&&this.target.updateSelectionOnMouseMove(t)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},qM=["target","oldTarget","fireCanvas","e"],Jn={passive:!1},Bo=(s,t)=>{let e=s.getViewportPoint(t),n=s.getScenePoint(t);return{viewportPoint:e,scenePoint:n,pointer:e,absolutePointer:n}},Zs=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.addEventListener(...e)},li=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.removeEventListener(...e)},ZM={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},ta=class extends $h{constructor(t){super(t,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}),X(this,"_isClick",void 0),X(this,"textEditingManager",new Rf(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach((e=>{this[e]=this[e].bind(this)})),this.addOrRemove(Zs,"add")}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(t,e){let n=this.upperCanvasEl,i=this._getEventPrefix();t(M0(n),"resize",this._onResize),t(n,i+"down",this._onMouseDown),t(n,"".concat(i,"move"),this._onMouseMove,Jn),t(n,"".concat(i,"out"),this._onMouseOut),t(n,"".concat(i,"enter"),this._onMouseEnter),t(n,"wheel",this._onMouseWheel,{passive:!1}),t(n,"contextmenu",this._onContextMenu),t(n,"click",this._onClick),t(n,"dblclick",this._onClick),t(n,"dragstart",this._onDragStart),t(n,"dragend",this._onDragEnd),t(n,"dragover",this._onDragOver),t(n,"dragenter",this._onDragEnter),t(n,"dragleave",this._onDragLeave),t(n,"drop",this._onDrop),this.enablePointerEvents||t(n,"touchstart",this._onTouchStart,Jn)}removeListeners(){this.addOrRemove(li,"remove");let t=this._getEventPrefix(),e=Ai(this.upperCanvasEl);li(e,"".concat(t,"up"),this._onMouseUp),li(e,"touchend",this._onTouchEnd,Jn),li(e,"".concat(t,"move"),this._onMouseMove,Jn),li(e,"touchmove",this._onMouseMove,Jn),clearTimeout(this._willAddMouseDown)}_onMouseWheel(t){this.__onMouseWheel(t)}_onMouseOut(t){let e=this._hoveredTarget,n=G({e:t},Bo(this,t));this.fire("mouse:out",G(G({},n),{},{target:e})),this._hoveredTarget=void 0,e&&e.fire("mouseout",G({},n)),this._hoveredTargets.forEach((i=>{this.fire("mouse:out",G(G({},n),{},{target:i})),i&&i.fire("mouseout",G({},n))})),this._hoveredTargets=[]}_onMouseEnter(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",G({e:t},Bo(this,t))),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(t){this._isClick=!1;let e=this.getActiveObject();if(e&&e.onDragStart(t)){this._dragSource=e;let n={e:t,target:e};return this.fire("dragstart",n),e.fire("dragstart",n),void Zs(this.upperCanvasEl,"drag",this._onDragProgress)}Lg(t)}_renderDragEffects(t,e,n){let i=!1,r=this._dropTarget;r&&r!==e&&r!==n&&(r.clearContextTop(),i=!0),e?.clearContextTop(),n!==e&&n?.clearContextTop();let o=this.contextTop;o.save(),o.transform(...this.viewportTransform),e&&(o.save(),e.transform(o),e.renderDragSourceEffect(t),o.restore(),i=!0),n&&(o.save(),n.transform(o),n.renderDropTargetEffect(t),o.restore(),i=!0),o.restore(),i&&(this.contextTopDirty=!0)}_onDragEnd(t){let e=!!t.dataTransfer&&t.dataTransfer.dropEffect!==zn,n=e?this._activeObject:void 0,i={e:t,target:this._dragSource,subTargets:this.targets,dragSource:this._dragSource,didDrop:e,dropTarget:n};li(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",i),this._dragSource&&this._dragSource.fire("dragend",i),delete this._dragSource,this._onMouseUp(t)}_onDragProgress(t){let e={e:t,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",e),this._dragSource&&this._dragSource.fire("drag",e)}findDragTargets(t){return this.targets=[],{target:this._searchPossibleTargets(this._objects,this.getViewportPoint(t)),targets:[...this.targets]}}_onDragOver(t){let e="dragover",{target:n,targets:i}=this.findDragTargets(t),r=this._dragSource,o={e:t,target:n,subTargets:i,dragSource:r,canDrop:!1,dropTarget:void 0},a;this.fire(e,o),this._fireEnterLeaveEvents(n,o),n&&(n.canDrop(t)&&(a=n),n.fire(e,o));for(let l=0;l<i.length;l++){let c=i[l];c.canDrop(t)&&(a=c),c.fire(e,o)}this._renderDragEffects(t,r,a),this._dropTarget=a}_onDragEnter(t){let{target:e,targets:n}=this.findDragTargets(t),i={e:t,target:e,subTargets:n,dragSource:this._dragSource};this.fire("dragenter",i),this._fireEnterLeaveEvents(e,i)}_onDragLeave(t){let e={e:t,target:this._draggedoverTarget,subTargets:this.targets,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(void 0,e),this._renderDragEffects(t,this._dragSource),this._dropTarget=void 0,this.targets=[],this._hoveredTargets=[]}_onDrop(t){let{target:e,targets:n}=this.findDragTargets(t),i=this._basicEventHandler("drop:before",G({e:t,target:e,subTargets:n,dragSource:this._dragSource},Bo(this,t)));i.didDrop=!1,i.dropTarget=void 0,this._basicEventHandler("drop",i),this.fire("drop:after",i)}_onContextMenu(t){let e=this.findTarget(t),n=this.targets||[],i=this._basicEventHandler("contextmenu:before",{e:t,target:e,subTargets:n});return this.stopContextMenu&&Lg(t),this._basicEventHandler("contextmenu",i),!1}_onClick(t){let e=t.detail;e>3||e<2||(this._cacheTransformEventData(t),e==2&&t.type==="dblclick"&&this._handleEvent(t,"dblclick"),e==3&&this._handleEvent(t,"tripleclick"),this._resetTransformEventData())}getPointerId(t){let e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1}_isMainEvent(t){return t.isPrimary===!0||t.isPrimary!==!1&&(t.type==="touchend"&&t.touches.length===0||!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(t){let e=!this.allowTouchScrolling,n=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(t)),this.__onMouseDown(t),(this.isDrawingMode||n&&this._target===n)&&(e=!0),e&&t.preventDefault(),this._resetTransformEventData();let i=this.upperCanvasEl,r=this._getEventPrefix(),o=Ai(i);Zs(o,"touchend",this._onTouchEnd,Jn),e&&Zs(o,"touchmove",this._onMouseMove,Jn),li(i,"".concat(r,"down"),this._onMouseDown)}_onMouseDown(t){this.__onMouseDown(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();li(e,"".concat(n,"move"),this._onMouseMove,Jn);let i=Ai(e);Zs(i,"".concat(n,"up"),this._onMouseUp),Zs(i,"".concat(n,"move"),this._onMouseMove,Jn)}_onTouchEnd(t){if(t.touches.length>0)return;this.__onMouseUp(t),this._resetTransformEventData(),delete this.mainTouchId;let e=this._getEventPrefix(),n=Ai(this.upperCanvasEl);li(n,"touchend",this._onTouchEnd,Jn),li(n,"touchmove",this._onMouseMove,Jn),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout((()=>{Zs(this.upperCanvasEl,"".concat(e,"down"),this._onMouseDown),this._willAddMouseDown=0}),400)}_onMouseUp(t){this.__onMouseUp(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();if(this._isMainEvent(t)){let i=Ai(this.upperCanvasEl);li(i,"".concat(n,"up"),this._onMouseUp),li(i,"".concat(n,"move"),this._onMouseMove,Jn),Zs(e,"".concat(n,"move"),this._onMouseMove,Jn)}}_onMouseMove(t){let e=this.getActiveObject();!this.allowTouchScrolling&&(!e||!e.shouldStartDragging(t))&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(t){let e=this.getActiveObject();return!!e!=!!t||e&&t&&e!==t}__onMouseUp(t){var e;this._cacheTransformEventData(t),this._handleEvent(t,"up:before");let n=this._currentTransform,i=this._isClick,r=this._target,{button:o}=t;if(o)return(this.fireMiddleClick&&o===1||this.fireRightClick&&o===2)&&this._handleEvent(t,"up"),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(t);if(!this._isMainEvent(t))return;let a,l,c=!1;if(n&&(this._finalizeCurrentTransform(t),c=n.actionPerformed),!i){let h=r===this._activeObject;this.handleSelection(t),c||(c=this._shouldRender(r)||!h&&r===this._activeObject)}if(r){let h=r.findControl(this.getViewportPoint(t),Nh(t)),{key:u,control:d}=h||{};if(l=u,r.selectable&&r!==this._activeObject&&r.activeOn==="up")this.setActiveObject(r,t),c=!0;else if(d){let f=d.getMouseUpHandler(t,r,d);f&&(a=this.getScenePoint(t),f.call(d,t,n,a.x,a.y))}r.isMoving=!1}if(n&&(n.target!==r||n.corner!==l)){let h=n.target&&n.target.controls[n.corner],u=h&&h.getMouseUpHandler(t,n.target,h);a=a||this.getScenePoint(t),u&&u.call(h,t,n,a.x,a.y)}this._setCursorFromEvent(t,r),this._handleEvent(t,"up"),this._groupSelector=null,this._currentTransform=null,r&&(r.__corner=void 0),c?this.requestRenderAll():i||(e=this._activeObject)!==null&&e!==void 0&&e.isEditing||this.renderTop()}_basicEventHandler(t,e){let{target:n,subTargets:i=[]}=e;this.fire(t,e),n&&n.fire(t,e);for(let r=0;r<i.length;r++)i[r]!==n&&i[r].fire(t,e);return e}_handleEvent(t,e,n){let i=this._target,r=this.targets||[],o=G(G(G({e:t,target:i,subTargets:r},Bo(this,t)),{},{transform:this._currentTransform},e==="up:before"||e==="up"?{isClick:this._isClick,currentTarget:this.findTarget(t),currentSubTargets:this.targets}:{}),e==="down:before"||e==="down"?n:{});this.fire("mouse:".concat(e),o),i&&i.fire("mouse".concat(e),o);for(let a=0;a<r.length;a++)r[a]!==i&&r[a].fire("mouse".concat(e),o)}_onMouseDownInDrawingMode(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(t),this.requestRenderAll());let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(t){if(this._isCurrentlyDrawing){let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")}_onMouseUpInDrawingMode(t){let e=this.getScenePoint(t);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:t,pointer:e}):this._isCurrentlyDrawing=!1,this._handleEvent(t,"up")}__onMouseDown(t){this._isClick=!0,this._cacheTransformEventData(t),this._handleEvent(t,"down:before");let e=this._target,n=!!e&&e===this._activeObject,{button:i}=t;if(i)return(this.fireMiddleClick&&i===1||this.fireRightClick&&i===2)&&this._handleEvent(t,"down",{alreadySelected:n}),void this._resetTransformEventData();if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(t);if(!this._isMainEvent(t)||this._currentTransform)return;let r=this._shouldRender(e),o=!1;if(this.handleMultiSelection(t,e)?(e=this._activeObject,o=!0,r=!0):this._shouldClearSelection(t,e)&&this.discardActiveObject(t),this.selection&&(!e||!e.selectable&&!e.isEditing&&e!==this._activeObject)){let a=this.getScenePoint(t);this._groupSelector={x:a.x,y:a.y,deltaY:0,deltaX:0}}if(n=!!e&&e===this._activeObject,e){e.selectable&&e.activeOn==="down"&&this.setActiveObject(e,t);let a=e.findControl(this.getViewportPoint(t),Nh(t));if(e===this._activeObject&&(a||!o)){this._setupCurrentTransform(t,e,n);let l=a?a.control:void 0,c=this.getScenePoint(t),h=l&&l.getMouseDownHandler(t,e,l);h&&h.call(l,t,this._currentTransform,c.x,c.y)}}r&&(this._objectsToRender=void 0),this._handleEvent(t,"down",{alreadySelected:n}),r&&this.requestRenderAll()}_resetTransformEventData(){this._target=this._pointer=this._absolutePointer=void 0}_cacheTransformEventData(t){this._resetTransformEventData(),this._pointer=this.getViewportPoint(t),this._absolutePointer=ys(this._pointer,void 0,this.viewportTransform),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)}__onMouseMove(t){if(this._isClick=!1,this._cacheTransformEventData(t),this._handleEvent(t,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(t);if(!this._isMainEvent(t))return;let e=this._groupSelector;if(e){let n=this.getScenePoint(t);e.deltaX=n.x-e.x,e.deltaY=n.y-e.y,this.renderTop()}else if(this._currentTransform)this._transformObject(t);else{let n=this.findTarget(t);this._setCursorFromEvent(t,n),this._fireOverOutEvents(t,n)}this.textEditingManager.onMouseMove(t),this._handleEvent(t,"move"),this._resetTransformEventData()}_fireOverOutEvents(t,e){let n=this._hoveredTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("mouse",{e:t,target:e,oldTarget:n,fireCanvas:!0});for(let a=0;a<o;a++)r[a]===e||i[a]&&i[a]===n||this.fireSyntheticInOutEvents("mouse",{e:t,target:r[a],oldTarget:i[a]});this._hoveredTarget=e,this._hoveredTargets=this.targets.concat()}_fireEnterLeaveEvents(t,e){let n=this._draggedoverTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("drag",G(G({},e),{},{target:t,oldTarget:n,fireCanvas:!0}));for(let a=0;a<o;a++)this.fireSyntheticInOutEvents("drag",G(G({},e),{},{target:r[a],oldTarget:i[a]}));this._draggedoverTarget=t}fireSyntheticInOutEvents(t,e){let{target:n,oldTarget:i,fireCanvas:r,e:o}=e,a=ke(e,qM),{targetIn:l,targetOut:c,canvasIn:h,canvasOut:u}=ZM[t],d=i!==n;if(i&&d){let f=G(G({},a),{},{e:o,target:i,nextTarget:n},Bo(this,o));r&&this.fire(u,f),i.fire(c,f)}if(n&&d){let f=G(G({},a),{},{e:o,target:n,previousTarget:i},Bo(this,o));r&&this.fire(h,f),n.fire(l,f)}}__onMouseWheel(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()}_transformObject(t){let e=this.getScenePoint(t),n=this._currentTransform,i=n.target,r=i.group?ys(e,void 0,i.group.calcTransformMatrix()):e;n.shiftKey=t.shiftKey,n.altKey=!!this.centeredKey&&t[this.centeredKey],this._performTransformAction(t,n,r),n.actionPerformed&&this.requestRenderAll()}_performTransformAction(t,e,n){let{action:i,actionHandler:r,target:o}=e,a=!!r&&r(t,e,n.x,n.y);a&&o.setCoords(),i==="drag"&&a&&(e.target.isMoving=!0,this.setCursor(e.target.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a}_setCursorFromEvent(t,e){if(!e)return void this.setCursor(this.defaultCursor);let n=e.hoverCursor||this.hoverCursor,i=Tr(this._activeObject)?this._activeObject:null,r=(!i||e.group!==i)&&e.findControl(this.getViewportPoint(t));if(r){let o=r.control;this.setCursor(o.cursorStyleHandler(t,o,e))}else e.subTargetCheck&&this.targets.concat().reverse().map((o=>{n=o.hoverCursor||n})),this.setCursor(n)}handleMultiSelection(t,e){let n=this._activeObject,i=Tr(n);if(n&&this._isSelectionKeyPressed(t)&&this.selection&&e&&e.selectable&&(n!==e||i)&&(i||!e.isDescendantOf(n)&&!n.isDescendantOf(e))&&!e.onSelect({e:t})&&!n.getActiveControl()){if(i){let r=n.getObjects();if(e===n){let o=this.getViewportPoint(t);if(!(e=this.searchPossibleTargets(r,o)||this.searchPossibleTargets(this._objects,o))||!e.selectable)return!1}e.group===n?(n.remove(e),this._hoveredTarget=e,this._hoveredTargets=[...this.targets],n.size()===1&&this._setActiveObject(n.item(0),t)):(n.multiSelectAdd(e),this._hoveredTarget=n,this._hoveredTargets=[...this.targets]),this._fireSelectionEvents(r,t)}else{n.isEditing&&n.exitEditing();let r=new(Ut.getClass("ActiveSelection"))([],{canvas:this});r.multiSelectAdd(n,e),this._hoveredTarget=r,this._setActiveObject(r,t),this._fireSelectionEvents([n],t)}return!0}return!1}handleSelection(t){if(!this.selection||!this._groupSelector)return!1;let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n),a=o.add(new st(i,r)),l=o.min(a),c=o.max(a).subtract(l),h=this.collectObjects({left:l.x,top:l.y,width:c.x,height:c.y},{includeIntersecting:!this.selectionFullyContained}),u=o.eq(a)?h[0]?[h[0]]:[]:h.length>1?h.filter((d=>!d.onSelect({e:t}))).reverse():h;if(u.length===1)this.setActiveObject(u[0],t);else if(u.length>1){let d=Ut.getClass("ActiveSelection");this.setActiveObject(new d(u,{canvas:this}),t)}return this._groupSelector=null,!0}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,{upper:n}=this.elements;n.ctx=void 0;let i=super.toCanvasElement(t,e);return n.ctx=n.el.getContext("2d"),i}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},S_={x1:0,y1:0,x2:0,y2:0},JM=G(G({},S_),{},{r1:0,r2:0}),Vo=(s,t)=>isNaN(s)&&typeof t=="number"?t:s;function b_(s){return s&&/%$/.test(s)&&Number.isFinite(parseFloat(s))}function M_(s,t){let e=typeof s=="number"?s:typeof s=="string"?parseFloat(s)/(b_(s)?100:1):NaN;return Zr(0,Vo(e,t),1)}var KM=/\s*;\s*/,$M=/\s*:\s*/;function QM(s,t){let e,n,i=s.getAttribute("style");if(i){let o=i.split(KM);o[o.length-1]===""&&o.pop();for(let a=o.length;a--;){let[l,c]=o[a].split($M).map((h=>h.trim()));l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}let r=new Ln(e||s.getAttribute("stop-color")||"rgb(0,0,0)");return{offset:M_(s.getAttribute("offset"),0),color:r.toRgb(),opacity:Vo(parseFloat(n||s.getAttribute("stop-opacity")||""),1)*r.getAlpha()*t}}function tw(s,t){let e=[],n=s.getElementsByTagName("stop"),i=M_(t,1);for(let r=n.length;r--;)e.push(QM(n[r],i));return e}function w_(s){return s.nodeName==="linearGradient"||s.nodeName==="LINEARGRADIENT"?"linear":"radial"}function T_(s){return s.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function Ei(s,t){return s.getAttribute(t)}function ew(s,t){return(function(e,n){let i,{width:r,height:o,gradientUnits:a}=n;return Object.entries(e).reduce(((l,c)=>{let[h,u]=c;if(u==="Infinity")i=1;else if(u==="-Infinity")i=0;else{let d=typeof u=="string";i=d?parseFloat(u):u,d&&b_(u)&&(i*=.01,a==="pixels"&&(h!=="x1"&&h!=="x2"&&h!=="r2"||(i*=r),h!=="y1"&&h!=="y2"||(i*=o)))}return l[h]=i,l}),{})})(w_(s)==="linear"?(function(e){return{x1:Ei(e,"x1")||0,y1:Ei(e,"y1")||0,x2:Ei(e,"x2")||"100%",y2:Ei(e,"y2")||0}})(s):(function(e){return{x1:Ei(e,"fx")||Ei(e,"cx")||"50%",y1:Ei(e,"fy")||Ei(e,"cy")||"50%",r1:0,x2:Ei(e,"cx")||"50%",y2:Ei(e,"cy")||"50%",r2:Ei(e,"r")||"50%"}})(s),G(G({},t),{},{gradientUnits:T_(s)}))}var Go=class{constructor(t){let{type:e="linear",gradientUnits:n="pixels",coords:i={},colorStops:r=[],offsetX:o=0,offsetY:a=0,gradientTransform:l,id:c}=t||{};Object.assign(this,{type:e,gradientUnits:n,coords:G(G({},e==="radial"?JM:S_),i),colorStops:r,offsetX:o,offsetY:a,gradientTransform:l,id:c?"".concat(c,"_").concat(tr()):tr()})}addColorStop(t){for(let e in t){let n=new Ln(t[e]);this.colorStops.push({offset:parseFloat(e),color:n.toRgb(),opacity:n.getAlpha()})}return this}toObject(t){return G(G({},$r(this,t)),{},{type:this.type,coords:G({},this.coords),colorStops:this.colorStops.map((e=>G({},e))),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0})}toSVG(t){let{additionalTransform:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],i=this.gradientTransform?this.gradientTransform.concat():In.concat(),r=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",o=this.colorStops.map((u=>G({},u))).sort(((u,d)=>u.offset-d.offset)),a=-this.offsetX,l=-this.offsetY;var c;r==="objectBoundingBox"?(a/=t.width,l/=t.height):(a+=t.width/2,l+=t.height/2),(c=t)&&typeof c._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(a-=t.pathOffset.x,l-=t.pathOffset.y),i[4]-=a,i[5]-=l;let h=['id="SVGID_'.concat(this.id,'"'),'gradientUnits="'.concat(r,'"'),'gradientTransform="'.concat(e?e+" ":"").concat(Ko(i),'"'),""].join(" ");if(this.type==="linear"){let{x1:u,y1:d,x2:f,y2:p}=this.coords;n.push("<linearGradient ",h,' x1="',u,'" y1="',d,'" x2="',f,'" y2="',p,`">
`)}else if(this.type==="radial"){let{x1:u,y1:d,x2:f,y2:p,r1:x,r2:m}=this.coords,_=x>m;n.push("<radialGradient ",h,' cx="',_?u:f,'" cy="',_?d:p,'" r="',_?x:m,'" fx="',_?f:u,'" fy="',_?p:d,`">
`),_&&(o.reverse(),o.forEach((P=>{P.offset=1-P.offset})));let S=Math.min(x,m);if(S>0){let P=S/Math.max(x,m);o.forEach((w=>{w.offset+=P*(1-w.offset)}))}}return o.forEach((u=>{let{color:d,offset:f,opacity:p}=u;n.push("<stop ",'offset="',100*f+"%",'" style="stop-color:',d,p!==void 0?";stop-opacity: "+p:";",`"/>
`)})),n.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),n.join("")}toLive(t){let{x1:e,y1:n,x2:i,y2:r,r1:o,r2:a}=this.coords,l=this.type==="linear"?t.createLinearGradient(e,n,i,r):t.createRadialGradient(e,n,o,i,r,a);return this.colorStops.forEach((c=>{let{color:h,opacity:u,offset:d}=c;l.addColorStop(d,u!==void 0?new Ln(h).setAlpha(u).toRgba():h)})),l}static async fromObject(t){let{colorStops:e,gradientTransform:n}=t;return new this(G(G({},t),{},{colorStops:e?e.map((i=>G({},i))):void 0,gradientTransform:n?[...n]:void 0}))}static fromElement(t,e,n){let i=T_(t),r=e._findCenterFromElement();return new this(G({id:t.getAttribute("id")||void 0,type:w_(t),coords:ew(t,{width:n.viewBoxWidth||n.width,height:n.viewBoxHeight||n.height}),colorStops:tw(t,n.opacity),gradientUnits:i,gradientTransform:wf(t.getAttribute("gradientTransform")||"")},i==="pixels"?{offsetX:e.width/2-r.x,offsetY:e.height/2-r.y}:{offsetX:0,offsetY:0}))}};X(Go,"type","Gradient"),Ut.setClass(Go,"gradient"),Ut.setClass(Go,"linear"),Ut.setClass(Go,"radial");var nw=["type","source","patternTransform"],Yr=class{get type(){return"pattern"}set type(t){$s("warn","Setting type has no effect",t)}constructor(t){X(this,"repeat","repeat"),X(this,"offsetX",0),X(this,"offsetY",0),X(this,"crossOrigin",""),this.id=tr(),Object.assign(this,t)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(t){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?t.createPattern(this.source,this.repeat):null}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{repeat:e,crossOrigin:n}=this;return G(G({},$r(this,t)),{},{type:"pattern",source:this.sourceToString(),repeat:e,crossOrigin:n,offsetX:Oe(this.offsetX,ye.NUM_FRACTION_DIGITS),offsetY:Oe(this.offsetY,ye.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null})}toSVG(t){let{width:e,height:n}=t,{source:i,repeat:r,id:o}=this,a=Vo(this.offsetX/e,0),l=Vo(this.offsetY/n,0),c=r==="repeat-y"||r==="no-repeat"?1+Math.abs(a||0):Vo(i.width/e,0),h=r==="repeat-x"||r==="no-repeat"?1+Math.abs(l||0):Vo(i.height/n,0);return['<pattern id="SVGID_'.concat(o,'" x="').concat(a,'" y="').concat(l,'" width="').concat(c,'" height="').concat(h,'">'),'<image x="0" y="0" width="'.concat(i.width,'" height="').concat(i.height,'" xlink:href="').concat(this.sourceToString(),'"></image>'),"</pattern>",""].join(`
`)}static async fromObject(t,e){let{type:n,source:i,patternTransform:r}=t,o=ke(t,nw),a=await sl(i,G(G({},e),{},{crossOrigin:o.crossOrigin}));return new this(G(G({},o),{},{patternTransform:r&&r.slice(0),source:a}))}};X(Yr,"type","Pattern"),Ut.setClass(Yr),Ut.setClass(Yr,"pattern");var iw=["path","left","top"],sw=["d"],$i=class s extends ln{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{path:n,left:i,top:r}=e,o=ke(e,iw);super(),Object.assign(this,s.ownDefaults),this.setOptions(o),this._setPath(t||[],!0),typeof i=="number"&&this.set(Re,i),typeof r=="number"&&this.set(Bn,r)}_setPath(t,e){this.path=f_(Array.isArray(t)?t:v_(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new st(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let i of this.path)switch(i[0]){case"L":t.lineTo(i[1]+e,i[2]+n);break;case"M":t.moveTo(i[1]+e,i[2]+n);break;case"C":t.bezierCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n,i[5]+e,i[6]+n);break;case"Q":t.quadraticCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return"#<Path (".concat(this.complexity(),'): { "top": ').concat(this.top,', "left": ').concat(this.left," }>")}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),{},{path:this.path.map((e=>e.slice()))})}toDatalessObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){let t=y_(this.path,ye.NUM_FRACTION_DIGITS);return["<path ","COMMON_PARTS",'d="'.concat(t,`" stroke-linecap="round" />
`)]}_getOffsetTransform(){let t=ye.NUM_FRACTION_DIGITS;return" translate(".concat(Oe(-this.pathOffset.x,t),", ").concat(Oe(-this.pathOffset.y,t),")")}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:i}=this._calcDimensions();this.set({width:e,height:n,pathOffset:i}),t&&this.setPositionByOrigin(i,ae,ae)}_calcBoundsFromPath(){let t=[],e=0,n=0,i=0,r=0;for(let o of this.path)switch(o[0]){case"L":i=o[1],r=o[2],t.push({x:e,y:n},{x:i,y:r});break;case"M":i=o[1],r=o[2],e=i,n=r;break;case"C":t.push(...Ef(i,r,o[1],o[2],o[3],o[4],o[5],o[6])),i=o[5],r=o[6];break;case"Q":t.push(...Ef(i,r,o[1],o[2],o[1],o[2],o[3],o[4])),i=o[3],r=o[4];break;case"Z":i=e,r=n}return Qi(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return G(G({},t),{},{pathOffset:new st(t.left+t.width/2,t.top+t.height/2)})}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{d:r}=i;return new this(r,G(G(G({},ke(i,sw)),e),{},{left:void 0,top:void 0}))}};X($i,"type","Path"),X($i,"cacheProperties",[...bs,"path","fillRule"]),X($i,"ATTRIBUTE_NAMES",[...ir,"d"]),Ut.setClass($i),Ut.setSVGClass($i);var rw=["left","top","radius"],C_=["radius","startAngle","endAngle","counterClockwise"],Ji=class s extends ln{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,Ve(this.startAngle),Ve(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(On)}getRadiusY(){return this.get("radius")*this.get(Qn)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...C_,...t])}_toSVG(){let t=(this.endAngle-this.startAngle)%360;if(t===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',"".concat(this.radius),`" />
`];{let{radius:e}=this,n=Ve(this.startAngle),i=Ve(this.endAngle),r=Ii(n)*e,o=Oi(n)*e,a=Ii(i)*e,l=Oi(i)*e,c=t>180?1:0,h=this.counterClockwise?0:1;return['<path d="M '.concat(r," ").concat(o," A ").concat(e," ").concat(e," 0 ").concat(c," ").concat(h," ").concat(a," ").concat(l,'" '),"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,radius:a=0}=i;return new this(G(G({},ke(i,rw)),{},{radius:a,left:r-a,top:o-a}))}static fromObject(t){return super._fromObject(t)}};X(Ji,"type","Circle"),X(Ji,"cacheProperties",[...bs,...C_]),X(Ji,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),X(Ji,"ATTRIBUTE_NAMES",["cx","cy","r",...ir]),Ut.setClass(Ji),Ut.setSVGClass(Ji);var ow=["x1","y1","x2","y2"],aw=["x1","y1","x2","y2"],Pf=["x1","x2","y1","y2"],Cr=class s extends ln{constructor(){let[t,e,n,i]=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0,0,0],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=i,this._setWidthHeight();let{left:o,top:a}=r;typeof o=="number"&&this.set(Re,o),typeof a=="number"&&this.set(Bn,a)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:i}=this;this.width=Math.abs(n-t),this.height=Math.abs(i-e);let{left:r,top:o,width:a,height:l}=Qi([{x:t,y:e},{x:n,y:i}]),c=new st(r+a/2,o+l/2);this.setPositionByOrigin(c,ae,ae)}_set(t,e){return super._set(t,e),Pf.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var i;hi(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(i=this.stroke)!==null&&i!==void 0?i:t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new st((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),this.calcLinePoints())}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:i,width:r,height:o}=this,a=t<=e?-1:1,l=n<=i?-1:1;return{x1:a*r/2,x2:a*-r/2,y1:l*o/2,y2:l*-o/2}}_toSVG(){let{x1:t,x2:e,y1:n,y2:i}=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="'.concat(t,'" y1="').concat(n,'" x2="').concat(e,'" y2="').concat(i,`" />
`)]}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{x1:r=0,y1:o=0,x2:a=0,y2:l=0}=i;return new this([r,o,a,l],ke(i,ow))}static fromObject(t){let{x1:e,y1:n,x2:i,y2:r}=t,o=ke(t,aw);return this._fromObject(G(G({},o),{},{points:[e,n,i,r]}),{extraParam:"points"})}};X(Cr,"type","Line"),X(Cr,"cacheProperties",[...bs,...Pf]),X(Cr,"ATTRIBUTE_NAMES",ir.concat(Pf)),Ut.setClass(Cr),Ut.setSVGClass(Cr);var Ho=class s extends ln{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',"".concat(-t," ").concat(e,",0 ").concat(-e,",").concat(t," ").concat(e),'" />']}};X(Ho,"type","Triangle"),X(Ho,"ownDefaults",{width:100,height:100}),Ut.setClass(Ho),Ut.setSVGClass(Ho);var E_=["rx","ry"],Js=class s extends ln{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(On)}getRy(){return this.get("ry")*this.get(Qn)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...E_,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" rx="'.concat(this.rx,'" ry="').concat(this.ry,`" />
`)]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,Ss,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n);return i.left=(i.left||0)-i.rx,i.top=(i.top||0)-i.ry,new this(i)}};function lw(s){if(!s)return[];let t=s.replace(/,/g," ").trim().split(/\s+/),e=[];for(let n=0;n<t.length;n+=2)e.push({x:parseFloat(t[n]),y:parseFloat(t[n+1])});return e}X(Js,"type","Ellipse"),X(Js,"cacheProperties",[...bs,...E_]),X(Js,"ownDefaults",{rx:0,ry:0}),X(Js,"ATTRIBUTE_NAMES",[...ir,"cx","cy","rx","ry"]),Ut.setClass(Js),Ut.setSVGClass(Js);var cw=["left","top"],A_={exactBoundingBox:!1},Zi=class s extends ln{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),X(this,"strokeDiff",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:i}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set(Re,n),typeof i=="number"&&this.set(Bn,i)}isOpen(){return!0}_projectStrokeOnPoints(t){return s_(this.points,t,this.isOpen())}_calcDimensions(t){t=G({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth},t||{});let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map((c=>c.projectedPoint)):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new st,strokeOffset:new st,strokeDiff:new st};let n=Qi(e),i=fl(G(G({},t),{},{scaleX:1,scaleY:1})),r=Qi(this.points.map((c=>Tn(c,i,!0)))),o=new st(this.scaleX,this.scaleY),a=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(a-=l*Math.tan(Ve(this.skewX)),l-=a*Math.tan(Ve(this.skewY))),G(G({},n),{},{pathOffset:new st(a,l),strokeOffset:new st(r.left,r.top).subtract(new st(n.left,n.top)).multiply(o),strokeDiff:new st(n.width,n.height).subtract(new st(r.width,r.height)).multiply(o)})}_findCenterFromElement(){let t=Qi(this.points);return new st(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}=this._calcDimensions();this.set({width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}),t&&this.setPositionByOrigin(new st(e+i/2,n+r/2),ae,ae)}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new st(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.exactBoundingBox){let o;if(Object.keys(t).some((a=>this.strokeUniform||this.constructor.layoutProperties.includes(a)))){var e,n;let{width:a,height:l}=this._calcDimensions(t);o=new st((e=t.width)!==null&&e!==void 0?e:a,(n=t.height)!==null&&n!==void 0?n:l)}else{var i,r;o=new st((i=t.width)!==null&&i!==void 0?i:this.width,(r=t.height)!==null&&r!==void 0?r:this.height)}return o.multiply(new st(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,i=super._set(t,e);return this.exactBoundingBox&&n&&((t===On||t===Qn)&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),i}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),{},{points:this.points.map((e=>{let{x:n,y:i}=e;return{x:n,y:i}}))})}_toSVG(){let t=[],e=this.pathOffset.x,n=this.pathOffset.y,i=ye.NUM_FRACTION_DIGITS;for(let r=0,o=this.points.length;r<o;r++)t.push(Oe(this.points[r].x-e,i),",",Oe(this.points[r].y-n,i)," ");return["<".concat(this.constructor.type.toLowerCase()," "),"COMMON_PARTS",'points="'.concat(t.join(""),`" />
`)]}_render(t){let e=this.points.length,n=this.pathOffset.x,i=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-i);for(let r=0;r<e;r++){let o=this.points[r];t.lineTo(o.x-n,o.y-i)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){return new this(lw(t.getAttribute("points")),G(G({},ke(Ms(t,this.ATTRIBUTE_NAMES,n),cw)),e))}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};X(Zi,"ownDefaults",A_),X(Zi,"type","Polyline"),X(Zi,"layoutProperties",[na,ia,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),X(Zi,"cacheProperties",[...bs,"points"]),X(Zi,"ATTRIBUTE_NAMES",[...ir]),Ut.setClass(Zi),Ut.setSVGClass(Zi);var Wo=class extends Zi{isOpen(){return!1}};X(Wo,"ownDefaults",A_),X(Wo,"type","Polygon"),Ut.setClass(Wo),Ut.setSVGClass(Wo);var Qh=class extends ln{isEmptyStyles(t){if(!this.styles||t!==void 0&&!this.styles[t])return!0;let e=t===void 0?this.styles:{line:this.styles[t]};for(let n in e)for(let i in e[n])for(let r in e[n][i])return!1;return!0}styleHas(t,e){if(!this.styles||e!==void 0&&!this.styles[e])return!1;let n=e===void 0?this.styles:{0:this.styles[e]};for(let i in n)for(let r in n[i])if(n[i][r][t]!==void 0)return!0;return!1}cleanStyle(t){if(!this.styles)return!1;let e=this.styles,n,i,r=0,o=!0,a=0;for(let l in e){n=0;for(let c in e[l]){let h=e[l][c]||{};r++,h[t]!==void 0?(i?h[t]!==i&&(o=!1):i=h[t],h[t]===this[t]&&delete h[t]):o=!1,Object.keys(h).length!==0?n++:delete e[l][c]}n===0&&delete e[l]}for(let l=0;l<this._textLines.length;l++)a+=this._textLines[l].length;o&&r===a&&(this[t]=i,this.removeStyle(t))}removeStyle(t){if(!this.styles)return;let e=this.styles,n,i,r;for(i in e){for(r in n=e[i],n)delete n[r][t],Object.keys(n[r]).length===0&&delete n[r];Object.keys(n).length===0&&delete e[i]}}_extendStyles(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);this._getLineStyle(n)||this._setLineStyle(n);let r=qf(G(G({},this._getStyleDeclaration(n,i)),e),(o=>o!==void 0));this._setStyleDeclaration(n,i,r)}getSelectionStyles(t,e,n){let i=[];for(let r=t;r<(e||t);r++)i.push(this.getStyleAtPosition(r,n));return i}getStyleAtPosition(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);return e?this.getCompleteStyleDeclaration(n,i):this._getStyleDeclaration(n,i)}setSelectionStyles(t,e,n){for(let i=e;i<(n||e);i++)this._extendStyles(i,t);this._forceClearCache=!0}_getStyleDeclaration(t,e){var n;let i=this.styles&&this.styles[t];return i&&(n=i[e])!==null&&n!==void 0?n:{}}getCompleteStyleDeclaration(t,e){return G(G({},$r(this,this.constructor._styleProperties)),this._getStyleDeclaration(t,e))}_setStyleDeclaration(t,e,n){this.styles[t][e]=n}_deleteStyleDeclaration(t,e){delete this.styles[t][e]}_getLineStyle(t){return!!this.styles[t]}_setLineStyle(t){this.styles[t]={}}_deleteLineStyle(t){delete this.styles[t]}};X(Qh,"_styleProperties",V1);var hw=/  +/g,uw=/"/g;function sf(s,t,e,n,i){return"		".concat((function(r,o){let{left:a,top:l,width:c,height:h}=o,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ye.NUM_FRACTION_DIGITS,d=ll(Qe,r,!1),[f,p,x,m]=[a,l,c,h].map((_=>Oe(_,u)));return"<rect ".concat(d,' x="').concat(f,'" y="').concat(p,'" width="').concat(x,'" height="').concat(m,'"></rect>')})(s,{left:t,top:e,width:n,height:i}),`
`)}var dw=["textAnchor","textDecoration","dx","dy","top","left","fontSize","strokeWidth"],rf,Xe=class s extends Qh{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),X(this,"__charBounds",[]),Object.assign(this,s.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=op(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes(Ki)&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,i,r,o,a;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign===Ki||l!==c-1&&!this.isEndOfWrapping(l))&&(i=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(a=this.textLines[l].match(this._reSpacesAndTabs)))){n=a.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)o=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(o.width+=t,o.kernedWidth+=t,o.left+=i,i+=t):o.left+=i}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,i;for(i=0;i<n.length;i++){if(t<=n[i].length)return{lineIndex:i,charIndex:t};t-=n[i].length+this.missingNewlineOffset(i,e)}return{lineIndex:i-1,charIndex:n[i-1].length<t?n[i-1].length:t}}toString(){return"#<Text (".concat(this.complexity(),'): { "text": "').concat(this.text,'", "fontFamily": "').concat(this.fontFamily,'" }>')}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst===Vn?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case ae:t.textBaseline="middle";break;case"ascender":t.textBaseline=Bn;break;case"descender":t.textBaseline=uf}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let i=this.getLineWidth(e);i>t&&(t=i)}return t}_renderTextLine(t,e,n,i,r,o){this._renderChars(t,e,n,i,r,o)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),i=this._getTopOffset();for(let r=0,o=this._textLines.length;r<o;r++){let a=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){i+=a;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,u,d=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),x=this.getHeightOfLineImpl(r);for(let m=0;m<l;m++){let _=this.__charBounds[r][m];u=this.getValueOfPropertyAt(r,m,"textBackgroundColor"),this.path?(t.save(),t.translate(_.renderLeft,_.renderTop),t.rotate(_.angle),t.fillStyle=u,u&&t.fillRect(-_.width/2,-x*(1-this._fontSizeFraction),_.width,x),t.restore()):u!==p?(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=p,p&&t.fillRect(h,i,d,x),f=_.left,d=_.width,p=u):d+=_.kernedWidth}u&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=u,t.fillRect(h,i,d,x)),i+=a}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,i){let r=nl.getFontCache(e),o=this._getFontDeclaration(e),a=n?n+t:t,l=n&&o===this._getFontDeclaration(i),c=e.fontSize/this.CACHE_FONT_SIZE,h,u,d,f;if(n&&r.has(n)&&(d=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(a)&&(u=r.get(a),f=u-d),h===void 0||d===void 0||u===void 0){let p=(function(){return rf||(rf=ti({width:0,height:0}).getContext("2d")),rf})();this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),d===void 0&&l&&n&&(d=p.measureText(n).width,r.set(n,d)),l&&u===void 0&&(u=p.measureText(a).width,r.set(a,u),f=u-d)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,i=0,r=this.pathSide===je,o=this.path,a=this._textLines[t],l=a.length,c=new Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let u=a[h];n=this._getGraphemeBox(u,t,h,e),c[h]=n,i+=n.kernedWidth,e=u}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},o&&o.segmentsInfo){let h=0,u=o.segmentsInfo[o.segmentsInfo.length-1].length;switch(this.textAlign){case Re:h=r?u-i:0;break;case ae:h=(u-i)/2;break;case je:h=r?0:u-i}h+=this.pathStartOffset*(r?-1:1);for(let d=r?l-1:0;r?d>=0:d<l;r?d--:d++)n=c[d],h>u?h%=u:h<0&&(h+=u),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:i,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,i=this.path,r=x_(i.path,n,i.segmentsInfo);e.renderLeft=r.x-i.pathOffset.x,e.renderTop=r.y-i.pathOffset.y,e.angle=r.angle+(this.pathSide===je?Math.PI:0)}_getGraphemeBox(t,e,n,i,r){let o=this.getCompleteStyleDeclaration(e,n),a=i?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,o,i,a),c,h=l.kernedWidth,u=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,h+=c);let d={width:u,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];d.left=f.left+f.width+l.kernedWidth-l.width}return d}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let i=1,r=this._textLines[t].length;i<r;i++)n=Math.max(this.getHeightOfChar(t,i),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,i=this._getLeftOffset(),r=this._getTopOffset();for(let o=0,a=this._textLines.length;o<a;o++)this._renderTextLine(e,t,this._textLines[o],i+this._getLineLeftOffset(o),r+n+this.getHeightOfLineImpl(o),o),n+=this.getHeightOfLine(o);t.restore()}_renderTextFill(t){(this.fill||this.styleHas(Qe))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,i,r,o){let a=this.textAlign.includes(Ki),l=this.path,c=!a&&this.charSpacing===0&&this.isEmptyStyles(o)&&!l,h=this.direction==="ltr",u=this.direction==="ltr"?1:-1,d=e.direction,f,p,x,m,_,S="",P=0;if(e.save(),d!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?Re:je),r-=this.getHeightOfLineImpl(o)*this._fontSizeFraction,c)return this._renderChar(t,e,o,0,n.join(""),i,r),void e.restore();for(let w=0,R=n.length-1;w<=R;w++)m=w===R||this.charSpacing||l,S+=n[w],x=this.__charBounds[o][w],P===0?(i+=u*(x.kernedWidth-x.width),P+=x.width):P+=x.kernedWidth,a&&!m&&this._reSpaceAndTab.test(n[w])&&(m=!0),m||(f=f||this.getCompleteStyleDeclaration(o,w),p=this.getCompleteStyleDeclaration(o,w+1),m=pu(f,p,!1)),m&&(l?(e.save(),e.translate(x.renderLeft,x.renderTop),e.rotate(x.angle),this._renderChar(t,e,o,w,S,-P/2,0),e.restore()):(_=i,this._renderChar(t,e,o,w,S,_,r)),S="",f=p,i+=u*P,P=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,i=ti({width:e,height:n}),r=i.getContext("2d");return i.width=e,i.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(i,"no-repeat")}handleFiller(t,e,n){let i,r;return hi(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(i=-this.width/2,r=-this.height/2,t.translate(i,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:i,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,e){let{stroke:n,strokeWidth:i}=e;return t.lineWidth=i,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",n)}_setFillStyles(t,e){let{fill:n}=e;return this.handleFiller(t,"fillStyle",n)}_renderChar(t,e,n,i,r,o,a){let l=this._getStyleDeclaration(n,i),c=this.getCompleteStyleDeclaration(n,i),h=t==="fillText"&&c.fill,u=t==="strokeText"&&c.stroke&&c.strokeWidth;if(u||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(a+=l.deltaY),h){let d=this._setFillStyles(e,c);e.fillText(r,o-d.offsetX,a-d.offsetY)}if(u){let d=this._setStrokeStyles(e,c);e.strokeText(r,o-d.offsetX,a-d.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let i=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"fontSize"),o=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"deltaY"),a={fontSize:r*n.size,deltaY:o+r*n.baseline};this.setSelectionStyles(a,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,i=this.textAlign,r=this.direction,o=this.isEndOfWrapping(t),a=0;return i===Ki||i===ol&&!o||i===rl&&!o||i===zh&&!o?0:(i===ae&&(a=n/2),i===je&&(a=n),i===ol&&(a=n/2),i===rl&&(a=n),r==="rtl"&&(i===je||i===Ki||i===rl?a=0:i===Re||i===zh?a=-n:i!==ae&&i!==ol||(a=-n/2)),a)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing!==0?this.fontSize*this.charSpacing/1e3:0}getValueOfPropertyAt(t,e,n){var i;return(i=this._getStyleDeclaration(t,e)[n])!==null&&i!==void 0?i:this[n]}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),i=this._getLeftOffset(),r=this.path,o=this._getWidthOfCharSpacing(),a=e==="linethrough"?.5:e==="overline"?1:0,l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let u=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=u;continue}let d=this._textLines[c],f=u/this.lineHeight,p=this._getLineLeftOffset(c),x=0,m=0,_=this.getValueOfPropertyAt(c,0,e),S=this.getValueOfPropertyAt(c,0,Qe),P=this.getValueOfPropertyAt(c,0,qr),w=_,R=S,D=P,g=n+f*(1-this._fontSizeFraction),v=this.getHeightOfChar(c,0),E=this.getValueOfPropertyAt(c,0,"deltaY");for(let F=0,z=d.length;F<z;F++){let L=this.__charBounds[c][F];w=this.getValueOfPropertyAt(c,F,e),R=this.getValueOfPropertyAt(c,F,Qe),D=this.getValueOfPropertyAt(c,F,qr);let j=this.getHeightOfChar(c,F),q=this.getValueOfPropertyAt(c,F,"deltaY");if(r&&w&&R){let U=this.fontSize*D/1e3;t.save(),t.fillStyle=S,t.translate(L.renderLeft,L.renderTop),t.rotate(L.angle),t.fillRect(-L.kernedWidth/2,l*j+q-a*U,L.kernedWidth,U),t.restore()}else if((w!==_||R!==S||j!==v||D!==P||q!==E)&&m>0){let U=this.fontSize*P/1e3,J=i+p+x;this.direction==="rtl"&&(J=this.width-J-m),_&&S&&P&&(t.fillStyle=S,t.fillRect(J,g+l*v+E-a*U,m,U)),x=L.left,m=L.width,_=w,P=D,S=R,v=j,E=q}else m+=L.kernedWidth}let C=i+p+x;this.direction==="rtl"&&(C=this.width-C-m),t.fillStyle=R;let I=this.fontSize*D/1e3;w&&R&&D&&t.fillRect(C,g+l*v+E-a*I,m-o,I),n+=u}this._removeShadow(t)}_getFontDeclaration(){let{fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:i=this.fontSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=t.includes("'")||t.includes('"')||t.includes(",")||s.genericFonts.includes(t.toLowerCase())?t:'"'.concat(t,'"');return[e,n,"".concat(r?this.CACHE_FONT_SIZE:i,"px"),o].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return fu(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=new Array(e.length),i=[`
`],r=[];for(let o=0;o<e.length;o++)n[o]=this.graphemeSplit(e[o]),r=r.concat(n[o],i);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject([...N0,...t])),{},{styles:o_(this.styles,this.text)},this.path?{path:this.path.toObject()}:{})}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let i=!1,r=!1;if(typeof t=="object")for(let o in t)o==="path"&&this.setPathInfo(),i=i||n.includes(o),r=r||o==="path";else i=n.includes(t),r=t==="path";return r&&this.setPathInfo(),i&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let i=Ms(t,s.ATTRIBUTE_NAMES,n),r=G(G({},e),i),{textAnchor:o=Re,textDecoration:a="",dx:l=0,dy:c=0,top:h=0,left:u=0,fontSize:d=zf,strokeWidth:f=1}=r,p=ke(r,dw),x=new this(Uh(t.textContent||"").trim(),G({left:u+l,top:h+c,underline:a.includes("underline"),overline:a.includes("overline"),linethrough:a.includes("line-through"),strokeWidth:0,fontSize:d},p)),m=x.getScaledHeight()/x.height,_=((x.height+x.strokeWidth)*x.lineHeight-x.height)*m,S=x.getScaledHeight()+_,P=0;return o===ae&&(P=x.getScaledWidth()/2),o===je&&(P=x.getScaledWidth()),x.set({left:x.left-P,top:x.top-(S-x.fontSize*(.07+x._fontSizeFraction))/x.lineHeight,strokeWidth:f}),x}static fromObject(t){return this._fromObject(G(G({},t),{},{styles:a_(t.styles||{},t.text)}),{extraParam:"text"})}};X(Xe,"textLayoutProperties",F0),X(Xe,"cacheProperties",[...bs,...N0]),X(Xe,"ownDefaults",G1),X(Xe,"type","Text"),X(Xe,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),X(Xe,"ATTRIBUTE_NAMES",ir.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-anchor")),n_(Xe,[class extends Bh{_toSVG(){let s=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(s.textTop,s.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(s){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:s,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:s,withShadow:!0,additionalTransform:Ko(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg(s){let{textBgRects:t,textSpans:e}=s,n=this.getSvgTextDecoration(this);return[t.join(""),'		<text xml:space="preserve" ','font-family="'.concat(this.fontFamily.replace(uw,"'"),'" '),'font-size="'.concat(this.fontSize,'" '),this.fontStyle?'font-style="'.concat(this.fontStyle,'" '):"",this.fontWeight?'font-weight="'.concat(this.fontWeight,'" '):"",n?'text-decoration="'.concat(n,'" '):"",this.direction==="rtl"?'direction="'.concat(this.direction,'" '):"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",e.join(""),`</text>
`]}_getSVGTextAndBg(s,t){let e=[],n=[],i,r=s;this.backgroundColor&&n.push(...sf(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let o=0,a=this._textLines.length;o<a;o++)i=this._getLineLeftOffset(o),this.direction==="rtl"&&(i+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,t+i,r),this._setSVGTextLineText(e,o,t+i,r),r+=this.getHeightOfLine(o);return{textSpans:e,textBgRects:n}}_createTextCharSpan(s,t,e,n,i){let r=ye.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,s!==s.trim()||!!s.match(hw)),a=o?'style="'.concat(o,'"'):"",l=t.deltaY,c=l?' dy="'.concat(Oe(l,r),'" '):"",{angle:h,renderLeft:u,renderTop:d,width:f}=i,p="";if(u!==void 0){let x=f/2;h&&(p=' rotate="'.concat(Oe(ns(h),r),'"'));let m=Kr({angle:ns(h)});m[4]=u,m[5]=d;let _=new st(-x,0).transform(m);e=_.x,n=_.y}return'<tspan x="'.concat(Oe(e,r),'" y="').concat(Oe(n,r),'" ').concat(c).concat(p).concat(a,">").concat(r_(s),"</tspan>")}_setSVGTextLineText(s,t,e,n){let i=this.getHeightOfLine(t),r=this.textAlign.includes(Ki),o=this._textLines[t],a,l,c,h,u,d="",f=0;n+=i*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,x=o.length-1;p<=x;p++)u=p===x||this.charSpacing||this.path,d+=o[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!u&&this._reSpaceAndTab.test(o[p])&&(u=!0),u||(a=a||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),u=pu(a,l,!0)),u&&(h=this._getStyleDeclaration(t,p),s.push(this._createTextCharSpan(d,h,e,n,c)),d="",a=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(s,t,e,n){let i=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,o,a=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<i.length;h++){let{left:u,width:d,kernedWidth:f}=this.__charBounds[t][h];o=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),o!==c?(c&&s.push(...sf(c,e+l,n,a,r)),l=u,a=d,c=o):a+=f}o&&s.push(...sf(c,e+l,n,a,r))}_getSVGLineTopOffset(s){let t,e=0;for(t=0;t<s;t++)e+=this.getHeightOfLine(t);let n=this.getHeightOfLine(t);return{lineTop:e,offset:(this._fontSizeMult-this._fontSizeFraction)*n/(this.lineHeight*this._fontSizeMult)}}getSvgStyles(s){return"".concat(super.getSvgStyles(s)," text-decoration-thickness: ").concat(Oe(this.textDecorationThickness*this.getObjectScaling().y/10,ye.NUM_FRACTION_DIGITS),"%; white-space: pre;")}getSvgSpanStyles(s,t){let{fontFamily:e,strokeWidth:n,stroke:i,fill:r,fontSize:o,fontStyle:a,fontWeight:l,deltaY:c,textDecorationThickness:h,linethrough:u,overline:d,underline:f}=s,p=this.getSvgTextDecoration({underline:f??this.underline,overline:d??this.overline,linethrough:u??this.linethrough}),x=h||this.textDecorationThickness;return[i?ll(Vn,i):"",n?"stroke-width: ".concat(n,"; "):"",e?"font-family: ".concat(e.includes("'")||e.includes('"')?e:"'".concat(e,"'"),"; "):"",o?"font-size: ".concat(o,"px; "):"",a?"font-style: ".concat(a,"; "):"",l?"font-weight: ".concat(l,"; "):"",p?"text-decoration: ".concat(p,"; text-decoration-thickness: ").concat(Oe(x*this.getObjectScaling().y/10,ye.NUM_FRACTION_DIGITS),"%; "):"",r?ll(Qe,r):"",c?"baseline-shift: ".concat(-c,"; "):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(s){return["overline","underline","line-through"].filter((t=>s[t.replace("-","")])).join(" ")}}]),Ut.setClass(Xe),Ut.setSVGClass(Xe);var Df=class{constructor(t){X(this,"target",void 0),X(this,"__mouseDownInPlace",!1),X(this,"__dragStartFired",!1),X(this,"__isDraggingOver",!1),X(this,"__dragStartSelection",void 0),X(this,"__dragImageDisposer",void 0),X(this,"_dispose",void 0),this.target=t;let e=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{e.forEach((n=>n())),this._dispose=void 0}}isPointerOverSelection(t){let e=this.target,n=e.getSelectionStartFromPointer(t);return e.isEditing&&n>=e.selectionStart&&n<=e.selectionEnd&&e.selectionStart<e.selectionEnd}start(t){return this.__mouseDownInPlace=this.isPointerOverSelection(t)}isActive(){return this.__mouseDownInPlace}end(t){let e=this.isActive();return e&&!this.__dragStartFired&&(this.target.setCursorByClick(t),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,e}getDragStartSelection(){return this.__dragStartSelection}setDragImage(t,e){var n;let{selectionStart:i,selectionEnd:r}=e,o=this.target,a=o.canvas,l=new st(o.flipX?-1:1,o.flipY?-1:1),c=o._getCursorBoundaries(i),h=new st(c.left+c.leftOffset,c.top+c.topOffset).multiply(l).transform(o.calcTransformMatrix()),u=a.getScenePoint(t).subtract(h),d=o.getCanvasRetinaScaling(),f=o.getBoundingRect(),p=h.subtract(new st(f.left,f.top)),x=a.viewportTransform,m=p.add(u).transform(x,!0),_=o.backgroundColor,S=ip(o.styles);o.backgroundColor="";let P={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};o.setSelectionStyles(P,0,i),o.setSelectionStyles(P,r,o.text.length),o.dirty=!0;let w=o.toCanvasElement({enableRetinaScaling:a.enableRetinaScaling,viewportTransform:!0});o.backgroundColor=_,o.styles=S,o.dirty=!0,Kh(w,{position:"fixed",left:"".concat(-w.width,"px"),border:zn,width:"".concat(w.width/d,"px"),height:"".concat(w.height/d,"px")}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{w.remove()},Ai(t.target||this.target.hiddenTextarea).body.appendChild(w),(n=t.dataTransfer)===null||n===void 0||n.setDragImage(w,m.x,m.y)}onDragStart(t){this.__dragStartFired=!0;let e=this.target,n=this.isActive();if(n&&t.dataTransfer){let i=this.__dragStartSelection={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd},r=e._text.slice(i.selectionStart,i.selectionEnd).join(""),o=G({text:e.text,value:r},i);t.dataTransfer.setData("text/plain",r),t.dataTransfer.setData("application/fabric",JSON.stringify({value:r,styles:e.getSelectionStyles(i.selectionStart,i.selectionEnd,!0)})),t.dataTransfer.effectAllowed="copyMove",this.setDragImage(t,o)}return e.abortCursorAnimation(),n}canDrop(t){if(this.target.editable&&!this.target.getActiveControl()&&!t.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let e=this.target.getSelectionStartFromPointer(t),n=this.__dragStartSelection;return e<n.selectionStart||e>n.selectionEnd}return!0}return!1}targetCanDrop(t){return this.target.canDrop(t)}dragEnterHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n&&(this.__isDraggingOver=!0)}dragOverHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n?this.__isDraggingOver=!0:this.__isDraggingOver&&!n&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(e.preventDefault(),t.canDrop=!0,t.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(t){var e;let{e:n}=t,i=n.defaultPrevented;this.__isDraggingOver=!1,n.preventDefault();let r=(e=n.dataTransfer)===null||e===void 0?void 0:e.getData("text/plain");if(r&&!i){let o=this.target,a=o.canvas,l=o.getSelectionStartFromPointer(n),{styles:c}=n.dataTransfer.types.includes("application/fabric")?JSON.parse(n.dataTransfer.getData("application/fabric")):{},h=r[Math.max(0,r.length-1)],u=0;if(this.__dragStartSelection){let d=this.__dragStartSelection.selectionStart,f=this.__dragStartSelection.selectionEnd;l>d&&l<=f?l=d:l>f&&(l-=f-d),o.removeChars(d,f),delete this.__dragStartSelection}o._reNewline.test(h)&&(o._reNewline.test(o._text[l])||l===o._text.length)&&(r=r.trimEnd()),t.didDrop=!0,t.dropTarget=o,o.insertChars(r,c,l),a.setActiveObject(o),o.enterEditing(n),o.selectionStart=Math.min(l+u,o._text.length),o.selectionEnd=Math.min(o.selectionStart+r.length,o._text.length),o.hiddenTextarea.value=o.text,o._updateTextarea(),o.hiddenTextarea.focus(),o.fire(Dh,{index:l+u,action:"drop"}),a.fire("text:changed",{target:o}),a.contextTopDirty=!0,a.requestRenderAll()}}dragEndHandler(t){let{e}=t;if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var n;let i=this.target,r=this.target.canvas,{selectionStart:o,selectionEnd:a}=this.__dragStartSelection,l=((n=e.dataTransfer)===null||n===void 0?void 0:n.dropEffect)||zn;l===zn?(i.selectionStart=o,i.selectionEnd=a,i._updateTextarea(),i.hiddenTextarea.focus()):(i.clearContextTop(),l==="move"&&(i.removeChars(o,a),i.selectionStart=i.selectionEnd=o,i.hiddenTextarea&&(i.hiddenTextarea.value=i.text),i._updateTextarea(),i.fire(Dh,{index:o,action:"dragend"}),r.fire("text:changed",{target:i}),r.requestRenderAll()),i.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},r0=/[ \n\.,;!\?\-]/,If=class extends Xe{constructor(){super(...arguments),X(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(t){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(t)}_animateCursor(t){let{toValue:e,duration:n,delay:i,onComplete:r}=t;return tp({startValue:this._currentCursorOpacity,endValue:e,duration:n,delay:i,onComplete:r,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:o=>{this._currentCursorOpacity=o,this.renderCursorOrSelection()}})}_tick(t){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(t||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var t;(t=this._currentTickCompleteState)===null||t===void 0||t.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(t){this.abortCursorAnimation(),this._tick(t?0:this.cursorDelay)}abortCursorAnimation(){let t=!1;[this._currentTickState,this._currentTickCompleteState].forEach((e=>{e&&!e.isDone()&&(t=!0,e.abort())})),this._currentCursorOpacity=1,t&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some((t=>!t||t.isDone()))&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(t){let e=0,n=t-1;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n--;for(;/\S/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findWordBoundaryRight(t){let e=0,n=t;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n++;for(;/\S/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}findLineBoundaryLeft(t){let e=0,n=t-1;for(;!/\n/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findLineBoundaryRight(t){let e=0,n=t;for(;!/\n/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}searchWordBoundary(t,e){let n=this._text,i=t>0&&this._reSpace.test(n[t])&&(e===-1||!Vf.test(n[t-1]))?t-1:t,r=n[i];for(;i>0&&i<n.length&&!r0.test(r);)i+=e,r=n[i];return e===-1&&r0.test(r)&&i++,i}selectWord(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.searchWordBoundary(t,-1),i=Math.max(n,this.searchWordBoundary(t,1));this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(t){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",t?{e:t}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:t}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(t){if(this.getActiveControl())return;let e=this.hiddenTextarea;Ai(e).activeElement!==e&&e.focus();let n=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;(n===this.__selectionStartOnMouseDown&&i!==r||i!==n&&r!==n)&&(n>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=n):(this.selectionStart=n,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(t,e,n){let i=n.slice(0,t),r=this.graphemeSplit(i).length;if(t===e)return{selectionStart:r,selectionEnd:r};let o=n.slice(t,e);return{selectionStart:r,selectionEnd:r+this.graphemeSplit(o).length}}fromGraphemeToStringSelection(t,e,n){let i=n.slice(0,t).join("").length;return t===e?{selectionStart:i,selectionEnd:i}:{selectionStart:i,selectionEnd:i+n.slice(t,e).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){if(!this.hiddenTextarea)return;this.cursorOffsetCache={};let t=this.hiddenTextarea;this.text=t.value,this.set("dirty",!0),this.initDimensions(),this.setCoords();let e=this.fromStringToGraphemeSelection(t.selectionStart,t.selectionEnd,t.value);this.selectionEnd=this.selectionStart=e.selectionEnd,this.inCompositionMode||(this.selectionStart=e.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex,o=this.getValueOfPropertyAt(i,r,"fontSize")*this.lineHeight,a=e.leftOffset,l=this.getCanvasRetinaScaling(),c=this.canvas.upperCanvasEl,h=c.width/l,u=c.height/l,d=h-o,f=u-o,p=new st(e.left+a,e.top+e.topOffset+o).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new st(c.clientWidth/h,c.clientHeight/u));return p.x<0&&(p.x=0),p.x>d&&(p.x=d),p.y<0&&(p.y=0),p.y>f&&(p.y=f),p.x+=this.canvas._offset.left,p.y+=this.canvas._offset.top,{left:"".concat(p.x,"px"),top:"".concat(p.y,"px"),fontSize:"".concat(o,"px"),charHeight:o}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}_exitEditing(){let t=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,t&&(t.blur&&t.blur(),t.parentNode&&t.parentNode.removeChild(t)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop()}exitEditingImpl(){this._exitEditing(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let t=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),t&&this.fire(Ih),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let t in this.styles)this._textLines[t]||delete this.styles[t]}removeStyleFromTo(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t,!0),{lineIndex:r,charIndex:o}=this.get2DCursorLocation(e,!0);if(n!==r){if(this.styles[n])for(let a=i;a<this._unwrappedTextLines[n].length;a++)delete this.styles[n][a];if(this.styles[r])for(let a=o;a<this._unwrappedTextLines[r].length;a++){let l=this.styles[r][a];l&&(this.styles[n]||(this.styles[n]={}),this.styles[n][i+a-o]=l)}for(let a=n+1;a<=r;a++)delete this.styles[a];this.shiftLineStyles(r,n-r)}else if(this.styles[n]){let a=this.styles[n],l=o-i;for(let c=i;c<o;c++)delete a[c];for(let c in this.styles[n]){let h=parseInt(c,10);h>=o&&(a[h-l]=a[c],delete a[c])}}}shiftLineStyles(t,e){let n=Object.assign({},this.styles);for(let i in this.styles){let r=parseInt(i,10);r>t&&(this.styles[r+e]=n[r],n[r-e]||delete this.styles[r])}}insertNewlineStyleObject(t,e,n,i){let r={},o=this._unwrappedTextLines[t].length,a=o===e,l=!1;n||(n=1),this.shiftLineStyles(t,n);let c=this.styles[t]?this.styles[t][e===0?e:e-1]:void 0;for(let u in this.styles[t]){let d=parseInt(u,10);d>=e&&(l=!0,r[d-e]=this.styles[t][u],a&&e===0||delete this.styles[t][u])}let h=!1;for(l&&!a&&(this.styles[t+n]=r,h=!0),(h||o>e)&&n--;n>0;)i&&i[n-1]?this.styles[t+n]={0:G({},i[n-1])}:c?this.styles[t+n]={0:G({},c)}:delete this.styles[t+n],n--;this._forceClearCache=!0}insertCharStyleObject(t,e,n,i){this.styles||(this.styles={});let r=this.styles[t],o=r?G({},r):{};n||(n=1);for(let l in o){let c=parseInt(l,10);c>=e&&(r[c+n]=o[c],o[c-n]||delete r[c])}if(this._forceClearCache=!0,i){for(;n--;)Object.keys(i[n]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+n]=G({},i[n]));return}if(!r)return;let a=r[e?e-1:1];for(;a&&n--;)this.styles[t][e+n]=G({},a)}insertNewStyleBlock(t,e,n){let i=this.get2DCursorLocation(e,!0),r=[0],o,a=0;for(let l=0;l<t.length;l++)t[l]===`
`?(a++,r[a]=0):r[a]++;for(r[0]>0&&(this.insertCharStyleObject(i.lineIndex,i.charIndex,r[0],n),n=n&&n.slice(r[0]+1)),a&&this.insertNewlineStyleObject(i.lineIndex,i.charIndex+r[0],a),o=1;o<a;o++)r[o]>0?this.insertCharStyleObject(i.lineIndex+o,0,r[o],n):n&&this.styles[i.lineIndex+o]&&n[0]&&(this.styles[i.lineIndex+o][0]=n[0]),n=n&&n.slice(r[o]+1);r[o]>0&&this.insertCharStyleObject(i.lineIndex+o,0,r[o],n)}removeChars(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t+1;this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;i>n&&this.removeStyleFromTo(n,i);let r=this.graphemeSplit(t);this.insertNewStyleBlock(r,n,e),this._text=[...this._text.slice(0,n),...r,...this._text.slice(i)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(t,e,n){n<=t?(e===t?this._selectionDirection=Re:this._selectionDirection===je&&(this._selectionDirection=Re,this.selectionEnd=t),this.selectionStart=n):n>t&&n<e?this._selectionDirection===je?this.selectionEnd=n:this.selectionStart=n:(e===t?this._selectionDirection=je:this._selectionDirection===Re&&(this._selectionDirection=je,this.selectionStart=e),this.selectionEnd=n)}},Of=class extends If{initHiddenTextarea(){let t=this.canvas&&Ai(this.canvas.getElement())||ea(),e=t.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map((o=>{let[a,l]=o;return e.setAttribute(a,l)}));let{top:n,left:i,fontSize:r}=this._calcTextareaPosition();e.style.cssText="position: absolute; top: ".concat(n,"; left: ").concat(i,"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r,";"),(this.hiddenTextareaContainer||t.body).appendChild(e),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map((o=>{let[a,l]=o;return e.addEventListener(a,this[l].bind(this))})),this.hiddenTextarea=e}blur(){this.abortCursorAnimation()}onKeyDown(t){if(!this.isEditing)return;let e=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(t.keyCode in e)this[e[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown)||!t.ctrlKey&&!t.metaKey)return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(t){let e=this.fromPaste,{value:n,selectionStart:i,selectionEnd:r}=this.hiddenTextarea;if(this.fromPaste=!1,t&&t.stopPropagation(),!this.isEditing)return;let o=()=>{this.updateFromTextArea(),this.fire(Dh),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void o();let a=this._splitTextIntoLines(n).graphemeText,l=this._text.length,c=a.length,h=this.selectionStart,u=this.selectionEnd,d=h!==u,f,p,x,m,_=c-l,S=this.fromStringToGraphemeSelection(i,r,n),P=h>S.selectionStart;d?(p=this._text.slice(h,u),_+=u-h):c<l&&(p=P?this._text.slice(u+_,u):this._text.slice(h,h-_));let w=a.slice(S.selectionEnd-_,S.selectionEnd);if(p&&p.length&&(w.length&&(f=this.getSelectionStyles(h,h+1,!1),f=w.map((()=>f[0]))),d?(x=h,m=u):P?(x=u-p.length,m=u):(x=u,m=u+p.length),this.removeStyleFromTo(x,m)),w.length){let{copyPasteData:R}=ts();e&&w.join("")===R.copiedText&&!ye.disableStyleCopyPaste&&(f=R.copiedTextStyle),this.insertNewStyleBlock(w,h,f)}o()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate(t){let{target:e}=t,{selectionStart:n,selectionEnd:i}=e;this.compositionStart=n,this.compositionEnd=i,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:t}=ts();t.copiedText=this.getSelectedText(),ye.disableStyleCopyPaste?t.copiedTextStyle=void 0:t.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(t,e){let n,i=this._getLineLeftOffset(t);return e>0&&(n=this.__charBounds[t][e-1],i+=n.left+n.width),i}getDownCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===this._textLines.length-1||t.metaKey||t.keyCode===34)return this._text.length-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r+1,a);return this._textLines[r].slice(o).length+l+1+this.missingNewlineOffset(r)}_getSelectionForOffset(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart}getUpCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===0||t.metaKey||t.keyCode===33)return-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r-1,a),c=this._textLines[r].slice(0,o),h=this.missingNewlineOffset(r-1);return-this._textLines[r-1].length+l-c.length+(1-h)}_getIndexOnLine(t,e){let n=this._textLines[t],i,r,o=this._getLineLeftOffset(t),a=0;for(let l=0,c=n.length;l<c;l++)if(i=this.__charBounds[t][l].width,o+=i,o>e){r=!0;let h=o-i,u=o,d=Math.abs(h-e);a=Math.abs(u-e)<d?l:l-1;break}return r||(a=n.length-1),a}moveCursorDown(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)}moveCursorUp(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",t)}_moveCursorUpOrDown(t,e){let n=this["get".concat(t,"CursorOffset")](e,this._selectionDirection===je);if(e.shiftKey?this.moveCursorWithShift(n):this.moveCursorWithoutShift(n),n!==0){let i=this.text.length;this.selectionStart=Zr(0,this.selectionStart,i),this.selectionEnd=Zr(0,this.selectionEnd,i),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(t){let e=this._selectionDirection===Re?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),t!==0}moveCursorWithoutShift(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),t!==0}moveCursorLeft(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",t)}_move(t,e,n){let i;if(t.altKey)i=this["findWordBoundary".concat(n)](this[e]);else{if(!t.metaKey&&t.keyCode!==35&&t.keyCode!==36)return this[e]+=n==="Left"?-1:1,!0;i=this["findLineBoundary".concat(n)](this[e])}return i!==void 0&&this[e]!==i&&(this[e]=i,!0)}_moveLeft(t,e){return this._move(t,e,"Left")}_moveRight(t,e){return this._move(t,e,"Right")}moveCursorLeftWithoutShift(t){let e=!0;return this._selectionDirection=Re,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e}moveCursorLeftWithShift(t){return this._selectionDirection===je&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):this.selectionStart!==0?(this._selectionDirection=Re,this._moveLeft(t,"selectionStart")):void 0}moveCursorRight(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)}_moveCursorLeftOrRight(t,e){let n="moveCursor".concat(t).concat(e.shiftKey?"WithShift":"WithoutShift");this._currentCursorOpacity=1,this[n](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(t){return this._selectionDirection===Re&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection=je,this._moveRight(t,"selectionEnd")):void 0}moveCursorRightWithoutShift(t){let e=!0;return this._selectionDirection=je,this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e}},o0=s=>!!s.button,Lf=class extends Of{constructor(){super(...arguments),X(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new Df(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(t){return this.draggableTextDelegate.onDragStart(t)}canDrop(t){return this.draggableTextDelegate.canDrop(t)}doubleClickHandler(t){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}tripleClickHandler(t){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}_mouseDownHandler(t){let{e,alreadySelected:n}=t;this.canvas&&this.editable&&!o0(e)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(e)||(this.canvas.textEditingManager.register(this),n&&(this.inCompositionMode=!1,this.setCursorByClick(e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=n||this.isEditing)))}mouseUpHandler(t){let{e,transform:n}=t,i=this.draggableTextDelegate.end(e);if(this.canvas){this.canvas.textEditingManager.unregister(this);let r=this.canvas._activeObject;if(r&&r!==this)return}!this.editable||this.group&&!this.group.interactive||n&&n.actionPerformed||o0(e)||i||this.selected&&!this.getActiveControl()&&(this.enterEditing(e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(t){let e=this.getSelectionStartFromPointer(t),n=this.selectionStart,i=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(n,i,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(t){let e=this.canvas.getScenePoint(t).transform($n(this.calcTransformMatrix())).add(new st(-this._getLeftOffset(),-this._getTopOffset())),n=0,i=0,r=0;for(let c=0;c<this._textLines.length&&n<=e.y;c++)n+=this.getHeightOfLine(c),r=c,c>0&&(i+=this._textLines[c-1].length+this.missingNewlineOffset(c-1));let o=Math.abs(this._getLineLeftOffset(r)),a=this._textLines[r].length,l=this.__charBounds[r];for(let c=0;c<a;c++){let h=o+l[c].kernedWidth;if(e.x<=h){Math.abs(e.x-h)<=Math.abs(e.x-o)&&i++;break}o=h,i++}return Math.min(this.flipX?a-i:i,this._text.length)}},Sh="moveCursorUp",bh="moveCursorDown",Mh="moveCursorLeft",wh="moveCursorRight",Th="exitEditing",a0=(s,t)=>{let e=t.getRetinaScaling();s.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;s.transform(n[0],n[1],n[2],n[3],n[4],n[5])},fw=G({selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:Th,27:Th,33:Sh,34:bh,35:wh,36:Mh,37:Mh,38:Sh,39:wh,40:bh},keysMapRtl:{9:Th,27:Th,33:Sh,34:bh,35:Mh,36:wh,37:wh,38:Sh,39:Mh,40:bh},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"}},{_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1}),Pi=class s extends Lf{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,G(G({},s.ownDefaults),e)),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof ta&&this.canvas.textEditingManager.remove(this),e instanceof ta&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart||0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionEnd,n=arguments.length>2?arguments[2]:void 0;return super.getSelectionStyles(t,e,n)}setSelectionStyles(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionStart||0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.selectionEnd;return super.setSelectionStyles(t,e,n)}get2DCursorLocation(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0;return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),i=n.length>0,r,o=t;if(i){r=ti(t.canvas),o=r.getContext("2d"),a0(o,this.canvas);let a=this.calcTransformMatrix();o.transform(a[0],a[1],a[2],a[3],a[4],a[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(o,e):this.renderCursor(o,e),i)for(let a of n){let l=a.clipPath,c=ti(t.canvas),h=c.getContext("2d");if(a0(h,this.canvas),!l.absolutePositioned){let u=a.calcTransformMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(o,l,c)}i&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0,n=this._getLeftOffset(),i=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:i,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:i,lineIndex:r}=this.get2DCursorLocation(t);for(let c=0;c<r;c++)e+=this.getHeightOfLine(c);let o=this._getLineLeftOffset(r),a=this.__charBounds[r][i];a&&(n=a.left),this.charSpacing!==0&&i===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let l={top:e,left:o+(n>0?n:0)};return this.direction==="rtl"&&(this.textAlign===je||this.textAlign===Ki||this.textAlign===rl?l.left*=-1:this.textAlign===Re||this.textAlign===zh?l.left=o-(n>0?n:0):this.textAlign!==ae&&this.textAlign!==ol||(l.left=o-(n>0?n:0))),l}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,o=this.getValueOfPropertyAt(i,r,"fontSize"),a=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/a,c=this.getValueOfPropertyAt(i,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(i)/this.lineHeight-o*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(i,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:o}}_renderCursor(t,e,n){let{color:i,opacity:r,left:o,top:a,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=i,t.globalAlpha=r,t.fillRect(o,a,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let i=e.selectionStart,r=e.selectionEnd,o=this.textAlign.includes(Ki),a=this.get2DCursorLocation(i),l=this.get2DCursorLocation(r),c=a.lineIndex,h=l.lineIndex,u=a.charIndex<0?0:a.charIndex,d=l.charIndex<0?0:l.charIndex;for(let f=c;f<=h;f++){let p=this._getLineLeftOffset(f)||0,x=this.getHeightOfLine(f),m=0,_=0,S=0;if(f===c&&(_=this.__charBounds[c][u].left),f>=c&&f<h)S=o&&!this.isEndOfWrapping(f)?this.width:this.getLineWidth(f)||5;else if(f===h)if(d===0)S=this.__charBounds[h][d].left;else{let g=this._getWidthOfCharSpacing();S=this.__charBounds[h][d-1].left+this.__charBounds[h][d-1].width-g}m=x,(this.lineHeight<1||f===h&&this.lineHeight>1)&&(x/=this.lineHeight);let P=n.left+p+_,w=x,R=0,D=S-_;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",w=1,R=x):t.fillStyle=this.selectionColor,this.direction==="rtl"&&(this.textAlign===je||this.textAlign===Ki||this.textAlign===rl?P=this.width-P-D:this.textAlign===Re||this.textAlign===zh?P=n.left+p-S:this.textAlign!==ae&&this.textAlign!==ol||(P=n.left+p-S)),t.fillRect(P,n.top+n.topOffset+R,D,w),n.topOffset+=m}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,Qe)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};X(Pi,"ownDefaults",fw),X(Pi,"type","IText"),Ut.setClass(Pi),Ut.setClass(Pi,"i-text");var Xo=class s extends Pi{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(t,G(G({},s.ownDefaults),e))}static createControls(){return{controls:e_()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes(Ki)&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,i=0,r={};for(let o=0;o<t.graphemeLines.length;o++)t.graphemeText[i]===`
`&&o>0?(n=0,i++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[i])&&o>0&&(n++,i++),r[o]={line:e,offset:n},i+=t.graphemeLines[o].length,n+=t.graphemeLines[o].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n=0,i=t+1,r=!1,o=this._styleMap[t],a=this._styleMap[t+1];o&&(t=o.line,n=o.offset),a&&(i=a.line,r=i===t,e=a.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let u=parseInt(h,10);if(u>=n&&(!r||u<e))for(let d in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let i=this._styleMap[t];super._setStyleDeclaration(i.line,i.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),i=[];for(let r=0;r<n.wordsData.length;r++)i.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,i}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",i=0;return{wordsData:t.map(((r,o)=>{let a=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map((c=>{let h=e?[c]:this.graphemeSplit(c),u=this._measureWord(h,o,a);return i=Math.max(u,i),a+=h.length+n.length,{word:h,width:u}}))})),largestWordWidth:i}}_measureWord(t,e){let n,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=0;for(let o=0,a=t.length;o<a;o++)r+=this._getGraphemeBox(t[o],e,o+i,n,!0).kernedWidth,n=t[o];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,n){let{largestWordWidth:i,wordsData:r}=n,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=this._getWidthOfCharSpacing(),l=this.splitByGrapheme,c=[],h=l?"":" ",u=0,d=[],f=0,p=0,x=!0;e-=o;let m=Math.max(e,i,this.dynamicMinWidth),_=r[t],S;for(f=0,S=0;S<_.length;S++){let{word:P,width:w}=_[S];f+=P.length,u+=p+w-a,u>m&&!x?(c.push(d),d=[],u=w,x=!0):u+=a,x||l||d.push(h),d=d.concat(P),p=l?0:this._measureWord([h],t,f),f++,x=!1}return S&&c.push(d),i+o>this.dynamicMinWidth&&(this.dynamicMinWidth=i-a+o),c}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?this.isEndOfWrapping(t)?1:0:1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=n[r].join("");return e.lines=i,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let i=this._styleMap[e].line;t.set("".concat(i),!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject(["minWidth","splitByGrapheme",...t])}};X(Xo,"type","Textbox"),X(Xo,"textLayoutProperties",[...Pi.textLayoutProperties,"width"]),X(Xo,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),Ut.setClass(Xo);var tu=class extends Qo{shouldPerformLayout(t){return!!t.target.clipPath&&super.shouldPerformLayout(t)}shouldLayoutClipPath(){return!1}calcLayoutResult(t,e){let{target:n}=t,{clipPath:i,group:r}=n;if(!i||!this.shouldPerformLayout(t))return;let{width:o,height:a}=Qi(c_(n,i)),l=new st(o,a);if(i.absolutePositioned)return{center:ys(i.getRelativeCenterPoint(),void 0,r?r.calcTransformMatrix():void 0),size:l};{let c=i.getRelativeCenterPoint().transform(n.calcOwnMatrix(),!0);if(this.shouldPerformLayout(t)){let{center:h=new st,correction:u=new st}=this.calcBoundingBox(e,t)||{};return{center:h.add(c),correction:u.subtract(c),size:l}}return{center:n.getRelativeCenterPoint().add(c),size:l}}}};X(tu,"type","clip-path"),Ut.setClass(tu);var eu=class extends Qo{getInitialSize(t,e){let{target:n}=t,{size:i}=e;return new st(n.width||i.x,n.height||i.y)}};X(eu,"type","fixed"),Ut.setClass(eu);var Ff=class extends Jr{subscribeTargets(t){let e=t.target;t.targets.reduce(((n,i)=>(i.parent&&n.add(i.parent),n)),new Set).forEach((n=>{n.layoutManager.subscribeTargets({target:n,targets:[e]})}))}unsubscribeTargets(t){let e=t.target,n=e.getObjects();t.targets.reduce(((i,r)=>(r.parent&&i.add(r.parent),i)),new Set).forEach((i=>{!n.some((r=>r.parent===i))&&i.layoutManager.unsubscribeTargets({target:i,targets:[e]})}))}},jo=class s extends Ks{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(e);let{left:n,top:i,layoutManager:r}=e;this.groupInit(t,{left:n,top:i,layoutManager:r??new Ff})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.multiSelectionStacking==="selection-order"?this.add(...e):e.forEach((i=>{let r=this._objects.findIndex((a=>a.isInFrontOf(i))),o=r===-1?this.size():r;this.insertAt(o,i)}))}canEnterGroup(t){return this.getObjects().some((e=>e.isDescendantOf(t)||t.isDescendantOf(e)))?($s("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach((i=>{let{parent:r}=i;r&&n.add(r)})),t===rp?n.forEach((i=>{i._onAfterObjectsChange(qh,e)})):n.forEach((i=>{i._set("dirty",!0)}))}onDeselect(){return this.removeAll(),!1}toString(){return"#<ActiveSelection: (".concat(this.complexity(),")>")}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let i=G(G({hasControls:!1},n),{},{forActiveSelection:!0});for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,i);super._renderControls(t,e),t.restore()}};X(jo,"type","ActiveSelection"),X(jo,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),Ut.setClass(jo),Ut.setClass(jo,"activeSelection");var Nf=class{constructor(){X(this,"resources",{})}applyFilters(t,e,n,i,r){let o=r.getContext("2d");if(!o)return;o.drawImage(e,0,0,n,i);let a={sourceWidth:n,sourceHeight:i,imageData:o.getImageData(0,0,n,i),originalEl:e,originalImageData:o.getImageData(0,0,n,i),canvasEl:r,ctx:o,filterBackend:this};t.forEach((c=>{c.applyTo(a)}));let{imageData:l}=a;return l.width===n&&l.height===i||(r.width=l.width,r.height=l.height),o.putImageData(l,0,0),a}},nu=class{constructor(){let{tileSize:t=ye.textureSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};X(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),X(this,"resources",{}),this.tileSize=t,this.setupGLContext(t,t),this.captureGPUInfo()}setupGLContext(t,e){this.dispose(),this.createWebGLCanvas(t,e)}createWebGLCanvas(t,e){let n=ti({width:t,height:e}),i=n.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});i&&(i.clearColor(0,0,0,0),this.canvas=n,this.gl=i)}applyFilters(t,e,n,i,r,o){let a=this.gl,l=r.getContext("2d");if(!a||!l)return;let c;o&&(c=this.getCachedTexture(o,e));let h={originalWidth:e.width||e.naturalWidth||0,originalHeight:e.height||e.naturalHeight||0,sourceWidth:n,sourceHeight:i,destinationWidth:n,destinationHeight:i,context:a,sourceTexture:this.createTexture(a,n,i,c?void 0:e),targetTexture:this.createTexture(a,n,i),originalTexture:c||this.createTexture(a,n,i,c?void 0:e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:r},u=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,u),t.forEach((d=>{d&&d.applyTo(h)})),(function(d){let f=d.targetCanvas,p=f.width,x=f.height,m=d.destinationWidth,_=d.destinationHeight;p===m&&x===_||(f.width=m,f.height=_)})(h),this.copyGLTo2D(a,h),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(h.sourceTexture),a.deleteTexture(h.targetTexture),a.deleteFramebuffer(u),l.setTransform(1,0,0,1,0,0),h}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(t,e,n,i,r){let{NEAREST:o,TEXTURE_2D:a,RGBA:l,UNSIGNED_BYTE:c,CLAMP_TO_EDGE:h,TEXTURE_MAG_FILTER:u,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:f,TEXTURE_WRAP_T:p}=t,x=t.createTexture();return t.bindTexture(a,x),t.texParameteri(a,u,r||o),t.texParameteri(a,d,r||o),t.texParameteri(a,f,h),t.texParameteri(a,p,h),i?t.texImage2D(a,0,l,l,c,i):t.texImage2D(a,0,l,e,n,0,l,c,null),x}getCachedTexture(t,e,n){let{textureCache:i}=this;if(i[t])return i[t];{let r=this.createTexture(this.gl,e.width,e.height,e,n);return r&&(i[t]=r),r}}evictCachesForKey(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])}copyGLTo2D(t,e){let n=t.canvas,i=e.targetCanvas,r=i.getContext("2d");if(!r)return;r.translate(0,i.height),r.scale(1,-1);let o=n.height-i.height;r.drawImage(n,0,o,i.width,i.height,0,0,i.width,i.height)}copyGLTo2DPutImageData(t,e){let n=e.targetCanvas.getContext("2d"),i=e.destinationWidth,r=e.destinationHeight,o=i*r*4;if(!n)return;let a=new Uint8Array(this.imageBuffer,0,o),l=new Uint8ClampedArray(this.imageBuffer,0,o);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,a);let c=new ImageData(l,i,r);n.putImageData(c,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let t=this.gl,e={renderer:"",vendor:""};if(!t)return e;let n=t.getExtension("WEBGL_debug_renderer_info");if(n){let i=t.getParameter(n.UNMASKED_RENDERER_WEBGL),r=t.getParameter(n.UNMASKED_VENDOR_WEBGL);i&&(e.renderer=i.toLowerCase()),r&&(e.vendor=r.toLowerCase())}return this.gpuInfo=e,e}},of;function pw(){let{WebGLProbe:s}=ts();return s.queryWebGL(es()),ye.enableGLFiltering&&s.isSupported(ye.textureSize)?new nu({tileSize:ye.textureSize}):new Nf}function af(){return!of&&(!(arguments.length>0&&arguments[0]!==void 0)||arguments[0])&&(of=pw()),of}var mw=["filters","resizeFilter","src","crossOrigin","type"],R_=["cropX","cropY"],ci=class s extends ln{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),X(this,"_lastScaleX",1),X(this,"_lastScaleY",1),X(this,"_filterScalingX",1),X(this,"_filterScalingY",1),this.filters=[],Object.assign(this,s.ownDefaults),this.setOptions(e),this.cacheKey="texture".concat(tr()),this.setElement(typeof t=="string"?(this.canvas&&Ai(this.canvas.getElement())||ea()).getElementById(t):t,e)}getElement(){return this._element}setElement(t){var e;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._element=t,this._originalElement=t,this._setWidthHeight(n),(e=t.classList)===null||e===void 0||e.add(s.CSS_CANVAS),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=af(!1);e instanceof nu&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach((t=>{let e=this[t];e&&ts().dispose(e),this[t]=void 0}))}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return this.filters.forEach((n=>{n&&e.push(n.toObject())})),G(G({},super.toObject([...R_,...t])),{},{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e},this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{})}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,i=-this.height/2,r=[],o=[],a="",l="";if(!e)return[];if(this.hasCrop()){let c=tr();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+i+'" width="'+this.width+'" height="'+this.height+`" />
`,`</clipPath>
`),a=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",'xlink:href="'.concat(this.getSvgSrc(!0),'" x="').concat(n-this.cropX,'" y="').concat(i-this.cropY,'" width="').concat(e.width||e.naturalWidth,'" height="').concat(e.height||e.naturalHeight,'"').concat(l).concat(a,`></image>
`)),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,o=['	<rect x="'.concat(n,'" y="').concat(i,'" width="').concat(this.width,'" height="').concat(this.height,'" style="').concat(this.getSvgStyles(),`" />
`)],this.fill=c}return r=this.paintFirst!==Qe?r.concat(o,t):r.concat(t,o),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t){let{crossOrigin:e,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return sl(t,{crossOrigin:e,signal:n}).then((i=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(i)}))}toString(){return'#<Image: { src: "'.concat(this.getSrc(),'" }>')}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),i=n.x,r=n.y,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||i>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=i,void(this._lastScaleY=r);let a=ti(o),{width:l,height:c}=o;this._element=a,this._lastScaleX=t.scaleX=i,this._lastScaleY=t.scaleY=r,af().applyFilters([t],o,l,c,this._element),this._filterScalingX=a.width/this._originalElement.width,this._filterScalingY=a.height/this._originalElement.height}applyFilters(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.filters||[];if(t=t.filter((r=>r&&!r.isNeutralState())),this.set("dirty",!0),this.removeTexture("".concat(this.cacheKey,"_filtered")),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,i=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=ti({width:n,height:i});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,i),this._lastScaleX=1,this._lastScaleY=1);af().applyFilters(t,this._originalElement,n,i,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,i=this._filterScalingY,r=this.width,o=this.height,a=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,u=a*n,d=l*i,f=Math.min(r*n,c-u),p=Math.min(o*i,h-d),x=-r/2,m=-o/2,_=Math.min(r,c/n-a),S=Math.min(o,h/i-l);e&&t.drawImage(e,u,d,f,p,x,m,_,S)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight(){let{width:t,height:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=I0(this.preserveAspectRatio||""),e=this.width,n=this.height,i={width:e,height:n},r,o=this._element.width,a=this._element.height,l=1,c=1,h=0,u=0,d=0,f=0;return!t||t.alignX===zn&&t.alignY===zn?(l=e/o,c=n/a):(t.meetOrSlice==="meet"&&(l=c=u_(this._element,i),r=(e-o*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-a*c)/2,t.alignY==="Min"&&(u=-r),t.alignY==="Max"&&(u=r)),t.meetOrSlice==="slice"&&(l=c=d_(this._element,i),r=o-e/l,t.alignX==="Mid"&&(d=r/2),t.alignX==="Max"&&(d=r),r=a-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),o=e/l,a=n/c)),{width:o,height:a,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:u,cropX:d,cropY:f}}static fromObject(t,e){let{filters:n,resizeFilter:i,src:r,crossOrigin:o,type:a}=t,l=ke(t,mw);return Promise.all([sl(r,G(G({},e),{},{crossOrigin:o})),n&&Jo(n,e),i&&Jo([i],e),pl(l,e)]).then((c=>{let[h,u=[],[d]=[],f={}]=c;return new this(h,G(G({},l),{},{src:r,filters:u,resizeFilter:d},f))}))}static fromURL(t){let{crossOrigin:e=null,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return sl(t,{crossOrigin:e,signal:n}).then((r=>new this(r,i)))}static async fromElement(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=Ms(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(i["xlink:href"]||i.href,e,i).catch((r=>($s("log","Unable to parse Image",r),null)))}};X(ci,"type","Image"),X(ci,"cacheProperties",[...bs,...R_]),X(ci,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),X(ci,"CSS_CANVAS","canvas-img"),X(ci,"ATTRIBUTE_NAMES",[...ir,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),Ut.setClass(ci),Ut.setSVGClass(ci);var QA=hu(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var P_=p0,l0=s=>function(t,e,n){let{points:i,pathOffset:r}=n;return new st(i[s]).subtract(r).transform(Ge(n.getViewportTransform(),n.calcTransformMatrix()))},D_=(s,t,e,n)=>{let{target:i,pointIndex:r}=t,o=i,a=ys(new st(e,n),void 0,o.calcOwnMatrix());return o.points[r]=a.add(o.pathOffset),o.setDimensions(),o.set("dirty",!0),!0},I_=(s,t)=>function(e,n,i,r){let o=n.target,a=new st(o.points[(s>0?s:o.points.length)-1]),l=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),c=t(e,G(G({},n),{},{pointIndex:s}),i,r),h=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(l);return o.left-=h.x,o.top-=h.y,c},c0=s=>nr(P_,I_(s,D_)),kf=(s,t,e)=>{let{path:n,pathOffset:i}=s,r=n[t];return new st(r[e]-i.x,r[e+1]-i.y).transform(Ge(s.getViewportTransform(),s.calcTransformMatrix()))};function gw(s,t,e){let{commandIndex:n,pointIndex:i}=this;return kf(e,n,i)}function _w(s,t,e,n){let{target:i}=t,{commandIndex:r,pointIndex:o}=this,a=((l,c,h,u,d)=>{let{path:f,pathOffset:p}=l,x=f[(u>0?u:f.length)-1],m=new st(x[d],x[d+1]),_=m.subtract(p).transform(l.calcOwnMatrix()),S=ys(new st(c,h),void 0,l.calcOwnMatrix());f[u][d]=S.x+p.x,f[u][d+1]=S.y+p.y,l.setDimensions();let P=m.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(_);return l.left-=P.x,l.top-=P.y,l.set("dirty",!0),!0})(i,e,n,r,o);return Jf(this.actionName,G(G({},Kf(s,t,e,n)),{},{commandIndex:r,pointIndex:o})),a}var iu=class extends Pn{constructor(t){super(t)}render(t,e,n,i,r){let o=G(G({},i),{},{cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill});super.render(t,e,n,o,r)}},Uf=class extends iu{constructor(t){super(t)}render(t,e,n,i,r){let{path:o}=r,{commandIndex:a,pointIndex:l,connectToCommandIndex:c,connectToPointIndex:h}=this;t.save(),t.strokeStyle=this.controlStroke,this.connectionDashArray&&t.setLineDash(this.connectionDashArray);let[u]=o[a],d=kf(r,c,h);if(u==="Q"){let f=kf(r,a,l+2);t.moveTo(f.x,f.y),t.lineTo(e,n)}else t.moveTo(e,n);t.lineTo(d.x,d.y),t.stroke(),t.restore(),super.render(t,e,n,i,r)}},Ch=(s,t,e,n,i,r)=>new(e?Uf:iu)(G(G({commandIndex:s,pointIndex:t,actionName:"modifyPath",positionHandler:gw,actionHandler:_w,connectToCommandIndex:i,connectToPointIndex:r},n),e?n.controlPointStyle:n.pointStyle)),t2=Object.freeze({__proto__:null,changeWidth:Sf,createObjectDefaultControls:np,createPathControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={},n="M";return s.path.forEach(((i,r)=>{let o=i[0];switch(o!=="Z"&&(e["c_".concat(r,"_").concat(o)]=Ch(r,i.length-2,!1,t)),o){case"C":e["c_".concat(r,"_C_CP_1")]=Ch(r,1,!0,t,r-1,(a=>a==="C"?5:a==="Q"?3:1)(n)),e["c_".concat(r,"_C_CP_2")]=Ch(r,3,!0,t,r,5);break;case"Q":e["c_".concat(r,"_Q_CP_1")]=Ch(r,1,!0,t,r,3)}n=o})),e},createPolyActionHandler:c0,createPolyControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={};for(let n=0;n<(typeof s=="number"?s:s.points.length);n++)e["p".concat(n)]=new Pn(G({actionName:P_,positionHandler:l0(n),actionHandler:c0(n)},t));return e},createPolyPositionHandler:l0,createResizeControls:t_,createTextboxDefaultControls:e_,dragHandler:D0,factoryPolyActionHandler:I_,getLocalPoint:cu,polyActionHandler:D_,renderCircleControl:G0,renderSquareControl:H0,rotationStyleHandler:W0,rotationWithSnapping:X0,scaleCursorStyleHandler:zo,scaleOrSkewActionName:el,scaleSkewCursorStyleHandler:Er,scalingEqually:tl,scalingX:q0,scalingXOrSkewingY:bf,scalingY:Z0,scalingYOrSkewingX:Mf,skewCursorStyleHandler:J0,skewHandlerX:$0,skewHandlerY:Q0,wrapWithFireEvent:nr,wrapWithFixedAnchor:Qr}),mu=s=>s.webgl!==void 0;var ap="precision highp float",xw=`
    `.concat(ap,`;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`),vw=["type"],yw=["type"],Sw=new RegExp(ap,"g"),He=class{get type(){return this.constructor.type}constructor(){let t=ke(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},vw);Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return xw}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getFragmentSource(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.getVertexSource(),{WebGLProbe:{GLPrecision:i="highp"}}=ts();i!=="highp"&&(e=e.replace(Sw,ap.replace("highp",i)));let r=t.createShader(t.VERTEX_SHADER),o=t.createShader(t.FRAGMENT_SHADER),a=t.createProgram();if(!r||!o||!a)throw new ui("Vertex, fragment shader or program creation error");if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new ui("Vertex shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(r)));if(t.shaderSource(o,e),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS))throw new ui("Fragment shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(o)));if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))throw new ui('Shader link error for "'.concat(this.type,'" ').concat(t.getProgramInfoLog(a)));let l=this.getUniformLocations(t,a)||{};return l.uStepW=t.getUniformLocation(a,"uStepW"),l.uStepH=t.getUniformLocation(a,"uStepH"),{program:a,attributeLocations:this.getAttributeLocations(t,a),uniformLocations:l}}getAttributeLocations(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}}getUniformLocations(t,e){let n=this.constructor.uniformLocations,i={};for(let r=0;r<n.length;r++)i[n[r]]=t.getUniformLocation(e,n[r]);return i}sendAttributeData(t,e,n){let i=e.aPosition,r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}_setupFrameBuffer(t){let e=t.context;if(t.passes>1){let n=t.destinationWidth,i=t.destinationHeight;t.sourceWidth===n&&t.sourceHeight===i||(e.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(e,n,i)),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.targetTexture,0)}else e.bindFramebuffer(e.FRAMEBUFFER,null),e.finish()}_swapTextures(t){t.passes--,t.pass++;let e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e}isNeutralState(t){return!1}applyTo(t){mu(t)?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){}getCacheKey(){return this.type}retrieveShader(t){let e=this.getCacheKey();return t.programCache[e]||(t.programCache[e]=this.createProgram(t.context)),t.programCache[e]}applyToWebGL(t){let e=t.context,n=this.retrieveShader(t);t.pass===0&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(n.program),this.sendAttributeData(e,n.attributeLocations,t.aPosition),e.uniform1f(n.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(n.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,n.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(t,e,n){t.activeTexture(n),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)}unbindAdditionalTexture(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)}sendUniformData(t,e){}createHelpLayer(t){if(!t.helpLayer){let{sourceWidth:e,sourceHeight:n}=t,i=ti({width:e,height:n});t.helpLayer=i}}toObject(){let t=Object.keys(this.constructor.defaults||{});return G({type:this.type},t.reduce(((e,n)=>(e[n]=this[n],e)),{}))}toJSON(){return this.toObject()}static async fromObject(t,e){return new this(ke(t,yw))}};X(He,"type","BaseFilter"),X(He,"uniformLocations",[]);var bw={multiply:`gl_FragColor.rgb *= uColor.rgb;
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
    `},Ar=class extends He{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(bw[this.mode],`
        }
      }
      `)}applyTo2d(t){let{imageData:{data:e}}=t,n=new Ln(this.color).getSource(),i=this.alpha,r=n[0]*i,o=n[1]*i,a=n[2]*i,l=1-i;for(let c=0;c<e.length;c+=4){let h=e[c],u=e[c+1],d=e[c+2],f,p,x;switch(this.mode){case"multiply":f=h*r/255,p=u*o/255,x=d*a/255;break;case"screen":f=255-(255-h)*(255-r)/255,p=255-(255-u)*(255-o)/255,x=255-(255-d)*(255-a)/255;break;case"add":f=h+r,p=u+o,x=d+a;break;case"difference":f=Math.abs(h-r),p=Math.abs(u-o),x=Math.abs(d-a);break;case"subtract":f=h-r,p=u-o,x=d-a;break;case"darken":f=Math.min(h,r),p=Math.min(u,o),x=Math.min(d,a);break;case"lighten":f=Math.max(h,r),p=Math.max(u,o),x=Math.max(d,a);break;case"overlay":f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255,p=o<128?2*u*o/255:255-2*(255-u)*(255-o)/255,x=a<128?2*d*a/255:255-2*(255-d)*(255-a)/255;break;case"exclusion":f=r+h-2*r*h/255,p=o+u-2*o*u/255,x=a+d-2*a*d/255;break;case"tint":f=r+h*l,p=o+u*l,x=a+d*l}e[c]=f,e[c+1]=p,e[c+2]=x}}sendUniformData(t,e){let n=new Ln(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,t.uniform4fv(e.uColor,n)}};X(Ar,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),X(Ar,"type","BlendColor"),X(Ar,"uniformLocations",["uColor"]),Ut.setClass(Ar);var Mw={multiply:`
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
    `},ww=["type","image"],Rr=class extends He{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return Mw[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(t){let e=t.context,n=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,n,e.TEXTURE1),super.applyToWebGL(t),this.unbindAdditionalTexture(e,e.TEXTURE1)}createTexture(t,e){return t.getCachedTexture(e.cacheKey,e.getElement())}calculateMatrix(){let t=this.image,{width:e,height:n}=t.getElement();return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/n,1]}applyTo2d(t){let{imageData:{data:e,width:n,height:i},filterBackend:{resources:r}}=t,o=this.image;r.blendImage||(r.blendImage=es());let a=r.blendImage,l=a.getContext("2d");a.width!==n||a.height!==i?(a.width=n,a.height=i):l.clearRect(0,0,n,i),l.setTransform(o.scaleX,0,0,o.scaleY,o.left,o.top),l.drawImage(o.getElement(),0,0,n,i);let c=l.getImageData(0,0,n,i).data;for(let h=0;h<e.length;h+=4){let u=e[h],d=e[h+1],f=e[h+2],p=e[h+3],x=c[h],m=c[h+1],_=c[h+2],S=c[h+3];switch(this.mode){case"multiply":e[h]=u*x/255,e[h+1]=d*m/255,e[h+2]=f*_/255,e[h+3]=p*S/255;break;case"mask":e[h+3]=S}}}sendUniformData(t,e){let n=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,n)}toObject(){return G(G({},super.toObject()),{},{image:this.image&&this.image.toObject()})}static async fromObject(t,e){let{type:n,image:i}=t,r=ke(t,ww);return ci.fromObject(i,e).then((o=>new this(G(G({},r),{},{image:o}))))}};X(Rr,"type","BlendImage"),X(Rr,"defaults",{mode:"multiply",alpha:1}),X(Rr,"uniformLocations",["uTransformMatrix","uImage"]),Ut.setClass(Rr);var Pr=class extends He{getFragmentSource(){return`
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
  `}applyTo(t){mu(t)?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;this.aspectRatio=n/i,this.horizontal=!0;let r=this.getBlurValue()*n,o=new Uint8ClampedArray(e),a=15,l=4*n;for(let c=0;c<e.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c-c%l,m=x+l;for(let _=-14;_<a;_++){let S=_/a,P=4*Math.floor(r*S),w=1-Math.abs(S),R=c+P;R<x?R=x:R>m&&(R=m);let D=e[R+3]*w;h+=e[R]*D,u+=e[R+1]*D,d+=e[R+2]*D,f+=D,p+=w}o[c]=h/f,o[c+1]=u/f,o[c+2]=d/f,o[c+3]=f/p}this.horizontal=!1,r=this.getBlurValue()*i;for(let c=0;c<o.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c%l,m=o.length-l+x;for(let _=-14;_<a;_++){let S=_/a,P=Math.floor(r*S)*l,w=1-Math.abs(S),R=c+P;R<x?R=x:R>m&&(R=m);let D=o[R+3]*w;h+=o[R]*D,u+=o[R+1]*D,d+=o[R+2]*D,f+=D,p+=w}e[c]=h/f,e[c+1]=u/f,e[c+2]=d/f,e[c+3]=f/p}}sendUniformData(t,e){let n=this.chooseRightDelta();t.uniform2fv(e.uDelta,n)}isNeutralState(){return this.blur===0}getBlurValue(){let t=1,{horizontal:e,aspectRatio:n}=this;return e?n>1&&(t=1/n):n<1&&(t=n),t*this.blur*.12}chooseRightDelta(){let t=this.getBlurValue();return this.horizontal?[t,0]:[0,t]}};X(Pr,"type","Blur"),X(Pr,"defaults",{blur:0}),X(Pr,"uniformLocations",["uDelta"]),Ut.setClass(Pr);var Dr=class extends He{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.round(255*this.brightness);for(let i=0;i<e.length;i+=4)e[i]+=n,e[i+1]+=n,e[i+2]+=n}isNeutralState(){return this.brightness===0}sendUniformData(t,e){t.uniform1f(e.uBrightness,this.brightness)}};X(Dr,"type","Brightness"),X(Dr,"defaults",{brightness:0}),X(Dr,"uniformLocations",["uBrightness"]),Ut.setClass(Dr);var O_={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},vs=class extends He{getFragmentSource(){return`
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
  }`}applyTo2d(t){let e=t.imageData.data,n=this.matrix,i=this.colorsOnly;for(let r=0;r<e.length;r+=4){let o=e[r],a=e[r+1],l=e[r+2];if(e[r]=o*n[0]+a*n[1]+l*n[2]+255*n[4],e[r+1]=o*n[5]+a*n[6]+l*n[7]+255*n[9],e[r+2]=o*n[10]+a*n[11]+l*n[12]+255*n[14],!i){let c=e[r+3];e[r]+=c*n[3],e[r+1]+=c*n[8],e[r+2]+=c*n[13],e[r+3]=o*n[15]+a*n[16]+l*n[17]+c*n[18]+255*n[19]}}}sendUniformData(t,e){let n=this.matrix,i=[n[0],n[1],n[2],n[3],n[5],n[6],n[7],n[8],n[10],n[11],n[12],n[13],n[15],n[16],n[17],n[18]],r=[n[4],n[9],n[14],n[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,i),t.uniform4fv(e.uConstants,r)}toObject(){return G(G({},super.toObject()),{},{matrix:[...this.matrix]})}};function to(s,t){var e;let n=(X(e=class extends vs{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",s),X(e,"defaults",{colorsOnly:!1,matrix:t}),e);return Ut.setClass(n,s),n}X(vs,"type","ColorMatrix"),X(vs,"defaults",O_),X(vs,"uniformLocations",["uColorMatrix","uConstants"]),Ut.setClass(vs);var Tw=to("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),Cw=to("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),Ew=to("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),Aw=to("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),Rw=to("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),Pw=to("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),Dw=to("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),ul=class extends He{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.subFilters=t.subFilters||[]}applyTo(t){mu(t)&&(t.passes+=this.subFilters.length-1),this.subFilters.forEach((e=>{e.applyTo(t)}))}toObject(){return{type:this.type,subFilters:this.subFilters.map((t=>t.toObject()))}}isNeutralState(){return!this.subFilters.some((t=>!t.isNeutralState()))}static fromObject(t,e){return Promise.all((t.subFilters||[]).map((n=>Ut.getClass(n.type).fromObject(n,e)))).then((n=>new this({subFilters:n})))}};X(ul,"type","Composed"),Ut.setClass(ul);var Ir=class extends He{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.floor(255*this.contrast),i=259*(n+255)/(255*(259-n));for(let r=0;r<e.length;r+=4)e[r]=i*(e[r]-128)+128,e[r+1]=i*(e[r+1]-128)+128,e[r+2]=i*(e[r+2]-128)+128}sendUniformData(t,e){t.uniform1f(e.uContrast,this.contrast)}};X(Ir,"type","Contrast"),X(Ir,"defaults",{contrast:0}),X(Ir,"uniformLocations",["uContrast"]),Ut.setClass(Ir);var Iw={Convolute_3_1:`
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
    `},Or=class extends He{getCacheKey(){return"".concat(this.type,"_").concat(Math.sqrt(this.matrix.length),"_").concat(this.opaque?1:0)}getFragmentSource(){return Iw[this.getCacheKey()]}applyTo2d(t){let e=t.imageData,n=e.data,i=this.matrix,r=Math.round(Math.sqrt(i.length)),o=Math.floor(r/2),a=e.width,l=e.height,c=t.ctx.createImageData(a,l),h=c.data,u=this.opaque?1:0,d,f,p,x,m,_,S,P,w,R,D,g,v;for(D=0;D<l;D++)for(R=0;R<a;R++){for(m=4*(D*a+R),d=0,f=0,p=0,x=0,v=0;v<r;v++)for(g=0;g<r;g++)S=D+v-o,_=R+g-o,S<0||S>=l||_<0||_>=a||(P=4*(S*a+_),w=i[v*r+g],d+=n[P]*w,f+=n[P+1]*w,p+=n[P+2]*w,u||(x+=n[P+3]*w));h[m]=d,h[m+1]=f,h[m+2]=p,h[m+3]=u?n[m+3]:x}t.imageData=c}sendUniformData(t,e){t.uniform1fv(e.uMatrix,this.matrix)}toObject(){return G(G({},super.toObject()),{},{opaque:this.opaque,matrix:[...this.matrix]})}};X(Or,"type","Convolute"),X(Or,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),X(Or,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),Ut.setClass(Or);var L_="Gamma",Lr=class extends He{getFragmentSource(){return`
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
`}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.gamma=t.gamma||this.constructor.defaults.gamma.concat()}applyTo2d(t){let{imageData:{data:e}}=t,n=this.gamma,i=1/n[0],r=1/n[1],o=1/n[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let a=this.rgbValues;for(let l=0;l<256;l++)a.r[l]=255*Math.pow(l/255,i),a.g[l]=255*Math.pow(l/255,r),a.b[l]=255*Math.pow(l/255,o);for(let l=0;l<e.length;l+=4)e[l]=a.r[e[l]],e[l+1]=a.g[e[l+1]],e[l+2]=a.b[e[l+2]]}sendUniformData(t,e){t.uniform3fv(e.uGamma,this.gamma)}isNeutralState(){let{gamma:t}=this;return t[0]===1&&t[1]===1&&t[2]===1}toObject(){return{type:L_,gamma:this.gamma.concat()}}};X(Lr,"type",L_),X(Lr,"defaults",{gamma:[1,1,1]}),X(Lr,"uniformLocations",["uGamma"]),Ut.setClass(Lr);var Ow={average:`
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
    `},Fr=class extends He{applyTo2d(t){let{imageData:{data:e}}=t;for(let n,i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2];switch(this.mode){case"average":n=(r+o+a)/3;break;case"lightness":n=(Math.min(r,o,a)+Math.max(r,o,a))/2;break;case"luminosity":n=.21*r+.72*o+.07*a}e[i+2]=e[i+1]=e[i]=n}}getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return Ow[this.mode]}sendUniformData(t,e){t.uniform1i(e.uMode,1)}isNeutralState(){return!1}};X(Fr,"type","Grayscale"),X(Fr,"defaults",{mode:"average"}),X(Fr,"uniformLocations",["uMode"]),Ut.setClass(Fr);var Lw=G(G({},O_),{},{rotation:0}),qo=class extends vs{calculateMatrix(){let t=this.rotation*Math.PI,e=Ii(t),n=Oi(t),i=1/3,r=Math.sqrt(i)*n,o=1-e;this.matrix=[e+o/3,i*o-r,i*o+r,0,0,i*o+r,e+i*o,i*o-r,0,0,i*o-r,i*o+r,e+i*o,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(t){this.calculateMatrix(),super.applyTo(t)}toObject(){return{type:this.type,rotation:this.rotation}}};X(qo,"type","HueRotation"),X(qo,"defaults",Lw),Ut.setClass(qo);var Nr=class extends He{applyTo2d(t){let{imageData:{data:e}}=t;for(let n=0;n<e.length;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2],this.alpha&&(e[n+3]=255-e[n+3])}getFragmentSource(){return`
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
`}isNeutralState(){return!this.invert}sendUniformData(t,e){t.uniform1i(e.uInvert,Number(this.invert)),t.uniform1i(e.uAlpha,Number(this.alpha))}};X(Nr,"type","Invert"),X(Nr,"defaults",{alpha:!1,invert:!0}),X(Nr,"uniformLocations",["uInvert","uAlpha"]),Ut.setClass(Nr);var kr=class extends He{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=this.noise;for(let i=0;i<e.length;i+=4){let r=(.5-Math.random())*n;e[i]+=r,e[i+1]+=r,e[i+2]+=r}}sendUniformData(t,e){t.uniform1f(e.uNoise,this.noise/255),t.uniform1f(e.uSeed,Math.random())}isNeutralState(){return this.noise===0}};X(kr,"type","Noise"),X(kr,"defaults",{noise:0}),X(kr,"uniformLocations",["uNoise","uSeed"]),Ut.setClass(kr);var Ur=class extends He{applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;for(let r=0;r<i;r+=this.blocksize)for(let o=0;o<n;o+=this.blocksize){let a=4*r*n+4*o,l=e[a],c=e[a+1],h=e[a+2],u=e[a+3];for(let d=r;d<Math.min(r+this.blocksize,i);d++)for(let f=o;f<Math.min(o+this.blocksize,n);f++){let p=4*d*n+4*f;e[p]=l,e[p+1]=c,e[p+2]=h,e[p+3]=u}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
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
`}sendUniformData(t,e){t.uniform1f(e.uBlocksize,this.blocksize)}};X(Ur,"type","Pixelate"),X(Ur,"defaults",{blocksize:4}),X(Ur,"uniformLocations",["uBlocksize"]),Ut.setClass(Ur);var Br=class extends He{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=255*this.distance,i=new Ln(this.color).getSource(),r=[i[0]-n,i[1]-n,i[2]-n],o=[i[0]+n,i[1]+n,i[2]+n];for(let a=0;a<e.length;a+=4){let l=e[a],c=e[a+1],h=e[a+2];l>r[0]&&c>r[1]&&h>r[2]&&l<o[0]&&c<o[1]&&h<o[2]&&(e[a+3]=0)}}sendUniformData(t,e){let n=new Ln(this.color).getSource(),i=this.distance,r=[0+n[0]/255-i,0+n[1]/255-i,0+n[2]/255-i,1],o=[n[0]/255+i,n[1]/255+i,n[2]/255+i,1];t.uniform4fv(e.uLow,r),t.uniform4fv(e.uHigh,o)}};X(Br,"type","RemoveColor"),X(Br,"defaults",{color:"#FFFFFF",distance:.02,useAlpha:!1}),X(Br,"uniformLocations",["uLow","uHigh"]),Ut.setClass(Br);var zr=class extends He{sendUniformData(t,e){t.uniform2fv(e.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),t.uniform1fv(e.uTaps,this.taps)}getFilterWindow(){let t=this.tempScale;return Math.ceil(this.lanczosLobes/t)}getCacheKey(){let t=this.getFilterWindow();return"".concat(this.type,"_").concat(t)}getFragmentSource(){let t=this.getFilterWindow();return this.generateShader(t)}getTaps(){let t=this.lanczosCreate(this.lanczosLobes),e=this.tempScale,n=this.getFilterWindow(),i=new Array(n);for(let r=1;r<=n;r++)i[r-1]=t(r*e);return i}generateShader(t){let e=new Array(t);for(let n=1;n<=t;n++)e[n-1]="".concat(n,".0 * uDelta");return`
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
    `)}applyToForWebgl(t){t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,super.applyTo(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,super.applyTo(t),t.sourceHeight=t.destinationHeight}applyTo(t){mu(t)?this.applyToForWebgl(t):this.applyTo2d(t)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(t){return e=>{if(e>=t||e<=-t)return 0;if(e<11920929e-14&&e>-11920929e-14)return 1;let n=(e*=Math.PI)/t;return Math.sin(e)/e*Math.sin(n)/n}}applyTo2d(t){let e=t.imageData,n=this.scaleX,i=this.scaleY;this.rcpScaleX=1/n,this.rcpScaleY=1/i;let r=e.width,o=e.height,a=Math.round(r*n),l=Math.round(o*i),c;c=this.resizeType==="sliceHack"?this.sliceByTwo(t,r,o,a,l):this.resizeType==="hermite"?this.hermiteFastResize(t,r,o,a,l):this.resizeType==="bilinear"?this.bilinearFiltering(t,r,o,a,l):this.resizeType==="lanczos"?this.lanczosResize(t,r,o,a,l):new ImageData(a,l),t.imageData=c}sliceByTwo(t,e,n,i,r){let o=t.imageData,a=.5,l=!1,c=!1,h=e*a,u=n*a,d=t.filterBackend.resources,f=0,p=0,x=e,m=0;d.sliceByTwo||(d.sliceByTwo=es());let _=d.sliceByTwo;(_.width<1.5*e||_.height<n)&&(_.width=1.5*e,_.height=n);let S=_.getContext("2d");for(S.clearRect(0,0,1.5*e,n),S.putImageData(o,0,0),i=Math.floor(i),r=Math.floor(r);!l||!c;)e=h,n=u,i<Math.floor(h*a)?h=Math.floor(h*a):(h=i,l=!0),r<Math.floor(u*a)?u=Math.floor(u*a):(u=r,c=!0),S.drawImage(_,f,p,e,n,x,m,h,u),f=x,p=m,m+=u;return S.getImageData(f,p,i,r)}lanczosResize(t,e,n,i,r){let o=t.imageData.data,a=t.ctx.createImageData(i,r),l=a.data,c=this.lanczosCreate(this.lanczosLobes),h=this.rcpScaleX,u=this.rcpScaleY,d=2/this.rcpScaleX,f=2/this.rcpScaleY,p=Math.ceil(h*this.lanczosLobes/2),x=Math.ceil(u*this.lanczosLobes/2),m={},_={x:0,y:0},S={x:0,y:0};return(function P(w){let R,D,g,v,E,C,I,F,z,L,j;for(_.x=(w+.5)*h,S.x=Math.floor(_.x),R=0;R<r;R++){for(_.y=(R+.5)*u,S.y=Math.floor(_.y),E=0,C=0,I=0,F=0,z=0,D=S.x-p;D<=S.x+p;D++)if(!(D<0||D>=e)){L=Math.floor(1e3*Math.abs(D-_.x)),m[L]||(m[L]={});for(let q=S.y-x;q<=S.y+x;q++)q<0||q>=n||(j=Math.floor(1e3*Math.abs(q-_.y)),m[L][j]||(m[L][j]=c(Math.sqrt(Math.pow(L*d,2)+Math.pow(j*f,2))/1e3)),g=m[L][j],g>0&&(v=4*(q*e+D),E+=g,C+=g*o[v],I+=g*o[v+1],F+=g*o[v+2],z+=g*o[v+3]))}v=4*(R*i+w),l[v]=C/E,l[v+1]=I/E,l[v+2]=F/E,l[v+3]=z/E}return++w<i?P(w):a})(0)}bilinearFiltering(t,e,n,i,r){let o,a,l,c,h,u,d,f,p,x,m,_,S,P=0,w=this.rcpScaleX,R=this.rcpScaleY,D=4*(e-1),g=t.imageData.data,v=t.ctx.createImageData(i,r),E=v.data;for(d=0;d<r;d++)for(f=0;f<i;f++)for(h=Math.floor(w*f),u=Math.floor(R*d),p=w*f-h,x=R*d-u,S=4*(u*e+h),m=0;m<4;m++)o=g[S+m],a=g[S+4+m],l=g[S+D+m],c=g[S+D+4+m],_=o*(1-p)*(1-x)+a*p*(1-x)+l*x*(1-p)+c*p*x,E[P++]=_;return v}hermiteFastResize(t,e,n,i,r){let o=this.rcpScaleX,a=this.rcpScaleY,l=Math.ceil(o/2),c=Math.ceil(a/2),h=t.imageData.data,u=t.ctx.createImageData(i,r),d=u.data;for(let f=0;f<r;f++)for(let p=0;p<i;p++){let x=4*(p+f*i),m=0,_=0,S=0,P=0,w=0,R=0,D=0,g=(f+.5)*a;for(let v=Math.floor(f*a);v<(f+1)*a;v++){let E=Math.abs(g-(v+.5))/c,C=(p+.5)*o,I=E*E;for(let F=Math.floor(p*o);F<(p+1)*o;F++){let z=Math.abs(C-(F+.5))/l,L=Math.sqrt(I+z*z);L>1&&L<-1||(m=2*L*L*L-3*L*L+1,m>0&&(z=4*(F+v*e),D+=m*h[z+3],S+=m,h[z+3]<255&&(m=m*h[z+3]/250),P+=m*h[z],w+=m*h[z+1],R+=m*h[z+2],_+=m))}}d[x]=P/_,d[x+1]=w/_,d[x+2]=R/_,d[x+3]=D/S}return u}};X(zr,"type","Resize"),X(zr,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),X(zr,"uniformLocations",["uDelta","uTaps"]),Ut.setClass(zr);var Vr=class extends He{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.saturation;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a);e[i]+=l!==r?(l-r)*n:0,e[i+1]+=l!==o?(l-o)*n:0,e[i+2]+=l!==a?(l-a)*n:0}}sendUniformData(t,e){t.uniform1f(e.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};X(Vr,"type","Saturation"),X(Vr,"defaults",{saturation:0}),X(Vr,"uniformLocations",["uSaturation"]),Ut.setClass(Vr);var Gr=class extends He{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.vibrance;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a),c=(r+o+a)/3,h=2*Math.abs(l-c)/255*n;e[i]+=l!==r?(l-r)*h:0,e[i+1]+=l!==o?(l-o)*h:0,e[i+2]+=l!==a?(l-a)*h:0}}sendUniformData(t,e){t.uniform1f(e.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};X(Gr,"type","Vibrance"),X(Gr,"defaults",{vibrance:0}),X(Gr,"uniformLocations",["uVibrance"]),Ut.setClass(Gr);var e2=Object.freeze({__proto__:null,BaseFilter:He,BlackWhite:Dw,BlendColor:Ar,BlendImage:Rr,Blur:Pr,Brightness:Dr,Brownie:Tw,ColorMatrix:vs,Composed:ul,Contrast:Ir,Convolute:Or,Gamma:Lr,Grayscale:Fr,HueRotation:qo,Invert:Nr,Kodachrome:Ew,Noise:kr,Pixelate:Ur,Polaroid:Rw,RemoveColor:Br,Resize:zr,Saturation:Vr,Sepia:Pw,Technicolor:Aw,Vibrance:Gr,Vintage:Cw});var Jt=s=>Math.round(s*100)/100,_l=s=>s*Math.PI/180,en=s=>"M"+s.map(t=>Jt(t[0])+" "+Jt(t[1])).join("L")+"Z",tn=(s,t,e,n)=>`M${Jt(s-e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 1 ${Jt(s+e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 1 ${Jt(s-e)} ${Jt(t)}Z`,F_=(s,t,e,n)=>`M${Jt(s-e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 0 ${Jt(s+e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 0 ${Jt(s-e)} ${Jt(t)}Z`,ei=(s,t,e,n,i=0)=>i?`M${Jt(s+i)} ${Jt(t)}H${Jt(s+e-i)}Q${Jt(s+e)} ${Jt(t)} ${Jt(s+e)} ${Jt(t+i)}V${Jt(t+n-i)}Q${Jt(s+e)} ${Jt(t+n)} ${Jt(s+e-i)} ${Jt(t+n)}H${Jt(s+i)}Q${Jt(s)} ${Jt(t+n)} ${Jt(s)} ${Jt(t+n-i)}V${Jt(t+i)}Q${Jt(s)} ${Jt(t)} ${Jt(s+i)} ${Jt(t)}Z`:`M${Jt(s)} ${Jt(t)}H${Jt(s+e)}V${Jt(t+n)}H${Jt(s)}Z`,gl=(s,t,e,n)=>`M${Jt(s)} ${Jt(t)}V${Jt(t+n)}H${Jt(s+e)}V${Jt(t)}Z`,lp=(s,t,e,n,i,r=-90)=>en(Array.from({length:e*2},(o,a)=>{let l=_l(r+a*180/e),c=a%2?i:n;return[s+Math.cos(l)*c,t+Math.sin(l)*c]})),di=(s,t,e,n)=>[s+Math.cos(_l(n))*e,t+Math.sin(_l(n))*e];function ra(s,t,e,n,i,r,o=16){let a=[],l=[];for(let c=0;c<=o;c++){let h=n+(i-n)*c/o;a.push(di(s,t,e+r/2,h)),l.unshift(di(s,t,e-r/2,h))}return en(a.concat(l))}function Fw(){let s=7,t=()=>(s=s*16807%2147483647,s/2147483647),e="";for(let n=0;n<16;n++){let i=8+t()*84,r=8+t()*84,o=3+t()*3.5;if(n%3===0)e+=tn(i,r,o,o);else{let a=t()*180,l=Math.cos(_l(a)),c=Math.sin(_l(a)),h=o*1.9,u=o*.7;e+=en([[-h,-u],[h,-u],[h,u],[-h,u]].map(([d,f])=>[i+d*l-f*c,r+d*c+f*l]))}}return e}function Nw(){let s=tn(50,50,46,46)+F_(50,50,41,41)+en([0,1,2,3,4].map(t=>di(50,50,16,-90+72*t)));for(let t=0;t<5;t++){let e=-90+72*t;s+=en([di(50,50,14,e-7),di(50,50,31,e-3.4),di(50,50,31,e+3.4),di(50,50,14,e+7)]),s+=en([di(50,50,30,e-15),di(50,50,43,e-21),di(50,50,43,e+21),di(50,50,30,e+15)])}return s}function kw(){let s="";for(let t=0;t<6;t++){let[e,n]=di(50,50,26,t*60-90);s+=tn(e,n,17,17)}return s+F_(50,50,11,11)}function Uw(){let s=ei(2,14,96,3.5,1.5);for(let t=0;t<5;t++)s+=en([[5+19*t,17.5],[19+19*t,17.5],[12+19*t,42]]);return s}var cp=[["box","Box",null,300,.7],["round","Rounded box",null,300,.7],["circle","Circle",null,240,1],["line","Line",null,300,.035],["triangle","Triangle",en([[50,6],[96,92],[4,92]]),240,1],["diamond","Diamond",en([[50,3],[93,50],[50,97],[7,50]]),220,1],["star","Star",lp(50,53,5,50,20),260,1],["heart","Heart","M50 91C22 69 5 52 5 32C5 18 16 7 30 7C39 7 46 12 50 20C54 12 61 7 70 7C84 7 95 18 95 32C95 52 78 69 50 91Z",240,1],["sparkle","Sparkle","M50 3Q56 44 97 50Q56 56 50 97Q44 56 3 50Q44 44 50 3Z",220,1],["seal","Seal",lp(50,50,18,48,41),280,1],["ribbon","Ribbon",en([[2,30],[98,30],[87,50],[98,70],[2,70],[13,50]]),400,1],["pennant","Pennant",en([[5,14],[96,50],[5,86]]),320,1],["bunting","Bunting",Uw(),440,1],["shield","Shield","M50 4L90 15V46C90 70 73 88 50 97C27 88 10 70 10 46V15Z",260,1],["arrow","Arrow",en([[5,38],[57,38],[57,17],[96,50],[57,83],[57,62],[5,62]]),300,1],["bubble","Speech bubble",ei(6,10,88,58,16)+en([[26,66],[48,66],[22,93]]),320,1],["cap","Graduation cap",en([[50,13],[97,35],[50,57],[3,35]])+"M24 49L50 61L76 49V68C76 76 64 82 50 82C36 82 24 76 24 68Z"+en([[86.4,40.6],[89.6,39.1],[89.6,67],[86.4,67]])+ei(84.5,67,7,15,2.5),320,1],["balloon","Balloon",tn(50,37,29,34)+en([[45.5,70],[54.5,70],[57.5,79],[42.5,79]])+"M49 79C55 85 43 90 49 97L52 97C46 90 58 85 52 79Z",240,1],["cake","Cake",ei(7,85,86,8,3)+ei(14,59,72,26,4)+ei(26,37,48,22,4)+ei(34.5,22,5,15,1.2)+ei(47.5,22,5,15,1.2)+ei(60.5,22,5,15,1.2)+tn(37,14.5,3.2,5.2)+tn(50,14.5,3.2,5.2)+tn(63,14.5,3.2,5.2),280,1],["trophy","Trophy","M28 7H72V30C72 46 62 56 50 56C38 56 28 46 28 30Z"+ra(28,22,13,90,270,5)+ra(72,22,13,-90,90,5)+ei(45.5,55,9,18)+en([[33,72],[67,72],[72,85],[28,85]])+ei(21,85,58,9,2),280,1],["crown","Crown",en([[9,31],[29,54],[50,19],[71,54],[91,31],[84,79],[16,79]])+ei(16,83,68,10,2)+tn(9,26,5.5,5.5)+tn(50,13,6.5,6.5)+tn(91,26,5.5,5.5),300,1],["confetti","Confetti",Fw(),380,1],["sun","Sun",lp(50,50,12,49,30)+tn(50,50,25,25),260,1],["flower","Flower",kw(),260,1],["bolt","Lightning",en([[59,3],[19,55],[44,55],[35,97],[81,40],[55,40]]),220,1],["note","Music note",tn(30,79,17,13)+ei(41,13,6.5,68)+"M47.5 13C63 17 78 26 75 48C70 35 60 31 47.5 31Z",240,1],["paw","Paw",tn(50,67,25,20)+tn(21,41,10.5,13.5)+tn(40,24,10.5,13.5)+tn(60,24,10.5,13.5)+tn(79,41,10.5,13.5),240,1],["football","Football","M4 50C24 16 76 16 96 50C76 84 24 84 4 50Z"+gl(32,48,36,4)+[36,44.7,53.3,62].map(s=>gl(s-1.5,41,3,7)+gl(s-1.5,52,3,7)).join(""),340,1],["basketball","Basketball",tn(50,50,46,46)+gl(48.4,4.6,3.2,90.8)+[[6,20.4],[23.6,24.8],[51.6,24.8],[79.6,14.4]].map(([s,t])=>gl(s,48.4,t,3.2)).join("")+ra(-12,50,34,47,-47,3.2)+ra(112,50,34,227,133,3.2),260,1],["soccer","Soccer ball",Nw(),260,1],["baseball","Baseball",tn(50,50,46,46)+ra(-10,50,42,44,-44,3.4)+ra(110,50,42,224,136,3.4),260,1]],Bw={back:"M14.5 5l-7 7 7 7",undo:"M4 9h11a5 5 0 010 10H8M4 9l4-4M4 9l4 4",redo:"M20 9H9a5 5 0 000 10h7M20 9l-4-4M20 9l-4 4",designs:"M4 4h7v16H4zM14 4h6v7h-6zM14 14h6v6h-6z",text:"M5 7V4h14v3M12 4v16M8.5 20h7",photos:"M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 9.6v.01",art:"M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.4l6-.8z",ground:"M12 3c4 5 6 8.2 6 11a6 6 0 01-12 0c0-2.8 2-6 6-11z",post:"M9 3h6v17H9zM6 21h12",plus:"M12 5v14M5 12h14",minus:"M5 12h14",copy:"M8 8h12v12H8zM16 8V4H4v12h4",up:"M12 4l8 5-8 5-8-5zM4 14l8 5 8-5",down:"M12 20l8-5-8-5-8 5zM4 10l8-5 8 5",center:"M12 3v18M6 7h12v3H6zM8 14h8v3H8z",trash:"M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13",turn:"M5 12a7 7 0 0112-5l2 2M19 5v4h-4M19 12a7 7 0 01-12 5l-2-2M5 19v-4h4",upload:"M12 16V4M7 9l5-5 5 5M4 20h16",crop:"M6 2v16h16M2 6h16v16",swap:"M4 8h13l-3-3M20 16H7l3 3",check:"M5 12.5l4.5 4.5L19 7",close:"M6 6l12 12M18 6L6 18",left:"M14.5 6l-6 6 6 6",right:"M9.5 6l6 6-6 6"},ws=(s,t=20)=>`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Bw[s]}"/></svg>`,N_=[["none","Plain"],["stripes","Stripes"],["pin","Pinstripes"],["dots","Dots"],["checks","Checks"],["zigzag","Zigzag"],["flecks","Flecks"]];function hp(s,t,e){let i=document.createElement("canvas");i.width=i.height=96;let r=i.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,96,96),r.fillStyle=e,r.strokeStyle=e,r.globalAlpha=.55,s==="stripes"){r.lineWidth=22,r.beginPath();for(let o=-96;o<192;o+=48)r.moveTo(o,108),r.lineTo(o+96+24,-12);r.stroke()}else if(s==="pin")for(let o=10;o<96;o+=24)r.fillRect(o,0,4,96);else if(s==="dots")[[24,24],[72,72]].forEach(([o,a])=>{r.beginPath(),r.arc(o,a,9,0,6.2832),r.fill()});else if(s==="checks")r.fillRect(0,0,48,48),r.fillRect(48,48,48,48);else if(s==="zigzag"){r.lineWidth=9,r.lineJoin="miter",r.beginPath();for(let o=12;o<144;o+=48){r.moveTo(-12,o+12);for(let a=0;a<=120;a+=24)r.lineTo(a,o+(a/24%2?-12:12))}r.stroke()}else if(s==="flecks"){let o=11,a=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<7;l++){let c=8+a()*80,h=8+a()*80;r.save(),r.translate(c,h),r.rotate(a()*3.1),r.fillRect(-9,-3,18,6),r.restore()}}return i}var Le=476,Pe=6738,xl=3369,up=Le/4.875,U_=.036,zw=.7,Vw="#E3E8F0",sr=[["Block","Barlow Condensed",800],["Clean","Barlow",600],["Varsity","Graduate",400],["Tall","Bebas Neue",400],["Poster","Anton",400],["Slab","Alfa Slab One",400],["Serif","DM Serif Display",400],["Classic","Playfair Display",700],["Retro script","Pacifico",400],["Formal script","Great Vibes",400],["Handwritten","Caveat",600],["Marker","Permanent Marker",400]],Li=["role","loose","pid","bw","zoomK","fx","fy","bgc","pat","fg","art","cover","wrap"],Gw={cornerSize:13,touchCornerSize:34,transparentCorners:!1,cornerColor:"#FFFFFF",cornerStrokeColor:"#14213D",borderColor:"#F2A900",borderScaleFactor:2,cornerStyle:"circle",padding:6,lockScalingFlip:!0,snapAngle:45,snapThreshold:4},Hw=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,eo=(s,t)=>document.fonts&&document.fonts.load?document.fonts.load(`${t} 48px "${s}"`).catch(()=>{}):Promise.resolve(),cn=(s,t,e)=>Math.max(t,Math.min(e,s));function bt(s,t,...e){let n=document.createElement(s);return Object.keys(t||{}).forEach(i=>{let r=t[i];r===!1||r==null||(i==="html"?n.innerHTML=r:i==="on"?Object.keys(r).forEach(o=>n.addEventListener(o,r[o])):i==="style"?Object.assign(n.style,r):i in n&&i!=="list"&&typeof r!="string"?n[i]=r:n.setAttribute(i,r))}),e.forEach(i=>{i!=null&&i!==!1&&n.appendChild(typeof i=="string"?document.createTextNode(i):i)}),n}var Fi=new Map,Ww=Math.random().toString(36).slice(2,7),Xw=0;function oa(s){return s.pid||(s.pid="x"+Ww+ ++Xw),Fi.has(s.pid)||Fi.set(s.pid,s),Fi.get(s.pid)}var Ts=s=>[s.naturalWidth||s.width,s.naturalHeight||s.height];function gu(s){if(s.gray)return s.gray;let[t,e]=Ts(s.color),n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");i.drawImage(s.color,0,0);try{let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=cn((.299*o[a]+.587*o[a+1]+.114*o[a+2]-128)*1.06+128,0,255);o[a]=o[a+1]=o[a+2]=l}i.putImageData(r,0,0)}catch{}return s.gray=n,n}var dp=null;function B_(){if(dp)return dp;let s=document.createElement("canvas");s.width=400,s.height=500;let t=s.getContext("2d");return t.fillStyle="#E1DACB",t.fillRect(0,0,400,500),t.strokeStyle="#A99F8C",t.lineWidth=4,t.setLineDash([16,14]),t.strokeRect(22,22,356,456),t.setLineDash([]),t.fillStyle="#A99F8C",t.fillRect(170,245,60,10),t.fillRect(195,220,10,60),dp=s,s}var gn=class s extends ci{getSrc(){return"mp:"+(this.pid||"")}toObject(t=[]){let e=super.toObject(Li.concat(t));return delete e.filters,delete e.crossOrigin,e}static fromObject(t){let e=Object.assign({},t);["type","src","filters","resizeFilter","crossOrigin","version"].forEach(i=>delete e[i]);let n=Fi.get(e.pid);return Promise.resolve(new s(n?e.bw?gu(n):n.color:B_(),e))}};gn.type="Photo";Ut.setClass(gn);Ut.setClass(gn,"Photo");function fi(s,t,e){let[n,i]=Ts(s.getElement()),r=s.wrap==null?1:4,o=Math.max(t*r/n,e/i)*(s.zoomK||1),a=t*r/o,l=e/o,c=cn((s.fx==null?.5:s.fx)*n,a/2,n-a/2),h=cn((s.fy==null?.5:s.fy)*i,l/2,i-l/2);s.set({cropX:c-a/2+(s.wrap||0)*a/r,cropY:h-l/2,width:a/r,height:l,scaleX:o,scaleY:o}),s.fx=Math.round(c/n*1e6)/1e6,s.fy=Math.round(h/i*1e6)/1e6,s.setCoords()}var pp=s=>s instanceof gn&&(!!s.cover||s.wrap!=null),k_=s=>s.forEach(t=>{pp(t)&&(t.set({left:0,top:0,angle:0}),fi(t,Le,Pe))}),la=class s extends Kn{toObject(t=[]){let e=super.toObject(Li.concat(t));return e.fill=this.bgc,e}static fromObject(t){let e=Object.assign({},t);delete e.type,delete e.version;let n=new s(e);return aa(n),Promise.resolve(n)}};la.type="Ground";Ut.setClass(la);Ut.setClass(la,"Ground");function aa(s){s.set({fill:s.pat&&s.pat!=="none"?new Yr({source:hp(s.pat,s.bgc,s.fg||"#FFFFFF"),repeat:"repeat"}):s.bgc,dirty:!0})}var vl=s=>{let t=new la({left:0,top:0,width:Le,height:Pe,bgc:s,pat:"none",fg:"#FFFFFF",role:"ground",selectable:!1,evented:!1,strokeWidth:0});return aa(t),t};function ni(s){if(s.role==="ground")return s.set({selectable:!1,evented:!1}),s;s.set(Gw),s.loose&&(s.perPixelTargetFind=!0);let t=pp(s);s.set({lockMovementX:t,lockMovementY:t,lockScalingX:t,lockScalingY:t,lockRotation:t,hasControls:!t,hoverCursor:t?"grab":null});let e=s instanceof Xe,n=s instanceof gn&&s.role!=="photo";return s.setControlsVisibility({ml:!e&&!n,mr:!e&&!n,mt:!e&&!n,mb:!e&&!n}),e&&s.set({editable:!Hw,cursorColor:"#F2A900",selectionColor:"rgba(242,169,0,.35)",editingBorderColor:"#F2A900"}),s}var _u=s=>U_*s.fontSize*(s.scaleY||1);function yl(s){let t=s.getCenterPoint();if(!(s instanceof Xe))return t;let e=s.angle*Math.PI/180;return new st(t.x+Math.sin(e)*_u(s),t.y-Math.cos(e)*_u(s))}function fp(s,t,e){if(s instanceof Xe){let n=s.angle*Math.PI/180;t-=Math.sin(n)*_u(s),e+=Math.cos(n)*_u(s)}s.setPositionByOrigin(new st(t,e),"center","center"),s.setCoords()}function jw(s){if(s.t==="rect")return ni(new Kn({left:s.x,top:s.y,width:s.w,height:s.h,fill:s.fill,role:"shape",strokeWidth:0}));if(s.t==="text"){let e=(s.angle||0)*Math.PI/180,n=U_*s.size,i=new Pi(s.text,{originX:"center",originY:"center",left:s.cx-Math.sin(e)*n,top:s.cy+Math.cos(e)*n,angle:s.angle||0,fontFamily:s.family,fontWeight:s.weight,fontSize:s.size,charSpacing:Math.round(s.sp*1e3),fill:s.fill,role:"text"}),r=Array.from(s.text).length;return s.w&&r>1&&i.set("charSpacing",Math.round(i.charSpacing+(s.w-i.width)/(r-1)/s.size*1e3)),ni(i)}if(s.t==="photo"){let e=s.entry?oa(s.entry):null,n=e?s.bw?gu(e):e.color:B_(),i=new gn(n,{left:s.x,top:s.y,pid:e?e.pid:"",bw:!!s.bw,role:"photo",zoomK:1,fx:.5}),[,r]=Ts(n),[o]=Ts(n),a=Math.max(s.w/o,s.h/r),l=s.h/a;return i.fy=((r-l)*(s.bias==null?.5:s.bias)+l/2)/r,fi(i,s.w,s.h),s.frame&&i.set({left:s.x-s.frame,top:s.y-s.frame,stroke:"#FFFFFF",strokeWidth:2*s.frame,strokeUniform:!0,paintFirst:"stroke"}),ni(i)}let t=oa({color:s.canvas});return ni(new gn(t.color,{left:s.x,top:s.y,scaleX:s.w/t.color.width,scaleY:s.h/t.color.height,pid:t.pid,role:"art",loose:!!s.loose}))}function z_(s){ye.configure({devicePixelRatio:Math.min(window.devicePixelRatio||1,2)});let t=s.root,e=y=>t.querySelector("#"+y),n=[null,null,null,null],i=[[],[],[],[]],r=[0,0,0,0],o=["","","",""],a=[0,0,0,0],l=null,c=-1,h=!1,u=!1,d="",f="",p=[],x=null,m=null,_=null,S=0,P=0,w=sr[0],R="",D=!1,g=[1,2,3,0],v=pp,E=y=>v(y)&&!(x&&x.o===y),C=y=>v(y)?[Le,Pe]:[y.width*y.scaleX,y.height*y.scaleY],I=()=>l.getObjects().find(y=>y instanceof gn&&y.wrap!=null),F=y=>y.type==="Photo"&&y.wrap!=null,z=y=>y?[y.pid,!!y.bw,y.zoomK,y.fx,y.fy].join("|"):"",L=()=>{let y=s.lead&&s.lead()||s.library()[0];return y?oa(y):null};function j(y,O,N){let V=new gn(y.color,{left:0,top:0,pid:y.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.45,strokeWidth:0,cover:!N,wrap:N?g[O]:void 0});return fi(V,Le,Pe),ni(V)}function q(y){x&&x.o!==y&&v(x.o)&&(x.o.lockMovementX=x.o.lockMovementY=!0,x.o.hoverCursor="grab"),x=y?{o:y,left:y.left,top:y.top,fx:y.fx,fy:y.fy}:null,y&&v(y)&&(y.lockMovementX=y.lockMovementY=!1,y.hoverCursor="move")}let U=()=>window.innerWidth<760,J=()=>Promise.all([eo("Barlow Condensed",800),eo("Barlow Condensed",700),eo("Barlow",600)]);function K(y){let O=s.pieces(y);return[vl(O.bg)].concat(O.items.map(jw))}function ot(y){let O=new er(void 0,{width:Le,height:Pe,enableRetinaScaling:!1,renderOnAddRemove:!1});y.forEach(V=>O.add(V)),O.renderAll();let N={json:O.toObject(Li),full:O.toCanvasElement(1)};return O.dispose(),N}function dt(y,O){if(n[y]&&(n[y].edited||!O))return Promise.resolve();O=O||n[y]&&n[y].origin||"name";let N=++a[y];return J().then(()=>{let V=s.stamp?s.stamp():"";if(N!==a[y]||n[y]&&n[y].edited)return;let nt=ot(K(O));n[y]={json:nt.json,full:nt.full,origin:O,edited:!1},o[y]=V,i[y]=[JSON.stringify(nt.json)],r[y]=0})}function Pt(){let y=s.stamp?s.stamp():"",O=[];return n.forEach((N,V)=>{N&&!N.edited&&N.origin&&o[V]!==y&&O.push(dt(V,N.origin).then(()=>V===c&&l?$t(n[V].json):null))}),Promise.all(O).then(()=>(O.length&&(ue(),Cn()),O.length))}function At(y,O,N){let V=l.width,nt=l.height,W=Math.min(.9,(nt-48)/Pe),Y=Le*y,ft=Pe*y;y=cn(y,W,3.2),O=Y<=V-24?(V-Le*y)/2:cn(O,V-Le*y-36,36),N=ft<=nt-48?(nt-Pe*y)/2:cn(N,nt-Pe*y-90,24),l.setViewportTransform([y,0,0,y,O,N]),e("st-zout").disabled=y<=W+1e-4,e("st-zin").disabled=y>=3.2-1e-4,t.dataset.zoom=y.toFixed(3),t.dataset.view=[y,O,N].map(Zt=>Math.round(Zt*1e3)/1e3).join(","),e("st-zfit").textContent=y<=W+.001?"Close up":"Whole face",Wt(),ut()}let Q=()=>l.viewportTransform;function wt(y,O,N){let V=Q(),nt=(y-V[4])/V[0],W=(O-V[5])/V[0],Y=Math.min(.9,(l.height-48)/Pe);N=cn(N,Y,3.2),At(N,y-nt*N,O-W*N)}function Ct(){let y=l.width,O=U()?cn(y*.62,150,240):cn(y*.46,300,440);At(O/Le,0,24)}function Bt(){At(1e-4,0,0)}let vt=()=>requestAnimationFrame(()=>{se(),Bt(),e("st-panel").scrollTop=0});function Gt(y){let O=y.getCenterPoint(),N=Q(),V=O.y*N[0]+N[5];(V<60||V>l.height-60)&&At(N[0],N[4],l.height/2-O.y*N[0])}function se(){let y=e("st-cv"),O=y.clientWidth,N=y.clientHeight;if(!(!l||!O||!N)&&(O!==l.width||N!==l.height)){let V=Q(),nt=!l.__sized,W=V[0]<=Math.min(.9,(l.height-48)/Pe)+.001;l.__sized=!0,l.setDimensions({width:O,height:N}),nt?Ct():W?Bt():At(V[0],V[4],V[5]),ue()}}function Wt(){let y=e("st-ruler"),O=Math.min(window.devicePixelRatio||1,2),N=y.clientWidth,V=y.clientHeight;if(!N||!V)return;(y.width!==Math.round(N*O)||y.height!==Math.round(V*O))&&(y.width=Math.round(N*O),y.height=Math.round(V*O));let nt=y.getContext("2d"),W=Q(),Y=up*W[0];nt.setTransform(O,0,0,O,0,0),nt.clearRect(0,0,N,V);let ft=Y>=34?1:Y>=12?3:Y>=6?6:12;nt.fillStyle="#5B6780",nt.strokeStyle="#8B95A8",nt.lineWidth=1,nt.font="500 10.5px Barlow, system-ui, sans-serif",nt.textAlign="right",nt.textBaseline="middle";for(let M=0;M<=69;M++){let k=Math.round(W[5]+M*Y)+.5;if(k<-4||k>V+4)continue;let tt=M%ft===0;Y<5&&!tt||(nt.beginPath(),nt.moveTo(N-(tt?9:4),k),nt.lineTo(N,k),nt.stroke(),tt&&nt.fillText(M+(M===0?" in":""),N-11,M===0?k+6:k))}let Zt=W[5]+xl*W[0];Zt>0&&Zt<V&&(nt.fillStyle="#B67A00",nt.beginPath(),nt.moveTo(N,Zt),nt.lineTo(N-8,Zt-5),nt.lineTo(N-8,Zt+5),nt.closePath(),nt.fill())}function pe(y){if(u)return;let O=Q(),N=O[4],V=O[5],nt=Le*O[0],W=Pe*O[0],Y=l.getRetinaScaling();y.save(),y.setTransform(Y,0,0,Y,0,0),y.strokeStyle="rgba(20,33,61,.55)",y.lineWidth=1,y.strokeRect(Math.round(N)-.5,Math.round(V)-.5,Math.round(nt)+1,Math.round(W)+1);let ft=Math.round(V+xl*O[0])+.5;y.setLineDash([7,5]),y.strokeStyle="#F2A900",y.lineWidth=1.5,y.beginPath(),y.moveTo(N-10,ft),y.lineTo(N+nt+10,ft),y.stroke(),y.setLineDash([]),y.font="600 11px Barlow, system-ui, sans-serif",y.fillStyle="#8A5E00",y.textBaseline="bottom",N+nt+96<l.width&&y.fillText("seam",N+nt+14,ft+5),y.strokeStyle="#E0457B",y.lineWidth=1,p.forEach(([Zt,M])=>{if(y.beginPath(),Zt==="v"){let k=Math.round(N+M*O[0])+.5;y.moveTo(k,Math.max(0,V)),y.lineTo(k,Math.min(l.height,V+W))}else{let k=Math.round(V+M*O[0])+.5;y.moveTo(N,k),y.lineTo(N+nt,k)}y.stroke()}),y.restore()}function ee(){l=new ta(e("st-canvas"),{preserveObjectStacking:!0,selection:!1,enableRetinaScaling:!0,stopContextMenu:!0,controlsAboveOverlay:!0,fireRightClick:!1,targetFindTolerance:6}),l.overlayImage=new $i(`M-90000 -90000H90000V90000H-90000ZM0 0V${Pe}H${Le}V0Z`,{fill:Vw,strokeWidth:0,objectCaching:!1,selectable:!1,evented:!1}),["selection:created","selection:updated","selection:cleared"].forEach(W=>l.on(W,()=>{d="",q(null);let Y=l.getActiveObject();Y&&U()&&sn(""),pt(),Y&&!v(Y)&&Gt(Y)})),l.on("after:render",({ctx:W})=>pe(W)),l.on("object:modified",({target:W})=>{p=[],x&&x.o===W&&(x.fx=W.fx,x.fy=W.fy),W instanceof Xe&&(W.scaleX!==1||W.scaleY!==1)&&W.set({fontSize:Math.max(8,W.fontSize*W.scaleX),scaleX:1,scaleY:1}),T(!0),pt()}),l.on("text:editing:entered",pt),l.on("text:editing:exited",()=>{T(!0),pt()}),l.on("text:changed",()=>{T(!1);let W=e("st-words");W&&document.activeElement!==W&&(W.value=l.getActiveObject().text)}),l.on("object:scaling",({target:W,transform:Y})=>{W instanceof gn&&W.role==="photo"&&!v(W)&&Y&&/^m[lrtb]$/.test(Y.corner||"")&&fi(W,W.width*W.scaleX,W.height*W.scaleY)}),l.on("object:moving",({target:W})=>{if(x&&x.o===W){let k=-W.angle*Math.PI/180,tt=W.left-x.left,$=W.top-x.top,et=tt*Math.cos(k)-$*Math.sin(k),Ot=tt*Math.sin(k)+$*Math.cos(k),[Vt,It]=Ts(W.getElement());W.fx=x.fx-et/(W.scaleX*Vt),W.fy=x.fy-Ot/(W.scaleY*It),W.set({left:x.left,top:x.top}),fi(W,...C(W));return}let Y=yl(W),ft=7/Q()[0];p=[];let Zt=Y.x,M=Y.y;Math.abs(Y.x-Le/2)<ft&&(Zt=Le/2,p.push(["v",Zt])),[xl/2,xl+xl/2].forEach(k=>{Math.abs(Y.y-k)<ft&&(M=k,p.push(["h",k]))}),p.length&&fp(W,Zt,M)}),l.on("mouse:up",()=>{p.length&&(p=[],l.requestRenderAll())});let y=null;l.on("mouse:down",({e:W,target:Y})=>{(!Y||E(Y))&&W.type.indexOf("touch")<0&&(y={x:W.clientX,y:W.clientY,v:Q().slice()})}),l.on("mouse:move",({e:W})=>{y&&W.buttons!==0?At(y.v[0],y.v[4]+W.clientX-y.x,y.v[5]+W.clientY-y.y):y=null}),l.on("mouse:up",()=>{y=null}),l.on("mouse:wheel",({e:W})=>{W.preventDefault(),W.stopPropagation();let Y=Q(),ft=l.upperCanvasEl.getBoundingClientRect();W.ctrlKey||W.metaKey?wt(W.clientX-ft.left,W.clientY-ft.top,Y[0]*Math.exp(-W.deltaY*.01)):At(Y[0],Y[4]-(W.shiftKey?W.deltaY:W.deltaX),Y[5]-(W.shiftKey?0:W.deltaY))});let O=l.wrapperEl,N=null,V=W=>{let Y=O.getBoundingClientRect();return{x:W.clientX-Y.left,y:W.clientY-Y.top}},nt=W=>{let Y=V(W.touches[0]),ft=V(W.touches[1]);return{d:Math.hypot(Y.x-ft.x,Y.y-ft.y)||1,x:(Y.x+ft.x)/2,y:(Y.y+ft.y)/2}};O.addEventListener("touchstart",W=>{if(W.touches.length===2){l._currentTransform=null,N=Object.assign({kind:"pinch",v:Q().slice()},nt(W)),W.preventDefault(),W.stopPropagation();return}if(W.touches.length!==1)return;let Y=l.findTarget(W),ft=l.getActiveObject();if(ft&&Y===ft&&!E(ft)){N=null;return}let Zt=V(W.touches[0]);N={kind:"tap",x:Zt.x,y:Zt.y,v:Q().slice(),target:Y},W.preventDefault(),W.stopPropagation()},{capture:!0,passive:!1}),O.addEventListener("touchmove",W=>{if(!N)return;if(W.preventDefault(),W.stopPropagation(),N.kind==="pinch"&&W.touches.length>=2){let ft=nt(W),Zt=N.v[0]*ft.d/N.d,M=(N.x-N.v[4])/N.v[0],k=(N.y-N.v[5])/N.v[0],tt=cn(Zt,Math.min(.9,(l.height-48)/Pe),3.2);At(tt,ft.x-M*tt,ft.y-k*tt);return}if(W.touches.length!==1)return;let Y=V(W.touches[0]);if(N.kind==="pinch"){N={kind:"pan",x:Y.x,y:Y.y,v:Q().slice()};return}N.kind==="tap"&&Math.hypot(Y.x-N.x,Y.y-N.y)>7&&(N.kind="pan"),N.kind==="pan"&&At(N.v[0],N.v[4]+Y.x-N.x,N.v[5]+Y.y-N.y)},{capture:!0,passive:!1}),O.addEventListener("touchend",W=>{if(N){if(W.touches.length===0){if(N.kind==="tap"){let Y=l.getActiveObject();Y&&Y.isEditing&&Y.exitEditing(),N.target?l.setActiveObject(N.target):l.discardActiveObject(),l.requestRenderAll()}N=null}else if(N.kind==="pinch"&&W.touches.length===1){let Y=V(W.touches[0]);N={kind:"pan",x:Y.x,y:Y.y,v:Q().slice()}}W.preventDefault()}},{capture:!0,passive:!1}),"ResizeObserver"in window?new ResizeObserver(se).observe(e("st-cv")):window.addEventListener("resize",se)}function $t(y){h=!0;let O=Q().slice();return l.loadFromJSON(y).then(()=>{l.getObjects().forEach(ni),k_(l.getObjects()),l.discardActiveObject(),l.setViewportTransform(O),l.requestRenderAll(),h=!1,D=!1,pt(),Ye()})}let be=()=>l.getObjects().find(y=>y.role==="ground"),Me=()=>l.getObjects().filter(y=>y.role!=="ground");function De(){t.dataset.count=l?String(Me().length):"0";let y=l&&be();t.dataset.ground=y?y.bgc+"|"+(y.pat||"none"):"",Ce()}function Ce(){let y=l&&l.getActiveObject();t.dataset.info=y?JSON.stringify({role:y.role||"",text:y.text||"",font:y.fontFamily||"",size:Math.round(y.fontSize||0),fill:typeof y.fill=="string"?y.fill:"",x:Math.round(yl(y).x),y:Math.round(yl(y).y),angle:Math.round(y.angle||0),pid:y.pid||"",bw:!!y.bw,w:Math.round(y.getScaledWidth()),h:Math.round(y.getScaledHeight()),zoom:y.zoomK||0,fx:y.fx||0,opacity:y.opacity,editing:!!y.isEditing,cover:!!y.cover,wrap:y.wrap==null?-1:y.wrap,even:Math.abs((y.scaleX||1)-(y.scaleY||1))<1e-6}):""}function Ye(){e("st-undo").disabled=c<0||r[c]<1,e("st-redo").disabled=c<0||r[c]>=i[c].length-1,De()}function Ee(){if(!l||c<0||h)return;let y=Q(),O=l.getActiveObject(),N=O&&O.isEditing;u=!0;let V=l.toCanvasElement(1/y[0],{left:y[4],top:y[5],width:Le*y[0],height:Pe*y[0]});u=!1,n[c].full=V,n[c].json=l.toObject(Li),N||l.requestRenderAll(),s.onChange(c),zt(c);let nt=I();nt&&z(nt)!==R&&(R=z(nt),dn(nt))}function dn(y){let O={pid:y.pid,bw:!!y.bw,zoomK:y.zoomK,fx:y.fx,fy:y.fy},N=nt=>(nt.objects.filter(F).forEach(W=>Object.assign(W,O)),nt),V=[];[0,1,2,3].forEach(nt=>{let W=n[nt];nt===c||!W||(i[nt]=i[nt].map(Y=>Y.indexOf('"wrap"')<0?Y:JSON.stringify(N(JSON.parse(Y)))),W.json.objects.some(F)&&(N(W.json),V.push(Lt(nt,!0))))}),V.length&&Promise.all(V).then(()=>s.onChange(c))}function Lt(y,O){let N=n[y],V=++a[y],nt=new er(void 0,{width:Le,height:Pe,enableRetinaScaling:!1,renderOnAddRemove:!1});return nt.loadFromJSON(N.json).then(()=>{V===a[y]&&n[y]===N&&y!==c&&(k_(nt.getObjects()),nt.renderAll(),N.json=nt.toObject(Li),N.full=nt.toCanvasElement(1),O||s.onChange(y),zt(y)),nt.dispose()})}function H(){if(c<0||h||!D)return;D=!1;let y=JSON.stringify(l.toObject(Li)),O=i[c];O[r[c]]!==y&&(O.length=r[c]+1,O.push(y),O.length>40&&O.shift(),r[c]=O.length-1,Ye())}function T(y){h||c<0||(n[c].edited=!0,D=!0,clearTimeout(S),S=setTimeout(Ee,y?60:220),clearTimeout(P),y?H():P=setTimeout(H,500),De(),l.requestRenderAll())}function gt(y){if(h||c<0)return;clearTimeout(P),H();let O=r[c]+y;O<0||O>=i[c].length||(r[c]=O,n[c].edited=!0,$t(JSON.parse(i[c][O])).then(()=>{Ee()}))}function Tt(y){if(h)return Promise.resolve();c>=0&&l&&(clearTimeout(S),clearTimeout(P),H(),Ee());let O=s.kindOf(y);return O!=="free"&&(n[y]=null),(O==="free"&&n[y]?Promise.resolve():dt(y,O==="free"?"name":O)).then(()=>(O!=="free"&&s.setKind(y,"free"),c=y,t.dataset.face=String(y+1),e("st-facename").textContent="Face "+(y+1)+" of 4",$t(n[y].json))).then(()=>{R=z(I()),Ct(),ue(),Cn(),s.turnTo(y),Ye()})}function Qt(y,O){return _=document.activeElement,t.hidden=!1,document.documentElement.classList.add("st-open"),s.onOpen(e("st-post")),l||ee(),we(),sn(O||(U()?"":"designs")),se(),Tt(y??0).then(()=>{se();try{e("st-done").focus({preventScroll:!0})}catch{}})}function xt(){if(!l||t.hidden)return;let y=l.getActiveObject();y&&y.isEditing&&y.exitEditing(),l.discardActiveObject(),clearTimeout(S),clearTimeout(P),H(),Ee(),n.forEach((O,N)=>{O&&!O.edited&&(s.setKind(N,O.origin),n[N]=null,i[N]=[],r[N]=0)}),c=-1,t.hidden=!0,document.documentElement.classList.remove("st-open"),t.removeAttribute("data-post"),s.onClose();try{_&&_.focus&&_.focus({preventScroll:!0})}catch{}_=null}function ue(){let y=e("st-nav");if(!l)return;let O=cn(e("st-stage").clientHeight-(U()?84:92),160,640),N=Math.max(12,Math.round(O*Le/Pe));y.textContent="",(U()?[c]:[0,1,2,3]).forEach(V=>{if(V<0)return;let nt=bt("canvas",{width:N*2,height:O*2,style:{width:N+"px",height:O+"px"}}),W=bt("button",{type:"button",class:"st-strip"+(V===c?" on":""),"aria-label":"Face "+(V+1)+(V===c?", on the table":""),"data-side":String(V),on:{click:()=>{V!==c&&Tt(V)}}},nt,bt("span",{class:"st-win"}),U()?null:bt("b",{},String(V+1)));if(y.appendChild(W),V===c){let Y=ft=>{let Zt=nt.getBoundingClientRect(),M=(ft.clientY-Zt.top)/Zt.height*Pe,k=Q();At(k[0],k[4],l.height/2-M*k[0])};nt.addEventListener("pointerdown",ft=>{nt.setPointerCapture(ft.pointerId),Y(ft),nt.onpointermove=Y}),nt.addEventListener("pointerup",()=>{nt.onpointermove=null}),nt.addEventListener("pointercancel",()=>{nt.onpointermove=null})}}),[0,1,2,3].forEach(zt),ut()}function zt(y){let O=e("st-nav").querySelector('[data-side="'+y+'"]');if(!O)return;let N=O.querySelector("canvas"),V=N.getContext("2d");V.setTransform(1,0,0,1,0,0),V.clearRect(0,0,N.width,N.height),n[y]&&n[y].full?V.drawImage(n[y].full,0,0,N.width,N.height):s.drawSide(y,N)}function ut(){let y=e("st-nav").querySelector(".st-strip.on");if(!y||!l)return;let O=y.querySelector("canvas"),N=y.querySelector(".st-win"),V=Q(),nt=O.clientHeight/Pe,W=cn(-V[5]/V[0],0,Pe),Y=cn((l.height-V[5])/V[0],0,Pe);N.style.top=O.offsetTop+W*nt+"px",N.style.height=Math.max(6,(Y-W)*nt)+"px",N.hidden=Y-W>=Pe-1}function A(){let y=Q();return cn((l.height/2-y[5])/y[0],200,Pe-200)}let b=0;function Z(y){y.set({top:cn(y.top+b++%4*60,60,Pe-60)}),y.setCoords(),l.add(y),l.setActiveObject(y),T(!0),pt()}let mt=()=>ht(be()?be().bgc:"#FFFFFF")<.4;function ct(y,O){let N=O&&O.font||w;return eo(N[1],N[2]).then(()=>{let V=new Pi(y,Object.assign({originX:"center",originY:"center",left:Le/2,top:A(),fontFamily:N[1],fontWeight:N[2],fontSize:96,fill:mt()?"#F7F2E8":"#14213D",role:"text"},O&&O.set||{}));V.angle===0&&V.width>Le-40&&V.set("fontSize",Math.max(20,Math.floor(V.fontSize*(Le-40)/V.width))),Z(ni(V))})}function St(y){let O=cp.find(Zt=>Zt[0]===y),N=s.getRoles(),V=be(),nt=V&&ht(N.accent)===ht(V.bgc)?N.text:N.accent,W=Math.min(O[3],Le-60),Y={originX:"center",originY:"center",left:Le/2,top:A(),fill:nt,role:"shape",art:y,strokeWidth:0},ft;y==="box"||y==="round"||y==="line"?ft=new Kn(Object.assign(Y,{width:W,height:W*O[4],rx:y==="round"?28:0,ry:y==="round"?28:0})):y==="circle"?ft=new Ji(Object.assign(Y,{radius:W/2})):(ft=new $i(O[2],Y),ft.set({scaleX:W/100,scaleY:W/100})),Z(ni(ft))}function Dt(y){let O=l.getActiveObject();if(O instanceof gn&&O.role==="photo"){let[ft,Zt]=C(O);O.pid=y.pid,O.setElement(O.bw?gu(y):y.color),O.zoomK=1,O.fx=.5,O.fy=.42,fi(O,ft,Zt),T(!0),pt();return}let[N,V]=Ts(y.color),nt=340,W=cn(nt*V/N,240,520),Y=new gn(y.color,{left:(Le-nt)/2,top:A()-W/2,pid:y.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.42,stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"});fi(Y,nt,W),Z(ni(Y))}function at(y){h||c<0||y==="photo1"&&!L()||(h=!0,J().then(()=>{let O=y==="blank",N=y==="photo1",V=s.getRoles().main,nt=O?[vl(V)]:N?[vl(V),j(L(),c,!1)]:K(y);l.discardActiveObject(),l.remove(...l.getObjects()),nt.forEach(W=>l.add(W)),h=!1,!O&&!N&&(n[c].origin=y),T(!0),n[c].edited=O||N,o[c]=s.stamp?s.stamp():"",pt(),Cn(),N&&(l.setActiveObject(nt[1]),sn("photos"),pt(),vt())}))}function lt(){let y=L();if(h||c<0||!y)return;clearTimeout(P),H();let O=s.getRoles().main,N=j(y,c,!0);l.discardActiveObject(),l.remove(...l.getObjects()),l.add(vl(O)),l.add(N),[0,1,2,3].forEach(V=>{if(V===c)return;let nt=ot([vl(O),j(y,V,!0)]),W=n[V]?n[V].origin:s.kindOf(V),Y=n[V]&&n[V].edited?i[V].slice(0,r[V]+1):[];n[V]={json:nt.json,full:nt.full,origin:W==="free"?"name":W,edited:!0},i[V]=Y.concat(JSON.stringify(nt.json)).slice(-40),r[V]=i[V].length-1,s.setKind(V,"free")}),R=z(N),T(!0),ue(),l.setActiveObject(N),sn("photos"),pt(),vt()}function Rt(y){return Qt(y,"photos").then(()=>{if(n.some(O=>O&&O.edited)){let O=e("st-wrapall");if(O){O.scrollIntoView({block:"center"});try{O.focus({preventScroll:!0})}catch{}}}else lt()})}function B(y){if(h||c<0||y===c)return;clearTimeout(S),clearTimeout(P),H(),Ee();let O=n[c],N=document.createElement("canvas");N.width=Le,N.height=Pe,N.getContext("2d").drawImage(O.full,0,0),n[y]={json:JSON.parse(JSON.stringify(O.json)),full:N,origin:O.origin,edited:!0};let V=n[y].json.objects.filter(F);V.forEach(nt=>{nt.wrap=g[y]}),i[y]=[JSON.stringify(n[y].json)],r[y]=0,s.setKind(y,"free"),s.onChange(y),zt(y),V.length&&Lt(y).then(()=>{i[y]=[JSON.stringify(n[y].json)],r[y]=0})}function ht(y){let O=parseInt(String(y).slice(1),16);if(isNaN(O))return 1;let N=[O>>16&255,O>>8&255,O&255].map(V=>(V/=255,V<=.03928?V/12.92:Math.pow((V+.055)/1.055,2.4)));return .2126*N[0]+.7152*N[1]+.0722*N[2]}let rt=()=>l&&l.getActiveObject(),yt=y=>()=>{let O=rt();O&&(y(O),O.setCoords(),T(!0),pt())},_t=(y,O,N,V)=>bt("button",Object.assign({type:"button",class:"st-b"+(V&&V.cls?" "+V.cls:""),title:y,"aria-label":y,"aria-pressed":V&&V.pressed!=null?String(V.pressed):null,on:{click:N}},V&&V.attrs||{}),O?bt("span",{html:ws(O,18)}):null,V&&V.iconOnly?null:bt("span",{},V&&V.text||y)),Et=y=>y.fontSize*(y.scaleY||1)*zw/up;function Ht(y,O){let N=bt("div",{class:"st-sw"});return s.palette.concat([["Bright white","#FFFFFF"]]).forEach(([V,nt])=>N.appendChild(bt("button",{type:"button",class:"st-chip"+(String(y).toUpperCase()===nt.toUpperCase()?" on":""),title:V,"aria-label":V,style:{background:nt},on:{click:()=>O(nt)}}))),N.appendChild(bt("label",{class:"st-any",title:"Any color"},bt("span",{},"Any color"),bt("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(y)?y:"#14213D","aria-label":"Any color",on:{input:V=>O(V.target.value,!0)}}))),N}let ie=(y,O,N,V,nt,W,Y)=>{let ft=bt("output",{},Y(nt));return bt("label",{class:"st-slide"},bt("span",{},y),bt("input",{type:"range",min:String(O),max:String(N),step:String(V),value:String(nt),"aria-label":y,on:{input:Zt=>{ft.textContent=Y(+Zt.target.value),W(+Zt.target.value)}}}),ft)};function pt(){if(!l)return;let y=rt(),O=e("st-ctx"),N=e("st-more");O.textContent="",N.textContent="",t.dataset.sel=y?y.role||"shape":"",Ce();let V=Y=>()=>{d=d===Y?"":Y,q(d==="adjust"?rt():null),pt()},nt=(Y,ft)=>bt("button",{type:"button",class:"st-b st-colorbtn","aria-label":ft,title:ft,"aria-expanded":String(d==="color"),on:{click:V("color")}},bt("i",{style:{background:/^#/.test(Y)?Y:"#888"}}),bt("span",{},ft)),W=()=>[bt("span",{class:"st-gap"}),_t("Center","center",yt(Y=>fp(Y,Le/2,yl(Y).y)),{iconOnly:!0}),_t("Bring forward","up",yt(Y=>l.bringObjectForward(Y)),{iconOnly:!0}),_t("Send back","down",yt(Y=>{l.getObjects().indexOf(Y)>1&&l.sendObjectBackwards(Y)}),{iconOnly:!0}),_t("Copy","copy",re,{iconOnly:!0}),_t("Delete","trash",qt,{iconOnly:!0,cls:"st-del"})].forEach(Y=>O.appendChild(Y));if(!y){let Y=be();O.appendChild(bt("span",{class:"st-tip"},U()?"Tap anything to change it. Pinch to zoom.":"Click anything on the design to change it. Double-click words to retype them.")),Y&&(O.appendChild(bt("span",{class:"st-gap"})),O.appendChild(nt(Y.bgc,"Background"))),d==="color"&&Y&&N.appendChild(Ht(Y.bgc,(ft,Zt)=>{Y.bgc=ft,aa(Y),T(!Zt),Zt||pt()}));return}if(y instanceof Xe){let Y=sr.find(ft=>ft[1]===y.fontFamily)||sr[0];O.appendChild(bt("input",{id:"st-words",class:"st-words",type:"text",maxlength:"80",autocomplete:"off","aria-label":"Words",value:y.text,on:{input:ft=>{y.set("text",ft.target.value.length?ft.target.value:" "),y.setCoords(),T(!1)}}})),O.appendChild(_t("Lettering: "+Y[0],"text",()=>sn("text"),{text:Y[0],cls:"st-fontbtn"})),O.appendChild(bt("span",{class:"st-size"},_t("Smaller","minus",yt(ft=>ft.set("fontSize",Math.max(10,ft.fontSize/1.08))),{iconOnly:!0}),bt("output",{title:"How tall the capital letters print"},Et(y).toFixed(1)+" in"),_t("Larger","plus",yt(ft=>ft.set("fontSize",Math.min(1400,ft.fontSize*1.08))),{iconOnly:!0}))),O.appendChild(nt(y.fill,"Color")),O.appendChild(_t("Spacing",null,V("space"),{pressed:d==="space"})),O.appendChild(_t(Math.abs(y.angle%180)>45?"Set across":"Set down the post","turn",yt(ft=>{let Zt=yl(ft);ft.set("angle",Math.abs(ft.angle%180)>45?0:90),fp(ft,Zt.x,Zt.y)}),{iconOnly:!0})),W(),d==="color"&&N.appendChild(Ht(y.fill,(ft,Zt)=>{y.set("fill",ft),T(!Zt),Zt||pt()})),d==="space"&&N.appendChild(ie("Space between letters",-60,600,10,y.charSpacing,ft=>{y.set("charSpacing",ft),y.setCoords(),T(!1)},ft=>(ft>0?"+":"")+Math.round(ft/10)));return}if(y instanceof gn&&y.role==="photo"){O.appendChild(_t("Swap photo","swap",()=>sn("photos"))),O.appendChild(_t("Black and white",null,yt(Y=>{let ft=Fi.get(Y.pid);if(!ft)return;let[Zt,M]=C(Y);Y.bw=!Y.bw,Y.setElement(Y.bw?gu(ft):ft.color),fi(Y,Zt,M)}),{pressed:!!y.bw})),O.appendChild(_t("Move and zoom","crop",V("adjust"),{pressed:d==="adjust"})),v(y)?(y.cover?O.appendChild(_t("Put it in a frame",null,yt(Y=>{d="",q(null),Y.cover=!1,Y.zoomK=1,fi(Y,340,440),Y.set({left:68,top:cn(A()-220,40,Pe-480),stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),ni(Y),l.bringObjectToFront(Y),requestAnimationFrame(()=>{Ct(),Gt(Y)})}))):O.appendChild(bt("span",{class:"st-tip"},"One photo around all four faces")),O.appendChild(bt("span",{class:"st-gap"})),O.appendChild(_t("Delete","trash",qt,{iconOnly:!0,cls:"st-del"}))):(O.appendChild(_t("Border",null,V("border"),{pressed:d==="border"})),O.appendChild(_t("Fill the face",null,yt(Y=>{d="",q(null),Y.set({angle:0,left:0,top:0,stroke:null,strokeWidth:0,cover:!0}),Y.zoomK=1,fi(Y,Le,Pe),l.moveObjectTo(Y,1),ni(Y),vt()}))),W()),d==="adjust"&&(N.appendChild(ie("Zoom",1,3,.02,y.zoomK||1,Y=>{y.zoomK=Y,fi(y,...C(y)),x&&(x.fx=y.fx,x.fy=y.fy),T(!1)},Y=>Math.round(Y*100)+"%")),N.appendChild(bt("span",{class:"st-tip"},y.wrap!=null?"Drag the photo to slide it around the post.":y.cover?"Drag the photo to choose the part that shows.":"Drag the photo to move it inside its frame."))),d==="border"&&(N.appendChild(ie("Border",0,30,1,y.stroke?y.strokeWidth/2:0,Y=>{let ft=y.getCenterPoint();y.set({stroke:Y?y.stroke||"#FFFFFF":null,strokeWidth:2*Y,strokeUniform:!0,paintFirst:"stroke"}),y.setPositionByOrigin(ft,"center","center"),y.setCoords(),T(!1)},Y=>Y?(Y/up).toFixed(2)+" in":"None")),N.appendChild(Ht(y.stroke||"#FFFFFF",(Y,ft)=>{y.strokeWidth||y.set({strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),y.set("stroke",Y),T(!ft),ft||pt()})));return}y instanceof gn?O.appendChild(bt("span",{class:"st-tip"},"Drag to move. Pull a corner to resize.")):(O.appendChild(nt(y.fill,"Color")),O.appendChild(_t("See-through",null,V("fade"),{pressed:d==="fade"})),d==="color"&&N.appendChild(Ht(y.fill,(Y,ft)=>{y.set("fill",Y),T(!ft),ft||pt()})),d==="fade"&&N.appendChild(ie("See-through",0,90,5,Math.round((1-y.opacity)*100),Y=>{y.set("opacity",1-Y/100),T(!1)},Y=>Y+"%"))),W()}function qt(){let y=rt();y&&(l.remove(y),l.discardActiveObject(),T(!0),pt())}function re(){let y=rt();!y||v(y)||y.clone(Li).then(O=>{O.set({left:y.left+26,top:y.top+40}),l.add(ni(O)),l.setActiveObject(O),T(!0),pt()})}let Ft=[["designs","Designs","designs"],["text","Lettering","text"],["photos","Photos","photos"],["art","Artwork","art"],["ground","Background","ground"],["post","Post","post"]];function we(){let y=e("st-rail");y.textContent="",Ft.forEach(([O,N,V])=>y.appendChild(bt("button",{type:"button",class:"st-tab"+(O==="post"?" st-tab-post":""),"data-tab":O,"aria-pressed":"false",on:{click:()=>{O==="post"?(t.toggleAttribute("data-post"),sn(""),We()):sn(f===O&&U()?"":O)}}},bt("span",{html:ws(V,22)}),bt("span",{},N))))}function We(){e("st-rail").querySelectorAll(".st-tab").forEach(y=>y.setAttribute("aria-pressed",String(y.dataset.tab===f||y.dataset.tab==="post"&&t.hasAttribute("data-post"))))}function sn(y){f=y,t.dataset.tab=y,y&&t.removeAttribute("data-post"),We(),Cn(),requestAnimationFrame(se)}let Nn=(y,...O)=>bt("section",{class:"st-sec"},y?bt("h3",{},y):null,...O);function Cn(){let y=e("st-panel");if(y&&(y.textContent="",!(!f||c<0))){if(y.appendChild(bt("div",{class:"st-phead"},bt("strong",{},(Ft.find(O=>O[0]===f)||[])[1]||""),_t("Close","close",()=>sn(""),{iconOnly:!0,cls:"st-pclose"}))),f==="designs"){let O=s.fields(),N=bt("div",{class:"st-seg"});O.occasions.forEach(([ft,Zt])=>N.appendChild(bt("button",{type:"button","aria-pressed":String(O.occasion===ft),on:{click:()=>{s.setField("occasion",ft),Pt().then(Cn)}}},Zt)));let V=0,nt=ft=>Zt=>{s.setField(ft,Zt.target.value),clearTimeout(V),V=setTimeout(()=>Pt().then(ua),350)};y.appendChild(Nn("Make it yours",N,bt("div",{class:"st-two"},bt("label",{},bt("span",{},"Name"),bt("input",{type:"text",maxlength:"16",value:O.name,placeholder:O.namePlaceholder,on:{input:nt("name")}})),bt("label",{},bt("span",{},O.second.label),bt("input",{type:"text",inputmode:"numeric",maxlength:"4",value:O.second.value,placeholder:O.second.placeholder,on:{input:nt(O.second.key)}}))),bt("div",{class:"st-lab"},"Main color"),Cl(O.main,"main"),bt("div",{class:"st-lab"},"Second color"),Cl(O.accent,"accent")));let W=bt("div",{class:"st-cards",id:"st-cards"});s.kinds.forEach(([ft,Zt])=>W.appendChild(bt("button",{type:"button",class:"st-card"+(n[c]&&n[c].origin===ft&&!n[c].edited?" on":""),"data-kind":ft,on:{click:()=>at(ft)}},bt("canvas",{width:176,height:520}),bt("span",{},Zt)))),W.appendChild(bt("button",{type:"button",class:"st-card","data-kind":"photo1",on:{click:()=>at("photo1")}},bt("canvas",{width:176,height:520}),bt("span",{},"Full photo"))),W.appendChild(bt("button",{type:"button",class:"st-card","data-kind":"wrap",on:{click:ha(lt)}},bt("canvas",{width:176,height:520}),bt("span",{},"Wrap-around photo"))),W.appendChild(bt("button",{type:"button",class:"st-card","data-kind":"blank",on:{click:()=>at("blank")}},bt("canvas",{width:176,height:520}),bt("span",{},"Blank"))),y.appendChild(Nn("Designs for face "+(c+1),W,bt("p",{class:"st-fine"},"Pick one, then change anything on it. Undo brings the last design back.")));let Y=bt("div",{class:"st-seg"});[0,1,2,3].filter(ft=>ft!==c).forEach(ft=>Y.appendChild(bt("button",{type:"button",on:{click:Zt=>{B(ft),Zt.target.textContent="Face "+(ft+1)+" done"}}},"Face "+(ft+1)))),y.appendChild(Nn("Use this design on another face too",Y)),ua()}else if(f==="text"){let O=bt("div",{class:"st-adds"});[["Add a headline","YOUR HEADLINE",{font:sr[0]}],["Add a small line","A LINE OF SMALL WORDS",{font:sr[1],set:{fontSize:34,charSpacing:260}}],["Add words down the post","DOWN THE POST",{font:sr[0],set:{angle:90,fontSize:300}}],["Add script","With love",{font:sr[8],set:{fontSize:110}}]].forEach(([W,Y,ft])=>O.appendChild(bt("button",{type:"button",class:"st-add",style:{fontFamily:`"${ft.font[1]}"`,fontWeight:String(ft.font[2])},on:{click:()=>ct(Y,ft)}},W)));let N=bt("div",{class:"st-fonts"}),V=rt(),nt=V instanceof Xe?V.fontFamily:w[1];sr.forEach(W=>{eo(W[1],W[2]),N.appendChild(bt("button",{type:"button",class:"st-font"+(W[1]===nt?" on":""),on:{click:()=>{w=W;let Y=rt();Y instanceof Xe?eo(W[1],W[2]).then(()=>{Y.set({fontFamily:W[1],fontWeight:W[2]}),Y.setCoords(),T(!0),pt(),Cn()}):ct(W[0]==="Formal script"||W[0]==="Retro script"||W[0]==="Handwritten"?"Your words":"YOUR WORDS",{font:W})}}},bt("span",{style:{fontFamily:`"${W[1]}"`,fontWeight:String(W[2])}},s.fields().name||s.fields().namePlaceholder),bt("small",{},W[0])))}),y.appendChild(Nn("Add words",O)),y.appendChild(Nn(V instanceof Xe?"Lettering for the words you picked":"Lettering",N))}else if(f==="photos"){let O=rt(),N=O instanceof gn&&O.role==="photo",V=bt("div",{class:"st-photos"}),nt=bt("input",{type:"file",accept:"image/*",multiple:!0,class:"st-file",id:"st-file",on:{change:W=>{s.addPhotos(W.target.files).then(Y=>{W.target.value="",(Y.length===1||Y.length&&v(rt()))&&Dt(oa(Y[0])),Cn()})}}});s.library().forEach(W=>{let Y=oa(W),ft=bt("canvas",{width:180,height:180}),Zt=ft.getContext("2d"),[M,k]=Ts(Y.color),tt=Math.max(180/M,180/k);Zt.drawImage(Y.color,(M-180/tt)/2,(k-180/tt)*.4,180/tt,180/tt,0,0,180,180),V.appendChild(bt("button",{type:"button",class:"st-photo","aria-label":Y.sample?"Sample photo":"Your photo",on:{click:()=>Dt(Y)}},ft,Y.sample?bt("small",{},"Sample"):null))}),y.appendChild(Nn(N?"Swap the photo you picked":"Photos",bt("label",{class:"st-upload",for:"st-file"},bt("span",{html:ws("upload",20)}),bt("span",{},"Add your photos")),nt,bt("p",{class:"st-fine"},N?v(O)?"Tap a photo to use it instead. Your photos stay on this device.":"Tap a photo to put it in the frame you picked.":"Tap a photo to place it. Your photos stay on this device."),V)),y.appendChild(Nn("Just a photo",bt("div",{class:"st-adds"},bt("button",{type:"button",class:"st-add st-plain",id:"st-one",on:{click:()=>at("photo1")}},"Fill this face with one photo"),bt("button",{type:"button",class:"st-add st-plain",id:"st-wrapall",on:{click:ha(lt)}},"Wrap one photo around the post")),bt("p",{class:"st-fine"},"The photo covers everything, edge to edge. A tall photo with its subject in the middle works best. Move and zoom chooses the part that shows.")))}else if(f==="art"){let O=bt("div",{class:"st-arts"});cp.forEach(([N,V,nt])=>O.appendChild(bt("button",{type:"button",class:"st-art",title:V,"aria-label":V,on:{click:()=>St(N)},html:`<svg viewBox="0 0 100 100" aria-hidden="true">${nt?`<path d="${nt}"/>`:N==="circle"?'<circle cx="50" cy="50" r="40"/>':N==="line"?'<rect x="8" y="46" width="84" height="8"/>':`<rect x="12" y="24" width="76" height="52" rx="${N==="round"?12:0}"/>`}</svg>`}))),y.appendChild(Nn("Artwork",O,bt("p",{class:"st-fine"},"Tap a piece to drop it on the design, then give it any color.")))}else if(f==="ground"){let O=be();if(!O)return;let N=bt("div",{class:"st-pats"});N_.forEach(([V,nt])=>{let W=V==="none"?bt("canvas",{width:96,height:96}):hp(V,O.bgc,O.fg);if(V==="none"){let Y=W.getContext("2d");Y.fillStyle=O.bgc,Y.fillRect(0,0,96,96)}N.appendChild(bt("button",{type:"button",class:"st-pat"+((O.pat||"none")===V?" on":""),on:{click:()=>{O.pat=V,aa(O),T(!0),Cn()}}},W,bt("span",{},nt)))}),y.appendChild(Nn("Background color",Ht(O.bgc,(V,nt)=>{O.bgc=V,aa(O),T(!nt),nt||(pt(),Cn())}))),y.appendChild(Nn("Pattern",N)),O.pat&&O.pat!=="none"&&y.appendChild(Nn("Pattern color",Ht(O.fg,(V,nt)=>{O.fg=V,aa(O),T(!nt),nt||Cn()})))}}}function Cl(y,O){let N=bt("div",{class:"st-sw"});return s.palette.forEach(([V,nt])=>N.appendChild(bt("button",{type:"button",class:"st-chip"+(y===V?" on":""),title:V,"aria-label":V,"aria-pressed":String(y===V),style:{background:nt},on:{click:()=>{s.setField(O,V),Pt().then(Cn)}}}))),N}function ha(y){return O=>{let N=O.currentTarget,V=N.querySelector("span")||N;if(N.dataset.ask){delete N.dataset.ask,y();return}N.dataset.ask="1",N.dataset.was=V.textContent,V.textContent="Replaces all four faces. Tap again.",setTimeout(()=>{N.dataset.ask&&(delete N.dataset.ask,V.textContent=N.dataset.was)},6e3)}}function ua(){let y=e("st-cards");y&&y.querySelectorAll(".st-card").forEach(O=>{let N=O.querySelector("canvas");if(O.dataset.kind==="photo1"||O.dataset.kind==="wrap"){let V=N.getContext("2d"),nt=L();if(V.fillStyle=s.getRoles().main,V.fillRect(0,0,N.width,N.height),nt){let W=nt.color,[Y,ft]=Ts(W),Zt=Math.max(N.width/Y,N.height/ft);V.drawImage(W,(Y-N.width/Zt)/2,(ft-N.height/Zt)*.4,N.width/Zt,N.height/Zt,0,0,N.width,N.height)}O.dataset.kind==="wrap"&&(V.fillStyle="#fff",[1,2,3].forEach(W=>V.fillRect(Math.round(W*N.width/4)-2,0,4,N.height)))}else if(O.dataset.kind==="blank"){let V=N.getContext("2d");V.fillStyle=s.getRoles().main,V.fillRect(0,0,N.width,N.height)}else s.drawKind(O.dataset.kind,N)})}e("st-undo").innerHTML=ws("undo")+"<span>Undo</span>",e("st-redo").innerHTML=ws("redo")+"<span>Redo</span>",e("st-close").innerHTML=ws("back")+"<span>Back</span>",e("st-prev").innerHTML=ws("left",18),e("st-next").innerHTML=ws("right",18),e("st-undo").addEventListener("click",()=>gt(-1)),e("st-redo").addEventListener("click",()=>gt(1)),e("st-done").addEventListener("click",xt),e("st-close").addEventListener("click",xt),e("st-prev").addEventListener("click",()=>Tt((c+3)%4)),e("st-next").addEventListener("click",()=>Tt((c+1)%4)),e("st-zout").addEventListener("click",()=>{let y=Q();wt(l.width/2,l.height/2,y[0]/1.35)}),e("st-zin").addEventListener("click",()=>{let y=Q();wt(l.width/2,l.height/2,y[0]*1.35)}),e("st-zfit").addEventListener("click",()=>{Q()[0]<=Math.min(.9,(l.height-48)/Pe)+.001?Ct():Bt()}),document.addEventListener("keydown",y=>{if(t.hidden||!l)return;let O=rt(),N=/^(INPUT|SELECT|TEXTAREA)$/.test(y.target.tagName)||O&&O.isEditing,V=y.ctrlKey||y.metaKey,nt=y.key.toLowerCase();if(y.key==="Escape"){if(O&&O.isEditing)return;O?(l.discardActiveObject(),l.requestRenderAll()):xt();return}if(!N)if(V&&nt==="z")y.preventDefault(),gt(y.shiftKey?1:-1);else if(V&&nt==="y")y.preventDefault(),gt(1);else if(V&&nt==="c"&&O&&!v(O))O.clone(Li).then(W=>{m=W});else if(V&&nt==="v"&&m)y.preventDefault(),m.clone(Li).then(W=>{W.set({left:W.left+26,top:cn(A()-100,0,Pe-100)}),l.add(ni(W)),l.setActiveObject(W),T(!0),pt()});else if(V&&nt==="d"&&O)y.preventDefault(),re();else if((y.key==="Delete"||y.key==="Backspace")&&O)y.preventDefault(),qt();else if(O&&/^arrow/.test(nt)&&v(O)){y.preventDefault();let W=y.shiftKey?40:8,[Y,ft]=Ts(O.getElement());O.fx-=(nt==="arrowleft"?-W:nt==="arrowright"?W:0)/(O.scaleX*Y),O.fy-=(nt==="arrowup"?-W:nt==="arrowdown"?W:0)/(O.scaleY*ft),fi(O,Le,Pe),x&&x.o===O&&(x.fx=O.fx,x.fy=O.fy),T(!1)}else if(O&&/^arrow/.test(nt)){y.preventDefault();let W=y.shiftKey?10:2;O.set({left:O.left+(nt==="arrowleft"?-W:nt==="arrowright"?W:0),top:O.top+(nt==="arrowup"?-W:nt==="arrowdown"?W:0)}),O.setCoords(),T(!1)}else nt==="+"||nt==="="?e("st-zin").click():nt==="-"&&e("st-zout").click()});let ki=y=>(y&&Array.isArray(y.objects)?y.objects:[]).filter(O=>O.type==="Photo"&&O.pid).map(O=>O.pid),da=y=>{let O=[];return(y.objects||[]).forEach(N=>{if(N.fontFamily){let V=N.fontFamily+"|"+(N.fontWeight||400);O.indexOf(V)<0&&O.push(V)}}),O.map(N=>N.split("|"))};function El(){c>=0&&l&&!h&&n[c]&&(n[c].json=l.toObject(Li));let y=n.map(N=>N?N.edited?{json:N.json,origin:N.origin}:{origin:N.origin}:null),O={};return y.forEach(N=>{N&&N.json&&ki(N.json).forEach(V=>{let nt=Fi.get(V);nt&&/^x/.test(V)&&(O[V]=nt.color)})}),{faces:y,made:O}}function Al(y,O){Object.keys(O||{}).forEach(V=>{Fi.has(V)||Fi.set(V,{pid:V,color:O[V],gray:O[V]})}),s.library().forEach(oa);let N=[];return(y||[]).forEach((V,nt)=>{if(nt>3||!V||!V.json||!Array.isArray(V.json.objects))return;let W=Object.assign({},V.json,{objects:V.json.objects.filter(Y=>!(Y.type==="Photo"&&Y.role==="art"&&!Fi.has(Y.pid)))});N.push(Promise.all([J()].concat(da(W).map(([Y,ft])=>eo(Y,/^\d+$/.test(ft)?+ft:ft)))).then(()=>(n[nt]={json:W,full:null,origin:V.origin||"name",edited:!0},i[nt]=[JSON.stringify(W)],r[nt]=0,Lt(nt,!0))).catch(()=>{n[nt]=null}))}),Promise.all(N).then(()=>N.length)}function ro(){let y=new Set;return n.forEach((O,N)=>{!O||!O.edited||ki(N===c&&l&&!h?l.toObject(Li):O.json).forEach(V=>y.add(V))}),y}return{art:n,open:Qt,openWrap:Rt,close:xt,start:dt,refresh:Pt,show:Tt,dump:El,restore:Al,pids:ro,forget:y=>{Fi.delete(y)},isOpen:()=>!t.hidden,store:Fi}}var Yw="memory-post";var V_=["kv","pics"],no=null;function qw(){return no||(no=new Promise((s,t)=>{let e;try{e=window.indexedDB.open(Yw,1)}catch(n){t(n);return}e.onupgradeneeded=()=>{let n=e.result;V_.forEach(i=>{n.objectStoreNames.contains(i)||n.createObjectStore(i)})},e.onsuccess=()=>{let n=e.result;n.onversionchange=()=>{n.close(),no=null},s(n)},e.onerror=()=>t(e.error),e.onblocked=()=>t(new Error("blocked"))}),no.catch(()=>{no=null}),no)}function Sl(s,t,e){return qw().then(n=>new Promise((i,r)=>{let o=n.transaction(s,t),a,l=e(o.objectStore(s));l&&(l.onsuccess=()=>{a=l.result}),o.oncomplete=()=>i(a),o.onerror=()=>r(o.error),o.onabort=()=>r(o.error||new Error("aborted"))}))}var mp=(s,t)=>Sl(s,"readonly",e=>e.get(t)),gp=(s,t,e)=>Sl(s,"readwrite",n=>n.put(e,t)),_p=(s,t)=>Sl(s,"readwrite",e=>e.delete(t)),G_=s=>Sl(s,"readonly",t=>t.getAllKeys()),xu=()=>Promise.all(V_.map(s=>Sl(s,"readwrite",t=>t.clear()))),H_=(s,t)=>new Promise((e,n)=>{try{s.toBlob(i=>{if(!i){n(new Error("no picture"));return}let r=new FileReader;r.onload=()=>e({buf:r.result,type:i.type}),r.onerror=()=>n(r.error),r.readAsArrayBuffer(i)},t,.9)}catch(i){n(i)}}),W_=s=>new Promise((t,e)=>{let n=URL.createObjectURL(new Blob([s.buf],{type:s.type})),i=new Image;i.onload=()=>{URL.revokeObjectURL(n),t(i)},i.onerror=()=>{URL.revokeObjectURL(n),e(new Error("unreadable"))},i.src=n});var Tu=.0254,wp=5.25*Tu,Mu=34.5*Tu,K_=0,$_=.03,xp=.045,vu=.15,Tp=$_+2*Mu+K_,Cp=.005,Ep=.022,yu=wp+.009,Su=Tp+Cp+Ep,so=384,bu=Math.round(so*34.5/5.25),wu=so*.1875/5.25,de=476,ss=3369,ii=6738,Cs=70,vp=(so-2*wu)/de,le=Cs,fe=ss+Cs,Ap=[["Navy","#14213D"],["Royal","#1F4FBF"],["Sky","#6CB4EE"],["Forest","#14532D"],["Kelly","#1E9E4A"],["Teal","#178F8B"],["Maroon","#6B1524"],["Red","#B3202A"],["Coral","#EF6A55"],["Orange","#F26B21"],["Gold","#F2A900"],["Purple","#4B2A85"],["Pink","#E75480"],["Black","#161616"],["Silver","#B8BCC2"],["White","#F7F2E8"]],Rp=Object.fromEntries(Ap),X_="#F7F2E8",lr="#14213D",Ni="#FFD23F",Hn="#F7F2E8",gi={graduation:{label:"Graduation",main:"Navy",accent:"Gold",name:"Maya",samples:["grad","caps","skyline","field","grad"]},birthday:{label:"Birthday",main:"Coral",accent:"Teal",name:"Eli",samples:["balloons","cake","bokeh","road","balloons"]},"senior-night":{label:"Senior night",main:"Maroon",accent:"Black",name:"Jordan",samples:["field","bokeh","skyline","field","road"]}};function j_(s){let t=parseInt(s.slice(1),16),e=[t>>16&255,t>>8&255,t&255].map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*e[0]+.7152*e[1]+.0722*e[2]}function ca(s,t){let e=j_(s),n=j_(t);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}var wl=s=>ca(X_,s)>=2.4?X_:lr;function mi(s,t,e,n){return ca(s,t)>=e?s:n}var Mt={occasion:"graduation",name:"",year:"2027",school:"",age:"10",number:"12",sport:"",team:"",line1:"",line2:"",line3:"",main:null,accent:null,photos:[],bw:!0,faces:["name","photos","name","photos"],msg:"",more:"",from:"",line4:"",link:"",signed:!1},Gn=(s,t)=>String(s||"").trim()||t,Es={};function Tl(){let s=gi[Mt.occasion],t=Rp[Mt.main||s.main],e=Rp[Mt.accent||s.accent],n=wl(t),i=mi(e,t,2.2,n),r=ca(t,Hn)>=1.6?t:ca(e,Hn)>=1.6?e:lr,o=wl(r),a=mi(e,r,2.2,o),l=ca(t,Hn)>=3?t:ca(e,Hn)>=3?e:lr,c=wl(e);return{main:t,accent:e,text:n,accentText:i,blockBg:r,blockInk:o,blockAccent:a,caption:l,accentInk:c}}var nn=null,Lp=.7,Ru=(s,t,e,n,i,r,o,a,l,c)=>{String(s).trim()&&nn.push({t:"text",text:String(s),cx:t,cy:e,size:n,sp:i,weight:r,family:o,fill:a,angle:l||0,w:c||0})};function Q_(s,t,e,n,i,r){let o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*i)),o.height=Math.max(1,Math.round(n*i));let a=o.getContext("2d");a.scale(i,i),a.translate(-s,-t);let l=nn;nn=null;try{r(a)}finally{nn=l}return o}function un(s,t,e,n,i,r){if(nn){nn.push({t:"rect",x:t,y:e,w:n,h:i,fill:r});return}s.fillStyle=r,s.fillRect(t,e,n,i)}function yp(s,t,e,n){un(s,0,t,de,e,n)}function or(s,t,e,n){yp(s,0,Cs,t),yp(s,ss-Cs,2*Cs,e),yp(s,ii-Cs,Cs,n)}function ar(s,t,e,n,i=3){un(s,(de-e)/2,t,e,i,n)}function Y_(s,t,e){let n=0;for(let i of t)n+=s.measureText(i).width+e;return n-e}function Fp(s,t,e,n,i){for(let r of t)s.fillText(r,e,n),e+=s.measureText(r).width+i}function Pu(s,t,e,n,i,r){s.font=e(n);let o=Y_(s,t,i*n);return o>r&&(n=Math.max(8,Math.floor(n*r/o)),s.font=e(n),o=Y_(s,t,i*n)),{size:n,w:o}}function As(s,t,e,n,i=40,r=.3,o=600,a="Barlow",l=1.75){s.fillStyle=n,s.textAlign="left",s.textBaseline="alphabetic",t.forEach((c,h)=>{let u=String(c).toUpperCase(),d=Pu(s,u,p=>`${o} ${p}px "${a}"`,i,r,de-44),f=e+h*l*i+1.275*i;if(nn){Ru(u,de/2,f-Lp*d.size/2,d.size,r,o,a,n,0,d.w);return}Fp(s,u,(de-d.w)/2,f,r*d.size)})}function io(s,t,e,n,i,r,o=800,a=.03){let l=String(t).toUpperCase(),c=Pu(s,l,u=>`${o} ${u}px "Barlow Condensed"`,i,a,n),h=.7*c.size;if(nn){Ru(l,de/2,e+n/2,c.size,a,o,"Barlow Condensed",r,90,c.w);return}s.save(),s.translate(de/2,e+(n-c.w)/2),s.rotate(Math.PI/2),s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Fp(s,l,0,h/2,a*c.size),s.restore()}function rr(s,t,e,n,i){let r=Pu(s,t,a=>`800 ${a}px "Barlow Condensed"`,n,0,de-30),o=e+.83*n-(n-r.size)*.35;if(nn){Ru(t,de/2,o-Lp*r.size/2,r.size,0,800,"Barlow Condensed",i);return}s.fillStyle=i,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,de/2,o)}function Fn(s,t,e,n,i,r,o,a=44){un(s,34,t,de-68,e,n),i=i.filter(h=>String(h).trim());let l=1.5*a,c=t+(e-i.length*l)/2;s.textAlign="left",s.textBaseline="alphabetic",i.forEach((h,u)=>{let d=String(h).toUpperCase(),f=Pu(s,d,m=>`700 ${m}px "Barlow Condensed"`,a,.14,de-68-36),p=c+u*l+1.15*a-(a-f.size)*.3,x=o&&u===0?o:r;if(nn){Ru(d,de/2,p-Lp*f.size/2,f.size,.14,700,"Barlow Condensed",x,0,f.w);return}s.fillStyle=x,Fp(s,d,(de-f.w)/2,p,.14*f.size)})}var pi=(s,t,e,n)=>As(s,[t],e,n,30,.34,600);function Jw(s,t,e,n,i,r,o=.38){let a=t.naturalWidth||t.width,l=t.naturalHeight||t.height,c=Math.max(i/a,r/l),h=i/c,u=r/c;s.drawImage(t,(a-h)/2,(l-u)*o,h,u,e,n,i,r)}function _n(s,t,e,n){let r=de-68,o=Mt.photos.length>0,a=o?Mt.photos[t]:Es[gi[Mt.occasion].samples[t]],l=a?o?Mt.bw?a.gray:a.color:a:null;if(nn){nn.push({t:"photo",entry:a?o?a:Op(gi[Mt.occasion].samples[t]):null,bw:!!(o&&Mt.bw),x:34,y:e,w:r,h:n,frame:5,bias:.38});return}if(un(s,29,e-5,r+10,n+10,"#FFFFFF"),l){Jw(s,l,34,e,r,n);return}un(s,34,e,r,n,"#E1DACB"),s.strokeStyle="#A99F8C",s.lineWidth=3,s.setLineDash([14,12]),s.strokeRect(48,e+14,r-28,n-28),s.setLineDash([]),un(s,de/2-26,e+n/2-3,52,6,"#A99F8C"),un(s,de/2-3,e+n/2-26,6,52,"#A99F8C")}function Kw(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Pp(s,t,e,n,i,r){if(nn){nn.push({t:"art",canvas:Q_(0,e-24,de,n-e+48,.5,a=>Pp(a,t,e,n,i,r)),x:0,y:e-24,w:de,h:n-e+48,loose:!0});return}let o=Kw(r);for(let a=0;a<i;a++){let l=o()<.5?8+o()*88:de-96+o()*88,c=e+o()*(n-e),h=9+o()*11;s.fillStyle=t[Math.floor(o()*t.length)],o()<.5?(s.beginPath(),s.arc(l+h/2,c+h/2,h/2,0,6.2832),s.fill()):(s.save(),s.translate(l+h*.75,c+h*.28),s.rotate((o()-.5)*2.1),s.fillRect(-h*.75,-h*.28,h*1.5,h*.55),s.restore())}}var $w=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one"],Qw=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),tT={graduation:{A(s,t,e){un(s,0,0,de,ii,t.main),or(s,t.accent,t.accent,t.accent),As(s,["Congrats, grad"],le+150,t.accentText,32,.26),ar(s,le+250,90,t.accentText),io(s,e.name,le+420,1830,560,t.text),ar(s,le+2330,90,t.accentText),As(s,[e.school],le+2380,t.text,36,.22),io(s,"Class of "+e.year,fe+110,3e3,436,t.accentText)},B(s,t,e){un(s,0,0,de,ii,Hn),or(s,t.accent,t.accent,t.accent),_n(s,0,le+90,900),pi(s,"Freshman year",le+1020,t.caption),_n(s,1,le+1130,900),pi(s,"Senior year",le+2060,t.caption),_n(s,2,le+2170,700),Fn(s,le+2930,250,t.blockBg,[e.school,"Class of "+e.year],t.blockInk,t.blockAccent),Fn(s,fe+50,170,t.blockBg,["#"+Qw(e.name).replace(/[^A-Za-z0-9]/g,"")+"Grad"+e.year.slice(-2)],t.blockAccent),_n(s,3,fe+300,820),pi(s,"Then",fe+1150,t.caption),_n(s,4,fe+1260,980),pi(s,"And now",fe+2270,t.caption),Fn(s,fe+2420,760,t.blockBg,[e.line1,e.line2,e.line3],t.blockInk,t.blockAccent,64)}},birthday:{A(s,t,e){un(s,0,0,de,ii,t.main);let n=[mi(Ni,t.main,1.5,t.text),t.text,mi(t.accent,t.main,1.5,t.text)];Pp(s,n,le+60,ss-Cs-60,34,5),Pp(s,n,fe+60,ii-Cs-60,34,8),or(s,Ni,t.accent,Ni),As(s,["Happy birthday"],le+150,t.text,32,.26),ar(s,le+250,90,mi(Ni,t.main,1.5,t.text)),io(s,e.name,le+520,1500,660,t.text),ar(s,le+2120,90,mi(Ni,t.main,1.5,t.text));let i=parseInt(e.age,10);As(s,["Look who is "+($w[i]||e.age)],le+2170,t.text,32,.26);let r=String(e.age);r.length===1?rr(s,r,fe+690,1e3,t.text):r.length===2?(rr(s,r[0],fe+240,1e3,t.text),rr(s,r[1],fe+1140,1e3,t.text)):(rr(s,r[0],fe+210,720,t.text),rr(s,r[1],fe+890,720,t.text),rr(s,r[2],fe+1570,720,t.text)),Fn(s,fe+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,mi(Ni,t.accent,2.2,t.accentInk),64)},B(s,t,e){un(s,0,0,de,ii,Hn),or(s,Ni,t.accent,Ni),_n(s,0,le+90,980),pi(s,"Look who is "+e.age,le+1100,t.caption),_n(s,1,le+1210,860),pi(s,"Make a wish",le+2100,t.caption),_n(s,2,le+2210,900),Fn(s,fe+50,170,t.blockBg,[e.age+" years of "+e.name],t.blockInk),_n(s,3,fe+300,900),pi(s,"Then",fe+1230,t.caption),_n(s,4,fe+1340,900),pi(s,"And now",fe+2270,t.caption),Fn(s,fe+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,mi(Ni,t.accent,2.2,t.accentInk),64)}},"senior-night":{A(s,t,e){un(s,0,0,de,ii,t.main),or(s,t.accent,t.accent,t.accent),As(s,["Senior night"],le+150,t.text,32,.26),ar(s,le+250,90,t.text),io(s,e.name,le+400,1850,520,t.text),rr(s,e.number,le+2330,600,t.text),io(s,"Senior night "+e.year,fe+110,3e3,344,t.text)},B(s,t,e){un(s,0,0,de,ii,Hn),or(s,t.accent,t.accent,t.accent),Fn(s,le+60,330,t.blockBg,["#"+e.number],t.blockInk,null,190),_n(s,0,le+470,1e3),pi(s,"Freshman year",le+1500,t.caption),_n(s,1,le+1610,760),pi(s,"Senior year",le+2400,t.caption),Fn(s,le+2520,250,mi(t.accent,Hn,1.6,lr),[e.sport],wl(mi(t.accent,Hn,1.6,lr))),_n(s,2,le+2840,340),Fn(s,fe+50,170,mi(t.accent,Hn,1.6,lr),["Class of "+e.year],wl(mi(t.accent,Hn,1.6,lr))),_n(s,3,fe+300,1e3),pi(s,"Under the lights",fe+1330,t.caption),_n(s,4,fe+1440,800),Fn(s,fe+2420,760,t.blockBg,[e.team,"Class of "+e.year],t.blockInk,null,44)}}},bl={name:"Big name",photos:"Photo strip",message:"Family message",party:"Party and QR code",sign:"Sign-it",free:"Design it yourself"},Sp=typeof window<"u"&&Array.isArray(window.MP_HOLD)?window.MP_HOLD:[],Dp=null;function bp(s,t){Mt.occasion==="birthday"?or(s,Ni,t.accent,Ni):or(s,t.accent,t.accent,t.accent)}function eT(s){let t=String(s).trim(),e=t.length/2;if(t.length<=10||t.indexOf(" ")<0)return[t];let n=-1;for(let i=0;i<t.length;i++)t[i]===" "&&(n<0||Math.abs(i-e)<Math.abs(n-e))&&(n=i);return[t.slice(0,n),t.slice(n+1)]}function nT(s){return Mt.occasion==="birthday"?[s.name,"Turning "+s.age]:Mt.occasion==="senior-night"?[s.name,"#"+s.number]:[s.name,"Class of "+s.year]}function tx(s,t,e,n){let i;try{i=qd(0,"M"),i.addData(t),i.make()}catch{i=qd(0,"M"),i.addData("https://memorypostco.com"),i.make()}let r=i.getModuleCount(),o=3,a=n/(r+2*o),l=(de-n)/2;if(nn){nn.push({t:"art",canvas:Q_(l,e,n,n,2,c=>tx(c,t,e,n)),x:l,y:e,w:n,h:n});return}un(s,l,e,n,n,"#FFFFFF"),s.fillStyle=lr;for(let c=0;c<r;c++)for(let h=0;h<r;h++)i.isDark(c,h)&&s.fillRect(l+(o+h)*a,e+(o+c)*a,a+.35,a+.35)}var Cu=['600 {s}px "Caveat"','400 {s}px "Permanent Marker"','400 {s}px "Reenie Beanie"','400 {s}px "Covered By Your Grace"'],iT=[[["So proud of you,","{NAME}!   Aunt Dana"],40,640,0,64,-4],[["GO GET 'EM","   Coach R."],150,905,1,40,3],[["Love you kiddo","      Grandpa"],56,1120,2,74,-2],[["Room 204 forever!","        Priya"],70,1370,3,54,4],[["Don't forget us :)","   Sam + Jo"],36,1650,0,60,-6],[["Keep running,","kid.   Mr. Alvarez"],84,1890,2,68,2],[["YOU DID IT!!","       Tess"],44,2180,1,44,-3],[["Proud neighbors","since day one","  The Okafors"],130,2370,3,52,3],[["Call your mother.","     Love, Dad"],44,2700,0,68,-3],[["Best friend ever.","       Dev"],60,2975,2,66,3],[["Number one fan","   your sister"],60,3560,0,66,-5],[["We watched you","grow up. So proud.","  Mrs. Lindqvist"],96,3830,3,50,2],[["CONGRATS {NAMEUP}","    Uncle Ray"],40,4170,1,42,-2],[["Save me a seat!","      Nana"],130,4420,0,60,5],[["Never change.","OK, change","a little.   Leo"],50,4770,2,72,-4],[["See you soon.","     Imani"],140,5150,3,54,3],[["Proud of you","always.   Mom"],48,5420,0,70,-3],[["WE LOVE YOU","   Tio Beto"],150,5720,1,36,2]];function sT(s,t){s.textAlign="left",s.textBaseline="top",iT.forEach(([e,n,i,r,o,a])=>{let l=e.map(u=>u.replace("{NAMEUP}",t.name.toUpperCase()).replace("{NAME}",t.name));s.save(),s.translate(n,i),s.rotate(a*Math.PI/180),s.fillStyle="#1d1d1f",s.globalAlpha=.93,s.font=Cu[r].replace("{s}",o);let c=Math.max.apply(null,l.map(u=>s.measureText(u).width)),h=de-n-14;c>h&&(o=Math.max(18,Math.floor(o*h/c)),s.font=Cu[r].replace("{s}",o)),l.forEach((u,d)=>s.fillText(u,0,d*o)),s.restore()})}var q_={message(s,t,e){un(s,0,0,de,ii,t.main),bp(s,t),As(s,["A note from home"],le+150,t.accentText,32,.26),ar(s,le+250,90,t.accentText),io(s,e.msg,le+360,2800,400,t.text),eT(e.more).forEach((n,i)=>rr(s,n.toUpperCase(),fe+190+i*125,118,t.accentText)),ar(s,fe+500,90,t.accentText),_n(s,4,fe+600,1700),Fn(s,fe+2420,760,t.accent,["Love,",e.from],t.accentInk,null,52)},party(s,t,e){un(s,0,0,de,ii,t.main),bp(s,t),As(s,["You are invited"],le+150,t.accentText,32,.26),ar(s,le+250,90,t.accentText),io(s,e.line1,le+380,2780,500,t.accentText),Fn(s,fe+60,640,t.accent,[e.line2,e.line3,e.line4],t.accentInk,null,46),tx(s,e.link,fe+860,360),As(s,["Scan for","the album"],fe+1250,t.text,30,.34,600),_n(s,3,fe+1500,760),Fn(s,fe+2420,760,Hn,nT(e),t.caption,null,52)},sign(s,t,e){un(s,0,0,de,ii,Hn),bp(s,t),Fn(s,le+60,330,t.blockBg,["Leave "+e.name,"a note"],t.blockInk,t.blockAccent,62),pi(s,"Sign anywhere",le+440,t.caption),Mt.signed&&!nn&&sT(s,e),Fn(s,fe+2810,370,t.blockBg,["Thank you","for coming"],t.blockInk,t.blockAccent,52)}};function Ip(s,t,e,n){let i=Dp&&Dp[t];i&&i.full?s.drawImage(i.full,0,e*ss,de,ss,0,e*ss,de,ss):un(s,0,e*ss,de,ss,n.main)}var Mp=null;function rT(s){let t=Tl(),e=Au(),n=[];Mp||(Mp=document.createElement("canvas").getContext("2d")),nn=n;try{Eu(s==="free"?"name":s,Mp,t,e)}catch{}finally{nn=null}let i=Hn,r=[];return n.forEach(o=>{o.t==="rect"&&o.x<=0&&o.y<=0&&o.w>=de&&o.h>=ii?i=o.fill:r.push(o)}),{bg:i,items:r}}var hn=[],Op=s=>Es[s]?Es[s].entry||(Es[s].entry={pid:"sample-"+s,color:Es[s],gray:Es[s],sample:!0}):null,Ml=0,oT=()=>JSON.stringify(Object.assign({},Mt,{photos:Ml,faces:0,signed:0}))+Object.keys(Es).length;function Eu(s,t,e,n){let i=tT[Mt.occasion];s==="photos"?i.B(t,e,n):q_[s]?q_[s](t,e,n):i.A(t,e,n)}function Au(){let s=gi[Mt.occasion],t=Mt.occasion==="graduation";return{name:Gn(Mt.name,s.name).slice(0,16),year:Gn(Mt.year,"2027").replace(/[^0-9]/g,"").slice(0,4)||"2027",school:Gn(Mt.school,"Northside High").slice(0,26),age:String(Math.min(120,Math.max(1,parseInt(Mt.age,10)||10))),number:Gn(Mt.number,"12").replace(/[^0-9]/g,"").slice(0,2)||"12",sport:Gn(Mt.sport,"Varsity soccer").slice(0,22),team:Gn(Mt.team,"Northside Hawks").slice(0,22),line1:Gn(Mt.line1,t?"Open house":"Party").slice(0,16),line2:Gn(Mt.line2,t?"Sat June 12":"Sat May 8").slice(0,16),line3:Gn(Mt.line3,t?"2 to 6 pm":"2 pm").slice(0,16),line4:Gn(Mt.line4,"418 Alder Lane").slice(0,18),msg:Gn(Mt.msg,"So proud of you").slice(0,18),more:Gn(Mt.more,"We saw all of it.").slice(0,24),from:Gn(Mt.from,"Mom and Dad").slice(0,16),link:Gn(Mt.link,"https://memorypostco.com").slice(0,120)}}var aT=Math.random().toString(36).slice(2,7),lT=0;function ex(s,t,e){let n=s.naturalWidth,i=s.naturalHeight,r=Math.min(1,t/Math.max(n,i)),o=Math.max(1,Math.round(n*r)),a=Math.max(1,Math.round(i*r)),l=document.createElement("canvas");l.width=o,l.height=a,l.getContext("2d").drawImage(s,0,0,o,a);let c={pid:e||"p"+aT+ ++lT,color:l,width:o,height:a,naturalWidth:o,naturalHeight:a},h=null;return Object.defineProperty(c,"gray",{get(){if(h)return h;h=document.createElement("canvas"),h.width=o,h.height=a;let u=h.getContext("2d");u.drawImage(l,0,0);let d=u.getImageData(0,0,o,a),f=d.data;for(let p=0;p<f.length;p+=4){let x=.299*f[p]+.587*f[p+1]+.114*f[p+2];x=Math.max(0,Math.min(255,(x-128)*1.06+128)),f[p]=f[p+1]=f[p+2]=x}return u.putImageData(d,0,0),h}}),c}function Z_(s,t,e=5){let n=Array.from(s).filter(o=>/^image\//.test(o.type)).slice(0,e),i=n.length,r=[];if(!i)return t(r);n.forEach((o,a)=>{let l=URL.createObjectURL(o),c=new Image;c.onload=()=>{try{r[a]=ex(c,hn.length+a<12?1280:720)}catch{}URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.onerror=()=>{URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.src=l})}function cT(s){let t=s.querySelector("#make-stage"),e=s.querySelector("#make-canvas"),n=e.getContext&&e.getContext("2d");if(!n)return null;let i=document.createElement("canvas"),r;try{r=new _h({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}if(!r.getContext())return null;r.outputColorSpace=pn,r.toneMapping=ai,r.shadowMap.enabled=!0,r.shadowMap.type=xr;let o=Math.min(window.innerWidth,window.innerHeight)<700,a=new wa,l=document.createElement("canvas");l.width=64,l.height=256;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,256);[[0,"#86A9E4"],[.3,"#C4D8F3"],[.44,"#FFFFFF"],[.5,"#FFFFFF"],[.53,"#8E978B"],[1,"#596257"]].forEach(([Lt,H])=>h.addColorStop(Lt,H)),c.fillStyle=h,c.fillRect(0,0,64,256);let u=new gr(l);u.mapping=Io,u.colorSpace=pn;let d=()=>{let Lt=new Fo(r);a.environment=Lt.fromEquirectangular(u).texture,Lt.dispose()};d(),a.add(new La(16777215,12765627,1.02));let f=new Na(16774890,3.3);f.position.set(-.8,4.9,3.3),f.target.position.set(0,.9,0),f.castShadow=!0,f.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(f.shadow.camera,{left:-1.2,right:1.2,top:1.4,bottom:-1.2,near:1,far:9}),f.shadow.bias=-4e-4,f.shadow.normalBias=.002,f.shadow.radius=7,a.add(f,f.target);let p=Math.min(8,r.capabilities.getMaxAnisotropy()),x=[],m=Lt=>(x[Lt]||(x[Lt]=[0,1].map(()=>{let H=document.createElement("canvas");H.width=so,H.height=bu;let T=new gr(H);return T.colorSpace=pn,T.anisotropy=p,T.minFilter=bi,T.magFilter=mn,T.generateMipmaps=!0,{cv:H,t:T}})),x[Lt]),_=new Eo({color:15131612}),S=[0,1,2,3].map(Lt=>[0,1].map(H=>new Eo({map:m(Lt%2)[H].t}))),P=new Da({color:14869216,roughness:.26,metalness:1,envMapIntensity:1.25}),w=new mr({color:789516}),R=new us;a.add(R);let D=(Lt,H,T,gt=!0)=>{let Tt=new kn(Lt,H);return Tt.position.y=T,Tt.castShadow=gt,R.add(Tt),Tt};[1,0].forEach((Lt,H)=>{let T=[S[1][Lt],S[3][Lt],_,_,S[0][Lt],S[2][Lt]];D(new qn(wp,Mu,wp),T,$_+Mu/2+H*(Mu+K_))}),D(new qn(5*Tu,.03,5*Tu),_,Tp+Cp-.015,!1),D(new qn(yu,Ep-.003,yu),P,Tp+Cp+(Ep-.003)/2),D(new qn(yu-.006,.003,yu-.006),P,Su-.0015),D(new qn(vu,xp-.004,vu),P,(xp-.004)/2),D(new qn(vu-.008,.004,vu-.008),P,xp-.002);let g=new kn(new Bs(6,6),new Pa({opacity:.2}));g.rotation.x=-Math.PI/2,g.receiveShadow=!0,a.add(g);let v=document.createElement("canvas");v.width=v.height=128;let E=v.getContext("2d"),C=E.createRadialGradient(64,64,4,64,64,62);C.addColorStop(0,"rgba(0,0,0,.5)"),C.addColorStop(.45,"rgba(0,0,0,.2)"),C.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=C,E.fillRect(0,0,128,128);let I=new kn(new Bs(.46,.46),new mr({map:new gr(v),transparent:!0,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.position.y=.0015,a.add(I);let F=new _r(-1,1,1,-1,.1,40),z=.115,L=new it(0,Su/2-.02,0),j=-.7,q=0,U=null,J=!0,K=!1,ot=0,dt=0,Pt=0,At=1,Q=1,wt=1.36,Ct=1.06,Bt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,vt=s.querySelector("#mk-zoom");function Gt(){let Lt=Math.max(1.06,.15*Pt/dt);Q=Math.max(1,Math.min(2.3,2*Lt*dt/Pt/.3)),At>Q&&(At=1),Ct=Lt/At,F.top=Ct,F.bottom=-Ct,F.left=-Ct*dt/Pt,F.right=Ct*dt/Pt,At>1&&(wt=Math.max(Ct-.1,Math.min(Su+.12-Ct,wt))),L.set(0,At>1?wt:Su/2-.02,0),F.position.set(0,L.y+Math.sin(z)*12,Math.cos(z)*12),F.lookAt(L),F.updateProjectionMatrix(),F.updateMatrixWorld();let H=new it(0,0,0).project(F);t.style.setProperty("--lawn",Math.max(0,Math.round((H.y+1)/2*Pt+Pt*.125*At))+"px"),vt&&(vt.hidden=Q<1.4,vt.setAttribute("aria-pressed",At>1?"true":"false"),vt.textContent=At>1?"Zoom out":"Zoom"),e.style.touchAction=At>1?"none":"pan-y",J=!0,ee()}function se(){R.rotation.y=j,r.render(a,F),n.clearRect(0,0,e.width,e.height),n.drawImage(i,0,0),J=!1}function Wt(){let Lt=e.clientWidth,H=e.clientHeight;!Lt||!H||(dt=Lt,Pt=H,r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(dt,Pt,!1),Gt(),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height),K&&se())}function pe(){if(ot=0,U!==null){let Lt=U-j;Math.abs(Lt)<.002?(j=U,U=null):j+=Lt*.16,J=!0}Math.abs(q)>4e-4?(j+=q,q*=.93,J=!0):q=0,J&&dt&&K&&se(),(U!==null||q!==0)&&ee()}i.addEventListener("webglcontextrestored",()=>{d(),x.forEach(Lt=>Lt.forEach(H=>{H.t.needsUpdate=!0})),J=!0,ee()});function ee(){ot||(ot=requestAnimationFrame(pe))}let $t=!1,be=0,Me=0;e.addEventListener("pointerdown",Lt=>{$t=!0,be=Lt.clientX,Me=Lt.clientY,q=0,U=null;try{e.setPointerCapture(Lt.pointerId)}catch{}t.classList.add("turned")}),e.addEventListener("pointermove",Lt=>{if(!$t)return;let H=Lt.clientX-be,T=Lt.clientY-Me;be=Lt.clientX,Me=Lt.clientY,j+=H*.011,q=H*.011,At>1&&T&&(wt+=T*(2*Ct/Pt),Gt()),J=!0,ee()}),vt&&vt.addEventListener("click",()=>{At=At>1?1:Q,t.classList.add("turned"),Gt()});let De=()=>{$t=!1,ee()};e.addEventListener("pointerup",De),e.addEventListener("pointercancel",De);let Ce=Lt=>{q=0;let H=Math.PI/2;U=Math.round(((U===null?j:U)- -.7)/H+Lt)*H-.7,t.classList.add("turned"),ee()};function Ye(){let Lt=Tl(),H=Au(),T=[],gt=Mt.faces.map((Tt,Qt)=>Tt==="free"?"free"+Qt:Tt);gt.forEach(Tt=>{T.indexOf(Tt)<0&&T.push(Tt)}),T.forEach((Tt,Qt)=>[0,1].forEach(xt=>{let{cv:ue,t:zt}=m(Qt)[xt],ut=ue.getContext("2d");ut.setTransform(1,0,0,1,0,0),ut.fillStyle="#EEECE6",ut.fillRect(0,0,so,bu),ut.save(),ut.beginPath(),ut.rect(wu,0,so-2*wu,bu),ut.clip(),ut.setTransform(vp,0,0,vp,wu,-xt*ss*vp),Tt.slice(0,4)==="free"?Ip(ut,+Tt.slice(4),xt,Lt):Eu(Tt,ut,Lt,H),ut.restore(),ut.setTransform(1,0,0,1,0,0),ut.fillStyle="rgba(0,0,0,.26)",ut.fillRect(0,xt===0?bu-2:0,so,2),zt.needsUpdate=!0})),gt.forEach((Tt,Qt)=>[0,1].forEach(xt=>{let ue=S[Qt][xt],zt=m(T.indexOf(Tt))[xt].t;ue.map!==zt&&(ue.map=zt,ue.needsUpdate=!0)})),K=!0,J=!0,ee()}"ResizeObserver"in window?new ResizeObserver(Wt).observe(t):window.addEventListener("resize",Wt),Wt(),Bt||(j=-1.75,U=-.7);let Ee=Lt=>{q=0;let H=Lt===0?-.7:-1.22-(Lt-1)*Math.PI/2,T=U===null?j:U,gt=2*Math.PI;H+=Math.round((T-H)/gt)*gt,U=H,ee()};return{paint:Ye,turn:Ce,showSide:Ee,front:()=>{let Lt=0,H=9;for(let T=0;T<4;T++){let gt=Math.abs(((j+T*Math.PI/2)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);gt<H&&(H=gt,Lt=T)}return Lt},show:Lt=>{let H=Mt.faces.indexOf(Lt==="B"?"photos":"name");Ee(H<0?0:H)}}}function J_(){let s=document.getElementById("make");if(!s)return;let t=cT(s);if(!t)return;let e=s.closest("section"),n=H=>s.querySelector("#"+H),i=0,r=!1,o=null,a=()=>{},l=JSON.stringify(Object.assign({},Mt,{photos:0})),c=H=>{clearTimeout(i),i=setTimeout(t.paint,H?0:70),o&&o(),a()},h=H=>{H.isTrusted!==!1&&!r&&(r=!0,J())};s.addEventListener("input",h,!0),s.addEventListener("change",h,!0),s.addEventListener("click",H=>{H.target.closest&&H.target.closest("[data-occ],.make-turn button,#mk-clear,#mk-design,#mk-studio,#mk-wrap,#mk-free button")&&h(H)},!0),n("make-canvas").addEventListener("pointerdown",h);let u=(H,T)=>{let gt=n(H);Ap.forEach(([Tt,Qt])=>{let xt=document.createElement("label");xt.className="swc",xt.title=Tt,xt.innerHTML=`<input type="radio" name="${T}" value="${Tt}"><span style="background:${Qt}"></span><b>${Tt}</b>`,gt.appendChild(xt)}),gt.addEventListener("change",Tt=>{Mt[T]=Tt.target.value,J(),c(!0)})};u("mk-main","main"),u("mk-accent","accent");let d=()=>{let H=gi[Mt.occasion];s.querySelectorAll('input[name="main"]').forEach(T=>{T.checked=T.value===(Mt.main||H.main)}),s.querySelectorAll('input[name="accent"]').forEach(T=>{T.checked=T.value===(Mt.accent||H.accent)})};function f(){s.querySelectorAll("[data-for],[data-face]").forEach(H=>{let T=H.dataset.for,gt=H.dataset.face,Tt=T?T.split(" ").indexOf(Mt.occasion)>=0:!1,Qt=gt?gt.split(" ").some(xt=>Mt.faces.indexOf(xt)>=0):!1;H.hidden=!(Tt||Qt)})}function p(H){Mt.occasion=H,s.querySelectorAll("[data-occ]").forEach(Tt=>Tt.setAttribute("aria-pressed",Tt.dataset.occ===H?"true":"false")),f();let T=gi[H],gt=H==="graduation";n("mk-name").placeholder=T.name,n("mk-l1").placeholder=gt?"Open house":"Party",n("mk-l2").placeholder=gt?"Sat June 12":"Sat May 8",n("mk-l3").placeholder=gt?"2 to 6 pm":"2 pm",d(),J(),t.show("A"),c(!0)}s.querySelectorAll("[data-occ]").forEach(H=>H.addEventListener("click",()=>p(H.dataset.occ)));let x=(H,T)=>{let gt=n(H);gt&&gt.addEventListener("input",()=>{Mt[T]=gt.value,c(!1)})},m=[["mk-name","name"],["mk-year","year"],["mk-school","school"],["mk-age","age"],["mk-number","number"],["mk-sport","sport"],["mk-team","team"],["mk-l1","line1"],["mk-l2","line2"],["mk-l3","line3"],["mk-year2","year"],["mk-msg","msg"],["mk-more","more"],["mk-from","from"],["mk-l4","line4"],["mk-link","link"]];m.forEach(([H,T])=>x(H,T));let _=document.getElementById("st"),S=n("make-stage"),P=S.parentNode,w=S.nextSibling,R=(H,T)=>{Mt.faces[H]=T;let gt=n("mk-face"+(H+1));gt&&(gt.value=T)},D={name:["mk-name"],year:["mk-year","mk-year2"],age:["mk-age"],number:["mk-number"]},g=_?z_({root:_,palette:Ap,getRoles:Tl,pieces:rT,stamp:oT,kinds:Object.keys(bl).filter(H=>H!=="free"&&Sp.indexOf(H)<0).map(H=>[H,bl[H]]),kindOf:H=>Mt.faces[H],setKind:(H,T)=>{R(H,T),f(),C()},turnTo:H=>t.showSide(H),onChange:()=>{t.paint(),a()},onOpen:H=>{H.appendChild(S)},onClose:()=>{P.insertBefore(S,w),f(),C(),c(!0)},fields:()=>{let H=Mt.occasion,T=gi[H],gt=H==="birthday"?{key:"age",label:"Turning",value:Mt.age,placeholder:"10"}:H==="senior-night"?{key:"number",label:"Number",value:Mt.number,placeholder:"12"}:{key:"year",label:"Class year",value:Mt.year,placeholder:"2027"};return{occasion:H,occasions:Object.keys(gi).map(Tt=>[Tt,gi[Tt].label]),name:Mt.name,namePlaceholder:T.name,second:gt,main:Mt.main||T.main,accent:Mt.accent||T.accent}},setField:(H,T)=>{if(r=!0,H==="occasion"){p(T);return}Mt[H]=T,(H==="main"||H==="accent")&&d(),(D[H]||[]).forEach(gt=>{let Tt=n(gt);Tt&&(Tt.value=T)}),J(),c(!0)},library:()=>hn.slice().reverse().concat(Object.keys(Es).map(Op).filter(Boolean)),lead:()=>hn.length?hn[hn.length-1]:Op(gi[Mt.occasion].samples[0]),addPhotos:H=>new Promise(T=>Z_(H,gt=>{gt.length&&(gt.forEach(Tt=>hn.push(Tt)),Mt.photos=hn.slice(-5),Ml++),U(!1),J(),c(!0),T(gt)},12)),drawKind:(H,T)=>{let gt=T.getContext("2d"),Tt=T.width/de;gt.setTransform(1,0,0,1,0,0),gt.clearRect(0,0,T.width,T.height),gt.save(),gt.setTransform(Tt,0,0,Tt,0,0),gt.beginPath(),gt.rect(0,0,de,T.height/Tt),gt.clip(),Eu(H,gt,Tl(),Au()),gt.restore()},drawSide:(H,T)=>{let gt=T.getContext("2d"),Tt=Mt.faces[H],Qt=Tl();gt.setTransform(T.width/de,0,0,T.height/ii,0,0),Tt==="free"?(Ip(gt,H,0,Qt),Ip(gt,H,1,Qt)):Eu(Tt,gt,Qt,Au())}}):null;Dp=g?g.art:null;let v=0;g&&(o=()=>{clearTimeout(v),v=setTimeout(()=>g.refresh().then(H=>{H&&t.paint()}),320)});let E=n("mk-free");function C(){E&&(E.textContent="",Mt.faces.forEach((H,T)=>{if(H!=="free")return;let gt=document.createElement("button");gt.type="button",gt.className="btn btn-line",gt.textContent="Edit face "+(T+1)+" in the studio",gt.addEventListener("click",()=>g.open(T)),E.appendChild(gt)}))}let I=n("mk-design");I&&(I.hidden=!g,g&&I.addEventListener("click",()=>g.open(t.front())));let F=document.getElementById("mk-studio-row");F&&g&&(F.hidden=!1,n("mk-studio").addEventListener("click",()=>g.open(t.front())));let z=document.getElementById("mk-wrap-row");z&&g&&(z.hidden=!1,n("mk-wrap").addEventListener("click",()=>g.openWrap(t.front()))),[0,1,2,3].forEach(H=>{let T=n("mk-face"+(H+1));T&&(Object.keys(bl).forEach(gt=>{if(gt==="free"&&!g||Sp.indexOf(gt)>=0)return;let Tt=document.createElement("option");Tt.value=gt,Tt.textContent=bl[gt],T.appendChild(Tt)}),T.value=Mt.faces[H],T.addEventListener("change",()=>{let gt=Mt.faces[H];Mt.faces[H]=T.value;let Tt=()=>{f(),C(),t.showSide(H),c(!0)};T.value==="free"?g.start(H,gt==="free"?null:gt).then(Tt):Tt()}))}),s.querySelectorAll("[data-face]").forEach(H=>H.addEventListener("focusin",()=>{let T=Mt.faces.indexOf(H.dataset.face.split(" ")[0]);T>=0&&t.showSide(T)}));let L=n("mk-signed");L&&L.addEventListener("change",()=>{Mt.signed=L.checked,c(!0),Mt.signed&&document.fonts&&document.fonts.load&&Promise.all(Cu.map(H=>document.fonts.load(H.replace("{s}","40")))).then(()=>c(!0)).catch(()=>{})}),n("mk-year").addEventListener("input",()=>{n("mk-year2").value=n("mk-year").value}),n("mk-year2").addEventListener("input",()=>{n("mk-year").value=n("mk-year2").value});let j=n("mk-photo-note"),q=s.querySelector('label[for="mk-photos"]'),U=H=>{let T=Mt.photos.length;q&&(q.textContent=T===0?"Add up to 5 photos":T<5?"Add more photos":"Swap in new photos"),n("mk-clear").hidden=T===0,j.textContent=(H?"That file could not be read. Try a JPG or PNG photo. ":"")+(T===0?"Sample photos are showing. Yours stay on your device.":T+" of 5 photos on the post. They stay on your device.")};n("mk-photos").addEventListener("change",H=>{let T=H.target.files?H.target.files.length:0;Z_(H.target.files,gt=>{gt.length&&(gt.forEach(Tt=>hn.push(Tt)),Mt.photos=Mt.photos.concat(gt).slice(-5),Ml++,t.show("B")),U(T>0&&!gt.length),H.target.value="",J(),c(!0)})}),n("mk-clear").addEventListener("click",()=>{Mt.photos=[];let H=g?g.pids():new Set;for(let T=hn.length-1;T>=0;T--)H.has(hn[T].pid)||(g&&g.forget(hn[T].pid),hn.splice(T,1));Ml++,U(!1),J(),c(!0)}),n("mk-bw").addEventListener("change",H=>{Mt.bw=H.target.checked,c(!0)}),n("mk-left").addEventListener("click",()=>t.turn(-1)),n("mk-right").addEventListener("click",()=>t.turn(1));function J(){let H=gi[Mt.occasion];window.MP_DESIGN=r?"Tried the preview: "+H.label+", "+(Mt.main||H.main)+" and "+(Mt.accent||H.accent)+".":""}let K=n("mk-join");K&&K.addEventListener("click",()=>{let H=document.getElementById("f-occasion");H&&(H.selectedIndex={graduation:0,birthday:1,"senior-night":2}[Mt.occasion])});let dt=["grad","caps","skyline","field","road","balloons","cake","bokeh"].map(H=>new Promise(T=>{let gt=new Image;gt.onload=()=>{Es[H]=gt,c(!1),T()},gt.onerror=T,gt.src="img/sample-"+H+".jpg"})),Pt=Promise.race([Promise.all(dt),new Promise(H=>setTimeout(H,6e3))]);(document.fonts&&document.fonts.load?Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 32px "Barlow"')]).catch(()=>{}):Promise.resolve()).then(()=>c(!0)),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>c(!0));let Q=864e5,wt=30,Ct=m.map(H=>H[1]).filter((H,T,gt)=>gt.indexOf(H)===T),Bt={get:()=>{try{return window.sessionStorage.getItem("mp-design")||""}catch{return""}},set:H=>{try{H?window.sessionStorage.setItem("mp-design",H):window.sessionStorage.removeItem("mp-design")}catch{}}},vt=new Set,Gt="",se=0,Wt=Promise.resolve(),pe=!1,ee=null,$t=!1,be=!1,Me=n("mk-saved"),De=n("mk-back"),Ce=()=>hn.length>0||JSON.stringify(Object.assign({},Mt,{photos:0}))!==l;function Ye(){if(clearTimeout(se),!$t||be){a();return}if(ee||!(r||pe))return;if(!Ce()){Gt&&(Wt=Wt.then(()=>_p("kv","design")).then(()=>{Me&&(Me.hidden=!0),delete s.dataset.kept}).catch(()=>{}));return}Gt||(Gt=Math.random().toString(36).slice(2)+Date.now().toString(36),Bt.set(Gt));let H=g?g.dump():{faces:[null,null,null,null],made:{}},T;try{T=JSON.parse(JSON.stringify(H.faces))}catch{T=[null,null,null,null]}let gt=g?g.pids():new Set,Tt=hn.filter((ut,A)=>A>=hn.length-24||gt.has(ut.pid)),Qt={v:1,at:Date.now(),sid:Gt,order:Tt.map(ut=>ut.pid),faces:T,state:Object.assign({},Mt,{photos:Mt.photos.map(ut=>ut.pid),faces:Mt.faces.slice()})},xt=[],ue=(ut,A,b,Z)=>{vt.has(ut)||(vt.add(ut),xt.push(H_(A,b).then(mt=>gp("pics",ut,Object.assign(mt,Z||{}))).catch(()=>{vt.delete(ut)})))};Tt.forEach(ut=>ue(ut.pid,ut.color,"image/jpeg",{w:ut.width,h:ut.height})),Object.keys(H.made).forEach(ut=>ue(ut,H.made[ut],"image/png"));let zt=new Set(Qt.order.concat(Object.keys(H.made)));Wt=Wt.then(()=>gp("kv","design",Qt)).then(()=>Promise.all(xt)).then(()=>G_("pics")).then(ut=>Promise.all((ut||[]).filter(A=>!zt.has(A)).map(A=>(vt.delete(A),_p("pics",A))))).then(()=>{Me&&(Me.hidden=!1),s.dataset.kept=String(Qt.at)}).catch(()=>{})}a=()=>{clearTimeout(se),se=setTimeout(Ye,700)},document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ye()}),window.addEventListener("pagehide",Ye);function Ee(H){pe=!0,r=!0,ee=null,be=!0,De&&(De.hidden=!0);let T=()=>{be=!1};Gt=H.sid||"",Gt&&Bt.set(Gt);let gt=H.state||{},Tt=Array.isArray(H.faces)?H.faces:[],Qt=ut=>!!bl[ut]&&Sp.indexOf(ut)<0&&(ut!=="free"||!!g);Ct.forEach(ut=>{typeof gt[ut]=="string"&&(Mt[ut]=gt[ut].slice(0,400))}),gi[gt.occasion]&&(Mt.occasion=gt.occasion),["main","accent"].forEach(ut=>{Mt[ut]=Rp[gt[ut]]?gt[ut]:null}),Mt.bw=gt.bw!==!1,Mt.signed=!!gt.signed,Array.isArray(gt.faces)&&(Mt.faces=[0,1,2,3].map(ut=>{let A=gt.faces[ut],b=Tt[ut];return A==="free"&&!(b&&b.json)?b&&b.origin!=="free"&&Qt(b.origin)?b.origin:Mt.faces[ut]:Qt(A)?A:Mt.faces[ut]})),p(Mt.occasion),m.forEach(([ut,A])=>{let b=n(ut);b&&(b.value=Mt[A])}),[0,1,2,3].forEach(ut=>{let A=n("mk-face"+(ut+1));A&&(A.value=Mt.faces[ut])}),n("mk-bw").checked=Mt.bw,L&&(L.checked=Mt.signed,Mt.signed&&document.fonts&&document.fonts.load&&Promise.all(Cu.map(ut=>document.fonts.load(ut.replace("{s}","40")))).then(()=>c(!0)).catch(()=>{})),f(),C(),J();let xt=(Array.isArray(H.order)?H.order:[]).filter(ut=>/^p/.test(ut)&&!hn.some(A=>A.pid===ut)).slice(-40),ue=[];Tt.forEach(ut=>{ut&&ut.json&&Array.isArray(ut.json.objects)&&ut.json.objects.forEach(A=>{A.type==="Photo"&&/^x/.test(A.pid||"")&&ue.indexOf(A.pid)<0&&ue.push(A.pid)})});let zt=ut=>mp("pics",ut).then(A=>A&&A.buf?W_(A):null).catch(()=>null);return Promise.all([Promise.all(xt.map(zt)),Promise.all(ue.map(zt)),Pt]).then(([ut,A])=>{ut.forEach((mt,ct)=>{if(mt)try{hn.push(ex(mt,1280,xt[ct])),vt.add(xt[ct])}catch{}});let b={};hn.forEach(mt=>{b[mt.pid]=mt}),Mt.photos=(Array.isArray(gt.photos)?gt.photos:[]).map(mt=>b[mt]).filter(Boolean).slice(-5),Ml++;let Z={};return A.forEach((mt,ct)=>{if(!mt)return;let St=document.createElement("canvas");St.width=mt.naturalWidth,St.height=mt.naturalHeight,St.getContext("2d").drawImage(mt,0,0),Z[ue[ct]]=St,vt.add(ue[ct])}),U(!1),J(),c(!0),g?g.restore(Tt,Z):0}).then(()=>{t.paint(),Me&&(Me.hidden=!1),s.dataset.kept=String(H.at),s.dataset.back="1"}).catch(()=>{}).then(T,T)}function dn(H){if(ee=H,!De)return;let T=n("mk-back-text");T&&(T.textContent="A design from "+new Date(H.at).toLocaleDateString("en-US",{month:"long",day:"numeric"})+" is saved on this device."),De.hidden=!1}De&&(n("mk-back-yes").addEventListener("click",()=>{ee&&Ee(ee)}),n("mk-back-no").addEventListener("click",()=>{ee=null,De.hidden=!0,Gt="",Bt.set(""),vt.clear(),Wt=Wt.then(()=>xu()).catch(()=>{})}));let Lt=n("mk-reset");Lt&&Lt.addEventListener("click",()=>{if(!Lt.dataset.ask){Lt.dataset.ask="1",Lt.dataset.was=Lt.textContent,Lt.textContent="This clears the name, photos and designs from this device. Tap again to do it.",setTimeout(()=>{Lt.dataset.ask&&(delete Lt.dataset.ask,Lt.textContent=Lt.dataset.was)},6e3);return}clearTimeout(se),ee={gone:!0},Bt.set(""),Wt.then(()=>xu()).catch(()=>{}).then(()=>{try{window.history.replaceState(null,"","#designs")}catch{}window.location.reload()})}),mp("kv","design").then(H=>{if($t=!0,!(!H||H.v!==1||!H.state)){if(!(Date.now()-H.at<wt*Q)){xu().catch(()=>{});return}H.sid&&H.sid===Bt.get()?Ee(H):dn(H)}}).catch(()=>{$t=!0}),e.classList.add("has-make"),s.hidden=!1,p("graduation"),window.dispatchEvent(new Event("resize"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J_):J_();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
