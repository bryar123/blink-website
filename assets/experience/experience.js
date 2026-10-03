var _p=0,Tu=1,xp=2;var _o=1,vp=2,pa=3,Hr=0,Ui=1,Yn=2,Zn=0,ma=1,Eu=2,Au=3,Cu=4,yp=5;var ms=100,Sp=101,Mp=102,bp=103,wp=104,Tp=200,Ep=201,Ap=202,Cp=203,Ru=204,Pu=205,Rp=206,Pp=207,Ip=208,Lp=209,Dp=210,Np=211,Up=212,Fp=213,Op=214,Dl=0,Nl=1,Ul=2,sa=3,Fl=4,Ol=5,Bl=6,kl=7,Iu=0,Bp=1,kp=2,rn=0,Lu=1,Du=2,Nu=3,Uu=4,Fu=5,Ou=6,Bu=7;var ku=300,Wr=301,gs=302,hc=303,uc=304,xo=306,zl=1e3,Gn=1001,Vl=1002,oi=1003,zp=1004;var vo=1005;var Qt=1006,fc=1007;var Xr=1008;var sn=1009,zu=1010,Vu=1011,ga=1012,dc=1013,In=1014,Ln=1015,Dn=1016,pc=1017,mc=1018,_a=1020,Gu=35902,Hu=35899,Wu=1021,Xu=1022,vn=1023,Hn=1026,qr=1027,qu=1028,gc=1029,Yr=1030,_c=1031;var xc=1033,yo=33776,So=33777,Mo=33778,bo=33779,vc=35840,yc=35841,Sc=35842,Mc=35843,bc=36196,wc=37492,Tc=37496,Ec=37488,Ac=37489,wo=37490,Cc=37491,Rc=37808,Pc=37809,Ic=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,Fc=37815,Oc=37816,Bc=37817,kc=37818,zc=37819,Vc=37820,Gc=37821,Hc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,To=36285,Zc=36286;var Ka=2300,Gl=2301,Pl=2302,xu=2303,vu=2400,yu=2401,Su=2402;var Vp=3200;var Yu=0,Gp=1,fr="",ui="srgb",ja="srgb-linear",Qa="linear",pt="srgb";var Il=7680;var Hp=519,Wp=512,Xp=513,qp=514,Jc=515,Yp=516,Zp=517,$c=518,Jp=519,$p=35044;var Zu="300 es",Pn=2e3,eo=2001;function B_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function k_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kp(){let r=aa("canvas");return r.style.display="block",r}var Zd={},oa=null;function Ju(...r){let e="THREE."+r.shift();oa?oa("log",e,...r):console.log(e,...r)}function jp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=jp(r);let e="THREE."+r.shift();if(oa)oa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ge(...r){r=jp(r);let e="THREE."+r.shift();if(oa)oa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ds(...r){let e=r.join(" ");e in Zd||(Zd[e]=!0,ze(...r))}function Qp(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var em={[Dl]:Nl,[Ul]:Bl,[Fl]:kl,[sa]:Ol,[Nl]:Dl,[Bl]:Ul,[kl]:Fl,[Ol]:sa},Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=1234567,Ja=Math.PI/180,la=180/Math.PI;function xa(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xi[r&255]+xi[r>>8&255]+xi[r>>16&255]+xi[r>>24&255]+"-"+xi[e&255]+xi[e>>8&255]+"-"+xi[e>>16&15|64]+xi[e>>24&255]+"-"+xi[t&63|128]+xi[t>>8&255]+"-"+xi[t>>16&255]+xi[t>>24&255]+xi[i&255]+xi[i>>8&255]+xi[i>>16&255]+xi[i>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function $u(r,e){return(r%e+e)%e}function z_(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function V_(r,e,t){return r!==e?(t-r)/(e-r):0}function $a(r,e,t){return(1-t)*r+t*e}function G_(r,e,t,i){return $a(r,e,1-Math.exp(-t*i))}function H_(r,e=1){return e-Math.abs($u(r,e*2)-e)}function W_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function X_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function q_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Y_(r,e){return r+Math.random()*(e-r)}function Z_(r){return r*(.5-Math.random())}function J_(r){r!==void 0&&(Jd=r);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $_(r){return r*Ja}function K_(r){return r*la}function j_(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Q_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function e0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function t0(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function na(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Di(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Eo={DEG2RAD:Ja,RAD2DEG:la,generateUUID:xa,clamp:at,euclideanModulo:$u,mapLinear:z_,inverseLerp:V_,lerp:$a,damp:G_,pingpong:H_,smoothstep:W_,smootherstep:X_,randInt:q_,randFloat:Y_,randFloatSpread:Z_,seededRandom:J_,degToRad:$_,radToDeg:K_,isPowerOfTwo:j_,ceilPowerOfTwo:Q_,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:Di,denormalize:na},ot=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xn=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),C=Math.sin(w);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jh=new J,$d=new Xn,Ze=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,i,n,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=n[0],m=n[3],p=n[6],w=n[1],C=n[4],y=n[7],S=n[2],b=n[5],E=n[8];return s[0]=a*_+o*w+l*S,s[3]=a*m+o*C+l*b,s[6]=a*p+o*y+l*E,s[1]=c*_+h*w+d*S,s[4]=c*m+h*C+d*b,s[7]=c*p+h*y+d*E,s[2]=u*_+f*w+g*S,s[5]=u*m+f*C+g*b,s[8]=u*p+f*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=t*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qh.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qh.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qh=new Ze,Kd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i0(){let r={enabled:!0,workingColorSpace:ja,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(n.r=ur(n.r),n.g=ur(n.g),n.b=ur(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(n.r=ra(n.r),n.g=ra(n.g),n.b=ra(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===fr?Qa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ja]:{primaries:e,whitePoint:i,transfer:Qa,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}var st=i0();function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Hs,Hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=aa("canvas")),Hs.width=e.width,Hs.height=e.height;let n=Hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ur(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,ca=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(eu(n[a].image)):s.push(eu(n[a]))}else s=eu(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function eu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var r0=0,tu=new J,Si=class r extends Wn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Gn,n=Gn,s=Qt,a=Xr,o=vn,l=sn,c=r.DEFAULT_ANISOTROPY,h=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=xa(),this.name="",this.source=new ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=ku;Si.DEFAULT_ANISOTROPY=1;var Nt=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,y=(f+1)/2,S=(p+1)/2,b=(h+u)/4,E=(d+_)/4,v=(g+m)/4;return C>y&&C>S?C<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(C),n=b/i,s=E/i):y>S?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=b/n,s=v/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=E/s,n=v/s),this.set(i,n,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Wn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},s=new Si(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ca(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends Wl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},to=class extends Si{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=oi,this.minFilter=oi,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends Si{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=oi,this.minFilter=oi,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kt=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,i,n,s,a,o,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,i,n,s,a,o,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,a0)}lookAt(e,t,i){let n=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Cr.crossVectors(i,en),Cr.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Cr.crossVectors(i,en)),Cr.normalize(),ul.crossVectors(en,Cr),n[0]=Cr.x,n[4]=ul.x,n[8]=en.x,n[1]=Cr.y,n[5]=ul.y,n[9]=en.y,n[2]=Cr.z,n[6]=ul.z,n[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],C=i[7],y=i[11],S=i[15],b=n[0],E=n[4],v=n[8],T=n[12],A=n[1],D=n[5],I=n[9],k=n[13],L=n[2],O=n[6],q=n[10],z=n[14],K=n[3],X=n[7],R=n[11],Q=n[15];return s[0]=a*b+o*A+l*L+c*K,s[4]=a*E+o*D+l*O+c*X,s[8]=a*v+o*I+l*q+c*R,s[12]=a*T+o*k+l*z+c*Q,s[1]=h*b+d*A+u*L+f*K,s[5]=h*E+d*D+u*O+f*X,s[9]=h*v+d*I+u*q+f*R,s[13]=h*T+d*k+u*z+f*Q,s[2]=g*b+_*A+m*L+p*K,s[6]=g*E+_*D+m*O+p*X,s[10]=g*v+_*I+m*q+p*R,s[14]=g*T+_*k+m*z+p*Q,s[3]=w*b+C*A+y*L+S*K,s[7]=w*E+C*D+y*O+S*X,s[11]=w*v+C*I+y*q+S*R,s[15]=w*T+C*k+y*z+S*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],w=l*f-c*u,C=o*f-c*d,y=o*u-l*d,S=a*f-c*h,b=a*u-l*h,E=a*d-o*h;return t*(_*w-m*C+p*y)-i*(g*w-m*S+p*b)+n*(g*C-_*S+p*E)-s*(g*y-_*b+m*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+n*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=t*o-i*a,C=t*l-n*a,y=t*c-s*a,S=i*l-n*o,b=i*c-s*o,E=n*c-s*l,v=h*_-d*g,T=h*m-u*g,A=h*p-f*g,D=d*m-u*_,I=d*p-f*_,k=u*p-f*m,L=w*k-C*I+y*D+S*A-b*T+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return e[0]=(o*k-l*I+c*D)*O,e[1]=(n*I-i*k-s*D)*O,e[2]=(_*E-m*b+p*S)*O,e[3]=(u*b-d*E-f*S)*O,e[4]=(l*A-a*k-c*T)*O,e[5]=(t*k-n*A+s*T)*O,e[6]=(m*y-g*E-p*C)*O,e[7]=(h*E-u*y+f*C)*O,e[8]=(a*I-o*A+c*v)*O,e[9]=(i*A-t*I-s*v)*O,e[10]=(g*b-_*y+p*w)*O,e[11]=(d*y-h*b-f*w)*O,e[12]=(o*T-a*D-l*v)*O,e[13]=(t*D-i*T+n*v)*O,e[14]=(_*C-g*S-m*w)*O,e[15]=(h*S-d*C+u*w)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,m=a*d,p=o*d,w=l*c,C=l*h,y=l*d,S=i.x,b=i.y,E=i.z;return n[0]=(1-(_+p))*S,n[1]=(f+y)*S,n[2]=(g-C)*S,n[3]=0,n[4]=(f-y)*b,n[5]=(1-(u+p))*b,n[6]=(m+w)*b,n[7]=0,n[8]=(g+C)*E,n[9]=(m-w)*E,n[10]=(1-(u+_))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ws.set(n[0],n[1],n[2]).length(),o=Ws.set(n[4],n[5],n[6]).length(),l=Ws.set(n[8],n[9],n[10]).length();s<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,a,o=Pn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Pn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===eo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Pn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Pn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===eo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ws=new J,En=new kt,s0=new J(0,0,0),a0=new J(1,1,1),Cr=new J,ul=new J,en=new J,Qd=new kt,ep=new Xn,Nr=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nr.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},o0=0,tp=new J,Xs=new Xn,sr=new kt,fl=new J,Xa=new J,l0=new J,c0=new Xn,ip=new J(1,0,0),np=new J(0,1,0),rp=new J(0,0,1),sp={type:"added"},h0={type:"removed"},qs={type:"childadded",child:null},iu={type:"childremoved",child:null},qi=class r extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new J,t=new Nr,i=new Xn,n=new J(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new kt},normalMatrix:{value:new Ze}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fl.copy(e):fl.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Xa,fl,this.up):sr.lookAt(fl,Xa,this.up),this.quaternion.setFromRotationMatrix(sr),n&&(sr.extractRotation(n.matrixWorld),Xs.setFromRotationMatrix(sr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),qs.child=e,this.dispatchEvent(qs),qs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*n,s[13]+=i-s[1]*t-s[5]*i-s[9]*n,s[14]+=n-s[2]*t-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qi.DEFAULT_UP=new J(0,1,0);qi.DEFAULT_MATRIX_AUTO_UPDATE=!0;qi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hr=class extends qi{constructor(){super(),this.isGroup=!0,this.type="Group"}},u0={type:"move"},ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function nu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=st.workingColorSpace){if(e=$u(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return st.colorSpaceToWorking(this,n),this}setStyle(e,t=ui){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){let i=tm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return st.workingToColorSpace(vi.copy(this),e),Math.round(at(vi.r*255,0,255))*65536+Math.round(at(vi.g*255,0,255))*256+Math.round(at(vi.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(vi.copy(this),t);let i=vi.r,n=vi.g,s=vi.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=ui){st.workingToColorSpace(vi.copy(this),e);let t=vi.r,i=vi.g,n=vi.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(dl);let i=$a(Rr.h,dl.h,t),n=$a(Rr.s,dl.s,t),s=$a(Rr.l,dl.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vi=new ct;ct.NAMES=tm;var io=class extends qi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},An=new J,ar=new J,ru=new J,or=new J,Ys=new J,Zs=new J,ap=new J,su=new J,au=new J,ou=new J,lu=new Nt,cu=new Nt,hu=new Nt,Dr=class r{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),An.subVectors(e,t),n.cross(An);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){An.subVectors(n,t),ar.subVectors(i,t),ru.subVectors(e,t);let a=An.dot(An),o=An.dot(ar),l=An.dot(ru),c=ar.dot(ar),h=ar.dot(ru),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,or.x),l.addScaledVector(a,or.y),l.addScaledVector(o,or.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return lu.setScalar(0),cu.setScalar(0),hu.setScalar(0),lu.fromBufferAttribute(e,t),cu.fromBufferAttribute(e,i),hu.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(lu,s.x),a.addScaledVector(cu,s.y),a.addScaledVector(hu,s.z),a}static isFrontFacing(e,t,i,n){return An.subVectors(i,t),ar.subVectors(e,t),An.cross(ar).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),An.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Ys.subVectors(n,i),Zs.subVectors(s,i),su.subVectors(e,i);let l=Ys.dot(su),c=Zs.dot(su);if(l<=0&&c<=0)return t.copy(i);au.subVectors(e,n);let h=Ys.dot(au),d=Zs.dot(au);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ys,a);ou.subVectors(e,s);let f=Ys.dot(ou),g=Zs.dot(ou);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Zs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ap.subVectors(s,n),o=(d-h)/(d-h+(f-g)),t.copy(n).addScaledVector(ap,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ur=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pl.copy(i.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),ml.subVectors(this.max,qa),Js.subVectors(e.a,qa),$s.subVectors(e.b,qa),Ks.subVectors(e.c,qa),Pr.subVectors($s,Js),Ir.subVectors(Ks,$s),cs.subVectors(Js,Ks);let t=[0,-Pr.z,Pr.y,0,-Ir.z,Ir.y,0,-cs.z,cs.y,Pr.z,0,-Pr.x,Ir.z,0,-Ir.x,cs.z,0,-cs.x,-Pr.y,Pr.x,0,-Ir.y,Ir.x,0,-cs.y,cs.x,0];return!uu(t,Js,$s,Ks,ml)||(t=[1,0,0,0,1,0,0,0,1],!uu(t,Js,$s,Ks,ml))?!1:(gl.crossVectors(Pr,Ir),t=[gl.x,gl.y,gl.z],uu(t,Js,$s,Ks,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new J,new J,new J,new J,new J,new J,new J,new J],Cn=new J,pl=new Ur,Js=new J,$s=new J,Ks=new J,Pr=new J,Ir=new J,cs=new J,qa=new J,ml=new J,gl=new J,hs=new J;function uu(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){hs.fromArray(r,s);let o=n.x*Math.abs(hs.x)+n.y*Math.abs(hs.y)+n.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Jt=new J,_l=new ot,f0=0,_n=class extends Wn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$p,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Di(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),i=Di(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),i=Di(i,this.array),n=Di(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Di(t,this.array),i=Di(i,this.array),n=Di(n,this.array),s=Di(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var no=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ro=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var xn=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},d0=new Ur,Ya=new J,fu=new J,fa=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):d0.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);let t=Ya.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ya,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(fu)),this.expandByPoint(Ya.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},p0=0,gn=new kt,du=new qi,js=new J,tn=new Ur,Za=new Ur,ai=new J,qn=class r extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B_(e)?ro:no)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){let i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Za.setFromBufferAttribute(o),this.morphTargetsRelative?(ai.addVectors(tn.min,Za.min),tn.expandByPoint(ai),ai.addVectors(tn.max,Za.max),tn.expandByPoint(ai)):(tn.expandByPoint(Za.min),tn.expandByPoint(Za.max))}tn.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)ai.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ai));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ai.fromBufferAttribute(o,c),l&&(js.fromBufferAttribute(e,c),ai.add(js)),n=Math.max(n,i.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new J,l[v]=new J;let c=new J,h=new J,d=new J,u=new ot,f=new ot,g=new ot,_=new J,m=new J;function p(v,T,A){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,A),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[v].add(_),o[T].add(_),o[A].add(_),l[v].add(m),l[T].add(m),l[A].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,T=w.length;v<T;++v){let A=w[v],D=A.start,I=A.count;for(let k=D,L=D+I;k<L;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let C=new J,y=new J,S=new J,b=new J;function E(v){S.fromBufferAttribute(n,v),b.copy(S);let T=o[v];C.copy(T),C.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(b,T);let D=y.dot(l[v])<0?-1:1;a.setXYZW(v,C.x,C.y,C.z,D)}for(let v=0,T=w.length;v<T;++v){let A=w[v],D=A.start,I=A.count;for(let k=D,L=D+I;k<L;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new J,s=new J,a=new J,o=new J,l=new J,c=new J,h=new J,d=new J;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new _n(u,h,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pu=new J,m0=new J,g0=new Ze,Rn=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=pu.subVectors(i,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(pu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||g0.getNormalMatrix(e),n=this.coplanarPoint(pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_0=0,ps=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=ma,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Pu,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Rn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var cr=new J,mu=new J,xl=new J,vl=new J,so=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){mu.copy(e).add(t).multiplyScalar(.5),xl.copy(t).sub(e).normalize(),vl.copy(this.origin).sub(mu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(xl),o=vl.dot(this.direction),l=-vl.dot(xl),c=vl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(mu).addScaledVector(xl,u),f}intersectSphere(e,t){if(e.radius<0)return null;cr.subVectors(e.center,this.origin);let i=cr.dot(this.direction),n=cr.dot(cr)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,n,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,w=i.y-a.y,C=i.z-a.z,y=Math.abs(l),S=Math.abs(c),b=Math.abs(h),E,v,T,A,D,I,k,L,O,q,z,K;if(y>=S&&y>=b?(T=l,I=d,O=g,K=p,l>=0?(E=c,v=h,A=u,D=f,k=_,L=m,q=w,z=C):(E=h,v=c,A=f,D=u,k=m,L=_,q=C,z=w)):S>=b?(T=c,I=u,O=_,K=w,c>=0?(E=h,v=l,A=f,D=d,k=m,L=g,q=C,z=p):(E=l,v=h,A=d,D=f,k=g,L=m,q=p,z=C)):(T=h,I=f,O=m,K=C,h>=0?(E=l,v=c,A=d,D=u,k=g,L=_,q=p,z=w):(E=c,v=l,A=u,D=d,k=_,L=g,q=w,z=p)),T===0)return null;let X=E/T,R=v/T,Q=1/T,Se=A-X*I,Me=D-R*I,Ve=k-X*O,ke=L-R*O,He=q-X*K,Z=z-R*K,ee=He*ke-Z*Ve,_e=Se*Z-Me*He,Oe=Ve*Me-ke*Se;if(n){if(ee<0||_e<0||Oe<0)return null}else if((ee<0||_e<0||Oe<0)&&(ee>0||_e>0||Oe>0))return null;let me=ee+_e+Oe;if(me===0)return null;let Ue=Q*(ee*I+_e*O+Oe*K);return(me>0?Ue<0:Ue>0)?null:this.at(Ue/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fr=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},op=new kt,us=new so,yl=new fa,lp=new J,Sl=new J,Ml=new J,bl=new J,gu=new J,wl=new J,cp=new J,Tl=new J,Yi=class extends qi{constructor(e=new qn,t=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){wl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(gu.fromBufferAttribute(d,e),a?wl.addScaledVector(gu,h):wl.addScaledVector(gu.sub(t),h))}t.add(wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(s),us.copy(e.ray).recast(e.near),!(yl.containsPoint(us.origin)===!1&&(us.intersectSphere(yl,lp)===null||us.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(op.copy(s).invert(),us.copy(e.ray).applyMatrix4(op),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,S=C;y<S;y+=3){let b=o.getX(y),E=o.getX(y+1),v=o.getX(y+2);n=El(this,p,e,i,c,h,d,b,E,v),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let w=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);n=El(this,a,e,i,c,h,d,w,C,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,S=C;y<S;y+=3){let b=y,E=y+1,v=y+2;n=El(this,p,e,i,c,h,d,b,E,v),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let w=m,C=m+1,y=m+2;n=El(this,a,e,i,c,h,d,w,C,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function x0(r,e,t,i,n,s,a,o){let l;if(e.side===Ui?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Hr,o),l===null)return null;Tl.copy(o),Tl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:r}}function El(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Sl),r.getVertexPosition(l,Ml),r.getVertexPosition(c,bl);let h=x0(r,e,t,i,Sl,Ml,bl,cp);if(h){let d=new J;Dr.getBarycoord(cp,Sl,Ml,bl,d),n&&(h.uv=Dr.getInterpolatedAttribute(n,o,l,c,d,new ot)),s&&(h.uv1=Dr.getInterpolatedAttribute(s,o,l,c,d,new ot)),a&&(h.normal=Dr.getInterpolatedAttribute(a,o,l,c,d,new J),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new J,materialIndex:0};Dr.getNormal(Sl,Ml,bl,u.normal),h.face=u,h.barycoord=d}return h}var ql=class extends Si{constructor(e=null,t=1,i=1,n,s,a,o,l,c=oi,h=oi,d,u){super(null,a,o,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=new fa,v0=new ot(.5,.5),Al=new J,ao=class{constructor(e=new Rn,t=new Rn,i=new Rn,n=new Rn,s=new Rn,a=new Rn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],w=s[12],C=s[13],y=s[14],S=s[15];if(n[0].setComponents(c-a,f-h,p-g,S-w).normalize(),n[1].setComponents(c+a,f+h,p+g,S+w).normalize(),n[2].setComponents(c+o,f+d,p+_,S+C).normalize(),n[3].setComponents(c-o,f-d,p-_,S-C).normalize(),i)n[4].setComponents(l,u,m,y).normalize(),n[5].setComponents(c-l,f-u,p-m,S-y).normalize();else if(n[4].setComponents(c-l,f-u,p-m,S-y).normalize(),t===Pn)n[5].setComponents(c+l,f+u,p+m,S+y).normalize();else if(t===eo)n[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=v0.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Al.x=n.normal.x>0?e.max.x:e.min.x,Al.y=n.normal.y>0?e.max.y:e.min.y,Al.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oo=class extends Si{constructor(e,t,i,n,s=Qt,a=Qt,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var lo=class extends Si{constructor(e=[],t=Wr,i,n,s,a,o,l,c,h){super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Or=class extends Si{constructor(e,t,i=In,n,s,a,o=oi,l=oi,c,h=Hn,d=1){if(h!==Hn&&h!==qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yl=class extends Or{constructor(e,t=In,i=Wr,n,s,a=oi,o=oi,l,c=Hn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},co=class extends Si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Br=class r extends qn{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(d,2));function g(_,m,p,w,C,y,S,b,E,v,T){let A=y/E,D=S/v,I=y/2,k=S/2,L=b/2,O=E+1,q=v+1,z=0,K=0,X=new J;for(let R=0;R<q;R++){let Q=R*D-k;for(let Se=0;Se<O;Se++){let Me=Se*A-I;X[_]=Me*w,X[m]=Q*C,X[p]=L,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),d.push(Se/E),d.push(1-R/v),z+=1}}for(let R=0;R<v;R++)for(let Q=0;Q<E;Q++){let Se=u+Q+O*R,Me=u+Q+O*(R+1),Ve=u+(Q+1)+O*(R+1),ke=u+(Q+1)+O*R;l.push(Se,Me,ke),l.push(Me,Ve,ke),K+=6}o.addGroup(f,K,T),f+=K,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kr=class r extends qn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let C=0;C<c;C++){let y=C*d-s;g.push(y,-w,0),_.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let C=w+c*p,y=w+c*(p+1),S=w+1+c*(p+1),b=w+1+c*p;f.push(C,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function _s(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];if(hp(n))n.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(hp(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[t][i]=s}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Mi(r){let e={};for(let t=0;t<r.length;t++){let i=_s(r[t]);for(let n in i)e[n]=i[n]}return e}function hp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function y0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ku(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var im={clone:_s,merge:Mi},S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ni=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=y0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(n.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(n.value);break;case"v3":this.uniforms[i].value=new J().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Nt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(n.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zl=class extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Jl=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function _u(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var zr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends zr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case yu:s=e,o=2*t-i;break;case Su:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yu:a=e,l=2*i-t;break;case Su:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,C=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+w*a[c+S]+C*a[l+S]+y*a[d+S];return s}},jl=class extends zr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Ql=class extends zr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ec=class extends zr{interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(n-t),_=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*_+a[l+m]*g;return s}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*u+g*2,w=d[p],C=d[p+1],y=e*u+g*2,S=h[y],b=h[y+1],E=w0(i,t,w,S,n);s[g]=nm(E,_,C,b,m)}return s}};function nm(r,e,t,i,n){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*i+r*r*r*n}function b0(r,e,t,i,n){let s=1-r;return 3*s*s*(t-e)+6*s*r*(i-t)+3*r*r*(n-i)}function w0(r,e,t,i,n){let s=(r-e)/(n-e);for(let a=0;a<8;a++){let o=nm(s,e,t,i,n)-r;if(Math.abs(o)<1e-10)break;let l=b0(s,e,t,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var nn=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),_u(e.settings)&&(i.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ec(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ka:t=this.InterpolantFactoryMethodDiscrete;break;case Gl:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break;case xu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ze("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return Gl;case this.InterpolantFactoryMethodSmooth:return Pl;case this.InterpolantFactoryMethodBezier:return xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;_u(this.settings)&&(up(this.settings.inTangents,e),up(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&k_(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Pl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,_u(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function up(r,e){for(let t=0,i=r.length;t!==i;t+=2)r[t]*=e}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Gl;var Vr=class extends nn{constructor(e,t,i){super(e,t,i)}};Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=Ka;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var tc=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}};tc.prototype.ValueTypeName="color";var ic=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}};ic.prototype.ValueTypeName="number";var nc=class extends zr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Xn.slerpFlat(s,0,a,c-o,a,c,l);return s}},ho=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends nn{constructor(e,t,i){super(e,t,i)}};Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Ka;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends nn{constructor(e,t,i,n){super(e,t,i,n)}};rc.prototype.ValueTypeName="vector";var Ll={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(fp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!fp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function fp(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var sc=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rm=new sc,da=class{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};da.DEFAULT_MATERIAL_NAME="__DEFAULT";var ea=new WeakMap,ac=class extends da{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ll.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ea.get(a);d===void 0&&(d=[],ea.set(a,d)),d.push({onLoad:t,onError:n})}return a}let o=aa("img");function l(){h(),t&&t(this);let d=ea.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}ea.delete(this),s.manager.itemEnd(e)}function c(d){h(),n&&n(d),Ll.remove(`image:${e}`);let u=ea.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}ea.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ll.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var uo=class extends da{constructor(e){super(e)}load(e,t,i,n){let s=new Si,a=new ac(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},oc=class extends qi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends oc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var Cl=new J,Rl=new Xn,Vn=new J,po=class extends qi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,Rl,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Cl,Rl,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,Rl,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Lr=new J,dp=new ot,pp=new ot,yi=class extends po{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,dp,pp),t.subVectors(pp,dp)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mo=class extends po{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ta=-90,ia=1,lc=class extends qi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new yi(ta,ia,e,t);n.layers=this.layers,this.add(n);let s=new yi(ta,ia,e,t);s.layers=this.layers,this.add(s);let a=new yi(ta,ia,e,t);a.layers=this.layers,this.add(a);let o=new yi(ta,ia,e,t);o.layers=this.layers,this.add(o);let l=new yi(ta,ia,e,t);l.layers=this.layers,this.add(l);let c=new yi(ta,ia,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},cc=class extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ju="\\[\\]\\.:\\/",T0=new RegExp("["+ju+"]","g"),Qu="[^"+ju+"]",E0="[^"+ju.replace("\\.","")+"]",A0=/((?:WC+[\/:])*)/.source.replace("WC",Qu),C0=/(WCOD+)?/.source.replace("WCOD",E0),R0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),P0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),I0=new RegExp("^"+A0+C0+R0+P0+"$"),L0=["material","materials","bones","map"],Mu=class{constructor(e,t,i){let n=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(e){let t=I0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);L0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Mu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bw=new Float32Array(1);var mp=new kt,go=class{constructor(e,t,i=0,n=1/0){this.ray=new so(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,i=[]){return bu(e,this,i,t),i.sort(gp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)bu(e[n],this,i,t);return i.sort(gp),i}};function gp(r,e){return r.distance-e.distance}function bu(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)bu(s[a],e,t,!0)}}var wu=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=n,this}};function ef(r,e,t,i){let n=D0(i);switch(t){case Wu:return r*e;case qu:return r*e/n.components*n.byteLength;case gc:return r*e/n.components*n.byteLength;case Yr:return r*e*2/n.components*n.byteLength;case _c:return r*e*2/n.components*n.byteLength;case Xu:return r*e*3/n.components*n.byteLength;case vn:return r*e*4/n.components*n.byteLength;case xc:return r*e*4/n.components*n.byteLength;case yo:case So:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Mo:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yc:case Mc:return Math.max(r,16)*Math.max(e,8)/4;case vc:case Sc:return Math.max(r,8)*Math.max(e,8)/2;case bc:case wc:case Ec:case Ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tc:case wo:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Hc:case Wc:case Xc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qc:case Yc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case To:case Zc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function D0(r){switch(r){case sn:case zu:return{byteLength:1,components:1};case ga:case Vu:case Dn:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case In:case dc:case Ln:return{byteLength:4,components:1};case Gu:case Hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Em(){let r=null,e=!1,t=null,i=null;function n(s,a){i=r.requestAnimationFrame(n),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function U0(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var F0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O0=`#ifdef USE_ALPHAHASH
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
#endif`,B0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,J0=`#ifdef USE_IRIDESCENCE
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
#endif`,$0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sx=`#define PI 3.141592653589793
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
} // validated`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ox=`vec3 transformedNormal = objectNormal;
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
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
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
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Nx=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Ux=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qx=`#if defined( USE_POINTS_UV )
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
#endif`,Yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
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
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sv=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
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
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#ifdef USE_TRANSMISSION
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
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
}`,Hv=`#if DEPTH_PACKING == 3200
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`#define DISTANCE
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`uniform float scale;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,jv=`#define LAMBERT
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
}`,Qv=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,ey=`#define MATCAP
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
}`,ty=`#define MATCAP
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
}`,iy=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,ry=`#define PHONG
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
}`,sy=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,ay=`#define STANDARD
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
}`,oy=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,ly=`#define TOON
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
}`,cy=`#define TOON
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
}`,hy=`uniform float size;
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
}`,uy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,dy=`uniform vec3 color;
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
}`,py=`uniform float rotation;
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
}`,my=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:F0,alphahash_pars_fragment:O0,alphamap_fragment:B0,alphamap_pars_fragment:k0,alphatest_fragment:z0,alphatest_pars_fragment:V0,aomap_fragment:G0,aomap_pars_fragment:H0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:Y0,bsdfs:Z0,iridescence_fragment:J0,bumpmap_pars_fragment:$0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:ix,color_pars_vertex:nx,color_vertex:rx,common:sx,cube_uv_reflection_fragment:ax,defaultnormal_vertex:ox,displacementmap_pars_vertex:lx,displacementmap_vertex:cx,emissivemap_fragment:hx,emissivemap_pars_fragment:ux,colorspace_fragment:fx,colorspace_pars_fragment:dx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Cx,envmap_vertex:xx,fog_vertex:vx,fog_pars_vertex:yx,fog_fragment:Sx,fog_pars_fragment:Mx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:wx,lights_lambert_fragment:Tx,lights_lambert_pars_fragment:Ex,lights_pars_begin:Ax,lights_toon_fragment:Rx,lights_toon_pars_fragment:Px,lights_phong_fragment:Ix,lights_phong_pars_fragment:Lx,lights_physical_fragment:Dx,lights_physical_pars_fragment:Nx,lights_fragment_begin:Ux,lights_fragment_maps:Fx,lights_fragment_end:Ox,lightprobes_pars_fragment:Bx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Gx,map_fragment:Hx,map_pars_fragment:Wx,map_particle_fragment:Xx,map_particle_pars_fragment:qx,metalnessmap_fragment:Yx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:jx,morphtarget_vertex:Qx,normal_fragment_begin:ev,normal_fragment_maps:tv,normal_pars_fragment:iv,normal_pars_vertex:nv,normal_vertex:rv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:av,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:lv,iridescence_pars_fragment:cv,opaque_fragment:hv,packing:uv,premultiplied_alpha_fragment:fv,project_vertex:dv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:gv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:vv,shadowmap_vertex:yv,shadowmask_pars_fragment:Sv,skinbase_vertex:Mv,skinning_pars_vertex:bv,skinning_vertex:wv,skinnormal_vertex:Tv,specularmap_fragment:Ev,specularmap_pars_fragment:Av,tonemapping_fragment:Cv,tonemapping_pars_fragment:Rv,transmission_fragment:Pv,transmission_pars_fragment:Iv,uv_pars_fragment:Lv,uv_pars_vertex:Dv,uv_vertex:Nv,worldpos_vertex:Uv,background_vert:Fv,background_frag:Ov,backgroundCube_vert:Bv,backgroundCube_frag:kv,cube_vert:zv,cube_frag:Vv,depth_vert:Gv,depth_frag:Hv,distance_vert:Wv,distance_frag:Xv,equirect_vert:qv,equirect_frag:Yv,linedashed_vert:Zv,linedashed_frag:Jv,meshbasic_vert:$v,meshbasic_frag:Kv,meshlambert_vert:jv,meshlambert_frag:Qv,meshmatcap_vert:ey,meshmatcap_frag:ty,meshnormal_vert:iy,meshnormal_frag:ny,meshphong_vert:ry,meshphong_frag:sy,meshphysical_vert:ay,meshphysical_frag:oy,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:hy,points_frag:uy,shadow_vert:fy,shadow_frag:dy,sprite_vert:py,sprite_frag:my},ve={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},$n={basic:{uniforms:Mi([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Mi([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Mi([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Mi([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Mi([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ct(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Mi([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Mi([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Mi([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Mi([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Mi([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Mi([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Mi([ve.common,ve.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Mi([ve.lights,ve.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};$n.physical={uniforms:Mi([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Kc={r:0,b:0,g:0},gy=new kt,Am=new Ze;Am.set(-1,0,0,0,1,0,0,0,1);function _y(r,e,t,i,n,s){let a=new ct(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let y=w.backgroundBlurriness>0;C=e.get(C,y)}return C}function g(w){let C=!1,y=f(w);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===xo)?(c===void 0&&(c=new Yi(new Br(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:_s($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Am),c.material.toneMapped=st.getTransfer(y.colorSpace)!==pt,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Yi(new kr(2,2),new Ni({name:"BackgroundMaterial",uniforms:_s($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,C){w.getRGB(Kc,Ku(r)),t.buffers.color.setClear(Kc.r,Kc.g,Kc.b,C,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:_,dispose:p}}function xy(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,a=!1;function o(D,I,k,L,O){let q=!1,z=d(D,L,k,I);s!==z&&(s=z,c(s.object)),q=f(D,L,k,O),q&&g(D,L,k,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(D,I,k,L),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,k,L){let O=L.wireframe===!0,q=i[I.id];q===void 0&&(q={},i[I.id]=q);let z=D.isInstancedMesh===!0?D.id:0,K=q[z];K===void 0&&(K={},q[z]=K);let X=K[k.id];X===void 0&&(X={},K[k.id]=X);let R=X[O];return R===void 0&&(R=u(l()),X[O]=R),R}function u(D){let I=[],k=[],L=[];for(let O=0;O<t;O++)I[O]=0,k[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,k,L){let O=s.attributes,q=I.attributes,z=0,K=k.getAttributes();for(let X in K)if(K[X].location>=0){let Q=O[X],Se=q[X];if(Se===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Q===void 0||Q.attribute!==Se||Se&&Q.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function g(D,I,k,L){let O={},q=I.attributes,z=0,K=k.getAttributes();for(let X in K)if(K[X].location>=0){let Q=q[X];Q===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Se={};Se.attribute=Q,Q&&Q.data&&(Se.data=Q.data),O[X]=Se,z++}s.attributes=O,s.attributesNum=z,s.index=L}function _(){let D=s.newAttributes;for(let I=0,k=D.length;I<k;I++)D[I]=0}function m(D){p(D,0)}function p(D,I){let k=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;k[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),O[D]!==I&&(r.vertexAttribDivisor(D,I),O[D]=I)}function w(){let D=s.newAttributes,I=s.enabledAttributes;for(let k=0,L=I.length;k<L;k++)I[k]!==D[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function C(D,I,k,L,O,q,z){z===!0?r.vertexAttribIPointer(D,I,k,O,q):r.vertexAttribPointer(D,I,k,L,O,q)}function y(D,I,k,L){_();let O=L.attributes,q=k.getAttributes(),z=I.defaultAttributeValues;for(let K in q){let X=q[K];if(X.location>=0){let R=O[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let Q=R.normalized,Se=R.itemSize,Me=e.get(R);if(Me===void 0)continue;let Ve=Me.buffer,ke=Me.type,He=Me.bytesPerElement,Z=ke===r.INT||ke===r.UNSIGNED_INT||R.gpuType===dc;if(R.isInterleavedBufferAttribute){let ee=R.data,_e=ee.stride,Oe=R.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)p(X.location+me,ee.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let me=0;me<X.locationSize;me++)C(X.location+me,Se/X.locationSize,ke,Q,_e*He,(Oe+Se/X.locationSize*me)*He,Z)}else{if(R.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let ee=0;ee<X.locationSize;ee++)C(X.location+ee,Se/X.locationSize,ke,Q,Se*He,Se/X.locationSize*ee*He,Z)}}else if(z!==void 0){let Q=z[K];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(X.location,Q);break;case 3:r.vertexAttrib3fv(X.location,Q);break;case 4:r.vertexAttrib4fv(X.location,Q);break;default:r.vertexAttrib1fv(X.location,Q)}}}}w()}function S(){T();for(let D in i){let I=i[D];for(let k in I){let L=I[k];for(let O in L){let q=L[O];for(let z in q)h(q[z].object),delete q[z];delete L[O]}}delete i[D]}}function b(D){if(i[D.id]===void 0)return;let I=i[D.id];for(let k in I){let L=I[k];for(let O in L){let q=L[O];for(let z in q)h(q[z].object),delete q[z];delete L[O]}}delete i[D.id]}function E(D){for(let I in i){let k=i[I];for(let L in k){let O=k[L];if(O[D.id]===void 0)continue;let q=O[D.id];for(let z in q)h(q[z].object),delete q[z];delete O[D.id]}}}function v(D){for(let I in i){let k=i[I],L=D.isInstancedMesh===!0?D.id:0,O=k[L];if(O!==void 0){for(let q in O){let z=O[q];for(let K in z)h(z[K].object),delete z[K];delete O[q]}delete k[L],Object.keys(k).length===0&&delete i[I]}}}function T(){A(),a=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function vy(r,e,t){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function yy(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(E){return!(E!==vn&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let v=E===Dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==sn&&E!==Ln&&!v&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:y,maxSamples:S,samples:b}}function Sy(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Rn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{let w=s?0:i,C=w*4,y=p.clippingState||null;l.value=y,y=h(g,u,C,f);for(let S=0;S!==C;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=f;C!==_;++C,y+=4)a.copy(d[C]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ya=4,My=6,by=20,wy=256,Ao=new mo,sm=new ct,tf=null,nf=0,rf=0,sf=!1,Ty=new J,xs=new J,Qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=Ty}=s;tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tf,nf,rf),this._renderer.xr.enabled=sf,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Dn,format:vn,colorSpace:ja,depthBuffer:!1},n=am(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ey(s)),this._blurMaterial=Cy(s,e,t),this._ggxMaterial=Ay(s,e,t)}return n}_compileMaterial(e){let t=new Yi(new qn,e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,i,n,s){let l=new yi(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sm),d.toneMapping=rn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new Br,new Fr({name:"PMREM.Background",side:Ui,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(sm),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[C],s.y,s.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[C]));let S=this._cubeSize;va(n,y*S,C>2?S:0,S,S),d.setRenderTarget(n),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Wr||e.mapping===gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ao)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-ya?i-g+ya:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,va(s,m,p,3*_,2*_),n.setRenderTarget(s),n.render(o,Ao),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,va(e,m,p,3*_,2*_),n.setRenderTarget(e),n.render(o,Ao)}_blur(e,t,i,n){let s=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,n,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],d=3*h*(n>this._lodMax-ya?n-this._lodMax+ya:0),u=4*(this._cubeSize-h);va(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ao)}};function Ey(r){let e=[],t=[],i=r,n=r-ya+1+My;for(let s=0;s<n;s++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,C=p>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];g.set(y,f*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,E=h[S*2+1]*2-1;p===0?xs.set(1,E,b):p===1?xs.set(-b,1,-E):p===2?xs.set(-b,E,1):p===3?xs.set(-1,E,-b):p===4?xs.set(-b,-1,E):xs.set(b,E,-1),xs.toArray(_,(p*u+S)*f)}}let m=new qn;m.setAttribute("position",new _n(g,f)),m.setAttribute("outputDirection",new _n(_,f)),t.push(new Yi(m,null)),i>ya&&i--}return{lodMeshes:t,sizeLods:e}}function am(r,e,t){let i=new Xi(r,e,t);return i.texture.mapping=xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Ay(r,e,t){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cy(r,e,t){return new Ni({name:"SphericalGaussianBlur",defines:{SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ih(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function om(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function lm(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var eh=class extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new lo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Br(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ui,blending:Zn});s.uniforms.tEquirect.value=t;let a=new Yi(n,s),o=t.minFilter;return t.minFilter===Xr&&(t.minFilter=Qt),new lc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}};function Ry(r){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===hc||f===uc)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new eh(g.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===hc||f===uc,_=f===Wr||f===gs;if(g||_){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Qc(r)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||_&&w&&l(w)?(i===null&&(i=new Qc(r)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===hc?u.mapping=Wr:f===uc&&(u.mapping=gs),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Py(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&ds("WebGLRenderer: "+i+" extension not supported."),n}}}function Iy(r,e,t,i){let n={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let C=0,y=w.length;C<y;C+=3){let S=w[C+0],b=w[C+1],E=w[C+2];u.push(S,b,b,E,E,S)}}else{let w=g.array;_=g.version;for(let C=0,y=w.length/3-1;C<y;C+=3){let S=C+0,b=C+1,E=C+2;u.push(S,b,b,E,E,S)}}let m=new(g.count>=65535?ro:no)(u,1);m.version=_;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ly(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Ny(r,e,t){let i=new WeakMap,n=new Nt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let y=o.attributes.position.count*C,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*S*4*d),E=new to(b,y,S,d);E.type=Ln,E.needsUpdate=!0;let v=C*4;for(let A=0;A<d;A++){let D=m[A],I=p[A],k=w[A],L=y*S*4*A;for(let O=0;O<D.count;O++){let q=O*v;f===!0&&(n.fromBufferAttribute(D,O),b[L+q+0]=n.x,b[L+q+1]=n.y,b[L+q+2]=n.z,b[L+q+3]=0),g===!0&&(n.fromBufferAttribute(I,O),b[L+q+4]=n.x,b[L+q+5]=n.y,b[L+q+6]=n.z,b[L+q+7]=0),_===!0&&(n.fromBufferAttribute(k,O),b[L+q+8]=n.x,b[L+q+9]=n.y,b[L+q+10]=n.z,b[L+q+11]=k.itemSize===4?n.w:1)}}u={count:d,texture:E,size:new ot(y,S)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Uy(r,e,t,i,n){let s=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Fy={[Lu]:"LINEAR_TONE_MAPPING",[Du]:"REINHARD_TONE_MAPPING",[Nu]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[Bu]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function Oy(r,e,t,i,n,s){let a=new Xi(e,t,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new qn;c.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xn([0,2,0,0,2,0],2));let h=new Zl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Yi(c,h),u=new mo(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,w=[],C=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<w.length;b++){let E=w[b];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){w=y,C=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new Xi(S,b,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),l=new Xi(S,b,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<w.length;E++){let v=w[E];v.setSize&&v.setSize(S,b)}},this.begin=function(y,S){if(_||y.toneMapping===rn&&w.length===0)return!1;if(p=S,S!==null){let b=S.width,E=S.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=rn,!0},this.hasRenderPass=function(){return C},this.end=function(y,S){y.toneMapping=m,_=!0;let b=a,E=o;for(let v=0;v<w.length;v++){let T=w[v];T.enabled!==!1&&(T.render(y,E,b,S),T.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},st.getTransfer(f)===pt&&(h.defines.SRGB_TRANSFER="");let v=Fy[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cm=new Si,lf=new Or(1,1),Rm=new to,Pm=new Xl,Im=new lo,cm=[],hm=[],um=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Ma(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=cm[n];if(s===void 0&&(s=new Float32Array(n),cm[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ei(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ti(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function nh(r,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function By(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ei(t,e))return;r.uniform2fv(this.addr,e),ti(t,e)}}function zy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ei(t,e))return;r.uniform3fv(this.addr,e),ti(t,e)}}function Vy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ei(t,e))return;r.uniform4fv(this.addr,e),ti(t,e)}}function Gy(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ei(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ti(t,e)}else{if(ei(t,i))return;dm.set(i),r.uniformMatrix2fv(this.addr,!1,dm),ti(t,i)}}function Hy(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ei(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ti(t,e)}else{if(ei(t,i))return;fm.set(i),r.uniformMatrix3fv(this.addr,!1,fm),ti(t,i)}}function Wy(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ei(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ti(t,e)}else{if(ei(t,i))return;um.set(i),r.uniformMatrix4fv(this.addr,!1,um),ti(t,i)}}function Xy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ei(t,e))return;r.uniform2iv(this.addr,e),ti(t,e)}}function Yy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ei(t,e))return;r.uniform3iv(this.addr,e),ti(t,e)}}function Zy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ei(t,e))return;r.uniform4iv(this.addr,e),ti(t,e)}}function Jy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $y(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ei(t,e))return;r.uniform2uiv(this.addr,e),ti(t,e)}}function Ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ei(t,e))return;r.uniform3uiv(this.addr,e),ti(t,e)}}function jy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ei(t,e))return;r.uniform4uiv(this.addr,e),ti(t,e)}}function Qy(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(lf.compareFunction=t.isReversedDepthBuffer()?$c:Jc,s=lf):s=Cm,t.setTexture2D(e||s,n)}function eS(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Pm,n)}function tS(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Im,n)}function iS(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Rm,n)}function nS(r){switch(r){case 5126:return By;case 35664:return ky;case 35665:return zy;case 35666:return Vy;case 35674:return Gy;case 35675:return Hy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return $y;case 36295:return Ky;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return iS}}function rS(r,e){r.uniform1fv(this.addr,e)}function sS(r,e){let t=Ma(e,this.size,2);r.uniform2fv(this.addr,t)}function aS(r,e){let t=Ma(e,this.size,3);r.uniform3fv(this.addr,t)}function oS(r,e){let t=Ma(e,this.size,4);r.uniform4fv(this.addr,t)}function lS(r,e){let t=Ma(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cS(r,e){let t=Ma(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hS(r,e){let t=Ma(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uS(r,e){r.uniform1iv(this.addr,e)}function fS(r,e){r.uniform2iv(this.addr,e)}function dS(r,e){r.uniform3iv(this.addr,e)}function pS(r,e){r.uniform4iv(this.addr,e)}function mS(r,e){r.uniform1uiv(this.addr,e)}function gS(r,e){r.uniform2uiv(this.addr,e)}function _S(r,e){r.uniform3uiv(this.addr,e)}function xS(r,e){r.uniform4uiv(this.addr,e)}function vS(r,e,t){let i=this.cache,n=e.length,s=nh(t,n);ei(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=lf:a=Cm;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,s[o])}function yS(r,e,t){let i=this.cache,n=e.length,s=nh(t,n);ei(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Pm,s[a])}function SS(r,e,t){let i=this.cache,n=e.length,s=nh(t,n);ei(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Im,s[a])}function MS(r,e,t){let i=this.cache,n=e.length,s=nh(t,n);ei(i,s)||(r.uniform1iv(this.addr,s),ti(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Rm,s[a])}function bS(r){switch(r){case 5126:return rS;case 35664:return sS;case 35665:return aS;case 35666:return oS;case 35674:return lS;case 35675:return cS;case 35676:return hS;case 5124:case 35670:return uS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return xS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return MS}}var cf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=nS(t.type)}},hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bS(t.type)}},uf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},af=/(\w+)(\])?(\[|\.)?/g;function pm(r,e){r.seq.push(e),r.map[e.id]=e}function wS(r,e,t){let i=r.name,n=i.length;for(af.lastIndex=0;;){let s=af.exec(i),a=af.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){pm(t,c===void 0?new cf(o,r,e):new hf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new uf(o),pm(t,d)),t=d}}}var Sa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);wS(o,l,this)}let n=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):s.push(a);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function mm(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var TS=37297,ES=0;function AS(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var gm=new Ze;function CS(r){st._getMatrix(gm,st.workingColorSpace,r);let e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case Qa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _m(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+AS(r.getShaderSource(e),o)}else return s}function RS(r,e){let t=CS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var PS={[Lu]:"Linear",[Du]:"Reinhard",[Nu]:"Cineon",[Uu]:"ACESFilmic",[Ou]:"AgX",[Bu]:"Neutral",[Fu]:"Custom"};function IS(r,e){let t=PS[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jc=new J;function LS(){st.getLuminanceCoefficients(jc);let r=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function NS(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function US(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ro(r){return r!==""}function xm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var FS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(r){return r.replace(FS,BS)}var OS=new Map;function BS(r,e){let t=je[e];if(t===void 0){let i=OS.get(e);if(i!==void 0)t=je[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ff(t)}var kS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(r){return r.replace(kS,zS)}function zS(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Sm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var VS={[_o]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function GS(r){return VS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var HS={[Wr]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE_UV"};function WS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":HS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var XS={[gs]:"ENVMAP_MODE_REFRACTION"};function qS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":XS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var YS={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function ZS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":YS[r.combine]||"ENVMAP_BLENDING_NONE"}function JS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $S(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=GS(t),c=WS(t),h=qS(t),d=ZS(t),u=JS(t),f=DS(t),g=NS(s),_=n.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ro).join(`
`),p.length>0&&(p+=`
`)):(m=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),p=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rn?"#define TONE_MAPPING":"",t.toneMapping!==rn?je.tonemapping_pars_fragment:"",t.toneMapping!==rn?IS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,RS("linearToOutputTexel",t.outputColorSpace),LS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),a=ff(a),a=xm(a,t),a=vm(a,t),o=ff(o),o=xm(o,t),o=vm(o,t),a=ym(a),o=ym(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=w+m+a,y=w+p+o,S=mm(n,n.VERTEX_SHADER,C),b=mm(n,n.FRAGMENT_SHADER,y);n.attachShader(_,S),n.attachShader(_,b),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=n.getProgramInfoLog(_)||"",k=n.getShaderInfoLog(S)||"",L=n.getShaderInfoLog(b)||"",O=I.trim(),q=k.trim(),z=L.trim(),K=!0,X=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,S,b);else{let R=_m(n,S,"vertex"),Q=_m(n,b,"fragment");Ge("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+R+`
`+Q)}else O!==""?ze("WebGLProgram: Program Info Log:",O):(q===""||z==="")&&(X=!1);X&&(D.diagnostics={runnable:K,programLog:O,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:p}})}n.deleteShader(S),n.deleteShader(b),v=new Sa(n,_),T=US(n,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(_,TS)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ES++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var KS=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pf(e),t.set(e,i)),i}},pf=class{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}};function jS(r){return r===Yr||r===wo||r===To}function QS(r,e,t,i,n,s){let a=new ha,o=new df,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,A,D,I,k){let L=D.fog,O=I.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||q,z),X=K&&K.mapping===xo?K.image.height:null,R=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=Q!==void 0?Q.length:0,Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let Ve,ke,He,Z;if(R){let De=$n[R];Ve=De.vertexShader,ke=De.fragmentShader}else{Ve=v.vertexShader,ke=v.fragmentShader;let De=o.getVertexShaderStage(v),se=o.getFragmentShaderStage(v);o.update(v,De,se),He=De.id,Z=se.id}let ee=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,me=I.isBatchedMesh===!0,Ue=!!v.map,Be=!!v.matcap,Pe=!!K,Xe=!!v.aoMap,$e=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,tt=!!v.normalMap,vt=!!v.displacementMap,Dt=!!v.emissiveMap,qe=!!v.metalnessMap,ft=!!v.roughnessMap,F=v.anisotropy>0,It=v.clearcoat>0,We=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,H=v.transmission>0,$=F&&!!v.anisotropyMap,ce=It&&!!v.clearcoatMap,ae=It&&!!v.clearcoatNormalMap,j=It&&!!v.clearcoatRoughnessMap,ie=x&&!!v.iridescenceMap,fe=x&&!!v.iridescenceThicknessMap,Ee=B&&!!v.sheenColorMap,de=B&&!!v.sheenRoughnessMap,ue=!!v.specularMap,le=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Fe=H&&!!v.transmissionMap,N=H&&!!v.thicknessMap,he=!!v.gradientMap,te=!!v.alphaMap,pe=v.alphaTest>0,xe=!!v.alphaHash,ne=!!v.extensions,oe=rn;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=r.toneMapping);let re={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:ke,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:me,batchingColor:me&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:Be,envMap:Pe,envMapMode:Pe&&K.mapping,envMapCubeUVHeight:X,aoMap:Xe,lightMap:$e,bumpMap:V,normalMap:tt,displacementMap:vt,emissiveMap:Dt,normalMapObjectSpace:tt&&v.normalMapType===Gp,normalMapTangentSpace:tt&&v.normalMapType===Yu,packedNormalMap:tt&&v.normalMapType===Yu&&jS(v.normalMap.format),metalnessMap:qe,roughnessMap:ft,anisotropy:F,anisotropyMap:$,clearcoat:It,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:j,dispersion:We,retroreflection:P,iridescence:x,iridescenceMap:ie,iridescenceThicknessMap:fe,sheen:B,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ue,specularColorMap:le,specularIntensityMap:Ie,transmission:H,transmissionMap:Fe,thicknessMap:N,gradientMap:he,opaque:v.transparent===!1&&v.blending===ma&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:xe,combine:v.combine,mapUv:Ue&&g(v.map.channel),aoMapUv:Xe&&g(v.aoMap.channel),lightMapUv:$e&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:tt&&g(v.normalMap.channel),displacementMapUv:vt&&g(v.displacementMap.channel),emissiveMapUv:Dt&&g(v.emissiveMap.channel),metalnessMapUv:qe&&g(v.metalnessMap.channel),roughnessMapUv:ft&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:ce&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(v.sheenRoughnessMap.channel),specularMapUv:ue&&g(v.specularMap.channel),specularColorMapUv:le&&g(v.specularColorMap.channel),specularIntensityMapUv:Ie&&g(v.specularIntensityMap.channel),transmissionMapUv:Fe&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:te&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(tt||F),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Ue||te),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&tt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yn,flipSided:v.side===Ui,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)T.push(A),T.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(p(T,v),w(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function C(v){let T=f[v.type],A;if(T){let D=$n[T];A=im.clone(D.uniforms)}else A=v.uniforms;return A}function y(v,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new $S(r,T,v,n),c.push(A),h.set(T,A)),A}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function eM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function tM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Mm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bm(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let w=r[e];return w===void 0?(w={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},r[e]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=g,w.materialVariant=a(u),w.groupOrder=_,w.renderOrder=u.renderOrder,w.z=m,w.group=p),e++,w}function l(u,f,g,_,m,p,w){w.reversedDepth===!0&&(m=-m);let C=o(u,f,g,_,m,p);g.transmission>0?i.push(C):g.transparent===!0?n.push(C):t.push(C)}function c(u,f,g,_,m,p){let w=o(u,f,g,_,m,p);g.transmission>0?i.unshift(w):g.transparent===!0?n.unshift(w):t.unshift(w)}function h(u,f){t.length>1&&t.sort(u||tM),i.length>1&&i.sort(f||Mm),n.length>1&&n.sort(f||Mm)}function d(){for(let u=e,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function iM(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new bm,r.set(i,[a])):n>=s.length?(a=new bm,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function nM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new ct};break;case"SpotLight":t={position:new J,direction:new J,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function rM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var sM=0;function aM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oM(r){let e=new nM,t=rM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let n=new J,s=new kt,a=new kt;function o(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,C=0,y=0,S=0,b=0,E=0,v=0,T=0,A=0;c.sort(aM);for(let I=0,k=c.length;I<k;I++){let L=c[I],O=L.color,q=L.intensity,z=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Yr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*q,d+=O.g*q,u+=O.b*q;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],q);A++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=K;let Se=R.getViewportCount();for(let Me=0;Me<Se;Me++)i.sunShadowMatrix[_+Me]=R.getMatrix(Me),i.sunShadowCascade[_+Me]=R._cascadeData[Me];_+=Se,g++}i.sun[f]=X,f++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=X,m++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar(q),X.distance=z,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[w]=X;let R=L.shadow;if(L.map&&(i.spotLightMap[v]=L.map,v++,R.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[w]=R.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,i.spotShadow[w]=Q,i.spotShadowMap[w]=K,E++}w++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(O).multiplyScalar(q),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[C]=X,C++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let R=L.shadow,Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=L.shadow.matrix,b++}i.point[p]=X,p++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(q),X.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[y]=X,y++}}C>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==w||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==v||D.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=w,i.rectArea.length=C,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=w,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=v,D.numLightProbes=A,i.version=sM++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let y=c[w];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function wm(r){let e=new oM(r),t=[],i=[],n=[];function s(u){d.camera=u,t.length=0,i.length=0,n.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){n.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lM(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new wm(r),e.set(n,[o])):s>=a.length?(o=new wm(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hM=`uniform sampler2D shadow_pass;
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
}`,uM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],fM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Tm=new kt,Co=new J,of=new J;function dM(r,e,t){let i=new ao,n=new ot,s=new ot,a=new Nt,o=new Jl,l=new $l,c={},h=t.maxTextureSize,d={[Hr]:Ui,[Ui]:Hr,[Yn]:Yn},u=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:cM,fragmentShader:hM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new qn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Yi(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let p=this.type;this.render=function(b,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===vp&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_o);let T=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Zn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let k=p!==this.type;k&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=b.length;L<O;L++){let q=b[L],z=q.shadow;if(z===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let K=z.getFrameExtents();n.multiply(K),s.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/K.x),n.x=s.x*K.x,z.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/K.y),n.y=s.y*K.y,z.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===pa){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xi(n.x,n.y,{format:Yr,type:Dn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Or(n.x,n.y,Ln),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Hn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=oi,z.map.depthTexture.magFilter=oi}else q.isPointLight?(z.map=new eh(n.x),z.map.depthTexture=new Yl(n.x,In)):(z.map=new Xi(n.x,n.y),z.map.depthTexture=new Or(n.x,n.y,In)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Hn,this.type===_o?(z.map.depthTexture.compareFunction=X?$c:Jc,z.map.depthTexture.minFilter=Qt,z.map.depthTexture.magFilter=Qt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=oi,z.map.depthTexture.magFilter=oi);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==n.x||z.map.height!==n.y)&&z.map.setSize(n.x,n.y);let R=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,v);for(let Q=0;Q<R;Q++){let Se=z.getCamera(Q);if(q.isPointLight){let Me=z.camera,Ve=z.matrix,ke=q.distance||Me.far;ke!==Me.far&&(Me.far=ke,Me.updateProjectionMatrix()),Co.setFromMatrixPosition(q.matrixWorld),Me.position.copy(Co),of.copy(Me.position),of.add(uM[Q]),Me.up.copy(fM[Q]),Me.lookAt(of),Me.updateMatrixWorld(),Ve.makeTranslation(-Co.x,-Co.y,-Co.z),Tm.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Tm,Me.coordinateSystem,Me.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(z.map),r.clear());let Me=z.getViewport(Q);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),I.viewport(a)}i=z.getFrustum(Q),y(E,v,Se,q,this.type)}z.isPointLightShadow!==!0&&this.type===pa&&w(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,A,D)};function w(b,E){let v=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xi(n.x,n.y,{format:Yr,type:Dn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,v,f,_,null)}function C(b,E,v,T){let A=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)A=D;else if(A=v.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=A.uuid,k=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let O=L[k];O===void 0&&(O=A.clone(),L[k]=O,E.addEventListener("dispose",S)),A=O}if(A.visible=E.visible,A.wireframe=E.wireframe,T===pa?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:d[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=r.properties.get(A);I.light=v}return A}function y(b,E,v,T,A){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===pa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let k=e.update(b),L=b.material;if(Array.isArray(L)){let O=k.groups;for(let q=0,z=O.length;q<z;q++){let K=O[q],X=L[K.materialIndex];if(X&&X.visible){let R=C(b,X,T,A);b.onBeforeShadow(r,b,E,v,k,R,K),r.renderBufferDirect(v,null,k,R,b,K),b.onAfterShadow(r,b,E,v,k,R,K)}}}else if(L.visible){let O=C(b,L,T,A);b.onBeforeShadow(r,b,E,v,k,O,null),r.renderBufferDirect(v,null,k,O,b,null),b.onAfterShadow(r,b,E,v,k,O,null)}}let I=b.children;for(let k=0,L=I.length;k<L;k++)y(I[k],E,v,T,A)}function S(b){b.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function pM(r,e){function t(){let N=!1,he=new Nt,te=null,pe=new Nt(0,0,0,0);return{setMask:function(xe){te!==xe&&!N&&(r.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ne,oe,re,De){De===!0&&(xe*=re,ne*=re,oe*=re),he.set(xe,ne,oe,re),pe.equals(he)===!1&&(r.clearColor(xe,ne,oe,re),pe.copy(he))},reset:function(){N=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let N=!1,he=!1,te=null,pe=null,xe=null;return{setReversed:function(ne){if(he!==ne){let oe=e.get("EXT_clip_control");ne?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),he=ne;let re=xe;xe=null,this.setClear(re)}},getReversed:function(){return he},setTest:function(ne){ne?ee(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ne){te!==ne&&!N&&(r.depthMask(ne),te=ne)},setFunc:function(ne){if(he&&(ne=em[ne]),pe!==ne){switch(ne){case Dl:r.depthFunc(r.NEVER);break;case Nl:r.depthFunc(r.ALWAYS);break;case Ul:r.depthFunc(r.LESS);break;case sa:r.depthFunc(r.LEQUAL);break;case Fl:r.depthFunc(r.EQUAL);break;case Ol:r.depthFunc(r.GEQUAL);break;case Bl:r.depthFunc(r.GREATER);break;case kl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ne}},setLocked:function(ne){N=ne},setClear:function(ne){xe!==ne&&(xe=ne,he&&(ne=1-ne),r.clearDepth(ne))},reset:function(){N=!1,te=null,pe=null,xe=null,he=!1}}}function n(){let N=!1,he=null,te=null,pe=null,xe=null,ne=null,oe=null,re=null,De=null;return{setTest:function(se){N||(se?ee(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(se){he!==se&&!N&&(r.stencilMask(se),he=se)},setFunc:function(se,Ne,Ae){(te!==se||pe!==Ne||xe!==Ae)&&(r.stencilFunc(se,Ne,Ae),te=se,pe=Ne,xe=Ae)},setOp:function(se,Ne,Ae){(ne!==se||oe!==Ne||re!==Ae)&&(r.stencilOp(se,Ne,Ae),ne=se,oe=Ne,re=Ae)},setLocked:function(se){N=se},setClear:function(se){De!==se&&(r.clearStencil(se),De=se)},reset:function(){N=!1,he=null,te=null,pe=null,xe=null,ne=null,oe=null,re=null,De=null}}}let s=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,w=null,C=null,y=null,S=null,b=null,E=null,v=new ct(0,0,0),T=0,A=!1,D=null,I=null,k=null,L=null,O=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=K>=2);let R=null,Q={},Se=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Ve=new Nt().fromArray(Se),ke=new Nt().fromArray(Me);function He(N,he,te,pe){let xe=new Uint8Array(4),ne=r.createTexture();r.bindTexture(N,ne),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<te;oe++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(he+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ne}let Z={};Z[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(sa),V(!1),tt(Tu),ee(r.CULL_FACE),Xe(Zn);function ee(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Oe(N,he){return u[N]!==he?(r.bindFramebuffer(N,he),u[N]=he,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=he),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=he),!0):!1}function me(N,he){let te=g,pe=!1;if(N){te=f.get(he),te===void 0&&(te=[],f.set(he,te));let xe=N.textures;if(te.length!==xe.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,oe=xe.length;ne<oe;ne++)te[ne]=r.COLOR_ATTACHMENT0+ne;te.length=xe.length,pe=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,pe=!0);pe&&r.drawBuffers(te)}function Ue(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Be={[ms]:r.FUNC_ADD,[Sp]:r.FUNC_SUBTRACT,[Mp]:r.FUNC_REVERSE_SUBTRACT};Be[bp]=r.MIN,Be[wp]=r.MAX;let Pe={[Tp]:r.ZERO,[Ep]:r.ONE,[Ap]:r.SRC_COLOR,[Ru]:r.SRC_ALPHA,[Dp]:r.SRC_ALPHA_SATURATE,[Ip]:r.DST_COLOR,[Rp]:r.DST_ALPHA,[Cp]:r.ONE_MINUS_SRC_COLOR,[Pu]:r.ONE_MINUS_SRC_ALPHA,[Lp]:r.ONE_MINUS_DST_COLOR,[Pp]:r.ONE_MINUS_DST_ALPHA,[Np]:r.CONSTANT_COLOR,[Up]:r.ONE_MINUS_CONSTANT_COLOR,[Fp]:r.CONSTANT_ALPHA,[Op]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(N,he,te,pe,xe,ne,oe,re,De,se){if(N===Zn){m===!0&&(_e(r.BLEND),m=!1);return}if(m===!1&&(ee(r.BLEND),m=!0),N!==yp){if(N!==p||se!==A){if((w!==ms||S!==ms)&&(r.blendEquation(r.FUNC_ADD),w=ms,S=ms),se)switch(N){case ma:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Eu:r.blendFunc(r.ONE,r.ONE);break;case Au:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Cu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",N);break}else switch(N){case ma:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Eu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Au:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",N);break}C=null,y=null,b=null,E=null,v.set(0,0,0),T=0,p=N,A=se}return}xe=xe||he,ne=ne||te,oe=oe||pe,(he!==w||xe!==S)&&(r.blendEquationSeparate(Be[he],Be[xe]),w=he,S=xe),(te!==C||pe!==y||ne!==b||oe!==E)&&(r.blendFuncSeparate(Pe[te],Pe[pe],Pe[ne],Pe[oe]),C=te,y=pe,b=ne,E=oe),(re.equals(v)===!1||De!==T)&&(r.blendColor(re.r,re.g,re.b,De),v.copy(re),T=De),p=N,A=!1}function $e(N,he){N.side===Yn?_e(r.CULL_FACE):ee(r.CULL_FACE);let te=N.side===Ui;he&&(te=!te),V(te),N.blending===ma&&N.transparent===!1?Xe(Zn):Xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function tt(N){N!==_p?(ee(r.CULL_FACE),N!==I&&(N===Tu?r.cullFace(r.BACK):N===xp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),I=N}function vt(N){N!==k&&(z&&r.lineWidth(N),k=N)}function Dt(N,he,te){N?(ee(r.POLYGON_OFFSET_FILL),(L!==he||O!==te)&&(L=he,O=te,a.getReversed()&&(he=-he),r.polygonOffset(he,te))):_e(r.POLYGON_OFFSET_FILL)}function qe(N){N?ee(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function ft(N){N===void 0&&(N=r.TEXTURE0+q-1),R!==N&&(r.activeTexture(N),R=N)}function F(N,he,te){te===void 0&&(R===null?te=r.TEXTURE0+q-1:te=R);let pe=Q[te];pe===void 0&&(pe={type:void 0,texture:void 0},Q[te]=pe),(pe.type!==N||pe.texture!==he)&&(R!==te&&(r.activeTexture(te),R=te),r.bindTexture(N,he||Z[N]),pe.type=N,pe.texture=he)}function It(){let N=Q[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function We(){try{r.compressedTexImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function x(){try{r.texSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function B(){try{r.texSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ce(){try{r.texStorage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ae(){try{r.texStorage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function j(){try{r.texImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ie(){try{r.texImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function fe(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Ee(N,he){d[N]!==he&&(r.pixelStorei(N,he),d[N]=he)}function de(N){Ve.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function ue(N){ke.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function le(N,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let pe=te.get(N);pe===void 0&&(pe=r.getUniformBlockIndex(he,N.name),te.set(N,pe))}function Ie(N,he){let pe=c.get(he).get(N);l.get(he)!==pe&&(r.uniformBlockBinding(he,pe,N.__bindingPointIndex),l.set(he,pe))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Q={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,w=null,C=null,y=null,S=null,b=null,E=null,v=new ct(0,0,0),T=0,A=!1,D=null,I=null,k=null,L=null,O=null,Ve.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Oe,drawBuffers:me,useProgram:Ue,setBlending:Xe,setMaterial:$e,setFlipSided:V,setCullFace:tt,setLineWidth:vt,setPolygonOffset:Dt,setScissorTest:qe,activeTexture:ft,bindTexture:F,unbindTexture:It,compressedTexImage2D:We,compressedTexImage3D:P,texImage2D:j,texImage3D:ie,pixelStorei:Ee,getParameter:fe,updateUBOMapping:le,uniformBlockBinding:Ie,texStorage2D:ce,texStorage3D:ae,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:de,viewport:ue,reset:Fe}}function mM(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return g?new OffscreenCanvas(P,x):aa("canvas")}function m(P,x,B){let H=1,$=We(P);if(($.width>B||$.height>B)&&(H=B/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor(H*$.width),ae=Math.floor(H*$.height);u===void 0&&(u=_(ce,ae));let j=x?_(ce,ae):u;return j.width=ce,j.height=ae,j.getContext("2d").drawImage(P,0,0,ce,ae),ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+ae+")."),j}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function p(P){return P.generateMipmaps}function w(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,x,B,H,$,ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;H&&(ae=e.get("EXT_texture_norm16"),ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8),B===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),B===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),x===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),x===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8),B===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),B===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RG8UI),B===r.UNSIGNED_SHORT&&(j=r.RG16UI),B===r.UNSIGNED_INT&&(j=r.RG32UI),B===r.BYTE&&(j=r.RG8I),B===r.SHORT&&(j=r.RG16I),B===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGB8UI),B===r.UNSIGNED_SHORT&&(j=r.RGB16UI),B===r.UNSIGNED_INT&&(j=r.RGB32UI),B===r.BYTE&&(j=r.RGB8I),B===r.SHORT&&(j=r.RGB16I),B===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),B===r.UNSIGNED_INT&&(j=r.RGBA32UI),B===r.BYTE&&(j=r.RGBA8I),B===r.SHORT&&(j=r.RGBA16I),B===r.INT&&(j=r.RGBA32I)),x===r.RGB&&(B===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),B===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),B===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),x===r.RGBA){let ie=ce?Qa:st.getTransfer($);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=ie===pt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),B===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,x){let B;return P?x===null||x===In||x===_a?B=r.DEPTH24_STENCIL8:x===Ln?B=r.DEPTH32F_STENCIL8:x===ga&&(B=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===In||x===_a?B=r.DEPTH_COMPONENT24:x===Ln?B=r.DEPTH_COMPONENT32F:x===ga&&(B=r.DEPTH_COMPONENT16),B}function b(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==oi&&P.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function E(P){let x=P.target;x.removeEventListener("dispose",E),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),D(x)}function T(P){let x=i.get(P);if(x.__webglInit===void 0)return;let B=P.source,H=f.get(B);if(H){let $=H[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(P),Object.keys(H).length===0&&f.delete(B)}i.remove(P)}function A(P){let x=i.get(P);r.deleteTexture(x.__webglTexture);let B=P.source,H=f.get(B);delete H[x.__cacheKey],a.memory.textures--}function D(P){let x=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let $=0;$<x.__webglFramebuffer[H].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[H][$]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=P.textures;for(let H=0,$=B.length;H<$;H++){let ce=i.get(B[H]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(B[H])}i.remove(P)}let I=0;function k(){I=0}function L(){return I}function O(P){I=P}function q(){let P=I;return P>=n.maxTextures&&ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+n.maxTextures),I+=1,P}function z(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function K(P,x){let B=i.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&B.__version!==P.version){let H=P.image;if(H===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,P,x);return}}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+x)}function X(P,x){let B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){_e(B,P,x);return}else P.isExternalTexture&&(B.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+x)}function R(P,x){let B=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&B.__version!==P.version){_e(B,P,x);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+x)}function Q(P,x){let B=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&B.__version!==P.version){Oe(B,P,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+x)}let Se={[zl]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[Vl]:r.MIRRORED_REPEAT},Me={[oi]:r.NEAREST,[zp]:r.NEAREST_MIPMAP_NEAREST,[vo]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[fc]:r.LINEAR_MIPMAP_NEAREST,[Xr]:r.LINEAR_MIPMAP_LINEAR},Ve={[Wp]:r.NEVER,[Jp]:r.ALWAYS,[Xp]:r.LESS,[Jc]:r.LEQUAL,[qp]:r.EQUAL,[$c]:r.GEQUAL,[Yp]:r.GREATER,[Zp]:r.NOTEQUAL};function ke(P,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===fc||x.magFilter===vo||x.magFilter===Xr||x.minFilter===Qt||x.minFilter===fc||x.minFilter===vo||x.minFilter===Xr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Se[x.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[x.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[x.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Me[x.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===oi||x.minFilter!==vo&&x.minFilter!==Xr||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function He(P,x){let B=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",E));let H=x.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let ce=z(x);if(ce!==P.__cacheKey){$[ce]===void 0&&($[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[ce].usedTimes++;let ae=$[P.__cacheKey];ae!==void 0&&($[P.__cacheKey].usedTimes--,ae.usedTimes===0&&A(x)),P.__cacheKey=ce,P.__webglTexture=$[ce].texture}return B}function Z(P,x,B){return Math.floor(Math.floor(P/B)/x)}function ee(P,x,B,H){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,B,H,x.data);else{ce.sort((Ee,de)=>Ee.start-de.start);let ae=0;for(let Ee=1;Ee<ce.length;Ee++){let de=ce[ae],ue=ce[Ee],le=de.start+de.count,Ie=Z(ue.start,x.width,4),Fe=Z(de.start,x.width,4);ue.start<=le+1&&Ie===Fe&&Z(ue.start+ue.count-1,x.width,4)===Ie?de.count=Math.max(de.count,ue.start+ue.count-de.start):(++ae,ce[ae]=ue)}ce.length=ae+1;let j=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,de=ce.length;Ee<de;Ee++){let ue=ce[Ee],le=Math.floor(ue.start/4),Ie=Math.ceil(ue.count/4),Fe=le%x.width,N=Math.floor(le/x.width),he=Ie,te=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,Fe,N,he,te,B,H,x.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function _e(P,x,B){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);let $=He(P,x),ce=x.source;t.bindTexture(H,P.__webglTexture,r.TEXTURE0+B);let ae=i.get(ce);if(ce.version!==ae.__version||$===!0){if(t.activeTexture(r.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let te=st.getPrimaries(st.workingColorSpace),pe=x.colorSpace===fr?null:st.getPrimaries(x.colorSpace),xe=x.colorSpace===fr||te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=m(x.image,!1,n.maxTextureSize);ie=It(x,ie);let fe=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type),de=y(x.internalFormat,fe,Ee,x.normalized,x.colorSpace,x.isVideoTexture);ke(H,x);let ue,le=x.mipmaps,Ie=x.isVideoTexture!==!0,Fe=ae.__version===void 0||$===!0,N=ce.dataReady,he=b(x,ie);if(x.isDepthTexture)de=S(x.format===qr,x.type),Fe&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,de,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,de,ie.width,ie.height,0,fe,Ee,null));else if(x.isDataTexture)if(le.length>0){Ie&&Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)ue=le[te],Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ee,ue.data):t.texImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,fe,Ee,ue.data);x.generateMipmaps=!1}else Ie?(Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,ie.width,ie.height),N&&ee(x,ie,fe,Ee)):t.texImage2D(r.TEXTURE_2D,0,de,ie.width,ie.height,0,fe,Ee,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,de,le[0].width,le[0].height,ie.depth);for(let te=0,pe=le.length;te<pe;te++)if(ue=le[te],x.format!==vn)if(fe!==null)if(Ie){if(N)if(x.layerUpdates.size>0){let xe=ef(ue.width,ue.height,x.format,x.type);for(let ne of x.layerUpdates){let oe=ue.data.subarray(ne*xe/ue.data.BYTES_PER_ELEMENT,(ne+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,ne,ue.width,ue.height,1,fe,oe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,fe,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ie.depth,0,ue.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,fe,Ee,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ie.depth,0,fe,Ee,ue.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ie&&Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)ue=le[te],x.format!==vn?fe!==null?Ie?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,ue.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ee,ue.data):t.texImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,fe,Ee,ue.data)}else if(x.isDataArrayTexture)if(Ie){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,de,ie.width,ie.height,ie.depth),N)if(x.layerUpdates.size>0){let te=ef(ie.width,ie.height,x.format,x.type);for(let pe of x.layerUpdates){let xe=ie.data.subarray(pe*te/ie.data.BYTES_PER_ELEMENT,(pe+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ie.width,ie.height,1,fe,Ee,xe)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ee,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ie.width,ie.height,ie.depth,0,fe,Ee,ie.data);else if(x.isData3DTexture)Ie?(Fe&&t.texStorage3D(r.TEXTURE_3D,he,de,ie.width,ie.height,ie.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ee,ie.data)):t.texImage3D(r.TEXTURE_3D,0,de,ie.width,ie.height,ie.depth,0,fe,Ee,ie.data);else if(x.isFramebufferTexture){if(Fe)if(Ie)t.texStorage2D(r.TEXTURE_2D,he,de,ie.width,ie.height);else{let te=ie.width,pe=ie.height;for(let xe=0;xe<he;xe++)t.texImage2D(r.TEXTURE_2D,xe,de,te,pe,0,fe,Ee,null),te>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){let te=r.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),d.add(x),te.onpaint=pe=>{let xe=pe.changedElements;for(let ne of d)xe.includes(ne.image)&&(ne.needsUpdate=!0)},te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{let xe=r.RGBA,ne=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ne,oe,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(le.length>0){if(Ie&&Fe){let te=We(le[0]);t.texStorage2D(r.TEXTURE_2D,he,de,te.width,te.height)}for(let te=0,pe=le.length;te<pe;te++)ue=le[te],Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe,Ee,ue):t.texImage2D(r.TEXTURE_2D,te,de,fe,Ee,ue);x.generateMipmaps=!1}else if(Ie){if(Fe){let te=We(ie);t.texStorage2D(r.TEXTURE_2D,he,de,te.width,te.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ee,ie)}else t.texImage2D(r.TEXTURE_2D,0,de,fe,Ee,ie);p(x)&&w(H),ae.__version=ce.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Oe(P,x,B){if(x.image.length!==6)return;let H=He(P,x),$=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+B);let ce=i.get($);if($.version!==ce.__version||H===!0){t.activeTexture(r.TEXTURE0+B);let ae=st.getPrimaries(st.workingColorSpace),j=x.colorSpace===fr?null:st.getPrimaries(x.colorSpace),ie=x.colorSpace===fr||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let fe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!fe&&!Ee?de[ne]=m(x.image[ne],!0,n.maxCubemapSize):de[ne]=Ee?x.image[ne].image:x.image[ne],de[ne]=It(x,de[ne]);let ue=de[0],le=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type),Fe=y(x.internalFormat,le,Ie,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,he=ce.__version===void 0||H===!0,te=$.dataReady,pe=b(x,ue);ke(r.TEXTURE_CUBE_MAP,x);let xe;if(fe){N&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ue.width,ue.height);for(let ne=0;ne<6;ne++){xe=de[ne].mipmaps;for(let oe=0;oe<xe.length;oe++){let re=xe[oe];x.format!==vn?le!==null?N?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,Fe,re.width,re.height,0,re.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,0,0,re.width,re.height,le,Ie,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe,Fe,re.width,re.height,0,le,Ie,re.data)}}}else{if(xe=x.mipmaps,N&&he){xe.length>0&&pe++;let ne=We(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,le,Ie,de[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,de[ne].width,de[ne].height,0,le,Ie,de[ne].data);for(let oe=0;oe<xe.length;oe++){let De=xe[oe].image[ne].image;N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,0,0,De.width,De.height,le,Ie,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,Fe,De.width,De.height,0,le,Ie,De.data)}}else{N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,le,Ie,de[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,le,Ie,de[ne]);for(let oe=0;oe<xe.length;oe++){let re=xe[oe];N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,0,0,le,Ie,re.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe+1,Fe,le,Ie,re.image[ne])}}}p(x)&&w(r.TEXTURE_CUBE_MAP),ce.__version=$.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function me(P,x,B,H,$,ce){let ae=s.convert(B.format,B.colorSpace),j=s.convert(B.type),ie=y(B.internalFormat,ae,j,B.normalized,B.colorSpace),fe=i.get(x),Ee=i.get(B);if(Ee.__renderTarget=x,!fe.__hasExternalTextures){let de=Math.max(1,x.width>>ce),ue=Math.max(1,x.height>>ce);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ce,ie,de,ue,x.depth,0,ae,j,null):t.texImage2D($,ce,ie,de,ue,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ft(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,$,Ee.__webglTexture,0,qe(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,$,Ee.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,x,B){if(r.bindRenderbuffer(r.RENDERBUFFER,P),x.depthBuffer){let H=x.depthTexture,$=H&&H.isDepthTexture?H.type:null,ce=S(x.stencilBuffer,$),ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(x),ce,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(x),ce,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ce,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,P)}else{let H=x.textures;for(let $=0;$<H.length;$++){let ce=H[$],ae=s.convert(ce.format,ce.colorSpace),j=s.convert(ce.type),ie=y(ce.internalFormat,ae,j,ce.normalized,ce.colorSpace);ft(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(x),ie,x.width,x.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(x),ie,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ie,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(P,x,B){let H=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),ke(r.TEXTURE_CUBE_MAP,x.depthTexture);let fe=s.convert(x.depthTexture.format),Ee=s.convert(x.depthTexture.type),de;x.depthTexture.format===Hn?de=r.DEPTH_COMPONENT24:x.depthTexture.format===qr&&(de=r.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,de,x.width,x.height,0,fe,Ee,null)}}else K(x.depthTexture,0);let ce=$.__webglTexture,ae=qe(x),j=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,ie=x.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)ft(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,j,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ie,j,ce,0);else if(x.depthTexture.format===qr)ft(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,j,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ie,j,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(P){let x=i.get(P),B=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let H=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=H}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)Be(x.__webglFramebuffer[H],P,H);else{let H=P.texture.mipmaps;H&&H.length>0?Be(x.__webglFramebuffer[0],P,0):Be(x.__webglFramebuffer,P,0)}else if(B){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),Ue(x.__webglDepthbuffer[H],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ce)}}else{let H=P.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ue(x.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(P,x,B){let H=i.get(P);x!==void 0&&me(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Pe(P)}function $e(P){let x=P.texture,B=i.get(P),H=i.get(x);P.addEventListener("dispose",v);let $=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let ie=0;ie<x.mipmaps.length;ie++)B.__webglFramebuffer[j][ie]=r.createFramebuffer()}else B.__webglFramebuffer[j]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)B.__webglFramebuffer[j]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,ie=$.length;j<ie;j++){let fe=i.get($[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&ft(P)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let ie=$[j];B.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[j]);let fe=s.convert(ie.format,ie.colorSpace),Ee=s.convert(ie.type),de=y(ie.internalFormat,fe,Ee,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),ue=qe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,de,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,B.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),ke(r.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)me(B.__webglFramebuffer[j][ie],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else me(B.__webglFramebuffer[j],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,ie=$.length;j<ie;j++){let fe=$[j],Ee=i.get(fe),de=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),ke(de,fe),me(B.__webglFramebuffer,P,fe,r.COLOR_ATTACHMENT0+j,de,0),p(fe)&&w(de)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,H.__webglTexture),ke(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)me(B.__webglFramebuffer[ie],P,x,r.COLOR_ATTACHMENT0,j,ie);else me(B.__webglFramebuffer,P,x,r.COLOR_ATTACHMENT0,j,0);p(x)&&w(j),t.unbindTexture()}P.depthBuffer&&Pe(P)}function V(P){let x=P.textures;for(let B=0,H=x.length;B<H;B++){let $=x[B];if(p($)){let ce=C(P),ae=i.get($).__webglTexture;t.bindTexture(ce,ae),w(ce),t.unbindTexture()}}}let tt=[],vt=[];function Dt(P){if(P.samples>0){if(ft(P)===!1){let x=P.textures,B=P.width,H=P.height,$=r.COLOR_BUFFER_BIT,ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=i.get(P),j=x.length>1;if(j)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ie=P.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let Ee=i.get(x[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,B,H,0,0,B,H,$,r.NEAREST),l===!0&&(tt.length=0,vt.length=0,tt.push(r.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(tt.push(ce),vt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let Ee=i.get(x[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function qe(P){return Math.min(n.maxSamples,P.samples)}function ft(P){let x=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function It(P,x){let B=P.colorSpace,H=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||B!==ja&&B!==fr&&(st.getTransfer(B)===pt?(H!==vn||$!==sn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),x}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=R,this.setTextureCube=Q,this.rebindTextures=Xe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gM(r,e){function t(i,n=fr){let s,a=st.getTransfer(n);if(i===sn)return r.UNSIGNED_BYTE;if(i===pc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===mc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Gu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Hu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===zu)return r.BYTE;if(i===Vu)return r.SHORT;if(i===ga)return r.UNSIGNED_SHORT;if(i===dc)return r.INT;if(i===In)return r.UNSIGNED_INT;if(i===Ln)return r.FLOAT;if(i===Dn)return r.HALF_FLOAT;if(i===Wu)return r.ALPHA;if(i===Xu)return r.RGB;if(i===vn)return r.RGBA;if(i===Hn)return r.DEPTH_COMPONENT;if(i===qr)return r.DEPTH_STENCIL;if(i===qu)return r.RED;if(i===gc)return r.RED_INTEGER;if(i===Yr)return r.RG;if(i===_c)return r.RG_INTEGER;if(i===xc)return r.RGBA_INTEGER;if(i===yo||i===So||i===Mo||i===bo)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vc||i===yc||i===Sc||i===Mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bc||i===wc||i===Tc||i===Ec||i===Ac||i===wo||i===Cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bc||i===wc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ec)return s.COMPRESSED_R11_EAC;if(i===Ac)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wo)return s.COMPRESSED_RG11_EAC;if(i===Cc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Uc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Vc||i===Gc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ic)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hc||i===Wc||i===Xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hc)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Yc||i===To||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_a?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
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

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ni({vertexShader:_M,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yi(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends Wn{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new mf,p={},w=t.getContextAttributes(),C=null,y=null,S=[],b=[],E=new ot,v=null,T=null,A=new yi;A.viewport=new Nt;let D=new yi;D.viewport=new Nt;let I=[A,D],k=new cc,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new ua,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new ua,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new ua,S[Z]=ee),ee.getHandSpace()};function q(Z){let ee=b.indexOf(Z.inputSource);if(ee===-1)return;let _e=S[ee];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",K);for(let Z=0;Z<S.length;Z++){let ee=b[Z];ee!==null&&(b[Z]=null,S[Z].disconnect(ee))}L=null,O=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(C),f=null,u=null,d=null,n=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(C=e.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",z),n.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,me=null;w.depth&&(me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?qr:Hn,Oe=w.stencil?_a:In);let Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ue),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Xi(u.textureWidth,u.textureHeight,{format:vn,type:sn,depthTexture:new Or(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,_e),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),He.setContext(n),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Z){for(let ee=0;ee<Z.removed.length;ee++){let _e=Z.removed[ee],Oe=b.indexOf(_e);Oe>=0&&(b[Oe]=null,S[Oe].disconnect(_e))}for(let ee=0;ee<Z.added.length;ee++){let _e=Z.added[ee],Oe=b.indexOf(_e);if(Oe===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=b.length){b.push(_e),Oe=Ue;break}else if(b[Ue]===null){b[Ue]=_e,Oe=Ue;break}if(Oe===-1)break}let me=S[Oe];me&&me.connect(_e)}}let X=new J,R=new J;function Q(Z,ee,_e){X.setFromMatrixPosition(ee.matrixWorld),R.setFromMatrixPosition(_e.matrixWorld);let Oe=X.distanceTo(R),me=ee.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Be=me[14]/(me[10]-1),Pe=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],$e=(me[9]-1)/me[5],V=(me[8]-1)/me[0],tt=(Ue[8]+1)/Ue[0],vt=Be*V,Dt=Be*tt,qe=Oe/(-V+tt),ft=qe*-V;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ft),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),me[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=Be+qe,It=Pe+qe,We=vt-ft,P=Dt+(Oe-ft),x=Xe*Pe/It*F,B=$e*Pe/It*F;Z.projectionMatrix.makePerspective(We,P,x,B,F,It),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let ee=Z.near,_e=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=D.near=A.near=ee,k.far=D.far=A.far=_e,(L!==k.near||O!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,O=k.far),k.layers.mask=Z.layers.mask|6,A.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Oe=Z.parent,me=k.cameras;Se(k,Oe);for(let Ue=0;Ue<me.length;Ue++)Se(me[Ue],Oe);me.length===2?Q(k,A,D):k.projectionMatrix.copy(A.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Me(Z,k,Oe)};function Me(Z,ee,_e){_e===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=la*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return p[Z]};let Ve=null;function ke(Z,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let Pe=0;Pe<_e.length;Pe++){let Xe=_e[Pe],$e=null;if(f!==null)$e=f.getViewport(Xe);else{let tt=d.getViewSubImage(u,Xe);$e=tt.viewport,Pe===0&&(e.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(y))}let V=I[Pe];V===void 0&&(V=new yi,V.layers.enable(Pe),V.viewport=new Nt,I[Pe]=V),V.matrix.fromArray(Xe.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Xe.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set($e.x,$e.y,$e.width,$e.height),Pe===0&&(k.matrix.copy(V.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(V)}let me=n.enabledFeatures;if(me&&me.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Pe=d.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,n.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Pe=0;Pe<_e.length;Pe++){let Xe=_e[Pe].camera;if(Xe){let $e=p[Xe];$e||($e=new co,p[Xe]=$e);let V=d.getCameraImage(Xe);$e.sourceTexture=V}}}}for(let _e=0;_e<S.length;_e++){let Oe=b[_e],me=S[_e];Oe!==null&&me!==void 0&&me.update(Oe,ee,c||a)}Ve&&Ve(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let He=new Em;He.setAnimationLoop(ke),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}},vM=new kt,Lm=new Ze;Lm.set(-1,0,0,0,1,0,0,0,1);function yM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ku(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,w,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ui&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ui&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),C=w.envMap,y=w.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ui&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function SM(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;i.uniformBlockBinding(y,b)}function c(y,S){let b=n[y.id];b===void 0&&(m(y),b=h(y),n[y.id]=b,y.addEventListener("dispose",w));let E=S.program;i.updateUBOMapping(y,E);let v=e.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function h(y){let S=d();y.__bindingPointIndex=S;let b=r.createBuffer(),E=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=n[y.id],b=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,T=b.length;v<T;v++){let A=b[v];if(Array.isArray(A))for(let D=0,I=A.length;D<I;D++)f(A[D],v,D,E);else f(A,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,b,E){if(_(y,S,b,E)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let D=0;D<T.length;D++){let I=T[D],k=p(I);g(I,y.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,y.__data)}}function g(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function _(y,S,b,E){let v=y.value,T=S+"_"+b;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{let A=E[T];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(y){let S=y.uniforms,b=0,E=16;for(let T=0,A=S.length;T<A;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,k=D.length;I<k;I++){let L=D[I],O=Array.isArray(L.value)?L.value:[L.value];for(let q=0,z=O.length;q<z;q++){let K=O[q],X=p(K),R=b%E,Q=R%X.boundary,Se=R+Q;b+=Q,Se!==0&&E-Se<X.storage&&(b+=E-Se),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=X.storage}}}let v=b%E;return v>0&&(b+=E-v),y.__size=b,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),S}function w(y){let S=y.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function C(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:c,dispose:C}}var MM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function bM(){return Jn===null&&(Jn=new ql(MM,16,16,Yr,Dn),Jn.name="DFG_LUT",Jn.minFilter=Qt,Jn.magFilter=Qt,Jn.wrapS=Gn,Jn.wrapT=Gn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var th=class{constructor(e={}){let{canvas:t=Kp(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=f,m=new Set([xc,_c,gc]),p=new Set([sn,In,ga,_a,pc,mc]),w=new Uint32Array(4),C=new Int32Array(4),y=new J,S=null,b=null,E=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,I=null,k=null,L=null,O=null;this._outputColorSpace=ui;let q=0,z=0,K=null,X=-1,R=null,Q=new Nt,Se=new Nt,Me=null,Ve=new ct(0),ke=0,He=t.width,Z=t.height,ee=1,_e=null,Oe=null,me=new Nt(0,0,He,Z),Ue=new Nt(0,0,He,Z),Be=!1,Pe=new ao,Xe=!1,$e=!1,V=new kt,tt=new J,vt=new Nt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function ft(){return K===null?ee:1}let F=i;function It(M,U){return t.getContext(M,U)}let We,P,x,B,H,$,ce,ae,j,ie,fe,Ee,de,ue,le,Ie,Fe,N,he,te,pe,xe,ne;try{let M={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),F===null){let U="webgl2";if(F=It(U,M),F===null)throw It(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(M){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ge("WebGLRenderer: "+M.message),M}function oe(){We=new Py(F),We.init(),pe=new gM(F,We),P=new yy(F,We,e,pe),x=new pM(F,We),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),k=F.createFramebuffer(),L=F.createFramebuffer(),O=F.createFramebuffer(),B=new Dy(F),H=new eM,$=new mM(F,We,x,H,P,pe,B),ce=new Ry(A),ae=new U0(F),xe=new xy(F,ae),j=new Iy(F,ae,B,xe),ie=new Uy(F,j,ae,xe,B),N=new Ny(F,P,$),le=new Sy(H),fe=new QS(A,ce,We,P,xe,le),Ee=new yM(A,H),de=new iM,ue=new lM(We),Fe=new _y(A,ce,x,ie,g,l),Ie=new dM(A,ie,P),ne=new SM(F,B,P,x),he=new vy(F,We,B),te=new Ly(F,We,B),B.programs=fe.programs,A.capabilities=P,A.extensions=We,A.properties=H,A.renderLists=de,A.shadowMap=Ie,A.state=x,A.info=B}_!==sn&&(T=new Oy(_,t.width,t.height,o,n,s));let re=new gf(A,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(He,Z,!1))},this.getSize=function(M){return M.set(He,Z)},this.setSize=function(M,U,Y=!0){if(re.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}He=M,Z=U,t.width=Math.floor(M*ee),t.height=Math.floor(U*ee),Y===!0&&(t.style.width=M+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(He*ee,Z*ee).floor()},this.setDrawingBufferSize=function(M,U,Y){He=M,Z=U,ee=Y,t.width=Math.floor(M*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===sn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,U,Y,G){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,U,Y,G),x.viewport(Q.copy(me).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,U,Y,G){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,U,Y,G),x.scissor(Se.copy(Ue).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){x.setScissorTest(Be=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let G=0;if(M){let W=!1;if(K!==null){let ge=K.texture.format;W=m.has(ge)}if(W){let ge=K.texture.type,we=p.has(ge),ye=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Le=ye.r,Ke=ye.g,rt=ye.b;we?(w[0]=Le,w[1]=Ke,w[2]=rt,w[3]=Ce,F.clearBufferuiv(F.COLOR,0,w)):(C[0]=Le,C[1]=Ke,C[2]=rt,C[3]=Ce,F.clearBufferiv(F.COLOR,0,C))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),de.dispose(),ue.dispose(),H.dispose(),ce.dispose(),ie.dispose(),xe.dispose(),ne.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ct),re.removeEventListener("sessionend",St),lt.stop()};function De(M){M.preventDefault(),Ju("WebGLRenderer: Context Lost."),D=!0}function se(){Ju("WebGLRenderer: Context Restored."),D=!1;let M=B.autoReset,U=Ie.enabled,Y=Ie.autoUpdate,G=Ie.needsUpdate,W=Ie.type;oe(),B.autoReset=M,Ie.enabled=U,Ie.autoUpdate=Y,Ie.needsUpdate=G,Ie.type=W}function Ne(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ae(M){let U=M.target;U.removeEventListener("dispose",Ae),Ye(U)}function Ye(M){qt(M),H.remove(M)}function qt(M){let U=H.get(M).programs;U!==void 0&&(U.forEach(function(Y){fe.releaseProgram(Y)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,G,W,ge){U===null&&(U=Dt);let we=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=si(M,U,Y,G,W);x.setMaterial(G,we);let Ce=Y.index,Le=1;if(G.wireframe===!0){if(Ce=j.getWireframeAttribute(Y),Ce===void 0)return;Le=2}let Ke=Y.drawRange,rt=Y.attributes.position,Re=Ke.start*Le,dt=(Ke.start+Ke.count)*Le;ge!==null&&(Re=Math.max(Re,ge.start*Le),dt=Math.min(dt,(ge.start+ge.count)*Le)),Ce!==null?(Re=Math.max(Re,0),dt=Math.min(dt,Ce.count)):rt!=null&&(Re=Math.max(Re,0),dt=Math.min(dt,rt.count));let Zt=dt-Re;if(Zt<0||Zt===1/0)return;xe.setup(W,G,ye,Y,Ce);let Rt,Mt=he;if(Ce!==null&&(Rt=ae.get(Ce),Mt=te,Mt.setIndex(Rt)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*ft()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(W.isLine){let _i=G.linewidth;_i===void 0&&(_i=1),x.setLineWidth(_i*ft()),W.isLineSegments?Mt.setMode(F.LINES):W.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else W.isPoints?Mt.setMode(F.POINTS):W.isSprite&&Mt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(We.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let _i=W._multiDrawStarts,be=W._multiDrawCounts,Li=W._multiDrawCount,ut=Ce?ae.get(Ce).bytesPerElement:1,mn=H.get(G).currentProgram.getUniforms();for(let zn=0;zn<Li;zn++)mn.setValue(F,"_gl_DrawID",zn),Mt.render(_i[zn]/ut,be[zn])}else if(W.isInstancedMesh)Mt.renderInstances(Re,Zt,W.count);else if(Y.isInstancedBufferGeometry){let _i=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,_i);Mt.renderInstances(Re,Zt,be)}else Mt.render(Re,Zt)};function it(M,U,Y,G){I!==null&&M.isNodeMaterial&&I.setObject(G,M),Xe===!0&&le.setState(M,Y,!1),M.transparent===!0&&M.side===Yn&&M.forceSinglePass===!1?(M.side=Ui,M.needsUpdate=!0,Bt(M,U,G),M.side=Hr,M.needsUpdate=!0,Bt(M,U,G),M.side=Yn):Bt(M,U,G)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),I!==null&&I.renderStart(M,U,Y),b=ue.get(Y),b.init(U),v.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),M!==Y&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),$e=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,$e),Xe===!0&&le.setGlobalState(this.clippingPlanes,U),I!==null&&Ie.render(b.state.shadowsArray,Y,U);let G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ge=W.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let ye=ge[we];it(ye,Y,U,W),G.add(ye)}else it(ge,Y,U,W),G.add(ge)}),b=v.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(M,U,Y=null){let G=this.compile(M,U,Y);return new Promise(W=>{function ge(){if(G.forEach(function(we){let Ce=H.get(we).currentProgram;(Ce===void 0||Ce.isReady())&&G.delete(we)}),G.size===0){W(M);return}setTimeout(ge,10)}We.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let At=null;function ri(M){At&&At(M)}function Ct(){lt.stop()}function St(){lt.start()}let lt=new Em;lt.setAnimationLoop(ri),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(M){At=M,re.setAnimationLoop(M),M===null?lt.stop():lt.start()},re.addEventListener("sessionstart",Ct),re.addEventListener("sessionend",St),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(M,U);let Y=re.enabled===!0&&re.isPresenting===!0,G=T!==null&&(K===null||Y)&&T.begin(A,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,U,K),b=ue.get(M,v.length),b.init(U),b.state.textureUnits=$.getTextureUnits(),v.push(b),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(V,Pn,U.reversedDepth),$e=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,$e),S=de.get(M,E.length),S.init(),E.push(S),re.enabled===!0&&re.isPresenting===!0){let we=A.xr.getDepthSensingMesh();we!==null&&Pi(we,U,-1/0,A.sortObjects)}Pi(M,U,0,A.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(_e,Oe),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&Fe.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&le.beginShadows();let W=b.state.shadowsArray;if(Ie.render(W,M,U),Xe===!0&&le.endShadows(),(G&&T.hasRenderPass())===!1){let we=S.opaque,ye=S.transmissive;if(b.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(ye.length>0)for(let Le=0,Ke=Ce.length;Le<Ke;Le++){let rt=Ce[Le];gi(we,ye,M,rt)}qe&&Fe.render(M);for(let Le=0,Ke=Ce.length;Le<Ke;Le++){let rt=Ce[Le];Tt(S,M,rt,rt.viewport)}}else ye.length>0&&gi(we,ye,M,U),qe&&Fe.render(M),Tt(S,M,U)}K!==null&&z===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),G&&T.end(A),M.isScene===!0&&M.onAfterRender(A,M,U),xe.resetDefaultState(),X=-1,R=null,v.pop(),v.length>0?(b=v[v.length-1],$.setTextureUnits(b.state.textureUnits),Xe===!0&&le.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,I!==null&&I.renderEnd()};function Pi(M,U,Y,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Pe)){G&&vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);let we=ie.update(M),ye=M.material;ye.visible&&S.push(M,we,ye,Y,vt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Pe))){let we=ie.update(M),ye=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),vt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),vt.copy(we.boundingSphere.center)),vt.applyMatrix4(M.matrixWorld).applyMatrix4(V)),Array.isArray(ye)){let Ce=we.groups;for(let Le=0,Ke=Ce.length;Le<Ke;Le++){let rt=Ce[Le],Re=ye[rt.materialIndex];Re&&Re.visible&&S.push(M,we,Re,Y,vt.z,rt,U)}}else ye.visible&&S.push(M,we,ye,Y,vt.z,null,U)}}let ge=M.children;for(let we=0,ye=ge.length;we<ye;we++)Pi(ge[we],U,Y,G)}function Tt(M,U,Y,G){let{opaque:W,transmissive:ge,transparent:we}=M;b.setupLightsView(Y),Xe===!0&&le.setGlobalState(A.clippingPlanes,Y),G&&x.viewport(Q.copy(G)),W.length>0&&Ii(W,U,Y),ge.length>0&&Ii(ge,U,Y),we.length>0&&Ii(we,U,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function gi(M,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Re=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Xi(1,1,{generateMipmaps:!0,type:Re?Dn:sn,minFilter:Xr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let ge=b.state.transmissionRenderTarget[G.id],we=G.viewport||Q;ge.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Ce=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(Ve),ke=A.getClearAlpha(),ke<1&&A.setClearColor(16777215,.5),A.clear(),qe&&Fe.render(Y);let Ke=A.toneMapping;A.toneMapping=rn;let rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Xe===!0&&le.setGlobalState(A.clippingPlanes,G),Ii(M,Y,G),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let dt=0,Zt=U.length;dt<Zt;dt++){let Rt=U[dt],{object:Mt,geometry:_i,material:be,group:Li}=Rt;if(be.side===Yn&&Mt.layers.test(G.layers)){let ut=be.side;be.side=Ui,be.needsUpdate=!0,Yt(Mt,Y,G,_i,be,Li),be.side=ut,be.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}A.setRenderTarget(ye,Ce,Le),A.setClearColor(Ve,ke),rt!==void 0&&(G.viewport=rt),A.toneMapping=Ke}function Ii(M,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ge=M.length;W<ge;W++){let we=M[W],{object:ye,geometry:Ce,group:Le}=we,Ke=we.material;Ke.allowOverride===!0&&G!==null&&(Ke=G),ye.layers.test(Y.layers)&&Yt(ye,U,Y,Ce,Ke,Le)}}function Yt(M,U,Y,G,W,ge){I!==null&&W.isNodeMaterial&&I.setObject(M,W),M.onBeforeRender(A,U,Y,G,W,ge),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(A,U,Y,G,M,ge),W.transparent===!0&&W.side===Yn&&W.forceSinglePass===!1?(W.side=Ui,W.needsUpdate=!0,A.renderBufferDirect(Y,U,G,W,M,ge),W.side=Hr,W.needsUpdate=!0,A.renderBufferDirect(Y,U,G,W,M,ge),W.side=Yn):A.renderBufferDirect(Y,U,G,W,M,ge),M.onAfterRender(A,U,Y,G,W,ge)}function Bt(M,U,Y){U.isScene!==!0&&(U=Dt);let G=H.get(M),W=b.state.lights,ge=b.state.shadowsArray,we=W.state.version,ye=fe.getParameters(M,W.state,ge,U,Y,b.state.lightProbeGridArray),Ce=fe.getProgramCacheKey(ye),Le=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ce.get(M.envMap||G.environment,Ke),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Ae),Le=new Map,G.programs=Le);let rt=Le.get(Ce);if(rt!==void 0){if(G.currentProgram===rt&&G.lightsStateVersion===we)return kn(M,ye),rt}else ye.uniforms=fe.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,Y,ye),M.onBeforeCompile(ye,A),rt=fe.acquireProgram(ye,Ce),Le.set(Ce,rt),G.uniforms=ye.uniforms;let Re=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=le.uniform),kn(M,ye),G.needsLights=pn(M),G.lightsStateVersion=we,G.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.sunLights.value=W.state.sun,Re.sunLightShadows.value=W.state.sunShadow,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.sunShadowMatrix.value=W.state.sunShadowMatrix,Re.sunShadowCascade.value=W.state.sunShadowCascade,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=rt,G.uniformsList=null,rt}function jt(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Sa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function kn(M,U){let Y=H.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function ks(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=M.length;Y<G;Y++){let W=M[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function si(M,U,Y,G,W){U.isScene!==!0&&(U=Dt),$.resetTextureUnits();let ge=U.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ye=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:st.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=ce.get(G.envMap||we,Ce),Ke=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,Zt=!!Y.morphAttributes.color,Rt=rn;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Rt=A.toneMapping);let Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_i=Mt!==void 0?Mt.length:0,be=H.get(G),Li=b.state.lights;if(Xe===!0&&($e===!0||M!==R)){let Et=M===R&&G.id===X;le.setState(G,M,Et)}let ut=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Li.state.version||be.outputColorSpace!==ye||W.isBatchedMesh&&be.batching===!1||!W.isBatchedMesh&&be.batching===!0||W.isBatchedMesh&&be.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&be.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&be.instancing===!1||!W.isInstancedMesh&&be.instancing===!0||W.isSkinnedMesh&&be.skinning===!1||!W.isSkinnedMesh&&be.skinning===!0||W.isInstancedMesh&&be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&be.instancingMorph===!1&&W.morphTexture!==null||be.envMap!==Le||G.fog===!0&&be.fog!==ge||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==Ke||be.vertexTangents!==rt||be.morphTargets!==Re||be.morphNormals!==dt||be.morphColors!==Zt||be.toneMapping!==Rt||be.morphTargetsCount!==_i||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,be.__version=G.version);let mn=be.currentProgram;ut===!0&&(mn=Bt(G,U,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,mn,be));let zn=!1,Tr=!1,Vs=!1,yt=mn.getUniforms(),Wt=be.uniforms;if(x.useProgram(mn.program)&&(zn=!0,Tr=!0,Vs=!0),G.id!==X&&(X=G.id,Tr=!0),be.needsLights){let Et=ks(b.state.lightProbeGridArray,W);be.lightProbeGrid!==Et&&(be.lightProbeGrid=Et,Tr=!0)}if(zn||R!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(F,"projectionMatrix",M.projectionMatrix),yt.setValue(F,"viewMatrix",M.matrixWorldInverse);let Ar=yt.map.cameraPosition;Ar!==void 0&&Ar.setValue(F,tt.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),R!==M&&(R=M,Tr=!0,Vs=!0)}if(be.needsLights&&(Li.state.sunShadowMap.length>0&&yt.setValue(F,"sunShadowMap",Li.state.sunShadowMap,$),Li.state.directionalShadowMap.length>0&&yt.setValue(F,"directionalShadowMap",Li.state.directionalShadowMap,$),Li.state.spotShadowMap.length>0&&yt.setValue(F,"spotShadowMap",Li.state.spotShadowMap,$),Li.state.pointShadowMap.length>0&&yt.setValue(F,"pointShadowMap",Li.state.pointShadowMap,$)),W.isSkinnedMesh){yt.setOptional(F,W,"bindMatrix"),yt.setOptional(F,W,"bindMatrixInverse");let Et=W.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),yt.setValue(F,"boneTexture",Et.boneTexture,$))}W.isBatchedMesh&&(yt.setOptional(F,W,"batchingTexture"),yt.setValue(F,"batchingTexture",W._matricesTexture,$),yt.setOptional(F,W,"batchingIdTexture"),yt.setValue(F,"batchingIdTexture",W._indirectTexture,$),yt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(F,"batchingColorTexture",W._colorsTexture,$));let Er=Y.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&N.update(W,Y,mn),(Tr||be.receiveShadow!==W.receiveShadow)&&(be.receiveShadow=W.receiveShadow,yt.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=bM()),Tr){if(yt.setValue(F,"toneMappingExposure",A.toneMappingExposure),be.needsLights&&Ht(Wt,Vs),ge&&G.fog===!0&&Ee.refreshFogUniforms(Wt,ge),Ee.refreshMaterialUniforms(Wt,G,ee,Z,b.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){let Et=be.lightProbeGrid;Wt.probesSH.value=Et.texture,Wt.probesMin.value.copy(Et.boundingBox.min),Wt.probesMax.value.copy(Et.boundingBox.max),Wt.probesResolution.value.copy(Et.resolution)}Sa.upload(F,jt(be),Wt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Sa.upload(F,jt(be),Wt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(F,"center",W.center),yt.setValue(F,"modelViewMatrix",W.modelViewMatrix),yt.setValue(F,"normalMatrix",W.normalMatrix),yt.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Et=G.uniformsGroups;for(let Ar=0,Gs=Et.length;Ar<Gs;Ar++){let Yd=Et[Ar];ne.update(Yd,mn),ne.bind(Yd,mn)}}return mn}function Ht(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function pn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,U,Y){let G=H.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=H.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){K=M,q=U,z=Y;let G=null,W=!1,ge=!1;if(M){let ye=H.get(M);if(ye.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),Q.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest,x.viewport(Q),x.scissor(Se),x.setScissorTest(Me),X=-1;return}else if(ye.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(ye.__hasExternalTextures)$.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ke=M.depthTexture;if(ye.__boundDepthTexture!==Ke){if(Ke!==null&&H.has(Ke)&&(M.width!==Ke.image.width||M.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ge=!0);let Le=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?G=Le[U][Y]:G=Le[U],W=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?G=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[Y]:G=Le,Q.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest}else Q.copy(me).multiplyScalar(ee).floor(),Se.copy(Ue).multiplyScalar(ee).floor(),Me=Be;if(Y!==0&&(G=k),x.bindFramebuffer(F.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(Q),x.scissor(Se),x.setScissorTest(Me),W){let ye=H.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,Y)}else if(ge){let ye=U;for(let Ce=0;Ce<M.textures.length;Ce++){let Le=H.get(M.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,Y,ye)}}else if(M!==null&&Y!==0){let ye=H.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,Y)}X=-1};function zs(M){let U=H.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=P.textureFormatReadable(M.format),U.__typeReadable=P.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,G,W,ge,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){x.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let Le=M.textures[ye],Ke=Le.format,rt=Le.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Re=zs(Le);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-W&&F.readPixels(U,Y,G,W,pe.convert(Ke),pe.convert(rt),ge)}finally{let Le=K!==null?H.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,G,W,ge,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-W){x.bindFramebuffer(F.FRAMEBUFFER,Ce);let Le=M.textures[ye],Ke=Le.format,rt=Le.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Re=zs(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,W,pe.convert(Ke),pe.convert(rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Zt=K!==null?H.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Zt);let Rt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qp(F,Rt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(Rt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(M.image.width*G),ge=Math.floor(M.image.height*G),we=U!==null?U.x:0,ye=U!==null?U.y:0;$.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,ye,W,ge),x.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,G=null,W=0,ge=0){let we,ye,Ce,Le,Ke,rt,Re,dt,Zt,Rt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(Y!==null)we=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Ke=Y.min.y,rt=Y.isBox3?Y.min.z:0;else{let Wt=Math.pow(2,-W);we=Math.floor(Rt.width*Wt),ye=Math.floor(Rt.height*Wt),M.isDataArrayTexture?Ce=Rt.depth:M.isData3DTexture?Ce=Math.floor(Rt.depth*Wt):Ce=1,Le=0,Ke=0,rt=0}G!==null?(Re=G.x,dt=G.y,Zt=G.z):(Re=0,dt=0,Zt=0);let Mt=pe.convert(U.format),_i=pe.convert(U.type),be;U.isData3DTexture?($.setTexture3D(U,0),be=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),be=F.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),be=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Li=x.getParameter(F.UNPACK_ROW_LENGTH),ut=x.getParameter(F.UNPACK_IMAGE_HEIGHT),mn=x.getParameter(F.UNPACK_SKIP_PIXELS),zn=x.getParameter(F.UNPACK_SKIP_ROWS),Tr=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Rt.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),x.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),x.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);let Vs=M.isDataArrayTexture||M.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Wt=H.get(M),Er=H.get(U),Et=H.get(Wt.__renderTarget),Ar=H.get(Er.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Et.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let Gs=0;Gs<Ce;Gs++)Vs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(M).__webglTexture,W,rt+Gs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,H.get(U).__webglTexture,ge,Zt+Gs)),F.blitFramebuffer(Le,Ke,we,ye,Re,dt,we,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||H.has(M)){let Wt=H.get(M),Er=H.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,L),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let Et=0;Et<Ce;Et++)Vs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,W,rt+Et):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,W),yt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Er.__webglTexture,ge,Zt+Et):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Er.__webglTexture,ge),W!==0?F.blitFramebuffer(Le,Ke,we,ye,Re,dt,we,ye,F.COLOR_BUFFER_BIT,F.NEAREST):yt?F.copyTexSubImage3D(be,ge,Re,dt,Zt+Et,Le,Ke,we,ye):F.copyTexSubImage2D(be,ge,Re,dt,Le,Ke,we,ye);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(be,ge,Re,dt,Zt,we,ye,Ce,Mt,_i,Rt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(be,ge,Re,dt,Zt,we,ye,Ce,Mt,Rt.data):F.texSubImage3D(be,ge,Re,dt,Zt,we,ye,Ce,Mt,_i,Rt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Re,dt,we,ye,Mt,_i,Rt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Re,dt,Rt.width,Rt.height,Mt,Rt.data):F.texSubImage2D(F.TEXTURE_2D,ge,Re,dt,we,ye,Mt,_i,Rt);x.pixelStorei(F.UNPACK_ROW_LENGTH,Li),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut),x.pixelStorei(F.UNPACK_SKIP_PIXELS,mn),x.pixelStorei(F.UNPACK_SKIP_ROWS,zn),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Tr),ge===0&&U.generateMipmaps&&F.generateMipmap(be),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){q=0,z=0,K=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};function dr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uo={duration:.5,overwrite:!1,delay:0},Nf,fi,Lt,Sn=1e8,wt=1/Sn,wf=Math.PI*2,TM=wf/4,EM=0,Gm=Math.sqrt,AM=Math.cos,CM=Math.sin,ii=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},mr=function(e){return typeof e=="number"},dh=function(e){return typeof e>"u"},Qn=function(e){return typeof e=="object"},$i=function(e){return e!==!1},Uf=function(){return typeof window<"u"},rh=function(e){return zt(e)||ii(e)},Hm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,RM=/random\([^)]+\)/g,PM=/,\s*/g,Dm=/(?:-?\.?\d|\.)+/gi,Ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_f=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Of=/[+-]=-?[.\d]+/,IM=/[^,'"\[\]\s]+/gi,LM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Kn,Tf,Bf,on={},lh={},Wm,Xm=function(e){return(lh=wa(e,on))&&Ti},ph=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fo=function(e,t){return!t&&console.warn(e)},qm=function(e,t){return e&&(on[e]=t)&&lh&&(lh[e]=t)||on},Oo=function(){return 0},DM={suppressEvents:!0,isStart:!0,kill:!1},sh={suppressEvents:!0,kill:!1},NM={suppressEvents:!0},kf={},Jr=[],Ef={},Ym,Zi={},xf={},Nm=30,ah=[],zf="",Vf=function(e){var t=e[0],i,n;if(Qn(t)||zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=ah.length;n--&&!ah[n].targetTest(t););i=ah[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Xf(e[n],i)))||e.splice(n,1);return e},$r=function(e){return e._gsap||Vf(Mn(e))[0]._gsap},Gf=function(e,t,i){return(i=e[t])&&zt(i)?e[t]():dh(i)&&e.getAttribute&&e.getAttribute(t)||i},Fi=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},UM=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},ch=function(){var e=Jr.length,t=Jr.slice(0),i,n;for(Ef={},Jr.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Hf=function(e){return!!(e._initted||e._startAt||e.add)},Zm=function(e,t,i,n){Jr.length&&!fi&&ch(),e.render(t,i,n||!!(fi&&t<0&&Hf(e))),Jr.length&&!fi&&ch()},Jm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(IM).length<2?t:ii(e)?e.trim():e},$m=function(e){return e},ln=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},FM=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},wa=function(e,t){for(var i in t)e[i]=t[i];return e},Um=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Qn(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},hh=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Lo=function(e){var t=e.parent||Ft,i=e.keyframes?FM(wi(e.keyframes)):ln;if($i(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},OM=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Km=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},mh=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},BM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Af=function(e,t,i,n){return e._startAt&&(fi?e._startAt.revert(sh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},kM=function r(e){return!e||e._ts&&r(e.parent)},Fm=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var i=Math.floor(e=Ut(e/t));return e&&i===e?i-1:i},uh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gh=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},_h=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ut(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gh(e),i._dirty||vs(i,e)),e},jm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=uh(e.rawTime(),t),(!t._dur||zo(0,t.totalDuration(),i)-t._tTime>wt)&&t.render(i,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-wt}},jn=function(e,t,i,n){return t.parent&&Kr(t),t._start=Ut((mr(i)?i:i||e!==Ft?yn(e,i,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Km(e,t,"_first","_last",e._sort?"_start":0),Cf(t)||(e._recent=t),n||jm(e,t),e._ts<0&&_h(e,e._tTime),e},Qm=function(e,t){return(on.ScrollTrigger||ph("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},eg=function(e,t,i,n,s){if(Zf(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!fi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ym!==Ji.frame)return Jr.push(e),e._lazy=[s,n],1},zM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},VM=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&zM(e)&&!(!e._initted&&Cf(e))||(e._ts<0||e._dp._ts<0)&&!Cf(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=zo(0,e._tDur,t),h=Ta(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ta(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||fi||n||e._zTime===wt||!t&&e._zTime){if(!e._initted&&eg(e,t,n,i,l))return;for(d=e._zTime,e._zTime=t||(i?wt:0),i||(i=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Af(e,t,i,!0),e._onUpdate&&!i&&an(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Kr(e,1),!i&&!fi&&(an(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},GM=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ea=function(e,t,i,n){var s=e._repeat,a=Ut(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ut(a*(s+1)+e._rDelay*s):a,o>0&&!n&&_h(e,e._tTime=e._tDur*o),e.parent&&gh(e),i||vs(e.parent,e),e},Om=function(e){return e instanceof bi?vs(e):Ea(e,e._dur)},HM={_start:0,endTime:Oo,totalDuration:Oo},yn=function r(e,t,i){var n=e.labels,s=e._recent||HM,a=e.duration()>=Sn?s.endTime(!1):e._dur,o,l,c;return ii(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(wi(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},Do=function(e,t,i){var n=mr(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$i(l.vars.inherit)&&l.parent;a.immediateRender=$i(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Xt(t[0],a,t[s+1])},jr=function(e,t){return e||e===0?t(e):t},zo=function(e,t,i){return i<e?e:i>t?t:i},di=function(e,t){return!ii(e)||!(t=LM.exec(e))?"":t[1]},WM=function(e,t,i){return jr(i,function(n){return zo(e,t,n)})},Rf=[].slice,tg=function(e,t){return e&&Qn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qn(e[0]))&&!e.nodeType&&e!==Kn},XM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ii(n)&&!t||tg(n,1)?(s=i).push.apply(s,Mn(n)):i.push(n)})||i},Mn=function(e,t,i){return Lt&&!t&&Lt.selector?Lt.selector(e):ii(e)&&!i&&(Tf||!Aa())?Rf.call((t||Bf).querySelectorAll(e),0):wi(e)?XM(e,i):tg(e)?Rf.call(e,0):e?[e]:[]},Pf=function(e){return e=Mn(e)[0]||Fo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Mn(t,i.querySelectorAll?i:i===e?Fo("Invalid scope")||Bf.createElement("div"):e)}},ig=function(e){return e.sort(function(){return .5-Math.random()})},ng=function(e){if(zt(e))return e;var t=Qn(e)?e:{each:e},i=ys(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,d=n;return ii(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],d=n[1]),function(u,f,g){var _=(g||t).length,m=a[_],p,w,C,y,S,b,E,v,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,Sn])[1],!T){for(E=-Sn;E<(E=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],p=l?Math.min(T,_)*h-.5:n%T,w=T===Sn?0:l?_*d/T-.5:n/T|0,E=0,v=Sn,b=0;b<_;b++)C=b%T-p,y=w-(b/T|0),m[b]=S=c?Math.abs(c==="y"?y:C):Gm(C*C+y*y),S>E&&(E=S),S<v&&(v=S);n==="random"&&ig(m),m.max=E-v,m.min=v,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(n==="edges"?-1:1),m.b=_<0?s-_:s,m.u=di(t.amount||t.each)||0,i=i&&_<0?rb(i):i}return _=(m[u]-m.min)/m.max||0,Ut(m.b+(i?i(_):_)*m.v)+m.u}},If=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Ut(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(mr(i)?0:di(i))}},rg=function(e,t){var i=wi(e),n,s;return!i&&Qn(e)&&(n=i=e.radius||Sn,e.values?(e=Mn(e.values),(s=!mr(e[0]))&&(n*=n)):e=If(e.increment)),jr(t,i?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Sn,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!n||c<=n?e[h]:a,s||h===a||mr(a)?h:h+di(a)}:If(e))},sg=function(e,t,i,n){return jr(wi(e)?!t:i===!0?!!(i=0):!n,function(){return wi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},qM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},YM=function(e,t){return function(i){return e(parseFloat(i))+(t||di(i))}},ZM=function(e,t,i){return og(e,t,0,1,i)},ag=function(e,t,i){return jr(i,function(n){return e[~~t(n)]})},JM=function r(e,t,i){var n=t-e;return wi(e)?ag(e,r(0,e.length),t):jr(i,function(s){return(n+(s-e)%n)%n+e})},$M=function r(e,t,i){var n=t-e,s=n*2;return wi(e)?ag(e,r(0,e.length-1),t):jr(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},Ca=function(e){return e.replace(RM,function(t){var i=t.indexOf("[")+1,n=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(PM);return sg(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},og=function(e,t,i,n,s){var a=t-e,o=n-i;return jr(s,function(l){return i+((l-e)/a*o||0)})},KM=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=ii(e),o={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(wi(e)&&!wi(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},i=t}else n||(e=wa(wi(e)?[]:{},e));if(!h){for(l in t)qf.call(o,e,l,"get",t[l]);s=function(g){return Kf(g,o)||(a?e.p:e)}}}return jr(i,s)},Bm=function(e,t,i){var n=e.labels,s=Sn,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},an=function(e,t,i){var n=e.vars,s=n[t],a=Lt,o=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Jr.length&&ch(),o&&(Lt=o),h=l?s.apply(c,l):s.call(c),Lt=a,h},Po=function(e){return Kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fi),e.progress()<1&&an(e,"onInterrupt"),e},ba,lg=[],cg=function(e){if(e)if(e=!e.name&&e.default||e,Uf()||e.headless){var t=e.name,i=zt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Oo,render:Kf,add:qf,kill:pb,modifier:db,rawVars:0},a={targetTest:0,get:0,getSetter:xh,aliases:{},register:0};if(Aa(),e!==n){if(Zi[t])return;ln(n,ln(hh(e,s),a)),wa(n.prototype,wa(s,hh(e,a))),Zi[n.prop=t]=n,e.targetTest&&(ah.push(n),kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qm(t,n),e.register&&e.register(Ti,n,Oi)}else lg.push(e)},bt=255,Io={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},vf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*bt+.5|0},hg=function(e,t,i){var n=e?mr(e)?[e>>16,e>>8&bt,e&bt]:0:Io.black,s,a,o,l,c,h,d,u,f,g;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Io[e])n=Io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&bt,n&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(n=g=e.match(Dm),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=vf(l+1/3,s,a),n[1]=vf(l,s,a),n[2]=vf(l-1/3,s,a);else if(~e.indexOf("="))return n=e.match(Ff),i&&n.length<4&&(n[3]=1),n}else n=e.match(Dm)||Io.transparent;n=n.map(Number)}return t&&!g&&(s=n[0]/bt,a=n[1]/bt,o=n[2]/bt,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},ug=function(e){var t=[],i=[],n=-1;return e.split(pr).forEach(function(s){var a=s.match(Ms)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},km=function(e,t,i){var n="",s=(e+n).match(pr),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=hg(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=ug(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(pr,"1").split(Ms),d=c.length-1;o<d;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(pr),d=c.length-1;o<d;o++)n+=c[o]+s[o];return n+c[d]},pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Io)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),jM=/hsl[a]?\(/,Wf=function(e){var t=e.join(" "),i;if(pr.lastIndex=0,pr.test(t))return i=jM.test(t),e[1]=km(e[1],i),e[0]=km(e[0],i,ug(e[1])),!0},Bo,Ji=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,h,d,u,f,g=function _(m){var p=r()-n,w=m===!0,C,y,S,b;if((p>e||p<0)&&(i+=p-t),n+=p,S=n-i,C=S-a,(C>0||w)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=C+(C>=s?4:s-C),y=1),w||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](S,u,b,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Wm&&(!Tf&&Uf()&&(Kn=Tf=window,Bf=Kn.document||{},on.gsap=Ti,(Kn.gsapVersions||(Kn.gsapVersions=[])).push(Ti.version),Xm(lh||Kn.GreenSockGlobals||!Kn.gsap&&Kn||{}),lg.forEach(cg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Bo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Bo=0,c=Oo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,w){var C=p?function(y,S,b,E){m(y,S,b,E),d.remove(C)}:m;return d.remove(m),o[w?"unshift":"push"](C),Aa(),C},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Aa=function(){return!Bo&&Ji.wake()},ht={},QM=/^[\d.\-M][\d.\-,\s]/,eb=/["']/g,tb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(eb,"").trim():+c,n=l.substr(o+1).trim();return t},ib=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},nb=function(e){var t=(e+"").split("("),i=ht[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[tb(t[1])]:ib(e).split(",").map(Jm)):ht._CE&&QM.test(e)?ht._CE("",e):i},rb=function(e){return function(t){return 1-e(1-t)}},ys=function(e,t){return e&&(zt(e)?e:ht[e]||nb(e))||t},ws=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return Fi(e,function(o){ht[o]=on[o]=s,ht[a=o.toLowerCase()]=i;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},fg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yf=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/wf*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*CM((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:fg(o);return s=wf/s,l.config=function(c,h){return r(e,c,h)},l},Sf=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:fg(i);return n.config=function(s){return r(e,s)},n};Fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ws(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;ws("Elastic",yf("in"),yf("out"),yf());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ws("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ws("Circ",function(r){return-(Gm(1-r*r)-1)});ws("Sine",function(r){return r===1?1:-AM(r*TM)+1});ws("Back",Sf("in"),Sf("out"),Sf());ht.SteppedEase=ht.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-wt;return function(o){return((n*zo(0,a,o)|0)+s)*i}}};Uo.ease=ht["quad.out"];Fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return zf+=r+","+r+"Params,"});var Xf=function(e,t){this.id=EM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gf,this.set=t?t.getSetter:xh},ko=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ea(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Bo||Ji.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_h(this,i),!s._dp||s.parent||jm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===wt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Zm(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Fm(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Fm(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Ta(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?uh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(zo(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),gh(this),BM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ut(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&jn(n,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+($i(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uh(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=NM);var n=fi;return fi=i,Hf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),fi=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Om(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Om(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(yn(this,i),$i(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,$i(n)),this._dur||(this._zTime=-wt),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-wt)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=zt(i)?i:$m,l=function(){var h=n.then;n.then=null,s&&s(),zt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){Po(this)},r})();ln(ko.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var bi=(function(r){Vm(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=$i(i.sortChildren),Ft&&jn(i.parent||Ft,dr(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Qm(dr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return Do(0,arguments,this),this},t.from=function(n,s,a){return Do(1,arguments,this),this},t.fromTo=function(n,s,a,o){return Do(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,Lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(n,s,yn(this,a),1),this},t.call=function(n,s,a){return jn(this,Xt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xt(n,a,yn(this,l)),this},t.staggerFrom=function(n,s,a,o,l,c,h){return a.runBackwards=1,Lo(a).immediateRender=$i(a.immediateRender),this.staggerTo(n,s,a,o,l,c,h)},t.staggerFromTo=function(n,s,a,o,l,c,h,d){return o.startAt=a,Lo(o).immediateRender=$i(o.immediateRender),this.staggerTo(n,s,o,l,c,h,d)},t.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:Ut(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,g,_,m,p,w,C,y,S,b,E;if(this!==Ft&&h>l&&n>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),u=h,y=this._start,C=this._ts,p=!C,d&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,a);if(u=Ut(h%m),h===l?(_=this._repeat,u=c):(S=Ut(h/m),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Ta(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),b&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var v=b&&S&1,T=v===(b&&_&1);if(_<S&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Ut(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=GM(this,Ut(o),Ut(u)),w&&(h-=u-(u=w._start))),this._tTime=h,this._time=u,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!s&&!S&&(an(this,"onStart"),this._tTime!==h))return this;if(u>=o&&n>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!p){w=0,g&&(h+=this._zTime=-wt);break}}f=g}else{f=this._last;for(var A=n<0?n:u;f;){if(g=f._prev,(f._act||A<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,a||fi&&Hf(f)),u!==this._time||!this._ts&&!p){w=0,g&&(h+=this._zTime=A?-wt:wt);break}}f=g}}if(w&&!s&&(this.pause(),w.render(u>=o?0:-wt)._zTime=u>=o?1:-1,this._ts))return this._start=y,gh(this),this.render(n,s,a);this._onUpdate&&!s&&an(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Kr(this,1),!s&&!(n<0&&!o)&&(h||o||!l)&&(an(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(mr(s)||(s=yn(this,s,n)),!(n instanceof ko)){if(wi(n))return n.forEach(function(o){return a.add(o,s)}),this;if(ii(n))return this.addLabel(n,s);if(zt(n))n=Xt.delayedCall(0,n);else return this}return this!==n?jn(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xt?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return ii(n)?this.removeLabel(n):zt(n)?this.killTweensOf(n):(n.parent===this&&mh(this,n),n===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Ji.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=yn(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=Xt.delayedCall(0,s||Oo,a);return o.data="isPause",this._hasPause=1,jn(this,o,yn(this,n))},t.removePause=function(n){var s=this._first;for(n=yn(this,n);s;)s._start===n&&s.data==="isPause"&&Kr(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Zr!==o[l]&&o[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=Mn(n),l=this._first,c=mr(s),h;l;)l instanceof Xt?UM(l._targets,o)&&(c?(!Zr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=yn(a,n),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Xt.to(a,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||wt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ea(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,ln({startAt:{time:yn(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Bm(this,yn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Bm(this,yn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=Ut(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return vs(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),vs(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,l=Sn,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,jn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ut(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ea(a,a===Ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Ft._ts&&(Zm(Ft,uh(n,Ft)),Ym=Ji.frame),Ji.frame>=Nm){Nm+=Ki.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&Ki.autoSleep&&Ji._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ji.sleep()}}},e})(ko);ln(bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var sb=function(e,t,i,n,s,a,o){var l=new Oi(this._pt,e,t,0,1,$f,null,s),c=0,h=0,d,u,f,g,_,m,p,w;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Ca(n)),a&&(w=[i,n],a(w,e,t),i=w[0],n=w[1]),u=i.match(_f)||[];d=_f.exec(n);)g=d[0],_=n.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?bs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=_f.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Of.test(n)||p)&&(l.e=0),this._pt=l,l},qf=function(e,t,i,n,s,a,o,l,c,h){zt(n)&&(n=n(s||0,e,a));var d=e[t],u=i!=="get"?i:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=zt(d)?c?hb:mg:Jf,g;if(ii(n)&&(~n.indexOf("random(")&&(n=Ca(n)),n.charAt(1)==="="&&(g=bs(u,n)+(di(u)||0),(g||g===0)&&(n=g))),!h||u!==n||Lf)return!isNaN(u*n)&&n!==""?(g=new Oi(this._pt,e,t,+u||0,n-(u||0),typeof d=="boolean"?fb:gg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&ph(t,n),sb.call(this,e,t,u,n,f,l||Ki.stringFilter,c))},ab=function(e,t,i,n,s){if(zt(e)&&(e=No(e,s,t,i,n)),!Qn(e)||e.style&&e.nodeType||wi(e)||Hm(e))return ii(e)?No(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=No(e[o],s,t,i,n);return a},Yf=function(e,t,i,n,s,a){var o,l,c,h;if(Zi[e]&&(o=new Zi[e]).init(s,o.rawVars?t[e]:ab(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new Oi(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==ba))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Zr,Lf,Zf=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,w=p&&p.data==="nested"?p.vars.targets:m,C=e._overwrite==="auto"&&!Nf,y=e.timeline,S=n.easeReverse||d,b,E,v,T,A,D,I,k,L,O,q,z,K;if(y&&(!u||!s)&&(s="none"),e._ease=ys(s,Uo.ease),e._rEase=S&&(ys(S)||e._ease),e._from=!y&&!!n.runBackwards,e._from&&(e.ratio=1),!y||u&&!n.stagger){if(k=m[0]?$r(m[0]).harness:0,z=k&&n[k.prop],b=hh(n,kf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?sh:DM),_._lazy=0),a){if(Kr(e._startAt=Xt.set(m,ln({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&$i(l),startAt:null,delay:0,onUpdate:c&&function(){return an(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fi||!o&&!f)&&e._startAt.revert(sh),o&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),v=ln({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$i(l),immediateRender:o,stagger:0,parent:p},b),z&&(v[k.prop]=z),Kr(e._startAt=Xt.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fi?e._startAt.revert(sh):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$i(l)||l&&!g,E=0;E<m.length;E++){if(A=m[E],I=A._gsap||Vf(m)[E]._gsap,e._ptLookup[E]=O={},Ef[I.id]&&Jr.length&&ch(),q=w===m?E:w.indexOf(A),k&&(L=new k).init(A,z||b,e,q,w)!==!1&&(e._pt=T=new Oi(e._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(X){O[X]=T}),L.priority&&(D=1)),!k||z)for(v in b)Zi[v]&&(L=Yf(v,b,e,q,A,w))?L.priority&&(D=1):O[v]=T=qf.call(e,A,v,"get",b[v],q,w,0,n.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),C&&e._pt&&(Zr=e,Ft.killTweensOf(A,O,e.globalTime(t)),K=!e.parent,Zr=0),e._pt&&l&&(Ef[I.id]=1)}D&&jf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,u&&t<=0&&y.render(Sn,!0,!0)},ob=function(e,t,i,n,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Lf=1,e.vars[t]="+=0",Zf(e,o),Lf=0,l?Fo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,d.e&&(d.e=Vt(i)+di(d.e)),d.b&&(d.b=h.s+di(d.b))},lb=function(e,t){var i=e[0]?$r(e[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return t;s=wa({},t);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},cb=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(wi(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},No=function(e,t,i,n,s){return zt(e)?e.call(t,i,n,s):ii(e)&&~e.indexOf("random(")?Ca(e):e},dg=zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};Fi(dg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pg[r]=1});var Xt=(function(r){Vm(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:Lo(n))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=n.parent||Ft,w=(wi(i)||Hm(i)?mr(i[0]):"length"in n)?[i]:Mn(i),C,y,S,b,E,v,T,A;if(o._targets=w.length?Vf(w):Fo("GSAP target "+i+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||rh(c)||rh(h)){n=o.vars;var D=n.easeReverse||n.yoyoEase;if(C=o.timeline=new bi({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:w}),C.kill(),C.parent=C._dp=dr(o),C._start=0,u||rh(c)||rh(h)){if(b=w.length,T=u&&ng(u),Qn(u))for(E in u)~dg.indexOf(E)&&(A||(A={}),A[E]=u[E]);for(y=0;y<b;y++)S=hh(n,pg),S.stagger=0,D&&(S.easeReverse=D),A&&wa(S,A),v=w[y],S.duration=+No(c,dr(o),y,v,w),S.delay=(+No(h,dr(o),y,v,w)||0)-o._delay,!u&&b===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),C.to(v,S,T?T(y,v,w):0),C._ease=ht.none;C.duration()?c=h=0:o.timeline=0}else if(g){Lo(ln(C.vars.defaults,{ease:"none"})),C._ease=ys(g.ease||n.ease||"none");var I=0,k,L,O;if(wi(g))g.forEach(function(q){return C.to(w,q,">")}),C.duration();else{S={};for(E in g)E==="ease"||E==="easeEach"||cb(E,g[E],S,g.easeEach);for(E in S)for(k=S[E].sort(function(q,z){return q.t-z.t}),I=0,y=0;y<k.length;y++)L=k[y],O={ease:L.e,duration:(L.t-(y?k[y-1].t:0))/100*c},O[E]=L.v,C.to(w,O,I),I+=O.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||o.duration(c=C.duration())}else o.timeline=0;return f===!0&&!Nf&&(Zr=dr(o),Ft.killTweensOf(w),Zr=0),jn(p,dr(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ut(p._time)&&$i(d)&&kM(dr(o))&&p.data!=="nested")&&(o._tTime=-wt,o.render(Math.max(0,-h)||0)),m&&Qm(dr(o),m),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-wt&&!h?l:n<wt?0:n,u,f,g,_,m,p,w,C;if(!c)VM(this,n,s,a);else if(d!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,C=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,s,a);if(u=Ut(d%_),d===l?(g=this._repeat,u=c):(m=Ut(d/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=Ta(this._tTime,_),u===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Ut(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(eg(this,h?n:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(n,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(an(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;C&&C.render(n<0?n:C._dur*C._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Af(this,n,s,a),an(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Af(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Kr(this,1),!s&&!(h&&!o)&&(d||o||p)&&(an(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,l){Bo||Ji.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Zf(this,c),h=this._ease(c/this._dur),ob(this,n,s,a,o,h,c,l)?this.resetTo(n,s,a,o,1):(_h(this,0),this.parent||Km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Po(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fi),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Zr&&Zr.vars.overwrite!==!0)._first||Po(this),this.parent&&a!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Mn(n):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!s||s==="all")&&OM(o,l))return s==="all"&&(this._pt=0),Po(this);for(d=this._op=this._op||[],s!=="all"&&(ii(s)&&(_={},Fi(s,function(w){return _[w]=1}),s=_),s=lb(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],s==="all"?(d[p]=s,g=u,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&mh(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Po(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return Do(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return Do(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return Ft.killTweensOf(n,s,a)},e})(ko);ln(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fi("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new bi,t=Rf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Jf=function(e,t,i){return e[t]=i},mg=function(e,t,i){return e[t](i)},hb=function(e,t,i,n){return e[t](n.fp,i)},ub=function(e,t,i){return e.setAttribute(t,i)},xh=function(e,t){return zt(e[t])?mg:dh(e[t])&&e.setAttribute?ub:Jf},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$f=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Kf=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},db=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},pb=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?mh(this,t,"_pt"):t.dep||(i=1),t=n;return!i},mb=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},jf=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Oi=(function(){function r(t,i,n,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||gg,this.d=l||this,this.set=c||Jf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=mb,this.m=i,this.mt=s,this.tween=n},r})();Fi(zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return kf[r]=1});on.TweenMax=on.TweenLite=Xt;on.TimelineLite=on.TimelineMax=bi;Ft=new bi({sortChildren:!1,defaults:Uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=Wf;var Ss=[],oh={},gb=[],zm=0,_b=0,Mf=function(e){return(oh[e]||gb).map(function(t){return t()})},Df=function(){var e=Date.now(),t=[];e-zm>2&&(Mf("matchMediaInit"),Ss.forEach(function(i){var n=i.queries,s=i.conditions,a,o,l,c;for(o in n)a=Kn.matchMedia(n[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Mf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),zm=e,Mf("matchMedia"))},_g=(function(){function r(t,i){this.selector=i&&Pf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=_b++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){zt(i)&&(s=n,n=i,i=zt);var a=this,o=function(){var c=Lt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Pf(s)),Lt=a,d=n.apply(a,arguments),zt(d)&&a._r.push(d),Lt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,i===zt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var n=Lt;Lt=null,i(this),Lt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Xt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof bi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Ss.length;a--;)Ss[a].id===this.id&&Ss.splice(a,1)},e.revert=function(i){this.kill(i||{})},r})(),xb=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Qn(i)||(i={matches:i});var a=new _g(0,s||this.scope),o=a.conditions={},l,c,h;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=Kn.matchMedia(i[c]),l&&(Ss.indexOf(a)<0&&Ss.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Df):l.addEventListener("change",Df)));return h&&n(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),fh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return cg(n)})},timeline:function(e){return new bi(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,i,n){ii(e)&&(e=Mn(e)[0]);var s=$r(e||{}).get,a=i?$m:Jm;return i==="native"&&(i=""),e&&(t?a((Zi[t]&&Zi[t].get||s)(e,t,i,n)):function(o,l,c){return a((Zi[o]&&Zi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Mn(e),e.length>1){var n=e.map(function(h){return Ti.quickSetter(h,t,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}e=e[0]||{};var a=Zi[t],o=$r(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;ba._pt=0,d.init(e,i?h+i:h,ba,0,[e]),d.render(1,d),ba._pt&&Kf(1,ba)}:o.set(e,l);return a?c:function(h){return c(e,l,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,s=Ti.to(e,ln((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ys(e.ease,Uo.ease)),Um(Uo,e||{})},config:function(e){return Um(Ki,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Zi[o]&&!on[o]&&Fo(t+" effect requires "+o+" plugin.")}),xf[t]=function(o,l,c){return i(Mn(o),ln(l||{},s),c)},a&&(bi.prototype[t]=function(o,l,c){return this.add(xf[t](o,Qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=ys(t)},parseEase:function(e,t){return arguments.length?ys(e,t):ht},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new bi(e),n,s;for(i.smoothChildTiming=$i(e.smoothChildTiming),Ft.remove(i),i._dp=0,i._time=i._tTime=Ft._time,n=Ft._first;n;)s=n._next,(t||!(!n._dur&&n instanceof Xt&&n.vars.onComplete===n._targets[0]))&&jn(i,n,n._start-n._delay),n=s;return jn(Ft,i,0),i},context:function(e,t){return e?new _g(e,t):Lt},matchMedia:function(e){return new xb(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Df()},addEventListener:function(e,t){var i=oh[e]||(oh[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=oh[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:JM,wrapYoyo:$M,distribute:ng,random:sg,snap:rg,normalize:ZM,getUnit:di,clamp:WM,splitColor:hg,toArray:Mn,selector:Pf,mapRange:og,pipe:qM,unitize:YM,interpolate:KM,shuffle:ig},install:Xm,effects:xf,ticker:Ji,updateRoot:bi.updateRoot,plugins:Zi,globalTimeline:Ft,core:{PropTween:Oi,globals:qm,Tween:Xt,Timeline:bi,Animation:ko,getCache:$r,_removeLinkedListItem:mh,reverting:function(){return fi},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Nf=e}}};Fi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return fh[r]=Xt[r]});Ji.add(bi.updateRoot);ba=fh.to({},{duration:0});var vb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},yb=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=vb(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},bf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(ii(s)&&(l={},Fi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}yb(o,s)}}}},Ti=fh.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)fi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},bf("roundProps",If),bf("modifiers"),bf("snap",rg))||fh;Xt.version=bi.version=Ti.version="3.15.0";Wm=1;Uf()&&Aa();var Sb=ht.Power0,Mb=ht.Power1,bb=ht.Power2,wb=ht.Power3,Tb=ht.Power4,Eb=ht.Linear,Ab=ht.Quad,Cb=ht.Cubic,Rb=ht.Quart,Pb=ht.Quint,Ib=ht.Strong,Lb=ht.Elastic,Db=ht.Back,Nb=ht.SteppedEase,Ub=ht.Bounce,Fb=ht.Sine,Ob=ht.Expo,Bb=ht.Circ;var xg,Qr,Pa,rd,Cs,kb,vg,sd,zb=function(){return typeof window<"u"},_r={},As=180/Math.PI,Ia=Math.PI/180,Ra=Math.atan2,yg=1e8,ad=/([A-Z])/g,Vb=/(left|right|width|margin|padding|x)/i,Gb=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ed=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Wb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Cg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Yb=function(e,t,i){return e.style[t]=i},Zb=function(e,t,i){return e.style.setProperty(t,i)},Jb=function(e,t,i){return e._gsap[t]=i},$b=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Kb=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},jb=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Ot="transform",ji=Ot+"Origin",Qb=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in _r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=gr(n,o)}):this.tfm[e]=a.x?a[e]:gr(n,e),e===ji&&(this.tfm.zOrigin=a.zOrigin);else return er.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Ot)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ji,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Pg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ew=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ad,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sd(),(!s||!s.isStart)&&!i[Ot]&&(Pg(i),n.zOrigin&&i[ji]&&(i[ji]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Ig=function(e,t){var i={target:e,props:[],revert:ew,save:Qb};return e._gsap||Ti.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Lg,td=function(e,t){var i=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return i&&i.style?i:Qr.createElement(e)},cn=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(ad,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,La(t)||t,1)||""},Sg="O,Moz,ms,Ms,Webkit".split(","),La=function(e,t,i){var n=t||Cs,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Sg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Sg[a]:"")+e},id=function(){zb()&&window.document&&(xg=window,Qr=xg.document,Pa=Qr.documentElement,Cs=td("div")||{style:{}},kb=td("div"),Ot=La(Ot),ji=Ot+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lg=!!La("perspective"),sd=Ti.core.reverting,rd=1)},Mg=function(e){var t=e.ownerSVGElement,i=td("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Pa.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Pa.removeChild(i),s},bg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Dg=function(e){var t,i;try{t=e.getBBox()}catch{t=Mg(e),i=1}return t&&(t.width||t.height)||i||(t=Mg(e)),t&&!t.width&&!t.x&&!t.y?{x:+bg(e,["x","cx","x1"])||0,y:+bg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ng=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dg(e))},ts=function(e,t){if(t){var i=e.style,n;t in _r&&t!==ji&&(t=Ot),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(ad,"-$1").toLowerCase())):i.removeAttribute(t)}},es=function(e,t,i,n,s,a){var o=new Oi(e._pt,t,i,0,1,a?Rg:Cg);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},wg={deg:1,rad:1,turn:1},tw={grid:1,flex:1},is=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Cs.style,l=Vb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",g,_,m,p;if(n===a||!s||wg[n]||wg[a])return s;if(a!=="px"&&!u&&(s=r(e,t,i,"px")),p=e.getCTM&&Ng(e),(f||a==="%")&&(_r[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],Vt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(u?a:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qr||!_.appendChild)&&(_=Qr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Ji.time&&!m.uncache)return Vt(s/m.width*d);if(f&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=d+n,g=e[h],w?e.style[t]=w:ts(e,t)}else(f||a==="%")&&!tw[cn(_,"display")]&&(o.position=cn(e,"position")),_===e&&(o.position="static"),_.appendChild(Cs),g=Cs[h],_.removeChild(Cs),o.position="absolute";return l&&f&&(m=$r(_),m.time=Ji.time,m.width=_[h]),Vt(u?g*s/d:g&&s?d/g*s:0)},gr=function(e,t,i,n){var s;return rd||id(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),_r[t]&&t!=="transform"?(s=Ho(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yh(cn(e,ji))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=vh[t]&&vh[t](e,t,i)||cn(e,t)||Gf(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?is(e,t,s,i)+i:s},iw=function(e,t,i,n){if(!i||i==="none"){var s=La(t,e,1),a=s&&cn(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=cn(e,"borderTopColor"))}var o=new Oi(this._pt,e.style,t,0,1,$f),l=0,c=0,h,d,u,f,g,_,m,p,w,C,y,S;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=cn(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=cn(e,t)||n,_?e.style[t]=_:ts(e,t)),h=[i,n],Wf(h),i=h[0],n=h[1],u=i.match(Ms)||[],S=n.match(Ms)||[],S.length){for(;d=Ms.exec(n);)m=d[0],w=n.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=bs(f,m)+y),p=parseFloat(m),C=m.substr((p+"").length),l=Ms.lastIndex-C.length,C||(C=C||Ki.units[t]||y,l===n.length&&(n+=C,o.e+=C)),y!==C&&(f=is(e,t,_,C)||0),o._pt={_next:o._pt,p:w||c===1?w:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Rg:Cg;return Of.test(n)&&(o.e=0),this._pt=o,o},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nw=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Tg[i]||i,t[1]=Tg[n]||n,t.join(" ")},rw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],_r[o]&&(l=1,o=o==="transformOrigin"?ji:Ot),ts(i,o);l&&(ts(i,Ot),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ho(i,1),a.uncache=1,Pg(n)))}},vh={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Oi(e._pt,t,i,0,0,rw);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},Go=[1,0,0,1,0,0],Ug={},Fg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eg=function(e){var t=cn(e,Ot);return Fg(t)?Go:t.substr(7).match(Ff).map(Vt)},od=function(e,t){var i=e._gsap||$r(e),n=e.style,s=Eg(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Go:s):(s===Go&&!e.offsetParent&&e!==Pa&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Pa.appendChild(e)),s=Eg(e),l?n.display=l:ts(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nd=function(e,t,i,n,s,a){var o=e._gsap,l=s||od(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],w=l[5],C=t.split(" "),y=parseFloat(C[0])||0,S=parseFloat(C[1])||0,b,E,v,T;i?l!==Go&&(E=f*m-g*_)&&(v=y*(m/E)+S*(-_/E)+(_*w-m*p)/E,T=y*(-g/E)+S*(f/E)-(f*w-g*p)/E,y=v,S=T):(b=Dg(e),y=b.x+(~C[0].indexOf("%")?y/100*b.width:y),S=b.y+(~(C[1]||C[0]).indexOf("%")?S/100*b.height:S)),n||n!==!1&&o.smooth?(p=y-c,w=S-h,o.xOffset=d+(p*f+w*_)-p,o.yOffset=u+(p*g+w*m)-w):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[ji]="0px 0px",a&&(es(a,o,"xOrigin",c,y),es(a,o,"yOrigin",h,S),es(a,o,"xOffset",d,o.xOffset),es(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Ho=function(e,t){var i=e._gsap||new Xf(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=cn(e,ji)||"0",h,d,u,f,g,_,m,p,w,C,y,S,b,E,v,T,A,D,I,k,L,O,q,z,K,X,R,Q,Se,Me,Ve,ke;return h=d=u=_=m=p=w=C=y=0,f=g=1,i.svg=!!(e.getCTM&&Ng(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),n.scale=n.rotate=n.translate="none"),E=od(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),nd(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,E)),S=i.xOrigin||0,b=i.yOrigin||0,E!==Go&&(D=E[0],I=E[1],k=E[2],L=E[3],h=O=E[4],d=q=E[5],E.length===6?(f=Math.sqrt(D*D+I*I),g=Math.sqrt(L*L+k*k),_=D||I?Ra(I,D)*As:0,w=k||L?Ra(k,L)*As+_:0,w&&(g*=Math.abs(Math.cos(w*Ia))),i.svg&&(h-=S-(S*D+b*k),d-=b-(S*I+b*L))):(ke=E[6],Me=E[7],R=E[8],Q=E[9],Se=E[10],Ve=E[11],h=E[12],d=E[13],u=E[14],v=Ra(ke,Se),m=v*As,v&&(T=Math.cos(-v),A=Math.sin(-v),z=O*T+R*A,K=q*T+Q*A,X=ke*T+Se*A,R=O*-A+R*T,Q=q*-A+Q*T,Se=ke*-A+Se*T,Ve=Me*-A+Ve*T,O=z,q=K,ke=X),v=Ra(-k,Se),p=v*As,v&&(T=Math.cos(-v),A=Math.sin(-v),z=D*T-R*A,K=I*T-Q*A,X=k*T-Se*A,Ve=L*A+Ve*T,D=z,I=K,k=X),v=Ra(I,D),_=v*As,v&&(T=Math.cos(v),A=Math.sin(v),z=D*T+I*A,K=O*T+q*A,I=I*T-D*A,q=q*T-O*A,D=z,O=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Vt(Math.sqrt(D*D+I*I+k*k)),g=Vt(Math.sqrt(q*q+ke*ke)),v=Ra(O,q),w=Math.abs(v)>2e-4?v*As:0,y=Ve?1/(Ve<0?-Ve:Ve):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Fg(cn(e,Ot)),z&&e.setAttribute("transform",z))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(f*=-1,w+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=u+a,i.scaleX=Vt(f),i.scaleY=Vt(g),i.rotation=Vt(_)+o,i.rotationX=Vt(m)+o,i.rotationY=Vt(p)+o,i.skewX=w+o,i.skewY=C+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[ji]=yh(c)),i.xOffset=i.yOffset=0,i.force3D=Ki.force3D,i.renderTransform=i.svg?aw:Lg?Og:sw,i.uncache=0,i},yh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qf=function(e,t,i){var n=di(t);return Vt(parseFloat(t)+parseFloat(is(e,"x",i+"px",n)))+n},sw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Og(e,t)},Ts="0deg",Vo="0px",Es=") ",Og=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,w=i.target,C=i.zOrigin,y="",S=p==="auto"&&e&&e!==1||p===!0;if(C&&(d!==Ts||h!==Ts)){var b=parseFloat(h)*Ia,E=Math.sin(b),v=Math.cos(b),T;b=parseFloat(d)*Ia,T=Math.cos(b),a=Qf(w,a,E*T*-C),o=Qf(w,o,-Math.sin(b)*-C),l=Qf(w,l,v*T*-C+C)}m!==Vo&&(y+="perspective("+m+Es),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(S||a!==Vo||o!==Vo||l!==Vo)&&(y+=l!==Vo||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Es),c!==Ts&&(y+="rotate("+c+Es),h!==Ts&&(y+="rotateY("+h+Es),d!==Ts&&(y+="rotateX("+d+Es),(u!==Ts||f!==Ts)&&(y+="skew("+u+", "+f+Es),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Es),w.style[Ot]=y||"translate(0, 0)"},aw=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,w=i.forceCSS,C=parseFloat(a),y=parseFloat(o),S,b,E,v,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ia,c*=Ia,S=Math.cos(l)*d,b=Math.sin(l)*d,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ia,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,b*=T)),S=Vt(S),b=Vt(b),E=Vt(E),v=Vt(v)):(S=d,v=u,b=E=0),(C&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(C=is(f,"x",a,"px"),y=is(f,"y",o,"px")),(g||_||m||p)&&(C=Vt(C+g-(g*S+_*E)+m),y=Vt(y+_-(g*b+_*v)+p)),(n||s)&&(T=f.getBBox(),C=Vt(C+n/100*T.width),y=Vt(y+s/100*T.height)),T="matrix("+S+","+b+","+E+","+v+","+C+","+y+")",f.setAttribute("transform",T),w&&(f.style[Ot]=T)},ow=function(e,t,i,n,s){var a=360,o=ii(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?As:1),c=l-n,h=n+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*yg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*yg)%a-~~(c/a)*a)),e._pt=u=new Oi(e._pt,t,i,n,c,Hb),u.e=h,u.u="deg",e._props.push(i),u},Ag=function(e,t){for(var i in t)e[i]=t[i];return e},lw=function(e,t,i){var n=Ag({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,d,u,f,g;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Ot]=t,o=Ho(i,1),ts(i,Ot),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ot],a[Ot]=t,o=Ho(i,1),a[Ot]=c);for(l in _r)c=n[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=di(c),g=di(h),d=f!==g?is(i,l,c,g):parseFloat(c),u=parseFloat(h),e._pt=new Oi(e._pt,o,l,d,u-d,ed),e._pt.u=g||0,e._props.push(l));Ag(o,n)};Fi("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});vh[e>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return gr(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var ld={name:"css",register:id,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,l=i.vars.startAt,c,h,d,u,f,g,_,m,p,w,C,y,S,b,E,v,T;rd||id(),this.styles=this.styles||Ig(e),v=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Zi[_]&&Yf(_,t,i,n,e,s)))){if(f=typeof h,g=vh[_],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ca(h)),g)g(this,e,_,h,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",pr.lastIndex=0,pr.test(c)||(m=di(c),p=di(h),p?m!==p&&(c=is(e,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,s):l[_],ii(c)&&~c.indexOf("random(")&&(c=Ca(c)),di(c+"")||c==="auto"||(c+=Ki.units[_]||di(gr(e,_))||""),(c+"").charAt(1)==="="&&(c=gr(e,_))):c=gr(e,_),u=parseFloat(c),w=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),_ in er&&(_==="autoAlpha"&&(u===1&&gr(e,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,o.visibility),es(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=er[_],~_.indexOf(",")&&(_=_.split(",")[0]))),C=_ in _r,C){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=cn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=cn(e,"perspective"),A?e.style.perspective=A:ts(e,"perspective")}d=parseFloat(h)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ho(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Oi(this._pt,o,Ot,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Oi(this._pt,S,"scaleY",S.scaleY,(w?bs(S.scaleY,w+d):d)-S.scaleY||0,ed),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ji,0,o[ji]),h=nw(h),S.svg?nd(e,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&es(this,S,"zOrigin",S.zOrigin,p),es(this,o,_,yh(c),yh(h)));continue}else if(_==="svgOrigin"){nd(e,h,1,b,0,this);continue}else if(_ in Ug){ow(this,S,_,u,w?bs(u,w+h):h);continue}else if(_==="smoothOrigin"){es(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){lw(this,h,e);continue}}else _ in o||(_=La(_)||_);if(C||(d||d===0)&&(u||u===0)&&!Gb.test(h)&&_ in o)m=(c+"").substr((u+"").length),d||(d=0),p=di(h)||(_ in Ki.units?Ki.units[_]:m),m!==p&&(u=is(e,_,c,p)),this._pt=new Oi(this._pt,C?S:o,_,u,(w?bs(u,w+d):d)-u,!C&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?qb:ed),this._pt.u=p||0,C&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Xb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Wb);else if(_ in o)iw.call(this,e,_,c,w?w+h:h);else if(_ in e)this.add(e,_,c||e[_],w?w+h:h,n,s);else if(_!=="parseTransform"){ph(_,h);continue}C||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}E&&jf(this)},render:function(e,t){if(t.tween._time||!sd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:gr,aliases:er,getSetter:function(e,t,i){var n=er[t];return n&&n.indexOf(",")<0&&(t=n),t in _r&&t!==ji&&(e._gsap.x||gr(e,"x"))?i&&vg===i?t==="scale"?$b:Jb:(vg=i||{})&&(t==="scale"?Kb:jb):e.style&&!dh(e.style[t])?Yb:~t.indexOf("-")?Zb:xh(e,t)},core:{_removeProperty:ts,_getMatrix:od}};Ti.utils.checkPrefix=La;Ti.core.getStyleSaver=Ig;(function(r,e,t,i){var n=Fi(r+","+e+","+t,function(s){_r[s]=1});Fi(e,function(s){Ki.units[s]="deg",Ug[s]=1}),er[n[13]]=r+","+e,Fi(i,function(s){var a=s.split(":");er[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ki.units[r]="px"});Ti.registerPlugin(ld);var xr=Ti.registerPlugin(ld)||Ti,CA=xr.core.Tween;function Bg(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function cw(r,e,t){return e&&Bg(r.prototype,e),t&&Bg(r,t),r}var pi,bh,hw,hn,ns,rs,Na,zg,Rs,Ua,Vg,vr,Nn,Gg,Hg=function(){return pi||typeof window<"u"&&(pi=window.gsap)&&pi.registerPlugin&&pi},Wg=1,Da=[],Qe=[],Un=[],Xo=Date.now,cd=function(e,t){return t},uw=function(){var e=Ua.core,t=e.bridge||{},i=e._scrollers,n=e._proxies;i.push.apply(i,Qe),n.push.apply(n,Un),Qe=i,Un=n,cd=function(a,o){return t[a](o)}},Sr=function(e,t){return~Un.indexOf(e)&&Un[Un.indexOf(e)+1][t]},qo=function(e){return!!~Vg.indexOf(e)},ki=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:n!==!1,capture:!!s})},Bi=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Sh="scrollLeft",Mh="scrollTop",hd=function(){return vr&&vr.isPressed||Qe.cache++},wh=function(e,t){var i=function n(s){if(s||s===0){Wg&&(hn.history.scrollRestoration="manual");var a=vr&&vr.isPressed;s=n.v=Math.round(s)||(vr&&vr.iOS?1:0),e(s),n.cacheID=Qe.cache,a&&cd("ss",s)}else(t||Qe.cache!==n.cacheID||cd("ref"))&&(n.cacheID=Qe.cache,n.v=e());return n.v+n.offset};return i.offset=0,e&&i},Ei={s:Sh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wh(function(r){return arguments.length?hn.scrollTo(r,$t.sc()):hn.pageXOffset||ns[Sh]||rs[Sh]||Na[Sh]||0})},$t={s:Mh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ei,sc:wh(function(r){return arguments.length?hn.scrollTo(Ei.sc(),r):hn.pageYOffset||ns[Mh]||rs[Mh]||Na[Mh]||0})},zi=function(e,t){return(t&&t._ctx&&t._ctx.selector||pi.utils.toArray)(e)[0]||(typeof e=="string"&&pi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},fw=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},yr=function(e,t){var i=t.s,n=t.sc;qo(e)&&(e=ns.scrollingElement||rs);var s=Qe.indexOf(e),a=n===$t.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+a]||ki(e,"scroll",hd);var o=Qe[s+a],l=o||(Qe[s+a]=wh(Sr(e,i),!0)||(qo(e)?n:wh(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=pi.getProperty(e,"scrollBehavior")==="smooth"),l},Th=function(e,t,i){var n=e,s=e,a=Xo(),o=a,l=t||50,c=Math.max(500,l*3),h=function(g,_){var m=Xo();_||m-a>l?(s=n,n=g,o=a,a=m):i?n+=g:n=s+(g-s)/(m-o)*(a-o)},d=function(){s=n=i?0:n,o=a=0},u=function(g){var _=o,m=s,p=Xo();return(g||g===0)&&g!==n&&h(g),a===o||p-o>c?0:(n+(i?m:-m))/((i?p:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Wo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Xg=function(){Ua=pi.core.globals().ScrollTrigger,Ua&&Ua.core&&uw()},qg=function(e){return pi=e||Hg(),!bh&&pi&&typeof document<"u"&&document.body&&(hn=window,ns=document,rs=ns.documentElement,Na=ns.body,Vg=[hn,ns,rs,Na],hw=pi.utils.clamp,Gg=pi.core.context||function(){},Rs="onpointerenter"in Na?"pointer":"mouse",zg=Gt.isTouch=hn.matchMedia&&hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Nn=Gt.eventTypes=("ontouchstart"in rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wg=0},500),bh=1),Ua||Xg(),bh};Ei.op=$t;Qe.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(i){bh||qg(pi)||console.warn("Please gsap.registerPlugin(Observer)"),Ua||Xg();var n=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,w=i.onDrag,C=i.onPress,y=i.onRelease,S=i.onRight,b=i.onLeft,E=i.onUp,v=i.onDown,T=i.onChangeX,A=i.onChangeY,D=i.onChange,I=i.onToggleX,k=i.onToggleY,L=i.onHover,O=i.onHoverEnd,q=i.onMove,z=i.ignoreCheck,K=i.isNormalizer,X=i.onGestureStart,R=i.onGestureEnd,Q=i.onWheel,Se=i.onEnable,Me=i.onDisable,Ve=i.onClick,ke=i.scrollSpeed,He=i.capture,Z=i.allowClicks,ee=i.lockAxis,_e=i.onLockAxis;this.target=o=zi(o)||rs,this.vars=i,f&&(f=pi.utils.toArray(f)),n=n||1e-9,s=s||0,g=g||1,ke=ke||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(hn.getComputedStyle(Na).lineHeight)||22);var Oe,me,Ue,Be,Pe,Xe,$e,V=this,tt=0,vt=0,Dt=i.passive||!h&&i.passive!==!1,qe=yr(o,Ei),ft=yr(o,$t),F=qe(),It=ft(),We=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Nn[0]==="pointerdown",P=qo(o),x=o.ownerDocument||ns,B=[0,0,0],H=[0,0,0],$=0,ce=function(){return $=Xo()},ae=function(re,De){return(V.event=re)&&f&&fw(re.target,f)||De&&We&&re.pointerType!=="touch"||z&&z(re,De)},j=function(){V._vx.reset(),V._vy.reset(),me.pause(),d&&d(V)},ie=function(){var re=V.deltaX=kg(B),De=V.deltaY=kg(H),se=Math.abs(re)>=n,Ne=Math.abs(De)>=n;D&&(se||Ne)&&D(V,re,De,B,H),se&&(S&&V.deltaX>0&&S(V),b&&V.deltaX<0&&b(V),T&&T(V),I&&V.deltaX<0!=tt<0&&I(V),tt=V.deltaX,B[0]=B[1]=B[2]=0),Ne&&(v&&V.deltaY>0&&v(V),E&&V.deltaY<0&&E(V),A&&A(V),k&&V.deltaY<0!=vt<0&&k(V),vt=V.deltaY,H[0]=H[1]=H[2]=0),(Be||Ue)&&(q&&q(V),Ue&&(m&&Ue===1&&m(V),w&&w(V),Ue=0),Be=!1),Xe&&!(Xe=!1)&&_e&&_e(V),Pe&&(Q(V),Pe=!1),Oe=0},fe=function(re,De,se){B[se]+=re,H[se]+=De,V._vx.update(re),V._vy.update(De),c?Oe||(Oe=requestAnimationFrame(ie)):ie()},Ee=function(re,De){ee&&!$e&&(V.axis=$e=Math.abs(re)>Math.abs(De)?"x":"y",Xe=!0),$e!=="y"&&(B[2]+=re,V._vx.update(re,!0)),$e!=="x"&&(H[2]+=De,V._vy.update(De,!0)),c?Oe||(Oe=requestAnimationFrame(ie)):ie()},de=function(re){if(!ae(re,1)){re=Wo(re,h);var De=re.clientX,se=re.clientY,Ne=De-V.x,Ae=se-V.y,Ye=V.isDragging;V.x=De,V.y=se,(Ye||(Ne||Ae)&&(Math.abs(V.startX-De)>=s||Math.abs(V.startY-se)>=s))&&(Ue||(Ue=Ye?2:1),Ye||(V.isDragging=!0),Ee(Ne,Ae))}},ue=V.onPress=function(oe){ae(oe,1)||oe&&oe.button||(V.axis=$e=null,me.pause(),V.isPressed=!0,oe=Wo(oe),tt=vt=0,V.startX=V.x=oe.clientX,V.startY=V.y=oe.clientY,V._vx.reset(),V._vy.reset(),ki(K?o:x,Nn[1],de,Dt,!0),V.deltaX=V.deltaY=0,C&&C(V))},le=V.onRelease=function(oe){if(!ae(oe,1)){Bi(K?o:x,Nn[1],de,!0);var re=!isNaN(V.y-V.startY),De=V.isDragging,se=De&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ne=Wo(oe);!se&&re&&(V._vx.reset(),V._vy.reset(),h&&Z&&pi.delayedCall(.08,function(){if(Xo()-$>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(x.createEvent){var Ae=x.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,hn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ae)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&De&&!K&&me.restart(!0),Ue&&ie(),p&&De&&p(V),y&&y(V,se)}},Ie=function(re){return re.touches&&re.touches.length>1&&(V.isGesturing=!0)&&X(re,V.isDragging)},Fe=function(){return(V.isGesturing=!1)||R(V)},N=function(re){if(!ae(re)){var De=qe(),se=ft();fe((De-F)*ke,(se-It)*ke,1),F=De,It=se,d&&me.restart(!0)}},he=function(re){if(!ae(re)){re=Wo(re,h),Q&&(Pe=!0);var De=(re.deltaMode===1?l:re.deltaMode===2?hn.innerHeight:1)*g;fe(re.deltaX*De,re.deltaY*De,0),d&&!K&&me.restart(!0)}},te=function(re){if(!ae(re)){var De=re.clientX,se=re.clientY,Ne=De-V.x,Ae=se-V.y;V.x=De,V.y=se,Be=!0,d&&me.restart(!0),(Ne||Ae)&&Ee(Ne,Ae)}},pe=function(re){V.event=re,L(V)},xe=function(re){V.event=re,O(V)},ne=function(re){return ae(re)||Wo(re,h)&&Ve(V)};me=V._dc=pi.delayedCall(u||.25,j).pause(),V.deltaX=V.deltaY=0,V._vx=Th(0,50,!0),V._vy=Th(0,50,!0),V.scrollX=qe,V.scrollY=ft,V.isDragging=V.isGesturing=V.isPressed=!1,Gg(this),V.enable=function(oe){return V.isEnabled||(ki(P?x:o,"scroll",hd),a.indexOf("scroll")>=0&&ki(P?x:o,"scroll",N,Dt,He),a.indexOf("wheel")>=0&&ki(o,"wheel",he,Dt,He),(a.indexOf("touch")>=0&&zg||a.indexOf("pointer")>=0)&&(ki(o,Nn[0],ue,Dt,He),ki(x,Nn[2],le),ki(x,Nn[3],le),Z&&ki(o,"click",ce,!0,!0),Ve&&ki(o,"click",ne),X&&ki(x,"gesturestart",Ie),R&&ki(x,"gestureend",Fe),L&&ki(o,Rs+"enter",pe),O&&ki(o,Rs+"leave",xe),q&&ki(o,Rs+"move",te)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Be=Ue=!1,V._vx.reset(),V._vy.reset(),F=qe(),It=ft(),oe&&oe.type&&ue(oe),Se&&Se(V)),V},V.disable=function(){V.isEnabled&&(Da.filter(function(oe){return oe!==V&&qo(oe.target)}).length||Bi(P?x:o,"scroll",hd),V.isPressed&&(V._vx.reset(),V._vy.reset(),Bi(K?o:x,Nn[1],de,!0)),Bi(P?x:o,"scroll",N,He),Bi(o,"wheel",he,He),Bi(o,Nn[0],ue,He),Bi(x,Nn[2],le),Bi(x,Nn[3],le),Bi(o,"click",ce,!0),Bi(o,"click",ne),Bi(x,"gesturestart",Ie),Bi(x,"gestureend",Fe),Bi(o,Rs+"enter",pe),Bi(o,Rs+"leave",xe),Bi(o,Rs+"move",te),V.isEnabled=V.isPressed=V.isDragging=!1,Me&&Me(V))},V.kill=V.revert=function(){V.disable();var oe=Da.indexOf(V);oe>=0&&Da.splice(oe,1),vr===V&&(vr=0)},Da.push(V),K&&qo(o)&&(vr=V),V.enable(_)},cw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=qg;Gt.getAll=function(){return Da.slice()};Gt.getById=function(r){return Da.filter(function(e){return e.vars.id===r})[0]};Hg()&&pi.registerPlugin(Gt);var Te,ka,nt,_t,dn,mt,wd,Vh,al,Qo,Zo,Eh,Ai,Wh,_d,Gi,Yg,Zg,za,h_,ud,u_,Vi,xd,f_,d_,ss,vd,Td,Va,Ed,el,yd,fd,Ah=1,Ci=Date.now,dd=Ci(),Tn=0,Jo=0,Jg=function(e,t,i){var n=fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=n,n?e.substr(6,e.length-7):e},$g=function(e,t){return t&&(!fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dw=function r(){return Jo&&requestAnimationFrame(r)},Kg=function(){return Wh=1},jg=function(){return Wh=0},tr=function(e){return e},$o=function(e){return Math.round(e*1e5)/1e5||0},p_=function(){return typeof window<"u"},m_=function(){return Te||p_()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Us=function(e){return!!~wd.indexOf(e)},g_=function(e){return(e==="Height"?Ed:nt["inner"+e])||dn["client"+e]||mt["client"+e]},__=function(e){return Sr(e,"getBoundingClientRect")||(Us(e)?function(){return zh.width=nt.innerWidth,zh.height=Ed,zh}:function(){return Mr(e)})},pw=function(e,t,i){var n=i.d,s=i.d2,a=i.a;return(a=Sr(e,"getBoundingClientRect"))?function(){return a()[n]}:function(){return(t?g_(s):e["client"+s])||0}},mw=function(e,t){return!t||~Un.indexOf(e)?__(e):function(){return zh}},ir=function(e,t){var i=t.s,n=t.d2,s=t.d,a=t.a;return Math.max(0,(i="scroll"+n)&&(a=Sr(e,i))?a()-__(e)()[s]:Us(e)?(dn[i]||mt[i])-g_(n):e[i]-e["offset"+n])},Ch=function(e,t){for(var i=0;i<za.length;i+=3)(!t||~t.indexOf(za[i+1]))&&e(za[i],za[i+1],za[i+2])},fn=function(e){return typeof e=="string"},Ri=function(e){return typeof e=="function"},Ko=function(e){return typeof e=="number"},Ps=function(e){return typeof e=="object"},Yo=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Fa=function(e,t,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);n&&n.totalTime&&(e.callbackAnimation=n)}},Oa=Math.abs,x_="left",v_="top",Ad="right",Cd="bottom",Ls="width",Ds="height",tl="Right",il="Left",nl="Top",rl="Bottom",Kt="padding",bn="margin",Ha="Width",Rd="Height",ni="px",wn=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},gw=function(e){var t=wn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Qg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Mr=function(e,t){var i=t&&wn(e)[_d]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Gh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},y_=function(e){var t=[],i=e.labels,n=e.duration(),s;for(s in i)t.push(i[s]/n);return t},_w=function(e){return function(t){return Te.utils.snap(y_(e),t)}},Pd=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(n,s){return n-s});return i?function(n,s,a){a===void 0&&(a=.001);var o;if(!s)return t(n);if(s>0){for(n-=a,o=0;o<i.length;o++)if(i[o]>=n)return i[o];return i[o-1]}else for(o=i.length,n+=a;o--;)if(i[o]<=n)return i[o];return i[0]}:function(n,s,a){a===void 0&&(a=.001);var o=t(n);return!s||Math.abs(o-n)<a||o-n<0==s<0?o:t(s<0?n-e:n+e)}},xw=function(e){return function(t,i){return Pd(y_(e))(t,i.direction)}},Rh=function(e,t,i,n){return i.split(",").forEach(function(s){return e(t,s,n)})},ci=function(e,t,i,n,s){return e.addEventListener(t,i,{passive:!n,capture:!!s})},li=function(e,t,i,n){return e.removeEventListener(t,i,!!n)},Ph=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},e_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ih={toggleActions:"play",anticipatePin:0},Hh={top:0,left:0,center:.5,bottom:1,right:1},Fh=function(e,t){if(fn(e)){var i=e.indexOf("="),n=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(n*=t/100),e=e.substr(0,i-1)),e=n+(e in Hh?Hh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Lh=function(e,t,i,n,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=_t.createElement("div"),_=Us(i)||Sr(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:i.tagName==="IFRAME"?i.contentDocument.body:i,w=e.indexOf("start")!==-1,C=w?c:h,y="border-color:"+C+";font-size:"+d+";color:"+C+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(n===$t?Ad:Cd)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+n.op.d2],Oh(g,0,n,w),g},Oh=function(e,t,i,n){var s={display:"block"},a=i[n?"os2":"p2"],o=i[n?"p2":"os2"];e._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+a+Ha]=1,s["border"+o+Ha]=0,s[i.p]=t+"px",Te.set(e,s)},et=[],Sd={},ol,t_=function(){return Ci()-Tn>34&&(ol||(ol=requestAnimationFrame(br)))},Ba=function(){(!Vi||!Vi.isPressed||Vi.startX>mt.clientWidth)&&(Qe.cache++,Vi?ol||(ol=requestAnimationFrame(br)):br(),Tn||Os("scrollStart"),Tn=Ci())},pd=function(){d_=nt.innerWidth,f_=nt.innerHeight},jo=function(e){Qe.cache++,(e===!0||!Ai&&!u_&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!xd||d_!==nt.innerWidth||Math.abs(nt.innerHeight-f_)>nt.innerHeight*.25))&&Vh.restart(!0)},Fs={},vw=[],S_=function r(){return li(Je,"scrollEnd",r)||Is(!0)},Os=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||vw},un=[],M_=function(e){for(var t=0;t<un.length;t+=5)(!e||un[t+4]&&un[t+4].query===e)&&(un[t].style.cssText=un[t+1],un[t].getBBox&&un[t].setAttribute("transform",un[t+2]||""),un[t+3].uncache=1)},b_=function(){return Qe.forEach(function(e){return Ri(e)&&++e.cacheID&&(e.rec=e())})},Id=function(e,t){var i;for(Gi=0;Gi<et.length;Gi++)i=et[Gi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));el=!0,t&&M_(t),t||Os("revert")},w_=function(e,t){Qe.cache++,(t||!Hi)&&Qe.forEach(function(i){return Ri(i)&&i.cacheID++&&(i.rec=0)}),fn(e)&&(nt.history.scrollRestoration=Td=e)},Hi,Ns=0,i_,yw=function(){if(i_!==Ns){var e=i_=Ns;requestAnimationFrame(function(){return e===Ns&&Is(!0)})}},T_=function(){mt.appendChild(Va),Ed=!Vi&&Va.offsetHeight||nt.innerHeight,mt.removeChild(Va)},n_=function(e){return al(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Is=function(e,t){if(dn=_t.documentElement,mt=_t.body,wd=[nt,_t,dn,mt],Tn&&!e&&!el){ci(Je,"scrollEnd",S_);return}T_(),Hi=Je.isRefreshing=!0,el||b_();var i=Os("refreshInit");h_&&Je.sort(),t||Id(),Qe.forEach(function(n){Ri(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),et.slice(0).forEach(function(n){return n.refresh()}),el=!1,et.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-a),n.refresh()}}),yd=1,n_(!0),et.forEach(function(n){var s=ir(n.scroller,n._dir),a=n.vars.end==="max"||n._endClamp&&n.end>s,o=n._startClamp&&n.start>=s;(a||o)&&n.setPositions(o?s-1:n.start,a?Math.max(o?s:n.start+1,s):n.end,!0)}),n_(!1),yd=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),Qe.forEach(function(n){Ri(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),w_(Td,1),Vh.pause(),Ns++,Hi=2,br(2),et.forEach(function(n){return Ri(n.vars.onRefresh)&&n.vars.onRefresh(n)}),Hi=Je.isRefreshing=!1,Os("refresh")},Md=0,Bh=1,sl,br=function(e){if(e===2||!Hi&&!el){Je.isUpdating=!0,sl&&sl.update(0);var t=et.length,i=Ci(),n=i-dd>=50,s=t&&et[0].scroll();if(Bh=Md>s?-1:1,Hi||(Md=s),n&&(Tn&&!Wh&&i-Tn>200&&(Tn=0,Os("scrollEnd")),Zo=dd,dd=i),Bh<0){for(Gi=t;Gi-- >0;)et[Gi]&&et[Gi].update(0,n);Bh=1}else for(Gi=0;Gi<t;Gi++)et[Gi]&&et[Gi].update(0,n);Je.isUpdating=!1}ol=0},bd=[x_,v_,Cd,Ad,bn+rl,bn+tl,bn+nl,bn+il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],kh=bd.concat([Ls,Ds,"boxSizing","max"+Ha,"max"+Rd,"position",bn,Kt,Kt+nl,Kt+tl,Kt+rl,Kt+il]),Sw=function(e,t,i){Ga(i);var n=e._gsap;if(n.spacerIsNative)Ga(n.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},md=function(e,t,i,n){if(!e._gsap.swappedIn){for(var s=bd.length,a=t.style,o=e.style,l;s--;)l=bd[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[Cd]=o[Ad]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ls]=Gh(e,Ei)+ni,a[Ds]=Gh(e,$t)+ni,a[Kt]=o[bn]=o[v_]=o[x_]="0",Ga(n),o[Ls]=o["max"+Ha]=i[Ls],o[Ds]=o["max"+Rd]=i[Ds],o[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Mw=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,i=e.length,n=0,s,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;n<i;n+=2)a=e[n+1],s=e[n],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Mw,"-$1").toLowerCase())}},Dh=function(e){for(var t=kh.length,i=e.style,n=[],s=0;s<t;s++)n.push(kh[s],i[kh[s]]);return n.t=e,n},bw=function(e,t,i){for(var n=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],n.push(o,o in t?t[o]:e[a+1]);return n.t=e.t,n},zh={left:0,top:0},r_=function(e,t,i,n,s,a,o,l,c,h,d,u,f,g){Ri(e)&&(e=e(l)),fn(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Fh("0"+e.substr(3),i):0));var _=f?f.time():0,m,p,w;if(f&&f.seek(0),isNaN(e)||(e=+e),Ko(e))f&&(e=Te.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),o&&Oh(o,i,n,!0);else{Ri(t)&&(t=t(l));var C=(e||"0").split(" "),y,S,b,E;w=zi(t,l)||mt,y=Mr(w)||{},(!y||!y.left&&!y.top)&&wn(w).display==="none"&&(E=w.style.display,w.style.display="block",y=Mr(w),E?w.style.display=E:w.style.removeProperty("display")),S=Fh(C[0],y[n.d]),b=Fh(C[1]||"0",i),e=y[n.p]-c[n.p]-h+S+s-b,o&&Oh(o,b,n,i-b<20||o._isStart&&b>20),i-=i-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var v=e+i,T=a._isStart;m="scroll"+n.d2,Oh(a,v,n,T&&v>20||!T&&(d?Math.max(mt[m],dn[m]):a.parentNode[m])<=v+1),d&&(c=Mr(o),d&&(a.style[n.op.p]=c[n.op.p]-n.op.m-a._offset+ni))}return f&&w&&(m=Mr(w),f.seek(u),p=Mr(w),f._caScrollDist=m[n.p]-p[n.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)},ww=/(webkit|moz|length|cssText|inset)/i,s_=function(e,t,i,n){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=wn(e);for(a in o)!+a&&!ww.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=n}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},E_=function(e,t,i){var n=t,s=n;return function(a){var o=Math.round(e());return o!==n&&o!==s&&Math.abs(o-n)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=n,n=Math.round(a),n}},Nh=function(e,t,i){var n={};n[t.p]="+="+i,Te.set(e,n)},a_=function(e,t){var i=yr(e,t),n="_scroll"+t.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,g={};c=c||i();var _=E_(i,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[n]=o,l.inherit=!1,l.modifiers=g,g[n]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){Qe.cache++,a.tween&&br()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Te.to(e,l),u};return e[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ci(e,"wheel",i.wheelHandler),Je.isTouch&&ci(e,"touchmove",i.wheelHandler),s},Je=(function(){function r(t,i){ka||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vd(this),this.init(t,i)}var e=r.prototype;return e.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jo){this.update=this.refresh=this.kill=tr;return}i=Qg(fn(i)||Ko(i)||i.nodeType?{trigger:i}:i,Ih);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,w=s.onSnapComplete,C=s.once,y=s.snap,S=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ei:$t,D=!d&&d!==0,I=zi(i.scroller||nt),k=Te.core.getCache(I),L=Us(I),O=("pinType"in i?i.pinType:Sr(I,"pinType")||L&&"fixed")==="fixed",q=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],z=D&&i.toggleActions.split(" "),K="markers"in i?i.markers:Ih.markers,X=L?0:parseFloat(wn(I)["border"+A.p2+Ha])||0,R=this,Q=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Se=pw(I,L,A),Me=mw(I,L),Ve=0,ke=0,He=0,Z=yr(I,A),ee,_e,Oe,me,Ue,Be,Pe,Xe,$e,V,tt,vt,Dt,qe,ft,F,It,We,P,x,B,H,$,ce,ae,j,ie,fe,Ee,de,ue,le,Ie,Fe,N,he,te,pe,xe;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=I,R.scroll=E?E.time.bind(E):Z,me=Z(),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(h_=1,i.refreshPriority===-9999&&(sl=R)),k.tweenScroll=k.tweenScroll||{top:a_(I,$t),left:a_(I,Ei)},R.tweenTo=ee=k.tweenScroll[A.p],R.scrubDuration=function(se){Ie=Ko(se)&&se,Ie?le?le.duration(se):le=Te.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return p&&p(R)}}):(le&&le.progress(1).kill(),le=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(d),de=0,l||(l=n.vars.id)),y&&((!Ps(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in mt.style&&Te.set(L?[mt,dn]:I,{scrollBehavior:"auto"}),Qe.forEach(function(se){return Ri(se)&&se.target===(L?_t.scrollingElement||dn:I)&&(se.smooth=!1)}),Oe=Ri(y.snapTo)?y.snapTo:y.snapTo==="labels"?_w(n):y.snapTo==="labelsDirectional"?xw(n):y.directional!==!1?function(se,Ne){return Pd(y.snapTo)(se,Ci()-ke<500?0:Ne.direction)}:Te.utils.snap(y.snapTo),Fe=y.duration||{min:.1,max:2},Fe=Ps(Fe)?Qo(Fe.min,Fe.max):Qo(Fe,Fe),N=Te.delayedCall(y.delay||Ie/2||.1,function(){var se=Z(),Ne=Ci()-ke<500,Ae=ee.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ae&&!Wh&&Ve!==se){var Ye=(se-Be)/qe,qt=n&&!D?n.totalProgress():Ye,it=Ne?0:(qt-ue)/(Ci()-Zo)*1e3||0,At=Te.utils.clamp(-Ye,1-Ye,Oa(it/2)*it/.185),ri=Ye+(y.inertia===!1?0:At),Ct,St,lt=y,Pi=lt.onStart,Tt=lt.onInterrupt,gi=lt.onComplete;if(Ct=Oe(ri,R),Ko(Ct)||(Ct=ri),St=Math.max(0,Math.round(Be+Ct*qe)),se<=Pe&&se>=Be&&St!==se){if(Ae&&!Ae._initted&&Ae.data<=Oa(St-se))return;y.inertia===!1&&(At=Ct-Ye),ee(St,{duration:Fe(Oa(Math.max(Oa(ri-qt),Oa(Ct-qt))*.185/it/.05||0)),ease:y.ease||"power3",data:Oa(St-se),onInterrupt:function(){return N.restart(!0)&&Tt&&Fa(R,Tt)},onComplete:function(){R.update(),Ve=Z(),n&&!D&&(le?le.resetTo("totalProgress",Ct,n._tTime/n._tDur):n.progress(Ct)),de=ue=n&&!D?n.totalProgress():R.progress,w&&w(R),gi&&Fa(R,gi)}},se,At*qe,St-se-At*qe),Pi&&Fa(R,Pi,ee.tween)}}else R.isActive&&Ve!==se&&N.restart(!0)}).pause()),l&&(Sd[l]=R),u=R.trigger=zi(u||f!==!0&&f),xe=u&&u._gsap&&u._gsap.stRevert,xe&&(xe=xe(R)),f=f===!0?u:zi(f),fn(o)&&(o={targets:u,className:o}),f&&(g===!1||g===bn||(g=!g&&f.parentNode&&f.parentNode.style&&wn(f.parentNode).display==="flex"?!1:Kt),R.pin=f,_e=Te.core.getCache(f),_e.spacer?ft=_e.pinState:(b&&(b=zi(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),_e.spacerIsNative=!!b,b&&(_e.spacerState=Dh(b))),_e.spacer=We=b||_t.createElement("div"),We.classList.add("pin-spacer"),l&&We.classList.add("pin-spacer-"+l),_e.pinState=ft=Dh(f)),i.force3D!==!1&&Te.set(f,{force3D:!0}),R.spacer=We=_e.spacer,Ee=wn(f),ce=Ee[g+A.os2],x=Te.getProperty(f),B=Te.quickSetter(f,A.a,ni),md(f,We,Ee),It=Dh(f)),K){vt=Ps(K)?Qg(K,e_):e_,V=Lh("scroller-start",l,I,A,vt,0),tt=Lh("scroller-end",l,I,A,vt,0,V),P=V["offset"+A.op.d2];var ne=zi(Sr(I,"content")||I);Xe=this.markerStart=Lh("start",l,ne,A,vt,P,0,E),$e=this.markerEnd=Lh("end",l,ne,A,vt,P,0,E),E&&(pe=Te.quickSetter([Xe,$e],A.a,ni)),!O&&!(Un.length&&Sr(I,"fixedMarkers")===!0)&&(gw(L?mt:I),Te.set([V,tt],{force3D:!0}),j=Te.quickSetter(V,A.a,ni),fe=Te.quickSetter(tt,A.a,ni))}if(E){var oe=E.vars.onUpdate,re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),oe&&oe.apply(E,re||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(se,Ne){if(!Ne)return R.kill(!0);var Ae=se!==!1||!R.enabled,Ye=Ai;Ae!==R.isReverted&&(Ae&&(he=Math.max(Z(),R.scroll.rec||0),He=R.progress,te=n&&n.progress()),Xe&&[Xe,$e,V,tt].forEach(function(qt){return qt.style.display=Ae?"none":"block"}),Ae&&(Ai=R,R.update(Ae)),f&&(!S||!R.isActive)&&(Ae?Sw(f,We,ft):md(f,We,wn(f),ae)),Ae||R.update(Ae),Ai=Ye,R.isReverted=Ae)},R.refresh=function(se,Ne,Ae,Ye){if(!((Ai||!R.enabled)&&!Ne)){if(f&&se&&Tn){ci(r,"scrollEnd",S_);return}!Hi&&Q&&Q(R),Ai=R,ee.tween&&!Ae&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(ge){return ge.vars.immediateRender&&ge.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var qt=Se(),it=Me(),At=E?E.duration():ir(I,A),ri=qe<=.01||!qe,Ct=0,St=Ye||0,lt=Ps(Ae)?Ae.end:i.end,Pi=i.endTrigger||u,Tt=Ps(Ae)?Ae.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),gi=R.pinnedContainer=i.pinnedContainer&&zi(i.pinnedContainer,R),Ii=u&&Math.max(0,et.indexOf(R))||0,Yt=Ii,Bt,jt,kn,ks,si,Ht,pn,zs,M,U,Y,G,W;for(K&&Ps(Ae)&&(G=Te.getProperty(V,A.p),W=Te.getProperty(tt,A.p));Yt-- >0;)Ht=et[Yt],Ht.end||Ht.refresh(0,1)||(Ai=R),pn=Ht.pin,pn&&(pn===u||pn===f||pn===gi)&&!Ht.isReverted&&(U||(U=[]),U.unshift(Ht),Ht.revert(!0,!0)),Ht!==et[Yt]&&(Ii--,Yt--);for(Ri(Tt)&&(Tt=Tt(R)),Tt=Jg(Tt,"start",R),Be=r_(Tt,u,qt,A,Z(),Xe,V,R,it,X,O,At,E,R._startClamp&&"_startClamp")||(f?-.001:0),Ri(lt)&&(lt=lt(R)),fn(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(fn(Tt)?Tt.split(" ")[0]:"")+lt:(Ct=Fh(lt.substr(2),qt),lt=fn(Tt)?Tt:(E?Te.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Be):Be)+Ct,Pi=u)),lt=Jg(lt,"end",R),Pe=Math.max(Be,r_(lt||(Pi?"100% 0":At),Pi,qt,A,Z()+Ct,$e,tt,R,it,X,O,At,E,R._endClamp&&"_endClamp"))||-.001,Ct=0,Yt=Ii;Yt--;)Ht=et[Yt]||{},pn=Ht.pin,pn&&Ht.start-Ht._pinPush<=Be&&!E&&Ht.end>0&&(Bt=Ht.end-(R._startClamp?Math.max(0,Ht.start):Ht.start),(pn===u&&Ht.start-Ht._pinPush<Be||pn===gi)&&isNaN(Tt)&&(Ct+=Bt*(1-Ht.progress)),pn===f&&(St+=Bt));if(Be+=Ct,Pe+=Ct,R._startClamp&&(R._startClamp+=Ct),R._endClamp&&!Hi&&(R._endClamp=Pe||-.001,Pe=Math.min(Pe,ir(I,A))),qe=Pe-Be||(Be-=.01)&&.001,ri&&(He=Te.utils.clamp(0,1,Te.utils.normalize(Be,Pe,he))),R._pinPush=St,Xe&&Ct&&(Bt={},Bt[A.a]="+="+Ct,gi&&(Bt[A.p]="-="+Z()),Te.set([Xe,$e],Bt)),f&&!(yd&&R.end>=ir(I,A)))Bt=wn(f),ks=A===$t,kn=Z(),H=parseFloat(x(A.a))+St,!At&&Pe>1&&(Y=(L?_t.scrollingElement||dn:I).style,Y={style:Y,value:Y["overflow"+A.a.toUpperCase()]},L&&wn(mt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+A.a.toUpperCase()]="scroll")),md(f,We,Bt),It=Dh(f),jt=Mr(f,!0),zs=O&&yr(I,ks?Ei:$t)(),g?(ae=[g+A.os2,qe+St+ni],ae.t=We,Yt=g===Kt?Gh(f,A)+qe+St:0,Yt&&(ae.push(A.d,Yt+ni),We.style.flexBasis!=="auto"&&(We.style.flexBasis=Yt+ni)),Ga(ae),gi&&et.forEach(function(ge){ge.pin===gi&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),O&&Z(he)):(Yt=Gh(f,A),Yt&&We.style.flexBasis!=="auto"&&(We.style.flexBasis=Yt+ni)),O&&(si={top:jt.top+(ks?kn-Be:zs)+ni,left:jt.left+(ks?zs:kn-Be)+ni,boxSizing:"border-box",position:"fixed"},si[Ls]=si["max"+Ha]=Math.ceil(jt.width)+ni,si[Ds]=si["max"+Rd]=Math.ceil(jt.height)+ni,si[bn]=si[bn+nl]=si[bn+tl]=si[bn+rl]=si[bn+il]="0",si[Kt]=Bt[Kt],si[Kt+nl]=Bt[Kt+nl],si[Kt+tl]=Bt[Kt+tl],si[Kt+rl]=Bt[Kt+rl],si[Kt+il]=Bt[Kt+il],F=bw(ft,si,S),Hi&&Z(0)),n?(M=n._initted,ud(1),n.render(n.duration(),!0,!0),$=x(A.a)-H+qe+St,ie=Math.abs(qe-$)>1,O&&ie&&F.splice(F.length-2,2),n.render(0,!0,!0),M||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),ud(0)):$=qe,Y&&(Y.value?Y.style["overflow"+A.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+A.a));else if(u&&Z()&&!E)for(jt=u.parentNode;jt&&jt!==mt;)jt._pinOffset&&(Be-=jt._pinOffset,Pe-=jt._pinOffset),jt=jt.parentNode;U&&U.forEach(function(ge){return ge.revert(!1,!0)}),R.start=Be,R.end=Pe,me=Ue=Hi?he:Z(),!E&&!Hi&&(me<he&&Z(he),R.scroll.rec=0),R.revert(!1,!0),ke=Ci(),N&&(Ve=-1,N.restart(!0)),Ai=0,n&&D&&(n._initted||te)&&n.progress()!==te&&n.progress(te||0,!0).render(n.time(),!0,!0),(ri||He!==R.progress||E||_||n&&!n._initted)&&(n&&!D&&(n._initted||He||n.vars.immediateRender!==!1)&&n.totalProgress(E&&Be<-.001&&!He?Te.utils.normalize(Be,Pe,0):He,!0),R.progress=ri||(me-Be)/qe===He?0:He),f&&g&&(We._pinOffset=Math.round(R.progress*$)),le&&le.invalidate(),isNaN(G)||(G-=Te.getProperty(V,A.p),W-=Te.getProperty(tt,A.p),Nh(V,A,G),Nh(Xe,A,G-(Ye||0)),Nh(tt,A,W),Nh($e,A,W-(Ye||0))),ri&&!Hi&&R.update(),h&&!Hi&&!Dt&&(Dt=!0,h(R),Dt=!1)}},R.getVelocity=function(){return(Z()-Ue)/(Ci()-Zo)*1e3||0},R.endAnimation=function(){Yo(R.callbackAnimation),n&&(le?le.progress(1):n.paused()?D||Yo(n,R.direction<0,1):Yo(n,n.reversed()))},R.labelToScroll=function(se){return n&&n.labels&&(Be||R.refresh()||Be)+n.labels[se]/n.duration()*qe||0},R.getTrailing=function(se){var Ne=et.indexOf(R),Ae=R.direction>0?et.slice(0,Ne).reverse():et.slice(Ne+1);return(fn(se)?Ae.filter(function(Ye){return Ye.vars.preventOverlaps===se}):Ae).filter(function(Ye){return R.direction>0?Ye.end<=Be:Ye.start>=Pe})},R.update=function(se,Ne,Ae){if(!(E&&!Ae&&!se)){var Ye=Hi===!0?he:R.scroll(),qt=se?0:(Ye-Be)/qe,it=qt<0?0:qt>1?1:qt||0,At=R.progress,ri,Ct,St,lt,Pi,Tt,gi,Ii;if(Ne&&(Ue=me,me=E?Z():Ye,y&&(ue=de,de=n&&!D?n.totalProgress():it)),m&&f&&!Ai&&!Ah&&Tn&&(!it&&Be<Ye+(Ye-Ue)/(Ci()-Zo)*m?it=1e-4:it===1&&Pe>Ye+(Ye-Ue)/(Ci()-Zo)*m&&(it=.9999)),it!==At&&R.enabled){if(ri=R.isActive=!!it&&it<1,Ct=!!At&&At<1,Tt=ri!==Ct,Pi=Tt||!!it!=!!At,R.direction=it>At?1:-1,R.progress=it,Pi&&!Ai&&(St=it&&!At?0:it===1?1:At===1?2:3,D&&(lt=!Tt&&z[St+1]!=="none"&&z[St+1]||z[St],Ii=n&&(lt==="complete"||lt==="reset"||lt in n))),T&&(Tt||Ii)&&(Ii||d||!n)&&(Ri(T)?T(R):R.getTrailing(T).forEach(function(kn){return kn.endAnimation()})),D||(le&&!Ai&&!Ah?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",it,n._tTime/n._tDur):(le.vars.totalProgress=it,le.invalidate().restart())):n&&n.totalProgress(it,!!(Ai&&(ke||se)))),f){if(se&&g&&(We.style[g+A.os2]=ce),!O)B($o(H+$*it));else if(Pi){if(gi=!se&&it>At&&Pe+1>Ye&&Ye+1>=ir(I,A),S)if(!se&&(ri||gi)){var Yt=Mr(f,!0),Bt=Ye-Be;s_(f,mt,Yt.top+(A===$t?Bt:0)+ni,Yt.left+(A===$t?0:Bt)+ni)}else s_(f,We);Ga(ri||gi?F:It),ie&&it<1&&ri||B(H+(it===1&&!gi?$:0))}}y&&!ee.tween&&!Ai&&!Ah&&N.restart(!0),o&&(Tt||C&&it&&(it<1||!fd))&&al(o.targets).forEach(function(kn){return kn.classList[ri||C?"add":"remove"](o.className)}),a&&!D&&!se&&a(R),Pi&&!Ai?(D&&(Ii&&(lt==="complete"?n.pause().totalProgress(1):lt==="reset"?n.restart(!0).pause():lt==="restart"?n.restart(!0):n[lt]()),a&&a(R)),(Tt||!fd)&&(c&&Tt&&Fa(R,c),q[St]&&Fa(R,q[St]),C&&(it===1?R.kill(!1,1):q[St]=0),Tt||(St=it===1?1:3,q[St]&&Fa(R,q[St]))),v&&!ri&&Math.abs(R.getVelocity())>(Ko(v)?v:2500)&&(Yo(R.callbackAnimation),le?le.progress(1):Yo(n,lt==="reverse"?1:!it,1))):D&&a&&!Ai&&a(R)}if(fe){var jt=E?Ye/E.duration()*(E._caScrollDist||0):Ye;j(jt+(V._isFlipped?1:0)),fe(jt)}pe&&pe(-Ye/E.duration()*(E._caScrollDist||0))}},R.enable=function(se,Ne){R.enabled||(R.enabled=!0,ci(I,"resize",jo),L||ci(I,"scroll",Ba),Q&&ci(r,"refreshInit",Q),se!==!1&&(R.progress=He=0,me=Ue=Ve=Z()),Ne!==!1&&R.refresh())},R.getTween=function(se){return se&&ee?ee.tween:le},R.setPositions=function(se,Ne,Ae,Ye){if(E){var qt=E.scrollTrigger,it=E.duration(),At=qt.end-qt.start;se=qt.start+At*se/it,Ne=qt.start+At*Ne/it}R.refresh(!1,!1,{start:$g(se,Ae&&!!R._startClamp),end:$g(Ne,Ae&&!!R._endClamp)},Ye),R.update()},R.adjustPinSpacing=function(se){if(ae&&se){var Ne=ae.indexOf(A.d)+1;ae[Ne]=parseFloat(ae[Ne])+se+ni,ae[1]=parseFloat(ae[1])+se+ni,Ga(ae)}},R.disable=function(se,Ne){if(se!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ne||le&&le.pause(),he=0,_e&&(_e.uncache=1),Q&&li(r,"refreshInit",Q),N&&(N.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!L)){for(var Ae=et.length;Ae--;)if(et[Ae].scroller===I&&et[Ae]!==R)return;li(I,"resize",jo),L||li(I,"scroll",Ba)}},R.kill=function(se,Ne){R.disable(se,Ne),le&&!Ne&&le.kill(),l&&delete Sd[l];var Ae=et.indexOf(R);Ae>=0&&et.splice(Ae,1),Ae===Gi&&Bh>0&&Gi--,Ae=0,et.forEach(function(Ye){return Ye.scroller===R.scroller&&(Ae=1)}),Ae||Hi||(R.scroll.rec=0),n&&(n.scrollTrigger=null,se&&n.revert({kill:!1}),Ne||n.kill()),Xe&&[Xe,$e,V,tt].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),sl===R&&(sl=0),f&&(_e&&(_e.uncache=1),Ae=0,et.forEach(function(Ye){return Ye.pin===f&&Ae++}),Ae||(_e.spacer=0)),i.onKill&&i.onKill(R)},et.push(R),R.enable(!1,!1),xe&&xe(R),n&&n.add&&!qe){var De=R.update;R.update=function(){R.update=De,Qe.cache++,Be||Pe||R.refresh()},Te.delayedCall(.01,R.update),qe=.01,Be=Pe=0}else R.refresh();f&&yw()},r.register=function(i){return ka||(Te=i||m_(),p_()&&window.document&&r.enable(),ka=Jo),ka},r.defaults=function(i){if(i)for(var n in i)Ih[n]=i[n];return Ih},r.disable=function(i,n){Jo=0,et.forEach(function(a){return a[n?"kill":"disable"](i)}),li(nt,"wheel",Ba),li(_t,"scroll",Ba),clearInterval(Eh),li(_t,"touchcancel",tr),li(mt,"touchstart",tr),Rh(li,_t,"pointerdown,touchstart,mousedown",Kg),Rh(li,_t,"pointerup,touchend,mouseup",jg),Vh.kill(),Ch(li);for(var s=0;s<Qe.length;s+=3)Ph(li,Qe[s],Qe[s+1]),Ph(li,Qe[s],Qe[s+2])},r.enable=function(){if(nt=window,_t=document,dn=_t.documentElement,mt=_t.body,Te){if(al=Te.utils.toArray,Qo=Te.utils.clamp,vd=Te.core.context||tr,ud=Te.core.suppressOverwrites||tr,Td=nt.history.scrollRestoration||"auto",Md=nt.pageYOffset||0,Te.core.globals("ScrollTrigger",r),mt){Jo=1,Va=document.createElement("div"),Va.style.height="100vh",Va.style.position="absolute",T_(),dw(),Gt.register(Te),r.isTouch=Gt.isTouch,ss=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xd=Gt.isTouch===1,ci(nt,"wheel",Ba),wd=[nt,_t,dn,mt],Te.matchMedia?(r.matchMedia=function(h){var d=Te.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Te.addEventListener("matchMediaInit",function(){b_(),Id()}),Te.addEventListener("matchMediaRevert",function(){return M_()}),Te.addEventListener("matchMedia",function(){Is(0,1),Os("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return pd(),pd})):console.warn("Requires GSAP 3.11.0 or later"),pd(),ci(_t,"scroll",Ba);var i=mt.hasAttribute("style"),n=mt.style,s=n.borderTopStyle,a=Te.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Mr(mt),$t.m=Math.round(o.top+$t.sc())||0,Ei.m=Math.round(o.left+Ei.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(mt.setAttribute("style",""),mt.removeAttribute("style")),Eh=setInterval(t_,250),Te.delayedCall(.5,function(){return Ah=0}),ci(_t,"touchcancel",tr),ci(mt,"touchstart",tr),Rh(ci,_t,"pointerdown,touchstart,mousedown",Kg),Rh(ci,_t,"pointerup,touchend,mouseup",jg),_d=Te.utils.checkPrefix("transform"),kh.push(_d),ka=Ci(),Vh=Te.delayedCall(.2,Is).pause(),za=[_t,"visibilitychange",function(){var h=nt.innerWidth,d=nt.innerHeight;_t.hidden?(Yg=h,Zg=d):(Yg!==h||Zg!==d)&&jo()},_t,"DOMContentLoaded",Is,nt,"load",Is,nt,"resize",jo],Ch(ci),et.forEach(function(h){return h.enable(0,1)}),l=0;l<Qe.length;l+=3)Ph(li,Qe[l],Qe[l+1]),Ph(li,Qe[l],Qe[l+2])}else if(_t){var c=function h(){r.enable(),_t.removeEventListener("DOMContentLoaded",h)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(fd=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Eh)||(Eh=n)&&setInterval(t_,n),"ignoreMobileResize"in i&&(xd=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ch(li)||Ch(ci,i.autoRefreshEvents||"none"),u_=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=zi(i),a=Qe.indexOf(s),o=Us(s);~a&&Qe.splice(a,o?6:2),n&&(o?Un.unshift(nt,n,mt,n,dn,n):Un.unshift(s,n))},r.clearMatchMedia=function(i){et.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var a=(fn(i)?zi(i):i).getBoundingClientRect(),o=a[s?Ls:Ds]*n||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},r.positionInViewport=function(i,n,s){fn(i)&&(i=zi(i));var a=i.getBoundingClientRect(),o=a[s?Ls:Ds],l=n==null?o/2:n in Hh?Hh[n]*o:~n.indexOf("%")?parseFloat(n)*o/100:parseFloat(n)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},r.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=Fs.killAll||[];Fs={},n.forEach(function(s){return s()})}},r})();Je.version="3.15.0";Je.saveStyles=function(r){return r?al(r).forEach(function(e){if(e&&e.style){var t=un.indexOf(e);t>=0&&un.splice(t,5),un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),vd())}}):un};Je.revert=function(r,e){return Id(!r,e)};Je.create=function(r,e){return new Je(r,e)};Je.refresh=function(r){return r?jo(!0):(ka||Je.register())&&Is(!0)};Je.update=function(r){return++Qe.cache&&br(r===!0?2:0)};Je.clearScrollMemory=w_;Je.maxScroll=function(r,e){return ir(r,e?Ei:$t)};Je.getScrollFunc=function(r,e){return yr(zi(r),e?Ei:$t)};Je.getById=function(r){return Sd[r]};Je.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Tn};Je.snapDirectional=Pd;Je.addEventListener=function(r,e){var t=Fs[r]||(Fs[r]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(r,e){var t=Fs[r],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(r,e){var t=[],i={},n=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Te.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&Ri(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Ri(s)&&(s=s(),ci(Je,"refresh",function(){return s=e.batchMax()})),al(r).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,t.push(Je.create(c))}),t};var o_=function(e,t,i,n){return t>n?e(n):t<0&&e(0),i>n?(n-t)/(i-t):i<0?t/(t-i):1},gd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===dn&&r(mt,t)},Uh={auto:1,scroll:1},Tw=function(e){var t=e.event,i=e.target,n=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Te.core.getCache(s),o=Ci(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Uh[(l=wn(s)).overflowY]||Uh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!Us(s)&&(Uh[(l=wn(s)).overflowY]||Uh[l.overflowX]),a._isScrollT=o}(a._isScroll||n==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},A_=function(e,t,i,n){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&Tw,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&ci(_t,Gt.eventTypes[0],c_,!1,!0)},onDisable:function(){return li(_t,Gt.eventTypes[0],c_,!0)}})},Ew=/(input|label|select|textarea)/i,l_,c_=function(e){var t=Ew.test(e.target.tagName);(t||l_)&&(e._gsapAllow=!0,l_=t)},Aw=function(e){Ps(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,n=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=zi(e.target)||dn,h=Te.core.globals().ScrollSmoother,d=h&&h.get(),u=ss&&(e.content&&zi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=yr(c,$t),g=yr(c,Ei),_=1,m=(Gt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,p=0,w=Ri(n)?function(){return n(o)}:function(){return n||2.8},C,y,S=A_(c,e.type,!0,s),b=function(){return y=!1},E=tr,v=tr,T=function(){l=ir(c,$t),v=Qo(ss?1:0,l),i&&(E=Qo(0,ir(c,Ei))),C=Ns},A=function(){u._gsap.y=$o(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(b);var K=$o(o.deltaY/2),X=v(f.v-K);if(u&&X!==f.v+f.offset){f.offset=X-f.v;var R=$o((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=Qe.cache,br()}return!0}f.offset&&A(),y=!0},I,k,L,O,q=function(){T(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Te.set(u,{y:"+=0"}),e.ignoreCheck=function(z){return ss&&z.type==="touchmove"&&D(z)||_>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=_;_=$o((nt.visualViewport&&nt.visualViewport.scale||1)/m),I.pause(),z!==_&&gd(c,_>1.01?!0:i?!1:"x"),k=g(),L=f(),T(),C=Ns},e.onRelease=e.onGestureStart=function(z,K){if(f.offset&&A(),!K)O.restart(!0);else{Qe.cache++;var X=w(),R,Q;i&&(R=g(),Q=R+X*.05*-z.velocityX/.227,X*=o_(g,R,Q,ir(c,Ei)),I.vars.scrollX=E(Q)),R=f(),Q=R+X*.05*-z.velocityY/.227,X*=o_(f,R,Q,ir(c,$t)),I.vars.scrollY=v(Q),I.invalidate().duration(X).play(.01),(ss&&I.vars.scrollY>=l||R>=l-1)&&Te.to({},{onUpdate:q,duration:X})}a&&a(z)},e.onWheel=function(){I._ts&&I.pause(),Ci()-p>1e3&&(C=0,p=Ci())},e.onChange=function(z,K,X,R,Q){if(Ns!==C&&T(),K&&i&&g(E(R[2]===K?k+(z.startX-z.x):g()+K-R[1])),X){f.offset&&A();var Se=Q[2]===X,Me=Se?L+z.startY-z.y:f()+X-Q[1],Ve=v(Me);Se&&Me!==Ve&&(L+=Ve-Me),f(Ve)}(X||K)&&br()},e.onEnable=function(){gd(c,i?!1:"x"),Je.addEventListener("refresh",q),ci(nt,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){gd(c,!0),li(nt,"resize",q),Je.removeEventListener("refresh",q),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=ss,ss&&!f()&&f(1),ss&&Te.ticker.add(tr),O=o._dc,I=Te.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:E_(f,f(),function(){return I.pause()})},onUpdate:br,onComplete:O.vars.onComplete}),o};Je.sort=function(r){if(Ri(r))return et.sort(r);var e=nt.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(r||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Je.observe=function(r){return new Gt(r)};Je.normalizeScroll=function(r){if(typeof r>"u")return Vi;if(r===!0&&Vi)return Vi.enable();if(r===!1){Vi&&Vi.kill(),Vi=r;return}var e=r instanceof Gt?r:Aw(r);return Vi&&Vi.target===e.target&&Vi.kill(),Us(e.target)&&(Vi=e),e};Je.core={_getVelocityProp:Th,_inputObserver:A_,_scrollers:Qe,_proxies:Un,bridge:{ss:function(){Tn||Os("scrollStart"),Tn=Ci()},ref:function(){return Ai}}};m_()&&Te.registerPlugin(Je);var Ld=[{id:"jaunt",source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",title:"JAUNT \u2014 One Beat",category:"Audio / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.061,full:"assets/portfolio/jaunt.mp4",preview:"assets/portfolio/jaunt-preview.mp4",thumbnail:"assets/portfolio/jaunt.webp",posterTime:10.8,previewStart:8.561},{id:"tiktak-superhero",source:"assets/Dara\u2019s TikTak Superhero Adventure.png",title:"TikTak \u2014 Superhero Adventure",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Superhero Adventure.png",thumbnail:"assets/portfolio/tiktak-superhero.webp"},{id:"blood-orange-summer",source:"assets/Seedance 2_0 - 15-Second Premium Lifestyle Soda Commercial_ Emotional Summer Energy_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 A Taste of Summer",category:"Beverage / Lifestyle film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-summer.mp4",preview:"assets/portfolio/blood-orange-summer-preview.mp4",thumbnail:"assets/portfolio/blood-orange-summer.webp",posterTime:11.8,previewStart:8.569},{id:"blink-watch",source:"assets/Seedance 2_0 - Create a premium cinematic luxury watch advertisement for a brand called BLINK_Use th.mp4",title:"BLINK \u2014 A Moment in Time",category:"Watches / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blink-watch.mp4",preview:"assets/portfolio/blink-watch-preview.mp4",thumbnail:"assets/portfolio/blink-watch.webp",posterTime:6.8,previewStart:6.8},{id:"toyota",source:"assets/Toyota_web.mp4",title:"Toyota \u2014 Automotive Film",category:"Automotive / Brand film",categories:["film"],width:1880,height:1080,video:!0,new:!1,duration:78.4,full:"assets/portfolio/toyota.mp4",preview:"assets/portfolio/toyota-preview.mp4",thumbnail:"assets/portfolio/toyota.webp",posterTime:12,previewStart:12},{id:"dara-funfair",source:"assets/2.mp4",title:"Dara \u2014 The Funfair Adventure",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-funfair.mp4",preview:"assets/portfolio/dara-funfair-preview.mp4",thumbnail:"assets/portfolio/dara-funfair.webp",posterTime:14,previewStart:14}];var Dd={projects:[{id:"forest-flight",source:"assets/forest-flight-original.mp4",title:"Forest Flight",category:"Nature / Cinematic film",categories:["film","vfx"],width:3840,height:2160,video:!0,new:!0,duration:14.5,full:"assets/portfolio/forest-flight.mp4",preview:"assets/portfolio/forest-flight-preview.mp4",thumbnail:"assets/portfolio/forest-flight.webp",posterTime:3,previewStart:0,delivery:{width:3840,height:2160,quality:20,maxrate:"11M",bufsize:"11M",previewWidth:1920,previewHeight:1080,previewQuality:22,previewDuration:14.5},exhibitionPoster:"assets/experience/media/forest-flight.jpg",exhibitionPreview:"assets/experience/media/forest-flight.mp4"},{id:"blink-logo-animation",source:"assets/blink-logo-animation-original.mp4",title:"BLINK \u2014 Logo Animation",category:"Brand identity / Motion",categories:["film","vfx"],width:3840,height:2160,video:!0,new:!0,duration:7.041667,full:"assets/portfolio/blink-logo-animation.mp4",preview:"assets/portfolio/blink-logo-animation-preview.mp4",thumbnail:"assets/portfolio/blink-logo-animation.webp",posterTime:3,previewStart:0,delivery:{width:3840,height:2160,quality:20,maxrate:"11M",bufsize:"11M",previewWidth:1920,previewHeight:1080,previewQuality:22,previewDuration:5},exhibitionPoster:"assets/experience/media/blink-logo-animation.jpg",exhibitionPreview:"assets/experience/media/blink-logo-animation.mp4"},{id:"aurelia-residences",source:"assets/aurelia-residences-original.mp4",title:"Aurelia Residences \u2014 Architectural Film",category:"Architecture / Property film",categories:["film"],width:720,height:1280,video:!0,new:!0,duration:20.039002,full:"assets/portfolio/aurelia-residences.mp4",preview:"assets/portfolio/aurelia-residences-preview.mp4",thumbnail:"assets/portfolio/aurelia-residences.webp",posterTime:2,previewStart:1,sourceSha256:"7debbaf5f0ab7e214f0bdad58c50f704b7b2660557be88649dd0600940b68d45",delivery:{width:720,height:1280,quality:19,maxrate:"5M",bufsize:"10M",previewWidth:720,previewHeight:1280,previewQuality:21,previewDuration:6},exhibitionPoster:"assets/experience/media/aurelia-residences.jpg",exhibitionPreview:"assets/experience/media/aurelia-residences.mp4"},{id:"spiced-tea",source:"assets/spiced-tea-original.mp4",title:"BLINK \u2014 Masala Film",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:16.020998,full:"assets/portfolio/spiced-tea.mp4",preview:"assets/portfolio/spiced-tea-preview.mp4",thumbnail:"assets/portfolio/spiced-tea.webp",posterTime:14.8,previewStart:9.5,sourceSha256:"2e55873503857445011d993186f742832502b3a63a587b60af68db0ff5558bc2",delivery:{width:720,height:1280,quality:19,maxrate:"5M",bufsize:"10M",previewWidth:720,previewHeight:1280,previewQuality:21,previewDuration:6},exhibitionPoster:"assets/experience/media/spiced-tea.jpg",exhibitionPreview:"assets/experience/media/spiced-tea.mp4"},{id:"desert-journey",source:"assets/desert-journey-original.mp4",title:"Desert Journey",category:"Characters / Cinematic film",categories:["film","character","vfx"],width:2206,height:946,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/desert-journey.mp4",preview:"assets/portfolio/desert-journey-preview.mp4",thumbnail:"assets/portfolio/desert-journey.webp",posterTime:5,previewStart:0,delivery:{width:2206,height:946,quality:20,maxrate:"11M",bufsize:"11M",previewWidth:1920,previewHeight:1080,previewQuality:22,previewDuration:5},exhibitionPoster:"assets/experience/media/desert-journey.jpg",exhibitionPreview:"assets/experience/media/desert-journey.mp4"},{id:"jaunt",source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",title:"JAUNT \u2014 One Beat",category:"Audio / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.061,full:"assets/portfolio/jaunt.mp4",preview:"assets/portfolio/jaunt-preview.mp4",thumbnail:"assets/portfolio/jaunt.webp",posterTime:10.8,previewStart:8.561,exhibitionPoster:"assets/experience/media/jaunt.jpg",exhibitionPreview:"assets/experience/media/jaunt.mp4"},{id:"blood-orange-summer",source:"assets/Seedance 2_0 - 15-Second Premium Lifestyle Soda Commercial_ Emotional Summer Energy_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 A Taste of Summer",category:"Beverage / Lifestyle film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-summer.mp4",preview:"assets/portfolio/blood-orange-summer-preview.mp4",thumbnail:"assets/portfolio/blood-orange-summer.webp",posterTime:11.8,previewStart:8.569,exhibitionPoster:"assets/experience/media/blood-orange-summer.jpg",exhibitionPreview:"assets/experience/media/blood-orange-summer.mp4"},{id:"blink-watch",source:"assets/Seedance 2_0 - Create a premium cinematic luxury watch advertisement for a brand called BLINK_Use th.mp4",title:"BLINK \u2014 A Moment in Time",category:"Watches / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blink-watch.mp4",preview:"assets/portfolio/blink-watch-preview.mp4",thumbnail:"assets/portfolio/blink-watch.webp",posterTime:6.8,previewStart:6.8,exhibitionPoster:"assets/experience/media/blink-watch.jpg",exhibitionPreview:"assets/experience/media/blink-watch.mp4"},{id:"tiktak-superhero",source:"assets/Dara\u2019s TikTak Superhero Adventure.png",title:"TikTak \u2014 Superhero Adventure",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Superhero Adventure.png",thumbnail:"assets/portfolio/tiktak-superhero.webp"},{id:"zero-lemon",source:"assets/hf_20260930_230457_450eef86-45bf-4454-853f-bb9d635c3e55.mp4",title:"Zero \u2014 Lemon in Motion",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/zero-lemon.mp4",preview:"assets/portfolio/zero-lemon-preview.mp4",thumbnail:"assets/portfolio/zero-lemon.webp",posterTime:11.5,previewStart:8.572,exhibitionPoster:"assets/experience/media/zero-lemon.jpg",exhibitionPreview:"assets/experience/media/zero-lemon.mp4"},{id:"dara-funfair",source:"assets/2.mp4",title:"Dara \u2014 The Funfair Adventure",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-funfair.mp4",preview:"assets/portfolio/dara-funfair-preview.mp4",thumbnail:"assets/portfolio/dara-funfair.webp",posterTime:14,previewStart:14,exhibitionPoster:"assets/experience/media/dara-funfair.jpg",exhibitionPreview:"assets/experience/media/dara-funfair.mp4"},{id:"blood-orange-rhythm",source:"assets/Seedance 2_0 - 15-Second Rhythm-Driven Global Soda Commercial_ Premium Sound Design_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 Find Your Rhythm",category:"Beverage / Product film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-rhythm.mp4",preview:"assets/portfolio/blood-orange-rhythm-preview.mp4",thumbnail:"assets/portfolio/blood-orange-rhythm.webp",posterTime:12,previewStart:8.569,exhibitionPoster:"assets/experience/media/blood-orange-rhythm.jpg",exhibitionPreview:"assets/experience/media/blood-orange-rhythm.mp4"},{id:"tiktak-cozy",source:"assets/Dara with TikTak snacks, cozy room.png",title:"TikTak \u2014 A Little Everyday Joy",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara with TikTak snacks, cozy room.png",thumbnail:"assets/portfolio/tiktak-cozy.webp"},{id:"panda",source:"assets/hf_20260930_230458_602c55c7-0b2f-4b14-80e4-2bec2f7e0349.mp4",title:"Panda \u2014 The Perfect Crunch",category:"Snacks / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/panda.mp4",preview:"assets/portfolio/panda-preview.mp4",thumbnail:"assets/portfolio/panda.webp",posterTime:11.5,previewStart:8.572,exhibitionPoster:"assets/experience/media/panda.jpg",exhibitionPreview:"assets/experience/media/panda.mp4"},{id:"zero-rice-poster",source:"assets/Warm Kitchen Rice Celebration.png",title:"Zero Rice \u2014 Made for Sharing",category:"Zero / Lifestyle poster",categories:["poster","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Warm Kitchen Rice Celebration.png",thumbnail:"assets/portfolio/zero-rice-poster.webp"},{id:"dara-transformation",source:"assets/Dara\u2019s TikTak Hero Transformation.png",title:"Dara \u2014 Hero Transformation",category:"TikTak / Visual story",categories:["poster","character","product"],width:1672,height:941,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Hero Transformation.png",thumbnail:"assets/portfolio/dara-transformation.webp"},{id:"tiktak-family",source:"assets/Warm family moments, crispy cheese puffs.png",title:"TikTak \u2014 Family Moments",category:"TikTak / Visual story",categories:["poster","product"],width:1672,height:941,video:!1,new:!0,full:"assets/Warm family moments, crispy cheese puffs.png",thumbnail:"assets/portfolio/tiktak-family.webp"},{id:"tiktak-crunch",source:"assets/TikTak Cheese Crunch in Motion.png",title:"TikTak \u2014 Cheese Crunch",category:"TikTak / Product poster",categories:["poster","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/TikTak Cheese Crunch in Motion.png",thumbnail:"assets/portfolio/tiktak-crunch.webp"},{id:"zero-rice",source:"assets/hf_20260930_230457_46195c35-5fa4-4d89-9489-27e570017282.mp4",title:"Zero \u2014 Every Grain",category:"Food / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/zero-rice.mp4",preview:"assets/portfolio/zero-rice-preview.mp4",thumbnail:"assets/portfolio/zero-rice.webp",posterTime:11,previewStart:8.572,exhibitionPoster:"assets/experience/media/zero-rice.jpg",exhibitionPreview:"assets/experience/media/zero-rice.mp4"},{id:"dara-character",source:"assets/dara.png",title:"Dara \u2014 Everyday Hero",category:"TikTak / Character design",categories:["poster","character"],width:1254,height:1254,video:!1,new:!0,full:"assets/dara.png",thumbnail:"assets/portfolio/dara-character.webp"},{id:"dara-snack",source:"assets/3.mp4",title:"Dara \u2014 Snack Break",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-snack.mp4",preview:"assets/portfolio/dara-snack-preview.mp4",thumbnail:"assets/portfolio/dara-snack.webp",posterTime:18,previewStart:18,exhibitionPoster:"assets/experience/media/dara-snack.jpg",exhibitionPreview:"assets/experience/media/dara-snack.mp4"},{id:"gundakam",source:"assets/doy gundakam.mp4",title:"Gundakam \u2014 A Fresh Perspective",category:"Dairy / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.092971,full:"assets/portfolio/gundakam.mp4",preview:"assets/portfolio/gundakam-preview.mp4",thumbnail:"assets/portfolio/gundakam.webp",posterTime:11,previewStart:8.593,exhibitionPoster:"assets/experience/media/gundakam.jpg",exhibitionPreview:"assets/experience/media/gundakam.mp4"},{id:"energy",source:"assets/hf_20260930_230458_782c2634-362c-4988-b3ca-a8c454f5838b.mp4",title:"Energy \u2014 Electric Red",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/energy.mp4",preview:"assets/portfolio/energy-preview.mp4",thumbnail:"assets/portfolio/energy.webp",posterTime:11.5,previewStart:8.572,exhibitionPoster:"assets/experience/media/energy.jpg",exhibitionPreview:"assets/experience/media/energy.mp4"},{id:"ceylon-tea",source:"assets/hf_20260930_230459_bfdf752b-710d-4ac4-a486-bcf5af001ab0.mp4",title:"Ceylon Tea \u2014 The Golden Pour",category:"Tea / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/ceylon-tea.mp4",preview:"assets/portfolio/ceylon-tea-preview.mp4",thumbnail:"assets/portfolio/ceylon-tea.webp",posterTime:11.5,previewStart:8.572,exhibitionPoster:"assets/experience/media/ceylon-tea.jpg",exhibitionPreview:"assets/experience/media/ceylon-tea.mp4"},{id:"hes-clean",source:"assets/hf_20260930_230459_d754f928-73d2-4180-97d9-a8d98f92a962.mp4",title:"HES \u2014 A Brighter Clean",category:"Home care / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/hes-clean.mp4",preview:"assets/portfolio/hes-clean-preview.mp4",thumbnail:"assets/portfolio/hes-clean.webp",posterTime:11.5,previewStart:8.572,exhibitionPoster:"assets/experience/media/hes-clean.jpg",exhibitionPreview:"assets/experience/media/hes-clean.mp4"},{id:"dara-monster",source:"assets/final1.mp4",title:"Dara \u2014 The Jelly Monster",category:"TikTak / Animated film",categories:["film","character"],width:480,height:854,video:!0,new:!0,duration:22.833333,full:"assets/portfolio/dara-monster.mp4",preview:"assets/portfolio/dara-monster-preview.mp4",thumbnail:"assets/portfolio/dara-monster.webp",posterTime:15,previewStart:15,exhibitionPoster:"assets/experience/media/dara-monster.jpg",exhibitionPreview:"assets/experience/media/dara-monster.mp4"},{id:"dara-city",source:"assets/2341.mp4",title:"Dara \u2014 City Adventure",category:"TikTak / Animated film",categories:["film","character"],width:480,height:854,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-city.mp4",preview:"assets/portfolio/dara-city-preview.mp4",thumbnail:"assets/portfolio/dara-city.webp",posterTime:16,previewStart:16,exhibitionPoster:"assets/experience/media/dara-city.jpg",exhibitionPreview:"assets/experience/media/dara-city.mp4"},{id:"jelly-monster",source:"assets/monster.png",title:"The Jelly Monster",category:"TikTak / Character design",categories:["poster","character"],width:1254,height:1254,video:!1,new:!0,full:"assets/monster.png",thumbnail:"assets/portfolio/jelly-monster.webp"},{id:"tiktak-pack",source:"assets/tiktak.png",title:"TikTak \u2014 Meet the Pack",category:"TikTak / Product poster",categories:["poster","product"],width:1094,height:1438,video:!1,new:!0,full:"assets/tiktak.png",thumbnail:"assets/portfolio/tiktak-pack.webp"},{id:"saffron",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (1).mp4",title:"Saffron \u2014 The Caf\xE9 Ritual",category:"Coffee / Lifestyle film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/saffron.mp4",preview:"assets/portfolio/saffron-preview.mp4",thumbnail:"assets/portfolio/saffron.webp",posterTime:5.5,previewStart:5.5,exhibitionPoster:"assets/experience/media/saffron.jpg",exhibitionPreview:"assets/experience/media/saffron.mp4"},{id:"vista",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (2).mp4",title:"Vista \u2014 Space to Breathe",category:"Architecture / Brand film",categories:["film"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/vista.mp4",preview:"assets/portfolio/vista-preview.mp4",thumbnail:"assets/portfolio/vista.webp",posterTime:6,previewStart:6,exhibitionPoster:"assets/experience/media/vista.jpg",exhibitionPreview:"assets/experience/media/vista.mp4"},{id:"clear",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (3).mp4",title:"CLEAR \u2014 A Fresh Start",category:"Home care / Product film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/clear.mp4",preview:"assets/portfolio/clear-preview.mp4",thumbnail:"assets/portfolio/clear.webp",posterTime:10.5,previewStart:8.542,exhibitionPoster:"assets/experience/media/clear.jpg",exhibitionPreview:"assets/experience/media/clear.mp4"},{id:"automotive-detail",source:"assets/Produce-A-Finished-15-Second-Vertical-9.mp4",title:"Automotive \u2014 In Every Detail",category:"Automotive / Product film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/automotive-detail.mp4",preview:"assets/portfolio/automotive-detail-preview.mp4",thumbnail:"assets/portfolio/automotive-detail.webp",posterTime:6,previewStart:6,exhibitionPoster:"assets/experience/media/automotive-detail.jpg",exhibitionPreview:"assets/experience/media/automotive-detail.mp4"},{id:"iphone",source:"assets/work-iphone.jpg",title:"Apple \u2014 Cinematic Poster",category:"Technology / Product poster",categories:["poster","product"],width:2752,height:1536,video:!1,new:!1,full:"assets/work-iphone.jpg",thumbnail:"assets/portfolio/iphone.webp"},{id:"ford-film",source:"assets/work1.mp4",title:"Ford \u2014 Built for the Journey",category:"Automotive / Brand film",categories:["film"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/ford-film.mp4",preview:"assets/portfolio/ford-film-preview.mp4",thumbnail:"assets/portfolio/ford-film.webp",posterTime:8,previewStart:8,exhibitionPoster:"assets/experience/media/ford-film.jpg",exhibitionPreview:"assets/experience/media/ford-film.mp4"},{id:"rolex",source:"assets/work-rolex.jpg",title:"Rolex \u2014 Luxury in Detail",category:"Watches / Product poster",categories:["poster","product"],width:736,height:920,video:!1,new:!1,full:"assets/work-rolex.jpg",thumbnail:"assets/portfolio/rolex.webp"},{id:"hyper-motion",source:"assets/work2.mp4",title:"Product \u2014 Hyper-Motion",category:"Product / Motion film",categories:["film","product"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/hyper-motion.mp4",preview:"assets/portfolio/hyper-motion-preview.mp4",thumbnail:"assets/portfolio/hyper-motion.webp",posterTime:3,previewStart:3,exhibitionPoster:"assets/experience/media/hyper-motion.jpg",exhibitionPreview:"assets/experience/media/hyper-motion.mp4"},{id:"vfx-composite",source:"assets/work3.mp4",title:"VFX \u2014 Composite",category:"Visual effects / Film",categories:["film","vfx"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/vfx-composite.mp4",preview:"assets/portfolio/vfx-composite-preview.mp4",thumbnail:"assets/portfolio/vfx-composite.webp",posterTime:1.5,previewStart:1.5,exhibitionPoster:"assets/experience/media/vfx-composite.jpg",exhibitionPreview:"assets/experience/media/vfx-composite.mp4"},{id:"muse",source:"assets/work-muse.jpg",title:"Muse \u2014 Color & Flavor",category:"Beverage / Product poster",categories:["poster","product"],width:736,height:981,video:!1,new:!1,full:"assets/work-muse.jpg",thumbnail:"assets/portfolio/muse.webp"},{id:"haji-character",source:"assets/work-pizza.jpg",title:"Haji \u2014 Brand Character",category:"Character / Poster",categories:["poster","character"],width:1792,height:2400,video:!1,new:!1,full:"assets/work-pizza.jpg",thumbnail:"assets/portfolio/haji-character.webp"},{id:"kinetic",source:"assets/work4.mp4",title:"Social \u2014 Kinetic Edit",category:"Social / Motion film",categories:["film"],width:1280,height:720,video:!0,new:!1,duration:15.125,full:"assets/portfolio/kinetic.mp4",preview:"assets/portfolio/kinetic-preview.mp4",thumbnail:"assets/portfolio/kinetic.webp",posterTime:3,previewStart:3,exhibitionPoster:"assets/experience/media/kinetic.jpg",exhibitionPreview:"assets/experience/media/kinetic.mp4"},{id:"haji-trex",source:"assets/films-trex.mp4",title:"Haji vs T-Rex",category:"Character / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!1,duration:9,full:"assets/portfolio/haji-trex.mp4",preview:"assets/portfolio/haji-trex-preview.mp4",thumbnail:"assets/portfolio/haji-trex.webp",posterTime:4,previewStart:2.5,exhibitionPoster:"assets/experience/media/haji-trex.jpg",exhibitionPreview:"assets/experience/media/haji-trex.mp4"},{id:"ford-poster",source:"assets/work-ford.jpg",title:"Ford \u2014 Studio Key Art",category:"Automotive / Poster",categories:["poster","product"],width:736,height:920,video:!1,new:!1,full:"assets/work-ford.jpg",thumbnail:"assets/portfolio/ford-poster.webp"},{id:"zero-pack",source:"assets/work-zero.jpg",title:"Zero \u2014 Packaging Study",category:"Product / Poster",categories:["poster","product"],width:768,height:1344,video:!1,new:!1,full:"assets/work-zero.jpg",thumbnail:"assets/portfolio/zero-pack.webp"},{id:"toyota",source:"assets/Toyota_web.mp4",title:"Toyota \u2014 Automotive Film",category:"Automotive / Brand film",categories:["film"],width:1880,height:1080,video:!0,new:!1,duration:78.4,full:"assets/portfolio/toyota.mp4",preview:"assets/portfolio/toyota-preview.mp4",thumbnail:"assets/portfolio/toyota.webp",posterTime:12,previewStart:12,exhibitionPoster:"assets/experience/media/toyota.jpg",exhibitionPreview:"assets/experience/media/toyota.mp4"}],studio:[{id:"studio-motion",source:"assets/film.mp4",title:"Product Motion",category:"Studio motion",categories:["film"],width:1080,height:1920,video:!0,new:!1,duration:15.092993,full:"assets/portfolio/studio-motion.mp4",preview:"assets/portfolio/studio-motion-preview.mp4",thumbnail:"assets/portfolio/studio-motion.webp",posterTime:3,previewStart:3}],hero:{source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",preview:"assets/portfolio/jaunt-hero.mp4",thumbnail:"assets/portfolio/jaunt-hero.webp",start:.4,posterTime:4}};xr.registerPlugin(Je);var gt=r=>document.getElementById(r),qh=document.documentElement,Qi=gt("scroller"),On=gt("exhibition"),Od=matchMedia("(max-width: 767px)"),Pw=!!navigator.connection?.saveData,Wa=(r,e=0,t=1)=>Math.max(e,Math.min(t,r)),Bd=Eo.lerp,Iw=new Set(Ld.map(r=>r.id)),Lw=[...Ld.map(r=>Dd.projects.find(e=>e.id===r.id)).filter(Boolean),...Dd.projects.filter(r=>!Iw.has(r.id))],xt=Lw,Wi=qh.dataset.motion==="off",C_=!1,rr=null,Xd=qh.lang==="ckb"?"ku":qh.lang,kd=new ot,zd=new ot,wr=0,R_=0,Bn=[],mi=0,nr=0,Nd={en:{"exhibit.title":"Step inside<br>the work.",prev:"Previous work",next:"Next work"},ku:{"exhibit.title":"\u0628\u0686\u06C6 \u0646\u0627\u0648<br>\u062C\u06CC\u0647\u0627\u0646\u06CC \u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646.",prev:"\u06A9\u0627\u0631\u06CC \u067E\u06CE\u0634\u0648\u0648",next:"\u06A9\u0627\u0631\u06CC \u062F\u0648\u0627\u062A\u0631"},ar:{"exhibit.title":"\u0627\u062F\u062E\u0644 \u0625\u0644\u0649<br>\u0639\u0627\u0644\u0645 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.",prev:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0633\u0627\u0628\u0642",next:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062A\u0627\u0644\u064A"}},Ud=r=>(Nd[Xd]||Nd.en)[r]||Nd.en[r],ll=()=>qh.dir==="rtl"?-1:1;function D_(){On.querySelectorAll("[data-exp-i18n]").forEach(e=>e.innerHTML=Ud(e.dataset.expI18n)),gt("exhibitPrev").setAttribute("aria-label",Ud("prev")),gt("exhibitNext").setAttribute("aria-label",Ud("next"));let r={en:"View all work",ku:"\u0647\u06D5\u0645\u0648\u0648 \u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646 \u0628\u0628\u06CC\u0646\u06D5",ar:"\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644"}[Xd]||"View all work";gt("exhibitGrid").setAttribute("aria-label",r),gt("exhibitGrid").title=r,$h(),hi()}addEventListener("blink:language",r=>{Xd=r.detail,D_()});function qd(r,e){dispatchEvent(new CustomEvent("blink:open-project",{detail:{id:r,trigger:e}}))}On.querySelectorAll("[data-exhibit]").forEach(r=>r.addEventListener("click",e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),qd(r.dataset.exhibit,r))}));var P_=0;function $h(){clearTimeout(P_),P_=setTimeout(()=>{Je.refresh(),Bn.forEach(r=>r.measureFrame?.()),dispatchEvent(new Event("blink:layout")),hi()},100)}function hi(){!wr&&!document.hidden&&(wr=requestAnimationFrame(N_))}function N_(r){if(wr=0,document.hidden||gt("viewer").open)return;let e=Math.min((r-R_)/1e3||.016,.05);R_=r,zd.lerp(kd,1-Math.exp(-e*7));let t=!1;for(let i of Bn)!i.visible||i.failed||Wi||(i.update(r/1e3,e),i.renderer.render(i.scene,i.camera),t||=i.animate||zd.distanceTo(kd)>.001);t&&(wr=requestAnimationFrame(N_))}addEventListener("pointermove",r=>{r.pointerType!=="touch"&&(kd.set((r.clientX/innerWidth-.5)*2,-(r.clientY/innerHeight-.5)*2),Wi||hi())},{passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(wr),wr=0,Bn.forEach(r=>r.pauseMedia?.())):(Bn.filter(r=>r.visible).forEach(r=>r.onVisible?.()),hi())});new MutationObserver(()=>{gt("viewer").open?(cancelAnimationFrame(wr),wr=0,Bn.forEach(r=>r.pauseMedia?.())):(Bn.filter(r=>r.visible).forEach(r=>r.onVisible?.()),hi())}).observe(gt("viewer"),{attributes:!0,attributeFilter:["open"]});var Vd=class{constructor(e,t,i){this.container=e,this.root=t,this.update=i,this.visible=!1,this.animate=!1,this.failed=!1,this.renderer=new th({alpha:!0,antialias:!0,powerPreference:"low-power",preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=ui,this.renderer.toneMapping=rn,this.renderer.toneMappingExposure=1,this.camera=new yi(42,1,.08,80),this.scene=new io,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.resize=()=>{let n=e.clientWidth,s=e.clientHeight;!n||!s||(this.renderer.setSize(n,s,!1),this.camera.aspect=n/s,this.camera.updateProjectionMatrix(),this.onResize?.(n,s),hi())},this.ro=new ResizeObserver(this.resize),this.ro.observe(e),this.io=new IntersectionObserver(n=>{this.visible=n[0].isIntersecting,this.visible?(this.onVisible?.(),hi()):this.pauseMedia?.()},{root:Qi,rootMargin:"120px",threshold:0}),this.io.observe(e),this.renderer.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.failed=!0,t.classList.remove("has-webgl"),this.pauseMedia?.(),Jh()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{this.failed=!1,t.classList.add("has-webgl"),Jh(),hi()}),this.resize(),Bn.push(this),t.classList.add("has-webgl")}dispose(){this.ro.disconnect(),this.io.disconnect(),this.pauseMedia?.(),this.video?.removeAttribute("src"),this.video?.load(),this.scene.traverse(e=>{e.geometry?.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>{i&&(i.map?.dispose(),i.dispose())})}),this.environmentTarget?.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};function Fd(r,e,t,i=[0,0,0],n=[1,1,1]){let s=new Yi(r,e);return s.position.set(...i),s.scale.set(...n),t.add(s),s}var U_,as=0,F_=0;function Kh(r){mi=Wa(r),F_=mi*(xt.length-1)*.58;let e=Math.round(mi*(xt.length-1));if(e!==nr||!gt("exhibitOpen").dataset.ready){nr=e;let t=xt[e];gt("exhibitOpen").dataset.ready="true",gt("exhibitOpen").textContent=t.title,gt("exhibitPosition").textContent=`${e+1} / ${xt.length}`,gt("exhibitPrev").disabled=e===0,gt("exhibitNext").disabled=e===xt.length-1,U_?.queueVideo?.(),Dw(t)}gt("exhibition").style.setProperty("--exhibit-progress",mi),hi()}var I_=[...On.querySelectorAll(".exhibit-ambience img")],Xh=0,L_=0;function Dw(r){let e=++L_,t=I_[1-Xh];if(!t)return;let i=new Image;i.src=r.thumbnail,i.decode().then(()=>{e===L_&&(t.src=i.src,t.classList.add("is-current"),I_[Xh].classList.remove("is-current"),Xh=1-Xh)}).catch(()=>{})}function Nw(){return new Ni({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{strength:{value:.25}},vertexShader:"varying vec2 uvShadow; void main(){uvShadow=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 uvShadow; uniform float strength; void main(){vec2 d=max(abs(uvShadow-.5)-vec2(.34,.34),0.0);float a=exp(-dot(d,d)*170.0)*strength;gl_FragColor=vec4(.015,.012,.018,a);}"})}function Uw(){let r=gt("exhibition"),e=new Vd(gt("exhibitionWorld"),r,()=>{});U_=e,e.camera.fov=48,e.camera.updateProjectionMatrix(),e.scene.background=null;let t=new fo(16777215,14211295,2.5);e.scene.add(t);let i=new uo,n=[],s=new Map,a=new Fr({color:15066602,toneMapped:!1});for(let y=0;y<7;y++){let S=new hr;e.scene.add(S);let b=Fd(new Br(1,1,.055),a,S,[0,0,-.04]),E=Fd(new kr(1,1),Nw(),S,[0,-.09,-.1]),v=Fd(new kr(1,1),new Fr({color:15066602,toneMapped:!1}),S);n.push({group:S,frame:b,screen:v,shadow:E,index:-1})}function o(y,S){y.map!==S&&(y.map=S,y.color.set(S?16777215:15066602),y.needsUpdate=!0)}function l(){if(!e.visible||Wi||e.failed)return;let y=Math.round(as/.58),S=new Set;for(let b=Math.max(0,y-4);b<=Math.min(xt.length-1,y+4);b++)S.add(xt[b].id);for(let[b,E]of s)S.has(b)||(E.texture?.dispose(),s.delete(b));for(let b=Math.max(0,y-4);b<=Math.min(xt.length-1,y+4);b++){let E=xt[b];if(s.has(E.id))continue;let v={texture:null};s.set(E.id,v),i.load(E.exhibitionPoster||(E.video?E.thumbnail:E.full),T=>{if(s.get(E.id)!==v){T.dispose();return}T.colorSpace=ui,T.anisotropy=Math.min(8,e.renderer.capabilities.getMaxAnisotropy()),v.texture=T,hi()},void 0,()=>hi())}}e.onVisible=()=>{l(),e.queueVideo()};let c=document.createElement("video");c.muted=!0,c.defaultMuted=!0,c.playsInline=!0,c.loop=!0,c.preload="none",e.video=c;let h=-1,d=null,u=0;function f(){c.pause();for(let y of n)y.screen.material.map===d&&o(y.screen.material,s.get(xt[y.index]?.id)?.texture||null);d?.dispose(),d=null,h=-1}e.pauseMedia=()=>{clearTimeout(u),f(),c.removeAttribute("src"),c.load()},e.resetCatalog=()=>{e.pauseMedia(),s.forEach(y=>y.texture?.dispose()),s.clear(),as=0,n.forEach(y=>{y.index=-1,y.group.visible=!1})},e.queueVideo=()=>{clearTimeout(u),!(!e.visible||Wi||Pw||document.hidden||e.failed||gt("viewer").open)&&(u=setTimeout(()=>{let y=xt[nr];if(!y.video){f(),e.animate=!1,hi();return}if(h===nr&&d){c.play().catch(()=>{}),hi();return}f(),h=nr,c.src=y.exhibitionPreview||y.preview,c.load(),c.play().catch(()=>{})},180))},c.addEventListener("loadeddata",()=>{!e.visible||Wi||document.hidden||h!==nr||gt("viewer").open||(d?.dispose(),d=new oo(c),d.colorSpace=ui,c.play().then(hi).catch(hi))}),c.addEventListener("error",()=>{f(),h=-1,hi()});let g=new go,_=new ot;function m(y){let S=e.container.getBoundingClientRect();_.set((y.clientX-S.left)/S.width*2-1,-(y.clientY-S.top)/S.height*2+1),g.setFromCamera(_,e.camera);let b=g.intersectObjects(n.filter(E=>E.group.visible).map(E=>E.screen))[0];b&&qd(xt[b.object.userData.index].id,gt("exhibitOpen"))}Fw(e.container,m);let p=400,w=0;e.measureFrame=()=>{let y=e.container.getBoundingClientRect(),S=r.querySelector(".exhibition-heading").getBoundingClientRect(),b=r.querySelector(".exhibition-bottom").getBoundingClientRect(),E=S.bottom-y.top+28,v=b.top-y.top-32;p=Math.max(70,v-E),w=(E+v)/2-y.height/2,hi()},e.onResize=e.measureFrame,e.measureFrame();let C=-1;return e.update=(y,S)=>{as=F_,e.animate=!c.paused;let b=Math.round(as/.58),E=ll(),v=Od.matches?innerHeight<760?68:58:innerHeight<760?56:48,T=e.container.clientHeight/(2*Math.tan(Eo.degToRad(v/2))*6.2);b!==C&&(l(),C=b),n.forEach((A,D)=>{let I=b+D-3,k=xt[I];if(A.group.visible=!!k,!k)return;if(A.index!==I){A.index=I,A.screen.userData.index=I;let K=k.width/k.height,X=K>1?4.4:2.25,R=X/K;A.frame.scale.set(X+.018,R+.018,1),A.screen.scale.set(X,R,1),A.shadow.scale.set(X*1.4,R*1.4,1)}let L=(I*.58-as)*E;A.group.position.set(Math.sin(L)*8,-.12,-Math.cos(L)*8),A.group.rotation.y=-L;let O=1-Eo.smoothstep(Math.abs(I-as/.58),.08,1.1),q=Math.min(Od.matches?1.3:1.75,p/(A.screen.scale.y*T),e.container.clientWidth*.92/(A.screen.scale.x*T));A.group.scale.setScalar(q*Bd(.62,1,O));let z=s.get(k.id)?.texture||null;o(A.screen.material,I===h&&d?d:z),A.shadow.material.uniforms.strength.value=Bd(.03,.23,O)}),e.camera.position.set(0,.25+w/T+zd.y*.025,-1.8),e.camera.lookAt(0,-.12+w/T,-8),e.camera.fov=v,e.camera.updateProjectionMatrix()},Kh(0),e}function Yh(r){r=Wa(r),as=r*(xt.length-1)*.58,rr&&!Wi&&(Qi.scrollTop=Bd(rr.start,rr.end,r),Je.update()),Kh(r)}var os={progress:0},cl=0,Gd=0,Fn=null,ls=null,Zh=!1;function Bs(){clearTimeout(cl),clearTimeout(Gd),Fn=null,ls=null,xr.killTweensOf(os)}function Hd(r){clearTimeout(cl),dispatchEvent(new Event("blink:scroll-control")),r=Wa(r,0,xt.length-1);let e=r/(xt.length-1),t=Math.abs(r-nr)>3;ls=e,xr.killTweensOf(os),os.progress=mi,t&&(as=e*(xt.length-1)*.58);let i=Math.abs(e-mi)*(xt.length-1);xr.to(os,{progress:e,duration:Wi||t?0:Wa(.17+.14*Math.sqrt(i),.18,.34),ease:"power3.out",onUpdate:()=>Yh(os.progress),onComplete:()=>{ls=null,Yh(e)}})}function hl(r){Bs(),Hd(r)}function Wd(){return rr&&!Wi&&!gt("viewer").open&&Qi.scrollTop>=rr.start-1&&Qi.scrollTop<=rr.end+1}Qi.addEventListener("wheel",r=>{if(r.ctrlKey||r.target.closest("input,textarea,select")||!Wd()){Bs();return}let e=Math.abs(r.deltaX)>Math.abs(r.deltaY),t=Wa((e?r.deltaX*ll():r.deltaY)*(r.deltaMode===1?20:r.deltaMode===2?Qi.clientHeight:1),-180,180);if(!t)return;let i=performance.now(),n=Math.sign(t),s=Fn?i-Fn.last:1/0,a=!Fn||s>170,o=Math.abs(t),l=Fn,c=!a&&l.committed&&n===l.sign&&i-l.committedAt>120&&(s>65&&o>=50&&o>=l.magnitude*.9||o>Math.max(18,l.magnitude*1.65)&&l.magnitude<35);if((a||c)&&(mi<1e-4&&t<0||mi>.9999&&t>0)){Bs();return}if(r.preventDefault(),r.stopImmediatePropagation(),dispatchEvent(new Event("blink:scroll-control")),a||n!==Fn.sign){let d=(ls??mi)*(xt.length-1);Fn={anchor:Math.round(d),sign:n,total:0,committed:!1,last:i,magnitude:0,committedAt:0}}let h=Fn;c&&(h.anchor=Math.round((ls??mi)*(xt.length-1)),h.total=0,h.committed=!1),h.last=i,h.total+=o,h.magnitude=o,clearTimeout(cl),clearTimeout(Gd),h.committed||(h.total>=18?(h.committed=!0,h.committedAt=i,Hd(h.anchor+n)):(xr.killTweensOf(os),ls=null,Yh(mi+t/420/(xt.length-1)))),Gd=setTimeout(()=>{let d=Fn;Fn=null,d&&!d.committed&&Hd(Math.round(mi*(xt.length-1)))},175)},{capture:!0,passive:!1});Qi.addEventListener("scroll",()=>{Zh||Qi.dataset.navigating||!Wd()||Fn||xr.isTweening(os)||(clearTimeout(cl),cl=setTimeout(()=>{if(!Wd()||Zh||Qi.dataset.navigating)return;let r=mi*(xt.length-1);Math.abs(r-Math.round(r))>.006&&hl(Math.round(r))},120))},{passive:!0});addEventListener("blink:page-navigation",Bs);addEventListener("pointerdown",()=>{Zh=!0,Bs()},{capture:!0,passive:!0});for(let r of["pointerup","pointercancel"])addEventListener(r,()=>{Zh=!1},{capture:!0,passive:!0});addEventListener("keydown",Bs,{capture:!0,passive:!0});function Fw(r,e){let t=null;r.addEventListener("pointerdown",n=>{!n.isPrimary||n.button!==0||Wi||(xr.killTweensOf(os),t={id:n.pointerId,x:n.clientX,y:n.clientY,start:mi,index:nr,axis:null,delta:0,lastX:n.clientX,lastTime:performance.now(),velocity:0})}),r.addEventListener("pointermove",n=>{if(!t||n.pointerId!==t.id)return;let s=n.clientX-t.x,a=n.clientY-t.y;if(!t.axis&&Math.hypot(s,a)>5&&(t.axis=Math.abs(s)>Math.abs(a)*1.15?"x":"y",t.axis==="x"&&(r.setPointerCapture(n.pointerId),r.classList.add("is-dragging"))),t.axis!=="x")return;n.cancelable&&n.preventDefault(),t.delta=-s*ll();let o=performance.now();t.velocity=-(n.clientX-t.lastX)*ll()/Math.max(1,o-t.lastTime),t.lastX=n.clientX,t.lastTime=o;let l=Math.max(240,Math.min(r.clientWidth*.65,650));Yh(t.start+t.delta/l/(xt.length-1))},{passive:!1});function i(n,s){if(!t||n.pointerId!==t.id)return;let a=t;if(t=null,r.classList.remove("is-dragging"),r.hasPointerCapture(n.pointerId)&&r.releasePointerCapture(n.pointerId),a.axis==="x"){let o=Math.round(mi*(xt.length-1)),l=performance.now()-a.lastTime<100&&Math.abs(a.velocity)>.45;!s&&(Math.abs(a.delta)>Math.max(44,r.clientWidth*.07)||l)&&o===a.index&&(o+=Math.sign(a.delta)),hl(o)}else!s&&!a.axis&&Math.hypot(n.clientX-a.x,n.clientY-a.y)<8&&e(n)}r.addEventListener("pointerup",n=>i(n,!1)),r.addEventListener("pointercancel",n=>i(n,!0)),r.addEventListener("lostpointercapture",n=>{n.target===r&&i(n,!0)}),r.addEventListener("dragstart",n=>n.preventDefault())}gt("exhibitOpen").addEventListener("click",()=>qd(xt[nr].id,gt("exhibitOpen")));gt("exhibitPrev").addEventListener("click",()=>hl(Math.round((ls??mi)*(xt.length-1))-1));gt("exhibitNext").addEventListener("click",()=>hl(Math.round((ls??mi)*(xt.length-1))+1));gt("exhibitOpen").addEventListener("keydown",r=>{(r.key==="ArrowRight"||r.key==="ArrowLeft")&&(r.preventDefault(),hl(nr+(r.key==="ArrowRight"?1:-1)*ll()))});function Jh(){Bs(),rr?.kill(),rr=null,On.style.setProperty("--exhibit-distance",`${(xt.length-1)*Wa(innerHeight*.5,360,540)}px`),On.classList.toggle("is-scrollable",!Wi&&On.classList.contains("has-webgl")),!Wi&&On.classList.contains("has-webgl")?rr=Je.create({trigger:On,scroller:Qi,start:()=>`top top+=${gt("mainNav").offsetHeight}`,end:"bottom bottom",onUpdate:r=>Kh(r.progress)}):Bn.forEach(r=>r.pauseMedia?.()),$h(),hi()}function Ow(){if(!C_){C_=!0;try{Uw()}catch(r){console.warn("BLINK: showing ordinary exhibition links because WebGL is unavailable.",r.message)}}}function O_(){On.classList.toggle("is-reduced",Wi),D_(),Wi||Ow(),Jh(),Wi||Bn.filter(r=>r.visible).forEach(r=>r.onVisible?.())}addEventListener("blink:motion",r=>{let e=gt("mainNav").offsetHeight,t=[...Qi.querySelectorAll(":scope > section")].find(n=>n.getBoundingClientRect().bottom>e),i=t?.getBoundingClientRect().top;Wi=r.detail.paused,O_(),t===On?Qi.scrollTop=On.offsetTop-e:t&&(Qi.scrollTop+=t.getBoundingClientRect().top-i)});Od.addEventListener("change",()=>{Bn.forEach(r=>r.resize()),Jh()});addEventListener("pagehide",r=>{r.persisted||(cancelAnimationFrame(wr),rr?.kill(),Bn.forEach(e=>e.dispose()))});addEventListener("pageshow",$h);O_();Kh(0);location.hash&&requestAnimationFrame(()=>{let r=document.getElementById(location.hash.slice(1));r&&r.closest("#scroller")&&(Qi.scrollTop=r.offsetTop-gt("mainNav").offsetHeight)});document.fonts.ready.then($h);
/*! For license information please see experience.js.LEGAL.txt */
