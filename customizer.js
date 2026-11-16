/* Memory Post try-it preview. Uses three.js (MIT License, Copyright 2010-2026 three.js authors), fabric.js (MIT License, Copyright 2008-2015 Printio) and qrcode-generator (MIT License, Copyright 2009 Kazuhiko Arase). */
var lm=0,ld=1,cm=2;var xr=1,hm=2,Ro=3,Hs=0,Rn=1,ji=2,vr=0,Po=1,cd=2,hd=3,ud=4,um=5;var yr=100,dm=101,fm=102,pm=103,mm=104,gm=200,_m=201,xm=202,vm=203,dd=204,fd=205,ym=206,Sm=207,bm=208,Mm=209,wm=210,Tm=211,Cm=212,Em=213,Am=214,Ql=0,tc=1,ec=2,So=3,nc=4,ic=5,sc=6,rc=7,Dc=0,Rm=1,Pm=2,li=0,pd=1,md=2,gd=3,_d=4,xd=5,vd=6,yd=7;var Sd=300,Sr=301,Do=302,Io=303,Ic=304,oc=1e3,Bi=1001,ac=1002,ln=1003,Dm=1004;var ka=1005;var mn=1006,Oc=1007;var bi=1008;var Un=1009,bd=1010,Md=1011,Oo=1012,Lc=1013,Mi=1014,wi=1015,Ti=1016,Fc=1017,Nc=1018,br=1020,wd=35902,Td=35899,Cd=1021,Ed=1022,Ci=1023,fs=1026,ms=1027,Ad=1028,kc=1029,Ws=1030,Uc=1031;var Bc=1033,Ua=33776,Ba=33777,za=33778,Va=33779,zc=35840,Vc=35841,Gc=35842,Hc=35843,Wc=36196,Xc=37492,jc=37496,Yc=37488,qc=37489,Ga=37490,Zc=37491,Jc=37808,Kc=37809,$c=37810,Qc=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,hh=36492,uh=36494,dh=36495,fh=36283,ph=36284,Ha=36285,mh=36286;var xa=2300,lc=2301,Kl=2302,ed=2303,nd=2400,id=2401,sd=2402;var Im=3200;var Wa=0,Om=1,gs="",pn="srgb",va="srgb-linear",ya="linear",Te="srgb";var $l=7680;var Lm=519,Fm=512,Nm=513,km=514,Rd=515,Um=516,Bm=517,Pd=518,Dd=519,zm=35044;var Id="300 es",oi=2e3,bo=2001;function ux(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function dx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vm(){let s=Sa("canvas");return s.style.display="block",s}var Bp={},Mo=null;function Od(...s){let t="THREE."+s.shift();Mo?Mo("log",t,...s):console.log(t,...s)}function Gm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function $t(...s){s=Gm(s);let t="THREE."+s.shift();if(Mo)Mo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=Gm(s);let t="THREE."+s.shift();if(Mo)Mo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function _a(...s){let t=s.join(" ");t in Bp||(Bp[t]=!0,$t(...s))}function Hm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wm={[Ql]:Ql,[ec]:sc,[nc]:nc,[So]:ic,[tc]:tc,[sc]:ec,[rc]:rc,[ic]:So},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ou=Math.PI/180,cc=180/Math.PI;function Xa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function fx(s,t){return(s%t+t)%t}function Lu(s,t,e){return(1-e)*s+e*t}function Xm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ld(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function px(s,t){if(t.constructor===Float32Array)return s;let e=Ld(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function mx(s,t){if(t.constructor===Float32Array)return s;let e=Ld(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var xe=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let _=1-a;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);_=Math.sin(_*b)/A,a=Math.sin(a*b)/A,l=l*_+d*a,c=c*_+f*a,h=h*_+p*a,u=u*_+x*a}else{l=l*_+d*a,c=c*_+f*a,h=h*_+p*a,u=u*_+x*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},it=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fu.copy(this).projectOnVector(t),this.sub(Fu)}reflect(t){return this.sub(Fu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fu=new it,zp=new Gi,ie=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],_=i[6],b=i[1],A=i[4],w=i[7],E=i[2],P=i[5],g=i[8];return r[0]=o*x+a*b+l*E,r[3]=o*m+a*A+l*P,r[6]=o*_+a*w+l*g,r[1]=c*x+h*b+u*E,r[4]=c*m+h*A+u*P,r[7]=c*_+h*w+u*g,r[2]=d*x+f*b+p*E,r[5]=d*m+f*A+p*P,r[8]=d*_+f*w+p*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _a("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nu.makeScale(t,e)),this}rotate(t){return _a("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nu.makeRotation(-t)),this}translate(t,e){return _a("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nu=new ie,Vp=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gp=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gx(){let s={enabled:!0,workingColorSpace:va,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gs?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[va]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Vp,fromXYZ:Gp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}var _e=gx();function ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var oo,hc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{oo===void 0&&(oo=Sa("canvas")),oo.width=t.width,oo.height=t.height;let i=oo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=oo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_x=0,wo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Xa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ku(i[o].image)):r.push(ku(i[o]))}else r=ku(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var xx=0,Uu=new it,An=class s extends Vi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Bi,i=Bi,r=mn,o=bi,a=Ci,l=Un,c=s.DEFAULT_ANISOTROPY,h=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Xa(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oc:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oc:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Sd;An.DEFAULT_ANISOTROPY=1;var Ue=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,w=(f+1)/2,E=(_+1)/2,P=(h+d)/4,g=(u+x)/4,v=(p+m)/4;return A>w&&A>E?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=P/n,r=g/n):w>E?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=P/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=g/r,i=v/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new An({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ba=class extends An{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dc=class extends An{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ke=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=p,_[11]=x,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ao.setFromMatrixColumn(t,0).length(),r=1/ao.setFromMatrixColumn(t,1).length(),o=1/ao.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vx,t,yx)}lookAt(t,e,n){let i=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ps.crossVectors(n,Wn),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ps.crossVectors(n,Wn)),Ps.normalize(),Dl.crossVectors(Wn,Ps),i[0]=Ps.x,i[4]=Dl.x,i[8]=Wn.x,i[1]=Ps.y,i[5]=Dl.y,i[9]=Wn.y,i[2]=Ps.z,i[6]=Dl.z,i[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],_=n[14],b=n[3],A=n[7],w=n[11],E=n[15],P=i[0],g=i[4],v=i[8],T=i[12],C=i[1],R=i[5],L=i[9],U=i[13],O=i[2],j=i[6],q=i[10],B=i[14],$=i[3],J=i[7],ct=i[11],pt=i[15];return r[0]=o*P+a*C+l*O+c*$,r[4]=o*g+a*R+l*j+c*J,r[8]=o*v+a*L+l*q+c*ct,r[12]=o*T+a*U+l*B+c*pt,r[1]=h*P+u*C+d*O+f*$,r[5]=h*g+u*R+d*j+f*J,r[9]=h*v+u*L+d*q+f*ct,r[13]=h*T+u*U+d*B+f*pt,r[2]=p*P+x*C+m*O+_*$,r[6]=p*g+x*R+m*j+_*J,r[10]=p*v+x*L+m*q+_*ct,r[14]=p*T+x*U+m*B+_*pt,r[3]=b*P+A*C+w*O+E*$,r[7]=b*g+A*R+w*j+E*J,r[11]=b*v+A*L+w*q+E*ct,r[15]=b*T+A*U+w*B+E*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],_=t[15],b=l*f-c*d,A=a*f-c*u,w=a*d-l*u,E=o*f-c*h,P=o*d-l*h,g=o*u-a*h;return e*(x*b-m*A+_*w)-n*(p*b-m*E+_*P)+i*(p*A-x*E+_*g)-r*(p*w-x*P+m*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],_=t[15],b=e*a-n*o,A=e*l-i*o,w=e*c-r*o,E=n*l-i*a,P=n*c-r*a,g=i*c-r*l,v=h*x-u*p,T=h*m-d*p,C=h*_-f*p,R=u*m-d*x,L=u*_-f*x,U=d*_-f*m,O=b*U-A*L+w*R+E*C-P*T+g*v;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/O;return t[0]=(a*U-l*L+c*R)*j,t[1]=(i*L-n*U-r*R)*j,t[2]=(x*g-m*P+_*E)*j,t[3]=(d*P-u*g-f*E)*j,t[4]=(l*C-o*U-c*T)*j,t[5]=(e*U-i*C+r*T)*j,t[6]=(m*w-p*g-_*A)*j,t[7]=(h*g-d*w+f*A)*j,t[8]=(o*L-a*C+c*v)*j,t[9]=(n*C-e*L-r*v)*j,t[10]=(p*P-x*w+_*b)*j,t[11]=(u*w-h*P-f*b)*j,t[12]=(a*T-o*R-l*v)*j,t[13]=(e*R-n*T+i*v)*j,t[14]=(x*A-p*E-m*b)*j,t[15]=(h*E-u*A+d*b)*j,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,_=a*u,b=l*c,A=l*h,w=l*u,E=n.x,P=n.y,g=n.z;return i[0]=(1-(x+_))*E,i[1]=(f+w)*E,i[2]=(p-A)*E,i[3]=0,i[4]=(f-w)*P,i[5]=(1-(d+_))*P,i[6]=(m+b)*P,i[7]=0,i[8]=(p+A)*g,i[9]=(m-b)*g,i[10]=(1-(d+x))*g,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ao.set(i[0],i[1],i[2]).length(),a=ao.set(i[4],i[5],i[6]).length(),l=ao.set(i[8],i[9],i[10]).length();r<0&&(o=-o),xi.copy(this);let c=1/o,h=1/a,u=1/l;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,e.setFromRotationMatrix(xi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=oi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===oi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===bo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=oi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===oi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===bo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ao=new it,xi=new ke,vx=new it(0,0,0),yx=new it(1,1,1),Ps=new it,Dl=new it,Wn=new it,Hp=new ke,Wp=new Gi,Hi=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Ma=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sx=0,Xp=new it,lo=new Gi,os=new ke,Il=new it,fa=new it,bx=new it,Mx=new Gi,jp=new it(1,0,0),Yp=new it(0,1,0),qp=new it(0,0,1),Zp={type:"added"},wx={type:"removed"},co={type:"childadded",child:null},Bu={type:"childremoved",child:null},bn=class s extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new it,e=new Hi,n=new Gi,i=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new ie}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lo.setFromAxisAngle(t,e),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,e){return lo.setFromAxisAngle(t,e),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(jp,t)}rotateY(t){return this.rotateOnAxis(Yp,t)}rotateZ(t){return this.rotateOnAxis(qp,t)}translateOnAxis(t,e){return Xp.copy(t).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jp,t)}translateY(t){return this.translateOnAxis(Yp,t)}translateZ(t){return this.translateOnAxis(qp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Il.copy(t):Il.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(fa,Il,this.up):os.lookAt(Il,fa,this.up),this.quaternion.setFromRotationMatrix(os),i&&(os.extractRotation(i.matrixWorld),lo.setFromRotationMatrix(os),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zp),co.child=t,this.dispatchEvent(co),co.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wx),Bu.child=t,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zp),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,bx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Mx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new it(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var us=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tx={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),_=this._getHandJoint(c,x);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function zu(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=fx(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zu(o,r,t+1/3),this.g=zu(o,r,t),this.b=zu(o,r,t-1/3)}return _e.colorSpaceToWorking(this,i),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=jm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return _e.workingToColorSpace(Sn.copy(this),t),Math.round(ye(Sn.r*255,0,255))*65536+Math.round(ye(Sn.g*255,0,255))*256+Math.round(ye(Sn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,i=Sn.g,r=Sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=pn){_e.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,i=Sn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+e,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ds),t.getHSL(Ol);let n=Lu(Ds.h,Ol.h,e),i=Lu(Ds.s,Ol.s,e),r=Lu(Ds.l,Ol.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new ce;ce.NAMES=jm;var wa=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vi=new it,as=new it,Vu=new it,ls=new it,ho=new it,uo=new it,Jp=new it,Gu=new it,Hu=new it,Wu=new it,Xu=new Ue,ju=new Ue,Yu=new Ue,Fs=class s{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vi.subVectors(t,e),i.cross(vi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vi.subVectors(i,e),as.subVectors(n,e),Vu.subVectors(t,e);let o=vi.dot(vi),a=vi.dot(as),l=vi.dot(Vu),c=as.dot(as),h=as.dot(Vu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ls)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ls.x),l.addScaledVector(o,ls.y),l.addScaledVector(a,ls.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xu.setScalar(0),ju.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(t,e),ju.fromBufferAttribute(t,n),Yu.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xu,r.x),o.addScaledVector(ju,r.y),o.addScaledVector(Yu,r.z),o}static isFrontFacing(t,e,n,i){return vi.subVectors(n,e),as.subVectors(t,e),vi.cross(as).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),vi.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ho.subVectors(i,n),uo.subVectors(r,n),Gu.subVectors(t,n);let l=ho.dot(Gu),c=uo.dot(Gu);if(l<=0&&c<=0)return e.copy(n);Hu.subVectors(t,i);let h=ho.dot(Hu),u=uo.dot(Hu);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ho,o);Wu.subVectors(t,r);let f=ho.dot(Wu),p=uo.dot(Wu);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(uo,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Jp.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Jp,a);let _=1/(m+x+d);return o=x*_,a=d*_,e.copy(n).addScaledVector(ho,o).addScaledVector(uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ns=class{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yi):yi.fromBufferAttribute(r,o),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(t.matrixWorld),this.union(Ll)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),Fl.subVectors(this.max,pa),fo.subVectors(t.a,pa),po.subVectors(t.b,pa),mo.subVectors(t.c,pa),Is.subVectors(po,fo),Os.subVectors(mo,po),ur.subVectors(fo,mo);let e=[0,-Is.z,Is.y,0,-Os.z,Os.y,0,-ur.z,ur.y,Is.z,0,-Is.x,Os.z,0,-Os.x,ur.z,0,-ur.x,-Is.y,Is.x,0,-Os.y,Os.x,0,-ur.y,ur.x,0];return!qu(e,fo,po,mo,Fl)||(e=[1,0,0,0,1,0,0,0,1],!qu(e,fo,po,mo,Fl))?!1:(Nl.crossVectors(Is,Os),e=[Nl.x,Nl.y,Nl.z],qu(e,fo,po,mo,Fl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cs=[new it,new it,new it,new it,new it,new it,new it,new it],yi=new it,Ll=new Ns,fo=new it,po=new it,mo=new it,Is=new it,Os=new it,ur=new it,pa=new it,Fl=new it,Nl=new it,dr=new it;function qu(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){dr.fromArray(s,r);let a=i.x*Math.abs(dr.x)+i.y*Math.abs(dr.y)+i.z*Math.abs(dr.z),l=t.dot(dr),c=e.dot(dr),h=n.dot(dr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Je=new it,kl=new xe,Cx=0,zi=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zm,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=t!==void 0?Ld(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kl.fromBufferAttribute(this,e),kl.applyMatrix3(t),this.setXY(e,kl.x,kl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):px(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):mx(t,this.array)}};var Ta=class extends zi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends zi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ai=class extends zi{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ex=new Ns,ma=new it,Zu=new it,Co=class{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ex.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(Zu)),this.expandByPoint(ma.copy(t.center).sub(Zu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ax=0,ri=new ke,Ju=new bn,go=new it,Xn=new Ns,ga=new Ns,an=new it,ks=class s extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ux(t)?Ca:Ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return Ju.lookAt(t),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ai(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){let n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Xn.min,ga.min),Xn.expandByPoint(an),an.addVectors(Xn.max,ga.max),Xn.expandByPoint(an)):(Xn.expandByPoint(ga.min),Xn.expandByPoint(ga.max))}Xn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(go.fromBufferAttribute(t,c),an.add(go)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let T=0;T<n.count;T++)a[T]=new it,l[T]=new it;let h=new it,u=new it,d=new it,f=new xe,p=new xe,x=new xe,m=new it,_=new it;function b(T,C,R){c[T]=c[C]=c[R]=1,h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,R),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),_.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),a[T].add(m),a[C].add(m),a[R].add(m),l[T].add(_),l[C].add(_),l[R].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,C=A.length;T<C;++T){let R=A[T],L=R.start,U=R.count;for(let O=L,j=L+U;O<j;O+=3)b(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new it,E=new it,P=new it,g=new it;function v(T){P.fromBufferAttribute(i,T),g.copy(P);let C=a[T];w.copy(C),w.sub(P.multiplyScalar(P.dot(C))).normalize(),E.crossVectors(g,C);let L=E.dot(l[T])<0?-1:1;o.setXYZW(T,w.x,w.y,w.z,L)}for(let T=0,C=n.count;T<C;++T)c[T]&&v(T);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new it,r=new it,o=new it,a=new it,l=new it,c=new it,h=new it,u=new it;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let _=0;_<h;_++)d[p++]=c[f++]}return new zi(d,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ku=new it,Rx=new it,Px=new ie,Si=class{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ku.subVectors(n,e).cross(Rx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Px.getNormalMatrix(t),i=this.coplanarPoint(Ku).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dx=0,Wi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Po,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ce().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Si().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xe().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hs=new it,$u=new it,Ul=new it,Bl=new it,fc=class{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,e),hs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$u.copy(t).add(e).multiplyScalar(.5),Ul.copy(e).sub(t).normalize(),Bl.copy(this.origin).sub($u);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ul),a=Bl.dot(this.direction),l=-Bl.dot(Ul),c=Bl.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($u).addScaledVector(Ul,d),f}intersectSphere(t,e){if(t.radius<0)return null;hs.subVectors(t.center,this.origin);let n=hs.dot(this.direction),i=hs.dot(hs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,_=n.x-o.x,b=n.y-o.y,A=n.z-o.z,w=Math.abs(l),E=Math.abs(c),P=Math.abs(h),g,v,T,C,R,L,U,O,j,q,B,$;if(w>=E&&w>=P?(T=l,L=u,j=p,$=_,l>=0?(g=c,v=h,C=d,R=f,U=x,O=m,q=b,B=A):(g=h,v=c,C=f,R=d,U=m,O=x,q=A,B=b)):E>=P?(T=c,L=d,j=x,$=b,c>=0?(g=h,v=l,C=f,R=u,U=m,O=p,q=A,B=_):(g=l,v=h,C=u,R=f,U=p,O=m,q=_,B=A)):(T=h,L=f,j=m,$=A,h>=0?(g=l,v=c,C=u,R=d,U=p,O=x,q=_,B=b):(g=c,v=l,C=d,R=u,U=x,O=p,q=b,B=_)),T===0)return null;let J=g/T,ct=v/T,pt=1/T,Et=C-J*L,At=R-ct*L,Q=U-J*j,Mt=O-ct*j,Ct=q-J*$,zt=B-ct*$,Tt=Ct*Mt-zt*Q,jt=Et*zt-At*Ct,Qt=Q*At-Mt*Et;if(i){if(Tt<0||jt<0||Qt<0)return null}else if((Tt<0||jt<0||Qt<0)&&(Tt>0||jt>0||Qt>0))return null;let Vt=Tt+jt+Qt;if(Vt===0)return null;let de=pt*(Tt*L+jt*j+Qt*$);return(Vt>0?de<0:de>0)?null:this.at(de/Vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mr=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kp=new ke,fr=new fc,zl=new Co,$p=new it,Vl=new it,Gl=new it,Hl=new it,Qu=new it,Wl=new it,Qp=new it,Xl=new it,kn=class extends bn{constructor(t=new ks,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Qu.fromBufferAttribute(u,t),o?Wl.addScaledVector(Qu,h):Wl.addScaledVector(Qu.sub(e),h))}e.add(Wl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(r),fr.copy(t.ray).recast(t.near),!(zl.containsPoint(fr.origin)===!1&&(fr.intersectSphere(zl,$p)===null||fr.origin.distanceToSquared($p)>(t.far-t.near)**2))&&(Kp.copy(r).invert(),fr.copy(t.ray).applyMatrix4(Kp),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],_=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,E=A;w<E;w+=3){let P=a.getX(w),g=a.getX(w+1),v=a.getX(w+2);i=jl(this,_,t,n,c,h,u,P,g,v),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,_=x;m<_;m+=3){let b=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);i=jl(this,o,t,n,c,h,u,b,A,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],_=o[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=b,E=A;w<E;w+=3){let P=w,g=w+1,v=w+2;i=jl(this,_,t,n,c,h,u,P,g,v),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,_=x;m<_;m+=3){let b=m,A=m+1,w=m+2;i=jl(this,o,t,n,c,h,u,b,A,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Ix(s,t,e,n,i,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hs,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xl);return c<e.near||c>e.far?null:{distance:c,point:Xl.clone(),object:s}}function jl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Vl),s.getVertexPosition(l,Gl),s.getVertexPosition(c,Hl);let h=Ix(s,t,e,n,Vl,Gl,Hl,Qp);if(h){let u=new it;Fs.getBarycoord(Qp,Vl,Gl,Hl,u),i&&(h.uv=Fs.getInterpolatedAttribute(i,a,l,c,u,new xe)),r&&(h.uv1=Fs.getInterpolatedAttribute(r,a,l,c,u,new xe)),o&&(h.normal=Fs.getInterpolatedAttribute(o,a,l,c,u,new it),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new it,materialIndex:0};Fs.getNormal(Vl,Gl,Hl,d.normal),h.face=d,h.barycoord=u}return h}var pc=class extends An{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ln,h=ln,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=new Co,Ox=new xe(.5,.5),Yl=new it,Us=class{constructor(t=new Si,e=new Si,n=new Si,i=new Si,r=new Si,o=new Si){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],_=r[11],b=r[12],A=r[13],w=r[14],E=r[15];if(i[0].setComponents(c-o,f-h,_-p,E-b).normalize(),i[1].setComponents(c+o,f+h,_+p,E+b).normalize(),i[2].setComponents(c+a,f+u,_+x,E+A).normalize(),i[3].setComponents(c-a,f-u,_-x,E-A).normalize(),n)i[4].setComponents(l,d,m,w).normalize(),i[5].setComponents(c-l,f-d,_-m,E-w).normalize();else if(i[4].setComponents(c-l,f-d,_-m,E-w).normalize(),e===oi)i[5].setComponents(c+l,f+d,_+m,E+w).normalize();else if(e===bo)i[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);let e=Ox.distanceTo(t.center);return pr.radius=.7071067811865476+e,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Yl.x=i.normal.x>0?t.max.x:t.min.x,Yl.y=i.normal.y>0?t.max.y:t.min.y,Yl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tm=new ke,mc=class s{constructor(){this.coordinateSystem=oi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];tm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Us),n[i].setFromProjectionMatrix(tm,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Us),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Ea=class extends An{constructor(t=[],e=Sr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gr=class extends An{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends An{constructor(t,e,n=Mi,i,r,o,a=ln,l=ln,c,h=fs,u=1){if(h!==fs&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Aa=class extends ps{constructor(t,e=Mi,n=Sr,i,r,o=ln,a=ln,l,c=fs){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ra=class extends An{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qn=class s extends ks{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ai(c,3)),this.setAttribute("normal",new ai(h,3)),this.setAttribute("uv",new ai(u,2));function p(x,m,_,b,A,w,E,P,g,v,T){let C=w/g,R=E/v,L=w/2,U=E/2,O=P/2,j=g+1,q=v+1,B=0,$=0,J=new it;for(let ct=0;ct<q;ct++){let pt=ct*R-U;for(let Et=0;Et<j;Et++){let At=Et*C-L;J[x]=At*b,J[m]=pt*A,J[_]=O,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[_]=P>0?1:-1,h.push(J.x,J.y,J.z),u.push(Et/g),u.push(1-ct/v),B+=1}}for(let ct=0;ct<v;ct++)for(let pt=0;pt<g;pt++){let Et=d+pt+j*ct,At=d+pt+j*(ct+1),Q=d+(pt+1)+j*(ct+1),Mt=d+(pt+1)+j*ct;l.push(Et,At,Mt),l.push(At,Q,Mt),$+=6}a.addGroup(f,$,T),f+=$,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bs=class s extends ks{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let _=0;_<h;_++){let b=_*d-o;for(let A=0;A<c;A++){let w=A*u-r;p.push(w,-b,0),x.push(0,0,1),m.push(A/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){let A=b+c*_,w=b+c*(_+1),E=b+1+c*(_+1),P=b+1+c*_;f.push(A,w,P),f.push(w,E,P)}this.setIndex(f),this.setAttribute("position",new ai(p,3)),this.setAttribute("normal",new ai(x,3)),this.setAttribute("uv",new ai(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Pa=class extends Wi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Mr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(em(i))i.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(em(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Mn(s){let t={};for(let e=0;e<s.length;e++){let n=Mr(s[e]);for(let i in n)t[i]=n[i]}return t}function em(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Lx(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var Ym={clone:Mr,merge:Mn},Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xi=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Lx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new xe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new it().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},gc=class extends Xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Da=class extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Eo=class extends Wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_c=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xc=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _o(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ql(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var zs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vc=class extends zs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=t,a=2*e-n;break;case sd:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=t,l=2*n-e;break;case sd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,_=-d*m+2*d*x-d*p,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,A=(-1-f)*m+(1.5+f)*x+.5*p,w=f*m-f*x;for(let E=0;E!==a;++E)r[E]=_*o[h+E]+b*o[c+E]+A*o[l+E]+w*o[u+E];return r}},yc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Sc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},bc=class extends zs{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],_=f*d+p*2,b=u[_],A=u[_+1],w=t*d+p*2,E=h[w],P=h[w+1],g=Ux(n,e,b,E,i);r[p]=qm(g,x,A,P,m)}return r}};function qm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function kx(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Ux(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=qm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=kx(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_o(e,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_o(t.times,Array),values:_o(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ql(t.settings)&&(n.settings={inTangents:_o(t.settings.inTangents,Array),outTangents:_o(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xa:e=this.InterpolantFactoryMethodDiscrete;break;case lc:e=this.InterpolantFactoryMethodLinear;break;case Kl:e=this.InterpolantFactoryMethodSmooth;break;case ed:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $t("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return Kl;case this.InterpolantFactoryMethodBezier:return ed}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;ql(this.settings)&&(nm(this.settings.inTangents,t),nm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ql(this.settings)&&(im(this.settings.inTangents,t),im(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ql(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function nm(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function im(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=lc;var Vs=class extends Zn{constructor(t,e,n){super(t,e,n)}};Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=xa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Mc.prototype.ValueTypeName="color";var wc=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};wc.prototype.ValueTypeName="number";var Tc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Gi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ia=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Tc(this.times,this.values,this.getValueSize(),t)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Zn{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=xa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Cc=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Cc.prototype.ValueTypeName="vector";var Ec=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zm=new Ec,Ac=class{constructor(t){this.manager=t!==void 0?t:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oa=class extends bn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},La=class extends Oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},td=new ke,sm=new it,rm=new it,Rc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sm.setFromMatrixPosition(t.matrixWorld),e.position.copy(sm),rm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(td,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===bo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zl=new it,Jl=new Gi,Ui=new it,Fa=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zl,Jl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Jl,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zl,Jl,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Jl,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ls=new it,om=new xe,am=new xe,jn=class extends Fa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,e){return this.getViewBounds(t,om,am),e.subVectors(am,om)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ou*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _r=class extends Fa{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rd=class extends Rc{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Na=class extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new rd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xo=-90,vo=1,Ao=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jn(xo,vo,t,e);i.layers=this.layers,this.add(i);let r=new jn(xo,vo,t,e);r.layers=this.layers,this.add(r);let o=new jn(xo,vo,t,e);o.layers=this.layers,this.add(o);let a=new jn(xo,vo,t,e);a.layers=this.layers,this.add(a);let l=new jn(xo,vo,t,e);l.layers=this.layers,this.add(l);let c=new jn(xo,vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Pc=class extends jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Nd="\\[\\]\\.:\\/",Bx=new RegExp("["+Nd+"]","g"),kd="[^"+Nd+"]",zx="[^"+Nd.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",kd),Gx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kd),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kd),Xx=new RegExp("^"+Vx+Gx+Hx+Wx+"$"),jx=["material","materials","bones","map"],od=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(t){let e=Xx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=od;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bT=new Float32Array(1);var ad=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function Ud(s,t,e,n){let i=Yx(n);switch(e){case Cd:return s*t;case Ad:return s*t/i.components*i.byteLength;case kc:return s*t/i.components*i.byteLength;case Ws:return s*t*2/i.components*i.byteLength;case Uc:return s*t*2/i.components*i.byteLength;case Ed:return s*t*3/i.components*i.byteLength;case Ci:return s*t*4/i.components*i.byteLength;case Bc:return s*t*4/i.components*i.byteLength;case Ua:case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vc:case Hc:return Math.max(s,16)*Math.max(t,8)/4;case zc:case Gc:return Math.max(s,8)*Math.max(t,8)/2;case Wc:case Xc:case Yc:case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jc:case Ga:case Zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case th:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case nh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ih:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case oh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case lh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ch:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case hh:case uh:case dh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fh:case ph:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ha:case mh:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yx(s){switch(s){case Un:case bd:return{byteLength:1,components:1};case Oo:case Md:case Ti:return{byteLength:2,components:1};case Fc:case Nc:return{byteLength:2,components:4};case Mi:case Lc:case wi:return{byteLength:4,components:1};case wd:case Td:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _g(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zx(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nv=`#ifdef USE_AOMAP
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
#endif`,iv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sv=`#ifdef USE_BATCHING
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
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ov=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cv=`#ifdef USE_IRIDESCENCE
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
#endif`,hv=`#ifdef USE_BUMPMAP
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vv=`#define PI 3.141592653589793
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
} // validated`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,Sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
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
#endif`,Yv=`uniform sampler2D dfgLUT;
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
}`,qv=`
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ry=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ay=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cy=`#if defined( USE_MORPHCOLORS )
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
#endif`,hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
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
#endif`,dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,my=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xy=`#ifdef USE_NORMALMAP
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
#endif`,vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,by=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,My=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ay=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
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
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uy=`#ifdef USE_SKINNING
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
#endif`,By=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jy=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform float backgroundBlurriness;
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`#include <common>
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
}`,nS=`#if DEPTH_PACKING == 3200
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
}`,iS=`#define DISTANCE
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
}`,sS=`#define DISTANCE
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
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`uniform float scale;
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
}`,lS=`uniform vec3 diffuse;
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
}`,cS=`#include <common>
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
}`,hS=`uniform vec3 diffuse;
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
}`,uS=`#define LAMBERT
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
}`,dS=`#define LAMBERT
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
}`,fS=`#define MATCAP
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
}`,pS=`#define MATCAP
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
}`,mS=`#define NORMAL
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
}`,gS=`#define NORMAL
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
}`,_S=`#define PHONG
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
}`,xS=`#define PHONG
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
}`,vS=`#define STANDARD
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
}`,yS=`#define STANDARD
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
}`,SS=`#define TOON
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
}`,bS=`#define TOON
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
}`,MS=`uniform float size;
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
}`,wS=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,CS=`uniform vec3 color;
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
}`,ES=`uniform float rotation;
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
}`,AS=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Jx,alphahash_pars_fragment:Kx,alphamap_fragment:$x,alphamap_pars_fragment:Qx,alphatest_fragment:tv,alphatest_pars_fragment:ev,aomap_fragment:nv,aomap_pars_fragment:iv,batching_pars_vertex:sv,batching_vertex:rv,begin_vertex:ov,beginnormal_vertex:av,bsdfs:lv,iridescence_fragment:cv,bumpmap_pars_fragment:hv,clipping_planes_fragment:uv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:fv,clipping_planes_vertex:pv,color_fragment:mv,color_pars_fragment:gv,color_pars_vertex:_v,color_vertex:xv,common:vv,defaultnormal_vertex:yv,displacementmap_pars_vertex:Sv,displacementmap_vertex:bv,emissivemap_fragment:Mv,emissivemap_pars_fragment:wv,colorspace_fragment:Tv,colorspace_pars_fragment:Cv,envmap_fragment:Ev,envmap_common_pars_fragment:Av,envmap_pars_fragment:Rv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Vv,envmap_vertex:Dv,fog_vertex:Iv,fog_pars_vertex:Ov,fog_fragment:Lv,fog_pars_fragment:Fv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:kv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Bv,lights_pars_begin:zv,lights_toon_fragment:Gv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:jv,lights_physical_pars_fragment:Yv,lights_fragment_begin:qv,lights_fragment_maps:Zv,lights_fragment_end:Jv,lightprobes_pars_fragment:Kv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ey,map_fragment:ny,map_pars_fragment:iy,map_particle_fragment:sy,map_particle_pars_fragment:ry,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ay,morphinstance_vertex:ly,morphcolor_vertex:cy,morphnormal_vertex:hy,morphtarget_pars_vertex:uy,morphtarget_vertex:dy,normal_fragment_begin:fy,normal_fragment_maps:py,normal_pars_fragment:my,normal_pars_vertex:gy,normal_vertex:_y,normalmap_pars_fragment:xy,clearcoat_normal_fragment_begin:vy,clearcoat_normal_fragment_maps:yy,clearcoat_pars_fragment:Sy,iridescence_pars_fragment:by,opaque_fragment:My,packing:wy,premultiplied_alpha_fragment:Ty,project_vertex:Cy,dithering_fragment:Ey,dithering_pars_fragment:Ay,roughnessmap_fragment:Ry,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Dy,shadowmap_pars_vertex:Iy,shadowmap_vertex:Oy,shadowmask_pars_fragment:Ly,skinbase_vertex:Fy,skinning_pars_vertex:Ny,skinning_vertex:ky,skinnormal_vertex:Uy,specularmap_fragment:By,specularmap_pars_fragment:zy,tonemapping_fragment:Vy,tonemapping_pars_fragment:Gy,transmission_fragment:Hy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:jy,uv_vertex:Yy,worldpos_vertex:qy,background_vert:Zy,background_frag:Jy,backgroundCube_vert:Ky,backgroundCube_frag:$y,cube_vert:Qy,cube_frag:tS,depth_vert:eS,depth_frag:nS,distance_vert:iS,distance_frag:sS,equirect_vert:rS,equirect_frag:oS,linedashed_vert:aS,linedashed_frag:lS,meshbasic_vert:cS,meshbasic_frag:hS,meshlambert_vert:uS,meshlambert_frag:dS,meshmatcap_vert:fS,meshmatcap_frag:pS,meshnormal_vert:mS,meshnormal_frag:gS,meshphong_vert:_S,meshphong_frag:xS,meshphysical_vert:vS,meshphysical_frag:yS,meshtoon_vert:SS,meshtoon_frag:bS,points_vert:MS,points_frag:wS,shadow_vert:TS,shadow_frag:CS,sprite_vert:ES,sprite_frag:AS},Nt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},qi={basic:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Mn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Mn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Mn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Mn([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Mn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Mn([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Mn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Mn([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Mn([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Mn([Nt.lights,Nt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};qi.physical={uniforms:Mn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var gh={r:0,b:0,g:0},RS=new ke,xg=new ie;xg.set(-1,0,0,0,1,0,0,0,1);function PS(s,t,e,n,i,r){let o=new ce(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let w=b.backgroundBlurriness>0;A=t.get(A,w)}return A}function p(b){let A=!1,w=f(b);w===null?m(o,a):w&&w.isColor&&(m(w,1),A=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,A){let w=f(A);w&&w.isCubeTexture?(c===void 0&&(c=new kn(new qn(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Mr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,P,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(RS.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xg),c.material.toneMapped=_e.getTransfer(w.colorSpace)!==Te,(h!==w||u!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new kn(new Bs(2,2),new Xi({name:"BackgroundMaterial",uniforms:Mr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=_e.getTransfer(w.colorSpace)!==Te,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(gh,Fd(s)),e.buffers.color.setClear(gh.r,gh.g,gh.b,A,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,A=1){o.set(b),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:x,dispose:_}}function DS(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,L,U,O,j){let q=!1,B=u(R,O,U,L);r!==B&&(r=B,c(r.object)),q=f(R,O,U,j),q&&p(R,O,U,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,w(R,L,U,O),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,L,U,O){let j=O.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let B=R.isInstancedMesh===!0?R.id:0,$=q[B];$===void 0&&($={},q[B]=$);let J=$[U.id];J===void 0&&(J={},$[U.id]=J);let ct=J[j];return ct===void 0&&(ct=d(l()),J[j]=ct),ct}function d(R){let L=[],U=[],O=[];for(let j=0;j<e;j++)L[j]=0,U[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:O,object:R,attributes:{},index:null}}function f(R,L,U,O){let j=r.attributes,q=L.attributes,B=0,$=U.getAttributes();for(let J in $)if($[J].location>=0){let pt=j[J],Et=q[J];if(Et===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor)),pt===void 0||pt.attribute!==Et||Et&&pt.data!==Et.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function p(R,L,U,O){let j={},q=L.attributes,B=0,$=U.getAttributes();for(let J in $)if($[J].location>=0){let pt=q[J];pt===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor));let Et={};Et.attribute=pt,pt&&pt.data&&(Et.data=pt.data),j[J]=Et,B++}r.attributes=j,r.attributesNum=B,r.index=O}function x(){let R=r.newAttributes;for(let L=0,U=R.length;L<U;L++)R[L]=0}function m(R){_(R,0)}function _(R,L){let U=r.newAttributes,O=r.enabledAttributes,j=r.attributeDivisors;U[R]=1,O[R]===0&&(s.enableVertexAttribArray(R),O[R]=1),j[R]!==L&&(s.vertexAttribDivisor(R,L),j[R]=L)}function b(){let R=r.newAttributes,L=r.enabledAttributes;for(let U=0,O=L.length;U<O;U++)L[U]!==R[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function A(R,L,U,O,j,q,B){B===!0?s.vertexAttribIPointer(R,L,U,j,q):s.vertexAttribPointer(R,L,U,O,j,q)}function w(R,L,U,O){x();let j=O.attributes,q=U.getAttributes(),B=L.defaultAttributeValues;for(let $ in q){let J=q[$];if(J.location>=0){let ct=j[$];if(ct===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ct=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ct=R.instanceColor)),ct!==void 0){let pt=ct.normalized,Et=ct.itemSize,At=t.get(ct);if(At===void 0)continue;let Q=At.buffer,Mt=At.type,Ct=At.bytesPerElement,zt=Mt===s.INT||Mt===s.UNSIGNED_INT||ct.gpuType===Lc;if(ct.isInterleavedBufferAttribute){let Tt=ct.data,jt=Tt.isInterleavedBuffer===!0?Tt.stride:Tt.itemSize,Qt=ct.offset;if(Tt.isInstancedInterleavedBuffer||Tt.isInstancedBufferAttribute){for(let Vt=0;Vt<J.locationSize;Vt++)_(J.location+Vt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Vt=0;Vt<J.locationSize;Vt++)m(J.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Vt=0;Vt<J.locationSize;Vt++)A(J.location+Vt,Et/J.locationSize,Mt,pt,jt*Ct,(Qt+Et/J.locationSize*Vt)*Ct,zt)}else{if(ct.isInstancedBufferAttribute){for(let Tt=0;Tt<J.locationSize;Tt++)_(J.location+Tt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Tt=0;Tt<J.locationSize;Tt++)m(J.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Tt=0;Tt<J.locationSize;Tt++)A(J.location+Tt,Et/J.locationSize,Mt,pt,Et*Ct,Et/J.locationSize*Tt*Ct,zt)}}else if(B!==void 0){let pt=B[$];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(J.location,pt);break;case 3:s.vertexAttrib3fv(J.location,pt);break;case 4:s.vertexAttrib4fv(J.location,pt);break;default:s.vertexAttrib1fv(J.location,pt)}}}}b()}function E(){T();for(let R in n){let L=n[R];for(let U in L){let O=L[U];for(let j in O){let q=O[j];for(let B in q)h(q[B].object),delete q[B];delete O[j]}}delete n[R]}}function P(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let U in L){let O=L[U];for(let j in O){let q=O[j];for(let B in q)h(q[B].object),delete q[B];delete O[j]}}delete n[R.id]}function g(R){for(let L in n){let U=n[L];for(let O in U){let j=U[O];if(j[R.id]===void 0)continue;let q=j[R.id];for(let B in q)h(q[B].object),delete q[B];delete j[R.id]}}}function v(R){for(let L in n){let U=n[L],O=R.isInstancedMesh===!0?R.id:0,j=U[O];if(j!==void 0){for(let q in j){let B=j[q];for(let $ in B)h(B[$].object),delete B[$];delete j[q]}delete U[O],Object.keys(U).length===0&&delete n[L]}}}function T(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function IS(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function OS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(g){return!(g!==Ci&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let v=g===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Un&&g!==wi&&!v&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&$t("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:w,maxSamples:E,samples:P}}function LS(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Si,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,_=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,A=b*4,w=_.clippingState||null;l.value=w,w=h(p,d,A,f);for(let E=0;E!==A;++E)w[E]=e[E];_.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let _=f+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let A=0,w=f;A!==x;++A,w+=4)o.copy(u[A]).applyMatrix4(b,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var qa=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qn(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:vr});r.uniforms.tEquirect.value=e;let o=new kn(i,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=mn),new Ao(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Jm=256,FS=3,NS=20,vg=256,yg=16,kS=3,US=new it,BS=new ce,Fo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ao(1,10,null),this._boxMesh=new kn(new qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=US}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(BS));let m=new Ao(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Jm,Xm(t))}_fromTexture(t,e){t.mapping===Sr||t.mapping===Do?this._setSize(t.image.length===0?Jm:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Km(t,!1,!1),n=Math.log2(t)-FS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Km(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Sr||t.mapping===Do?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$m()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=zS(),this._integrationMaterial=VS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/yg);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-kS)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(vg*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=GS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Km(s,t,e){return new qa(s,{minFilter:bi,generateMipmaps:t,type:Ti,colorSpace:va,depthBuffer:e})}function Za(s,t,e){return new Xi({name:s,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:Rn,blending:vr,depthTest:!1,depthWrite:!1})}function zS(){return Za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vg}u

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
	`)}function VS(){return Za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yg}},`

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
	`)}function GS(){return Za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${NS}
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
	`)}function $m(){return Za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qm(){return Za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function HS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Io||f===Ic)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new qa(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Io||f===Ic,x=f===Sr||f===Do;if(p||x){let m=e.get(d),_=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return n===null&&(n=new Fo(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return p&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new Fo(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Io?d.mapping=Sr:f===Ic&&(d.mapping=Do),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function WS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_a("WebGLRenderer: "+n+" extension not supported."),i}}}function XS(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let b=x!==null?x.array.length:m.array.length/3-1,A=m.count>=65535?Ca:Ta,w=new A(Math.ceil(b/3)*6,1),E=w.array;if(x!==null){let g=x.array;_=x.version;for(let v=0,T=0;v<b;v+=3){let C=g[v+0],R=g[v+1],L=g[v+2];E[T++]=C,E[T++]=R,E[T++]=R,E[T++]=L,E[T++]=L,E[T++]=C}}else{_=m.version;for(let g=0,v=0;g<b;g+=3){let T=g+0,C=g+1,R=g+2;E[v++]=T,E[v++]=C,E[v++]=C,E[v++]=R,E[v++]=R,E[v++]=T}}w.version=_;let P=r.get(p);P&&t.remove(P),r.set(p,w)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function jS(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function YS(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qS(s,t,e){let n=new WeakMap,i=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],A=0;f===!0&&(A=1),p===!0&&(A=2),x===!0&&(A=3);let w=a.attributes.position.count*A,E=1;w>t.maxTextureSize&&(E=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let P=new Float32Array(w*E*4*u),g=new ba(P,w,E,u);g.type=wi,g.needsUpdate=!0;let v=A*4;for(let C=0;C<u;C++){let R=m[C],L=_[C],U=b[C],O=w*E*4*C;for(let j=0;j<R.count;j++){let q=j*v;f===!0&&(i.fromBufferAttribute(R,j),P[O+q+0]=i.x,P[O+q+1]=i.y,P[O+q+2]=i.z,P[O+q+3]=0),p===!0&&(i.fromBufferAttribute(L,j),P[O+q+4]=i.x,P[O+q+5]=i.y,P[O+q+6]=i.z,P[O+q+7]=0),x===!0&&(i.fromBufferAttribute(U,j),P[O+q+8]=i.x,P[O+q+9]=i.y,P[O+q+10]=i.z,P[O+q+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new xe(w,E)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ZS(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var JS={[pd]:"LINEAR_TONE_MAPPING",[md]:"REINHARD_TONE_MAPPING",[gd]:"CINEON_TONE_MAPPING",[_d]:"ACES_FILMIC_TONE_MAPPING",[vd]:"AGX_TONE_MAPPING",[yd]:"NEUTRAL_TONE_MAPPING",[xd]:"CUSTOM_TONE_MAPPING"};function KS(s,t,e,n,i,r){let o=new Yn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ks;h.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ai([0,2,0,0,2,0],2));let u=new gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new kn(h,u),f=new _r(-1,1,1,-1,0,1),p=null,x=null,m=!1,_,b=null,A=[],w=!1;this.setSize=function(E,P){o.setSize(E,P),a!==null&&a.setSize(E,P),l!==null&&l.setSize(E,P);for(let g=0;g<A.length;g++){let v=A[g];v.setSize&&v.setSize(E,P)}},this.setEffects=function(E){A=E,w=A.length>0&&A[0].isRenderPass===!0;let P=o.width,g=o.height;A.length>0&&a===null&&(a=new Yn(P,g,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Yn(P,g,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));let v=i===!0&&A.some(T=>T.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new ps(P,g),r===!0&&(c.format=ms,c.type=br)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let T=0;T<A.length;T++){let C=A[T];C.setSize&&C.setSize(P,g),v&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,P){if(m||E.toneMapping===li&&A.length===0)return!1;if(b=P,P!==null){let g=P.width,v=P.height;(o.width!==g||o.height!==v)&&this.setSize(g,v)}return w===!1&&E.setRenderTarget(o),_=E.toneMapping,E.toneMapping=li,!0},this.hasRenderPass=function(){return w},this.end=function(E,P){E.toneMapping=_,m=!0;let g=o,v=a;for(let T=0;T<A.length;T++){let C=A[T];C.enabled!==!1&&(C.render(E,v,g,P),C.needsSwap!==!1&&(g=v,v=v===a?l:a))}if(p!==E.outputColorSpace||x!==E.toneMapping){p=E.outputColorSpace,x=E.toneMapping,u.defines={},_e.getTransfer(p)===Te&&(u.defines.SRGB_TRANSFER="");let T=JS[x];T&&(u.defines[T]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(b),E.render(d,f),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Sg=new An,bg=new ps(1,1),Mg=new Aa(1),wg=new ba,Tg=new dc,Cg=new Ea,tg=[],eg=[],ng=new Float32Array(16),ig=new Float32Array(9),sg=new Float32Array(4);function No(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=tg[i];if(r===void 0&&(r=new Float32Array(i),tg[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vh(s,t){let e=eg[t];e===void 0&&(e=new Int32Array(t),eg[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function $S(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function QS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),Qe(e,t)}}function tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),Qe(e,t)}}function eb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),Qe(e,t)}}function nb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;sg.set(n),s.uniformMatrix2fv(this.addr,!1,sg),Qe(e,n)}}function ib(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;ig.set(n),s.uniformMatrix3fv(this.addr,!1,ig),Qe(e,n)}}function sb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;ng.set(n),s.uniformMatrix4fv(this.addr,!1,ng),Qe(e,n)}}function rb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),Qe(e,t)}}function ab(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),Qe(e,t)}}function lb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),Qe(e,t)}}function cb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function hb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),Qe(e,t)}}function ub(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),Qe(e,t)}}function db(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),Qe(e,t)}}function yh(s){return s.version===0&&(s.compareFunction=Dd,s.needsUpdate=!0),s}function fb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=yh(bg):r=Sg,e.setTexture2D(t||r,i)}function pb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Tg,i)}function mb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=yh(Mg):r=Cg,e.setTextureCube(t||r,i)}function gb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wg,i)}function _b(s){switch(s){case 5126:return $S;case 35664:return QS;case 35665:return tb;case 35666:return eb;case 35674:return nb;case 35675:return ib;case 35676:return sb;case 5124:case 35670:return rb;case 35667:case 35671:return ob;case 35668:case 35672:return ab;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return hb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}function xb(s,t){s.uniform1fv(this.addr,t)}function vb(s,t){let e=No(t,this.size,2);s.uniform2fv(this.addr,e)}function yb(s,t){let e=No(t,this.size,3);s.uniform3fv(this.addr,e)}function Sb(s,t){let e=No(t,this.size,4);s.uniform4fv(this.addr,e)}function bb(s,t){let e=No(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mb(s,t){let e=No(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wb(s,t){let e=No(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tb(s,t){s.uniform1iv(this.addr,t)}function Cb(s,t){s.uniform2iv(this.addr,t)}function Eb(s,t){s.uniform3iv(this.addr,t)}function Ab(s,t){s.uniform4iv(this.addr,t)}function Rb(s,t){s.uniform1uiv(this.addr,t)}function Pb(s,t){s.uniform2uiv(this.addr,t)}function Db(s,t){s.uniform3uiv(this.addr,t)}function Ib(s,t){s.uniform4uiv(this.addr,t)}function Ob(s,t,e){let n=this.cache,i=t.length,r=vh(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=yh(bg):o=Sg;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Lb(s,t,e){let n=this.cache,i=t.length,r=vh(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Tg,r[o])}function Fb(s,t,e){let n=this.cache,i=t.length,r=vh(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=yh(Mg):o=Cg;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function Nb(s,t,e){let n=this.cache,i=t.length,r=vh(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wg,r[o])}function kb(s){switch(s){case 5126:return xb;case 35664:return vb;case 35665:return yb;case 35666:return Sb;case 35674:return bb;case 35675:return Mb;case 35676:return wb;case 5124:case 35670:return Tb;case 35667:case 35671:return Cb;case 35668:case 35672:return Eb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Pb;case 36295:return Db;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Nb}}var Vd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_b(e.type)}},Gd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kb(e.type)}},Hd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Bd=/(\w+)(\])?(\[|\.)?/g;function rg(s,t){s.seq.push(t),s.map[t.id]=t}function Ub(s,t,e){let n=s.name,i=n.length;for(Bd.lastIndex=0;;){let r=Bd.exec(n),o=Bd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rg(e,c===void 0?new Vd(a,s,t):new Gd(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Hd(a),rg(e,u)),e=u}}}var Lo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ub(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function og(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Bb=37297,zb=0;function Vb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ag=new ie;function Gb(s){_e._getMatrix(ag,_e.workingColorSpace,s);let t=`mat3( ${ag.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(s)){case ya:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function lg(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Vb(s.getShaderSource(t),a)}else return r}function Hb(s,t){let e=Gb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Wb={[pd]:"Linear",[md]:"Reinhard",[gd]:"Cineon",[_d]:"ACESFilmic",[vd]:"AgX",[yd]:"Neutral",[xd]:"Custom"};function Xb(s,t){let e=Wb[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _h=new it;function jb(){_e.getLuminanceCoefficients(_h);let s=_h.x.toFixed(4),t=_h.y.toFixed(4),e=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function qb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ya(s){return s!==""}function cg(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hg(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(s){return s.replace(Jb,Kb)}function Kb(s,t){let e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Wd(e)}var $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(s){return s.replace($b,Qb)}function Qb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dg(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var t1={[xr]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function e1(s){return t1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n1={[Do]:"ENVMAP_MODE_REFRACTION"};function i1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":n1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s1={[Dc]:"ENVMAP_BLENDING_MULTIPLY",[Rm]:"ENVMAP_BLENDING_MIX",[Pm]:"ENVMAP_BLENDING_ADD"};function r1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":s1[s.combine]||"ENVMAP_BLENDING_NONE"}function o1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=e1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=i1(e),u=r1(e),d=Yb(e),f=qb(r),p=i.createProgram(),x,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ya).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ya).join(`
`),m.length>0&&(m+=`
`)):(x=[dg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),m=[dg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?he.tonemapping_pars_fragment:"",e.toneMapping!==li?Xb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Hb("linearToOutputTexel",e.outputColorSpace),jb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ya).join(`
`)),o=Wd(o),o=cg(o,e),o=hg(o,e),a=Wd(a),a=cg(a,e),a=hg(a,e),o=ug(o),a=ug(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+x+o,A=_+m+a,w=og(i,i.VERTEX_SHADER,b),E=og(i,i.FRAGMENT_SHADER,A);i.attachShader(p,w),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function P(C){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(w)||"",U=i.getShaderInfoLog(E)||"",O=R.trim(),j=L.trim(),q=U.trim(),B=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,w,E);else{let J=lg(i,w,"vertex"),ct=lg(i,E,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+J+`
`+ct)}else O!==""?$t("WebGLProgram: Program Info Log:",O):(j===""||q==="")&&($=!1);$&&(C.diagnostics={runnable:B,programLog:O,vertexShader:{log:j,prefix:x},fragmentShader:{log:q,prefix:m}})}i.deleteShader(w),i.deleteShader(E),g=new Lo(i,p),v=Zb(i,p)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(p,Bb)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zb++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}var a1=0,Xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jd(t),e.set(t,n)),n}},jd=class{constructor(t){this.id=a1++,this.code=t,this.usedTimes=0}};function l1(s){return s===Ws||s===Ga||s===Ha}function c1(s,t,e,n,i,r){let o=new Ma,a=new Xd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,v,T,C,R,L){let U=C.fog,O=R.geometry,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=t.get(g.envMap||j,q),$=d[g.type],J=n.precision;g.precision!==null&&(J=n.getMaxPrecision(g.precision),J!==g.precision&&$t("WebGLProgram.getParameters:",g.precision,"not supported, using",J,"instead."));let ct=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pt=ct!==void 0?ct.length:0,Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let At,Q,Mt,Ct;if($){let Ft=qi[$];At=Ft.vertexShader,Q=Ft.fragmentShader}else{At=g.vertexShader,Q=g.fragmentShader;let Ft=a.getVertexShaderStage(g),Me=a.getFragmentShaderStage(g);a.update(g,Ft,Me),Mt=Ft.id,Ct=Me.id}let zt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),jt=R.isInstancedMesh===!0,Qt=R.isBatchedMesh===!0,Vt=!!g.map,de=!!g.matcap,ne=!!B,te=ne&&B.isPMREMTexture===!0,pe=!!g.aoMap,Ae=!!g.lightMap,Ne=!!g.bumpMap&&g.wireframe===!1,ve=!!g.normalMap,Be=!!g.displacementMap,Re=!!g.emissiveMap,We=!!g.metalnessMap,qe=!!g.roughnessMap,Lt=g.anisotropy>0,F=g.clearcoat>0,Y=g.diffuseRoughness>0,ot=g.dispersion>0,ht=g.retroreflectivity>0,at=g.iridescence>0,Kt=g.sheen>0,It=g.transmission>0,Ht=Lt&&!!g.anisotropyMap,D=F&&!!g.clearcoatMap,y=F&&!!g.clearcoatNormalMap,H=F&&!!g.clearcoatRoughnessMap,_t=Y&&!!g.diffuseRoughnessMap,ft=at&&!!g.iridescenceMap,vt=at&&!!g.iridescenceThicknessMap,wt=Kt&&!!g.sheenColorMap,lt=Kt&&!!g.sheenRoughnessMap,ut=!!g.specularMap,Pt=!!g.specularColorMap,z=!!g.specularIntensityMap,dt=It&&!!g.transmissionMap,rt=It&&!!g.thicknessMap,St=!!g.gradientMap,xt=!!g.alphaMap,Rt=g.alphaTest>0,Gt=!!g.alphaHash,se=!!g.extensions,gt=li;g.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(gt=s.toneMapping);let qt=te?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,re={shaderID:$,shaderType:g.type,shaderName:g.name,vertexShader:At,fragmentShader:Q,defines:g.defines,customVertexShaderID:Mt,customFragmentShaderID:Ct,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:J,batching:Qt,batchingColor:Qt&&R._colorsTexture!==null,instancing:jt,instancingColor:jt&&R.instanceColor!==null,instancingMorph:jt&&R.morphTexture!==null,outputColorSpace:zt===null?s.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Vt,matcap:de,envMap:ne,envMapMode:ne&&B.mapping,envMapPMREM:te,envMapMaxLod:te?qt.length-1:null,envMapSize:te?qt[0].width:null,aoMap:pe,lightMap:Ae,bumpMap:Ne,normalMap:ve,displacementMap:Be,emissiveMap:Re,normalMapObjectSpace:ve&&g.normalMapType===Om,normalMapTangentSpace:ve&&g.normalMapType===Wa,packedNormalMap:ve&&g.normalMapType===Wa&&l1(g.normalMap.format),metalnessMap:We,roughnessMap:qe,anisotropy:Lt,anisotropyMap:Ht,clearcoat:F,clearcoatMap:D,clearcoatNormalMap:y,clearcoatRoughnessMap:H,diffuseRoughness:Y,diffuseRoughnessMap:_t,dispersion:ot,retroreflection:ht,iridescence:at,iridescenceMap:ft,iridescenceThicknessMap:vt,sheen:Kt,sheenColorMap:wt,sheenRoughnessMap:lt,specularMap:ut,specularColorMap:Pt,specularIntensityMap:z,transmission:It,transmissionMap:dt,thicknessMap:rt,gradientMap:St,opaque:g.transparent===!1&&g.blending===Po&&g.alphaToCoverage===!1,alphaMap:xt,alphaTest:Rt,alphaHash:Gt,combine:g.combine,mapUv:Vt&&f(g.map.channel),aoMapUv:pe&&f(g.aoMap.channel),lightMapUv:Ae&&f(g.lightMap.channel),bumpMapUv:Ne&&f(g.bumpMap.channel),normalMapUv:ve&&f(g.normalMap.channel),displacementMapUv:Be&&f(g.displacementMap.channel),emissiveMapUv:Re&&f(g.emissiveMap.channel),metalnessMapUv:We&&f(g.metalnessMap.channel),roughnessMapUv:qe&&f(g.roughnessMap.channel),anisotropyMapUv:Ht&&f(g.anisotropyMap.channel),clearcoatMapUv:D&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_t&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:ft&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:lt&&f(g.sheenRoughnessMap.channel),specularMapUv:ut&&f(g.specularMap.channel),specularColorMapUv:Pt&&f(g.specularColorMap.channel),specularIntensityMapUv:z&&f(g.specularIntensityMap.channel),transmissionMapUv:dt&&f(g.transmissionMap.channel),thicknessMapUv:rt&&f(g.thicknessMap.channel),alphaMapUv:xt&&f(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||Lt),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!O.attributes.uv&&(Vt||xt),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&ve===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Tt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Et,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:L.filter(Ft=>Ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,decodeVideoTexture:Vt&&g.map.isVideoTexture===!0&&_e.getTransfer(g.map.colorSpace)===Te,decodeVideoTextureEmissive:Re&&g.emissiveMap.isVideoTexture===!0&&_e.getTransfer(g.emissiveMap.colorSpace)===Te,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ji,flipSided:g.side===Rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:se&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&g.extensions.multiDraw===!0||Qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function x(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let T in g.defines)v.push(T),v.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(m(v,g),_(v,g),v.push(s.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function m(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function _(g,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function b(g){let v=d[g.type],T;if(v){let C=qi[v];T=Ym.clone(C.uniforms)}else T=g.uniforms;return T}function A(g,v){let T=h.get(v);return T!==void 0?++T.usedTimes:(T=new o1(s,v,g,i),c.push(T),h.set(v,T)),T}function w(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){a.remove(g)}function P(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:P}}function h1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function u1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function fg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pg(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,_){let b=s[t];return b===void 0?(b={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:_},s[t]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=p,b.materialVariant=o(d),b.groupOrder=x,b.renderOrder=d.renderOrder,b.z=m,b.group=_),t++,b}function l(d,f,p,x,m,_,b){b.reversedDepth===!0&&(m=-m);let A=a(d,f,p,x,m,_);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):e.push(A)}function c(d,f,p,x,m,_){let b=a(d,f,p,x,m,_);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function h(d,f){e.length>1&&e.sort(d||u1),n.length>1&&n.sort(f||fg),i.length>1&&i.sort(f||fg)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function d1(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new pg,s.set(n,[o])):i>=r.length?(o=new pg,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function f1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new it,color:new ce};break;case"SpotLight":e={position:new it,direction:new it,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new it,halfWidth:new it,halfHeight:new it};break}return s[t.id]=e,e}}}function p1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var m1=0;function g1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _1(s){let t=new f1,e=p1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new it);let i=new it,r=new ke,o=new ke;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,x=0,m=0,_=0,b=0,A=0,w=0,E=0,P=0,g=0,v=0,T=0,C=0;c.sort(g1);for(let L=0,U=c.length;L<U;L++){let O=c[L],j=O.color,q=O.intensity,B=O.distance,$=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ws?$=O.shadow.map.texture:$=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=j.r*q,u+=j.g*q,d+=j.b*q;else if(O.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(O.sh.coefficients[J],q);C++}else if(O.isSunLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ct=O.shadow,pt=e.get(O);pt.shadowIntensity=ct.intensity,pt.shadowBias=ct.bias,pt.shadowNormalBias=ct.normalBias,pt.shadowRadius=ct.radius,pt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[p]=pt,n.sunShadowMap[p]=$;let Et=ct.getViewportCount();for(let At=0;At<Et;At++)n.sunShadowMatrix[x+At]=ct.getMatrix(At),n.sunShadowCascade[x+At]=ct._cascadeData[At];x+=Et,p++}n.sun[f]=J,f++}else if(O.isDirectionalLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ct=O.shadow,pt=e.get(O);pt.shadowIntensity=ct.intensity,pt.shadowBias=ct.bias,pt.shadowNormalBias=ct.normalBias,pt.shadowRadius=ct.radius,pt.shadowMapSize=ct.mapSize,n.directionalShadow[m]=pt,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=O.shadow.matrix,E++}n.directional[m]=J,m++}else if(O.isSpotLight){let J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(j).multiplyScalar(q),J.distance=B,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,n.spot[b]=J;let ct=O.shadow;if(O.map&&(n.spotLightMap[v]=O.map,v++,ct.updateMatrices(O),O.castShadow&&T++),n.spotLightMatrix[b]=ct.matrix,O.castShadow){let pt=e.get(O);pt.shadowIntensity=ct.intensity,pt.shadowBias=ct.bias,pt.shadowNormalBias=ct.normalBias,pt.shadowRadius=ct.radius,pt.shadowMapSize=ct.mapSize,n.spotShadow[b]=pt,n.spotShadowMap[b]=$,g++}b++}else if(O.isRectAreaLight){let J=t.get(O);J.color.copy(j).multiplyScalar(q),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=J,A++}else if(O.isPointLight){let J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity),J.distance=O.distance,J.decay=O.decay,O.castShadow){let ct=O.shadow,pt=e.get(O);pt.shadowIntensity=ct.intensity,pt.shadowBias=ct.bias,pt.shadowNormalBias=ct.normalBias,pt.shadowRadius=ct.radius,pt.shadowMapSize=ct.mapSize,pt.shadowCameraNear=ct.camera.near,pt.shadowCameraFar=ct.camera.far,n.pointShadow[_]=pt,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=O.shadow.matrix,P++}n.point[_]=J,_++}else if(O.isHemisphereLight){let J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(q),J.groundColor.copy(O.groundColor).multiplyScalar(q),n.hemi[w]=J,w++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==_||R.spotLength!==b||R.rectAreaLength!==A||R.hemiLength!==w||R.numSunShadows!==p||R.numDirectionalShadows!==E||R.numPointShadows!==P||R.numSpotShadows!==g||R.numSpotMaps!==v||R.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=A,n.point.length=_,n.hemi.length=w,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=P,n.pointShadowMap.length=P,n.pointShadowMatrix.length=P,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,R.sunLength=f,R.directionalLength=m,R.pointLength=_,R.spotLength=b,R.rectAreaLength=A,R.hemiLength=w,R.numSunShadows=p,R.numDirectionalShadows=E,R.numPointShadows=P,R.numSpotShadows=g,R.numSpotMaps=v,R.numLightProbes=C,n.version=m1++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,_=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let w=c[b];if(w.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(_),u++}else if(w.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(_),d++}else if(w.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(_),p++}else if(w.isRectAreaLight){let E=n.rectArea[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(_),o.identity(),r.copy(w.matrixWorld),r.premultiply(_),o.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(_),f++}else if(w.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:n}}function mg(s){let t=new _1(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function x1(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new mg(s),t.set(i,[a])):r>=o.length?(a=new mg(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
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
}`,S1=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],b1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],gg=new ke,ja=new it,zd=new it;function M1(s,t,e){let n=new Us,i=new xe,r=new xe,o=new Ue,a=new _c,l=new xc,c={},h=e.maxTextureSize,u={[Hs]:Rn,[Rn]:Hs,[ji]:ji},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:v1,fragmentShader:y1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ks;p.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let _=this.type;this.render=function(P,g,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===hm&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);let T=s.getRenderTarget(),C=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(vr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=_!==this.type;U&&g.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(j=>j.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,j=P.length;O<j;O++){let q=P[O],B=q.shadow;if(B===void 0){$t("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let $=B.getFrameExtents();i.multiply($),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,B.mapSize.y=r.y));let J=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=J,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ro){if(q.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Yn(i.x,i.y,{format:Ws,type:Ti,minFilter:mn,magFilter:mn,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new ps(i.x,i.y,wi),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=fs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln}else q.isPointLight?(B.map=new qa(i.x),B.map.depthTexture=new Aa(i.x,Mi)):(B.map=new Yn(i.x,i.y),B.map.depthTexture=new ps(i.x,i.y,Mi)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=fs,this.type===xr?(B.map.depthTexture.compareFunction=J?Pd:Rd,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let ct=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();q.isPointLight!==!0&&B.updateMatrices(q,v);let pt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:v.layers;for(let Et=0;Et<ct;Et++){let At=B.getCamera(Et);if(q.isPointLight){let Q=B.camera,Mt=B.matrix,Ct=q.distance||Q.far;Ct!==Q.far&&(Q.far=Ct,Q.updateProjectionMatrix()),ja.setFromMatrixPosition(q.matrixWorld),Q.position.copy(ja),zd.copy(Q.position),zd.add(S1[Et]),Q.up.copy(b1[Et]),Q.lookAt(zd),Q.updateMatrixWorld(),Mt.makeTranslation(-ja.x,-ja.y,-ja.z),gg.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(gg,Q.coordinateSystem,Q.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Et),s.clear();else{Et===0&&(s.setRenderTarget(B.map),s.clear());let Q=B.getViewport(Et);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o)}n=B.getFrustum(Et),w(g,v,At,q,pt,this.type)}B.isPointLightShadow!==!0&&this.type===Ro&&b(B,v),B.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(T,C,R)};function b(P,g){let v=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null?P.mapPass=new Yn(i.x,i.y,{format:Ws,type:Ti}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value.set(P.map.width,P.map.height),d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(g,null,v,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value.set(P.map.width,P.map.height),f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(g,null,v,f,x,null)}function A(P,g,v,T){let C=null,R=v.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)C=R;else if(C=v.isPointLight===!0?l:a,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let L=C.uuid,U=g.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let j=O[U];j===void 0&&(j=C.clone(),O[U]=j,g.addEventListener("dispose",E)),C=j}if(C.visible=g.visible,C.wireframe=g.wireframe,T===Ro?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:u[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=s.properties.get(C);L.light=v}return C}function w(P,g,v,T,C,R){if(P.visible===!1)return;if(P.layers.test(C)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Ro)&&(!P.frustumCulled||P.intersectsFrustum(n))){P.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,P.matrixWorld);let O=t.update(P),j=P.material;if(Array.isArray(j)){let q=O.groups;for(let B=0,$=q.length;B<$;B++){let J=q[B],ct=j[J.materialIndex];if(ct&&ct.visible){let pt=A(P,ct,T,R);P.onBeforeShadow(s,P,g,v,O,pt,J),s.renderBufferDirect(v,null,O,pt,P,J),P.onAfterShadow(s,P,g,v,O,pt,J)}}}else if(j.visible){let q=A(P,j,T,R);P.onBeforeShadow(s,P,g,v,O,q,null),s.renderBufferDirect(v,null,O,q,P,null),P.onAfterShadow(s,P,g,v,O,q,null)}}let U=P.children;for(let O=0,j=U.length;O<j;O++)w(U[O],g,v,T,C,R)}function E(P){P.target.removeEventListener("dispose",E);for(let v in c){let T=c[v],C=P.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function w1(s,t){function e(){let z=!1,dt=new Ue,rt=null,St=new Ue(0,0,0,0);return{setMask:function(xt){rt!==xt&&!z&&(s.colorMask(xt,xt,xt,xt),rt=xt)},setLocked:function(xt){z=xt},setClear:function(xt,Rt,Gt,se,gt){gt===!0&&(xt*=se,Rt*=se,Gt*=se),dt.set(xt,Rt,Gt,se),St.equals(dt)===!1&&(s.clearColor(xt,Rt,Gt,se),St.copy(dt))},reset:function(){z=!1,rt=null,St.set(-1,0,0,0)}}}function n(){let z=!1,dt=!1,rt=null,St=null,xt=null;return{setReversed:function(Rt){if(dt!==Rt){let Gt=t.get("EXT_clip_control");Rt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),dt=Rt;let se=xt;xt=null,this.setClear(se)}},getReversed:function(){return dt},setTest:function(Rt){Rt?Tt(s.DEPTH_TEST):jt(s.DEPTH_TEST)},setMask:function(Rt){rt!==Rt&&!z&&(s.depthMask(Rt),rt=Rt)},setFunc:function(Rt){if(dt&&(Rt=Wm[Rt]),St!==Rt){switch(Rt){case Ql:s.depthFunc(s.NEVER);break;case tc:s.depthFunc(s.ALWAYS);break;case ec:s.depthFunc(s.LESS);break;case So:s.depthFunc(s.LEQUAL);break;case nc:s.depthFunc(s.EQUAL);break;case ic:s.depthFunc(s.GEQUAL);break;case sc:s.depthFunc(s.GREATER);break;case rc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=Rt}},setLocked:function(Rt){z=Rt},setClear:function(Rt){xt!==Rt&&(xt=Rt,dt&&(Rt=1-Rt),s.clearDepth(Rt))},reset:function(){z=!1,rt=null,St=null,xt=null,dt=!1}}}function i(){let z=!1,dt=null,rt=null,St=null,xt=null,Rt=null,Gt=null,se=null,gt=null;return{setTest:function(qt){z||(qt?Tt(s.STENCIL_TEST):jt(s.STENCIL_TEST))},setMask:function(qt){dt!==qt&&!z&&(s.stencilMask(qt),dt=qt)},setFunc:function(qt,re,Ft){(rt!==qt||St!==re||xt!==Ft)&&(s.stencilFunc(qt,re,Ft),rt=qt,St=re,xt=Ft)},setOp:function(qt,re,Ft){(Rt!==qt||Gt!==re||se!==Ft)&&(s.stencilOp(qt,re,Ft),Rt=qt,Gt=re,se=Ft)},setLocked:function(qt){z=qt},setClear:function(qt){gt!==qt&&(s.clearStencil(qt),gt=qt)},reset:function(){z=!1,dt=null,rt=null,St=null,xt=null,Rt=null,Gt=null,se=null,gt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,_=null,b=null,A=null,w=null,E=null,P=null,g=null,v=new ce(0,0,0),T=0,C=!1,R=null,L=null,U=null,O=null,j=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=$>=2);let ct=null,pt={},Et=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Q=new Ue().fromArray(Et),Mt=new Ue().fromArray(At);function Ct(z,dt,rt,St){let xt=new Uint8Array(4),Rt=s.createTexture();s.bindTexture(z,Rt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<rt;Gt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(dt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Rt}let zt={};zt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),zt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),zt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Tt(s.DEPTH_TEST),o.setFunc(So),Ne(!1),ve(ld),Tt(s.CULL_FACE),pe(vr);function Tt(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function jt(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function Qt(z,dt){return d[z]!==dt?(s.bindFramebuffer(z,dt),d[z]=dt,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=dt),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Vt(z,dt){let rt=p,St=!1;if(z){rt=f.get(dt),rt===void 0&&(rt=[],f.set(dt,rt));let xt=z.textures;if(rt.length!==xt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Rt=0,Gt=xt.length;Rt<Gt;Rt++)rt[Rt]=s.COLOR_ATTACHMENT0+Rt;rt.length=xt.length,St=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,St=!0);St&&s.drawBuffers(rt)}function de(z){return x!==z?(s.useProgram(z),x=z,!0):!1}let ne={[yr]:s.FUNC_ADD,[dm]:s.FUNC_SUBTRACT,[fm]:s.FUNC_REVERSE_SUBTRACT};ne[pm]=s.MIN,ne[mm]=s.MAX;let te={[gm]:s.ZERO,[_m]:s.ONE,[xm]:s.SRC_COLOR,[dd]:s.SRC_ALPHA,[wm]:s.SRC_ALPHA_SATURATE,[bm]:s.DST_COLOR,[ym]:s.DST_ALPHA,[vm]:s.ONE_MINUS_SRC_COLOR,[fd]:s.ONE_MINUS_SRC_ALPHA,[Mm]:s.ONE_MINUS_DST_COLOR,[Sm]:s.ONE_MINUS_DST_ALPHA,[Tm]:s.CONSTANT_COLOR,[Cm]:s.ONE_MINUS_CONSTANT_COLOR,[Em]:s.CONSTANT_ALPHA,[Am]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(z,dt,rt,St,xt,Rt,Gt,se,gt,qt){if(z===vr){m===!0&&(jt(s.BLEND),m=!1);return}if(m===!1&&(Tt(s.BLEND),m=!0),z!==um){if(z!==_||qt!==C){if((b!==yr||E!==yr)&&(s.blendEquation(s.FUNC_ADD),b=yr,E=yr),qt)switch(z){case Po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cd:s.blendFunc(s.ONE,s.ONE);break;case hd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ud:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",z);break}else switch(z){case Po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hd:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ud:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",z);break}A=null,w=null,P=null,g=null,v.set(0,0,0),T=0,_=z,C=qt}return}xt=xt||dt,Rt=Rt||rt,Gt=Gt||St,(dt!==b||xt!==E)&&(s.blendEquationSeparate(ne[dt],ne[xt]),b=dt,E=xt),(rt!==A||St!==w||Rt!==P||Gt!==g)&&(s.blendFuncSeparate(te[rt],te[St],te[Rt],te[Gt]),A=rt,w=St,P=Rt,g=Gt),(se.equals(v)===!1||gt!==T)&&(s.blendColor(se.r,se.g,se.b,gt),v.copy(se),T=gt),_=z,C=!1}function Ae(z,dt){z.side===ji?jt(s.CULL_FACE):Tt(s.CULL_FACE);let rt=z.side===Rn;dt&&(rt=!rt),Ne(rt),z.blending===Po&&z.transparent===!1?pe(vr):pe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let St=z.stencilWrite;a.setTest(St),St&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):jt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(z){R!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),R=z)}function ve(z){z!==lm?(Tt(s.CULL_FACE),z!==L&&(z===ld?s.cullFace(s.BACK):z===cm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):jt(s.CULL_FACE),L=z}function Be(z){z!==U&&(B&&s.lineWidth(z),U=z)}function Re(z,dt,rt){z?(Tt(s.POLYGON_OFFSET_FILL),(O!==dt||j!==rt)&&(O=dt,j=rt,o.getReversed()&&(dt=-dt,rt=-rt),s.polygonOffset(dt,rt))):jt(s.POLYGON_OFFSET_FILL)}function We(z){z?Tt(s.SCISSOR_TEST):jt(s.SCISSOR_TEST)}function qe(z){z===void 0&&(z=s.TEXTURE0+q-1),ct!==z&&(s.activeTexture(z),ct=z)}function Lt(z,dt,rt){rt===void 0&&(ct===null?rt=s.TEXTURE0+q-1:rt=ct);let St=pt[rt];St===void 0&&(St={type:void 0,texture:void 0},pt[rt]=St),(St.type!==z||St.texture!==dt)&&(ct!==rt&&(s.activeTexture(rt),ct=rt),s.bindTexture(z,dt||zt[z]),St.type=z,St.texture=dt)}function F(){let z=pt[ct];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{s.compressedTexImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function ht(){try{s.texSubImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function at(){try{s.texSubImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function Kt(){try{s.compressedTexSubImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function Ht(){try{s.texStorage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function D(){try{s.texStorage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function y(){try{s.texImage2D(...arguments)}catch(z){ee("WebGLState:",z)}}function H(){try{s.texImage3D(...arguments)}catch(z){ee("WebGLState:",z)}}function _t(z){return u[z]!==void 0?u[z]:s.getParameter(z)}function ft(z,dt){u[z]!==dt&&(s.pixelStorei(z,dt),u[z]=dt)}function vt(z){Q.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Q.copy(z))}function wt(z){Mt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Mt.copy(z))}function lt(z,dt){let rt=c.get(dt);rt===void 0&&(rt=new WeakMap,c.set(dt,rt));let St=rt.get(z);St===void 0&&(St=s.getUniformBlockIndex(dt,z.name),s.uniformBlockBinding(dt,St,St),rt.set(z,St))}function ut(z,dt,rt){let xt=c.get(dt).get(z);l[xt]!==rt&&(s.bindBufferBase(s.UNIFORM_BUFFER,xt,rt),l[xt]=rt)}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},ct=null,pt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,_=null,b=null,A=null,w=null,E=null,P=null,g=null,v=new ce(0,0,0),T=0,C=!1,R=null,L=null,U=null,O=null,j=null,Q.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Tt,disable:jt,bindFramebuffer:Qt,drawBuffers:Vt,useProgram:de,setBlending:pe,setMaterial:Ae,setFlipSided:Ne,setCullFace:ve,setLineWidth:Be,setPolygonOffset:Re,setScissorTest:We,activeTexture:qe,bindTexture:Lt,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:ot,texImage2D:y,texImage3D:H,pixelStorei:ft,getParameter:_t,updateUBOMapping:lt,uniformBlockBinding:ut,texStorage2D:Ht,texStorage3D:D,texSubImage2D:ht,texSubImage3D:at,compressedTexSubImage2D:Kt,compressedTexSubImage3D:It,scissor:vt,viewport:wt,reset:Pt}}function T1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(D=>p.delete(D)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,y){return m?new OffscreenCanvas(D,y):Sa("canvas")}function b(D,y,H){let _t=1,ft=Ht(D);if((ft.width>H||ft.height>H)&&(_t=H/Math.max(ft.width,ft.height)),_t<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let vt=Math.floor(_t*ft.width),wt=Math.floor(_t*ft.height);d===void 0&&(d=_(vt,wt));let lt=y?_(vt,wt):d;return lt.width=vt,lt.height=wt,lt.getContext("2d").drawImage(D,0,0,vt,wt),$t("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+vt+"x"+wt+")."),lt}else return"data"in D&&$t("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),D;return D}function A(D){return D.generateMipmaps}function w(D){s.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,y,H,_t,ft,vt=!1){if(D!==null){if(s[D]!==void 0)return s[D];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let wt;_t&&(wt=t.get("EXT_texture_norm16"),wt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=y;if(y===s.RED&&(H===s.FLOAT&&(lt=s.R32F),H===s.HALF_FLOAT&&(lt=s.R16F),H===s.UNSIGNED_BYTE&&(lt=s.R8),H===s.UNSIGNED_SHORT&&wt&&(lt=wt.R16_EXT),H===s.SHORT&&wt&&(lt=wt.R16_SNORM_EXT)),y===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(lt=s.R8UI),H===s.UNSIGNED_SHORT&&(lt=s.R16UI),H===s.UNSIGNED_INT&&(lt=s.R32UI),H===s.BYTE&&(lt=s.R8I),H===s.SHORT&&(lt=s.R16I),H===s.INT&&(lt=s.R32I)),y===s.RG&&(H===s.FLOAT&&(lt=s.RG32F),H===s.HALF_FLOAT&&(lt=s.RG16F),H===s.UNSIGNED_BYTE&&(lt=s.RG8),H===s.UNSIGNED_SHORT&&wt&&(lt=wt.RG16_EXT),H===s.SHORT&&wt&&(lt=wt.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(lt=s.RG8UI),H===s.UNSIGNED_SHORT&&(lt=s.RG16UI),H===s.UNSIGNED_INT&&(lt=s.RG32UI),H===s.BYTE&&(lt=s.RG8I),H===s.SHORT&&(lt=s.RG16I),H===s.INT&&(lt=s.RG32I)),y===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),H===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),H===s.UNSIGNED_INT&&(lt=s.RGB32UI),H===s.BYTE&&(lt=s.RGB8I),H===s.SHORT&&(lt=s.RGB16I),H===s.INT&&(lt=s.RGB32I)),y===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),H===s.UNSIGNED_INT&&(lt=s.RGBA32UI),H===s.BYTE&&(lt=s.RGBA8I),H===s.SHORT&&(lt=s.RGBA16I),H===s.INT&&(lt=s.RGBA32I)),y===s.RGB&&(H===s.UNSIGNED_SHORT&&wt&&(lt=wt.RGB16_EXT),H===s.SHORT&&wt&&(lt=wt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(lt=s.R11F_G11F_B10F)),y===s.RGBA){let ut=vt?ya:_e.getTransfer(ft);H===s.FLOAT&&(lt=s.RGBA32F),H===s.HALF_FLOAT&&(lt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(lt=ut===Te?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&wt&&(lt=wt.RGBA16_EXT),H===s.SHORT&&wt&&(lt=wt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function g(D,y){let H;return D?y===null||y===Mi||y===br?H=s.DEPTH24_STENCIL8:y===wi?H=s.DEPTH32F_STENCIL8:y===Oo&&(H=s.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===br?H=s.DEPTH_COMPONENT24:y===wi?H=s.DEPTH_COMPONENT32F:y===Oo&&(H=s.DEPTH_COMPONENT16),H}function v(D,y){return A(D)===!0||D.isFramebufferTexture&&D.minFilter!==ln&&D.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function T(D){let y=new WeakRef(D);n.get(D).__ref=y,p.add(y),x.register(D,y,y)}function C(D){let y=n.get(D).__ref;y!==void 0&&(p.delete(y),x.unregister(y))}function R(D){U(D.target)}function L(D){O(D.target)}function U(D){D.removeEventListener("dispose",R),C(D),q(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&u.delete(D)}function O(D){D.removeEventListener("dispose",L),C(D),$(D)}function j(){for(let D of p){let y=D.deref();y!==void 0&&(y.isRenderTarget===!0?O(y):U(y))}p.clear(),u.clear()}function q(D){let y=n.get(D);if(y.__webglInit===void 0)return;let H=D.source,_t=f.get(H);if(_t){let ft=_t[y.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&B(D),Object.keys(_t).length===0&&f.delete(H)}n.remove(D)}function B(D){let y=n.get(D);s.deleteTexture(y.__webglTexture);let H=D.source,_t=f.get(H);delete _t[y.__cacheKey],o.memory.textures--}function $(D){let y=n.get(D);y.__depthDisposeCallback&&y.__depthDisposeCallback();let H=D.depthTexture;if(H&&H.renderTarget===D&&U(H),D.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(y.__webglFramebuffer[ft]))for(let vt=0;vt<y.__webglFramebuffer[ft].length;vt++)s.deleteFramebuffer(y.__webglFramebuffer[ft][vt]);else s.deleteFramebuffer(y.__webglFramebuffer[ft]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ft])}else{if(Array.isArray(y.__webglFramebuffer))for(let ft=0;ft<y.__webglFramebuffer.length;ft++)s.deleteFramebuffer(y.__webglFramebuffer[ft]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ft=0;ft<y.__webglColorRenderbuffer.length;ft++)y.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ft]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let _t=D.textures;for(let ft=0,vt=_t.length;ft<vt;ft++){let wt=n.get(_t[ft]);wt.__webglTexture&&(s.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(_t[ft])}n.remove(D)}let J=0;function ct(){J=0}function pt(){return J}function Et(D){J=D}function At(){let D=J;return D>=i.maxTextures&&$t("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),J+=1,D}function Q(D){let y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.mipmapsAutoUpdate),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function Mt(D,y){let H=n.get(D);if(D.isVideoTexture&&Kt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){let _t=D.image;if(_t===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(H,D,y);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+y)}function Ct(D,y){let H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Ae(H,D,y);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+y)}function zt(D,y){let H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){Ae(H,D,y);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+y)}function Tt(D,y){let H=n.get(D);if(D.version>0&&H.__version!==D.version){Ne(H,D,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+y)}let jt={[oc]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[ac]:s.MIRRORED_REPEAT},Qt={[ln]:s.NEAREST,[Dm]:s.NEAREST_MIPMAP_NEAREST,[ka]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[Oc]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},Vt={[Fm]:s.NEVER,[Dd]:s.ALWAYS,[Nm]:s.LESS,[Rd]:s.LEQUAL,[km]:s.EQUAL,[Pd]:s.GEQUAL,[Um]:s.GREATER,[Bm]:s.NOTEQUAL};function de(D,y){if(y.type===wi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Oc||y.magFilter===ka||y.magFilter===bi||y.minFilter===mn||y.minFilter===Oc||y.minFilter===ka||y.minFilter===bi)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,jt[y.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,jt[y.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,jt[y.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Qt[y.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Qt[y.minFilter]),y.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==ka&&y.minFilter!==bi||y.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ne(D,y){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",R),T(y));let _t=y.source,ft=f.get(_t);ft===void 0&&(ft={},f.set(_t,ft));let vt=Q(y);if(vt!==D.__cacheKey){ft[vt]===void 0&&(ft[vt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ft[vt].usedTimes++;let wt=ft[D.__cacheKey];wt!==void 0&&(ft[D.__cacheKey].usedTimes--,wt.usedTimes===0&&B(y)),D.__cacheKey=vt,D.__webglTexture=ft[vt].texture}return H}function te(D,y,H){return Math.floor(Math.floor(D/H)/y)}function pe(D,y,H,_t){let vt=D.updateRanges;if(vt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,H,_t,y.data);else{vt.sort((z,dt)=>z.start-dt.start);let wt=0;for(let z=1;z<vt.length;z++){let dt=vt[wt],rt=vt[z],St=dt.start+dt.count,xt=te(rt.start,y.width,4),Rt=te(dt.start,y.width,4);rt.start<=St+1&&xt===Rt&&te(rt.start+rt.count-1,y.width,4)===xt?dt.count=Math.max(dt.count,rt.start+rt.count-dt.start):(++wt,vt[wt]=rt)}vt.length=wt+1;let lt=e.getParameter(s.UNPACK_ROW_LENGTH),ut=e.getParameter(s.UNPACK_SKIP_PIXELS),Pt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let z=0,dt=vt.length;z<dt;z++){let rt=vt[z],St=Math.floor(rt.start/4),xt=Math.ceil(rt.count/4),Rt=St%y.width,Gt=Math.floor(St/y.width),se=xt,gt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(s.TEXTURE_2D,0,Rt,Gt,se,gt,H,_t,y.data)}D.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,lt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function Ae(D,y,H){let _t=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(_t=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(_t=s.TEXTURE_3D);let ft=ne(D,y),vt=y.source;e.bindTexture(_t,D.__webglTexture,s.TEXTURE0+H);let wt=n.get(vt);if(vt.version!==wt.__version||ft===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let gt=_e.getPrimaries(_e.workingColorSpace),qt=y.colorSpace===gs?null:_e.getPrimaries(y.colorSpace),re=y.colorSpace===gs||gt===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ut=b(y.image,!1,i.maxTextureSize);ut=It(y,ut);let Pt=r.convert(y.format,y.colorSpace),z=r.convert(y.type),dt=P(y.internalFormat,Pt,z,y.normalized,y.colorSpace,y.isVideoTexture);de(_t,y);let rt,St=y.mipmaps,xt=y.isVideoTexture!==!0,Rt=wt.__version===void 0||ft===!0,Gt=vt.dataReady,se=v(y,ut);if(y.isDepthTexture)dt=g(y.format===ms,y.type),Rt&&(xt?e.texStorage2D(s.TEXTURE_2D,1,dt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,dt,ut.width,ut.height,0,Pt,z,null));else if(y.isDataTexture)if(St.length>0){xt&&Rt&&e.texStorage2D(s.TEXTURE_2D,se,dt,St[0].width,St[0].height);for(let gt=0,qt=St.length;gt<qt;gt++)rt=St[gt],xt?Gt&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,rt.width,rt.height,Pt,z,rt.data):e.texImage2D(s.TEXTURE_2D,gt,dt,rt.width,rt.height,0,Pt,z,rt.data);y.generateMipmaps=!1}else xt?(Rt&&e.texStorage2D(s.TEXTURE_2D,se,dt,ut.width,ut.height),Gt&&pe(y,ut,Pt,z)):e.texImage2D(s.TEXTURE_2D,0,dt,ut.width,ut.height,0,Pt,z,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){xt&&Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,se,dt,St[0].width,St[0].height,ut.depth);for(let gt=0,qt=St.length;gt<qt;gt++)if(rt=St[gt],y.format!==Ci)if(Pt!==null)if(xt){if(Gt)if(y.layerUpdates.size>0){let re=Ud(rt.width,rt.height,y.format,y.type);for(let Ft of y.layerUpdates){let Me=rt.data.subarray(Ft*re/rt.data.BYTES_PER_ELEMENT,(Ft+1)*re/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,Ft,rt.width,rt.height,1,Pt,Me)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,rt.width,rt.height,ut.depth,Pt,rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,dt,rt.width,rt.height,ut.depth,0,rt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?Gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,rt.width,rt.height,ut.depth,Pt,z,rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,dt,rt.width,rt.height,ut.depth,0,Pt,z,rt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{xt&&Rt&&e.texStorage2D(s.TEXTURE_2D,se,dt,St[0].width,St[0].height);for(let gt=0,qt=St.length;gt<qt;gt++)rt=St[gt],y.format!==Ci?Pt!==null?xt?Gt&&e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,rt.width,rt.height,Pt,rt.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,dt,rt.width,rt.height,0,rt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?Gt&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,rt.width,rt.height,Pt,z,rt.data):e.texImage2D(s.TEXTURE_2D,gt,dt,rt.width,rt.height,0,Pt,z,rt.data)}else if(y.isDataArrayTexture)if(xt){if(Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,se,dt,ut.width,ut.height,ut.depth),Gt)if(y.layerUpdates.size>0){let gt=Ud(ut.width,ut.height,y.format,y.type);for(let qt of y.layerUpdates){let re=ut.data.subarray(qt*gt/ut.data.BYTES_PER_ELEMENT,(qt+1)*gt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qt,ut.width,ut.height,1,Pt,z,re)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Pt,z,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,ut.width,ut.height,ut.depth,0,Pt,z,ut.data);else if(y.isData3DTexture)xt?(Rt&&e.texStorage3D(s.TEXTURE_3D,se,dt,ut.width,ut.height,ut.depth),Gt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Pt,z,ut.data)):e.texImage3D(s.TEXTURE_3D,0,dt,ut.width,ut.height,ut.depth,0,Pt,z,ut.data);else if(y.isFramebufferTexture){if(Rt)if(xt)e.texStorage2D(s.TEXTURE_2D,se,dt,ut.width,ut.height);else{let gt=ut.width,qt=ut.height;for(let re=0;re<se;re++)e.texImage2D(s.TEXTURE_2D,re,dt,gt,qt,0,Pt,z,null),gt>>=1,qt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let gt=s.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),ut.parentNode!==gt){gt.appendChild(ut),u.add(y),gt.onpaint=qt=>{let re=qt.changedElements;for(let Ft of u)re.includes(Ft.image)&&(Ft.needsUpdate=!0)},gt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ut);else{let re=s.RGBA,Ft=s.RGBA,Me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,re,Ft,Me,ut)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(St.length>0){if(xt&&Rt){let gt=Ht(St[0]);e.texStorage2D(s.TEXTURE_2D,se,dt,gt.width,gt.height)}for(let gt=0,qt=St.length;gt<qt;gt++)rt=St[gt],xt?Gt&&e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Pt,z,rt):e.texImage2D(s.TEXTURE_2D,gt,dt,Pt,z,rt);y.generateMipmaps=!1}else if(xt){if(Rt){let gt=Ht(ut);e.texStorage2D(s.TEXTURE_2D,se,dt,gt.width,gt.height)}Gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,z,ut)}else e.texImage2D(s.TEXTURE_2D,0,dt,Pt,z,ut);A(y)&&y.mipmapsAutoUpdate===!0&&w(_t),wt.__version=vt.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function Ne(D,y,H){if(y.image.length!==6)return;let _t=ne(D,y),ft=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);let vt=n.get(ft);if(ft.version!==vt.__version||_t===!0){e.activeTexture(s.TEXTURE0+H);let wt=_e.getPrimaries(_e.workingColorSpace),lt=y.colorSpace===gs?null:_e.getPrimaries(y.colorSpace),ut=y.colorSpace===gs||wt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,z=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let Ft=0;Ft<6;Ft++)!Pt&&!z?dt[Ft]=b(y.image[Ft],!0,i.maxCubemapSize):dt[Ft]=z?y.image[Ft].image:y.image[Ft],dt[Ft]=It(y,dt[Ft]);let rt=dt[0],St=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),Rt=P(y.internalFormat,St,xt,y.normalized,y.colorSpace),Gt=y.isVideoTexture!==!0,se=vt.__version===void 0||_t===!0,gt=ft.dataReady,qt=v(y,rt);de(s.TEXTURE_CUBE_MAP,y);let re;if(y.isDepthTexture){if(Rt=g(y.format===ms,y.type),se)if(Gt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Rt,rt.width,rt.height);else for(let Ft=0;Ft<6;Ft++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,rt.width,rt.height,0,St,xt,null)}else if(Pt){Gt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,Rt,rt.width,rt.height);for(let Ft=0;Ft<6;Ft++){re=dt[Ft].mipmaps;for(let Me=0;Me<re.length;Me++){let Xe=re[Me];y.format!==Ci?St!==null?Gt?gt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me,0,0,Xe.width,Xe.height,St,Xe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me,Rt,Xe.width,Xe.height,0,Xe.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me,0,0,Xe.width,Xe.height,St,xt,Xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me,Rt,Xe.width,Xe.height,0,St,xt,Xe.data)}}}else{if(re=y.mipmaps,Gt&&se){re.length>0&&qt++;let Ft=Ht(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,qt,Rt,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(z){Gt?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,dt[Ft].width,dt[Ft].height,St,xt,dt[Ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,dt[Ft].width,dt[Ft].height,0,St,xt,dt[Ft].data);for(let Me=0;Me<re.length;Me++){let rn=re[Me].image[Ft].image;Gt?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me+1,0,0,rn.width,rn.height,St,xt,rn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me+1,Rt,rn.width,rn.height,0,St,xt,rn.data)}}else{Gt?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,St,xt,dt[Ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Rt,St,xt,dt[Ft]);for(let Me=0;Me<re.length;Me++){let Xe=re[Me];Gt?gt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me+1,0,0,St,xt,Xe.image[Ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Me+1,Rt,St,xt,Xe.image[Ft])}}}A(y)&&y.mipmapsAutoUpdate===!0&&w(s.TEXTURE_CUBE_MAP),vt.__version=ft.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ve(D,y,H,_t,ft,vt){let wt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),ut=P(H.internalFormat,wt,lt,H.normalized,H.colorSpace),Pt=n.get(y),z=n.get(H);if(z.__renderTarget=y,!Pt.__hasExternalTextures){let dt=Math.max(1,y.width>>vt),rt=Math.max(1,y.height>>vt);ft===s.TEXTURE_3D||ft===s.TEXTURE_2D_ARRAY?e.texImage3D(ft,vt,ut,dt,rt,y.depth,0,wt,lt,null):e.texImage2D(ft,vt,ut,dt,rt,0,wt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),at(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,ft,z.__webglTexture,0,ht(y)):(ft===s.TEXTURE_2D||ft>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_t,ft,z.__webglTexture,vt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(D,y,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),y.depthBuffer){let _t=y.depthTexture,ft=_t&&_t.isDepthTexture?_t.type:null,vt=g(y.stencilBuffer,ft),wt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;at(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(y),vt,y.width,y.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(y),vt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,vt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,D)}else{let _t=y.textures;for(let ft=0;ft<_t.length;ft++){let vt=_t[ft],wt=r.convert(vt.format,vt.colorSpace),lt=r.convert(vt.type),ut=P(vt.internalFormat,wt,lt,vt.normalized,vt.colorSpace);at(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht(y),ut,y.width,y.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht(y),ut,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ut,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(D,y,H){let _t=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(y.depthTexture);ft.__renderTarget=y;let vt=_t?y.depthTexture.image[0]:y.depthTexture.image;(!ft.__webglTexture||vt.width!==y.width||vt.height!==y.height)&&(vt.width=y.width,vt.height=y.height,y.depthTexture.needsUpdate=!0),_t?Tt(y.depthTexture,0):Mt(y.depthTexture,0);let wt=ft.__webglTexture,lt=ht(y),ut=_t?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,Pt=y.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===fs)at(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pt,ut,wt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,Pt,ut,wt,0);else if(y.depthTexture.format===ms)at(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pt,ut,wt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,Pt,ut,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(D){let y=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){let _t=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),_t){let ft=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,_t.removeEventListener("dispose",ft)};_t.addEventListener("dispose",ft),y.__depthDisposeCallback=ft}y.__boundDepthTexture=_t}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let _t=0;_t<6;_t++)Re(y.__webglFramebuffer[_t],D,_t);else D.texture.mipmaps.length>0?Re(y.__webglFramebuffer[0],D,0):Re(y.__webglFramebuffer,D,0);else if(H){y.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[_t]),y.__webglDepthbuffer[_t]===void 0)y.__webglDepthbuffer[_t]=s.createRenderbuffer(),Be(y.__webglDepthbuffer[_t],D,!1);else{let ft=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=y.__webglDepthbuffer[_t];s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,vt)}}else if(D.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Be(y.__webglDepthbuffer,D,!1);else{let ft=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,vt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(D,y,H){let _t=n.get(D);y!==void 0&&ve(_t.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&We(D)}function Lt(D){let y=D.texture,H=n.get(D),_t=n.get(y);D.addEventListener("dispose",L),T(D);let ft=D.textures,vt=D.isWebGLCubeRenderTarget===!0,wt=ft.length>1;if(wt||(_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture()),_t.__version=y.version,o.memory.textures++),vt){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let ut=0;ut<y.mipmaps.length;ut++)H.__webglFramebuffer[lt][ut]=s.createFramebuffer()}else H.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(y.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)H.__webglFramebuffer[lt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(wt)for(let lt=0,ut=ft.length;lt<ut;lt++){let Pt=n.get(ft[lt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&at(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<ft.length;lt++){let ut=ft[lt];H.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);let Pt=r.convert(ut.format,ut.colorSpace),z=r.convert(ut.type),dt=P(ut.internalFormat,Pt,z,ut.normalized,ut.colorSpace,D.isXRRenderTarget===!0),rt=ht(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,dt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(vt){e.bindTexture(s.TEXTURE_CUBE_MAP,_t.__webglTexture),de(s.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)ve(H.__webglFramebuffer[lt][ut],D,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else ve(H.__webglFramebuffer[lt],D,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);A(y)?w(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(wt){for(let lt=0,ut=ft.length;lt<ut;lt++){let Pt=ft[lt],z=n.get(Pt),dt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(dt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,z.__webglTexture),de(dt,Pt),ve(H.__webglFramebuffer,D,Pt,s.COLOR_ATTACHMENT0+lt,dt,0),A(Pt)&&w(dt)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(lt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,_t.__webglTexture),de(lt,y),y.mipmaps.length>0)for(let ut=0;ut<y.mipmaps.length;ut++)ve(H.__webglFramebuffer[ut],D,y,s.COLOR_ATTACHMENT0,lt,ut);else ve(H.__webglFramebuffer,D,y,s.COLOR_ATTACHMENT0,lt,0);A(y)?w(lt):y.mipmaps.length>0&&s.texParameteri(lt,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}D.depthBuffer&&We(D)}function F(D){let y=D.textures;for(let H=0,_t=y.length;H<_t;H++){let ft=y[H];if(A(ft)&&ft.mipmapsAutoUpdate===!0){let vt=E(D),wt=n.get(ft).__webglTexture;e.bindTexture(vt,wt),w(vt),e.unbindTexture()}}}let Y=[];function ot(D){if(D.samples>0){if(at(D)===!1){let y=D.textures,H=D.width,_t=D.height,ft=s.COLOR_BUFFER_BIT,vt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(D),lt=y.length>1;if(lt)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ft|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ft|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[Pt]);let z=n.get(y[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,H,_t,0,0,H,_t,ft,s.NEAREST),l===!0&&(Y.length=0,Y.push(s.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Y.push(vt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Y))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[Pt]);let z=n.get(y[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,z,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let y=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ht(D){return Math.min(i.maxSamples,D.samples)}function at(D){let y=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Kt(D){let y=o.render.frame;h.get(D)!==y&&(h.set(D,y),D.update())}function It(D,y){let H=D.colorSpace,_t=D.format,ft=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==va&&H!==gs&&(_e.getTransfer(H)===Te?(_t!==Ci||ft!==Un)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",H)),y}function Ht(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=ct,this.getTextureUnits=pt,this.setTextureUnits=Et,this.setTexture2D=Mt,this.setTexture2DArray=Ct,this.setTexture3D=zt,this.setTextureCube=Tt,this.rebindTextures=qe,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=at,this.dispose=j}function C1(s,t){function e(n,i=gs){let r,o=_e.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===Fc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Td)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===bd)return s.BYTE;if(n===Md)return s.SHORT;if(n===Oo)return s.UNSIGNED_SHORT;if(n===Lc)return s.INT;if(n===Mi)return s.UNSIGNED_INT;if(n===wi)return s.FLOAT;if(n===Ti)return s.HALF_FLOAT;if(n===Cd)return s.ALPHA;if(n===Ed)return s.RGB;if(n===Ci)return s.RGBA;if(n===fs)return s.DEPTH_COMPONENT;if(n===ms)return s.DEPTH_STENCIL;if(n===Ad)return s.RED;if(n===kc)return s.RED_INTEGER;if(n===Ws)return s.RG;if(n===Uc)return s.RG_INTEGER;if(n===Bc)return s.RGBA_INTEGER;if(n===Ua||n===Ba||n===za||n===Va)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===Vc||n===Gc||n===Hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===jc||n===Yc||n===qc||n===Ga||n===Zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wc||n===Xc)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yc)return r.COMPRESSED_R11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return r.COMPRESSED_RG11_EAC;if(n===Zc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jc||n===Kc||n===$c||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===th)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ih)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ch)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hh||n===uh||n===dh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hh)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===ph||n===Ha||n===mh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`,Yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ra(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xi({vertexShader:E1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kn(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qd=class extends Vi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Yd,_={},b=e.getContextAttributes(),A=null,w=null,E=[],P=[],g=new xe,v=null,T=null,C=new jn;C.viewport=new Ue;let R=new jn;R.viewport=new Ue;let L=[C,R],U=new Pc,O=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Mt=E[Q];return Mt===void 0&&(Mt=new To,E[Q]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let Mt=E[Q];return Mt===void 0&&(Mt=new To,E[Q]=Mt),Mt.getGripSpace()},this.getHand=function(Q){let Mt=E[Q];return Mt===void 0&&(Mt=new To,E[Q]=Mt),Mt.getHandSpace()};function q(Q){let Mt=P.indexOf(Q.inputSource);if(Mt===-1)return;let Ct=E[Mt];Ct!==void 0&&(Ct.update(Q.inputSource,Q.frame,c||o),Ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",$);for(let Q=0;Q<E.length;Q++){let Mt=P[Q];Mt!==null&&(P[Q]=null,E[Q].disconnect(Mt))}O=null,j=null,m.reset();for(let Q in _)delete _[Q];if(t.setRenderTarget(A),f=null,d=null,u=null,i=null,w=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(g.width,g.height,!1),T!==null){let Q=T.camera;Q.fov=T.fov,Q.zoom=T.zoom,Q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",B),i.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,zt=null,Tt=null;b.depth&&(Tt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=b.stencil?ms:fs,zt=b.stencil?br:Mi);let jt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(jt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Yn(d.textureWidth,d.textureHeight,{format:Ci,type:Un,depthTexture:new ps(d.textureWidth,d.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Ci,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Q){for(let Mt=0;Mt<Q.removed.length;Mt++){let Ct=Q.removed[Mt],zt=P.indexOf(Ct);zt>=0&&(P[zt]=null,E[zt].disconnect(Ct))}for(let Mt=0;Mt<Q.added.length;Mt++){let Ct=Q.added[Mt],zt=P.indexOf(Ct);if(zt===-1){for(let jt=0;jt<E.length;jt++)if(jt>=P.length){P.push(Ct),zt=jt;break}else if(P[jt]===null){P[jt]=Ct,zt=jt;break}if(zt===-1)break}let Tt=E[zt];Tt&&Tt.connect(Ct)}}function J(Q,Mt){Mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let Mt=Q.near,Ct=Q.far;m.texture!==null&&(m.depthNear>0&&(Mt=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),U.near=R.near=C.near=Mt,U.far=R.far=C.far=Ct,(O!==U.near||j!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,j=U.far),U.layers.mask=Q.layers.mask|6,C.layers.mask=U.layers.mask&-5,R.layers.mask=U.layers.mask&-3;let zt=Q.parent,Tt=U.cameras;J(U,zt);for(let jt=0;jt<Tt.length;jt++)J(Tt[jt],zt);U.projectionMatrix.copy(C.projectionMatrix),U.projectionMatrixInverse.copy(C.projectionMatrixInverse),T===null&&Q.isPerspectiveCamera&&(T={camera:Q,fov:Q.fov,zoom:Q.zoom}),ct(Q,U,zt)};function ct(Q,Mt,Ct){Ct===null?Q.matrix.copy(Mt.matrixWorld):(Q.matrix.copy(Ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Mt.projectionMatrix),Q.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=cc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Q){return _[Q]};let pt=null;function Et(Q,Mt){if(h=Mt.getViewerPose(c||o),p=Mt,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let zt=!1;Ct.length!==U.cameras.length&&(U.cameras.length=0,zt=!0);for(let Vt=0;Vt<Ct.length;Vt++){let de=Ct[Vt],ne=null;if(f!==null)ne=f.getViewport(de);else{let pe=u.getViewSubImage(d,de);ne=pe.viewport,Vt===0&&(t.setRenderTargetTextures(w,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(w))}let te=L[Vt];te===void 0&&(te=new jn,te.layers.enable(Vt),te.viewport=new Ue,L[Vt]=te),te.matrix.fromArray(de.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(de.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ne.x,ne.y,ne.width,ne.height),Vt===0&&(U.matrix.copy(te.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),zt===!0&&U.cameras.push(te)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Vt=u.getDepthInformation(Ct[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,i.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Vt=0;Vt<Ct.length;Vt++){let de=Ct[Vt].camera;if(de){let ne=_[de];ne||(ne=new Ra,_[de]=ne);let te=u.getCameraImage(de);ne.sourceTexture=te}}}}for(let Ct=0;Ct<E.length;Ct++){let zt=P[Ct],Tt=E[Ct];zt!==null&&Tt!==void 0&&Tt.update(zt,Mt,c||o)}pt&&pt(Q,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),p=null}let At=new _g;At.setAnimationLoop(Et),this.setAnimationLoop=function(Q){pt=Q},this.dispose=function(){}}},R1=new ke,Eg=new ie;Eg.set(-1,0,0,0,1,0,0,0,1);function P1(s,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,Fd(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,b,A,w){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),u(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),d(m,_),_.isMeshPhysicalMaterial&&f(m,_,w)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),x(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,b,A):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Rn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Rn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let b=t.get(_),A=b.envMap,w=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(R1.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Eg),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,b,A){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*b,m.scale.value=A*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function u(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function d(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,b){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Rn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function x(m,_){let b=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D1(s,t,e,n){let i={},r={};function o(b,A){let w=A.program;n.uniformBlockBinding(b,w,i[b.id])}function a(b,A){let w=i[b.id];w===void 0&&(p(b),w=l(b),i[b.id]=w,b.addEventListener("dispose",m));let E=A.program;n.updateUBOMapping(b,E);let P=t.render.frame;r[b.id]!==P&&(c(b),r[b.id]=P)}function l(b){let A=s.createBuffer(),w=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),A}function c(b){let A=i[b.id],w=b.uniforms,E=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let P=0,g=w.length;P<g;P++){let v=w[P];if(Array.isArray(v))for(let T=0,C=v.length;T<C;T++)h(v[T],P,T,E);else h(v,P,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(b,A,w,E){if(d(b,A,w,E)===!0){let P=b.__offset,g=b.value;if(Array.isArray(g)){let v=0;for(let T=0;T<g.length;T++){let C=g[T],R=x(C,!0);u(C,b.__data,v),v+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,b.__data)}}function u(b,A,w){typeof b=="number"||typeof b=="boolean"?A[w]=b:b.isMatrix3?(A[w]=b.elements[0],A[w+1]=b.elements[1],A[w+2]=b.elements[2],A[w+3]=0,A[w+4]=b.elements[3],A[w+5]=b.elements[4],A[w+6]=b.elements[5],A[w+7]=0,A[w+8]=b.elements[6],A[w+9]=b.elements[7],A[w+10]=b.elements[8],A[w+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-w),w):b.toArray(A,w)}function d(b,A,w,E){let P=b.value,g=A+"_"+w;if(Array.isArray(P)){E[g]===void 0&&(E[g]=[]);let v=E[g],T=!1;for(let C=0;C<P.length;C++)f(P[C],v,C)===!0&&(T=!0);return T}return f(P,E,g)}function f(b,A,w){if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:ArrayBuffer.isView(b)?A[w]=b.slice():A[w]=b.clone(),!0;{let E=A[w];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return A[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function p(b){let A=b.uniforms,w=0,E=16;for(let g=0,v=A.length;g<v;g++){let T=Array.isArray(A[g])?A[g]:[A[g]];for(let C=0,R=T.length;C<R;C++){let L=T[C],U=Array.isArray(L.value)?L.value:[L.value],O=Array.isArray(A[g])||Array.isArray(L.value),j=w;for(let B=0,$=U.length;B<$;B++){let J=U[B],ct=x(J,O),pt=w%E,Et=pt%ct.boundary,At=pt+Et;w+=Et,At!==0&&E-At<ct.storage&&(w+=E-At),B===0&&(j=w),w+=ct.storage}let q=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new q((w-j)/Float32Array.BYTES_PER_ELEMENT),L.__offset=j}}let P=w%E;return P>0&&(w+=E-P),b.__size=w,b.__cache={},this}function x(b,A){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=16,w.storage=48):b.isMatrix4?(w.boundary=16,w.storage=64):b.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(w.boundary=16,w.storage=b.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(b){let A=b.target;A.removeEventListener("dispose",m),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function _(){for(let b in i)s.deleteBuffer(i[b]);i={},r={}}return{bind:o,update:a,dispose:_}}var I1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function O1(){return Yi===null&&(Yi=new pc(I1,16,16,Ws,Ti),Yi.name="DFG_LUT",Yi.minFilter=mn,Yi.magFilter=mn,Yi.wrapS=Bi,Yi.wrapT=Bi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var xh=class{constructor(t={}){let{canvas:e=Vm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([Bc,Uc,kc]),_=new Set([Un,Mi,Oo,br,Fc,Nc]),b=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},E=null,P=null,g=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,L=null,U=null,O=null,j=null;this._outputColorSpace=pn;let q=0,B=0,$=null,J=-1,ct=null,pt=new Ue,Et=new Ue,At=null,Q=new ce(0),Mt=0,Ct=e.width,zt=e.height,Tt=1,jt=null,Qt=null,Vt=new Ue(0,0,Ct,zt),de=new Ue(0,0,Ct,zt),ne=!1,te=new Us,pe=new mc,Ae=!1,Ne=!1,ve=new ke,Be=new it,Re=new Ue,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Lt(){return $===null?Tt:1}let F=n;function Y(M,k){return e.getContext(M,k)}let ot,ht,at,Kt,It,Ht,D,y,H,_t,ft,vt,wt,lt,ut,Pt,z,dt,rt,St,xt,Rt,Gt;try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),F===null){let k="webgl2";if(F=Y(k,M),F===null)throw Y(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(M){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ee("WebGLRenderer: "+M.message),M}function se(){ot=new WS(F),ot.init(),xt=new C1(F,ot),ht=new OS(F,ot,t,xt),at=new w1(F,ot),ht.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),U=F.createFramebuffer(),O=F.createFramebuffer(),j=F.createFramebuffer(),Kt=new YS(F),It=new h1,Ht=new T1(F,ot,at,It,ht,xt,Kt),D=new HS(C),y=new Zx(F),Rt=new DS(F,y),H=new XS(F,y,Kt,Rt),_t=new ZS(F,H,y,Rt,Kt),dt=new qS(F,ht,Ht),ut=new LS(It),ft=new c1(C,D,ot,ht,Rt,ut),vt=new P1(C,It),wt=new d1,lt=new x1(ot),z=new PS(C,D,at,_t,p,l),Pt=new M1(C,_t,ht),Gt=new D1(F,Kt,ht,at),rt=new IS(F,ot,Kt),St=new jS(F,ot,Kt),Kt.programs=ft.programs,C.capabilities=ht,C.extensions=ot,C.properties=It,C.renderLists=wt,C.shadowMap=Pt,C.state=at,C.info=Kt}x!==Un&&(T=new KS(x,e.width,e.height,a,i,r));let gt=new qd(C,F);this.xr=gt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=ot.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ot.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(M){M!==void 0&&(Tt=M,this.setSize(Ct,zt,!1))},this.getSize=function(M){return M.set(Ct,zt)},this.setSize=function(M,k,tt=!0){if(gt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=M,zt=k,e.width=Math.floor(M*Tt),e.height=Math.floor(k*Tt),tt===!0&&(e.style.width=M+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(Ct*Tt,zt*Tt).floor()},this.setDrawingBufferSize=function(M,k,tt){Ct=M,zt=k,Tt=tt,e.width=Math.floor(M*tt),e.height=Math.floor(k*tt),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(x===Un){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(pt)},this.getViewport=function(M){return M.copy(Vt)},this.setViewport=function(M,k,tt,K){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,k,tt,K),at.viewport(pt.copy(Vt).multiplyScalar(Lt()).round())},this.getScissor=function(M){return M.copy(de)},this.setScissor=function(M,k,tt,K){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,k,tt,K),at.scissor(Et.copy(de).multiplyScalar(Lt()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){at.setScissorTest(ne=M)},this.setOpaqueSort=function(M){jt=M},this.setTransparentSort=function(M){Qt=M},this.getClearColor=function(M){return M.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,tt=!0){let K=0;if(M){let et=!1;if($!==null){let Ot=$.texture.format;et=m.has(Ot)}if(et){let Ot=$.texture.type,Bt=_.has(Ot),Dt=z.getClearColor(),kt=z.getClearAlpha(),Yt=Dt.r,oe=Dt.g,me=Dt.b;Bt?(b[0]=Yt,b[1]=oe,b[2]=me,b[3]=kt,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=Yt,A[1]=oe,A[2]=me,A[3]=kt,F.clearBufferiv(F.COLOR,0,A))}else K|=F.COLOR_BUFFER_BIT}k&&(K|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),z.dispose(),wt.dispose(),lt.dispose(),Ht.dispose(),It.dispose(),D.dispose(),_t.dispose(),H.dispose(),Rt.dispose(),Gt.dispose(),ft.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ha),gt.removeEventListener("sessionend",ua),ki.stop()};function qt(M){M.preventDefault(),Od("WebGLRenderer: Context Lost."),R=!0}function re(){Od("WebGLRenderer: Context Restored."),R=!1;let M=Kt.autoReset,k=Pt.enabled,tt=Pt.autoUpdate,K=Pt.needsUpdate,et=Pt.type;se(),Kt.autoReset=M,Pt.enabled=k,Pt.autoUpdate=tt,Pt.needsUpdate=K,Pt.type=et}function Ft(M){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Me(M){let k=M.target;k.removeEventListener("dispose",Me),Xe(k)}function Xe(M){rn(M),It.remove(M)}function rn(M){let k=It.get(M).programs;k!==void 0&&(k.forEach(function(tt){ft.releaseProgram(tt)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,tt,K,et,Ot){k===null&&(k=We);let Bt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Dt=W(M,k,tt,K,et);at.setMaterial(K,Bt);let kt=tt.index,Yt=1;if(K.wireframe===!0){if(kt=H.getWireframeAttribute(tt),kt===void 0)return;Yt=2}let oe=tt.drawRange,me=tt.attributes.position,Wt=oe.start*Yt,ge=(oe.start+oe.count)*Yt;Ot!==null&&(Wt=Math.max(Wt,Ot.start*Yt),ge=Math.min(ge,(Ot.start+Ot.count)*Yt)),kt!==null?(Wt=Math.max(Wt,0),ge=Math.min(ge,kt.count)):me!=null&&(Wt=Math.max(Wt,0),ge=Math.min(ge,me.count));let Ze=ge-Wt;if(Ze<0||Ze===1/0)return;Rt.setup(et,K,Dt,tt,kt);let Oe,Pe=rt;if(kt!==null&&(Oe=y.get(kt),Pe=St,Pe.setIndex(Oe)),et.isMesh)K.wireframe===!0?(at.setLineWidth(K.wireframeLinewidth*Lt()),Pe.setMode(F.LINES)):Pe.setMode(F.TRIANGLES);else if(et.isLine){let xn=K.linewidth;xn===void 0&&(xn=1),at.setLineWidth(xn*Lt()),et.isLineSegments?Pe.setMode(F.LINES):et.isLineLoop?Pe.setMode(F.LINE_LOOP):Pe.setMode(F.LINE_STRIP)}else et.isPoints?Pe.setMode(F.POINTS):et.isSprite&&Pe.setMode(F.TRIANGLES);if(et.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Pe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let xn=et._multiDrawStarts,Xt=et._multiDrawCounts,En=et._multiDrawCount,we=kt?y.get(kt).bytesPerElement:1,cr=It.get(K).currentProgram.getUniforms();for(let vn=0;vn<En;vn++)cr.setValue(F,"_gl_DrawID",vn),Pe.render(xn[vn]/we,Xt[vn])}else if(et.isInstancedMesh)Pe.renderInstances(Wt,Ze,et.count);else if(tt.isInstancedBufferGeometry){let xn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Xt=Math.min(tt.instanceCount,xn);Pe.renderInstances(Wt,Ze,Xt)}else Pe.render(Wt,Ze)};function Nn(M,k,tt,K){L!==null&&M.isNodeMaterial&&L.setObject(K,M),Ae===!0&&ut.setState(M,tt,!1),M.transparent===!0&&M.side===ji&&M.forceSinglePass===!1?(M.side=Rn,M.needsUpdate=!0,I(M,k,K),M.side=Hs,M.needsUpdate=!0,I(M,k,K),M.side=ji):I(M,k,K)}this.compile=function(M,k,tt=null){tt===null&&(tt=M),L!==null&&L.renderStart(M,k,tt),P=lt.get(tt),P.init(k),v.push(P),tt.traverseVisible(function(et){et.isLight&&et.layers.test(k.layers)&&(P.pushLight(et),et.castShadow&&P.pushShadow(et))}),M!==tt&&M.traverseVisible(function(et){et.isLight&&et.layers.test(k.layers)&&(P.pushLight(et),et.castShadow&&P.pushShadow(et))}),P.setupLights(),L!==null&&L.updateLights(P.state.lightsArray),Ne=this.localClippingEnabled,Ae=ut.init(this.clippingPlanes,Ne),Ae===!0&&ut.setGlobalState(this.clippingPlanes,k),L!==null&&Pt.render(P.state.shadowsArray,tt,k);let K=new Set;return M.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Ot=et.material;if(Ot)if(Array.isArray(Ot))for(let Bt=0;Bt<Ot.length;Bt++){let Dt=Ot[Bt];Nn(Dt,tt,k,et),K.add(Dt)}else Nn(Ot,tt,k,et),K.add(Ot)}),P=v.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(M,k,tt=null){let K=this.compile(M,k,tt);return new Promise(et=>{function Ot(){if(K.forEach(function(Bt){let kt=It.get(Bt).currentProgram;(kt===void 0||kt.isReady())&&K.delete(Bt)}),K.size===0){et(M);return}setTimeout(Ot,10)}ot.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Cn=null;function El(M){Cn&&Cn(M)}function ha(){ki.stop()}function ua(){ki.start()}let ki=new _g;ki.setAnimationLoop(El),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){Cn=M,gt.setAnimationLoop(M),M===null?ki.stop():ki.start()},gt.addEventListener("sessionstart",ha),gt.addEventListener("sessionend",ua),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(M,k);let tt=gt.enabled===!0&&gt.isPresenting===!0,K=T!==null&&($===null||tt)&&T.begin(C,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(k),k=gt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,k,$),P=lt.get(M,v.length),P.init(k),P.state.textureUnits=Ht.getTextureUnits(),v.push(P),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?pe.setFromArrayCamera(k):te.setFromProjectionMatrix(ve,oi,k.reversedDepth),Ne=this.localClippingEnabled,Ae=ut.init(this.clippingPlanes,Ne),E=wt.get(M,g.length),E.init(),g.push(E),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let Bt=C.xr.getDepthSensingMesh();Bt!==null&&da(Bt,k,-1/0,C.sortObjects)}da(M,k,0,C.sortObjects),E.finish(),L!==null&&L.updateLights(P.state.lightsArray),C.sortObjects===!0&&E.sort(jt,Qt),qe=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,qe&&z.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&ut.beginShadows();let et=P.state.shadowsArray;if(Pt.render(et,M,k),Ae===!0&&ut.endShadows(),(K&&T.hasRenderPass())===!1){let Bt=E.opaque,Dt=E.transmissive;if(P.setupLights(),k.isArrayCamera){let kt=k.cameras;if(Dt.length>0)for(let Yt=0,oe=kt.length;Yt<oe;Yt++){let me=kt[Yt];Rl(Bt,Dt,M,me)}qe&&z.render(M);for(let Yt=0,oe=kt.length;Yt<oe;Yt++){let me=kt[Yt];Al(E,M,me,me.viewport)}}else Dt.length>0&&Rl(Bt,Dt,M,k),qe&&z.render(M),Al(E,M,k)}$!==null&&B===0&&(Ht.updateMultisampleRenderTarget($),Ht.updateRenderTargetMipmap($)),K&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,k),Rt.resetDefaultState(),J=-1,ct=null,v.pop(),v.length>0?(P=v[v.length-1],Ht.setTextureUnits(P.state.textureUnits),Ae===!0&&ut.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,L!==null&&L.renderEnd()};function da(M,k,tt,K){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)tt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){let Bt=k.isArrayCamera?pe:te;if(!M.frustumCulled||M.intersectsFrustum(Bt)){K&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ve);let Dt=_t.update(M),kt=M.material;kt.visible&&E.push(M,Dt,kt,tt,Re.z,null,k)}}else if(M.isMesh||M.isLine||M.isPoints){let Bt=k.isArrayCamera?pe:te;if(!M.frustumCulled||M.intersectsFrustum(Bt)){let Dt=_t.update(M),kt=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Re.copy(Dt.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(ve)),Array.isArray(kt)){let Yt=Dt.groups;for(let oe=0,me=Yt.length;oe<me;oe++){let Wt=Yt[oe],ge=kt[Wt.materialIndex];ge&&ge.visible&&E.push(M,Dt,ge,tt,Re.z,Wt,k)}}else kt.visible&&E.push(M,Dt,kt,tt,Re.z,null,k)}}}let Ot=M.children;for(let Bt=0,Dt=Ot.length;Bt<Dt;Bt++)da(Ot[Bt],k,tt,K)}function Al(M,k,tt,K){let{opaque:et,transmissive:Ot,transparent:Bt}=M;P.setupLightsView(tt),Ae===!0&&ut.setGlobalState(C.clippingPlanes,tt),K&&at.viewport(pt.copy(K)),et.length>0&&ro(et,k,tt),Ot.length>0&&ro(Ot,k,tt),Bt.length>0&&ro(Bt,k,tt),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Rl(M,k,tt,K){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[K.id]===void 0){let Wt=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[K.id]=new Yn(1,1,{generateMipmaps:!0,type:Wt?Ti:Un,minFilter:bi,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Ot=P.state.transmissionRenderTarget[K.id],Bt=K.viewport||pt;Ot.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);let Dt=C.getRenderTarget(),kt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(Ot),C.getClearColor(Q),Mt=C.getClearAlpha(),Mt<1&&C.setClearColor(16777215,.5),C.clear(),qe&&z.render(tt);let oe=C.toneMapping;C.toneMapping=li;let me=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),P.setupLightsView(K),Ae===!0&&ut.setGlobalState(C.clippingPlanes,K),ro(M,tt,K),Ht.updateMultisampleRenderTarget(Ot),Ht.updateRenderTargetMipmap(Ot),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let ge=0,Ze=k.length;ge<Ze;ge++){let Oe=k[ge],{object:Pe,geometry:xn,material:Xt,group:En}=Oe;if(Xt.side===ji&&Pe.layers.test(K.layers)){let we=Xt.side;Xt.side=Rn,Xt.needsUpdate=!0,Iu(Pe,tt,K,xn,Xt,En),Xt.side=we,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Ht.updateMultisampleRenderTarget(Ot),Ht.updateRenderTargetMipmap(Ot))}C.setRenderTarget(Dt,kt,Yt),C.setClearColor(Q,Mt),me!==void 0&&(K.viewport=me),C.toneMapping=oe}function ro(M,k,tt){let K=k.isScene===!0?k.overrideMaterial:null;for(let et=0,Ot=M.length;et<Ot;et++){let Bt=M[et],{object:Dt,geometry:kt,group:Yt}=Bt,oe=Bt.material;oe.allowOverride===!0&&K!==null&&(oe=K),Dt.layers.test(tt.layers)&&Iu(Dt,k,tt,kt,oe,Yt)}}function Iu(M,k,tt,K,et,Ot){L!==null&&et.isNodeMaterial&&L.setObject(M,et),M.onBeforeRender(C,k,tt,K,et,Ot),M.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),et.onBeforeRender(C,k,tt,K,M,Ot),et.transparent===!0&&et.side===ji&&et.forceSinglePass===!1?(et.side=Rn,et.needsUpdate=!0,C.renderBufferDirect(tt,k,K,et,M,Ot),et.side=Hs,et.needsUpdate=!0,C.renderBufferDirect(tt,k,K,et,M,Ot),et.side=ji):C.renderBufferDirect(tt,k,K,et,M,Ot),M.onAfterRender(C,k,tt,K,et,Ot)}function S(M){let k=0;for(let tt of M)tt.texture!==null&&k++;return k}function I(M,k,tt){k.isScene!==!0&&(k=We);let K=It.get(M),et=P.state.lights,Ot=P.state.shadowsArray,Bt=et.state.version,Dt=ft.getParameters(M,et.state,Ot,k,tt,P.state.lightProbeGridArray),kt=ft.getProgramCacheKey(Dt),Yt=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,K.fog=k.fog;let oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=D.get(M.envMap||K.environment,oe),K.envMapRotation=K.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Yt===void 0&&(M.addEventListener("dispose",Me),Yt=new Map,K.programs=Yt,K.programVariants=new Map);let me=Yt.get(kt);if(me!==void 0){if(K.currentProgram===me&&K.lightsStateVersion===Bt)return nt(M,Dt),me}else Dt.uniforms=ft.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,tt,Dt),M.onBeforeCompile(Dt,C),me=ft.acquireProgram(Dt,kt),Yt.set(kt,me),K.uniforms=Dt.uniforms;let Wt=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Wt.clippingPlanes=ut.uniform),nt(M,Dt),K.needsLights=mt(M),K.lightsStateVersion=Bt,K.needsLights&&(Wt.ambientLightColor.value=et.state.ambient,Wt.lightProbe.value=et.state.probe,Wt.sunLights.value=et.state.sun,Wt.sunLightShadows.value=et.state.sunShadow,Wt.directionalLights.value=et.state.directional,Wt.directionalLightShadows.value=et.state.directionalShadow,Wt.spotLights.value=et.state.spot,Wt.spotLightShadows.value=et.state.spotShadow,Wt.rectAreaLights.value=et.state.rectArea,Wt.ltc_1.value=et.state.rectAreaLTC1,Wt.ltc_2.value=et.state.rectAreaLTC2,Wt.pointLights.value=et.state.point,Wt.pointLightShadows.value=et.state.pointShadow,Wt.hemisphereLights.value=et.state.hemi,Wt.sunShadowMatrix.value=et.state.sunShadowMatrix,Wt.sunShadowCascade.value=et.state.sunShadowCascade,Wt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Wt.spotLightMatrix.value=et.state.spotLightMatrix,Wt.spotLightMap.value=et.state.spotLightMap,Wt.pointShadowMatrix.value=et.state.pointShadowMatrix),K.numLightProbeGrids=S(P.state.lightProbeGridArray),K.currentProgram=me,K.uniformsList=null,me}function N(M,k,tt,K,et){let Ot=It.get(M),Bt=Ot.currentProgram.id+","+K+","+et,Dt=Ot.programVariants.get(Bt);return Dt===void 0?(Dt=I(M,k,tt),Ot.programVariants.set(Bt,Dt)):(Ot.currentProgram=Dt,Ot.uniformsList=null,Ot.outputColorSpace=K,Ot.toneMapping=et),Dt}function V(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=Lo.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function nt(M,k){let tt=It.get(M);tt.outputColorSpace=k.outputColorSpace,tt.batching=k.batching,tt.batchingColor=k.batchingColor,tt.instancing=k.instancing,tt.instancingColor=k.instancingColor,tt.instancingMorph=k.instancingMorph,tt.skinning=k.skinning,tt.morphTargets=k.morphTargets,tt.morphNormals=k.morphNormals,tt.morphColors=k.morphColors,tt.morphTargetsCount=k.morphTargetsCount,tt.numClippingPlanes=k.numClippingPlanes,tt.numIntersection=k.numClipIntersection,tt.vertexAlphas=k.vertexAlphas,tt.vertexTangents=k.vertexTangents,tt.toneMapping=k.toneMapping}function W(M,k,tt,K,et){k.isScene!==!0&&(k=We),Ht.resetTextureUnits();let Ot=k.fog,Bt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?k.environment:null,Dt=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:_e.workingColorSpace,kt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Yt=D.get(K.envMap||Bt,kt),oe=K.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,me=!!tt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Wt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,Ze=!!tt.morphAttributes.color,Oe=li;K.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Oe=C.toneMapping);let Pe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,xn=Pe!==void 0?Pe.length:0,Xt=It.get(K),En=P.state.lights;if(Ae===!0&&(Ne===!0||M!==ct)){let ze=M===ct&&K.id===J;ut.setState(K,M,ze)}let we=!1,cr=!1;K.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==En.state.version||et.isBatchedMesh&&Xt.batching===!1||!et.isBatchedMesh&&Xt.batching===!0||et.isBatchedMesh&&Xt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Xt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Xt.instancing===!1||!et.isInstancedMesh&&Xt.instancing===!0||et.isSkinnedMesh&&Xt.skinning===!1||!et.isSkinnedMesh&&Xt.skinning===!0||et.isInstancedMesh&&Xt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Xt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Xt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Xt.instancingMorph===!1&&et.morphTexture!==null||Xt.envMap!==Yt||K.fog===!0&&Xt.fog!==Ot||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ut.numPlanes||Xt.numIntersection!==ut.numIntersection)||Xt.vertexAlphas!==oe||Xt.vertexTangents!==me||Xt.morphTargets!==Wt||Xt.morphNormals!==ge||Xt.morphColors!==Ze||Xt.morphTargetsCount!==xn||Xt.numLightProbeGrids!==S(P.state.lightProbeGridArray)?we=!0:(Xt.outputColorSpace!==Dt||Xt.toneMapping!==Oe)&&(cr=!0):(we=!0,Xt.__version=K.version);let vn=Xt.currentProgram;(we===!0||cr===!0)&&(vn=cr===!0?N(K,k,et,Dt,Oe):I(K,k,et),L&&K.isNodeMaterial&&L.onUpdateProgram(K,vn,Xt));let Pl=!1,Rs=!1,hr=!1,be=vn.getUniforms(),fn=Xt.uniforms;if(at.useProgram(vn.program)&&(Pl=!0,Rs=!0,hr=!0),K.id!==J&&(J=K.id,Rs=!0),Pl||ct!==M){at.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),be.setValue(F,"projectionMatrix",M.projectionMatrix),be.setValue(F,"viewMatrix",M.matrixWorldInverse);let on=be.map.cameraPosition;on!==void 0&&on.setValue(F,Be.setFromMatrixPosition(M.matrixWorld)),ht.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&be.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),ct!==M&&(ct=M,Rs=!0,hr=!0)}if(Xt.needsLights&&(En.state.sunShadowMap.length>0&&be.setValue(F,"sunShadowMap",En.state.sunShadowMap,Ht),En.state.directionalShadowMap.length>0&&be.setValue(F,"directionalShadowMap",En.state.directionalShadowMap,Ht),En.state.spotShadowMap.length>0&&be.setValue(F,"spotShadowMap",En.state.spotShadowMap,Ht),En.state.pointShadowMap.length>0&&be.setValue(F,"pointShadowMap",En.state.pointShadowMap,Ht)),et.isSkinnedMesh){be.setOptional(F,et,"bindMatrix"),be.setOptional(F,et,"bindMatrixInverse");let ze=et.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),be.setValue(F,"boneTexture",ze.boneTexture,Ht))}et.isBatchedMesh&&(be.setOptional(F,et,"batchingTexture"),be.setValue(F,"batchingTexture",et._matricesTexture,Ht),be.setOptional(F,et,"batchingIdTexture"),be.setValue(F,"batchingIdTexture",et._indirectTexture,Ht),be.setOptional(F,et,"batchingColorTexture"),et._colorsTexture!==null&&be.setValue(F,"batchingColorTexture",et._colorsTexture,Ht));let _i=tt.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&dt.update(et,tt,vn),(Rs||Xt.receiveShadow!==et.receiveShadow)&&(Xt.receiveShadow=et.receiveShadow,be.setValue(F,"receiveShadow",et.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=O1()),Rs){if(be.setValue(F,"toneMappingExposure",C.toneMappingExposure),Xt.needsLights&&Z(fn,hr),Ot&&K.fog===!0&&vt.refreshFogUniforms(fn,Ot),vt.refreshMaterialUniforms(fn,K,Tt,zt,P.state.transmissionRenderTarget[M.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let ze=w,on=0;for(let rs of P.state.lightProbeGridArray)rs.texture!==null&&(ze.textures[on]=rs.texture,ze.min[on]=rs.boundingBox.min,ze.max[on]=rs.boundingBox.max,ze.resolution[on]=rs.resolution,on++);for(let rs in ze)ze[rs].length=on;fn.probesSH.value=ze.textures,fn.probesMin.value=ze.min,fn.probesMax.value=ze.max,fn.probesResolution.value=ze.resolution}Lo.upload(F,V(Xt),fn,Ht)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Lo.upload(F,V(Xt),fn,Ht),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&be.setValue(F,"center",et.center),be.setValue(F,"modelViewMatrix",et.modelViewMatrix),be.setValue(F,"normalMatrix",et.normalMatrix),be.setValue(F,"modelMatrix",et.matrixWorld),K.uniformsGroups!==void 0){let ze=K.uniformsGroups;for(let on=0,rs=ze.length;on<rs;on++){let Up=ze[on];Gt.update(Up,vn),Gt.bind(Up,vn)}}return vn}function Z(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.sunLights.needsUpdate=k,M.sunLightShadows.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function mt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,k,tt){let K=It.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),It.get(M.texture).__webglTexture=k,It.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:tt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){let tt=It.get(M);tt.__webglFramebuffer=k,tt.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(M,k=0,tt=0){$=M,q=k,B=tt;let K=null,et=!1,Ot=!1;if(M){let Dt=It.get(M);if(Dt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(F.FRAMEBUFFER,Dt.__webglFramebuffer),pt.copy(M.viewport),Et.copy(M.scissor),At=M.scissorTest,at.viewport(pt),at.scissor(Et),at.setScissorTest(At),J=-1;return}else if(Dt.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if(Dt.__hasExternalTextures)Ht.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let oe=M.depthTexture;if(Dt.__boundDepthTexture!==oe){if(oe!==null&&It.has(oe)&&(M.width!==oe.image.width||M.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}let kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ot=!0);let Yt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?K=Yt[k][tt]:K=Yt[k],et=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?K=It.get(M).__webglMultisampledFramebuffer:Array.isArray(Yt)?K=Yt[tt]:K=Yt,pt.copy(M.viewport),Et.copy(M.scissor),At=M.scissorTest}else pt.copy(Vt).multiplyScalar(Tt).floor(),Et.copy(de).multiplyScalar(Tt).floor(),At=ne;if(tt!==0&&(K=U),at.bindFramebuffer(F.FRAMEBUFFER,K)&&at.drawBuffers(M,K),at.viewport(pt),at.scissor(Et),at.setScissorTest(At),et){let Dt=It.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Dt.__webglTexture,tt)}else if(Ot){let Dt=k;for(let kt=0;kt<M.textures.length;kt++){let Yt=It.get(M.textures[kt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+kt,Yt.__webglTexture,tt,Dt)}}else if(M!==null&&tt!==0){let Dt=It.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,tt)}J=-1};function Zt(M){let k=It.get(M);return(k.__readFormat!==M.format||k.__readType!==M.type)&&(k.__readFormat=M.format,k.__readType=M.type,k.__formatReadable=ht.textureFormatReadable(M.format),k.__typeReadable=ht.textureTypeReadable(M.type)),k}this.readRenderTargetPixels=function(M,k,tt,K,et,Ot,Bt,Dt=0){if(!(M&&M.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt],Array.isArray(kt)&&(kt=kt[0])),kt){at.bindFramebuffer(F.FRAMEBUFFER,kt);try{let Yt=M.textures[Dt],oe=Yt.format,me=Yt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Dt);let Wt=Zt(Yt);if(Wt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-K&&tt>=0&&tt<=M.height-et&&F.readPixels(k,tt,K,et,xt.convert(oe),xt.convert(me),Ot)}finally{let Yt=$!==null?It.get($).__webglFramebuffer:null;at.bindFramebuffer(F.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(M,k,tt,K,et,Ot,Bt,Dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt],Array.isArray(kt)&&(kt=kt[0])),kt)if(k>=0&&k<=M.width-K&&tt>=0&&tt<=M.height-et){at.bindFramebuffer(F.FRAMEBUFFER,kt);let Yt=M.textures[Dt],oe=Yt.format,me=Yt.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Dt);let Wt=Zt(Yt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.bufferData(F.PIXEL_PACK_BUFFER,Ot.byteLength,F.STREAM_READ),F.readPixels(k,tt,K,et,xt.convert(oe),xt.convert(me),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ze=$!==null?It.get($).__webglFramebuffer:null;at.bindFramebuffer(F.FRAMEBUFFER,Ze);let Oe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Hm(F,Oe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ot),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ge),F.deleteSync(Oe),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,tt=0){let K=Math.pow(2,-tt),et=Math.floor(M.image.width*K),Ot=Math.floor(M.image.height*K),Bt=k!==null?k.x:0,Dt=k!==null?k.y:0;Ht.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,Bt,Dt,et,Ot),at.unbindTexture()},this.copyTextureToTexture=function(M,k,tt=null,K=null,et=0,Ot=0){let Bt,Dt,kt,Yt,oe,me,Wt,ge,Ze,Oe=M.isCompressedTexture?M.mipmaps[Ot]:M.image;if(tt!==null)Bt=tt.max.x-tt.min.x,Dt=tt.max.y-tt.min.y,kt=tt.isBox3?tt.max.z-tt.min.z:1,Yt=tt.min.x,oe=tt.min.y,me=tt.isBox3?tt.min.z:0;else{let be=Math.pow(2,-et);Bt=Math.floor(Oe.width*be),Dt=Math.floor(Oe.height*be),M.isDataArrayTexture?kt=Oe.depth:M.isData3DTexture?kt=Math.floor(Oe.depth*be):kt=1,Yt=0,oe=0,me=0}K!==null?(Wt=K.x,ge=K.y,Ze=K.z):(Wt=0,ge=0,Ze=0);let Pe=xt.convert(k.format),xn=xt.convert(k.type),Xt;k.isData3DTexture?(Ht.setTexture3D(k,0),Xt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ht.setTexture2DArray(k,0),Xt=F.TEXTURE_2D_ARRAY):(Ht.setTexture2D(k,0),Xt=F.TEXTURE_2D),at.activeTexture(F.TEXTURE0),at.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),at.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),at.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let En=at.getParameter(F.UNPACK_ROW_LENGTH),we=at.getParameter(F.UNPACK_IMAGE_HEIGHT),cr=at.getParameter(F.UNPACK_SKIP_PIXELS),vn=at.getParameter(F.UNPACK_SKIP_ROWS),Pl=at.getParameter(F.UNPACK_SKIP_IMAGES);at.pixelStorei(F.UNPACK_ROW_LENGTH,Oe.width),at.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Oe.height),at.pixelStorei(F.UNPACK_SKIP_PIXELS,Yt),at.pixelStorei(F.UNPACK_SKIP_ROWS,oe),at.pixelStorei(F.UNPACK_SKIP_IMAGES,me);let Rs=M.isDataArrayTexture||M.isData3DTexture,hr=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){let be=It.get(M),fn=It.get(k),_i=It.get(be.__renderTarget),ze=It.get(fn.__renderTarget);at.bindFramebuffer(F.READ_FRAMEBUFFER,_i.__webglFramebuffer),at.bindFramebuffer(F.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let on=0;on<kt;on++)Rs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(M).__webglTexture,et,me+on),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(k).__webglTexture,Ot,Ze+on)),F.blitFramebuffer(Yt,oe,Yt+Bt,oe+Dt,Wt,ge,Wt+Bt,ge+Dt,F.DEPTH_BUFFER_BIT,F.NEAREST);at.bindFramebuffer(F.READ_FRAMEBUFFER,null),at.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(et!==0||M.isRenderTargetTexture||It.has(M)){let be=It.get(M),fn=It.get(k);at.bindFramebuffer(F.READ_FRAMEBUFFER,O),at.bindFramebuffer(F.DRAW_FRAMEBUFFER,j);for(let _i=0;_i<kt;_i++)Rs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,et,me+_i):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,be.__webglTexture,et),hr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,Ot,Ze+_i):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,Ot),et!==0?F.blitFramebuffer(Yt,oe,Yt+Bt,oe+Dt,Wt,ge,Wt+Bt,ge+Dt,F.COLOR_BUFFER_BIT,F.NEAREST):hr?F.copyTexSubImage3D(Xt,Ot,Wt,ge,Ze+_i,Yt,oe,Bt,Dt):F.copyTexSubImage2D(Xt,Ot,Wt,ge,Yt,oe,Bt,Dt);at.bindFramebuffer(F.READ_FRAMEBUFFER,null),at.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hr?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Xt,Ot,Wt,ge,Ze,Bt,Dt,kt,Pe,xn,Oe.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,Ot,Wt,ge,Ze,Bt,Dt,kt,Pe,Oe.data):F.texSubImage3D(Xt,Ot,Wt,ge,Ze,Bt,Dt,kt,Pe,xn,Oe):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ot,Wt,ge,Bt,Dt,Pe,xn,Oe.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ot,Wt,ge,Oe.width,Oe.height,Pe,Oe.data):F.texSubImage2D(F.TEXTURE_2D,Ot,Wt,ge,Bt,Dt,Pe,xn,Oe);at.pixelStorei(F.UNPACK_ROW_LENGTH,En),at.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we),at.pixelStorei(F.UNPACK_SKIP_PIXELS,cr),at.pixelStorei(F.UNPACK_SKIP_ROWS,vn),at.pixelStorei(F.UNPACK_SKIP_IMAGES,Pl),Ot===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&F.generateMipmap(Xt),at.unbindTexture()},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),at.unbindTexture()},this.resetState=function(){q=0,B=0,$=null,at.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var ko=function(s,t){let i=s,r=Ja[t],o=null,a=0,l=null,c=[],h={},u=function(g,v){a=i*4+17,o=(function(T){let C=new Array(T);for(let R=0;R<T;R+=1){C[R]=new Array(T);for(let L=0;L<T;L+=1)C[R][L]=null}return C})(a),d(0,0),d(a-7,0),d(0,a-7),x(),p(),_(g,v),i>=7&&m(g),l==null&&(l=w(i,r,c)),b(l,v)},d=function(g,v){for(let T=-1;T<=7;T+=1)if(!(g+T<=-1||a<=g+T))for(let C=-1;C<=7;C+=1)v+C<=-1||a<=v+C||(0<=T&&T<=6&&(C==0||C==6)||0<=C&&C<=6&&(T==0||T==6)||2<=T&&T<=4&&2<=C&&C<=4?o[g+T][v+C]=!0:o[g+T][v+C]=!1)},f=function(){let g=0,v=0;for(let T=0;T<8;T+=1){u(!0,T);let C=js.getLostPoint(h);(T==0||g>C)&&(g=C,v=T)}return v},p=function(){for(let g=8;g<a-8;g+=1)o[g][6]==null&&(o[g][6]=g%2==0);for(let g=8;g<a-8;g+=1)o[6][g]==null&&(o[6][g]=g%2==0)},x=function(){let g=js.getPatternPosition(i);for(let v=0;v<g.length;v+=1)for(let T=0;T<g.length;T+=1){let C=g[v],R=g[T];if(o[C][R]==null)for(let L=-2;L<=2;L+=1)for(let U=-2;U<=2;U+=1)L==-2||L==2||U==-2||U==2||L==0&&U==0?o[C+L][R+U]=!0:o[C+L][R+U]=!1}},m=function(g){let v=js.getBCHTypeNumber(i);for(let T=0;T<18;T+=1){let C=!g&&(v>>T&1)==1;o[Math.floor(T/3)][T%3+a-8-3]=C}for(let T=0;T<18;T+=1){let C=!g&&(v>>T&1)==1;o[T%3+a-8-3][Math.floor(T/3)]=C}},_=function(g,v){let T=r<<3|v,C=js.getBCHTypeInfo(T);for(let R=0;R<15;R+=1){let L=!g&&(C>>R&1)==1;R<6?o[R][8]=L:R<8?o[R+1][8]=L:o[a-15+R][8]=L}for(let R=0;R<15;R+=1){let L=!g&&(C>>R&1)==1;R<8?o[8][a-R-1]=L:R<9?o[8][15-R-1+1]=L:o[8][15-R-1]=L}o[a-8][8]=!g},b=function(g,v){let T=-1,C=a-1,R=7,L=0,U=js.getMaskFunction(v);for(let O=a-1;O>0;O-=2)for(O==6&&(O-=1);;){for(let j=0;j<2;j+=1)if(o[C][O-j]==null){let q=!1;L<g.length&&(q=(g[L]>>>R&1)==1),U(C,O-j)&&(q=!q),o[C][O-j]=q,R-=1,R==-1&&(L+=1,R=7)}if(C+=T,C<0||a<=C){C-=T,T=-T;break}}},A=function(g,v){let T=0,C=0,R=0,L=new Array(v.length),U=new Array(v.length);for(let B=0;B<v.length;B+=1){let $=v[B].dataCount,J=v[B].totalCount-$;C=Math.max(C,$),R=Math.max(R,J),L[B]=new Array($);for(let At=0;At<L[B].length;At+=1)L[B][At]=255&g.getBuffer()[At+T];T+=$;let ct=js.getErrorCorrectPolynomial(J),Et=Ka(L[B],ct.getLength()-1).mod(ct);U[B]=new Array(ct.getLength()-1);for(let At=0;At<U[B].length;At+=1){let Q=At+Et.getLength()-U[B].length;U[B][At]=Q>=0?Et.getAt(Q):0}}let O=0;for(let B=0;B<v.length;B+=1)O+=v[B].totalCount;let j=new Array(O),q=0;for(let B=0;B<C;B+=1)for(let $=0;$<v.length;$+=1)B<L[$].length&&(j[q]=L[$][B],q+=1);for(let B=0;B<R;B+=1)for(let $=0;$<v.length;$+=1)B<U[$].length&&(j[q]=U[$][B],q+=1);return j},w=function(g,v,T){let C=Ag.getRSBlocks(g,v),R=Rg();for(let U=0;U<T.length;U+=1){let O=T[U];R.put(O.getMode(),4),R.put(O.getLength(),js.getLengthInBits(O.getMode(),g)),O.write(R)}let L=0;for(let U=0;U<C.length;U+=1)L+=C[U].dataCount;if(R.getLengthInBits()>L*8)throw"code length overflow. ("+R.getLengthInBits()+">"+L*8+")";for(R.getLengthInBits()+4<=L*8&&R.put(0,4);R.getLengthInBits()%8!=0;)R.putBit(!1);for(;!(R.getLengthInBits()>=L*8||(R.put(236,8),R.getLengthInBits()>=L*8));)R.put(17,8);return A(R,C)};h.addData=function(g,v){v=v||"Byte";let T=null;switch(v){case"Numeric":T=L1(g);break;case"Alphanumeric":T=F1(g);break;case"Byte":T=N1(g);break;case"Kanji":T=k1(g);break;default:throw"mode:"+v}c.push(T),l=null},h.isDark=function(g,v){if(g<0||a<=g||v<0||a<=v)throw g+","+v;return o[g][v]},h.getModuleCount=function(){return a},h.make=function(){if(i<1){let g=1;for(;g<40;g++){let v=Ag.getRSBlocks(g,r),T=Rg();for(let R=0;R<c.length;R++){let L=c[R];T.put(L.getMode(),4),T.put(L.getLength(),js.getLengthInBits(L.getMode(),g)),L.write(T)}let C=0;for(let R=0;R<v.length;R++)C+=v[R].dataCount;if(T.getLengthInBits()<=C*8)break}i=g}u(!1,f())},h.createTableTag=function(g,v){g=g||2,v=typeof v>"u"?g*4:v;let T="";T+='<table style="',T+=" border-width: 0px; border-style: none;",T+=" border-collapse: collapse;",T+=" padding: 0px; margin: "+v+"px;",T+='">',T+="<tbody>";for(let C=0;C<h.getModuleCount();C+=1){T+="<tr>";for(let R=0;R<h.getModuleCount();R+=1)T+='<td style="',T+=" border-width: 0px; border-style: none;",T+=" border-collapse: collapse;",T+=" padding: 0px; margin: 0px;",T+=" width: "+g+"px;",T+=" height: "+g+"px;",T+=" background-color: ",T+=h.isDark(C,R)?"#000000":"#ffffff",T+=";",T+='"/>';T+="</tr>"}return T+="</tbody>",T+="</table>",T},h.createSvgTag=function(g,v,T,C){let R={};typeof arguments[0]=="object"&&(R=arguments[0],g=R.cellSize,v=R.margin,T=R.alt,C=R.title),g=g||2,v=typeof v>"u"?g*4:v,T=typeof T=="string"?{text:T}:T||{},T.text=T.text||null,T.id=T.text?T.id||"qrcode-description":null,C=typeof C=="string"?{text:C}:C||{},C.text=C.text||null,C.id=C.text?C.id||"qrcode-title":null;let L=h.getModuleCount()*g+v*2,U,O,j,q,B="",$;for($="l"+g+",0 0,"+g+" -"+g+",0 0,-"+g+"z ",B+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',B+=R.scalable?"":' width="'+L+'px" height="'+L+'px"',B+=' viewBox="0 0 '+L+" "+L+'" ',B+=' preserveAspectRatio="xMinYMin meet"',B+=C.text||T.text?' role="img" aria-labelledby="'+E([C.id,T.id].join(" ").trim())+'"':"",B+=">",B+=C.text?'<title id="'+E(C.id)+'">'+E(C.text)+"</title>":"",B+=T.text?'<description id="'+E(T.id)+'">'+E(T.text)+"</description>":"",B+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',B+='<path d="',j=0;j<h.getModuleCount();j+=1)for(q=j*g+v,U=0;U<h.getModuleCount();U+=1)h.isDark(j,U)&&(O=U*g+v,B+="M"+O+","+q+$);return B+='" stroke="transparent" fill="black"/>',B+="</svg>",B},h.createDataURL=function(g,v){g=g||2,v=typeof v>"u"?g*4:v;let T=h.getModuleCount()*g+v*2,C=v,R=T-v;return V1(T,T,function(L,U){if(C<=L&&L<R&&C<=U&&U<R){let O=Math.floor((L-C)/g),j=Math.floor((U-C)/g);return h.isDark(j,O)?0:1}else return 1})},h.createImgTag=function(g,v,T){g=g||2,v=typeof v>"u"?g*4:v;let C=h.getModuleCount()*g+v*2,R="";return R+="<img",R+=' src="',R+=h.createDataURL(g,v),R+='"',R+=' width="',R+=C,R+='"',R+=' height="',R+=C,R+='"',T&&(R+=' alt="',R+=E(T),R+='"'),R+="/>",R};let E=function(g){let v="";for(let T=0;T<g.length;T+=1){let C=g.charAt(T);switch(C){case"<":v+="&lt;";break;case">":v+="&gt;";break;case"&":v+="&amp;";break;case'"':v+="&quot;";break;default:v+=C;break}}return v},P=function(g){g=typeof g>"u"?2:g;let T=h.getModuleCount()*1+g*2,C=g,R=T-g,L,U,O,j,q,B={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},$={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},J="";for(L=0;L<T;L+=2){for(O=Math.floor((L-C)/1),j=Math.floor((L+1-C)/1),U=0;U<T;U+=1)q="\u2588",C<=U&&U<R&&C<=L&&L<R&&h.isDark(O,Math.floor((U-C)/1))&&(q=" "),C<=U&&U<R&&C<=L+1&&L+1<R&&h.isDark(j,Math.floor((U-C)/1))?q+=" ":q+="\u2588",J+=g<1&&L+1>=R?$[q]:B[q];J+=`
`}return T%2&&g>0?J.substring(0,J.length-T-1)+Array(T+1).join("\u2580"):J.substring(0,J.length-1)};return h.createASCII=function(g,v){if(g=g||1,g<2)return P(v);g-=1,v=typeof v>"u"?g*2:v;let T=h.getModuleCount()*g+v*2,C=v,R=T-v,L,U,O,j,q=Array(g+1).join("\u2588\u2588"),B=Array(g+1).join("  "),$="",J="";for(L=0;L<T;L+=1){for(O=Math.floor((L-C)/g),J="",U=0;U<T;U+=1)j=1,C<=U&&U<R&&C<=L&&L<R&&h.isDark(O,Math.floor((U-C)/g))&&(j=0),J+=j?q:B;for(O=0;O<g;O+=1)$+=J+`
`}return $.substring(0,$.length-1)},h.renderTo2dContext=function(g,v){v=v||2;let T=h.getModuleCount();for(let C=0;C<T;C++)for(let R=0;R<T;R++)g.fillStyle=h.isDark(C,R)?"black":"white",g.fillRect(R*v,C*v,v,v)},h};ko.stringToBytes=function(s){let t=[];for(let e=0;e<s.length;e+=1){let n=s.charCodeAt(e);t.push(n&255)}return t};ko.createStringToBytes=function(s,t){let e=(function(){let i=B1(s),r=function(){let l=i.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=i.read();if(l==-1)break;let c=r(),h=r(),u=r(),d=String.fromCharCode(l<<8|c),f=h<<8|u;a[d]=f,o+=1}if(o!=t)throw o+" != "+t;return a})(),n=63;return function(i){let r=[];for(let o=0;o<i.length;o+=1){let a=i.charCodeAt(o);if(a<128)r.push(a);else{let l=e[i.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(n)}}return r}};var wn={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Ja={L:1,M:0,Q:3,H:2},Xs={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},js=(function(){let s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return i.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return(o<<10|a)^n},i.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return o<<12|a},i.getPatternPosition=function(o){return s[o-1]},i.getMaskFunction=function(o){switch(o){case Xs.PATTERN000:return function(a,l){return(a+l)%2==0};case Xs.PATTERN001:return function(a,l){return a%2==0};case Xs.PATTERN010:return function(a,l){return l%3==0};case Xs.PATTERN011:return function(a,l){return(a+l)%3==0};case Xs.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case Xs.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case Xs.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case Xs.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},i.getErrorCorrectPolynomial=function(o){let a=Ka([1],0);for(let l=0;l<o;l+=1)a=a.multiply(Ka([1,Ys.gexp(l)],0));return a},i.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case wn.MODE_NUMBER:return 10;case wn.MODE_ALPHA_NUM:return 9;case wn.MODE_8BIT_BYTE:return 8;case wn.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case wn.MODE_NUMBER:return 12;case wn.MODE_ALPHA_NUM:return 11;case wn.MODE_8BIT_BYTE:return 16;case wn.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case wn.MODE_NUMBER:return 14;case wn.MODE_ALPHA_NUM:return 13;case wn.MODE_8BIT_BYTE:return 16;case wn.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},i.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let f=0,p=o.isDark(u,d);for(let x=-1;x<=1;x+=1)if(!(u+x<0||a<=u+x))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||x==0&&m==0||p==o.isDark(u+x,d+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let f=0;o.isDark(u,d)&&(f+=1),o.isDark(u+1,d)&&(f+=1),o.isDark(u,d+1)&&(f+=1),o.isDark(u+1,d+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(l+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(l+=40);let c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(c+=1);let h=Math.abs(100*c/a/a-50)/5;return l+=h*10,l},i})(),Ys=(function(){let s=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)s[n]=1<<n;for(let n=8;n<256;n+=1)s[n]=s[n-4]^s[n-5]^s[n-6]^s[n-8];for(let n=0;n<255;n+=1)t[s[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return s[n]},e})(),Ka=function(s,t){if(typeof s.length>"u")throw s.length+"/"+t;let e=(function(){let i=0;for(;i<s.length&&s[i]==0;)i+=1;let r=new Array(s.length-i+t);for(let o=0;o<s.length-i;o+=1)r[o]=s[o+i];return r})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let r=new Array(n.getLength()+i.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<i.getLength();a+=1)r[o+a]^=Ys.gexp(Ys.glog(n.getAt(o))+Ys.glog(i.getAt(a)));return Ka(r,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let r=Ys.glog(n.getAt(0))-Ys.glog(i.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<i.getLength();a+=1)o[a]^=Ys.gexp(Ys.glog(i.getAt(a))+r);return Ka(o,0).mod(i)},n},Ag=(function(){let s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,r){let o={};return o.totalCount=i,o.dataCount=r,o},e={},n=function(i,r){switch(r){case Ja.L:return s[(i-1)*4+0];case Ja.M:return s[(i-1)*4+1];case Ja.Q:return s[(i-1)*4+2];case Ja.H:return s[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,r){let o=n(i,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let h=o[c*3+0],u=o[c*3+1],d=o[c*3+2];for(let f=0;f<h;f+=1)l.push(t(u,d))}return l},e})(),Rg=function(){let s=[],t=0,e={};return e.getBuffer=function(){return s},e.getAt=function(n){let i=Math.floor(n/8);return(s[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let r=0;r<i;r+=1)e.putBit((n>>>i-r-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);s.length<=i&&s.push(0),n&&(s[i]|=128>>>t%8),t+=1},e},L1=function(s){let t=wn.MODE_NUMBER,e=s,n={};n.getMode=function(){return t},n.getLength=function(o){return e.length},n.write=function(o){let a=e,l=0;for(;l+2<a.length;)o.put(i(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(i(a.substring(l,l+1)),4):a.length-l==2&&o.put(i(a.substring(l,l+2)),7))};let i=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},F1=function(s){let t=wn.MODE_ALPHA_NUM,e=s,n={};n.getMode=function(){return t},n.getLength=function(r){return e.length},n.write=function(r){let o=e,a=0;for(;a+1<o.length;)r.put(i(o.charAt(a))*45+i(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(i(o.charAt(a)),6)};let i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},N1=function(s){let t=wn.MODE_8BIT_BYTE,e=s,n=ko.stringToBytes(s),i={};return i.getMode=function(){return t},i.getLength=function(r){return n.length},i.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},i},k1=function(s){let t=wn.MODE_KANJI,e=s,n=ko.stringToBytes;(function(o,a){let l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let i=n(s),r={};return r.getMode=function(){return t},r.getLength=function(o){return~~(i.length/2)},r.write=function(o){let a=i,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},Pg=function(){let s=[],t={};return t.writeByte=function(e){s.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let r=0;r<i;r+=1)t.writeByte(e[r+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return s},t.toString=function(){let e="";e+="[";for(let n=0;n<s.length;n+=1)n>0&&(e+=","),e+=s[n];return e+="]",e},t},U1=function(){let s=0,t=0,e=0,n="",i={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return i.writeByte=function(a){for(s=s<<8|a&255,t+=8,e+=1;t>=6;)r(s>>>t-6),t-=6},i.flush=function(){if(t>0&&(r(s<<6-t),s=0,t=0),e%3!=0){let a=3-e%3;for(let l=0;l<a;l+=1)n+="="}},i.toString=function(){return n},i},B1=function(s){let t=s,e=0,n=0,i=0,r={};r.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let l=t.charAt(e);if(e+=1,l=="=")return i=0,-1;if(l.match(/^\s$/))continue;n=n<<6|o(l.charCodeAt(0)),i+=6}let a=n>>>i-8&255;return i-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},z1=function(s,t){let e=s,n=t,i=new Array(s*t),r={};r.setPixel=function(c,h,u){i[h*e+c]=u},r.write=function(c){c.writeString("GIF87a"),c.writeShort(e),c.writeShort(n),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(e),c.writeShort(n),c.writeByte(0);let h=2,u=a(h);c.writeByte(h);let d=0;for(;u.length-d>255;)c.writeByte(255),c.writeBytes(u,d,255),d+=255;c.writeByte(u.length-d),c.writeBytes(u,d,u.length-d),c.writeByte(0),c.writeString(";")};let o=function(c){let h=c,u=0,d=0,f={};return f.write=function(p,x){if(p>>>x)throw"length over";for(;u+x>=8;)h.writeByte(255&(p<<u|d)),x-=8-u,p>>>=8-u,d=0,u=0;d=p<<u|d,u=u+x},f.flush=function(){u>0&&h.writeByte(d)},f},a=function(c){let h=1<<c,u=(1<<c)+1,d=c+1,f=l();for(let b=0;b<h;b+=1)f.add(String.fromCharCode(b));f.add(String.fromCharCode(h)),f.add(String.fromCharCode(u));let p=Pg(),x=o(p);x.write(h,d);let m=0,_=String.fromCharCode(i[m]);for(m+=1;m<i.length;){let b=String.fromCharCode(i[m]);m+=1,f.contains(_+b)?_=_+b:(x.write(f.indexOf(_),d),f.size()<4095&&(f.size()==1<<d&&(d+=1),f.add(_+b)),_=b)}return x.write(f.indexOf(_),d),x.write(u,d),x.flush(),p.toByteArray()},l=function(){let c={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;c[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return c[d]},u.contains=function(d){return typeof c[d]<"u"},u};return r},V1=function(s,t,e){let n=z1(s,t);for(let a=0;a<t;a+=1)for(let l=0;l<s;l+=1)n.setPixel(l,a,e(l,a));let i=Pg();n.write(i);let r=U1(),o=i.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},Zd=ko,r2=ko.stringToBytes;function X(s,t,e){return(t=(function(n){var i=(function(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)})(n,"string");return typeof i=="symbol"?i:i+""})(t))in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function Dg(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable}))),e.push.apply(e,n)}return e}function G(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Dg(Object(e),!0).forEach((function(n){X(s,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):Dg(Object(e)).forEach((function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(e,n))}))}return s}function Fe(s,t){if(s==null)return{};var e,n,i=(function(o,a){if(o==null)return{};var l={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(a.indexOf(c)>=0)continue;l[c]=o[c]}return l})(s,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||{}.propertyIsEnumerable.call(s,e)&&(i[e]=s[e])}return i}function is(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))}var Ph=class{constructor(){X(this,"browserShadowBlurConstant",1),X(this,"DPI",96),X(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),X(this,"perfLimitSizeTotal",2097152),X(this,"maxCacheSideLimit",4096),X(this,"minCacheSideLimit",256),X(this,"disableStyleCopyPaste",!1),X(this,"enableGLFiltering",!0),X(this,"textureSize",4096),X(this,"forceGLPutImageData",!1),X(this,"cachesBoundsOfCurve",!1),X(this,"fontPaths",{}),X(this,"NUM_FRACTION_DIGITS",4)}},Se=new class extends Ph{constructor(s){super(),this.configure(s)}configure(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.assign(this,s)}addFonts(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.fontPaths=G(G({},this.fontPaths),s)}removeFonts(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach((s=>{delete this.fontPaths[s]}))}clearFonts(){this.fontPaths={}}restoreDefaults(s){let t=new Ph,e=s?.reduce(((n,i)=>(n[i]=t[i],n)),{})||t;this.configure(e)}},$s=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return console[s]("fabric",...e)},di=class extends Error{constructor(t,e){super("fabric: ".concat(t),e)}},Dh=class extends di{constructor(t){super("".concat(t," 'options.signal' is in 'aborted' state"))}},cf=class{},hf=class extends cf{testPrecision(t,e){let n="precision ".concat(e,` float;
void main(){}`),i=t.createShader(t.FRAGMENT_SHADER);return!!i&&(t.shaderSource(i,n),t.compileShader(i),!!t.getShaderParameter(i,t.COMPILE_STATUS))}queryWebGL(t){let e=t.getContext("webgl");e&&(this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find((n=>this.testPrecision(e,n))),e.getExtension("WEBGL_lose_context").loseContext(),$s("log","WebGL: max texture size ".concat(this.maxTextureSize)))}isSupported(t){return!!this.maxTextureSize&&this.maxTextureSize>=t}},G1={},Ig;var ts=()=>Ig||(Ig={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new hf,dispose(){},copyPasteData:G1}),ea=()=>ts().document,dl=()=>ts().window,d0=()=>{var s;return Math.max((s=Se.devicePixelRatio)!==null&&s!==void 0?s:dl().devicePixelRatio,1)},nl=new class{constructor(){X(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache(s){let{fontFamily:t,fontStyle:e,fontWeight:n}=s;t=t.toLowerCase();let i=this.charWidthsCache;i.has(t)||i.set(t,new Map);let r=i.get(t),o="".concat(e.toLowerCase(),"_").concat((n+"").toLowerCase());return r.has(o)||r.set(o,new Map),r.get(o)}clearFontCache(s){s?this.charWidthsCache.delete((s||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(s){let{perfLimitSizeTotal:t}=Se,e=Math.sqrt(t*s);return[Math.floor(e),Math.floor(t/e)]}},uf="6.9.1";function Hr(){}var Qs=Math.PI/2,Ss=2*Math.PI,zf=Math.PI/180,In=Object.freeze([1,0,0,1,0,0]),Vf=16,qs=.4477152502,ae="center",Ce="left",Bn="top",df="bottom",Ye="right",zn="none",Gf=/\r?\n/,f0="moving",ru="scaling",p0="rotating",Hf="rotate",m0="skewing",al="resizing",g0="modifyPoly",H1="modifyPath",Ih="changed",ou="scale",On="scaleX",Qn="scaleY",na="skewX",ia="skewY",tn="fill",Vn="stroke",Oh="modified",Uo="json",Jd="svg",Ut=new class{constructor(){this[Uo]=new Map,this[Jd]=new Map}has(s){return this[Uo].has(s)}getClass(s){let t=this[Uo].get(s);if(!t)throw new di("No class registered for ".concat(s));return t}setClass(s,t){t?this[Uo].set(t,s):(this[Uo].set(s.type,s),this[Uo].set(s.type.toLowerCase(),s))}getSVGClass(s){return this[Jd].get(s)}setSVGClass(s,t){this[Jd].set(t??s.type.toLowerCase(),s)}},Lh=new class extends Array{remove(s){let t=this.indexOf(s);t>-1&&this.splice(t,1)}cancelAll(){let s=this.splice(0);return s.forEach((t=>t.abort())),s}cancelByCanvas(s){if(!s)return[];let t=this.filter((e=>{var n;return e.target===s||typeof e.target=="object"&&((n=e.target)===null||n===void 0?void 0:n.canvas)===s}));return t.forEach((e=>e.abort())),t}cancelByTarget(s){if(!s)return[];let t=this.filter((e=>e.target===s));return t.forEach((e=>e.abort())),t}},ff=class{constructor(){X(this,"__eventListeners",{})}on(t,e){if(this.__eventListeners||(this.__eventListeners={}),typeof t=="object")return Object.entries(t).forEach((n=>{let[i,r]=n;this.on(i,r)})),()=>this.off(t);if(e){let n=t;return this.__eventListeners[n]||(this.__eventListeners[n]=[]),this.__eventListeners[n].push(e),()=>this.off(n,e)}return()=>!1}once(t,e){if(typeof t=="object"){let n=[];return Object.entries(t).forEach((i=>{let[r,o]=i;n.push(this.once(r,o))})),()=>n.forEach((i=>i()))}if(e){let n=this.on(t,(function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];e.call(this,...r),n()}));return n}return()=>!1}_removeEventListener(t,e){if(this.__eventListeners[t])if(e){let n=this.__eventListeners[t],i=n.indexOf(e);i>-1&&n.splice(i,1)}else this.__eventListeners[t]=[]}off(t,e){if(this.__eventListeners)if(t===void 0)for(let n in this.__eventListeners)this._removeEventListener(n);else typeof t=="object"?Object.entries(t).forEach((n=>{let[i,r]=n;this._removeEventListener(i,r)})):this._removeEventListener(t,e)}fire(t,e){var n;if(!this.__eventListeners)return;let i=(n=this.__eventListeners[t])===null||n===void 0?void 0:n.concat();if(i)for(let r=0;r<i.length;r++)i[r].call(this,e||{})}},wr=(s,t)=>{let e=s.indexOf(t);return e!==-1&&s.splice(e,1),s},Ii=s=>{if(s===0)return 1;switch(Math.abs(s)/Qs){case 1:case 3:return 0;case 2:return-1}return Math.cos(s)},Oi=s=>{if(s===0)return 0;let t=s/Qs,e=Math.sign(s);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(s)},st=class s{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new s(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new s(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new s(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new s(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new s(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new s(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new s(this.x/t.x,this.y/t.y)}scalarDivide(t){return new s(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.5;return e=Math.max(Math.min(1,e),0),new s(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new s(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new s(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return"".concat(this.x,",").concat(this.y)}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new s(this.x,this.y)}rotate(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wf,n=Oi(t),i=Ii(t),r=this.subtract(e);return new s(r.x*i-r.y*n,r.x*n+r.y*i).add(e)}transform(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return new s(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},Wf=new st(0,0),Ah=s=>!!s&&Array.isArray(s._objects);function _0(s){class t extends s{constructor(){super(...arguments),X(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];let o=this._objects.push(...i);return i.forEach((a=>this._onObjectAdded(a))),o}insertAt(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return this._objects.splice(n,0,...r),r.forEach((a=>this._onObjectAdded(a))),this._objects.length}remove(){let n=this._objects,i=[];for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.forEach((l=>{let c=n.indexOf(l);c!==-1&&(n.splice(c,1),i.push(l),this._onObjectRemoved(l))})),i}forEachObject(n){this.getObjects().forEach(((i,r,o)=>n(i,r,o)))}getObjects(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length===0?[...this._objects]:this._objects.filter((o=>o.isType(...i)))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,i){return!!this._objects.includes(n)||!!i&&this._objects.some((r=>r instanceof t&&r.contains(n,!0)))}complexity(){return this._objects.reduce(((n,i)=>n+=i.complexity?i.complexity():0),0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(wr(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(wr(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let o=this.findNewLowerIndex(n,r,i);return wr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let o=this.findNewUpperIndex(n,r,i);return wr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,i){return n!==this._objects[i]&&(wr(this._objects,n),this._objects.splice(i,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,i,r){let o;if(r){o=i;for(let a=i-1;a>=0;--a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i-1;return o}findNewUpperIndex(n,i,r){let o;if(r){o=i;for(let a=i+1;a<this._objects.length;++a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i+1;return o}collectObjects(n){let{left:i,top:r,width:o,height:a}=n,{includeIntersecting:l=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=[],h=new st(i,r),u=h.add(new st(o,a));for(let d=this._objects.length-1;d>=0;d--){let f=this._objects[d];f.selectable&&f.visible&&(l&&f.intersectsWithRect(h,u)||f.isContainedWithinRect(h,u)||l&&f.containsPoint(h)||l&&f.containsPoint(u))&&c.push(f)}return c}}return t}var Fh=class extends ff{_setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(let e in t)this.set(e,t[e])}_setObject(t){for(let e in t)this._set(e,t[e])}set(t,e){return typeof t=="object"?this._setObject(t):this._set(t,e),this}_set(t,e){this[t]=e}toggle(t){let e=this.get(t);return typeof e=="boolean"&&this.set(t,!e),this}get(t){return this[t]}};function il(s){return dl().requestAnimationFrame(s)}function x0(s){return dl().cancelAnimationFrame(s)}var W1=0,tr=()=>W1++,es=()=>{let s=ea().createElement("canvas");if(!s||s.getContext===void 0)throw new di("Failed to create `canvas` element");return s},v0=()=>ea().createElement("img"),ti=s=>{let t=es();return t.width=s.width,t.height=s.height,t},Xf=(s,t,e)=>s.toDataURL("image/".concat(t),e),jf=(s,t,e)=>new Promise(((n,i)=>{s.toBlob(n,"image/".concat(t),e)})),Ve=s=>s*zf,ns=s=>s/zf,y0=s=>s.every(((t,e)=>t===In[e])),Tn=(s,t,e)=>new st(s).transform(t,e),$n=s=>{let t=1/(s[0]*s[3]-s[1]*s[2]),e=[t*s[3],-t*s[1],-t*s[2],t*s[0],0,0],{x:n,y:i}=new st(s[4],s[5]).transform(e,!0);return e[4]=-n,e[5]=-i,e},Ge=(s,t,e)=>[s[0]*t[0]+s[2]*t[1],s[1]*t[0]+s[3]*t[1],s[0]*t[2]+s[2]*t[3],s[1]*t[2]+s[3]*t[3],e?0:s[0]*t[4]+s[2]*t[5]+s[4],e?0:s[1]*t[4]+s[3]*t[5]+s[5]],au=(s,t)=>s.reduceRight(((e,n)=>n&&e?Ge(n,e,t):n||e),void 0)||In.concat(),S0=s=>{let[t,e]=s;return Math.atan2(e,t)},Zo=s=>{let t=S0(s),e=Math.pow(s[0],2)+Math.pow(s[1],2),n=Math.sqrt(e),i=(s[0]*s[3]-s[2]*s[1])/n,r=Math.atan2(s[0]*s[2]+s[1]*s[3],e);return{angle:ns(t),scaleX:n,scaleY:i,skewX:ns(r),skewY:0,translateX:s[4]||0,translateY:s[5]||0}},sa=function(s){return[1,0,0,1,s,arguments.length>1&&arguments[1]!==void 0?arguments[1]:0]};function Kr(){let{angle:s=0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{x:t=0,y:e=0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Ve(s),i=Ii(n),r=Oi(n);return[i,r,-r,i,t?t-(i*t-r*e):0,e?e-(r*t+i*e):0]}var lu=function(s){return[s,0,0,arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,0,0]},b0=s=>Math.tan(Ve(s)),Yf=s=>[1,0,b0(s),1,0,0],qf=s=>[1,b0(s),0,1,0,0],fl=s=>{let{scaleX:t=1,scaleY:e=1,flipX:n=!1,flipY:i=!1,skewX:r=0,skewY:o=0}=s,a=lu(n?-t:t,i?-e:e);return r&&(a=Ge(a,Yf(r),!0)),o&&(a=Ge(a,qf(o),!0)),a},M0=s=>{let{translateX:t=0,translateY:e=0,angle:n=0}=s,i=sa(t,e);n&&(i=Ge(i,Kr({angle:n})));let r=fl(s);return y0(r)||(i=Ge(i,r)),i},sl=function(s){let{signal:t,crossOrigin:e=null}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise((function(n,i){if(t&&t.aborted)return i(new Dh("loadImage"));let r=v0(),o;t&&(o=function(l){r.src="",i(l)},t.addEventListener("abort",o,{once:!0}));let a=function(){r.onload=r.onerror=null,o&&t?.removeEventListener("abort",o),n(r)};s?(r.onload=a,r.onerror=function(){o&&t?.removeEventListener("abort",o),i(new di("Error loading ".concat(r.src)))},e&&(r.crossOrigin=e),r.src=s):a()}))},Jo=function(s){let{signal:t,reviver:e=Hr}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((n,i)=>{let r=[];t&&t.addEventListener("abort",i,{once:!0}),Promise.all(s.map((o=>Ut.getClass(o.type).fromObject(o,{signal:t}).then((a=>(e(o,a),r.push(a),a)))))).then(n).catch((o=>{r.forEach((a=>{a.dispose&&a.dispose()})),i(o)})).finally((()=>{t&&t.removeEventListener("abort",i)}))}))},pl=function(s){let{signal:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((e,n)=>{let i=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(s).map((a=>a&&a.type&&Ut.has(a.type)?Jo([a],{signal:t}).then((l=>{let[c]=l;return i.push(c),c})):a)),o=Object.keys(s);Promise.all(r).then((a=>a.reduce(((l,c,h)=>(l[o[h]]=c,l)),{}))).then(e).catch((a=>{i.forEach((l=>{l.dispose&&l.dispose()})),n(a)})).finally((()=>{t&&t.removeEventListener("abort",n)}))}))},$r=function(s){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).reduce(((t,e)=>(e in s&&(t[e]=s[e]),t)),{})},Zf=(s,t)=>Object.keys(s).reduce(((e,n)=>(t(s[n],n,s)&&(e[n]=s[n]),e)),{}),De=(s,t)=>parseFloat(Number(s).toFixed(t)),Ko=s=>"matrix("+s.map((t=>De(t,Se.NUM_FRACTION_DIGITS))).join(" ")+")",ui=s=>!!s&&s.toLive!==void 0,Og=s=>!!s&&typeof s.toObject=="function",Lg=s=>!!s&&s.offsetX!==void 0&&"source"in s,Tr=s=>!!s&&"multiSelectionStacking"in s;function w0(s){let t=s&&Ai(s),e=0,n=0;if(!s||!t)return{left:e,top:n};let i=s,r=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;i&&(i.parentNode||i.host)&&(i=i.parentNode||i.host,i===t?(e=o.scrollLeft||r.scrollLeft||0,n=o.scrollTop||r.scrollTop||0):(e+=i.scrollLeft||0,n+=i.scrollTop||0),i.nodeType!==1||i.style.position!=="fixed"););return{left:e,top:n}}var Ai=s=>s.ownerDocument||null,T0=s=>{var t;return((t=s.ownerDocument)===null||t===void 0?void 0:t.defaultView)||null},C0=function(s,t,e){let{width:n,height:i}=e,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;s.width=n,s.height=i,r>1&&(s.setAttribute("width",(n*r).toString()),s.setAttribute("height",(i*r).toString()),t.scale(r,r))},pf=(s,t)=>{let{width:e,height:n}=t;e&&(s.style.width=typeof e=="number"?"".concat(e,"px"):e),n&&(s.style.height=typeof n=="number"?"".concat(n,"px"):n)};function Fg(s){return s.onselectstart!==void 0&&(s.onselectstart=()=>!1),s.style.userSelect=zn,s}var Nh=class{constructor(t){X(this,"_originalCanvasStyle",void 0),X(this,"lower",void 0);let e=this.createLowerCanvas(t);this.lower={el:e,ctx:e.getContext("2d")}}createLowerCanvas(t){let e=(n=t)&&n.getContext!==void 0?t:t&&ea().getElementById(t)||es();var n;if(e.hasAttribute("data-fabric"))throw new di("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=e.style.cssText,e.setAttribute("data-fabric","main"),e.classList.add("lower-canvas"),e}cleanupDOM(t){let{width:e,height:n}=t,{el:i}=this.lower;i.classList.remove("lower-canvas"),i.removeAttribute("data-fabric"),i.setAttribute("width","".concat(e)),i.setAttribute("height","".concat(n)),i.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(t,e){let{el:n,ctx:i}=this.lower;C0(n,i,t,e)}setCSSDimensions(t){pf(this.lower.el,t)}calcOffset(){return(function(t){var e;let n=t&&Ai(t),i={left:0,top:0};if(!n)return i;let r=((e=T0(t))===null||e===void 0?void 0:e.getComputedStyle(t,null))||{};i.left+=parseInt(r.borderLeftWidth,10)||0,i.top+=parseInt(r.borderTopWidth,10)||0,i.left+=parseInt(r.paddingLeft,10)||0,i.top+=parseInt(r.paddingTop,10)||0;let o={left:0,top:0},a=n.documentElement;t.getBoundingClientRect!==void 0&&(o=t.getBoundingClientRect());let l=w0(t);return{left:o.left+l.left-(a.clientLeft||0)+i.left,top:o.top+l.top-(a.clientTop||0)+i.top}})(this.lower.el)}dispose(){ts().dispose(this.lower.el),delete this.lower}},X1={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...In]},j1=["objects"],er=class s extends _0(Fh){get lowerCanvasEl(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.ctx}static getDefaults(){return s.ownDefaults}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new Nh(t)}add(){let t=super.add(...arguments);return arguments.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=super.insertAt(t,...n);return n.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),r}remove(){let t=super.remove(...arguments);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}_onObjectAdded(t){t.canvas&&t.canvas!==this&&($s("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?d0():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}setWidth(t,e){return this.setDimensions({width:t},e)}setHeight(t,e){return this.setDimensions({height:t},e)}_setDimensionsImpl(t){let{cssOnly:e=!1,backstoreOnly:n=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e){let i=G({width:this.width,height:this.height},t);this.elements.setDimensions(i,this.getRetinaScaling()),this.hasLostContext=!0,this.width=i.width,this.height=i.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return this.viewportTransform[0]}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,i=[...this.viewportTransform],r=Tn(t,$n(i));i[0]=e,i[3]=e;let o=Tn(r,i);i[4]+=n.x-o.x,i[5]+=n.y-o.y,this.setViewportTransform(i)}setZoom(t){this.zoomToPoint(new st(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new st(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=il((()=>this.renderAndReset())))}calcViewportBoundaries(){let t=this.width,e=this.height,n=$n(this.viewportTransform),i=Tn({x:0,y:0},n),r=Tn({x:t,y:e},n),o=i.min(r),a=i.max(r);return this.vptCoords={tl:o,tr:new st(a.x,o.y),bl:new st(o.x,a.y),br:a}}cancelRequestedRender(){this.nextRenderHandle&&(x0(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,i=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality="best",this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),i&&(i._set("canvas",this),i.shouldCache(),i._transformDone=!0,i.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,i)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,i=e.length;n<i;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this["".concat(e,"Color")],i=this["".concat(e,"Image")],r=this.viewportTransform,o=this["".concat(e,"Vpt")];if(!n&&!i)return;let a=ui(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=a?n.toLive(t):n,o&&t.transform(...r),a){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(i){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=o,o&&t.transform(...r),i.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenter(){return{top:this.height/2,left:this.width/2}}getCenterPoint(){return new st(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new st(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new st(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return Tn(this.getCenterPoint(),$n(this.viewportTransform))}_centerObject(t,e){t.setXY(e,ae,ae),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,i=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return G(G(G({version:uf},$r(this,e)),{},{objects:this._objects.filter((r=>!r.excludeFromExport)).map((r=>this._toObject(r,t,e)))},this.__serializeBgOverlay(t,e)),i?{clipPath:i}:null)}_toObject(t,e,n){let i;this.includeDefaultValues||(i=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!i),r}__serializeBgOverlay(t,e){let n={},i=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,a=this.overlayColor;return ui(o)?o.excludeFromExport||(n.background=o.toObject(e)):o&&(n.background=o),ui(a)?a.excludeFromExport||(n.overlay=a.toObject(e)):a&&(n.overlay=a),i&&!i.excludeFromExport&&(n.backgroundImage=this._toObject(i,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;t.reviver=e;let n=[];return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId,`)" >
`)),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||"".concat(this.width),i=e.height||"".concat(this.height),r=Se.NUM_FRACTION_DIGITS,o=e.viewBox,a;if(o)a='viewBox="'.concat(o.x," ").concat(o.y," ").concat(o.width," ").concat(o.height,'" ');else if(this.svgViewportTransformation){let l=this.viewportTransform;a='viewBox="'.concat(De(-l[4]/l[0],r)," ").concat(De(-l[5]/l[3],r)," ").concat(De(this.width/l[0],r)," ").concat(De(this.height/l[3],r),'" ')}else a='viewBox="0 0 '.concat(this.width," ").concat(this.height,'" ');t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',i,'" ',a,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",uf,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId="CLIPPATH_".concat(tr()),'<clipPath id="'.concat(e.clipPathId,`" >
`).concat(e.toClipPathSVG(t.reviver),`</clipPath>
`)):""}createSVGRefElementsMarkup(){return["background","overlay"].map((t=>{let e=this["".concat(t,"Color")];if(ui(e)){let n=this["".concat(t,"Vpt")],i=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?i[0]:1),height:this.height/(n?i[3]:1)};return e.toSVG(r,{additionalTransform:n?Ko(i):""})}})).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=Se.fontPaths;this._objects.forEach((function r(o){t.push(o),Ah(o)&&o._objects.forEach(r)})),t.forEach((r=>{if(!(o=r)||typeof o._renderText!="function")return;var o;let{styles:a,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,a&&Object.values(a).forEach((c=>{Object.values(c).forEach((h=>{let{fontFamily:u=""}=h;!e[u]&&n[u]&&(e[u]=!0)}))})))}));let i=Object.keys(e).map((r=>`		@font-face {
			font-family: '`.concat(r,`';
			src: url('`).concat(n[r],`');
		}
`))).join("");return i?`	<style type="text/css"><![CDATA[
`.concat(i,`]]></style>
`):""}_setSVGObjects(t,e){this.forEachObject((n=>{n.excludeFromExport||this._setSVGObject(t,n,e)}))}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let i=this[e];i&&!i.excludeFromExport&&i.toSVG&&t.push(i.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this["".concat(e,"Color")];if(n)if(ui(n)){let i=n.repeat||"",r=this.width,o=this.height,a=this["".concat(e,"Vpt")]?Ko($n(this.viewportTransform)):"";t.push('<rect transform="'.concat(a," translate(").concat(r/2,",").concat(o/2,')" x="').concat(n.offsetX-r/2,'" y="').concat(n.offsetY-o/2,'" width="').concat(i!=="repeat-y"&&i!=="no-repeat"||!Lg(n)?r:n.source.width,'" height="').concat(i!=="repeat-x"&&i!=="no-repeat"||!Lg(n)?o:n.source.height,'" fill="url(#SVGID_').concat(n.id,`)"></rect>
`))}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e){let{signal:n}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t)return Promise.reject(new di("`json` is undefined"));let i=typeof t=="string"?JSON.parse(t):t,{objects:r=[]}=i,o=Fe(i,j1),{backgroundImage:a,background:l,overlayImage:c,overlay:h,clipPath:u}=o,d=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([Jo(r,{reviver:e,signal:n}),pl({backgroundImage:a,backgroundColor:l,overlayImage:c,overlayColor:h,clipPath:u},{signal:n})]).then((f=>{let[p,x]=f;return this.clear(),this.add(...p),this.set(o),this.set(x),this.renderOnAddRemove=d,this}))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=ti(this);return new this.constructor(t)}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Xf(this.toCanvasElement(o,t),e,n)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return jf(this.toCanvasElement(o,t),e,n)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,{width:e,height:n,left:i,top:r,filter:o}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,u=this.height,d=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,x=[f,0,0,f,(p[4]-(i||0))*t,(p[5]-(r||0))*t],m=this.enableRetinaScaling,_=ti({width:a,height:l}),b=o?this._objects.filter((A=>o(A))):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=x,this.width=a,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(_.getContext("2d"),b),this.viewportTransform=p,this.width=h,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=m,this.skipControlsDrawing=d,_}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),Lh.cancelByCanvas(this),this.disposed=!0,new Promise(((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()}))}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject((t=>t.dispose())),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return"#<Canvas (".concat(this.complexity(),"): { objects: ").concat(this._objects.length," }>")}};X(er,"ownDefaults",X1);var Y1=["touchstart","touchmove","touchend"],E0=s=>{let t=w0(s.target),e=(function(n){let i=n.changedTouches;return i&&i[0]?i[0]:n})(s);return new st(e.clientX+t.left,e.clientY+t.top)},kh=s=>Y1.includes(s.type)||s.pointerType==="touch",Ng=s=>{s.preventDefault(),s.stopPropagation()},Qi=s=>{let t=0,e=0,n=0,i=0;for(let r=0,o=s.length;r<o;r++){let{x:a,y:l}=s[r];(a>n||!r)&&(n=a),(a<t||!r)&&(t=a),(l>i||!r)&&(i=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:i-e}},q1=["translateX","translateY","scaleX","scaleY"],A0=(s,t)=>$o(s,Ge(t,s.calcOwnMatrix())),$o=(s,t)=>{let e=Zo(t),{translateX:n,translateY:i,scaleX:r,scaleY:o}=e,a=Fe(e,q1),l=new st(n,i);s.flipX=!1,s.flipY=!1,Object.assign(s,a),s.set({scaleX:r,scaleY:o}),s.setPositionByOrigin(l,ae,ae)},R0=s=>{s.scaleX=1,s.scaleY=1,s.skewX=0,s.skewY=0,s.flipX=!1,s.flipY=!1,s.rotate(0)},Jf=s=>({scaleX:s.scaleX,scaleY:s.scaleY,skewX:s.skewX,skewY:s.skewY,angle:s.angle,left:s.left,flipX:s.flipX,flipY:s.flipY,top:s.top}),cu=(s,t,e)=>{let n=s/2,i=t/2,r=[new st(-n,-i),new st(n,-i),new st(-n,i),new st(n,i)].map((a=>a.transform(e))),o=Qi(r);return new st(o.width,o.height)},ml=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:In;return Ge($n(arguments.length>1&&arguments[1]!==void 0?arguments[1]:In),s)},ys=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:In,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:In;return s.transform(ml(t,e))},P0=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:In,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:In;return s.transform(ml(t,e),!0)},mf=(s,t,e)=>{let n=ml(t,e);return $o(s,Ge(n,s.calcOwnMatrix())),n},Kf=(s,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)===null||e===void 0||e.fire("object:".concat(s),G(G({},t),{},{target:n})),n.fire(s,t)},Z1={left:-.5,top:-.5,center:0,bottom:.5,right:.5},Ke=s=>typeof s=="string"?Z1[s]:s-.5,Uh="not-allowed";function D0(s){return Ke(s.originX)===Ke(ae)&&Ke(s.originY)===Ke(ae)}function kg(s){return .5-Ke(s)}var Di=(s,t)=>s[t],$f=(s,t,e,n)=>({e:s,transform:t,pointer:new st(e,n)});function I0(s,t){let e=s.getTotalAngle()+ns(Math.atan2(t.y,t.x))+360;return Math.round(e%360/45)}function hu(s,t,e,n,i){var r;let{target:o,corner:a}=s,l=o.controls[a],c=((r=o.canvas)===null||r===void 0?void 0:r.getZoom())||1,h=o.padding/c,u=(function(d,f,p,x){let m=d.getRelativeCenterPoint(),_=p!==void 0&&x!==void 0?d.translateToGivenOrigin(m,ae,ae,p,x):new st(d.left,d.top);return(d.angle?f.rotate(-Ve(d.angle),m):f).subtract(_)})(o,new st(n,i),t,e);return u.x>=h&&(u.x-=h),u.x<=-h&&(u.x+=h),u.y>=h&&(u.y-=h),u.y<=h&&(u.y+=h),u.x-=l.offsetX,u.y-=l.offsetY,u}var O0=(s,t,e,n)=>{let{target:i,offsetX:r,offsetY:o}=t,a=e-r,l=n-o,c=!Di(i,"lockMovementX")&&i.left!==a,h=!Di(i,"lockMovementY")&&i.top!==l;return c&&i.set(Ce,a),h&&i.set(Bn,l),(c||h)&&Kf(f0,$f(s,t,e,n)),c||h},Bh=s=>s.replace(/\s+/g," "),Ug={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},Kd=(s,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+6*(t-s)*e:e<.5?t:e<2/3?s+(t-s)*(2/3-e)*6:s),Bg=(s,t,e,n)=>{s/=255,t/=255,e/=255;let i=Math.max(s,t,e),r=Math.min(s,t,e),o,a,l=(i+r)/2;if(i===r)o=a=0;else{let c=i-r;switch(a=l>.5?c/(2-i-r):c/(i+r),i){case s:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-s)/c+2;break;case e:o=(s-t)/c+4}o/=6}return[Math.round(360*o),Math.round(100*a),Math.round(100*l),n]},zg=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"1";return parseFloat(s)/(s.endsWith("%")?100:1)},Sh=s=>Math.min(Math.round(s),255).toString(16).toUpperCase().padStart(2,"0"),Vg=s=>{let[t,e,n,i=1]=s,r=Math.round(.3*t+.59*e+.11*n);return[r,r,r,i]},Ln=class s{constructor(t){if(X(this,"isUnrecognised",!1),t)if(t instanceof s)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,i,r=1]=t;this.setSource([e,n,i,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in Ug&&(t=Ug[t]),t==="transparent"?[255,255,255,0]:s.sourceFromHex(t)||s.sourceFromRgb(t)||s.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return"rgb(".concat(t,",").concat(e,",").concat(n,")")}toRgba(){return"rgba(".concat(this.getSource().join(","),")")}toHsl(){let[t,e,n]=Bg(...this.getSource());return"hsl(".concat(t,",").concat(e,"%,").concat(n,"%)")}toHsla(){let[t,e,n,i]=Bg(...this.getSource());return"hsla(".concat(t,",").concat(e,"%,").concat(n,"%,").concat(i,")")}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,i]=this.getSource();return"".concat(Sh(t)).concat(Sh(e)).concat(Sh(n)).concat(Sh(Math.round(255*i)))}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(Vg(this.getSource())),this}toBlackWhite(t){let[e,,,n]=Vg(this.getSource()),i=e<(t||127)?0:255;return this.setSource([i,i,i,n]),this}overlayWith(t){t instanceof s||(t=new s(t));let e=this.getSource(),n=t.getSource(),[i,r,o]=e.map(((a,l)=>Math.round(.5*a+.5*n[l])));return this.setSource([i,r,o,e[3]]),this}static fromRgb(t){return s.fromRgba(t)}static fromRgba(t){return new s(s.sourceFromRgb(t))}static sourceFromRgb(t){let e=Bh(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,i,r]=e.slice(1,4).map((o=>{let a=parseFloat(o);return o.endsWith("%")?Math.round(2.55*a):a}));return[n,i,r,zg(e[4])]}}static fromHsl(t){return s.fromHsla(t)}static fromHsla(t){return new s(s.sourceFromHsl(t))}static sourceFromHsl(t){let e=Bh(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(s.parseAngletoDegrees(e[1])%360+360)%360/360,i=parseFloat(e[2])/100,r=parseFloat(e[3])/100,o,a,l;if(i===0)o=a=l=r;else{let c=r<=.5?r*(i+1):r+i-r*i,h=2*r-c;o=Kd(h,c,n+1/3),a=Kd(h,c,n),l=Kd(h,c,n-1/3)}return[Math.round(255*o),Math.round(255*a),Math.round(255*l),zg(e[4])]}static fromHex(t){return new s(s.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map((l=>l+l)):e.match(/.{2}/g);let[i,r,o,a=255]=n.map((l=>parseInt(l,16)));return[i,r,o,a/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?ns(n):e.includes("turn")?360*n:n}},Wr=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Vf,e=/\D{0,2}$/.exec(s),n=parseFloat(s),i=Se.DPI;switch(e?.[0]){case"mm":return n*i/25.4;case"cm":return n*i/2.54;case"in":return n*i;case"pt":return n*i/72;case"pc":return n*i/72*12;case"em":return n*t;default:return n}},L0=s=>{let[t,e]=s.trim().split(" "),[n,i]=(r=t)&&r!==zn?[r.slice(1,4),r.slice(5,8)]:r===zn?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:i}},ll=function(s,t){let e,n,i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t)if(t.toLive)e="url(#SVGID_".concat(t.id,")");else{let r=new Ln(t),o=r.getAlpha();e=r.toRgb(),o!==1&&(n=o.toString())}else e="none";return i?"".concat(s,": ").concat(e,"; ").concat(n?"".concat(s,"-opacity: ").concat(n,"; "):""):"".concat(s,'="').concat(e,'" ').concat(n?"".concat(s,'-opacity="').concat(n,'" '):"")},zh=class{getSvgStyles(t){let e=this.fillRule?this.fillRule:"nonzero",n=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):zn,r=this.strokeDashOffset?this.strokeDashOffset:"0",o=this.strokeLineCap?this.strokeLineCap:"butt",a=this.strokeLineJoin?this.strokeLineJoin:"miter",l=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=this.opacity!==void 0?this.opacity:"1",h=this.visible?"":" visibility: hidden;",u=t?"":this.getSvgFilter(),d=ll(tn,this.fill);return[ll(Vn,this.stroke),"stroke-width: ",n,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",o,"; ","stroke-dashoffset: ",r,"; ","stroke-linejoin: ",a,"; ","stroke-miterlimit: ",l,"; ",d,"fill-rule: ",e,"; ","opacity: ",c,";",u,h].join("")}getSvgFilter(){return this.shadow?"filter: url(#SVGID_".concat(this.shadow.id,");"):""}getSvgCommons(){return[this.id?'id="'.concat(this.id,'" '):"",this.clipPath?'clip-path="url(#'.concat(this.clipPath.clipPathId,')" '):""].join("")}getSvgTransform(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t?this.calcTransformMatrix():this.calcOwnMatrix(),i='transform="'.concat(Ko(n));return"".concat(i).concat(e,'" ')}_toSVG(t){return[""]}toSVG(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})}toClipPathSVG(t){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})}_createBaseClipPathSVGMarkup(t){let{reviver:e,additionalTransform:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(""),r=t.indexOf("COMMON_PARTS");return t[r]=i,e?e(t.join("")):t.join("")}_createBaseSVGMarkup(t){let{noStyle:e,reviver:n,withShadow:i,additionalTransform:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e?"":'style="'.concat(this.getSvgStyles(),'" '),a=i?'style="'.concat(this.getSvgFilter(),'" '):"",l=this.clipPath,c=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",h=l&&l.absolutePositioned,u=this.stroke,d=this.fill,f=this.shadow,p=[],x=t.indexOf("COMMON_PARTS"),m;l&&(l.clipPathId="CLIPPATH_".concat(tr()),m='<clipPath id="'.concat(l.clipPathId,`" >
`).concat(l.toClipPathSVG(n),`</clipPath>
`)),h&&p.push("<g ",a,this.getSvgCommons(),` >
`),p.push("<g ",this.getSvgTransform(!1),h?"":a+this.getSvgCommons(),` >
`);let _=[o,c,e?"":this.addPaintOrder()," ",r?'transform="'.concat(r,'" '):""].join("");return t[x]=_,ui(d)&&p.push(d.toSVG(this)),ui(u)&&p.push(u.toSVG(this)),f&&p.push(f.toSVG(this)),l&&p.push(m),p.push(t.join("")),p.push(`</g>
`),h&&p.push(`</g>
`),n?n(p.join("")):p.join("")}addPaintOrder(){return this.paintFirst!==tn?' paint-order="'.concat(this.paintFirst,'" '):""}};function uu(s){return new RegExp("^("+s.join("|")+")\\b","i")}var qr="textDecorationThickness",F0=["fontSize","fontWeight","fontFamily","fontStyle"],N0=["underline","overline","linethrough"],k0=[...F0,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],U0=[...k0,...N0,"textBackgroundColor","direction",qr],J1=[...F0,...N0,Vn,"strokeWidth",tn,"deltaY","textBackgroundColor",qr],K1={_reNewline:Gf,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:Ce,fontStyle:"normal",lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:Ce,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[qr]:66.667},Ki="justify",Vh="justify-left",rl="justify-right",ol="justify-center",Gg,Hg,Wg,Ri=String.raw(Gg||(Gg=is(["[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"],["[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"]))),$d=String.raw(Hg||(Hg=is(["(?:s*,?s+|s*,s*)"],["(?:\\s*,?\\s+|\\s*,\\s*)"])));var $1=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+Ri+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+Ri+"))?\\s+(.*)"),Q1={cx:Ce,x:Ce,r:"radius",cy:Bn,y:Bn,display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":qr},Qd="font-size",tf="clip-path",a2=uu(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),l2=uu(["symbol","image","marker","pattern","view","svg"]),Xg=uu(["symbol","g","a","svg","clipPath","defs"]),c2=new RegExp(String.raw(Wg||(Wg=is(["^s*(",")","(",")","(",")","(",")s*$"],["^\\s*(",")","(",")","(",")","(",")\\s*$"])),Ri,$d,Ri,$d,Ri,$d,Ri)),tM=new st(1,0),B0=new st,Qf=(s,t)=>s.rotate(t),Gh=(s,t)=>new st(t).subtract(s),Hh=s=>s.distanceFrom(B0),Wh=(s,t)=>Math.atan2(Yo(s,t),V0(s,t)),z0=s=>Wh(tM,s),du=s=>s.eq(B0)?s:s.scalarDivide(Hh(s)),tp=function(s){let t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return du(new st(-s.y,s.x).scalarMultiply(t?1:-1))},Yo=(s,t)=>s.x*t.y-s.y*t.x,V0=(s,t)=>s.x*t.x+s.y*t.y,gf=(s,t,e)=>{if(s.eq(t)||s.eq(e))return!0;let n=Yo(t,e),i=Yo(t,s),r=Yo(e,s);return n>=0?i>=0&&r<=0:!(i<=0&&r>=0)},jg="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",Yg=new RegExp("(?:\\s|^)"+jg+jg+"("+Ri+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),Xr=class s{constructor(t){let e=typeof t=="string"?s.parseShadow(t):t;Object.assign(this,s.ownDefaults,e),this.id=tr()}static parseShadow(t){let e=t.trim(),[,n=0,i=0,r=0]=(Yg.exec(e)||[]).map((o=>parseFloat(o)||0));return{color:(e.replace(Yg,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:i,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=Qf(new st(this.offsetX,this.offsetY),Ve(-t.angle)),n=new Ln(this.color),i=40,r=40;return t.width&&t.height&&(i=100*De((Math.abs(e.x)+this.blur)/t.width,Se.NUM_FRACTION_DIGITS)+20,r=100*De((Math.abs(e.y)+this.blur)/t.height,Se.NUM_FRACTION_DIGITS)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),'<filter id="SVGID_'.concat(this.id,'" y="-').concat(r,'%" height="').concat(100+2*r,'%" x="-').concat(i,'%" width="').concat(100+2*i,`%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(De(this.blur?this.blur/2:0,Se.NUM_FRACTION_DIGITS),`"></feGaussianBlur>
	<feOffset dx="`).concat(De(e.x,Se.NUM_FRACTION_DIGITS),'" dy="').concat(De(e.y,Se.NUM_FRACTION_DIGITS),`" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(n.toRgb(),'" flood-opacity="').concat(n.getAlpha(),`"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`)}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=s.ownDefaults;return this.includeDefaultValues?t:Zf(t,((n,i)=>n!==e[i]))}static async fromObject(t){return new this(t)}};X(Xr,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),X(Xr,"type","shadow"),Ut.setClass(Xr,"shadow");var Zr=(s,t,e)=>Math.max(s,Math.min(t,e)),eM=[Bn,Ce,On,Qn,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",na,ia],bs=[tn,Vn,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],nM={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:Ce,originY:Bn,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:tn,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},ef=(s,t,e,n)=>(s<Math.abs(t)?(s=t,n=e/4):n=t===0&&s===0?e/Ss*Math.asin(1):e/Ss*Math.asin(t/s),{a:s,c:t,p:e,s:n}),qg=(s,t,e,n,i)=>s*Math.pow(2,10*(n-=1))*Math.sin((n*i-t)*Ss/e),G0=(s,t,e,n)=>-e*Math.cos(s/n*Qs)+e+t,_f=(s,t,e,n)=>(s/=n)<1/2.75?e*(7.5625*s*s)+t:s<2/2.75?e*(7.5625*(s-=1.5/2.75)*s+.75)+t:s<2.5/2.75?e*(7.5625*(s-=2.25/2.75)*s+.9375)+t:e*(7.5625*(s-=2.625/2.75)*s+.984375)+t,Zg=(s,t,e,n)=>e-_f(n-s,0,e,n)+t,iM=Object.freeze({__proto__:null,defaultEasing:G0,easeInBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*(s/=n)*s*((i+1)*s-i)+t},easeInBounce:Zg,easeInCirc:(s,t,e,n)=>-e*(Math.sqrt(1-(s/=n)*s)-1)+t,easeInCubic:(s,t,e,n)=>e*(s/n)**3+t,easeInElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l}=ef(i,e,r,1.70158);return-qg(o,a,l,s,n)+t},easeInExpo:(s,t,e,n)=>s===0?t:e*2**(10*(s/n-1))+t,easeInOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return(s/=n/2)<1?e/2*(s*s*((1+(i*=1.525))*s-i))+t:e/2*((s-=2)*s*((1+(i*=1.525))*s+i)+2)+t},easeInOutBounce:(s,t,e,n)=>s<n/2?.5*Zg(2*s,0,e,n)+t:.5*_f(2*s-n,0,e,n)+.5*e+t,easeInOutCirc:(s,t,e,n)=>(s/=n/2)<1?-e/2*(Math.sqrt(1-s**2)-1)+t:e/2*(Math.sqrt(1-(s-=2)*s)+1)+t,easeInOutCubic:(s,t,e,n)=>(s/=n/2)<1?e/2*s**3+t:e/2*((s-2)**3+2)+t,easeInOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n/2)===2)return t+e;r||(r=n*(.3*1.5));let{a:o,s:a,p:l,c}=ef(i,e,r,1.70158);return s<1?-.5*qg(o,a,l,s,n)+t:o*Math.pow(2,-10*(s-=1))*Math.sin((s*n-a)*Ss/l)*.5+c+t},easeInOutExpo:(s,t,e,n)=>s===0?t:s===n?t+e:(s/=n/2)<1?e/2*2**(10*(s-1))+t:e/2*-(2**(-10*--s)+2)+t,easeInOutQuad:(s,t,e,n)=>(s/=n/2)<1?e/2*s**2+t:-e/2*(--s*(s-2)-1)+t,easeInOutQuart:(s,t,e,n)=>(s/=n/2)<1?e/2*s**4+t:-e/2*((s-=2)*s**3-2)+t,easeInOutQuint:(s,t,e,n)=>(s/=n/2)<1?e/2*s**5+t:e/2*((s-2)**5+2)+t,easeInOutSine:(s,t,e,n)=>-e/2*(Math.cos(Math.PI*s/n)-1)+t,easeInQuad:(s,t,e,n)=>e*(s/=n)*s+t,easeInQuart:(s,t,e,n)=>e*(s/=n)*s**3+t,easeInQuint:(s,t,e,n)=>e*(s/n)**5+t,easeInSine:(s,t,e,n)=>-e*Math.cos(s/n*Qs)+e+t,easeOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*((s=s/n-1)*s*((i+1)*s+i)+1)+t},easeOutBounce:_f,easeOutCirc:(s,t,e,n)=>e*Math.sqrt(1-(s=s/n-1)*s)+t,easeOutCubic:(s,t,e,n)=>e*((s/n-1)**3+1)+t,easeOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l,c}=ef(i,e,r,1.70158);return o*2**(-10*s)*Math.sin((s*n-a)*Ss/l)+c+t},easeOutExpo:(s,t,e,n)=>s===n?t+e:e*-(2**(-10*s/n)+1)+t,easeOutQuad:(s,t,e,n)=>-e*(s/=n)*(s-2)+t,easeOutQuart:(s,t,e,n)=>-e*((s=s/n-1)*s**3-1)+t,easeOutQuint:(s,t,e,n)=>e*((s/n-1)**5+1)+t,easeOutSine:(s,t,e,n)=>e*Math.sin(s/n*Qs)+t}),sM=()=>!1,cl=class{constructor(t){let{startValue:e,byValue:n,duration:i=500,delay:r=0,easing:o=G0,onStart:a=Hr,onChange:l=Hr,onComplete:c=Hr,abort:h=sM,target:u}=t;X(this,"_state","pending"),X(this,"durationProgress",0),X(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=i,this.delay=r,this.easing=o,this._onStart=a,this._onChange=l,this._onComplete=c,this._abort=h,this.target=u,this.startValue=e,this.byValue=n,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let t=e=>{this._state==="pending"&&(this.startTime=e||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?setTimeout((()=>il(t)),this.delay):il(t)}tick(t){let e=(t||+new Date)-this.startTime,n=Math.min(e,this.duration);this.durationProgress=n/this.duration;let{value:i,valueProgress:r}=this.calculate(n);this.value=Object.freeze(i),this.valueProgress=r,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):e>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister()):(this._onChange(this.value,this.valueProgress,this.durationProgress),il(this.tick)))}register(){Lh.push(this)}unregister(){Lh.remove(this)}abort(){this._state="aborted",this.unregister()}},rM=["startValue","endValue"],xf=class extends cl{constructor(t){let{startValue:e=0,endValue:n=100}=t;super(G(G({},Fe(t,rM)),{},{startValue:e,byValue:n-e}))}calculate(t){let e=this.easing(t,this.startValue,this.byValue,this.duration);return{value:e,valueProgress:Math.abs((e-this.startValue)/this.byValue)}}},oM=["startValue","endValue"],vf=class extends cl{constructor(t){let{startValue:e=[0],endValue:n=[100]}=t;super(G(G({},Fe(t,oM)),{},{startValue:e,byValue:n.map(((i,r)=>i-e[r]))}))}calculate(t){let e=this.startValue.map(((n,i)=>this.easing(t,n,this.byValue[i],this.duration,i)));return{value:e,valueProgress:Math.abs((e[0]-this.startValue[0])/this.byValue[0])}}},aM=["startValue","endValue","easing","onChange","onComplete","abort"],lM=(s,t,e,n)=>t+e*(1-Math.cos(s/n*Qs)),nf=s=>s&&((t,e,n)=>s(new Ln(t).toRgba(),e,n)),yf=class extends cl{constructor(t){let{startValue:e,endValue:n,easing:i=lM,onChange:r,onComplete:o,abort:a}=t,l=Fe(t,aM),c=new Ln(e).getSource(),h=new Ln(n).getSource();super(G(G({},l),{},{startValue:c,byValue:h.map(((u,d)=>u-c[d])),easing:i,onChange:nf(r),onComplete:nf(o),abort:nf(a)}))}calculate(t){let[e,n,i,r]=this.startValue.map(((a,l)=>this.easing(t,a,this.byValue[l],this.duration,l))),o=[...[e,n,i].map(Math.round),Zr(0,r,1)];return{value:o,valueProgress:o.map(((a,l)=>this.byValue[l]!==0?Math.abs((a-this.startValue[l])/this.byValue[l]):0)).find((a=>a!==0))||0}}};function ep(s){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(s)?new vf(s):new xf(s);return t.start(),t}function H0(s){let t=new yf(s);return t.start(),t}var jr=class s{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some((e=>e.eq(t)))}append(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.points=this.points.concat(e.filter((i=>!this.includes(i)))),this}static isPointContained(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(i||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(i||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=Gh(e,n),o=Gh(e,t).divide(r);return i?Math.abs(o.x)===Math.abs(o.y):o.x===o.y&&o.x>=0&&o.x<=1}}static isPointInPolygon(t,e){let n=new st(t).setX(Math.min(t.x-1,...e.map((r=>r.x)))),i=0;for(let r=0;r<e.length;r++){let o=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(o.includes(t))return!0;i+=+(o.status==="Intersection")}return i%2==1}static intersectLineLine(t,e,n,i){let r=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=!(arguments.length>5&&arguments[5]!==void 0)||arguments[5],a=e.x-t.x,l=e.y-t.y,c=i.x-n.x,h=i.y-n.y,u=t.x-n.x,d=t.y-n.y,f=c*d-h*u,p=a*d-l*u,x=h*a-c*l;if(x!==0){let m=f/x,_=p/x;return(r||0<=m&&m<=1)&&(o||0<=_&&_<=1)?new s("Intersection").append(new st(t.x+m*a,t.y+m*l)):new s}if(f===0||p===0){let m=r||o||s.isPointContained(t,n,i)||s.isPointContained(e,n,i)||s.isPointContained(n,t,e)||s.isPointContained(i,t,e);return new s(m?"Coincident":void 0)}return new s("Parallel")}static intersectSegmentLine(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!0)}static intersectSegmentSegment(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!1)}static intersectLinePolygon(t,e,n){let i=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],r=new s,o=n.length;for(let a,l,c,h=0;h<o;h++){if(a=n[h],l=n[(h+1)%o],c=s.intersectLineLine(t,e,a,l,i,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return s.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new s,i=t.length,r=[];for(let o=0;o<i;o++){let a=t[o],l=t[(o+1)%i],c=s.intersectSegmentPolygon(a,l,e);c.status==="Coincident"?(r.push(c),n.append(a,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new s("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let i=e.min(n),r=e.max(n),o=new st(r.x,i.y),a=new st(i.x,r.y);return s.intersectPolygonPolygon(t,[i,o,r,a])}},Sf=class extends Fh{getX(){return this.getXY().x}setX(t){this.setXY(this.getXY().setX(t))}getY(){return this.getXY().y}setY(t){this.setXY(this.getXY().setY(t))}getRelativeX(){return this.left}setRelativeX(t){this.left=t}getRelativeY(){return this.top}setRelativeY(t){this.top=t}getXY(){let t=this.getRelativeXY();return this.group?Tn(t,this.group.calcTransformMatrix()):t}setXY(t,e,n){this.group&&(t=Tn(t,$n(this.group.calcTransformMatrix()))),this.setRelativeXY(t,e,n)}getRelativeXY(){return new st(this.left,this.top)}setRelativeXY(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.originX,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.originY;this.setPositionByOrigin(t,e,n)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:t,tr:e,br:n,bl:i}=this.aCoords||(this.aCoords=this.calcACoords()),r=[t,e,n,i];if(this.group){let o=this.group.calcTransformMatrix();return r.map((a=>Tn(a,o)))}return r}intersectsWithRect(t,e){return jr.intersectPolygonRectangle(this.getCoords(),t,e).status==="Intersection"}intersectsWithObject(t){let e=jr.intersectPolygonPolygon(this.getCoords(),t.getCoords());return e.status==="Intersection"||e.status==="Coincident"||t.isContainedWithinObject(this)||this.isContainedWithinObject(t)}isContainedWithinObject(t){return this.getCoords().every((e=>t.containsPoint(e)))}isContainedWithinRect(t,e){let{left:n,top:i,width:r,height:o}=this.getBoundingRect();return n>=t.x&&n+r<=e.x&&i>=t.y&&i+o<=e.y}isOverlapping(t){return this.intersectsWithObject(t)||this.isContainedWithinObject(t)||t.isContainedWithinObject(this)}containsPoint(t){return jr.isPointInPolygon(t,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return!!this.getCoords().some((n=>n.x<=e.x&&n.x>=t.x&&n.y<=e.y&&n.y>=t.y))||!!this.intersectsWithRect(t,e)||this.containsPoint(t.midPointFrom(e))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return this.intersectsWithRect(t,e)?!0:this.getCoords().every((n=>(n.x>=e.x||n.x<=t.x)&&(n.y>=e.y||n.y<=t.y)))&&this.containsPoint(t.midPointFrom(e))}getBoundingRect(){return Qi(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(t){this._set(On,t),this._set(Qn,t),this.setCoords()}scaleToWidth(t){let e=this.getBoundingRect().width/this.getScaledWidth();return this.scale(t/this.width/e)}scaleToHeight(t){let e=this.getBoundingRect().height/this.getScaledHeight();return this.scale(t/this.height/e)}getCanvasRetinaScaling(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.getRetinaScaling())||1}getTotalAngle(){return this.group?ns(S0(this.calcTransformMatrix())):this.angle}getViewportTransform(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.viewportTransform)||In.concat()}calcACoords(){let t=Kr({angle:this.angle}),{x:e,y:n}=this.getRelativeCenterPoint(),i=sa(e,n),r=Ge(i,t),o=this._getTransformedDimensions(),a=o.x/2,l=o.y/2;return{tl:Tn({x:-a,y:-l},r),tr:Tn({x:a,y:-l},r),bl:Tn({x:-a,y:l},r),br:Tn({x:a,y:l},r)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=[];return!t&&this.group&&(e=this.group.transformMatrixKey(t)),e.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,Ke(this.originX),Ke(this.originY)),e}calcTransformMatrix(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=this.calcOwnMatrix();if(t||!this.group)return e;let n=this.transformMatrixKey(t),i=this.matrixCache;return i&&i.key.every(((r,o)=>r===n[o]))?i.value:(this.group&&(e=Ge(this.group.calcTransformMatrix(!1),e)),this.matrixCache={key:n,value:e},e)}calcOwnMatrix(){let t=this.transformMatrixKey(!0),e=this.ownMatrixCache;if(e&&e.key===t)return e.value;let n=this.getRelativeCenterPoint(),i={angle:this.angle,translateX:n.x,translateY:n.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY},r=M0(i);return this.ownMatrixCache={key:t,value:r},r}_getNonTransformedDimensions(){return new st(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(t){return this._getTransformedDimensions(t).transform(this.getViewportTransform(),!0).scalarAdd(2*this.padding)}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=G({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth},t),n=e.strokeWidth,i=n,r=0;this.strokeUniform&&(i=0,r=n);let o=e.width+i,a=e.height+i,l;return l=e.skewX===0&&e.skewY===0?new st(o*e.scaleX,a*e.scaleY):cu(o,a,fl(e)),l.scalarAdd(r)}translateToGivenOrigin(t,e,n,i,r){let o=t.x,a=t.y,l=Ke(i)-Ke(e),c=Ke(r)-Ke(n);if(l||c){let h=this._getTransformedDimensions();o+=l*h.x,a+=c*h.y}return new st(o,a)}translateToCenterPoint(t,e,n){if(e===ae&&n===ae)return t;let i=this.translateToGivenOrigin(t,e,n,ae,ae);return this.angle?i.rotate(Ve(this.angle),t):i}translateToOriginPoint(t,e,n){let i=this.translateToGivenOrigin(t,ae,ae,e,n);return this.angle?i.rotate(Ve(this.angle),t):i}getCenterPoint(){let t=this.getRelativeCenterPoint();return this.group?Tn(t,this.group.calcTransformMatrix()):t}getRelativeCenterPoint(){return this.translateToCenterPoint(new st(this.left,this.top),this.originX,this.originY)}getPointByOrigin(t,e){return this.translateToOriginPoint(this.getRelativeCenterPoint(),t,e)}setPositionByOrigin(t,e,n){let i=this.translateToCenterPoint(t,e,n),r=this.translateToOriginPoint(i,this.originX,this.originY);this.set({left:r.x,top:r.y})}_getLeftTopCoords(){return this.translateToOriginPoint(this.getRelativeCenterPoint(),Ce,Bn)}},cM=["type"],hM=["extraParam"],_s=class Rh extends Sf{static getDefaults(){return Rh.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){$s("warn","Setting type has no effect",t)}constructor(t){super(),X(this,"_cacheContext",null),Object.assign(this,Rh.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=es(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,i=Se.maxCacheSideLimit,r=Se.minCacheSideLimit;if(e<=i&&n<=i&&e*n<=Se.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let o=e/n,[a,l]=nl.limitDimsByArea(o),c=Zr(r,a,i),h=Zr(r,l,i);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,i=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(i+2),zoomX:t.x,zoomY:t.y,x:n,y:i}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:i,zoomX:r,zoomY:o,x:a,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||i!==t.height,h=this.zoomX!==r||this.zoomY!==o;if(!t||!e)return!1;if(c||h){n!==t.width||i!==t.height?(t.width=n,t.height=i):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let u=a/2,d=l/2;return this.cacheTranslationX=Math.round(t.width/2-u)+u,this.cacheTranslationY=Math.round(t.height/2-d)+d,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,o),this.zoomX=r,this.zoomY=o,!0}return!1}setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new st(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=Zo(this.calcTransformMatrix());return new st(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!==On&&t!==Qn||(e=this._constrainScale(e)),t===On&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof Xr||(e=new Xr(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r}=this,{width:o,height:a}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r,width:o,height:a,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst===Vn&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let i=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=i,this.stroke=r}createClipPathLayer(t,e){let n=ti(e),i=n.getContext("2d");if(i.translate(e.cacheTranslationX,e.cacheTranslationY),i.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach((r=>{r.transform(i)})),e.parentClipPaths.push(t),t.absolutePositioned){let r=$n(this.calcTransformMatrix());i.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(i),t.drawObject(i,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let i=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,i)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,ui(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,e){let{fill:n}=e;n&&(ui(n)?(t.fillStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.fillStyle=n)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,i=this.getCanvasRetinaScaling(),[r,,,o]=n?.viewportTransform||In,a=r*i,l=o*i,c=e.nonScaling?new st(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*Se.browserShadowBlurConstant*(a+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*a*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!ui(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,i=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,i,r):t.transform(1,0,0,1,i,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:i,offsetY:r}}_renderPaintInOrder(t){this.paintFirst===Vn?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),o=i.x/this.scaleX/r,a=i.y/this.scaleY/r,l=ti({width:Math.ceil(o),height:Math.ceil(a)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,a),c.lineTo(0,a),c.closePath(),c.translate(o/2,a/2),c.scale(i.zoomX/this.scaleX/r,i.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/i.zoomX,r*this.scaleY/i.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))!==null&&n!==void 0?n:"")}_findCenterFromElement(){return new st(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(Ut.getClass("image"))(e)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Jf(this),n=this.group,i=this.shadow,r=Math.abs,o=t.enableRetinaScaling?d0():1,a=(t.multiplier||1)*o,l=t.canvasProvider||(b=>new er(b,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&R0(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&mf(this,this.getViewportTransform()),this.setCoords();let c=es(),h=this.getBoundingRect(),u=this.shadow,d=new st;if(u){let b=u.blur,A=u.nonScaling?new st(1,1):this.getObjectScaling();d.x=2*Math.round(r(u.offsetX)+b)*r(A.x),d.y=2*Math.round(r(u.offsetY)+b)*r(A.y)}let f=h.width+d.x,p=h.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let x=l(c);t.format==="jpeg"&&(x.backgroundColor="#fff"),this.setPositionByOrigin(new st(x.width/2,x.height/2),ae,ae);let m=this.canvas;x._objects=[this],this.set("canvas",x),this.setCoords();let _=x.toCanvasElement(a||1,t);return this.set("canvas",m),this.shadow=i,n&&(this.group=n),this.set(e),this.setCoords(),x._objects=[],x.destroy(),_}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xf(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jf(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.includes(this.constructor.type)||e.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:i}=this;if(e){let{x:r,y:o}=this.getRelativeCenterPoint();this.originX=ae,this.originY=ae,this.left=r,this.top=o}if(this.set("angle",t),e){let{x:r,y:o}=this.translateToOriginPoint(this.getRelativeCenterPoint(),n,i);this.left=r,this.top=o,this.originX=n,this.originY=i}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){Lh.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&ts().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce(((n,i)=>{let[r,o]=i;return n[r]=this._animate(r,o,e),n}),{})}_animate(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.split("."),r=this.constructor.colorProperties.includes(i[i.length-1]),{abort:o,startValue:a,onChange:l,onComplete:c}=n,h=G(G({},n),{},{target:this,startValue:a??i.reduce(((u,d)=>u[d]),this),endValue:e,abort:o?.bind(this),onChange:(u,d,f)=>{i.reduce(((p,x,m)=>(m===i.length-1&&(p[x]=u),p[x])),this),l&&l(u,d,f)},onComplete:(u,d,f)=>{this.setCoords(),c&&c(u,d,f)}});return r?H0(h):ep(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let i,r=0;r<e.length;r++){if(i=e[r],i===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let o=0;o<n.length;o++){if(this===n[o])return{fork:[],otherFork:[t,...n.slice(0,o)],common:[this,...e]};if(i===n[o])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,o)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let i=e.fork.pop(),r=e.otherFork.pop(),o=n._objects.indexOf(i),a=n._objects.indexOf(r);return o>-1&&o>a}toObject(){let t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).concat(Rh.customProperties,this.constructor.customProperties||[]),e,n=Se.NUM_FRACTION_DIGITS,{clipPath:i,fill:r,stroke:o,shadow:a,strokeDashArray:l,left:c,top:h,originX:u,originY:d,width:f,height:p,strokeWidth:x,strokeLineCap:m,strokeDashOffset:_,strokeLineJoin:b,strokeUniform:A,strokeMiterLimit:w,scaleX:E,scaleY:P,angle:g,flipX:v,flipY:T,opacity:C,visible:R,backgroundColor:L,fillRule:U,paintFirst:O,globalCompositeOperation:j,skewX:q,skewY:B}=this;i&&!i.excludeFromExport&&(e=i.toObject(t.concat("inverted","absolutePositioned")));let $=ct=>De(ct,n),J=G(G({},$r(this,t)),{},{type:this.constructor.type,version:uf,originX:u,originY:d,left:$(c),top:$(h),width:$(f),height:$(p),fill:Og(r)?r.toObject():r,stroke:Og(o)?o.toObject():o,strokeWidth:$(x),strokeDashArray:l&&l.concat(),strokeLineCap:m,strokeDashOffset:_,strokeLineJoin:b,strokeUniform:A,strokeMiterLimit:$(w),scaleX:$(E),scaleY:$(P),angle:$(g),flipX:v,flipY:T,opacity:$(C),shadow:a&&a.toObject(),visible:R,backgroundColor:L,fillRule:U,paintFirst:O,globalCompositeOperation:j,skewX:$(q),skewY:$(B)},e?{clipPath:e}:null);return this.includeDefaultValues?J:this._removeDefaultValues(J)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return Zf(t,((i,r)=>{if(r===Ce||r===Bn||r==="type")return!0;let o=n[r];return i!==o&&!(Array.isArray(i)&&Array.isArray(o)&&i.length===0&&o.length===0)}))}toString(){return"#<".concat(this.constructor.type,">")}static _fromObject(t){let e=Fe(t,cM),n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{extraParam:i}=n,r=Fe(n,hM);return pl(e,r).then((o=>i?(delete o[i],new this(e[i],o)):new this(o)))}static fromObject(t,e){return this._fromObject(t,e)}};X(_s,"stateProperties",eM),X(_s,"cacheProperties",bs),X(_s,"ownDefaults",nM),X(_s,"type","FabricObject"),X(_s,"colorProperties",[tn,Vn,"backgroundColor"]),X(_s,"customProperties",[]),Ut.setClass(_s),Ut.setClass(_s,"object");var nr=(s,t,e)=>(n,i,r,o)=>{let a=t(n,i,r,o);return a&&Kf(s,G(G({},$f(n,i,r,o)),e)),a};function Qr(s){return(t,e,n,i)=>{let{target:r,originX:o,originY:a}=e,l=r.getRelativeCenterPoint(),c=r.translateToOriginPoint(l,o,a),h=s(t,e,n,i);return r.setPositionByOrigin(c,e.originX,e.originY),h}}var bf=nr(al,Qr(((s,t,e,n)=>{let i=hu(t,t.originX,t.originY,e,n);if(Ke(t.originX)===Ke(ae)||Ke(t.originX)===Ke(Ye)&&i.x<0||Ke(t.originX)===Ke(Ce)&&i.x>0){let{target:r}=t,o=r.strokeWidth/(r.strokeUniform?r.scaleX:1),a=D0(t)?2:1,l=r.width,c=Math.abs(i.x*a/r.scaleX)-o;return r.set("width",Math.max(c,1)),l!==r.width}return!1})));function W0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?Vn:tn,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h,u=t,d=e;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",r>o?(h=r,s.scale(1,o/r),d=e*r/o):o>r?(h=o,s.scale(r/o,1),u=t*o/r):h=r,s.beginPath(),s.arc(u,d,h/2,0,Ss,!1),s[l](),c&&s.stroke(),s.restore()}function X0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?Vn:tn,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h=r/2,u=o/2;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",s.translate(t,e);let d=i.getTotalAngle();s.rotate(Ve(d)),s["".concat(l,"Rect")](-h,-u,r,o),c&&s.strokeRect(-h,-u,r,o),s.restore()}var Pn=class{constructor(t){X(this,"visible",!0),X(this,"actionName",ou),X(this,"angle",0),X(this,"x",0),X(this,"y",0),X(this,"offsetX",0),X(this,"offsetY",0),X(this,"sizeX",0),X(this,"sizeY",0),X(this,"touchSizeX",0),X(this,"touchSizeY",0),X(this,"cursorStyle","crosshair"),X(this,"withConnection",!1),Object.assign(this,t)}shouldActivate(t,e,n,i){var r;let{tl:o,tr:a,br:l,bl:c}=i;return((r=e.canvas)===null||r===void 0?void 0:r.getActiveObject())===e&&e.isControlVisible(t)&&jr.isPointInPolygon(n,[o,a,l,c])}getActionHandler(t,e,n){return this.actionHandler}getMouseDownHandler(t,e,n){return this.mouseDownHandler}getMouseUpHandler(t,e,n){return this.mouseUpHandler}cursorStyleHandler(t,e,n){return e.cursorStyle}getActionName(t,e,n){return e.actionName}getVisibility(t,e){var n,i;return(n=(i=t._controlsVisibility)===null||i===void 0?void 0:i[e])!==null&&n!==void 0?n:this.visible}setVisibility(t,e,n){this.visible=t}positionHandler(t,e,n,i){return new st(this.x*t.x+this.offsetX,this.y*t.y+this.offsetY).transform(e)}calcCornerCoords(t,e,n,i,r,o){let a=au([sa(n,i),Kr({angle:t}),lu((r?this.touchSizeX:this.sizeX)||e,(r?this.touchSizeY:this.sizeY)||e)]);return{tl:new st(-.5,-.5).transform(a),tr:new st(.5,-.5).transform(a),br:new st(.5,.5).transform(a),bl:new st(-.5,.5).transform(a)}}render(t,e,n,i,r){((i=i||{}).cornerStyle||r.cornerStyle)==="circle"?W0.call(this,t,e,n,i,r):X0.call(this,t,e,n,i,r)}},j0=(s,t,e)=>e.lockRotation?Uh:t.cursorStyle,Y0=nr(p0,Qr(((s,t,e,n)=>{let{target:i,ex:r,ey:o,theta:a,originX:l,originY:c}=t,h=i.translateToOriginPoint(i.getRelativeCenterPoint(),l,c);if(Di(i,"lockRotation"))return!1;let u=Math.atan2(o-h.y,r-h.x),d=Math.atan2(n-h.y,e-h.x),f=ns(d-u+a);if(i.snapAngle&&i.snapAngle>0){let x=i.snapAngle,m=i.snapThreshold||x,_=Math.ceil(f/x)*x,b=Math.floor(f/x)*x;Math.abs(f-b)<m?f=b:Math.abs(f-_)<m&&(f=_)}f<0&&(f=360+f),f%=360;let p=i.angle!==f;return i.angle=f,p})));function q0(s,t){let e=t.canvas,n=s[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function Z0(s,t,e){let n=Di(s,"lockScalingX"),i=Di(s,"lockScalingY");if(n&&i||!t&&(n||i)&&e||n&&t==="x"||i&&t==="y")return!0;let{width:r,height:o,strokeWidth:a}=s;return r===0&&a===0&&t!=="y"||o===0&&a===0&&t!=="x"}var uM=["e","se","s","sw","w","nw","n","ne","e"],zo=(s,t,e)=>{let n=q0(s,e);if(Z0(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",n))return Uh;let i=I0(e,t);return"".concat(uM[i],"-resize")};function np(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},r=t.target,o=i.by,a=q0(s,r),l,c,h,u,d,f;if(Z0(r,o,a))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=hu(t,t.originX,t.originY,e,n),d=o!=="y"?Math.sign(l.x||t.signX||1):1,f=o!=="x"?Math.sign(l.y||t.signY||1):1,t.signX||(t.signX=d),t.signY||(t.signY=f),Di(r,"lockScalingFlip")&&(t.signX!==d||t.signY!==f))return!1;if(u=r._getTransformedDimensions(),a&&!o){let m=Math.abs(l.x)+Math.abs(l.y),{original:_}=t,b=m/(Math.abs(u.x*_.scaleX/r.scaleX)+Math.abs(u.y*_.scaleY/r.scaleY));c=_.scaleX*b,h=_.scaleY*b}else c=Math.abs(l.x*r.scaleX/u.x),h=Math.abs(l.y*r.scaleY/u.y);D0(t)&&(c*=2,h*=2),t.signX!==d&&o!=="y"&&(t.originX=kg(t.originX),c*=-1,t.signX=d),t.signY!==f&&o!=="x"&&(t.originY=kg(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,x=r.scaleY;return o?(o==="x"&&r.set(On,c),o==="y"&&r.set(Qn,h)):(!Di(r,"lockScalingX")&&r.set(On,c),!Di(r,"lockScalingY")&&r.set(Qn,h)),p!==r.scaleX||x!==r.scaleY}var tl=nr(ru,Qr(((s,t,e,n)=>np(s,t,e,n)))),J0=nr(ru,Qr(((s,t,e,n)=>np(s,t,e,n,{by:"x"})))),K0=nr(ru,Qr(((s,t,e,n)=>np(s,t,e,n,{by:"y"})))),dM=["target","ex","ey","skewingSide"],sf={x:{counterAxis:"y",scale:On,skew:na,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:Qn,skew:ia,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},fM=["ns","nesw","ew","nwse"],$0=(s,t,e)=>{if(t.x!==0&&Di(e,"lockSkewingY")||t.y!==0&&Di(e,"lockSkewingX"))return Uh;let n=I0(e,t)%4;return"".concat(fM[n],"-resize")};function Q0(s,t,e,n,i){let{target:r}=e,{counterAxis:o,origin:a,lockSkewing:l,skew:c,flip:h}=sf[s];if(Di(r,l))return!1;let{origin:u,flip:d}=sf[o],f=Ke(e[u])*(r[d]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),x=.5*-((r[c]===0&&hu(e,ae,ae,n,i)[s]>0||r[c]>0?1:-1)*p)+.5;return nr(m0,Qr(((_,b,A,w)=>(function(E,P,g){let{target:v,ex:T,ey:C,skewingSide:R}=P,L=Fe(P,dM),{skew:U}=sf[E],O=g.subtract(new st(T,C)).divide(new st(v.scaleX,v.scaleY))[E],j=v[U],q=L[U],B=Math.tan(Ve(q)),$=E==="y"?v._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:v._getTransformedDimensions({scaleX:1,scaleY:1}).y,J=2*O*R/Math.max($,1)+B,ct=ns(Math.atan(J));v.set(U,ct);let pt=j!==v[U];if(pt&&E==="y"){let{skewX:Et,scaleX:At}=v,Q=v._getTransformedDimensions({skewY:j}),Mt=v._getTransformedDimensions(),Ct=Et!==0?Q.x/Mt.x:1;Ct!==1&&v.set(On,Ct*At)}return pt})(s,b,new st(A,w)))))(t,G(G({},e),{},{[a]:x,skewingSide:p}),n,i)}var t_=(s,t,e,n)=>Q0("x",s,t,e,n),e_=(s,t,e,n)=>Q0("y",s,t,e,n);function fu(s,t){return s[t.canvas.altActionKey]}var el=(s,t,e)=>{let n=fu(s,e);return t.x===0?n?na:Qn:t.y===0?n?ia:On:""},Er=(s,t,e)=>fu(s,e)?$0(0,t,e):zo(s,t,e),Mf=(s,t,e,n)=>fu(s,t.target)?e_(s,t,e,n):J0(s,t,e,n),wf=(s,t,e,n)=>fu(s,t.target)?t_(s,t,e,n):K0(s,t,e,n),ip=()=>({ml:new Pn({x:-.5,y:0,cursorStyleHandler:Er,actionHandler:Mf,getActionName:el}),mr:new Pn({x:.5,y:0,cursorStyleHandler:Er,actionHandler:Mf,getActionName:el}),mb:new Pn({x:0,y:.5,cursorStyleHandler:Er,actionHandler:wf,getActionName:el}),mt:new Pn({x:0,y:-.5,cursorStyleHandler:Er,actionHandler:wf,getActionName:el}),tl:new Pn({x:-.5,y:-.5,cursorStyleHandler:zo,actionHandler:tl}),tr:new Pn({x:.5,y:-.5,cursorStyleHandler:zo,actionHandler:tl}),bl:new Pn({x:-.5,y:.5,cursorStyleHandler:zo,actionHandler:tl}),br:new Pn({x:.5,y:.5,cursorStyleHandler:zo,actionHandler:tl}),mtr:new Pn({x:0,y:-.5,actionHandler:Y0,cursorStyleHandler:j0,offsetY:-40,withConnection:!0,actionName:Hf})}),n_=()=>({mr:new Pn({x:.5,y:0,actionHandler:bf,cursorStyleHandler:Er,actionName:al}),ml:new Pn({x:-.5,y:0,actionHandler:bf,cursorStyleHandler:Er,actionName:al})}),i_=()=>G(G({},ip()),n_()),Xh=class s extends _s{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,this.constructor.createControls(),s.ownDefaults),this.setOptions(t)}static createControls(){return{controls:ip()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,i=e.action;if(this===n&&i&&i.startsWith(ou))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let i=n.length-1;i>=0;i--){let[r,o]=n[i],a=this.controls[r];if(a.shouldActivate(r,this,t,e?o.touchCorner:o.corner))return this.__corner=r,{key:r,control:a,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=this.getCenterPoint(),n=sa(e.x,e.y),i=Kr({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}),r=Ge(n,i),o=Ge(t,r),a=Ge(o,[1/t[0],0,0,1/t[3],0,0]),l=this.group?Zo(this.calcTransformMatrix()):void 0;l&&(l.scaleX=Math.abs(l.scaleX),l.scaleY=Math.abs(l.scaleY));let c=this._calculateCurrentDimensions(l),h={};return this.forEachControl(((u,d)=>{let f=u.positionHandler(c,a,this,u);h[d]=Object.assign(f,this._calcCornerCoords(u,f))})),h}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),i=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/i[0],1/i[3]),t.rotate(Ve(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=G({hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray},n);t.save(),t.strokeStyle=i.borderColor,this._setLineDash(t,i.borderDashArray),this.strokeBorders(t,e),i.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{hasBorders:n,hasControls:i}=this,r=G({hasBorders:n,hasControls:i},e),o=this.getViewportTransform(),a=r.hasBorders,l=r.hasControls,c=Ge(o,this.calcTransformMatrix()),h=Zo(c);t.save(),t.translate(h.translateX,h.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(h.angle-=180),t.rotate(Ve(this.group?h.angle:this.angle)),a&&this.drawBorders(t,h,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let i;if(n&&n.forActiveSelection||this.group){let r=cu(this.width,this.height,fl(e)),o=this.isStrokeAccountedForInDimensions()?Wf:(this.strokeUniform?new st().scalarAdd(this.canvas?this.canvas.getZoom():1):new st(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);i=r.add(o).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else i=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,i,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl(((i,r)=>{i.withConnection&&i.getVisibility(this,r)&&(n=!0,t.moveTo(i.x*e.x,i.y*e.y),t.lineTo(i.x*e.x+i.offsetX,i.y*e.y+i.offsetY))})),n&&t.stroke()}drawControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:i,cornerDashArray:r,cornerColor:o}=this,a=G({cornerStrokeColor:i,cornerDashArray:r,cornerColor:o},e);t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=a.cornerColor,this.transparentCorners||(t.strokeStyle=a.cornerStrokeColor),this._setLineDash(t,a.cornerDashArray),this.forEachControl(((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,a,this)}})),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.entries(t).forEach((e=>{let[n,i]=e;return this.setControlVisible(n,i)}))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let i=this.width+4,r=this.height+4;return e.clearRect(-i/2,-r/2,i,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function s_(s,t){return t.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{n!=="constructor"&&Object.defineProperty(s.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))}))})),s}X(Xh,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var cn=class extends Xh{};s_(cn,[zh]),Ut.setClass(cn),Ut.setClass(cn,"object");var r_=(s,t,e,n)=>{let i=2*(n=Math.round(n))+1,{data:r}=s.getImageData(t-n,e-n,i,i);for(let o=3;o<r.length;o+=4)if(r[o]>0)return!1;return!0},jh=class{constructor(t){this.options=t,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new st(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new st(1/this.options.scaleX,1/this.options.scaleY):new st(1,1)}createSideVector(t,e){let n=Gh(t,e);return this.options.strokeUniform?n.multiply(this.scale):n}projectOrthogonally(t,e,n){return this.applySkew(t.add(this.calcOrthogonalProjection(t,e,n)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(t){let e=new st(t);return e.y+=e.x*Math.tan(Ve(this.options.skewY)),e.x+=e.y*Math.tan(Ve(this.options.skewX)),e}scaleUnitVector(t,e){return t.multiply(this.strokeUniformScalar).scalarMultiply(e)}},pM=new st,Yh=class s extends jh{static getOrthogonalRotationFactor(t,e){let n=e?Wh(t,e):z0(t);return Math.abs(n)<Qs?-1:1}constructor(t,e,n,i){super(i),X(this,"AB",void 0),X(this,"AC",void 0),X(this,"alpha",void 0),X(this,"bisector",void 0),this.A=new st(t),this.B=new st(e),this.C=new st(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=Wh(this.AB,this.AC),this.bisector=du(Qf(this.AB.eq(pM)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e),r=tp(i),o=s.getOrthogonalRotationFactor(r,this.bisector);return this.scaleUnitVector(r,n*o)}projectBevel(){let t=[];return(this.alpha%Ss==0?[this.B]:[this.B,this.C]).forEach((e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))})),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),i=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?Hh(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return Hh(i)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(i))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],i=new st(s.getOrthogonalRotationFactor(this.bisector),s.getOrthogonalRotationFactor(new st(this.bisector.y,this.bisector.x)));return[new st(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),new st(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)].forEach((r=>{gf(r,t,e)&&n.push(this.A.add(r))})),n}projectRoundWithSkew(t,e){let n=[],{skewX:i,skewY:r,scaleX:o,scaleY:a,strokeUniform:l}=this.options,c=new st(Math.tan(Ve(i)),Math.tan(Ve(r))),h=this.strokeProjectionMagnitude,u=l?h/a/Math.sqrt(1/a**2+1/o**2*c.y**2):h/Math.sqrt(1+c.y**2),d=new st(Math.sqrt(Math.max(h**2-u**2,0)),u),f=l?h/Math.sqrt(1+c.x**2*(1/a)**2/(1/o+1/o*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new st(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map((x=>this.applySkew(l?x.multiply(this.strokeUniformScalar):x))).forEach((x=>{gf(x,t,e)&&n.push(this.applySkew(this.A).add(x))})),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%Ss==0,n=this.applySkew(this.A),i=t[e?0:2].subtract(n),r=t[e?1:0].subtract(n),o=e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)),a=Yo(i,o)>0,l=a?i:r,c=a?r:i;return this.isSkewed()?t.push(...this.projectRoundWithSkew(l,c)):t.push(...this.projectRoundNoSkew(l,c)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector})))}},qh=class extends jh{constructor(t,e,n){super(n),this.A=new st(t),this.T=new st(e)}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e);return this.scaleUnitVector(tp(i),n)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let t=[];if(!this.isSkewed()&&this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.applySkew(this.A.add(e)),this.applySkew(this.A.subtract(e)))}else t.push(...new Yh(this.A,this.T,this.T,this.options).projectRound());return t}projectSquare(){let t=[];if(this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.A.add(e),this.A.subtract(e))}else{let e=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),n=this.scaleUnitVector(du(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),i=this.A.add(n);t.push(i.add(e),i.subtract(e))}return t.map((e=>this.applySkew(e)))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t})))}},o_=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=[];if(s.length===0)return n;let i=s.reduce(((r,o)=>(r[r.length-1].eq(o)||r.push(new st(o)),r)),[new st(s[0])]);if(i.length===1)e=!0;else if(!e){let r=i[0],o=((a,l)=>{for(let c=a.length-1;c>=0;c--)if(l(a[c],c,a))return c;return-1})(i,(a=>!a.eq(r)));i.splice(o+1)}return i.forEach(((r,o,a)=>{let l,c;o===0?(c=a[1],l=e?r:a[a.length-1]):o===a.length-1?(l=a[o-1],c=e?r:a[0]):(l=a[o-1],c=a[o+1]),e&&a.length===1?n.push(...new qh(r,r,t).project()):!e||o!==0&&o!==a.length-1?n.push(...new Yh(r,l,c,t).project()):n.push(...new qh(r,o===0?c:l,t).project())})),n},sp=s=>{let t={};return Object.keys(s).forEach((e=>{t[e]={},Object.keys(s[e]).forEach((n=>{t[e][n]=G({},s[e][n])}))})),t},a_=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),$a,pu=s=>{if($a||$a||($a="Intl"in dl()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),$a){let t=$a.segment(s);return Array.from(t).map((e=>{let{segment:n}=e;return n}))}return mM(s)},mM=s=>{let t=[];for(let e,n=0;n<s.length;n++)(e=gM(s,n))!==!1&&t.push(e);return t},gM=(s,t)=>{let e=s.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return s.charAt(t);if(55296<=e&&e<=56319){if(s.length<=t+1)throw"High surrogate without following low surrogate";let i=s.charCodeAt(t+1);if(56320>i||i>57343)throw"High surrogate without following low surrogate";return s.charAt(t)+s.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=s.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},_M=Object.freeze({__proto__:null,capitalize:function(s){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return"".concat(s.charAt(0).toUpperCase()).concat(t?s.slice(1):s.slice(1).toLowerCase())},escapeXml:a_,graphemeSplit:pu}),mu=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.fill!==t.fill||s.stroke!==t.stroke||s.strokeWidth!==t.strokeWidth||s.fontSize!==t.fontSize||s.fontFamily!==t.fontFamily||s.fontWeight!==t.fontWeight||s.fontStyle!==t.fontStyle||s.textDecorationThickness!==t.textDecorationThickness||s.textBackgroundColor!==t.textBackgroundColor||s.deltaY!==t.deltaY||e&&(s.overline!==t.overline||s.underline!==t.underline||s.linethrough!==t.linethrough)},l_=(s,t)=>{let e=t.split(`
`),n=[],i=-1,r={};s=sp(s);for(let o=0;o<e.length;o++){let a=pu(e[o]);if(s[o])for(let l=0;l<a.length;l++){i++;let c=s[o][l];c&&Object.keys(c).length>0&&(mu(r,c,!0)?n.push({start:i,end:i+1,style:c}):n[n.length-1].end++),r=c||{}}else i+=a.length,r={}}return n},c_=(s,t)=>{if(!Array.isArray(s))return sp(s);let e=t.split(Gf),n={},i=-1,r=0;for(let o=0;o<e.length;o++){let a=pu(e[o]);for(let l=0;l<a.length;l++)i++,s[r]&&s[r].start<=i&&i<s[r].end&&(n[o]=n[o]||{},n[o][l]=G({},s[r].style),i===s[r].end-1&&r++)}return n},ir=["display","transform",tn,"fill-opacity","fill-rule","opacity",Vn,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function Jg(s,t){let e=s.nodeName,n=s.getAttribute("class"),i=s.getAttribute("id"),r="(?![a-zA-Z\\-]+)",o;if(o=new RegExp("^"+e,"i"),t=t.replace(o,""),i&&t.length&&(o=new RegExp("#"+i+r,"i"),t=t.replace(o,"")),n&&t.length){let a=n.split(" ");for(let l=a.length;l--;)o=new RegExp("\\."+a[l]+r,"i"),t=t.replace(o,"")}return t.length===0}function xM(s,t){let e=!0,n=Jg(s,t.pop());return n&&t.length&&(e=(function(i,r){let o,a=!0;for(;i.parentElement&&i.parentElement.nodeType===1&&r.length;)a&&(o=r.pop()),a=Jg(i=i.parentElement,o);return r.length===0})(s,t)),n&&e&&t.length===0}var vM=s=>{var t;return(t=Q1[s])!==null&&t!==void 0?t:s},yM=new RegExp("(".concat(Ri,")"),"gi"),SM=s=>Bh(s.replace(yM," $1 ").replace(/,/gi," ")),Kg,$g,Qg,t0,e0,n0,i0,Dn="(".concat(Ri,")"),bM=String.raw(Kg||(Kg=is(["(skewX)(",")"],["(skewX)\\(","\\)"])),Dn),MM=String.raw($g||($g=is(["(skewY)(",")"],["(skewY)\\(","\\)"])),Dn),wM=String.raw(Qg||(Qg=is(["(rotate)(","(?: "," ",")?)"],["(rotate)\\(","(?: "," ",")?\\)"])),Dn,Dn,Dn),TM=String.raw(t0||(t0=is(["(scale)(","(?: ",")?)"],["(scale)\\(","(?: ",")?\\)"])),Dn,Dn),CM=String.raw(e0||(e0=is(["(translate)(","(?: ",")?)"],["(translate)\\(","(?: ",")?\\)"])),Dn,Dn),EM=String.raw(n0||(n0=is(["(matrix)("," "," "," "," "," ",")"],["(matrix)\\("," "," "," "," "," ","\\)"])),Dn,Dn,Dn,Dn,Dn,Dn),rp="(?:".concat(EM,"|").concat(CM,"|").concat(wM,"|").concat(TM,"|").concat(bM,"|").concat(MM,")"),AM="(?:".concat(rp,"*)"),RM=String.raw(i0||(i0=is(["^s*(?:","?)s*$"],["^\\s*(?:","?)\\s*$"])),AM),PM=new RegExp(RM),DM=new RegExp(rp),IM=new RegExp(rp,"g");function Tf(s){let t=[];if(!(s=SM(s).replace(/\s*([()])\s*/gi,"$1"))||s&&!PM.test(s))return[...In];for(let e of s.matchAll(IM)){let n=DM.exec(e[0]);if(!n)continue;let i=In,r=n.filter((p=>!!p)),[,o,...a]=r,[l,c,h,u,d,f]=a.map((p=>parseFloat(p)));switch(o){case"translate":i=sa(l,c);break;case Hf:i=Kr({angle:l},{x:c,y:h});break;case ou:i=lu(l,c);break;case na:i=Yf(l);break;case ia:i=qf(l);break;case"matrix":i=[l,c,h,u,d,f]}t.push(i)}return au(t)}function OM(s,t,e,n){let i=Array.isArray(t),r,o=t;if(s!==tn&&s!==Vn||t!==zn){if(s==="strokeUniform")return t==="non-scaling-stroke";if(s==="strokeDashArray")o=t===zn?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(s==="transformMatrix")o=e&&e.transformMatrix?Ge(e.transformMatrix,Tf(t)):Tf(t);else if(s==="visible")o=t!==zn&&t!=="hidden",e&&e.visible===!1&&(o=!1);else if(s==="opacity")o=parseFloat(t),e&&e.opacity!==void 0&&(o*=e.opacity);else if(s==="textAnchor")o=t==="start"?Ce:t==="end"?Ye:ae;else if(s==="charSpacing"||s===qr)r=Wr(t,n)/n*1e3;else if(s==="paintFirst"){let a=t.indexOf(tn),l=t.indexOf(Vn);o=tn,(a>-1&&l>-1&&l<a||a===-1&&l>-1)&&(o=Vn)}else{if(s==="href"||s==="xlink:href"||s==="font"||s==="id")return t;if(s==="imageSmoothing")return t==="optimizeQuality";r=i?t.map(Wr):Wr(t,n)}}else o="";return!i&&isNaN(r)?o:r}function LM(s,t){let e=s.match($1);if(!e)return;let n=e[1],i=e[3],r=e[4],o=e[5],a=e[6];n&&(t.fontStyle=n),i&&(t.fontWeight=isNaN(parseFloat(i))?i:parseFloat(i)),r&&(t.fontSize=Wr(r)),a&&(t.fontFamily=a),o&&(t.lineHeight=o==="normal"?1:o)}function FM(s,t){s.replace(/;\s*$/,"").split(";").forEach((e=>{if(!e)return;let[n,i]=e.split(":");t[n.trim().toLowerCase()]=i.trim()}))}function NM(s){let t={},e=s.getAttribute("style");return e&&(typeof e=="string"?FM(e,t):(function(n,i){Object.entries(n).forEach((r=>{let[o,a]=r;a!==void 0&&(i[o.toLowerCase()]=a)}))})(e,t)),t}var kM={stroke:"strokeOpacity",fill:"fillOpacity"};function Ms(s,t,e){if(!s)return{};let n,i={},r=Vf;s.parentNode&&Xg.test(s.parentNode.nodeName)&&(i=Ms(s.parentElement,t,e),i.fontSize&&(n=r=Wr(i.fontSize)));let o=G(G(G({},t.reduce(((c,h)=>{let u=s.getAttribute(h);return u&&(c[h]=u),c}),{})),(function(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u={};for(let d in h)xM(c,d.split(" "))&&(u=G(G({},u),h[d]));return u})(s,e)),NM(s));o[tf]&&s.setAttribute(tf,o[tf]),o[Qd]&&(n=Wr(o[Qd],r),o[Qd]="".concat(n));let a={};for(let c in o){let h=vM(c),u=OM(h,o[c],i,n);a[h]=u}a&&a.font&&LM(a.font,a);let l=G(G({},i),a);return Xg.test(s.nodeName)?l:(function(c){let h=cn.getDefaults();return Object.entries(kM).forEach((u=>{let[d,f]=u;if(c[f]===void 0||c[d]==="")return;if(c[d]===void 0){if(!h[d])return;c[d]=h[d]}if(c[d].indexOf("url(")===0)return;let p=new Ln(c[d]);c[d]=p.setAlpha(De(p.getAlpha()*c[f],2)).toRgba()})),c})(l)}var UM=["left","top","width","height","visible"],h_=["rx","ry"],Kn=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,i=-e/2,r=-n/2,o=this.rx?Math.min(this.rx,e/2):0,a=this.ry?Math.min(this.ry,n/2):0,l=o!==0||a!==0;t.beginPath(),t.moveTo(i+o,r),t.lineTo(i+e-o,r),l&&t.bezierCurveTo(i+e-qs*o,r,i+e,r+qs*a,i+e,r+a),t.lineTo(i+e,r+n-a),l&&t.bezierCurveTo(i+e,r+n-qs*a,i+e-qs*o,r+n,i+e-o,r+n),t.lineTo(i+o,r+n),l&&t.bezierCurveTo(i+qs*o,r+n,i,r+n-qs*a,i,r+n-a),t.lineTo(i,r+a),l&&t.bezierCurveTo(i,r+qs*a,i+qs*o,r,i+o,r),t.closePath(),this._renderPaintInOrder(t)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...h_,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:i}=this;return["<rect ","COMMON_PARTS",'x="'.concat(-t/2,'" y="').concat(-e/2,'" rx="').concat(n,'" ry="').concat(i,'" width="').concat(t,'" height="').concat(e,`" />
`)]}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,width:a=0,height:l=0,visible:c=!0}=i,h=Fe(i,UM);return new this(G(G(G({},e),h),{},{left:r,top:o,width:a,height:l,visible:!!(c&&a&&l)}))}};X(Kn,"type","Rect"),X(Kn,"cacheProperties",[...bs,...h_]),X(Kn,"ownDefaults",{rx:0,ry:0}),X(Kn,"ATTRIBUTE_NAMES",[...ir,"x","y","rx","ry","width","height"]),Ut.setClass(Kn),Ut.setSVGClass(Kn);var xs="initialization",Zh="added",op="removed",Jh="imperative",u_=(s,t)=>{let{strokeUniform:e,strokeWidth:n,width:i,height:r,group:o}=t,a=o&&o!==s?ml(o.calcTransformMatrix(),s.calcTransformMatrix()):null,l=a?t.getRelativeCenterPoint().transform(a):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?P0(new st(n,n),void 0,s.calcTransformMatrix()):Wf,u=!e&&c?n:0,d=cu(i+u,r+u,au([a,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(d),l.add(d)]},Qo=class{calcLayoutResult(t,e){if(this.shouldPerformLayout(t))return this.calcBoundingBox(e,t)}shouldPerformLayout(t){let{type:e,prevStrategy:n,strategy:i}=t;return e===xs||e===Jh||!!n&&i!==n}shouldLayoutClipPath(t){let{type:e,target:{clipPath:n}}=t;return e!==xs&&n&&!n.absolutePositioned}getInitialSize(t,e){return e.size}calcBoundingBox(t,e){let{type:n,target:i}=e;if(n===Jh&&e.overrides)return e.overrides;if(t.length===0)return;let{left:r,top:o,width:a,height:l}=Qi(t.map((u=>u_(i,u))).reduce(((u,d)=>u.concat(d)),[])),c=new st(a,l),h=new st(r,o).add(c.scalarDivide(2));if(n===xs){let u=this.getInitialSize(e,{size:c,center:h});return{center:h,relativeCorrection:new st(0,0),size:u}}return{center:h.transform(i.calcOwnMatrix()),size:c}}};X(Qo,"type","strategy");var hl=class extends Qo{shouldPerformLayout(t){return!0}};X(hl,"type","fit-content"),Ut.setClass(hl);var BM=["strategy"],zM=["target","strategy","bubbles","prevStrategy"],d_="layoutManager",Jr=class{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new hl;X(this,"strategy",void 0),this.strategy=t,this._subscriptions=new Map}performLayout(t){let e=G(G({bubbles:!0,strategy:this.strategy},t),{},{prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}});this.onBeforeLayout(e);let n=this.getLayoutResult(e);n&&this.commitLayout(e,n),this.onAfterLayout(e,n),this._prevLayoutStrategy=e.strategy}attachHandlers(t,e){let{target:n}=e;return[Oh,f0,al,p0,ru,m0,Ih,g0,H1].map((i=>t.on(i,(r=>this.performLayout(i===Oh?{type:"object_modified",trigger:i,e:r,target:n}:{type:"object_modifying",trigger:i,e:r,target:n})))))}subscribe(t,e){this.unsubscribe(t,e);let n=this.attachHandlers(t,e);this._subscriptions.set(t,n)}unsubscribe(t,e){(this._subscriptions.get(t)||[]).forEach((n=>n())),this._subscriptions.delete(t)}unsubscribeTargets(t){t.targets.forEach((e=>this.unsubscribe(e,t)))}subscribeTargets(t){t.targets.forEach((e=>this.subscribe(e,t)))}onBeforeLayout(t){let{target:e,type:n}=t,{canvas:i}=e;if(n===xs||n===Zh?this.subscribeTargets(t):n===op&&this.unsubscribeTargets(t),e.fire("layout:before",{context:t}),i&&i.fire("object:layout:before",{target:e,context:t}),n===Jh&&t.deep){let r=Fe(t,BM);e.forEachObject((o=>o.layoutManager&&o.layoutManager.performLayout(G(G({},r),{},{bubbles:!1,target:o}))))}}getLayoutResult(t){let{target:e,strategy:n,type:i}=t,r=n.calcLayoutResult(t,e.getObjects());if(!r)return;let o=i===xs?new st:e.getRelativeCenterPoint(),{center:a,correction:l=new st,relativeCorrection:c=new st}=r,h=o.subtract(a).add(l).transform(i===xs?In:$n(e.calcOwnMatrix()),!0).add(c);return{result:r,prevCenter:o,nextCenter:a,offset:h}}commitLayout(t,e){let{target:n}=t,{result:{size:i},nextCenter:r}=e;var o,a;n.set({width:i.x,height:i.y}),this.layoutObjects(t,e),t.type===xs?n.set({left:(o=t.x)!==null&&o!==void 0?o:r.x+i.x*Ke(n.originX),top:(a=t.y)!==null&&a!==void 0?a:r.y+i.y*Ke(n.originY)}):(n.setPositionByOrigin(r,ae,ae),n.setCoords(),n.set("dirty",!0))}layoutObjects(t,e){let{target:n}=t;n.forEachObject((i=>{i.group===n&&this.layoutObject(t,e,i)})),t.strategy.shouldLayoutClipPath(t)&&this.layoutObject(t,e,n.clipPath)}layoutObject(t,e,n){let{offset:i}=e;n.set({left:n.left+i.x,top:n.top+i.y})}onAfterLayout(t,e){let{target:n,strategy:i,bubbles:r,prevStrategy:o}=t,a=Fe(t,zM),{canvas:l}=n;n.fire("layout:after",{context:t,result:e}),l&&l.fire("object:layout:after",{context:t,result:e,target:n});let c=n.parent;r&&c!=null&&c.layoutManager&&((a.path||(a.path=[])).push(n),c.layoutManager.performLayout(G(G({},a),{},{target:c}))),n.set("dirty",!0)}dispose(){let{_subscriptions:t}=this;t.forEach((e=>e.forEach((n=>n())))),t.clear()}toObject(){return{type:d_,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};Ut.setClass(Jr,d_);var VM=["type","objects","layoutManager"],Cf=class extends Jr{performLayout(){}},Ks=class s extends _0(cn){static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),X(this,"_activeObjects",[]),X(this,"__objectSelectionTracker",void 0),X(this,"__objectSelectionDisposer",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject((i=>{this.enterGroup(i,!1)})),this.layoutManager=(n=e.layoutManager)!==null&&n!==void 0?n:new Jr,this.layoutManager.performLayout({type:xs,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?($s("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||($s("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter(((e,n,i)=>this.canEnterGroup(e)&&i.indexOf(e)===n))}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let i=this._filterObjectsBeforeEnteringGroup(e),r=super.add(...i);return this._onAfterObjectsChange(Zh,i),r}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=this._filterObjectsBeforeEnteringGroup(n),o=super.insertAt(t,...r);return this._onAfterObjectsChange(Zh,r),o}remove(){let t=super.remove(...arguments);return this._onAfterObjectsChange(op,t),t}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach((i=>{i._set(t,e)})),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,e){let{target:n}=e,i=this._activeObjects;if(t)i.push(n),this._set("dirty",!0);else if(i.length>0){let r=i.indexOf(n);r>-1&&(i.splice(r,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&$o(t,Ge($n(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||($o(t,Ge(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=cn.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var i;let o=this._objects[r];(i=this.canvas)!==null&&i!==void 0&&i.preserveObjectStacking&&o.group!==this?(t.save(),t.transform(...$n(this.calcTransformMatrix())),o.render(t),t.restore()):o.group===this&&o.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject((t=>t.setCoords()))}triggerLayout(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.layoutManager.performLayout(G({target:this,type:Jh},t))}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter((function(i){return!i.excludeFromExport})).map((function(i){let r=i.includeDefaultValues;i.includeDefaultValues=n;let o=i[t||"toObject"](e);return i.includeDefaultValues=r,o}))}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.layoutManager.toObject();return G(G(G({},super.toObject(["subTargetCheck","interactive",...t])),e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{}),{},{objects:this.__serializeObjects("toObject",t)})}toString(){return"#<Group: (".concat(this.complexity(),")>")}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject((t=>{this._watchObject(!1,t),t.dispose()})),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=Kn.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let i=e.join("");return t?t(i):i}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let i=0;i<this._objects.length;i++)e.push("		",this._objects[i].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?"opacity: ".concat(this.opacity,";"):"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let i=0;i<this._objects.length;i++)e.push("	",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject(t,e){let{type:n,objects:i=[],layoutManager:r}=t,o=Fe(t,VM);return Promise.all([Jo(i,e),pl(o,e)]).then((a=>{let[l,c]=a,h=new this(l,G(G(G({},o),c),{},{layoutManager:new Cf}));if(r){let u=Ut.getClass(r.type),d=Ut.getClass(r.strategy);h.layoutManager=new u(new d)}else h.layoutManager=new Jr;return h.layoutManager.subscribeTargets({type:xs,target:h,targets:h.getObjects()}),h.setCoords(),h}))}};X(Ks,"type","Group"),X(Ks,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),Ut.setClass(Ks);var f_=(s,t)=>Math.min(t.width/s.width,t.height/s.height),p_=(s,t)=>Math.max(t.width/s.width,t.height/s.height),Ef="\\s*,?\\s*",Qa="".concat(Ef,"(").concat(Ri,")"),GM="".concat(Qa).concat(Qa).concat(Qa).concat(Ef,"([01])").concat(Ef,"([01])").concat(Qa).concat(Qa),HM={m:"l",M:"L"},WM=(s,t,e,n,i,r,o,a,l,c,h)=>{let u=Ii(s),d=Oi(s),f=Ii(t),p=Oi(t),x=e*i*f-n*r*p+o,m=n*i*f+e*r*p+a;return["C",c+l*(-e*i*d-n*r*u),h+l*(-n*i*d+e*r*u),x+l*(e*i*p+n*r*f),m+l*(n*i*p-e*r*f),x,m]},s0=(s,t,e,n)=>{let i=Math.atan2(t,s),r=Math.atan2(n,e);return r>=i?r-i:2*Math.PI-(i-r)};function Af(s,t,e,n,i,r,o,a){let l;if(Se.cachesBoundsOfCurve&&(l=[...arguments].join(),nl.boundsOfCurveCache[l]))return nl.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,u=[],d=[[0,0],[0,0]],f=6*s-12*e+6*i,p=-3*s+9*e-9*i+3*o,x=3*e-3*s;for(let w=0;w<2;++w){if(w>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*a,x=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let T=-x/f;0<T&&T<1&&u.push(T);continue}let E=f*f-4*x*p;if(E<0)continue;let P=c(E),g=(-f+P)/(2*p);0<g&&g<1&&u.push(g);let v=(-f-P)/(2*p);0<v&&v<1&&u.push(v)}let m=u.length,_=m,b=g_(s,t,e,n,i,r,o,a);for(;m--;){let{x:w,y:E}=b(u[m]);d[0][m]=w,d[1][m]=E}d[0][_]=s,d[1][_]=t,d[0][_+1]=o,d[1][_+1]=a;let A=[new st(Math.min(...d[0]),Math.min(...d[1])),new st(Math.max(...d[0]),Math.max(...d[1]))];return Se.cachesBoundsOfCurve&&(nl.boundsOfCurveCache[l]=A),A}var XM=(s,t,e)=>{let[n,i,r,o,a,l,c,h]=e,u=((d,f,p,x,m,_,b)=>{if(p===0||x===0)return[];let A=0,w=0,E=0,P=Math.PI,g=b*zf,v=Oi(g),T=Ii(g),C=.5*(-T*d-v*f),R=.5*(-T*f+v*d),L=p**2,U=x**2,O=R**2,j=C**2,q=L*U-L*O-U*j,B=Math.abs(p),$=Math.abs(x);if(q<0){let Qt=Math.sqrt(1-q/(L*U));B*=Qt,$*=Qt}else E=(m===_?-1:1)*Math.sqrt(q/(L*O+U*j));let J=E*B*R/$,ct=-E*$*C/B,pt=T*J-v*ct+.5*d,Et=v*J+T*ct+.5*f,At=s0(1,0,(C-J)/B,(R-ct)/$),Q=s0((C-J)/B,(R-ct)/$,(-C-J)/B,(-R-ct)/$);_===0&&Q>0?Q-=2*P:_===1&&Q<0&&(Q+=2*P);let Mt=Math.ceil(Math.abs(Q/P*2)),Ct=[],zt=Q/Mt,Tt=8/3*Math.sin(zt/4)*Math.sin(zt/4)/Math.sin(zt/2),jt=At+zt;for(let Qt=0;Qt<Mt;Qt++)Ct[Qt]=WM(At,jt,T,v,B,$,pt,Et,Tt,A,w),A=Ct[Qt][5],w=Ct[Qt][6],At=jt,jt+=zt;return Ct})(c-s,h-t,i,r,a,l,o);for(let d=0,f=u.length;d<f;d++)u[d][1]+=s,u[d][2]+=t,u[d][3]+=s,u[d][4]+=t,u[d][5]+=s,u[d][6]+=t;return u},m_=s=>{let t=0,e=0,n=0,i=0,r=[],o,a=0,l=0;for(let c of s){let h=[...c],u;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],u=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],u=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],u=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],i=h[2],u=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":a=h[3],l=h[4],t=h[5],e=h[6],u=["C",h[1],h[2],a,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":o==="C"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[3],e=h[4],u=["C",a,l,h[1],h[2],t,e],a=u[3],l=u[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":a=h[1],l=h[2],t=h[3],e=h[4],u=["Q",a,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":o==="Q"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[1],e=h[2],u=["Q",a,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":XM(t,e,h).forEach((d=>r.push(d))),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=i,u=["Z"]}u?(r.push(u),o=u[0]):o=""}return r},Kh=(s,t,e,n)=>Math.sqrt((e-s)**2+(n-t)**2),g_=(s,t,e,n,i,r,o,a)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),u=(f=>3*f*(1-f)**2)(l),d=(f=>(1-f)**3)(l);return new st(o*c+i*h+e*u+s*d,a*c+r*h+n*u+t*d)},__=s=>s**2,x_=s=>2*s*(1-s),v_=s=>(1-s)**2,jM=(s,t,e,n,i,r,o,a)=>l=>{let c=__(l),h=x_(l),u=v_(l),d=3*(u*(e-s)+h*(i-e)+c*(o-i)),f=3*(u*(n-t)+h*(r-n)+c*(a-r));return Math.atan2(f,d)},YM=(s,t,e,n,i,r)=>o=>{let a=__(o),l=x_(o),c=v_(o);return new st(i*a+e*l+s*c,r*a+n*l+t*c)},qM=(s,t,e,n,i,r)=>o=>{let a=1-o,l=2*(a*(e-s)+o*(i-e)),c=2*(a*(n-t)+o*(r-n));return Math.atan2(c,l)},r0=(s,t,e)=>{let n=new st(t,e),i=0;for(let r=1;r<=100;r+=1){let o=s(r/100);i+=Kh(n.x,n.y,o.x,o.y),n=o}return i},ZM=(s,t)=>{let e,n=0,i=0,r={x:s.x,y:s.y},o=G({},r),a=.01,l=0,c=s.iterator,h=s.angleFinder;for(;i<t&&a>1e-4;)o=c(n),l=n,e=Kh(r.x,r.y,o.x,o.y),e+i>t?(n-=a,a/=2):(r=o,n+=a,i+=e);return G(G({},o),{},{angle:h(l)})},ap=s=>{let t,e,n=0,i=0,r=0,o=0,a=0,l=[];for(let c of s){let h={x:i,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=o=i=c[1],e.y=a=r=c[2];break;case"L":e=h,e.length=Kh(i,r,c[1],c[2]),i=c[1],r=c[2];break;case"C":t=g_(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=jM(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=r0(t,i,r),i=c[5],r=c[6];break;case"Q":t=YM(i,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=qM(i,r,c[1],c[2],c[3],c[4]),e.length=r0(t,i,r),i=c[3],r=c[4];break;case"Z":e=h,e.destX=o,e.destY=a,e.length=Kh(i,r,o,a),i=o,r=a}n+=e.length,l.push(e)}return l.push({length:n,x:i,y:r}),l},y_=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ap(s),n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let i=e[n],r=t/i.length,o=s[n];switch(i.command){case"M":return{x:i.x,y:i.y,angle:0};case"Z":return G(G({},new st(i.x,i.y).lerp(new st(i.destX,i.destY),r)),{},{angle:Math.atan2(i.destY-i.y,i.destX-i.x)});case"L":return G(G({},new st(i.x,i.y).lerp(new st(o[1],o[2]),r)),{},{angle:Math.atan2(o[2]-i.y,o[1]-i.x)});case"C":case"Q":return ZM(i,t)}},JM=new RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),o0=new RegExp(GM,"g"),KM=new RegExp(Ri,"gi"),$M={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},S_=s=>{var t;let e=[],n=(t=s.match(JM))!==null&&t!==void 0?t:[];for(let i of n){let r=i[0];if(r==="z"||r==="Z"){e.push([r]);continue}let o=$M[r.toLowerCase()],a=[];if(r==="a"||r==="A"){o0.lastIndex=0;for(let l=null;l=o0.exec(i);)a.push(...l.slice(1))}else a=i.match(KM)||[];for(let l=0;l<a.length;l+=o){let c=new Array(o),h=HM[r];c[0]=l>0&&h?h:r;for(let u=0;u<o;u++)c[u+1]=parseFloat(a[l+u]);e.push(c)}}return e},QM=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=new st(s[0]),n=new st(s[1]),i=1,r=0,o=[],a=s.length,l=a>2,c;for(l&&(i=s[2].x<n.x?-1:s[2].x===n.x?0:1,r=s[2].y<n.y?-1:s[2].y===n.y?0:1),o.push(["M",e.x-i*t,e.y-r*t]),c=1;c<a;c++){if(!e.eq(n)){let h=e.midPointFrom(n);o.push(["Q",e.x,e.y,h.x,h.y])}e=s[c],c+1<s.length&&(n=s[c+1])}return l&&(i=e.x>s[c-2].x?1:e.x===s[c-2].x?0:-1,r=e.y>s[c-2].y?1:e.y===s[c-2].y?0:-1),o.push(["L",e.x+i*t,e.y+r*t]),o},b_=(s,t)=>s.map((e=>e.map(((n,i)=>i===0||t===void 0?n:De(n,t))).join(" "))).join(" ");function $h(s,t){let e=s.style;e&&t&&(typeof t=="string"?e.cssText+=";"+t:Object.entries(t).forEach((n=>{let[i,r]=n;return e.setProperty(i,r)})))}var tw=(s,t)=>Math.floor(Math.random()*(t-s+1))+s;function ew(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.onComplete||Hr,n=new(dl()).XMLHttpRequest,i=t.signal,r=function(){n.abort()},o=function(){i&&i.removeEventListener("abort",r),n.onerror=n.ontimeout=Hr};if(i&&i.aborted)throw new Dh("request");return i&&i.addEventListener("abort",r,{once:!0}),n.onreadystatechange=function(){n.readyState===4&&(o(),e(n),n.onreadystatechange=Hr)},n.onerror=n.ontimeout=o,n.open("get",s,!0),n.send(),n}var nw=(s,t)=>{let e=s._findCenterFromElement();s.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:i,scaleY:r,angle:o,skewX:a}=Zo(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(On,i),n.set(Qn,r),n.angle=o,n.skewX=a,n.skewY=0}})(s),e=e.transform(s.transformMatrix)),delete s.transformMatrix,t&&(s.scaleX*=t.scaleX,s.scaleY*=t.scaleY,s.cropX=t.cropX,s.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,s.width=t.width,s.height=t.height),s.setPositionByOrigin(e,ae,ae)},h2=Object.freeze({__proto__:null,addTransformToObject:A0,animate:ep,animateColor:H0,applyTransformToObject:$o,calcAngleBetweenVectors:Wh,calcDimensionsMatrix:fl,calcPlaneChangeMatrix:ml,calcVectorRotation:z0,cancelAnimFrame:x0,capValue:Zr,composeMatrix:M0,copyCanvasElement:s=>{var t;let e=ti(s);return(t=e.getContext("2d"))===null||t===void 0||t.drawImage(s,0,0),e},cos:Ii,createCanvasElement:es,createImage:v0,createRotateMatrix:Kr,createScaleMatrix:lu,createSkewXMatrix:Yf,createSkewYMatrix:qf,createTranslateMatrix:sa,createVector:Gh,crossProduct:Yo,degreesToRadians:Ve,dotProduct:V0,ease:iM,enlivenObjectEnlivables:pl,enlivenObjects:Jo,findScaleToCover:p_,findScaleToFit:f_,getBoundsOfCurve:Af,getOrthonormalVector:tp,getPathSegmentsInfo:ap,getPointOnPath:y_,getPointer:E0,getRandomInt:tw,getRegularPolygonPath:(s,t)=>{let e=2*Math.PI/s,n=-Qs;s%2==0&&(n+=e/2);let i=new Array(s+1);for(let r=0;r<s;r++){let o=r*e+n,{x:a,y:l}=new st(Ii(o),Oi(o)).scalarMultiply(t);i[r]=[r===0?"M":"L",a,l]}return i[s]=["Z"],i},getSmoothPathFromPoints:QM,getSvgAttributes:s=>{let t=["instantiated_by_use","style","id","class"];switch(s){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},getUnitVector:du,groupSVGElements:(s,t)=>s&&s.length===1?s[0]:new Ks(s,t),hasStyleChanged:mu,invertTransform:$n,isBetweenVectors:gf,isIdentityMatrix:y0,isTouchEvent:kh,isTransparent:r_,joinPath:b_,loadImage:sl,magnitude:Hh,makeBoundingBoxFromPoints:Qi,makePathSimpler:m_,matrixToSVG:Ko,mergeClipPaths:(s,t)=>{var e;let n=s,i=t;n.inverted&&!i.inverted&&(n=t,i=s),mf(i,(e=i.group)===null||e===void 0?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&i.inverted;return r&&(n.inverted=i.inverted=!1),new Ks([n],{clipPath:i,inverted:r})},multiplyTransformMatrices:Ge,multiplyTransformMatrixArray:au,parsePath:S_,parsePreserveAspectRatioAttribute:L0,parseUnit:Wr,pick:$r,projectStrokeOnPoints:o_,qrDecompose:Zo,radiansToDegrees:ns,removeFromArray:wr,removeTransformFromObject:(s,t)=>{let e=$n(t),n=Ge(e,s.calcOwnMatrix());$o(s,n)},removeTransformMatrixForSvgParsing:nw,request:ew,requestAnimFrame:il,resetObjectTransform:R0,rotatePoint:(s,t,e)=>s.rotate(e,t),rotateVector:Qf,saveObjectTransform:Jf,sendObjectToPlane:mf,sendPointToPlane:ys,sendVectorToPlane:P0,setStyle:$h,sin:Oi,sizeAfterTransform:cu,string:_M,stylesFromArray:c_,stylesToArray:l_,toBlob:jf,toDataURL:Xf,toFixed:De,transformPath:(s,t,e)=>(e&&(t=Ge(t,[1,0,0,1,-e.x,-e.y])),s.map((n=>{let i=[...n];for(let r=1;r<n.length-1;r+=2){let{x:o,y:a}=Tn({x:n[r],y:n[r+1]},t);i[r]=o,i[r+1]=a}return i}))),transformPoint:Tn}),Rf=class extends Nh{constructor(t){let{allowTouchScrolling:e=!1,containerClass:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(t),X(this,"upper",void 0),X(this,"container",void 0);let{el:i}=this.lower,r=this.createUpperCanvas();this.upper={el:r,ctx:r.getContext("2d")},this.applyCanvasStyle(i,{allowTouchScrolling:e}),this.applyCanvasStyle(r,{allowTouchScrolling:e,styles:{position:"absolute",left:"0",top:"0"}});let o=this.createContainerElement();o.classList.add(n),i.parentNode&&i.parentNode.replaceChild(o,i),o.append(i,r),this.container=o}createUpperCanvas(){let{el:t}=this.lower,e=es();return e.className=t.className,e.classList.remove("lower-canvas"),e.classList.add("upper-canvas"),e.setAttribute("data-fabric","top"),e.style.cssText=t.style.cssText,e.setAttribute("draggable","true"),e}createContainerElement(){let t=ea().createElement("div");return t.setAttribute("data-fabric","wrapper"),$h(t,{position:"relative"}),Fg(t),t}applyCanvasStyle(t,e){let{styles:n,allowTouchScrolling:i}=e;$h(t,G(G({},n),{},{"touch-action":i?"manipulation":zn})),Fg(t)}setDimensions(t,e){super.setDimensions(t,e);let{el:n,ctx:i}=this.upper;C0(n,i,t,e)}setCSSDimensions(t){super.setCSSDimensions(t),pf(this.upper.el,t),pf(this.container,t)}cleanupDOM(t){let e=this.container,{el:n}=this.lower,{el:i}=this.upper;super.cleanupDOM(t),e.removeChild(i),e.removeChild(n),e.parentNode&&e.parentNode.replaceChild(n,e)}dispose(){super.dispose(),ts().dispose(this.upper.el),delete this.upper,delete this.container}},Qh=class s extends er{constructor(){super(...arguments),X(this,"targets",[]),X(this,"_hoveredTargets",[]),X(this,"_currentTransform",null),X(this,"_groupSelector",null),X(this,"contextTopDirty",!1)}static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}get upperCanvasEl(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new Rf(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter((e=>!e.group&&e!==t)).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let i=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+i,-n+i),r.transform(...this.viewportTransform);let o=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=o,r.restore();let a=Math.round(i*this.getRetinaScaling());return r_(r,a,a,a)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find((n=>!!n&&t[n]===!0)):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),i=this._activeObject;return!!(!e||e&&i&&n.length>1&&n.indexOf(e)===-1&&i!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&i&&i!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let i;return e===ou||e===On||e===Qn||e===al?i=this.centeredScaling||t.centeredScaling:e===Hf&&(i=this.centeredRotation||t.centeredRotation),i?!n:n}_getOriginFromCorner(t,e){let n={x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=Ye:["mr","tr","br"].includes(e)&&(n.x=Ce),["tl","mt","tr"].includes(e)?n.y=df:["bl","mb","br"].includes(e)&&(n.y=Bn)),n}_setupCurrentTransform(t,e,n){var i;let r=e.group?ys(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:o="",control:a}=e.getActiveControl()||{},l=n&&a?(i=a.getActionHandler(t,e,a))===null||i===void 0?void 0:i.bind(a):O0,c=((f,p,x,m)=>{if(!p||!f)return"drag";let _=m.controls[p];return _.getActionName(x,_,m)})(n,o,t,e),h=t[this.centeredKey],u=this._shouldCenterTransform(e,c,h)?{x:ae,y:ae}:this._getOriginFromCorner(e,o),d={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:o,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:r.x-e.left,offsetY:r.y-e.top,originX:u.x,originY:u.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Ve(e.angle),width:e.width,height:e.height,shiftKey:t.shiftKey,altKey:h,original:G(G({},Jf(e)),{},{originX:u.x,originY:u.y})};this._currentTransform=d,this.fire("before:transform",{e:t,transform:d})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n).transform(this.viewportTransform),a=new st(e+i,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(o.x,a.x),h=Math.min(o.y,a.y),u=Math.max(o.x,a.x),d=Math.max(o.y,a.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,u-c,d-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,u-=l,d-=l,cn.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,u-c,d-h))}findTarget(t){if(this.skipTargetFind)return;let e=this.getViewportPoint(t),n=this._activeObject,i=this.getActiveObjects();if(this.targets=[],n&&i.length>=1){if(n.findControl(e,kh(t))||i.length>1&&this.searchPossibleTargets([n],e))return n;if(n===this.searchPossibleTargets([n],e)){if(this.preserveObjectStacking){let r=this.targets;this.targets=[];let o=this.searchPossibleTargets(this._objects,e);return t[this.altSelectionKey]&&o&&o!==n?(this.targets=r,n):o}return n}}return this.searchPossibleTargets(this._objects,e)}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),i=this.getZoom(),r=t.padding/i;if(r){let[o,a,l,c]=n,h=Math.atan2(a.y-o.y,a.x-o.x),u=Ii(h)*r,d=Oi(h)*r,f=u+d,p=u-d;n=[new st(o.x-p,o.y-f),new st(a.x+f,a.y-p),new st(l.x+p,l.y+f),new st(c.x-f,c.y+p)]}return jr.isPointInPolygon(e,n)}_checkTarget(t,e){return!!(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,ys(e,void 0,this.viewportTransform))&&(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing||!this.isTargetTransparent(t,e.x,e.y)))}_searchPossibleTargets(t,e){let n=t.length;for(;n--;){let i=t[n];if(this._checkTarget(i,e)){if(Ah(i)&&i.subTargetCheck){let r=this._searchPossibleTargets(i._objects,e);r&&this.targets.push(r)}return i}}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e);if(n&&Ah(n)&&n.interactive&&this.targets[0]){let i=this.targets;for(let r=i.length-1;r>0;r--){let o=i[r];if(!Ah(o)||!o.interactive)return o}return i[0]}return n}getViewportPoint(t){return this._pointer?this._pointer:this.getPointer(t,!0)}getScenePoint(t){return this._absolutePointer?this._absolutePointer:this.getPointer(t)}getPointer(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=this.upperCanvasEl,i=n.getBoundingClientRect(),r=E0(t),o=i.width||0,a=i.height||0;o&&a||(Bn in i&&df in i&&(a=Math.abs(i.top-i.bottom)),Ye in i&&Ce in i&&(o=Math.abs(i.right-i.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,e||(r=ys(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=o===0||a===0?new st(1,1):new st(n.width/o,n.height/a);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=es(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return Tr(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,i=!1,r=this.getActiveObjects(),o=[],a=[];t.forEach((l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),a.push(l))})),r.forEach((l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),o.push(l))})),t.length>0&&r.length>0?(i=!0,n&&this.fire("selection:updated",{e,selected:o,deselected:a})):r.length>0?(i=!0,this.fire("selection:created",{e,selected:o})):t.length>0&&(i=!0,this.fire("selection:cleared",{e,deselected:a})),i&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),i=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),i}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,Tr(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),Tr(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let i=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),i}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,i={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",i),n.fire(Oh,i))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;Tr(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let i=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(i),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&Tr(e)&&this._activeObject===e){let n=$r(t,["angle","flipX","flipY",Ce,On,Qn,na,ia,Bn]);return A0(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let i=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(i)}};X(Qh,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!1});var Pf=class{constructor(t){X(this,"targets",[]),X(this,"__disposer",void 0);let e=()=>{let{hiddenTextarea:i}=t.getActiveObject()||{};i&&i.focus()},n=t.upperCanvasEl;n.addEventListener("click",e),this.__disposer=()=>n.removeEventListener("click",e)}exitTextEditing(){this.target=void 0,this.targets.forEach((t=>{t.isEditing&&t.exitEditing()}))}add(t){this.targets.push(t)}remove(t){this.unregister(t),wr(this.targets,t)}register(t){this.target=t}unregister(t){t===this.target&&(this.target=void 0)}onMouseMove(t){var e;!((e=this.target)===null||e===void 0)&&e.isEditing&&this.target.updateSelectionOnMouseMove(t)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},iw=["target","oldTarget","fireCanvas","e"],Jn={passive:!1},Bo=(s,t)=>{let e=s.getViewportPoint(t),n=s.getScenePoint(t);return{viewportPoint:e,scenePoint:n,pointer:e,absolutePointer:n}},Zs=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.addEventListener(...e)},ci=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.removeEventListener(...e)},sw={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},ta=class extends Qh{constructor(t){super(t,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}),X(this,"_isClick",void 0),X(this,"textEditingManager",new Pf(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach((e=>{this[e]=this[e].bind(this)})),this.addOrRemove(Zs,"add")}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(t,e){let n=this.upperCanvasEl,i=this._getEventPrefix();t(T0(n),"resize",this._onResize),t(n,i+"down",this._onMouseDown),t(n,"".concat(i,"move"),this._onMouseMove,Jn),t(n,"".concat(i,"out"),this._onMouseOut),t(n,"".concat(i,"enter"),this._onMouseEnter),t(n,"wheel",this._onMouseWheel,{passive:!1}),t(n,"contextmenu",this._onContextMenu),t(n,"click",this._onClick),t(n,"dblclick",this._onClick),t(n,"dragstart",this._onDragStart),t(n,"dragend",this._onDragEnd),t(n,"dragover",this._onDragOver),t(n,"dragenter",this._onDragEnter),t(n,"dragleave",this._onDragLeave),t(n,"drop",this._onDrop),this.enablePointerEvents||t(n,"touchstart",this._onTouchStart,Jn)}removeListeners(){this.addOrRemove(ci,"remove");let t=this._getEventPrefix(),e=Ai(this.upperCanvasEl);ci(e,"".concat(t,"up"),this._onMouseUp),ci(e,"touchend",this._onTouchEnd,Jn),ci(e,"".concat(t,"move"),this._onMouseMove,Jn),ci(e,"touchmove",this._onMouseMove,Jn),clearTimeout(this._willAddMouseDown)}_onMouseWheel(t){this.__onMouseWheel(t)}_onMouseOut(t){let e=this._hoveredTarget,n=G({e:t},Bo(this,t));this.fire("mouse:out",G(G({},n),{},{target:e})),this._hoveredTarget=void 0,e&&e.fire("mouseout",G({},n)),this._hoveredTargets.forEach((i=>{this.fire("mouse:out",G(G({},n),{},{target:i})),i&&i.fire("mouseout",G({},n))})),this._hoveredTargets=[]}_onMouseEnter(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",G({e:t},Bo(this,t))),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(t){this._isClick=!1;let e=this.getActiveObject();if(e&&e.onDragStart(t)){this._dragSource=e;let n={e:t,target:e};return this.fire("dragstart",n),e.fire("dragstart",n),void Zs(this.upperCanvasEl,"drag",this._onDragProgress)}Ng(t)}_renderDragEffects(t,e,n){let i=!1,r=this._dropTarget;r&&r!==e&&r!==n&&(r.clearContextTop(),i=!0),e?.clearContextTop(),n!==e&&n?.clearContextTop();let o=this.contextTop;o.save(),o.transform(...this.viewportTransform),e&&(o.save(),e.transform(o),e.renderDragSourceEffect(t),o.restore(),i=!0),n&&(o.save(),n.transform(o),n.renderDropTargetEffect(t),o.restore(),i=!0),o.restore(),i&&(this.contextTopDirty=!0)}_onDragEnd(t){let e=!!t.dataTransfer&&t.dataTransfer.dropEffect!==zn,n=e?this._activeObject:void 0,i={e:t,target:this._dragSource,subTargets:this.targets,dragSource:this._dragSource,didDrop:e,dropTarget:n};ci(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",i),this._dragSource&&this._dragSource.fire("dragend",i),delete this._dragSource,this._onMouseUp(t)}_onDragProgress(t){let e={e:t,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",e),this._dragSource&&this._dragSource.fire("drag",e)}findDragTargets(t){return this.targets=[],{target:this._searchPossibleTargets(this._objects,this.getViewportPoint(t)),targets:[...this.targets]}}_onDragOver(t){let e="dragover",{target:n,targets:i}=this.findDragTargets(t),r=this._dragSource,o={e:t,target:n,subTargets:i,dragSource:r,canDrop:!1,dropTarget:void 0},a;this.fire(e,o),this._fireEnterLeaveEvents(n,o),n&&(n.canDrop(t)&&(a=n),n.fire(e,o));for(let l=0;l<i.length;l++){let c=i[l];c.canDrop(t)&&(a=c),c.fire(e,o)}this._renderDragEffects(t,r,a),this._dropTarget=a}_onDragEnter(t){let{target:e,targets:n}=this.findDragTargets(t),i={e:t,target:e,subTargets:n,dragSource:this._dragSource};this.fire("dragenter",i),this._fireEnterLeaveEvents(e,i)}_onDragLeave(t){let e={e:t,target:this._draggedoverTarget,subTargets:this.targets,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(void 0,e),this._renderDragEffects(t,this._dragSource),this._dropTarget=void 0,this.targets=[],this._hoveredTargets=[]}_onDrop(t){let{target:e,targets:n}=this.findDragTargets(t),i=this._basicEventHandler("drop:before",G({e:t,target:e,subTargets:n,dragSource:this._dragSource},Bo(this,t)));i.didDrop=!1,i.dropTarget=void 0,this._basicEventHandler("drop",i),this.fire("drop:after",i)}_onContextMenu(t){let e=this.findTarget(t),n=this.targets||[],i=this._basicEventHandler("contextmenu:before",{e:t,target:e,subTargets:n});return this.stopContextMenu&&Ng(t),this._basicEventHandler("contextmenu",i),!1}_onClick(t){let e=t.detail;e>3||e<2||(this._cacheTransformEventData(t),e==2&&t.type==="dblclick"&&this._handleEvent(t,"dblclick"),e==3&&this._handleEvent(t,"tripleclick"),this._resetTransformEventData())}getPointerId(t){let e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1}_isMainEvent(t){return t.isPrimary===!0||t.isPrimary!==!1&&(t.type==="touchend"&&t.touches.length===0||!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(t){let e=!this.allowTouchScrolling,n=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(t)),this.__onMouseDown(t),(this.isDrawingMode||n&&this._target===n)&&(e=!0),e&&t.preventDefault(),this._resetTransformEventData();let i=this.upperCanvasEl,r=this._getEventPrefix(),o=Ai(i);Zs(o,"touchend",this._onTouchEnd,Jn),e&&Zs(o,"touchmove",this._onMouseMove,Jn),ci(i,"".concat(r,"down"),this._onMouseDown)}_onMouseDown(t){this.__onMouseDown(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();ci(e,"".concat(n,"move"),this._onMouseMove,Jn);let i=Ai(e);Zs(i,"".concat(n,"up"),this._onMouseUp),Zs(i,"".concat(n,"move"),this._onMouseMove,Jn)}_onTouchEnd(t){if(t.touches.length>0)return;this.__onMouseUp(t),this._resetTransformEventData(),delete this.mainTouchId;let e=this._getEventPrefix(),n=Ai(this.upperCanvasEl);ci(n,"touchend",this._onTouchEnd,Jn),ci(n,"touchmove",this._onMouseMove,Jn),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout((()=>{Zs(this.upperCanvasEl,"".concat(e,"down"),this._onMouseDown),this._willAddMouseDown=0}),400)}_onMouseUp(t){this.__onMouseUp(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();if(this._isMainEvent(t)){let i=Ai(this.upperCanvasEl);ci(i,"".concat(n,"up"),this._onMouseUp),ci(i,"".concat(n,"move"),this._onMouseMove,Jn),Zs(e,"".concat(n,"move"),this._onMouseMove,Jn)}}_onMouseMove(t){let e=this.getActiveObject();!this.allowTouchScrolling&&(!e||!e.shouldStartDragging(t))&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(t){let e=this.getActiveObject();return!!e!=!!t||e&&t&&e!==t}__onMouseUp(t){var e;this._cacheTransformEventData(t),this._handleEvent(t,"up:before");let n=this._currentTransform,i=this._isClick,r=this._target,{button:o}=t;if(o)return(this.fireMiddleClick&&o===1||this.fireRightClick&&o===2)&&this._handleEvent(t,"up"),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(t);if(!this._isMainEvent(t))return;let a,l,c=!1;if(n&&(this._finalizeCurrentTransform(t),c=n.actionPerformed),!i){let h=r===this._activeObject;this.handleSelection(t),c||(c=this._shouldRender(r)||!h&&r===this._activeObject)}if(r){let h=r.findControl(this.getViewportPoint(t),kh(t)),{key:u,control:d}=h||{};if(l=u,r.selectable&&r!==this._activeObject&&r.activeOn==="up")this.setActiveObject(r,t),c=!0;else if(d){let f=d.getMouseUpHandler(t,r,d);f&&(a=this.getScenePoint(t),f.call(d,t,n,a.x,a.y))}r.isMoving=!1}if(n&&(n.target!==r||n.corner!==l)){let h=n.target&&n.target.controls[n.corner],u=h&&h.getMouseUpHandler(t,n.target,h);a=a||this.getScenePoint(t),u&&u.call(h,t,n,a.x,a.y)}this._setCursorFromEvent(t,r),this._handleEvent(t,"up"),this._groupSelector=null,this._currentTransform=null,r&&(r.__corner=void 0),c?this.requestRenderAll():i||(e=this._activeObject)!==null&&e!==void 0&&e.isEditing||this.renderTop()}_basicEventHandler(t,e){let{target:n,subTargets:i=[]}=e;this.fire(t,e),n&&n.fire(t,e);for(let r=0;r<i.length;r++)i[r]!==n&&i[r].fire(t,e);return e}_handleEvent(t,e,n){let i=this._target,r=this.targets||[],o=G(G(G({e:t,target:i,subTargets:r},Bo(this,t)),{},{transform:this._currentTransform},e==="up:before"||e==="up"?{isClick:this._isClick,currentTarget:this.findTarget(t),currentSubTargets:this.targets}:{}),e==="down:before"||e==="down"?n:{});this.fire("mouse:".concat(e),o),i&&i.fire("mouse".concat(e),o);for(let a=0;a<r.length;a++)r[a]!==i&&r[a].fire("mouse".concat(e),o)}_onMouseDownInDrawingMode(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(t),this.requestRenderAll());let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(t){if(this._isCurrentlyDrawing){let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")}_onMouseUpInDrawingMode(t){let e=this.getScenePoint(t);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:t,pointer:e}):this._isCurrentlyDrawing=!1,this._handleEvent(t,"up")}__onMouseDown(t){this._isClick=!0,this._cacheTransformEventData(t),this._handleEvent(t,"down:before");let e=this._target,n=!!e&&e===this._activeObject,{button:i}=t;if(i)return(this.fireMiddleClick&&i===1||this.fireRightClick&&i===2)&&this._handleEvent(t,"down",{alreadySelected:n}),void this._resetTransformEventData();if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(t);if(!this._isMainEvent(t)||this._currentTransform)return;let r=this._shouldRender(e),o=!1;if(this.handleMultiSelection(t,e)?(e=this._activeObject,o=!0,r=!0):this._shouldClearSelection(t,e)&&this.discardActiveObject(t),this.selection&&(!e||!e.selectable&&!e.isEditing&&e!==this._activeObject)){let a=this.getScenePoint(t);this._groupSelector={x:a.x,y:a.y,deltaY:0,deltaX:0}}if(n=!!e&&e===this._activeObject,e){e.selectable&&e.activeOn==="down"&&this.setActiveObject(e,t);let a=e.findControl(this.getViewportPoint(t),kh(t));if(e===this._activeObject&&(a||!o)){this._setupCurrentTransform(t,e,n);let l=a?a.control:void 0,c=this.getScenePoint(t),h=l&&l.getMouseDownHandler(t,e,l);h&&h.call(l,t,this._currentTransform,c.x,c.y)}}r&&(this._objectsToRender=void 0),this._handleEvent(t,"down",{alreadySelected:n}),r&&this.requestRenderAll()}_resetTransformEventData(){this._target=this._pointer=this._absolutePointer=void 0}_cacheTransformEventData(t){this._resetTransformEventData(),this._pointer=this.getViewportPoint(t),this._absolutePointer=ys(this._pointer,void 0,this.viewportTransform),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)}__onMouseMove(t){if(this._isClick=!1,this._cacheTransformEventData(t),this._handleEvent(t,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(t);if(!this._isMainEvent(t))return;let e=this._groupSelector;if(e){let n=this.getScenePoint(t);e.deltaX=n.x-e.x,e.deltaY=n.y-e.y,this.renderTop()}else if(this._currentTransform)this._transformObject(t);else{let n=this.findTarget(t);this._setCursorFromEvent(t,n),this._fireOverOutEvents(t,n)}this.textEditingManager.onMouseMove(t),this._handleEvent(t,"move"),this._resetTransformEventData()}_fireOverOutEvents(t,e){let n=this._hoveredTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("mouse",{e:t,target:e,oldTarget:n,fireCanvas:!0});for(let a=0;a<o;a++)r[a]===e||i[a]&&i[a]===n||this.fireSyntheticInOutEvents("mouse",{e:t,target:r[a],oldTarget:i[a]});this._hoveredTarget=e,this._hoveredTargets=this.targets.concat()}_fireEnterLeaveEvents(t,e){let n=this._draggedoverTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("drag",G(G({},e),{},{target:t,oldTarget:n,fireCanvas:!0}));for(let a=0;a<o;a++)this.fireSyntheticInOutEvents("drag",G(G({},e),{},{target:r[a],oldTarget:i[a]}));this._draggedoverTarget=t}fireSyntheticInOutEvents(t,e){let{target:n,oldTarget:i,fireCanvas:r,e:o}=e,a=Fe(e,iw),{targetIn:l,targetOut:c,canvasIn:h,canvasOut:u}=sw[t],d=i!==n;if(i&&d){let f=G(G({},a),{},{e:o,target:i,nextTarget:n},Bo(this,o));r&&this.fire(u,f),i.fire(c,f)}if(n&&d){let f=G(G({},a),{},{e:o,target:n,previousTarget:i},Bo(this,o));r&&this.fire(h,f),n.fire(l,f)}}__onMouseWheel(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()}_transformObject(t){let e=this.getScenePoint(t),n=this._currentTransform,i=n.target,r=i.group?ys(e,void 0,i.group.calcTransformMatrix()):e;n.shiftKey=t.shiftKey,n.altKey=!!this.centeredKey&&t[this.centeredKey],this._performTransformAction(t,n,r),n.actionPerformed&&this.requestRenderAll()}_performTransformAction(t,e,n){let{action:i,actionHandler:r,target:o}=e,a=!!r&&r(t,e,n.x,n.y);a&&o.setCoords(),i==="drag"&&a&&(e.target.isMoving=!0,this.setCursor(e.target.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a}_setCursorFromEvent(t,e){if(!e)return void this.setCursor(this.defaultCursor);let n=e.hoverCursor||this.hoverCursor,i=Tr(this._activeObject)?this._activeObject:null,r=(!i||e.group!==i)&&e.findControl(this.getViewportPoint(t));if(r){let o=r.control;this.setCursor(o.cursorStyleHandler(t,o,e))}else e.subTargetCheck&&this.targets.concat().reverse().map((o=>{n=o.hoverCursor||n})),this.setCursor(n)}handleMultiSelection(t,e){let n=this._activeObject,i=Tr(n);if(n&&this._isSelectionKeyPressed(t)&&this.selection&&e&&e.selectable&&(n!==e||i)&&(i||!e.isDescendantOf(n)&&!n.isDescendantOf(e))&&!e.onSelect({e:t})&&!n.getActiveControl()){if(i){let r=n.getObjects();if(e===n){let o=this.getViewportPoint(t);if(!(e=this.searchPossibleTargets(r,o)||this.searchPossibleTargets(this._objects,o))||!e.selectable)return!1}e.group===n?(n.remove(e),this._hoveredTarget=e,this._hoveredTargets=[...this.targets],n.size()===1&&this._setActiveObject(n.item(0),t)):(n.multiSelectAdd(e),this._hoveredTarget=n,this._hoveredTargets=[...this.targets]),this._fireSelectionEvents(r,t)}else{n.isEditing&&n.exitEditing();let r=new(Ut.getClass("ActiveSelection"))([],{canvas:this});r.multiSelectAdd(n,e),this._hoveredTarget=r,this._setActiveObject(r,t),this._fireSelectionEvents([n],t)}return!0}return!1}handleSelection(t){if(!this.selection||!this._groupSelector)return!1;let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n),a=o.add(new st(i,r)),l=o.min(a),c=o.max(a).subtract(l),h=this.collectObjects({left:l.x,top:l.y,width:c.x,height:c.y},{includeIntersecting:!this.selectionFullyContained}),u=o.eq(a)?h[0]?[h[0]]:[]:h.length>1?h.filter((d=>!d.onSelect({e:t}))).reverse():h;if(u.length===1)this.setActiveObject(u[0],t);else if(u.length>1){let d=Ut.getClass("ActiveSelection");this.setActiveObject(new d(u,{canvas:this}),t)}return this._groupSelector=null,!0}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,{upper:n}=this.elements;n.ctx=void 0;let i=super.toCanvasElement(t,e);return n.ctx=n.el.getContext("2d"),i}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},M_={x1:0,y1:0,x2:0,y2:0},rw=G(G({},M_),{},{r1:0,r2:0}),Vo=(s,t)=>isNaN(s)&&typeof t=="number"?t:s;function w_(s){return s&&/%$/.test(s)&&Number.isFinite(parseFloat(s))}function T_(s,t){let e=typeof s=="number"?s:typeof s=="string"?parseFloat(s)/(w_(s)?100:1):NaN;return Zr(0,Vo(e,t),1)}var ow=/\s*;\s*/,aw=/\s*:\s*/;function lw(s,t){let e,n,i=s.getAttribute("style");if(i){let o=i.split(ow);o[o.length-1]===""&&o.pop();for(let a=o.length;a--;){let[l,c]=o[a].split(aw).map((h=>h.trim()));l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}let r=new Ln(e||s.getAttribute("stop-color")||"rgb(0,0,0)");return{offset:T_(s.getAttribute("offset"),0),color:r.toRgb(),opacity:Vo(parseFloat(n||s.getAttribute("stop-opacity")||""),1)*r.getAlpha()*t}}function cw(s,t){let e=[],n=s.getElementsByTagName("stop"),i=T_(t,1);for(let r=n.length;r--;)e.push(lw(n[r],i));return e}function C_(s){return s.nodeName==="linearGradient"||s.nodeName==="LINEARGRADIENT"?"linear":"radial"}function E_(s){return s.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function Ei(s,t){return s.getAttribute(t)}function hw(s,t){return(function(e,n){let i,{width:r,height:o,gradientUnits:a}=n;return Object.entries(e).reduce(((l,c)=>{let[h,u]=c;if(u==="Infinity")i=1;else if(u==="-Infinity")i=0;else{let d=typeof u=="string";i=d?parseFloat(u):u,d&&w_(u)&&(i*=.01,a==="pixels"&&(h!=="x1"&&h!=="x2"&&h!=="r2"||(i*=r),h!=="y1"&&h!=="y2"||(i*=o)))}return l[h]=i,l}),{})})(C_(s)==="linear"?(function(e){return{x1:Ei(e,"x1")||0,y1:Ei(e,"y1")||0,x2:Ei(e,"x2")||"100%",y2:Ei(e,"y2")||0}})(s):(function(e){return{x1:Ei(e,"fx")||Ei(e,"cx")||"50%",y1:Ei(e,"fy")||Ei(e,"cy")||"50%",r1:0,x2:Ei(e,"cx")||"50%",y2:Ei(e,"cy")||"50%",r2:Ei(e,"r")||"50%"}})(s),G(G({},t),{},{gradientUnits:E_(s)}))}var Go=class{constructor(t){let{type:e="linear",gradientUnits:n="pixels",coords:i={},colorStops:r=[],offsetX:o=0,offsetY:a=0,gradientTransform:l,id:c}=t||{};Object.assign(this,{type:e,gradientUnits:n,coords:G(G({},e==="radial"?rw:M_),i),colorStops:r,offsetX:o,offsetY:a,gradientTransform:l,id:c?"".concat(c,"_").concat(tr()):tr()})}addColorStop(t){for(let e in t){let n=new Ln(t[e]);this.colorStops.push({offset:parseFloat(e),color:n.toRgb(),opacity:n.getAlpha()})}return this}toObject(t){return G(G({},$r(this,t)),{},{type:this.type,coords:G({},this.coords),colorStops:this.colorStops.map((e=>G({},e))),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0})}toSVG(t){let{additionalTransform:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],i=this.gradientTransform?this.gradientTransform.concat():In.concat(),r=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",o=this.colorStops.map((u=>G({},u))).sort(((u,d)=>u.offset-d.offset)),a=-this.offsetX,l=-this.offsetY;var c;r==="objectBoundingBox"?(a/=t.width,l/=t.height):(a+=t.width/2,l+=t.height/2),(c=t)&&typeof c._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(a-=t.pathOffset.x,l-=t.pathOffset.y),i[4]-=a,i[5]-=l;let h=['id="SVGID_'.concat(this.id,'"'),'gradientUnits="'.concat(r,'"'),'gradientTransform="'.concat(e?e+" ":"").concat(Ko(i),'"'),""].join(" ");if(this.type==="linear"){let{x1:u,y1:d,x2:f,y2:p}=this.coords;n.push("<linearGradient ",h,' x1="',u,'" y1="',d,'" x2="',f,'" y2="',p,`">
`)}else if(this.type==="radial"){let{x1:u,y1:d,x2:f,y2:p,r1:x,r2:m}=this.coords,_=x>m;n.push("<radialGradient ",h,' cx="',_?u:f,'" cy="',_?d:p,'" r="',_?x:m,'" fx="',_?f:u,'" fy="',_?p:d,`">
`),_&&(o.reverse(),o.forEach((A=>{A.offset=1-A.offset})));let b=Math.min(x,m);if(b>0){let A=b/Math.max(x,m);o.forEach((w=>{w.offset+=A*(1-w.offset)}))}}return o.forEach((u=>{let{color:d,offset:f,opacity:p}=u;n.push("<stop ",'offset="',100*f+"%",'" style="stop-color:',d,p!==void 0?";stop-opacity: "+p:";",`"/>
`)})),n.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),n.join("")}toLive(t){let{x1:e,y1:n,x2:i,y2:r,r1:o,r2:a}=this.coords,l=this.type==="linear"?t.createLinearGradient(e,n,i,r):t.createRadialGradient(e,n,o,i,r,a);return this.colorStops.forEach((c=>{let{color:h,opacity:u,offset:d}=c;l.addColorStop(d,u!==void 0?new Ln(h).setAlpha(u).toRgba():h)})),l}static async fromObject(t){let{colorStops:e,gradientTransform:n}=t;return new this(G(G({},t),{},{colorStops:e?e.map((i=>G({},i))):void 0,gradientTransform:n?[...n]:void 0}))}static fromElement(t,e,n){let i=E_(t),r=e._findCenterFromElement();return new this(G({id:t.getAttribute("id")||void 0,type:C_(t),coords:hw(t,{width:n.viewBoxWidth||n.width,height:n.viewBoxHeight||n.height}),colorStops:cw(t,n.opacity),gradientUnits:i,gradientTransform:Tf(t.getAttribute("gradientTransform")||"")},i==="pixels"?{offsetX:e.width/2-r.x,offsetY:e.height/2-r.y}:{offsetX:0,offsetY:0}))}};X(Go,"type","Gradient"),Ut.setClass(Go,"gradient"),Ut.setClass(Go,"linear"),Ut.setClass(Go,"radial");var uw=["type","source","patternTransform"],Yr=class{get type(){return"pattern"}set type(t){$s("warn","Setting type has no effect",t)}constructor(t){X(this,"repeat","repeat"),X(this,"offsetX",0),X(this,"offsetY",0),X(this,"crossOrigin",""),this.id=tr(),Object.assign(this,t)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(t){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?t.createPattern(this.source,this.repeat):null}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{repeat:e,crossOrigin:n}=this;return G(G({},$r(this,t)),{},{type:"pattern",source:this.sourceToString(),repeat:e,crossOrigin:n,offsetX:De(this.offsetX,Se.NUM_FRACTION_DIGITS),offsetY:De(this.offsetY,Se.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null})}toSVG(t){let{width:e,height:n}=t,{source:i,repeat:r,id:o}=this,a=Vo(this.offsetX/e,0),l=Vo(this.offsetY/n,0),c=r==="repeat-y"||r==="no-repeat"?1+Math.abs(a||0):Vo(i.width/e,0),h=r==="repeat-x"||r==="no-repeat"?1+Math.abs(l||0):Vo(i.height/n,0);return['<pattern id="SVGID_'.concat(o,'" x="').concat(a,'" y="').concat(l,'" width="').concat(c,'" height="').concat(h,'">'),'<image x="0" y="0" width="'.concat(i.width,'" height="').concat(i.height,'" xlink:href="').concat(this.sourceToString(),'"></image>'),"</pattern>",""].join(`
`)}static async fromObject(t,e){let{type:n,source:i,patternTransform:r}=t,o=Fe(t,uw),a=await sl(i,G(G({},e),{},{crossOrigin:o.crossOrigin}));return new this(G(G({},o),{},{patternTransform:r&&r.slice(0),source:a}))}};X(Yr,"type","Pattern"),Ut.setClass(Yr),Ut.setClass(Yr,"pattern");var dw=["path","left","top"],fw=["d"],$i=class s extends cn{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{path:n,left:i,top:r}=e,o=Fe(e,dw);super(),Object.assign(this,s.ownDefaults),this.setOptions(o),this._setPath(t||[],!0),typeof i=="number"&&this.set(Ce,i),typeof r=="number"&&this.set(Bn,r)}_setPath(t,e){this.path=m_(Array.isArray(t)?t:S_(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new st(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let i of this.path)switch(i[0]){case"L":t.lineTo(i[1]+e,i[2]+n);break;case"M":t.moveTo(i[1]+e,i[2]+n);break;case"C":t.bezierCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n,i[5]+e,i[6]+n);break;case"Q":t.quadraticCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return"#<Path (".concat(this.complexity(),'): { "top": ').concat(this.top,', "left": ').concat(this.left," }>")}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),{},{path:this.path.map((e=>e.slice()))})}toDatalessObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){let t=b_(this.path,Se.NUM_FRACTION_DIGITS);return["<path ","COMMON_PARTS",'d="'.concat(t,`" stroke-linecap="round" />
`)]}_getOffsetTransform(){let t=Se.NUM_FRACTION_DIGITS;return" translate(".concat(De(-this.pathOffset.x,t),", ").concat(De(-this.pathOffset.y,t),")")}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:i}=this._calcDimensions();this.set({width:e,height:n,pathOffset:i}),t&&this.setPositionByOrigin(i,ae,ae)}_calcBoundsFromPath(){let t=[],e=0,n=0,i=0,r=0;for(let o of this.path)switch(o[0]){case"L":i=o[1],r=o[2],t.push({x:e,y:n},{x:i,y:r});break;case"M":i=o[1],r=o[2],e=i,n=r;break;case"C":t.push(...Af(i,r,o[1],o[2],o[3],o[4],o[5],o[6])),i=o[5],r=o[6];break;case"Q":t.push(...Af(i,r,o[1],o[2],o[1],o[2],o[3],o[4])),i=o[3],r=o[4];break;case"Z":i=e,r=n}return Qi(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return G(G({},t),{},{pathOffset:new st(t.left+t.width/2,t.top+t.height/2)})}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{d:r}=i;return new this(r,G(G(G({},Fe(i,fw)),e),{},{left:void 0,top:void 0}))}};X($i,"type","Path"),X($i,"cacheProperties",[...bs,"path","fillRule"]),X($i,"ATTRIBUTE_NAMES",[...ir,"d"]),Ut.setClass($i),Ut.setSVGClass($i);var pw=["left","top","radius"],A_=["radius","startAngle","endAngle","counterClockwise"],Ji=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,Ve(this.startAngle),Ve(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(On)}getRadiusY(){return this.get("radius")*this.get(Qn)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...A_,...t])}_toSVG(){let t=(this.endAngle-this.startAngle)%360;if(t===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',"".concat(this.radius),`" />
`];{let{radius:e}=this,n=Ve(this.startAngle),i=Ve(this.endAngle),r=Ii(n)*e,o=Oi(n)*e,a=Ii(i)*e,l=Oi(i)*e,c=t>180?1:0,h=this.counterClockwise?0:1;return['<path d="M '.concat(r," ").concat(o," A ").concat(e," ").concat(e," 0 ").concat(c," ").concat(h," ").concat(a," ").concat(l,'" '),"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,radius:a=0}=i;return new this(G(G({},Fe(i,pw)),{},{radius:a,left:r-a,top:o-a}))}static fromObject(t){return super._fromObject(t)}};X(Ji,"type","Circle"),X(Ji,"cacheProperties",[...bs,...A_]),X(Ji,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),X(Ji,"ATTRIBUTE_NAMES",["cx","cy","r",...ir]),Ut.setClass(Ji),Ut.setSVGClass(Ji);var mw=["x1","y1","x2","y2"],gw=["x1","y1","x2","y2"],Df=["x1","x2","y1","y2"],Cr=class s extends cn{constructor(){let[t,e,n,i]=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0,0,0],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=i,this._setWidthHeight();let{left:o,top:a}=r;typeof o=="number"&&this.set(Ce,o),typeof a=="number"&&this.set(Bn,a)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:i}=this;this.width=Math.abs(n-t),this.height=Math.abs(i-e);let{left:r,top:o,width:a,height:l}=Qi([{x:t,y:e},{x:n,y:i}]),c=new st(r+a/2,o+l/2);this.setPositionByOrigin(c,ae,ae)}_set(t,e){return super._set(t,e),Df.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var i;ui(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(i=this.stroke)!==null&&i!==void 0?i:t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new st((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),this.calcLinePoints())}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:i,width:r,height:o}=this,a=t<=e?-1:1,l=n<=i?-1:1;return{x1:a*r/2,x2:a*-r/2,y1:l*o/2,y2:l*-o/2}}_toSVG(){let{x1:t,x2:e,y1:n,y2:i}=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="'.concat(t,'" y1="').concat(n,'" x2="').concat(e,'" y2="').concat(i,`" />
`)]}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n),{x1:r=0,y1:o=0,x2:a=0,y2:l=0}=i;return new this([r,o,a,l],Fe(i,mw))}static fromObject(t){let{x1:e,y1:n,x2:i,y2:r}=t,o=Fe(t,gw);return this._fromObject(G(G({},o),{},{points:[e,n,i,r]}),{extraParam:"points"})}};X(Cr,"type","Line"),X(Cr,"cacheProperties",[...bs,...Df]),X(Cr,"ATTRIBUTE_NAMES",ir.concat(Df)),Ut.setClass(Cr),Ut.setSVGClass(Cr);var Ho=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',"".concat(-t," ").concat(e,",0 ").concat(-e,",").concat(t," ").concat(e),'" />']}};X(Ho,"type","Triangle"),X(Ho,"ownDefaults",{width:100,height:100}),Ut.setClass(Ho),Ut.setSVGClass(Ho);var R_=["rx","ry"],Js=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(On)}getRy(){return this.get("ry")*this.get(Qn)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...R_,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" rx="'.concat(this.rx,'" ry="').concat(this.ry,`" />
`)]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,Ss,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let i=Ms(t,this.ATTRIBUTE_NAMES,n);return i.left=(i.left||0)-i.rx,i.top=(i.top||0)-i.ry,new this(i)}};function _w(s){if(!s)return[];let t=s.replace(/,/g," ").trim().split(/\s+/),e=[];for(let n=0;n<t.length;n+=2)e.push({x:parseFloat(t[n]),y:parseFloat(t[n+1])});return e}X(Js,"type","Ellipse"),X(Js,"cacheProperties",[...bs,...R_]),X(Js,"ownDefaults",{rx:0,ry:0}),X(Js,"ATTRIBUTE_NAMES",[...ir,"cx","cy","rx","ry"]),Ut.setClass(Js),Ut.setSVGClass(Js);var xw=["left","top"],P_={exactBoundingBox:!1},Zi=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),X(this,"strokeDiff",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:i}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set(Ce,n),typeof i=="number"&&this.set(Bn,i)}isOpen(){return!0}_projectStrokeOnPoints(t){return o_(this.points,t,this.isOpen())}_calcDimensions(t){t=G({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth},t||{});let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map((c=>c.projectedPoint)):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new st,strokeOffset:new st,strokeDiff:new st};let n=Qi(e),i=fl(G(G({},t),{},{scaleX:1,scaleY:1})),r=Qi(this.points.map((c=>Tn(c,i,!0)))),o=new st(this.scaleX,this.scaleY),a=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(a-=l*Math.tan(Ve(this.skewX)),l-=a*Math.tan(Ve(this.skewY))),G(G({},n),{},{pathOffset:new st(a,l),strokeOffset:new st(r.left,r.top).subtract(new st(n.left,n.top)).multiply(o),strokeDiff:new st(n.width,n.height).subtract(new st(r.width,r.height)).multiply(o)})}_findCenterFromElement(){let t=Qi(this.points);return new st(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}=this._calcDimensions();this.set({width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}),t&&this.setPositionByOrigin(new st(e+i/2,n+r/2),ae,ae)}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new st(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.exactBoundingBox){let o;if(Object.keys(t).some((a=>this.strokeUniform||this.constructor.layoutProperties.includes(a)))){var e,n;let{width:a,height:l}=this._calcDimensions(t);o=new st((e=t.width)!==null&&e!==void 0?e:a,(n=t.height)!==null&&n!==void 0?n:l)}else{var i,r;o=new st((i=t.width)!==null&&i!==void 0?i:this.width,(r=t.height)!==null&&r!==void 0?r:this.height)}return o.multiply(new st(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,i=super._set(t,e);return this.exactBoundingBox&&n&&((t===On||t===Qn)&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),i}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject(t)),{},{points:this.points.map((e=>{let{x:n,y:i}=e;return{x:n,y:i}}))})}_toSVG(){let t=[],e=this.pathOffset.x,n=this.pathOffset.y,i=Se.NUM_FRACTION_DIGITS;for(let r=0,o=this.points.length;r<o;r++)t.push(De(this.points[r].x-e,i),",",De(this.points[r].y-n,i)," ");return["<".concat(this.constructor.type.toLowerCase()," "),"COMMON_PARTS",'points="'.concat(t.join(""),`" />
`)]}_render(t){let e=this.points.length,n=this.pathOffset.x,i=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-i);for(let r=0;r<e;r++){let o=this.points[r];t.lineTo(o.x-n,o.y-i)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){return new this(_w(t.getAttribute("points")),G(G({},Fe(Ms(t,this.ATTRIBUTE_NAMES,n),xw)),e))}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};X(Zi,"ownDefaults",P_),X(Zi,"type","Polyline"),X(Zi,"layoutProperties",[na,ia,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),X(Zi,"cacheProperties",[...bs,"points"]),X(Zi,"ATTRIBUTE_NAMES",[...ir]),Ut.setClass(Zi),Ut.setSVGClass(Zi);var Wo=class extends Zi{isOpen(){return!1}};X(Wo,"ownDefaults",P_),X(Wo,"type","Polygon"),Ut.setClass(Wo),Ut.setSVGClass(Wo);var tu=class extends cn{isEmptyStyles(t){if(!this.styles||t!==void 0&&!this.styles[t])return!0;let e=t===void 0?this.styles:{line:this.styles[t]};for(let n in e)for(let i in e[n])for(let r in e[n][i])return!1;return!0}styleHas(t,e){if(!this.styles||e!==void 0&&!this.styles[e])return!1;let n=e===void 0?this.styles:{0:this.styles[e]};for(let i in n)for(let r in n[i])if(n[i][r][t]!==void 0)return!0;return!1}cleanStyle(t){if(!this.styles)return!1;let e=this.styles,n,i,r=0,o=!0,a=0;for(let l in e){n=0;for(let c in e[l]){let h=e[l][c]||{};r++,h[t]!==void 0?(i?h[t]!==i&&(o=!1):i=h[t],h[t]===this[t]&&delete h[t]):o=!1,Object.keys(h).length!==0?n++:delete e[l][c]}n===0&&delete e[l]}for(let l=0;l<this._textLines.length;l++)a+=this._textLines[l].length;o&&r===a&&(this[t]=i,this.removeStyle(t))}removeStyle(t){if(!this.styles)return;let e=this.styles,n,i,r;for(i in e){for(r in n=e[i],n)delete n[r][t],Object.keys(n[r]).length===0&&delete n[r];Object.keys(n).length===0&&delete e[i]}}_extendStyles(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);this._getLineStyle(n)||this._setLineStyle(n);let r=Zf(G(G({},this._getStyleDeclaration(n,i)),e),(o=>o!==void 0));this._setStyleDeclaration(n,i,r)}getSelectionStyles(t,e,n){let i=[];for(let r=t;r<(e||t);r++)i.push(this.getStyleAtPosition(r,n));return i}getStyleAtPosition(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);return e?this.getCompleteStyleDeclaration(n,i):this._getStyleDeclaration(n,i)}setSelectionStyles(t,e,n){for(let i=e;i<(n||e);i++)this._extendStyles(i,t);this._forceClearCache=!0}_getStyleDeclaration(t,e){var n;let i=this.styles&&this.styles[t];return i&&(n=i[e])!==null&&n!==void 0?n:{}}getCompleteStyleDeclaration(t,e){return G(G({},$r(this,this.constructor._styleProperties)),this._getStyleDeclaration(t,e))}_setStyleDeclaration(t,e,n){this.styles[t][e]=n}_deleteStyleDeclaration(t,e){delete this.styles[t][e]}_getLineStyle(t){return!!this.styles[t]}_setLineStyle(t){this.styles[t]={}}_deleteLineStyle(t){delete this.styles[t]}};X(tu,"_styleProperties",J1);var vw=/  +/g,yw=/"/g;function rf(s,t,e,n,i){return"		".concat((function(r,o){let{left:a,top:l,width:c,height:h}=o,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Se.NUM_FRACTION_DIGITS,d=ll(tn,r,!1),[f,p,x,m]=[a,l,c,h].map((_=>De(_,u)));return"<rect ".concat(d,' x="').concat(f,'" y="').concat(p,'" width="').concat(x,'" height="').concat(m,'"></rect>')})(s,{left:t,top:e,width:n,height:i}),`
`)}var Sw=["textAnchor","textDecoration","dx","dy","top","left","fontSize","strokeWidth"],of,je=class s extends tu{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),X(this,"__charBounds",[]),Object.assign(this,s.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=ap(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes(Ki)&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,i,r,o,a;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign===Ki||l!==c-1&&!this.isEndOfWrapping(l))&&(i=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(a=this.textLines[l].match(this._reSpacesAndTabs)))){n=a.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)o=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(o.width+=t,o.kernedWidth+=t,o.left+=i,i+=t):o.left+=i}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,i;for(i=0;i<n.length;i++){if(t<=n[i].length)return{lineIndex:i,charIndex:t};t-=n[i].length+this.missingNewlineOffset(i,e)}return{lineIndex:i-1,charIndex:n[i-1].length<t?n[i-1].length:t}}toString(){return"#<Text (".concat(this.complexity(),'): { "text": "').concat(this.text,'", "fontFamily": "').concat(this.fontFamily,'" }>')}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst===Vn?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case ae:t.textBaseline="middle";break;case"ascender":t.textBaseline=Bn;break;case"descender":t.textBaseline=df}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let i=this.getLineWidth(e);i>t&&(t=i)}return t}_renderTextLine(t,e,n,i,r,o){this._renderChars(t,e,n,i,r,o)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),i=this._getTopOffset();for(let r=0,o=this._textLines.length;r<o;r++){let a=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){i+=a;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,u,d=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),x=this.getHeightOfLineImpl(r);for(let m=0;m<l;m++){let _=this.__charBounds[r][m];u=this.getValueOfPropertyAt(r,m,"textBackgroundColor"),this.path?(t.save(),t.translate(_.renderLeft,_.renderTop),t.rotate(_.angle),t.fillStyle=u,u&&t.fillRect(-_.width/2,-x*(1-this._fontSizeFraction),_.width,x),t.restore()):u!==p?(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=p,p&&t.fillRect(h,i,d,x),f=_.left,d=_.width,p=u):d+=_.kernedWidth}u&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=u,t.fillRect(h,i,d,x)),i+=a}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,i){let r=nl.getFontCache(e),o=this._getFontDeclaration(e),a=n?n+t:t,l=n&&o===this._getFontDeclaration(i),c=e.fontSize/this.CACHE_FONT_SIZE,h,u,d,f;if(n&&r.has(n)&&(d=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(a)&&(u=r.get(a),f=u-d),h===void 0||d===void 0||u===void 0){let p=(function(){return of||(of=ti({width:0,height:0}).getContext("2d")),of})();this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),d===void 0&&l&&n&&(d=p.measureText(n).width,r.set(n,d)),l&&u===void 0&&(u=p.measureText(a).width,r.set(a,u),f=u-d)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,i=0,r=this.pathSide===Ye,o=this.path,a=this._textLines[t],l=a.length,c=new Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let u=a[h];n=this._getGraphemeBox(u,t,h,e),c[h]=n,i+=n.kernedWidth,e=u}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},o&&o.segmentsInfo){let h=0,u=o.segmentsInfo[o.segmentsInfo.length-1].length;switch(this.textAlign){case Ce:h=r?u-i:0;break;case ae:h=(u-i)/2;break;case Ye:h=r?0:u-i}h+=this.pathStartOffset*(r?-1:1);for(let d=r?l-1:0;r?d>=0:d<l;r?d--:d++)n=c[d],h>u?h%=u:h<0&&(h+=u),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:i,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,i=this.path,r=y_(i.path,n,i.segmentsInfo);e.renderLeft=r.x-i.pathOffset.x,e.renderTop=r.y-i.pathOffset.y,e.angle=r.angle+(this.pathSide===Ye?Math.PI:0)}_getGraphemeBox(t,e,n,i,r){let o=this.getCompleteStyleDeclaration(e,n),a=i?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,o,i,a),c,h=l.kernedWidth,u=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,h+=c);let d={width:u,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];d.left=f.left+f.width+l.kernedWidth-l.width}return d}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let i=1,r=this._textLines[t].length;i<r;i++)n=Math.max(this.getHeightOfChar(t,i),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,i=this._getLeftOffset(),r=this._getTopOffset();for(let o=0,a=this._textLines.length;o<a;o++)this._renderTextLine(e,t,this._textLines[o],i+this._getLineLeftOffset(o),r+n+this.getHeightOfLineImpl(o),o),n+=this.getHeightOfLine(o);t.restore()}_renderTextFill(t){(this.fill||this.styleHas(tn))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,i,r,o){let a=this.textAlign.includes(Ki),l=this.path,c=!a&&this.charSpacing===0&&this.isEmptyStyles(o)&&!l,h=this.direction==="ltr",u=this.direction==="ltr"?1:-1,d=e.direction,f,p,x,m,_,b="",A=0;if(e.save(),d!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?Ce:Ye),r-=this.getHeightOfLineImpl(o)*this._fontSizeFraction,c)return this._renderChar(t,e,o,0,n.join(""),i,r),void e.restore();for(let w=0,E=n.length-1;w<=E;w++)m=w===E||this.charSpacing||l,b+=n[w],x=this.__charBounds[o][w],A===0?(i+=u*(x.kernedWidth-x.width),A+=x.width):A+=x.kernedWidth,a&&!m&&this._reSpaceAndTab.test(n[w])&&(m=!0),m||(f=f||this.getCompleteStyleDeclaration(o,w),p=this.getCompleteStyleDeclaration(o,w+1),m=mu(f,p,!1)),m&&(l?(e.save(),e.translate(x.renderLeft,x.renderTop),e.rotate(x.angle),this._renderChar(t,e,o,w,b,-A/2,0),e.restore()):(_=i,this._renderChar(t,e,o,w,b,_,r)),b="",f=p,i+=u*A,A=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,i=ti({width:e,height:n}),r=i.getContext("2d");return i.width=e,i.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(i,"no-repeat")}handleFiller(t,e,n){let i,r;return ui(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(i=-this.width/2,r=-this.height/2,t.translate(i,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:i,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,e){let{stroke:n,strokeWidth:i}=e;return t.lineWidth=i,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",n)}_setFillStyles(t,e){let{fill:n}=e;return this.handleFiller(t,"fillStyle",n)}_renderChar(t,e,n,i,r,o,a){let l=this._getStyleDeclaration(n,i),c=this.getCompleteStyleDeclaration(n,i),h=t==="fillText"&&c.fill,u=t==="strokeText"&&c.stroke&&c.strokeWidth;if(u||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(a+=l.deltaY),h){let d=this._setFillStyles(e,c);e.fillText(r,o-d.offsetX,a-d.offsetY)}if(u){let d=this._setStrokeStyles(e,c);e.strokeText(r,o-d.offsetX,a-d.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let i=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"fontSize"),o=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"deltaY"),a={fontSize:r*n.size,deltaY:o+r*n.baseline};this.setSelectionStyles(a,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,i=this.textAlign,r=this.direction,o=this.isEndOfWrapping(t),a=0;return i===Ki||i===ol&&!o||i===rl&&!o||i===Vh&&!o?0:(i===ae&&(a=n/2),i===Ye&&(a=n),i===ol&&(a=n/2),i===rl&&(a=n),r==="rtl"&&(i===Ye||i===Ki||i===rl?a=0:i===Ce||i===Vh?a=-n:i!==ae&&i!==ol||(a=-n/2)),a)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing!==0?this.fontSize*this.charSpacing/1e3:0}getValueOfPropertyAt(t,e,n){var i;return(i=this._getStyleDeclaration(t,e)[n])!==null&&i!==void 0?i:this[n]}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),i=this._getLeftOffset(),r=this.path,o=this._getWidthOfCharSpacing(),a=e==="linethrough"?.5:e==="overline"?1:0,l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let u=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=u;continue}let d=this._textLines[c],f=u/this.lineHeight,p=this._getLineLeftOffset(c),x=0,m=0,_=this.getValueOfPropertyAt(c,0,e),b=this.getValueOfPropertyAt(c,0,tn),A=this.getValueOfPropertyAt(c,0,qr),w=_,E=b,P=A,g=n+f*(1-this._fontSizeFraction),v=this.getHeightOfChar(c,0),T=this.getValueOfPropertyAt(c,0,"deltaY");for(let L=0,U=d.length;L<U;L++){let O=this.__charBounds[c][L];w=this.getValueOfPropertyAt(c,L,e),E=this.getValueOfPropertyAt(c,L,tn),P=this.getValueOfPropertyAt(c,L,qr);let j=this.getHeightOfChar(c,L),q=this.getValueOfPropertyAt(c,L,"deltaY");if(r&&w&&E){let B=this.fontSize*P/1e3;t.save(),t.fillStyle=b,t.translate(O.renderLeft,O.renderTop),t.rotate(O.angle),t.fillRect(-O.kernedWidth/2,l*j+q-a*B,O.kernedWidth,B),t.restore()}else if((w!==_||E!==b||j!==v||P!==A||q!==T)&&m>0){let B=this.fontSize*A/1e3,$=i+p+x;this.direction==="rtl"&&($=this.width-$-m),_&&b&&A&&(t.fillStyle=b,t.fillRect($,g+l*v+T-a*B,m,B)),x=O.left,m=O.width,_=w,A=P,b=E,v=j,T=q}else m+=O.kernedWidth}let C=i+p+x;this.direction==="rtl"&&(C=this.width-C-m),t.fillStyle=E;let R=this.fontSize*P/1e3;w&&E&&P&&t.fillRect(C,g+l*v+T-a*R,m-o,R),n+=u}this._removeShadow(t)}_getFontDeclaration(){let{fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:i=this.fontSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=t.includes("'")||t.includes('"')||t.includes(",")||s.genericFonts.includes(t.toLowerCase())?t:'"'.concat(t,'"');return[e,n,"".concat(r?this.CACHE_FONT_SIZE:i,"px"),o].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return pu(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=new Array(e.length),i=[`
`],r=[];for(let o=0;o<e.length;o++)n[o]=this.graphemeSplit(e[o]),r=r.concat(n[o],i);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return G(G({},super.toObject([...U0,...t])),{},{styles:l_(this.styles,this.text)},this.path?{path:this.path.toObject()}:{})}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let i=!1,r=!1;if(typeof t=="object")for(let o in t)o==="path"&&this.setPathInfo(),i=i||n.includes(o),r=r||o==="path";else i=n.includes(t),r=t==="path";return r&&this.setPathInfo(),i&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let i=Ms(t,s.ATTRIBUTE_NAMES,n),r=G(G({},e),i),{textAnchor:o=Ce,textDecoration:a="",dx:l=0,dy:c=0,top:h=0,left:u=0,fontSize:d=Vf,strokeWidth:f=1}=r,p=Fe(r,Sw),x=new this(Bh(t.textContent||"").trim(),G({left:u+l,top:h+c,underline:a.includes("underline"),overline:a.includes("overline"),linethrough:a.includes("line-through"),strokeWidth:0,fontSize:d},p)),m=x.getScaledHeight()/x.height,_=((x.height+x.strokeWidth)*x.lineHeight-x.height)*m,b=x.getScaledHeight()+_,A=0;return o===ae&&(A=x.getScaledWidth()/2),o===Ye&&(A=x.getScaledWidth()),x.set({left:x.left-A,top:x.top-(b-x.fontSize*(.07+x._fontSizeFraction))/x.lineHeight,strokeWidth:f}),x}static fromObject(t){return this._fromObject(G(G({},t),{},{styles:c_(t.styles||{},t.text)}),{extraParam:"text"})}};X(je,"textLayoutProperties",k0),X(je,"cacheProperties",[...bs,...U0]),X(je,"ownDefaults",K1),X(je,"type","Text"),X(je,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),X(je,"ATTRIBUTE_NAMES",ir.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-anchor")),s_(je,[class extends zh{_toSVG(){let s=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(s.textTop,s.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(s){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:s,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:s,withShadow:!0,additionalTransform:Ko(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg(s){let{textBgRects:t,textSpans:e}=s,n=this.getSvgTextDecoration(this);return[t.join(""),'		<text xml:space="preserve" ','font-family="'.concat(this.fontFamily.replace(yw,"'"),'" '),'font-size="'.concat(this.fontSize,'" '),this.fontStyle?'font-style="'.concat(this.fontStyle,'" '):"",this.fontWeight?'font-weight="'.concat(this.fontWeight,'" '):"",n?'text-decoration="'.concat(n,'" '):"",this.direction==="rtl"?'direction="'.concat(this.direction,'" '):"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",e.join(""),`</text>
`]}_getSVGTextAndBg(s,t){let e=[],n=[],i,r=s;this.backgroundColor&&n.push(...rf(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let o=0,a=this._textLines.length;o<a;o++)i=this._getLineLeftOffset(o),this.direction==="rtl"&&(i+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,t+i,r),this._setSVGTextLineText(e,o,t+i,r),r+=this.getHeightOfLine(o);return{textSpans:e,textBgRects:n}}_createTextCharSpan(s,t,e,n,i){let r=Se.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,s!==s.trim()||!!s.match(vw)),a=o?'style="'.concat(o,'"'):"",l=t.deltaY,c=l?' dy="'.concat(De(l,r),'" '):"",{angle:h,renderLeft:u,renderTop:d,width:f}=i,p="";if(u!==void 0){let x=f/2;h&&(p=' rotate="'.concat(De(ns(h),r),'"'));let m=Kr({angle:ns(h)});m[4]=u,m[5]=d;let _=new st(-x,0).transform(m);e=_.x,n=_.y}return'<tspan x="'.concat(De(e,r),'" y="').concat(De(n,r),'" ').concat(c).concat(p).concat(a,">").concat(a_(s),"</tspan>")}_setSVGTextLineText(s,t,e,n){let i=this.getHeightOfLine(t),r=this.textAlign.includes(Ki),o=this._textLines[t],a,l,c,h,u,d="",f=0;n+=i*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,x=o.length-1;p<=x;p++)u=p===x||this.charSpacing||this.path,d+=o[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!u&&this._reSpaceAndTab.test(o[p])&&(u=!0),u||(a=a||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),u=mu(a,l,!0)),u&&(h=this._getStyleDeclaration(t,p),s.push(this._createTextCharSpan(d,h,e,n,c)),d="",a=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(s,t,e,n){let i=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,o,a=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<i.length;h++){let{left:u,width:d,kernedWidth:f}=this.__charBounds[t][h];o=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),o!==c?(c&&s.push(...rf(c,e+l,n,a,r)),l=u,a=d,c=o):a+=f}o&&s.push(...rf(c,e+l,n,a,r))}_getSVGLineTopOffset(s){let t,e=0;for(t=0;t<s;t++)e+=this.getHeightOfLine(t);let n=this.getHeightOfLine(t);return{lineTop:e,offset:(this._fontSizeMult-this._fontSizeFraction)*n/(this.lineHeight*this._fontSizeMult)}}getSvgStyles(s){return"".concat(super.getSvgStyles(s)," text-decoration-thickness: ").concat(De(this.textDecorationThickness*this.getObjectScaling().y/10,Se.NUM_FRACTION_DIGITS),"%; white-space: pre;")}getSvgSpanStyles(s,t){let{fontFamily:e,strokeWidth:n,stroke:i,fill:r,fontSize:o,fontStyle:a,fontWeight:l,deltaY:c,textDecorationThickness:h,linethrough:u,overline:d,underline:f}=s,p=this.getSvgTextDecoration({underline:f??this.underline,overline:d??this.overline,linethrough:u??this.linethrough}),x=h||this.textDecorationThickness;return[i?ll(Vn,i):"",n?"stroke-width: ".concat(n,"; "):"",e?"font-family: ".concat(e.includes("'")||e.includes('"')?e:"'".concat(e,"'"),"; "):"",o?"font-size: ".concat(o,"px; "):"",a?"font-style: ".concat(a,"; "):"",l?"font-weight: ".concat(l,"; "):"",p?"text-decoration: ".concat(p,"; text-decoration-thickness: ").concat(De(x*this.getObjectScaling().y/10,Se.NUM_FRACTION_DIGITS),"%; "):"",r?ll(tn,r):"",c?"baseline-shift: ".concat(-c,"; "):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(s){return["overline","underline","line-through"].filter((t=>s[t.replace("-","")])).join(" ")}}]),Ut.setClass(je),Ut.setSVGClass(je);var If=class{constructor(t){X(this,"target",void 0),X(this,"__mouseDownInPlace",!1),X(this,"__dragStartFired",!1),X(this,"__isDraggingOver",!1),X(this,"__dragStartSelection",void 0),X(this,"__dragImageDisposer",void 0),X(this,"_dispose",void 0),this.target=t;let e=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{e.forEach((n=>n())),this._dispose=void 0}}isPointerOverSelection(t){let e=this.target,n=e.getSelectionStartFromPointer(t);return e.isEditing&&n>=e.selectionStart&&n<=e.selectionEnd&&e.selectionStart<e.selectionEnd}start(t){return this.__mouseDownInPlace=this.isPointerOverSelection(t)}isActive(){return this.__mouseDownInPlace}end(t){let e=this.isActive();return e&&!this.__dragStartFired&&(this.target.setCursorByClick(t),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,e}getDragStartSelection(){return this.__dragStartSelection}setDragImage(t,e){var n;let{selectionStart:i,selectionEnd:r}=e,o=this.target,a=o.canvas,l=new st(o.flipX?-1:1,o.flipY?-1:1),c=o._getCursorBoundaries(i),h=new st(c.left+c.leftOffset,c.top+c.topOffset).multiply(l).transform(o.calcTransformMatrix()),u=a.getScenePoint(t).subtract(h),d=o.getCanvasRetinaScaling(),f=o.getBoundingRect(),p=h.subtract(new st(f.left,f.top)),x=a.viewportTransform,m=p.add(u).transform(x,!0),_=o.backgroundColor,b=sp(o.styles);o.backgroundColor="";let A={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};o.setSelectionStyles(A,0,i),o.setSelectionStyles(A,r,o.text.length),o.dirty=!0;let w=o.toCanvasElement({enableRetinaScaling:a.enableRetinaScaling,viewportTransform:!0});o.backgroundColor=_,o.styles=b,o.dirty=!0,$h(w,{position:"fixed",left:"".concat(-w.width,"px"),border:zn,width:"".concat(w.width/d,"px"),height:"".concat(w.height/d,"px")}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{w.remove()},Ai(t.target||this.target.hiddenTextarea).body.appendChild(w),(n=t.dataTransfer)===null||n===void 0||n.setDragImage(w,m.x,m.y)}onDragStart(t){this.__dragStartFired=!0;let e=this.target,n=this.isActive();if(n&&t.dataTransfer){let i=this.__dragStartSelection={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd},r=e._text.slice(i.selectionStart,i.selectionEnd).join(""),o=G({text:e.text,value:r},i);t.dataTransfer.setData("text/plain",r),t.dataTransfer.setData("application/fabric",JSON.stringify({value:r,styles:e.getSelectionStyles(i.selectionStart,i.selectionEnd,!0)})),t.dataTransfer.effectAllowed="copyMove",this.setDragImage(t,o)}return e.abortCursorAnimation(),n}canDrop(t){if(this.target.editable&&!this.target.getActiveControl()&&!t.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let e=this.target.getSelectionStartFromPointer(t),n=this.__dragStartSelection;return e<n.selectionStart||e>n.selectionEnd}return!0}return!1}targetCanDrop(t){return this.target.canDrop(t)}dragEnterHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n&&(this.__isDraggingOver=!0)}dragOverHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n?this.__isDraggingOver=!0:this.__isDraggingOver&&!n&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(e.preventDefault(),t.canDrop=!0,t.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(t){var e;let{e:n}=t,i=n.defaultPrevented;this.__isDraggingOver=!1,n.preventDefault();let r=(e=n.dataTransfer)===null||e===void 0?void 0:e.getData("text/plain");if(r&&!i){let o=this.target,a=o.canvas,l=o.getSelectionStartFromPointer(n),{styles:c}=n.dataTransfer.types.includes("application/fabric")?JSON.parse(n.dataTransfer.getData("application/fabric")):{},h=r[Math.max(0,r.length-1)],u=0;if(this.__dragStartSelection){let d=this.__dragStartSelection.selectionStart,f=this.__dragStartSelection.selectionEnd;l>d&&l<=f?l=d:l>f&&(l-=f-d),o.removeChars(d,f),delete this.__dragStartSelection}o._reNewline.test(h)&&(o._reNewline.test(o._text[l])||l===o._text.length)&&(r=r.trimEnd()),t.didDrop=!0,t.dropTarget=o,o.insertChars(r,c,l),a.setActiveObject(o),o.enterEditing(n),o.selectionStart=Math.min(l+u,o._text.length),o.selectionEnd=Math.min(o.selectionStart+r.length,o._text.length),o.hiddenTextarea.value=o.text,o._updateTextarea(),o.hiddenTextarea.focus(),o.fire(Ih,{index:l+u,action:"drop"}),a.fire("text:changed",{target:o}),a.contextTopDirty=!0,a.requestRenderAll()}}dragEndHandler(t){let{e}=t;if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var n;let i=this.target,r=this.target.canvas,{selectionStart:o,selectionEnd:a}=this.__dragStartSelection,l=((n=e.dataTransfer)===null||n===void 0?void 0:n.dropEffect)||zn;l===zn?(i.selectionStart=o,i.selectionEnd=a,i._updateTextarea(),i.hiddenTextarea.focus()):(i.clearContextTop(),l==="move"&&(i.removeChars(o,a),i.selectionStart=i.selectionEnd=o,i.hiddenTextarea&&(i.hiddenTextarea.value=i.text),i._updateTextarea(),i.fire(Ih,{index:o,action:"dragend"}),r.fire("text:changed",{target:i}),r.requestRenderAll()),i.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},a0=/[ \n\.,;!\?\-]/,Of=class extends je{constructor(){super(...arguments),X(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(t){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(t)}_animateCursor(t){let{toValue:e,duration:n,delay:i,onComplete:r}=t;return ep({startValue:this._currentCursorOpacity,endValue:e,duration:n,delay:i,onComplete:r,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:o=>{this._currentCursorOpacity=o,this.renderCursorOrSelection()}})}_tick(t){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(t||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var t;(t=this._currentTickCompleteState)===null||t===void 0||t.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(t){this.abortCursorAnimation(),this._tick(t?0:this.cursorDelay)}abortCursorAnimation(){let t=!1;[this._currentTickState,this._currentTickCompleteState].forEach((e=>{e&&!e.isDone()&&(t=!0,e.abort())})),this._currentCursorOpacity=1,t&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some((t=>!t||t.isDone()))&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(t){let e=0,n=t-1;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n--;for(;/\S/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findWordBoundaryRight(t){let e=0,n=t;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n++;for(;/\S/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}findLineBoundaryLeft(t){let e=0,n=t-1;for(;!/\n/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findLineBoundaryRight(t){let e=0,n=t;for(;!/\n/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}searchWordBoundary(t,e){let n=this._text,i=t>0&&this._reSpace.test(n[t])&&(e===-1||!Gf.test(n[t-1]))?t-1:t,r=n[i];for(;i>0&&i<n.length&&!a0.test(r);)i+=e,r=n[i];return e===-1&&a0.test(r)&&i++,i}selectWord(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.searchWordBoundary(t,-1),i=Math.max(n,this.searchWordBoundary(t,1));this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(t){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",t?{e:t}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:t}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(t){if(this.getActiveControl())return;let e=this.hiddenTextarea;Ai(e).activeElement!==e&&e.focus();let n=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;(n===this.__selectionStartOnMouseDown&&i!==r||i!==n&&r!==n)&&(n>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=n):(this.selectionStart=n,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(t,e,n){let i=n.slice(0,t),r=this.graphemeSplit(i).length;if(t===e)return{selectionStart:r,selectionEnd:r};let o=n.slice(t,e);return{selectionStart:r,selectionEnd:r+this.graphemeSplit(o).length}}fromGraphemeToStringSelection(t,e,n){let i=n.slice(0,t).join("").length;return t===e?{selectionStart:i,selectionEnd:i}:{selectionStart:i,selectionEnd:i+n.slice(t,e).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){if(!this.hiddenTextarea)return;this.cursorOffsetCache={};let t=this.hiddenTextarea;this.text=t.value,this.set("dirty",!0),this.initDimensions(),this.setCoords();let e=this.fromStringToGraphemeSelection(t.selectionStart,t.selectionEnd,t.value);this.selectionEnd=this.selectionStart=e.selectionEnd,this.inCompositionMode||(this.selectionStart=e.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex,o=this.getValueOfPropertyAt(i,r,"fontSize")*this.lineHeight,a=e.leftOffset,l=this.getCanvasRetinaScaling(),c=this.canvas.upperCanvasEl,h=c.width/l,u=c.height/l,d=h-o,f=u-o,p=new st(e.left+a,e.top+e.topOffset+o).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new st(c.clientWidth/h,c.clientHeight/u));return p.x<0&&(p.x=0),p.x>d&&(p.x=d),p.y<0&&(p.y=0),p.y>f&&(p.y=f),p.x+=this.canvas._offset.left,p.y+=this.canvas._offset.top,{left:"".concat(p.x,"px"),top:"".concat(p.y,"px"),fontSize:"".concat(o,"px"),charHeight:o}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}_exitEditing(){let t=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,t&&(t.blur&&t.blur(),t.parentNode&&t.parentNode.removeChild(t)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop()}exitEditingImpl(){this._exitEditing(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let t=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),t&&this.fire(Oh),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let t in this.styles)this._textLines[t]||delete this.styles[t]}removeStyleFromTo(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t,!0),{lineIndex:r,charIndex:o}=this.get2DCursorLocation(e,!0);if(n!==r){if(this.styles[n])for(let a=i;a<this._unwrappedTextLines[n].length;a++)delete this.styles[n][a];if(this.styles[r])for(let a=o;a<this._unwrappedTextLines[r].length;a++){let l=this.styles[r][a];l&&(this.styles[n]||(this.styles[n]={}),this.styles[n][i+a-o]=l)}for(let a=n+1;a<=r;a++)delete this.styles[a];this.shiftLineStyles(r,n-r)}else if(this.styles[n]){let a=this.styles[n],l=o-i;for(let c=i;c<o;c++)delete a[c];for(let c in this.styles[n]){let h=parseInt(c,10);h>=o&&(a[h-l]=a[c],delete a[c])}}}shiftLineStyles(t,e){let n=Object.assign({},this.styles);for(let i in this.styles){let r=parseInt(i,10);r>t&&(this.styles[r+e]=n[r],n[r-e]||delete this.styles[r])}}insertNewlineStyleObject(t,e,n,i){let r={},o=this._unwrappedTextLines[t].length,a=o===e,l=!1;n||(n=1),this.shiftLineStyles(t,n);let c=this.styles[t]?this.styles[t][e===0?e:e-1]:void 0;for(let u in this.styles[t]){let d=parseInt(u,10);d>=e&&(l=!0,r[d-e]=this.styles[t][u],a&&e===0||delete this.styles[t][u])}let h=!1;for(l&&!a&&(this.styles[t+n]=r,h=!0),(h||o>e)&&n--;n>0;)i&&i[n-1]?this.styles[t+n]={0:G({},i[n-1])}:c?this.styles[t+n]={0:G({},c)}:delete this.styles[t+n],n--;this._forceClearCache=!0}insertCharStyleObject(t,e,n,i){this.styles||(this.styles={});let r=this.styles[t],o=r?G({},r):{};n||(n=1);for(let l in o){let c=parseInt(l,10);c>=e&&(r[c+n]=o[c],o[c-n]||delete r[c])}if(this._forceClearCache=!0,i){for(;n--;)Object.keys(i[n]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+n]=G({},i[n]));return}if(!r)return;let a=r[e?e-1:1];for(;a&&n--;)this.styles[t][e+n]=G({},a)}insertNewStyleBlock(t,e,n){let i=this.get2DCursorLocation(e,!0),r=[0],o,a=0;for(let l=0;l<t.length;l++)t[l]===`
`?(a++,r[a]=0):r[a]++;for(r[0]>0&&(this.insertCharStyleObject(i.lineIndex,i.charIndex,r[0],n),n=n&&n.slice(r[0]+1)),a&&this.insertNewlineStyleObject(i.lineIndex,i.charIndex+r[0],a),o=1;o<a;o++)r[o]>0?this.insertCharStyleObject(i.lineIndex+o,0,r[o],n):n&&this.styles[i.lineIndex+o]&&n[0]&&(this.styles[i.lineIndex+o][0]=n[0]),n=n&&n.slice(r[o]+1);r[o]>0&&this.insertCharStyleObject(i.lineIndex+o,0,r[o],n)}removeChars(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t+1;this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;i>n&&this.removeStyleFromTo(n,i);let r=this.graphemeSplit(t);this.insertNewStyleBlock(r,n,e),this._text=[...this._text.slice(0,n),...r,...this._text.slice(i)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(t,e,n){n<=t?(e===t?this._selectionDirection=Ce:this._selectionDirection===Ye&&(this._selectionDirection=Ce,this.selectionEnd=t),this.selectionStart=n):n>t&&n<e?this._selectionDirection===Ye?this.selectionEnd=n:this.selectionStart=n:(e===t?this._selectionDirection=Ye:this._selectionDirection===Ce&&(this._selectionDirection=Ye,this.selectionStart=e),this.selectionEnd=n)}},Lf=class extends Of{initHiddenTextarea(){let t=this.canvas&&Ai(this.canvas.getElement())||ea(),e=t.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map((o=>{let[a,l]=o;return e.setAttribute(a,l)}));let{top:n,left:i,fontSize:r}=this._calcTextareaPosition();e.style.cssText="position: absolute; top: ".concat(n,"; left: ").concat(i,"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r,";"),(this.hiddenTextareaContainer||t.body).appendChild(e),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map((o=>{let[a,l]=o;return e.addEventListener(a,this[l].bind(this))})),this.hiddenTextarea=e}blur(){this.abortCursorAnimation()}onKeyDown(t){if(!this.isEditing)return;let e=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(t.keyCode in e)this[e[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown)||!t.ctrlKey&&!t.metaKey)return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(t){let e=this.fromPaste,{value:n,selectionStart:i,selectionEnd:r}=this.hiddenTextarea;if(this.fromPaste=!1,t&&t.stopPropagation(),!this.isEditing)return;let o=()=>{this.updateFromTextArea(),this.fire(Ih),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void o();let a=this._splitTextIntoLines(n).graphemeText,l=this._text.length,c=a.length,h=this.selectionStart,u=this.selectionEnd,d=h!==u,f,p,x,m,_=c-l,b=this.fromStringToGraphemeSelection(i,r,n),A=h>b.selectionStart;d?(p=this._text.slice(h,u),_+=u-h):c<l&&(p=A?this._text.slice(u+_,u):this._text.slice(h,h-_));let w=a.slice(b.selectionEnd-_,b.selectionEnd);if(p&&p.length&&(w.length&&(f=this.getSelectionStyles(h,h+1,!1),f=w.map((()=>f[0]))),d?(x=h,m=u):A?(x=u-p.length,m=u):(x=u,m=u+p.length),this.removeStyleFromTo(x,m)),w.length){let{copyPasteData:E}=ts();e&&w.join("")===E.copiedText&&!Se.disableStyleCopyPaste&&(f=E.copiedTextStyle),this.insertNewStyleBlock(w,h,f)}o()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate(t){let{target:e}=t,{selectionStart:n,selectionEnd:i}=e;this.compositionStart=n,this.compositionEnd=i,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:t}=ts();t.copiedText=this.getSelectedText(),Se.disableStyleCopyPaste?t.copiedTextStyle=void 0:t.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(t,e){let n,i=this._getLineLeftOffset(t);return e>0&&(n=this.__charBounds[t][e-1],i+=n.left+n.width),i}getDownCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===this._textLines.length-1||t.metaKey||t.keyCode===34)return this._text.length-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r+1,a);return this._textLines[r].slice(o).length+l+1+this.missingNewlineOffset(r)}_getSelectionForOffset(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart}getUpCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===0||t.metaKey||t.keyCode===33)return-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r-1,a),c=this._textLines[r].slice(0,o),h=this.missingNewlineOffset(r-1);return-this._textLines[r-1].length+l-c.length+(1-h)}_getIndexOnLine(t,e){let n=this._textLines[t],i,r,o=this._getLineLeftOffset(t),a=0;for(let l=0,c=n.length;l<c;l++)if(i=this.__charBounds[t][l].width,o+=i,o>e){r=!0;let h=o-i,u=o,d=Math.abs(h-e);a=Math.abs(u-e)<d?l:l-1;break}return r||(a=n.length-1),a}moveCursorDown(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)}moveCursorUp(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",t)}_moveCursorUpOrDown(t,e){let n=this["get".concat(t,"CursorOffset")](e,this._selectionDirection===Ye);if(e.shiftKey?this.moveCursorWithShift(n):this.moveCursorWithoutShift(n),n!==0){let i=this.text.length;this.selectionStart=Zr(0,this.selectionStart,i),this.selectionEnd=Zr(0,this.selectionEnd,i),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(t){let e=this._selectionDirection===Ce?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),t!==0}moveCursorWithoutShift(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),t!==0}moveCursorLeft(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",t)}_move(t,e,n){let i;if(t.altKey)i=this["findWordBoundary".concat(n)](this[e]);else{if(!t.metaKey&&t.keyCode!==35&&t.keyCode!==36)return this[e]+=n==="Left"?-1:1,!0;i=this["findLineBoundary".concat(n)](this[e])}return i!==void 0&&this[e]!==i&&(this[e]=i,!0)}_moveLeft(t,e){return this._move(t,e,"Left")}_moveRight(t,e){return this._move(t,e,"Right")}moveCursorLeftWithoutShift(t){let e=!0;return this._selectionDirection=Ce,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e}moveCursorLeftWithShift(t){return this._selectionDirection===Ye&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):this.selectionStart!==0?(this._selectionDirection=Ce,this._moveLeft(t,"selectionStart")):void 0}moveCursorRight(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)}_moveCursorLeftOrRight(t,e){let n="moveCursor".concat(t).concat(e.shiftKey?"WithShift":"WithoutShift");this._currentCursorOpacity=1,this[n](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(t){return this._selectionDirection===Ce&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection=Ye,this._moveRight(t,"selectionEnd")):void 0}moveCursorRightWithoutShift(t){let e=!0;return this._selectionDirection=Ye,this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e}},l0=s=>!!s.button,Ff=class extends Lf{constructor(){super(...arguments),X(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new If(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(t){return this.draggableTextDelegate.onDragStart(t)}canDrop(t){return this.draggableTextDelegate.canDrop(t)}doubleClickHandler(t){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}tripleClickHandler(t){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}_mouseDownHandler(t){let{e,alreadySelected:n}=t;this.canvas&&this.editable&&!l0(e)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(e)||(this.canvas.textEditingManager.register(this),n&&(this.inCompositionMode=!1,this.setCursorByClick(e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=n||this.isEditing)))}mouseUpHandler(t){let{e,transform:n}=t,i=this.draggableTextDelegate.end(e);if(this.canvas){this.canvas.textEditingManager.unregister(this);let r=this.canvas._activeObject;if(r&&r!==this)return}!this.editable||this.group&&!this.group.interactive||n&&n.actionPerformed||l0(e)||i||this.selected&&!this.getActiveControl()&&(this.enterEditing(e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(t){let e=this.getSelectionStartFromPointer(t),n=this.selectionStart,i=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(n,i,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(t){let e=this.canvas.getScenePoint(t).transform($n(this.calcTransformMatrix())).add(new st(-this._getLeftOffset(),-this._getTopOffset())),n=0,i=0,r=0;for(let c=0;c<this._textLines.length&&n<=e.y;c++)n+=this.getHeightOfLine(c),r=c,c>0&&(i+=this._textLines[c-1].length+this.missingNewlineOffset(c-1));let o=Math.abs(this._getLineLeftOffset(r)),a=this._textLines[r].length,l=this.__charBounds[r];for(let c=0;c<a;c++){let h=o+l[c].kernedWidth;if(e.x<=h){Math.abs(e.x-h)<=Math.abs(e.x-o)&&i++;break}o=h,i++}return Math.min(this.flipX?a-i:i,this._text.length)}},bh="moveCursorUp",Mh="moveCursorDown",wh="moveCursorLeft",Th="moveCursorRight",Ch="exitEditing",c0=(s,t)=>{let e=t.getRetinaScaling();s.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;s.transform(n[0],n[1],n[2],n[3],n[4],n[5])},bw=G({selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:Ch,27:Ch,33:bh,34:Mh,35:Th,36:wh,37:wh,38:bh,39:Th,40:Mh},keysMapRtl:{9:Ch,27:Ch,33:bh,34:Mh,35:wh,36:Th,37:Th,38:bh,39:wh,40:Mh},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"}},{_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1}),Pi=class s extends Ff{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,G(G({},s.ownDefaults),e)),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof ta&&this.canvas.textEditingManager.remove(this),e instanceof ta&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart||0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionEnd,n=arguments.length>2?arguments[2]:void 0;return super.getSelectionStyles(t,e,n)}setSelectionStyles(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionStart||0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.selectionEnd;return super.setSelectionStyles(t,e,n)}get2DCursorLocation(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0;return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),i=n.length>0,r,o=t;if(i){r=ti(t.canvas),o=r.getContext("2d"),c0(o,this.canvas);let a=this.calcTransformMatrix();o.transform(a[0],a[1],a[2],a[3],a[4],a[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(o,e):this.renderCursor(o,e),i)for(let a of n){let l=a.clipPath,c=ti(t.canvas),h=c.getContext("2d");if(c0(h,this.canvas),!l.absolutePositioned){let u=a.calcTransformMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(o,l,c)}i&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0,n=this._getLeftOffset(),i=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:i,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:i,lineIndex:r}=this.get2DCursorLocation(t);for(let c=0;c<r;c++)e+=this.getHeightOfLine(c);let o=this._getLineLeftOffset(r),a=this.__charBounds[r][i];a&&(n=a.left),this.charSpacing!==0&&i===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let l={top:e,left:o+(n>0?n:0)};return this.direction==="rtl"&&(this.textAlign===Ye||this.textAlign===Ki||this.textAlign===rl?l.left*=-1:this.textAlign===Ce||this.textAlign===Vh?l.left=o-(n>0?n:0):this.textAlign!==ae&&this.textAlign!==ol||(l.left=o-(n>0?n:0))),l}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,o=this.getValueOfPropertyAt(i,r,"fontSize"),a=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/a,c=this.getValueOfPropertyAt(i,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(i)/this.lineHeight-o*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(i,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:o}}_renderCursor(t,e,n){let{color:i,opacity:r,left:o,top:a,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=i,t.globalAlpha=r,t.fillRect(o,a,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let i=e.selectionStart,r=e.selectionEnd,o=this.textAlign.includes(Ki),a=this.get2DCursorLocation(i),l=this.get2DCursorLocation(r),c=a.lineIndex,h=l.lineIndex,u=a.charIndex<0?0:a.charIndex,d=l.charIndex<0?0:l.charIndex;for(let f=c;f<=h;f++){let p=this._getLineLeftOffset(f)||0,x=this.getHeightOfLine(f),m=0,_=0,b=0;if(f===c&&(_=this.__charBounds[c][u].left),f>=c&&f<h)b=o&&!this.isEndOfWrapping(f)?this.width:this.getLineWidth(f)||5;else if(f===h)if(d===0)b=this.__charBounds[h][d].left;else{let g=this._getWidthOfCharSpacing();b=this.__charBounds[h][d-1].left+this.__charBounds[h][d-1].width-g}m=x,(this.lineHeight<1||f===h&&this.lineHeight>1)&&(x/=this.lineHeight);let A=n.left+p+_,w=x,E=0,P=b-_;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",w=1,E=x):t.fillStyle=this.selectionColor,this.direction==="rtl"&&(this.textAlign===Ye||this.textAlign===Ki||this.textAlign===rl?A=this.width-A-P:this.textAlign===Ce||this.textAlign===Vh?A=n.left+p-b:this.textAlign!==ae&&this.textAlign!==ol||(A=n.left+p-b)),t.fillRect(A,n.top+n.topOffset+E,P,w),n.topOffset+=m}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,tn)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};X(Pi,"ownDefaults",bw),X(Pi,"type","IText"),Ut.setClass(Pi),Ut.setClass(Pi,"i-text");var Xo=class s extends Pi{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(t,G(G({},s.ownDefaults),e))}static createControls(){return{controls:i_()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes(Ki)&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,i=0,r={};for(let o=0;o<t.graphemeLines.length;o++)t.graphemeText[i]===`
`&&o>0?(n=0,i++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[i])&&o>0&&(n++,i++),r[o]={line:e,offset:n},i+=t.graphemeLines[o].length,n+=t.graphemeLines[o].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n=0,i=t+1,r=!1,o=this._styleMap[t],a=this._styleMap[t+1];o&&(t=o.line,n=o.offset),a&&(i=a.line,r=i===t,e=a.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let u=parseInt(h,10);if(u>=n&&(!r||u<e))for(let d in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let i=this._styleMap[t];super._setStyleDeclaration(i.line,i.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),i=[];for(let r=0;r<n.wordsData.length;r++)i.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,i}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",i=0;return{wordsData:t.map(((r,o)=>{let a=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map((c=>{let h=e?[c]:this.graphemeSplit(c),u=this._measureWord(h,o,a);return i=Math.max(u,i),a+=h.length+n.length,{word:h,width:u}}))})),largestWordWidth:i}}_measureWord(t,e){let n,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=0;for(let o=0,a=t.length;o<a;o++)r+=this._getGraphemeBox(t[o],e,o+i,n,!0).kernedWidth,n=t[o];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,n){let{largestWordWidth:i,wordsData:r}=n,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=this._getWidthOfCharSpacing(),l=this.splitByGrapheme,c=[],h=l?"":" ",u=0,d=[],f=0,p=0,x=!0;e-=o;let m=Math.max(e,i,this.dynamicMinWidth),_=r[t],b;for(f=0,b=0;b<_.length;b++){let{word:A,width:w}=_[b];f+=A.length,u+=p+w-a,u>m&&!x?(c.push(d),d=[],u=w,x=!0):u+=a,x||l||d.push(h),d=d.concat(A),p=l?0:this._measureWord([h],t,f),f++,x=!1}return b&&c.push(d),i+o>this.dynamicMinWidth&&(this.dynamicMinWidth=i-a+o),c}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?this.isEndOfWrapping(t)?1:0:1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=n[r].join("");return e.lines=i,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let i=this._styleMap[e].line;t.set("".concat(i),!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject(["minWidth","splitByGrapheme",...t])}};X(Xo,"type","Textbox"),X(Xo,"textLayoutProperties",[...Pi.textLayoutProperties,"width"]),X(Xo,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),Ut.setClass(Xo);var eu=class extends Qo{shouldPerformLayout(t){return!!t.target.clipPath&&super.shouldPerformLayout(t)}shouldLayoutClipPath(){return!1}calcLayoutResult(t,e){let{target:n}=t,{clipPath:i,group:r}=n;if(!i||!this.shouldPerformLayout(t))return;let{width:o,height:a}=Qi(u_(n,i)),l=new st(o,a);if(i.absolutePositioned)return{center:ys(i.getRelativeCenterPoint(),void 0,r?r.calcTransformMatrix():void 0),size:l};{let c=i.getRelativeCenterPoint().transform(n.calcOwnMatrix(),!0);if(this.shouldPerformLayout(t)){let{center:h=new st,correction:u=new st}=this.calcBoundingBox(e,t)||{};return{center:h.add(c),correction:u.subtract(c),size:l}}return{center:n.getRelativeCenterPoint().add(c),size:l}}}};X(eu,"type","clip-path"),Ut.setClass(eu);var nu=class extends Qo{getInitialSize(t,e){let{target:n}=t,{size:i}=e;return new st(n.width||i.x,n.height||i.y)}};X(nu,"type","fixed"),Ut.setClass(nu);var Nf=class extends Jr{subscribeTargets(t){let e=t.target;t.targets.reduce(((n,i)=>(i.parent&&n.add(i.parent),n)),new Set).forEach((n=>{n.layoutManager.subscribeTargets({target:n,targets:[e]})}))}unsubscribeTargets(t){let e=t.target,n=e.getObjects();t.targets.reduce(((i,r)=>(r.parent&&i.add(r.parent),i)),new Set).forEach((i=>{!n.some((r=>r.parent===i))&&i.layoutManager.unsubscribeTargets({target:i,targets:[e]})}))}},jo=class s extends Ks{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(e);let{left:n,top:i,layoutManager:r}=e;this.groupInit(t,{left:n,top:i,layoutManager:r??new Nf})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.multiSelectionStacking==="selection-order"?this.add(...e):e.forEach((i=>{let r=this._objects.findIndex((a=>a.isInFrontOf(i))),o=r===-1?this.size():r;this.insertAt(o,i)}))}canEnterGroup(t){return this.getObjects().some((e=>e.isDescendantOf(t)||t.isDescendantOf(e)))?($s("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach((i=>{let{parent:r}=i;r&&n.add(r)})),t===op?n.forEach((i=>{i._onAfterObjectsChange(Zh,e)})):n.forEach((i=>{i._set("dirty",!0)}))}onDeselect(){return this.removeAll(),!1}toString(){return"#<ActiveSelection: (".concat(this.complexity(),")>")}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let i=G(G({hasControls:!1},n),{},{forActiveSelection:!0});for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,i);super._renderControls(t,e),t.restore()}};X(jo,"type","ActiveSelection"),X(jo,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),Ut.setClass(jo),Ut.setClass(jo,"activeSelection");var kf=class{constructor(){X(this,"resources",{})}applyFilters(t,e,n,i,r){let o=r.getContext("2d");if(!o)return;o.drawImage(e,0,0,n,i);let a={sourceWidth:n,sourceHeight:i,imageData:o.getImageData(0,0,n,i),originalEl:e,originalImageData:o.getImageData(0,0,n,i),canvasEl:r,ctx:o,filterBackend:this};t.forEach((c=>{c.applyTo(a)}));let{imageData:l}=a;return l.width===n&&l.height===i||(r.width=l.width,r.height=l.height),o.putImageData(l,0,0),a}},iu=class{constructor(){let{tileSize:t=Se.textureSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};X(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),X(this,"resources",{}),this.tileSize=t,this.setupGLContext(t,t),this.captureGPUInfo()}setupGLContext(t,e){this.dispose(),this.createWebGLCanvas(t,e)}createWebGLCanvas(t,e){let n=ti({width:t,height:e}),i=n.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});i&&(i.clearColor(0,0,0,0),this.canvas=n,this.gl=i)}applyFilters(t,e,n,i,r,o){let a=this.gl,l=r.getContext("2d");if(!a||!l)return;let c;o&&(c=this.getCachedTexture(o,e));let h={originalWidth:e.width||e.naturalWidth||0,originalHeight:e.height||e.naturalHeight||0,sourceWidth:n,sourceHeight:i,destinationWidth:n,destinationHeight:i,context:a,sourceTexture:this.createTexture(a,n,i,c?void 0:e),targetTexture:this.createTexture(a,n,i),originalTexture:c||this.createTexture(a,n,i,c?void 0:e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:r},u=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,u),t.forEach((d=>{d&&d.applyTo(h)})),(function(d){let f=d.targetCanvas,p=f.width,x=f.height,m=d.destinationWidth,_=d.destinationHeight;p===m&&x===_||(f.width=m,f.height=_)})(h),this.copyGLTo2D(a,h),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(h.sourceTexture),a.deleteTexture(h.targetTexture),a.deleteFramebuffer(u),l.setTransform(1,0,0,1,0,0),h}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(t,e,n,i,r){let{NEAREST:o,TEXTURE_2D:a,RGBA:l,UNSIGNED_BYTE:c,CLAMP_TO_EDGE:h,TEXTURE_MAG_FILTER:u,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:f,TEXTURE_WRAP_T:p}=t,x=t.createTexture();return t.bindTexture(a,x),t.texParameteri(a,u,r||o),t.texParameteri(a,d,r||o),t.texParameteri(a,f,h),t.texParameteri(a,p,h),i?t.texImage2D(a,0,l,l,c,i):t.texImage2D(a,0,l,e,n,0,l,c,null),x}getCachedTexture(t,e,n){let{textureCache:i}=this;if(i[t])return i[t];{let r=this.createTexture(this.gl,e.width,e.height,e,n);return r&&(i[t]=r),r}}evictCachesForKey(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])}copyGLTo2D(t,e){let n=t.canvas,i=e.targetCanvas,r=i.getContext("2d");if(!r)return;r.translate(0,i.height),r.scale(1,-1);let o=n.height-i.height;r.drawImage(n,0,o,i.width,i.height,0,0,i.width,i.height)}copyGLTo2DPutImageData(t,e){let n=e.targetCanvas.getContext("2d"),i=e.destinationWidth,r=e.destinationHeight,o=i*r*4;if(!n)return;let a=new Uint8Array(this.imageBuffer,0,o),l=new Uint8ClampedArray(this.imageBuffer,0,o);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,a);let c=new ImageData(l,i,r);n.putImageData(c,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let t=this.gl,e={renderer:"",vendor:""};if(!t)return e;let n=t.getExtension("WEBGL_debug_renderer_info");if(n){let i=t.getParameter(n.UNMASKED_RENDERER_WEBGL),r=t.getParameter(n.UNMASKED_VENDOR_WEBGL);i&&(e.renderer=i.toLowerCase()),r&&(e.vendor=r.toLowerCase())}return this.gpuInfo=e,e}},af;function Mw(){let{WebGLProbe:s}=ts();return s.queryWebGL(es()),Se.enableGLFiltering&&s.isSupported(Se.textureSize)?new iu({tileSize:Se.textureSize}):new kf}function lf(){return!af&&(!(arguments.length>0&&arguments[0]!==void 0)||arguments[0])&&(af=Mw()),af}var ww=["filters","resizeFilter","src","crossOrigin","type"],D_=["cropX","cropY"],hi=class s extends cn{static getDefaults(){return G(G({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),X(this,"_lastScaleX",1),X(this,"_lastScaleY",1),X(this,"_filterScalingX",1),X(this,"_filterScalingY",1),this.filters=[],Object.assign(this,s.ownDefaults),this.setOptions(e),this.cacheKey="texture".concat(tr()),this.setElement(typeof t=="string"?(this.canvas&&Ai(this.canvas.getElement())||ea()).getElementById(t):t,e)}getElement(){return this._element}setElement(t){var e;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._element=t,this._originalElement=t,this._setWidthHeight(n),(e=t.classList)===null||e===void 0||e.add(s.CSS_CANVAS),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=lf(!1);e instanceof iu&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach((t=>{let e=this[t];e&&ts().dispose(e),this[t]=void 0}))}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return this.filters.forEach((n=>{n&&e.push(n.toObject())})),G(G({},super.toObject([...D_,...t])),{},{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e},this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{})}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,i=-this.height/2,r=[],o=[],a="",l="";if(!e)return[];if(this.hasCrop()){let c=tr();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+i+'" width="'+this.width+'" height="'+this.height+`" />
`,`</clipPath>
`),a=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",'xlink:href="'.concat(this.getSvgSrc(!0),'" x="').concat(n-this.cropX,'" y="').concat(i-this.cropY,'" width="').concat(e.width||e.naturalWidth,'" height="').concat(e.height||e.naturalHeight,'"').concat(l).concat(a,`></image>
`)),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,o=['	<rect x="'.concat(n,'" y="').concat(i,'" width="').concat(this.width,'" height="').concat(this.height,'" style="').concat(this.getSvgStyles(),`" />
`)],this.fill=c}return r=this.paintFirst!==tn?r.concat(o,t):r.concat(t,o),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t){let{crossOrigin:e,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return sl(t,{crossOrigin:e,signal:n}).then((i=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(i)}))}toString(){return'#<Image: { src: "'.concat(this.getSrc(),'" }>')}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),i=n.x,r=n.y,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||i>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=i,void(this._lastScaleY=r);let a=ti(o),{width:l,height:c}=o;this._element=a,this._lastScaleX=t.scaleX=i,this._lastScaleY=t.scaleY=r,lf().applyFilters([t],o,l,c,this._element),this._filterScalingX=a.width/this._originalElement.width,this._filterScalingY=a.height/this._originalElement.height}applyFilters(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.filters||[];if(t=t.filter((r=>r&&!r.isNeutralState())),this.set("dirty",!0),this.removeTexture("".concat(this.cacheKey,"_filtered")),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,i=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=ti({width:n,height:i});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,i),this._lastScaleX=1,this._lastScaleY=1);lf().applyFilters(t,this._originalElement,n,i,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,i=this._filterScalingY,r=this.width,o=this.height,a=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,u=a*n,d=l*i,f=Math.min(r*n,c-u),p=Math.min(o*i,h-d),x=-r/2,m=-o/2,_=Math.min(r,c/n-a),b=Math.min(o,h/i-l);e&&t.drawImage(e,u,d,f,p,x,m,_,b)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight(){let{width:t,height:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=L0(this.preserveAspectRatio||""),e=this.width,n=this.height,i={width:e,height:n},r,o=this._element.width,a=this._element.height,l=1,c=1,h=0,u=0,d=0,f=0;return!t||t.alignX===zn&&t.alignY===zn?(l=e/o,c=n/a):(t.meetOrSlice==="meet"&&(l=c=f_(this._element,i),r=(e-o*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-a*c)/2,t.alignY==="Min"&&(u=-r),t.alignY==="Max"&&(u=r)),t.meetOrSlice==="slice"&&(l=c=p_(this._element,i),r=o-e/l,t.alignX==="Mid"&&(d=r/2),t.alignX==="Max"&&(d=r),r=a-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),o=e/l,a=n/c)),{width:o,height:a,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:u,cropX:d,cropY:f}}static fromObject(t,e){let{filters:n,resizeFilter:i,src:r,crossOrigin:o,type:a}=t,l=Fe(t,ww);return Promise.all([sl(r,G(G({},e),{},{crossOrigin:o})),n&&Jo(n,e),i&&Jo([i],e),pl(l,e)]).then((c=>{let[h,u=[],[d]=[],f={}]=c;return new this(h,G(G({},l),{},{src:r,filters:u,resizeFilter:d},f))}))}static fromURL(t){let{crossOrigin:e=null,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return sl(t,{crossOrigin:e,signal:n}).then((r=>new this(r,i)))}static async fromElement(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=Ms(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(i["xlink:href"]||i.href,e,i).catch((r=>($s("log","Unable to parse Image",r),null)))}};X(hi,"type","Image"),X(hi,"cacheProperties",[...bs,...D_]),X(hi,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),X(hi,"CSS_CANVAS","canvas-img"),X(hi,"ATTRIBUTE_NAMES",[...ir,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),Ut.setClass(hi),Ut.setSVGClass(hi);var u2=uu(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var I_=g0,h0=s=>function(t,e,n){let{points:i,pathOffset:r}=n;return new st(i[s]).subtract(r).transform(Ge(n.getViewportTransform(),n.calcTransformMatrix()))},O_=(s,t,e,n)=>{let{target:i,pointIndex:r}=t,o=i,a=ys(new st(e,n),void 0,o.calcOwnMatrix());return o.points[r]=a.add(o.pathOffset),o.setDimensions(),o.set("dirty",!0),!0},L_=(s,t)=>function(e,n,i,r){let o=n.target,a=new st(o.points[(s>0?s:o.points.length)-1]),l=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),c=t(e,G(G({},n),{},{pointIndex:s}),i,r),h=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(l);return o.left-=h.x,o.top-=h.y,c},u0=s=>nr(I_,L_(s,O_)),Uf=(s,t,e)=>{let{path:n,pathOffset:i}=s,r=n[t];return new st(r[e]-i.x,r[e+1]-i.y).transform(Ge(s.getViewportTransform(),s.calcTransformMatrix()))};function Tw(s,t,e){let{commandIndex:n,pointIndex:i}=this;return Uf(e,n,i)}function Cw(s,t,e,n){let{target:i}=t,{commandIndex:r,pointIndex:o}=this,a=((l,c,h,u,d)=>{let{path:f,pathOffset:p}=l,x=f[(u>0?u:f.length)-1],m=new st(x[d],x[d+1]),_=m.subtract(p).transform(l.calcOwnMatrix()),b=ys(new st(c,h),void 0,l.calcOwnMatrix());f[u][d]=b.x+p.x,f[u][d+1]=b.y+p.y,l.setDimensions();let A=m.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(_);return l.left-=A.x,l.top-=A.y,l.set("dirty",!0),!0})(i,e,n,r,o);return Kf(this.actionName,G(G({},$f(s,t,e,n)),{},{commandIndex:r,pointIndex:o})),a}var su=class extends Pn{constructor(t){super(t)}render(t,e,n,i,r){let o=G(G({},i),{},{cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill});super.render(t,e,n,o,r)}},Bf=class extends su{constructor(t){super(t)}render(t,e,n,i,r){let{path:o}=r,{commandIndex:a,pointIndex:l,connectToCommandIndex:c,connectToPointIndex:h}=this;t.save(),t.strokeStyle=this.controlStroke,this.connectionDashArray&&t.setLineDash(this.connectionDashArray);let[u]=o[a],d=Uf(r,c,h);if(u==="Q"){let f=Uf(r,a,l+2);t.moveTo(f.x,f.y),t.lineTo(e,n)}else t.moveTo(e,n);t.lineTo(d.x,d.y),t.stroke(),t.restore(),super.render(t,e,n,i,r)}},Eh=(s,t,e,n,i,r)=>new(e?Bf:su)(G(G({commandIndex:s,pointIndex:t,actionName:"modifyPath",positionHandler:Tw,actionHandler:Cw,connectToCommandIndex:i,connectToPointIndex:r},n),e?n.controlPointStyle:n.pointStyle)),d2=Object.freeze({__proto__:null,changeWidth:bf,createObjectDefaultControls:ip,createPathControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={},n="M";return s.path.forEach(((i,r)=>{let o=i[0];switch(o!=="Z"&&(e["c_".concat(r,"_").concat(o)]=Eh(r,i.length-2,!1,t)),o){case"C":e["c_".concat(r,"_C_CP_1")]=Eh(r,1,!0,t,r-1,(a=>a==="C"?5:a==="Q"?3:1)(n)),e["c_".concat(r,"_C_CP_2")]=Eh(r,3,!0,t,r,5);break;case"Q":e["c_".concat(r,"_Q_CP_1")]=Eh(r,1,!0,t,r,3)}n=o})),e},createPolyActionHandler:u0,createPolyControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={};for(let n=0;n<(typeof s=="number"?s:s.points.length);n++)e["p".concat(n)]=new Pn(G({actionName:I_,positionHandler:h0(n),actionHandler:u0(n)},t));return e},createPolyPositionHandler:h0,createResizeControls:n_,createTextboxDefaultControls:i_,dragHandler:O0,factoryPolyActionHandler:L_,getLocalPoint:hu,polyActionHandler:O_,renderCircleControl:W0,renderSquareControl:X0,rotationStyleHandler:j0,rotationWithSnapping:Y0,scaleCursorStyleHandler:zo,scaleOrSkewActionName:el,scaleSkewCursorStyleHandler:Er,scalingEqually:tl,scalingX:J0,scalingXOrSkewingY:Mf,scalingY:K0,scalingYOrSkewingX:wf,skewCursorStyleHandler:$0,skewHandlerX:t_,skewHandlerY:e_,wrapWithFireEvent:nr,wrapWithFixedAnchor:Qr}),gu=s=>s.webgl!==void 0;var lp="precision highp float",Ew=`
    `.concat(lp,`;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`),Aw=["type"],Rw=["type"],Pw=new RegExp(lp,"g"),He=class{get type(){return this.constructor.type}constructor(){let t=Fe(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Aw);Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return Ew}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getFragmentSource(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.getVertexSource(),{WebGLProbe:{GLPrecision:i="highp"}}=ts();i!=="highp"&&(e=e.replace(Pw,lp.replace("highp",i)));let r=t.createShader(t.VERTEX_SHADER),o=t.createShader(t.FRAGMENT_SHADER),a=t.createProgram();if(!r||!o||!a)throw new di("Vertex, fragment shader or program creation error");if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new di("Vertex shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(r)));if(t.shaderSource(o,e),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS))throw new di("Fragment shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(o)));if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))throw new di('Shader link error for "'.concat(this.type,'" ').concat(t.getProgramInfoLog(a)));let l=this.getUniformLocations(t,a)||{};return l.uStepW=t.getUniformLocation(a,"uStepW"),l.uStepH=t.getUniformLocation(a,"uStepH"),{program:a,attributeLocations:this.getAttributeLocations(t,a),uniformLocations:l}}getAttributeLocations(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}}getUniformLocations(t,e){let n=this.constructor.uniformLocations,i={};for(let r=0;r<n.length;r++)i[n[r]]=t.getUniformLocation(e,n[r]);return i}sendAttributeData(t,e,n){let i=e.aPosition,r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}_setupFrameBuffer(t){let e=t.context;if(t.passes>1){let n=t.destinationWidth,i=t.destinationHeight;t.sourceWidth===n&&t.sourceHeight===i||(e.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(e,n,i)),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.targetTexture,0)}else e.bindFramebuffer(e.FRAMEBUFFER,null),e.finish()}_swapTextures(t){t.passes--,t.pass++;let e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e}isNeutralState(t){return!1}applyTo(t){gu(t)?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){}getCacheKey(){return this.type}retrieveShader(t){let e=this.getCacheKey();return t.programCache[e]||(t.programCache[e]=this.createProgram(t.context)),t.programCache[e]}applyToWebGL(t){let e=t.context,n=this.retrieveShader(t);t.pass===0&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(n.program),this.sendAttributeData(e,n.attributeLocations,t.aPosition),e.uniform1f(n.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(n.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,n.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(t,e,n){t.activeTexture(n),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)}unbindAdditionalTexture(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)}sendUniformData(t,e){}createHelpLayer(t){if(!t.helpLayer){let{sourceWidth:e,sourceHeight:n}=t,i=ti({width:e,height:n});t.helpLayer=i}}toObject(){let t=Object.keys(this.constructor.defaults||{});return G({type:this.type},t.reduce(((e,n)=>(e[n]=this[n],e)),{}))}toJSON(){return this.toObject()}static async fromObject(t,e){return new this(Fe(t,Rw))}};X(He,"type","BaseFilter"),X(He,"uniformLocations",[]);var Dw={multiply:`gl_FragColor.rgb *= uColor.rgb;
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
          `.concat(Dw[this.mode],`
        }
      }
      `)}applyTo2d(t){let{imageData:{data:e}}=t,n=new Ln(this.color).getSource(),i=this.alpha,r=n[0]*i,o=n[1]*i,a=n[2]*i,l=1-i;for(let c=0;c<e.length;c+=4){let h=e[c],u=e[c+1],d=e[c+2],f,p,x;switch(this.mode){case"multiply":f=h*r/255,p=u*o/255,x=d*a/255;break;case"screen":f=255-(255-h)*(255-r)/255,p=255-(255-u)*(255-o)/255,x=255-(255-d)*(255-a)/255;break;case"add":f=h+r,p=u+o,x=d+a;break;case"difference":f=Math.abs(h-r),p=Math.abs(u-o),x=Math.abs(d-a);break;case"subtract":f=h-r,p=u-o,x=d-a;break;case"darken":f=Math.min(h,r),p=Math.min(u,o),x=Math.min(d,a);break;case"lighten":f=Math.max(h,r),p=Math.max(u,o),x=Math.max(d,a);break;case"overlay":f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255,p=o<128?2*u*o/255:255-2*(255-u)*(255-o)/255,x=a<128?2*d*a/255:255-2*(255-d)*(255-a)/255;break;case"exclusion":f=r+h-2*r*h/255,p=o+u-2*o*u/255,x=a+d-2*a*d/255;break;case"tint":f=r+h*l,p=o+u*l,x=a+d*l}e[c]=f,e[c+1]=p,e[c+2]=x}}sendUniformData(t,e){let n=new Ln(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,t.uniform4fv(e.uColor,n)}};X(Ar,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),X(Ar,"type","BlendColor"),X(Ar,"uniformLocations",["uColor"]),Ut.setClass(Ar);var Iw={multiply:`
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
    `},Ow=["type","image"],Rr=class extends He{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return Iw[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(t){let e=t.context,n=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,n,e.TEXTURE1),super.applyToWebGL(t),this.unbindAdditionalTexture(e,e.TEXTURE1)}createTexture(t,e){return t.getCachedTexture(e.cacheKey,e.getElement())}calculateMatrix(){let t=this.image,{width:e,height:n}=t.getElement();return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/n,1]}applyTo2d(t){let{imageData:{data:e,width:n,height:i},filterBackend:{resources:r}}=t,o=this.image;r.blendImage||(r.blendImage=es());let a=r.blendImage,l=a.getContext("2d");a.width!==n||a.height!==i?(a.width=n,a.height=i):l.clearRect(0,0,n,i),l.setTransform(o.scaleX,0,0,o.scaleY,o.left,o.top),l.drawImage(o.getElement(),0,0,n,i);let c=l.getImageData(0,0,n,i).data;for(let h=0;h<e.length;h+=4){let u=e[h],d=e[h+1],f=e[h+2],p=e[h+3],x=c[h],m=c[h+1],_=c[h+2],b=c[h+3];switch(this.mode){case"multiply":e[h]=u*x/255,e[h+1]=d*m/255,e[h+2]=f*_/255,e[h+3]=p*b/255;break;case"mask":e[h+3]=b}}}sendUniformData(t,e){let n=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,n)}toObject(){return G(G({},super.toObject()),{},{image:this.image&&this.image.toObject()})}static async fromObject(t,e){let{type:n,image:i}=t,r=Fe(t,Ow);return hi.fromObject(i,e).then((o=>new this(G(G({},r),{},{image:o}))))}};X(Rr,"type","BlendImage"),X(Rr,"defaults",{mode:"multiply",alpha:1}),X(Rr,"uniformLocations",["uTransformMatrix","uImage"]),Ut.setClass(Rr);var Pr=class extends He{getFragmentSource(){return`
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
  `}applyTo(t){gu(t)?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;this.aspectRatio=n/i,this.horizontal=!0;let r=this.getBlurValue()*n,o=new Uint8ClampedArray(e),a=15,l=4*n;for(let c=0;c<e.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c-c%l,m=x+l;for(let _=-14;_<a;_++){let b=_/a,A=4*Math.floor(r*b),w=1-Math.abs(b),E=c+A;E<x?E=x:E>m&&(E=m);let P=e[E+3]*w;h+=e[E]*P,u+=e[E+1]*P,d+=e[E+2]*P,f+=P,p+=w}o[c]=h/f,o[c+1]=u/f,o[c+2]=d/f,o[c+3]=f/p}this.horizontal=!1,r=this.getBlurValue()*i;for(let c=0;c<o.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c%l,m=o.length-l+x;for(let _=-14;_<a;_++){let b=_/a,A=Math.floor(r*b)*l,w=1-Math.abs(b),E=c+A;E<x?E=x:E>m&&(E=m);let P=o[E+3]*w;h+=o[E]*P,u+=o[E+1]*P,d+=o[E+2]*P,f+=P,p+=w}e[c]=h/f,e[c+1]=u/f,e[c+2]=d/f,e[c+3]=f/p}}sendUniformData(t,e){let n=this.chooseRightDelta();t.uniform2fv(e.uDelta,n)}isNeutralState(){return this.blur===0}getBlurValue(){let t=1,{horizontal:e,aspectRatio:n}=this;return e?n>1&&(t=1/n):n<1&&(t=n),t*this.blur*.12}chooseRightDelta(){let t=this.getBlurValue();return this.horizontal?[t,0]:[0,t]}};X(Pr,"type","Blur"),X(Pr,"defaults",{blur:0}),X(Pr,"uniformLocations",["uDelta"]),Ut.setClass(Pr);var Dr=class extends He{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.round(255*this.brightness);for(let i=0;i<e.length;i+=4)e[i]+=n,e[i+1]+=n,e[i+2]+=n}isNeutralState(){return this.brightness===0}sendUniformData(t,e){t.uniform1f(e.uBrightness,this.brightness)}};X(Dr,"type","Brightness"),X(Dr,"defaults",{brightness:0}),X(Dr,"uniformLocations",["uBrightness"]),Ut.setClass(Dr);var F_={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},vs=class extends He{getFragmentSource(){return`
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
  }`}applyTo2d(t){let e=t.imageData.data,n=this.matrix,i=this.colorsOnly;for(let r=0;r<e.length;r+=4){let o=e[r],a=e[r+1],l=e[r+2];if(e[r]=o*n[0]+a*n[1]+l*n[2]+255*n[4],e[r+1]=o*n[5]+a*n[6]+l*n[7]+255*n[9],e[r+2]=o*n[10]+a*n[11]+l*n[12]+255*n[14],!i){let c=e[r+3];e[r]+=c*n[3],e[r+1]+=c*n[8],e[r+2]+=c*n[13],e[r+3]=o*n[15]+a*n[16]+l*n[17]+c*n[18]+255*n[19]}}}sendUniformData(t,e){let n=this.matrix,i=[n[0],n[1],n[2],n[3],n[5],n[6],n[7],n[8],n[10],n[11],n[12],n[13],n[15],n[16],n[17],n[18]],r=[n[4],n[9],n[14],n[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,i),t.uniform4fv(e.uConstants,r)}toObject(){return G(G({},super.toObject()),{},{matrix:[...this.matrix]})}};function to(s,t){var e;let n=(X(e=class extends vs{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",s),X(e,"defaults",{colorsOnly:!1,matrix:t}),e);return Ut.setClass(n,s),n}X(vs,"type","ColorMatrix"),X(vs,"defaults",F_),X(vs,"uniformLocations",["uColorMatrix","uConstants"]),Ut.setClass(vs);var Lw=to("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),Fw=to("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),Nw=to("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),kw=to("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),Uw=to("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),Bw=to("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),zw=to("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),ul=class extends He{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.subFilters=t.subFilters||[]}applyTo(t){gu(t)&&(t.passes+=this.subFilters.length-1),this.subFilters.forEach((e=>{e.applyTo(t)}))}toObject(){return{type:this.type,subFilters:this.subFilters.map((t=>t.toObject()))}}isNeutralState(){return!this.subFilters.some((t=>!t.isNeutralState()))}static fromObject(t,e){return Promise.all((t.subFilters||[]).map((n=>Ut.getClass(n.type).fromObject(n,e)))).then((n=>new this({subFilters:n})))}};X(ul,"type","Composed"),Ut.setClass(ul);var Ir=class extends He{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.floor(255*this.contrast),i=259*(n+255)/(255*(259-n));for(let r=0;r<e.length;r+=4)e[r]=i*(e[r]-128)+128,e[r+1]=i*(e[r+1]-128)+128,e[r+2]=i*(e[r+2]-128)+128}sendUniformData(t,e){t.uniform1f(e.uContrast,this.contrast)}};X(Ir,"type","Contrast"),X(Ir,"defaults",{contrast:0}),X(Ir,"uniformLocations",["uContrast"]),Ut.setClass(Ir);var Vw={Convolute_3_1:`
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
    `},Or=class extends He{getCacheKey(){return"".concat(this.type,"_").concat(Math.sqrt(this.matrix.length),"_").concat(this.opaque?1:0)}getFragmentSource(){return Vw[this.getCacheKey()]}applyTo2d(t){let e=t.imageData,n=e.data,i=this.matrix,r=Math.round(Math.sqrt(i.length)),o=Math.floor(r/2),a=e.width,l=e.height,c=t.ctx.createImageData(a,l),h=c.data,u=this.opaque?1:0,d,f,p,x,m,_,b,A,w,E,P,g,v;for(P=0;P<l;P++)for(E=0;E<a;E++){for(m=4*(P*a+E),d=0,f=0,p=0,x=0,v=0;v<r;v++)for(g=0;g<r;g++)b=P+v-o,_=E+g-o,b<0||b>=l||_<0||_>=a||(A=4*(b*a+_),w=i[v*r+g],d+=n[A]*w,f+=n[A+1]*w,p+=n[A+2]*w,u||(x+=n[A+3]*w));h[m]=d,h[m+1]=f,h[m+2]=p,h[m+3]=u?n[m+3]:x}t.imageData=c}sendUniformData(t,e){t.uniform1fv(e.uMatrix,this.matrix)}toObject(){return G(G({},super.toObject()),{},{opaque:this.opaque,matrix:[...this.matrix]})}};X(Or,"type","Convolute"),X(Or,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),X(Or,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),Ut.setClass(Or);var N_="Gamma",Lr=class extends He{getFragmentSource(){return`
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
`}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.gamma=t.gamma||this.constructor.defaults.gamma.concat()}applyTo2d(t){let{imageData:{data:e}}=t,n=this.gamma,i=1/n[0],r=1/n[1],o=1/n[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let a=this.rgbValues;for(let l=0;l<256;l++)a.r[l]=255*Math.pow(l/255,i),a.g[l]=255*Math.pow(l/255,r),a.b[l]=255*Math.pow(l/255,o);for(let l=0;l<e.length;l+=4)e[l]=a.r[e[l]],e[l+1]=a.g[e[l+1]],e[l+2]=a.b[e[l+2]]}sendUniformData(t,e){t.uniform3fv(e.uGamma,this.gamma)}isNeutralState(){let{gamma:t}=this;return t[0]===1&&t[1]===1&&t[2]===1}toObject(){return{type:N_,gamma:this.gamma.concat()}}};X(Lr,"type",N_),X(Lr,"defaults",{gamma:[1,1,1]}),X(Lr,"uniformLocations",["uGamma"]),Ut.setClass(Lr);var Gw={average:`
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
    `},Fr=class extends He{applyTo2d(t){let{imageData:{data:e}}=t;for(let n,i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2];switch(this.mode){case"average":n=(r+o+a)/3;break;case"lightness":n=(Math.min(r,o,a)+Math.max(r,o,a))/2;break;case"luminosity":n=.21*r+.72*o+.07*a}e[i+2]=e[i+1]=e[i]=n}}getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return Gw[this.mode]}sendUniformData(t,e){t.uniform1i(e.uMode,1)}isNeutralState(){return!1}};X(Fr,"type","Grayscale"),X(Fr,"defaults",{mode:"average"}),X(Fr,"uniformLocations",["uMode"]),Ut.setClass(Fr);var Hw=G(G({},F_),{},{rotation:0}),qo=class extends vs{calculateMatrix(){let t=this.rotation*Math.PI,e=Ii(t),n=Oi(t),i=1/3,r=Math.sqrt(i)*n,o=1-e;this.matrix=[e+o/3,i*o-r,i*o+r,0,0,i*o+r,e+i*o,i*o-r,0,0,i*o-r,i*o+r,e+i*o,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(t){this.calculateMatrix(),super.applyTo(t)}toObject(){return{type:this.type,rotation:this.rotation}}};X(qo,"type","HueRotation"),X(qo,"defaults",Hw),Ut.setClass(qo);var Nr=class extends He{applyTo2d(t){let{imageData:{data:e}}=t;for(let n=0;n<e.length;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2],this.alpha&&(e[n+3]=255-e[n+3])}getFragmentSource(){return`
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
    `)}applyToForWebgl(t){t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,super.applyTo(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,super.applyTo(t),t.sourceHeight=t.destinationHeight}applyTo(t){gu(t)?this.applyToForWebgl(t):this.applyTo2d(t)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(t){return e=>{if(e>=t||e<=-t)return 0;if(e<11920929e-14&&e>-11920929e-14)return 1;let n=(e*=Math.PI)/t;return Math.sin(e)/e*Math.sin(n)/n}}applyTo2d(t){let e=t.imageData,n=this.scaleX,i=this.scaleY;this.rcpScaleX=1/n,this.rcpScaleY=1/i;let r=e.width,o=e.height,a=Math.round(r*n),l=Math.round(o*i),c;c=this.resizeType==="sliceHack"?this.sliceByTwo(t,r,o,a,l):this.resizeType==="hermite"?this.hermiteFastResize(t,r,o,a,l):this.resizeType==="bilinear"?this.bilinearFiltering(t,r,o,a,l):this.resizeType==="lanczos"?this.lanczosResize(t,r,o,a,l):new ImageData(a,l),t.imageData=c}sliceByTwo(t,e,n,i,r){let o=t.imageData,a=.5,l=!1,c=!1,h=e*a,u=n*a,d=t.filterBackend.resources,f=0,p=0,x=e,m=0;d.sliceByTwo||(d.sliceByTwo=es());let _=d.sliceByTwo;(_.width<1.5*e||_.height<n)&&(_.width=1.5*e,_.height=n);let b=_.getContext("2d");for(b.clearRect(0,0,1.5*e,n),b.putImageData(o,0,0),i=Math.floor(i),r=Math.floor(r);!l||!c;)e=h,n=u,i<Math.floor(h*a)?h=Math.floor(h*a):(h=i,l=!0),r<Math.floor(u*a)?u=Math.floor(u*a):(u=r,c=!0),b.drawImage(_,f,p,e,n,x,m,h,u),f=x,p=m,m+=u;return b.getImageData(f,p,i,r)}lanczosResize(t,e,n,i,r){let o=t.imageData.data,a=t.ctx.createImageData(i,r),l=a.data,c=this.lanczosCreate(this.lanczosLobes),h=this.rcpScaleX,u=this.rcpScaleY,d=2/this.rcpScaleX,f=2/this.rcpScaleY,p=Math.ceil(h*this.lanczosLobes/2),x=Math.ceil(u*this.lanczosLobes/2),m={},_={x:0,y:0},b={x:0,y:0};return(function A(w){let E,P,g,v,T,C,R,L,U,O,j;for(_.x=(w+.5)*h,b.x=Math.floor(_.x),E=0;E<r;E++){for(_.y=(E+.5)*u,b.y=Math.floor(_.y),T=0,C=0,R=0,L=0,U=0,P=b.x-p;P<=b.x+p;P++)if(!(P<0||P>=e)){O=Math.floor(1e3*Math.abs(P-_.x)),m[O]||(m[O]={});for(let q=b.y-x;q<=b.y+x;q++)q<0||q>=n||(j=Math.floor(1e3*Math.abs(q-_.y)),m[O][j]||(m[O][j]=c(Math.sqrt(Math.pow(O*d,2)+Math.pow(j*f,2))/1e3)),g=m[O][j],g>0&&(v=4*(q*e+P),T+=g,C+=g*o[v],R+=g*o[v+1],L+=g*o[v+2],U+=g*o[v+3]))}v=4*(E*i+w),l[v]=C/T,l[v+1]=R/T,l[v+2]=L/T,l[v+3]=U/T}return++w<i?A(w):a})(0)}bilinearFiltering(t,e,n,i,r){let o,a,l,c,h,u,d,f,p,x,m,_,b,A=0,w=this.rcpScaleX,E=this.rcpScaleY,P=4*(e-1),g=t.imageData.data,v=t.ctx.createImageData(i,r),T=v.data;for(d=0;d<r;d++)for(f=0;f<i;f++)for(h=Math.floor(w*f),u=Math.floor(E*d),p=w*f-h,x=E*d-u,b=4*(u*e+h),m=0;m<4;m++)o=g[b+m],a=g[b+4+m],l=g[b+P+m],c=g[b+P+4+m],_=o*(1-p)*(1-x)+a*p*(1-x)+l*x*(1-p)+c*p*x,T[A++]=_;return v}hermiteFastResize(t,e,n,i,r){let o=this.rcpScaleX,a=this.rcpScaleY,l=Math.ceil(o/2),c=Math.ceil(a/2),h=t.imageData.data,u=t.ctx.createImageData(i,r),d=u.data;for(let f=0;f<r;f++)for(let p=0;p<i;p++){let x=4*(p+f*i),m=0,_=0,b=0,A=0,w=0,E=0,P=0,g=(f+.5)*a;for(let v=Math.floor(f*a);v<(f+1)*a;v++){let T=Math.abs(g-(v+.5))/c,C=(p+.5)*o,R=T*T;for(let L=Math.floor(p*o);L<(p+1)*o;L++){let U=Math.abs(C-(L+.5))/l,O=Math.sqrt(R+U*U);O>1&&O<-1||(m=2*O*O*O-3*O*O+1,m>0&&(U=4*(L+v*e),P+=m*h[U+3],b+=m,h[U+3]<255&&(m=m*h[U+3]/250),A+=m*h[U],w+=m*h[U+1],E+=m*h[U+2],_+=m))}}d[x]=A/_,d[x+1]=w/_,d[x+2]=E/_,d[x+3]=P/b}return u}};X(zr,"type","Resize"),X(zr,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),X(zr,"uniformLocations",["uDelta","uTaps"]),Ut.setClass(zr);var Vr=class extends He{getFragmentSource(){return`
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
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.vibrance;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a),c=(r+o+a)/3,h=2*Math.abs(l-c)/255*n;e[i]+=l!==r?(l-r)*h:0,e[i+1]+=l!==o?(l-o)*h:0,e[i+2]+=l!==a?(l-a)*h:0}}sendUniformData(t,e){t.uniform1f(e.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};X(Gr,"type","Vibrance"),X(Gr,"defaults",{vibrance:0}),X(Gr,"uniformLocations",["uVibrance"]),Ut.setClass(Gr);var f2=Object.freeze({__proto__:null,BaseFilter:He,BlackWhite:zw,BlendColor:Ar,BlendImage:Rr,Blur:Pr,Brightness:Dr,Brownie:Lw,ColorMatrix:vs,Composed:ul,Contrast:Ir,Convolute:Or,Gamma:Lr,Grayscale:Fr,HueRotation:qo,Invert:Nr,Kodachrome:Nw,Noise:kr,Pixelate:Ur,Polaroid:Uw,RemoveColor:Br,Resize:zr,Saturation:Vr,Sepia:Bw,Technicolor:kw,Vibrance:Gr,Vintage:Fw});var Jt=s=>Math.round(s*100)/100,_l=s=>s*Math.PI/180,nn=s=>"M"+s.map(t=>Jt(t[0])+" "+Jt(t[1])).join("L")+"Z",en=(s,t,e,n)=>`M${Jt(s-e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 1 ${Jt(s+e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 1 ${Jt(s-e)} ${Jt(t)}Z`,k_=(s,t,e,n)=>`M${Jt(s-e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 0 ${Jt(s+e)} ${Jt(t)}A${Jt(e)} ${Jt(n)} 0 1 0 ${Jt(s-e)} ${Jt(t)}Z`,ei=(s,t,e,n,i=0)=>i?`M${Jt(s+i)} ${Jt(t)}H${Jt(s+e-i)}Q${Jt(s+e)} ${Jt(t)} ${Jt(s+e)} ${Jt(t+i)}V${Jt(t+n-i)}Q${Jt(s+e)} ${Jt(t+n)} ${Jt(s+e-i)} ${Jt(t+n)}H${Jt(s+i)}Q${Jt(s)} ${Jt(t+n)} ${Jt(s)} ${Jt(t+n-i)}V${Jt(t+i)}Q${Jt(s)} ${Jt(t)} ${Jt(s+i)} ${Jt(t)}Z`:`M${Jt(s)} ${Jt(t)}H${Jt(s+e)}V${Jt(t+n)}H${Jt(s)}Z`,gl=(s,t,e,n)=>`M${Jt(s)} ${Jt(t)}V${Jt(t+n)}H${Jt(s+e)}V${Jt(t)}Z`,cp=(s,t,e,n,i,r=-90)=>nn(Array.from({length:e*2},(o,a)=>{let l=_l(r+a*180/e),c=a%2?i:n;return[s+Math.cos(l)*c,t+Math.sin(l)*c]})),fi=(s,t,e,n)=>[s+Math.cos(_l(n))*e,t+Math.sin(_l(n))*e];function ra(s,t,e,n,i,r,o=16){let a=[],l=[];for(let c=0;c<=o;c++){let h=n+(i-n)*c/o;a.push(fi(s,t,e+r/2,h)),l.unshift(fi(s,t,e-r/2,h))}return nn(a.concat(l))}function Ww(){let s=7,t=()=>(s=s*16807%2147483647,s/2147483647),e="";for(let n=0;n<16;n++){let i=8+t()*84,r=8+t()*84,o=3+t()*3.5;if(n%3===0)e+=en(i,r,o,o);else{let a=t()*180,l=Math.cos(_l(a)),c=Math.sin(_l(a)),h=o*1.9,u=o*.7;e+=nn([[-h,-u],[h,-u],[h,u],[-h,u]].map(([d,f])=>[i+d*l-f*c,r+d*c+f*l]))}}return e}function Xw(){let s=en(50,50,46,46)+k_(50,50,41,41)+nn([0,1,2,3,4].map(t=>fi(50,50,16,-90+72*t)));for(let t=0;t<5;t++){let e=-90+72*t;s+=nn([fi(50,50,14,e-7),fi(50,50,31,e-3.4),fi(50,50,31,e+3.4),fi(50,50,14,e+7)]),s+=nn([fi(50,50,30,e-15),fi(50,50,43,e-21),fi(50,50,43,e+21),fi(50,50,30,e+15)])}return s}function jw(){let s="";for(let t=0;t<6;t++){let[e,n]=fi(50,50,26,t*60-90);s+=en(e,n,17,17)}return s+k_(50,50,11,11)}function Yw(){let s=ei(2,14,96,3.5,1.5);for(let t=0;t<5;t++)s+=nn([[5+19*t,17.5],[19+19*t,17.5],[12+19*t,42]]);return s}var hp=[["box","Box",null,300,.7],["round","Rounded box",null,300,.7],["circle","Circle",null,240,1],["line","Line",null,300,.035],["triangle","Triangle",nn([[50,6],[96,92],[4,92]]),240,1],["diamond","Diamond",nn([[50,3],[93,50],[50,97],[7,50]]),220,1],["star","Star",cp(50,53,5,50,20),260,1],["heart","Heart","M50 91C22 69 5 52 5 32C5 18 16 7 30 7C39 7 46 12 50 20C54 12 61 7 70 7C84 7 95 18 95 32C95 52 78 69 50 91Z",240,1],["sparkle","Sparkle","M50 3Q56 44 97 50Q56 56 50 97Q44 56 3 50Q44 44 50 3Z",220,1],["seal","Seal",cp(50,50,18,48,41),280,1],["ribbon","Ribbon",nn([[2,30],[98,30],[87,50],[98,70],[2,70],[13,50]]),400,1],["pennant","Pennant",nn([[5,14],[96,50],[5,86]]),320,1],["bunting","Bunting",Yw(),440,1],["shield","Shield","M50 4L90 15V46C90 70 73 88 50 97C27 88 10 70 10 46V15Z",260,1],["arrow","Arrow",nn([[5,38],[57,38],[57,17],[96,50],[57,83],[57,62],[5,62]]),300,1],["bubble","Speech bubble",ei(6,10,88,58,16)+nn([[26,66],[48,66],[22,93]]),320,1],["cap","Graduation cap",nn([[50,13],[97,35],[50,57],[3,35]])+"M24 49L50 61L76 49V68C76 76 64 82 50 82C36 82 24 76 24 68Z"+nn([[86.4,40.6],[89.6,39.1],[89.6,67],[86.4,67]])+ei(84.5,67,7,15,2.5),320,1],["balloon","Balloon",en(50,37,29,34)+nn([[45.5,70],[54.5,70],[57.5,79],[42.5,79]])+"M49 79C55 85 43 90 49 97L52 97C46 90 58 85 52 79Z",240,1],["cake","Cake",ei(7,85,86,8,3)+ei(14,59,72,26,4)+ei(26,37,48,22,4)+ei(34.5,22,5,15,1.2)+ei(47.5,22,5,15,1.2)+ei(60.5,22,5,15,1.2)+en(37,14.5,3.2,5.2)+en(50,14.5,3.2,5.2)+en(63,14.5,3.2,5.2),280,1],["trophy","Trophy","M28 7H72V30C72 46 62 56 50 56C38 56 28 46 28 30Z"+ra(28,22,13,90,270,5)+ra(72,22,13,-90,90,5)+ei(45.5,55,9,18)+nn([[33,72],[67,72],[72,85],[28,85]])+ei(21,85,58,9,2),280,1],["crown","Crown",nn([[9,31],[29,54],[50,19],[71,54],[91,31],[84,79],[16,79]])+ei(16,83,68,10,2)+en(9,26,5.5,5.5)+en(50,13,6.5,6.5)+en(91,26,5.5,5.5),300,1],["confetti","Confetti",Ww(),380,1],["sun","Sun",cp(50,50,12,49,30)+en(50,50,25,25),260,1],["flower","Flower",jw(),260,1],["bolt","Lightning",nn([[59,3],[19,55],[44,55],[35,97],[81,40],[55,40]]),220,1],["note","Music note",en(30,79,17,13)+ei(41,13,6.5,68)+"M47.5 13C63 17 78 26 75 48C70 35 60 31 47.5 31Z",240,1],["paw","Paw",en(50,67,25,20)+en(21,41,10.5,13.5)+en(40,24,10.5,13.5)+en(60,24,10.5,13.5)+en(79,41,10.5,13.5),240,1],["football","Football","M4 50C24 16 76 16 96 50C76 84 24 84 4 50Z"+gl(32,48,36,4)+[36,44.7,53.3,62].map(s=>gl(s-1.5,41,3,7)+gl(s-1.5,52,3,7)).join(""),340,1],["basketball","Basketball",en(50,50,46,46)+gl(48.4,4.6,3.2,90.8)+[[6,20.4],[23.6,24.8],[51.6,24.8],[79.6,14.4]].map(([s,t])=>gl(s,48.4,t,3.2)).join("")+ra(-12,50,34,47,-47,3.2)+ra(112,50,34,227,133,3.2),260,1],["soccer","Soccer ball",Xw(),260,1],["baseball","Baseball",en(50,50,46,46)+ra(-10,50,42,44,-44,3.4)+ra(110,50,42,224,136,3.4),260,1]],qw={back:"M14.5 5l-7 7 7 7",undo:"M4 9h11a5 5 0 010 10H8M4 9l4-4M4 9l4 4",redo:"M20 9H9a5 5 0 000 10h7M20 9l-4-4M20 9l-4 4",designs:"M4 4h7v16H4zM14 4h6v7h-6zM14 14h6v6h-6z",text:"M5 7V4h14v3M12 4v16M8.5 20h7",photos:"M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 9.6v.01",art:"M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.4l6-.8z",ground:"M12 3c4 5 6 8.2 6 11a6 6 0 01-12 0c0-2.8 2-6 6-11z",post:"M9 3h6v17H9zM6 21h12",plus:"M12 5v14M5 12h14",minus:"M5 12h14",copy:"M8 8h12v12H8zM16 8V4H4v12h4",up:"M12 4l8 5-8 5-8-5zM4 14l8 5 8-5",down:"M12 20l8-5-8-5-8 5zM4 10l8-5 8 5",center:"M12 3v18M6 7h12v3H6zM8 14h8v3H8z",trash:"M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13",turn:"M5 12a7 7 0 0112-5l2 2M19 5v4h-4M19 12a7 7 0 01-12 5l-2-2M5 19v-4h4",upload:"M12 16V4M7 9l5-5 5 5M4 20h16",crop:"M6 2v16h16M2 6h16v16",swap:"M4 8h13l-3-3M20 16H7l3 3",check:"M5 12.5l4.5 4.5L19 7",close:"M6 6l12 12M18 6L6 18",left:"M14.5 6l-6 6 6 6",right:"M9.5 6l6 6-6 6"},ws=(s,t=20)=>`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${qw[s]}"/></svg>`,U_=[["none","Plain"],["stripes","Stripes"],["pin","Pinstripes"],["dots","Dots"],["checks","Checks"],["zigzag","Zigzag"],["flecks","Flecks"]];function up(s,t,e){let i=document.createElement("canvas");i.width=i.height=96;let r=i.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,96,96),r.fillStyle=e,r.strokeStyle=e,r.globalAlpha=.55,s==="stripes"){r.lineWidth=22,r.beginPath();for(let o=-96;o<192;o+=48)r.moveTo(o,108),r.lineTo(o+96+24,-12);r.stroke()}else if(s==="pin")for(let o=10;o<96;o+=24)r.fillRect(o,0,4,96);else if(s==="dots")[[24,24],[72,72]].forEach(([o,a])=>{r.beginPath(),r.arc(o,a,9,0,6.2832),r.fill()});else if(s==="checks")r.fillRect(0,0,48,48),r.fillRect(48,48,48,48);else if(s==="zigzag"){r.lineWidth=9,r.lineJoin="miter",r.beginPath();for(let o=12;o<144;o+=48){r.moveTo(-12,o+12);for(let a=0;a<=120;a+=24)r.lineTo(a,o+(a/24%2?-12:12))}r.stroke()}else if(s==="flecks"){let o=11,a=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<7;l++){let c=8+a()*80,h=8+a()*80;r.save(),r.translate(c,h),r.rotate(a()*3.1),r.fillRect(-9,-3,18,6),r.restore()}}return i}var Ie=476,Ee=6738,xl=3369,dp=Ie/4.875,z_=.036,Zw=.7,Jw="#E3E8F0",sr=[["Block","Barlow Condensed",800],["Clean","Barlow",600],["Varsity","Graduate",400],["Tall","Bebas Neue",400],["Poster","Anton",400],["Slab","Alfa Slab One",400],["Serif","DM Serif Display",400],["Classic","Playfair Display",700],["Retro script","Pacifico",400],["Formal script","Great Vibes",400],["Handwritten","Caveat",600],["Marker","Permanent Marker",400]],Li=["role","loose","pid","bw","zoomK","fx","fy","bgc","pat","fg","art","cover","wrap"],Kw={cornerSize:13,touchCornerSize:34,transparentCorners:!1,cornerColor:"#FFFFFF",cornerStrokeColor:"#14213D",borderColor:"#F2A900",borderScaleFactor:2,cornerStyle:"circle",padding:6,lockScalingFlip:!0,snapAngle:45,snapThreshold:4},$w=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,eo=(s,t)=>document.fonts&&document.fonts.load?document.fonts.load(`${t} 48px "${s}"`).catch(()=>{}):Promise.resolve(),hn=(s,t,e)=>Math.max(t,Math.min(e,s));function bt(s,t,...e){let n=document.createElement(s);return Object.keys(t||{}).forEach(i=>{let r=t[i];r===!1||r==null||(i==="html"?n.innerHTML=r:i==="on"?Object.keys(r).forEach(o=>n.addEventListener(o,r[o])):i==="style"?Object.assign(n.style,r):i in n&&i!=="list"&&typeof r!="string"?n[i]=r:n.setAttribute(i,r))}),e.forEach(i=>{i!=null&&i!==!1&&n.appendChild(typeof i=="string"?document.createTextNode(i):i)}),n}var Fi=new Map,Qw=Math.random().toString(36).slice(2,7),tT=0;function oa(s){return s.pid||(s.pid="x"+Qw+ ++tT),Fi.has(s.pid)||Fi.set(s.pid,s),Fi.get(s.pid)}var Ts=s=>[s.naturalWidth||s.width,s.naturalHeight||s.height];function _u(s){if(s.gray)return s.gray;let[t,e]=Ts(s.color),n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");i.drawImage(s.color,0,0);try{let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=hn((.299*o[a]+.587*o[a+1]+.114*o[a+2]-128)*1.06+128,0,255);o[a]=o[a+1]=o[a+2]=l}i.putImageData(r,0,0)}catch{}return s.gray=n,n}var fp=null;function V_(){if(fp)return fp;let s=document.createElement("canvas");s.width=400,s.height=500;let t=s.getContext("2d");return t.fillStyle="#E1DACB",t.fillRect(0,0,400,500),t.strokeStyle="#A99F8C",t.lineWidth=4,t.setLineDash([16,14]),t.strokeRect(22,22,356,456),t.setLineDash([]),t.fillStyle="#A99F8C",t.fillRect(170,245,60,10),t.fillRect(195,220,10,60),fp=s,s}var gn=class s extends hi{getSrc(){return"mp:"+(this.pid||"")}toObject(t=[]){let e=super.toObject(Li.concat(t));return delete e.filters,delete e.crossOrigin,e}static fromObject(t){let e=Object.assign({},t);["type","src","filters","resizeFilter","crossOrigin","version"].forEach(i=>delete e[i]);let n=Fi.get(e.pid);return Promise.resolve(new s(n?e.bw?_u(n):n.color:V_(),e))}};gn.type="Photo";Ut.setClass(gn);Ut.setClass(gn,"Photo");function pi(s,t,e){let[n,i]=Ts(s.getElement()),r=s.wrap==null?1:4,o=Math.max(t*r/n,e/i)*(s.zoomK||1),a=t*r/o,l=e/o,c=hn((s.fx==null?.5:s.fx)*n,a/2,n-a/2),h=hn((s.fy==null?.5:s.fy)*i,l/2,i-l/2);s.set({cropX:c-a/2+(s.wrap||0)*a/r,cropY:h-l/2,width:a/r,height:l,scaleX:o,scaleY:o}),s.fx=Math.round(c/n*1e6)/1e6,s.fy=Math.round(h/i*1e6)/1e6,s.setCoords()}var mp=s=>s instanceof gn&&(!!s.cover||s.wrap!=null),B_=s=>s.forEach(t=>{mp(t)&&(t.set({left:0,top:0,angle:0}),pi(t,Ie,Ee))}),la=class s extends Kn{toObject(t=[]){let e=super.toObject(Li.concat(t));return e.fill=this.bgc,e}static fromObject(t){let e=Object.assign({},t);delete e.type,delete e.version;let n=new s(e);return aa(n),Promise.resolve(n)}};la.type="Ground";Ut.setClass(la);Ut.setClass(la,"Ground");function aa(s){s.set({fill:s.pat&&s.pat!=="none"?new Yr({source:up(s.pat,s.bgc,s.fg||"#FFFFFF"),repeat:"repeat"}):s.bgc,dirty:!0})}var vl=s=>{let t=new la({left:0,top:0,width:Ie,height:Ee,bgc:s,pat:"none",fg:"#FFFFFF",role:"ground",selectable:!1,evented:!1,strokeWidth:0});return aa(t),t};function ni(s){if(s.role==="ground")return s.set({selectable:!1,evented:!1}),s;s.set(Kw),s.loose&&(s.perPixelTargetFind=!0);let t=mp(s);s.set({lockMovementX:t,lockMovementY:t,lockScalingX:t,lockScalingY:t,lockRotation:t,hasControls:!t,hoverCursor:t?"grab":null});let e=s instanceof je,n=s instanceof gn&&s.role!=="photo";return s.setControlsVisibility({ml:!e&&!n,mr:!e&&!n,mt:!e&&!n,mb:!e&&!n}),e&&s.set({editable:!$w,cursorColor:"#F2A900",selectionColor:"rgba(242,169,0,.35)",editingBorderColor:"#F2A900"}),s}var xu=s=>z_*s.fontSize*(s.scaleY||1);function yl(s){let t=s.getCenterPoint();if(!(s instanceof je))return t;let e=s.angle*Math.PI/180;return new st(t.x+Math.sin(e)*xu(s),t.y-Math.cos(e)*xu(s))}function pp(s,t,e){if(s instanceof je){let n=s.angle*Math.PI/180;t-=Math.sin(n)*xu(s),e+=Math.cos(n)*xu(s)}s.setPositionByOrigin(new st(t,e),"center","center"),s.setCoords()}function eT(s){if(s.t==="rect")return ni(new Kn({left:s.x,top:s.y,width:s.w,height:s.h,fill:s.fill,role:"shape",strokeWidth:0}));if(s.t==="text"){let e=(s.angle||0)*Math.PI/180,n=z_*s.size,i=new Pi(s.text,{originX:"center",originY:"center",left:s.cx-Math.sin(e)*n,top:s.cy+Math.cos(e)*n,angle:s.angle||0,fontFamily:s.family,fontWeight:s.weight,fontSize:s.size,charSpacing:Math.round(s.sp*1e3),fill:s.fill,role:"text"}),r=Array.from(s.text).length;return s.w&&r>1&&i.set("charSpacing",Math.round(i.charSpacing+(s.w-i.width)/(r-1)/s.size*1e3)),ni(i)}if(s.t==="photo"){let e=s.entry?oa(s.entry):null,n=e?s.bw?_u(e):e.color:V_(),i=new gn(n,{left:s.x,top:s.y,pid:e?e.pid:"",bw:!!s.bw,role:"photo",zoomK:1,fx:.5}),[,r]=Ts(n),[o]=Ts(n),a=Math.max(s.w/o,s.h/r),l=s.h/a;return i.fy=((r-l)*(s.bias==null?.5:s.bias)+l/2)/r,pi(i,s.w,s.h),s.frame&&i.set({left:s.x-s.frame,top:s.y-s.frame,stroke:"#FFFFFF",strokeWidth:2*s.frame,strokeUniform:!0,paintFirst:"stroke"}),ni(i)}let t=oa({color:s.canvas});return ni(new gn(t.color,{left:s.x,top:s.y,scaleX:s.w/t.color.width,scaleY:s.h/t.color.height,pid:t.pid,role:"art",loose:!!s.loose}))}function G_(s){Se.configure({devicePixelRatio:Math.min(window.devicePixelRatio||1,2)});let t=s.root,e=S=>t.querySelector("#"+S),n=[null,null,null,null],i=[[],[],[],[]],r=[0,0,0,0],o=["","","",""],a=[0,0,0,0],l=null,c=-1,h=!1,u=!1,d="",f="",p=[],x=null,m=null,_=null,b=0,A=0,w=sr[0],E="",P=!1,g=[1,2,3,0],v=mp,T=S=>v(S)&&!(x&&x.o===S),C=S=>v(S)?[Ie,Ee]:[S.width*S.scaleX,S.height*S.scaleY],R=()=>l.getObjects().find(S=>S instanceof gn&&S.wrap!=null),L=S=>S.type==="Photo"&&S.wrap!=null,U=S=>S?[S.pid,!!S.bw,S.zoomK,S.fx,S.fy].join("|"):"",O=()=>{let S=s.lead&&s.lead()||s.library()[0];return S?oa(S):null};function j(S,I,N){let V=new gn(S.color,{left:0,top:0,pid:S.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.45,strokeWidth:0,cover:!N,wrap:N?g[I]:void 0});return pi(V,Ie,Ee),ni(V)}function q(S){x&&x.o!==S&&v(x.o)&&(x.o.lockMovementX=x.o.lockMovementY=!0,x.o.hoverCursor="grab"),x=S?{o:S,left:S.left,top:S.top,fx:S.fx,fy:S.fy}:null,S&&v(S)&&(S.lockMovementX=S.lockMovementY=!1,S.hoverCursor="move")}let B=()=>window.innerWidth<760,$=()=>Promise.all([eo("Barlow Condensed",800),eo("Barlow Condensed",700),eo("Barlow",600)]);function J(S){let I=s.pieces(S);return[vl(I.bg)].concat(I.items.map(eT))}function ct(S){let I=new er(void 0,{width:Ie,height:Ee,enableRetinaScaling:!1,renderOnAddRemove:!1});S.forEach(V=>I.add(V)),I.renderAll();let N={json:I.toObject(Li),full:I.toCanvasElement(1)};return I.dispose(),N}function pt(S,I){if(n[S]&&(n[S].edited||!I))return Promise.resolve();I=I||n[S]&&n[S].origin||"name";let N=++a[S];return $().then(()=>{let V=s.stamp?s.stamp():"";if(N!==a[S]||n[S]&&n[S].edited)return;let nt=ct(J(I));n[S]={json:nt.json,full:nt.full,origin:I,edited:!1},o[S]=V,i[S]=[JSON.stringify(nt.json)],r[S]=0})}function Et(){let S=s.stamp?s.stamp():"",I=[];return n.forEach((N,V)=>{N&&!N.edited&&N.origin&&o[V]!==S&&I.push(pt(V,N.origin).then(()=>V===c&&l?te(n[V].json):null))}),Promise.all(I).then(()=>(I.length&&(Kt(),Cn()),I.length))}function At(S,I,N){let V=l.width,nt=l.height,W=Math.min(.9,(nt-48)/Ee),Z=Ie*S,mt=Ee*S;S=hn(S,W,3.2),I=Z<=V-24?(V-Ie*S)/2:hn(I,V-Ie*S-36,36),N=mt<=nt-48?(nt-Ee*S)/2:hn(N,nt-Ee*S-90,24),l.setViewportTransform([S,0,0,S,I,N]),e("st-zout").disabled=S<=W+1e-4,e("st-zin").disabled=S>=3.2-1e-4,t.dataset.zoom=S.toFixed(3),t.dataset.view=[S,I,N].map(Zt=>Math.round(Zt*1e3)/1e3).join(","),e("st-zfit").textContent=S<=W+.001?"Close up":"Whole face",Vt(),Ht()}let Q=()=>l.viewportTransform;function Mt(S,I,N){let V=Q(),nt=(S-V[4])/V[0],W=(I-V[5])/V[0],Z=Math.min(.9,(l.height-48)/Ee);N=hn(N,Z,3.2),At(N,S-nt*N,I-W*N)}function Ct(){let S=l.width,I=B()?hn(S*.62,150,240):hn(S*.46,300,440);At(I/Ie,0,24)}function zt(){At(1e-4,0,0)}let Tt=()=>requestAnimationFrame(()=>{Qt(),zt(),e("st-panel").scrollTop=0});function jt(S){let I=S.getCenterPoint(),N=Q(),V=I.y*N[0]+N[5];(V<60||V>l.height-60)&&At(N[0],N[4],l.height/2-I.y*N[0])}function Qt(){let S=e("st-cv"),I=S.clientWidth,N=S.clientHeight;if(!(!l||!I||!N)&&(I!==l.width||N!==l.height)){let V=Q(),nt=!l.__sized,W=V[0]<=Math.min(.9,(l.height-48)/Ee)+.001;l.__sized=!0,l.setDimensions({width:I,height:N}),nt?Ct():W?zt():At(V[0],V[4],V[5]),Kt()}}function Vt(){let S=e("st-ruler"),I=Math.min(window.devicePixelRatio||1,2),N=S.clientWidth,V=S.clientHeight;if(!N||!V)return;(S.width!==Math.round(N*I)||S.height!==Math.round(V*I))&&(S.width=Math.round(N*I),S.height=Math.round(V*I));let nt=S.getContext("2d"),W=Q(),Z=dp*W[0];nt.setTransform(I,0,0,I,0,0),nt.clearRect(0,0,N,V);let mt=Z>=34?1:Z>=12?3:Z>=6?6:12;nt.fillStyle="#5B6780",nt.strokeStyle="#8B95A8",nt.lineWidth=1,nt.font="500 10.5px Barlow, system-ui, sans-serif",nt.textAlign="right",nt.textBaseline="middle";for(let M=0;M<=69;M++){let k=Math.round(W[5]+M*Z)+.5;if(k<-4||k>V+4)continue;let tt=M%mt===0;Z<5&&!tt||(nt.beginPath(),nt.moveTo(N-(tt?9:4),k),nt.lineTo(N,k),nt.stroke(),tt&&nt.fillText(M+(M===0?" in":""),N-11,M===0?k+6:k))}let Zt=W[5]+xl*W[0];Zt>0&&Zt<V&&(nt.fillStyle="#B67A00",nt.beginPath(),nt.moveTo(N,Zt),nt.lineTo(N-8,Zt-5),nt.lineTo(N-8,Zt+5),nt.closePath(),nt.fill())}function de(S){if(u)return;let I=Q(),N=I[4],V=I[5],nt=Ie*I[0],W=Ee*I[0],Z=l.getRetinaScaling();S.save(),S.setTransform(Z,0,0,Z,0,0),S.strokeStyle="rgba(20,33,61,.55)",S.lineWidth=1,S.strokeRect(Math.round(N)-.5,Math.round(V)-.5,Math.round(nt)+1,Math.round(W)+1);let mt=Math.round(V+xl*I[0])+.5;S.setLineDash([7,5]),S.strokeStyle="#F2A900",S.lineWidth=1.5,S.beginPath(),S.moveTo(N-10,mt),S.lineTo(N+nt+10,mt),S.stroke(),S.setLineDash([]),S.font="600 11px Barlow, system-ui, sans-serif",S.fillStyle="#8A5E00",S.textBaseline="bottom",N+nt+96<l.width&&S.fillText("seam",N+nt+14,mt+5),S.strokeStyle="#E0457B",S.lineWidth=1,p.forEach(([Zt,M])=>{if(S.beginPath(),Zt==="v"){let k=Math.round(N+M*I[0])+.5;S.moveTo(k,Math.max(0,V)),S.lineTo(k,Math.min(l.height,V+W))}else{let k=Math.round(V+M*I[0])+.5;S.moveTo(N,k),S.lineTo(N+nt,k)}S.stroke()}),S.restore()}function ne(){l=new ta(e("st-canvas"),{preserveObjectStacking:!0,selection:!1,enableRetinaScaling:!0,stopContextMenu:!0,controlsAboveOverlay:!0,fireRightClick:!1,targetFindTolerance:6}),l.overlayImage=new $i(`M-90000 -90000H90000V90000H-90000ZM0 0V${Ee}H${Ie}V0Z`,{fill:Jw,strokeWidth:0,objectCaching:!1,selectable:!1,evented:!1}),["selection:created","selection:updated","selection:cleared"].forEach(W=>l.on(W,()=>{d="",q(null);let Z=l.getActiveObject();Z&&B()&&rn(""),gt(),Z&&!v(Z)&&jt(Z)})),l.on("after:render",({ctx:W})=>de(W)),l.on("object:modified",({target:W})=>{p=[],x&&x.o===W&&(x.fx=W.fx,x.fy=W.fy),W instanceof je&&(W.scaleX!==1||W.scaleY!==1)&&W.set({fontSize:Math.max(8,W.fontSize*W.scaleX),scaleX:1,scaleY:1}),F(!0),gt()}),l.on("text:editing:entered",gt),l.on("text:editing:exited",()=>{F(!0),gt()}),l.on("text:changed",()=>{F(!1);let W=e("st-words");W&&document.activeElement!==W&&(W.value=l.getActiveObject().text)}),l.on("object:scaling",({target:W,transform:Z})=>{W instanceof gn&&W.role==="photo"&&!v(W)&&Z&&/^m[lrtb]$/.test(Z.corner||"")&&pi(W,W.width*W.scaleX,W.height*W.scaleY)}),l.on("object:moving",({target:W})=>{if(x&&x.o===W){let k=-W.angle*Math.PI/180,tt=W.left-x.left,K=W.top-x.top,et=tt*Math.cos(k)-K*Math.sin(k),Ot=tt*Math.sin(k)+K*Math.cos(k),[Bt,Dt]=Ts(W.getElement());W.fx=x.fx-et/(W.scaleX*Bt),W.fy=x.fy-Ot/(W.scaleY*Dt),W.set({left:x.left,top:x.top}),pi(W,...C(W));return}let Z=yl(W),mt=7/Q()[0];p=[];let Zt=Z.x,M=Z.y;Math.abs(Z.x-Ie/2)<mt&&(Zt=Ie/2,p.push(["v",Zt])),[xl/2,xl+xl/2].forEach(k=>{Math.abs(Z.y-k)<mt&&(M=k,p.push(["h",k]))}),p.length&&pp(W,Zt,M)}),l.on("mouse:up",()=>{p.length&&(p=[],l.requestRenderAll())});let S=null;l.on("mouse:down",({e:W,target:Z})=>{(!Z||T(Z))&&W.type.indexOf("touch")<0&&(S={x:W.clientX,y:W.clientY,v:Q().slice()})}),l.on("mouse:move",({e:W})=>{S&&W.buttons!==0?At(S.v[0],S.v[4]+W.clientX-S.x,S.v[5]+W.clientY-S.y):S=null}),l.on("mouse:up",()=>{S=null}),l.on("mouse:wheel",({e:W})=>{W.preventDefault(),W.stopPropagation();let Z=Q(),mt=l.upperCanvasEl.getBoundingClientRect();W.ctrlKey||W.metaKey?Mt(W.clientX-mt.left,W.clientY-mt.top,Z[0]*Math.exp(-W.deltaY*.01)):At(Z[0],Z[4]-(W.shiftKey?W.deltaY:W.deltaX),Z[5]-(W.shiftKey?0:W.deltaY))});let I=l.wrapperEl,N=null,V=W=>{let Z=I.getBoundingClientRect();return{x:W.clientX-Z.left,y:W.clientY-Z.top}},nt=W=>{let Z=V(W.touches[0]),mt=V(W.touches[1]);return{d:Math.hypot(Z.x-mt.x,Z.y-mt.y)||1,x:(Z.x+mt.x)/2,y:(Z.y+mt.y)/2}};I.addEventListener("touchstart",W=>{if(W.touches.length===2){l._currentTransform=null,N=Object.assign({kind:"pinch",v:Q().slice()},nt(W)),W.preventDefault(),W.stopPropagation();return}if(W.touches.length!==1)return;let Z=l.findTarget(W),mt=l.getActiveObject();if(mt&&Z===mt&&!T(mt)){N=null;return}let Zt=V(W.touches[0]);N={kind:"tap",x:Zt.x,y:Zt.y,v:Q().slice(),target:Z},W.preventDefault(),W.stopPropagation()},{capture:!0,passive:!1}),I.addEventListener("touchmove",W=>{if(!N)return;if(W.preventDefault(),W.stopPropagation(),N.kind==="pinch"&&W.touches.length>=2){let mt=nt(W),Zt=N.v[0]*mt.d/N.d,M=(N.x-N.v[4])/N.v[0],k=(N.y-N.v[5])/N.v[0],tt=hn(Zt,Math.min(.9,(l.height-48)/Ee),3.2);At(tt,mt.x-M*tt,mt.y-k*tt);return}if(W.touches.length!==1)return;let Z=V(W.touches[0]);if(N.kind==="pinch"){N={kind:"pan",x:Z.x,y:Z.y,v:Q().slice()};return}N.kind==="tap"&&Math.hypot(Z.x-N.x,Z.y-N.y)>7&&(N.kind="pan"),N.kind==="pan"&&At(N.v[0],N.v[4]+Z.x-N.x,N.v[5]+Z.y-N.y)},{capture:!0,passive:!1}),I.addEventListener("touchend",W=>{if(N){if(W.touches.length===0){if(N.kind==="tap"){let Z=l.getActiveObject();Z&&Z.isEditing&&Z.exitEditing(),N.target?l.setActiveObject(N.target):l.discardActiveObject(),l.requestRenderAll()}N=null}else if(N.kind==="pinch"&&W.touches.length===1){let Z=V(W.touches[0]);N={kind:"pan",x:Z.x,y:Z.y,v:Q().slice()}}W.preventDefault()}},{capture:!0,passive:!1}),"ResizeObserver"in window?new ResizeObserver(Qt).observe(e("st-cv")):window.addEventListener("resize",Qt)}function te(S){h=!0;let I=Q().slice();return l.loadFromJSON(S).then(()=>{l.getObjects().forEach(ni),B_(l.getObjects()),l.discardActiveObject(),l.setViewportTransform(I),l.requestRenderAll(),h=!1,P=!1,gt(),Be()})}let pe=()=>l.getObjects().find(S=>S.role==="ground"),Ae=()=>l.getObjects().filter(S=>S.role!=="ground");function Ne(){t.dataset.count=l?String(Ae().length):"0";let S=l&&pe();t.dataset.ground=S?S.bgc+"|"+(S.pat||"none"):"",ve()}function ve(){let S=l&&l.getActiveObject();t.dataset.info=S?JSON.stringify({role:S.role||"",text:S.text||"",font:S.fontFamily||"",size:Math.round(S.fontSize||0),fill:typeof S.fill=="string"?S.fill:"",x:Math.round(yl(S).x),y:Math.round(yl(S).y),angle:Math.round(S.angle||0),pid:S.pid||"",bw:!!S.bw,w:Math.round(S.getScaledWidth()),h:Math.round(S.getScaledHeight()),zoom:S.zoomK||0,fx:S.fx||0,opacity:S.opacity,editing:!!S.isEditing,cover:!!S.cover,wrap:S.wrap==null?-1:S.wrap,even:Math.abs((S.scaleX||1)-(S.scaleY||1))<1e-6}):""}function Be(){e("st-undo").disabled=c<0||r[c]<1,e("st-redo").disabled=c<0||r[c]>=i[c].length-1,Ne()}function Re(){if(!l||c<0||h)return;let S=Q(),I=l.getActiveObject(),N=I&&I.isEditing;u=!0;let V=l.toCanvasElement(1/S[0],{left:S[4],top:S[5],width:Ie*S[0],height:Ee*S[0]});u=!1,n[c].full=V,n[c].json=l.toObject(Li),N||l.requestRenderAll(),s.onChange(c),It(c);let nt=R();nt&&U(nt)!==E&&(E=U(nt),We(nt))}function We(S){let I={pid:S.pid,bw:!!S.bw,zoomK:S.zoomK,fx:S.fx,fy:S.fy},N=nt=>(nt.objects.filter(L).forEach(W=>Object.assign(W,I)),nt),V=[];[0,1,2,3].forEach(nt=>{let W=n[nt];nt===c||!W||(i[nt]=i[nt].map(Z=>Z.indexOf('"wrap"')<0?Z:JSON.stringify(N(JSON.parse(Z)))),W.json.objects.some(L)&&(N(W.json),V.push(qe(nt,!0))))}),V.length&&Promise.all(V).then(()=>s.onChange(c))}function qe(S,I){let N=n[S],V=++a[S],nt=new er(void 0,{width:Ie,height:Ee,enableRetinaScaling:!1,renderOnAddRemove:!1});return nt.loadFromJSON(N.json).then(()=>{V===a[S]&&n[S]===N&&S!==c&&(B_(nt.getObjects()),nt.renderAll(),N.json=nt.toObject(Li),N.full=nt.toCanvasElement(1),I||s.onChange(S),It(S)),nt.dispose()})}function Lt(){if(c<0||h||!P)return;P=!1;let S=JSON.stringify(l.toObject(Li)),I=i[c];I[r[c]]!==S&&(I.length=r[c]+1,I.push(S),I.length>40&&I.shift(),r[c]=I.length-1,Be())}function F(S){h||c<0||(n[c].edited=!0,P=!0,clearTimeout(b),b=setTimeout(Re,S?60:220),clearTimeout(A),S?Lt():A=setTimeout(Lt,500),Ne(),l.requestRenderAll())}function Y(S){if(h||c<0)return;clearTimeout(A),Lt();let I=r[c]+S;I<0||I>=i[c].length||(r[c]=I,n[c].edited=!0,te(JSON.parse(i[c][I])).then(()=>{Re()}))}function ot(S){if(h)return Promise.resolve();c>=0&&l&&(clearTimeout(b),clearTimeout(A),Lt(),Re());let I=s.kindOf(S);return I!=="free"&&(n[S]=null),(I==="free"&&n[S]?Promise.resolve():pt(S,I==="free"?"name":I)).then(()=>(I!=="free"&&s.setKind(S,"free"),c=S,t.dataset.face=String(S+1),e("st-facename").textContent="Face "+(S+1)+" of 4",te(n[S].json))).then(()=>{E=U(R()),Ct(),Kt(),Cn(),s.turnTo(S),Be()})}function ht(S,I){return _=document.activeElement,t.hidden=!1,document.documentElement.classList.add("st-open"),s.onOpen(e("st-post")),l||ne(),Me(),rn(I||(B()?"":"designs")),Qt(),ot(S??0).then(()=>{Qt();try{e("st-done").focus({preventScroll:!0})}catch{}})}function at(){if(!l||t.hidden)return;let S=l.getActiveObject();S&&S.isEditing&&S.exitEditing(),l.discardActiveObject(),clearTimeout(b),clearTimeout(A),Lt(),Re(),n.forEach((I,N)=>{I&&!I.edited&&(s.setKind(N,I.origin),n[N]=null,i[N]=[],r[N]=0)}),c=-1,t.hidden=!0,document.documentElement.classList.remove("st-open"),t.removeAttribute("data-post"),s.onClose();try{_&&_.focus&&_.focus({preventScroll:!0})}catch{}_=null}function Kt(){let S=e("st-nav");if(!l)return;let I=hn(e("st-stage").clientHeight-(B()?84:92),160,640),N=Math.max(12,Math.round(I*Ie/Ee));S.textContent="",(B()?[c]:[0,1,2,3]).forEach(V=>{if(V<0)return;let nt=bt("canvas",{width:N*2,height:I*2,style:{width:N+"px",height:I+"px"}}),W=bt("button",{type:"button",class:"st-strip"+(V===c?" on":""),"aria-label":"Face "+(V+1)+(V===c?", on the table":""),"data-side":String(V),on:{click:()=>{V!==c&&ot(V)}}},nt,bt("span",{class:"st-win"}),B()?null:bt("b",{},String(V+1)));if(S.appendChild(W),V===c){let Z=mt=>{let Zt=nt.getBoundingClientRect(),M=(mt.clientY-Zt.top)/Zt.height*Ee,k=Q();At(k[0],k[4],l.height/2-M*k[0])};nt.addEventListener("pointerdown",mt=>{nt.setPointerCapture(mt.pointerId),Z(mt),nt.onpointermove=Z}),nt.addEventListener("pointerup",()=>{nt.onpointermove=null}),nt.addEventListener("pointercancel",()=>{nt.onpointermove=null})}}),[0,1,2,3].forEach(It),Ht()}function It(S){let I=e("st-nav").querySelector('[data-side="'+S+'"]');if(!I)return;let N=I.querySelector("canvas"),V=N.getContext("2d");V.setTransform(1,0,0,1,0,0),V.clearRect(0,0,N.width,N.height),n[S]&&n[S].full?V.drawImage(n[S].full,0,0,N.width,N.height):s.drawSide(S,N)}function Ht(){let S=e("st-nav").querySelector(".st-strip.on");if(!S||!l)return;let I=S.querySelector("canvas"),N=S.querySelector(".st-win"),V=Q(),nt=I.clientHeight/Ee,W=hn(-V[5]/V[0],0,Ee),Z=hn((l.height-V[5])/V[0],0,Ee);N.style.top=I.offsetTop+W*nt+"px",N.style.height=Math.max(6,(Z-W)*nt)+"px",N.hidden=Z-W>=Ee-1}function D(){let S=Q();return hn((l.height/2-S[5])/S[0],200,Ee-200)}let y=0;function H(S){S.set({top:hn(S.top+y++%4*60,60,Ee-60)}),S.setCoords(),l.add(S),l.setActiveObject(S),F(!0),gt()}let _t=()=>dt(pe()?pe().bgc:"#FFFFFF")<.4;function ft(S,I){let N=I&&I.font||w;return eo(N[1],N[2]).then(()=>{let V=new Pi(S,Object.assign({originX:"center",originY:"center",left:Ie/2,top:D(),fontFamily:N[1],fontWeight:N[2],fontSize:96,fill:_t()?"#F7F2E8":"#14213D",role:"text"},I&&I.set||{}));V.angle===0&&V.width>Ie-40&&V.set("fontSize",Math.max(20,Math.floor(V.fontSize*(Ie-40)/V.width))),H(ni(V))})}function vt(S){let I=hp.find(Zt=>Zt[0]===S),N=s.getRoles(),V=pe(),nt=V&&dt(N.accent)===dt(V.bgc)?N.text:N.accent,W=Math.min(I[3],Ie-60),Z={originX:"center",originY:"center",left:Ie/2,top:D(),fill:nt,role:"shape",art:S,strokeWidth:0},mt;S==="box"||S==="round"||S==="line"?mt=new Kn(Object.assign(Z,{width:W,height:W*I[4],rx:S==="round"?28:0,ry:S==="round"?28:0})):S==="circle"?mt=new Ji(Object.assign(Z,{radius:W/2})):(mt=new $i(I[2],Z),mt.set({scaleX:W/100,scaleY:W/100})),H(ni(mt))}function wt(S){let I=l.getActiveObject();if(I instanceof gn&&I.role==="photo"){let[mt,Zt]=C(I);I.pid=S.pid,I.setElement(I.bw?_u(S):S.color),I.zoomK=1,I.fx=.5,I.fy=.42,pi(I,mt,Zt),F(!0),gt();return}let[N,V]=Ts(S.color),nt=340,W=hn(nt*V/N,240,520),Z=new gn(S.color,{left:(Ie-nt)/2,top:D()-W/2,pid:S.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.42,stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"});pi(Z,nt,W),H(ni(Z))}function lt(S){h||c<0||S==="photo1"&&!O()||(h=!0,$().then(()=>{let I=S==="blank",N=S==="photo1",V=s.getRoles().main,nt=I?[vl(V)]:N?[vl(V),j(O(),c,!1)]:J(S);l.discardActiveObject(),l.remove(...l.getObjects()),nt.forEach(W=>l.add(W)),h=!1,!I&&!N&&(n[c].origin=S),F(!0),n[c].edited=I||N,o[c]=s.stamp?s.stamp():"",gt(),Cn(),N&&(l.setActiveObject(nt[1]),rn("photos"),gt(),Tt())}))}function ut(){let S=O();if(h||c<0||!S)return;clearTimeout(A),Lt();let I=s.getRoles().main,N=j(S,c,!0);l.discardActiveObject(),l.remove(...l.getObjects()),l.add(vl(I)),l.add(N),[0,1,2,3].forEach(V=>{if(V===c)return;let nt=ct([vl(I),j(S,V,!0)]),W=n[V]?n[V].origin:s.kindOf(V),Z=n[V]&&n[V].edited?i[V].slice(0,r[V]+1):[];n[V]={json:nt.json,full:nt.full,origin:W==="free"?"name":W,edited:!0},i[V]=Z.concat(JSON.stringify(nt.json)).slice(-40),r[V]=i[V].length-1,s.setKind(V,"free")}),E=U(N),F(!0),Kt(),l.setActiveObject(N),rn("photos"),gt(),Tt()}function Pt(S){return ht(S,"photos").then(()=>{if(n.some(I=>I&&I.edited)){let I=e("st-wrapall");if(I){I.scrollIntoView({block:"center"});try{I.focus({preventScroll:!0})}catch{}}}else ut()})}function z(S){if(h||c<0||S===c)return;clearTimeout(b),clearTimeout(A),Lt(),Re();let I=n[c],N=document.createElement("canvas");N.width=Ie,N.height=Ee,N.getContext("2d").drawImage(I.full,0,0),n[S]={json:JSON.parse(JSON.stringify(I.json)),full:N,origin:I.origin,edited:!0};let V=n[S].json.objects.filter(L);V.forEach(nt=>{nt.wrap=g[S]}),i[S]=[JSON.stringify(n[S].json)],r[S]=0,s.setKind(S,"free"),s.onChange(S),It(S),V.length&&qe(S).then(()=>{i[S]=[JSON.stringify(n[S].json)],r[S]=0})}function dt(S){let I=parseInt(String(S).slice(1),16);if(isNaN(I))return 1;let N=[I>>16&255,I>>8&255,I&255].map(V=>(V/=255,V<=.03928?V/12.92:Math.pow((V+.055)/1.055,2.4)));return .2126*N[0]+.7152*N[1]+.0722*N[2]}let rt=()=>l&&l.getActiveObject(),St=S=>()=>{let I=rt();I&&(S(I),I.setCoords(),F(!0),gt())},xt=(S,I,N,V)=>bt("button",Object.assign({type:"button",class:"st-b"+(V&&V.cls?" "+V.cls:""),title:S,"aria-label":S,"aria-pressed":V&&V.pressed!=null?String(V.pressed):null,on:{click:N}},V&&V.attrs||{}),I?bt("span",{html:ws(I,18)}):null,V&&V.iconOnly?null:bt("span",{},V&&V.text||S)),Rt=S=>S.fontSize*(S.scaleY||1)*Zw/dp;function Gt(S,I){let N=bt("div",{class:"st-sw"});return s.palette.concat([["Bright white","#FFFFFF"]]).forEach(([V,nt])=>N.appendChild(bt("button",{type:"button",class:"st-chip"+(String(S).toUpperCase()===nt.toUpperCase()?" on":""),title:V,"aria-label":V,style:{background:nt},on:{click:()=>I(nt)}}))),N.appendChild(bt("label",{class:"st-any",title:"Any color"},bt("span",{},"Any color"),bt("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(S)?S:"#14213D","aria-label":"Any color",on:{input:V=>I(V.target.value,!0)}}))),N}let se=(S,I,N,V,nt,W,Z)=>{let mt=bt("output",{},Z(nt));return bt("label",{class:"st-slide"},bt("span",{},S),bt("input",{type:"range",min:String(I),max:String(N),step:String(V),value:String(nt),"aria-label":S,on:{input:Zt=>{mt.textContent=Z(+Zt.target.value),W(+Zt.target.value)}}}),mt)};function gt(){if(!l)return;let S=rt(),I=e("st-ctx"),N=e("st-more");I.textContent="",N.textContent="",t.dataset.sel=S?S.role||"shape":"",ve();let V=Z=>()=>{d=d===Z?"":Z,q(d==="adjust"?rt():null),gt()},nt=(Z,mt)=>bt("button",{type:"button",class:"st-b st-colorbtn","aria-label":mt,title:mt,"aria-expanded":String(d==="color"),on:{click:V("color")}},bt("i",{style:{background:/^#/.test(Z)?Z:"#888"}}),bt("span",{},mt)),W=()=>[bt("span",{class:"st-gap"}),xt("Center","center",St(Z=>pp(Z,Ie/2,yl(Z).y)),{iconOnly:!0}),xt("Bring forward","up",St(Z=>l.bringObjectForward(Z)),{iconOnly:!0}),xt("Send back","down",St(Z=>{l.getObjects().indexOf(Z)>1&&l.sendObjectBackwards(Z)}),{iconOnly:!0}),xt("Copy","copy",re,{iconOnly:!0}),xt("Delete","trash",qt,{iconOnly:!0,cls:"st-del"})].forEach(Z=>I.appendChild(Z));if(!S){let Z=pe();I.appendChild(bt("span",{class:"st-tip"},B()?"Tap anything to change it. Pinch to zoom.":"Click anything on the design to change it. Double-click words to retype them.")),Z&&(I.appendChild(bt("span",{class:"st-gap"})),I.appendChild(nt(Z.bgc,"Background"))),d==="color"&&Z&&N.appendChild(Gt(Z.bgc,(mt,Zt)=>{Z.bgc=mt,aa(Z),F(!Zt),Zt||gt()}));return}if(S instanceof je){let Z=sr.find(mt=>mt[1]===S.fontFamily)||sr[0];I.appendChild(bt("input",{id:"st-words",class:"st-words",type:"text",maxlength:"80",autocomplete:"off","aria-label":"Words",value:S.text,on:{input:mt=>{S.set("text",mt.target.value.length?mt.target.value:" "),S.setCoords(),F(!1)}}})),I.appendChild(xt("Lettering: "+Z[0],"text",()=>rn("text"),{text:Z[0],cls:"st-fontbtn"})),I.appendChild(bt("span",{class:"st-size"},xt("Smaller","minus",St(mt=>mt.set("fontSize",Math.max(10,mt.fontSize/1.08))),{iconOnly:!0}),bt("output",{title:"How tall the capital letters print"},Rt(S).toFixed(1)+" in"),xt("Larger","plus",St(mt=>mt.set("fontSize",Math.min(1400,mt.fontSize*1.08))),{iconOnly:!0}))),I.appendChild(nt(S.fill,"Color")),I.appendChild(xt("Spacing",null,V("space"),{pressed:d==="space"})),I.appendChild(xt(Math.abs(S.angle%180)>45?"Set across":"Set down the post","turn",St(mt=>{let Zt=yl(mt);mt.set("angle",Math.abs(mt.angle%180)>45?0:90),pp(mt,Zt.x,Zt.y)}),{iconOnly:!0})),W(),d==="color"&&N.appendChild(Gt(S.fill,(mt,Zt)=>{S.set("fill",mt),F(!Zt),Zt||gt()})),d==="space"&&N.appendChild(se("Space between letters",-60,600,10,S.charSpacing,mt=>{S.set("charSpacing",mt),S.setCoords(),F(!1)},mt=>(mt>0?"+":"")+Math.round(mt/10)));return}if(S instanceof gn&&S.role==="photo"){I.appendChild(xt("Swap photo","swap",()=>rn("photos"))),I.appendChild(xt("Black and white",null,St(Z=>{let mt=Fi.get(Z.pid);if(!mt)return;let[Zt,M]=C(Z);Z.bw=!Z.bw,Z.setElement(Z.bw?_u(mt):mt.color),pi(Z,Zt,M)}),{pressed:!!S.bw})),I.appendChild(xt("Move and zoom","crop",V("adjust"),{pressed:d==="adjust"})),v(S)?(S.cover?I.appendChild(xt("Put it in a frame",null,St(Z=>{d="",q(null),Z.cover=!1,Z.zoomK=1,pi(Z,340,440),Z.set({left:68,top:hn(D()-220,40,Ee-480),stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),ni(Z),l.bringObjectToFront(Z),requestAnimationFrame(()=>{Ct(),jt(Z)})}))):I.appendChild(bt("span",{class:"st-tip"},"One photo around all four faces")),I.appendChild(bt("span",{class:"st-gap"})),I.appendChild(xt("Delete","trash",qt,{iconOnly:!0,cls:"st-del"}))):(I.appendChild(xt("Border",null,V("border"),{pressed:d==="border"})),I.appendChild(xt("Fill the face",null,St(Z=>{d="",q(null),Z.set({angle:0,left:0,top:0,stroke:null,strokeWidth:0,cover:!0}),Z.zoomK=1,pi(Z,Ie,Ee),l.moveObjectTo(Z,1),ni(Z),Tt()}))),W()),d==="adjust"&&(N.appendChild(se("Zoom",1,3,.02,S.zoomK||1,Z=>{S.zoomK=Z,pi(S,...C(S)),x&&(x.fx=S.fx,x.fy=S.fy),F(!1)},Z=>Math.round(Z*100)+"%")),N.appendChild(bt("span",{class:"st-tip"},S.wrap!=null?"Drag the photo to slide it around the post.":S.cover?"Drag the photo to choose the part that shows.":"Drag the photo to move it inside its frame."))),d==="border"&&(N.appendChild(se("Border",0,30,1,S.stroke?S.strokeWidth/2:0,Z=>{let mt=S.getCenterPoint();S.set({stroke:Z?S.stroke||"#FFFFFF":null,strokeWidth:2*Z,strokeUniform:!0,paintFirst:"stroke"}),S.setPositionByOrigin(mt,"center","center"),S.setCoords(),F(!1)},Z=>Z?(Z/dp).toFixed(2)+" in":"None")),N.appendChild(Gt(S.stroke||"#FFFFFF",(Z,mt)=>{S.strokeWidth||S.set({strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),S.set("stroke",Z),F(!mt),mt||gt()})));return}S instanceof gn?I.appendChild(bt("span",{class:"st-tip"},"Drag to move. Pull a corner to resize.")):(I.appendChild(nt(S.fill,"Color")),I.appendChild(xt("See-through",null,V("fade"),{pressed:d==="fade"})),d==="color"&&N.appendChild(Gt(S.fill,(Z,mt)=>{S.set("fill",Z),F(!mt),mt||gt()})),d==="fade"&&N.appendChild(se("See-through",0,90,5,Math.round((1-S.opacity)*100),Z=>{S.set("opacity",1-Z/100),F(!1)},Z=>Z+"%"))),W()}function qt(){let S=rt();S&&(l.remove(S),l.discardActiveObject(),F(!0),gt())}function re(){let S=rt();!S||v(S)||S.clone(Li).then(I=>{I.set({left:S.left+26,top:S.top+40}),l.add(ni(I)),l.setActiveObject(I),F(!0),gt()})}let Ft=[["designs","Designs","designs"],["text","Lettering","text"],["photos","Photos","photos"],["art","Artwork","art"],["ground","Background","ground"],["post","Post","post"]];function Me(){let S=e("st-rail");S.textContent="",Ft.forEach(([I,N,V])=>S.appendChild(bt("button",{type:"button",class:"st-tab"+(I==="post"?" st-tab-post":""),"data-tab":I,"aria-pressed":"false",on:{click:()=>{I==="post"?(t.toggleAttribute("data-post"),rn(""),Xe()):rn(f===I&&B()?"":I)}}},bt("span",{html:ws(V,22)}),bt("span",{},N))))}function Xe(){e("st-rail").querySelectorAll(".st-tab").forEach(S=>S.setAttribute("aria-pressed",String(S.dataset.tab===f||S.dataset.tab==="post"&&t.hasAttribute("data-post"))))}function rn(S){f=S,t.dataset.tab=S,S&&t.removeAttribute("data-post"),Xe(),Cn(),requestAnimationFrame(Qt)}let Nn=(S,...I)=>bt("section",{class:"st-sec"},S?bt("h3",{},S):null,...I);function Cn(){let S=e("st-panel");if(S&&(S.textContent="",!(!f||c<0))){if(S.appendChild(bt("div",{class:"st-phead"},bt("strong",{},(Ft.find(I=>I[0]===f)||[])[1]||""),xt("Close","close",()=>rn(""),{iconOnly:!0,cls:"st-pclose"}))),f==="designs"){let I=s.fields(),N=bt("div",{class:"st-seg"});I.occasions.forEach(([mt,Zt])=>N.appendChild(bt("button",{type:"button","aria-pressed":String(I.occasion===mt),on:{click:()=>{s.setField("occasion",mt),Et().then(Cn)}}},Zt)));let V=0,nt=mt=>Zt=>{s.setField(mt,Zt.target.value),clearTimeout(V),V=setTimeout(()=>Et().then(ua),350)};S.appendChild(Nn("Make it yours",N,bt("div",{class:"st-two"},bt("label",{},bt("span",{},"Name"),bt("input",{type:"text",maxlength:"16",value:I.name,placeholder:I.namePlaceholder,on:{input:nt("name")}})),bt("label",{},bt("span",{},I.second.label),bt("input",{type:"text",inputmode:"numeric",maxlength:"4",value:I.second.value,placeholder:I.second.placeholder,on:{input:nt(I.second.key)}}))),bt("div",{class:"st-lab"},"Main color"),El(I.main,"main"),bt("div",{class:"st-lab"},"Second color"),El(I.accent,"accent")));let W=bt("div",{class:"st-cards",id:"st-cards"});s.kinds.forEach(([mt,Zt])=>W.appendChild(bt("button",{type:"button",class:"st-card"+(n[c]&&n[c].origin===mt&&!n[c].edited?" on":""),"data-kind":mt,on:{click:()=>lt(mt)}},bt("canvas",{width:176,height:520}),bt("span",{},Zt)))),W.appendChild(bt("button",{type:"button",class:"st-card","data-kind":"photo1",on:{click:()=>lt("photo1")}},bt("canvas",{width:176,height:520}),bt("span",{},"Full photo"))),W.appendChild(bt("button",{type:"button",class:"st-card","data-kind":"wrap",on:{click:ha(ut)}},bt("canvas",{width:176,height:520}),bt("span",{},"Wrap-around photo"))),W.appendChild(bt("button",{type:"button",class:"st-card","data-kind":"blank",on:{click:()=>lt("blank")}},bt("canvas",{width:176,height:520}),bt("span",{},"Blank"))),S.appendChild(Nn("Designs for face "+(c+1),W,bt("p",{class:"st-fine"},"Pick one, then change anything on it. Undo brings the last design back.")));let Z=bt("div",{class:"st-seg"});[0,1,2,3].filter(mt=>mt!==c).forEach(mt=>Z.appendChild(bt("button",{type:"button",on:{click:Zt=>{z(mt),Zt.target.textContent="Face "+(mt+1)+" done"}}},"Face "+(mt+1)))),S.appendChild(Nn("Use this design on another face too",Z)),ua()}else if(f==="text"){let I=bt("div",{class:"st-adds"});[["Add a headline","YOUR HEADLINE",{font:sr[0]}],["Add a small line","A LINE OF SMALL WORDS",{font:sr[1],set:{fontSize:34,charSpacing:260}}],["Add words down the post","DOWN THE POST",{font:sr[0],set:{angle:90,fontSize:300}}],["Add script","With love",{font:sr[8],set:{fontSize:110}}]].forEach(([W,Z,mt])=>I.appendChild(bt("button",{type:"button",class:"st-add",style:{fontFamily:`"${mt.font[1]}"`,fontWeight:String(mt.font[2])},on:{click:()=>ft(Z,mt)}},W)));let N=bt("div",{class:"st-fonts"}),V=rt(),nt=V instanceof je?V.fontFamily:w[1];sr.forEach(W=>{eo(W[1],W[2]),N.appendChild(bt("button",{type:"button",class:"st-font"+(W[1]===nt?" on":""),on:{click:()=>{w=W;let Z=rt();Z instanceof je?eo(W[1],W[2]).then(()=>{Z.set({fontFamily:W[1],fontWeight:W[2]}),Z.setCoords(),F(!0),gt(),Cn()}):ft(W[0]==="Formal script"||W[0]==="Retro script"||W[0]==="Handwritten"?"Your words":"YOUR WORDS",{font:W})}}},bt("span",{style:{fontFamily:`"${W[1]}"`,fontWeight:String(W[2])}},s.fields().name||s.fields().namePlaceholder),bt("small",{},W[0])))}),S.appendChild(Nn("Add words",I)),S.appendChild(Nn(V instanceof je?"Lettering for the words you picked":"Lettering",N))}else if(f==="photos"){let I=rt(),N=I instanceof gn&&I.role==="photo",V=bt("div",{class:"st-photos"}),nt=bt("input",{type:"file",accept:"image/*",multiple:!0,class:"st-file",id:"st-file",on:{change:W=>{s.addPhotos(W.target.files).then(Z=>{W.target.value="",(Z.length===1||Z.length&&v(rt()))&&wt(oa(Z[0])),Cn()})}}});s.library().forEach(W=>{let Z=oa(W),mt=bt("canvas",{width:180,height:180}),Zt=mt.getContext("2d"),[M,k]=Ts(Z.color),tt=Math.max(180/M,180/k);Zt.drawImage(Z.color,(M-180/tt)/2,(k-180/tt)*.4,180/tt,180/tt,0,0,180,180),V.appendChild(bt("button",{type:"button",class:"st-photo","aria-label":Z.sample?"Sample photo":"Your photo",on:{click:()=>wt(Z)}},mt,Z.sample?bt("small",{},"Sample"):null))}),S.appendChild(Nn(N?"Swap the photo you picked":"Photos",bt("label",{class:"st-upload",for:"st-file"},bt("span",{html:ws("upload",20)}),bt("span",{},"Add your photos")),nt,bt("p",{class:"st-fine"},N?v(I)?"Tap a photo to use it instead. Your photos stay on this device.":"Tap a photo to put it in the frame you picked.":"Tap a photo to place it. Your photos stay on this device."),V)),S.appendChild(Nn("Just a photo",bt("div",{class:"st-adds"},bt("button",{type:"button",class:"st-add st-plain",id:"st-one",on:{click:()=>lt("photo1")}},"Fill this face with one photo"),bt("button",{type:"button",class:"st-add st-plain",id:"st-wrapall",on:{click:ha(ut)}},"Wrap one photo around the post")),bt("p",{class:"st-fine"},"The photo covers everything, edge to edge. A tall photo with its subject in the middle works best. Move and zoom chooses the part that shows.")))}else if(f==="art"){let I=bt("div",{class:"st-arts"});hp.forEach(([N,V,nt])=>I.appendChild(bt("button",{type:"button",class:"st-art",title:V,"aria-label":V,on:{click:()=>vt(N)},html:`<svg viewBox="0 0 100 100" aria-hidden="true">${nt?`<path d="${nt}"/>`:N==="circle"?'<circle cx="50" cy="50" r="40"/>':N==="line"?'<rect x="8" y="46" width="84" height="8"/>':`<rect x="12" y="24" width="76" height="52" rx="${N==="round"?12:0}"/>`}</svg>`}))),S.appendChild(Nn("Artwork",I,bt("p",{class:"st-fine"},"Tap a piece to drop it on the design, then give it any color.")))}else if(f==="ground"){let I=pe();if(!I)return;let N=bt("div",{class:"st-pats"});U_.forEach(([V,nt])=>{let W=V==="none"?bt("canvas",{width:96,height:96}):up(V,I.bgc,I.fg);if(V==="none"){let Z=W.getContext("2d");Z.fillStyle=I.bgc,Z.fillRect(0,0,96,96)}N.appendChild(bt("button",{type:"button",class:"st-pat"+((I.pat||"none")===V?" on":""),on:{click:()=>{I.pat=V,aa(I),F(!0),Cn()}}},W,bt("span",{},nt)))}),S.appendChild(Nn("Background color",Gt(I.bgc,(V,nt)=>{I.bgc=V,aa(I),F(!nt),nt||(gt(),Cn())}))),S.appendChild(Nn("Pattern",N)),I.pat&&I.pat!=="none"&&S.appendChild(Nn("Pattern color",Gt(I.fg,(V,nt)=>{I.fg=V,aa(I),F(!nt),nt||Cn()})))}}}function El(S,I){let N=bt("div",{class:"st-sw"});return s.palette.forEach(([V,nt])=>N.appendChild(bt("button",{type:"button",class:"st-chip"+(S===V?" on":""),title:V,"aria-label":V,"aria-pressed":String(S===V),style:{background:nt},on:{click:()=>{s.setField(I,V),Et().then(Cn)}}}))),N}function ha(S){return I=>{let N=I.currentTarget,V=N.querySelector("span")||N;if(N.dataset.ask){delete N.dataset.ask,S();return}N.dataset.ask="1",N.dataset.was=V.textContent,V.textContent="Replaces all four faces. Tap again.",setTimeout(()=>{N.dataset.ask&&(delete N.dataset.ask,V.textContent=N.dataset.was)},6e3)}}function ua(){let S=e("st-cards");S&&S.querySelectorAll(".st-card").forEach(I=>{let N=I.querySelector("canvas");if(I.dataset.kind==="photo1"||I.dataset.kind==="wrap"){let V=N.getContext("2d"),nt=O();if(V.fillStyle=s.getRoles().main,V.fillRect(0,0,N.width,N.height),nt){let W=nt.color,[Z,mt]=Ts(W),Zt=Math.max(N.width/Z,N.height/mt);V.drawImage(W,(Z-N.width/Zt)/2,(mt-N.height/Zt)*.4,N.width/Zt,N.height/Zt,0,0,N.width,N.height)}I.dataset.kind==="wrap"&&(V.fillStyle="#fff",[1,2,3].forEach(W=>V.fillRect(Math.round(W*N.width/4)-2,0,4,N.height)))}else if(I.dataset.kind==="blank"){let V=N.getContext("2d");V.fillStyle=s.getRoles().main,V.fillRect(0,0,N.width,N.height)}else s.drawKind(I.dataset.kind,N)})}e("st-undo").innerHTML=ws("undo")+"<span>Undo</span>",e("st-redo").innerHTML=ws("redo")+"<span>Redo</span>",e("st-close").innerHTML=ws("back")+"<span>Back</span>",e("st-prev").innerHTML=ws("left",18),e("st-next").innerHTML=ws("right",18),e("st-undo").addEventListener("click",()=>Y(-1)),e("st-redo").addEventListener("click",()=>Y(1)),e("st-done").addEventListener("click",at),e("st-close").addEventListener("click",at),e("st-prev").addEventListener("click",()=>ot((c+3)%4)),e("st-next").addEventListener("click",()=>ot((c+1)%4)),e("st-zout").addEventListener("click",()=>{let S=Q();Mt(l.width/2,l.height/2,S[0]/1.35)}),e("st-zin").addEventListener("click",()=>{let S=Q();Mt(l.width/2,l.height/2,S[0]*1.35)}),e("st-zfit").addEventListener("click",()=>{Q()[0]<=Math.min(.9,(l.height-48)/Ee)+.001?Ct():zt()}),document.addEventListener("keydown",S=>{if(t.hidden||!l||document.querySelector("dialog[open]"))return;let I=rt(),N=/^(INPUT|SELECT|TEXTAREA)$/.test(S.target.tagName)||I&&I.isEditing,V=S.ctrlKey||S.metaKey,nt=S.key.toLowerCase();if(S.key==="Escape"){if(I&&I.isEditing)return;I?(l.discardActiveObject(),l.requestRenderAll()):at();return}if(!N)if(V&&nt==="z")S.preventDefault(),Y(S.shiftKey?1:-1);else if(V&&nt==="y")S.preventDefault(),Y(1);else if(V&&nt==="c"&&I&&!v(I))I.clone(Li).then(W=>{m=W});else if(V&&nt==="v"&&m)S.preventDefault(),m.clone(Li).then(W=>{W.set({left:W.left+26,top:hn(D()-100,0,Ee-100)}),l.add(ni(W)),l.setActiveObject(W),F(!0),gt()});else if(V&&nt==="d"&&I)S.preventDefault(),re();else if((S.key==="Delete"||S.key==="Backspace")&&I)S.preventDefault(),qt();else if(I&&/^arrow/.test(nt)&&v(I)){S.preventDefault();let W=S.shiftKey?40:8,[Z,mt]=Ts(I.getElement());I.fx-=(nt==="arrowleft"?-W:nt==="arrowright"?W:0)/(I.scaleX*Z),I.fy-=(nt==="arrowup"?-W:nt==="arrowdown"?W:0)/(I.scaleY*mt),pi(I,Ie,Ee),x&&x.o===I&&(x.fx=I.fx,x.fy=I.fy),F(!1)}else if(I&&/^arrow/.test(nt)){S.preventDefault();let W=S.shiftKey?10:2;I.set({left:I.left+(nt==="arrowleft"?-W:nt==="arrowright"?W:0),top:I.top+(nt==="arrowup"?-W:nt==="arrowdown"?W:0)}),I.setCoords(),F(!1)}else nt==="+"||nt==="="?e("st-zin").click():nt==="-"&&e("st-zout").click()});let ki=S=>(S&&Array.isArray(S.objects)?S.objects:[]).filter(I=>I.type==="Photo"&&I.pid).map(I=>I.pid),da=S=>{let I=[];return(S.objects||[]).forEach(N=>{if(N.fontFamily){let V=N.fontFamily+"|"+(N.fontWeight||400);I.indexOf(V)<0&&I.push(V)}}),I.map(N=>N.split("|"))};function Al(){c>=0&&l&&!h&&n[c]&&(n[c].json=l.toObject(Li));let S=n.map(N=>N?N.edited?{json:N.json,origin:N.origin}:{origin:N.origin}:null),I={};return S.forEach(N=>{N&&N.json&&ki(N.json).forEach(V=>{let nt=Fi.get(V);nt&&/^x/.test(V)&&(I[V]=nt.color)})}),{faces:S,made:I}}function Rl(S,I){Object.keys(I||{}).forEach(V=>{Fi.has(V)||Fi.set(V,{pid:V,color:I[V],gray:I[V]})}),s.library().forEach(oa);let N=[];return(S||[]).forEach((V,nt)=>{if(nt>3||!V||!V.json||!Array.isArray(V.json.objects))return;let W=Object.assign({},V.json,{objects:V.json.objects.filter(Z=>!(Z.type==="Photo"&&Z.role==="art"&&!Fi.has(Z.pid)))});N.push(Promise.all([$()].concat(da(W).map(([Z,mt])=>eo(Z,/^\d+$/.test(mt)?+mt:mt)))).then(()=>(n[nt]={json:W,full:null,origin:V.origin||"name",edited:!0},i[nt]=[JSON.stringify(W)],r[nt]=0,qe(nt,!0))).catch(()=>{n[nt]=null}))}),Promise.all(N).then(()=>N.length)}function ro(){let S=new Set;return n.forEach((I,N)=>{!I||!I.edited||ki(N===c&&l&&!h?l.toObject(Li):I.json).forEach(V=>S.add(V))}),S}return{art:n,open:ht,openWrap:Pt,close:at,start:pt,refresh:Et,show:ot,dump:Al,restore:Rl,pids:ro,forget:S=>{Fi.delete(S)},isOpen:()=>!t.hidden,store:Fi}}var nT="memory-post";var H_=["kv","pics"],no=null;function iT(){return no||(no=new Promise((s,t)=>{let e;try{e=window.indexedDB.open(nT,1)}catch(n){t(n);return}e.onupgradeneeded=()=>{let n=e.result;H_.forEach(i=>{n.objectStoreNames.contains(i)||n.createObjectStore(i)})},e.onsuccess=()=>{let n=e.result;n.onversionchange=()=>{n.close(),no=null},s(n)},e.onerror=()=>t(e.error),e.onblocked=()=>t(new Error("blocked"))}),no.catch(()=>{no=null}),no)}function Sl(s,t,e){return iT().then(n=>new Promise((i,r)=>{let o=n.transaction(s,t),a,l=e(o.objectStore(s));l&&(l.onsuccess=()=>{a=l.result}),o.oncomplete=()=>i(a),o.onerror=()=>r(o.error),o.onabort=()=>r(o.error||new Error("aborted"))}))}var gp=(s,t)=>Sl(s,"readonly",e=>e.get(t)),_p=(s,t,e)=>Sl(s,"readwrite",n=>n.put(e,t)),xp=(s,t)=>Sl(s,"readwrite",e=>e.delete(t)),W_=s=>Sl(s,"readonly",t=>t.getAllKeys()),vu=()=>Promise.all(H_.map(s=>Sl(s,"readwrite",t=>t.clear()))),X_=(s,t)=>new Promise((e,n)=>{try{s.toBlob(i=>{if(!i){n(new Error("no picture"));return}let r=new FileReader;r.onload=()=>e({buf:r.result,type:i.type}),r.onerror=()=>n(r.error),r.readAsArrayBuffer(i)},t,.9)}catch(i){n(i)}}),j_=s=>new Promise((t,e)=>{let n=URL.createObjectURL(new Blob([s.buf],{type:s.type})),i=new Image;i.onload=()=>{URL.revokeObjectURL(n),t(i)},i.onerror=()=>{URL.revokeObjectURL(n),e(new Error("unreadable"))},i.src=n});var Y_="#14213D",vp="'Barlow Condensed','Arial Narrow','Roboto Condensed',sans-serif",q_="'Barlow',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif",Z_={portrait:[1080,1350],story:[1080,1920]},yu=-.7,J_=Math.cos(.115);function rT(s,t,e,n,i,r){let o=e;for(let a of t)r!==!1&&s.fillText(a,o,n),o+=s.measureText(a).width+i;return o-i-e}function oT(s,t,e,n,i,r,o){let a=i;for(;a>r&&(s.font=e+" "+a+"px "+n,!t.every(l=>s.measureText(l).width<=o));a-=2);return s.font=e+" "+a+"px "+n,a}function aT(s,t,e,n,i,r){let o=e-t,a=i-n;if(o<8||a<=r)return null;let l;try{l=s.getContext("2d").getImageData(t,n,o,a).data}catch{return null}let c=x=>l[x]*.3+l[x+1]*.59+l[x+2]*.11,h=new Float64Array(a+1);for(let x=0;x<a;x++){let m=0;if(x>=2)for(let _=0;_<o;_+=2){let b=(x*o+_)*4,A=Math.abs(c(b)-c(b-2*o*4));A>6&&(m+=A)}h[x+1]=h[x]+m}let u=x=>h[x+r]-h[x],d=0;for(let x=0;x+r<=a;x+=4)u(x)>u(d)&&(d=x);let f=0;for(let x=d;x<d+r;x++)f+=(h[x+1]-h[x])*(x+.5);let p=u(d)>0?f/u(d):d+r/2;return{top:u(0),best:u(d),y:Math.max(0,Math.min(a-r,Math.round(p-r/2)))}}function K_(s,t){let e=String(s||"").trim().replace(/\s+/g," "),n=String(t||"").toLowerCase()+" post";return e?[e+(/s$/i.test(e)?"\u2019":"\u2019s"),n]:[n.charAt(0).toUpperCase()+n.slice(1)]}function $_(s){let[t,e]=Z_[s.shape]||Z_.portrait,n=e/t>1.5,i=document.createElement("canvas");i.width=t,i.height=e;let r=i.getContext("2d"),o=64,a=116,l=e-a,c=l-(n?150:106);r.textAlign="left",r.textBaseline="alphabetic";let h=0,u=0,d=0,f=0,p=(U,O,j)=>{h=oT(r,s.lines,"800",vp,j,60,U),u=Math.round(h*.93),d=O+Math.round(h*.74),f=d+(s.lines.length-1)*u+Math.round(h*.2)};n&&p(t-2*o,104,132);let x=n?f+44:50,m=(c-x)/(s.height*J_),_=c-Math.round(m*.2),b=r.createLinearGradient(0,0,0,_);b.addColorStop(0,"#CFE0F4"),b.addColorStop(1,"#EEF3F9"),r.fillStyle=b,r.fillRect(0,0,t,_),b=r.createLinearGradient(0,_,0,l),b.addColorStop(0,"#37804A"),b.addColorStop(1,"#2A6F43"),r.fillStyle=b,r.fillRect(0,_,t,l-_);let A=Math.round(m*.66),w=t-Math.round(m*.3),E=s.two?[w-Math.round(m*.37),w]:[w],P=s.two?[yu,yu-Math.PI]:[yu],g=null;for(let U=0;U<E.length;U++){let O=s.still(A,l,P[U],m,c);if(!O)return null;U||(g=O),r.drawImage(O,Math.round(E[U]-A/2),0)}s.two&&(r.fillStyle="#FFFFFF",r.textAlign="center",r.font="600 "+(n?30:25)+"px "+q_,["Front","Back"].forEach((U,O)=>r.fillText(U,E[O],c+(n?82:62))),r.textAlign="left");let v=Math.round(E[0]-m*.115-52-o);n||p(v,58,112),r.font="800 "+h+"px "+vp,r.fillStyle=Y_,s.lines.forEach((U,O)=>r.fillText(U,o-2,d+O*u));let T=Math.min(v,n?520:470),C=o,R=n?x+6:f+40,L=Math.min(l-(n?120:46)-R,Math.round(T*(n?2.1:1.9)));if(T>300&&L>280){let U=T/.3,O=Math.round(L*m/U),j=Math.round(34+s.height*J_*U),q=Math.round(x+m*.035),B=Math.round(c-m*.05),$=Math.round(m*.07),J=aT(g,Math.round(A/2)-$,Math.round(A/2)+$,q,B,O);J&&J.top<J.best*.35&&(j=Math.round((c-(q+J.y))*U/m));let ct=s.still(T,L,yu,U,j);if(!ct)return null;r.save(),r.shadowColor="rgba(20,33,61,.30)",r.shadowBlur=30,r.shadowOffsetY=12,r.fillStyle="#FFFFFF",r.fillRect(C-10,R-10,T+20,L+20),r.restore(),b=r.createLinearGradient(0,R,0,R+L),b.addColorStop(0,"#C6DAF2"),b.addColorStop(1,"#E7EFF9"),r.fillStyle=b,r.fillRect(C,R,T,L),r.drawImage(ct,C,R)}return r.fillStyle=Y_,r.fillRect(0,l,t,a),r.fillStyle="#FFFFFF",r.textAlign="left",r.font="700 38px "+vp,rT(r,"MEMORY POST",o,l+72,5.3),r.font="500 27px "+q_,r.textAlign="right",r.fillText("Preview made at memorypostco.com",t-o,l+69),i}function Q_(s){let t=s.dialog;if(!t||typeof t.showModal!="function")return null;let e=w=>t.querySelector("#"+w),n=e("pic-img"),i=e("pic-wait"),r=e("pic-share"),o=e("pic-save"),a=e("pic-note"),l=Array.from(t.querySelectorAll("[data-shape]")),c="",h=null,u="portrait",d=null,f=0;function p(){c&&URL.revokeObjectURL(c),c="",h=null,n.hidden=!0,n.removeAttribute("src"),o.hidden=!0,o.removeAttribute("href"),r.hidden=!0,a.textContent=""}let x=()=>{try{return!!(h&&navigator.share&&navigator.canShare&&navigator.canShare({files:[h]}))}catch{return!1}};function m(){let w=++f;p(),i.hidden=!1,i.textContent="Making your picture",t.dataset.state="making";let E=["800 96px 'Barlow Condensed'","700 38px 'Barlow Condensed'","500 27px 'Barlow'","600 25px 'Barlow'"];(document.fonts&&document.fonts.load?Promise.all(E.map(g=>document.fonts.load(g))).catch(()=>{}):Promise.resolve()).then(()=>new Promise(g=>requestAnimationFrame(()=>setTimeout(g,0)))).then(()=>{if(w!==f)return null;let g=s.picture(u);if(!g||!g.canvas)throw new Error("no picture");return new Promise((v,T)=>g.canvas.toBlob(C=>C?v([C,g]):T(new Error("no picture")),"image/jpeg",.92))}).then(g=>{if(!g||w!==f)return;let v=g[0],T=g[1],C=s.fileName();c=URL.createObjectURL(v);try{h=new File([v],C,{type:"image/jpeg"})}catch{h=null}n.alt=T.alt,n.width=T.canvas.width,n.height=T.canvas.height,n.src=c,n.hidden=!1,o.href=c,o.setAttribute("download",C),o.hidden=!1,r.hidden=!x(),i.hidden=!0,Object.assign(t.dataset,{state:"ready",title:T.title,views:String(T.views),shape:u,bytes:String(v.size)})}).catch(()=>{w===f&&(i.hidden=!1,i.textContent="The picture could not be made on this device.",t.dataset.state="failed")})}function _(w){d=w||document.activeElement,t.open||t.showModal(),m()}function b(){t.open&&t.close()}function A(){if(f++,p(),t.dataset.state="",d&&d.focus&&document.contains(d))try{d.focus({preventScroll:!0})}catch{}d=null}return t.addEventListener("close",A),e("pic-close").addEventListener("click",b),t.addEventListener("click",w=>{w.target===t&&b()}),l.forEach(w=>w.addEventListener("click",()=>{u!==w.dataset.shape&&(u=w.dataset.shape,l.forEach(E=>E.setAttribute("aria-pressed",E===w?"true":"false")),m())})),r.addEventListener("click",()=>{if(!h)return;a.textContent="";let w;try{w=navigator.share({files:[h],title:"Memory Post preview"})}catch(E){w=Promise.reject(E)}Promise.resolve(w).catch(E=>{E&&E.name==="AbortError"||(a.textContent="Sharing did not open here. Save the picture instead.")})}),{open:_,close:b}}var Cu=.0254,Cp=5.25*Cu,wu=34.5*Cu,ox=0,ax=.03,yp=.045,Su=.15,Ep=ax+2*wu+ox,Ap=.005,Rp=.022,bu=Cp+.009,bl=Ep+Ap+Rp,so=384,Mu=Math.round(so*34.5/5.25),Tu=so*.1875/5.25,ue=476,ss=3369,si=6738,Cs=70,Sp=(so-2*Tu)/ue,le=Cs,fe=ss+Cs,Pp=[["Navy","#14213D"],["Royal","#1F4FBF"],["Sky","#6CB4EE"],["Forest","#14532D"],["Kelly","#1E9E4A"],["Teal","#178F8B"],["Maroon","#6B1524"],["Red","#B3202A"],["Coral","#EF6A55"],["Orange","#F26B21"],["Gold","#F2A900"],["Purple","#4B2A85"],["Pink","#E75480"],["Black","#161616"],["Silver","#B8BCC2"],["White","#F7F2E8"]],Dp=Object.fromEntries(Pp),tx="#F7F2E8",lr="#14213D",Ni="#FFD23F",Hn="#F7F2E8",ii={graduation:{label:"Graduation",main:"Navy",accent:"Gold",name:"Maya",samples:["grad","caps","skyline","field","grad"]},birthday:{label:"Birthday",main:"Coral",accent:"Teal",name:"Eli",samples:["balloons","cake","bokeh","road","balloons"]},"senior-night":{label:"Senior night",main:"Maroon",accent:"Black",name:"Jordan",samples:["field","bokeh","skyline","field","road"]}};function ex(s){let t=parseInt(s.slice(1),16),e=[t>>16&255,t>>8&255,t&255].map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*e[0]+.7152*e[1]+.0722*e[2]}function ca(s,t){let e=ex(s),n=ex(t);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}var Tl=s=>ca(tx,s)>=2.4?tx:lr;function gi(s,t,e,n){return ca(s,t)>=e?s:n}var yt={occasion:"graduation",name:"",year:"2027",school:"",age:"10",number:"12",sport:"",team:"",line1:"",line2:"",line3:"",main:null,accent:null,photos:[],bw:!0,faces:["name","photos","name","photos"],msg:"",more:"",from:"",line4:"",link:"",signed:!1},Gn=(s,t)=>String(s||"").trim()||t,Es={};function Cl(){let s=ii[yt.occasion],t=Dp[yt.main||s.main],e=Dp[yt.accent||s.accent],n=Tl(t),i=gi(e,t,2.2,n),r=ca(t,Hn)>=1.6?t:ca(e,Hn)>=1.6?e:lr,o=Tl(r),a=gi(e,r,2.2,o),l=ca(t,Hn)>=3?t:ca(e,Hn)>=3?e:lr,c=Tl(e);return{main:t,accent:e,text:n,accentText:i,blockBg:r,blockInk:o,blockAccent:a,caption:l,accentInk:c}}var sn=null,Np=.7,Pu=(s,t,e,n,i,r,o,a,l,c)=>{String(s).trim()&&sn.push({t:"text",text:String(s),cx:t,cy:e,size:n,sp:i,weight:r,family:o,fill:a,angle:l||0,w:c||0})};function lx(s,t,e,n,i,r){let o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*i)),o.height=Math.max(1,Math.round(n*i));let a=o.getContext("2d");a.scale(i,i),a.translate(-s,-t);let l=sn;sn=null;try{r(a)}finally{sn=l}return o}function dn(s,t,e,n,i,r){if(sn){sn.push({t:"rect",x:t,y:e,w:n,h:i,fill:r});return}s.fillStyle=r,s.fillRect(t,e,n,i)}function bp(s,t,e,n){dn(s,0,t,ue,e,n)}function or(s,t,e,n){bp(s,0,Cs,t),bp(s,ss-Cs,2*Cs,e),bp(s,si-Cs,Cs,n)}function ar(s,t,e,n,i=3){dn(s,(ue-e)/2,t,e,i,n)}function nx(s,t,e){let n=0;for(let i of t)n+=s.measureText(i).width+e;return n-e}function kp(s,t,e,n,i){for(let r of t)s.fillText(r,e,n),e+=s.measureText(r).width+i}function Du(s,t,e,n,i,r){s.font=e(n);let o=nx(s,t,i*n);return o>r&&(n=Math.max(8,Math.floor(n*r/o)),s.font=e(n),o=nx(s,t,i*n)),{size:n,w:o}}function As(s,t,e,n,i=40,r=.3,o=600,a="Barlow",l=1.75){s.fillStyle=n,s.textAlign="left",s.textBaseline="alphabetic",t.forEach((c,h)=>{let u=String(c).toUpperCase(),d=Du(s,u,p=>`${o} ${p}px "${a}"`,i,r,ue-44),f=e+h*l*i+1.275*i;if(sn){Pu(u,ue/2,f-Np*d.size/2,d.size,r,o,a,n,0,d.w);return}kp(s,u,(ue-d.w)/2,f,r*d.size)})}function io(s,t,e,n,i,r,o=800,a=.03){let l=String(t).toUpperCase(),c=Du(s,l,u=>`${o} ${u}px "Barlow Condensed"`,i,a,n),h=.7*c.size;if(sn){Pu(l,ue/2,e+n/2,c.size,a,o,"Barlow Condensed",r,90,c.w);return}s.save(),s.translate(ue/2,e+(n-c.w)/2),s.rotate(Math.PI/2),s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",kp(s,l,0,h/2,a*c.size),s.restore()}function rr(s,t,e,n,i){let r=Du(s,t,a=>`800 ${a}px "Barlow Condensed"`,n,0,ue-30),o=e+.83*n-(n-r.size)*.35;if(sn){Pu(t,ue/2,o-Np*r.size/2,r.size,0,800,"Barlow Condensed",i);return}s.fillStyle=i,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,ue/2,o)}function Fn(s,t,e,n,i,r,o,a=44){dn(s,34,t,ue-68,e,n),i=i.filter(h=>String(h).trim());let l=1.5*a,c=t+(e-i.length*l)/2;s.textAlign="left",s.textBaseline="alphabetic",i.forEach((h,u)=>{let d=String(h).toUpperCase(),f=Du(s,d,m=>`700 ${m}px "Barlow Condensed"`,a,.14,ue-68-36),p=c+u*l+1.15*a-(a-f.size)*.3,x=o&&u===0?o:r;if(sn){Pu(d,ue/2,p-Np*f.size/2,f.size,.14,700,"Barlow Condensed",x,0,f.w);return}s.fillStyle=x,kp(s,d,(ue-f.w)/2,p,.14*f.size)})}var mi=(s,t,e,n)=>As(s,[t],e,n,30,.34,600);function lT(s,t,e,n,i,r,o=.38){let a=t.naturalWidth||t.width,l=t.naturalHeight||t.height,c=Math.max(i/a,r/l),h=i/c,u=r/c;s.drawImage(t,(a-h)/2,(l-u)*o,h,u,e,n,i,r)}function _n(s,t,e,n){let r=ue-68,o=yt.photos.length>0,a=o?yt.photos[t]:Es[ii[yt.occasion].samples[t]],l=a?o?yt.bw?a.gray:a.color:a:null;if(sn){sn.push({t:"photo",entry:a?o?a:Fp(ii[yt.occasion].samples[t]):null,bw:!!(o&&yt.bw),x:34,y:e,w:r,h:n,frame:5,bias:.38});return}if(dn(s,29,e-5,r+10,n+10,"#FFFFFF"),l){lT(s,l,34,e,r,n);return}dn(s,34,e,r,n,"#E1DACB"),s.strokeStyle="#A99F8C",s.lineWidth=3,s.setLineDash([14,12]),s.strokeRect(48,e+14,r-28,n-28),s.setLineDash([]),dn(s,ue/2-26,e+n/2-3,52,6,"#A99F8C"),dn(s,ue/2-3,e+n/2-26,6,52,"#A99F8C")}function cT(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ip(s,t,e,n,i,r){if(sn){sn.push({t:"art",canvas:lx(0,e-24,ue,n-e+48,.5,a=>Ip(a,t,e,n,i,r)),x:0,y:e-24,w:ue,h:n-e+48,loose:!0});return}let o=cT(r);for(let a=0;a<i;a++){let l=o()<.5?8+o()*88:ue-96+o()*88,c=e+o()*(n-e),h=9+o()*11;s.fillStyle=t[Math.floor(o()*t.length)],o()<.5?(s.beginPath(),s.arc(l+h/2,c+h/2,h/2,0,6.2832),s.fill()):(s.save(),s.translate(l+h*.75,c+h*.28),s.rotate((o()-.5)*2.1),s.fillRect(-h*.75,-h*.28,h*1.5,h*.55),s.restore())}}var hT=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one"],uT=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),dT={graduation:{A(s,t,e){dn(s,0,0,ue,si,t.main),or(s,t.accent,t.accent,t.accent),As(s,["Congrats, grad"],le+150,t.accentText,32,.26),ar(s,le+250,90,t.accentText),io(s,e.name,le+420,1830,560,t.text),ar(s,le+2330,90,t.accentText),As(s,[e.school],le+2380,t.text,36,.22),io(s,"Class of "+e.year,fe+110,3e3,436,t.accentText)},B(s,t,e){dn(s,0,0,ue,si,Hn),or(s,t.accent,t.accent,t.accent),_n(s,0,le+90,900),mi(s,"Freshman year",le+1020,t.caption),_n(s,1,le+1130,900),mi(s,"Senior year",le+2060,t.caption),_n(s,2,le+2170,700),Fn(s,le+2930,250,t.blockBg,[e.school,"Class of "+e.year],t.blockInk,t.blockAccent),Fn(s,fe+50,170,t.blockBg,["#"+uT(e.name).replace(/[^A-Za-z0-9]/g,"")+"Grad"+e.year.slice(-2)],t.blockAccent),_n(s,3,fe+300,820),mi(s,"Then",fe+1150,t.caption),_n(s,4,fe+1260,980),mi(s,"And now",fe+2270,t.caption),Fn(s,fe+2420,760,t.blockBg,[e.line1,e.line2,e.line3],t.blockInk,t.blockAccent,64)}},birthday:{A(s,t,e){dn(s,0,0,ue,si,t.main);let n=[gi(Ni,t.main,1.5,t.text),t.text,gi(t.accent,t.main,1.5,t.text)];Ip(s,n,le+60,ss-Cs-60,34,5),Ip(s,n,fe+60,si-Cs-60,34,8),or(s,Ni,t.accent,Ni),As(s,["Happy birthday"],le+150,t.text,32,.26),ar(s,le+250,90,gi(Ni,t.main,1.5,t.text)),io(s,e.name,le+520,1500,660,t.text),ar(s,le+2120,90,gi(Ni,t.main,1.5,t.text));let i=parseInt(e.age,10);As(s,["Look who is "+(hT[i]||e.age)],le+2170,t.text,32,.26);let r=String(e.age);r.length===1?rr(s,r,fe+690,1e3,t.text):r.length===2?(rr(s,r[0],fe+240,1e3,t.text),rr(s,r[1],fe+1140,1e3,t.text)):(rr(s,r[0],fe+210,720,t.text),rr(s,r[1],fe+890,720,t.text),rr(s,r[2],fe+1570,720,t.text)),Fn(s,fe+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,gi(Ni,t.accent,2.2,t.accentInk),64)},B(s,t,e){dn(s,0,0,ue,si,Hn),or(s,Ni,t.accent,Ni),_n(s,0,le+90,980),mi(s,"Look who is "+e.age,le+1100,t.caption),_n(s,1,le+1210,860),mi(s,"Make a wish",le+2100,t.caption),_n(s,2,le+2210,900),Fn(s,fe+50,170,t.blockBg,[e.age+" years of "+e.name],t.blockInk),_n(s,3,fe+300,900),mi(s,"Then",fe+1230,t.caption),_n(s,4,fe+1340,900),mi(s,"And now",fe+2270,t.caption),Fn(s,fe+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,gi(Ni,t.accent,2.2,t.accentInk),64)}},"senior-night":{A(s,t,e){dn(s,0,0,ue,si,t.main),or(s,t.accent,t.accent,t.accent),As(s,["Senior night"],le+150,t.text,32,.26),ar(s,le+250,90,t.text),io(s,e.name,le+400,1850,520,t.text),rr(s,e.number,le+2330,600,t.text),io(s,"Senior night "+e.year,fe+110,3e3,344,t.text)},B(s,t,e){dn(s,0,0,ue,si,Hn),or(s,t.accent,t.accent,t.accent),Fn(s,le+60,330,t.blockBg,["#"+e.number],t.blockInk,null,190),_n(s,0,le+470,1e3),mi(s,"Freshman year",le+1500,t.caption),_n(s,1,le+1610,760),mi(s,"Senior year",le+2400,t.caption),Fn(s,le+2520,250,gi(t.accent,Hn,1.6,lr),[e.sport],Tl(gi(t.accent,Hn,1.6,lr))),_n(s,2,le+2840,340),Fn(s,fe+50,170,gi(t.accent,Hn,1.6,lr),["Class of "+e.year],Tl(gi(t.accent,Hn,1.6,lr))),_n(s,3,fe+300,1e3),mi(s,"Under the lights",fe+1330,t.caption),_n(s,4,fe+1440,800),Fn(s,fe+2420,760,t.blockBg,[e.team,"Class of "+e.year],t.blockInk,null,44)}}},Ml={name:"Big name",photos:"Photo strip",message:"Family message",party:"Party and QR code",sign:"Sign-it",free:"Design it yourself"},Mp=typeof window<"u"&&Array.isArray(window.MP_HOLD)?window.MP_HOLD:[],Op=null;function wp(s,t){yt.occasion==="birthday"?or(s,Ni,t.accent,Ni):or(s,t.accent,t.accent,t.accent)}function fT(s){let t=String(s).trim(),e=t.length/2;if(t.length<=10||t.indexOf(" ")<0)return[t];let n=-1;for(let i=0;i<t.length;i++)t[i]===" "&&(n<0||Math.abs(i-e)<Math.abs(n-e))&&(n=i);return[t.slice(0,n),t.slice(n+1)]}function pT(s){return yt.occasion==="birthday"?[s.name,"Turning "+s.age]:yt.occasion==="senior-night"?[s.name,"#"+s.number]:[s.name,"Class of "+s.year]}function cx(s,t,e,n){let i;try{i=Zd(0,"M"),i.addData(t),i.make()}catch{i=Zd(0,"M"),i.addData("https://memorypostco.com"),i.make()}let r=i.getModuleCount(),o=3,a=n/(r+2*o),l=(ue-n)/2;if(sn){sn.push({t:"art",canvas:lx(l,e,n,n,2,c=>cx(c,t,e,n)),x:l,y:e,w:n,h:n});return}dn(s,l,e,n,n,"#FFFFFF"),s.fillStyle=lr;for(let c=0;c<r;c++)for(let h=0;h<r;h++)i.isDark(c,h)&&s.fillRect(l+(o+h)*a,e+(o+c)*a,a+.35,a+.35)}var Eu=['600 {s}px "Caveat"','400 {s}px "Permanent Marker"','400 {s}px "Reenie Beanie"','400 {s}px "Covered By Your Grace"'],mT=[[["So proud of you,","{NAME}!   Aunt Dana"],40,640,0,64,-4],[["GO GET 'EM","   Coach R."],150,905,1,40,3],[["Love you kiddo","      Grandpa"],56,1120,2,74,-2],[["Room 204 forever!","        Priya"],70,1370,3,54,4],[["Don't forget us :)","   Sam + Jo"],36,1650,0,60,-6],[["Keep running,","kid.   Mr. Alvarez"],84,1890,2,68,2],[["YOU DID IT!!","       Tess"],44,2180,1,44,-3],[["Proud neighbors","since day one","  The Okafors"],130,2370,3,52,3],[["Call your mother.","     Love, Dad"],44,2700,0,68,-3],[["Best friend ever.","       Dev"],60,2975,2,66,3],[["Number one fan","   your sister"],60,3560,0,66,-5],[["We watched you","grow up. So proud.","  Mrs. Lindqvist"],96,3830,3,50,2],[["CONGRATS {NAMEUP}","    Uncle Ray"],40,4170,1,42,-2],[["Save me a seat!","      Nana"],130,4420,0,60,5],[["Never change.","OK, change","a little.   Leo"],50,4770,2,72,-4],[["See you soon.","     Imani"],140,5150,3,54,3],[["Proud of you","always.   Mom"],48,5420,0,70,-3],[["WE LOVE YOU","   Tio Beto"],150,5720,1,36,2]];function gT(s,t){s.textAlign="left",s.textBaseline="top",mT.forEach(([e,n,i,r,o,a])=>{let l=e.map(u=>u.replace("{NAMEUP}",t.name.toUpperCase()).replace("{NAME}",t.name));s.save(),s.translate(n,i),s.rotate(a*Math.PI/180),s.fillStyle="#1d1d1f",s.globalAlpha=.93,s.font=Eu[r].replace("{s}",o);let c=Math.max.apply(null,l.map(u=>s.measureText(u).width)),h=ue-n-14;c>h&&(o=Math.max(18,Math.floor(o*h/c)),s.font=Eu[r].replace("{s}",o)),l.forEach((u,d)=>s.fillText(u,0,d*o)),s.restore()})}var ix={message(s,t,e){dn(s,0,0,ue,si,t.main),wp(s,t),As(s,["A note from home"],le+150,t.accentText,32,.26),ar(s,le+250,90,t.accentText),io(s,e.msg,le+360,2800,400,t.text),fT(e.more).forEach((n,i)=>rr(s,n.toUpperCase(),fe+190+i*125,118,t.accentText)),ar(s,fe+500,90,t.accentText),_n(s,4,fe+600,1700),Fn(s,fe+2420,760,t.accent,["Love,",e.from],t.accentInk,null,52)},party(s,t,e){dn(s,0,0,ue,si,t.main),wp(s,t),As(s,["You are invited"],le+150,t.accentText,32,.26),ar(s,le+250,90,t.accentText),io(s,e.line1,le+380,2780,500,t.accentText),Fn(s,fe+60,640,t.accent,[e.line2,e.line3,e.line4],t.accentInk,null,46),cx(s,e.link,fe+860,360),As(s,["Scan for","the album"],fe+1250,t.text,30,.34,600),_n(s,3,fe+1500,760),Fn(s,fe+2420,760,Hn,pT(e),t.caption,null,52)},sign(s,t,e){dn(s,0,0,ue,si,Hn),wp(s,t),Fn(s,le+60,330,t.blockBg,["Leave "+e.name,"a note"],t.blockInk,t.blockAccent,62),mi(s,"Sign anywhere",le+440,t.caption),yt.signed&&!sn&&gT(s,e),Fn(s,fe+2810,370,t.blockBg,["Thank you","for coming"],t.blockInk,t.blockAccent,52)}};function Lp(s,t,e,n){let i=Op&&Op[t];i&&i.full?s.drawImage(i.full,0,e*ss,ue,ss,0,e*ss,ue,ss):dn(s,0,e*ss,ue,ss,n.main)}var Tp=null;function _T(s){let t=Cl(),e=Ru(),n=[];Tp||(Tp=document.createElement("canvas").getContext("2d")),sn=n;try{Au(s==="free"?"name":s,Tp,t,e)}catch{}finally{sn=null}let i=Hn,r=[];return n.forEach(o=>{o.t==="rect"&&o.x<=0&&o.y<=0&&o.w>=ue&&o.h>=si?i=o.fill:r.push(o)}),{bg:i,items:r}}var un=[],Fp=s=>Es[s]?Es[s].entry||(Es[s].entry={pid:"sample-"+s,color:Es[s],gray:Es[s],sample:!0}):null,wl=0,xT=()=>JSON.stringify(Object.assign({},yt,{photos:wl,faces:0,signed:0}))+Object.keys(Es).length;function Au(s,t,e,n){let i=dT[yt.occasion];s==="photos"?i.B(t,e,n):ix[s]?ix[s](t,e,n):i.A(t,e,n)}function Ru(){let s=ii[yt.occasion],t=yt.occasion==="graduation";return{name:Gn(yt.name,s.name).slice(0,16),year:Gn(yt.year,"2027").replace(/[^0-9]/g,"").slice(0,4)||"2027",school:Gn(yt.school,"Northside High").slice(0,26),age:String(Math.min(120,Math.max(1,parseInt(yt.age,10)||10))),number:Gn(yt.number,"12").replace(/[^0-9]/g,"").slice(0,2)||"12",sport:Gn(yt.sport,"Varsity soccer").slice(0,22),team:Gn(yt.team,"Northside Hawks").slice(0,22),line1:Gn(yt.line1,t?"Open house":"Party").slice(0,16),line2:Gn(yt.line2,t?"Sat June 12":"Sat May 8").slice(0,16),line3:Gn(yt.line3,t?"2 to 6 pm":"2 pm").slice(0,16),line4:Gn(yt.line4,"418 Alder Lane").slice(0,18),msg:Gn(yt.msg,"So proud of you").slice(0,18),more:Gn(yt.more,"We saw all of it.").slice(0,24),from:Gn(yt.from,"Mom and Dad").slice(0,16),link:Gn(yt.link,"https://memorypostco.com").slice(0,120)}}var vT=Math.random().toString(36).slice(2,7),yT=0;function hx(s,t,e){let n=s.naturalWidth,i=s.naturalHeight,r=Math.min(1,t/Math.max(n,i)),o=Math.max(1,Math.round(n*r)),a=Math.max(1,Math.round(i*r)),l=document.createElement("canvas");l.width=o,l.height=a,l.getContext("2d").drawImage(s,0,0,o,a);let c={pid:e||"p"+vT+ ++yT,color:l,width:o,height:a,naturalWidth:o,naturalHeight:a},h=null;return Object.defineProperty(c,"gray",{get(){if(h)return h;h=document.createElement("canvas"),h.width=o,h.height=a;let u=h.getContext("2d");u.drawImage(l,0,0);let d=u.getImageData(0,0,o,a),f=d.data;for(let p=0;p<f.length;p+=4){let x=.299*f[p]+.587*f[p+1]+.114*f[p+2];x=Math.max(0,Math.min(255,(x-128)*1.06+128)),f[p]=f[p+1]=f[p+2]=x}return u.putImageData(d,0,0),h}}),c}function sx(s,t,e=5){let n=Array.from(s).filter(o=>/^image\//.test(o.type)).slice(0,e),i=n.length,r=[];if(!i)return t(r);n.forEach((o,a)=>{let l=URL.createObjectURL(o),c=new Image;c.onload=()=>{try{r[a]=hx(c,un.length+a<12?1280:720)}catch{}URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.onerror=()=>{URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.src=l})}function ST(s){let t=s.querySelector("#make-stage"),e=s.querySelector("#make-canvas"),n=e.getContext&&e.getContext("2d");if(!n)return null;let i=document.createElement("canvas"),r;try{r=new xh({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}if(!r.getContext())return null;r.outputColorSpace=pn,r.toneMapping=li,r.shadowMap.enabled=!0,r.shadowMap.type=xr;let o=Math.min(window.innerWidth,window.innerHeight)<700,a=new wa,l=document.createElement("canvas");l.width=64,l.height=256;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,256);[[0,"#86A9E4"],[.3,"#C4D8F3"],[.44,"#FFFFFF"],[.5,"#FFFFFF"],[.53,"#8E978B"],[1,"#596257"]].forEach(([Lt,F])=>h.addColorStop(Lt,F)),c.fillStyle=h,c.fillRect(0,0,64,256);let u=new gr(l);u.mapping=Io,u.colorSpace=pn;let d=()=>{let Lt=new Fo(r);a.environment=Lt.fromEquirectangular(u).texture,Lt.dispose()};d(),a.add(new La(16777215,12765627,1.02));let f=new Na(16774890,3.3);f.position.set(-.8,4.9,3.3),f.target.position.set(0,.9,0),f.castShadow=!0,f.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(f.shadow.camera,{left:-1.2,right:1.2,top:1.4,bottom:-1.2,near:1,far:9}),f.shadow.bias=-4e-4,f.shadow.normalBias=.002,f.shadow.radius=7,a.add(f,f.target);let p=Math.min(8,r.capabilities.getMaxAnisotropy()),x=[],m=Lt=>(x[Lt]||(x[Lt]=[0,1].map(()=>{let F=document.createElement("canvas");F.width=so,F.height=Mu;let Y=new gr(F);return Y.colorSpace=pn,Y.anisotropy=p,Y.minFilter=bi,Y.magFilter=mn,Y.generateMipmaps=!0,{cv:F,t:Y}})),x[Lt]),_=new Eo({color:15131612}),b=[0,1,2,3].map(Lt=>[0,1].map(F=>new Eo({map:m(Lt%2)[F].t}))),A=new Da({color:14869216,roughness:.26,metalness:1,envMapIntensity:1.25}),w=new mr({color:789516}),E=new us;a.add(E);let P=(Lt,F,Y,ot=!0)=>{let ht=new kn(Lt,F);return ht.position.y=Y,ht.castShadow=ot,E.add(ht),ht};[1,0].forEach((Lt,F)=>{let Y=[b[1][Lt],b[3][Lt],_,_,b[0][Lt],b[2][Lt]];P(new qn(Cp,wu,Cp),Y,ax+wu/2+F*(wu+ox))}),P(new qn(5*Cu,.03,5*Cu),_,Ep+Ap-.015,!1),P(new qn(bu,Rp-.003,bu),A,Ep+Ap+(Rp-.003)/2),P(new qn(bu-.006,.003,bu-.006),A,bl-.0015),P(new qn(Su,yp-.004,Su),A,(yp-.004)/2),P(new qn(Su-.008,.004,Su-.008),A,yp-.002);let g=new kn(new Bs(6,6),new Pa({opacity:.2}));g.rotation.x=-Math.PI/2,g.receiveShadow=!0,a.add(g);let v=document.createElement("canvas");v.width=v.height=128;let T=v.getContext("2d"),C=T.createRadialGradient(64,64,4,64,64,62);C.addColorStop(0,"rgba(0,0,0,.5)"),C.addColorStop(.45,"rgba(0,0,0,.2)"),C.addColorStop(1,"rgba(0,0,0,0)"),T.fillStyle=C,T.fillRect(0,0,128,128);let R=new kn(new Bs(.46,.46),new mr({map:new gr(v),transparent:!0,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.y=.0015,a.add(R);let L=new _r(-1,1,1,-1,.1,40),U=.115,O=new it(0,bl/2-.02,0),j=-.7,q=0,B=null,$=!0,J=!1,ct=0,pt=0,Et=0,At=1,Q=1,Mt=1.36,Ct=1.06,zt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Tt=s.querySelector("#mk-zoom");function jt(){let Lt=Math.max(1.06,.15*Et/pt);Q=Math.max(1,Math.min(2.3,2*Lt*pt/Et/.3)),pt<150&&(Q=1),At>Q&&(At=1),Ct=Lt/At,L.top=Ct,L.bottom=-Ct,L.left=-Ct*pt/Et,L.right=Ct*pt/Et,At>1&&(Mt=Math.max(Ct-.1,Math.min(bl+.12-Ct,Mt))),O.set(0,At>1?Mt:bl/2-.02,0),L.position.set(0,O.y+Math.sin(U)*12,Math.cos(U)*12),L.lookAt(O),L.updateProjectionMatrix(),L.updateMatrixWorld();let F=new it(0,0,0).project(L);t.style.setProperty("--lawn",Math.max(0,Math.round((F.y+1)/2*Et+Et*.125*At))+"px"),Tt&&(Tt.hidden=Q<1.4,Tt.setAttribute("aria-pressed",At>1?"true":"false"),Tt.textContent=At>1?"Zoom out":"Zoom"),e.style.touchAction=At>1?"none":"pan-y",$=!0,ne()}function Qt(){E.rotation.y=j,r.render(a,L),n.clearRect(0,0,e.width,e.height),n.drawImage(i,0,0),$=!1}function Vt(){let Lt=e.clientWidth,F=e.clientHeight;!Lt||!F||(pt=Lt,Et=F,t.classList.toggle("roomy",pt>=290),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(pt,Et,!1),jt(),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height),J&&Qt())}function de(){if(ct=0,B!==null){let Lt=B-j;Math.abs(Lt)<.002?(j=B,B=null):j+=Lt*.16,$=!0}Math.abs(q)>4e-4?(j+=q,q*=.93,$=!0):q=0,$&&pt&&J&&Qt(),(B!==null||q!==0)&&ne()}i.addEventListener("webglcontextrestored",()=>{d(),x.forEach(Lt=>Lt.forEach(F=>{F.t.needsUpdate=!0})),$=!0,ne()});function ne(){ct||(ct=requestAnimationFrame(de))}let te=!1,pe=0,Ae=0;e.addEventListener("pointerdown",Lt=>{te=!0,pe=Lt.clientX,Ae=Lt.clientY,q=0,B=null;try{e.setPointerCapture(Lt.pointerId)}catch{}t.classList.add("turned")}),e.addEventListener("pointermove",Lt=>{if(!te)return;let F=Lt.clientX-pe,Y=Lt.clientY-Ae;pe=Lt.clientX,Ae=Lt.clientY,j+=F*.011,q=F*.011,At>1&&Y&&(Mt+=Y*(2*Ct/Et),jt()),$=!0,ne()}),Tt&&Tt.addEventListener("click",()=>{At=At>1?1:Q,t.classList.add("turned"),jt()});let Ne=()=>{te=!1,ne()};e.addEventListener("pointerup",Ne),e.addEventListener("pointercancel",Ne);let ve=Lt=>{q=0;let F=Math.PI/2;B=Math.round(((B===null?j:B)- -.7)/F+Lt)*F-.7,t.classList.add("turned"),ne()};function Be(){let Lt=Cl(),F=Ru(),Y=[],ot=yt.faces.map((ht,at)=>ht==="free"?"free"+at:ht);ot.forEach(ht=>{Y.indexOf(ht)<0&&Y.push(ht)}),Y.forEach((ht,at)=>[0,1].forEach(Kt=>{let{cv:It,t:Ht}=m(at)[Kt],D=It.getContext("2d");D.setTransform(1,0,0,1,0,0),D.fillStyle="#EEECE6",D.fillRect(0,0,so,Mu),D.save(),D.beginPath(),D.rect(Tu,0,so-2*Tu,Mu),D.clip(),D.setTransform(Sp,0,0,Sp,Tu,-Kt*ss*Sp),ht.slice(0,4)==="free"?Lp(D,+ht.slice(4),Kt,Lt):Au(ht,D,Lt,F),D.restore(),D.setTransform(1,0,0,1,0,0),D.fillStyle="rgba(0,0,0,.26)",D.fillRect(0,Kt===0?Mu-2:0,so,2),Ht.needsUpdate=!0})),ot.forEach((ht,at)=>[0,1].forEach(Kt=>{let It=b[at][Kt],Ht=m(Y.indexOf(ht))[Kt].t;It.map!==Ht&&(It.map=Ht,It.needsUpdate=!0)})),J=!0,$=!0,ne()}function Re(Lt,F,Y,ot,ht){if(!J||r.getContext().isContextLost())return null;let at=F/(2*ot),Kt=(ht-F/2)/(Math.cos(U)*ot),It=null;try{r.setPixelRatio(1),r.setSize(Lt,F,!1),L.top=at,L.bottom=-at,L.left=-at*Lt/F,L.right=at*Lt/F,O.set(0,Kt,0),L.position.set(0,Kt+Math.sin(U)*12,Math.cos(U)*12),L.lookAt(O),L.updateProjectionMatrix(),L.updateMatrixWorld(),E.rotation.y=Y,r.render(a,L),It=document.createElement("canvas"),It.width=Lt,It.height=F,It.getContext("2d").drawImage(i,0,0)}catch{It=null}return r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),pt&&Et&&(r.setSize(pt,Et,!1),jt(),Qt()),It}"ResizeObserver"in window?new ResizeObserver(Vt).observe(t):window.addEventListener("resize",Vt),Vt(),zt||(j=-1.75,B=-.7);let We=Lt=>{q=0;let F=Lt===0?-.7:-1.22-(Lt-1)*Math.PI/2,Y=B===null?j:B,ot=2*Math.PI;F+=Math.round((Y-F)/ot)*ot,B=F,ne()};return{paint:Be,turn:ve,showSide:We,front:()=>{let Lt=0,F=9;for(let Y=0;Y<4;Y++){let ot=Math.abs(((j+Y*Math.PI/2)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);ot<F&&(F=ot,Lt=Y)}return Lt},still:Re,height:bl,show:Lt=>{let F=yt.faces.indexOf(Lt==="B"?"photos":"name");We(F<0?0:F)}}}function rx(){let s=document.getElementById("make");if(!s)return;let t=ST(s);if(!t)return;let e=s.closest("section"),n=Y=>s.querySelector("#"+Y),i=0,r=!1,o=null,a=()=>{},l=JSON.stringify(Object.assign({},yt,{photos:0})),c=Y=>{clearTimeout(i),i=setTimeout(t.paint,Y?0:70),o&&o(),a()},h=Y=>{Y.isTrusted!==!1&&!r&&(r=!0,J())};s.addEventListener("input",h,!0),s.addEventListener("change",h,!0),s.addEventListener("click",Y=>{Y.target.closest&&Y.target.closest("[data-occ],.make-turn button,#mk-clear,#mk-design,#mk-studio,#mk-wrap,#mk-pic2,#mk-free button")&&h(Y)},!0),n("make-canvas").addEventListener("pointerdown",h);let u=(Y,ot)=>{let ht=n(Y);Pp.forEach(([at,Kt])=>{let It=document.createElement("label");It.className="swc",It.title=at,It.innerHTML=`<input type="radio" name="${ot}" value="${at}"><span style="background:${Kt}"></span><b>${at}</b>`,ht.appendChild(It)}),ht.addEventListener("change",at=>{yt[ot]=at.target.value,J(),c(!0)})};u("mk-main","main"),u("mk-accent","accent");let d=()=>{let Y=ii[yt.occasion];s.querySelectorAll('input[name="main"]').forEach(ot=>{ot.checked=ot.value===(yt.main||Y.main)}),s.querySelectorAll('input[name="accent"]').forEach(ot=>{ot.checked=ot.value===(yt.accent||Y.accent)})};function f(){s.querySelectorAll("[data-for],[data-face]").forEach(Y=>{let ot=Y.dataset.for,ht=Y.dataset.face,at=ot?ot.split(" ").indexOf(yt.occasion)>=0:!1,Kt=ht?ht.split(" ").some(It=>yt.faces.indexOf(It)>=0):!1;Y.hidden=!(at||Kt)})}function p(Y){yt.occasion=Y,s.querySelectorAll("[data-occ]").forEach(at=>at.setAttribute("aria-pressed",at.dataset.occ===Y?"true":"false")),f();let ot=ii[Y],ht=Y==="graduation";n("mk-name").placeholder=ot.name,n("mk-l1").placeholder=ht?"Open house":"Party",n("mk-l2").placeholder=ht?"Sat June 12":"Sat May 8",n("mk-l3").placeholder=ht?"2 to 6 pm":"2 pm",d(),J(),t.show("A"),c(!0)}s.querySelectorAll("[data-occ]").forEach(Y=>Y.addEventListener("click",()=>p(Y.dataset.occ)));let x=(Y,ot)=>{let ht=n(Y);ht&&ht.addEventListener("input",()=>{yt[ot]=ht.value,c(!1)})},m=[["mk-name","name"],["mk-year","year"],["mk-school","school"],["mk-age","age"],["mk-number","number"],["mk-sport","sport"],["mk-team","team"],["mk-l1","line1"],["mk-l2","line2"],["mk-l3","line3"],["mk-year2","year"],["mk-msg","msg"],["mk-more","more"],["mk-from","from"],["mk-l4","line4"],["mk-link","link"]];m.forEach(([Y,ot])=>x(Y,ot));let _=document.getElementById("st"),b=n("make-stage"),A=b.parentNode,w=b.nextSibling,E=(Y,ot)=>{yt.faces[Y]=ot;let ht=n("mk-face"+(Y+1));ht&&(ht.value=ot)},P={name:["mk-name"],year:["mk-year","mk-year2"],age:["mk-age"],number:["mk-number"]},g=_?G_({root:_,palette:Pp,getRoles:Cl,pieces:_T,stamp:xT,kinds:Object.keys(Ml).filter(Y=>Y!=="free"&&Mp.indexOf(Y)<0).map(Y=>[Y,Ml[Y]]),kindOf:Y=>yt.faces[Y],setKind:(Y,ot)=>{E(Y,ot),f(),C()},turnTo:Y=>t.showSide(Y),onChange:()=>{t.paint(),a()},onOpen:Y=>{Y.appendChild(b)},onClose:()=>{A.insertBefore(b,w),f(),C(),c(!0)},fields:()=>{let Y=yt.occasion,ot=ii[Y],ht=Y==="birthday"?{key:"age",label:"Turning",value:yt.age,placeholder:"10"}:Y==="senior-night"?{key:"number",label:"Number",value:yt.number,placeholder:"12"}:{key:"year",label:"Class year",value:yt.year,placeholder:"2027"};return{occasion:Y,occasions:Object.keys(ii).map(at=>[at,ii[at].label]),name:yt.name,namePlaceholder:ot.name,second:ht,main:yt.main||ot.main,accent:yt.accent||ot.accent}},setField:(Y,ot)=>{if(r=!0,Y==="occasion"){p(ot);return}yt[Y]=ot,(Y==="main"||Y==="accent")&&d(),(P[Y]||[]).forEach(ht=>{let at=n(ht);at&&(at.value=ot)}),J(),c(!0)},library:()=>un.slice().reverse().concat(Object.keys(Es).map(Fp).filter(Boolean)),lead:()=>un.length?un[un.length-1]:Fp(ii[yt.occasion].samples[0]),addPhotos:Y=>new Promise(ot=>sx(Y,ht=>{ht.length&&(ht.forEach(at=>un.push(at)),yt.photos=un.slice(-5),wl++),B(!1),J(),c(!0),ot(ht)},12)),drawKind:(Y,ot)=>{let ht=ot.getContext("2d"),at=ot.width/ue;ht.setTransform(1,0,0,1,0,0),ht.clearRect(0,0,ot.width,ot.height),ht.save(),ht.setTransform(at,0,0,at,0,0),ht.beginPath(),ht.rect(0,0,ue,ot.height/at),ht.clip(),Au(Y,ht,Cl(),Ru()),ht.restore()},drawSide:(Y,ot)=>{let ht=ot.getContext("2d"),at=yt.faces[Y],Kt=Cl();ht.setTransform(ot.width/ue,0,0,ot.height/si,0,0),at==="free"?(Lp(ht,Y,0,Kt),Lp(ht,Y,1,Kt)):Au(at,ht,Kt,Ru())}}):null;Op=g?g.art:null;let v=0;g&&(o=()=>{clearTimeout(v),v=setTimeout(()=>g.refresh().then(Y=>{Y&&t.paint()}),320)});let T=n("mk-free");function C(){T&&(T.textContent="",yt.faces.forEach((Y,ot)=>{if(Y!=="free")return;let ht=document.createElement("button");ht.type="button",ht.className="btn btn-line",ht.textContent="Edit face "+(ot+1)+" in the studio",ht.addEventListener("click",()=>g.open(ot)),T.appendChild(ht)}))}let R=n("mk-design");R&&(R.hidden=!g,g&&R.addEventListener("click",()=>g.open(t.front())));let L=document.getElementById("mk-studio-row");L&&g&&(L.hidden=!1,n("mk-studio").addEventListener("click",()=>g.open(t.front())));let U=document.getElementById("mk-wrap-row");U&&g&&(U.hidden=!1,n("mk-wrap").addEventListener("click",()=>g.openWrap(t.front()))),[0,1,2,3].forEach(Y=>{let ot=n("mk-face"+(Y+1));ot&&(Object.keys(Ml).forEach(ht=>{if(ht==="free"&&!g||Mp.indexOf(ht)>=0)return;let at=document.createElement("option");at.value=ht,at.textContent=Ml[ht],ot.appendChild(at)}),ot.value=yt.faces[Y],ot.addEventListener("change",()=>{let ht=yt.faces[Y];yt.faces[Y]=ot.value;let at=()=>{f(),C(),t.showSide(Y),c(!0)};ot.value==="free"?g.start(Y,ht==="free"?null:ht).then(at):at()}))}),s.querySelectorAll("[data-face]").forEach(Y=>Y.addEventListener("focusin",()=>{let ot=yt.faces.indexOf(Y.dataset.face.split(" ")[0]);ot>=0&&t.showSide(ot)}));let O=n("mk-signed");O&&O.addEventListener("change",()=>{yt.signed=O.checked,c(!0),yt.signed&&document.fonts&&document.fonts.load&&Promise.all(Eu.map(Y=>document.fonts.load(Y.replace("{s}","40")))).then(()=>c(!0)).catch(()=>{})}),n("mk-year").addEventListener("input",()=>{n("mk-year2").value=n("mk-year").value}),n("mk-year2").addEventListener("input",()=>{n("mk-year").value=n("mk-year2").value});let j=n("mk-photo-note"),q=s.querySelector('label[for="mk-photos"]'),B=Y=>{let ot=yt.photos.length;q&&(q.textContent=ot===0?"Add up to 5 photos":ot<5?"Add more photos":"Swap in new photos"),n("mk-clear").hidden=ot===0,j.textContent=(Y?"That file could not be read. Try a JPG or PNG photo. ":"")+(ot===0?"Sample photos are showing. Yours stay on your device.":ot+" of 5 photos on the post. They stay on your device.")};n("mk-photos").addEventListener("change",Y=>{let ot=Y.target.files?Y.target.files.length:0;sx(Y.target.files,ht=>{ht.length&&(ht.forEach(at=>un.push(at)),yt.photos=yt.photos.concat(ht).slice(-5),wl++,t.show("B")),B(ot>0&&!ht.length),Y.target.value="",J(),c(!0)})}),n("mk-clear").addEventListener("click",()=>{yt.photos=[];let Y=g?g.pids():new Set;for(let ot=un.length-1;ot>=0;ot--)Y.has(un[ot].pid)||(g&&g.forget(un[ot].pid),un.splice(ot,1));wl++,B(!1),J(),c(!0)}),n("mk-bw").addEventListener("change",Y=>{yt.bw=Y.target.checked,c(!0)}),n("mk-left").addEventListener("click",()=>t.turn(-1)),n("mk-right").addEventListener("click",()=>t.turn(1));let $=Q_({dialog:document.getElementById("pic"),fileName:()=>"memory-post-"+(yt.name.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"preview")+".jpg",picture:Y=>{clearTimeout(i),t.paint();let ot=K_(yt.name,ii[yt.occasion].label),ht=yt.faces[2]!==yt.faces[0]||yt.faces[3]!==yt.faces[1]||yt.faces.indexOf("free")>=0,at=$_({shape:Y,still:t.still,height:t.height,two:ht,lines:ot});return at?{canvas:at,title:ot.join(" "),views:ht?2:1,alt:"A picture of your post: "+ot.join(" ")+"."}:null}});$&&["mk-pic","mk-pic2"].forEach(Y=>{let ot=n(Y);ot&&(ot.hidden=!1,ot.addEventListener("click",()=>$.open(ot)))});function J(){let Y=ii[yt.occasion];window.MP_DESIGN=r?"Tried the preview: "+Y.label+", "+(yt.main||Y.main)+" and "+(yt.accent||Y.accent)+".":""}let ct=n("mk-join");ct&&ct.addEventListener("click",()=>{let Y=document.getElementById("f-occasion");Y&&(Y.selectedIndex={graduation:0,birthday:1,"senior-night":2}[yt.occasion])});let Et=["grad","caps","skyline","field","road","balloons","cake","bokeh"].map(Y=>new Promise(ot=>{let ht=new Image;ht.onload=()=>{Es[Y]=ht,c(!1),ot()},ht.onerror=ot,ht.src="img/sample-"+Y+".jpg"})),At=Promise.race([Promise.all(Et),new Promise(Y=>setTimeout(Y,6e3))]);(document.fonts&&document.fonts.load?Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 32px "Barlow"')]).catch(()=>{}):Promise.resolve()).then(()=>c(!0)),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>c(!0));let Mt=864e5,Ct=30,zt=m.map(Y=>Y[1]).filter((Y,ot,ht)=>ht.indexOf(Y)===ot),Tt=JSON.parse(l),jt={get:()=>{try{return window.sessionStorage.getItem("mp-design")||""}catch{return""}},set:Y=>{try{Y?window.sessionStorage.setItem("mp-design",Y):window.sessionStorage.removeItem("mp-design")}catch{}}},Qt=new Set,Vt="",de=0,ne=Promise.resolve(),te=!1,pe=null,Ae=!1,Ne=!1,ve=n("mk-saved"),Be=n("mk-back"),Re=()=>un.length>0||JSON.stringify(Object.assign({},yt,{photos:0}))!==l;function We(){if(clearTimeout(de),!Ae||Ne){a();return}if(pe||!(r||te))return;if(!Re()){Vt&&(ne=ne.then(()=>xp("kv","design")).then(()=>{ve&&(ve.hidden=!0),delete s.dataset.kept}).catch(()=>{}));return}Vt||(Vt=Math.random().toString(36).slice(2)+Date.now().toString(36),jt.set(Vt));let Y=g?g.dump():{faces:[null,null,null,null],made:{}},ot;try{ot=JSON.parse(JSON.stringify(Y.faces))}catch{ot=[null,null,null,null]}let ht=g?g.pids():new Set,at=un.filter((y,H)=>H>=un.length-24||ht.has(y.pid)),Kt={v:1,at:Date.now(),sid:Vt,order:at.map(y=>y.pid),faces:ot,state:Object.assign({},yt,{photos:yt.photos.map(y=>y.pid),faces:yt.faces.slice()})},It=[],Ht=(y,H,_t,ft)=>{Qt.has(y)||(Qt.add(y),It.push(X_(H,_t).then(vt=>_p("pics",y,Object.assign(vt,ft||{}))).catch(()=>{Qt.delete(y)})))};at.forEach(y=>Ht(y.pid,y.color,"image/jpeg",{w:y.width,h:y.height})),Object.keys(Y.made).forEach(y=>Ht(y,Y.made[y],"image/png"));let D=new Set(Kt.order.concat(Object.keys(Y.made)));ne=ne.then(()=>_p("kv","design",Kt)).then(()=>Promise.all(It)).then(()=>W_("pics")).then(y=>Promise.all((y||[]).filter(H=>!D.has(H)).map(H=>(Qt.delete(H),xp("pics",H))))).then(()=>{ve&&(ve.hidden=!1),s.dataset.kept=String(Kt.at)}).catch(()=>{})}a=()=>{clearTimeout(de),de=setTimeout(We,700)},document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&We()}),window.addEventListener("pagehide",We);function qe(Y){te=!0,r=!0,pe=null,Ne=!0,Be&&(Be.hidden=!0);let ot=()=>{Ne=!1};Vt=Y.sid||"",Vt&&jt.set(Vt);let ht=Y.state||{},at=Array.isArray(Y.faces)?Y.faces:[],Kt=y=>!!Ml[y]&&Mp.indexOf(y)<0&&(y!=="free"||!!g);zt.forEach(y=>{typeof ht[y]=="string"&&(yt[y]=ht[y].slice(0,400))}),ii[ht.occasion]&&(yt.occasion=ht.occasion),["main","accent"].forEach(y=>{yt[y]=Dp[ht[y]]?ht[y]:null}),yt.bw=ht.bw!==!1,yt.signed=!!ht.signed,Array.isArray(ht.faces)&&(yt.faces=[0,1,2,3].map(y=>{let H=ht.faces[y],_t=at[y];return H==="free"&&!(_t&&_t.json)?_t&&_t.origin!=="free"&&Kt(_t.origin)?_t.origin:yt.faces[y]:Kt(H)?H:yt.faces[y]})),p(yt.occasion),m.forEach(([y,H])=>{let _t=n(y);_t&&(_t.value=yt[H]===Tt[H]?"":yt[H])}),[0,1,2,3].forEach(y=>{let H=n("mk-face"+(y+1));H&&(H.value=yt.faces[y])}),n("mk-bw").checked=yt.bw,O&&(O.checked=yt.signed,yt.signed&&document.fonts&&document.fonts.load&&Promise.all(Eu.map(y=>document.fonts.load(y.replace("{s}","40")))).then(()=>c(!0)).catch(()=>{})),f(),C(),J();let It=(Array.isArray(Y.order)?Y.order:[]).filter(y=>/^p/.test(y)&&!un.some(H=>H.pid===y)).slice(-40),Ht=[];at.forEach(y=>{y&&y.json&&Array.isArray(y.json.objects)&&y.json.objects.forEach(H=>{H.type==="Photo"&&/^x/.test(H.pid||"")&&Ht.indexOf(H.pid)<0&&Ht.push(H.pid)})});let D=y=>gp("pics",y).then(H=>H&&H.buf?j_(H):null).catch(()=>null);return Promise.all([Promise.all(It.map(D)),Promise.all(Ht.map(D)),At]).then(([y,H])=>{y.forEach((vt,wt)=>{if(vt)try{un.push(hx(vt,1280,It[wt])),Qt.add(It[wt])}catch{}});let _t={};un.forEach(vt=>{_t[vt.pid]=vt}),yt.photos=(Array.isArray(ht.photos)?ht.photos:[]).map(vt=>_t[vt]).filter(Boolean).slice(-5),wl++;let ft={};return H.forEach((vt,wt)=>{if(!vt)return;let lt=document.createElement("canvas");lt.width=vt.naturalWidth,lt.height=vt.naturalHeight,lt.getContext("2d").drawImage(vt,0,0),ft[Ht[wt]]=lt,Qt.add(Ht[wt])}),B(!1),J(),c(!0),g?g.restore(at,ft):0}).then(()=>{t.paint(),ve&&(ve.hidden=!1),s.dataset.kept=String(Y.at),s.dataset.back="1"}).catch(()=>{}).then(ot,ot)}function Lt(Y){if(pe=Y,!Be)return;let ot=n("mk-back-text");ot&&(ot.textContent="A design from "+new Date(Y.at).toLocaleDateString("en-US",{month:"long",day:"numeric"})+" is saved on this device."),Be.hidden=!1}Be&&(n("mk-back-yes").addEventListener("click",()=>{pe&&qe(pe)}),n("mk-back-no").addEventListener("click",()=>{pe=null,Be.hidden=!0,Vt="",jt.set(""),Qt.clear(),ne=ne.then(()=>vu()).catch(()=>{})}));let F=n("mk-reset");F&&F.addEventListener("click",()=>{if(!F.dataset.ask){F.dataset.ask="1",F.dataset.was=F.textContent,F.textContent="This clears the name, photos and designs from this device. Tap again to do it.",setTimeout(()=>{F.dataset.ask&&(delete F.dataset.ask,F.textContent=F.dataset.was)},6e3);return}clearTimeout(de),pe={gone:!0},jt.set(""),ne.then(()=>vu()).catch(()=>{}).then(()=>{try{window.history.replaceState(null,"","#designs")}catch{}window.location.reload()})}),gp("kv","design").then(Y=>{if(Ae=!0,!(!Y||Y.v!==1||!Y.state)){if(!(Date.now()-Y.at<Ct*Mt)){vu().catch(()=>{});return}Y.sid&&Y.sid===jt.get()?qe(Y):Lt(Y)}}).catch(()=>{Ae=!0}),e.classList.add("has-make"),s.hidden=!1,p("graduation"),window.dispatchEvent(new Event("resize"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rx):rx();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
