// threejs.org/license
(function(h,Fa){"object"===typeof exports&&"undefined"!==typeof module?Fa(exports):"function"===typeof define&&define.amd?define(["exports"],Fa):(h=h||self,Fa(h.THREE={}))})(this,function(h){function Fa(){}function x(a,b){this.x=a||0;this.y=b||0}function Da(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function n(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function za(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}
function T(a,b,c,d,e,f,g,k,l,m){Object.defineProperty(this,"id",{value:mj++});this.uuid=O.generateUUID();this.name="";this.image=void 0!==a?a:T.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:T.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.internalFormat=null;this.type=void 0!==k?k:1009;this.offset=new x(0,0);this.repeat=new x(1,1);
this.center=new x(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new za;this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function S(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function va(a,b,c){this.width=a;this.height=b;this.scissor=new S(0,0,a,b);this.scissorTest=!1;this.viewport=new S(0,0,a,b);c=c||{};this.texture=new T(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,
c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.image={};this.texture.image.width=a;this.texture.image.height=b;this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Zf(a,b,c){va.call(this,a,b,c);this.samples=
4}function P(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function Ub(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||Ub.DefaultOrder}function $f(){this.mask=1}function D(){Object.defineProperty(this,"id",{value:nj++});this.uuid=O.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=D.DefaultUp.clone();var a=new n,b=new Ub,c=new Da,
d=new n(1,1,1);b._onChange(function(){c.setFromEuler(b,!1)});c._onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new P},normalMatrix:{value:new za}});this.matrix=new P;this.matrixWorld=new P;this.matrixAutoUpdate=D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=
!1;this.layers=new $f;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}}function pb(){D.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.environment=this.background=null;this.autoUpdate=!0;"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Sa(a,b){this.min=void 0!==a?a:new n(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new n(-Infinity,-Infinity,
-Infinity)}function ag(a,b,c,d,e){var f;var g=0;for(f=a.length-3;g<=f;g+=3){Vb.fromArray(a,g);var k=e.x*Math.abs(Vb.x)+e.y*Math.abs(Vb.y)+e.z*Math.abs(Vb.z),l=b.dot(Vb),m=c.dot(Vb),v=d.dot(Vb);if(Math.max(-Math.max(l,m,v),Math.min(l,m,v))>k)return!1}return!0}function qb(a,b){this.center=void 0!==a?a:new n;this.radius=void 0!==b?b:0}function Wb(a,b){this.origin=void 0!==a?a:new n;this.direction=void 0!==b?b:new n(0,0,-1)}function Ta(a,b){this.normal=void 0!==a?a:new n(1,0,0);this.constant=void 0!==
b?b:0}function ma(a,b,c){this.a=void 0!==a?a:new n;this.b=void 0!==b?b:new n;this.c=void 0!==c?c:new n}function y(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function bg(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a}function cg(a){return.04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function dg(a){return.0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055}function Dc(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&
d.isVector3?d:new n;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new y;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function L(){Object.defineProperty(this,"id",{value:oj++});this.uuid=O.generateUUID();this.name="";this.type="Material";this.fog=!0;this.blending=1;this.side=0;this.vertexTangents=this.flatShading=!1;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=
this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.stencilWriteMask=255;this.stencilFunc=519;this.stencilRef=0;this.stencilFuncMask=255;this.stencilZPass=this.stencilZFail=this.stencilFail=7680;this.stencilWrite=!1;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=
!1;this.toneMapped=this.visible=!0;this.userData={};this.version=0}function Oa(a){L.call(this);this.type="MeshBasicMaterial";this.color=new y(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphTargets=this.skinning=!1;this.setValues(a)}
function K(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0}function Ad(a,b,c){K.call(this,new Int8Array(a),b,c)}function Bd(a,b,c){K.call(this,new Uint8Array(a),b,c)}function Cd(a,b,c){K.call(this,new Uint8ClampedArray(a),b,c)}function Dd(a,b,c){K.call(this,new Int16Array(a),
b,c)}function Xb(a,b,c){K.call(this,new Uint16Array(a),b,c)}function Ed(a,b,c){K.call(this,new Int32Array(a),b,c)}function Yb(a,b,c){K.call(this,new Uint32Array(a),b,c)}function C(a,b,c){K.call(this,new Float32Array(a),b,c)}function Fd(a,b,c){K.call(this,new Float64Array(a),b,c)}function vh(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=
this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function wh(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function G(){Object.defineProperty(this,"id",{value:pj+=2});this.uuid=O.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.morphTargetsRelative=!1;this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};
this.userData={}}function ca(a,b){D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new Oa({color:16777215*Math.random()});this.updateMorphTargets()}function xh(a,b,c,d,e,f,g,k){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,k):d.intersectTriangle(e,f,g,2!==b.side,k)))return null;Je.copy(k);Je.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(Je);return b<c.near||b>c.far?null:{distance:b,point:Je.clone(),object:a}}function Ke(a,b,c,d,e,f,g,k,l,m,v,p){Zb.fromBufferAttribute(e,
m);$b.fromBufferAttribute(e,v);ac.fromBufferAttribute(e,p);e=a.morphTargetInfluences;if(b.morphTargets&&f&&e){Le.set(0,0,0);Me.set(0,0,0);Ne.set(0,0,0);for(var q=0,t=f.length;q<t;q++){var h=e[q],u=f[q];0!==h&&(eg.fromBufferAttribute(u,m),fg.fromBufferAttribute(u,v),gg.fromBufferAttribute(u,p),g?(Le.addScaledVector(eg,h),Me.addScaledVector(fg,h),Ne.addScaledVector(gg,h)):(Le.addScaledVector(eg.sub(Zb),h),Me.addScaledVector(fg.sub($b),h),Ne.addScaledVector(gg.sub(ac),h)))}Zb.add(Le);$b.add(Me);ac.add(Ne)}if(a=
xh(a,b,c,d,Zb,$b,ac,Gd))k&&(Ec.fromBufferAttribute(k,m),Fc.fromBufferAttribute(k,v),Gc.fromBufferAttribute(k,p),a.uv=ma.getUV(Gd,Zb,$b,ac,Ec,Fc,Gc,new x)),l&&(Ec.fromBufferAttribute(l,m),Fc.fromBufferAttribute(l,v),Gc.fromBufferAttribute(l,p),a.uv2=ma.getUV(Gd,Zb,$b,ac,Ec,Fc,Gc,new x)),k=new Dc(m,v,p),ma.getNormal(Zb,$b,ac,k.normal),a.face=k;return a}function M(){Object.defineProperty(this,"id",{value:qj+=2});this.uuid=O.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=
[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function bc(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||
e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}function na(a){for(var b={},c=0;c<a.length;c++){var d=bc(a[c]),e;for(e in d)b[e]=d[e]}return b}function oa(a){L.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;
this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function db(){D.call(this);
this.type="Camera";this.matrixWorldInverse=new P;this.projectionMatrix=new P;this.projectionMatrixInverse=new P}function pa(a,b,c,d){db.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Hc(a,b,c,d){D.call(this);this.type="CubeCamera";var e=new pa(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new n(1,
0,0));this.add(e);var f=new pa(90,1,a,b);f.up.set(0,-1,0);f.lookAt(new n(-1,0,0));this.add(f);var g=new pa(90,1,a,b);g.up.set(0,0,1);g.lookAt(new n(0,1,0));this.add(g);var k=new pa(90,1,a,b);k.up.set(0,0,-1);k.lookAt(new n(0,-1,0));this.add(k);var l=new pa(90,1,a,b);l.up.set(0,-1,0);l.lookAt(new n(0,0,1));this.add(l);var m=new pa(90,1,a,b);m.up.set(0,-1,0);m.lookAt(new n(0,0,-1));this.add(m);d=d||{format:1022,magFilter:1006,minFilter:1006};this.renderTarget=new Eb(c,c,d);this.renderTarget.texture.name=
"CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=a.getRenderTarget(),d=this.renderTarget,p=d.texture.generateMipmaps;d.texture.generateMipmaps=!1;a.setRenderTarget(d,0);a.render(b,e);a.setRenderTarget(d,1);a.render(b,f);a.setRenderTarget(d,2);a.render(b,g);a.setRenderTarget(d,3);a.render(b,k);a.setRenderTarget(d,4);a.render(b,l);d.texture.generateMipmaps=p;a.setRenderTarget(d,5);a.render(b,m);a.setRenderTarget(c)};this.clear=function(a,b,c,d){for(var e=a.getRenderTarget(),
f=this.renderTarget,g=0;6>g;g++)a.setRenderTarget(f,g),a.clear(b,c,d);a.setRenderTarget(e)}}function Eb(a,b,c){va.call(this,a,b,c)}function cc(a,b,c,d,e,f,g,k,l,m,v,p){T.call(this,null,f,g,k,l,m,d,e,v,p);this.image={data:a||null,width:b||1,height:c||1};this.magFilter=void 0!==l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1;this.needsUpdate=!0}function Hd(a,b,c,d,e,f){this.planes=[void 0!==a?a:new Ta,void 0!==b?b:new Ta,void 0!==c?c:new Ta,void 0!==
d?d:new Ta,void 0!==e?e:new Ta,void 0!==f?f:new Ta]}function yh(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a))}var b=null,c=!1,d=null;return{start:function(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0)},stop:function(){c=!1},setAnimationLoop:function(a){d=a},setContext:function(a){b=a}}}function rj(a){function b(b,c){var d=b.array,e=b.usage,k=a.createBuffer();a.bindBuffer(c,k);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?
console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:k,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,version:b.version}}var c=new WeakMap;return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return c.get(a)},remove:function(b){b.isInterleavedBufferAttribute&&
(b=b.data);var d=c.get(b);d&&(a.deleteBuffer(d.buffer),c.delete(b))},update:function(d,e){d.isInterleavedBufferAttribute&&(d=d.data);var f=c.get(d);if(void 0===f)c.set(d,b(d,e));else if(f.version<d.version){var g=d.array,k=d.updateRange;a.bindBuffer(e,f.buffer);-1===k.count?a.bufferSubData(e,0,g):(a.bufferSubData(e,k.offset*g.BYTES_PER_ELEMENT,g.subarray(k.offset,k.offset+k.count)),k.count=-1);f.version=d.version}}}}function Id(a,b,c,d){M.call(this);this.type="PlaneGeometry";this.parameters={width:a,
height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new dc(a,b,c,d));this.mergeVertices()}function dc(a,b,c,d){G.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,k=d+1,l=a/c,m=b/d,v=[],p=[],q=[],h=[];for(a=0;a<k;a++){var r=a*m-f;for(b=0;b<g;b++)p.push(b*l-e,-r,0),q.push(0,0,1),h.push(b/c),h.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),
f=b+1+g*(a+1),k=b+1+g*a,v.push(b+g*a,e,k),v.push(e,f,k);this.setIndex(v);this.setAttribute("position",new C(p,3));this.setAttribute("normal",new C(q,3));this.setAttribute("uv",new C(h,2))}function sj(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,a.g,a.b,c,d)}var f=new y(0),g=0,k,l,m=null,v=0;return{getClearColor:function(){return f},setClearColor:function(a,b){f.set(a);g=void 0!==b?b:1;e(f,g)},getClearAlpha:function(){return g},setClearAlpha:function(a){g=a;e(f,g)},render:function(b,d,h,r){d=
d.background;h=a.xr;(h=h.getSession&&h.getSession())&&"additive"===h.environmentBlendMode&&(d=null);null===d?(e(f,g),m=null,v=0):d&&d.isColor&&(e(d,1),r=!0,m=null,v=0);(a.autoClear||r)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||d.isWebGLRenderTargetCube||306===d.mapping)){void 0===l&&(l=new ca(new Jd(1,1,1),new oa({type:"BackgroundCubeMaterial",uniforms:bc(eb.cube.uniforms),vertexShader:eb.cube.vertexShader,fragmentShader:eb.cube.fragmentShader,side:1,depthTest:!1,
depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(l));r=d.isWebGLRenderTargetCube?d.texture:d;l.material.uniforms.envMap.value=r;l.material.uniforms.flipEnvMap.value=r.isCubeTexture?-1:1;if(m!==d||v!==r.version)l.material.needsUpdate=!0,m=d,v=r.version;b.unshift(l,l.geometry,
l.material,0,0,null)}else if(d&&d.isTexture){void 0===k&&(k=new ca(new dc(2,2),new oa({type:"BackgroundMaterial",uniforms:bc(eb.background.uniforms),vertexShader:eb.background.vertexShader,fragmentShader:eb.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),k.geometry.deleteAttribute("normal"),Object.defineProperty(k.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(k));k.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();k.material.uniforms.uvTransform.value.copy(d.matrix);
if(m!==d||v!==d.version)k.material.needsUpdate=!0,m=d,v=d.version;b.unshift(k,k.geometry,k.material,0,0,null)}}}}function tj(a,b,c,d){var e=d.isWebGL2,f;this.setMode=function(a){f=a};this.render=function(b,d){a.drawArrays(f,b,d);c.update(d,f)};this.renderInstances=function(d,k,l,m){if(0!==m){if(e){d=a;var g="drawArraysInstanced"}else if(d=b.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",null===d){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
return}d[g](f,k,l,m);c.update(l,f,m)}}}function uj(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp"}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext||"undefined"!==typeof WebGL2ComputeRenderingContext&&
a instanceof WebGL2ComputeRenderingContext,g=void 0!==c.precision?c.precision:"highp",k=d(g);k!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",k,"instead."),g=k);c=!0===c.logarithmicDepthBuffer;k=a.getParameter(34930);var l=a.getParameter(35660),m=a.getParameter(3379),v=a.getParameter(34076),p=a.getParameter(34921),q=a.getParameter(36347),h=a.getParameter(36348),r=a.getParameter(36349),u=0<l,n=f||!!b.get("OES_texture_float"),w=u&&n,B=f?a.getParameter(36183):0;return{isWebGL2:f,
getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:k,maxVertexTextures:l,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:q,maxVaryings:h,maxFragmentUniforms:r,vertexTextures:u,floatFragmentTextures:n,floatVertexTextures:w,maxSamples:B}}function vj(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=
0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)k.copy(a[e]).applyMatrix4(b,l),k.normal.toArray(g,d),g[d+3]=k.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,k=new Ta,l=new za,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=
0;this.init=function(a,c,g){var k=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return k};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,k,l,h,r,u){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var p=4*l,v=r.clippingState||null;m.value=v;v=b(c,h,p,u);for(c=0;c!==p;++c)v[c]=d[c];r.clippingState=v;this.numIntersection=k?this.numPlanes:0;this.numPlanes+=l}}}function wj(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];
switch(c){case "WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||
a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function xj(a,b,c){function d(a){var e=a.target;a=f.get(e);null!==a.index&&b.remove(a.index);for(var k in a.attributes)b.remove(a.attributes[k]);e.removeEventListener("dispose",
d);f.delete(e);if(k=g.get(a))b.remove(k),g.delete(a);c.memory.geometries--}function e(a){var c=[],d=a.index,e=a.attributes.position;if(null!==d){var f=d.array;d=d.version;e=0;for(var k=f.length;e<k;e+=3){var h=f[e+0],r=f[e+1],u=f[e+2];c.push(h,r,r,u,u,h)}}else for(f=e.array,d=e.version,e=0,k=f.length/3-1;e<k;e+=3)h=e+0,r=e+1,u=e+2,c.push(h,r,r,u,u,h);c=new (65535<wh(c)?Yb:Xb)(c,1);c.version=d;b.update(c,34963);(f=g.get(a))&&b.remove(f);g.set(a,c)}var f=new WeakMap,g=new WeakMap;return{get:function(a,
b){var e=f.get(b);if(e)return e;b.addEventListener("dispose",d);b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new G).setFromObject(a)),e=b._bufferGeometry);f.set(b,e);c.memory.geometries++;return e},update:function(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,34963);for(var e in d)b.update(d[e],34962);a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++)b.update(c[d],34962)}},getWireframeAttribute:function(a){var b=g.get(a);if(b){var c=
a.index;null!==c&&b.version<c.version&&e(a)}else e(a);return g.get(a)}}}function yj(a,b,c,d){var e=d.isWebGL2,f,g,k;this.setMode=function(a){f=a};this.setIndex=function(a){g=a.type;k=a.bytesPerElement};this.render=function(b,d){a.drawElements(f,d,g,b*k);c.update(d,f)};this.renderInstances=function(d,m,v,p){if(0!==p){if(e){d=a;var l="drawElementsInstanced"}else if(d=b.get("ANGLE_instanced_arrays"),l="drawElementsInstancedANGLE",null===d){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
return}d[l](f,v,g,m*k,p);c.update(v,f,p)}}}function zj(a){var b={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:b,programs:null,autoReset:!0,reset:function(){b.frame++;b.calls=0;b.triangles=0;b.points=0;b.lines=0},update:function(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",
d)}}}}function Aj(a,b){return Math.abs(b[1])-Math.abs(a[1])}function Bj(a){var b={},c=new Float32Array(8);return{update:function(d,e,f,g){var k=d.morphTargetInfluences,l=void 0===k?0:k.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<l;m++)d[m]=[m,0];b[e.id]=d}var v=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<l;m++){var p=d[m];0!==p[1]&&(v&&e.deleteAttribute("morphTarget"+m),f&&e.deleteAttribute("morphNormal"+m))}for(m=0;m<l;m++)p=d[m],p[0]=m,
p[1]=k[m];d.sort(Aj);for(m=k=0;8>m;m++){if(p=d[m])if(l=p[0],p=p[1]){v&&e.setAttribute("morphTarget"+m,v[l]);f&&e.setAttribute("morphNormal"+m,f[l]);c[m]=p;k+=p;continue}c[m]=0}e=e.morphTargetsRelative?1:1-k;g.getUniforms().setValue(a,"morphTargetBaseInfluence",e);g.getUniforms().setValue(a,"morphTargetInfluences",c)}}}function Cj(a,b,c,d){var e={};return{update:function(a){var f=d.render.frame,k=a.geometry,l=b.get(a,k);e[l.id]!==f&&(k.isGeometry&&l.updateFromObject(a),b.update(l),e[l.id]=f);a.isInstancedMesh&&
c.update(a.instanceMatrix,34962);return l},dispose:function(){e={}}}}function rb(a,b,c,d,e,f,g,k,l,m){a=void 0!==a?a:[];T.call(this,a,void 0!==b?b:301,c,d,e,f,void 0!==g?g:1022,k,l,m);this.flipY=!1}function Ic(a,b,c,d){T.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0}function Jc(a,b,c,d){T.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};
this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0}function Kc(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=zh[e];void 0===f&&(f=new Float32Array(e),zh[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function Pa(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function Ia(a,b){for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}function Ah(a,b){var c=Bh[b];void 0===
c&&(c=new Int32Array(b),Bh[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocateTextureUnit();return c}function Dj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b)}function Ej(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y}else Pa(c,b)||(a.uniform2fv(this.addr,b),Ia(c,b))}function Fj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z}else if(void 0!==
b.r){if(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b}else Pa(c,b)||(a.uniform3fv(this.addr,b),Ia(c,b))}function Gj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w}else Pa(c,b)||(a.uniform4fv(this.addr,b),Ia(c,b))}function Hj(a,b){var c=this.cache,d=b.elements;void 0===d?Pa(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),Ia(c,b)):Pa(c,d)||
(Ch.set(d),a.uniformMatrix2fv(this.addr,!1,Ch),Ia(c,d))}function Ij(a,b){var c=this.cache,d=b.elements;void 0===d?Pa(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),Ia(c,b)):Pa(c,d)||(Dh.set(d),a.uniformMatrix3fv(this.addr,!1,Dh),Ia(c,d))}function Jj(a,b){var c=this.cache,d=b.elements;void 0===d?Pa(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),Ia(c,b)):Pa(c,d)||(Eh.set(d),a.uniformMatrix4fv(this.addr,!1,Eh),Ia(c,d))}function Kj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,
e),d[0]=e);c.safeSetTexture2D(b||Fh,e)}function Lj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2DArray(b||Mj,e)}function Nj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||Oj,e)}function Pj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTextureCube(b||Gh,e)}function Qj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,
b),c[0]=b)}function Rj(a,b){var c=this.cache;Pa(c,b)||(a.uniform2iv(this.addr,b),Ia(c,b))}function Sj(a,b){var c=this.cache;Pa(c,b)||(a.uniform3iv(this.addr,b),Ia(c,b))}function Tj(a,b){var c=this.cache;Pa(c,b)||(a.uniform4iv(this.addr,b),Ia(c,b))}function Uj(a){switch(a){case 5126:return Dj;case 35664:return Ej;case 35665:return Fj;case 35666:return Gj;case 35674:return Hj;case 35675:return Ij;case 35676:return Jj;case 35678:case 36198:return Kj;case 35679:return Nj;case 35680:return Pj;case 36289:return Lj;
case 5124:case 35670:return Qj;case 35667:case 35671:return Rj;case 35668:case 35672:return Sj;case 35669:case 35673:return Tj}}function Vj(a,b){a.uniform1fv(this.addr,b)}function Wj(a,b){a.uniform1iv(this.addr,b)}function Xj(a,b){a.uniform2iv(this.addr,b)}function Yj(a,b){a.uniform3iv(this.addr,b)}function Zj(a,b){a.uniform4iv(this.addr,b)}function ak(a,b){b=Kc(b,this.size,2);a.uniform2fv(this.addr,b)}function bk(a,b){b=Kc(b,this.size,3);a.uniform3fv(this.addr,b)}function ck(a,b){b=Kc(b,this.size,
4);a.uniform4fv(this.addr,b)}function dk(a,b){b=Kc(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,b)}function ek(a,b){b=Kc(b,this.size,9);a.uniformMatrix3fv(this.addr,!1,b)}function fk(a,b){b=Kc(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,b)}function gk(a,b,c){var d=b.length,e=Ah(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTexture2D(b[a]||Fh,e[a])}function hk(a,b,c){var d=b.length,e=Ah(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTextureCube(b[a]||Gh,e[a])}function ik(a){switch(a){case 5126:return Vj;
case 35664:return ak;case 35665:return bk;case 35666:return ck;case 35674:return dk;case 35675:return ek;case 35676:return fk;case 35678:case 36198:case 36298:case 36306:return gk;case 35680:case 36300:case 36308:return hk;case 5124:case 35670:return Wj;case 35667:case 35671:return Xj;case 35668:case 35672:return Yj;case 35669:case 35673:return Zj}}function jk(a,b,c){this.id=a;this.addr=c;this.cache=[];this.setValue=Uj(b.type)}function Hh(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;
this.setValue=ik(b.type)}function Ih(a){this.id=a;this.seq=[];this.map={}}function Fb(a,b){this.seq=[];this.map={};for(var c=a.getProgramParameter(b,35718),d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,k=e.name,l=k.length;for(hg.lastIndex=0;;){var m=hg.exec(k),v=hg.lastIndex,p=m[1],h=m[3];"]"===m[2]&&(p|=0);if(void 0===h||"["===h&&v+2===l){k=g;e=void 0===h?new jk(p,e,f):new Hh(p,e,f);k.seq.push(e);k.map[e.id]=e;break}else h=g.map[p],void 0===h&&(h=new Ih(p),p=
g,g=h,p.seq.push(g),p.map[g.id]=g),g=h}}}function Jh(a,b,c){b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b}function Kh(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw Error("unsupported encoding: "+
a);}}function Lh(a,b,c){var d=a.getShaderParameter(b,35713),e=a.getShaderInfoLog(b).trim();if(d&&""===e)return"";a=a.getShaderSource(b).split("\n");for(b=0;b<a.length;b++)a[b]=b+1+": "+a[b];a=a.join("\n");return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+"\n"+e+a}function Kd(a,b){b=Kh(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }"}function kk(a,b){b=Kh(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }"}function lk(a,b){switch(b){case 1:b="Linear";break;
case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }"}function mk(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.tangentSpaceNormalMap||b.clearcoatNormalMap||b.flatShading||"physical"===b.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?
"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ld).join("\n")}function nk(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function Ld(a){return""!==a}function Mh(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,
b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows)}function Nh(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection)}function ig(a,b){a=N[b];if(void 0===a)throw Error("Can not resolve #include <"+
b+">");return a.replace(jg,ig)}function Oh(a,b,c,d){a="";for(b=parseInt(b);b<parseInt(c);b++)a+=d.replace(/\[ i \]/g,"[ "+b+" ]").replace(/UNROLLED_LOOP_INDEX/g,b);return a}function Ph(a){var b="precision "+a.precision+" float;\nprecision "+a.precision+" int;";"highp"===a.precision?b+="\n#define HIGH_PRECISION":"mediump"===a.precision?b+="\n#define MEDIUM_PRECISION":"lowp"===a.precision&&(b+="\n#define LOW_PRECISION");return b}function ok(a){var b="SHADOWMAP_TYPE_BASIC";1===a.shadowMapType?b="SHADOWMAP_TYPE_PCF":
2===a.shadowMapType?b="SHADOWMAP_TYPE_PCF_SOFT":3===a.shadowMapType&&(b="SHADOWMAP_TYPE_VSM");return b}function pk(a){var b="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:b="ENVMAP_TYPE_CUBE";break;case 306:case 307:b="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:b="ENVMAP_TYPE_EQUIREC";break;case 305:b="ENVMAP_TYPE_SPHERE"}return b}function qk(a){var b="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:case 304:b="ENVMAP_MODE_REFRACTION"}return b}function rk(a){var b=
"ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:b="ENVMAP_BLENDING_MULTIPLY";break;case 1:b="ENVMAP_BLENDING_MIX";break;case 2:b="ENVMAP_BLENDING_ADD"}return b}function sk(a,b,c,d,e,f){var g=a.getContext(),k=d.defines,l=e.vertexShader,m=e.fragmentShader,v=ok(f),p=pk(f),h=qk(f),t=rk(f),r=0<a.gammaFactor?a.gammaFactor:1,u=f.isWebGL2?"":mk(d.extensions,f,b),n=nk(k),w=g.createProgram(),B=f.numMultiviewViews;d.isRawShaderMaterial?(k=[n].filter(Ld).join("\n"),0<k.length&&(k+="\n"),b=[u,n].filter(Ld).join("\n"),
0<b.length&&(b+="\n")):(k=[Ph(f),"#define SHADER_NAME "+e.name,n,f.instancing?"#define USE_INSTANCING":"",f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+r,"#define MAX_BONES "+f.maxBones,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+h:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?
"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.normalMap&&f.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",f.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":
"",f.vertexTangents?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexUvs?"#define USE_UV":"",f.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":
"",f.shadowMapEnabled?"#define "+v:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(f.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;",
"#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;",
"\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Ld).join("\n"),b=[u,Ph(f),"#define SHADER_NAME "+e.name,n,f.alphaTest?"#define ALPHATEST "+f.alphaTest+(f.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+r,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp2?"#define FOG_EXP2":
"",f.map?"#define USE_MAP":"",f.matcap?"#define USE_MATCAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+p:"",f.envMap?"#define "+h:"",f.envMap?"#define "+t:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.normalMap&&f.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",f.normalMap&&f.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",f.clearcoatNormalMap?
"#define USE_CLEARCOAT_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.sheen?"#define USE_SHEEN":"",f.vertexTangents?"#define USE_TANGENT":"",f.vertexColors?"#define USE_COLOR":"",f.vertexUvs?"#define USE_UV":"",f.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":
"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+v:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&(f.isWebGL2||b.get("EXT_frag_depth"))?"#define USE_LOGDEPTHBUF_EXT":"",(d.extensions&&d.extensions.shaderTextureLOD||f.envMap)&&(f.isWebGL2||b.get("EXT_shader_texture_lod"))?"#define TEXTURE_LOD_EXT":
"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==f.toneMapping?"#define TONE_MAPPING":"",0!==f.toneMapping?N.tonemapping_pars_fragment:"",0!==f.toneMapping?lk("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.matcapEncoding||f.envMapEncoding||f.emissiveMapEncoding||f.lightMapEncoding?N.encodings_pars_fragment:"",f.mapEncoding?Kd("mapTexelToLinear",f.mapEncoding):"",f.matcapEncoding?Kd("matcapTexelToLinear",
f.matcapEncoding):"",f.envMapEncoding?Kd("envMapTexelToLinear",f.envMapEncoding):"",f.emissiveMapEncoding?Kd("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.lightMapEncoding?Kd("lightMapTexelToLinear",f.lightMapEncoding):"",f.outputEncoding?kk("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(Ld).join("\n"));l=l.replace(jg,ig);l=Mh(l,f);l=Nh(l,f);m=m.replace(jg,ig);m=Mh(m,f);m=Nh(m,f);l=l.replace(Qh,Oh);m=m.replace(Qh,Oh);f.isWebGL2&&
!d.isRawShaderMaterial&&(v=!1,p=/^\s*#version\s+300\s+es\s*\n/,d.isShaderMaterial&&null!==l.match(p)&&null!==m.match(p)&&(v=!0,l=l.replace(p,""),m=m.replace(p,"")),k="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+k,b=["#version 300 es\n\n#define varying in",v?"":"out highp vec4 pc_fragColor;",v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+
"\n"+b,0<B&&(k=k.replace("#version 300 es\n",["#version 300 es\n\n#extension GL_OVR_multiview2 : require","layout(num_views = "+B+") in;","#define VIEW_ID gl_ViewID_OVR"].join("\n")),k=k.replace("uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;",["uniform mat4 modelViewMatrices["+B+"];","uniform mat4 projectionMatrices["+B+"];","uniform mat4 viewMatrices["+B+"];","uniform mat3 normalMatrices["+B+"];","#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]"].join("\n")),
b=b.replace("#version 300 es\n","#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR"),b=b.replace("uniform mat4 viewMatrix;",["uniform mat4 viewMatrices["+B+"];","#define viewMatrix viewMatrices[VIEW_ID]"].join("\n"))));m=b+m;l=Jh(g,35633,k+l);m=Jh(g,35632,m);g.attachShader(w,l);g.attachShader(w,m);void 0!==d.index0AttributeName?g.bindAttribLocation(w,0,d.index0AttributeName):!0===f.morphTargets&&g.bindAttribLocation(w,0,"position");g.linkProgram(w);if(a.debug.checkShaderErrors){a=
g.getProgramInfoLog(w).trim();f=g.getShaderInfoLog(l).trim();v=g.getShaderInfoLog(m).trim();h=p=!0;if(!1===g.getProgramParameter(w,35714))p=!1,t=Lh(g,l,"vertex"),r=Lh(g,m,"fragment"),console.error("THREE.WebGLProgram: shader error: ",g.getError(),"35715",g.getProgramParameter(w,35715),"gl.getProgramInfoLog",a,t,r);else if(""!==a)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",a);else if(""===f||""===v)h=!1;h&&(this.diagnostics={runnable:p,material:d,programLog:a,vertexShader:{log:f,prefix:k},
fragmentShader:{log:v,prefix:b}})}g.deleteShader(l);g.deleteShader(m);var U;this.getUniforms=function(){void 0===U&&(U=new Fb(g,w));return U};var wa;this.getAttributes=function(){if(void 0===wa){for(var a={},b=g.getProgramParameter(w,35721),c=0;c<b;c++){var d=g.getActiveAttrib(w,c).name;a[d]=g.getAttribLocation(w,d)}wa=a}return wa};this.destroy=function(){g.deleteProgram(w);this.program=void 0};this.name=e.name;this.id=tk++;this.cacheKey=c;this.usedTimes=1;this.program=w;this.vertexShader=l;this.fragmentShader=
m;this.numMultiviewViews=B;return this}function uk(a,b,c){function d(a){if(a)a.isTexture?b=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),b=a.texture.encoding);else var b=3E3;return b}var e=[],f=c.isWebGL2,g=c.logarithmicDepthBuffer,k=c.floatVertexTextures,l=c.precision,m=c.maxVertexUniforms,v=c.vertexTextures,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",
MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},h="precision isWebGL2 supportsVertexTextures outputEncoding instancing numMultiviewViews map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");
this.getParameters=function(b,e,h,q,n,B,U){var r=q.fog;q=b.isMeshStandardMaterial?q.environment:null;q=b.envMap||q;var t=p[b.type];if(U.isSkinnedMesh){var u=U.skeleton.bones;if(k)u=1024;else{var z=Math.min(Math.floor((m-20)/4),u.length);z<u.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+u.length+" bones. This GPU supports "+z+"."),u=0):u=z}}else u=0;null!==b.precision&&(l=c.getMaxPrecision(b.precision),l!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",
l,"instead."));z=a.getRenderTarget();return{isWebGL2:f,shaderID:t,precision:l,instancing:!0===U.isInstancedMesh,supportsVertexTextures:v,numMultiviewViews:z&&z.isWebGLMultiviewRenderTarget?z.numViews:0,outputEncoding:null!==z?d(z.texture):a.outputEncoding,map:!!b.map,mapEncoding:d(b.map),matcap:!!b.matcap,matcapEncoding:d(b.matcap),envMap:!!q,envMapMode:q&&q.mapping,envMapEncoding:d(q),envMapCubeUV:!!q&&(306===q.mapping||307===q.mapping),lightMap:!!b.lightMap,lightMapEncoding:d(b.lightMap),aoMap:!!b.aoMap,
emissiveMap:!!b.emissiveMap,emissiveMapEncoding:d(b.emissiveMap),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:1===b.normalMapType,tangentSpaceNormalMap:0===b.normalMapType,clearcoatNormalMap:!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,sheen:!!b.sheen,combine:b.combine,vertexTangents:b.normalMap&&b.vertexTangents,vertexColors:b.vertexColors,
vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.displacementMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap)&&!!b.displacementMap,fog:!!r,useFog:b.fog,fogExp2:r&&r.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:g,skinning:b.skinning&&0<u,maxBones:u,
useVertexTexture:k,morphTargets:b.morphTargets,morphNormals:b.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,numSpotLights:e.spot.length,numRectAreaLights:e.rectArea.length,numHemiLights:e.hemi.length,numDirLightShadows:e.directionalShadowMap.length,numPointLightShadows:e.pointShadowMap.length,numSpotLightShadows:e.spotShadowMap.length,numClippingPlanes:n,numClipIntersection:B,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&
0<h.length,shadowMapType:a.shadowMap.type,toneMapping:b.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,alphaTest:b.alphaTest,doubleSided:2===b.side,flipSided:1===b.side,depthPacking:void 0!==b.depthPacking?b.depthPacking:!1}};this.getProgramCacheKey=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);if(void 0===
b.isRawShaderMaterial){for(e=0;e<h.length;e++)d.push(c[h[e]]);d.push(a.outputEncoding);d.push(a.gammaFactor)}d.push(b.onBeforeCompile.toString());return d.join()};this.acquireProgram=function(c,d,f,g){for(var k,l=0,m=e.length;l<m;l++){var p=e[l];if(p.cacheKey===g){k=p;++k.usedTimes;break}}void 0===k&&(k=new sk(a,b,g,c,d,f),e.push(k));return k};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy()}};this.programs=e}function vk(){var a=new WeakMap;
return{get:function(b){var c=a.get(b);void 0===c&&(c={},a.set(b,c));return c},remove:function(b){a.delete(b)},update:function(b,c,d){a.get(b)[c]=d},dispose:function(){a=new WeakMap}}}function wk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function xk(a,b){return a.groupOrder!==b.groupOrder?
a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function Rh(){function a(a,d,e,m,v,p){var g=b[c];void 0===g?(g={id:a.id,object:a,geometry:d,material:e,program:e.program||f,groupOrder:m,renderOrder:a.renderOrder,z:v,group:p},b[c]=g):(g.id=a.id,g.object=a,g.geometry=d,g.material=e,g.program=e.program||f,g.groupOrder=m,g.renderOrder=a.renderOrder,g.z=v,g.group=p);c++;return g}var b=[],c=0,d=[],e=[],f={id:-1};return{opaque:d,transparent:e,
init:function(){c=0;d.length=0;e.length=0},push:function(b,c,f,m,v,p){b=a(b,c,f,m,v,p);(!0===f.transparent?e:d).push(b)},unshift:function(b,c,f,m,v,p){b=a(b,c,f,m,v,p);(!0===f.transparent?e:d).unshift(b)},sort:function(a,b){1<d.length&&d.sort(a||wk);1<e.length&&e.sort(b||xk)}}}function yk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c)}var b=new WeakMap;return{get:function(c,d){var e=b.get(c);if(void 0===e){var f=new Rh;b.set(c,new WeakMap);b.get(c).set(d,f);c.addEventListener("dispose",
a)}else f=e.get(d),void 0===f&&(f=new Rh,e.set(d,f));return f},dispose:function(){b=new WeakMap}}}function zk(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={direction:new n,color:new y,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new x};break;case "SpotLight":c={position:new n,direction:new n,color:new y,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new x};break;case "PointLight":c=
{position:new n,color:new y,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new x,shadowCameraNear:1,shadowCameraFar:1E3};break;case "HemisphereLight":c={direction:new n,skyColor:new y,groundColor:new y};break;case "RectAreaLight":c={color:new y,position:new n,halfWidth:new n,halfHeight:new n}}return a[b.id]=c}}}function Ak(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0)}function Bk(){for(var a=new zk,b={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,
hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},c=0;9>c;c++)b.probe.push(new n);var d=new n,e=new P,f=new P;return{setup:function(c,k,l){for(var g=0,v=0,p=0,h=0;9>h;h++)b.probe[h].set(0,0,0);var t=k=0,r=0,
u=0,n=0,w=0,B=0,U=0;l=l.matrixWorldInverse;c.sort(Ak);h=0;for(var wa=c.length;h<wa;h++){var A=c[h],aa=A.color,xa=A.intensity,x=A.distance,qa=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)g+=aa.r*xa,v+=aa.g*xa,p+=aa.b*xa;else if(A.isLightProbe)for(qa=0;9>qa;qa++)b.probe[qa].addScaledVector(A.sh.coefficients[qa],xa);else if(A.isDirectionalLight){var F=a.get(A);F.color.copy(A.color).multiplyScalar(A.intensity);F.direction.setFromMatrixPosition(A.matrixWorld);d.setFromMatrixPosition(A.target.matrixWorld);
F.direction.sub(d);F.direction.transformDirection(l);if(F.shadow=A.castShadow)xa=A.shadow,F.shadowBias=xa.bias,F.shadowRadius=xa.radius,F.shadowMapSize=xa.mapSize,b.directionalShadowMap[k]=qa,b.directionalShadowMatrix[k]=A.shadow.matrix,w++;b.directional[k]=F;k++}else if(A.isSpotLight){F=a.get(A);F.position.setFromMatrixPosition(A.matrixWorld);F.position.applyMatrix4(l);F.color.copy(aa).multiplyScalar(xa);F.distance=x;F.direction.setFromMatrixPosition(A.matrixWorld);d.setFromMatrixPosition(A.target.matrixWorld);
F.direction.sub(d);F.direction.transformDirection(l);F.coneCos=Math.cos(A.angle);F.penumbraCos=Math.cos(A.angle*(1-A.penumbra));F.decay=A.decay;if(F.shadow=A.castShadow)xa=A.shadow,F.shadowBias=xa.bias,F.shadowRadius=xa.radius,F.shadowMapSize=xa.mapSize,b.spotShadowMap[r]=qa,b.spotShadowMatrix[r]=A.shadow.matrix,U++;b.spot[r]=F;r++}else if(A.isRectAreaLight)F=a.get(A),F.color.copy(aa).multiplyScalar(xa),F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(l),f.identity(),e.copy(A.matrixWorld),
e.premultiply(l),f.extractRotation(e),F.halfWidth.set(.5*A.width,0,0),F.halfHeight.set(0,.5*A.height,0),F.halfWidth.applyMatrix4(f),F.halfHeight.applyMatrix4(f),b.rectArea[u]=F,u++;else if(A.isPointLight){F=a.get(A);F.position.setFromMatrixPosition(A.matrixWorld);F.position.applyMatrix4(l);F.color.copy(A.color).multiplyScalar(A.intensity);F.distance=A.distance;F.decay=A.decay;if(F.shadow=A.castShadow)xa=A.shadow,F.shadowBias=xa.bias,F.shadowRadius=xa.radius,F.shadowMapSize=xa.mapSize,F.shadowCameraNear=
xa.camera.near,F.shadowCameraFar=xa.camera.far,b.pointShadowMap[t]=qa,b.pointShadowMatrix[t]=A.shadow.matrix,B++;b.point[t]=F;t++}else A.isHemisphereLight&&(F=a.get(A),F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(l),F.direction.normalize(),F.skyColor.copy(A.color).multiplyScalar(xa),F.groundColor.copy(A.groundColor).multiplyScalar(xa),b.hemi[n]=F,n++)}b.ambient[0]=g;b.ambient[1]=v;b.ambient[2]=p;c=b.hash;if(c.directionalLength!==k||c.pointLength!==t||c.spotLength!==
r||c.rectAreaLength!==u||c.hemiLength!==n||c.numDirectionalShadows!==w||c.numPointShadows!==B||c.numSpotShadows!==U)b.directional.length=k,b.spot.length=r,b.rectArea.length=u,b.point.length=t,b.hemi.length=n,b.directionalShadowMap.length=w,b.pointShadowMap.length=B,b.spotShadowMap.length=U,b.directionalShadowMatrix.length=w,b.pointShadowMatrix.length=B,b.spotShadowMatrix.length=U,c.directionalLength=k,c.pointLength=t,c.spotLength=r,c.rectAreaLength=u,c.hemiLength=n,c.numDirectionalShadows=w,c.numPointShadows=
B,c.numSpotShadows=U,b.version=Ck++},state:b}}function Sh(){var a=new Bk,b=[],c=[];return{init:function(){b.length=0;c.length=0},state:{lightsArray:b,shadowsArray:c,lights:a},setupLights:function(d){a.setup(b,c,d)},pushLight:function(a){b.push(a)},pushShadow:function(a){c.push(a)}}}function Dk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c)}var b=new WeakMap;return{get:function(c,d){if(!1===b.has(c)){var e=new Sh;b.set(c,new WeakMap);b.get(c).set(d,e);c.addEventListener("dispose",
a)}else!1===b.get(c).has(d)?(e=new Sh,b.get(c).set(d,e)):e=b.get(c).get(d);return e},dispose:function(){b=new WeakMap}}}function Gb(a){L.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.setValues(a)}function Hb(a){L.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new n;this.nearDistance=
1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.fog=!1;this.setValues(a)}function Th(a,b,c){function d(a,b,c){c=a<<0|b<<1|c<<2;var d=p[c];void 0===d&&(d=new Gb({depthPacking:3201,morphTargets:a,skinning:b}),p[c]=d);return d}function e(a,b,c){c=a<<0|b<<1|c<<2;var d=h[c];void 0===d&&(d=new Hb({morphTargets:a,skinning:b}),h[c]=d);return d}function f(b,c,f,g,k,l){var m=b.geometry,p=d,v=b.customDepthMaterial;
!0===f.isPointLight&&(p=e,v=b.customDistanceMaterial);void 0===v?(v=!1,!0===c.morphTargets&&(!0===m.isBufferGeometry?v=m.morphAttributes&&m.morphAttributes.position&&0<m.morphAttributes.position.length:!0===m.isGeometry&&(v=m.morphTargets&&0<m.morphTargets.length)),m=!1,!0===b.isSkinnedMesh&&(!0===c.skinning?m=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b)),b=p(v,m,!0===b.isInstancedMesh)):b=v;a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&
(v=b.uuid,p=c.uuid,m=t[v],void 0===m&&(m={},t[v]=m),v=m[p],void 0===v&&(v=b.clone(),m[p]=v),b=v);b.visible=c.visible;b.wireframe=c.wireframe;b.side=3===l?null!==c.shadowSide?c.shadowSide:c.side:null!==c.shadowSide?c.shadowSide:r[c.side];b.clipShadows=c.clipShadows;b.clippingPlanes=c.clippingPlanes;b.clipIntersection=c.clipIntersection;b.wireframeLinewidth=c.wireframeLinewidth;b.linewidth=c.linewidth;!0===f.isPointLight&&!0===b.isMeshDistanceMaterial&&(b.referencePosition.setFromMatrixPosition(f.matrixWorld),
b.nearDistance=g,b.farDistance=k);return b}function g(c,d,e,l,m){if(!1!==c.visible){if(c.layers.test(d.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&3===m)&&(!c.frustumCulled||k.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,c.matrixWorld);var p=b.update(c),v=c.material;if(Array.isArray(v))for(var h=p.groups,q=0,r=h.length;q<r;q++){var u=h[q],t=v[u.materialIndex];t&&t.visible&&(t=f(c,t,l,e.near,e.far,m),a.renderBufferDirect(e,null,p,t,c,
u))}else v.visible&&(t=f(c,v,l,e.near,e.far,m),a.renderBufferDirect(e,null,p,t,c,null))}c=c.children;p=0;for(v=c.length;p<v;p++)g(c[p],d,e,l,m)}}var k=new Hd,l=new x,m=new x,v=new S,p=[],h=[],t={},r={0:1,1:0,2:2},u=new oa({defines:{SAMPLE_RATE:.25,HALF_SAMPLE_RATE:.125},uniforms:{shadow_pass:{value:null},resolution:{value:new x},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),
n=u.clone();n.defines.HORIZONAL_PASS=1;var w=new G;w.setAttribute("position",new K(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var B=new ca(w,u),U=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(d,e,f){if(!1!==U.enabled&&(!1!==U.autoUpdate||!1!==U.needsUpdate)&&0!==d.length){var p=a.getRenderTarget(),h=a.getActiveCubeFace(),q=a.getActiveMipmapLevel(),r=a.state;r.setBlending(0);r.buffers.color.setClear(1,1,1,1);r.buffers.depth.setTest(!0);r.setScissorTest(!1);
for(var t=0,z=d.length;t<z;t++){var w=d[t],A=w.shadow;if(void 0===A)console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");else{l.copy(A.mapSize);var aa=A.getFrameExtents();l.multiply(aa);m.copy(A.mapSize);if(l.x>c||l.y>c)console.warn("THREE.WebGLShadowMap:",w,"has shadow exceeding max texture size, reducing"),l.x>c&&(m.x=Math.floor(c/aa.x),l.x=m.x*aa.x,A.mapSize.x=m.x),l.y>c&&(m.y=Math.floor(c/aa.y),l.y=m.y*aa.y,A.mapSize.y=m.y);null!==A.map||A.isPointLightShadow||3!==this.type||(aa={minFilter:1006,
magFilter:1006,format:1023},A.map=new va(l.x,l.y,aa),A.map.texture.name=w.name+".shadowMap",A.mapPass=new va(l.x,l.y,aa),A.camera.updateProjectionMatrix());null===A.map&&(aa={minFilter:1003,magFilter:1003,format:1023},A.map=new va(l.x,l.y,aa),A.map.texture.name=w.name+".shadowMap",A.camera.updateProjectionMatrix());a.setRenderTarget(A.map);a.clear();aa=A.getViewportCount();for(var wa=0;wa<aa;wa++){var x=A.getViewport(wa);v.set(m.x*x.x,m.y*x.y,m.x*x.z,m.y*x.w);r.viewport(v);A.updateMatrices(w,wa);
k=A.getFrustum();g(e,f,A.camera,w,this.type)}A.isPointLightShadow||3!==this.type||(w=A,A=f,aa=b.update(B),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(A,null,aa,u,B,null),n.uniforms.shadow_pass.value=w.mapPass.texture,n.uniforms.resolution.value=w.mapSize,n.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(A,null,aa,n,B,null))}}U.needsUpdate=
!1;a.setRenderTarget(p,h,q)}}}function Ek(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,10240,9728);for(b=0;b<d;b++)a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);return f}function e(c,d){n[c]=1;0===w[c]&&(a.enableVertexAttribArray(c),w[c]=1);B[c]!==d&&((h?a:b.get("ANGLE_instanced_arrays"))[h?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,d),B[c]=d)}function f(b){!0!==U[b]&&(a.enable(b),U[b]=!0)}function g(b){!1!==
U[b]&&(a.disable(b),U[b]=!1)}function k(b,c,d,e,k,l,m,p){if(0===b)A&&(g(3042),A=!1);else if(A||(f(3042),A=!0),5!==b){if(b!==aa||p!==y){if(100!==x||100!==F)a.blendEquation(32774),F=x=100;if(p)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,
1);break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}D=E=qa=C=null;aa=b;y=p}}else{k=k||c;l=l||d;m=m||e;if(c!==x||k!==F)a.blendEquationSeparate(Lc[c],Lc[k]),x=c,F=k;if(d!==C||e!==qa||l!==E||m!==D)a.blendFuncSeparate(J[d],J[e],J[l],J[m]),C=d,qa=e,E=l,D=m;aa=b;y=null}}function l(b){G!==b&&(b?a.frontFace(2304):a.frontFace(2305),G=b)}function m(b){0!==b?(f(2884),b!==I&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):
g(2884);I=b}function v(b,c,d){if(b){if(f(32823),K!==c||M!==d)a.polygonOffset(c,d),K=c,M=d}else g(32823)}function p(b){void 0===b&&(b=33984+da-1);O!==b&&(a.activeTexture(b),O=b)}var h=c.isWebGL2,t=new function(){var b=!1,c=new S,d=null,e=new S(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,k){!0===k&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(-1,
0,0,0)}}},r=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function(a){a?f(2929):g(2929)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);d=b}},setLocked:function(a){b=
a},setClear:function(b){e!==b&&(a.clearDepth(b),e=b)},reset:function(){b=!1;e=d=c=null}}},u=new function(){var b=!1,c=null,d=null,e=null,k=null,l=null,m=null,p=null,v=null;return{setTest:function(a){b||(a?f(2960):g(2960))},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,f){if(d!==b||e!==c||k!==f)a.stencilFunc(b,c,f),d=b,e=c,k=f},setOp:function(b,c,d){if(l!==b||m!==c||p!==d)a.stencilOp(b,c,d),l=b,m=c,p=d},setLocked:function(a){b=a},setClear:function(b){v!==b&&(a.clearStencil(b),
v=b)},reset:function(){b=!1;v=p=m=l=k=e=d=c=null}}};c=a.getParameter(34921);var n=new Uint8Array(c),w=new Uint8Array(c),B=new Uint8Array(c),U={},wa=null,A=null,aa=null,x=null,C=null,qa=null,F=null,E=null,D=null,y=!1,G=null,I=null,L=null,K=null,M=null,da=a.getParameter(35661),ha=!1;c=0;c=a.getParameter(7938);-1!==c.indexOf("WebGL")?(c=parseFloat(/^WebGL ([0-9])/.exec(c)[1]),ha=1<=c):-1!==c.indexOf("OpenGL ES")&&(c=parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]),ha=2<=c);var O=null,Nd={},fb=new S,Uh=new S,
ng={};ng[3553]=d(3553,3553,1);ng[34067]=d(34067,34069,6);t.setClear(0,0,0,1);r.setClear(1);u.setClear(0);f(2929);r.setFunc(3);l(!1);m(1);f(2884);k(0);var Lc={100:32774,101:32778,102:32779};h?(Lc[103]=32775,Lc[104]=32776):(c=b.get("EXT_blend_minmax"),null!==c&&(Lc[103]=c.MIN_EXT,Lc[104]=c.MAX_EXT));var J={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};return{buffers:{color:t,depth:r,stencil:u},initAttributes:function(){for(var a=0,b=n.length;a<b;a++)n[a]=0},enableAttribute:function(a){e(a,
0)},enableAttributeAndDivisor:e,disableUnusedAttributes:function(){for(var b=0,c=w.length;b!==c;++b)w[b]!==n[b]&&(a.disableVertexAttribArray(b),w[b]=0)},enable:f,disable:g,useProgram:function(b){return wa!==b?(a.useProgram(b),wa=b,!0):!1},setBlending:k,setMaterial:function(a,b){2===a.side?g(2884):f(2884);var c=1===a.side;b&&(c=!c);l(c);1===a.blending&&!1===a.transparent?k(0):k(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha);
r.setFunc(a.depthFunc);r.setTest(a.depthTest);r.setMask(a.depthWrite);t.setMask(a.colorWrite);b=a.stencilWrite;u.setTest(b);b&&(u.setMask(a.stencilWriteMask),u.setFunc(a.stencilFunc,a.stencilRef,a.stencilFuncMask),u.setOp(a.stencilFail,a.stencilZFail,a.stencilZPass));v(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)},setFlipSided:l,setCullFace:m,setLineWidth:function(b){b!==L&&(ha&&a.lineWidth(b),L=b)},setPolygonOffset:v,setScissorTest:function(a){a?f(3089):g(3089)},activeTexture:p,bindTexture:function(b,
c){null===O&&p();var d=Nd[O];void 0===d&&(d={type:void 0,texture:void 0},Nd[O]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||ng[b]),d.type=b,d.texture=c},unbindTexture:function(){var b=Nd[O];void 0!==b&&void 0!==b.type&&(a.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",
R)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(R){console.error("THREE.WebGLState:",R)}},scissor:function(b){!1===fb.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),fb.copy(b))},viewport:function(b){!1===Uh.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),Uh.copy(b))},reset:function(){for(var b=0;b<w.length;b++)1===w[b]&&(a.disableVertexAttribArray(b),w[b]=0);U={};O=null;Nd={};I=G=aa=wa=null;t.reset();r.reset();u.reset()}}}function Fk(a,b,c,d,e,f,g){function k(a,b){return L?new OffscreenCanvas(a,
b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function l(a,b,c,d){var e=1;if(a.width>d||a.height>d)e=d/Math.max(a.width,a.height);if(1>e||!0===b){if("undefined"!==typeof HTMLImageElement&&a instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&a instanceof ImageBitmap)return d=b?O.floorPowerOfTwo:Math.floor,b=d(e*a.width),e=d(e*a.height),void 0===I&&(I=k(b,e)),c=c?k(b,e):I,c.width=b,c.height=e,
c.getContext("2d").drawImage(a,0,0,b,e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+b+"x"+e+")."),c;"data"in a&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").")}return a}function m(a){return O.isPowerOfTwo(a.width)&&O.isPowerOfTwo(a.height)}function v(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function p(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,
f))*Math.LOG2E}function h(c,d,e){if(!1===qa)return d;if(null!==c){if(void 0!==a[c])return a[c];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+c+"'")}c=d;6403===d&&(5126===e&&(c=33326),5131===e&&(c=33325),5121===e&&(c=33321));6407===d&&(5126===e&&(c=34837),5131===e&&(c=34843),5121===e&&(c=32849));6408===d&&(5126===e&&(c=34836),5131===e&&(c=34842),5121===e&&(c=32856));33325===c||33326===c||34842===c||34836===c?b.get("EXT_color_buffer_float"):(34843===c||34837===
c)&&console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");return c}function t(a){return 1003===a||1004===a||1005===a?9728:9729}function r(b){b=b.target;b.removeEventListener("dispose",r);var c=d.get(b);void 0!==c.__webglInit&&(a.deleteTexture(c.__webglTexture),d.remove(b));b.isVideoTexture&&G.delete(b);g.memory.textures--}function u(b){b=b.target;b.removeEventListener("dispose",u);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&
a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);if(b.isWebGLMultiviewRenderTarget){a.deleteTexture(c.__webglColorTexture);a.deleteTexture(c.__webglDepthStencilTexture);g.memory.textures-=2;e=0;for(var f=c.__webglViewFramebuffers.length;e<
f;e++)a.deleteFramebuffer(c.__webglViewFramebuffers[e])}d.remove(b.texture);d.remove(b)}g.memory.textures--}function n(a,b){var e=d.get(a);if(a.isVideoTexture){var f=g.render.frame;G.get(a)!==f&&(G.set(a,f),a.update())}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{A(e,a,b);return}c.activeTexture(33984+
b);c.bindTexture(3553,e.__webglTexture)}function w(b,e){if(6===b.image.length){var g=d.get(b);if(0<b.version&&g.__version!==b.version){wa(g,b);c.activeTexture(33984+e);c.bindTexture(34067,g.__webglTexture);a.pixelStorei(37440,b.flipY);var k=b&&b.isCompressedTexture;e=b.image[0]&&b.image[0].isDataTexture;for(var r=[],q=0;6>q;q++)r[q]=k||e?e?b.image[q].image:b.image[q]:l(b.image[q],!1,!0,E);var t=r[0],u=m(t)||qa,n=f.convert(b.format),A=f.convert(b.type),w=h(b.internalFormat,n,A);U(34067,b,u);if(k){for(q=
0;6>q;q++){var z=r[q].mipmaps;for(k=0;k<z.length;k++){var B=z[k];1023!==b.format&&1022!==b.format?null!==n?c.compressedTexImage2D(34069+q,k,w,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+q,k,w,B.width,B.height,0,n,A,B.data)}}g.__maxMipLevel=z.length-1}else{z=b.mipmaps;for(q=0;6>q;q++)if(e)for(c.texImage2D(34069+q,0,w,r[q].width,r[q].height,0,n,A,r[q].data),k=0;k<z.length;k++)B=z[k],B=B.image[q].image,
c.texImage2D(34069+q,k+1,w,B.width,B.height,0,n,A,B.data);else for(c.texImage2D(34069+q,0,w,n,A,r[q]),k=0;k<z.length;k++)B=z[k],c.texImage2D(34069+q,k+1,w,n,A,B.image[q]);g.__maxMipLevel=z.length}v(b,u)&&p(34067,b,t.width,t.height);g.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(33984+e),c.bindTexture(34067,g.__webglTexture)}}function B(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture)}function U(c,f,g){g?(a.texParameteri(c,10242,M[f.wrapS]),a.texParameteri(c,
10243,M[f.wrapT]),32879!==c&&35866!==c||a.texParameteri(c,32882,M[f.wrapR]),a.texParameteri(c,10240,da[f.magFilter]),a.texParameteri(c,10241,da[f.minFilter])):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),32879!==c&&35866!==c||a.texParameteri(c,32882,33071),1001===f.wrapS&&1001===f.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(c,10240,t(f.magFilter)),a.texParameteri(c,
10241,t(f.minFilter)),1003!==f.minFilter&&1006!==f.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));!(g=b.get("EXT_texture_filter_anisotropic"))||1015===f.type&&null===b.get("OES_texture_float_linear")||1016===f.type&&null===(qa||b.get("OES_texture_half_float_linear"))||!(1<f.anisotropy||d.get(f).__currentAnisotropy)||(a.texParameterf(c,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,e.getMaxAnisotropy())),
d.get(f).__currentAnisotropy=f.anisotropy)}function wa(b,c){void 0===b.__webglInit&&(b.__webglInit=!0,c.addEventListener("dispose",r),b.__webglTexture=a.createTexture(),g.memory.textures++)}function A(b,d,e){var g=3553;d.isDataTexture2DArray&&(g=35866);d.isDataTexture3D&&(g=32879);wa(b,d);c.activeTexture(33984+e);c.bindTexture(g,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,d.unpackAlignment);e=qa?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==
d.minFilter&&1006!==d.minFilter;e=e&&!1===m(d.image);e=l(d.image,e,!1,D);var k=m(e)||qa,q=f.convert(d.format),r=f.convert(d.type),t=h(d.internalFormat,q,r);U(g,d,k);var u=d.mipmaps;if(d.isDepthTexture){t=6402;if(1015===d.type){if(!1===qa)throw Error("Float Depth Texture only supported in WebGL2.0");t=36012}else qa&&(t=33189);1026===d.format&&6402===t&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=1012,
r=f.convert(d.type));1027===d.format&&(t=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),d.type=1020,r=f.convert(d.type)));c.texImage2D(3553,0,t,e.width,e.height,0,q,r,null)}else if(d.isDataTexture)if(0<u.length&&k){for(var n=0,A=u.length;n<A;n++){var z=u[n];c.texImage2D(3553,n,t,z.width,z.height,0,q,r,z.data)}d.generateMipmaps=!1;b.__maxMipLevel=u.length-1}else c.texImage2D(3553,0,t,e.width,e.height,0,q,r,e.data),b.__maxMipLevel=
0;else if(d.isCompressedTexture){n=0;for(A=u.length;n<A;n++)z=u[n],1023!==d.format&&1022!==d.format?null!==q?c.compressedTexImage2D(3553,n,t,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,n,t,z.width,z.height,0,q,r,z.data);b.__maxMipLevel=u.length-1}else if(d.isDataTexture2DArray)c.texImage3D(35866,0,t,e.width,e.height,e.depth,0,q,r,e.data),b.__maxMipLevel=0;else if(d.isDataTexture3D)c.texImage3D(32879,
0,t,e.width,e.height,e.depth,0,q,r,e.data),b.__maxMipLevel=0;else if(0<u.length&&k){n=0;for(A=u.length;n<A;n++)z=u[n],c.texImage2D(3553,n,t,q,r,z);d.generateMipmaps=!1;b.__maxMipLevel=u.length-1}else c.texImage2D(3553,0,t,q,r,e),b.__maxMipLevel=0;v(d,k)&&p(g,d,e.width,e.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d)}function aa(b,e,g,k){var l=f.convert(e.texture.format),m=f.convert(e.texture.type),p=h(e.texture.internalFormat,l,m);c.texImage2D(k,0,p,e.width,e.height,0,l,m,null);a.bindFramebuffer(36160,
b);a.framebufferTexture2D(36160,g,k,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null)}function x(b,c,d){a.bindRenderbuffer(36161,b);if(c.depthBuffer&&!c.stencilBuffer)d?(d=C(c),a.renderbufferStorageMultisample(36161,d,33189,c.width,c.height)):a.renderbufferStorage(36161,33189,c.width,c.height),a.framebufferRenderbuffer(36160,36096,36161,b);else if(c.depthBuffer&&c.stencilBuffer)d?(d=C(c),a.renderbufferStorageMultisample(36161,d,35056,c.width,c.height)):a.renderbufferStorage(36161,34041,
c.width,c.height),a.framebufferRenderbuffer(36160,33306,36161,b);else{b=f.convert(c.texture.format);var e=f.convert(c.texture.type);b=h(c.texture.internalFormat,b,e);d?(d=C(c),a.renderbufferStorageMultisample(36161,d,b,c.width,c.height)):a.renderbufferStorage(36161,b,c.width,c.height)}a.bindRenderbuffer(36161,null)}function C(a){return qa&&a.isWebGLMultisampleRenderTarget?Math.min(y,a.samples):0}var qa=e.isWebGL2,F=e.maxTextures,E=e.maxCubemapSize,D=e.maxTextureSize,y=e.maxSamples,G=new WeakMap,I,
L=!1;try{L="undefined"!==typeof OffscreenCanvas&&null!==(new OffscreenCanvas(1,1)).getContext("2d")}catch(Nd){}var K=0,M={1E3:10497,1001:33071,1002:33648},da={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987},ha=!1,P=!1;this.allocateTextureUnit=function(){var a=K;a>=F&&console.warn("THREE.WebGLTextures: Trying to use "+a+" texture units while this GPU supports only "+F);K+=1;return a};this.resetTextureUnits=function(){K=0};this.setTexture2D=n;this.setTexture2DArray=function(a,b){var e=
d.get(a);0<a.version&&e.__version!==a.version?A(e,a,b):(c.activeTexture(33984+b),c.bindTexture(35866,e.__webglTexture))};this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?A(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture))};this.setTextureCube=w;this.setTextureCubeDynamic=B;this.setupRenderTarget=function(e){var k=d.get(e),l=d.get(e.texture);e.addEventListener("dispose",u);l.__webglTexture=a.createTexture();g.memory.textures++;var q=!0===e.isWebGLRenderTargetCube,
r=!0===e.isWebGLMultisampleRenderTarget,t=!0===e.isWebGLMultiviewRenderTarget,z=m(e)||qa;if(q){k.__webglFramebuffer=[];for(var A=0;6>A;A++)k.__webglFramebuffer[A]=a.createFramebuffer()}else if(k.__webglFramebuffer=a.createFramebuffer(),r)if(qa){k.__webglMultisampledFramebuffer=a.createFramebuffer();k.__webglColorRenderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,k.__webglColorRenderbuffer);r=f.convert(e.texture.format);var w=f.convert(e.texture.type);r=h(e.texture.internalFormat,r,w);w=
C(e);a.renderbufferStorageMultisample(36161,w,r,e.width,e.height);a.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer);a.bindRenderbuffer(36161,null);e.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),x(k.__webglDepthRenderbuffer,e,!0));a.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");else if(t){A=e.width;var B=e.height;r=e.numViews;
a.bindFramebuffer(36160,k.__webglFramebuffer);var wa=b.get("OVR_multiview2");g.memory.textures+=2;w=a.createTexture();a.bindTexture(35866,w);a.texParameteri(35866,10240,9728);a.texParameteri(35866,10241,9728);a.texImage3D(35866,0,32856,A,B,r,0,6408,5121,null);wa.framebufferTextureMultiviewOVR(36160,36064,w,0,0,r);var F=a.createTexture();a.bindTexture(35866,F);a.texParameteri(35866,10240,9728);a.texParameteri(35866,10241,9728);a.texImage3D(35866,0,35056,A,B,r,0,34041,34042,null);wa.framebufferTextureMultiviewOVR(36160,
33306,F,0,0,r);B=Array(r);for(A=0;A<r;++A)B[A]=a.createFramebuffer(),a.bindFramebuffer(36160,B[A]),a.framebufferTextureLayer(36160,36064,w,0,A);k.__webglColorTexture=w;k.__webglDepthStencilTexture=F;k.__webglViewFramebuffers=B;a.bindFramebuffer(36160,null);a.bindTexture(35866,null)}if(q){c.bindTexture(34067,l.__webglTexture);U(34067,e.texture,z);for(A=0;6>A;A++)aa(k.__webglFramebuffer[A],e,36064,34069+A);v(e.texture,z)&&p(34067,e.texture,e.width,e.height);c.bindTexture(34067,null)}else t||(c.bindTexture(3553,
l.__webglTexture),U(3553,e.texture,z),aa(k.__webglFramebuffer,e,36064,3553),v(e.texture,z)&&p(3553,e.texture,e.width,e.height),c.bindTexture(3553,null));if(e.depthBuffer){k=d.get(e);l=!0===e.isWebGLRenderTargetCube;if(e.depthTexture){if(l)throw Error("target.depthTexture not supported in Cube render targets");if(e&&e.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,k.__webglFramebuffer);if(!e.depthTexture||!e.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
d.get(e.depthTexture).__webglTexture&&e.depthTexture.image.width===e.width&&e.depthTexture.image.height===e.height||(e.depthTexture.image.width=e.width,e.depthTexture.image.height=e.height,e.depthTexture.needsUpdate=!0);n(e.depthTexture,0);k=d.get(e.depthTexture).__webglTexture;if(1026===e.depthTexture.format)a.framebufferTexture2D(36160,36096,3553,k,0);else if(1027===e.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,k,0);else throw Error("Unknown depthTexture format");}else if(l)for(k.__webglDepthbuffer=
[],l=0;6>l;l++)a.bindFramebuffer(36160,k.__webglFramebuffer[l]),k.__webglDepthbuffer[l]=a.createRenderbuffer(),x(k.__webglDepthbuffer[l],e);else a.bindFramebuffer(36160,k.__webglFramebuffer),k.__webglDepthbuffer=a.createRenderbuffer(),x(k.__webglDepthbuffer,e);a.bindFramebuffer(36160,null)}};this.updateRenderTargetMipmap=function(a){var b=a.texture,e=m(a)||qa;if(v(b,e)){e=a.isWebGLRenderTargetCube?34067:3553;var f=d.get(b).__webglTexture;c.bindTexture(e,f);p(e,b,a.width,a.height);c.bindTexture(e,
null)}};this.updateMultisampleRenderTarget=function(b){if(b.isWebGLMultisampleRenderTarget)if(qa){var c=d.get(b);a.bindFramebuffer(36008,c.__webglMultisampledFramebuffer);a.bindFramebuffer(36009,c.__webglFramebuffer);c=b.width;var e=b.height,f=16384;b.depthBuffer&&(f|=256);b.stencilBuffer&&(f|=1024);a.blitFramebuffer(0,0,c,e,0,0,c,e,f,9728)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")};this.safeSetTexture2D=function(a,b){a&&a.isWebGLRenderTarget&&
(!1===ha&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),ha=!0),a=a.texture);n(a,b)};this.safeSetTextureCube=function(a,b){a&&a.isWebGLRenderTargetCube&&(!1===P&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),P=!0),a=a.texture);a&&a.isCubeTexture||Array.isArray(a.image)&&6===a.image.length?w(a,b):B(a,b)}}function Vh(a,b,c){var d=
c.isWebGL2;return{convert:function(a){if(1009===a)return 5121;if(1017===a)return 32819;if(1018===a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(d)return 5131;var c=b.get("OES_texture_half_float");return null!==c?c.HALF_FLOAT_OES:null}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;
if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(1029===a)return 36244;if(1030===a)return 33319;if(1031===a)return 33320;if(1032===a)return 36248;if(1033===a)return 36249;if(33776===a||33777===a||33778===a||33779===a)if(c=b.get("WEBGL_compressed_texture_s3tc"),null!==c){if(33776===a)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===a)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;
if(35840===a||35841===a||35842===a||35843===a)if(c=b.get("WEBGL_compressed_texture_pvrtc"),null!==c){if(35840===a)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===a)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(36196===a)return c=b.get("WEBGL_compressed_texture_etc1"),null!==c?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(37808===a||37809===a||37810===a||37811===a||37812===a||37813===
a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a)return c=b.get("WEBGL_compressed_texture_astc"),null!==c?a:null;if(1020===a){if(d)return 34042;c=b.get("WEBGL_depth_texture");return null!==c?c.UNSIGNED_INT_24_8_WEBGL:null}}}}function og(a,b,c,d){va.call(this,a,b,d);this.stencilBuffer=this.depthBuffer=!1;this.numViews=c}function Gk(a,b){function c(a){if(a.isArrayCamera)return a.cameras;v[0]=a;return v}function d(a){if(void 0===a.isArrayCamera)return!0;a=a.cameras;
if(a.length>t)return!1;for(var b=1,c=a.length;b<c;b++)if(a[0].viewport.z!==a[b].viewport.z||a[0].viewport.w!==a[b].viewport.w)return!1;return!0}var e=a.extensions,f=a.properties,g,k,l,m,v,p,h,t=0;this.isAvailable=function(){if(void 0===h){var a=e.get("OVR_multiview2");if(h=null!==a&&!1===b.getContextAttributes().antialias)for(t=b.getParameter(a.MAX_VIEWS_OVR),g=new og(0,0,2),p=new x,m=[],l=[],v=[],a=0;a<t;a++)m[a]=new P,l[a]=new za}return h};this.attachCamera=function(b){if(!1!==d(b)){(k=a.getRenderTarget())?
p.set(k.width,k.height):a.getDrawingBufferSize(p);if(b.isArrayCamera){var c=b.cameras[0].viewport;g.setSize(c.z,c.w);g.setNumViews(b.cameras.length)}else g.setSize(p.x,p.y),g.setNumViews(2);a.setRenderTarget(g)}};this.detachCamera=function(c){if(g===a.getRenderTarget()){a.setRenderTarget(k);var d=g,e=d.numViews,l=f.get(d).__webglViewFramebuffers,m=d.width;d=d.height;if(c.isArrayCamera)for(var v=0;v<e;v++){var h=c.cameras[v].viewport,q=h.x,r=h.y,t=q+h.z;h=r+h.w;b.bindFramebuffer(36008,l[v]);b.blitFramebuffer(0,
0,m,d,q,r,t,h,16384,9728)}else b.bindFramebuffer(36008,l[0]),b.blitFramebuffer(0,0,m,d,0,0,p.x,p.y,16384,9728)}};this.updateCameraProjectionMatricesUniform=function(a,d){a=c(a);for(var e=0;e<a.length;e++)m[e].copy(a[e].projectionMatrix);d.setValue(b,"projectionMatrices",m)};this.updateCameraViewMatricesUniform=function(a,d){a=c(a);for(var e=0;e<a.length;e++)m[e].copy(a[e].matrixWorldInverse);d.setValue(b,"viewMatrices",m)};this.updateObjectMatricesUniforms=function(a,d,e){d=c(d);for(var f=0;f<d.length;f++)m[f].multiplyMatrices(d[f].matrixWorldInverse,
a.matrixWorld),l[f].getNormalMatrix(m[f]);e.setValue(b,"modelViewMatrices",m);e.setValue(b,"normalMatrices",l)}}function Pe(a){pa.call(this);this.cameras=a||[]}function Od(){D.call(this);this.type="Group"}function Wh(a,b){function c(a){var b=t.get(a.inputSource);b&&b.dispatchEvent({type:a.type})}function d(){t.forEach(function(a,b){a.dispatchEvent({type:"disconnected",data:b});a.visible=!1});t.clear();a.setFramebuffer(null);a.setRenderTarget(a.getRenderTarget());x.stop();k.dispatchEvent({type:"sessionend"});
k.isPresenting=!1}function e(a){m=a;x.setContext(l);x.start();k.dispatchEvent({type:"sessionstart"});k.isPresenting=!0}function f(a){for(var b=l.inputSources,c=0;c<h.length;c++)t.set(b[c],h[c]);for(c=0;c<a.removed.length;c++){b=a.removed[c];var d=t.get(b);d&&(d.dispatchEvent({type:"disconnected",data:b}),t.delete(b))}for(c=0;c<a.added.length;c++)b=a.added[c],(d=t.get(b))&&d.dispatchEvent({type:"connected",data:b})}function g(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,
a.matrix);a.matrixWorldInverse.getInverse(a.matrixWorld)}var k=this,l=null,m=null,v="local-floor",p=null,h=[],t=new Map,r=new pa;r.layers.enable(1);r.viewport=new S;var u=new pa;u.layers.enable(2);u.viewport=new S;var z=new Pe([r,u]);z.layers.enable(1);z.layers.enable(2);this.isPresenting=this.enabled=!1;this.getController=function(a){var b=h[a];void 0===b&&(b=new Od,b.matrixAutoUpdate=!1,b.visible=!1,h[a]=b);return b};this.setFramebufferScaleFactor=function(){};this.setReferenceSpaceType=function(a){v=
a};this.getReferenceSpace=function(){return m};this.getSession=function(){return l};this.setSession=function(a){l=a;null!==l&&(l.addEventListener("select",c),l.addEventListener("selectstart",c),l.addEventListener("selectend",c),l.addEventListener("squeeze",c),l.addEventListener("squeezestart",c),l.addEventListener("squeezeend",c),l.addEventListener("end",d),a=b.getContextAttributes(),a=new XRWebGLLayer(l,b,{antialias:a.antialias,alpha:a.alpha,depth:a.depth,stencil:a.stencil}),l.updateRenderState({baseLayer:a}),
l.requestReferenceSpace(v).then(e),l.addEventListener("inputsourceschange",f))};var w=new n,B=new n;this.getCamera=function(a){var b=a.parent,c=z.cameras;g(z,b);for(var d=0;d<c.length;d++)g(c[d],b);a.matrixWorld.copy(z.matrixWorld);a=a.children;d=0;for(b=a.length;d<b;d++)a[d].updateMatrixWorld(!0);w.setFromMatrixPosition(r.matrixWorld);B.setFromMatrixPosition(u.matrixWorld);d=w.distanceTo(B);var e=r.projectionMatrix.elements,f=u.projectionMatrix.elements,k=e[14]/(e[10]-1);a=e[14]/(e[10]+1);b=(e[9]+
1)/e[5];c=(e[9]-1)/e[5];var l=(e[8]-1)/e[0],m=(f[8]+1)/f[0];f=k*l;e=k*m;m=d/(-l+m);l=m*-l;r.matrixWorld.decompose(z.position,z.quaternion,z.scale);z.translateX(l);z.translateZ(m);z.matrixWorld.compose(z.position,z.quaternion,z.scale);z.matrixWorldInverse.getInverse(z.matrixWorld);k+=m;m=a+m;z.projectionMatrix.makePerspective(f-l,e+(d-l),b*a/m*k,c*a/m*k,k,m);return z};var U=null,x=new yh;x.setAnimationLoop(function(b,c){p=c.getViewerPose(m);if(null!==p){var d=p.views,e=l.renderState.baseLayer;a.setFramebuffer(e.framebuffer);
for(var f=0;f<d.length;f++){var g=d[f],k=e.getViewport(g),v=z.cameras[f];v.matrix.fromArray(g.transform.inverse.matrix).getInverse(v.matrix);v.projectionMatrix.fromArray(g.projectionMatrix);v.viewport.set(k.x,k.y,k.width,k.height);0===f&&z.matrix.copy(v.matrix)}}d=l.inputSources;for(f=0;f<h.length;f++){e=h[f];if(g=d[f])if(g=c.getPose(g.targetRaySpace,m),null!==g){e.matrix.fromArray(g.transform.matrix);e.matrix.decompose(e.position,e.rotation,e.scale);e.visible=!0;continue}e.visible=!1}U&&U(b,c)});
this.setAnimationLoop=function(a){U=a};this.dispose=function(){}}function pg(a){var b;function c(){sa=new wj(H);Ha=new uj(H,sa,a);!1===Ha.isWebGL2&&(sa.get("WEBGL_depth_texture"),sa.get("OES_texture_float"),sa.get("OES_texture_half_float"),sa.get("OES_texture_half_float_linear"),sa.get("OES_standard_derivatives"),sa.get("OES_element_index_uint"),sa.get("ANGLE_instanced_arrays"));sa.get("OES_texture_float_linear");oa=new Vh(H,sa,Ha);Z=new Ek(H,sa,Ha);Z.scissor(X.copy(ia).multiplyScalar(R).floor());
Z.viewport(fb.copy(fa).multiplyScalar(R).floor());ea=new zj(H);W=new vk;V=new Fk(H,sa,Z,W,Ha,oa,ea);ma=new rj(H);za=new xj(H,ma,ea);ta=new Cj(H,za,ma,ea);Aa=new Bj(H);ra=new uk(y,sa,Ha);ya=new yk;va=new Dk;na=new sj(y,Z,ta,A);Ba=new tj(H,sa,ea,Ha);Da=new yj(H,sa,ea,Ha);ea.programs=ra.programs;y.capabilities=Ha;y.extensions=sa;y.properties=W;y.renderLists=ya;y.state=Z;y.info=ea}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");I=!0}function e(){console.log("THREE.WebGLRenderer: Context Restored.");
I=!1;c()}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);W.remove(a)}function g(a){var b=W.get(a).program;a.program=void 0;void 0!==b&&ra.releaseProgram(b)}function k(a,b){a.render(function(a){y.renderBufferImmediate(a,b)})}function l(a,b,c,d){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isGroup)c=a.renderOrder;else if(a.isLOD)!0===a.autoUpdate&&a.update(b);else if(a.isLight)F.pushLight(a),a.castShadow&&F.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||lg.intersectsSprite(a)){d&&
Ib.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md);var e=ta.update(a),f=a.material;f.visible&&G.push(a,e,f,c,Ib.z,null)}}else if(a.isImmediateRenderObject)d&&Ib.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md),G.push(a,null,a.material,c,Ib.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.frame!==ea.render.frame&&(a.skeleton.update(),a.skeleton.frame=ea.render.frame),!a.frustumCulled||lg.intersectsObject(a))if(d&&Ib.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Md),
e=ta.update(a),f=a.material,Array.isArray(f))for(var g=e.groups,k=0,m=g.length;k<m;k++){var p=g[k],v=f[p.materialIndex];v&&v.visible&&G.push(a,e,v,c,Ib.z,p)}else f.visible&&G.push(a,e,f,c,Ib.z,null);a=a.children;k=0;for(m=a.length;k<m;k++)l(a[k],b,c,d)}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],k=g.object,l=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera)if(T=c,ka.enabled&&ua.isAvailable())v(k,b,c,l,m,g);else for(var p=c.cameras,h=0,q=p.length;h<q;h++){var r=
p[h];k.layers.test(r.layers)&&(Z.viewport(fb.copy(r.viewport)),F.setupLights(r),v(k,b,r,l,m,g))}else T=null,v(k,b,c,l,m,g)}}function v(a,c,d,e,f,g){a.onBeforeRender(y,c,d,e,f,g);F=va.get(c,T||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){var l=h(d,c,f,a);Z.setMaterial(f);da=b=null;ha=!1;k(a,l)}else y.renderBufferDirect(d,c,e,f,a,g);a.onAfterRender(y,c,d,e,f,g);F=va.get(c,T||d)}function p(a,
b,c){var d=W.get(a),e=F.state.lights,k=e.state.version;c=ra.getParameters(a,e.state,F.state.shadowsArray,b,Ua.numPlanes,Ua.numIntersection,c);var l=ra.getProgramCacheKey(a,c),m=d.program,p=!0;if(void 0===m)a.addEventListener("dispose",f);else if(m.cacheKey!==l)g(a);else{if(d.lightsStateVersion!==k)d.lightsStateVersion=k;else if(void 0!==c.shaderID)return;p=!1}p&&(c.shaderID?(l=eb[c.shaderID],d.shader={name:a.type,uniforms:bc(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}):
d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader},a.onBeforeCompile(d.shader,y),l=ra.getProgramCacheKey(a,c),m=ra.acquireProgram(a,d.shader,c,l),d.program=m,d.environment=a.isMeshStandardMaterial?b.environment:null,d.outputEncoding=y.outputEncoding,a.program=m);c=m.getAttributes();if(a.morphTargets)for(l=a.numSupportedMorphTargets=0;l<y.maxMorphTargets;l++)0<=c["morphTarget"+l]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(l=a.numSupportedMorphNormals=
0;l<y.maxMorphNormals;l++)0<=c["morphNormal"+l]&&a.numSupportedMorphNormals++;c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Ua.numPlanes,d.numIntersection=Ua.numIntersection,c.clippingPlanes=Ua.uniform;d.fog=b.fog;d.needsLights=a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isShadowMaterial||a.isShaderMaterial&&!0===a.lights;d.lightsStateVersion=k;d.needsLights&&(c.ambientLightColor.value=
e.state.ambient,c.lightProbe.value=e.state.probe,c.directionalLights.value=e.state.directional,c.spotLights.value=e.state.spot,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,c.hemisphereLights.value=e.state.hemi,c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,
c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=Fb.seqWithValue(a.seq,c);d.uniformsList=a}function h(a,b,c,d){V.resetTextureUnits();var e=b.fog,f=c.isMeshStandardMaterial?b.environment:null,g=W.get(c),k=F.state.lights;pa&&(mg||a!==Y)&&Ua.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,g,a===Y&&c.id===Oe);c.version===g.__version&&(void 0===g.program?c.needsUpdate=!0:c.fog&&g.fog!==e?c.needsUpdate=!0:g.environment!==f?c.needsUpdate=!0:g.needsLights&&g.lightsStateVersion!==
k.state.version?c.needsUpdate=!0:void 0===g.numClippingPlanes||g.numClippingPlanes===Ua.numPlanes&&g.numIntersection===Ua.numIntersection?g.outputEncoding!==y.outputEncoding&&(c.needsUpdate=!0):c.needsUpdate=!0);c.version!==g.__version&&(p(c,b,d),g.__version=c.version);var l=!1,m=!1,v=!1;b=g.program;k=b.getUniforms();var h=g.shader.uniforms;Z.useProgram(b.program)&&(v=m=l=!0);c.id!==Oe&&(Oe=c.id,m=!0);if(l||Y!==a){0<b.numMultiviewViews?ua.updateCameraProjectionMatricesUniform(a,k):k.setValue(H,"projectionMatrix",
a.projectionMatrix);Ha.logarithmicDepthBuffer&&k.setValue(H,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));Y!==a&&(Y=a,v=m=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshStandardMaterial||c.envMap)l=k.map.cameraPosition,void 0!==l&&l.setValue(H,Ib.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial)&&k.setValue(H,"isOrthographic",!0===a.isOrthographicCamera);
if(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)0<b.numMultiviewViews?ua.updateCameraViewMatricesUniform(a,k):k.setValue(H,"viewMatrix",a.matrixWorldInverse)}if(c.skinning&&(k.setOptional(H,d,"bindMatrix"),k.setOptional(H,d,"bindMatrixInverse"),l=d.skeleton)){var q=l.bones;if(Ha.floatVertexTextures){if(void 0===l.boneTexture){q=Math.sqrt(4*q.length);q=O.ceilPowerOfTwo(q);q=Math.max(q,4);var n=
new Float32Array(q*q*4);n.set(l.boneMatrices);var u=new cc(n,q,q,1023,1015);l.boneMatrices=n;l.boneTexture=u;l.boneTextureSize=q}k.setValue(H,"boneTexture",l.boneTexture,V);k.setValue(H,"boneTextureSize",l.boneTextureSize)}else k.setOptional(H,l,"boneMatrices")}if(m||g.receiveShadow!==d.receiveShadow)g.receiveShadow=d.receiveShadow,k.setValue(H,"receiveShadow",d.receiveShadow);if(m){k.setValue(H,"toneMappingExposure",y.toneMappingExposure);k.setValue(H,"toneMappingWhitePoint",y.toneMappingWhitePoint);
g.needsLights&&(m=v,h.ambientLightColor.needsUpdate=m,h.lightProbe.needsUpdate=m,h.directionalLights.needsUpdate=m,h.pointLights.needsUpdate=m,h.spotLights.needsUpdate=m,h.rectAreaLights.needsUpdate=m,h.hemisphereLights.needsUpdate=m);e&&c.fog&&(h.fogColor.value.copy(e.color),e.isFog?(h.fogNear.value=e.near,h.fogFar.value=e.far):e.isFogExp2&&(h.fogDensity.value=e.density));if(c.isMeshBasicMaterial)t(h,c);else if(c.isMeshLambertMaterial)t(h,c),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap);else if(c.isMeshToonMaterial)t(h,
c),h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1E-4),c.gradientMap&&(h.gradientMap.value=c.gradientMap),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=
c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshPhongMaterial)t(h,c),h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1E-4),c.emissiveMap&&(h.emissiveMap.value=c.emissiveMap),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=
c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshStandardMaterial)t(h,c,f),c.isMeshPhysicalMaterial?(r(h,c,f),h.reflectivity.value=c.reflectivity,h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.sheen&&h.sheen.value.copy(c.sheen),c.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),h.clearcoatNormalMap.value=c.clearcoatNormalMap,1===c.side&&h.clearcoatNormalScale.value.negate()),
h.transparency.value=c.transparency):r(h,c,f);else if(c.isMeshMatcapMaterial)t(h,c),c.matcap&&(h.matcap.value=c.matcap),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);
else if(c.isMeshDepthMaterial)t(h,c),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isMeshDistanceMaterial)t(h,c),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias),h.referencePosition.value.copy(c.referencePosition),h.nearDistance.value=c.nearDistance,h.farDistance.value=c.farDistance;
else if(c.isMeshNormalMaterial)t(h,c),c.bumpMap&&(h.bumpMap.value=c.bumpMap,h.bumpScale.value=c.bumpScale,1===c.side&&(h.bumpScale.value*=-1)),c.normalMap&&(h.normalMap.value=c.normalMap,h.normalScale.value.copy(c.normalScale),1===c.side&&h.normalScale.value.negate()),c.displacementMap&&(h.displacementMap.value=c.displacementMap,h.displacementScale.value=c.displacementScale,h.displacementBias.value=c.displacementBias);else if(c.isLineBasicMaterial)h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,
c.isLineDashedMaterial&&(h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale);else if(c.isPointsMaterial){h.diffuse.value.copy(c.color);h.opacity.value=c.opacity;h.size.value=c.size*R;h.scale.value=.5*J;c.map&&(h.map.value=c.map);c.alphaMap&&(h.alphaMap.value=c.alphaMap);if(c.map)var z=c.map;else c.alphaMap&&(z=c.alphaMap);void 0!==z&&(!0===z.matrixAutoUpdate&&z.updateMatrix(),h.uvTransform.value.copy(z.matrix))}else if(c.isSpriteMaterial){h.diffuse.value.copy(c.color);
h.opacity.value=c.opacity;h.rotation.value=c.rotation;c.map&&(h.map.value=c.map);c.alphaMap&&(h.alphaMap.value=c.alphaMap);if(c.map)var w=c.map;else c.alphaMap&&(w=c.alphaMap);void 0!==w&&(!0===w.matrixAutoUpdate&&w.updateMatrix(),h.uvTransform.value.copy(w.matrix))}else c.isShadowMaterial&&(h.color.value.copy(c.color),h.opacity.value=c.opacity);void 0!==h.ltc_1&&(h.ltc_1.value=E.LTC_1);void 0!==h.ltc_2&&(h.ltc_2.value=E.LTC_2);Fb.upload(H,g.uniformsList,h,V);c.isShaderMaterial&&(c.uniformsNeedUpdate=
!1)}c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(Fb.upload(H,g.uniformsList,h,V),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&k.setValue(H,"center",d.center);0<b.numMultiviewViews?ua.updateObjectMatricesUniforms(d,a,k):(k.setValue(H,"modelViewMatrix",d.modelViewMatrix),k.setValue(H,"normalMatrix",d.normalMatrix));k.setValue(H,"modelMatrix",d.matrixWorld);return b}function t(a,b,c){a.opacity.value=b.opacity;b.color&&a.diffuse.value.copy(b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);if(c=b.envMap||c)a.envMap.value=c,a.flipEnvMap.value=c.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio,a.maxMipLevel.value=W.get(c).__maxMipLevel;b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var d=b.map;else b.specularMap?
d=b.specularMap:b.displacementMap?d=b.displacementMap:b.normalMap?d=b.normalMap:b.bumpMap?d=b.bumpMap:b.roughnessMap?d=b.roughnessMap:b.metalnessMap?d=b.metalnessMap:b.alphaMap?d=b.alphaMap:b.emissiveMap&&(d=b.emissiveMap);void 0!==d&&(d.isWebGLRenderTarget&&(d=d.texture),!0===d.matrixAutoUpdate&&d.updateMatrix(),a.uvTransform.value.copy(d.matrix));if(b.aoMap)var e=b.aoMap;else b.lightMap&&(e=b.lightMap);void 0!==e&&(e.isWebGLRenderTarget&&(e=e.texture),!0===e.matrixAutoUpdate&&e.updateMatrix(),a.uv2Transform.value.copy(e.matrix))}
function r(a,b,c){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=
b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);if(b.envMap||c)a.envMapIntensity.value=b.envMapIntensity}a=a||{};var u=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),z=void 0!==a.context?a.context:null,w=void 0!==a.alpha?a.alpha:!1,B=void 0!==a.depth?a.depth:!0,U=void 0!==a.stencil?a.stencil:!0,wa=void 0!==a.antialias?a.antialias:!1,A=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,aa=
void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,C=void 0!==a.powerPreference?a.powerPreference:"default",D=void 0!==a.failIfMajorPerformanceCaveat?a.failIfMajorPerformanceCaveat:!1,G=null,F=null;this.domElement=u;this.debug={checkShaderErrors:!0};this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.outputEncoding=3E3;this.physicallyCorrectLights=!1;this.toneMappingWhitePoint=
this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var y=this,I=!1,K=null,L=0,M=0,N=null,Q=null,Oe=-1;var da=b=null;var ha=!1;var Y=null,T=null,fb=new S,X=new S,ba=null,ca=u.width,J=u.height,R=1,ja=null,la=null,fa=new S(0,0,ca,J),ia=new S(0,0,ca,J),kg=!1,lg=new Hd,Ua=new vj,pa=!1,mg=!1,Md=new P,Ib=new n;try{w={alpha:w,depth:B,stencil:U,antialias:wa,premultipliedAlpha:A,preserveDrawingBuffer:aa,powerPreference:C,failIfMajorPerformanceCaveat:D,xrCompatible:!0};
u.addEventListener("webglcontextlost",d,!1);u.addEventListener("webglcontextrestored",e,!1);var H=z||u.getContext("webgl",w)||u.getContext("experimental-webgl",w);if(null===H){if(null!==u.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===H.getShaderPrecisionFormat&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(Xh){throw console.error("THREE.WebGLRenderer: "+
Xh.message),Xh;}var sa,Ha,Z,ea,W,V,ma,za,ta,ra,ya,va,na,Aa,Ba,Da,oa;c();var ka=new Wh(y,H);this.xr=ka;var ua=new Gk(y,H),Fa=new Th(y,ta,Ha.maxTextureSize);this.shadowMap=Fa;this.getContext=function(){return H};this.getContextAttributes=function(){return H.getContextAttributes()};this.forceContextLoss=function(){var a=sa.get("WEBGL_lose_context");a&&a.loseContext()};this.forceContextRestore=function(){var a=sa.get("WEBGL_lose_context");a&&a.restoreContext()};this.getPixelRatio=function(){return R};
this.setPixelRatio=function(a){void 0!==a&&(R=a,this.setSize(ca,J,!1))};this.getSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),a=new x);return a.set(ca,J)};this.setSize=function(a,b,c){ka.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ca=a,J=b,u.width=Math.floor(a*R),u.height=Math.floor(b*R),!1!==c&&(u.style.width=a+"px",u.style.height=b+"px"),this.setViewport(0,0,a,b))};this.getDrawingBufferSize=
function(a){void 0===a&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),a=new x);return a.set(ca*R,J*R).floor()};this.setDrawingBufferSize=function(a,b,c){ca=a;J=b;R=c;u.width=Math.floor(a*c);u.height=Math.floor(b*c);this.setViewport(0,0,a,b)};this.getCurrentViewport=function(a){void 0===a&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),a=new S);return a.copy(fb)};this.getViewport=function(a){return a.copy(fa)};
this.setViewport=function(a,b,c,d){a.isVector4?fa.set(a.x,a.y,a.z,a.w):fa.set(a,b,c,d);Z.viewport(fb.copy(fa).multiplyScalar(R).floor())};this.getScissor=function(a){return a.copy(ia)};this.setScissor=function(a,b,c,d){a.isVector4?ia.set(a.x,a.y,a.z,a.w):ia.set(a,b,c,d);Z.scissor(X.copy(ia).multiplyScalar(R).floor())};this.getScissorTest=function(){return kg};this.setScissorTest=function(a){Z.setScissorTest(kg=a)};this.setOpaqueSort=function(a){ja=a};this.setTransparentSort=function(a){la=a};this.getClearColor=
function(){return na.getClearColor()};this.setClearColor=function(){na.setClearColor.apply(na,arguments)};this.getClearAlpha=function(){return na.getClearAlpha()};this.setClearAlpha=function(){na.setClearAlpha.apply(na,arguments)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===c||c)d|=1024;H.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};
this.dispose=function(){u.removeEventListener("webglcontextlost",d,!1);u.removeEventListener("webglcontextrestored",e,!1);ya.dispose();va.dispose();W.dispose();ta.dispose();ka.dispose();Ca.stop()};this.renderBufferImmediate=function(a,b){Z.initAttributes();var c=W.get(a);a.hasPositions&&!c.position&&(c.position=H.createBuffer());a.hasNormals&&!c.normal&&(c.normal=H.createBuffer());a.hasUvs&&!c.uv&&(c.uv=H.createBuffer());a.hasColors&&!c.color&&(c.color=H.createBuffer());b=b.getAttributes();a.hasPositions&&
(H.bindBuffer(34962,c.position),H.bufferData(34962,a.positionArray,35048),Z.enableAttribute(b.position),H.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(H.bindBuffer(34962,c.normal),H.bufferData(34962,a.normalArray,35048),Z.enableAttribute(b.normal),H.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&(H.bindBuffer(34962,c.uv),H.bufferData(34962,a.uvArray,35048),Z.enableAttribute(b.uv),H.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(H.bindBuffer(34962,c.color),H.bufferData(34962,
a.colorArray,35048),Z.enableAttribute(b.color),H.vertexAttribPointer(b.color,3,5126,!1,0,0));Z.disableUnusedAttributes();H.drawArrays(4,0,a.count);a.count=0};var Ga=new pb;this.renderBufferDirect=function(a,c,d,e,f,g){null===c&&(c=Ga);var k=f.isMesh&&0>f.matrixWorld.determinant(),l=h(a,c,e,f);Z.setMaterial(e,k);var m=!1;if(b!==d.id||da!==l.id||ha!==(!0===e.wireframe))b=d.id,da=l.id,ha=!0===e.wireframe,m=!0;if(e.morphTargets||e.morphNormals)Aa.update(f,d,e,l),m=!0;a=d.index;c=d.attributes.position;
if(null===a){if(void 0===c||0===c.count)return}else if(0===a.count)return;var p=1;!0===e.wireframe&&(a=za.getWireframeAttribute(d),p=2);k=Ba;if(null!==a){var v=ma.get(a);k=Da;k.setIndex(v)}if(m){if(!1!==Ha.isWebGL2||!f.isInstancedMesh&&!d.isInstancedBufferGeometry||null!==sa.get("ANGLE_instanced_arrays")){Z.initAttributes();m=d.attributes;l=l.getAttributes();var q=e.defaultAttributeValues;for(x in l){var r=l[x];if(0<=r){var t=m[x];if(void 0!==t){var n=t.normalized,u=t.itemSize,z=ma.get(t);if(void 0!==
z){var w=z.buffer,A=z.type;z=z.bytesPerElement;if(t.isInterleavedBufferAttribute){var B=t.data,U=B.stride;t=t.offset;B&&B.isInstancedInterleavedBuffer?(Z.enableAttributeAndDivisor(r,B.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=B.meshPerAttribute*B.count)):Z.enableAttribute(r);H.bindBuffer(34962,w);H.vertexAttribPointer(r,u,A,n,U*z,t*z)}else t.isInstancedBufferAttribute?(Z.enableAttributeAndDivisor(r,t.meshPerAttribute),void 0===d.maxInstancedCount&&(d.maxInstancedCount=t.meshPerAttribute*
t.count)):Z.enableAttribute(r),H.bindBuffer(34962,w),H.vertexAttribPointer(r,u,A,n,0,0)}}else if("instanceMatrix"===x)z=ma.get(f.instanceMatrix),void 0!==z&&(w=z.buffer,A=z.type,Z.enableAttributeAndDivisor(r+0,1),Z.enableAttributeAndDivisor(r+1,1),Z.enableAttributeAndDivisor(r+2,1),Z.enableAttributeAndDivisor(r+3,1),H.bindBuffer(34962,w),H.vertexAttribPointer(r+0,4,A,!1,64,0),H.vertexAttribPointer(r+1,4,A,!1,64,16),H.vertexAttribPointer(r+2,4,A,!1,64,32),H.vertexAttribPointer(r+3,4,A,!1,64,48));else if(void 0!==
q&&(n=q[x],void 0!==n))switch(n.length){case 2:H.vertexAttrib2fv(r,n);break;case 3:H.vertexAttrib3fv(r,n);break;case 4:H.vertexAttrib4fv(r,n);break;default:H.vertexAttrib1fv(r,n)}}}Z.disableUnusedAttributes()}null!==a&&H.bindBuffer(34963,v.buffer)}var x=d.drawRange.start*p;m=null!==g?g.start*p:0;v=Math.max(x,m);g=Math.max(0,Math.min(null!==a?a.count:c.count,x+d.drawRange.count*p,m+(null!==g?g.count*p:Infinity))-1-v+1);0!==g&&(f.isMesh?!0===e.wireframe?(Z.setLineWidth(e.wireframeLinewidth*(null===
N?R:1)),k.setMode(1)):k.setMode(4):f.isLine?(e=e.linewidth,void 0===e&&(e=1),Z.setLineWidth(e*(null===N?R:1)),f.isLineSegments?k.setMode(1):f.isLineLoop?k.setMode(2):k.setMode(3)):f.isPoints?k.setMode(0):f.isSprite&&k.setMode(4),f.isInstancedMesh?k.renderInstances(d,v,g,f.count):d.isInstancedBufferGeometry?k.renderInstances(d,v,g,d.maxInstancedCount):k.render(v,g))};this.compile=function(a,b){F=va.get(a,b);F.init();a.traverse(function(a){a.isLight&&(F.pushLight(a),a.castShadow&&F.pushShadow(a))});
F.setupLights(b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)p(b.material[c],a,b);else p(b.material,a,b)})};var Ea=null,Ca=new yh;Ca.setAnimationLoop(function(a){ka.isPresenting||Ea&&Ea(a)});"undefined"!==typeof window&&Ca.setContext(window);this.setAnimationLoop=function(a){Ea=a;ka.setAnimationLoop(a);Ca.start()};this.render=function(a,c,d,e){if(void 0!==d){console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
var f=d}if(void 0!==e){console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");var g=e}c&&c.isCamera?I||(da=b=null,ha=!1,Oe=-1,Y=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===c.parent&&c.updateMatrixWorld(),ka.enabled&&ka.isPresenting&&(c=ka.getCamera(c)),F=va.get(a,c),F.init(),a.onBeforeRender(y,a,c,f||N),Md.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),lg.setFromMatrix(Md),mg=this.localClippingEnabled,pa=Ua.init(this.clippingPlanes,
mg,c),G=ya.get(a,c),G.init(),l(a,c,0,y.sortObjects),!0===y.sortObjects&&G.sort(ja,la),pa&&Ua.beginShadows(),Fa.render(F.state.shadowsArray,a,c),F.setupLights(c),pa&&Ua.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==f&&this.setRenderTarget(f),ka.enabled&&ua.isAvailable()&&ua.attachCamera(c),na.render(G,a,c,g),d=G.opaque,e=G.transparent,a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,c,f),e.length&&m(e,a,c,f)):(d.length&&m(d,a,c),e.length&&m(e,a,c)),a.onAfterRender(y,a,c),null!==
N&&(V.updateRenderTargetMipmap(N),V.updateMultisampleRenderTarget(N)),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1),ka.enabled&&ua.isAvailable()&&ua.detachCamera(c),F=G=null):console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")};this.setFramebuffer=function(a){K!==a&&null===N&&H.bindFramebuffer(36160,a);K=a};this.getActiveCubeFace=function(){return L};this.getActiveMipmapLevel=function(){return M};this.getRenderTarget=
function(){return N};this.setRenderTarget=function(a,b,c){N=a;L=b;M=c;a&&void 0===W.get(a).__webglFramebuffer&&V.setupRenderTarget(a);var d=K,e=!1;a?(d=W.get(a).__webglFramebuffer,a.isWebGLRenderTargetCube?(d=d[b||0],e=!0):d=a.isWebGLMultisampleRenderTarget?W.get(a).__webglMultisampledFramebuffer:d,fb.copy(a.viewport),X.copy(a.scissor),ba=a.scissorTest):(fb.copy(fa).multiplyScalar(R).floor(),X.copy(ia).multiplyScalar(R).floor(),ba=kg);Q!==d&&(H.bindFramebuffer(36160,d),Q=d);Z.viewport(fb);Z.scissor(X);
Z.setScissorTest(ba);e&&(a=W.get(a.texture),H.framebufferTexture2D(36160,36064,34069+(b||0),a.__webglTexture,c||0))};this.readRenderTargetPixels=function(a,b,c,d,e,f,g){if(a&&a.isWebGLRenderTarget){var k=W.get(a).__webglFramebuffer;a.isWebGLRenderTargetCube&&void 0!==g&&(k=k[g]);if(k){g=!1;k!==Q&&(H.bindFramebuffer(36160,k),g=!0);try{var l=a.texture,m=l.format,h=l.type;1023!==m&&oa.convert(m)!==H.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):
1009===h||oa.convert(h)===H.getParameter(35738)||1015===h&&(Ha.isWebGL2||sa.get("OES_texture_float")||sa.get("WEBGL_color_buffer_float"))||1016===h&&(Ha.isWebGL2?sa.get("EXT_color_buffer_float"):sa.get("EXT_color_buffer_half_float"))?36053===H.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&H.readPixels(b,c,d,e,oa.convert(m),oa.convert(h),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{g&&
H.bindFramebuffer(36160,Q)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")};this.copyFramebufferToTexture=function(a,b,c){void 0===c&&(c=0);var d=Math.pow(2,-c),e=Math.floor(b.image.width*d);d=Math.floor(b.image.height*d);var f=oa.convert(b.format);V.setTexture2D(b,0);H.copyTexImage2D(3553,c,f,a.x,a.y,e,d,0);Z.unbindTexture()};this.copyTextureToTexture=function(a,b,c,d){var e=b.image.width,f=b.image.height,g=oa.convert(c.format),k=oa.convert(c.type);
V.setTexture2D(c,0);b.isDataTexture?H.texSubImage2D(3553,d||0,a.x,a.y,e,f,g,k,b.image.data):H.texSubImage2D(3553,d||0,a.x,a.y,g,k,b.image);Z.unbindTexture()};this.initTexture=function(a){V.setTexture2D(a,0);Z.unbindTexture()};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Qe(a,b){this.name="";this.color=new y(a);this.density=void 0!==b?b:2.5E-4}function Re(a,b,c){this.name="";this.color=new y(a);this.near=void 0!==b?b:1;
this.far=void 0!==c?c:1E3}function sb(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0}function Pd(a,b,c,d){this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function Jb(a){L.call(this);this.type="SpriteMaterial";this.color=new y(16777215);this.alphaMap=this.map=null;this.rotation=0;this.transparent=this.sizeAttenuation=!0;this.setValues(a)}function Qd(a){D.call(this);this.type="Sprite";if(void 0===
Mc){Mc=new G;var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new sb(b,5);Mc.setIndex([0,1,2,0,2,3]);Mc.setAttribute("position",new Pd(b,3,0,!1));Mc.setAttribute("uv",new Pd(b,2,3,!1))}this.geometry=Mc;this.material=void 0!==a?a:new Jb;this.center=new x(.5,.5)}function Se(a,b,c,d,e,f){Nc.subVectors(a,c).addScalar(.5).multiply(d);void 0!==e?(Rd.x=f*Nc.x-e*Nc.y,Rd.y=e*Nc.x+f*Nc.y):Rd.copy(Nc);a.copy(b);a.x+=Rd.x;a.y+=Rd.y;a.applyMatrix4(Yh)}function Sd(){D.call(this);
this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0}function Td(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");ca.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new P;this.bindMatrixInverse=new P}function Te(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);this.frame=-1;if(void 0===b)this.calculateInverses();
else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new P)}function qg(){D.call(this);this.type="Bone"}function Ue(a,b,c){ca.call(this,a,b);this.instanceMatrix=new K(new Float32Array(16*c),16);this.count=c}function ja(a){L.call(this);this.type="LineBasicMaterial";this.color=new y(16777215);this.linewidth=1;this.linejoin=this.linecap="round";
this.setValues(a)}function Ja(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");D.call(this);this.type="Line";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new ja({color:16777215*Math.random()})}function la(a,b){Ja.call(this,a,b);this.type="LineSegments"}function Ve(a,b){Ja.call(this,a,b);this.type="LineLoop"}function Va(a){L.call(this);this.type="PointsMaterial";this.color=new y(16777215);this.alphaMap=this.map=
null;this.size=1;this.sizeAttenuation=!0;this.morphTargets=!1;this.setValues(a)}function Oc(a,b){D.call(this);this.type="Points";this.geometry=void 0!==a?a:new G;this.material=void 0!==b?b:new Va({color:16777215*Math.random()});this.updateMorphTargets()}function rg(a,b,c,d,e,f,g){var k=sg.distanceSqToPoint(a);k<c&&(c=new n,sg.closestPointToPoint(a,c),c.applyMatrix4(d),a=e.ray.origin.distanceTo(c),a<e.near||a>e.far||f.push({distance:a,distanceToRay:Math.sqrt(k),point:c,index:b,face:null,object:g}))}
function tg(a,b,c,d,e,f,g,k,l){T.call(this,a,b,c,d,e,f,g,k,l);this.format=void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1}function Pc(a,b,c,d,e,f,g,k,l,m,h,p){T.call(this,null,f,g,k,l,m,d,e,h,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function Ud(a,b,c,d,e,f,g,k,l){T.call(this,a,b,c,d,e,f,g,k,l);this.needsUpdate=!0}function Vd(a,b,c,d,e,f,g,k,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);T.call(this,null,d,e,f,g,k,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==k?k:1003;this.generateMipmaps=this.flipY=!1}function Qc(a){G.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},k=["a","b","c"];if(a&&a.isGeometry){var l=a.faces;var m=0;for(d=l.length;m<d;m++){var h=l[m];for(c=0;3>c;c++){var p=h[k[c]];var q=h[k[(c+1)%3]];f[0]=Math.min(p,q);f[1]=Math.max(p,q);p=f[0]+
","+f[1];void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]})}}for(p in g)m=g[p],k=a.vertices[m.index1],b.push(k.x,k.y,k.z),k=a.vertices[m.index2],b.push(k.x,k.y,k.z)}else if(a&&a.isBufferGeometry)if(k=new n,null!==a.index){l=a.attributes.position;h=a.index;var t=a.groups;0===t.length&&(t=[{start:0,count:h.count,materialIndex:0}]);a=0;for(e=t.length;a<e;++a)for(m=t[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)p=h.getX(m+c),q=h.getX(m+(c+1)%3),f[0]=Math.min(p,q),f[1]=Math.max(p,q),p=f[0]+","+
f[1],void 0===g[p]&&(g[p]={index1:f[0],index2:f[1]});for(p in g)m=g[p],k.fromBufferAttribute(l,m.index1),b.push(k.x,k.y,k.z),k.fromBufferAttribute(l,m.index2),b.push(k.x,k.y,k.z)}else for(l=a.attributes.position,m=0,d=l.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,k.fromBufferAttribute(l,g),b.push(k.x,k.y,k.z),g=3*m+(c+1)%3,k.fromBufferAttribute(l,g),b.push(k.x,k.y,k.z);this.setAttribute("position",new C(b,3))}function Wd(a,b,c){M.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,
stacks:c};this.fromBufferGeometry(new Rc(a,b,c));this.mergeVertices()}function Rc(a,b,c){G.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],k=new n,l=new n,m=new n,h=new n,p=new n,q,t;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");var r=b+1;for(q=0;q<=c;q++){var u=q/c;for(t=0;t<=b;t++){var z=t/b;a(z,u,l);e.push(l.x,l.y,l.z);0<=z-1E-5?(a(z-1E-5,u,m),h.subVectors(l,m)):(a(z+
1E-5,u,m),h.subVectors(m,l));0<=u-1E-5?(a(z,u-1E-5,m),p.subVectors(l,m)):(a(z,u+1E-5,m),p.subVectors(m,l));k.crossVectors(h,p).normalize();f.push(k.x,k.y,k.z);g.push(z,u)}}for(q=0;q<c;q++)for(t=0;t<b;t++)a=q*r+t+1,k=(q+1)*r+t+1,l=(q+1)*r+t,d.push(q*r+t,a,l),d.push(a,k,l);this.setIndex(d);this.setAttribute("position",new C(e,3));this.setAttribute("normal",new C(f,3));this.setAttribute("uv",new C(g,2))}function Xd(a,b,c,d){M.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,
radius:c,detail:d};this.fromBufferGeometry(new Ga(a,b,c,d));this.mergeVertices()}function Ga(a,b,c,d){function e(a){k.push(a.x,a.y,a.z)}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2]}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5)}G.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var k=[],l=[];(function(a){for(var c=new n,d=new n,g=new n,k=0;k<b.length;k+=3){f(b[k+0],c);f(b[k+1],d);
f(b[k+2],g);var l,m,h=c,w=d,B=g,U=Math.pow(2,a),x=[];for(m=0;m<=U;m++){x[m]=[];var A=h.clone().lerp(B,m/U),aa=w.clone().lerp(B,m/U),y=U-m;for(l=0;l<=y;l++)x[m][l]=0===l&&m===U?A:A.clone().lerp(aa,l/y)}for(m=0;m<U;m++)for(l=0;l<2*(U-m)-1;l++)h=Math.floor(l/2),0===l%2?(e(x[m][h+1]),e(x[m+1][h]),e(x[m][h])):(e(x[m][h+1]),e(x[m+1][h+1]),e(x[m+1][h]))}})(d);(function(a){for(var b=new n,c=0;c<k.length;c+=3)b.x=k[c+0],b.y=k[c+1],b.z=k[c+2],b.normalize().multiplyScalar(a),k[c+0]=b.x,k[c+1]=b.y,k[c+2]=b.z})(c);
(function(){for(var a=new n,b=0;b<k.length;b+=3)a.x=k[b+0],a.y=k[b+1],a.z=k[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));a=new n;b=new n;for(var c=new n,d=new n,e=new x,f=new x,h=new x,z=0,w=0;z<k.length;z+=9,w+=6){a.set(k[z+0],k[z+1],k[z+2]);b.set(k[z+3],k[z+4],k[z+5]);c.set(k[z+6],k[z+7],k[z+8]);e.set(l[w+0],l[w+1]);f.set(l[w+2],l[w+3]);h.set(l[w+4],l[w+5]);d.copy(a).add(b).add(c).divideScalar(3);var B=Math.atan2(d.z,-d.x);g(e,w+0,a,B);
g(f,w+2,b,B);g(h,w+4,c,B)}for(a=0;a<l.length;a+=6)b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1))})();this.setAttribute("position",new C(k,3));this.setAttribute("normal",new C(k.slice(),3));this.setAttribute("uv",new C(l,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Yd(a,b){M.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Sc(a,b));this.mergeVertices()}
function Sc(a,b){Ga.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Zd(a,b){M.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new ec(a,b));this.mergeVertices()}function ec(a,b){Ga.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function $d(a,b){M.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Tc(a,b));this.mergeVertices()}function Tc(a,b){var c=(1+Math.sqrt(5))/2;Ga.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function ae(a,b){M.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Uc(a,b));this.mergeVertices()}function Uc(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Ga.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,
6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function be(a,b,c,d,e,f){M.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new fc(a,b,c,d,e);this.tangents=a.tangents;this.normals=
a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function fc(a,b,c,d,e){function f(e){h=a.getPointAt(e/b,h);var f=g.normals[e];e=g.binormals[e];for(q=0;q<=d;q++){var m=q/d*Math.PI*2,p=Math.sin(m);m=-Math.cos(m);l.x=m*f.x+p*e.x;l.y=m*f.y+p*e.y;l.z=m*f.z+p*e.z;l.normalize();r.push(l.x,l.y,l.z);k.x=h.x+c*l.x;k.y=h.y+c*l.y;k.z=h.z+c*l.z;t.push(k.x,k.y,k.z)}}G.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,
closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var k=new n,l=new n,m=new x,h=new n,p,q,t=[],r=[],u=[],z=[];for(p=0;p<b;p++)f(p);f(!1===e?b:0);for(p=0;p<=b;p++)for(q=0;q<=d;q++)m.x=p/b,m.y=q/d,u.push(m.x,m.y);(function(){for(q=1;q<=b;q++)for(p=1;p<=d;p++){var a=(d+1)*q+(p-1),c=(d+1)*q+p,e=(d+1)*(q-1)+p;z.push((d+1)*(q-1)+(p-1),a,e);z.push(a,c,e)}})();this.setIndex(z);this.setAttribute("position",new C(t,
3));this.setAttribute("normal",new C(r,3));this.setAttribute("uv",new C(u,2))}function ce(a,b,c,d,e,f,g){M.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Vc(a,b,c,d,e,f));this.mergeVertices()}function Vc(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*
(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}G.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var k=[],l=[],m=[],h=[],p,q=new n,t=new n,r=new n,u=new n,z=new n,w=new n,B=new n;for(p=0;p<=c;++p){var x=p/c*e*Math.PI*2;g(x,e,f,a,r);g(x+.01,e,f,a,u);w.subVectors(u,r);B.addVectors(u,r);z.crossVectors(w,B);B.crossVectors(z,w);z.normalize();B.normalize();
for(x=0;x<=d;++x){var y=x/d*Math.PI*2,A=-b*Math.cos(y);y=b*Math.sin(y);q.x=r.x+(A*B.x+y*z.x);q.y=r.y+(A*B.y+y*z.y);q.z=r.z+(A*B.z+y*z.z);l.push(q.x,q.y,q.z);t.subVectors(q,r).normalize();m.push(t.x,t.y,t.z);h.push(p/c);h.push(x/d)}}for(x=1;x<=c;x++)for(p=1;p<=d;p++)a=(d+1)*x+(p-1),b=(d+1)*x+p,e=(d+1)*(x-1)+p,k.push((d+1)*(x-1)+(p-1),a,e),k.push(a,b,e);this.setIndex(k);this.setAttribute("position",new C(l,3));this.setAttribute("normal",new C(m,3));this.setAttribute("uv",new C(h,2))}function de(a,b,
c,d,e){M.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Wc(a,b,c,d,e));this.mergeVertices()}function Wc(a,b,c,d,e){G.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],k=[],l=[],m=new n,h=new n,p=new n,q,t;for(q=0;q<=c;q++)for(t=0;t<=d;t++){var r=t/d*e,u=q/c*
Math.PI*2;h.x=(a+b*Math.cos(u))*Math.cos(r);h.y=(a+b*Math.cos(u))*Math.sin(r);h.z=b*Math.sin(u);g.push(h.x,h.y,h.z);m.x=a*Math.cos(r);m.y=a*Math.sin(r);p.subVectors(h,m).normalize();k.push(p.x,p.y,p.z);l.push(t/d);l.push(q/c)}for(q=1;q<=c;q++)for(t=1;t<=d;t++)a=(d+1)*(q-1)+t-1,b=(d+1)*(q-1)+t,e=(d+1)*q+t,f.push((d+1)*q+t-1,a,e),f.push(a,b,e);this.setIndex(f);this.setAttribute("position",new C(g,3));this.setAttribute("normal",new C(k,3));this.setAttribute("uv",new C(l,2))}function Zh(a,b,c,d,e){for(var f,
g=0,k=b,l=c-d;k<c;k+=d)g+=(a[l]-a[k])*(a[k+1]+a[l+1]),l=k;if(e===0<g)for(e=b;e<c;e+=d)f=$h(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=$h(e,a[e],a[e+1],f);f&&gc(f,f.next)&&(ee(f),f=f.next);return f}function fe(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!gc(a,a.next)&&0!==ta(a.prev,a,a.next))a=a.next;else{ee(a);a=b=a.prev;if(a===a.next)break;c=!0}}while(c||a!==b);return b}function ge(a,b,c,d,e,f,g){if(a){if(!g&&f){var k=a,l=k;do null===l.z&&(l.z=ug(l.x,l.y,d,e,f)),l.prevZ=l.prev,l=l.nextZ=
l.next;while(l!==k);l.prevZ.nextZ=null;l.prevZ=null;k=l;var m,h,p,q,t=1;do{l=k;var r=k=null;for(h=0;l;){h++;var n=l;for(m=p=0;m<t&&(p++,n=n.nextZ,n);m++);for(q=t;0<p||0<q&&n;)0!==p&&(0===q||!n||l.z<=n.z)?(m=l,l=l.nextZ,p--):(m=n,n=n.nextZ,q--),r?r.nextZ=m:k=m,m.prevZ=r,r=m;l=n}r.nextZ=null;t*=2}while(1<h)}for(k=a;a.prev!==a.next;){l=a.prev;n=a.next;if(f)r=Hk(a,d,e,f);else a:if(r=a,h=r.prev,p=r,t=r.next,0<=ta(h,p,t))r=!1;else{for(m=r.next.next;m!==r.prev;){if(Xc(h.x,h.y,p.x,p.y,t.x,t.y,m.x,m.y)&&0<=
ta(m.prev,m,m.next)){r=!1;break a}m=m.next}r=!0}if(r)b.push(l.i/c),b.push(a.i/c),b.push(n.i/c),ee(a),k=a=n.next;else if(a=n,a===k){if(!g)ge(fe(a),b,c,d,e,f,1);else if(1===g){g=b;k=c;l=a;do n=l.prev,r=l.next.next,!gc(n,r)&&ai(n,l,l.next,r)&&he(n,r)&&he(r,n)&&(g.push(n.i/k),g.push(l.i/k),g.push(r.i/k),ee(l),ee(l.next),l=a=r),l=l.next;while(l!==a);a=l;ge(a,b,c,d,e,f,2)}else if(2===g)a:{g=a;do{for(k=g.next.next;k!==g.prev;){if(l=g.i!==k.i){l=g;n=k;if(r=l.next.i!==n.i&&l.prev.i!==n.i){b:{r=l;do{if(r.i!==
l.i&&r.next.i!==l.i&&r.i!==n.i&&r.next.i!==n.i&&ai(r,r.next,l,n)){r=!0;break b}r=r.next}while(r!==l);r=!1}r=!r}if(r=r&&he(l,n)&&he(n,l)){r=l;h=!1;p=(l.x+n.x)/2;n=(l.y+n.y)/2;do r.y>n!==r.next.y>n&&r.next.y!==r.y&&p<(r.next.x-r.x)*(n-r.y)/(r.next.y-r.y)+r.x&&(h=!h),r=r.next;while(r!==l);r=h}l=r}if(l){a=bi(g,k);g=fe(g,g.next);a=fe(a,a.next);ge(g,b,c,d,e,f);ge(a,b,c,d,e,f);break a}k=k.next}g=g.next}while(g!==a)}break}}}}function Hk(a,b,c,d){var e=a.prev,f=a.next;if(0<=ta(e,a,f))return!1;var g=e.x>a.x?
e.x>f.x?e.x:f.x:a.x>f.x?a.x:f.x,k=e.y>a.y?e.y>f.y?e.y:f.y:a.y>f.y?a.y:f.y,l=ug(e.x<a.x?e.x<f.x?e.x:f.x:a.x<f.x?a.x:f.x,e.y<a.y?e.y<f.y?e.y:f.y:a.y<f.y?a.y:f.y,b,c,d);b=ug(g,k,b,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=b;){if(c!==a.prev&&c!==a.next&&Xc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=ta(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&Xc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ta(d.prev,d,d.next))return!1;d=d.nextZ}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&Xc(e.x,e.y,a.x,a.y,
f.x,f.y,c.x,c.y)&&0<=ta(c.prev,c,c.next))return!1;c=c.prevZ}for(;d&&d.z<=b;){if(d!==a.prev&&d!==a.next&&Xc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ta(d.prev,d,d.next))return!1;d=d.nextZ}return!0}function Ik(a,b){return a.x-b.x}function Jk(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next}var k=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!k)return null;
if(d===f)return k.prev;b=k;g=k.x;var l=k.y,m=Infinity;for(c=k.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&Xc(e<l?d:f,e,g,l,e<l?f:d,e,c.x,c.y)){var h=Math.abs(e-c.y)/(d-c.x);(h<m||h===m&&c.x>k.x)&&he(c,a)&&(k=c,m=h)}c=c.next}return k}function ug(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function Kk(a){var b=a,c=a;do{if(b.x<c.x||
b.x===c.x&&b.y<c.y)c=b;b=b.next}while(b!==a);return c}function Xc(a,b,c,d,e,f,g,k){return 0<=(e-g)*(b-k)-(a-g)*(f-k)&&0<=(a-g)*(d-k)-(c-g)*(b-k)&&0<=(c-g)*(f-k)-(e-g)*(d-k)}function ta(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function gc(a,b){return a.x===b.x&&a.y===b.y}function ai(a,b,c,d){return gc(a,c)&&gc(b,d)||gc(a,d)&&gc(c,b)?!0:0<ta(a,b,c)!==0<ta(a,b,d)&&0<ta(c,d,a)!==0<ta(c,d,b)}function he(a,b){return 0>ta(a.prev,a,a.next)?0<=ta(a,b,a.next)&&0<=ta(a,a.prev,b):0>ta(a,b,a.prev)||
0>ta(a,a.next,b)}function bi(a,b){var c=new vg(a.i,a.x,a.y),d=new vg(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}function $h(a,b,c,d){a=new vg(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function ee(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function vg(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=
this.prev=null;this.steiner=!1}function ci(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function di(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function hc(a,b){M.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new gb(a,b));this.mergeVertices()}function gb(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function g(a,b,c){var d=a.x-
b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,k=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var l=Math.sqrt(k),m=Math.sqrt(f*f+g*g);k=b.x-e/l;b=b.y+d/l;g=((c.x-g/m-k)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=k+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new x(f,d);e=Math.sqrt(e/2)}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(k)):(f=d,d=e,e=Math.sqrt(k/2));return new x(f/e,d/e)}function k(a,b){for(J=a.length;0<=
--J;){var c=J;var f=J-1;0>f&&(f=a.length-1);var g,k=B+2*C;for(g=0;g<k;g++){var l=X*g,m=X*(g+1),h=b+f+l,p=b+f+m;m=b+c+m;r(b+c+l);r(h);r(m);r(h);r(p);r(m);l=e.length/3;l=F.generateSideWallUV(d,e,l-6,l-3,l-2,l-1);u(l[0]);u(l[1]);u(l[3]);u(l[1]);u(l[2]);u(l[3])}}}function l(a,b,c){z.push(a);z.push(b);z.push(c)}function h(a,b,c){r(a);r(b);r(c);a=e.length/3;a=F.generateTopUV(d,e,a-3,a-2,a-1);u(a[0]);u(a[1]);u(a[2])}function r(a){e.push(z[3*a]);e.push(z[3*a+1]);e.push(z[3*a+2])}function u(a){f.push(a.x);
f.push(a.y)}var z=[],w=void 0!==b.curveSegments?b.curveSegments:12,B=void 0!==b.steps?b.steps:1,U=void 0!==b.depth?b.depth:100,y=void 0!==b.bevelEnabled?b.bevelEnabled:!0,A=void 0!==b.bevelThickness?b.bevelThickness:6,aa=void 0!==b.bevelSize?b.bevelSize:A-2,G=void 0!==b.bevelOffset?b.bevelOffset:0,C=void 0!==b.bevelSegments?b.bevelSegments:3,D=b.extrudePath,F=void 0!==b.UVGenerator?b.UVGenerator:Lk;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
U=b.amount);var E=!1;if(D){var I=D.getSpacedPoints(B);E=!0;y=!1;var K=D.computeFrenetFrames(B,!1);var L=new n;var M=new n;var O=new n}y||(G=aa=A=C=0);var N;w=a.extractPoints(w);a=w.shape;var P=w.holes;if(!tb.isClockWise(a)){a=a.reverse();var da=0;for(N=P.length;da<N;da++){var ha=P[da];tb.isClockWise(ha)&&(P[da]=ha.reverse())}}var Y=tb.triangulateShape(a,P),W=a;da=0;for(N=P.length;da<N;da++)ha=P[da],a=a.concat(ha);var Q,X=a.length,T,ca=Y.length;w=[];var J=0;var R=W.length;var V=R-1;for(Q=J+1;J<R;J++,
V++,Q++)V===R&&(V=0),Q===R&&(Q=0),w[J]=g(W[J],W[V],W[Q]);D=[];var ea=w.concat();da=0;for(N=P.length;da<N;da++){ha=P[da];var ba=[];J=0;R=ha.length;V=R-1;for(Q=J+1;J<R;J++,V++,Q++)V===R&&(V=0),Q===R&&(Q=0),ba[J]=g(ha[J],ha[V],ha[Q]);D.push(ba);ea=ea.concat(ba)}for(V=0;V<C;V++){R=V/C;var fa=A*Math.cos(R*Math.PI/2);Q=aa*Math.sin(R*Math.PI/2)+G;J=0;for(R=W.length;J<R;J++){var S=c(W[J],w[J],Q);l(S.x,S.y,-fa)}da=0;for(N=P.length;da<N;da++)for(ha=P[da],ba=D[da],J=0,R=ha.length;J<R;J++)S=c(ha[J],ba[J],Q),
l(S.x,S.y,-fa)}Q=aa+G;for(J=0;J<X;J++)S=y?c(a[J],ea[J],Q):a[J],E?(M.copy(K.normals[0]).multiplyScalar(S.x),L.copy(K.binormals[0]).multiplyScalar(S.y),O.copy(I[0]).add(M).add(L),l(O.x,O.y,O.z)):l(S.x,S.y,0);for(R=1;R<=B;R++)for(J=0;J<X;J++)S=y?c(a[J],ea[J],Q):a[J],E?(M.copy(K.normals[R]).multiplyScalar(S.x),L.copy(K.binormals[R]).multiplyScalar(S.y),O.copy(I[R]).add(M).add(L),l(O.x,O.y,O.z)):l(S.x,S.y,U/B*R);for(V=C-1;0<=V;V--){R=V/C;fa=A*Math.cos(R*Math.PI/2);Q=aa*Math.sin(R*Math.PI/2)+G;J=0;for(R=
W.length;J<R;J++)S=c(W[J],w[J],Q),l(S.x,S.y,U+fa);da=0;for(N=P.length;da<N;da++)for(ha=P[da],ba=D[da],J=0,R=ha.length;J<R;J++)S=c(ha[J],ba[J],Q),E?l(S.x,S.y+I[B-1].y,I[B-1].x+fa):l(S.x,S.y,U+fa)}(function(){var a=e.length/3;if(y){var b=0*X;for(J=0;J<ca;J++)T=Y[J],h(T[2]+b,T[1]+b,T[0]+b);b=X*(B+2*C);for(J=0;J<ca;J++)T=Y[J],h(T[0]+b,T[1]+b,T[2]+b)}else{for(J=0;J<ca;J++)T=Y[J],h(T[2],T[1],T[0]);for(J=0;J<ca;J++)T=Y[J],h(T[0]+X*B,T[1]+X*B,T[2]+X*B)}d.addGroup(a,e.length/3-a,0)})();(function(){var a=e.length/
3,b=0;k(W,b);b+=W.length;da=0;for(N=P.length;da<N;da++)ha=P[da],k(ha,b),b+=ha.length;d.addGroup(a,e.length/3-a,1)})()}G.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=Array.isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,k=a.length;g<k;g++)c(a[g]);this.setAttribute("position",new C(e,3));this.setAttribute("uv",new C(f,2));this.computeVertexNormals()}function ei(a,b,c){c.shapes=[];if(Array.isArray(a))for(var d=0,e=a.length;d<e;d++)c.shapes.push(a[d].uuid);else c.shapes.push(a.uuid);
void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c}function ie(a,b){M.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Yc(a,b));this.mergeVertices()}function Yc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new M;a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);
void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);gb.call(this,a,b);this.type="TextBufferGeometry"}function je(a,b,c,d,e,f,g){M.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new ic(a,b,c,d,e,f,g));this.mergeVertices()}function ic(a,b,c,d,e,f,g){G.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,
phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var k=Math.min(f+g,Math.PI),l,m,h=0,p=[],q=new n,t=new n,r=[],u=[],z=[],w=[];for(m=0;m<=c;m++){var B=[],x=m/c,y=0;0==m&&0==f?y=.5/b:m==c&&k==Math.PI&&(y=-.5/b);for(l=0;l<=b;l++){var A=l/b;q.x=-a*Math.cos(d+A*e)*Math.sin(f+x*g);q.y=a*Math.cos(f+x*g);q.z=a*Math.sin(d+A*e)*Math.sin(f+x*g);u.push(q.x,q.y,
q.z);t.copy(q).normalize();z.push(t.x,t.y,t.z);w.push(A+y,1-x);B.push(h++)}p.push(B)}for(m=0;m<c;m++)for(l=0;l<b;l++)a=p[m][l+1],d=p[m][l],e=p[m+1][l],g=p[m+1][l+1],(0!==m||0<f)&&r.push(a,d,g),(m!==c-1||k<Math.PI)&&r.push(d,e,g);this.setIndex(r);this.setAttribute("position",new C(u,3));this.setAttribute("normal",new C(z,3));this.setAttribute("uv",new C(w,2))}function ke(a,b,c,d,e,f){M.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,
thetaLength:f};this.fromBufferGeometry(new Zc(a,b,c,d,e,f));this.mergeVertices()}function Zc(a,b,c,d,e,f){G.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],k=[],l=[],m=[],h=a,p=(b-a)/d,q=new n,t=new x,r,u;for(r=0;r<=d;r++){for(u=0;u<=c;u++)a=e+u/c*f,q.x=h*Math.cos(a),q.y=h*Math.sin(a),
k.push(q.x,q.y,q.z),l.push(0,0,1),t.x=(q.x/b+1)/2,t.y=(q.y/b+1)/2,m.push(t.x,t.y);h+=p}for(r=0;r<d;r++)for(b=r*(c+1),u=0;u<c;u++)a=u+b,e=a+c+1,f=a+c+2,h=a+1,g.push(a,e,h),g.push(e,f,h);this.setIndex(g);this.setAttribute("position",new C(k,3));this.setAttribute("normal",new C(l,3));this.setAttribute("uv",new C(m,2))}function le(a,b,c,d){M.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new $c(a,b,c,d));this.mergeVertices()}function $c(a,
b,c,d){G.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=O.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],k=1/b,l=new n,m=new x,h;for(h=0;h<=b;h++){var p=c+h*k*d;var q=Math.sin(p),t=Math.cos(p);for(p=0;p<=a.length-1;p++)l.x=a[p].x*q,l.y=a[p].y,l.z=a[p].x*t,f.push(l.x,l.y,l.z),m.x=h/b,m.y=p/(a.length-1),g.push(m.x,m.y)}for(h=0;h<b;h++)for(p=0;p<a.length-1;p++)c=p+h*a.length,k=c+a.length,l=c+a.length+1,m=c+
1,e.push(c,k,m),e.push(k,l,m);this.setIndex(e);this.setAttribute("position",new C(f,3));this.setAttribute("uv",new C(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new n,f=new n,g=new n,c=b*a.length*3,p=h=0;h<a.length;h++,p+=3)e.x=d[p+0],e.y=d[p+1],e.z=d[p+2],f.x=d[c+p+0],f.y=d[c+p+1],f.z=d[c+p+2],g.addVectors(e,f).normalize(),d[p+0]=d[c+p+0]=g.x,d[p+1]=d[c+p+1]=g.y,d[p+2]=d[c+p+2]=g.z}function jc(a,b){M.call(this);this.type="ShapeGeometry";"object"===typeof b&&
(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new kc(a,b));this.mergeVertices()}function kc(a,b){function c(a){var c,k=e.length/3;a=a.extractPoints(b);var m=a.shape,h=a.holes;!1===tb.isClockWise(m)&&(m=m.reverse());a=0;for(c=h.length;a<c;a++){var v=h[a];!0===tb.isClockWise(v)&&(h[a]=v.reverse())}var n=tb.triangulateShape(m,h);a=0;for(c=h.length;a<c;a++)v=h[a],m=m.concat(v);a=0;for(c=m.length;a<
c;a++)v=m[a],e.push(v.x,v.y,0),f.push(0,0,1),g.push(v.x,v.y);a=0;for(c=n.length;a<c;a++)m=n[a],d.push(m[0]+k,m[1]+k,m[2]+k),l+=3}G.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],k=0,l=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(k,l,m),k+=l,l=0;this.setIndex(d);this.setAttribute("position",new C(e,3));this.setAttribute("normal",new C(f,3));this.setAttribute("uv",new C(g,2))}function fi(a,
b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);return b}function ad(a,b){G.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(O.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new M;g.fromBufferGeometry(a)}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var k=0,l=g.length;k<l;k++)for(var m=g[k],h=0;3>h;h++){var p=
m[f[h]];var q=m[f[(h+1)%3]];d[0]=Math.min(p,q);d[1]=Math.max(p,q);p=d[0]+","+d[1];void 0===e[p]?e[p]={index1:d[0],index2:d[1],face1:k,face2:void 0}:e[p].face2=k}for(p in e)if(d=e[p],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.setAttribute("position",new C(c,3))}function lc(a,b,c,d,e,f,g,k){M.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,
openEnded:f,thetaStart:g,thetaLength:k};this.fromBufferGeometry(new ub(a,b,c,d,e,f,g,k));this.mergeVertices()}function ub(a,b,c,d,e,f,g,k){function l(c){var e,f=new x,l=new n,v=0,u=!0===c?a:b,B=!0===c?1:-1;var y=r;for(e=1;e<=d;e++)p.push(0,z*B,0),q.push(0,B,0),t.push(.5,.5),r++;var F=r;for(e=0;e<=d;e++){var C=e/d*k+g,G=Math.cos(C);C=Math.sin(C);l.x=u*C;l.y=z*B;l.z=u*G;p.push(l.x,l.y,l.z);q.push(0,B,0);f.x=.5*G+.5;f.y=.5*C*B+.5;t.push(f.x,f.y);r++}for(e=0;e<d;e++)f=y+e,l=F+e,!0===c?h.push(l,l+1,f):
h.push(l+1,l,f),v+=3;m.addGroup(w,v,!0===c?1:2);w+=v}G.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:k};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;k=void 0!==k?k:2*Math.PI;var h=[],p=[],q=[],t=[],r=0,u=[],z=c/2,w=0;(function(){var f,l,v=new n,A=new n,x=0,y=(b-a)/c;for(l=0;l<=e;l++){var C=[],G=l/
e,F=G*(b-a)+a;for(f=0;f<=d;f++){var D=f/d,E=D*k+g,I=Math.sin(E);E=Math.cos(E);A.x=F*I;A.y=-G*c+z;A.z=F*E;p.push(A.x,A.y,A.z);v.set(I,y,E).normalize();q.push(v.x,v.y,v.z);t.push(D,1-G);C.push(r++)}u.push(C)}for(f=0;f<d;f++)for(l=0;l<e;l++)v=u[l+1][f],A=u[l+1][f+1],y=u[l][f+1],h.push(u[l][f],v,y),h.push(v,A,y),x+=6;m.addGroup(w,x,0);w+=x})();!1===f&&(0<a&&l(!0),0<b&&l(!1));this.setIndex(h);this.setAttribute("position",new C(p,3));this.setAttribute("normal",new C(q,3));this.setAttribute("uv",new C(t,
2))}function me(a,b,c,d,e,f,g){lc.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function ne(a,b,c,d,e,f,g){ub.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function oe(a,b,c,d){M.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,
thetaLength:d};this.fromBufferGeometry(new bd(a,b,c,d));this.mergeVertices()}function bd(a,b,c,d){G.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],k=[],l,m=new n,h=new x;f.push(0,0,0);g.push(0,0,1);k.push(.5,.5);var p=0;for(l=3;p<=b;p++,l+=3){var q=c+p/b*d;m.x=a*Math.cos(q);m.y=a*Math.sin(q);f.push(m.x,m.y,m.z);g.push(0,0,1);h.x=(f[l]/a+1)/
2;h.y=(f[l+1]/a+1)/2;k.push(h.x,h.y)}for(l=1;l<=b;l++)e.push(l,l+1,0);this.setIndex(e);this.setAttribute("position",new C(f,3));this.setAttribute("normal",new C(g,3));this.setAttribute("uv",new C(k,2))}function mc(a){L.call(this);this.type="ShadowMaterial";this.color=new y(0);this.transparent=!0;this.setValues(a)}function vb(a){oa.call(this,a);this.type="RawShaderMaterial"}function hb(a){L.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new y(16777215);this.roughness=
1;this.metalness=0;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new y(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new x(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=
1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function nc(a){hb.call(this);this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearcoatRoughness=this.clearcoat=0;this.sheen=null;this.clearcoatNormalScale=new x(1,1);this.clearcoatNormalMap=null;this.transparency=0;this.setValues(a)}function Kb(a){L.call(this);this.type="MeshPhongMaterial";this.color=new y(16777215);this.specular=
new y(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new y(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new x(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=
1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function oc(a){L.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.color=new y(16777215);this.specular=new y(1118481);this.shininess=30;this.lightMap=this.gradientMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new y(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=
null;this.normalMapType=0;this.normalScale=new x(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=this.specularMap=null;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function pc(a){L.call(this);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new x(1,1);this.displacementMap=
null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.fog=!1;this.setValues(a)}function qc(a){L.call(this);this.type="MeshLambertMaterial";this.color=new y(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new y(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=
1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function rc(a){L.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new y(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new x(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=
0;this.alphaMap=null;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function sc(a){ja.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a)}function Ka(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function We(a,b,c,d){Ka.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function pe(a,b,c,
d){Ka.call(this,a,b,c,d)}function Xe(a,b,c,d){Ka.call(this,a,b,c,d)}function ra(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=ea.convertArray(b,this.TimeBufferType);this.values=ea.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation)}function Ye(a,b,c){ra.call(this,a,b,c)}function Ze(a,b,c,d){ra.call(this,a,b,
c,d)}function cd(a,b,c,d){ra.call(this,a,b,c,d)}function $e(a,b,c,d){Ka.call(this,a,b,c,d)}function qe(a,b,c,d){ra.call(this,a,b,c,d)}function af(a,b,c,d){ra.call(this,a,b,c,d)}function dd(a,b,c,d){ra.call(this,a,b,c,d)}function Qa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=O.generateUUID();0>this.duration&&this.resetDuration()}function Mk(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return cd;case "vector":case "vector2":case "vector3":case "vector4":return dd;
case "color":return Ze;case "quaternion":return qe;case "bool":case "boolean":return Ye;case "string":return af}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function Nk(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=Mk(a.type);if(void 0===a.times){var c=[],d=[];ea.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)}function wg(a,b,c){var d=this,e=
!1,f=0,g=0,k=void 0,l=[];this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)};this.resolveURL=function(a){return k?k(a):a};this.setURLModifier=function(a){k=a;return this};this.addHandler=function(a,b){l.push(a,b);return this};
this.removeHandler=function(a){a=l.indexOf(a);-1!==a&&l.splice(a,2);return this};this.getHandler=function(a){for(var b=0,c=l.length;b<c;b+=2){var d=l[b],e=l[b+1];d.global&&(d.lastIndex=0);if(d.test(a))return e}return null}}function Q(a){this.manager=void 0!==a?a:gi;this.crossOrigin="anonymous";this.resourcePath=this.path=""}function Ra(a){Q.call(this,a)}function xg(a){Q.call(this,a)}function yg(a){Q.call(this,a)}function bf(a){Q.call(this,a)}function ed(a){Q.call(this,a)}function cf(a){Q.call(this,
a)}function df(a){Q.call(this,a)}function I(){this.type="Curve";this.arcLengthDivisions=200}function La(a,b,c,d,e,f,g,k){I.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=k||0}function fd(a,b,c,d,e,f){La.call(this,a,b,c,c,d,e,f);this.type="ArcCurve"}function zg(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,k,l){e=l*(g-e);k=l*(k-f);a=f;b=e;c=-3*f+3*g-
2*e-k;d=2*f-2*g+e+k},initNonuniformCatmullRom:function(e,f,g,k,l,m,h){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;k=((g-f)/m-(k-f)/(m+h)+(k-g)/h)*m;a=f;b=e;c=-3*f+3*g-2*e-k;d=2*f-2*g+e+k},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function Aa(a,b,c,d){I.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5}function hi(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function re(a,b,c,
d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function se(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function Wa(a,b,c,d){I.call(this);this.type="CubicBezierCurve";this.v0=a||new x;this.v1=b||new x;this.v2=c||new x;this.v3=d||new x}function ib(a,b,c,d){I.call(this);this.type="CubicBezierCurve3";this.v0=a||new n;this.v1=b||new n;this.v2=c||new n;this.v3=d||new n}function Ea(a,b){I.call(this);this.type="LineCurve";this.v1=a||new x;this.v2=b||new x}function Xa(a,b){I.call(this);
this.type="LineCurve3";this.v1=a||new n;this.v2=b||new n}function Ya(a,b,c){I.call(this);this.type="QuadraticBezierCurve";this.v0=a||new x;this.v1=b||new x;this.v2=c||new x}function jb(a,b,c){I.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new n;this.v1=b||new n;this.v2=c||new n}function Za(a){I.call(this);this.type="SplineCurve";this.points=a||[]}function wb(){I.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1}function $a(a){wb.call(this);this.type="Path";this.currentPoint=
new x;a&&this.setFromPoints(a)}function Lb(a){$a.call(this,a);this.uuid=O.generateUUID();this.type="Shape";this.holes=[]}function ba(a,b){D.call(this);this.type="Light";this.color=new y(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function ef(a,b,c){ba.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(D.DefaultUp);this.updateMatrix();this.groundColor=new y(b)}function kb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new x(512,512);this.mapPass=
this.map=null;this.matrix=new P;this._frustum=new Hd;this._frameExtents=new x(1,1);this._viewportCount=1;this._viewports=[new S(0,0,1,1)]}function ff(){kb.call(this,new pa(50,1,.5,500))}function gf(a,b,c,d,e,f){ba.call(this,a,b);this.type="SpotLight";this.position.copy(D.DefaultUp);this.updateMatrix();this.target=new D;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/
3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new ff}function Ag(){kb.call(this,new pa(90,1,.5,500));this._frameExtents=new x(4,2);this._viewportCount=6;this._viewports=[new S(2,1,1,1),new S(0,1,1,1),new S(3,1,1,1),new S(1,1,1,1),new S(3,0,1,1),new S(1,0,1,1)];this._cubeDirections=[new n(1,0,0),new n(-1,0,0),new n(0,0,1),new n(0,0,-1),new n(0,1,0),new n(0,-1,0)];this._cubeUps=[new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,1,0),new n(0,0,1),new n(0,0,-1)]}function hf(a,b,c,
d){ba.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new Ag}function gd(a,b,c,d,e,f){db.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;
this.updateProjectionMatrix()}function jf(){kb.call(this,new gd(-5,5,5,-5,.5,500))}function kf(a,b){ba.call(this,a,b);this.type="DirectionalLight";this.position.copy(D.DefaultUp);this.updateMatrix();this.target=new D;this.shadow=new jf}function lf(a,b){ba.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function mf(a,b,c,d){ba.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function nf(a){Q.call(this,a);this.textures={}}function of(){G.call(this);
this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function pf(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));K.call(this,a,b,c);this.meshPerAttribute=d||1}function qf(a){Q.call(this,a)}function rf(a){Q.call(this,a)}function Bg(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
Q.call(this,a);this.options=void 0}function Cg(){this.type="ShapePath";this.color=new y;this.subPaths=[];this.currentPath=null}function Dg(a){this.type="Font";this.data=a}function Eg(a){Q.call(this,a)}function sf(a){Q.call(this,a)}function tf(){this.coefficients=[];for(var a=0;9>a;a++)this.coefficients.push(new n)}function ab(a,b){ba.call(this,void 0,b);this.sh=void 0!==a?a:new tf}function Fg(a,b,c){ab.call(this,void 0,c);a=(new y).set(a);c=(new y).set(b);b=new n(a.r,a.g,a.b);a=new n(c.r,c.g,c.b);
c=Math.sqrt(Math.PI);var d=c*Math.sqrt(.75);this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d)}function Gg(a,b){ab.call(this,void 0,b);a=(new y).set(a);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI))}function ii(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new pa;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new pa;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=
!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}function Hg(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function Ig(){D.call(this);this.type="AudioListener";this.context=Jg.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;this.timeDelta=0;this._clock=new Hg}function hd(a){D.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=
this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.loopEnd=this.loopStart=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this._pausedAt=this._startedAt=0;this.filters=[]}function Kg(a){hd.call(this,a);this.panner=this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain)}function Lg(a,b){this.analyser=a.context.createAnalyser();
this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function Mg(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function ji(a,b,c){c=c||Ba.parseTrackName(b);this._targetGroup=a;this._bindings=
a.subscribe_(b,c)}function Ba(a,b,c){this.path=b;this.parsedPath=c||Ba.parseTrackName(b);this.node=Ba.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function ki(){this.uuid=O.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length},
get inUse(){return this.total-d.nCachedObjects_}},get bindingsPerObject(){return d._bindings.length}}}function li(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=
2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function Ng(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function uf(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Og(a,b,c){sb.call(this,
a,b);this.meshPerAttribute=c||1}function mi(a,b,c,d){this.ray=new Wb(a,b);this.near=c||0;this.far=d||Infinity;this.camera=null;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function ni(a,b){return a.distance-b.distance}function Pg(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=
a.length;d<e;d++)Pg(a[d],b,c,!0)}}function oi(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function pi(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function Qg(a,b){this.min=void 0!==a?a:new x(Infinity,Infinity);this.max=void 0!==b?b:new x(-Infinity,-Infinity)}function Rg(a,b){this.start=void 0!==a?a:new n;this.end=void 0!==b?b:new n}function te(a){D.call(this);this.material=a;this.render=function(){}}
function id(a,b){D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new G;b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.setAttribute("position",new C(b,3));b=new ja({fog:!1});this.cone=new la(a,b);this.add(this.cone);this.update()}function qi(a){var b=[];a&&a.isBone&&b.push(a);for(var c=
0;c<a.children.length;c++)b.push.apply(b,qi(a.children[c]));return b}function jd(a){for(var b=qi(a),c=new G,d=[],e=[],f=new y(0,0,1),g=new y(0,1,0),k=0;k<b.length;k++){var l=b[k];l.parent&&l.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.setAttribute("position",new C(d,3));c.setAttribute("color",new C(e,3));d=new ja({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});la.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=
!1}function kd(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new ic(b,4,2);b=new Oa({wireframe:!0,fog:!1});ca.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function ld(a,b,c){D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new ec(b);a.rotateY(.5*Math.PI);this.material=new Oa({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");
b=new Float32Array(3*b.count);a.setAttribute("color",new K(b,3));this.add(new ca(a,this.material));this.update()}function vf(a,b,c,d){a=a||10;b=b||10;c=new y(void 0!==c?c:4473924);d=new y(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var k=[],l=0,m=0,h=-g;l<=b;l++,h+=f){a.push(-g,0,h,g,0,h);a.push(h,0,-g,h,0,g);var p=l===e?c:d;p.toArray(k,m);m+=3;p.toArray(k,m);m+=3;p.toArray(k,m);m+=3;p.toArray(k,m);m+=3}b=new G;b.setAttribute("position",new C(a,3));b.setAttribute("color",new C(k,3));c=new ja({vertexColors:2});
la.call(this,b,c)}function wf(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new y(void 0!==e?e:4473924);f=new y(void 0!==f?f:8947848);var g=[],k=[],l;for(l=0;l<=b;l++){var m=l/b*2*Math.PI;var h=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(h,0,m);var p=l&1?e:f;k.push(p.r,p.g,p.b);k.push(p.r,p.g,p.b)}for(l=0;l<=c;l++){p=l&1?e:f;var q=a-a/c*l;for(b=0;b<d;b++)m=b/d*2*Math.PI,h=Math.sin(m)*q,m=Math.cos(m)*q,g.push(h,0,m),k.push(p.r,p.g,p.b),m=(b+1)/d*2*Math.PI,h=Math.sin(m)*q,m=Math.cos(m)*q,g.push(h,
0,m),k.push(p.r,p.g,p.b)}a=new G;a.setAttribute("position",new C(g,3));a.setAttribute("color",new C(k,3));g=new ja({vertexColors:2});la.call(this,a,g)}function md(a,b,c){D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new G;a.setAttribute("position",new C([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new ja({fog:!1});this.lightPlane=new Ja(a,b);this.add(this.lightPlane);a=new G;a.setAttribute("position",new C([0,
0,0,0,0,1],3));this.targetLine=new Ja(a,b);this.add(this.targetLine);this.update()}function ue(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===k[a]&&(k[a]=[]);k[a].push(f.length/3-1)}var d=new G,e=new ja({color:16777215,vertexColors:1}),f=[],g=[],k={},l=new y(16755200),m=new y(16711680),h=new y(43775),p=new y(16777215),q=new y(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",
l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",h);b("u2","u3",h);b("u3","u1",h);b("c","t",p);b("p","c",q);b("cn1","cn2",q);b("cn3","cn4",q);b("cf1","cf2",q);b("cf3","cf4",q);d.setAttribute("position",new C(f,3));d.setAttribute("color",new C(g,3));la.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=
k;this.update()}function ia(a,b,c,d,e,f,g){xf.set(e,f,g).unproject(d);a=b[a];if(void 0!==a)for(c=c.getAttribute("position"),b=0,d=a.length;b<d;b++)c.setXYZ(a[b],xf.x,xf.y,xf.z)}function xb(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new G;d.setIndex(new K(a,1));d.setAttribute("position",new K(c,3));la.call(this,d,new ja({color:b}));this.matrixAutoUpdate=!1;this.update()}function ve(a,b){this.type="Box3Helper";
this.box=a;b=b||16776960;a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new G;c.setIndex(new K(a,1));c.setAttribute("position",new C([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));la.call(this,c,new ja({color:b}));this.geometry.computeBoundingSphere()}function we(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new G;b.setAttribute("position",new C([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,
0,0,1,0,0,0],3));b.computeBoundingSphere();Ja.call(this,b,new ja({color:a}));b=new G;b.setAttribute("position",new C([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new ca(b,new Oa({color:a,opacity:.2,transparent:!0,depthWrite:!1})))}function yb(a,b,c,d,e,f){D.call(this);void 0===a&&(a=new n(0,0,1));void 0===b&&(b=new n(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===yf&&(yf=new G,yf.setAttribute("position",new C([0,
0,0,0,1,0],3)),Sg=new ub(0,.5,1,5,1),Sg.translate(0,-.5,0));this.position.copy(b);this.line=new Ja(yf,new ja({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ca(Sg,new Oa({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function xe(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new G;a.setAttribute("position",new C(b,3));a.setAttribute("color",new C([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ja({vertexColors:2});
la.call(this,a,b)}function Tg(a){Y=a;Ug(zf)}function ri(a){var b={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:a?a.type:1009,format:a?a.format:1023,encoding:a?a.encoding:3002,depthBuffer:!1,stencilBuffer:!1},c=si(b);c.depthBuffer=a?!1:!0;Af=si(b);return c}function ti(){Af.dispose();Y.setRenderTarget(null);var a=Y.getSize(new x);Y.setViewport(0,0,a.x,a.y)}function Ug(a){var b=new pb;b.add(new ca(ye[0],a));Y.compile(b,Vg)}function si(a){a=new va(3*lb,3*lb,a);a.texture.mapping=306;a.texture.name=
"PMREM.cubeUv";a.scissorTest=!0;return a}function Wg(a,b,c,d){var e=1/Y.getPixelRatio();a*=e;b*=e;c*=e;d*=e;Y.setViewport(a,b,c,d);Y.setScissor(a,b,c,d)}function ui(a){var b=Y.autoClear;Y.autoClear=!1;for(var c=1;c<vi;c++)wi(a,c-1,c,Math.sqrt(Bf[c]*Bf[c]-Bf[c-1]*Bf[c-1]),xi[(c-1)%xi.length]);Y.autoClear=b}function wi(a,b,c,d,e){yi(a,Af,b,c,d,"latitudinal",e);yi(Af,a,c,c,d,"longitudinal",e)}function yi(a,b,c,d,e,f,g){"latitudinal"!==f&&"longitudinal"!==f&&console.error("blur direction must be either latitudinal or longitudinal!");
var k=new pb;k.add(new ca(ye[d],zf));var l=zf.uniforms,m=zi[c]-1;m=isFinite(e)?Math.PI/(2*m):2*Math.PI/39;var h=e/m,p=isFinite(e)?1+Math.floor(3*h):20;20<p&&console.warn("sigmaRadians, "+e+", is too large and will clip, as it requested "+p+" samples when the maximum is set to 20");for(var q=[],n=0,r=0;20>r;++r)e=r/h,e=Math.exp(-e*e/2),q.push(e),0==r?n+=e:r<p&&(n+=2*e);for(r=0;r<q.length;r++)q[r]/=n;l.envMap.value=a.texture;l.samples.value=p;l.weights.value=q;l.latitudinal.value="latitudinal"===f;
g&&(l.poleAxis.value=g);l.dTheta.value=m;l.mipInt.value=8-c;l.inputEncoding.value=mb[a.texture.encoding];l.outputEncoding.value=mb[a.texture.encoding];a=zi[d];e=3*Math.max(0,lb-2*a);d=(0===d?0:2*lb)+2*a*(4<d?d-8+4:0);Y.setRenderTarget(b);Wg(e,d,3*a,2*a);Y.render(k,Vg)}function Ai(){var a=new x(1,1);a=new vb({uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:mb[3E3]},outputEncoding:{value:mb[3E3]}},vertexShader:Xg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n"+
Yg()+"\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="EquirectangularToCubeUV";return a}function Bi(){var a=new vb({uniforms:{envMap:{value:null},inputEncoding:{value:mb[3E3]},outputEncoding:{value:mb[3E3]}},vertexShader:Xg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n"+Yg()+"\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="CubemapToCubeUV";return a}function Xg(){return"\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.z *= -1.0;\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.x *= -1.0;\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.y *= -1.0;\n\t} else if (face == 5.0) {\n\t\tdirection.xz *= -1.0;\n\t}\n\treturn direction;\n}\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"}
function Yg(){return"\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"}
function Ci(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Aa.call(this,a);this.type="catmullrom";this.closed=!0}function Di(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Aa.call(this,a);this.type="catmullrom"}function Zg(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");Aa.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,
-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&(Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=
Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b});Object.assign(Fa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,
b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)))},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});for(var ya=[],ze=0;256>ze;ze++)ya[ze]=(16>ze?"0":"")+ze.toString(16);var O={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|
0,d=4294967295*Math.random()|0;return(ya[a&255]+ya[a>>8&255]+ya[a>>16&255]+ya[a>>24&255]+"-"+ya[b&255]+ya[b>>8&255]+"-"+ya[b>>16&15|64]+ya[b>>24&255]+"-"+ya[c&63|128]+ya[c>>8&255]+"-"+ya[c>>16&255]+ya[c>>24&255]+ya[d&255]+ya[d>>8&255]+ya[d>>16&255]+ya[d>>24&255]).toUpperCase()},clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*O.DEG2RAD},radToDeg:function(a){return a*O.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,
Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}};Object.defineProperties(x.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(x.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},
setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},
subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},
max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);
return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},cross:function(a){return this.x*a.y-this.y*a.x},lengthSq:function(){return this.x*
this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+
Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,
b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this}});Object.assign(Da,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var k=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var h=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||k!==d||l!==h||m!==
p){f=1-g;var q=k*d+l*h+m*p+c*e,n=0<=q?1:-1,r=1-q*q;r>Number.EPSILON&&(r=Math.sqrt(r),q=Math.atan2(r,q*n),f=Math.sin(f*q)/r,g=Math.sin(g*q)/r);n*=g;k=k*f+d*n;l=l*f+h*n;m=m*f+p*n;c=c*f+e*n;f===1-g&&(g=1/Math.sqrt(k*k+l*l+m*m+c*c),k*=g,l*=g,m*=g,c*=g)}a[b]=k;a[b+1]=l;a[b+2]=m;a[b+3]=c}});Object.defineProperties(Da.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this._onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this._onChangeCallback()}},z:{get:function(){return this._z},
set:function(a){this._z=a;this._onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this._onChangeCallback()}}});Object.assign(Da.prototype,{isQuaternion:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this._onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this._onChangeCallback();return this},setFromEuler:function(a,b){if(!a||
!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,k=f(c/2),l=f(d/2);f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);"XYZ"===a?(this._x=c*l*f+k*d*e,this._y=k*d*f-c*l*e,this._z=k*l*e+c*d*f,this._w=k*l*f-c*d*e):"YXZ"===a?(this._x=c*l*f+k*d*e,this._y=k*d*f-c*l*e,this._z=k*l*e-c*d*f,this._w=k*l*f+c*d*e):"ZXY"===a?(this._x=c*l*f-k*d*e,this._y=k*d*f+c*l*e,this._z=k*l*e+c*d*f,this._w=
k*l*f-c*d*e):"ZYX"===a?(this._x=c*l*f-k*d*e,this._y=k*d*f+c*l*e,this._z=k*l*e-c*d*f,this._w=k*l*f+c*d*e):"YZX"===a?(this._x=c*l*f+k*d*e,this._y=k*d*f+c*l*e,this._z=k*l*e-c*d*f,this._w=k*l*f-c*d*e):"XZY"===a&&(this._x=c*l*f-k*d*e,this._y=k*d*f-c*l*e,this._z=k*l*e+c*d*f,this._w=k*l*f+c*d*e);!1!==b&&this._onChangeCallback();return this},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this._onChangeCallback();return this},setFromRotationMatrix:function(a){var b=
a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],k=b[2],l=b[6];b=b[10];var m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-k)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+k)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-k)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+k)/c,this._y=(g+l)/c,this._z=.25*c);this._onChangeCallback();return this},setFromUnitVectors:function(a,
b){var c=a.dot(b)+1;1E-6>c?(c=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0):(this._x=0,this._y=-a.z,this._z=a.y)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=a.x*b.y-a.y*b.x);this._w=c;return this.normalize()},angleTo:function(a){return 2*Math.acos(Math.abs(O.clamp(this.dot(a),-1,1)))},rotateTowards:function(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this},inverse:function(){return this.conjugate()},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this._onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this._onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,k=b._z;b=b._w;this._x=c*b+a*f+d*k-e*g;this._y=d*b+a*g+e*f-c*k;this._z=e*b+a*k+c*g-d*f;this._w=a*b-c*f-d*g-e*k;this._onChangeCallback();
return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=Number.EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize(),this._onChangeCallback(),this;a=Math.sqrt(a);var k=Math.atan2(a,
g);g=Math.sin((1-b)*k)/a;b=Math.sin(b*k)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this._onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this._onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+
3]=this._w;return a},_onChange:function(a){this._onChangeCallback=a;return this},_onChangeCallback:function(){}});var $g=new n,Ei=new Da;Object.assign(n.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=
b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,
b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},
applyEuler:function(a){a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(Ei.setFromEuler(a))},applyAxisAngle:function(a,b){return this.applyQuaternion(Ei.setFromAxisAngle(a,b))},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyNormalMatrix:function(a){return this.applyMatrix3(a).normalize()},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var k=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=k*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-k*-g;this.z=m*a+b*-g+k*-f-l*-e;return this},project:function(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)},
unproject:function(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,
a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||
1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=
0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},
lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this},
projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(a){$g.copy(this).projectOnVector(a);return this.sub($g)},reflect:function(a){return this.sub($g.copy(a).multiplyScalar(2*this.dot(a)))},angleTo:function(a){var b=Math.sqrt(this.lengthSq()*a.lengthSq());0===b&&console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");a=this.dot(a)/b;return Math.acos(O.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)},setFromSphericalCoords:function(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this},setFromCylindrical:function(a){return this.setFromCylindricalCoords(a.radius,a.theta,
a.y)},setFromCylindricalCoords:function(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this},setFromMatrixPosition:function(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===
this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}});var tc=new n;Object.assign(za.prototype,{isMatrix3:!0,set:function(a,
b,c,d,e,f,g,k,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=k;m[6]=c;m[7]=f;m[8]=l;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},
applyToBufferAttribute:function(a){for(var b=0,c=a.count;b<c;b++)tc.x=a.getX(b),tc.y=a.getY(b),tc.z=a.getZ(b),tc.applyMatrix3(this),a.setXYZ(b,tc.x,tc.y,tc.z);return a},multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],k=c[4],l=c[7],m=c[2],h=c[5];c=c[8];var p=d[0],q=d[3],n=d[6],r=d[1],u=d[4],z=d[7],w=d[2],B=d[5];d=d[8];
b[0]=a*p+e*r+f*w;b[3]=a*q+e*u+f*B;b[6]=a*n+e*z+f*d;b[1]=g*p+k*r+l*w;b[4]=g*q+k*u+l*B;b[7]=g*n+k*z+l*d;b[2]=m*p+h*r+c*w;b[5]=m*q+h*u+c*B;b[8]=m*n+h*z+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],k=a[6],l=a[7];a=a[8];return b*f*a-b*g*l-c*e*a+c*g*k+d*e*l-d*f*k},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],k=c[4],l=c[5],m=c[6],h=c[7];c=c[8];var p=c*k-l*h,q=l*m-c*g,n=h*g-k*m,r=d*p+e*q+f*n;if(0===r){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/r;a[0]=p*b;a[1]=(f*h-c*e)*b;a[2]=(l*e-f*k)*b;a[3]=q*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-l*d)*b;a[6]=n*b;a[7]=(e*m-h*d)*b;a[8]=(k*d-e*g)*b;return this},
transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},setUvTransform:function(a,b,c,d,e,f,g){var k=Math.cos(e);e=Math.sin(e);this.set(c*k,c*e,-c*(k*f+e*g)+f+a,-d*e,d*k,-d*(-e*f+k*g)+g+
b,0,0,1)},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],k=c[4],l=c[7];c[0]=b*d+a*g;c[3]=b*e+a*k;c[6]=b*f+a*l;c[1]=-a*d+b*g;c[4]=-a*e+b*k;c[7]=-a*f+b*l;return this},translate:function(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this},equals:function(a){var b=this.elements;a=a.elements;
for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}});var nd,Mb={getDataURL:function(a){if("undefined"==typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===nd&&(nd=document.createElementNS("http://www.w3.org/1999/xhtml",
"canvas"));nd.width=a.width;nd.height=a.height;var b=nd.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=nd}return 2048<a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}},mj=0;T.DEFAULT_IMAGE=void 0;T.DEFAULT_MAPPING=300;T.prototype=Object.assign(Object.create(Fa.prototype),{constructor:T,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,
this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.internalFormat=a.internalFormat;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=
a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],
offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=O.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(Array.isArray(d)){var e=[];
for(var f=0,g=d.length;f<g;f++)e.push(Mb.getDataURL(d[f]))}else e=Mb.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e}}c.image=d.uuid}b||(a.textures[this.uuid]=c);return c},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>
a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y);return a}});Object.defineProperty(T.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.defineProperties(S.prototype,{width:{get:function(){return this.z},set:function(a){this.z=a}},height:{get:function(){return this.w},set:function(a){this.w=a}}});Object.assign(S.prototype,
{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/
a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var k=a[2];var l=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-k)&&.01>Math.abs(g-l)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+k)&&.1>Math.abs(g+l)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;
b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+k)/4;g=(g+l)/4;b>f&&b>m?.01>b?(l=0,c=k=.707106781):(l=Math.sqrt(b),k=c/l,c=d/l):f>m?.01>f?(l=.707106781,k=0,c=.707106781):(k=Math.sqrt(f),l=c/k,c=g/k):.01>m?(k=l=.707106781,c=0):(c=Math.sqrt(m),l=d/c,k=g/c);this.set(l,k,c,a);return this}a=Math.sqrt((l-g)*(l-g)+(d-k)*(d-k)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(l-g)/a;this.y=(d-k)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,
a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,
this.y));this.z=Math.max(a,Math.min(b,this.z));this.w=Math.max(a,Math.min(b,this.w));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*
a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-
this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});va.prototype=Object.assign(Object.create(Fa.prototype),{constructor:va,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);
this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Zf.prototype=Object.assign(Object.create(va.prototype),{constructor:Zf,isWebGLMultisampleRenderTarget:!0,copy:function(a){va.prototype.copy.call(this,a);this.samples=a.samples;return this}});var Ma=new n,W=new P,Ok=new n(0,0,0),Pk=new n(1,1,1),Nb=new n,Cf=new n,ka=new n;Object.assign(P.prototype,{isMatrix4:!0,
set:function(a,b,c,d,e,f,g,k,l,m,h,p,q,n,r,u){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=k;v[2]=l;v[6]=m;v[10]=h;v[14]=p;v[3]=q;v[7]=n;v[11]=r;v[15]=u;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new P).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];
b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(a){var b=this.elements,c=a.elements,d=1/Ma.setFromMatrixColumn(a,0).length(),
e=1/Ma.setFromMatrixColumn(a,1).length();a=1/Ma.setFromMatrixColumn(a,2).length();b[0]=c[0]*d;b[1]=c[1]*d;b[2]=c[2]*d;b[3]=0;b[4]=c[4]*e;b[5]=c[5]*e;b[6]=c[6]*e;b[7]=0;b[8]=c[8]*a;b[9]=c[9]*a;b[10]=c[10]*a;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);
d=Math.sin(d);var k=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*k;var l=f*e,m=c*k,h=c*e;b[0]=g*k;b[4]=-g*e;b[8]=d;b[1]=l+m*d;b[5]=a-h*d;b[9]=-c*g;b[2]=h-a*d;b[6]=m+l*d;b[10]=f*g}else"YXZ"===a.order?(a=g*k,l=g*e,m=d*k,h=d*e,b[0]=a+h*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*k,b[9]=-c,b[2]=l*c-m,b[6]=h+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*k,l=g*e,m=d*k,h=d*e,b[0]=a-h*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*k,b[9]=h-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*k,l=f*e,m=c*k,h=c*e,b[0]=g*k,
b[4]=m*d-l,b[8]=a*d+h,b[1]=g*e,b[5]=h*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,h=c*d,b[0]=g*k,b[4]=h-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*k,b[9]=-c*k,b[2]=-d*k,b[6]=l*e+m,b[10]=a-h*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,h=c*d,b[0]=g*k,b[4]=-e,b[8]=d*k,b[1]=a*e+h,b[5]=f*k,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*k,b[10]=h*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){return this.compose(Ok,a,Pk)},lookAt:function(a,b,
c){var d=this.elements;ka.subVectors(a,b);0===ka.lengthSq()&&(ka.z=1);ka.normalize();Nb.crossVectors(c,ka);0===Nb.lengthSq()&&(1===Math.abs(c.z)?ka.x+=1E-4:ka.z+=1E-4,ka.normalize(),Nb.crossVectors(c,ka));Nb.normalize();Cf.crossVectors(ka,Nb);d[0]=Nb.x;d[4]=Cf.x;d[8]=ka.x;d[1]=Nb.y;d[5]=Cf.y;d[9]=ka.y;d[2]=Nb.z;d[6]=Cf.z;d[10]=ka.z;return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],k=c[1],l=c[5],m=c[9],h=c[13],p=c[2],q=c[6],n=c[10],r=c[14],u=c[3],z=c[7],w=c[11];c=c[15];var B=d[0],x=d[4],y=d[8],A=d[12],C=d[1],G=d[5],D=d[9],E=d[13],F=d[2],I=d[6],K=d[10],L=d[14],M=d[3],N=d[7],O=d[11];d=d[15];b[0]=a*B+e*C+f*F+g*M;b[4]=a*x+e*G+f*I+g*N;b[8]=a*y+e*D+f*K+
g*O;b[12]=a*A+e*E+f*L+g*d;b[1]=k*B+l*C+m*F+h*M;b[5]=k*x+l*G+m*I+h*N;b[9]=k*y+l*D+m*K+h*O;b[13]=k*A+l*E+m*L+h*d;b[2]=p*B+q*C+n*F+r*M;b[6]=p*x+q*G+n*I+r*N;b[10]=p*y+q*D+n*K+r*O;b[14]=p*A+q*E+n*L+r*d;b[3]=u*B+z*C+w*F+c*M;b[7]=u*x+z*G+w*I+c*N;b[11]=u*y+z*D+w*K+c*O;b[15]=u*A+z*E+w*L+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(a){for(var b=
0,c=a.count;b<c;b++)Ma.x=a.getX(b),Ma.y=a.getY(b),Ma.z=a.getZ(b),Ma.applyMatrix4(this),a.setXYZ(b,Ma.x,Ma.y,Ma.z);return a},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],k=a[9],l=a[13],m=a[2],h=a[6],p=a[10],q=a[14];return a[3]*(+e*k*h-d*l*h-e*g*p+c*l*p+d*g*q-c*k*q)+a[7]*(+b*k*q-b*l*p+e*f*p-d*f*q+d*l*m-e*k*m)+a[11]*(+b*l*h-b*g*q-e*f*h+c*f*q+e*g*m-c*l*m)+a[15]*(-d*g*m-b*k*h+b*g*p+d*f*h-c*f*p+c*k*m)},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[4];
a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a,b,c){var d=this.elements;a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c);return this},getInverse:function(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],k=d[4],l=d[5],m=d[6],h=d[7],p=d[8],q=d[9],n=d[10],r=d[11],u=d[12],z=d[13],w=d[14];d=d[15];var B=q*w*h-z*n*h+z*m*r-l*w*r-q*m*d+l*n*d,
x=u*n*h-p*w*h-u*m*r+k*w*r+p*m*d-k*n*d,y=p*z*h-u*q*h+u*l*r-k*z*r-p*l*d+k*q*d,A=u*q*m-p*z*m-u*l*n+k*z*n+p*l*w-k*q*w,C=a*B+e*x+f*y+g*A;if(0===C){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/C;c[0]=B*b;c[1]=(z*n*g-q*w*g-z*f*r+e*w*r+q*f*d-e*n*d)*b;c[2]=(l*w*g-z*m*g+z*f*h-e*w*h-l*f*d+e*m*d)*b;c[3]=(q*m*g-l*n*g-q*f*h+e*n*h+l*f*r-e*m*r)*b;c[4]=x*b;c[5]=
(p*w*g-u*n*g+u*f*r-a*w*r-p*f*d+a*n*d)*b;c[6]=(u*m*g-k*w*g-u*f*h+a*w*h+k*f*d-a*m*d)*b;c[7]=(k*n*g-p*m*g+p*f*h-a*n*h-k*f*r+a*m*r)*b;c[8]=y*b;c[9]=(u*q*g-p*z*g-u*e*r+a*z*r+p*e*d-a*q*d)*b;c[10]=(k*z*g-u*l*g+u*e*h-a*z*h-k*e*d+a*l*d)*b;c[11]=(p*l*g-k*q*g-p*e*h+a*q*h+k*e*r-a*l*r)*b;c[12]=A*b;c[13]=(p*z*f-u*q*f+u*e*n-a*z*n-p*e*w+a*q*w)*b;c[14]=(u*l*f-k*z*f-u*e*m+a*z*m+k*e*w-a*l*w)*b;c[15]=(k*q*f-p*l*f+p*e*m-a*q*m-k*e*n+a*l*n)*b;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;
b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=
Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,k=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,k*f+c,k*a-b*e,0,g*a-b*f,k*a+b*e,d*a*a+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,
b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,k=b._w,l=e+e,m=f+f,h=g+g;b=e*l;var p=e*m;e*=h;var q=f*m;f*=h;g*=h;l*=k;m*=k;k*=h;h=c.x;var n=c.y;c=c.z;d[0]=(1-(q+g))*h;d[1]=(p+k)*h;d[2]=(e-m)*h;d[3]=0;d[4]=(p-k)*n;d[5]=(1-(b+g))*n;d[6]=(f+l)*n;d[7]=0;d[8]=(e+m)*c;d[9]=(f-l)*c;d[10]=(1-(b+q))*c;d[11]=0;d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this},decompose:function(a,b,c){var d=this.elements,e=Ma.set(d[0],d[1],d[2]).length(),
f=Ma.set(d[4],d[5],d[6]).length(),g=Ma.set(d[8],d[9],d[10]).length();0>this.determinant()&&(e=-e);a.x=d[12];a.y=d[13];a.z=d[14];W.copy(this);a=1/e;d=1/f;var k=1/g;W.elements[0]*=a;W.elements[1]*=a;W.elements[2]*=a;W.elements[4]*=d;W.elements[5]*=d;W.elements[6]*=d;W.elements[8]*=k;W.elements[9]*=k;W.elements[10]*=k;b.setFromRotationMatrix(W);c.x=e;c.y=f;c.z=g;return this},makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,k=1/(b-a),l=1/(c-d),m=1/(f-e);g[0]=2*k;g[4]=0;g[8]=0;g[12]=-((b+a)*k);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;
a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});var Fi=new P,Gi=new Da;Ub.RotationOrders=
"XYZ YZX ZXY XZY YXZ ZYX".split(" ");Ub.DefaultOrder="XYZ";Object.defineProperties(Ub.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this._onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this._onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this._onChangeCallback()}}});Object.assign(Ub.prototype,{isEuler:!0,set:function(a,
b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=O.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],k=e[1],l=e[5],m=e[9],h=e[2],p=e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.9999999>Math.abs(g)?
(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,l),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.9999999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(k,l)):(this._y=Math.atan2(-h,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.9999999>Math.abs(p)?(this._y=Math.atan2(-h,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(k,a))):"ZYX"===b?(this._y=Math.asin(-d(h,-1,1)),.9999999>Math.abs(h)?(this._x=Math.atan2(p,e),this._z=Math.atan2(k,a)):
(this._x=0,this._z=Math.atan2(-f,l))):"YZX"===b?(this._z=Math.asin(d(k,-1,1)),.9999999>Math.abs(k)?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.9999999>Math.abs(f)?(this._x=Math.atan2(p,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;!1!==c&&this._onChangeCallback();return this},setFromQuaternion:function(a,
b,c){Fi.makeRotationFromQuaternion(a);return this.setFromRotationMatrix(Fi,b,c)},setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(a){Gi.setFromEuler(this);return this.setFromQuaternion(Gi,a)},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=
[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new n(this._x,this._y,this._z)},_onChange:function(a){this._onChangeCallback=a;return this},_onChangeCallback:function(){}});Object.assign($f.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=this.mask|1<<a|0},enableAll:function(){this.mask=-1},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|
0)},disableAll:function(){this.mask=0},test:function(a){return 0!==(this.mask&a.mask)}});var nj=0,Hi=new n,od=new Da,zb=new P,Df=new n,Ae=new n,Qk=new n,Rk=new Da,Ii=new n(1,0,0),Ji=new n(0,1,0),Ki=new n(0,0,1),Sk={type:"added"},Tk={type:"removed"};D.DefaultUp=new n(0,1,0);D.DefaultMatrixAutoUpdate=!0;D.prototype=Object.assign(Object.create(Fa.prototype),{constructor:D,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrixAutoUpdate&&this.updateMatrix();
this.matrix.premultiply(a);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(a,b){od.setFromAxisAngle(a,b);
this.quaternion.multiply(od);return this},rotateOnWorldAxis:function(a,b){od.setFromAxisAngle(a,b);this.quaternion.premultiply(od);return this},rotateX:function(a){return this.rotateOnAxis(Ii,a)},rotateY:function(a){return this.rotateOnAxis(Ji,a)},rotateZ:function(a){return this.rotateOnAxis(Ki,a)},translateOnAxis:function(a,b){Hi.copy(a).applyQuaternion(this.quaternion);this.position.add(Hi.multiplyScalar(b));return this},translateX:function(a){return this.translateOnAxis(Ii,a)},translateY:function(a){return this.translateOnAxis(Ji,
a)},translateZ:function(a){return this.translateOnAxis(Ki,a)},localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(a){return a.applyMatrix4(zb.getInverse(this.matrixWorld))},lookAt:function(a,b,c){a.isVector3?Df.copy(a):Df.set(a,b,c);a=this.parent;this.updateWorldMatrix(!0,!1);Ae.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?zb.lookAt(Ae,Df,this.up):zb.lookAt(Df,Ae,this.up);this.quaternion.setFromRotationMatrix(zb);a&&(zb.extractRotation(a.matrixWorld),
od.setFromRotationMatrix(zb),this.quaternion.premultiply(od.inverse()))},add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(Sk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<
arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}b=this.children.indexOf(a);-1!==b&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(Tk));return this},attach:function(a){this.updateWorldMatrix(!0,!1);zb.getInverse(this.matrixWorld);null!==a.parent&&(a.parent.updateWorldMatrix(!0,!1),zb.multiply(a.parent.matrixWorld));a.applyMatrix(zb);a.updateWorldMatrix(!1,!1);this.add(a);return this},getObjectById:function(a){return this.getObjectByProperty("id",
a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new n);this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
a=new Da);this.updateMatrixWorld(!0);this.matrixWorld.decompose(Ae,a,Qk);return a},getWorldScale:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new n);this.updateMatrixWorld(!0);this.matrixWorld.decompose(Ae,Rk,a);return a},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new n);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize()},
raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&
this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},updateWorldMatrix:function(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++)a[b].updateWorldMatrix(!1,!0)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==
this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&(f.renderOrder=this.renderOrder);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);this.isInstancedMesh&&(f.type="InstancedMesh",f.count=this.count,f.instanceMatrix=
this.instanceMatrix.toJSON());if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var k=0,l=g.length;k<l;k++)b(a.shapes,g[k]);else b(a.shapes,g)}if(void 0!==this.material)if(Array.isArray(this.material)){g=[];k=0;for(l=this.material.length;k<l;k++)g.push(b(a.materials,this.material[k]));f.material=g}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=
[],k=0;k<this.children.length;k++)f.children.push(this.children[k].toJSON(a).object);if(d){d=c(a.geometries);k=c(a.materials);l=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<k.length&&(e.materials=k);0<l.length&&(e.textures=l);0<m.length&&(e.images=m);0<g.length&&(e.shapes=g)}e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);
this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this}});
pb.prototype=Object.assign(Object.create(D.prototype),{constructor:pb,isScene:!0,copy:function(a,b){D.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.environment&&(this.environment=a.environment.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=D.prototype.toJSON.call(this,
a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.environment&&(b.object.environment=this.environment.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ab=[new n,new n,new n,new n,new n,new n,new n,new n],Be=new n,Ef=new Sa,pd=new n,qd=new n,rd=new n,Ob=new n,Pb=new n,uc=new n,Ce=new n,Ff=new n,Gf=new n,Vb=new n;Object.assign(Sa.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);
this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,k=0,l=a.length;k<l;k+=3){var m=a[k],h=a[k+1],p=a[k+2];m<b&&(b=m);h<c&&(c=h);p<d&&(d=p);m>e&&(e=m);h>f&&(f=h);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,k=0,l=a.count;k<l;k++){var h=a.getX(k),n=a.getY(k),p=a.getZ(k);h<b&&(b=h);n<c&&(c=n);
p<d&&(d=p);h>e&&(e=h);n>f&&(f=n);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(a,b){b=Be.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this},setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new n);return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box3: .getSize() target is now required"),
a=new n);return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(a){a.updateWorldMatrix(!1,!1);var b=a.geometry;void 0!==b&&(null===b.boundingBox&&b.computeBoundingBox(),Ef.copy(b.boundingBox),Ef.applyMatrix4(a.matrixWorld),this.expandByPoint(Ef.min),
this.expandByPoint(Ef.max));a=a.children;b=0;for(var c=a.length;b<c;b++)this.expandByObject(a[b]);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),
b=new n);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(a){this.clampPoint(a.center,Be);return Be.distanceToSquared(a.center)<=a.radius*a.radius},intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=
a.normal.x*this.max.x}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant},intersectsTriangle:function(a){if(this.isEmpty())return!1;this.getCenter(Ce);Ff.subVectors(this.max,Ce);pd.subVectors(a.a,Ce);qd.subVectors(a.b,Ce);rd.subVectors(a.c,
Ce);Ob.subVectors(qd,pd);Pb.subVectors(rd,qd);uc.subVectors(pd,rd);a=[0,-Ob.z,Ob.y,0,-Pb.z,Pb.y,0,-uc.z,uc.y,Ob.z,0,-Ob.x,Pb.z,0,-Pb.x,uc.z,0,-uc.x,-Ob.y,Ob.x,0,-Pb.y,Pb.x,0,-uc.y,uc.x,0];if(!ag(a,pd,qd,rd,Ff))return!1;a=[1,0,0,0,1,0,0,0,1];if(!ag(a,pd,qd,rd,Ff))return!1;Gf.crossVectors(Ob,Pb);a=[Gf.x,Gf.y,Gf.z];return ag(a,pd,qd,rd,Ff)},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new n);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){return Be.copy(a).clamp(this.min,
this.max).sub(a).length()},getBoundingSphere:function(a){void 0===a&&console.error("THREE.Box3: .getBoundingSphere() target is now required");this.getCenter(a.center);a.radius=.5*this.getSize(Be).length();return a},intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(a){if(this.isEmpty())return this;Ab[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);
Ab[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);Ab[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);Ab[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a);Ab[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);Ab[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);Ab[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);Ab[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);this.setFromPoints(Ab);return this},translate:function(a){this.min.add(a);this.max.add(a);
return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var Uk=new Sa;Object.assign(qb.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(a,b){var c=this.center;void 0!==b?c.copy(b):Uk.setFromPoints(a).getCenter(c);for(var d=b=0,e=a.length;d<e;d++)b=Math.max(b,c.distanceToSquared(a[d]));this.radius=Math.sqrt(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);
this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,
b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),b=new n);b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b},getBoundingBox:function(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new Sa);a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);
this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});var Bb=new n,ah=new n,Hf=new n,Qb=new n,bh=new n,If=new n,ch=new n;Object.assign(Wb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},
at:function(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),b=new n);return b.copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(a){this.origin.copy(this.at(a,Bb));return this},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new n);b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?
b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(a){var b=Bb.subVectors(a,this.origin).dot(this.direction);if(0>b)return this.origin.distanceToSquared(a);Bb.copy(this.direction).multiplyScalar(b).add(this.origin);return Bb.distanceToSquared(a)},distanceSqToSegment:function(a,b,c,d){ah.copy(a).add(b).multiplyScalar(.5);Hf.copy(b).sub(a).normalize();Qb.copy(this.origin).sub(ah);
var e=.5*a.distanceTo(b),f=-this.direction.dot(Hf),g=Qb.dot(this.direction),k=-Qb.dot(Hf),l=Qb.lengthSq(),h=Math.abs(1-f*f);if(0<h){a=f*k-g;b=f*g-k;var n=e*h;0<=a?b>=-n?b<=n?(e=1/h,a*=e,b*=e,f=a*(a+f*b+2*g)+b*(f*a+b+2*k)+l):(b=e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*k)+l):(b=-e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*k)+l):b<=-n?(a=Math.max(0,-(-f*e+g)),b=0<a?-e:Math.min(Math.max(-e,-k),e),f=-a*a+b*(b+2*k)+l):b<=n?(a=0,b=Math.min(Math.max(-e,-k),e),f=b*(b+2*k)+l):(a=Math.max(0,-(f*e+g)),b=0<a?e:Math.min(Math.max(-e,
-k),e),f=-a*a+b*(b+2*k)+l)}else b=0<f?-e:e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*k)+l;c&&c.copy(this.direction).multiplyScalar(a).add(this.origin);d&&d.copy(Hf).multiplyScalar(b).add(ah);return f},intersectSphere:function(a,b){Bb.subVectors(a.center,this.origin);var c=Bb.dot(this.direction),d=Bb.dot(Bb)-c*c;a=a.radius*a.radius;if(d>a)return null;a=Math.sqrt(a-d);d=c-a;c+=a;return 0>d&&0>c?null:0>d?this.at(c,b):this.at(d,b)},intersectsSphere:function(a){return this.distanceSqToPoint(a.center)<=a.radius*
a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,
f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var k=(a.min.y-f.y)*d;d*=a.max.y-f.y}else k=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||k>c)return null;if(k>g||g!==g)g=k;if(d<c||c!==c)c=d;0<=e?(k=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(k=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||k>c)return null;if(k>g||g!==g)g=k;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b)},intersectsBox:function(a){return null!==this.intersectBox(a,Bb)},intersectTriangle:function(a,
b,c,d,e){bh.subVectors(b,a);If.subVectors(c,a);ch.crossVectors(bh,If);b=this.direction.dot(ch);if(0<b){if(d)return null;d=1}else if(0>b)d=-1,b=-b;else return null;Qb.subVectors(this.origin,a);a=d*this.direction.dot(If.crossVectors(Qb,If));if(0>a)return null;c=d*this.direction.dot(bh.cross(Qb));if(0>c||a+c>b)return null;a=-d*Qb.dot(ch);return 0>a?null:this.at(a/b,e)},applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&
a.direction.equals(this.direction)}});var dh=new n,Vk=new n,Wk=new za;Object.assign(Ta.prototype,{isPlane:!0,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(a,b,c){b=dh.subVectors(c,b).cross(Vk.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(b,
a);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,
b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new n);return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(a,b){void 0===b&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new n);var c=a.delta(dh),d=this.normal.dot(c);if(0===d){if(0===this.distanceToPoint(a.start))return b.copy(a.start)}else if(d=-(a.start.dot(this.normal)+this.constant)/d,!(0>d||1<d))return b.copy(c).multiplyScalar(d).add(a.start)},
intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){void 0===a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new n);return a.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(a,b){b=b||Wk.getNormalMatrix(a);a=this.coplanarPoint(dh).applyMatrix4(a);
b=this.normal.applyMatrix3(b).normalize();this.constant=-a.dot(b);return this},translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});var bb=new n,Cb=new n,eh=new n,Db=new n,sd=new n,td=new n,Li=new n,fh=new n,gh=new n,hh=new n;Object.assign(ma,{getNormal:function(a,b,c,d){void 0===d&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new n);d.subVectors(c,b);bb.subVectors(a,b);
d.cross(bb);a=d.lengthSq();return 0<a?d.multiplyScalar(1/Math.sqrt(a)):d.set(0,0,0)},getBarycoord:function(a,b,c,d,e){bb.subVectors(d,b);Cb.subVectors(c,b);eh.subVectors(a,b);a=bb.dot(bb);b=bb.dot(Cb);c=bb.dot(eh);var f=Cb.dot(Cb);d=Cb.dot(eh);var g=a*f-b*b;void 0===e&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new n);if(0===g)return e.set(-2,-1,-1);g=1/g;f=(f*c-b*d)*g;a=(a*d-b*c)*g;return e.set(1-f-a,a,f)},containsPoint:function(a,b,c,d){ma.getBarycoord(a,b,c,d,Db);
return 0<=Db.x&&0<=Db.y&&1>=Db.x+Db.y},getUV:function(a,b,c,d,e,f,g,k){this.getBarycoord(a,b,c,d,Db);k.set(0,0);k.addScaledVector(e,Db.x);k.addScaledVector(f,Db.y);k.addScaledVector(g,Db.z);return k},isFrontFacing:function(a,b,c,d){bb.subVectors(c,b);Cb.subVectors(a,b);return 0>bb.cross(Cb).dot(d)?!0:!1}});Object.assign(ma.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);
return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},getArea:function(){bb.subVectors(this.c,this.b);Cb.subVectors(this.a,this.b);return.5*bb.cross(Cb).length()},getMidpoint:function(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new n);return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(a){return ma.getNormal(this.a,this.b,
this.c,a)},getPlane:function(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new Ta);return a.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(a,b){return ma.getBarycoord(a,this.a,this.b,this.c,b)},getUV:function(a,b,c,d,e){return ma.getUV(a,this.a,this.b,this.c,b,c,d,e)},containsPoint:function(a){return ma.containsPoint(a,this.a,this.b,this.c)},isFrontFacing:function(a){return ma.isFrontFacing(this.a,this.b,this.c,a)},intersectsBox:function(a){return a.intersectsTriangle(this)},
closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new n);var c=this.a,d=this.b,e=this.c;sd.subVectors(d,c);td.subVectors(e,c);fh.subVectors(a,c);var f=sd.dot(fh),g=td.dot(fh);if(0>=f&&0>=g)return b.copy(c);gh.subVectors(a,d);var k=sd.dot(gh),l=td.dot(gh);if(0<=k&&l<=k)return b.copy(d);var h=f*l-k*g;if(0>=h&&0<=f&&0>=k)return d=f/(f-k),b.copy(c).addScaledVector(sd,d);hh.subVectors(a,e);a=sd.dot(hh);var v=td.dot(hh);if(0<=
v&&a<=v)return b.copy(e);f=a*g-f*v;if(0>=f&&0<=g&&0>=v)return h=g/(g-v),b.copy(c).addScaledVector(td,h);g=k*v-a*l;if(0>=g&&0<=l-k&&0<=a-v)return Li.subVectors(e,d),h=(l-k)/(l-k+(a-v)),b.copy(d).addScaledVector(Li,h);e=1/(g+f+h);d=f*e;h*=e;return b.copy(c).addScaledVector(sd,d).addScaledVector(td,h)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});var Mi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,
black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,
darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,
lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,
mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,
purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},
Ca={h:0,s:0,l:0},Jf={h:0,s:0,l:0};Object.assign(y.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){a=O.euclideanModulo(a,1);b=O.clamp(b,
0,1);c=O.clamp(c,0,1);0===b?this.r=this.g=this.b=c:(b=.5>=c?c*(1+b):c+b-c*b,c=2*c-b,this.r=bg(c,b,a+1/3),this.g=bg(c,b,a),this.b=bg(c,b,a-1/3));return this},setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],
10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],
10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}return a&&0<a.length?this.setColorName(a):this},
setColorName:function(a){var b=Mi[a];void 0!==b?this.setHex(b):console.warn("THREE.Color: Unknown color "+a);return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,
b);return this},convertGammaToLinear:function(a){this.copyGammaToLinear(this,a);return this},convertLinearToGamma:function(a){this.copyLinearToGamma(this,a);return this},copySRGBToLinear:function(a){this.r=cg(a.r);this.g=cg(a.g);this.b=cg(a.b);return this},copyLinearToSRGB:function(a){this.r=dg(a.r);this.g=dg(a.g);this.b=dg(a.b);return this},convertSRGBToLinear:function(){this.copySRGBToLinear(this);return this},convertLinearToSRGB:function(){this.copyLinearToSRGB(this);return this},getHex:function(){return 255*
this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){void 0===a&&(console.warn("THREE.Color: .getHSL() target is now required"),a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,k=(f+e)/2;if(f===e)f=g=0;else{var l=e-f;f=.5>=k?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4}g/=6}a.h=g;a.s=f;a.l=k;return a},getStyle:function(){return"rgb("+
(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){this.getHSL(Ca);Ca.h+=a;Ca.s+=b;Ca.l+=c;this.setHSL(Ca.h,Ca.s,Ca.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=
a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},lerpHSL:function(a,b){this.getHSL(Ca);a.getHSL(Jf);a=O.lerp(Ca.h,Jf.h,b);var c=O.lerp(Ca.s,Jf.s,b);b=O.lerp(Ca.l,Jf.l,b);this.setHSL(a,c,b);return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];
this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});y.NAMES=Mi;Object.assign(Dc.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();
b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});var oj=0;L.prototype=Object.assign(Object.create(Fa.prototype),{constructor:L,isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=
1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=
this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.sheen&&this.sheen.isColor&&(d.sheen=this.sheen.getHex());this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.emissiveIntensity&&1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&
(d.shininess=this.shininess);void 0!==this.clearcoat&&(d.clearcoat=this.clearcoat);void 0!==this.clearcoatRoughness&&(d.clearcoatRoughness=this.clearcoatRoughness);this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(d.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,d.clearcoatNormalScale=this.clearcoatNormalScale.toArray());this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.matcap&&this.matcap.isTexture&&(d.matcap=this.matcap.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&
(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&
this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&
(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,d.refractionRatio=this.refractionRatio,void 0!==this.combine&&(d.combine=this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);
1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;d.stencilWrite=this.stencilWrite;d.stencilWriteMask=this.stencilWriteMask;d.stencilFunc=this.stencilFunc;d.stencilRef=this.stencilRef;
d.stencilFuncMask=this.stencilFuncMask;d.stencilFail=this.stencilFail;d.stencilZFail=this.stencilZFail;d.stencilZPass=this.stencilZPass;this.rotation&&0!==this.rotation&&(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);this.linewidth&&1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);
void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=
this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.morphNormals&&(d.morphNormals=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);!1===this.toneMapped&&(d.toneMapped=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.blending=
a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexTangents=a.vertexTangents;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.stencilWriteMask=a.stencilWriteMask;
this.stencilFunc=a.stencilFunc;this.stencilRef=a.stencilRef;this.stencilFuncMask=a.stencilFuncMask;this.stencilFail=a.stencilFail;this.stencilZFail=a.stencilZFail;this.stencilZPass=a.stencilZPass;this.stencilWrite=a.stencilWrite;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}this.clippingPlanes=c;this.clipIntersection=a.clipIntersection;this.clipShadows=a.clipShadows;this.shadowSide=a.shadowSide;this.colorWrite=a.colorWrite;this.precision=
a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.toneMapped=a.toneMapped;this.userData=JSON.parse(JSON.stringify(a.userData));return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(L.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});
Oa.prototype=Object.create(L.prototype);Oa.prototype.constructor=Oa;Oa.prototype.isMeshBasicMaterial=!0;Oa.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=
a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};var X=new n;Object.defineProperty(K.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(K.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(a){this.usage=a;return this},copy:function(a){this.name=a.name;this.array=new a.array.constructor(a.array);
this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.usage=a.usage;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new y);b[c++]=f.r;b[c++]=f.g;b[c++]=
f.b}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new x);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new n);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=
this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new S);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},applyMatrix3:function(a){for(var b=0,c=this.count;b<c;b++)X.x=this.getX(b),X.y=this.getY(b),X.z=this.getZ(b),X.applyMatrix3(a),this.setXYZ(b,X.x,X.y,X.z);return this},applyMatrix4:function(a){for(var b=0,c=this.count;b<c;b++)X.x=this.getX(b),X.y=this.getY(b),X.z=this.getZ(b),X.applyMatrix4(a),
this.setXYZ(b,X.x,X.y,X.z);return this},applyNormalMatrix:function(a){for(var b=0,c=this.count;b<c;b++)X.x=this.getX(b),X.y=this.getY(b),X.z=this.getZ(b),X.applyNormalMatrix(a),this.setXYZ(b,X.x,X.y,X.z);return this},transformDirection:function(a){for(var b=0,c=this.count;b<c;b++)X.x=this.getX(b),X.y=this.getY(b),X.z=this.getZ(b),X.transformDirection(a),this.setXYZ(b,X.x,X.y,X.z);return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*
this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),
normalized:this.normalized}}});Ad.prototype=Object.create(K.prototype);Ad.prototype.constructor=Ad;Bd.prototype=Object.create(K.prototype);Bd.prototype.constructor=Bd;Cd.prototype=Object.create(K.prototype);Cd.prototype.constructor=Cd;Dd.prototype=Object.create(K.prototype);Dd.prototype.constructor=Dd;Xb.prototype=Object.create(K.prototype);Xb.prototype.constructor=Xb;Ed.prototype=Object.create(K.prototype);Ed.prototype.constructor=Ed;Yb.prototype=Object.create(K.prototype);Yb.prototype.constructor=
Yb;C.prototype=Object.create(K.prototype);C.prototype.constructor=C;Fd.prototype=Object.create(K.prototype);Fd.prototype.constructor=Fd;Object.assign(vh.prototype,{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c}}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,
e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,k=g.length;if(0<k){var l=[];for(var h=0;h<k;h++)l[h]={name:g[h].name,data:[]};this.morphTargets.position=l}var n=a.morphNormals,p=n.length;if(0<p){var q=[];for(h=0;h<p;h++)q[h]={name:n[h].name,data:[]};this.morphTargets.normal=q}var t=a.skinIndices,r=a.skinWeights,u=t.length===c.length,z=r.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(h=0;h<b.length;h++){var w=
b[h];this.vertices.push(c[w.a],c[w.b],c[w.c]);var B=w.vertexNormals;3===B.length?this.normals.push(B[0],B[1],B[2]):(B=w.normal,this.normals.push(B,B,B));B=w.vertexColors;3===B.length?this.colors.push(B[0],B[1],B[2]):(B=w.color,this.colors.push(B,B,B));!0===e&&(B=d[0][h],void 0!==B?this.uvs.push(B[0],B[1],B[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",h),this.uvs.push(new x,new x,new x)));!0===f&&(B=d[1][h],void 0!==B?this.uvs2.push(B[0],B[1],B[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
h),this.uvs2.push(new x,new x,new x)));for(B=0;B<k;B++){var y=g[B].vertices;l[B].data.push(y[w.a],y[w.b],y[w.c])}for(B=0;B<p;B++)y=n[B].vertexNormals[h],q[B].data.push(y.a,y.b,y.c);u&&this.skinIndices.push(t[w.a],t[w.b],t[w.c]);z&&this.skinWeights.push(r[w.a],r[w.b],r[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;
null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this}});var pj=1,nb=new P,ih=new D,ud=new n,Na=new Sa,De=new Sa,V=new n;G.prototype=Object.assign(Object.create(Fa.prototype),{constructor:G,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<wh(a)?Yb:Xb)(a,1):this.index=a},getAttribute:function(a){return this.attributes[a]},setAttribute:function(a,
b){this.attributes[a]=b;return this},deleteAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(b.applyMatrix4(a),b.needsUpdate=!0);b=this.attributes.normal;if(void 0!==b){var c=(new za).getNormalMatrix(a);b.applyNormalMatrix(c);
b.needsUpdate=!0}b=this.attributes.tangent;void 0!==b&&(b.transformDirection(a),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(a){nb.makeRotationX(a);this.applyMatrix(nb);return this},rotateY:function(a){nb.makeRotationY(a);this.applyMatrix(nb);return this},rotateZ:function(a){nb.makeRotationZ(a);this.applyMatrix(nb);return this},translate:function(a,b,c){nb.makeTranslation(a,b,c);this.applyMatrix(nb);
return this},scale:function(a,b,c){nb.makeScale(a,b,c);this.applyMatrix(nb);return this},lookAt:function(a){ih.lookAt(a);ih.updateMatrix();this.applyMatrix(ih.matrix);return this},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(ud).negate();this.translate(ud.x,ud.y,ud.z);return this},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new C(3*b.vertices.length,3);var c=new C(3*b.colors.length,3);this.setAttribute("position",a.copyVector3sArray(b.vertices));
this.setAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new C(b.lineDistances.length,1),this.setAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,
e.y,e.z||0)}this.setAttribute("position",new C(b,3));return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=
!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==
c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new vh).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*
a.vertices.length);this.setAttribute("position",(new K(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.setAttribute("normal",(new K(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.setAttribute("color",(new K(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.setAttribute("uv",(new K(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*
a.uvs2.length),this.setAttribute("uv2",(new K(b,2)).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],k=new C(3*g.data.length,3);k.name=g.name;b.push(k.copyVector3sArray(g.data))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new C(4*a.skinIndices.length,4),this.setAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new C(4*a.skinWeights.length,4),this.setAttribute("skinWeight",
c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Sa);var a=this.attributes.position,b=this.morphAttributes.position;if(void 0!==a){if(this.boundingBox.setFromBufferAttribute(a),b){a=0;for(var c=b.length;a<c;a++)Na.setFromBufferAttribute(b[a]),this.morphTargetsRelative?(V.addVectors(this.boundingBox.min,
Na.min),this.boundingBox.expandByPoint(V),V.addVectors(this.boundingBox.max,Na.max),this.boundingBox.expandByPoint(V)):(this.boundingBox.expandByPoint(Na.min),this.boundingBox.expandByPoint(Na.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===
this.boundingSphere&&(this.boundingSphere=new qb);var a=this.attributes.position,b=this.morphAttributes.position;if(a){var c=this.boundingSphere.center;Na.setFromBufferAttribute(a);if(b)for(var d=0,e=b.length;d<e;d++){var f=b[d];De.setFromBufferAttribute(f);this.morphTargetsRelative?(V.addVectors(Na.min,De.min),Na.expandByPoint(V),V.addVectors(Na.max,De.max),Na.expandByPoint(V)):(Na.expandByPoint(De.min),Na.expandByPoint(De.max))}Na.getCenter(c);var g=0;d=0;for(e=a.count;d<e;d++)V.fromBufferAttribute(a,
d),g=Math.max(g,c.distanceToSquared(V));if(b)for(d=0,e=b.length;d<e;d++){f=b[d];for(var k=this.morphTargetsRelative,l=0,h=f.count;l<h;l++)V.fromBufferAttribute(f,l),k&&(ud.fromBufferAttribute(a,l),V.add(ud)),g=Math.max(g,c.distanceToSquared(V))}this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},
computeVertexNormals:function(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===b.normal)this.setAttribute("normal",new K(new Float32Array(c.length),3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++)d[e]=0;d=b.normal.array;var g=new n,k=new n,l=new n,h=new n,v=new n;if(a){var p=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*p[e+0];var q=3*p[e+1];var t=3*p[e+2];g.fromArray(c,a);k.fromArray(c,q);l.fromArray(c,t);h.subVectors(l,k);v.subVectors(g,k);h.cross(v);d[a]+=
h.x;d[a+1]+=h.y;d[a+2]+=h.z;d[q]+=h.x;d[q+1]+=h.y;d[q+2]+=h.z;d[t]+=h.x;d[t+1]+=h.y;d[t+2]+=h.z}}else for(e=0,f=c.length;e<f;e+=9)g.fromArray(c,e),k.fromArray(c,e+3),l.fromArray(c,e+6),h.subVectors(l,k),v.subVectors(g,k),h.cross(v),d[e]=h.x,d[e+1]=h.y,d[e+2]=h.z,d[e+3]=h.x,d[e+4]=h.y,d[e+5]=h.z,d[e+6]=h.x,d[e+7]=h.y,d[e+8]=h.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,k=f.itemSize*b;f=Math.min(g.length,e.length-k);for(var l=0;l<f;l++,k++)e[k]=g[l]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){for(var a=this.attributes.normal,b=0,c=a.count;b<c;b++)V.x=a.getX(b),V.y=a.getY(b),V.z=a.getZ(b),V.normalize(),a.setXYZ(b,V.x,V.y,V.z)},toNonIndexed:function(){function a(a,
b){var c=a.array;a=a.itemSize;for(var d=new c.constructor(b.length*a),e,f=0,g=0,k=b.length;g<k;g++){e=b[g]*a;for(var l=0;l<a;l++)d[f++]=c[e++]}return new K(d,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var b=new G,c=this.index.array,d=this.attributes,e;for(e in d){var f=d[e];f=a(f,c);b.setAttribute(e,f)}var g=this.morphAttributes;for(e in g){var k=[],l=g[e];d=0;for(var h=l.length;d<h;d++)f=l[d],f=a(f,c),k.push(f);b.morphAttributes[e]=
k}b.morphTargetsRelative=this.morphTargetsRelative;c=this.groups;d=0;for(e=c.length;d<e;d++)f=c[d],b.addGroup(f.start,f.count,f.materialIndex);return b},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);0<Object.keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(h in b)void 0!==b[h]&&(a[h]=b[h]);return a}a.data={attributes:{}};
b=this.index;null!==b&&(a.data.index={type:b.array.constructor.name,array:Array.prototype.slice.call(b.array)});var c=this.attributes;for(h in c){b=c[h];var d=b.toJSON();""!==b.name&&(d.name=b.name);a.data.attributes[h]=d}c={};var e=!1;for(h in this.morphAttributes){for(var f=this.morphAttributes[h],g=[],k=0,l=f.length;k<l;k++)b=f[k],d=b.toJSON(),""!==b.name&&(d.name=b.name),g.push(d);0<g.length&&(c[h]=g,e=!0)}e&&(a.data.morphAttributes=c,a.data.morphTargetsRelative=this.morphTargetsRelative);var h=
this.groups;0<h.length&&(a.data.groups=JSON.parse(JSON.stringify(h)));h=this.boundingSphere;null!==h&&(a.data.boundingSphere={center:h.center.toArray(),radius:h.radius});return a},clone:function(){return(new G).copy(this)},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.setAttribute(g,c[g].clone());var d=a.morphAttributes;
for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());this.morphAttributes[g]=e}this.morphTargetsRelative=a.morphTargetsRelative;var g=a.groups;c=0;for(b=g.length;c<b;c++)d=g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});
var Ni=new P,vc=new Wb,jh=new qb,Zb=new n,$b=new n,ac=new n,eg=new n,fg=new n,gg=new n,Le=new n,Me=new n,Ne=new n,Ec=new x,Fc=new x,Gc=new x,Gd=new n,Je=new n;ca.prototype=Object.assign(Object.create(D.prototype),{constructor:ca,isMesh:!0,copy:function(a){D.prototype.copy.call(this,a);void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this},updateMorphTargets:function(){var a=
this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},raycast:function(a,b){var c=this.geometry,
d=this.material,e=this.matrixWorld;if(void 0!==d&&(null===c.boundingSphere&&c.computeBoundingSphere(),jh.copy(c.boundingSphere),jh.applyMatrix4(e),!1!==a.ray.intersectsSphere(jh)&&(Ni.getInverse(e),vc.copy(a.ray).applyMatrix4(Ni),null===c.boundingBox||!1!==vc.intersectsBox(c.boundingBox))))if(c.isBufferGeometry){var f=c.index;e=c.attributes.position;var g=c.morphAttributes.position,k=c.morphTargetsRelative,l=c.attributes.uv,h=c.attributes.uv2,n=c.groups,p=c.drawRange,q,t;if(null!==f)if(Array.isArray(d)){var r=
0;for(q=n.length;r<q;r++){var u=n[r];var z=d[u.materialIndex];var w=Math.max(u.start,p.start);for(t=c=Math.min(u.start+u.count,p.start+p.count);w<t;w+=3){c=f.getX(w);var B=f.getX(w+1);var y=f.getX(w+2);if(c=Ke(this,z,a,vc,e,g,k,l,h,c,B,y))c.faceIndex=Math.floor(w/3),c.face.materialIndex=u.materialIndex,b.push(c)}}}else for(w=Math.max(0,p.start),c=Math.min(f.count,p.start+p.count),r=w,q=c;r<q;r+=3){if(c=f.getX(r),B=f.getX(r+1),y=f.getX(r+2),c=Ke(this,d,a,vc,e,g,k,l,h,c,B,y))c.faceIndex=Math.floor(r/
3),b.push(c)}else if(void 0!==e)if(Array.isArray(d))for(r=0,q=n.length;r<q;r++)for(u=n[r],z=d[u.materialIndex],w=Math.max(u.start,p.start),t=c=Math.min(u.start+u.count,p.start+p.count);w<t;w+=3){if(c=w,B=w+1,y=w+2,c=Ke(this,z,a,vc,e,g,k,l,h,c,B,y))c.faceIndex=Math.floor(w/3),c.face.materialIndex=u.materialIndex,b.push(c)}else for(w=Math.max(0,p.start),c=Math.min(e.count,p.start+p.count),r=w,q=c;r<q;r+=3)if(c=r,B=r+1,y=r+2,c=Ke(this,d,a,vc,e,g,k,l,h,c,B,y))c.faceIndex=Math.floor(r/3),b.push(c)}else if(c.isGeometry)for(e=
Array.isArray(d),g=c.vertices,k=c.faces,c=c.faceVertexUvs[0],0<c.length&&(f=c),p=0,r=k.length;p<r;p++)if(q=k[p],c=e?d[q.materialIndex]:d,void 0!==c&&(l=g[q.a],h=g[q.b],n=g[q.c],c=xh(this,c,a,vc,l,h,n,Gd)))f&&f[p]&&(u=f[p],Ec.copy(u[0]),Fc.copy(u[1]),Gc.copy(u[2]),c.uv=ma.getUV(Gd,l,h,n,Ec,Fc,Gc,new x)),c.face=q,c.faceIndex=p,b.push(c)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var qj=0,ob=new P,kh=new D,Kf=new n;M.prototype=Object.assign(Object.create(Fa.prototype),
{constructor:M,isGeometry:!0,applyMatrix:function(a){for(var b=(new za).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},
rotateX:function(a){ob.makeRotationX(a);this.applyMatrix(ob);return this},rotateY:function(a){ob.makeRotationY(a);this.applyMatrix(ob);return this},rotateZ:function(a){ob.makeRotationZ(a);this.applyMatrix(ob);return this},translate:function(a,b,c){ob.makeTranslation(a,b,c);this.applyMatrix(ob);return this},scale:function(a,b,c){ob.makeScale(a,b,c);this.applyMatrix(ob);return this},lookAt:function(a){kh.lookAt(a);kh.updateMatrix();this.applyMatrix(kh.matrix);return this},fromBufferGeometry:function(a){function b(a,
b,d,e){var f=void 0===k?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],m=void 0===g?[]:[(new n).fromArray(g,3*a),(new n).fromArray(g,3*b),(new n).fromArray(g,3*d)];e=new Dc(a,b,d,m,f,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([(new x).fromArray(l,2*a),(new x).fromArray(l,2*b),(new x).fromArray(l,2*d)]);void 0!==h&&c.faceVertexUvs[1].push([(new x).fromArray(h,2*a),(new x).fromArray(h,2*b),(new x).fromArray(h,2*d)])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes;
if(void 0===e.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,k=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,h=void 0!==e.uv2?e.uv2.array:void 0;void 0!==h&&(this.faceVertexUvs[1]=[]);for(e=0;e<f.length;e+=3)c.vertices.push((new n).fromArray(f,e)),void 0!==k&&c.colors.push((new y).fromArray(k,e));var v=a.groups;if(0<v.length)for(e=0;e<v.length;e++){f=
v[e];var p=f.start,q=p;for(p+=f.count;q<p;q+=3)void 0!==d?b(d[q],d[q+1],d[q+2],f.materialIndex):b(q,q+1,q+2,f.materialIndex)}else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(Kf).negate();this.translate(Kf.x,
Kf.y,Kf.z);return this},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new P;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new n,b=new n,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===
a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new n;if(a){var e=new n,f=new n;a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var k=this.vertices[b.b];var l=this.vertices[b.c];e.subVectors(l,k);f.subVectors(g,k);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e)}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=
this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),
d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):
d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}var f=new M;f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var k=new n;var l={a:new n,b:new n,c:new n};d.push(k);g.push(l)}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();
f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],k=g.faceNormals[c],l=g.vertexNormals[c],k.copy(d.normal),l.a.copy(d.vertexNormals[0]),l.b.copy(d.vertexNormals[1]),l.c.copy(d.vertexNormals[2])}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Sa);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===
this.boundingSphere&&(this.boundingSphere=new qb);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,k=this.faces,l=a.faces,h=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new za).getNormalMatrix(b));for(var p=0,q=g.length;p<q;p++){var t=g[p].clone();void 0!==b&&t.applyMatrix4(b);f.push(t)}p=0;for(q=n.length;p<q;p++)h.push(n[p].clone());p=0;for(q=l.length;p<q;p++){g=l[p];var r=g.vertexNormals;
n=g.vertexColors;h=new Dc(g.a+e,g.b+e,g.c+e);h.normal.copy(g.normal);void 0!==d&&h.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)t=r[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),h.vertexNormals.push(t);h.color.copy(g.color);b=0;for(f=n.length;b<f;b++)t=n[b],h.vertexColors.push(t.clone());h.materialIndex=g.materialIndex+c;k.push(h)}p=0;for(q=a.faceVertexUvs.length;p<q;p++)for(c=a.faceVertexUvs[p],void 0===this.faceVertexUvs[p]&&(this.faceVertexUvs[p]=[]),b=0,f=c.length;b<f;b++){d=
c[b];e=[];k=0;for(l=d.length;k<l;k++)e.push(d[k].clone());this.faceVertexUvs[p].push(e)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];
g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]]}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,1);f=this.vertices.length-b.length;this.vertices=b;return f},setFromPoints:function(a){this.vertices=
[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new n(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var k=a[c]._id;f&&f.push(d[k]);g&&g.push(e[k])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,
b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==h[b])return h[b];h[b]=l.length/3;l.push(a.x,a.y,a.z);return h[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=n.length;n.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=q.length/2;q.push(a.x,a.y);return t[b]}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};
e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var k=this.vertices[g];f.push(k.x,k.y,k.z)}k=[];var l=[],h={},n=[],p={},q=[],t={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],u=void 0!==this.faceVertexUvs[0][g],z=0<r.normal.length(),w=0<r.vertexNormals.length,B=1!==r.color.r||1!==r.color.g||1!==r.color.b,x=0<r.vertexColors.length,
y=0;y=a(y,0,0);y=a(y,1,!0);y=a(y,2,!1);y=a(y,3,u);y=a(y,4,z);y=a(y,5,w);y=a(y,6,B);y=a(y,7,x);k.push(y);k.push(r.a,r.b,r.c);k.push(r.materialIndex);u&&(u=this.faceVertexUvs[0][g],k.push(d(u[0]),d(u[1]),d(u[2])));z&&k.push(b(r.normal));w&&(z=r.vertexNormals,k.push(b(z[0]),b(z[1]),b(z[2])));B&&k.push(c(r.color));x&&(r=r.vertexColors,k.push(c(r[0]),c(r[1]),c(r[2])))}e.data={};e.data.vertices=f;e.data.normals=l;0<n.length&&(e.data.colors=n);0<q.length&&(e.data.uvs=[q]);e.data.faces=k;return e},clone:function(){return(new M).copy(this)},
copy:function(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<b;f++)this.colors.push(e[f].clone());e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<
b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var k=g[e],l=[];var h=0;for(d=k.length;h<d;h++)l.push(k[h].clone());this.faceVertexUvs[f].push(l)}}h=a.morphTargets;f=0;for(b=h.length;f<b;f++){d={};d.name=h[f].name;if(void 0!==h[f].vertices)for(d.vertices=[],e=0,c=h[f].vertices.length;e<c;e++)d.vertices.push(h[f].vertices[e].clone());if(void 0!==h[f].normals)for(d.normals=[],e=0,c=h[f].normals.length;e<c;e++)d.normals.push(h[f].normals[e].clone());
this.morphTargets.push(d)}h=a.morphNormals;f=0;for(b=h.length;f<b;f++){d={};if(void 0!==h[f].vertexNormals)for(d.vertexNormals=[],e=0,c=h[f].vertexNormals.length;e<c;e++)g=h[f].vertexNormals[e],k={},k.a=g.a.clone(),k.b=g.b.clone(),k.c=g.c.clone(),d.vertexNormals.push(k);if(void 0!==h[f].faceNormals)for(d.faceNormals=[],e=0,c=h[f].faceNormals.length;e<c;e++)d.faceNormals.push(h[f].faceNormals[e].clone());this.morphNormals.push(d)}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());
e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=
a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var lh=function(a){function b(b,d,e,f,g,k){a.call(this);this.type="BoxGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:k};this.fromBufferGeometry(new Jd(b,d,e,f,g,k));this.mergeVertices()}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b}(M),Jd=function(a){function b(b,
d,e,f,g,k){function c(a,b,c,d,e,f,g,k,l,m,x){var w=f/l,z=g/m,A=f/2,B=g/2,y=k/2;g=l+1;var C=m+1,G=f=0,F,D,E=new n;for(D=0;D<C;D++){var I=D*z-B;for(F=0;F<g;F++)E[a]=(F*w-A)*d,E[b]=I*e,E[c]=y,p.push(E.x,E.y,E.z),E[a]=0,E[b]=0,E[c]=0<k?1:-1,q.push(E.x,E.y,E.z),t.push(F/l),t.push(1-D/m),f+=1}for(D=0;D<m;D++)for(F=0;F<l;F++)a=r+F+g*(D+1),b=r+(F+1)+g*(D+1),c=r+(F+1)+g*D,v.push(r+F+g*D,a,c),v.push(a,b,c),G+=6;h.addGroup(u,G,x);u+=G;r+=f}a.call(this);this.type="BoxBufferGeometry";this.parameters={width:b,
height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:k};var h=this;b=b||1;d=d||1;e=e||1;f=Math.floor(f)||1;g=Math.floor(g)||1;k=Math.floor(k)||1;var v=[],p=[],q=[],t=[],r=0,u=0;c("z","y","x",-1,-1,e,d,b,k,g,0);c("z","y","x",1,-1,e,d,-b,k,g,1);c("x","z","y",1,1,b,e,d,f,k,2);c("x","z","y",1,-1,b,e,-d,f,k,3);c("x","y","z",1,-1,b,d,e,f,g,4);c("x","y","z",-1,-1,b,d,-e,f,g,5);this.setIndex(v);this.setAttribute("position",new C(p,3));this.setAttribute("normal",new C(q,3));this.setAttribute("uv",
new C(t,2))}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b}(G),Xk={clone:bc,merge:na};oa.prototype=Object.create(L.prototype);oa.prototype.constructor=oa;oa.prototype.isShaderMaterial=!0;oa.prototype.copy=function(a){L.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=bc(a.uniforms);this.defines=Object.assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;
this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};oa.prototype.toJSON=function(a){var b=L.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?{type:"v3",value:d.toArray()}:
d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix3?{type:"m3",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d}}0<Object.keys(this.defines).length&&(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions)!0===this.extensions[e]&&(a[e]=!0);0<Object.keys(a).length&&(b.extensions=a);return b};db.prototype=Object.assign(Object.create(D.prototype),{constructor:db,isCamera:!0,copy:function(a,b){D.prototype.copy.call(this,
a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new n);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize()},updateMatrixWorld:function(a){D.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld)},
clone:function(){return(new this.constructor).copy(this)}});pa.prototype=Object.assign(Object.create(db.prototype),{constructor:pa,isPerspectiveCamera:!0,copy:function(a,b){db.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*O.RAD2DEG*
Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*O.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*O.RAD2DEG*Math.atan(Math.tan(.5*O.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,
offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*O.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,
k=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/k;d*=f.width/g;c*=f.height/k}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=D.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},
this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Hc.prototype=Object.create(D.prototype);Hc.prototype.constructor=Hc;Eb.prototype=Object.create(va.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isWebGLRenderTargetCube=!0;Eb.prototype.fromEquirectangularTexture=function(a,b){this.texture.type=b.type;this.texture.format=b.format;this.texture.encoding=b.encoding;var c=new pb,d=new oa({type:"CubemapFromEquirect",uniforms:bc({tEquirect:{value:null}}),vertexShader:"varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
fragmentShader:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",side:1,blending:0});d.uniforms.tEquirect.value=b;b=new ca(new Jd(5,
5,5),d);c.add(b);d=new Hc(1,10,1);d.renderTarget=this;d.renderTarget.texture.name="CubeCameraTexture";d.update(a,c);b.geometry.dispose();b.material.dispose();return this};cc.prototype=Object.create(T.prototype);cc.prototype.constructor=cc;cc.prototype.isDataTexture=!0;var vd=new qb,Lf=new n;Object.assign(Hd.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],k=c[5],h=c[6],m=c[7],n=c[8],p=c[9],q=c[10],t=c[11],r=c[12],u=c[13],z=c[14];c=c[15];b[0].setComponents(f-a,m-g,t-n,c-r).normalize();b[1].setComponents(f+a,m+g,t+n,c+r).normalize();b[2].setComponents(f+d,m+k,t+p,c+u).normalize();b[3].setComponents(f-d,m-k,t-p,c-u).normalize();b[4].setComponents(f-e,m-h,t-q,c-z).normalize();
b[5].setComponents(f+e,m+h,t+q,c+z).normalize();return this},intersectsObject:function(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();vd.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);return this.intersectsSphere(vd)},intersectsSprite:function(a){vd.center.set(0,0,0);vd.radius=.7071067811865476;vd.applyMatrix4(a.matrixWorld);return this.intersectsSphere(vd)},intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<
a)return!1;return!0},intersectsBox:function(a){for(var b=this.planes,c=0;6>c;c++){var d=b[c];Lf.x=0<d.normal.x?a.max.x:a.min.x;Lf.y=0<d.normal.y?a.max.y:a.min.y;Lf.z=0<d.normal.z?a.max.z:a.min.z;if(0>d.distanceToPoint(Lf))return!1}return!0},containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});var N={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);\n    } else if (face == 1.0) {\n      uv = vec2(direction.x, -direction.z) / abs(direction.y);\n    } else if (face == 2.0) {\n      uv = direction.xy / abs(direction.z);\n    } else if (face == 3.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);\n    } else if (face == 4.0) {\n      uv = direction.xz / abs(direction.y);\n    } else {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);\n    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ), 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = max( clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",clearcoat_normalmap_pars_fragment:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},
E={common:{diffuse:{value:new y(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new za},uv2Transform:{value:new za},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},
bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new x(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},
color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},
shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new y(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new za}},sprite:{diffuse:{value:new y(15658734)},opacity:{value:1},center:{value:new x(.5,.5)},rotation:{value:0},map:{value:null},
alphaMap:{value:null},uvTransform:{value:new za}}},eb={basic:{uniforms:na([E.common,E.specularmap,E.envmap,E.aomap,E.lightmap,E.fog]),vertexShader:N.meshbasic_vert,fragmentShader:N.meshbasic_frag},lambert:{uniforms:na([E.common,E.specularmap,E.envmap,E.aomap,E.lightmap,E.emissivemap,E.fog,E.lights,{emissive:{value:new y(0)}}]),vertexShader:N.meshlambert_vert,fragmentShader:N.meshlambert_frag},phong:{uniforms:na([E.common,E.specularmap,E.envmap,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,
E.displacementmap,E.fog,E.lights,{emissive:{value:new y(0)},specular:{value:new y(1118481)},shininess:{value:30}}]),vertexShader:N.meshphong_vert,fragmentShader:N.meshphong_frag},standard:{uniforms:na([E.common,E.envmap,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,E.displacementmap,E.roughnessmap,E.metalnessmap,E.fog,E.lights,{emissive:{value:new y(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag},
toon:{uniforms:na([E.common,E.specularmap,E.aomap,E.lightmap,E.emissivemap,E.bumpmap,E.normalmap,E.displacementmap,E.gradientmap,E.fog,E.lights,{emissive:{value:new y(0)},specular:{value:new y(1118481)},shininess:{value:30}}]),vertexShader:N.meshtoon_vert,fragmentShader:N.meshtoon_frag},matcap:{uniforms:na([E.common,E.bumpmap,E.normalmap,E.displacementmap,E.fog,{matcap:{value:null}}]),vertexShader:N.meshmatcap_vert,fragmentShader:N.meshmatcap_frag},points:{uniforms:na([E.points,E.fog]),vertexShader:N.points_vert,
fragmentShader:N.points_frag},dashed:{uniforms:na([E.common,E.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N.linedashed_vert,fragmentShader:N.linedashed_frag},depth:{uniforms:na([E.common,E.displacementmap]),vertexShader:N.depth_vert,fragmentShader:N.depth_frag},normal:{uniforms:na([E.common,E.bumpmap,E.normalmap,E.displacementmap,{opacity:{value:1}}]),vertexShader:N.normal_vert,fragmentShader:N.normal_frag},sprite:{uniforms:na([E.sprite,E.fog]),vertexShader:N.sprite_vert,
fragmentShader:N.sprite_frag},background:{uniforms:{uvTransform:{value:new za},t2D:{value:null}},vertexShader:N.background_vert,fragmentShader:N.background_frag},cube:{uniforms:na([E.envmap,{opacity:{value:1}}]),vertexShader:N.cube_vert,fragmentShader:N.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N.equirect_vert,fragmentShader:N.equirect_frag},distanceRGBA:{uniforms:na([E.common,E.displacementmap,{referencePosition:{value:new n},nearDistance:{value:1},farDistance:{value:1E3}}]),
vertexShader:N.distanceRGBA_vert,fragmentShader:N.distanceRGBA_frag},shadow:{uniforms:na([E.lights,E.fog,{color:{value:new y(0)},opacity:{value:1}}]),vertexShader:N.shadow_vert,fragmentShader:N.shadow_frag}};eb.physical={uniforms:na([eb.standard.uniforms,{transparency:{value:0},clearcoat:{value:0},clearcoatRoughness:{value:0},sheen:{value:new y(0)},clearcoatNormalScale:{value:new x(1,1)},clearcoatNormalMap:{value:null}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag};Id.prototype=
Object.create(M.prototype);Id.prototype.constructor=Id;dc.prototype=Object.create(G.prototype);dc.prototype.constructor=dc;rb.prototype=Object.create(T.prototype);rb.prototype.constructor=rb;rb.prototype.isCubeTexture=!0;Object.defineProperty(rb.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});Ic.prototype=Object.create(T.prototype);Ic.prototype.constructor=Ic;Ic.prototype.isDataTexture2DArray=!0;Jc.prototype=Object.create(T.prototype);Jc.prototype.constructor=
Jc;Jc.prototype.isDataTexture3D=!0;var Fh=new T,Mj=new Ic,Oj=new Jc,Gh=new rb,zh=[],Bh=[],Eh=new Float32Array(16),Dh=new Float32Array(9),Ch=new Float32Array(4);Hh.prototype.updateCache=function(a){var b=this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length));Ia(b,a)};Ih.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c)}};var hg=/([\w\d_]+)(\])?(\[|\.)?/g;Fb.prototype.setValue=function(a,b,c,
d){b=this.map[b];void 0!==b&&b.setValue(a,c,d)};Fb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};Fb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],k=c[g.id];!1!==k.needsUpdate&&g.setValue(a,k.value,d)}};Fb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var tk=0,jg=/^[ \t]*#include +<([\w\d./]+)>/gm,Qh=/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
Ck=0;Gb.prototype=Object.create(L.prototype);Gb.prototype.constructor=Gb;Gb.prototype.isMeshDepthMaterial=!0;Gb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};
Hb.prototype=Object.create(L.prototype);Hb.prototype.constructor=Hb;Hb.prototype.isMeshDistanceMaterial=!0;Hb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;
return this};og.prototype=Object.assign(Object.create(va.prototype),{constructor:og,isWebGLMultiviewRenderTarget:!0,copy:function(a){va.prototype.copy.call(this,a);this.numViews=a.numViews;return this},setNumViews:function(a){this.numViews!==a&&(this.numViews=a,this.dispose());return this}});Pe.prototype=Object.assign(Object.create(pa.prototype),{constructor:Pe,isArrayCamera:!0});Od.prototype=Object.assign(Object.create(D.prototype),{constructor:Od,isGroup:!0});Object.assign(Wh.prototype,Fa.prototype);
Object.assign(Qe.prototype,{isFogExp2:!0,clone:function(){return new Qe(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});Object.assign(Re.prototype,{isFog:!0,clone:function(){return new Re(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});Object.defineProperty(sb.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(sb.prototype,
{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(a){this.usage=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.usage=a.usage;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
a;return this}});var wc=new n;Object.defineProperties(Pd.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Pd.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(a){for(var b=0,c=this.data.count;b<c;b++)wc.x=this.getX(b),wc.y=this.getY(b),wc.z=this.getZ(b),wc.applyMatrix4(a),this.setXYZ(b,wc.x,wc.y,wc.z);return this},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,
b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*
this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}});Jb.prototype=Object.create(L.prototype);Jb.prototype.constructor=
Jb;Jb.prototype.isSpriteMaterial=!0;Jb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this};var Mc,Ee=new n,wd=new n,xd=new n,Nc=new x,Rd=new x,Yh=new P,Mf=new n,Fe=new n,Nf=new n,Oi=new x,mh=new x,Pi=new x;Qd.prototype=Object.assign(Object.create(D.prototype),{constructor:Qd,isSprite:!0,raycast:function(a,b){null===a.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');
wd.setFromMatrixScale(this.matrixWorld);Yh.copy(a.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld);xd.setFromMatrixPosition(this.modelViewMatrix);a.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&wd.multiplyScalar(-xd.z);var c=this.material.rotation;if(0!==c){var d=Math.cos(c);var e=Math.sin(c)}c=this.center;Se(Mf.set(-.5,-.5,0),xd,c,wd,e,d);Se(Fe.set(.5,-.5,0),xd,c,wd,e,d);Se(Nf.set(.5,.5,0),xd,c,wd,e,d);Oi.set(0,0);mh.set(1,
0);Pi.set(1,1);var f=a.ray.intersectTriangle(Mf,Fe,Nf,!1,Ee);if(null===f&&(Se(Fe.set(-.5,.5,0),xd,c,wd,e,d),mh.set(0,1),f=a.ray.intersectTriangle(Mf,Nf,Fe,!1,Ee),null===f))return;e=a.ray.origin.distanceTo(Ee);e<a.near||e>a.far||b.push({distance:e,point:Ee.clone(),uv:ma.getUV(Ee,Mf,Fe,Nf,Oi,mh,Pi,new x),face:null,object:this})},clone:function(){return(new this.constructor(this.material)).copy(this)},copy:function(a){D.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this}});
var Of=new n,Qi=new n;Sd.prototype=Object.assign(Object.create(D.prototype),{constructor:Sd,isLOD:!0,copy:function(a){D.prototype.copy.call(this,a,!1);for(var b=a.levels,c=0,d=b.length;c<d;c++){var e=b[c];this.addLevel(e.object.clone(),e.distance)}this.autoUpdate=a.autoUpdate;return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a);return this},getObjectForDistance:function(a){var b=
this.levels;if(0<b.length){for(var c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object}return null},raycast:function(a,b){if(0<this.levels.length){Of.setFromMatrixPosition(this.matrixWorld);var c=a.ray.origin.distanceTo(Of);this.getObjectForDistance(c).raycast(a,b)}},update:function(a){var b=this.levels;if(1<b.length){Of.setFromMatrixPosition(a.matrixWorld);Qi.setFromMatrixPosition(this.matrixWorld);a=Of.distanceTo(Qi);b[0].object.visible=!0;for(var c=1,d=b.length;c<d;c++)if(a>=b[c].distance)b[c-
1].object.visible=!1,b[c].object.visible=!0;else break;for(;c<d;c++)b[c].object.visible=!1}},toJSON:function(a){a=D.prototype.toJSON.call(this,a);!1===this.autoUpdate&&(a.object.autoUpdate=!1);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Td.prototype=Object.assign(Object.create(ca.prototype),{constructor:Td,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),
this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var a=new S,b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,a.y,a.z,a.w)}},updateMatrixWorld:function(a){ca.prototype.updateMatrixWorld.call(this,a);"attached"===
this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var Ri=new P,Yk=new P;Object.assign(Te.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new P;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);
this.boneInverses.push(c)}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){for(var a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture,e=0,f=
a.length;e<f;e++)Ri.multiplyMatrices(a[e]?a[e].matrixWorld:Yk,b[e]),Ri.toArray(c,16*e);void 0!==d&&(d.needsUpdate=!0)},clone:function(){return new Te(this.bones,this.boneInverses)},getBoneByName:function(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d}}});qg.prototype=Object.assign(Object.create(D.prototype),{constructor:qg,isBone:!0});var Si=new P,Ti=new P,yd=[],Ge=new ca;Ue.prototype=Object.assign(Object.create(ca.prototype),{constructor:Ue,isInstancedMesh:!0,
getMatrixAt:function(a,b){b.fromArray(this.instanceMatrix.array,16*a)},raycast:function(a,b){var c=this.matrixWorld,d=this.count;Ge.geometry=this.geometry;Ge.material=this.material;if(void 0!==Ge.material)for(var e=0;e<d;e++)this.getMatrixAt(e,Si),Ti.multiplyMatrices(c,Si),Ge.matrixWorld=Ti,Ge.raycast(a,yd),0<yd.length&&(yd[0].instanceId=e,yd[0].object=this,b.push(yd[0]),yd.length=0)},setMatrixAt:function(a,b){b.toArray(this.instanceMatrix.array,16*a)},updateMorphTargets:function(){}});ja.prototype=
Object.create(L.prototype);ja.prototype.constructor=ja;ja.prototype.isLineBasicMaterial=!0;ja.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};var Ui=new n,Vi=new n,Wi=new P,Pf=new Wb,He=new qb;Ja.prototype=Object.assign(Object.create(D.prototype),{constructor:Ja,isLine:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry)if(null===a.index){for(var b=a.attributes.position,
c=[0],d=1,e=b.count;d<e;d++)Ui.fromBufferAttribute(b,d-1),Vi.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=Ui.distanceTo(Vi);a.setAttribute("lineDistance",new C(c,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,c[0]=0,d=1,e=b.length;d<e;d++)c[d]=c[d-1],c[d]+=b[d-1].distanceTo(b[d]);return this},raycast:function(a,b){var c=a.linePrecision,d=this.geometry,e=this.matrixWorld;null===
d.boundingSphere&&d.computeBoundingSphere();He.copy(d.boundingSphere);He.applyMatrix4(e);He.radius+=c;if(!1!==a.ray.intersectsSphere(He)){Wi.getInverse(e);Pf.copy(a.ray).applyMatrix4(Wi);c/=(this.scale.x+this.scale.y+this.scale.z)/3;c*=c;var f=new n,g=new n;e=new n;var k=new n,h=this&&this.isLineSegments?2:1;if(d.isBufferGeometry){var m=d.index,v=d.attributes.position.array;if(null!==m){m=m.array;d=0;for(var p=m.length-1;d<p;d+=h){var q=m[d+1];f.fromArray(v,3*m[d]);g.fromArray(v,3*q);q=Pf.distanceSqToSegment(f,
g,k,e);q>c||(k.applyMatrix4(this.matrixWorld),q=a.ray.origin.distanceTo(k),q<a.near||q>a.far||b.push({distance:q,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}))}}else for(d=0,p=v.length/3-1;d<p;d+=h)f.fromArray(v,3*d),g.fromArray(v,3*d+3),q=Pf.distanceSqToSegment(f,g,k,e),q>c||(k.applyMatrix4(this.matrixWorld),q=a.ray.origin.distanceTo(k),q<a.near||q>a.far||b.push({distance:q,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,
object:this}))}else if(d.isGeometry)for(f=d.vertices,g=f.length,d=0;d<g-1;d+=h)q=Pf.distanceSqToSegment(f[d],f[d+1],k,e),q>c||(k.applyMatrix4(this.matrixWorld),q=a.ray.origin.distanceTo(k),q<a.near||q>a.far||b.push({distance:q,point:e.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this}))}},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var Qf=new n,Rf=new n;la.prototype=Object.assign(Object.create(Ja.prototype),{constructor:la,
isLineSegments:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry)if(null===a.index){for(var b=a.attributes.position,c=[],d=0,e=b.count;d<e;d+=2)Qf.fromBufferAttribute(b,d),Rf.fromBufferAttribute(b,d+1),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Qf.distanceTo(Rf);a.setAttribute("lineDistance",new C(c,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,d=
0,e=b.length;d<e;d+=2)Qf.copy(b[d]),Rf.copy(b[d+1]),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Qf.distanceTo(Rf);return this}});Ve.prototype=Object.assign(Object.create(Ja.prototype),{constructor:Ve,isLineLoop:!0});Va.prototype=Object.create(L.prototype);Va.prototype.constructor=Va;Va.prototype.isPointsMaterial=!0;Va.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.morphTargets=
a.morphTargets;return this};var Xi=new P,sg=new Wb,Ie=new qb,Sf=new n;Oc.prototype=Object.assign(Object.create(D.prototype),{constructor:Oc,isPoints:!0,raycast:function(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;null===c.boundingSphere&&c.computeBoundingSphere();Ie.copy(c.boundingSphere);Ie.applyMatrix4(d);Ie.radius+=e;if(!1!==a.ray.intersectsSphere(Ie))if(Xi.getInverse(d),sg.copy(a.ray).applyMatrix4(Xi),e/=(this.scale.x+this.scale.y+this.scale.z)/3,e*=e,c.isBufferGeometry){var f=
c.index;c=c.attributes.position.array;if(null!==f){var g=f.array;f=0;for(var k=g.length;f<k;f++){var h=g[f];Sf.fromArray(c,3*h);rg(Sf,h,e,d,a,b,this)}}else for(f=0,g=c.length/3;f<g;f++)Sf.fromArray(c,3*f),rg(Sf,f,e,d,a,b,this)}else for(c=c.vertices,f=0,g=c.length;f<g;f++)rg(c[f],f,e,d,a,b,this)},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary=
{},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});tg.prototype=Object.assign(Object.create(T.prototype),{constructor:tg,isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=
a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});Pc.prototype=Object.create(T.prototype);Pc.prototype.constructor=Pc;Pc.prototype.isCompressedTexture=!0;Ud.prototype=Object.create(T.prototype);Ud.prototype.constructor=Ud;Ud.prototype.isCanvasTexture=!0;Vd.prototype=Object.create(T.prototype);Vd.prototype.constructor=Vd;Vd.prototype.isDepthTexture=!0;Qc.prototype=Object.create(G.prototype);Qc.prototype.constructor=Qc;Wd.prototype=Object.create(M.prototype);Wd.prototype.constructor=Wd;Rc.prototype=Object.create(G.prototype);
Rc.prototype.constructor=Rc;Xd.prototype=Object.create(M.prototype);Xd.prototype.constructor=Xd;Ga.prototype=Object.create(G.prototype);Ga.prototype.constructor=Ga;Yd.prototype=Object.create(M.prototype);Yd.prototype.constructor=Yd;Sc.prototype=Object.create(Ga.prototype);Sc.prototype.constructor=Sc;Zd.prototype=Object.create(M.prototype);Zd.prototype.constructor=Zd;ec.prototype=Object.create(Ga.prototype);ec.prototype.constructor=ec;$d.prototype=Object.create(M.prototype);$d.prototype.constructor=
$d;Tc.prototype=Object.create(Ga.prototype);Tc.prototype.constructor=Tc;ae.prototype=Object.create(M.prototype);ae.prototype.constructor=ae;Uc.prototype=Object.create(Ga.prototype);Uc.prototype.constructor=Uc;be.prototype=Object.create(M.prototype);be.prototype.constructor=be;fc.prototype=Object.create(G.prototype);fc.prototype.constructor=fc;fc.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);a.path=this.parameters.path.toJSON();return a};ce.prototype=Object.create(M.prototype);ce.prototype.constructor=
ce;Vc.prototype=Object.create(G.prototype);Vc.prototype.constructor=Vc;de.prototype=Object.create(M.prototype);de.prototype.constructor=de;Wc.prototype=Object.create(G.prototype);Wc.prototype.constructor=Wc;var Zk={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=Zh(a,0,e,c,!0),g=[];if(!f||f.next===f.prev)return g;var k;if(d){var h=c;d=[];var m;var n=0;for(m=b.length;n<m;n++){var p=b[n]*h;var q=n<m-1?b[n+1]*h:a.length;p=Zh(a,p,q,h,!1);p===p.next&&(p.steiner=!0);d.push(Kk(p))}d.sort(Ik);
for(n=0;n<d.length;n++){b=d[n];h=f;if(h=Jk(b,h))b=bi(h,b),fe(b,b.next);f=fe(f,f.next)}}if(a.length>80*c){var t=k=a[0];var r=d=a[1];for(h=c;h<e;h+=c)n=a[h],b=a[h+1],n<t&&(t=n),b<r&&(r=b),n>k&&(k=n),b>d&&(d=b);k=Math.max(k-t,d-r);k=0!==k?1/k:0}ge(f,g,c,t,r,k);return g}},tb={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},isClockWise:function(a){return 0>tb.area(a)},triangulateShape:function(a,b){var c=[],d=[],e=[];ci(a);di(c,a);var f=a.length;b.forEach(ci);
for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,di(c,b[a]);b=Zk.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e}};hc.prototype=Object.create(M.prototype);hc.prototype.constructor=hc;hc.prototype.toJSON=function(){var a=M.prototype.toJSON.call(this);return ei(this.parameters.shapes,this.parameters.options,a)};gb.prototype=Object.create(G.prototype);gb.prototype.constructor=gb;gb.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);return ei(this.parameters.shapes,
this.parameters.options,a)};var Lk={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new x(b[3*c],b[3*c+1]),new x(a,d),new x(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var k=b[3*d],h=b[3*d+1];d=b[3*d+2];var m=b[3*e],n=b[3*e+1];e=b[3*e+2];var p=b[3*f],q=b[3*f+1];b=b[3*f+2];return.01>Math.abs(g-h)?[new x(a,1-c),new x(k,1-d),new x(m,1-e),new x(p,1-b)]:[new x(g,1-c),new x(h,1-d),new x(n,1-e),new x(q,1-b)]}};ie.prototype=Object.create(M.prototype);
ie.prototype.constructor=ie;Yc.prototype=Object.create(gb.prototype);Yc.prototype.constructor=Yc;je.prototype=Object.create(M.prototype);je.prototype.constructor=je;ic.prototype=Object.create(G.prototype);ic.prototype.constructor=ic;ke.prototype=Object.create(M.prototype);ke.prototype.constructor=ke;Zc.prototype=Object.create(G.prototype);Zc.prototype.constructor=Zc;le.prototype=Object.create(M.prototype);le.prototype.constructor=le;$c.prototype=Object.create(G.prototype);$c.prototype.constructor=
$c;jc.prototype=Object.create(M.prototype);jc.prototype.constructor=jc;jc.prototype.toJSON=function(){var a=M.prototype.toJSON.call(this);return fi(this.parameters.shapes,a)};kc.prototype=Object.create(G.prototype);kc.prototype.constructor=kc;kc.prototype.toJSON=function(){var a=G.prototype.toJSON.call(this);return fi(this.parameters.shapes,a)};ad.prototype=Object.create(G.prototype);ad.prototype.constructor=ad;lc.prototype=Object.create(M.prototype);lc.prototype.constructor=lc;ub.prototype=Object.create(G.prototype);
ub.prototype.constructor=ub;me.prototype=Object.create(lc.prototype);me.prototype.constructor=me;ne.prototype=Object.create(ub.prototype);ne.prototype.constructor=ne;oe.prototype=Object.create(M.prototype);oe.prototype.constructor=oe;bd.prototype=Object.create(G.prototype);bd.prototype.constructor=bd;var ua=Object.freeze({__proto__:null,WireframeGeometry:Qc,ParametricGeometry:Wd,ParametricBufferGeometry:Rc,TetrahedronGeometry:Yd,TetrahedronBufferGeometry:Sc,OctahedronGeometry:Zd,OctahedronBufferGeometry:ec,
IcosahedronGeometry:$d,IcosahedronBufferGeometry:Tc,DodecahedronGeometry:ae,DodecahedronBufferGeometry:Uc,PolyhedronGeometry:Xd,PolyhedronBufferGeometry:Ga,TubeGeometry:be,TubeBufferGeometry:fc,TorusKnotGeometry:ce,TorusKnotBufferGeometry:Vc,TorusGeometry:de,TorusBufferGeometry:Wc,TextGeometry:ie,TextBufferGeometry:Yc,SphereGeometry:je,SphereBufferGeometry:ic,RingGeometry:ke,RingBufferGeometry:Zc,PlaneGeometry:Id,PlaneBufferGeometry:dc,LatheGeometry:le,LatheBufferGeometry:$c,ShapeGeometry:jc,ShapeBufferGeometry:kc,
ExtrudeGeometry:hc,ExtrudeBufferGeometry:gb,EdgesGeometry:ad,ConeGeometry:me,ConeBufferGeometry:ne,CylinderGeometry:lc,CylinderBufferGeometry:ub,CircleGeometry:oe,CircleBufferGeometry:bd,BoxGeometry:lh,BoxBufferGeometry:Jd});mc.prototype=Object.create(L.prototype);mc.prototype.constructor=mc;mc.prototype.isShadowMaterial=!0;mc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);return this};vb.prototype=Object.create(oa.prototype);vb.prototype.constructor=vb;vb.prototype.isRawShaderMaterial=
!0;hb.prototype=Object.create(L.prototype);hb.prototype.constructor=hb;hb.prototype.isMeshStandardMaterial=!0;hb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;
this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=
a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};nc.prototype=Object.create(hb.prototype);nc.prototype.constructor=nc;nc.prototype.isMeshPhysicalMaterial=!0;nc.prototype.copy=function(a){hb.prototype.copy.call(this,a);this.defines={STANDARD:"",PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearcoat=a.clearcoat;this.clearcoatRoughness=
a.clearcoatRoughness;this.sheen=a.sheen?(this.sheen||new y).copy(a.sheen):null;this.clearcoatNormalMap=a.clearcoatNormalMap;this.clearcoatNormalScale.copy(a.clearcoatNormalScale);this.transparency=a.transparency;return this};Kb.prototype=Object.create(L.prototype);Kb.prototype.constructor=Kb;Kb.prototype.isMeshPhongMaterial=!0;Kb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=
a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=
a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};oc.prototype=Object.create(L.prototype);oc.prototype.constructor=oc;oc.prototype.isMeshToonMaterial=
!0;oc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.gradientMap=a.gradientMap;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=
a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};pc.prototype=
Object.create(L.prototype);pc.prototype.constructor=pc;pc.prototype.isMeshNormalMaterial=!0;pc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=
a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};qc.prototype=Object.create(L.prototype);qc.prototype.constructor=qc;qc.prototype.isMeshLambertMaterial=!0;qc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=
a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};rc.prototype=Object.create(L.prototype);rc.prototype.constructor=
rc;rc.prototype.isMeshMatcapMaterial=!0;rc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;
this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};sc.prototype=Object.create(ja.prototype);sc.prototype.constructor=sc;sc.prototype.isLineDashedMaterial=!0;sc.prototype.copy=function(a){ja.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var $k=Object.freeze({__proto__:null,ShadowMaterial:mc,SpriteMaterial:Jb,RawShaderMaterial:vb,ShaderMaterial:oa,PointsMaterial:Va,MeshPhysicalMaterial:nc,MeshStandardMaterial:hb,
MeshPhongMaterial:Kb,MeshToonMaterial:oc,MeshNormalMaterial:pc,MeshLambertMaterial:qc,MeshDepthMaterial:Gb,MeshDistanceMaterial:Hb,MeshBasicMaterial:Oa,MeshMatcapMaterial:rc,LineDashedMaterial:sc,LineBasicMaterial:ja,Material:L}),ea={arraySlice:function(a,b,c){return ea.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&
!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var k=c[f]*b,h=0;h!==b;++h)e[g++]=a[k+h];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),
f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}},subclip:function(a,b,c,d,e){e=e||30;a=a.clone();a.name=b;var f=[];for(b=0;b<a.tracks.length;++b){for(var g=a.tracks[b],k=g.getValueSize(),h=[],m=[],n=0;n<g.times.length;++n){var p=g.times[n]*e;if(!(p<c||p>=d))for(h.push(g.times[n]),p=0;p<k;++p)m.push(g.values[n*k+p])}0!==h.length&&
(g.times=ea.convertArray(h,g.times.constructor),g.values=ea.convertArray(m,g.values.constructor),f.push(g))}a.tracks=f;c=Infinity;for(b=0;b<a.tracks.length;++b)c>a.tracks[b].times[0]&&(c=a.tracks[b].times[0]);for(b=0;b<a.tracks.length;++b)a.tracks[b].shift(-1*c);a.resetDuration();return a}};Object.assign(Ka.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;
return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,
e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});Object.assign(Ka.prototype,{beforeStart_:Ka.prototype.copySampleValue_,afterEnd_:Ka.prototype.copySampleValue_});We.prototype=
Object.assign(Object.create(Ka.prototype),{constructor:We,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],k=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===k)switch(this.getSettings_().endingEnd){case 2401:f=a;k=2*c-b;break;case 2402:f=1;k=c+d[1]-d[0];break;default:f=a-1,k=b}a=.5*(c-b);d=this.valueSize;
this._weightPrev=a/(b-g);this._weightNext=a/(k-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var k=a-g,h=this._offsetPrev,m=this._offsetNext,n=this._weightPrev,p=this._weightNext,q=(c-b)/(d-b);c=q*q;d=c*q;b=-n*d+2*n*c-n*q;n=(1+n)*d+(-1.5-2*n)*c+(-.5+n)*q+1;q=(-1-p)*d+(1.5+p)*c+.5*q;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=b*f[h+c]+n*f[k+c]+q*f[a+c]+p*f[m+c];return e}});pe.prototype=Object.assign(Object.create(Ka.prototype),
{constructor:pe,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var k=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[k+d]*c+f[a+d]*b;return e}});Xe.prototype=Object.assign(Object.create(Ka.prototype),{constructor:Xe,interpolate_:function(a){return this.copySampleValue_(a-1)}});Object.assign(ra,{toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:ea.convertArray(a.times,Array),values:ea.convertArray(a.values,
Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b}});Object.assign(ra.prototype,{constructor:ra,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Xe(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new pe(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new We(this.times,
this.values,this.getValueSize(),a)},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn("THREE.KeyframeTrack:",
b);return this}this.createInterpolant=b;return this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==
d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=ea.arraySlice(c,e,f),this.values=ea.arraySlice(this.values,e*a,f*a);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",
this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ea.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,
c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var k=!1,h=a[g];if(h!==a[g+1]&&(1!==g||h!==h[0]))if(d)k=!0;else{var m=g*c,n=m-c,p=m+c;for(h=0;h!==c;++h){var q=b[m+h];if(q!==b[n+h]||q!==b[p+h]){k=!0;break}}}if(k){if(g!==e)for(a[e]=a[g],k=g*c,m=e*c,h=0;h!==c;++h)b[m+h]=b[k+h];++e}}if(0<f){a[e]=a[f];k=f*c;m=e*c;for(h=0;h!==c;++h)b[m+h]=b[k+h];++e}e!==a.length&&(this.times=ea.arraySlice(a,0,e),this.values=ea.arraySlice(b,0,e*c));return this},clone:function(){var a=
ea.arraySlice(this.times,0),b=ea.arraySlice(this.values,0);a=new this.constructor(this.name,a,b);a.createInterpolant=this.createInterpolant;return a}});Ye.prototype=Object.assign(Object.create(ra.prototype),{constructor:Ye,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Ze.prototype=Object.assign(Object.create(ra.prototype),{constructor:Ze,ValueTypeName:"color"});cd.prototype=Object.assign(Object.create(ra.prototype),
{constructor:cd,ValueTypeName:"number"});$e.prototype=Object.assign(Object.create(Ka.prototype),{constructor:$e,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)Da.slerpFlat(e,0,f,a-g,f,a,b);return e}});qe.prototype=Object.assign(Object.create(ra.prototype),{constructor:qe,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new $e(this.times,this.values,this.getValueSize(),
a)},InterpolantFactoryMethodSmooth:void 0});af.prototype=Object.assign(Object.create(ra.prototype),{constructor:af,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});dd.prototype=Object.assign(Object.create(ra.prototype),{constructor:dd,ValueTypeName:"vector"});Object.assign(Qa,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(Nk(c[e]).scale(d));return new Qa(a.name,
a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid};for(var d=0,e=c.length;d!==e;++d)b.push(ra.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var k=[],h=[];k.push((g+e-1)%e,g,(g+1)%e);h.push(0,1,0);var m=ea.getKeyframeOrder(k);k=ea.sortedArray(k,1,m);h=ea.sortedArray(h,1,m);d||0!==k[0]||(k.push(e),h.push(h[0]));f.push((new cd(".morphTargetInfluences["+b[g].name+"]",k,h)).scale(1/
c))}return new Qa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var k=a[f],h=k.name.match(e);if(h&&1<h.length){var m=h[1];(h=d[m])||(d[m]=h=[]);h.push(k)}}a=[];for(m in d)a.push(Qa.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,
b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ea.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||[];for(var k=0;k<a.length;k++){var h=a[k].keys;if(h&&0!==h.length)if(h[0].morphTargets){f={};for(var m=0;m<h.length;m++)if(h[m].morphTargets)for(var n=0;n<h[m].morphTargets.length;n++)f[h[m].morphTargets[n]]=-1;for(var p in f){var q=
[],t=[];for(n=0;n!==h[m].morphTargets.length;++n){var r=h[m];q.push(r.time);t.push(r.morphTarget===p?1:0)}d.push(new cd(".morphTargetInfluence["+p+"]",q,t))}f=f.length*(g||1)}else m=".bones["+b[k].name+"]",c(dd,m+".position",h,"pos",d),c(qe,m+".quaternion",h,"rot",d),c(dd,m+".scale",h,"scl",d)}return 0===d.length?null:new Qa(e,f,d)}});Object.assign(Qa.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1])}this.duration=
a;return this},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},validate:function(){for(var a=!0,b=0;b<this.tracks.length;b++)a=a&&this.tracks[b].validate();return a},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this},clone:function(){for(var a=[],b=0;b<this.tracks.length;b++)a.push(this.tracks[b].clone());return new Qa(this.name,this.duration,a)}});var xc={enabled:!1,files:{},add:function(a,b){!1!==
this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},gi=new wg;Object.assign(Q.prototype,{load:function(){},parse:function(){},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this},setResourcePath:function(a){this.resourcePath=a;return this}});var cb={};Ra.prototype=Object.assign(Object.create(Q.prototype),{constructor:Ra,load:function(a,
b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=xc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;if(void 0!==cb[a])cb[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var k=!!g[2];g=g[3];g=decodeURIComponent(g);k&&(g=atob(g));try{var h=(this.responseType||"").toLowerCase();switch(h){case "arraybuffer":case "blob":var m=new Uint8Array(g.length);
for(k=0;k<g.length;k++)m[k]=g.charCodeAt(k);var n="blob"===h?new Blob([m.buffer],{type:c}):m.buffer;break;case "document":n=(new DOMParser).parseFromString(g,c);break;case "json":n=JSON.parse(g);break;default:n=g}setTimeout(function(){b&&b(n);e.manager.itemEnd(a)},0)}catch(q){setTimeout(function(){d&&d(q);e.manager.itemError(a);e.manager.itemEnd(a)},0)}}else{cb[a]=[];cb[a].push({onLoad:b,onProgress:c,onError:d});var p=new XMLHttpRequest;p.open("GET",a,!0);p.addEventListener("load",function(b){var c=
this.response,d=cb[a];delete cb[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");xc.add(a,c);for(var f=0,g=d.length;f<g;f++){var k=d[f];if(k.onLoad)k.onLoad(c)}}else{f=0;for(g=d.length;f<g;f++)if(k=d[f],k.onError)k.onError(b);e.manager.itemError(a)}e.manager.itemEnd(a)},!1);p.addEventListener("progress",function(b){for(var c=cb[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b)}},!1);p.addEventListener("error",
function(b){var c=cb[a];delete cb[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);p.addEventListener("abort",function(b){var c=cb[a];delete cb[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);void 0!==this.responseType&&(p.responseType=this.responseType);void 0!==this.withCredentials&&(p.withCredentials=this.withCredentials);p.overrideMimeType&&p.overrideMimeType(void 0!==
this.mimeType?this.mimeType:"text/plain");for(k in this.requestHeader)p.setRequestHeader(k,this.requestHeader[k]);p.send(null)}e.manager.itemStart(a);return p}},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this},setRequestHeader:function(a){this.requestHeader=a;return this}});xg.prototype=Object.assign(Object.create(Q.prototype),{constructor:xg,load:function(a,b,c,d){var e=
this,f=new Ra(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){for(var b=[],c=0;c<a.length;c++){var d=Qa.parse(a[c]);b.push(d)}return b}});yg.prototype=Object.assign(Object.create(Q.prototype),{constructor:yg,load:function(a,b,c,d){function e(e){h.load(a[e],function(a){a=f.parse(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(k.minFilter=1006),k.format=a.format,k.needsUpdate=!0,b&&b(k))},
c,d)}var f=this,g=[],k=new Pc;k.image=g;var h=new Ra(this.manager);h.setPath(this.path);h.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=0,n=0,p=a.length;n<p;++n)e(n);else h.load(a,function(a){a=f.parse(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else k.image.width=a.width,k.image.height=a.height,
k.mipmaps=a.mipmaps;1===a.mipmapCount&&(k.minFilter=1006);k.format=a.format;k.needsUpdate=!0;b&&b(k)},c,d);return k}});bf.prototype=Object.assign(Object.create(Q.prototype),{constructor:bf,load:function(a,b,c,d){var e=this,f=new cc,g=new Ra(this.manager);g.setResponseType("arraybuffer");g.setPath(this.path);g.load(a,function(a){if(a=e.parse(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,
f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1006,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps,f.minFilter=1008),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});ed.prototype=Object.assign(Object.create(Q.prototype),{constructor:ed,load:function(a,b,c,d){function e(){h.removeEventListener("load",
e,!1);h.removeEventListener("error",f,!1);xc.add(a,this);b&&b(this);g.manager.itemEnd(a)}function f(b){h.removeEventListener("load",e,!1);h.removeEventListener("error",f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a)}void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var g=this,k=xc.get(a);if(void 0!==k)return g.manager.itemStart(a),setTimeout(function(){b&&b(k);g.manager.itemEnd(a)},0),k;var h=document.createElementNS("http://www.w3.org/1999/xhtml","img");h.addEventListener("load",
e,!1);h.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(h.crossOrigin=this.crossOrigin);g.manager.itemStart(a);h.src=a;return h}});cf.prototype=Object.assign(Object.create(Q.prototype),{constructor:cf,load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;k++;6===k&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new rb,g=new ed(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var k=0;for(c=0;c<a.length;++c)e(c);return f}});
df.prototype=Object.assign(Object.create(Q.prototype),{constructor:df,load:function(a,b,c,d){var e=new T,f=new ed(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e}});Object.assign(I.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(a,b){a=this.getUtoTmapping(a);
return this.getPoint(a,b)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=
[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f}return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1)},getTangent:function(a){var b=a-1E-4;
a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new n,d=[],e=[],f=[],g=new n,k=new P,h;for(h=0;h<=a;h++){var m=h/a;d[h]=this.getTangentAt(m);d[h].normalize()}e[0]=new n;f[0]=new n;h=Number.MAX_VALUE;m=Math.abs(d[0].x);var v=Math.abs(d[0].y),p=Math.abs(d[0].z);m<=h&&(h=m,c.set(1,0,0));v<=h&&(h=v,c.set(0,1,0));p<=h&&c.set(0,0,1);g.crossVectors(d[0],
c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(h=1;h<=a;h++)e[h]=e[h-1].clone(),f[h]=f[h-1].clone(),g.crossVectors(d[h-1],d[h]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(O.clamp(d[h-1].dot(d[h]),-1,1)),e[h].applyMatrix4(k.makeRotationAxis(g,c))),f[h].crossVectors(d[h],e[h]);if(!0===b)for(c=Math.acos(O.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),h=1;h<=a;h++)e[h].applyMatrix4(k.makeRotationAxis(d[h],c*h)),f[h].crossVectors(d[h],
e[h]);return{tangents:d,normals:e,binormals:f}},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this},toJSON:function(){var a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this}});La.prototype=Object.create(I.prototype);La.prototype.constructor=La;La.prototype.isEllipseCurve=
!0;La.prototype.getPoint=function(a,b){b=b||new x;for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;)d+=c;for(;d>c;)d-=c;d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f)};La.prototype.copy=function(a){I.prototype.copy.call(this,
a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};La.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a};La.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,
a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};fd.prototype=Object.create(La.prototype);fd.prototype.constructor=fd;fd.prototype.isArcCurve=!0;var Tf=new n,nh=new zg,oh=new zg,ph=new zg;Aa.prototype=Object.create(I.prototype);Aa.prototype.constructor=Aa;Aa.prototype.isCatmullRomCurve3=!0;Aa.prototype.getPoint=function(a,b){b=b||new n;var c=this.points,
d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Tf.subVectors(c[0],c[1]).add(c[0]),f=Tf;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Tf.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Tf);if("centripetal"===this.curveType||"chordal"===this.curveType){var l="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),l);e=Math.pow(g.distanceToSquared(h),
l);l=Math.pow(h.distanceToSquared(c),l);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>l&&(l=e);nh.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,l);oh.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,l);ph.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,l)}else"catmullrom"===this.curveType&&(nh.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),oh.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),ph.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(nh.calc(a),oh.calc(a),ph.calc(a));return b};Aa.prototype.copy=function(a){I.prototype.copy.call(this,
a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};Aa.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a};Aa.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.points=[];
for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new n).fromArray(d))}this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};Wa.prototype=Object.create(I.prototype);Wa.prototype.constructor=Wa;Wa.prototype.isCubicBezierCurve=!0;Wa.prototype.getPoint=function(a,b){b=b||new x;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(se(a,c.x,d.x,e.x,f.x),se(a,c.y,d.y,e.y,f.y));return b};Wa.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);
this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Wa.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Wa.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};ib.prototype=Object.create(I.prototype);ib.prototype.constructor=ib;ib.prototype.isCubicBezierCurve3=
!0;ib.prototype.getPoint=function(a,b){b=b||new n;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(se(a,c.x,d.x,e.x,f.x),se(a,c.y,d.y,e.y,f.y),se(a,c.z,d.z,e.z,f.z));return b};ib.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};ib.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};ib.prototype.fromJSON=
function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};Ea.prototype=Object.create(I.prototype);Ea.prototype.constructor=Ea;Ea.prototype.isLineCurve=!0;Ea.prototype.getPoint=function(a,b){b=b||new x;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Ea.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Ea.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};
Ea.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ea.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ea.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Xa.prototype=Object.create(I.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isLineCurve3=!0;Xa.prototype.getPoint=function(a,b){b=b||
new n;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Xa.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Xa.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Xa.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Xa.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);
return this};Ya.prototype=Object.create(I.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isQuadraticBezierCurve=!0;Ya.prototype.getPoint=function(a,b){b=b||new x;var c=this.v0,d=this.v1,e=this.v2;b.set(re(a,c.x,d.x,e.x),re(a,c.y,d.y,e.y));return b};Ya.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ya.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=
this.v2.toArray();return a};Ya.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};jb.prototype=Object.create(I.prototype);jb.prototype.constructor=jb;jb.prototype.isQuadraticBezierCurve3=!0;jb.prototype.getPoint=function(a,b){b=b||new n;var c=this.v0,d=this.v1,e=this.v2;b.set(re(a,c.x,d.x,e.x),re(a,c.y,d.y,e.y),re(a,c.z,d.z,e.z));return b};jb.prototype.copy=function(a){I.prototype.copy.call(this,a);
this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};jb.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};jb.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Za.prototype=Object.create(I.prototype);Za.prototype.constructor=Za;Za.prototype.isSplineCurve=!0;Za.prototype.getPoint=function(a,b){b=
b||new x;var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set(hi(d,e.x,f.x,g.x,c.x),hi(d,e.y,f.y,g.y,c.y));return b};Za.prototype.copy=function(a){I.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this};Za.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());
return a};Za.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new x).fromArray(d))}return this};var qh=Object.freeze({__proto__:null,ArcCurve:fd,CatmullRomCurve3:Aa,CubicBezierCurve:Wa,CubicBezierCurve3:ib,EllipseCurve:La,LineCurve:Ea,LineCurve3:Xa,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:jb,SplineCurve:Za});wb.prototype=Object.assign(Object.create(I.prototype),{constructor:wb,add:function(a){this.curves.push(a)},
closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Ea(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},
getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?
2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},copy:function(a){I.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this},toJSON:function(){var a=I.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=
[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a},fromJSON:function(a){I.prototype.fromJSON.call(this,a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push((new qh[d.type]).fromJSON(d))}return this}});$a.prototype=Object.assign(Object.create(wb.prototype),{constructor:$a,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y);return this},
moveTo:function(a,b){this.currentPoint.set(a,b);return this},lineTo:function(a,b){var c=new Ea(this.currentPoint.clone(),new x(a,b));this.curves.push(c);this.currentPoint.set(a,b);return this},quadraticCurveTo:function(a,b,c,d){a=new Ya(this.currentPoint.clone(),new x(a,b),new x(c,d));this.curves.push(a);this.currentPoint.set(c,d);return this},bezierCurveTo:function(a,b,c,d,e,f){a=new Wa(this.currentPoint.clone(),new x(a,b),new x(c,d),new x(e,f));this.curves.push(a);this.currentPoint.set(e,f);return this},
splineThru:function(a){var b=[this.currentPoint.clone()].concat(a);b=new Za(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);return this},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);return this},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);return this},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);return this},absellipse:function(a,b,c,d,e,f,g,h){a=new La(a,b,c,d,
e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);return this},copy:function(a){wb.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this},toJSON:function(){var a=wb.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a},fromJSON:function(a){wb.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this}});Lb.prototype=
Object.assign(Object.create($a.prototype),{constructor:Lb,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){$a.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this},toJSON:function(){var a=$a.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=
0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());return a},fromJSON:function(a){$a.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push((new $a).fromJSON(d))}return this}});ba.prototype=Object.assign(Object.create(D.prototype),{constructor:ba,isLight:!0,copy:function(a){D.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=D.prototype.toJSON.call(this,
a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});ef.prototype=Object.assign(Object.create(ba.prototype),{constructor:ef,
isHemisphereLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(kb.prototype,{_projScreenMatrix:new P,_lightPositionWorld:new n,_lookTarget:new n,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(a){var b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld);b.position.copy(f);
e.setFromMatrixPosition(a.target.matrixWorld);b.lookAt(e);b.updateMatrixWorld();d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromMatrix(d);c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);c.multiply(b.projectionMatrix);c.multiply(b.matrixWorldInverse)},getViewport:function(a){return this._viewports[a]},getFrameExtents:function(){return this._frameExtents},copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},
clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});ff.prototype=Object.assign(Object.create(kb.prototype),{constructor:ff,isSpotLightShadow:!0,updateMatrices:function(a){var b=this.camera,c=2*O.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height,
e=a.distance||b.far;if(c!==b.fov||d!==b.aspect||e!==b.far)b.fov=c,b.aspect=d,b.far=e,b.updateProjectionMatrix();kb.prototype.updateMatrices.call(this,a)}});gf.prototype=Object.assign(Object.create(ba.prototype),{constructor:gf,isSpotLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Ag.prototype=Object.assign(Object.create(kb.prototype),
{constructor:Ag,isPointLightShadow:!0,updateMatrices:function(a,b){void 0===b&&(b=0);var c=this.camera,d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=this._projScreenMatrix;e.setFromMatrixPosition(a.matrixWorld);c.position.copy(e);f.copy(c.position);f.add(this._cubeDirections[b]);c.up.copy(this._cubeUps[b]);c.lookAt(f);c.updateMatrixWorld();d.makeTranslation(-e.x,-e.y,-e.z);g.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);this._frustum.setFromMatrix(g)}});hf.prototype=Object.assign(Object.create(ba.prototype),
{constructor:hf,isPointLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this}});gd.prototype=Object.assign(Object.create(db.prototype),{constructor:gd,isOrthographicCamera:!0,copy:function(a,b){db.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},
setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-
this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;if(null!==this.view&&this.view.enabled){c=this.zoom/(this.view.width/this.view.fullWidth);b=this.zoom/(this.view.height/this.view.fullHeight);var f=(this.right-this.left)/this.view.width;d=(this.top-this.bottom)/this.view.height;e+=this.view.offsetX/c*f;c=e+this.view.width/c*f;a-=this.view.offsetY/b*d;b=a-this.view.height/b*d}this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},
toJSON:function(a){a=D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});jf.prototype=Object.assign(Object.create(kb.prototype),{constructor:jf,isDirectionalLightShadow:!0,updateMatrices:function(a){kb.prototype.updateMatrices.call(this,a)}});kf.prototype=Object.assign(Object.create(ba.prototype),
{constructor:kf,isDirectionalLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});lf.prototype=Object.assign(Object.create(ba.prototype),{constructor:lf,isAmbientLight:!0});mf.prototype=Object.assign(Object.create(ba.prototype),{constructor:mf,isRectAreaLight:!0,copy:function(a){ba.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=ba.prototype.toJSON.call(this,a);a.object.width=
this.width;a.object.height=this.height;return a}});nf.prototype=Object.assign(Object.create(Q.prototype),{constructor:nf,load:function(a,b,c,d){var e=this,f=new Ra(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new $k[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);
void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.sheen&&(d.sheen=(new y).setHex(a.sheen));void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearcoat&&(d.clearcoat=a.clearcoat);void 0!==a.clearcoatRoughness&&(d.clearcoatRoughness=a.clearcoatRoughness);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=
a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.stencilWrite&&(d.stencilWrite=
a.stencilWrite);void 0!==a.stencilWriteMask&&(d.stencilWriteMask=a.stencilWriteMask);void 0!==a.stencilFunc&&(d.stencilFunc=a.stencilFunc);void 0!==a.stencilRef&&(d.stencilRef=a.stencilRef);void 0!==a.stencilFuncMask&&(d.stencilFuncMask=a.stencilFuncMask);void 0!==a.stencilFail&&(d.stencilFail=a.stencilFail);void 0!==a.stencilZFail&&(d.stencilZFail=a.stencilZFail);void 0!==a.stencilZPass&&(d.stencilZPass=a.stencilZPass);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&
(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=
a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.morphNormals&&(d.morphNormals=a.morphNormals);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.toneMapped&&(d.toneMapped=a.toneMapped);void 0!==a.userData&&(d.userData=a.userData);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];
d.uniforms[e]={};switch(f.type){case "t":d.uniforms[e].value=b(f.value);break;case "c":d.uniforms[e].value=(new y).setHex(f.value);break;case "v2":d.uniforms[e].value=(new x).fromArray(f.value);break;case "v3":d.uniforms[e].value=(new n).fromArray(f.value);break;case "v4":d.uniforms[e].value=(new S).fromArray(f.value);break;case "m3":d.uniforms[e].value=(new za).fromArray(f.value);case "m4":d.uniforms[e].value=(new P).fromArray(f.value);break;default:d.uniforms[e].value=f.value}}void 0!==a.defines&&
(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);if(void 0!==a.extensions)for(var g in a.extensions)d.extensions[g]=a.extensions[g];void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.matcap&&(d.matcap=b(a.matcap));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=
!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==a.normalScale&&(e=a.normalScale,!1===Array.isArray(e)&&(e=[e,e]),d.normalScale=(new x).fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=
a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.refractionRatio&&
(d.refractionRatio=a.refractionRatio);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));void 0!==a.clearcoatNormalMap&&(d.clearcoatNormalMap=b(a.clearcoatNormalMap));void 0!==a.clearcoatNormalScale&&(d.clearcoatNormalScale=(new x).fromArray(a.clearcoatNormalScale));return d},
setTextures:function(a){this.textures=a;return this}});var rh={decodeText:function(a){if("undefined"!==typeof TextDecoder)return(new TextDecoder).decode(a);for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);try{return decodeURIComponent(escape(b))}catch(e){return b}},extractUrlBase:function(a){var b=a.lastIndexOf("/");return-1===b?"./":a.substr(0,b+1)}};of.prototype=Object.assign(Object.create(G.prototype),{constructor:of,isInstancedBufferGeometry:!0,copy:function(a){G.prototype.copy.call(this,
a);this.maxInstancedCount=a.maxInstancedCount;return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a=G.prototype.toJSON.call(this);a.maxInstancedCount=this.maxInstancedCount;a.isInstancedBufferGeometry=!0;return a}});pf.prototype=Object.assign(Object.create(K.prototype),{constructor:pf,isInstancedBufferAttribute:!0,copy:function(a){K.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this},toJSON:function(){var a=K.prototype.toJSON.call(this);
a.meshPerAttribute=this.meshPerAttribute;a.isInstancedBufferAttribute=!0;return a}});qf.prototype=Object.assign(Object.create(Q.prototype),{constructor:qf,load:function(a,b,c,d){var e=this,f=new Ra(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=a.isInstancedBufferGeometry?new of:new G,c=a.data.index;if(void 0!==c){var d=new sh[c.type](c.array);b.setIndex(new K(d,1))}c=a.data.attributes;for(var e in c){var f=c[e];d=new sh[f.type](f.array);
d=new (f.isInstancedBufferAttribute?pf:K)(d,f.itemSize,f.normalized);void 0!==f.name&&(d.name=f.name);b.setAttribute(e,d)}var g=a.data.morphAttributes;if(g)for(e in g){var h=g[e],l=[];c=0;for(var m=h.length;c<m;c++)f=h[c],d=new sh[f.type](f.array),d=new K(d,f.itemSize,f.normalized),void 0!==f.name&&(d.name=f.name),l.push(d);b.morphAttributes[e]=l}a.data.morphTargetsRelative&&(b.morphTargetsRelative=!0);e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,f=e.length;c!==f;++c)d=
e[c],b.addGroup(d.start,d.count,d.materialIndex);c=a.data.boundingSphere;void 0!==c&&(e=new n,void 0!==c.center&&e.fromArray(c.center),b.boundingSphere=new qb(e,c.radius));a.name&&(b.name=a.name);a.userData&&(b.userData=a.userData);return b}});var sh={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};
rf.prototype=Object.assign(Object.create(Q.prototype),{constructor:rf,load:function(a,b,c,d){var e=this,f=""===this.path?rh.extractUrlBase(a):this.path;this.resourcePath=this.resourcePath||f;f=new Ra(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c)}catch(l){void 0!==d&&d(l);console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+
a):e.parse(f,b)},c,d)},parse:function(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==b&&b(e)});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=(new Lb).fromJSON(a[c]);
b[e.uuid]=e}return b},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new qf,e=0,f=a.length;e<f;e++){var g=a[e];switch(g.type){case "PlaneGeometry":case "PlaneBufferGeometry":var h=new ua[g.type](g.width,g.height,g.widthSegments,g.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":h=new ua[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":h=new ua[g.type](g.radius,
g.segments,g.thetaStart,g.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":h=new ua[g.type](g.radiusTop,g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":h=new ua[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":h=new ua[g.type](g.radius,g.widthSegments,g.heightSegments,
g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case "DodecahedronGeometry":case "DodecahedronBufferGeometry":case "IcosahedronGeometry":case "IcosahedronBufferGeometry":case "OctahedronGeometry":case "OctahedronBufferGeometry":case "TetrahedronGeometry":case "TetrahedronBufferGeometry":h=new ua[g.type](g.radius,g.detail);break;case "RingGeometry":case "RingBufferGeometry":h=new ua[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":h=
new ua[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":h=new ua[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case "TubeGeometry":case "TubeBufferGeometry":h=new ua[g.type]((new qh[g.path.type]).fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);break;case "LatheGeometry":case "LatheBufferGeometry":h=new ua[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case "PolyhedronGeometry":case "PolyhedronBufferGeometry":h=
new ua[g.type](g.vertices,g.indices,g.radius,g.details);break;case "ShapeGeometry":case "ShapeBufferGeometry":h=[];for(var l=0,m=g.shapes.length;l<m;l++){var n=b[g.shapes[l]];h.push(n)}h=new ua[g.type](h,g.curveSegments);break;case "ExtrudeGeometry":case "ExtrudeBufferGeometry":h=[];l=0;for(m=g.shapes.length;l<m;l++)n=b[g.shapes[l]],h.push(n);l=g.options.extrudePath;void 0!==l&&(g.options.extrudePath=(new qh[l.type]).fromJSON(l));h=new ua[g.type](h,g.options);break;case "BufferGeometry":case "InstancedBufferGeometry":h=
d.parse(g);break;case "Geometry":"THREE"in window&&"LegacyJSONLoader"in THREE?h=(new THREE.LegacyJSONLoader).parse(g,this.resourcePath).geometry:console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+'"');continue}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h}return c},
parseMaterials:function(a,b){var c={},d={};if(void 0!==a){var e=new nf;e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],l=0;l<g.materials.length;l++){var m=g.materials[l];void 0===c[m.uuid]&&(c[m.uuid]=e.parse(m));h.push(c[m.uuid])}d[g.uuid]=h}else void 0===c[g.uuid]&&(c[g.uuid]=e.parse(g)),d[g.uuid]=c[g.uuid]}}return d},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=Qa.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e)}return b},
parseImages:function(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){b=new wg(b);var f=new ed(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],l=h.url;if(Array.isArray(l)){e[h.uuid]=[];for(var m=0,n=l.length;m<n;m++){var p=l[m];p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)?p:d.resourcePath+p;e[h.uuid].push(c(p))}}else p=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?
h.url:d.resourcePath+h.url,e[h.uuid]=c(p)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=Array.isArray(b[g.image])?new rb(b[g.image]):
new T(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,al));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],Yi),h.wrapT=c(g.wrap[1],Yi));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);
void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,Zi));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,Zi));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h}return d},parseObject:function(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a]}function e(a){if(void 0!==
a){if(Array.isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f])}return b}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a]}}switch(a.type){case "Scene":var f=new pb;void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new y(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Re(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Qe(a.fog.color,
a.fog.density)));break;case "PerspectiveCamera":f=new pa(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "OrthographicCamera":f=new gd(a.left,a.right,a.top,a.bottom,a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "AmbientLight":f=
new lf(a.color,a.intensity);break;case "DirectionalLight":f=new kf(a.color,a.intensity);break;case "PointLight":f=new hf(a.color,a.intensity,a.distance,a.decay);break;case "RectAreaLight":f=new mf(a.color,a.intensity,a.width,a.height);break;case "SpotLight":f=new gf(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case "HemisphereLight":f=new ef(a.color,a.groundColor,a.intensity);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
case "Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new Td(f,g):new ca(f,g);break;case "InstancedMesh":f=d(a.geometry);g=e(a.material);var h=a.instanceMatrix;f=new Ue(f,g,a.count);f.instanceMatrix=new K(new Float32Array(h.array),16);break;case "LOD":f=new Sd;break;case "Line":f=new Ja(d(a.geometry),e(a.material),a.mode);break;case "LineLoop":f=new Ve(d(a.geometry),e(a.material));break;case "LineSegments":f=new la(d(a.geometry),e(a.material));break;case "PointCloud":case "Points":f=
new Oc(d(a.geometry),e(a.material));break;case "Sprite":f=new Qd(e(a.material));break;case "Group":f=new Od;break;default:f=new D}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),
void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&
(f.frustumCulled=a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children)for(h=a.children,g=0;g<h.length;g++)f.add(this.parseObject(h[g],b,c));if("LOD"===a.type)for(void 0!==a.autoUpdate&&(f.autoUpdate=a.autoUpdate),a=a.levels,h=0;h<a.length;h++){g=a[h];var l=f.getObjectByProperty("uuid",g.object);void 0!==l&&f.addLevel(l,g.distance)}return f}});var al={UVMapping:300,CubeReflectionMapping:301,
CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Yi={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Zi={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};Bg.prototype=Object.assign(Object.create(Q.prototype),{constructor:Bg,
setOptions:function(a){this.options=a;return this},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=xc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;fetch(a).then(function(a){return a.blob()}).then(function(a){return void 0===e.options?createImageBitmap(a):createImageBitmap(a,e.options)}).then(function(c){xc.add(a,c);b&&b(c);e.manager.itemEnd(a)}).catch(function(b){d&&
d(b);e.manager.itemError(a);e.manager.itemEnd(a)});e.manager.itemStart(a)}});Object.assign(Cg.prototype,{moveTo:function(a,b){this.currentPath=new $a;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);return this},lineTo:function(a,b){this.currentPath.lineTo(a,b);return this},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d);return this},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);return this},splineThru:function(a){this.currentPath.splineThru(a);
return this},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Lb;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}
var e=tb.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new Lb;h.curves=g.curves;b.push(h);return b}var l=!e(f[0].getPoints());l=a?!l:l;h=[];var m=[],n=[],p=0;m[p]=void 0;n[p]=[];for(var q=0,t=f.length;q<t;q++){g=f[q];var r=g.getPoints();var u=e(r);(u=a?!u:u)?(!l&&m[p]&&p++,m[p]={s:new Lb,p:r},m[p].s.curves=g.curves,l&&p++,n[p]=[]):n[p].push({h:g,p:r[0]})}if(!m[0])return c(f);if(1<m.length){q=!1;a=[];e=0;for(f=m.length;e<f;e++)h[e]=
[];e=0;for(f=m.length;e<f;e++)for(g=n[e],u=0;u<g.length;u++){l=g[u];p=!0;for(r=0;r<m.length;r++)d(l.p,m[r].p)&&(e!==r&&a.push({froms:e,tos:r,hole:u}),p?(p=!1,h[r].push(l)):q=!0);p&&h[e].push(l)}0<a.length&&(q||(n=h))}q=0;for(e=m.length;q<e;q++)for(h=m[q].s,b.push(h),a=n[q],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b}});Object.assign(Dg.prototype,{isFont:!0,generateShapes:function(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=Array.from?Array.from(a):String(a).split("");d/=b.resolution;
var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,l=0;l<e.length;l++){var m=e[l];if("\n"===m)g=0,h-=f;else{var n=m;m=d;var p=g,q=h,t=b,r=t.glyphs[n]||t.glyphs["?"];if(r){n=new Cg;if(r.o){t=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(var u=0,x=t.length;u<x;)switch(t[u++]){case "m":var w=t[u++]*m+p;var y=t[u++]*m+q;n.moveTo(w,y);break;case "l":w=t[u++]*m+p;y=t[u++]*m+q;n.lineTo(w,y);break;case "q":var C=t[u++]*m+p;var D=t[u++]*m+q;var A=t[u++]*m+p;
var E=t[u++]*m+q;n.quadraticCurveTo(A,E,C,D);break;case "b":C=t[u++]*m+p,D=t[u++]*m+q,A=t[u++]*m+p,E=t[u++]*m+q,w=t[u++]*m+p,y=t[u++]*m+q,n.bezierCurveTo(A,E,w,y,C,D)}}m={offsetX:r.ha*m,path:n}}else console.error('THREE.Font: character "'+n+'" does not exists in font family '+t.familyName+"."),m=void 0;g+=m.offsetX;a.push(m.path)}}b=0;for(e=a.length;b<e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c}});Eg.prototype=Object.assign(Object.create(Q.prototype),{constructor:Eg,load:function(a,
b,c,d){var e=this,f=new Ra(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new Dg(a)}});var Uf,Jg={getContext:function(){void 0===Uf&&(Uf=new (window.AudioContext||window.webkitAudioContext));return Uf},setContext:function(a){Uf=a}};sf.prototype=Object.assign(Object.create(Q.prototype),
{constructor:sf,load:function(a,b,c,d){var e=new Ra(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);Jg.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Object.assign(tf.prototype,{isSphericalHarmonics3:!0,set:function(a){for(var b=0;9>b;b++)this.coefficients[b].copy(a[b]);return this},zero:function(){for(var a=0;9>a;a++)this.coefficients[a].set(0,0,0);return this},getAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.282095);
b.addScale(e[1],.488603*d);b.addScale(e[2],.488603*a);b.addScale(e[3],.488603*c);b.addScale(e[4],1.092548*c*d);b.addScale(e[5],1.092548*d*a);b.addScale(e[6],.315392*(3*a*a-1));b.addScale(e[7],1.092548*c*a);b.addScale(e[8],.546274*(c*c-d*d));return b},getIrradianceAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.886227);b.addScale(e[1],1.023328*d);b.addScale(e[2],1.023328*a);b.addScale(e[3],1.023328*c);b.addScale(e[4],.858086*c*d);b.addScale(e[5],.858086*
d*a);b.addScale(e[6],.743125*a*a-.247708);b.addScale(e[7],.858086*c*a);b.addScale(e[8],.429043*(c*c-d*d));return b},add:function(a){for(var b=0;9>b;b++)this.coefficients[b].add(a.coefficients[b]);return this},scale:function(a){for(var b=0;9>b;b++)this.coefficients[b].multiplyScalar(a);return this},lerp:function(a,b){for(var c=0;9>c;c++)this.coefficients[c].lerp(a.coefficients[c],b);return this},equals:function(a){for(var b=0;9>b;b++)if(!this.coefficients[b].equals(a.coefficients[b]))return!1;return!0},
copy:function(a){return this.set(a.coefficients)},clone:function(){return(new this.constructor).copy(this)},fromArray:function(a,b){void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].fromArray(a,b+3*d);return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].toArray(a,b+3*d);return a}});Object.assign(tf,{getBasisAt:function(a,b){var c=a.x,d=a.y;a=a.z;b[0]=.282095;b[1]=.488603*d;b[2]=.488603*a;b[3]=.488603*c;b[4]=1.092548*c*d;
b[5]=1.092548*d*a;b[6]=.315392*(3*a*a-1);b[7]=1.092548*c*a;b[8]=.546274*(c*c-d*d)}});ab.prototype=Object.assign(Object.create(ba.prototype),{constructor:ab,isLightProbe:!0,copy:function(a){ba.prototype.copy.call(this,a);this.sh.copy(a.sh);this.intensity=a.intensity;return this},toJSON:function(a){return ba.prototype.toJSON.call(this,a)}});Fg.prototype=Object.assign(Object.create(ab.prototype),{constructor:Fg,isHemisphereLightProbe:!0,copy:function(a){ab.prototype.copy.call(this,a);return this},toJSON:function(a){return ab.prototype.toJSON.call(this,
a)}});Gg.prototype=Object.assign(Object.create(ab.prototype),{constructor:Gg,isAmbientLightProbe:!0,copy:function(a){ab.prototype.copy.call(this,a);return this},toJSON:function(a){return ab.prototype.toJSON.call(this,a)}});var $i=new P,aj=new P;Object.assign(ii.prototype,{update:function(a){var b=this._cache;if(b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||b.eyeSep!==this.eyeSep){b.focus=a.focus;b.fov=a.fov;b.aspect=a.aspect*this.aspect;
b.near=a.near;b.far=a.far;b.zoom=a.zoom;b.eyeSep=this.eyeSep;var c=a.projectionMatrix.clone(),d=b.eyeSep/2,e=d*b.near/b.focus,f=b.near*Math.tan(O.DEG2RAD*b.fov*.5)/b.zoom;aj.elements[12]=-d;$i.elements[12]=d;d=-f*b.aspect+e;var g=f*b.aspect+e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraL.projectionMatrix.copy(c);d=-f*b.aspect-e;g=f*b.aspect-e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraR.projectionMatrix.copy(c)}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(aj);
this.cameraR.matrixWorld.copy(a.matrixWorld).multiply($i)}});Object.assign(Hg.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.autoStart=this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?
Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});var yc=new n,bj=new Da,bl=new n,zc=new n;Ig.prototype=Object.assign(Object.create(D.prototype),{constructor:Ig,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);return this},getFilter:function(){return this.filter},setFilter:function(a){null!==
this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this},updateMatrixWorld:function(a){D.prototype.updateMatrixWorld.call(this,a);a=this.context.listener;
var b=this.up;this.timeDelta=this._clock.getDelta();this.matrixWorld.decompose(yc,bj,bl);zc.set(0,0,-1).applyQuaternion(bj);if(a.positionX){var c=this.context.currentTime+this.timeDelta;a.positionX.linearRampToValueAtTime(yc.x,c);a.positionY.linearRampToValueAtTime(yc.y,c);a.positionZ.linearRampToValueAtTime(yc.z,c);a.forwardX.linearRampToValueAtTime(zc.x,c);a.forwardY.linearRampToValueAtTime(zc.y,c);a.forwardZ.linearRampToValueAtTime(zc.z,c);a.upX.linearRampToValueAtTime(b.x,c);a.upY.linearRampToValueAtTime(b.y,
c);a.upZ.linearRampToValueAtTime(b.z,c)}else a.setPosition(yc.x,yc.y,yc.z),a.setOrientation(zc.x,zc.y,zc.z,b.x,b.y,b.z)}});hd.prototype=Object.assign(Object.create(D.prototype),{constructor:hd,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setMediaElementSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();
return this},setMediaStreamSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaStreamNode";this.source=this.context.createMediaStreamSource(a);this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(a){void 0===a&&(a=0);if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return this._startedAt=this.context.currentTime+a,a=this.context.createBufferSource(),a.buffer=this.buffer,a.loop=this.loop,a.loopStart=this.loopStart,a.loopEnd=this.loopEnd,a.onended=this.onEnded.bind(this),a.start(this._startedAt,this._pausedAt+this.offset,this.duration),this.isPlaying=!0,this.source=a,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return!0===this.isPlaying&&(this._pausedAt=(this.context.currentTime-this._startedAt)*this.playbackRate,this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._pausedAt=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<
b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},
setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},setDetune:function(a){this.detune=a;if(void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=
a,!0===this.isPlaying&&(this.source.loop=this.loop),this},setLoopStart:function(a){this.loopStart=a;return this},setLoopEnd:function(a){this.loopEnd=a;return this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this}});var Ac=new n,cj=new Da,cl=new n,Bc=new n;Kg.prototype=Object.assign(Object.create(hd.prototype),{constructor:Kg,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},
setRefDistance:function(a){this.panner.refDistance=a;return this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a;return this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a;return this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a;return this},setDirectionalCone:function(a,b,c){this.panner.coneInnerAngle=
a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this},updateMatrixWorld:function(a){D.prototype.updateMatrixWorld.call(this,a);if(!0!==this.hasPlaybackControl||!1!==this.isPlaying)if(this.matrixWorld.decompose(Ac,cj,cl),Bc.set(0,0,1).applyQuaternion(cj),a=this.panner,a.positionX){var b=this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(Ac.x,b);a.positionY.linearRampToValueAtTime(Ac.y,b);a.positionZ.linearRampToValueAtTime(Ac.z,b);a.orientationX.linearRampToValueAtTime(Bc.x,
b);a.orientationY.linearRampToValueAtTime(Bc.y,b);a.orientationZ.linearRampToValueAtTime(Bc.z,b)}else a.setPosition(Ac.x,Ac.y,Ac.z),a.setOrientation(Bc.x,Bc.y,Bc.z)}});Object.assign(Lg.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(Mg.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;
var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=
a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){Da.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});var dl=/[\[\]\.:\/]/g,el="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",fl=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),gl=/(WCOD+)?/.source.replace("WCOD",el),
hl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),il=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),jl=new RegExp("^"+fl+gl+hl+il+"$"),kl=["material","materials","bones"];Object.assign(ji.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=
this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(Ba,{Composite:ji,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new Ba.Composite(a,b,c):new Ba(a,b,c)},sanitizeNodeName:function(a){return a.replace(/\s/g,"_").replace(dl,"")},parseTrackName:function(a){var b=jl.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+
a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==kl.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d)}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b},findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;
if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e}return null};if(a=d(a.children))return a}return null}});Object.assign(Ba.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,
b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b]},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=
!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,
b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,
d=b.propertyName,e=b.propertyIndex;a||(this.node=a=Ba.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+
this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});Object.assign(Ba.prototype,{_getValue_unbound:Ba.prototype.getValue,_setValue_unbound:Ba.prototype.setValue});Object.assign(ki.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,l=void 0,m=0,n=arguments.length;m!==
n;++m){var p=arguments[m],q=p.uuid,t=d[q];if(void 0===t){t=b++;d[q]=t;a.push(p);q=0;for(var r=h;q!==r;++q)g[q].push(new Ba(p,e[q],f[q]))}else if(t<c){l=a[t];var u=--c;r=a[u];d[r.uuid]=t;a[t]=r;d[q]=u;a[u]=p;q=0;for(r=h;q!==r;++q){var x=g[q],w=x[t];x[t]=x[u];void 0===w&&(w=new Ba(p,e[q],f[q]));x[u]=w}}else a[t]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=
c},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=arguments[f],l=h.uuid,m=c[l];if(void 0!==m&&m>=b){var n=b++,p=a[n];c[p.uuid]=m;a[m]=p;c[l]=n;a[n]=h;h=0;for(l=e;h!==l;++h){p=d[h];var q=p[m];p[m]=p[n];p[n]=q}}}this.nCachedObjects_=b},uncache:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var l=
arguments[g].uuid,m=d[l];if(void 0!==m)if(delete d[l],m<c){l=--c;var n=a[l],p=--b,q=a[p];d[n.uuid]=m;a[m]=n;d[q.uuid]=l;a[l]=q;a.pop();n=0;for(q=f;n!==q;++n){var t=e[n],r=t[p];t[m]=t[l];t[l]=r;t.pop()}}else for(p=--b,q=a[p],d[q.uuid]=m,a[m]=q,a.pop(),n=0,q=f;n!==q;++n)t=e[n],t[m]=t[p],t.pop()}this.nCachedObjects_=c},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,
m=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(m);c=l;for(d=h.length;c!==d;++c)m[c]=new Ba(h[c],a,b);return m},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(li.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},
reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;
this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;
null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,
0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];
b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===
e?b:f&&1===(e&1)?c-b:b;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else{this.time=b;break a}this.clampWhenFinished?this.paused=!0:this.enabled=!1;this.time=b;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?
this.paused=!0:this.enabled=!1,this.time=b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this.time=b,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d}))}else this.time=b;if(f&&1===(e&1))return c-b}return b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=
b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});Ng.prototype=Object.assign(Object.create(Fa.prototype),{constructor:Ng,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,
l=h[g];void 0===l&&(l={},h[g]=l);for(h=0;h!==e;++h){var m=d[h],n=m.name,p=l[n];if(void 0===p){p=f[h];if(void 0!==p){null===p._cacheIndex&&(++p.referenceCount,this._addInactiveBinding(p,g,n));continue}p=new Mg(Ba.create(c,n,b&&b._propertyBindings[h].binding.parsedPath),m.ValueTypeName,m.getValueSize());++p.referenceCount;this._addInactiveBinding(p,g,n)}f[h]=p;a[h].resultBuffer=p.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,
c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=
[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},
_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;
c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,
d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,
f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];0===Object.keys(f).length&&delete e[d]},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,
c=a[b];void 0===c&&(c=new pe(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?Qa.findByName(c,a):a;a=null!==c?c.uuid:a;var e=
this._actionsByClip[a],f=null;if(void 0!==e){f=e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip)}if(null===c)return null;b=new li(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b},existingAction:function(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?Qa.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,
d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},setTime:function(a){for(var b=this.time=0;b<this._actions.length;b++)this._actions[b].time=0;return this.update(a)},
getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,l=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;l._cacheIndex=h;b[h]=l;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&
(this._deactivateAction(c),this._removeInactiveAction(c))}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a))}});uf.prototype.clone=function(){return new uf(void 0===this.value.clone?this.value:this.value.clone())};Og.prototype=Object.assign(Object.create(sb.prototype),{constructor:Og,isInstancedInterleavedBuffer:!0,
copy:function(a){sb.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});Object.assign(mi.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,
0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b,c){c=c||[];Pg(a,this,c,b);c.sort(ni);return c},intersectObjects:function(a,b,c){c=c||[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)Pg(a[d],this,c,b);c.sort(ni);return c}});Object.assign(oi.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(O.clamp(b/this.radius,-1,1)));return this}});
Object.assign(pi.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this}});var dj=new x;Object.assign(Qg.prototype,{set:function(a,b){this.min.copy(a);
this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(a,b){b=dj.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<
this.min.x||this.max.y<this.min.y},getCenter:function(a){void 0===a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new x);return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new x);return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new x);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new x);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){return dj.copy(a).clamp(this.min,this.max).sub(a).length()},intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);
this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var ej=new n,Vf=new n;Object.assign(Rg.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){void 0===a&&(console.warn("THREE.Line3: .getCenter() target is now required"),
a=new n);return a.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new n);return a.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){void 0===b&&(console.warn("THREE.Line3: .at() target is now required"),b=new n);return this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(a,
b){ej.subVectors(a,this.start);Vf.subVectors(this.end,this.start);a=Vf.dot(Vf);a=Vf.dot(ej)/a;b&&(a=O.clamp(a,0,1));return a},closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new n);return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});
te.prototype=Object.create(D.prototype);te.prototype.constructor=te;te.prototype.isImmediateRenderObject=!0;var fj=new n;id.prototype=Object.create(D.prototype);id.prototype.constructor=id;id.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};id.prototype.update=function(){this.light.updateMatrixWorld();var a=this.light.distance?this.light.distance:1E3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a);fj.setFromMatrixPosition(this.light.target.matrixWorld);
this.cone.lookAt(fj);void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var Rb=new n,Wf=new P,th=new P;jd.prototype=Object.create(la.prototype);jd.prototype.constructor=jd;jd.prototype.updateMatrixWorld=function(a){var b=this.bones,c=this.geometry,d=c.getAttribute("position");th.getInverse(this.root.matrixWorld);for(var e=0,f=0;e<b.length;e++){var g=b[e];g.parent&&g.parent.isBone&&(Wf.multiplyMatrices(th,g.matrixWorld),Rb.setFromMatrixPosition(Wf),
d.setXYZ(f,Rb.x,Rb.y,Rb.z),Wf.multiplyMatrices(th,g.parent.matrixWorld),Rb.setFromMatrixPosition(Wf),d.setXYZ(f+1,Rb.x,Rb.y,Rb.z),f+=2)}c.getAttribute("position").needsUpdate=!0;D.prototype.updateMatrixWorld.call(this,a)};kd.prototype=Object.create(ca.prototype);kd.prototype.constructor=kd;kd.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};kd.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)};
var ll=new n,gj=new y,hj=new y;ld.prototype=Object.create(D.prototype);ld.prototype.constructor=ld;ld.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};ld.prototype.update=function(){var a=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var b=a.geometry.getAttribute("color");gj.copy(this.light.color);hj.copy(this.light.groundColor);for(var c=0,d=b.count;c<d;c++){var e=c<d/2?gj:hj;b.setXYZ(c,e.r,e.g,e.b)}b.needsUpdate=
!0}a.lookAt(ll.setFromMatrixPosition(this.light.matrixWorld).negate())};vf.prototype=Object.assign(Object.create(la.prototype),{constructor:vf,copy:function(a){la.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this},clone:function(){return(new this.constructor).copy(this)}});wf.prototype=Object.create(la.prototype);wf.prototype.constructor=wf;var ij=new n,Xf=new n,jj=new n;md.prototype=Object.create(D.prototype);md.prototype.constructor=md;md.prototype.dispose=
function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};md.prototype.update=function(){ij.setFromMatrixPosition(this.light.matrixWorld);Xf.setFromMatrixPosition(this.light.target.matrixWorld);jj.subVectors(Xf,ij);this.lightPlane.lookAt(Xf);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),
this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(Xf);this.targetLine.scale.z=jj.length()};var xf=new n,fa=new db;ue.prototype=Object.create(la.prototype);ue.prototype.constructor=ue;ue.prototype.update=function(){var a=this.geometry,b=this.pointMap;fa.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);ia("c",b,a,fa,0,0,-1);ia("t",b,a,fa,0,0,1);ia("n1",b,a,fa,-1,-1,-1);ia("n2",b,a,fa,1,-1,-1);ia("n3",b,a,fa,-1,1,-1);ia("n4",b,a,fa,1,1,-1);ia("f1",b,a,fa,
-1,-1,1);ia("f2",b,a,fa,1,-1,1);ia("f3",b,a,fa,-1,1,1);ia("f4",b,a,fa,1,1,1);ia("u1",b,a,fa,.7,1.1,-1);ia("u2",b,a,fa,-.7,1.1,-1);ia("u3",b,a,fa,0,2,-1);ia("cf1",b,a,fa,-1,0,1);ia("cf2",b,a,fa,1,0,1);ia("cf3",b,a,fa,0,-1,1);ia("cf4",b,a,fa,0,1,1);ia("cn1",b,a,fa,-1,0,-1);ia("cn2",b,a,fa,1,0,-1);ia("cn3",b,a,fa,0,-1,-1);ia("cn4",b,a,fa,0,1,-1);a.getAttribute("position").needsUpdate=!0};var Yf=new Sa;xb.prototype=Object.create(la.prototype);xb.prototype.constructor=xb;xb.prototype.update=function(a){void 0!==
a&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");void 0!==this.object&&Yf.setFromObject(this.object);if(!Yf.isEmpty()){a=Yf.min;var b=Yf.max,c=this.geometry.attributes.position,d=c.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=a.x;d[4]=b.y;d[5]=b.z;d[6]=a.x;d[7]=a.y;d[8]=b.z;d[9]=b.x;d[10]=a.y;d[11]=b.z;d[12]=b.x;d[13]=b.y;d[14]=a.z;d[15]=a.x;d[16]=b.y;d[17]=a.z;d[18]=a.x;d[19]=a.y;d[20]=a.z;d[21]=b.x;d[22]=a.y;d[23]=a.z;c.needsUpdate=!0;this.geometry.computeBoundingSphere()}};xb.prototype.setFromObject=
function(a){this.object=a;this.update();return this};xb.prototype.copy=function(a){la.prototype.copy.call(this,a);this.object=a.object;return this};xb.prototype.clone=function(){return(new this.constructor).copy(this)};ve.prototype=Object.create(la.prototype);ve.prototype.constructor=ve;ve.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),D.prototype.updateMatrixWorld.call(this,a))};we.prototype=Object.create(Ja.prototype);
we.prototype.constructor=we;we.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);D.prototype.updateMatrixWorld.call(this,a)};var kj=new n,yf,Sg;yb.prototype=Object.create(D.prototype);yb.prototype.constructor=yb;yb.prototype.setDirection=function(a){.99999<a.y?this.quaternion.set(0,0,0,1):-.99999>a.y?this.quaternion.set(1,0,0,0):(kj.set(a.z,
0,-a.x).normalize(),this.quaternion.setFromAxisAngle(kj,Math.acos(a.y)))};yb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(1E-4,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};yb.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};yb.prototype.copy=function(a){D.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);
return this};yb.prototype.clone=function(){return(new this.constructor).copy(this)};xe.prototype=Object.create(la.prototype);xe.prototype.constructor=xe;var lb=Math.pow(2,8),lj=[.125,.215,.35,.446,.526,.582],vi=5+lj.length,mb={3E3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},Vg=new gd,zf=function(a){var b=new Float32Array(a),c=new n(0,1,0);a=new vb({defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:b},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c},
inputEncoding:{value:mb[3E3]},outputEncoding:{value:mb[3E3]}},vertexShader:Xg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n"+Yg()+"\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tfor (int i = 0; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfor (int dir = -1; dir < 2; dir += 2) {\n\t\t\tif (i == 0 && dir == 1)\n\t\t\t\tcontinue;\n\t\t\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\t\t\tif (all(equal(axis, vec3(0.0))))\n\t\t\t\taxis = cross(vec3(0.0, 1.0, 0.0), vOutputDirection);\n\t\t\taxis = normalize(axis);\n\t\t\tfloat theta = dTheta * float(dir * i);\n\t\t\tfloat cosTheta = cos(theta);\n\t\t\t// Rodrigues' axis-angle rotation\n\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t\t\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\t\t\tgl_FragColor.rgb +=\n\t\t\t\t\tweights[i] * bilinearCubeUV(envMap, sampleDirection, mipInt);\n\t\t}\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="SphericalGaussianBlur";return a}(20),Sb=null,Tb=null,uh=function(){for(var a=[],b=[],c=[],d=8,e=0;e<vi;e++){var f=Math.pow(2,d);b.push(f);var g=1/f;4<e?g=lj[e-8+4-1]:0==e&&(g=0);c.push(g);g=1/(f-1);f=-g/2;g=1+g/2;var h=[f,f,g,f,g,g,f,f,g,g,f,g];f=new Float32Array(108);g=new Float32Array(72);for(var l=new Float32Array(36),m=0;6>m;m++){var n=m%3*2/3-1,p=2<m?0:-1;f.set([n,p,0,n+2/3,p,0,n+2/3,p+1,0,n,p,0,n+2/3,p+1,0,n,p+1,0],18*m);g.set(h,12*m);l.set([m,
m,m,m,m,m],6*m)}h=new G;h.setAttribute("position",new K(f,3));h.setAttribute("uv",new K(g,2));h.setAttribute("faceIndex",new K(l,1));a.push(h);4<d&&d--}return{_lodPlanes:a,_sizeLods:b,_sigmas:c}}(),ye=uh._lodPlanes,zi=uh._sizeLods,Bf=uh._sigmas,Af=null,Y=null,Cc=(1+Math.sqrt(5))/2,zd=1/Cc,xi=[new n(1,1,1),new n(-1,1,1),new n(1,1,-1),new n(-1,1,-1),new n(0,Cc,zd),new n(0,Cc,-zd),new n(zd,0,Cc),new n(-zd,0,Cc),new n(Cc,zd,0),new n(-Cc,zd,0)];Tg.prototype={constructor:Tg,fromScene:function(a,b,c,d){void 0===
b&&(b=0);void 0===c&&(c=.1);void 0===d&&(d=100);var e=ri();c=new pa(90,1,c,d);d=[1,1,1,1,-1,1];var f=[1,1,-1,-1,-1,1],g=Y.outputEncoding,h=Y.toneMapping,l=Y.toneMappingExposure,m=Y.getClearColor(),n=Y.getClearAlpha();Y.toneMapping=1;Y.toneMappingExposure=1;Y.outputEncoding=3E3;a.scale.z*=-1;var p=a.background;if(p&&p.isColor){p.convertSRGBToLinear();var q=Math.min(Math.max(Math.ceil(Math.log2(Math.max(p.r,p.g,p.b))),-128),127);p=p.multiplyScalar(Math.pow(2,-q));Y.setClearColor(p,(q+128)/255);a.background=
null}Y.setRenderTarget(e);for(p=0;6>p;p++)q=p%3,0==q?(c.up.set(0,d[p],0),c.lookAt(f[p],0,0)):1==q?(c.up.set(0,0,d[p]),c.lookAt(0,f[p],0)):(c.up.set(0,d[p],0),c.lookAt(0,0,f[p])),Wg(q*lb,2<p?lb:0,lb,lb),Y.render(a,c);Y.toneMapping=h;Y.toneMappingExposure=l;Y.outputEncoding=g;Y.setClearColor(m,n);a.scale.z*=-1;0<b&&wi(e,0,0,b);ui(e);ti();e.scissorTest=!1;return e},fromEquirectangular:function(a){a.magFilter=1003;a.minFilter=1003;a.generateMipmaps=!1;return this.fromCubemap(a)},fromCubemap:function(a){var b=
ri(a),c=new pb;a.isCubeTexture?null==Tb&&(Tb=Bi()):null==Sb&&(Sb=Ai());var d=a.isCubeTexture?Tb:Sb;c.add(new ca(ye[0],d));d=d.uniforms;d.envMap.value=a;a.isCubeTexture||d.texelSize.value.set(1/a.image.width,1/a.image.height);d.inputEncoding.value=mb[a.encoding];d.outputEncoding.value=mb[a.encoding];Y.setRenderTarget(b);Wg(0,0,3*lb,2*lb);Y.render(c,Vg);ui(b);ti();b.scissorTest=!1;return b},compileCubemapShader:function(){null==Tb&&(Tb=Bi(),Ug(Tb))},compileEquirectangularShader:function(){null==Sb&&
(Sb=Ai(),Ug(Sb))},dispose:function(){zf.dispose();null!=Tb&&Tb.dispose();null!=Sb&&Sb.dispose();for(var a=0;a<ye.length;a++)ye[a].dispose()}};I.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(I.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Object.assign(wb.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new M,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new n(e.x,
e.y,e.z||0))}return b}});Object.assign($a.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");return this.setFromPoints(a)}});Ci.prototype=Object.create(Aa.prototype);Di.prototype=Object.create(Aa.prototype);Zg.prototype=Object.create(Aa.prototype);Object.assign(Zg.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},
reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});vf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};jd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Q.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
return rh.extractUrlBase(a)}});Q.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(rf.prototype,{setTexturePath:function(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a)}});Object.assign(Qg.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Sa.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");
return this.getSize(a)}});Rg.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Object.assign(O,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random()},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");return O.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
return O.ceilPowerOfTwo(a)}});Object.assign(za.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(P.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
return(new n).setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},
rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},
applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f)}});Ta.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};Da.prototype.multiplyVector3=
function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(Wb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(a)}});Object.assign(ma.prototype,{area:function(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea()},barycoordFromPoint:function(a,b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b)},midpoint:function(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a)},normal:function(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
return this.getNormal(a)},plane:function(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a)}});Object.assign(ma,{barycoordFromPoint:function(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return ma.getBarycoord(a,b,c,d,e)},normal:function(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return ma.getNormal(a,b,c,d)}});Object.assign(Lb.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
return this.extractPoints(a)},extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new hc(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new jc(this,a)}});Object.assign(x.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(n.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
return this.manhattanLength()}});Object.assign(S.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(M.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}});
Object.assign(D.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")}});
Object.defineProperties(D.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});
Object.assign(ca.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(ca.prototype,{drawMode:{get:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");return 0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});
Object.defineProperties(Sd.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Object.defineProperty(Te.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Td.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(I.prototype,
"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a}});pa.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ba.prototype,
{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},
shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(K.prototype,
{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length}},dynamic:{get:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");return 35048===this.usage},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");this.setUsage(35048)}}});Object.assign(K.prototype,{setDynamic:function(a){console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
this.setUsage(!0===a?35048:35044);return this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(G.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addAttribute:function(a,b,c){console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
return b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute?"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this):this.setAttribute(a,b):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new K(b,c)))},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(a){console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");return this.deleteAttribute(a)}});
Object.defineProperties(G.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});Object.defineProperties(sb.prototype,{dynamic:{get:function(){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");return 35048===this.usage},set:function(a){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
this.setUsage(a)}}});Object.assign(sb.prototype,{setDynamic:function(a){console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");this.setUsage(!0===a?35048:35044);return this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(gb.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},
addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(uf.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});
Object.defineProperties(L.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new y}},shading:{get:function(){console.error("THREE."+
this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a}},stencilMask:{get:function(){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");return this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");this.stencilFuncMask=
a}}});Object.defineProperties(Kb.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(oa.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},
set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(pg.prototype,{clearTarget:function(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d)},animate:function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a)},getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
return this.getRenderTarget()},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy()},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset()},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},
setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");return this.getActiveMipmapLevel()}});Object.defineProperties(pg.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},
set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");return this.getContext()}},
vr:{get:function(){console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");return this.xr}},gammaInput:{get:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");return!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
return!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");this.outputEncoding=!0===a?3001:3E3}}});Object.defineProperties(Th.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},
set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Eb.prototype,{activeCubeFace:{set:function(){console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().")}},
activeMipMapLevel:{set:function(){console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().")}}});Object.defineProperties(va.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},
set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},
set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
this.texture.generateMipmaps=a}}});Object.defineProperties(hd.prototype,{load:{value:function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new sf).load(a,function(a){b.setBuffer(a)});return this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Lg.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};Hc.prototype.updateCubeMap=
function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b)};Mb.crossOrigin=void 0;Mb.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new df;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};Mb.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
var e=new cf;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};Mb.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Mb.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"112"}}));
h.ACESFilmicToneMapping=5;h.AddEquation=100;h.AddOperation=2;h.AdditiveBlending=2;h.AlphaFormat=1021;h.AlwaysDepth=1;h.AlwaysStencilFunc=519;h.AmbientLight=lf;h.AmbientLightProbe=Gg;h.AnimationClip=Qa;h.AnimationLoader=xg;h.AnimationMixer=Ng;h.AnimationObjectGroup=ki;h.AnimationUtils=ea;h.ArcCurve=fd;h.ArrayCamera=Pe;h.ArrowHelper=yb;h.Audio=hd;h.AudioAnalyser=Lg;h.AudioContext=Jg;h.AudioListener=Ig;h.AudioLoader=sf;h.AxesHelper=xe;h.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
return new xe(a)};h.BackSide=1;h.BasicDepthPacking=3200;h.BasicShadowMap=0;h.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new bf(a)};h.Bone=qg;h.BooleanKeyframeTrack=Ye;h.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new xb(a,b)};h.Box2=Qg;h.Box3=Sa;h.Box3Helper=ve;h.BoxBufferGeometry=Jd;h.BoxGeometry=lh;h.BoxHelper=xb;h.BufferAttribute=
K;h.BufferGeometry=G;h.BufferGeometryLoader=qf;h.ByteType=1010;h.Cache=xc;h.Camera=db;h.CameraHelper=ue;h.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")};h.CanvasTexture=Ud;h.CatmullRomCurve3=Aa;h.CineonToneMapping=4;h.CircleBufferGeometry=bd;h.CircleGeometry=oe;h.ClampToEdgeWrapping=1001;h.Clock=Hg;h.ClosedSplineCurve3=Ci;h.Color=y;h.ColorKeyframeTrack=Ze;h.CompressedTexture=Pc;h.CompressedTextureLoader=yg;h.ConeBufferGeometry=ne;h.ConeGeometry=me;h.CubeCamera=Hc;
h.CubeGeometry=lh;h.CubeReflectionMapping=301;h.CubeRefractionMapping=302;h.CubeTexture=rb;h.CubeTextureLoader=cf;h.CubeUVReflectionMapping=306;h.CubeUVRefractionMapping=307;h.CubicBezierCurve=Wa;h.CubicBezierCurve3=ib;h.CubicInterpolant=We;h.CullFaceBack=1;h.CullFaceFront=2;h.CullFaceFrontBack=3;h.CullFaceNone=0;h.Curve=I;h.CurvePath=wb;h.CustomBlending=5;h.CylinderBufferGeometry=ub;h.CylinderGeometry=lc;h.Cylindrical=pi;h.DataTexture=cc;h.DataTexture2DArray=Ic;h.DataTexture3D=Jc;h.DataTextureLoader=
bf;h.DecrementStencilOp=7683;h.DecrementWrapStencilOp=34056;h.DefaultLoadingManager=gi;h.DepthFormat=1026;h.DepthStencilFormat=1027;h.DepthTexture=Vd;h.DirectionalLight=kf;h.DirectionalLightHelper=md;h.DirectionalLightShadow=jf;h.DiscreteInterpolant=Xe;h.DodecahedronBufferGeometry=Uc;h.DodecahedronGeometry=ae;h.DoubleSide=2;h.DstAlphaFactor=206;h.DstColorFactor=208;h.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
return(new K(a,b)).setDynamic(!0)};h.DynamicCopyUsage=35050;h.DynamicDrawUsage=35048;h.DynamicReadUsage=35049;h.EdgesGeometry=ad;h.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new la(new ad(a.geometry),new ja({color:void 0!==b?b:16777215}))};h.EllipseCurve=La;h.EqualDepth=4;h.EqualStencilFunc=514;h.EquirectangularReflectionMapping=303;h.EquirectangularRefractionMapping=304;h.Euler=Ub;h.EventDispatcher=Fa;h.ExtrudeBufferGeometry=
gb;h.ExtrudeGeometry=hc;h.Face3=Dc;h.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new Dc(a,b,c,e,f,g)};h.FaceColors=1;h.FileLoader=Ra;h.FlatShading=1;h.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new C(a,b)};h.Float32BufferAttribute=C;h.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
return new Fd(a,b)};h.Float64BufferAttribute=Fd;h.FloatType=1015;h.Fog=Re;h.FogExp2=Qe;h.Font=Dg;h.FontLoader=Eg;h.FrontFaceDirectionCCW=1;h.FrontFaceDirectionCW=0;h.FrontSide=0;h.Frustum=Hd;h.GammaEncoding=3007;h.Geometry=M;h.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry}a.merge(b,d,c)},
center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};h.GreaterDepth=6;h.GreaterEqualDepth=5;h.GreaterEqualStencilFunc=518;h.GreaterStencilFunc=516;h.GridHelper=vf;h.Group=Od;h.HalfFloatType=1016;h.HemisphereLight=ef;h.HemisphereLightHelper=ld;h.HemisphereLightProbe=Fg;h.IcosahedronBufferGeometry=Tc;h.IcosahedronGeometry=$d;h.ImageBitmapLoader=Bg;h.ImageLoader=ed;h.ImageUtils=Mb;h.ImmediateRenderObject=te;h.IncrementStencilOp=
7682;h.IncrementWrapStencilOp=34055;h.InstancedBufferAttribute=pf;h.InstancedBufferGeometry=of;h.InstancedInterleavedBuffer=Og;h.InstancedMesh=Ue;h.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new Dd(a,b)};h.Int16BufferAttribute=Dd;h.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new Ed(a,b)};h.Int32BufferAttribute=Ed;
h.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new Ad(a,b)};h.Int8BufferAttribute=Ad;h.IntType=1013;h.InterleavedBuffer=sb;h.InterleavedBufferAttribute=Pd;h.Interpolant=Ka;h.InterpolateDiscrete=2300;h.InterpolateLinear=2301;h.InterpolateSmooth=2302;h.InvertStencilOp=5386;h.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")};h.KeepStencilOp=7680;h.KeyframeTrack=ra;h.LOD=Sd;h.LatheBufferGeometry=
$c;h.LatheGeometry=le;h.Layers=$f;h.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")};h.LessDepth=2;h.LessEqualDepth=3;h.LessEqualStencilFunc=515;h.LessStencilFunc=513;h.Light=ba;h.LightProbe=ab;h.LightShadow=kb;h.Line=Ja;h.Line3=Rg;h.LineBasicMaterial=ja;h.LineCurve=Ea;h.LineCurve3=Xa;h.LineDashedMaterial=sc;h.LineLoop=Ve;h.LinePieces=1;h.LineSegments=la;h.LineStrip=0;h.LinearEncoding=3E3;h.LinearFilter=1006;h.LinearInterpolant=pe;h.LinearMipMapLinearFilter=
1008;h.LinearMipMapNearestFilter=1007;h.LinearMipmapLinearFilter=1008;h.LinearMipmapNearestFilter=1007;h.LinearToneMapping=1;h.Loader=Q;h.LoaderUtils=rh;h.LoadingManager=wg;h.LogLuvEncoding=3003;h.LoopOnce=2200;h.LoopPingPong=2202;h.LoopRepeat=2201;h.LuminanceAlphaFormat=1025;h.LuminanceFormat=1024;h.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};h.Material=L;h.MaterialLoader=nf;h.Math=O;h.Matrix3=za;h.Matrix4=P;h.MaxEquation=104;h.Mesh=ca;h.MeshBasicMaterial=Oa;h.MeshDepthMaterial=Gb;h.MeshDistanceMaterial=
Hb;h.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};h.MeshLambertMaterial=qc;h.MeshMatcapMaterial=rc;h.MeshNormalMaterial=pc;h.MeshPhongMaterial=Kb;h.MeshPhysicalMaterial=nc;h.MeshStandardMaterial=hb;h.MeshToonMaterial=oc;h.MinEquation=103;h.MirroredRepeatWrapping=1002;h.MixOperation=1;h.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;
a.materials=a;a.clone=function(){return a.slice()};return a};h.MultiplyBlending=4;h.MultiplyOperation=0;h.NearestFilter=1003;h.NearestMipMapLinearFilter=1005;h.NearestMipMapNearestFilter=1004;h.NearestMipmapLinearFilter=1005;h.NearestMipmapNearestFilter=1004;h.NeverDepth=0;h.NeverStencilFunc=512;h.NoBlending=0;h.NoColors=0;h.NoToneMapping=0;h.NormalBlending=1;h.NotEqualDepth=7;h.NotEqualStencilFunc=517;h.NumberKeyframeTrack=cd;h.Object3D=D;h.ObjectLoader=rf;h.ObjectSpaceNormalMap=1;h.OctahedronBufferGeometry=
ec;h.OctahedronGeometry=Zd;h.OneFactor=201;h.OneMinusDstAlphaFactor=207;h.OneMinusDstColorFactor=209;h.OneMinusSrcAlphaFactor=205;h.OneMinusSrcColorFactor=203;h.OrthographicCamera=gd;h.PCFShadowMap=1;h.PCFSoftShadowMap=2;h.PMREMGenerator=Tg;h.ParametricBufferGeometry=Rc;h.ParametricGeometry=Wd;h.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Qd(a)};h.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
return new Va(a)};h.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Oc(a,b)};h.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Va(a)};h.Path=$a;h.PerspectiveCamera=pa;h.Plane=Ta;h.PlaneBufferGeometry=dc;h.PlaneGeometry=Id;h.PlaneHelper=we;h.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Oc(a,b)};
h.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Va(a)};h.PointLight=hf;h.PointLightHelper=kd;h.Points=Oc;h.PointsMaterial=Va;h.PolarGridHelper=wf;h.PolyhedronBufferGeometry=Ga;h.PolyhedronGeometry=Xd;h.PositionalAudio=Kg;h.PropertyBinding=Ba;h.PropertyMixer=Mg;h.QuadraticBezierCurve=Ya;h.QuadraticBezierCurve3=jb;h.Quaternion=Da;h.QuaternionKeyframeTrack=qe;h.QuaternionLinearInterpolant=$e;h.REVISION="112";h.RGBADepthPacking=
3201;h.RGBAFormat=1023;h.RGBAIntegerFormat=1033;h.RGBA_ASTC_10x10_Format=37819;h.RGBA_ASTC_10x5_Format=37816;h.RGBA_ASTC_10x6_Format=37817;h.RGBA_ASTC_10x8_Format=37818;h.RGBA_ASTC_12x10_Format=37820;h.RGBA_ASTC_12x12_Format=37821;h.RGBA_ASTC_4x4_Format=37808;h.RGBA_ASTC_5x4_Format=37809;h.RGBA_ASTC_5x5_Format=37810;h.RGBA_ASTC_6x5_Format=37811;h.RGBA_ASTC_6x6_Format=37812;h.RGBA_ASTC_8x5_Format=37813;h.RGBA_ASTC_8x6_Format=37814;h.RGBA_ASTC_8x8_Format=37815;h.RGBA_PVRTC_2BPPV1_Format=35843;h.RGBA_PVRTC_4BPPV1_Format=
35842;h.RGBA_S3TC_DXT1_Format=33777;h.RGBA_S3TC_DXT3_Format=33778;h.RGBA_S3TC_DXT5_Format=33779;h.RGBDEncoding=3006;h.RGBEEncoding=3002;h.RGBEFormat=1023;h.RGBFormat=1022;h.RGBIntegerFormat=1032;h.RGBM16Encoding=3005;h.RGBM7Encoding=3004;h.RGB_ETC1_Format=36196;h.RGB_PVRTC_2BPPV1_Format=35841;h.RGB_PVRTC_4BPPV1_Format=35840;h.RGB_S3TC_DXT1_Format=33776;h.RGFormat=1030;h.RGIntegerFormat=1031;h.RawShaderMaterial=vb;h.Ray=Wb;h.Raycaster=mi;h.RectAreaLight=mf;h.RedFormat=1028;h.RedIntegerFormat=1029;
h.ReinhardToneMapping=2;h.RepeatWrapping=1E3;h.ReplaceStencilOp=7681;h.ReverseSubtractEquation=102;h.RingBufferGeometry=Zc;h.RingGeometry=ke;h.Scene=pb;h.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};h.ShaderChunk=
N;h.ShaderLib=eb;h.ShaderMaterial=oa;h.ShadowMaterial=mc;h.Shape=Lb;h.ShapeBufferGeometry=kc;h.ShapeGeometry=jc;h.ShapePath=Cg;h.ShapeUtils=tb;h.ShortType=1011;h.Skeleton=Te;h.SkeletonHelper=jd;h.SkinnedMesh=Td;h.SmoothShading=2;h.Sphere=qb;h.SphereBufferGeometry=ic;h.SphereGeometry=je;h.Spherical=oi;h.SphericalHarmonics3=tf;h.SphericalReflectionMapping=305;h.Spline=Zg;h.SplineCurve=Za;h.SplineCurve3=Di;h.SpotLight=gf;h.SpotLightHelper=id;h.SpotLightShadow=ff;h.Sprite=Qd;h.SpriteMaterial=Jb;h.SrcAlphaFactor=
204;h.SrcAlphaSaturateFactor=210;h.SrcColorFactor=202;h.StaticCopyUsage=35046;h.StaticDrawUsage=35044;h.StaticReadUsage=35045;h.StereoCamera=ii;h.StreamCopyUsage=35042;h.StreamDrawUsage=35040;h.StreamReadUsage=35041;h.StringKeyframeTrack=af;h.SubtractEquation=101;h.SubtractiveBlending=3;h.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};h.TangentSpaceNormalMap=0;h.TetrahedronBufferGeometry=Sc;h.TetrahedronGeometry=Yd;h.TextBufferGeometry=Yc;h.TextGeometry=ie;h.Texture=T;h.TextureLoader=df;h.TorusBufferGeometry=
Wc;h.TorusGeometry=de;h.TorusKnotBufferGeometry=Vc;h.TorusKnotGeometry=ce;h.Triangle=ma;h.TriangleFanDrawMode=2;h.TriangleStripDrawMode=1;h.TrianglesDrawMode=0;h.TubeBufferGeometry=fc;h.TubeGeometry=be;h.UVMapping=300;h.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Xb(a,b)};h.Uint16BufferAttribute=Xb;h.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
return new Yb(a,b)};h.Uint32BufferAttribute=Yb;h.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new Bd(a,b)};h.Uint8BufferAttribute=Bd;h.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new Cd(a,b)};h.Uint8ClampedBufferAttribute=Cd;h.Uncharted2ToneMapping=3;h.Uniform=uf;h.UniformsLib=E;h.UniformsUtils=
Xk;h.UnsignedByteType=1009;h.UnsignedInt248Type=1020;h.UnsignedIntType=1014;h.UnsignedShort4444Type=1017;h.UnsignedShort5551Type=1018;h.UnsignedShort565Type=1019;h.UnsignedShortType=1012;h.VSMShadowMap=3;h.Vector2=x;h.Vector3=n;h.Vector4=S;h.VectorKeyframeTrack=dd;h.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new n(a,b,c)};h.VertexColors=2;h.VideoTexture=tg;h.WebGLMultisampleRenderTarget=Zf;h.WebGLRenderTarget=va;h.WebGLRenderTargetCube=
Eb;h.WebGLRenderer=pg;h.WebGLUtils=Vh;h.WireframeGeometry=Qc;h.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new la(new Qc(a.geometry),new ja({color:void 0!==b?b:16777215}))};h.WrapAroundEnding=2402;h.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Ra(a)};h.ZeroCurvatureEnding=2400;h.ZeroFactor=200;h.ZeroSlopeEnding=2401;h.ZeroStencilOp=0;h.sRGBEncoding=3001;Object.defineProperty(h,
"__esModule",{value:!0})});

/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 * @author Takahiro / https://github.com/takahirox
 * @author Don McCurdy / https://www.donmccurdy.com
 */

THREE.GLTFLoader = ( function () {

	function GLTFLoader( manager ) {

		THREE.Loader.call( this, manager );

		this.dracoLoader = null;
		this.ddsLoader = null;

	}

	GLTFLoader.prototype = Object.assign( Object.create( THREE.Loader.prototype ), {

		constructor: GLTFLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var resourcePath;

			if ( this.resourcePath !== '' ) {

				resourcePath = this.resourcePath;

			} else if ( this.path !== '' ) {

				resourcePath = this.path;

			} else {

				resourcePath = THREE.LoaderUtils.extractUrlBase( url );

			}

			// Tells the LoadingManager to track an extra item, which resolves after
			// the model is fully loaded. This means the count of items loaded will
			// be incorrect, but ensures manager.onLoad() does not fire early.
			scope.manager.itemStart( url );

			var _onError = function ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );
				scope.manager.itemEnd( url );

			};

			var loader = new THREE.FileLoader( scope.manager );

			loader.setPath( this.path );
			loader.setResponseType( 'arraybuffer' );

			if ( scope.crossOrigin === 'use-credentials' ) {

				loader.setWithCredentials( true );

			}

			loader.load( url, function ( data ) {

				try {

					scope.parse( data, resourcePath, function ( gltf ) {

						onLoad( gltf );

						scope.manager.itemEnd( url );

					}, _onError );

				} catch ( e ) {

					_onError( e );

				}

			}, onProgress, _onError );

		},

		setDRACOLoader: function ( dracoLoader ) {

			this.dracoLoader = dracoLoader;
			return this;

		},

		setDDSLoader: function ( ddsLoader ) {

			this.ddsLoader = ddsLoader;
			return this;

		},

		parse: function ( data, path, onLoad, onError ) {

			var content;
			var extensions = {};

			if ( typeof data === 'string' ) {

				content = data;

			} else {

				var magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

				if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

					try {

						extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

					} catch ( error ) {

						if ( onError ) onError( error );
						return;

					}

					content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

				} else {

					content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

				}

			}

			var json = JSON.parse( content );

			if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

				if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
				return;

			}

			if ( json.extensionsUsed ) {

				for ( var i = 0; i < json.extensionsUsed.length; ++ i ) {

					var extensionName = json.extensionsUsed[ i ];
					var extensionsRequired = json.extensionsRequired || [];

					switch ( extensionName ) {

						case EXTENSIONS.KHR_LIGHTS_PUNCTUAL:
							extensions[ extensionName ] = new GLTFLightsExtension( json );
							break;

						case EXTENSIONS.KHR_MATERIALS_UNLIT:
							extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
							break;

						case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
							extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension();
							break;

						case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
							extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
							break;

						case EXTENSIONS.MSFT_TEXTURE_DDS:
							extensions[ extensionName ] = new GLTFTextureDDSExtension( this.ddsLoader );
							break;

						case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
							extensions[ extensionName ] = new GLTFTextureTransformExtension();
							break;

						case EXTENSIONS.KHR_MESH_QUANTIZATION:
							extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
							break;

						default:

							if ( extensionsRequired.indexOf( extensionName ) >= 0 ) {

								console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

							}

					}

				}

			}

			var parser = new GLTFParser( json, extensions, {

				path: path || this.resourcePath || '',
				crossOrigin: this.crossOrigin,
				manager: this.manager

			} );

			parser.parse( onLoad, onError );

		}

	} );

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		var objects = {};

		return	{

			get: function ( key ) {

				return objects[ key ];

			},

			add: function ( key, object ) {

				objects[ key ] = object;

			},

			remove: function ( key ) {

				delete objects[ key ];

			},

			removeAll: function () {

				objects = {};

			}

		};

	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	var EXTENSIONS = {
		KHR_BINARY_GLTF: 'KHR_binary_glTF',
		KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
		KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
		KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
		KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
		KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
		KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
		MSFT_TEXTURE_DDS: 'MSFT_texture_dds'
	};

	/**
	 * DDS Texture Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_texture_dds
	 *
	 */
	function GLTFTextureDDSExtension( ddsLoader ) {

		if ( ! ddsLoader ) {

			throw new Error( 'THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader' );

		}

		this.name = EXTENSIONS.MSFT_TEXTURE_DDS;
		this.ddsLoader = ddsLoader;

	}

	/**
	 * Punctual Lights Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
	 */
	function GLTFLightsExtension( json ) {

		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

		var extension = ( json.extensions && json.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ] ) || {};
		this.lightDefs = extension.lights || [];

	}

	GLTFLightsExtension.prototype.loadLight = function ( lightIndex ) {

		var lightDef = this.lightDefs[ lightIndex ];
		var lightNode;

		var color = new THREE.Color( 0xffffff );
		if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

		var range = lightDef.range !== undefined ? lightDef.range : 0;

		switch ( lightDef.type ) {

			case 'directional':
				lightNode = new THREE.DirectionalLight( color );
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			case 'point':
				lightNode = new THREE.PointLight( color );
				lightNode.distance = range;
				break;

			case 'spot':
				lightNode = new THREE.SpotLight( color );
				lightNode.distance = range;
				// Handle spotlight properties.
				lightDef.spot = lightDef.spot || {};
				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
				lightNode.angle = lightDef.spot.outerConeAngle;
				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			default:
				throw new Error( 'THREE.GLTFLoader: Unexpected light type, "' + lightDef.type + '".' );

		}

		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
		// here, because node-level parsing will only override position if explicitly specified.
		lightNode.position.set( 0, 0, 0 );

		lightNode.decay = 2;

		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

		lightNode.name = lightDef.name || ( 'light_' + lightIndex );

		return Promise.resolve( lightNode );

	};

	/**
	 * Unlit Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
	 */
	function GLTFMaterialsUnlitExtension() {

		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

	}

	GLTFMaterialsUnlitExtension.prototype.getMaterialType = function () {

		return THREE.MeshBasicMaterial;

	};

	GLTFMaterialsUnlitExtension.prototype.extendParams = function ( materialParams, materialDef, parser ) {

		var pending = [];

		materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		var metallicRoughness = materialDef.pbrMetallicRoughness;

		if ( metallicRoughness ) {

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

		}

		return Promise.all( pending );

	};

	/* BINARY EXTENSION */
	var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
	var BINARY_EXTENSION_HEADER_LENGTH = 12;
	var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	function GLTFBinaryExtension( data ) {

		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;

		var headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

		this.header = {
			magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
			version: headerView.getUint32( 4, true ),
			length: headerView.getUint32( 8, true )
		};

		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

		} else if ( this.header.version < 2.0 ) {

			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

		}

		var chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
		var chunkIndex = 0;

		while ( chunkIndex < chunkView.byteLength ) {

			var chunkLength = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			var chunkType = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

				var contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
				this.content = THREE.LoaderUtils.decodeText( contentArray );

			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

				var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice( byteOffset, byteOffset + chunkLength );

			}

			// Clients must ignore chunks with unknown types.

			chunkIndex += chunkLength;

		}

		if ( this.content === null ) {

			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

		}

	}

	/**
	 * DRACO Mesh Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
	 */
	function GLTFDracoMeshCompressionExtension( json, dracoLoader ) {

		if ( ! dracoLoader ) {

			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

		}

		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
		this.json = json;
		this.dracoLoader = dracoLoader;
		this.dracoLoader.preload();

	}

	GLTFDracoMeshCompressionExtension.prototype.decodePrimitive = function ( primitive, parser ) {

		var json = this.json;
		var dracoLoader = this.dracoLoader;
		var bufferViewIndex = primitive.extensions[ this.name ].bufferView;
		var gltfAttributeMap = primitive.extensions[ this.name ].attributes;
		var threeAttributeMap = {};
		var attributeNormalizedMap = {};
		var attributeTypeMap = {};

		for ( var attributeName in gltfAttributeMap ) {

			var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

		}

		for ( attributeName in primitive.attributes ) {

			var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

				var accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
				var componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

				attributeTypeMap[ threeAttributeName ] = componentType;
				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

			}

		}

		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

			return new Promise( function ( resolve ) {

				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

					for ( var attributeName in geometry.attributes ) {

						var attribute = geometry.attributes[ attributeName ];
						var normalized = attributeNormalizedMap[ attributeName ];

						if ( normalized !== undefined ) attribute.normalized = normalized;

					}

					resolve( geometry );

				}, threeAttributeMap, attributeTypeMap );

			} );

		} );

	};

	/**
	 * Texture Transform Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
	 */
	function GLTFTextureTransformExtension() {

		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

	}

	GLTFTextureTransformExtension.prototype.extendTexture = function ( texture, transform ) {

		texture = texture.clone();

		if ( transform.offset !== undefined ) {

			texture.offset.fromArray( transform.offset );

		}

		if ( transform.rotation !== undefined ) {

			texture.rotation = transform.rotation;

		}

		if ( transform.scale !== undefined ) {

			texture.repeat.fromArray( transform.scale );

		}

		if ( transform.texCoord !== undefined ) {

			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

		}

		texture.needsUpdate = true;

		return texture;

	};

	/**
	 * Specular-Glossiness Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
	 */
	function GLTFMaterialsPbrSpecularGlossinessExtension() {

		return {

			name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

			specularGlossinessParams: [
				'color',
				'map',
				'lightMap',
				'lightMapIntensity',
				'aoMap',
				'aoMapIntensity',
				'emissive',
				'emissiveIntensity',
				'emissiveMap',
				'bumpMap',
				'bumpScale',
				'normalMap',
				'displacementMap',
				'displacementScale',
				'displacementBias',
				'specularMap',
				'specular',
				'glossinessMap',
				'glossiness',
				'alphaMap',
				'envMap',
				'envMapIntensity',
				'refractionRatio',
			],

			getMaterialType: function () {

				return THREE.ShaderMaterial;

			},

			extendParams: function ( materialParams, materialDef, parser ) {

				var pbrSpecularGlossiness = materialDef.extensions[ this.name ];

				var shader = THREE.ShaderLib[ 'standard' ];

				var uniforms = THREE.UniformsUtils.clone( shader.uniforms );

				var specularMapParsFragmentChunk = [
					'#ifdef USE_SPECULARMAP',
					'	uniform sampler2D specularMap;',
					'#endif'
				].join( '\n' );

				var glossinessMapParsFragmentChunk = [
					'#ifdef USE_GLOSSINESSMAP',
					'	uniform sampler2D glossinessMap;',
					'#endif'
				].join( '\n' );

				var specularMapFragmentChunk = [
					'vec3 specularFactor = specular;',
					'#ifdef USE_SPECULARMAP',
					'	vec4 texelSpecular = texture2D( specularMap, vUv );',
					'	texelSpecular = sRGBToLinear( texelSpecular );',
					'	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
					'	specularFactor *= texelSpecular.rgb;',
					'#endif'
				].join( '\n' );

				var glossinessMapFragmentChunk = [
					'float glossinessFactor = glossiness;',
					'#ifdef USE_GLOSSINESSMAP',
					'	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
					'	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
					'	glossinessFactor *= texelGlossiness.a;',
					'#endif'
				].join( '\n' );

				var lightPhysicalFragmentChunk = [
					'PhysicalMaterial material;',
					'material.diffuseColor = diffuseColor.rgb;',
					'material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );',
					'material.specularColor = specularFactor.rgb;',
				].join( '\n' );

				var fragmentShader = shader.fragmentShader
					.replace( 'uniform float roughness;', 'uniform vec3 specular;' )
					.replace( 'uniform float metalness;', 'uniform float glossiness;' )
					.replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk )
					.replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk )
					.replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk )
					.replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk )
					.replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

				delete uniforms.roughness;
				delete uniforms.metalness;
				delete uniforms.roughnessMap;
				delete uniforms.metalnessMap;

				uniforms.specular = { value: new THREE.Color().setHex( 0x111111 ) };
				uniforms.glossiness = { value: 0.5 };
				uniforms.specularMap = { value: null };
				uniforms.glossinessMap = { value: null };

				materialParams.vertexShader = shader.vertexShader;
				materialParams.fragmentShader = fragmentShader;
				materialParams.uniforms = uniforms;
				materialParams.defines = { 'STANDARD': '' };

				materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
				materialParams.opacity = 1.0;

				var pending = [];

				if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

					var array = pbrSpecularGlossiness.diffuseFactor;

					materialParams.color.fromArray( array );
					materialParams.opacity = array[ 3 ];

				}

				if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

					pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

				}

				materialParams.emissive = new THREE.Color( 0.0, 0.0, 0.0 );
				materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
				materialParams.specular = new THREE.Color( 1.0, 1.0, 1.0 );

				if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

					materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

				}

				if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

					var specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
					pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
					pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

				}

				return Promise.all( pending );

			},

			createMaterial: function ( params ) {

				// setup material properties based on MeshStandardMaterial for Specular-Glossiness

				var material = new THREE.ShaderMaterial( {
					defines: params.defines,
					vertexShader: params.vertexShader,
					fragmentShader: params.fragmentShader,
					uniforms: params.uniforms,
					fog: true,
					lights: true,
					opacity: params.opacity,
					transparent: params.transparent
				} );

				material.isGLTFSpecularGlossinessMaterial = true;

				material.color = params.color;

				material.map = params.map === undefined ? null : params.map;

				material.lightMap = null;
				material.lightMapIntensity = 1.0;

				material.aoMap = params.aoMap === undefined ? null : params.aoMap;
				material.aoMapIntensity = 1.0;

				material.emissive = params.emissive;
				material.emissiveIntensity = 1.0;
				material.emissiveMap = params.emissiveMap === undefined ? null : params.emissiveMap;

				material.bumpMap = params.bumpMap === undefined ? null : params.bumpMap;
				material.bumpScale = 1;

				material.normalMap = params.normalMap === undefined ? null : params.normalMap;

				if ( params.normalScale ) material.normalScale = params.normalScale;

				material.displacementMap = null;
				material.displacementScale = 1;
				material.displacementBias = 0;

				material.specularMap = params.specularMap === undefined ? null : params.specularMap;
				material.specular = params.specular;

				material.glossinessMap = params.glossinessMap === undefined ? null : params.glossinessMap;
				material.glossiness = params.glossiness;

				material.alphaMap = null;

				material.envMap = params.envMap === undefined ? null : params.envMap;
				material.envMapIntensity = 1.0;

				material.refractionRatio = 0.98;

				material.extensions.derivatives = true;

				return material;

			},

			/**
			 * Clones a GLTFSpecularGlossinessMaterial instance. The ShaderMaterial.copy() method can
			 * copy only properties it knows about or inherits, and misses many properties that would
			 * normally be defined by MeshStandardMaterial.
			 *
			 * This method allows GLTFSpecularGlossinessMaterials to be cloned in the process of
			 * loading a glTF model, but cloning later (e.g. by the user) would require these changes
			 * AND also updating `.onBeforeRender` on the parent mesh.
			 *
			 * @param  {THREE.ShaderMaterial} source
			 * @return {THREE.ShaderMaterial}
			 */
			cloneMaterial: function ( source ) {

				var target = source.clone();

				target.isGLTFSpecularGlossinessMaterial = true;

				var params = this.specularGlossinessParams;

				for ( var i = 0, il = params.length; i < il; i ++ ) {

					var value = source[ params[ i ] ];
					target[ params[ i ] ] = ( value && value.isColor ) ? value.clone() : value;

				}

				return target;

			},

			// Here's based on refreshUniformsCommon() and refreshUniformsStandard() in WebGLRenderer.
			refreshUniforms: function ( renderer, scene, camera, geometry, material ) {

				if ( material.isGLTFSpecularGlossinessMaterial !== true ) {

					return;

				}

				var uniforms = material.uniforms;
				var defines = material.defines;

				uniforms.opacity.value = material.opacity;

				uniforms.diffuse.value.copy( material.color );
				uniforms.emissive.value.copy( material.emissive ).multiplyScalar( material.emissiveIntensity );

				uniforms.map.value = material.map;
				uniforms.specularMap.value = material.specularMap;
				uniforms.alphaMap.value = material.alphaMap;

				uniforms.lightMap.value = material.lightMap;
				uniforms.lightMapIntensity.value = material.lightMapIntensity;

				uniforms.aoMap.value = material.aoMap;
				uniforms.aoMapIntensity.value = material.aoMapIntensity;

				// uv repeat and offset setting priorities
				// 1. color map
				// 2. specular map
				// 3. normal map
				// 4. bump map
				// 5. alpha map
				// 6. emissive map

				var uvScaleMap;

				if ( material.map ) {

					uvScaleMap = material.map;

				} else if ( material.specularMap ) {

					uvScaleMap = material.specularMap;

				} else if ( material.displacementMap ) {

					uvScaleMap = material.displacementMap;

				} else if ( material.normalMap ) {

					uvScaleMap = material.normalMap;

				} else if ( material.bumpMap ) {

					uvScaleMap = material.bumpMap;

				} else if ( material.glossinessMap ) {

					uvScaleMap = material.glossinessMap;

				} else if ( material.alphaMap ) {

					uvScaleMap = material.alphaMap;

				} else if ( material.emissiveMap ) {

					uvScaleMap = material.emissiveMap;

				}

				if ( uvScaleMap !== undefined ) {

					// backwards compatibility
					if ( uvScaleMap.isWebGLRenderTarget ) {

						uvScaleMap = uvScaleMap.texture;

					}

					if ( uvScaleMap.matrixAutoUpdate === true ) {

						uvScaleMap.updateMatrix();

					}

					uniforms.uvTransform.value.copy( uvScaleMap.matrix );

				}

				if ( material.envMap ) {

					uniforms.envMap.value = material.envMap;
					uniforms.envMapIntensity.value = material.envMapIntensity;

					// don't flip CubeTexture envMaps, flip everything else:
					//  WebGLRenderTargetCube will be flipped for backwards compatibility
					//  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
					// this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
					uniforms.flipEnvMap.value = material.envMap.isCubeTexture ? - 1 : 1;

					uniforms.reflectivity.value = material.reflectivity;
					uniforms.refractionRatio.value = material.refractionRatio;

					uniforms.maxMipLevel.value = renderer.properties.get( material.envMap ).__maxMipLevel;

				}

				uniforms.specular.value.copy( material.specular );
				uniforms.glossiness.value = material.glossiness;

				uniforms.glossinessMap.value = material.glossinessMap;

				uniforms.emissiveMap.value = material.emissiveMap;
				uniforms.bumpMap.value = material.bumpMap;
				uniforms.normalMap.value = material.normalMap;

				uniforms.displacementMap.value = material.displacementMap;
				uniforms.displacementScale.value = material.displacementScale;
				uniforms.displacementBias.value = material.displacementBias;

				if ( uniforms.glossinessMap.value !== null && defines.USE_GLOSSINESSMAP === undefined ) {

					defines.USE_GLOSSINESSMAP = '';
					// set USE_ROUGHNESSMAP to enable vUv
					defines.USE_ROUGHNESSMAP = '';

				}

				if ( uniforms.glossinessMap.value === null && defines.USE_GLOSSINESSMAP !== undefined ) {

					delete defines.USE_GLOSSINESSMAP;
					delete defines.USE_ROUGHNESSMAP;

				}

			}

		};

	}

	/**
	 * Mesh Quantization Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
	 */
	function GLTFMeshQuantizationExtension() {

		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	function GLTFCubicSplineInterpolant( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

		THREE.Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	GLTFCubicSplineInterpolant.prototype = Object.create( THREE.Interpolant.prototype );
	GLTFCubicSplineInterpolant.prototype.constructor = GLTFCubicSplineInterpolant;

	GLTFCubicSplineInterpolant.prototype.copySampleValue_ = function ( index ) {

		// Copies a sample value to the result buffer. See description of glTF
		// CUBICSPLINE values layout in interpolate_() function below.

		var result = this.resultBuffer,
			values = this.sampleValues,
			valueSize = this.valueSize,
			offset = index * valueSize * 3 + valueSize;

		for ( var i = 0; i !== valueSize; i ++ ) {

			result[ i ] = values[ offset + i ];

		}

		return result;

	};

	GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

		var result = this.resultBuffer;
		var values = this.sampleValues;
		var stride = this.valueSize;

		var stride2 = stride * 2;
		var stride3 = stride * 3;

		var td = t1 - t0;

		var p = ( t - t0 ) / td;
		var pp = p * p;
		var ppp = pp * p;

		var offset1 = i1 * stride3;
		var offset0 = offset1 - stride3;

		var s2 = - 2 * ppp + 3 * pp;
		var s3 = ppp - pp;
		var s0 = 1 - s2;
		var s1 = s3 - pp + p;

		// Layout of keyframe output values for CUBICSPLINE animations:
		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
		for ( var i = 0; i !== stride; i ++ ) {

			var p0 = values[ offset0 + i + stride ]; // splineVertex_k
			var m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
			var p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
			var m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

			result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

		}

		return result;

	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		POINTS: 0,
		LINES: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123
	};

	var WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	var WEBGL_FILTERS = {
		9728: THREE.NearestFilter,
		9729: THREE.LinearFilter,
		9984: THREE.NearestMipmapNearestFilter,
		9985: THREE.LinearMipmapNearestFilter,
		9986: THREE.NearestMipmapLinearFilter,
		9987: THREE.LinearMipmapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
		33071: THREE.ClampToEdgeWrapping,
		33648: THREE.MirroredRepeatWrapping,
		10497: THREE.RepeatWrapping
	};

	var WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	var ATTRIBUTES = {
		POSITION: 'position',
		NORMAL: 'normal',
		TANGENT: 'tangent',
		TEXCOORD_0: 'uv',
		TEXCOORD_1: 'uv2',
		COLOR_0: 'color',
		WEIGHTS_0: 'skinWeight',
		JOINTS_0: 'skinIndex',
	};

	var PATH_PROPERTIES = {
		scale: 'scale',
		translation: 'position',
		rotation: 'quaternion',
		weights: 'morphTargetInfluences'
	};

	var INTERPOLATION = {
		CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
		                        // keyframe track will be initialized with a default interpolation type, then modified.
		LINEAR: THREE.InterpolateLinear,
		STEP: THREE.InterpolateDiscrete
	};

	var ALPHA_MODES = {
		OPAQUE: 'OPAQUE',
		MASK: 'MASK',
		BLEND: 'BLEND'
	};

	var MIME_TYPE_FORMATS = {
		'image/png': THREE.RGBAFormat,
		'image/jpeg': THREE.RGBFormat
	};

	/* UTILITY FUNCTIONS */

	function resolveURL( url, path ) {

		// Invalid URL
		if ( typeof url !== 'string' || url === '' ) return '';

		// Host Relative URL
		if ( /^https?:\/\//i.test( path ) && /^\//.test( url ) ) {

			path = path.replace( /(^https?:\/\/[^\/]+).*/i, '$1' );

		}

		// Absolute URL http://,https://,//
		if ( /^(https?:)?\/\//i.test( url ) ) return url;

		// Data URI
		if ( /^data:.*,.*$/i.test( url ) ) return url;

		// Blob URL
		if ( /^blob:.*$/i.test( url ) ) return url;

		// Relative URL
		return path + url;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
	 */
	function createDefaultMaterial( cache ) {

		if ( cache[ 'DefaultMaterial' ] === undefined ) {

			cache[ 'DefaultMaterial' ] = new THREE.MeshStandardMaterial( {
				color: 0xFFFFFF,
				emissive: 0x000000,
				metalness: 1,
				roughness: 1,
				transparent: false,
				depthTest: true,
				side: THREE.FrontSide
			} );

		}

		return cache[ 'DefaultMaterial' ];

	}

	function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

		// Add unknown glTF extensions to an object's userData.

		for ( var name in objectDef.extensions ) {

			if ( knownExtensions[ name ] === undefined ) {

				object.userData.gltfExtensions = object.userData.gltfExtensions || {};
				object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

			}

		}

	}

	/**
	 * @param {THREE.Object3D|THREE.Material|THREE.BufferGeometry} object
	 * @param {GLTF.definition} gltfDef
	 */
	function assignExtrasToUserData( object, gltfDef ) {

		if ( gltfDef.extras !== undefined ) {

			if ( typeof gltfDef.extras === 'object' ) {

				Object.assign( object.userData, gltfDef.extras );

			} else {

				console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

			}

		}

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
	 *
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Array<GLTF.Target>} targets
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addMorphTargets( geometry, targets, parser ) {

		var hasMorphPosition = false;
		var hasMorphNormal = false;

		for ( var i = 0, il = targets.length; i < il; i ++ ) {

			var target = targets[ i ];

			if ( target.POSITION !== undefined ) hasMorphPosition = true;
			if ( target.NORMAL !== undefined ) hasMorphNormal = true;

			if ( hasMorphPosition && hasMorphNormal ) break;

		}

		if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

		var pendingPositionAccessors = [];
		var pendingNormalAccessors = [];

		for ( var i = 0, il = targets.length; i < il; i ++ ) {

			var target = targets[ i ];

			if ( hasMorphPosition ) {

				var pendingAccessor = target.POSITION !== undefined
					? parser.getDependency( 'accessor', target.POSITION )
					: geometry.attributes.position;

				pendingPositionAccessors.push( pendingAccessor );

			}

			if ( hasMorphNormal ) {

				var pendingAccessor = target.NORMAL !== undefined
					? parser.getDependency( 'accessor', target.NORMAL )
					: geometry.attributes.normal;

				pendingNormalAccessors.push( pendingAccessor );

			}

		}

		return Promise.all( [
			Promise.all( pendingPositionAccessors ),
			Promise.all( pendingNormalAccessors )
		] ).then( function ( accessors ) {

			var morphPositions = accessors[ 0 ];
			var morphNormals = accessors[ 1 ];

			if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
			if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
			geometry.morphTargetsRelative = true;

			return geometry;

		} );

	}

	/**
	 * @param {THREE.Mesh} mesh
	 * @param {GLTF.Mesh} meshDef
	 */
	function updateMorphTargets( mesh, meshDef ) {

		mesh.updateMorphTargets();

		if ( meshDef.weights !== undefined ) {

			for ( var i = 0, il = meshDef.weights.length; i < il; i ++ ) {

				mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

			}

		}

		// .extras has user-defined data, so check that .extras.targetNames is an array.
		if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

			var targetNames = meshDef.extras.targetNames;

			if ( mesh.morphTargetInfluences.length === targetNames.length ) {

				mesh.morphTargetDictionary = {};

				for ( var i = 0, il = targetNames.length; i < il; i ++ ) {

					mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

				}

			} else {

				console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

			}

		}

	}

	function createPrimitiveKey( primitiveDef ) {

		var dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
		var geometryKey;

		if ( dracoExtension ) {

			geometryKey = 'draco:' + dracoExtension.bufferView
				+ ':' + dracoExtension.indices
				+ ':' + createAttributesKey( dracoExtension.attributes );

		} else {

			geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

		}

		return geometryKey;

	}

	function createAttributesKey( attributes ) {

		var attributesKey = '';

		var keys = Object.keys( attributes ).sort();

		for ( var i = 0, il = keys.length; i < il; i ++ ) {

			attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

		}

		return attributesKey;

	}

	/* GLTF PARSER */

	function GLTFParser( json, extensions, options ) {

		this.json = json || {};
		this.extensions = extensions || {};
		this.options = options || {};

		// loader object cache
		this.cache = new GLTFRegistry();

		// BufferGeometry caching
		this.primitiveCache = {};

		this.textureLoader = new THREE.TextureLoader( this.options.manager );
		this.textureLoader.setCrossOrigin( this.options.crossOrigin );

		this.fileLoader = new THREE.FileLoader( this.options.manager );
		this.fileLoader.setResponseType( 'arraybuffer' );

		if ( this.options.crossOrigin === 'use-credentials' ) {

			this.fileLoader.setWithCredentials( true );

		}

	}

	GLTFParser.prototype.parse = function ( onLoad, onError ) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;

		// Clear the loader cache
		this.cache.removeAll();

		// Mark the special nodes/meshes in json for efficient parse
		this.markDefs();

		Promise.all( [

			this.getDependencies( 'scene' ),
			this.getDependencies( 'animation' ),
			this.getDependencies( 'camera' ),

		] ).then( function ( dependencies ) {

			var result = {
				scene: dependencies[ 0 ][ json.scene || 0 ],
				scenes: dependencies[ 0 ],
				animations: dependencies[ 1 ],
				cameras: dependencies[ 2 ],
				asset: json.asset,
				parser: parser,
				userData: {}
			};

			addUnknownExtensionsToUserData( extensions, result, json );

			assignExtrasToUserData( result, json );

			onLoad( result );

		} ).catch( onError );

	};

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	GLTFParser.prototype.markDefs = function () {

		var nodeDefs = this.json.nodes || [];
		var skinDefs = this.json.skins || [];
		var meshDefs = this.json.meshes || [];

		var meshReferences = {};
		var meshUses = {};

		// Nothing in the node definition indicates whether it is a Bone or an
		// Object3D. Use the skins' joint references to mark bones.
		for ( var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

			var joints = skinDefs[ skinIndex ].joints;

			for ( var i = 0, il = joints.length; i < il; i ++ ) {

				nodeDefs[ joints[ i ] ].isBone = true;

			}

		}

		// Meshes can (and should) be reused by multiple nodes in a glTF asset. To
		// avoid having more than one THREE.Mesh with the same name, count
		// references and rename instances below.
		//
		// Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
		for ( var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			var nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.mesh !== undefined ) {

				if ( meshReferences[ nodeDef.mesh ] === undefined ) {

					meshReferences[ nodeDef.mesh ] = meshUses[ nodeDef.mesh ] = 0;

				}

				meshReferences[ nodeDef.mesh ] ++;

				// Nothing in the mesh definition indicates whether it is
				// a SkinnedMesh or Mesh. Use the node's mesh reference
				// to mark SkinnedMesh if node has skin.
				if ( nodeDef.skin !== undefined ) {

					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

				}

			}

		}

		this.json.meshReferences = meshReferences;
		this.json.meshUses = meshUses;

	};

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<THREE.Object3D|THREE.Material|THREE.Texture|THREE.AnimationClip|ArrayBuffer|Object>}
	 */
	GLTFParser.prototype.getDependency = function ( type, index ) {

		var cacheKey = type + ':' + index;
		var dependency = this.cache.get( cacheKey );

		if ( ! dependency ) {

			switch ( type ) {

				case 'scene':
					dependency = this.loadScene( index );
					break;

				case 'node':
					dependency = this.loadNode( index );
					break;

				case 'mesh':
					dependency = this.loadMesh( index );
					break;

				case 'accessor':
					dependency = this.loadAccessor( index );
					break;

				case 'bufferView':
					dependency = this.loadBufferView( index );
					break;

				case 'buffer':
					dependency = this.loadBuffer( index );
					break;

				case 'material':
					dependency = this.loadMaterial( index );
					break;

				case 'texture':
					dependency = this.loadTexture( index );
					break;

				case 'skin':
					dependency = this.loadSkin( index );
					break;

				case 'animation':
					dependency = this.loadAnimation( index );
					break;

				case 'camera':
					dependency = this.loadCamera( index );
					break;

				case 'light':
					dependency = this.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].loadLight( index );
					break;

				default:
					throw new Error( 'Unknown type: ' + type );

			}

			this.cache.add( cacheKey, dependency );

		}

		return dependency;

	};

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	GLTFParser.prototype.getDependencies = function ( type ) {

		var dependencies = this.cache.get( type );

		if ( ! dependencies ) {

			var parser = this;
			var defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

			dependencies = Promise.all( defs.map( function ( def, index ) {

				return parser.getDependency( type, index );

			} ) );

			this.cache.add( type, dependencies );

		}

		return dependencies;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBuffer = function ( bufferIndex ) {

		var bufferDef = this.json.buffers[ bufferIndex ];
		var loader = this.fileLoader;

		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

		}

		// If present, GLB container is required to be the first buffer.
		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

		}

		var options = this.options;

		return new Promise( function ( resolve, reject ) {

			loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

			} );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBufferView = function ( bufferViewIndex ) {

		var bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

			var byteLength = bufferViewDef.byteLength || 0;
			var byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice( byteOffset, byteOffset + byteLength );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
	 */
	GLTFParser.prototype.loadAccessor = function ( accessorIndex ) {

		var parser = this;
		var json = this.json;

		var accessorDef = this.json.accessors[ accessorIndex ];

		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

			// Ignore empty accessors, which may be used to declare runtime
			// information about attributes coming from another source (e.g. Draco
			// compression extension).
			return Promise.resolve( null );

		}

		var pendingBufferViews = [];

		if ( accessorDef.bufferView !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

		} else {

			pendingBufferViews.push( null );

		}

		if ( accessorDef.sparse !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

		}

		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

			var bufferView = bufferViews[ 0 ];

			var itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
			var TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
			var elementBytes = TypedArray.BYTES_PER_ELEMENT;
			var itemBytes = elementBytes * itemSize;
			var byteOffset = accessorDef.byteOffset || 0;
			var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
			var normalized = accessorDef.normalized === true;
			var array, bufferAttribute;

			// The buffer is not interleaved if the stride is the item size in bytes.
			if ( byteStride && byteStride !== itemBytes ) {

				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
				// This makes sure that IBA.count reflects accessor.count properly
				var ibSlice = Math.floor( byteOffset / byteStride );
				var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
				var ib = parser.cache.get( ibCacheKey );

				if ( ! ib ) {

					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

					parser.cache.add( ibCacheKey, ib );

				}

				bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

			} else {

				if ( bufferView === null ) {

					array = new TypedArray( accessorDef.count * itemSize );

				} else {

					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

				}

				bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

			}

			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
			if ( accessorDef.sparse !== undefined ) {

				var itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				var TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

				var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

				var sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
				var sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

				if ( bufferView !== null ) {

					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
					bufferAttribute = new THREE.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

				}

				for ( var i = 0, il = sparseIndices.length; i < il; i ++ ) {

					var index = sparseIndices[ i ];

					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

				}

			}

			return bufferAttribute;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */
	GLTFParser.prototype.loadTexture = function ( textureIndex ) {

		var parser = this;
		var json = this.json;
		var options = this.options;
		var textureLoader = this.textureLoader;

		var URL = window.URL || window.webkitURL;

		var textureDef = json.textures[ textureIndex ];

		var textureExtensions = textureDef.extensions || {};

		var source;

		if ( textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ] ) {

			source = json.images[ textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].source ];

		} else {

			source = json.images[ textureDef.source ];

		}

		var sourceURI = source.uri;
		var isObjectURL = false;

		if ( source.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

				isObjectURL = true;
				var blob = new Blob( [ bufferView ], { type: source.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		}

		return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

			// Load Texture resource.

			var loader = options.manager.getHandler( sourceURI );

			if ( ! loader ) {

				loader = textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ]
					? parser.extensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].ddsLoader
					: textureLoader;

			}

			return new Promise( function ( resolve, reject ) {

				loader.load( resolveURL( sourceURI, options.path ), resolve, undefined, reject );

			} );

		} ).then( function ( texture ) {

			// Clean up resources and configure Texture.

			if ( isObjectURL === true ) {

				URL.revokeObjectURL( sourceURI );

			}

			texture.flipY = false;

			if ( textureDef.name !== undefined ) texture.name = textureDef.name;

			// Ignore unknown mime types, like DDS files.
			if ( source.mimeType in MIME_TYPE_FORMATS ) {

				texture.format = MIME_TYPE_FORMATS[ source.mimeType ];

			}

			var samplers = json.samplers || {};
			var sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || THREE.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || THREE.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || THREE.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || THREE.RepeatWrapping;

			return texture;

		} );

	};

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise}
	 */
	GLTFParser.prototype.assignTexture = function ( materialParams, mapName, mapDef ) {

		var parser = this;

		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

			if ( ! texture.isCompressedTexture ) {

				switch ( mapName ) {

					case 'aoMap':
					case 'emissiveMap':
					case 'metalnessMap':
					case 'normalMap':
					case 'roughnessMap':
						texture.format = THREE.RGBFormat;
						break;

				}

			}

			// Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
			// However, we will copy UV set 0 to UV set 1 on demand for aoMap
			if ( mapDef.texCoord !== undefined && mapDef.texCoord != 0 && ! ( mapName === 'aoMap' && mapDef.texCoord == 1 ) ) {

				console.warn( 'THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.' );

			}

			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

				var transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

				if ( transform ) {

					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );

				}

			}

			materialParams[ mapName ] = texture;

		} );

	};

	/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accomodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {THREE.Object3D} mesh Mesh, Line, or Points instance.
	 */
	GLTFParser.prototype.assignFinalMaterial = function ( mesh ) {

		var geometry = mesh.geometry;
		var material = mesh.material;
		var extensions = this.extensions;

		var useVertexTangents = geometry.attributes.tangent !== undefined;
		var useVertexColors = geometry.attributes.color !== undefined;
		var useFlatShading = geometry.attributes.normal === undefined;
		var useSkinning = mesh.isSkinnedMesh === true;
		var useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
		var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

		if ( mesh.isPoints ) {

			var cacheKey = 'PointsMaterial:' + material.uuid;

			var pointsMaterial = this.cache.get( cacheKey );

			if ( ! pointsMaterial ) {

				pointsMaterial = new THREE.PointsMaterial();
				THREE.Material.prototype.copy.call( pointsMaterial, material );
				pointsMaterial.color.copy( material.color );
				pointsMaterial.map = material.map;
				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

				this.cache.add( cacheKey, pointsMaterial );

			}

			material = pointsMaterial;

		} else if ( mesh.isLine ) {

			var cacheKey = 'LineBasicMaterial:' + material.uuid;

			var lineMaterial = this.cache.get( cacheKey );

			if ( ! lineMaterial ) {

				lineMaterial = new THREE.LineBasicMaterial();
				THREE.Material.prototype.copy.call( lineMaterial, material );
				lineMaterial.color.copy( material.color );

				this.cache.add( cacheKey, lineMaterial );

			}

			material = lineMaterial;

		}

		// Clone the material if it will be modified
		if ( useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

			var cacheKey = 'ClonedMaterial:' + material.uuid + ':';

			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
			if ( useSkinning ) cacheKey += 'skinning:';
			if ( useVertexTangents ) cacheKey += 'vertex-tangents:';
			if ( useVertexColors ) cacheKey += 'vertex-colors:';
			if ( useFlatShading ) cacheKey += 'flat-shading:';
			if ( useMorphTargets ) cacheKey += 'morph-targets:';
			if ( useMorphNormals ) cacheKey += 'morph-normals:';

			var cachedMaterial = this.cache.get( cacheKey );

			if ( ! cachedMaterial ) {

				cachedMaterial = material.isGLTFSpecularGlossinessMaterial
					? extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].cloneMaterial( material )
					: material.clone();

				if ( useSkinning ) cachedMaterial.skinning = true;
				if ( useVertexTangents ) cachedMaterial.vertexTangents = true;
				if ( useVertexColors ) cachedMaterial.vertexColors = THREE.VertexColors;
				if ( useFlatShading ) cachedMaterial.flatShading = true;
				if ( useMorphTargets ) cachedMaterial.morphTargets = true;
				if ( useMorphNormals ) cachedMaterial.morphNormals = true;

				this.cache.add( cacheKey, cachedMaterial );

			}

			material = cachedMaterial;

		}

		// workarounds for mesh and geometry

		if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

			geometry.setAttribute( 'uv2', new THREE.BufferAttribute( geometry.attributes.uv.array, 2 ) );

		}

		if ( material.isGLTFSpecularGlossinessMaterial ) {

			// for GLTFSpecularGlossinessMaterial(ShaderMaterial) uniforms runtime update
			mesh.onBeforeRender = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].refreshUniforms;

		}

		// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
		if ( material.normalScale && ! useVertexTangents ) {

			material.normalScale.y = - material.normalScale.y;

		}

		mesh.material = material;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<THREE.Material>}
	 */
	GLTFParser.prototype.loadMaterial = function ( materialIndex ) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;
		var materialDef = json.materials[ materialIndex ];

		var materialType;
		var materialParams = {};
		var materialExtensions = materialDef.extensions || {};

		var pending = [];

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

			var sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
			materialType = sgExtension.getMaterialType();
			pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

		} else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

			var kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
			materialType = kmuExtension.getMaterialType();
			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

		} else {

			// Specification:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

			materialType = THREE.MeshStandardMaterial;

			var metallicRoughness = materialDef.pbrMetallicRoughness || {};

			materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
			materialParams.opacity = 1.0;

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

			}

		}

		if ( materialDef.doubleSided === true ) {

			materialParams.side = THREE.DoubleSide;

		}

		var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

		if ( alphaMode === ALPHA_MODES.BLEND ) {

			materialParams.transparent = true;

		} else {

			materialParams.transparent = false;

			if ( alphaMode === ALPHA_MODES.MASK ) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

			}

		}

		if ( materialDef.normalTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

			materialParams.normalScale = new THREE.Vector2( 1, 1 );

			if ( materialDef.normalTexture.scale !== undefined ) {

				materialParams.normalScale.set( materialDef.normalTexture.scale, materialDef.normalTexture.scale );

			}

		}

		if ( materialDef.occlusionTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

			if ( materialDef.occlusionTexture.strength !== undefined ) {

				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

			}

		}

		if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

		}

		if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

		}

		return Promise.all( pending ).then( function () {

			var material;

			if ( materialType === THREE.ShaderMaterial ) {

				material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

			} else {

				material = new materialType( materialParams );

			}

			if ( materialDef.name !== undefined ) material.name = materialDef.name;

			// baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
			if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
			if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;
			if ( material.specularMap ) material.specularMap.encoding = THREE.sRGBEncoding;

			assignExtrasToUserData( material, materialDef );

			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

			return material;

		} );

	};

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 */
	function computeBounds( geometry, primitiveDef, parser ) {

		var attributes = primitiveDef.attributes;

		var box = new THREE.Box3();

		if ( attributes.POSITION !== undefined ) {

			var accessor = parser.json.accessors[ attributes.POSITION ];

			var min = accessor.min;
			var max = accessor.max;

			// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

			if ( min !== undefined && max !== undefined ) {

				box.set(
					new THREE.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
					new THREE.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] ) );

			} else {

				console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

				return;

			}

		} else {

			return;

		}

		var targets = primitiveDef.targets;

		if ( targets !== undefined ) {

			var vector = new THREE.Vector3();

			for ( var i = 0, il = targets.length; i < il; i ++ ) {

				var target = targets[ i ];

				if ( target.POSITION !== undefined ) {

					var accessor = parser.json.accessors[ target.POSITION ];
					var min = accessor.min;
					var max = accessor.max;

					// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

					if ( min !== undefined && max !== undefined ) {

						// we need to get max of absolute components because target weight is [-1,1]
						vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
						vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
						vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );

						box.expandByVector( vector );

					} else {

						console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

					}

				}

			}

		}

		geometry.boundingBox = box;

		var sphere = new THREE.Sphere();

		box.getCenter( sphere.center );
		sphere.radius = box.min.distanceTo( box.max ) / 2;

		geometry.boundingSphere = sphere;

	}

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

		var attributes = primitiveDef.attributes;

		var pending = [];

		function assignAttributeAccessor( accessorIndex, attributeName ) {

			return parser.getDependency( 'accessor', accessorIndex )
				.then( function ( accessor ) {

					geometry.setAttribute( attributeName, accessor );

				} );

		}

		for ( var gltfAttributeName in attributes ) {

			var threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

			// Skip attributes already provided by e.g. Draco extension.
			if ( threeAttributeName in geometry.attributes ) continue;

			pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

		}

		if ( primitiveDef.indices !== undefined && ! geometry.index ) {

			var accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

				geometry.setIndex( accessor );

			} );

			pending.push( accessor );

		}

		assignExtrasToUserData( geometry, primitiveDef );

		computeBounds( geometry, primitiveDef, parser );

		return Promise.all( pending ).then( function () {

			return primitiveDef.targets !== undefined
				? addMorphTargets( geometry, primitiveDef.targets, parser )
				: geometry;

		} );

	}

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Number} drawMode
	 * @return {THREE.BufferGeometry}
	 */
	function toTrianglesDrawMode( geometry, drawMode ) {

		var index = geometry.getIndex();

		// generate index if not present

		if ( index === null ) {

			var indices = [];

			var position = geometry.getAttribute( 'position' );

			if ( position !== undefined ) {

				for ( var i = 0; i < position.count; i ++ ) {

					indices.push( i );

				}

				geometry.setIndex( indices );
				index = geometry.getIndex();

			} else {

				console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
				return geometry;

			}

		}

		//

		var numberOfTriangles = index.count - 2;
		var newIndices = [];

		if ( drawMode === THREE.TriangleFanDrawMode ) {

			// gl.TRIANGLE_FAN

			for ( var i = 1; i <= numberOfTriangles; i ++ ) {

				newIndices.push( index.getX( 0 ) );
				newIndices.push( index.getX( i ) );
				newIndices.push( index.getX( i + 1 ) );

			}

		} else {

			// gl.TRIANGLE_STRIP

			for ( var i = 0; i < numberOfTriangles; i ++ ) {

				if ( i % 2 === 0 ) {

					newIndices.push( index.getX( i ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i + 2 ) );


				} else {

					newIndices.push( index.getX( i + 2 ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i ) );

				}

			}

		}

		if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

			console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

		}

		// build final geometry

		var newGeometry = geometry.clone();
		newGeometry.setIndex( newIndices );

		return newGeometry;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<THREE.BufferGeometry>>}
	 */
	GLTFParser.prototype.loadGeometries = function ( primitives ) {

		var parser = this;
		var extensions = this.extensions;
		var cache = this.primitiveCache;

		function createDracoPrimitive( primitive ) {

			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
				.decodePrimitive( primitive, parser )
				.then( function ( geometry ) {

					return addPrimitiveAttributes( geometry, primitive, parser );

				} );

		}

		var pending = [];

		for ( var i = 0, il = primitives.length; i < il; i ++ ) {

			var primitive = primitives[ i ];
			var cacheKey = createPrimitiveKey( primitive );

			// See if we've already created this geometry
			var cached = cache[ cacheKey ];

			if ( cached ) {

				// Use the cached geometry if it exists
				pending.push( cached.promise );

			} else {

				var geometryPromise;

				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

					// Use DRACO geometry if available
					geometryPromise = createDracoPrimitive( primitive );

				} else {

					// Otherwise create a new geometry
					geometryPromise = addPrimitiveAttributes( new THREE.BufferGeometry(), primitive, parser );

				}

				// Cache this geometry
				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

				pending.push( geometryPromise );

			}

		}

		return Promise.all( pending );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
	 */
	GLTFParser.prototype.loadMesh = function ( meshIndex ) {

		var parser = this;
		var json = this.json;

		var meshDef = json.meshes[ meshIndex ];
		var primitives = meshDef.primitives;

		var pending = [];

		for ( var i = 0, il = primitives.length; i < il; i ++ ) {

			var material = primitives[ i ].material === undefined
				? createDefaultMaterial( this.cache )
				: this.getDependency( 'material', primitives[ i ].material );

			pending.push( material );

		}

		pending.push( parser.loadGeometries( primitives ) );

		return Promise.all( pending ).then( function ( results ) {

			var materials = results.slice( 0, results.length - 1 );
			var geometries = results[ results.length - 1 ];

			var meshes = [];

			for ( var i = 0, il = geometries.length; i < il; i ++ ) {

				var geometry = geometries[ i ];
				var primitive = primitives[ i ];

				// 1. create Mesh

				var mesh;

				var material = materials[ i ];

				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
					primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
					primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
					primitive.mode === undefined ) {

					// .isSkinnedMesh isn't in glTF spec. See .markDefs()
					mesh = meshDef.isSkinnedMesh === true
						? new THREE.SkinnedMesh( geometry, material )
						: new THREE.Mesh( geometry, material );

					if ( mesh.isSkinnedMesh === true && ! mesh.geometry.attributes.skinWeight.normalized ) {

						// we normalize floating point skin weight array to fix malformed assets (see #15319)
						// it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
						mesh.normalizeSkinWeights();

					}

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleStripDrawMode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleFanDrawMode );

					}

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

					mesh = new THREE.LineSegments( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

					mesh = new THREE.Line( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

					mesh = new THREE.LineLoop( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

					mesh = new THREE.Points( geometry, material );

				} else {

					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

				}

				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

					updateMorphTargets( mesh, meshDef );

				}

				mesh.name = meshDef.name || ( 'mesh_' + meshIndex );

				if ( geometries.length > 1 ) mesh.name += '_' + i;

				assignExtrasToUserData( mesh, meshDef );

				parser.assignFinalMaterial( mesh );

				meshes.push( mesh );

			}

			if ( meshes.length === 1 ) {

				return meshes[ 0 ];

			}

			var group = new THREE.Group();

			for ( var i = 0, il = meshes.length; i < il; i ++ ) {

				group.add( meshes[ i ] );

			}

			return group;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	GLTFParser.prototype.loadCamera = function ( cameraIndex ) {

		var camera;
		var cameraDef = this.json.cameras[ cameraIndex ];
		var params = cameraDef[ cameraDef.type ];

		if ( ! params ) {

			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
			return;

		}

		if ( cameraDef.type === 'perspective' ) {

			camera = new THREE.PerspectiveCamera( THREE.Math.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

		} else if ( cameraDef.type === 'orthographic' ) {

			camera = new THREE.OrthographicCamera( params.xmag / - 2, params.xmag / 2, params.ymag / 2, params.ymag / - 2, params.znear, params.zfar );

		}

		if ( cameraDef.name !== undefined ) camera.name = cameraDef.name;

		assignExtrasToUserData( camera, cameraDef );

		return Promise.resolve( camera );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */
	GLTFParser.prototype.loadSkin = function ( skinIndex ) {

		var skinDef = this.json.skins[ skinIndex ];

		var skinEntry = { joints: skinDef.joints };

		if ( skinDef.inverseBindMatrices === undefined ) {

			return Promise.resolve( skinEntry );

		}

		return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

			skinEntry.inverseBindMatrices = accessor;

			return skinEntry;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<THREE.AnimationClip>}
	 */
	GLTFParser.prototype.loadAnimation = function ( animationIndex ) {

		var json = this.json;

		var animationDef = json.animations[ animationIndex ];

		var pendingNodes = [];
		var pendingInputAccessors = [];
		var pendingOutputAccessors = [];
		var pendingSamplers = [];
		var pendingTargets = [];

		for ( var i = 0, il = animationDef.channels.length; i < il; i ++ ) {

			var channel = animationDef.channels[ i ];
			var sampler = animationDef.samplers[ channel.sampler ];
			var target = channel.target;
			var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
			var input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
			var output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

			pendingNodes.push( this.getDependency( 'node', name ) );
			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
			pendingSamplers.push( sampler );
			pendingTargets.push( target );

		}

		return Promise.all( [

			Promise.all( pendingNodes ),
			Promise.all( pendingInputAccessors ),
			Promise.all( pendingOutputAccessors ),
			Promise.all( pendingSamplers ),
			Promise.all( pendingTargets )

		] ).then( function ( dependencies ) {

			var nodes = dependencies[ 0 ];
			var inputAccessors = dependencies[ 1 ];
			var outputAccessors = dependencies[ 2 ];
			var samplers = dependencies[ 3 ];
			var targets = dependencies[ 4 ];

			var tracks = [];

			for ( var i = 0, il = nodes.length; i < il; i ++ ) {

				var node = nodes[ i ];
				var inputAccessor = inputAccessors[ i ];
				var outputAccessor = outputAccessors[ i ];
				var sampler = samplers[ i ];
				var target = targets[ i ];

				if ( node === undefined ) continue;

				node.updateMatrix();
				node.matrixAutoUpdate = true;

				var TypedKeyframeTrack;

				switch ( PATH_PROPERTIES[ target.path ] ) {

					case PATH_PROPERTIES.weights:

						TypedKeyframeTrack = THREE.NumberKeyframeTrack;
						break;

					case PATH_PROPERTIES.rotation:

						TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
						break;

					case PATH_PROPERTIES.position:
					case PATH_PROPERTIES.scale:
					default:

						TypedKeyframeTrack = THREE.VectorKeyframeTrack;
						break;

				}

				var targetName = node.name ? node.name : node.uuid;

				var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : THREE.InterpolateLinear;

				var targetNames = [];

				if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

					// Node may be a THREE.Group (glTF mesh with several primitives) or a THREE.Mesh.
					node.traverse( function ( object ) {

						if ( object.isMesh === true && object.morphTargetInfluences ) {

							targetNames.push( object.name ? object.name : object.uuid );

						}

					} );

				} else {

					targetNames.push( targetName );

				}

				var outputArray = outputAccessor.array;

				if ( outputAccessor.normalized ) {

					var scale;

					if ( outputArray.constructor === Int8Array ) {

						scale = 1 / 127;

					} else if ( outputArray.constructor === Uint8Array ) {

						scale = 1 / 255;

					} else if ( outputArray.constructor == Int16Array ) {

						scale = 1 / 32767;

					} else if ( outputArray.constructor === Uint16Array ) {

						scale = 1 / 65535;

					} else {

						throw new Error( 'THREE.GLTFLoader: Unsupported output accessor component type.' );

					}

					var scaled = new Float32Array( outputArray.length );

					for ( var j = 0, jl = outputArray.length; j < jl; j ++ ) {

						scaled[ j ] = outputArray[ j ] * scale;

					}

					outputArray = scaled;

				}

				for ( var j = 0, jl = targetNames.length; j < jl; j ++ ) {

					var track = new TypedKeyframeTrack(
						targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
						inputAccessor.array,
						outputArray,
						interpolation
					);

					// Override interpolation with custom factory method.
					if ( sampler.interpolation === 'CUBICSPLINE' ) {

						track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

							// A CUBICSPLINE keyframe in glTF has three output values for each input value,
							// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
							// must be divided by three to get the interpolant's sampleSize argument.

							return new GLTFCubicSplineInterpolant( this.times, this.values, this.getValueSize() / 3, result );

						};

						// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
						track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

					}

					tracks.push( track );

				}

			}

			var name = animationDef.name !== undefined ? animationDef.name : 'animation_' + animationIndex;

			return new THREE.AnimationClip( name, undefined, tracks );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<THREE.Object3D>}
	 */
	GLTFParser.prototype.loadNode = function ( nodeIndex ) {

		var json = this.json;
		var extensions = this.extensions;
		var parser = this;

		var meshReferences = json.meshReferences;
		var meshUses = json.meshUses;

		var nodeDef = json.nodes[ nodeIndex ];

		return ( function () {

			var pending = [];

			if ( nodeDef.mesh !== undefined ) {

				pending.push( parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

					var node;

					if ( meshReferences[ nodeDef.mesh ] > 1 ) {

						var instanceNum = meshUses[ nodeDef.mesh ] ++;

						node = mesh.clone();
						node.name += '_instance_' + instanceNum;

						// onBeforeRender copy for Specular-Glossiness
						node.onBeforeRender = mesh.onBeforeRender;

						for ( var i = 0, il = node.children.length; i < il; i ++ ) {

							node.children[ i ].name += '_instance_' + instanceNum;
							node.children[ i ].onBeforeRender = mesh.children[ i ].onBeforeRender;

						}

					} else {

						node = mesh;

					}

					// if weights are provided on the node, override weights on the mesh.
					if ( nodeDef.weights !== undefined ) {

						node.traverse( function ( o ) {

							if ( ! o.isMesh ) return;

							for ( var i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

								o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

							}

						} );

					}

					return node;

				} ) );

			}

			if ( nodeDef.camera !== undefined ) {

				pending.push( parser.getDependency( 'camera', nodeDef.camera ) );

			}

			if ( nodeDef.extensions
				&& nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ]
				&& nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light !== undefined ) {

				pending.push( parser.getDependency( 'light', nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light ) );

			}

			return Promise.all( pending );

		}() ).then( function ( objects ) {

			var node;

			// .isBone isn't in glTF spec. See .markDefs
			if ( nodeDef.isBone === true ) {

				node = new THREE.Bone();

			} else if ( objects.length > 1 ) {

				node = new THREE.Group();

			} else if ( objects.length === 1 ) {

				node = objects[ 0 ];

			} else {

				node = new THREE.Object3D();

			}

			if ( node !== objects[ 0 ] ) {

				for ( var i = 0, il = objects.length; i < il; i ++ ) {

					node.add( objects[ i ] );

				}

			}

			if ( nodeDef.name !== undefined ) {

				node.userData.name = nodeDef.name;
				node.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );

			}

			assignExtrasToUserData( node, nodeDef );

			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

			if ( nodeDef.matrix !== undefined ) {

				var matrix = new THREE.Matrix4();
				matrix.fromArray( nodeDef.matrix );
				node.applyMatrix( matrix );

			} else {

				if ( nodeDef.translation !== undefined ) {

					node.position.fromArray( nodeDef.translation );

				}

				if ( nodeDef.rotation !== undefined ) {

					node.quaternion.fromArray( nodeDef.rotation );

				}

				if ( nodeDef.scale !== undefined ) {

					node.scale.fromArray( nodeDef.scale );

				}

			}

			return node;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<THREE.Scene>}
	 */
	GLTFParser.prototype.loadScene = function () {

		// scene node hierachy builder

		function buildNodeHierachy( nodeId, parentObject, json, parser ) {

			var nodeDef = json.nodes[ nodeId ];

			return parser.getDependency( 'node', nodeId ).then( function ( node ) {

				if ( nodeDef.skin === undefined ) return node;

				// build skeleton here as well

				var skinEntry;

				return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

					skinEntry = skin;

					var pendingJoints = [];

					for ( var i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

						pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

					}

					return Promise.all( pendingJoints );

				} ).then( function ( jointNodes ) {

					node.traverse( function ( mesh ) {

						if ( ! mesh.isMesh ) return;

						var bones = [];
						var boneInverses = [];

						for ( var j = 0, jl = jointNodes.length; j < jl; j ++ ) {

							var jointNode = jointNodes[ j ];

							if ( jointNode ) {

								bones.push( jointNode );

								var mat = new THREE.Matrix4();

								if ( skinEntry.inverseBindMatrices !== undefined ) {

									mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

								}

								boneInverses.push( mat );

							} else {

								console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

							}

						}

						mesh.bind( new THREE.Skeleton( bones, boneInverses ), mesh.matrixWorld );

					} );

					return node;

				} );

			} ).then( function ( node ) {

				// build node hierachy

				parentObject.add( node );

				var pending = [];

				if ( nodeDef.children ) {

					var children = nodeDef.children;

					for ( var i = 0, il = children.length; i < il; i ++ ) {

						var child = children[ i ];
						pending.push( buildNodeHierachy( child, node, json, parser ) );

					}

				}

				return Promise.all( pending );

			} );

		}

		return function loadScene( sceneIndex ) {

			var json = this.json;
			var extensions = this.extensions;
			var sceneDef = this.json.scenes[ sceneIndex ];
			var parser = this;

			var scene = new THREE.Scene();
			if ( sceneDef.name !== undefined ) scene.name = sceneDef.name;

			assignExtrasToUserData( scene, sceneDef );

			if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

			var nodeIds = sceneDef.nodes || [];

			var pending = [];

			for ( var i = 0, il = nodeIds.length; i < il; i ++ ) {

				pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

			}

			return Promise.all( pending ).then( function () {

				return scene;

			} );

		};

	}();

	return GLTFLoader;

} )();

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author ScieCode / http://github.com/sciecode
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

THREE.OrbitControls = function ( object, domElement ) {

	if ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter "domElement" is now mandatory.' );
	if ( domElement === document ) console.error( 'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.' );

	this.object = object;
	this.domElement = domElement;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.05;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.panSpeed = 1.0;
	this.screenSpacePanning = false; // if true, pan in screen-space
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };

	// Touch fingers
	this.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;

	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;

	};

	this.saveState = function () {

		scope.target0.copy( scope.target );
		scope.position0.copy( scope.object.position );
		scope.zoom0 = scope.object.zoom;

	};

	this.reset = function () {

		scope.target.copy( scope.target0 );
		scope.object.position.copy( scope.position0 );
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent( changeEvent );

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy( position ).sub( scope.target );

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion( quat );

			// angle from z-axis around y-axis
			spherical.setFromVector3( offset );

			if ( scope.autoRotate && state === STATE.NONE ) {

				rotateLeft( getAutoRotationAngle() );

			}

			if ( scope.enableDamping ) {

				spherical.theta += sphericalDelta.theta * scope.dampingFactor;
				spherical.phi += sphericalDelta.phi * scope.dampingFactor;

			} else {

				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;

			}

			// restrict theta to be between desired limits
			spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

			// restrict phi to be between desired limits
			spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

			// move target to panned location

			if ( scope.enableDamping === true ) {

				scope.target.addScaledVector( panOffset, scope.dampingFactor );

			} else {

				scope.target.add( panOffset );

			}

			offset.setFromSpherical( spherical );

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion( quatInverse );

			position.copy( scope.target ).add( offset );

			scope.object.lookAt( scope.target );

			if ( scope.enableDamping === true ) {

				sphericalDelta.theta *= ( 1 - scope.dampingFactor );
				sphericalDelta.phi *= ( 1 - scope.dampingFactor );

				panOffset.multiplyScalar( 1 - scope.dampingFactor );

			} else {

				sphericalDelta.set( 0, 0, 0 );

				panOffset.set( 0, 0, 0 );

			}

			scale = 1;

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if ( zoomChanged ||
				lastPosition.distanceToSquared( scope.object.position ) > EPS ||
				8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

				scope.dispatchEvent( changeEvent );

				lastPosition.copy( scope.object.position );
				lastQuaternion.copy( scope.object.quaternion );
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function () {

		scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
		scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.domElement.removeEventListener( 'keydown', onKeyDown, false );

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = {
		NONE: - 1,
		ROTATE: 0,
		DOLLY: 1,
		PAN: 2,
		TOUCH_ROTATE: 3,
		TOUCH_PAN: 4,
		TOUCH_DOLLY_PAN: 5,
		TOUCH_DOLLY_ROTATE: 6
	};

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function rotateLeft( angle ) {

		sphericalDelta.theta -= angle;

	}

	function rotateUp( angle ) {

		sphericalDelta.phi -= angle;

	}

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
			v.multiplyScalar( - distance );

			panOffset.add( v );

		};

	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp( distance, objectMatrix ) {

			if ( scope.screenSpacePanning === true ) {

				v.setFromMatrixColumn( objectMatrix, 1 );

			} else {

				v.setFromMatrixColumn( objectMatrix, 0 );
				v.crossVectors( scope.object.up, v );

			}

			v.multiplyScalar( distance );

			panOffset.add( v );

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan( deltaX, deltaY ) {

			var element = scope.domElement;

			if ( scope.object.isPerspectiveCamera ) {

				// perspective
				var position = scope.object.position;
				offset.copy( position ).sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we use only clientHeight here so aspect ratio does not distort speed
				panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
				panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

			} else if ( scope.object.isOrthographicCamera ) {

				// orthographic
				panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
				panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

			} else {

				// camera neither orthographic nor perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
				scope.enablePan = false;

			}

		};

	}();

	function dollyIn( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale /= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	function dollyOut( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale *= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate( event ) {

		rotateStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownDolly( event ) {

		dollyStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownPan( event ) {

		panStart.set( event.clientX, event.clientY );

	}

	function handleMouseMoveRotate( event ) {

		rotateEnd.set( event.clientX, event.clientY );

		rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

		var element = scope.domElement;

		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleMouseMoveDolly( event ) {

		dollyEnd.set( event.clientX, event.clientY );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyIn( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyOut( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleMouseMovePan( event ) {

		panEnd.set( event.clientX, event.clientY );

		panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleMouseUp( /*event*/ ) {

		// no-op

	}

	function handleMouseWheel( event ) {

		if ( event.deltaY < 0 ) {

			dollyOut( getZoomScale() );

		} else if ( event.deltaY > 0 ) {

			dollyIn( getZoomScale() );

		}

		scope.update();

	}

	function handleKeyDown( event ) {

		var needsUpdate = false;

		switch ( event.keyCode ) {

			case scope.keys.UP:
				pan( 0, scope.keyPanSpeed );
				needsUpdate = true;
				break;

			case scope.keys.BOTTOM:
				pan( 0, - scope.keyPanSpeed );
				needsUpdate = true;
				break;

			case scope.keys.LEFT:
				pan( scope.keyPanSpeed, 0 );
				needsUpdate = true;
				break;

			case scope.keys.RIGHT:
				pan( - scope.keyPanSpeed, 0 );
				needsUpdate = true;
				break;

		}

		if ( needsUpdate ) {

			// prevent the browser from scrolling on cursor keys
			event.preventDefault();

			scope.update();

		}


	}

	function handleTouchStartRotate( event ) {

		if ( event.touches.length == 1 ) {

			rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			rotateStart.set( x, y );

		}

	}

	function handleTouchStartPan( event ) {

		if ( event.touches.length == 1 ) {

			panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			panStart.set( x, y );

		}

	}

	function handleTouchStartDolly( event ) {

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyStart.set( 0, distance );

	}

	function handleTouchStartDollyPan( event ) {

		if ( scope.enableZoom ) handleTouchStartDolly( event );

		if ( scope.enablePan ) handleTouchStartPan( event );

	}

	function handleTouchStartDollyRotate( event ) {

		if ( scope.enableZoom ) handleTouchStartDolly( event );

		if ( scope.enableRotate ) handleTouchStartRotate( event );

	}

	function handleTouchMoveRotate( event ) {

		if ( event.touches.length == 1 ) {

			rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			rotateEnd.set( x, y );

		}

		rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

		var element = scope.domElement;

		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

		rotateStart.copy( rotateEnd );

	}

	function handleTouchMovePan( event ) {

		if ( event.touches.length == 1 ) {

			panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			panEnd.set( x, y );

		}

		panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

	}

	function handleTouchMoveDolly( event ) {

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyEnd.set( 0, distance );

		dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

		dollyIn( dollyDelta.y );

		dollyStart.copy( dollyEnd );

	}

	function handleTouchMoveDollyPan( event ) {

		if ( scope.enableZoom ) handleTouchMoveDolly( event );

		if ( scope.enablePan ) handleTouchMovePan( event );

	}

	function handleTouchMoveDollyRotate( event ) {

		if ( scope.enableZoom ) handleTouchMoveDolly( event );

		if ( scope.enableRotate ) handleTouchMoveRotate( event );

	}

	function handleTouchEnd( /*event*/ ) {

		// no-op

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		// Prevent the browser from scrolling.

		event.preventDefault();

		// Manually set the focus since calling preventDefault above
		// prevents the browser from setting it automatically.

		scope.domElement.focus ? scope.domElement.focus() : window.focus();

		switch ( event.button ) {

			case 0:

				switch ( scope.mouseButtons.LEFT ) {

					case THREE.MOUSE.ROTATE:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						} else {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						}

						break;

					case THREE.MOUSE.PAN:

						if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

							if ( scope.enableRotate === false ) return;

							handleMouseDownRotate( event );

							state = STATE.ROTATE;

						} else {

							if ( scope.enablePan === false ) return;

							handleMouseDownPan( event );

							state = STATE.PAN;

						}

						break;

					default:

						state = STATE.NONE;

				}

				break;


			case 1:

				switch ( scope.mouseButtons.MIDDLE ) {

					case THREE.MOUSE.DOLLY:

						if ( scope.enableZoom === false ) return;

						handleMouseDownDolly( event );

						state = STATE.DOLLY;

						break;


					default:

						state = STATE.NONE;

				}

				break;

			case 2:

				switch ( scope.mouseButtons.RIGHT ) {

					case THREE.MOUSE.ROTATE:

						if ( scope.enableRotate === false ) return;

						handleMouseDownRotate( event );

						state = STATE.ROTATE;

						break;

					case THREE.MOUSE.PAN:

						if ( scope.enablePan === false ) return;

						handleMouseDownPan( event );

						state = STATE.PAN;

						break;

					default:

						state = STATE.NONE;

				}

				break;

		}

		if ( state !== STATE.NONE ) {

			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( startEvent );

		}

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( state ) {

			case STATE.ROTATE:

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

				break;

			case STATE.DOLLY:

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

				break;

			case STATE.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

				break;

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		handleMouseUp( event );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

		event.preventDefault();
		event.stopPropagation();

		scope.dispatchEvent( startEvent );

		handleMouseWheel( event );

		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

		handleKeyDown( event );

	}

	function onTouchStart( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( event.touches.length ) {

			case 1:

				switch ( scope.touches.ONE ) {

					case THREE.TOUCH.ROTATE:

						if ( scope.enableRotate === false ) return;

						handleTouchStartRotate( event );

						state = STATE.TOUCH_ROTATE;

						break;

					case THREE.TOUCH.PAN:

						if ( scope.enablePan === false ) return;

						handleTouchStartPan( event );

						state = STATE.TOUCH_PAN;

						break;

					default:

						state = STATE.NONE;

				}

				break;

			case 2:

				switch ( scope.touches.TWO ) {

					case THREE.TOUCH.DOLLY_PAN:

						if ( scope.enableZoom === false && scope.enablePan === false ) return;

						handleTouchStartDollyPan( event );

						state = STATE.TOUCH_DOLLY_PAN;

						break;

					case THREE.TOUCH.DOLLY_ROTATE:

						if ( scope.enableZoom === false && scope.enableRotate === false ) return;

						handleTouchStartDollyRotate( event );

						state = STATE.TOUCH_DOLLY_ROTATE;

						break;

					default:

						state = STATE.NONE;

				}

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			scope.dispatchEvent( startEvent );

		}

	}

	function onTouchMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( state ) {

			case STATE.TOUCH_ROTATE:

				if ( scope.enableRotate === false ) return;

				handleTouchMoveRotate( event );

				scope.update();

				break;

			case STATE.TOUCH_PAN:

				if ( scope.enablePan === false ) return;

				handleTouchMovePan( event );

				scope.update();

				break;

			case STATE.TOUCH_DOLLY_PAN:

				if ( scope.enableZoom === false && scope.enablePan === false ) return;

				handleTouchMoveDollyPan( event );

				scope.update();

				break;

			case STATE.TOUCH_DOLLY_ROTATE:

				if ( scope.enableZoom === false && scope.enableRotate === false ) return;

				handleTouchMoveDollyRotate( event );

				scope.update();

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd( event ) {

		if ( scope.enabled === false ) return;

		handleTouchEnd( event );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onContextMenu( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

	}

	//

	scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

	scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
	scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

	scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
	scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
	scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

	scope.domElement.addEventListener( 'keydown', onKeyDown, false );

	// make sure element can receive keys.

	if ( scope.domElement.tabIndex === - 1 ) {

		scope.domElement.tabIndex = 0;

	}

	// force an update at start

	this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move

THREE.MapControls = function ( object, domElement ) {

	THREE.OrbitControls.call( this, object, domElement );

	this.mouseButtons.LEFT = THREE.MOUSE.PAN;
	this.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;

	this.touches.ONE = THREE.TOUCH.PAN;
	this.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;

};

THREE.MapControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.MapControls.prototype.constructor = THREE.MapControls;

// https://d3js.org v5.15.0 Copyright 2019 Mike Bostock
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).d3=t.d3||{})}(this,function(t){"use strict";function n(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function e(t){var e;return 1===t.length&&(e=t,t=function(t,r){return n(e(t),r)}),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}}var r=e(n),i=r.right,o=r.left;function a(t,n){return[t,n]}function u(t){return null===t?NaN:+t}function c(t,n){var e,r,i=t.length,o=0,a=-1,c=0,f=0;if(null==n)for(;++a<i;)isNaN(e=u(t[a]))||(f+=(r=e-c)*(e-(c+=r/++o)));else for(;++a<i;)isNaN(e=u(n(t[a],a,t)))||(f+=(r=e-c)*(e-(c+=r/++o)));if(o>1)return f/(o-1)}function f(t,n){var e=c(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,o=t.length,a=-1;if(null==n){for(;++a<o;)if(null!=(e=t[a])&&e>=e)for(r=i=e;++a<o;)null!=(e=t[a])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++a<o;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=i=e;++a<o;)null!=(e=n(t[a],a,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]}var l=Array.prototype,h=l.slice,d=l.map;function p(t){return function(){return t}}function v(t){return t}function g(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var y=Math.sqrt(50),_=Math.sqrt(10),b=Math.sqrt(2);function m(t,n,e){var r,i,o,a,u=-1;if(e=+e,(t=+t)===(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(a=x(t,n,e))||!isFinite(a))return[];if(a>0)for(t=Math.ceil(t/a),n=Math.floor(n/a),o=new Array(i=Math.ceil(n-t+1));++u<i;)o[u]=(t+u)*a;else for(t=Math.floor(t*a),n=Math.ceil(n*a),o=new Array(i=Math.ceil(t-n+1));++u<i;)o[u]=(t-u)/a;return r&&o.reverse(),o}function x(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=y?10:o>=_?5:o>=b?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=y?10:o>=_?5:o>=b?2:1)}function w(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=y?i*=10:o>=_?i*=5:o>=b&&(i*=2),n<t?-i:i}function M(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function N(t,n,e){if(null==e&&(e=u),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),a=+e(t[o],o,t);return a+(+e(t[o+1],o+1,t)-a)*(i-o)}}function T(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r}function A(t){for(var n,e,r,i=t.length,o=-1,a=0;++o<i;)a+=t[o].length;for(e=new Array(a);--i>=0;)for(n=(r=t[i]).length;--n>=0;)e[--a]=r[n];return e}function S(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r}function k(t){if(!(i=t.length))return[];for(var n=-1,e=S(t,E),r=new Array(e);++n<e;)for(var i,o=-1,a=r[n]=new Array(i);++o<i;)a[o]=t[o][n];return r}function E(t){return t.length}var C=Array.prototype.slice;function P(t){return t}var z=1,R=2,D=3,q=4,L=1e-6;function U(t){return"translate("+(t+.5)+",0)"}function O(t){return"translate(0,"+(t+.5)+")"}function B(){return!this.__axis}function F(t,n){var e=[],r=null,i=null,o=6,a=6,u=3,c=t===z||t===q?-1:1,f=t===q||t===R?"x":"y",s=t===z||t===D?U:O;function l(l){var h=null==r?n.ticks?n.ticks.apply(n,e):n.domain():r,d=null==i?n.tickFormat?n.tickFormat.apply(n,e):P:i,p=Math.max(o,0)+u,v=n.range(),g=+v[0]+.5,y=+v[v.length-1]+.5,_=(n.bandwidth?function(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}:function(t){return function(n){return+t(n)}})(n.copy()),b=l.selection?l.selection():l,m=b.selectAll(".domain").data([null]),x=b.selectAll(".tick").data(h,n).order(),w=x.exit(),M=x.enter().append("g").attr("class","tick"),N=x.select("line"),T=x.select("text");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),x=x.merge(M),N=N.merge(M.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),T=T.merge(M.append("text").attr("fill","currentColor").attr(f,c*p).attr("dy",t===z?"0em":t===D?"0.71em":"0.32em")),l!==b&&(m=m.transition(l),x=x.transition(l),N=N.transition(l),T=T.transition(l),w=w.transition(l).attr("opacity",L).attr("transform",function(t){return isFinite(t=_(t))?s(t):this.getAttribute("transform")}),M.attr("opacity",L).attr("transform",function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:_(t))})),w.remove(),m.attr("d",t===q||t==R?a?"M"+c*a+","+g+"H0.5V"+y+"H"+c*a:"M0.5,"+g+"V"+y:a?"M"+g+","+c*a+"V0.5H"+y+"V"+c*a:"M"+g+",0.5H"+y),x.attr("opacity",1).attr("transform",function(t){return s(_(t))}),N.attr(f+"2",c*o),T.attr(f,c*p).text(d),b.filter(B).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===R?"start":t===q?"end":"middle"),b.each(function(){this.__axis=_})}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return e=C.call(arguments),l},l.tickArguments=function(t){return arguments.length?(e=null==t?[]:C.call(t),l):e.slice()},l.tickValues=function(t){return arguments.length?(r=null==t?null:C.call(t),l):r&&r.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=a=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(a=+t,l):a},l.tickPadding=function(t){return arguments.length?(u=+t,l):u},l}var Y={value:function(){}};function I(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new H(r)}function H(t){this._=t}function j(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function V(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function X(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Y,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}H.prototype=I.prototype={constructor:H,on:function(t,n){var e,r=this._,i=j(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=X(r[e],t.name,n);else if(null==n)for(e in r)r[e]=X(r[e],t.name,null);return this}for(;++o<a;)if((e=(t=i[o]).type)&&(e=V(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new H(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var G="http://www.w3.org/1999/xhtml",$={svg:"http://www.w3.org/2000/svg",xhtml:G,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function W(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),$.hasOwnProperty(n)?{space:$[n],local:t}:t}function Z(t){var n=W(t);return(n.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===G&&n.documentElement.namespaceURI===G?n.createElement(t):n.createElementNS(e,t)}})(n)}function Q(){}function K(t){return null==t?Q:function(){return this.querySelector(t)}}function J(){return[]}function tt(t){return null==t?J:function(){return this.querySelectorAll(t)}}function nt(t){return function(){return this.matches(t)}}function et(t){return new Array(t.length)}function rt(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}rt.prototype={constructor:rt,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var it="$";function ot(t,n,e,r,i,o){for(var a,u=0,c=n.length,f=o.length;u<f;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new rt(t,o[u]);for(;u<c;++u)(a=n[u])&&(i[u]=a)}function at(t,n,e,r,i,o,a){var u,c,f,s={},l=n.length,h=o.length,d=new Array(l);for(u=0;u<l;++u)(c=n[u])&&(d[u]=f=it+a.call(c,c.__data__,u,n),f in s?i[u]=c:s[f]=c);for(u=0;u<h;++u)(c=s[f=it+a.call(t,o[u],u,o)])?(r[u]=c,c.__data__=o[u],s[f]=null):e[u]=new rt(t,o[u]);for(u=0;u<l;++u)(c=n[u])&&s[d[u]]===c&&(i[u]=c)}function ut(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function ct(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ft(t,n){return t.style.getPropertyValue(n)||ct(t).getComputedStyle(t,null).getPropertyValue(n)}function st(t){return t.trim().split(/^|\s+/)}function lt(t){return t.classList||new ht(t)}function ht(t){this._node=t,this._names=st(t.getAttribute("class")||"")}function dt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function pt(t,n){for(var e=lt(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function vt(){this.textContent=""}function gt(){this.innerHTML=""}function yt(){this.nextSibling&&this.parentNode.appendChild(this)}function _t(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bt(){return null}function mt(){var t=this.parentNode;t&&t.removeChild(this)}function xt(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function wt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}ht.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Mt={};(t.event=null,"undefined"!=typeof document)&&("onmouseenter"in document.documentElement||(Mt={mouseenter:"mouseover",mouseleave:"mouseout"}));function Nt(t,n,e){return t=Tt(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function Tt(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function At(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function St(t,n,e){var r=Mt.hasOwnProperty(t.type)?Nt:Tt;return function(i,o,a){var u,c=this.__on,f=r(n,o,a);if(c)for(var s=0,l=c.length;s<l;++s)if((u=c[s]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=f,u.capture=e),void(u.value=n);this.addEventListener(t.type,f,e),u={type:t.type,name:t.name,value:n,listener:f,capture:e},c?c.push(u):this.__on=[u]}}function kt(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Et(t,n,e){var r=ct(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}var Ct=[null];function Pt(t,n){this._groups=t,this._parents=n}function zt(){return new Pt([[document.documentElement]],Ct)}function Rt(t){return"string"==typeof t?new Pt([[document.querySelector(t)]],[document.documentElement]):new Pt([[t]],Ct)}Pt.prototype=zt.prototype={constructor:Pt,select:function(t){"function"!=typeof t&&(t=K(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a,u=n[i],c=u.length,f=r[i]=new Array(c),s=0;s<c;++s)(o=u[s])&&(a=t.call(o,o.__data__,s,u))&&("__data__"in o&&(a.__data__=o.__data__),f[s]=a);return new Pt(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=tt(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a,u=n[o],c=u.length,f=0;f<c;++f)(a=u[f])&&(r.push(t.call(a,a.__data__,f,u)),i.push(a));return new Pt(r,i)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Pt(r,this._parents)},data:function(t,n){if(!t)return d=new Array(this.size()),f=-1,this.each(function(t){d[++f]=t}),d;var e=n?at:ot,r=this._parents,i=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var o=i.length,a=new Array(o),u=new Array(o),c=new Array(o),f=0;f<o;++f){var s=r[f],l=i[f],h=l.length,d=t.call(s,s&&s.__data__,f,r),p=d.length,v=u[f]=new Array(p),g=a[f]=new Array(p);e(s,l,v,g,c[f]=new Array(h),d,n);for(var y,_,b=0,m=0;b<p;++b)if(y=v[b]){for(b>=m&&(m=b+1);!(_=g[m])&&++m<p;);y._next=_||null}}return(a=new Pt(a,r))._enter=u,a._exit=c,a},enter:function(){return new Pt(this._enter||this._groups.map(et),this._parents)},exit:function(){return new Pt(this._exit||this._groups.map(et),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=n&&(i=n(i)),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Pt(a,this._parents)},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=ut);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a,u=e[o],c=u.length,f=i[o]=new Array(c),s=0;s<c;++s)(a=u[s])&&(f[s]=a);f.sort(n)}return new Pt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){var t=0;return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=W(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof n?e.local?function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}:function(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}:e.local?function(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}:function(t,n){return function(){this.setAttribute(t,n)}})(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof n?function(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}:function(t,n,e){return function(){this.style.setProperty(t,n,e)}})(t,n,null==e?"":e)):ft(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?function(t){return function(){delete this[t]}}:"function"==typeof n?function(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}:function(t,n){return function(){this[t]=n}})(t,n)):this.node()[t]},classed:function(t,n){var e=st(t+"");if(arguments.length<2){for(var r=lt(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?function(t,n){return function(){(n.apply(this,arguments)?dt:pt)(this,t)}}:n?function(t){return function(){dt(this,t)}}:function(t){return function(){pt(this,t)}})(e,n))},text:function(t){return arguments.length?this.each(null==t?vt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?gt:("function"==typeof t?function(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(yt)},lower:function(){return this.each(_t)},append:function(t){var n="function"==typeof t?t:Z(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:Z(t),r=null==n?bt:"function"==typeof n?n:K(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(mt)},clone:function(t){return this.select(t?wt:xt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=function(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}(t+""),a=o.length;if(!(arguments.length<2)){for(u=n?St:At,null==e&&(e=!1),r=0;r<a;++r)this.each(u(o[r],n,e));return this}var u=this.node().__on;if(u)for(var c,f=0,s=u.length;f<s;++f)for(r=0,c=u[f];r<a;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?function(t,n){return function(){return Et(this,t,n.apply(this,arguments))}}:function(t,n){return function(){return Et(this,t,n)}})(t,n))}};var Dt=0;function qt(){return new Lt}function Lt(){this._="@"+(++Dt).toString(36)}function Ut(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function Ot(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]}function Bt(t){var n=Ut();return n.changedTouches&&(n=n.changedTouches[0]),Ot(t,n)}function Ft(t,n,e){arguments.length<3&&(e=n,n=Ut().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return Ot(t,r);return null}function Yt(){t.event.stopImmediatePropagation()}function It(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function Ht(t){var n=t.document.documentElement,e=Rt(t).on("dragstart.drag",It,!0);"onselectstart"in n?e.on("selectstart.drag",It,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function jt(t,n){var e=t.document.documentElement,r=Rt(t).on("dragstart.drag",null);n&&(r.on("click.drag",It,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function Vt(t){return function(){return t}}function Xt(t,n,e,r,i,o,a,u,c,f){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=a,this.dx=u,this.dy=c,this._=f}function Gt(){return!t.event.ctrlKey&&!t.event.button}function $t(){return this.parentNode}function Wt(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Zt(){return navigator.maxTouchPoints||"ontouchstart"in this}function Qt(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function Kt(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Jt(){}Lt.prototype=qt.prototype={constructor:Lt,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}},Xt.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var tn="\\s*([+-]?\\d+)\\s*",nn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",en="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rn=/^#([0-9a-f]{3,8})$/,on=new RegExp("^rgb\\("+[tn,tn,tn]+"\\)$"),an=new RegExp("^rgb\\("+[en,en,en]+"\\)$"),un=new RegExp("^rgba\\("+[tn,tn,tn,nn]+"\\)$"),cn=new RegExp("^rgba\\("+[en,en,en,nn]+"\\)$"),fn=new RegExp("^hsl\\("+[nn,en,en]+"\\)$"),sn=new RegExp("^hsla\\("+[nn,en,en,nn]+"\\)$"),ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function hn(){return this.rgb().formatHex()}function dn(){return this.rgb().formatRgb()}function pn(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=rn.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?vn(n):3===e?new bn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?new bn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?new bn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=on.exec(t))?new bn(n[1],n[2],n[3],1):(n=an.exec(t))?new bn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=un.exec(t))?gn(n[1],n[2],n[3],n[4]):(n=cn.exec(t))?gn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=fn.exec(t))?Mn(n[1],n[2]/100,n[3]/100,1):(n=sn.exec(t))?Mn(n[1],n[2]/100,n[3]/100,n[4]):ln.hasOwnProperty(t)?vn(ln[t]):"transparent"===t?new bn(NaN,NaN,NaN,0):null}function vn(t){return new bn(t>>16&255,t>>8&255,255&t,1)}function gn(t,n,e,r){return r<=0&&(t=n=e=NaN),new bn(t,n,e,r)}function yn(t){return t instanceof Jt||(t=pn(t)),t?new bn((t=t.rgb()).r,t.g,t.b,t.opacity):new bn}function _n(t,n,e,r){return 1===arguments.length?yn(t):new bn(t,n,e,null==r?1:r)}function bn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function mn(){return"#"+wn(this.r)+wn(this.g)+wn(this.b)}function xn(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function wn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function Mn(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new An(t,n,e,r)}function Nn(t){if(t instanceof An)return new An(t.h,t.s,t.l,t.opacity);if(t instanceof Jt||(t=pn(t)),!t)return new An;if(t instanceof An)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,c=(o+i)/2;return u?(a=n===o?(e-r)/u+6*(e<r):e===o?(r-n)/u+2:(n-e)/u+4,u/=c<.5?o+i:2-o-i,a*=60):u=c>0&&c<1?0:a,new An(a,u,c,t.opacity)}function Tn(t,n,e,r){return 1===arguments.length?Nn(t):new An(t,n,e,null==r?1:r)}function An(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Sn(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}Qt(Jt,pn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:hn,formatHex:hn,formatHsl:function(){return Nn(this).formatHsl()},formatRgb:dn,toString:dn}),Qt(bn,_n,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new bn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new bn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:mn,formatHex:mn,formatRgb:xn,toString:xn})),Qt(An,Tn,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new An(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new An(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new bn(Sn(t>=240?t-240:t+120,i,r),Sn(t,i,r),Sn(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var kn=Math.PI/180,En=180/Math.PI,Cn=.96422,Pn=1,zn=.82521,Rn=4/29,Dn=6/29,qn=3*Dn*Dn,Ln=Dn*Dn*Dn;function Un(t){if(t instanceof Bn)return new Bn(t.l,t.a,t.b,t.opacity);if(t instanceof Xn)return Gn(t);t instanceof bn||(t=yn(t));var n,e,r=Hn(t.r),i=Hn(t.g),o=Hn(t.b),a=Fn((.2225045*r+.7168786*i+.0606169*o)/Pn);return r===i&&i===o?n=e=a:(n=Fn((.4360747*r+.3850649*i+.1430804*o)/Cn),e=Fn((.0139322*r+.0971045*i+.7141733*o)/zn)),new Bn(116*a-16,500*(n-a),200*(a-e),t.opacity)}function On(t,n,e,r){return 1===arguments.length?Un(t):new Bn(t,n,e,null==r?1:r)}function Bn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function Fn(t){return t>Ln?Math.pow(t,1/3):t/qn+Rn}function Yn(t){return t>Dn?t*t*t:qn*(t-Rn)}function In(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Hn(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function jn(t){if(t instanceof Xn)return new Xn(t.h,t.c,t.l,t.opacity);if(t instanceof Bn||(t=Un(t)),0===t.a&&0===t.b)return new Xn(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*En;return new Xn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Vn(t,n,e,r){return 1===arguments.length?jn(t):new Xn(t,n,e,null==r?1:r)}function Xn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function Gn(t){if(isNaN(t.h))return new Bn(t.l,0,0,t.opacity);var n=t.h*kn;return new Bn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}Qt(Bn,On,Kt(Jt,{brighter:function(t){return new Bn(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new Bn(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return new bn(In(3.1338561*(n=Cn*Yn(n))-1.6168667*(t=Pn*Yn(t))-.4906146*(e=zn*Yn(e))),In(-.9787684*n+1.9161415*t+.033454*e),In(.0719453*n-.2289914*t+1.4052427*e),this.opacity)}})),Qt(Xn,Vn,Kt(Jt,{brighter:function(t){return new Xn(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new Xn(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return Gn(this).rgb()}}));var $n=-.14861,Wn=1.78277,Zn=-.29227,Qn=-.90649,Kn=1.97294,Jn=Kn*Qn,te=Kn*Wn,ne=Wn*Zn-Qn*$n;function ee(t,n,e,r){return 1===arguments.length?function(t){if(t instanceof re)return new re(t.h,t.s,t.l,t.opacity);t instanceof bn||(t=yn(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ne*r+Jn*n-te*e)/(ne+Jn-te),o=r-i,a=(Kn*(e-i)-Zn*o)/Qn,u=Math.sqrt(a*a+o*o)/(Kn*i*(1-i)),c=u?Math.atan2(a,o)*En-120:NaN;return new re(c<0?c+360:c,u,i,t.opacity)}(t):new re(t,n,e,null==r?1:r)}function re(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ie(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function oe(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return ie((e-r/n)*n,a,i,o,u)}}function ae(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return ie((e-r/n)*n,i,o,a,u)}}function ue(t){return function(){return t}}function ce(t,n){return function(e){return t+e*n}}function fe(t,n){var e=n-t;return e?ce(t,e>180||e<-180?e-360*Math.round(e/360):e):ue(isNaN(t)?n:t)}function se(t){return 1==(t=+t)?le:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):ue(isNaN(n)?e:n)}}function le(t,n){var e=n-t;return e?ce(t,e):ue(isNaN(t)?n:t)}Qt(re,ee,Kt(Jt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new re(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new re(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*kn,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new bn(255*(n+e*($n*r+Wn*i)),255*(n+e*(Zn*r+Qn*i)),255*(n+e*(Kn*r)),this.opacity)}}));var he=function t(n){var e=se(n);function r(t,n){var r=e((t=_n(t)).r,(n=_n(n)).r),i=e(t.g,n.g),o=e(t.b,n.b),a=le(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return r.gamma=t,r}(1);function de(t){return function(n){var e,r,i=n.length,o=new Array(i),a=new Array(i),u=new Array(i);for(e=0;e<i;++e)r=_n(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}var pe=de(oe),ve=de(ae);function ge(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(e=0;e<r;++e)i[e]=t[e]*(1-o)+n[e]*o;return i}}function ye(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function _e(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(i),a=new Array(r);for(e=0;e<i;++e)o[e]=Te(t[e],n[e]);for(;e<r;++e)a[e]=n[e];return function(t){for(e=0;e<i;++e)a[e]=o[e](t);return a}}function be(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function me(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function xe(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=Te(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var we=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Me=new RegExp(we.source,"g");function Ne(t,n){var e,r,i,o=we.lastIndex=Me.lastIndex=0,a=-1,u=[],c=[];for(t+="",n+="";(e=we.exec(t))&&(r=Me.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),u[a]?u[a]+=i:u[++a]=i),(e=e[0])===(r=r[0])?u[a]?u[a]+=r:u[++a]=r:(u[++a]=null,c.push({i:a,x:me(e,r)})),o=Me.lastIndex;return o<n.length&&(i=n.slice(o),u[a]?u[a]+=i:u[++a]=i),u.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})}function Te(t,n){var e,r=typeof n;return null==n||"boolean"===r?ue(n):("number"===r?me:"string"===r?(e=pn(n))?(n=e,he):Ne:n instanceof pn?he:n instanceof Date?be:ye(n)?ge:Array.isArray(n)?_e:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?xe:me)(t,n)}function Ae(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var Se,ke,Ee,Ce,Pe=180/Math.PI,ze={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Re(t,n,e,r,i,o){var a,u,c;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Pe,skewX:Math.atan(c)*Pe,scaleX:a,scaleY:u}}function De(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u=[],c=[];return o=t(o),a=t(a),function(t,r,i,o,a,u){if(t!==i||r!==o){var c=a.push("translate(",null,n,null,e);u.push({i:c-4,x:me(t,i)},{i:c-2,x:me(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,u,c),function(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:me(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}(o.rotate,a.rotate,u,c),function(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:me(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}(o.skewX,a.skewX,u,c),function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:me(t,e)},{i:u-2,x:me(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,u,c),o=a=null,function(t){for(var n,e=-1,r=c.length;++e<r;)u[(n=c[e]).i]=n.x(t);return u.join("")}}}var qe=De(function(t){return"none"===t?ze:(Se||(Se=document.createElement("DIV"),ke=document.documentElement,Ee=document.defaultView),Se.style.transform=t,t=Ee.getComputedStyle(ke.appendChild(Se),null).getPropertyValue("transform"),ke.removeChild(Se),Re(+(t=t.slice(7,-1).split(","))[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),Le=De(function(t){return null==t?ze:(Ce||(Ce=document.createElementNS("http://www.w3.org/2000/svg","g")),Ce.setAttribute("transform",t),(t=Ce.transform.baseVal.consolidate())?Re((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):ze)},", ",")",")"),Ue=Math.SQRT2,Oe=2,Be=4,Fe=1e-12;function Ye(t){return((t=Math.exp(t))+1/t)/2}function Ie(t,n){var e,r,i=t[0],o=t[1],a=t[2],u=n[0],c=n[1],f=n[2],s=u-i,l=c-o,h=s*s+l*l;if(h<Fe)r=Math.log(f/a)/Ue,e=function(t){return[i+t*s,o+t*l,a*Math.exp(Ue*t*r)]};else{var d=Math.sqrt(h),p=(f*f-a*a+Be*h)/(2*a*Oe*d),v=(f*f-a*a-Be*h)/(2*f*Oe*d),g=Math.log(Math.sqrt(p*p+1)-p),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-g)/Ue,e=function(t){var n=t*r,e=Ye(g),u=a/(Oe*d)*(e*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(Ue*n+g)-function(t){return((t=Math.exp(t))-1/t)/2}(g));return[i+u*s,o+u*l,a*e/Ye(Ue*n+g)]}}return e.duration=1e3*r,e}function He(t){return function(n,e){var r=t((n=Tn(n)).h,(e=Tn(e)).h),i=le(n.s,e.s),o=le(n.l,e.l),a=le(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var je=He(fe),Ve=He(le);function Xe(t){return function(n,e){var r=t((n=Vn(n)).h,(e=Vn(e)).h),i=le(n.c,e.c),o=le(n.l,e.l),a=le(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=a(t),n+""}}}var Ge=Xe(fe),$e=Xe(le);function We(t){return function n(e){function r(n,r){var i=t((n=ee(n)).h,(r=ee(r)).h),o=le(n.s,r.s),a=le(n.l,r.l),u=le(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=a(Math.pow(t,e)),n.opacity=u(t),n+""}}return e=+e,r.gamma=n,r}(1)}var Ze=We(fe),Qe=We(le);var Ke,Je,tr=0,nr=0,er=0,rr=1e3,ir=0,or=0,ar=0,ur="object"==typeof performance&&performance.now?performance:Date,cr="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function fr(){return or||(cr(sr),or=ur.now()+ar)}function sr(){or=0}function lr(){this._call=this._time=this._next=null}function hr(t,n,e){var r=new lr;return r.restart(t,n,e),r}function dr(){fr(),++tr;for(var t,n=Ke;n;)(t=or-n._time)>=0&&n._call.call(null,t),n=n._next;--tr}function pr(){or=(ir=ur.now())+ar,tr=nr=0;try{dr()}finally{tr=0,function(){var t,n,e=Ke,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ke=n);Je=t,gr(r)}(),or=0}}function vr(){var t=ur.now(),n=t-ir;n>rr&&(ar-=n,ir=t)}function gr(t){tr||(nr&&(nr=clearTimeout(nr)),t-or>24?(t<1/0&&(nr=setTimeout(pr,t-ur.now()-ar)),er&&(er=clearInterval(er))):(er||(ir=ur.now(),er=setInterval(vr,rr)),tr=1,cr(pr)))}function yr(t,n,e){var r=new lr;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r}lr.prototype=hr.prototype={constructor:lr,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?fr():+e)+(null==n?0:+n),this._next||Je===this||(Je?Je._next=this:Ke=this,Je=this),this._call=t,this._time=e,gr()},stop:function(){this._call&&(this._call=null,this._time=1/0,gr())}};var _r=I("start","end","cancel","interrupt"),br=[],mr=0,xr=1,wr=2,Mr=3,Nr=4,Tr=5,Ar=6;function Sr(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(c){var f,s,l,h;if(e.state!==xr)return u();for(f in i)if((h=i[f]).name===e.name){if(h.state===Mr)return yr(o);h.state===Nr?(h.state=Ar,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=Ar,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(yr(function(){e.state===Mr&&(e.state=Nr,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=wr,e.on.call("start",t,t.__data__,e.index,e.group),e.state===wr){for(e.state=Mr,r=new Array(l=e.tween.length),f=0,s=-1;f<l;++f)(h=e.tween[f].value.call(t,t.__data__,e.index,e.group))&&(r[++s]=h);r.length=s+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=Tr,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);e.state===Tr&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=Ar,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=hr(function(t){e.state=xr,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:_r,tween:br,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:mr})}function kr(t,n){var e=Cr(t,n);if(e.state>mr)throw new Error("too late; already scheduled");return e}function Er(t,n){var e=Cr(t,n);if(e.state>Mr)throw new Error("too late; already running");return e}function Cr(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Pr(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o)(e=o[i]).name===n?(r=e.state>wr&&e.state<Tr,e.state=Ar,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]):a=!1;a&&delete t.__transition}}function zr(t,n,e){var r=t._id;return t.each(function(){var t=Er(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Cr(t,r).value[n]}}function Rr(t,n){var e;return("number"==typeof n?me:n instanceof pn?he:(e=pn(n))?(n=e,he):Ne)(t,n)}var Dr=zt.prototype.constructor;function qr(t){return function(){this.style.removeProperty(t)}}var Lr=0;function Ur(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Or(t){return zt().transition(t)}function Br(){return++Lr}var Fr=zt.prototype;function Yr(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Ir(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}Ur.prototype=Or.prototype={constructor:Ur,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=K(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var u,c,f=r[a],s=f.length,l=o[a]=new Array(s),h=0;h<s;++h)(u=f[h])&&(c=t.call(u,u.__data__,h,f))&&("__data__"in u&&(c.__data__=u.__data__),l[h]=c,Sr(l[h],n,e,h,l,Cr(u,e)));return new Ur(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=tt(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var c,f=r[u],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,d=t.call(c,c.__data__,l,f),p=Cr(c,e),v=0,g=d.length;v<g;++v)(h=d[v])&&Sr(h,n,e,v,d,p);o.push(d),a.push(c)}return new Ur(o,a,n,e)},filter:function(t){"function"!=typeof t&&(t=nt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,c=r[i]=[],f=0;f<u;++f)(o=a[f])&&t.call(o,o.__data__,f,a)&&c.push(o);return new Ur(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var c,f=n[u],s=e[u],l=f.length,h=a[u]=new Array(l),d=0;d<l;++d)(c=f[d]||s[d])&&(h[d]=c);for(;u<r;++u)a[u]=n[u];return new Ur(a,this._parents,this._name,this._id)},selection:function(){return new Dr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=Br(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)if(a=u[f]){var s=Cr(a,n);Sr(a,t,e,f,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Ur(r,this._parents,t,e)},call:Fr.call,nodes:Fr.nodes,node:Fr.node,size:Fr.size,empty:Fr.empty,each:Fr.each,on:function(t,n){var e=this._id;return arguments.length<2?Cr(this.node(),e).on.on(t):this.each(function(t,n,e){var r,i,o=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}(n)?kr:Er;return function(){var a=o(this,t),u=a.on;u!==r&&(i=(r=u).copy()).on(n,e),a.on=i}}(e,t,n))},attr:function(t,n){var e=W(t),r="transform"===e?Le:Rr;return this.attrTween(t,"function"==typeof n?(e.local?function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttributeNS(t.space,t.local)}}:function(t,n,e){var r,i,o;return function(){var a,u,c=e(this);if(null!=c)return(a=this.getAttribute(t))===(u=c+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,c));this.removeAttribute(t)}})(e,r,zr(this,"attr."+t,n)):null==n?(e.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(e):(e.local?function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}:function(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}})(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=W(t);return this.tween(e,(r.local?function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}(t,i)),e}return i._value=n,i}:function(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}(t,i)),e}return i._value=n,i})(r,n))},style:function(t,n,e){var r="transform"==(t+="")?qe:Rr;return null==n?this.styleTween(t,function(t,n){var e,r,i;return function(){var o=ft(this,t),a=(this.style.removeProperty(t),ft(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}(t,r)).on("end.style."+t,qr(t)):"function"==typeof n?this.styleTween(t,function(t,n,e){var r,i,o;return function(){var a=ft(this,t),u=e(this),c=u+"";return null==u&&(this.style.removeProperty(t),c=u=ft(this,t)),a===c?null:a===r&&c===i?o:(i=c,o=n(r=a,u))}}(t,r,zr(this,"style."+t,n))).each(function(t,n){var e,r,i,o,a="style."+n,u="end."+a;return function(){var c=Er(this,t),f=c.on,s=null==c.value[a]?o||(o=qr(n)):void 0;f===e&&i===s||(r=(e=f).copy()).on(u,i=s),c.on=r}}(this._id,t)):this.styleTween(t,function(t,n,e){var r,i,o=e+"";return function(){var a=ft(this,t);return a===o?null:a===r?i:i=n(r=a,e)}}(t,r,n),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}(t,o,e)),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(zr(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){return function(n){this.textContent=t.call(this,n)}}(r)),n}return r._value=t,r}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}(this._id))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Cr(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?function(t,n){var e,r;return function(){var i=Er(this,t),o=i.tween;if(o!==e)for(var a=0,u=(r=e=o).length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}i.tween=r}}:function(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=Er(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=u;break}c===f&&i.push(u)}o.tween=i}})(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){kr(this,t).delay=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){kr(this,t).delay=n}})(n,t)):Cr(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?function(t,n){return function(){Er(this,t).duration=+n.apply(this,arguments)}}:function(t,n){return n=+n,function(){Er(this,t).duration=n}})(n,t)):Cr(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw new Error;return function(){Er(this,t).ease=n}}(n,t)):Cr(this.node(),n).ease},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},c={value:function(){0==--i&&o()}};e.each(function(){var e=Er(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(c)),e.on=n})})}};var Hr=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(3),jr=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(3),Vr=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(3),Xr=Math.PI,Gr=Xr/2;function $r(t){return(1-Math.cos(Xr*t))/2}function Wr(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Zr(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}var Qr=4/11,Kr=6/11,Jr=8/11,ti=.75,ni=9/11,ei=10/11,ri=.9375,ii=21/22,oi=63/64,ai=1/Qr/Qr;function ui(t){return(t=+t)<Qr?ai*t*t:t<Jr?ai*(t-=Kr)*t+ti:t<ei?ai*(t-=ni)*t+ri:ai*(t-=ii)*t+oi}var ci=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(1.70158),fi=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(1.70158),si=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(1.70158),li=2*Math.PI,hi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return n*Math.pow(2,10*--t)*Math.sin((r-t)/e)}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),di=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+r)/e)}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),pi=function t(n,e){var r=Math.asin(1/(n=Math.max(1,n)))*(e/=li);function i(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2}return i.amplitude=function(n){return t(n,e*li)},i.period=function(e){return t(n,e)},i}(1,.3),vi={time:null,delay:0,duration:250,ease:Ir};function gi(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return vi.time=fr(),vi;return e}zt.prototype.interrupt=function(t){return this.each(function(){Pr(this,t)})},zt.prototype.transition=function(t){var n,e;t instanceof Ur?(n=t._id,t=t._name):(n=Br(),(e=vi).time=fr(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],c=u.length,f=0;f<c;++f)(a=u[f])&&Sr(a,t,n,f,u,e||gi(a,n));return new Ur(r,this._parents,t,n)};var yi=[null];function _i(t){return function(){return t}}function bi(t,n,e){this.target=t,this.type=n,this.selection=e}function mi(){t.event.stopImmediatePropagation()}function xi(){t.event.preventDefault(),t.event.stopImmediatePropagation()}var wi={name:"drag"},Mi={name:"space"},Ni={name:"handle"},Ti={name:"center"};function Ai(t){return[+t[0],+t[1]]}function Si(t){return[Ai(t[0]),Ai(t[1])]}var ki={name:"x",handles:["w","e"].map(Li),input:function(t,n){return null==t?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Ei={name:"y",handles:["n","s"].map(Li),input:function(t,n){return null==t?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},Ci={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Li),input:function(t){return null==t?null:Si(t)},output:function(t){return t}},Pi={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},zi={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Ri={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Di={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},qi={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1};function Li(t){return{type:t}}function Ui(){return!t.event.ctrlKey&&!t.event.button}function Oi(){var t=this.ownerSVGElement||this;return t.hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Bi(){return navigator.maxTouchPoints||"ontouchstart"in this}function Fi(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function Yi(n){var e,r=Oi,i=Ui,o=Bi,a=!0,u=I("start","brush","end"),c=6;function f(t){var e=t.property("__brush",g).selectAll(".overlay").data([Li("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Pi.overlay).merge(e).each(function(){var t=Fi(this).extent;Rt(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Li("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Pi.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var r=t.selectAll(".handle").data(n.handles,function(t){return t.type});r.exit().remove(),r.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Pi[t.type]}),t.each(s).attr("fill","none").attr("pointer-events","all").on("mousedown.brush",d).filter(o).on("touchstart.brush",d).on("touchmove.brush",p).on("touchend.brush touchcancel.brush",v).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function s(){var t=Rt(this),n=Fi(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-c/2:n[0][0]-c/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-c/2:n[0][1]-c/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+c:c}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+c:c})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function l(t,n,e){return!e&&t.__brush.emitter||new h(t,n)}function h(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function d(){if((!e||t.event.touches)&&i.apply(this,arguments)){var r,o,u,c,f,h,d,p,v,g,y,_,b=this,m=t.event.target.__data__.type,x="selection"===(a&&t.event.metaKey?m="overlay":m)?wi:a&&t.event.altKey?Ti:Ni,w=n===Ei?null:Di[m],M=n===ki?null:qi[m],N=Fi(b),T=N.extent,A=N.selection,S=T[0][0],k=T[0][1],E=T[1][0],C=T[1][1],P=0,z=0,R=w&&M&&a&&t.event.shiftKey,D=t.event.touches?(_=t.event.changedTouches[0].identifier,function(n){return Ft(n,t.event.touches,_)}):Bt,q=D(b),L=q,U=l(b,arguments,!0).beforestart();"overlay"===m?(A&&(v=!0),N.selection=A=[[r=n===Ei?S:q[0],u=n===ki?k:q[1]],[f=n===Ei?E:r,d=n===ki?C:u]]):(r=A[0][0],u=A[0][1],f=A[1][0],d=A[1][1]),o=r,c=u,h=f,p=d;var O=Rt(b).attr("pointer-events","none"),B=O.selectAll(".overlay").attr("cursor",Pi[m]);if(t.event.touches)U.moved=Y,U.ended=H;else{var F=Rt(t.event.view).on("mousemove.brush",Y,!0).on("mouseup.brush",H,!0);a&&F.on("keydown.brush",function(){switch(t.event.keyCode){case 16:R=w&&M;break;case 18:x===Ni&&(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ti,I());break;case 32:x!==Ni&&x!==Ti||(w<0?f=h-P:w>0&&(r=o-P),M<0?d=p-z:M>0&&(u=c-z),x=Mi,B.attr("cursor",Pi.selection),I());break;default:return}xi()},!0).on("keyup.brush",function(){switch(t.event.keyCode){case 16:R&&(g=y=R=!1,I());break;case 18:x===Ti&&(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Ni,I());break;case 32:x===Mi&&(t.event.altKey?(w&&(f=h-P*w,r=o+P*w),M&&(d=p-z*M,u=c+z*M),x=Ti):(w<0?f=h:w>0&&(r=o),M<0?d=p:M>0&&(u=c),x=Ni),B.attr("cursor",Pi[m]),I());break;default:return}xi()},!0),Ht(t.event.view)}mi(),Pr(b),s.call(b),U.start()}function Y(){var t=D(b);!R||g||y||(Math.abs(t[0]-L[0])>Math.abs(t[1]-L[1])?y=!0:g=!0),L=t,v=!0,xi(),I()}function I(){var t;switch(P=L[0]-q[0],z=L[1]-q[1],x){case Mi:case wi:w&&(P=Math.max(S-r,Math.min(E-f,P)),o=r+P,h=f+P),M&&(z=Math.max(k-u,Math.min(C-d,z)),c=u+z,p=d+z);break;case Ni:w<0?(P=Math.max(S-r,Math.min(E-r,P)),o=r+P,h=f):w>0&&(P=Math.max(S-f,Math.min(E-f,P)),o=r,h=f+P),M<0?(z=Math.max(k-u,Math.min(C-u,z)),c=u+z,p=d):M>0&&(z=Math.max(k-d,Math.min(C-d,z)),c=u,p=d+z);break;case Ti:w&&(o=Math.max(S,Math.min(E,r-P*w)),h=Math.max(S,Math.min(E,f+P*w))),M&&(c=Math.max(k,Math.min(C,u-z*M)),p=Math.max(k,Math.min(C,d+z*M)))}h<o&&(w*=-1,t=r,r=f,f=t,t=o,o=h,h=t,m in zi&&B.attr("cursor",Pi[m=zi[m]])),p<c&&(M*=-1,t=u,u=d,d=t,t=c,c=p,p=t,m in Ri&&B.attr("cursor",Pi[m=Ri[m]])),N.selection&&(A=N.selection),g&&(o=A[0][0],h=A[1][0]),y&&(c=A[0][1],p=A[1][1]),A[0][0]===o&&A[0][1]===c&&A[1][0]===h&&A[1][1]===p||(N.selection=[[o,c],[h,p]],s.call(b),U.brush())}function H(){if(mi(),t.event.touches){if(t.event.touches.length)return;e&&clearTimeout(e),e=setTimeout(function(){e=null},500)}else jt(t.event.view,v),F.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);O.attr("pointer-events","all"),B.attr("cursor",Pi.overlay),N.selection&&(A=N.selection),function(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}(A)&&(N.selection=null,s.call(b)),U.end()}}function p(){l(this,arguments).moved()}function v(){l(this,arguments).ended()}function g(){var t=this.__brush||{selection:null};return t.extent=Si(r.apply(this,arguments)),t.dim=n,t}return f.move=function(t,e){t.selection?t.on("start.brush",function(){l(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){l(this,arguments).end()}).tween("brush",function(){var t=this,r=t.__brush,i=l(t,arguments),o=r.selection,a=n.input("function"==typeof e?e.apply(this,arguments):e,r.extent),u=Te(o,a);function c(n){r.selection=1===n&&null===a?null:u(n),s.call(t),i.brush()}return null!==o&&null!==a?c:c(1)}):t.each(function(){var t=this,r=arguments,i=t.__brush,o=n.input("function"==typeof e?e.apply(t,r):e,i.extent),a=l(t,r).beforestart();Pr(t),i.selection=null===o?null:o,s.call(t),a.start().brush().end()})},f.clear=function(t){f.move(t,null)},h.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting?(this.starting=!1,this.emit("start")):this.emit("brush"),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){kt(new bi(f,t,n.output(this.state.selection)),u.apply,u,[t,this.that,this.args])}},f.extent=function(t){return arguments.length?(r="function"==typeof t?t:_i(Si(t)),f):r},f.filter=function(t){return arguments.length?(i="function"==typeof t?t:_i(!!t),f):i},f.touchable=function(t){return arguments.length?(o="function"==typeof t?t:_i(!!t),f):o},f.handleSize=function(t){return arguments.length?(c=+t,f):c},f.keyModifiers=function(t){return arguments.length?(a=!!t,f):a},f.on=function(){var t=u.on.apply(u,arguments);return t===u?f:t},f}var Ii=Math.cos,Hi=Math.sin,ji=Math.PI,Vi=ji/2,Xi=2*ji,Gi=Math.max;function $i(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}var Wi=Array.prototype.slice;function Zi(t){return function(){return t}}var Qi=Math.PI,Ki=2*Qi,Ji=Ki-1e-6;function to(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function no(){return new to}function eo(t){return t.source}function ro(t){return t.target}function io(t){return t.radius}function oo(t){return t.startAngle}function ao(t){return t.endAngle}to.prototype=no.prototype={constructor:to,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,a=this._y1,u=e-t,c=r-n,f=o-t,s=a-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*u-c*f)>1e-6&&i){var h=e-o,d=r-a,p=u*u+c*c,v=h*h+d*d,g=Math.sqrt(p),y=Math.sqrt(l),_=i*Math.tan((Qi-Math.acos((p+l-v)/(2*g*y)))/2),b=_/y,m=_/g;Math.abs(b-1)>1e-6&&(this._+="L"+(t+b*f)+","+(n+b*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*d)+","+(this._x1=t+m*u)+","+(this._y1=n+m*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,o=!!o;var a=(e=+e)*Math.cos(r),u=e*Math.sin(r),c=t+a,f=n+u,s=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+c+","+f),e&&(l<0&&(l=l%Ki+Ki),l>Ji?this._+="A"+e+","+e+",0,1,"+s+","+(t-a)+","+(n-u)+"A"+e+","+e+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>1e-6&&(this._+="A"+e+","+e+",0,"+ +(l>=Qi)+","+s+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};function uo(){}function co(t,n){var e=new uo;if(t instanceof uo)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,o=t.length;if(null==n)for(;++i<o;)e.set(i,t[i]);else for(;++i<o;)e.set(n(r=t[i],i,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function fo(){return{}}function so(t,n,e){t[n]=e}function lo(){return co()}function ho(t,n,e){t.set(n,e)}function po(){}uo.prototype=co.prototype={constructor:uo,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var vo=co.prototype;function go(t,n){var e=new po;if(t instanceof po)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}po.prototype=go.prototype={constructor:po,has:vo.has,add:function(t){return this["$"+(t+="")]=t,this},remove:vo.remove,clear:vo.clear,values:vo.keys,size:vo.size,empty:vo.empty,each:vo.each};var yo=Array.prototype.slice;function _o(t,n){return t-n}function bo(t){return function(){return t}}function mo(t,n){for(var e,r=-1,i=n.length;++r<i;)if(e=xo(t,n[r]))return e;return 0}function xo(t,n){for(var e=n[0],r=n[1],i=-1,o=0,a=t.length,u=a-1;o<a;u=o++){var c=t[o],f=c[0],s=c[1],l=t[u],h=l[0],d=l[1];if(wo(c,l,n))return 0;s>r!=d>r&&e<(h-f)*(r-s)/(d-s)+f&&(i=-i)}return i}function wo(t,n,e){var r,i,o,a;return function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])==(e[0]-t[0])*(n[1]-t[1])}(t,n,e)&&(i=t[r=+(t[0]===n[0])],o=e[r],a=n[r],i<=o&&o<=a||a<=o&&o<=i)}function Mo(){}var No=[[],[[[1,1.5],[.5,1]]],[[[1.5,1],[1,1.5]]],[[[1.5,1],[.5,1]]],[[[1,.5],[1.5,1]]],[[[1,1.5],[.5,1]],[[1,.5],[1.5,1]]],[[[1,.5],[1,1.5]]],[[[1,.5],[.5,1]]],[[[.5,1],[1,.5]]],[[[1,1.5],[1,.5]]],[[[.5,1],[1,.5]],[[1.5,1],[1,1.5]]],[[[1.5,1],[1,.5]]],[[[.5,1],[1.5,1]]],[[[1,1.5],[1.5,1]]],[[[.5,1],[1,1.5]]],[]];function To(){var t=1,n=1,e=M,r=u;function i(t){var n=e(t);if(Array.isArray(n))n=n.slice().sort(_o);else{var r=s(t),i=r[0],a=r[1];n=w(i,a,n),n=g(Math.floor(i/n)*n,Math.floor(a/n)*n,n)}return n.map(function(n){return o(t,n)})}function o(e,i){var o=[],u=[];return function(e,r,i){var o,u,c,f,s,l,h=new Array,d=new Array;o=u=-1,f=e[0]>=r,No[f<<1].forEach(p);for(;++o<t-1;)c=f,f=e[o+1]>=r,No[c|f<<1].forEach(p);No[f<<0].forEach(p);for(;++u<n-1;){for(o=-1,f=e[u*t+t]>=r,s=e[u*t]>=r,No[f<<1|s<<2].forEach(p);++o<t-1;)c=f,f=e[u*t+t+o+1]>=r,l=s,s=e[u*t+o+1]>=r,No[c|f<<1|s<<2|l<<3].forEach(p);No[f|s<<3].forEach(p)}o=-1,s=e[u*t]>=r,No[s<<2].forEach(p);for(;++o<t-1;)l=s,s=e[u*t+o+1]>=r,No[s<<2|l<<3].forEach(p);function p(t){var n,e,r=[t[0][0]+o,t[0][1]+u],c=[t[1][0]+o,t[1][1]+u],f=a(r),s=a(c);(n=d[f])?(e=h[s])?(delete d[n.end],delete h[e.start],n===e?(n.ring.push(c),i(n.ring)):h[n.start]=d[e.end]={start:n.start,end:e.end,ring:n.ring.concat(e.ring)}):(delete d[n.end],n.ring.push(c),d[n.end=s]=n):(n=h[s])?(e=d[f])?(delete h[n.start],delete d[e.end],n===e?(n.ring.push(c),i(n.ring)):h[e.start]=d[n.end]={start:e.start,end:n.end,ring:e.ring.concat(n.ring)}):(delete h[n.start],n.ring.unshift(r),h[n.start=f]=n):h[f]=d[s]={start:f,end:s,ring:[r,c]}}No[s<<3].forEach(p)}(e,i,function(t){r(t,e,i),function(t){for(var n=0,e=t.length,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1];return r}(t)>0?o.push([t]):u.push(t)}),u.forEach(function(t){for(var n,e=0,r=o.length;e<r;++e)if(-1!==mo((n=o[e])[0],t))return void n.push(t)}),{type:"MultiPolygon",value:i,coordinates:o}}function a(n){return 2*n[0]+n[1]*(t+1)*4}function u(e,r,i){e.forEach(function(e){var o,a=e[0],u=e[1],c=0|a,f=0|u,s=r[f*t+c];a>0&&a<t&&c===a&&(o=r[f*t+c-1],e[0]=a+(i-o)/(s-o)-.5),u>0&&u<n&&f===u&&(o=r[(f-1)*t+c],e[1]=u+(i-o)/(s-o)-.5)})}return i.contour=o,i.size=function(e){if(!arguments.length)return[t,n];var r=Math.ceil(e[0]),o=Math.ceil(e[1]);if(!(r>0&&o>0))throw new Error("invalid size");return t=r,n=o,i},i.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?bo(yo.call(t)):bo(t),i):e},i.smooth=function(t){return arguments.length?(r=t?u:Mo,i):r===u},i}function Ao(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<i;++a)for(var u=0,c=0;u<r+e;++u)u<r&&(c+=t.data[u+a*r]),u>=e&&(u>=o&&(c-=t.data[u-o+a*r]),n.data[u-e+a*r]=c/Math.min(u+1,r-1+o-u,o))}function So(t,n,e){for(var r=t.width,i=t.height,o=1+(e<<1),a=0;a<r;++a)for(var u=0,c=0;u<i+e;++u)u<i&&(c+=t.data[a+u*r]),u>=e&&(u>=o&&(c-=t.data[a+(u-o)*r]),n.data[a+(u-e)*r]=c/Math.min(u+1,i-1+o-u,o))}function ko(t){return t[0]}function Eo(t){return t[1]}function Co(){return 1}var Po={},zo={},Ro=34,Do=10,qo=13;function Lo(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Uo(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function Oo(t,n){var e=t+"",r=e.length;return r<n?new Array(n-r+1).join(0)+e:e}function Bo(t){var n=t.getUTCHours(),e=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":function(t){return t<0?"-"+Oo(-t,6):t>9999?"+"+Oo(t,6):Oo(t,4)}(t.getUTCFullYear())+"-"+Oo(t.getUTCMonth()+1,2)+"-"+Oo(t.getUTCDate(),2)+(i?"T"+Oo(n,2)+":"+Oo(e,2)+":"+Oo(r,2)+"."+Oo(i,3)+"Z":r?"T"+Oo(n,2)+":"+Oo(e,2)+":"+Oo(r,2)+"Z":e||n?"T"+Oo(n,2)+":"+Oo(e,2)+"Z":"")}function Fo(t){var n=new RegExp('["'+t+"\n\r]"),e=t.charCodeAt(0);function r(t,n){var r,i=[],o=t.length,a=0,u=0,c=o<=0,f=!1;function s(){if(c)return zo;if(f)return f=!1,Po;var n,r,i=a;if(t.charCodeAt(i)===Ro){for(;a++<o&&t.charCodeAt(a)!==Ro||t.charCodeAt(++a)===Ro;);return(n=a)>=o?c=!0:(r=t.charCodeAt(a++))===Do?f=!0:r===qo&&(f=!0,t.charCodeAt(a)===Do&&++a),t.slice(i+1,n-1).replace(/""/g,'"')}for(;a<o;){if((r=t.charCodeAt(n=a++))===Do)f=!0;else if(r===qo)f=!0,t.charCodeAt(a)===Do&&++a;else if(r!==e)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(t.charCodeAt(o-1)===Do&&--o,t.charCodeAt(o-1)===qo&&--o;(r=s())!==zo;){for(var l=[];r!==Po&&r!==zo;)l.push(r),r=s();n&&null==(l=n(l,u++))||i.push(l)}return i}function i(n,e){return n.map(function(n){return e.map(function(t){return a(n[t])}).join(t)})}function o(n){return n.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?Bo(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var e,i,o=r(t,function(t,r){if(e)return e(t,r-1);i=t,e=n?function(t,n){var e=Lo(t);return function(r,i){return n(e(r),i,t)}}(t,n):Lo(t)});return o.columns=i||[],o},parseRows:r,format:function(n,e){return null==e&&(e=Uo(n)),[e.map(a).join(t)].concat(i(n,e)).join("\n")},formatBody:function(t,n){return null==n&&(n=Uo(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:a}}var Yo=Fo(","),Io=Yo.parse,Ho=Yo.parseRows,jo=Yo.format,Vo=Yo.formatBody,Xo=Yo.formatRows,Go=Yo.formatRow,$o=Yo.formatValue,Wo=Fo("\t"),Zo=Wo.parse,Qo=Wo.parseRows,Ko=Wo.format,Jo=Wo.formatBody,ta=Wo.formatRows,na=Wo.formatRow,ea=Wo.formatValue;var ra=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function ia(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.blob()}function oa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.arrayBuffer()}function aa(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}function ua(t,n){return fetch(t,n).then(aa)}function ca(t){return function(n,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=void 0),ua(n,e).then(function(n){return t(n,r)})}}var fa=ca(Io),sa=ca(Zo);function la(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.json()}function ha(t){return function(n,e){return ua(n,e).then(function(n){return(new DOMParser).parseFromString(n,t)})}}var da=ha("application/xml"),pa=ha("text/html"),va=ha("image/svg+xml");function ga(t){return function(){return t}}function ya(){return 1e-6*(Math.random()-.5)}function _a(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,a,u,c,f,s,l,h,d=t._root,p={data:r},v=t._x0,g=t._y0,y=t._x1,_=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a,i=d,!(d=d[l=s<<1|f]))return i[l]=p,t;if(u=+t._x.call(null,d.data),c=+t._y.call(null,d.data),n===u&&e===c)return p.next=d,i?i[l]=p:t._root=p,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(v+y)/2))?v=o:y=o,(s=e>=(a=(g+_)/2))?g=a:_=a}while((l=s<<1|f)==(h=(c>=a)<<1|u>=o));return i[h]=d,i[l]=p,t}function ba(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i}function ma(t){return t[0]}function xa(t){return t[1]}function wa(t,n,e){var r=new Ma(null==n?ma:n,null==e?xa:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Ma(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Na(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var Ta=wa.prototype=Ma.prototype;function Aa(t){return t.x+t.vx}function Sa(t){return t.y+t.vy}function ka(t){return t.index}function Ea(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function Ca(t){return t.x}function Pa(t){return t.y}Ta.copy=function(){var t,n,e=new Ma(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=Na(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=Na(n));return e},Ta.add=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return _a(this.cover(n,e),n,e,t)},Ta.addAll=function(t){var n,e,r,i,o=t.length,a=new Array(o),u=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(a[e]=r,u[e]=i,r<c&&(c=r),r>s&&(s=r),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),e=0;e<o;++e)_a(this,a[e],u[e],t[e]);return this},Ta.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var a,u,c=i-e,f=this._root;e>t||t>=i||r>n||n>=o;)switch(u=(n<r)<<1|t<e,(a=new Array(4))[u]=f,f=a,c*=2,u){case 0:i=e+c,o=r+c;break;case 1:e=i-c,o=r+c;break;case 2:i=e+c,r=o-c;break;case 3:e=i-c,r=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},Ta.data=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t},Ta.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},Ta.find=function(t,n,e){var r,i,o,a,u,c,f,s=this._x0,l=this._y0,h=this._x1,d=this._y1,p=[],v=this._root;for(v&&p.push(new ba(v,s,l,h,d)),null==e?e=1/0:(s=t-e,l=n-e,h=t+e,d=n+e,e*=e);c=p.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>d||(a=c.x1)<s||(u=c.y1)<l))if(v.length){var g=(i+a)/2,y=(o+u)/2;p.push(new ba(v[3],g,y,a,u),new ba(v[2],i,y,g,u),new ba(v[1],g,o,a,y),new ba(v[0],i,o,g,y)),(f=(n>=y)<<1|t>=g)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-f],p[p.length-1-f]=c)}else{var _=t-+this._x.call(null,v.data),b=n-+this._y.call(null,v.data),m=_*_+b*b;if(m<e){var x=Math.sqrt(e=m);s=t-x,l=n-x,h=t+x,d=n+x,r=v.data}}return r},Ta.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var n,e,r,i,o,a,u,c,f,s,l,h,d=this._root,p=this._x0,v=this._y0,g=this._x1,y=this._y1;if(!d)return this;if(d.length)for(;;){if((f=o>=(u=(p+g)/2))?p=u:g=u,(s=a>=(c=(v+y)/2))?v=c:y=c,n=d,!(d=d[l=s<<1|f]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(e?e[h]=d:this._root=d),this):(this._root=i,this)},Ta.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},Ta.root=function(){return this._root},Ta.size=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t},Ta.visit=function(t){var n,e,r,i,o,a,u=[],c=this._root;for(c&&u.push(new ba(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,a=n.y1)&&c.length){var f=(r+o)/2,s=(i+a)/2;(e=c[3])&&u.push(new ba(e,f,s,o,a)),(e=c[2])&&u.push(new ba(e,r,s,f,a)),(e=c[1])&&u.push(new ba(e,f,i,o,s)),(e=c[0])&&u.push(new ba(e,r,i,f,s))}return this},Ta.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new ba(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,a=n.x0,u=n.y0,c=n.x1,f=n.y1,s=(a+c)/2,l=(u+f)/2;(o=i[0])&&e.push(new ba(o,a,u,s,l)),(o=i[1])&&e.push(new ba(o,s,u,c,l)),(o=i[2])&&e.push(new ba(o,a,l,s,f)),(o=i[3])&&e.push(new ba(o,s,l,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},Ta.x=function(t){return arguments.length?(this._x=t,this):this._x},Ta.y=function(t){return arguments.length?(this._y=t,this):this._y};var za=10,Ra=Math.PI*(3-Math.sqrt(5));function Da(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function qa(t){return(t=Da(Math.abs(t)))?t[1]:NaN}var La,Ua=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Oa(t){if(!(n=Ua.exec(t)))throw new Error("invalid format: "+t);var n;return new Ba({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function Ba(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Fa(t,n){var e=Da(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}Oa.prototype=Ba.prototype,Ba.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Ya={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Fa(100*t,n)},r:Fa,s:function(t,n){var e=Da(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(La=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Da(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}};function Ia(t){return t}var Ha,ja=Array.prototype.map,Va=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Xa(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Ia:(n=ja.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,o=[],a=0,u=n[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),o.push(t.substring(i-=u,i+u)),!((c+=u+1)>r));)u=n[a=(a+1)%n.length];return o.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Ia:function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}}(ja.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",f=void 0===t.minus?"-":t.minus+"",s=void 0===t.nan?"NaN":t.nan+"";function l(t){var n=(t=Oa(t)).fill,e=t.align,l=t.sign,h=t.symbol,d=t.zero,p=t.width,v=t.comma,g=t.precision,y=t.trim,_=t.type;"n"===_?(v=!0,_="g"):Ya[_]||(void 0===g&&(g=12),y=!0,_="g"),(d||"0"===n&&"="===e)&&(d=!0,n="0",e="=");var b="$"===h?i:"#"===h&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",m="$"===h?o:/[%p]/.test(_)?c:"",x=Ya[_],w=/[defgprs%]/.test(_);function M(t){var i,o,c,h=b,M=m;if("c"===_)M=x(t)+M,t="";else{var N=(t=+t)<0;if(t=isNaN(t)?s:x(Math.abs(t),g),y&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),N&&0==+t&&(N=!1),h=(N?"("===l?l:f:"-"===l||"("===l?"":l)+h,M=("s"===_?Va[8+La/3]:"")+M+(N&&"("===l?")":""),w)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){M=(46===c?a+t.slice(i+1):t.slice(i))+M,t=t.slice(0,i);break}}v&&!d&&(t=r(t,1/0));var T=h.length+t.length+M.length,A=T<p?new Array(p-T+1).join(n):"";switch(v&&d&&(t=r(A+t,A.length?p-M.length:1/0),A=""),e){case"<":t=h+t+M+A;break;case"=":t=h+A+t+M;break;case"^":t=A.slice(0,T=A.length>>1)+h+t+M+A.slice(T);break;default:t=A+h+t+M}return u(t)}return g=void 0===g?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),M.toString=function(){return t+""},M}return{format:l,formatPrefix:function(t,n){var e=l(((t=Oa(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(qa(n)/3))),i=Math.pow(10,-r),o=Va[8+r/3];return function(t){return e(i*t)+o}}}}function Ga(n){return Ha=Xa(n),t.format=Ha.format,t.formatPrefix=Ha.formatPrefix,Ha}function $a(t){return Math.max(0,-qa(Math.abs(t)))}function Wa(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(qa(n)/3)))-qa(Math.abs(t)))}function Za(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,qa(n)-qa(t))+1}function Qa(){return new Ka}function Ka(){this.reset()}Ga({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),Ka.prototype={constructor:Ka,reset:function(){this.s=this.t=0},add:function(t){tu(Ja,t,this.t),tu(this,Ja.s,this.s),this.s?this.t+=Ja.t:this.s=Ja.t},valueOf:function(){return this.s}};var Ja=new Ka;function tu(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}var nu=1e-6,eu=1e-12,ru=Math.PI,iu=ru/2,ou=ru/4,au=2*ru,uu=180/ru,cu=ru/180,fu=Math.abs,su=Math.atan,lu=Math.atan2,hu=Math.cos,du=Math.ceil,pu=Math.exp,vu=Math.log,gu=Math.pow,yu=Math.sin,_u=Math.sign||function(t){return t>0?1:t<0?-1:0},bu=Math.sqrt,mu=Math.tan;function xu(t){return t>1?0:t<-1?ru:Math.acos(t)}function wu(t){return t>1?iu:t<-1?-iu:Math.asin(t)}function Mu(t){return(t=yu(t/2))*t}function Nu(){}function Tu(t,n){t&&Su.hasOwnProperty(t.type)&&Su[t.type](t,n)}var Au={Feature:function(t,n){Tu(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)Tu(e[r].geometry,n)}},Su={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){ku(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)ku(e[r],n,0)},Polygon:function(t,n){Eu(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Eu(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)Tu(e[r],n)}};function ku(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Eu(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)ku(t[e],n,1);n.polygonEnd()}function Cu(t,n){t&&Au.hasOwnProperty(t.type)?Au[t.type](t,n):Tu(t,n)}var Pu,zu,Ru,Du,qu,Lu=Qa(),Uu=Qa(),Ou={point:Nu,lineStart:Nu,lineEnd:Nu,polygonStart:function(){Lu.reset(),Ou.lineStart=Bu,Ou.lineEnd=Fu},polygonEnd:function(){var t=+Lu;Uu.add(t<0?au+t:t),this.lineStart=this.lineEnd=this.point=Nu},sphere:function(){Uu.add(au)}};function Bu(){Ou.point=Yu}function Fu(){Iu(Pu,zu)}function Yu(t,n){Ou.point=Iu,Pu=t,zu=n,Ru=t*=cu,Du=hu(n=(n*=cu)/2+ou),qu=yu(n)}function Iu(t,n){var e=(t*=cu)-Ru,r=e>=0?1:-1,i=r*e,o=hu(n=(n*=cu)/2+ou),a=yu(n),u=qu*a,c=Du*o+u*hu(i),f=u*r*yu(i);Lu.add(lu(f,c)),Ru=t,Du=o,qu=a}function Hu(t){return[lu(t[1],t[0]),wu(t[2])]}function ju(t){var n=t[0],e=t[1],r=hu(e);return[r*hu(n),r*yu(n),yu(e)]}function Vu(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Xu(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Gu(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function $u(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Wu(t){var n=bu(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}var Zu,Qu,Ku,Ju,tc,nc,ec,rc,ic,oc,ac,uc,cc,fc,sc,lc,hc,dc,pc,vc,gc,yc,_c,bc,mc,xc,wc=Qa(),Mc={point:Nc,lineStart:Ac,lineEnd:Sc,polygonStart:function(){Mc.point=kc,Mc.lineStart=Ec,Mc.lineEnd=Cc,wc.reset(),Ou.polygonStart()},polygonEnd:function(){Ou.polygonEnd(),Mc.point=Nc,Mc.lineStart=Ac,Mc.lineEnd=Sc,Lu<0?(Zu=-(Ku=180),Qu=-(Ju=90)):wc>nu?Ju=90:wc<-nu&&(Qu=-90),oc[0]=Zu,oc[1]=Ku},sphere:function(){Zu=-(Ku=180),Qu=-(Ju=90)}};function Nc(t,n){ic.push(oc=[Zu=t,Ku=t]),n<Qu&&(Qu=n),n>Ju&&(Ju=n)}function Tc(t,n){var e=ju([t*cu,n*cu]);if(rc){var r=Xu(rc,e),i=Xu([r[1],-r[0],0],r);Wu(i),i=Hu(i);var o,a=t-tc,u=a>0?1:-1,c=i[0]*uu*u,f=fu(a)>180;f^(u*tc<c&&c<u*t)?(o=i[1]*uu)>Ju&&(Ju=o):f^(u*tc<(c=(c+360)%360-180)&&c<u*t)?(o=-i[1]*uu)<Qu&&(Qu=o):(n<Qu&&(Qu=n),n>Ju&&(Ju=n)),f?t<tc?Pc(Zu,t)>Pc(Zu,Ku)&&(Ku=t):Pc(t,Ku)>Pc(Zu,Ku)&&(Zu=t):Ku>=Zu?(t<Zu&&(Zu=t),t>Ku&&(Ku=t)):t>tc?Pc(Zu,t)>Pc(Zu,Ku)&&(Ku=t):Pc(t,Ku)>Pc(Zu,Ku)&&(Zu=t)}else ic.push(oc=[Zu=t,Ku=t]);n<Qu&&(Qu=n),n>Ju&&(Ju=n),rc=e,tc=t}function Ac(){Mc.point=Tc}function Sc(){oc[0]=Zu,oc[1]=Ku,Mc.point=Nc,rc=null}function kc(t,n){if(rc){var e=t-tc;wc.add(fu(e)>180?e+(e>0?360:-360):e)}else nc=t,ec=n;Ou.point(t,n),Tc(t,n)}function Ec(){Ou.lineStart()}function Cc(){kc(nc,ec),Ou.lineEnd(),fu(wc)>nu&&(Zu=-(Ku=180)),oc[0]=Zu,oc[1]=Ku,rc=null}function Pc(t,n){return(n-=t)<0?n+360:n}function zc(t,n){return t[0]-n[0]}function Rc(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var Dc={sphere:Nu,point:qc,lineStart:Uc,lineEnd:Fc,polygonStart:function(){Dc.lineStart=Yc,Dc.lineEnd=Ic},polygonEnd:function(){Dc.lineStart=Uc,Dc.lineEnd=Fc}};function qc(t,n){t*=cu;var e=hu(n*=cu);Lc(e*hu(t),e*yu(t),yu(n))}function Lc(t,n,e){cc+=(t-cc)/++ac,fc+=(n-fc)/ac,sc+=(e-sc)/ac}function Uc(){Dc.point=Oc}function Oc(t,n){t*=cu;var e=hu(n*=cu);bc=e*hu(t),mc=e*yu(t),xc=yu(n),Dc.point=Bc,Lc(bc,mc,xc)}function Bc(t,n){t*=cu;var e=hu(n*=cu),r=e*hu(t),i=e*yu(t),o=yu(n),a=lu(bu((a=mc*o-xc*i)*a+(a=xc*r-bc*o)*a+(a=bc*i-mc*r)*a),bc*r+mc*i+xc*o);uc+=a,lc+=a*(bc+(bc=r)),hc+=a*(mc+(mc=i)),dc+=a*(xc+(xc=o)),Lc(bc,mc,xc)}function Fc(){Dc.point=qc}function Yc(){Dc.point=Hc}function Ic(){jc(yc,_c),Dc.point=qc}function Hc(t,n){yc=t,_c=n,t*=cu,n*=cu,Dc.point=jc;var e=hu(n);bc=e*hu(t),mc=e*yu(t),xc=yu(n),Lc(bc,mc,xc)}function jc(t,n){t*=cu;var e=hu(n*=cu),r=e*hu(t),i=e*yu(t),o=yu(n),a=mc*o-xc*i,u=xc*r-bc*o,c=bc*i-mc*r,f=bu(a*a+u*u+c*c),s=wu(f),l=f&&-s/f;pc+=l*a,vc+=l*u,gc+=l*c,uc+=s,lc+=s*(bc+(bc=r)),hc+=s*(mc+(mc=i)),dc+=s*(xc+(xc=o)),Lc(bc,mc,xc)}function Vc(t){return function(){return t}}function Xc(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return(e=n.invert(e,r))&&t.invert(e[0],e[1])}),e}function Gc(t,n){return[fu(t)>ru?t+Math.round(-t/au)*au:t,n]}function $c(t,n,e){return(t%=au)?n||e?Xc(Zc(t),Qc(n,e)):Zc(t):n||e?Qc(n,e):Gc}function Wc(t){return function(n,e){return[(n+=t)>ru?n-au:n<-ru?n+au:n,e]}}function Zc(t){var n=Wc(t);return n.invert=Wc(-t),n}function Qc(t,n){var e=hu(t),r=yu(t),i=hu(n),o=yu(n);function a(t,n){var a=hu(n),u=hu(t)*a,c=yu(t)*a,f=yu(n),s=f*e+u*r;return[lu(c*i-s*o,u*e-f*r),wu(s*i+c*o)]}return a.invert=function(t,n){var a=hu(n),u=hu(t)*a,c=yu(t)*a,f=yu(n),s=f*i-c*o;return[lu(c*i+f*o,u*e+s*r),wu(s*e-u*r)]},a}function Kc(t){function n(n){return(n=t(n[0]*cu,n[1]*cu))[0]*=uu,n[1]*=uu,n}return t=$c(t[0]*cu,t[1]*cu,t.length>2?t[2]*cu:0),n.invert=function(n){return(n=t.invert(n[0]*cu,n[1]*cu))[0]*=uu,n[1]*=uu,n},n}function Jc(t,n,e,r,i,o){if(e){var a=hu(n),u=yu(n),c=r*e;null==i?(i=n+r*au,o=n-c/2):(i=tf(a,i),o=tf(a,o),(r>0?i<o:i>o)&&(i+=r*au));for(var f,s=i;r>0?s>o:s<o;s-=c)f=Hu([a,-u*hu(s),-u*yu(s)]),t.point(f[0],f[1])}}function tf(t,n){(n=ju(n))[0]-=t,Wu(n);var e=xu(-n[1]);return((-n[2]<0?-e:e)+au-nu)%au}function nf(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:Nu,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}}function ef(t,n){return fu(t[0]-n[0])<nu&&fu(t[1]-n[1])<nu}function rf(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function of(t,n,e,r,i){var o,a,u=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],a=t[n];if(ef(r,a)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else u.push(e=new rf(r,t,null,!0)),c.push(e.o=new rf(r,null,e,!1)),u.push(e=new rf(a,t,null,!1)),c.push(e.o=new rf(a,null,e,!0))}}),u.length){for(c.sort(n),af(u),af(c),o=0,a=c.length;o<a;++o)c[o].e=e=!e;for(var f,s,l=u[0];;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;f=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,a=f.length;o<a;++o)i.point((s=f[o])[0],s[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(d)for(f=h.p.z,o=f.length-1;o>=0;--o)i.point((s=f[o])[0],s[1]);else r(h.x,h.p.x,-1,i);h=h.p}f=(h=h.o).z,d=!d}while(!h.v);i.lineEnd()}}}function af(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}Gc.invert=Gc;var uf=Qa();function cf(t){return fu(t[0])<=ru?t[0]:_u(t[0])*((fu(t[0])+ru)%au-ru)}function ff(t,n){var e=cf(n),r=n[1],i=yu(r),o=[yu(e),-hu(e),0],a=0,u=0;uf.reset(),1===i?r=iu+nu:-1===i&&(r=-iu-nu);for(var c=0,f=t.length;c<f;++c)if(l=(s=t[c]).length)for(var s,l,h=s[l-1],d=cf(h),p=h[1]/2+ou,v=yu(p),g=hu(p),y=0;y<l;++y,d=b,v=x,g=w,h=_){var _=s[y],b=cf(_),m=_[1]/2+ou,x=yu(m),w=hu(m),M=b-d,N=M>=0?1:-1,T=N*M,A=T>ru,S=v*x;if(uf.add(lu(S*N*yu(T),g*w+S*hu(T))),a+=A?M+N*au:M,A^d>=e^b>=e){var k=Xu(ju(h),ju(_));Wu(k);var E=Xu(o,k);Wu(E);var C=(A^M>=0?-1:1)*wu(E[2]);(r>C||r===C&&(k[0]||k[1]))&&(u+=A^M>=0?1:-1)}}return(a<-nu||a<nu&&uf<-nu)^1&u}function sf(t,n,e,r){return function(i){var o,a,u,c=n(i),f=nf(),s=n(f),l=!1,h={point:d,lineStart:v,lineEnd:g,polygonStart:function(){h.point=y,h.lineStart=_,h.lineEnd=b,a=[],o=[]},polygonEnd:function(){h.point=d,h.lineStart=v,h.lineEnd=g,a=A(a);var t=ff(o,r);a.length?(l||(i.polygonStart(),l=!0),of(a,hf,t,e,i)):t&&(l||(i.polygonStart(),l=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),l&&(i.polygonEnd(),l=!1),a=o=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}};function d(n,e){t(n,e)&&i.point(n,e)}function p(t,n){c.point(t,n)}function v(){h.point=p,c.lineStart()}function g(){h.point=d,c.lineEnd()}function y(t,n){u.push([t,n]),s.point(t,n)}function _(){s.lineStart(),u=[]}function b(){y(u[0][0],u[0][1]),s.lineEnd();var t,n,e,r,c=s.clean(),h=f.result(),d=h.length;if(u.pop(),o.push(u),u=null,d)if(1&c){if((n=(e=h[0]).length-1)>0){for(l||(i.polygonStart(),l=!0),i.lineStart(),t=0;t<n;++t)i.point((r=e[t])[0],r[1]);i.lineEnd()}}else d>1&&2&c&&h.push(h.pop().concat(h.shift())),a.push(h.filter(lf))}return h}}function lf(t){return t.length>1}function hf(t,n){return((t=t.x)[0]<0?t[1]-iu-nu:iu-t[1])-((n=n.x)[0]<0?n[1]-iu-nu:iu-n[1])}var df=sf(function(){return!0},function(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,a){var u=o>0?ru:-ru,c=fu(o-e);fu(c-ru)<nu?(t.point(e,r=(r+a)/2>0?iu:-iu),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),t.point(o,r),n=0):i!==u&&c>=ru&&(fu(e-i)<nu&&(e-=i*nu),fu(o-u)<nu&&(o-=u*nu),r=function(t,n,e,r){var i,o,a=yu(t-e);return fu(a)>nu?su((yu(n)*(o=hu(r))*yu(e)-yu(r)*(i=hu(n))*yu(t))/(i*o*a)):(n+r)/2}(e,r,o,a),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(u,r),n=0),t.point(e=o,r=a),i=u},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}},function(t,n,e,r){var i;if(null==t)i=e*iu,r.point(-ru,i),r.point(0,i),r.point(ru,i),r.point(ru,0),r.point(ru,-i),r.point(0,-i),r.point(-ru,-i),r.point(-ru,0),r.point(-ru,i);else if(fu(t[0]-n[0])>nu){var o=t[0]<n[0]?ru:-ru;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])},[-ru,-iu]);function pf(t){var n=hu(t),e=6*cu,r=n>0,i=fu(n)>nu;function o(t,e){return hu(t)*hu(e)>n}function a(t,e,r){var i=[1,0,0],o=Xu(ju(t),ju(e)),a=Vu(o,o),u=o[0],c=a-u*u;if(!c)return!r&&t;var f=n*a/c,s=-n*u/c,l=Xu(i,o),h=$u(i,f);Gu(h,$u(o,s));var d=l,p=Vu(h,d),v=Vu(d,d),g=p*p-v*(Vu(h,h)-1);if(!(g<0)){var y=bu(g),_=$u(d,(-p-y)/v);if(Gu(_,h),_=Hu(_),!r)return _;var b,m=t[0],x=e[0],w=t[1],M=e[1];x<m&&(b=m,m=x,x=b);var N=x-m,T=fu(N-ru)<nu;if(!T&&M<w&&(b=w,w=M,M=b),T||N<nu?T?w+M>0^_[1]<(fu(_[0]-m)<nu?w:M):w<=_[1]&&_[1]<=M:N>ru^(m<=_[0]&&_[0]<=x)){var A=$u(d,(-p+y)/v);return Gu(A,h),[_,Hu(A)]}}}function u(n,e){var i=r?t:ru-t,o=0;return n<-i?o|=1:n>i&&(o|=2),e<-i?o|=4:e>i&&(o|=8),o}return sf(o,function(t){var n,e,c,f,s;return{lineStart:function(){f=c=!1,s=1},point:function(l,h){var d,p=[l,h],v=o(l,h),g=r?v?0:u(l,h):v?u(l+(l<0?ru:-ru),h):0;if(!n&&(f=c=v)&&t.lineStart(),v!==c&&(!(d=a(n,p))||ef(n,d)||ef(p,d))&&(p[0]+=nu,p[1]+=nu,v=o(p[0],p[1])),v!==c)s=0,v?(t.lineStart(),d=a(p,n),t.point(d[0],d[1])):(d=a(n,p),t.point(d[0],d[1]),t.lineEnd()),n=d;else if(i&&n&&r^v){var y;g&e||!(y=a(p,n,!0))||(s=0,r?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&ef(n,p)||t.point(p[0],p[1]),n=p,c=v,e=g},lineEnd:function(){c&&t.lineEnd(),n=null},clean:function(){return s|(f&&c)<<1}}},function(n,r,i,o){Jc(o,t,e,i,n,r)},r?[0,-t]:[-ru,t-ru])}var vf=1e9,gf=-vf;function yf(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,u,f){var s=0,l=0;if(null==i||(s=a(i,u))!==(l=a(o,u))||c(i,o)<0^u>0)do{f.point(0===s||3===s?t:e,s>1?r:n)}while((s=(s+u+4)%4)!==l);else f.point(o[0],o[1])}function a(r,i){return fu(r[0]-t)<nu?i>0?0:3:fu(r[0]-e)<nu?i>0?2:1:fu(r[1]-n)<nu?i>0?1:0:i>0?3:2}function u(t,n){return c(t.x,n.x)}function c(t,n){var e=a(t,1),r=a(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(a){var c,f,s,l,h,d,p,v,g,y,_,b=a,m=nf(),x={point:w,lineStart:function(){x.point=M,f&&f.push(s=[]);y=!0,g=!1,p=v=NaN},lineEnd:function(){c&&(M(l,h),d&&g&&m.rejoin(),c.push(m.result()));x.point=w,g&&b.lineEnd()},polygonStart:function(){b=m,c=[],f=[],_=!0},polygonEnd:function(){var n=function(){for(var n=0,e=0,i=f.length;e<i;++e)for(var o,a,u=f[e],c=1,s=u.length,l=u[0],h=l[0],d=l[1];c<s;++c)o=h,a=d,l=u[c],h=l[0],d=l[1],a<=r?d>r&&(h-o)*(r-a)>(d-a)*(t-o)&&++n:d<=r&&(h-o)*(r-a)<(d-a)*(t-o)&&--n;return n}(),e=_&&n,i=(c=A(c)).length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),o(null,null,1,a),a.lineEnd()),i&&of(c,u,n,o,a),a.polygonEnd());b=a,c=f=s=null}};function w(t,n){i(t,n)&&b.point(t,n)}function M(o,a){var u=i(o,a);if(f&&s.push([o,a]),y)l=o,h=a,d=u,y=!1,u&&(b.lineStart(),b.point(o,a));else if(u&&g)b.point(o,a);else{var c=[p=Math.max(gf,Math.min(vf,p)),v=Math.max(gf,Math.min(vf,v))],m=[o=Math.max(gf,Math.min(vf,o)),a=Math.max(gf,Math.min(vf,a))];!function(t,n,e,r,i,o){var a,u=t[0],c=t[1],f=0,s=1,l=n[0]-u,h=n[1]-c;if(a=e-u,l||!(a>0)){if(a/=l,l<0){if(a<f)return;a<s&&(s=a)}else if(l>0){if(a>s)return;a>f&&(f=a)}if(a=i-u,l||!(a<0)){if(a/=l,l<0){if(a>s)return;a>f&&(f=a)}else if(l>0){if(a<f)return;a<s&&(s=a)}if(a=r-c,h||!(a>0)){if(a/=h,h<0){if(a<f)return;a<s&&(s=a)}else if(h>0){if(a>s)return;a>f&&(f=a)}if(a=o-c,h||!(a<0)){if(a/=h,h<0){if(a>s)return;a>f&&(f=a)}else if(h>0){if(a<f)return;a<s&&(s=a)}return f>0&&(t[0]=u+f*l,t[1]=c+f*h),s<1&&(n[0]=u+s*l,n[1]=c+s*h),!0}}}}}(c,m,t,n,e,r)?u&&(b.lineStart(),b.point(o,a),_=!1):(g||(b.lineStart(),b.point(c[0],c[1])),b.point(m[0],m[1]),u||b.lineEnd(),_=!1)}p=o,v=a,g=u}return x}}var _f,bf,mf,xf=Qa(),wf={sphere:Nu,point:Nu,lineStart:function(){wf.point=Nf,wf.lineEnd=Mf},lineEnd:Nu,polygonStart:Nu,polygonEnd:Nu};function Mf(){wf.point=wf.lineEnd=Nu}function Nf(t,n){_f=t*=cu,bf=yu(n*=cu),mf=hu(n),wf.point=Tf}function Tf(t,n){t*=cu;var e=yu(n*=cu),r=hu(n),i=fu(t-_f),o=hu(i),a=r*yu(i),u=mf*e-bf*r*o,c=bf*e+mf*r*o;xf.add(lu(bu(a*a+u*u),c)),_f=t,bf=e,mf=r}function Af(t){return xf.reset(),Cu(t,wf),+xf}var Sf=[null,null],kf={type:"LineString",coordinates:Sf};function Ef(t,n){return Sf[0]=t,Sf[1]=n,Af(kf)}var Cf={Feature:function(t,n){return zf(t.geometry,n)},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)if(zf(e[r].geometry,n))return!0;return!1}},Pf={Sphere:function(){return!0},Point:function(t,n){return Rf(t.coordinates,n)},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Rf(e[r],n))return!0;return!1},LineString:function(t,n){return Df(t.coordinates,n)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(Df(e[r],n))return!0;return!1},Polygon:function(t,n){return qf(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)if(qf(e[r],n))return!0;return!1},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)if(zf(e[r],n))return!0;return!1}};function zf(t,n){return!(!t||!Pf.hasOwnProperty(t.type))&&Pf[t.type](t,n)}function Rf(t,n){return 0===Ef(t,n)}function Df(t,n){for(var e,r,i,o=0,a=t.length;o<a;o++){if(0===(r=Ef(t[o],n)))return!0;if(o>0&&(i=Ef(t[o],t[o-1]))>0&&e<=i&&r<=i&&(e+r-i)*(1-Math.pow((e-r)/i,2))<eu*i)return!0;e=r}return!1}function qf(t,n){return!!ff(t.map(Lf),Uf(n))}function Lf(t){return(t=t.map(Uf)).pop(),t}function Uf(t){return[t[0]*cu,t[1]*cu]}function Of(t,n,e){var r=g(t,n-nu,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function Bf(t,n,e){var r=g(t,n-nu,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Ff(){var t,n,e,r,i,o,a,u,c,f,s,l,h=10,d=h,p=90,v=360,y=2.5;function _(){return{type:"MultiLineString",coordinates:b()}}function b(){return g(du(r/p)*p,e,p).map(s).concat(g(du(u/v)*v,a,v).map(l)).concat(g(du(n/h)*h,t,h).filter(function(t){return fu(t%p)>nu}).map(c)).concat(g(du(o/d)*d,i,d).filter(function(t){return fu(t%v)>nu}).map(f))}return _.lines=function(){return b().map(function(t){return{type:"LineString",coordinates:t}})},_.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(l(a).slice(1),s(e).reverse().slice(1),l(u).reverse().slice(1))]}},_.extent=function(t){return arguments.length?_.extentMajor(t).extentMinor(t):_.extentMinor()},_.extentMajor=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),u>a&&(t=u,u=a,a=t),_.precision(y)):[[r,u],[e,a]]},_.extentMinor=function(e){return arguments.length?(n=+e[0][0],t=+e[1][0],o=+e[0][1],i=+e[1][1],n>t&&(e=n,n=t,t=e),o>i&&(e=o,o=i,i=e),_.precision(y)):[[n,o],[t,i]]},_.step=function(t){return arguments.length?_.stepMajor(t).stepMinor(t):_.stepMinor()},_.stepMajor=function(t){return arguments.length?(p=+t[0],v=+t[1],_):[p,v]},_.stepMinor=function(t){return arguments.length?(h=+t[0],d=+t[1],_):[h,d]},_.precision=function(h){return arguments.length?(y=+h,c=Of(o,i,90),f=Bf(n,t,y),s=Of(u,a,90),l=Bf(r,e,y),_):y},_.extentMajor([[-180,-90+nu],[180,90-nu]]).extentMinor([[-180,-80-nu],[180,80+nu]])}function Yf(t){return t}var If,Hf,jf,Vf,Xf=Qa(),Gf=Qa(),$f={point:Nu,lineStart:Nu,lineEnd:Nu,polygonStart:function(){$f.lineStart=Wf,$f.lineEnd=Kf},polygonEnd:function(){$f.lineStart=$f.lineEnd=$f.point=Nu,Xf.add(fu(Gf)),Gf.reset()},result:function(){var t=Xf/2;return Xf.reset(),t}};function Wf(){$f.point=Zf}function Zf(t,n){$f.point=Qf,If=jf=t,Hf=Vf=n}function Qf(t,n){Gf.add(Vf*t-jf*n),jf=t,Vf=n}function Kf(){Qf(If,Hf)}var Jf=1/0,ts=Jf,ns=-Jf,es=ns,rs={point:function(t,n){t<Jf&&(Jf=t);t>ns&&(ns=t);n<ts&&(ts=n);n>es&&(es=n)},lineStart:Nu,lineEnd:Nu,polygonStart:Nu,polygonEnd:Nu,result:function(){var t=[[Jf,ts],[ns,es]];return ns=es=-(ts=Jf=1/0),t}};var is,os,as,us,cs=0,fs=0,ss=0,ls=0,hs=0,ds=0,ps=0,vs=0,gs=0,ys={point:_s,lineStart:bs,lineEnd:ws,polygonStart:function(){ys.lineStart=Ms,ys.lineEnd=Ns},polygonEnd:function(){ys.point=_s,ys.lineStart=bs,ys.lineEnd=ws},result:function(){var t=gs?[ps/gs,vs/gs]:ds?[ls/ds,hs/ds]:ss?[cs/ss,fs/ss]:[NaN,NaN];return cs=fs=ss=ls=hs=ds=ps=vs=gs=0,t}};function _s(t,n){cs+=t,fs+=n,++ss}function bs(){ys.point=ms}function ms(t,n){ys.point=xs,_s(as=t,us=n)}function xs(t,n){var e=t-as,r=n-us,i=bu(e*e+r*r);ls+=i*(as+t)/2,hs+=i*(us+n)/2,ds+=i,_s(as=t,us=n)}function ws(){ys.point=_s}function Ms(){ys.point=Ts}function Ns(){As(is,os)}function Ts(t,n){ys.point=As,_s(is=as=t,os=us=n)}function As(t,n){var e=t-as,r=n-us,i=bu(e*e+r*r);ls+=i*(as+t)/2,hs+=i*(us+n)/2,ds+=i,ps+=(i=us*t-as*n)*(as+t),vs+=i*(us+n),gs+=3*i,_s(as=t,us=n)}function Ss(t){this._context=t}Ss.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,au)}},result:Nu};var ks,Es,Cs,Ps,zs,Rs=Qa(),Ds={point:Nu,lineStart:function(){Ds.point=qs},lineEnd:function(){ks&&Ls(Es,Cs),Ds.point=Nu},polygonStart:function(){ks=!0},polygonEnd:function(){ks=null},result:function(){var t=+Rs;return Rs.reset(),t}};function qs(t,n){Ds.point=Ls,Es=Ps=t,Cs=zs=n}function Ls(t,n){Ps-=t,zs-=n,Rs.add(bu(Ps*Ps+zs*zs)),Ps=t,zs=n}function Us(){this._string=[]}function Os(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Bs(t){return function(n){var e=new Fs;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Fs(){}function Ys(t,n,e){var r=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Cu(e,t.stream(rs)),n(rs.result()),null!=r&&t.clipExtent(r),t}function Is(t,n,e){return Ys(t,function(e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=Math.min(r/(e[1][0]-e[0][0]),i/(e[1][1]-e[0][1])),a=+n[0][0]+(r-o*(e[1][0]+e[0][0]))/2,u=+n[0][1]+(i-o*(e[1][1]+e[0][1]))/2;t.scale(150*o).translate([a,u])},e)}function Hs(t,n,e){return Is(t,[[0,0],n],e)}function js(t,n,e){return Ys(t,function(e){var r=+n,i=r/(e[1][0]-e[0][0]),o=(r-i*(e[1][0]+e[0][0]))/2,a=-i*e[0][1];t.scale(150*i).translate([o,a])},e)}function Vs(t,n,e){return Ys(t,function(e){var r=+n,i=r/(e[1][1]-e[0][1]),o=-i*e[0][0],a=(r-i*(e[1][1]+e[0][1]))/2;t.scale(150*i).translate([o,a])},e)}Us.prototype={_radius:4.5,_circle:Os(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:null==this._circle&&(this._circle=Os(this._radius)),this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}return null}},Fs.prototype={constructor:Fs,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Xs=16,Gs=hu(30*cu);function $s(t,n){return+n?function(t,n){function e(r,i,o,a,u,c,f,s,l,h,d,p,v,g){var y=f-r,_=s-i,b=y*y+_*_;if(b>4*n&&v--){var m=a+h,x=u+d,w=c+p,M=bu(m*m+x*x+w*w),N=wu(w/=M),T=fu(fu(w)-1)<nu||fu(o-l)<nu?(o+l)/2:lu(x,m),A=t(T,N),S=A[0],k=A[1],E=S-r,C=k-i,P=_*E-y*C;(P*P/b>n||fu((y*E+_*C)/b-.5)>.3||a*h+u*d+c*p<Gs)&&(e(r,i,o,a,u,c,S,k,T,m/=M,x/=M,w,v,g),g.point(S,k),e(S,k,T,m,x,w,f,s,l,h,d,p,v,g))}}return function(n){var r,i,o,a,u,c,f,s,l,h,d,p,v={point:g,lineStart:y,lineEnd:b,polygonStart:function(){n.polygonStart(),v.lineStart=m},polygonEnd:function(){n.polygonEnd(),v.lineStart=y}};function g(e,r){e=t(e,r),n.point(e[0],e[1])}function y(){s=NaN,v.point=_,n.lineStart()}function _(r,i){var o=ju([r,i]),a=t(r,i);e(s,l,f,h,d,p,s=a[0],l=a[1],f=r,h=o[0],d=o[1],p=o[2],Xs,n),n.point(s,l)}function b(){v.point=g,n.lineEnd()}function m(){y(),v.point=x,v.lineEnd=w}function x(t,n){_(r=t,n),i=s,o=l,a=h,u=d,c=p,v.point=_}function w(){e(s,l,f,h,d,p,i,o,r,a,u,c,Xs,n),v.lineEnd=b,b()}return v}}(t,n):function(t){return Bs({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}(t)}var Ws=Bs({point:function(t,n){this.stream.point(t*cu,n*cu)}});function Zs(t,n,e,r){var i=hu(r),o=yu(r),a=i*t,u=o*t,c=i/t,f=o/t,s=(o*e-i*n)/t,l=(o*n+i*e)/t;function h(t,r){return[a*t-u*r+n,e-u*t-a*r]}return h.invert=function(t,n){return[c*t-f*n+s,l-f*t-c*n]},h}function Qs(t){return Ks(function(){return t})()}function Ks(t){var n,e,r,i,o,a,u,c,f,s,l=150,h=480,d=250,p=0,v=0,g=0,y=0,_=0,b=0,m=null,x=df,w=null,M=Yf,N=.5;function T(t){return c(t[0]*cu,t[1]*cu)}function A(t){return(t=c.invert(t[0],t[1]))&&[t[0]*uu,t[1]*uu]}function S(){var t=Zs(l,0,0,b).apply(null,n(p,v)),r=(b?Zs:function(t,n,e){function r(r,i){return[n+t*r,e-t*i]}return r.invert=function(r,i){return[(r-n)/t,(e-i)/t]},r})(l,h-t[0],d-t[1],b);return e=$c(g,y,_),u=Xc(n,r),c=Xc(e,u),a=$s(u,N),k()}function k(){return f=s=null,T}return T.stream=function(t){return f&&s===t?f:f=Ws(function(t){return Bs({point:function(n,e){var r=t(n,e);return this.stream.point(r[0],r[1])}})}(e)(x(a(M(s=t)))))},T.preclip=function(t){return arguments.length?(x=t,m=void 0,k()):x},T.postclip=function(t){return arguments.length?(M=t,w=r=i=o=null,k()):M},T.clipAngle=function(t){return arguments.length?(x=+t?pf(m=t*cu):(m=null,df),k()):m*uu},T.clipExtent=function(t){return arguments.length?(M=null==t?(w=r=i=o=null,Yf):yf(w=+t[0][0],r=+t[0][1],i=+t[1][0],o=+t[1][1]),k()):null==w?null:[[w,r],[i,o]]},T.scale=function(t){return arguments.length?(l=+t,S()):l},T.translate=function(t){return arguments.length?(h=+t[0],d=+t[1],S()):[h,d]},T.center=function(t){return arguments.length?(p=t[0]%360*cu,v=t[1]%360*cu,S()):[p*uu,v*uu]},T.rotate=function(t){return arguments.length?(g=t[0]%360*cu,y=t[1]%360*cu,_=t.length>2?t[2]%360*cu:0,S()):[g*uu,y*uu,_*uu]},T.angle=function(t){return arguments.length?(b=t%360*cu,S()):b*uu},T.precision=function(t){return arguments.length?(a=$s(u,N=t*t),k()):bu(N)},T.fitExtent=function(t,n){return Is(T,t,n)},T.fitSize=function(t,n){return Hs(T,t,n)},T.fitWidth=function(t,n){return js(T,t,n)},T.fitHeight=function(t,n){return Vs(T,t,n)},function(){return n=t.apply(this,arguments),T.invert=n.invert&&A,S()}}function Js(t){var n=0,e=ru/3,r=Ks(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*cu,e=t[1]*cu):[n*uu,e*uu]},i}function tl(t,n){var e=yu(t),r=(e+yu(n))/2;if(fu(r)<nu)return function(t){var n=hu(t);function e(t,e){return[t*n,yu(e)/n]}return e.invert=function(t,e){return[t/n,wu(e*n)]},e}(t);var i=1+e*(2*r-e),o=bu(i)/r;function a(t,n){var e=bu(i-2*r*yu(n))/r;return[e*yu(t*=r),o-e*hu(t)]}return a.invert=function(t,n){var e=o-n;return[lu(t,fu(e))/r*_u(e),wu((i-(t*t+e*e)*r*r)/(2*r))]},a}function nl(){return Js(tl).scale(155.424).center([0,33.6442])}function el(){return nl().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}function rl(t){return function(n,e){var r=hu(n),i=hu(e),o=t(r*i);return[o*i*yu(n),o*yu(e)]}}function il(t){return function(n,e){var r=bu(n*n+e*e),i=t(r),o=yu(i),a=hu(i);return[lu(n*o,r*a),wu(r&&e*o/r)]}}var ol=rl(function(t){return bu(2/(1+t))});ol.invert=il(function(t){return 2*wu(t/2)});var al=rl(function(t){return(t=xu(t))&&t/yu(t)});function ul(t,n){return[t,vu(mu((iu+n)/2))]}function cl(t){var n,e,r,i=Qs(t),o=i.center,a=i.scale,u=i.translate,c=i.clipExtent,f=null;function s(){var o=ru*a(),u=i(Kc(i.rotate()).invert([0,0]));return c(null==f?[[u[0]-o,u[1]-o],[u[0]+o,u[1]+o]]:t===ul?[[Math.max(u[0]-o,f),n],[Math.min(u[0]+o,e),r]]:[[f,Math.max(u[1]-o,n)],[e,Math.min(u[1]+o,r)]])}return i.scale=function(t){return arguments.length?(a(t),s()):a()},i.translate=function(t){return arguments.length?(u(t),s()):u()},i.center=function(t){return arguments.length?(o(t),s()):o()},i.clipExtent=function(t){return arguments.length?(null==t?f=n=e=r=null:(f=+t[0][0],n=+t[0][1],e=+t[1][0],r=+t[1][1]),s()):null==f?null:[[f,n],[e,r]]},s()}function fl(t){return mu((iu+t)/2)}function sl(t,n){var e=hu(t),r=t===n?yu(t):vu(e/hu(n))/vu(fl(n)/fl(t)),i=e*gu(fl(t),r)/r;if(!r)return ul;function o(t,n){i>0?n<-iu+nu&&(n=-iu+nu):n>iu-nu&&(n=iu-nu);var e=i/gu(fl(n),r);return[e*yu(r*t),i-e*hu(r*t)]}return o.invert=function(t,n){var e=i-n,o=_u(r)*bu(t*t+e*e);return[lu(t,fu(e))/r*_u(e),2*su(gu(i/o,1/r))-iu]},o}function ll(t,n){return[t,n]}function hl(t,n){var e=hu(t),r=t===n?yu(t):(e-hu(n))/(n-t),i=e/r+t;if(fu(r)<nu)return ll;function o(t,n){var e=i-n,o=r*t;return[e*yu(o),i-e*hu(o)]}return o.invert=function(t,n){var e=i-n;return[lu(t,fu(e))/r*_u(e),i-_u(r)*bu(t*t+e*e)]},o}al.invert=il(function(t){return t}),ul.invert=function(t,n){return[t,2*su(pu(n))-iu]},ll.invert=ll;var dl=1.340264,pl=-.081106,vl=893e-6,gl=.003796,yl=bu(3)/2;function _l(t,n){var e=wu(yl*yu(n)),r=e*e,i=r*r*r;return[t*hu(e)/(yl*(dl+3*pl*r+i*(7*vl+9*gl*r))),e*(dl+pl*r+i*(vl+gl*r))]}function bl(t,n){var e=hu(n),r=hu(t)*e;return[e*yu(t)/r,yu(n)/r]}function ml(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?Yf:Bs({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function xl(t,n){var e=n*n,r=e*e;return[t*(.8707-.131979*e+r*(r*(.003971*e-.001529*r)-.013791)),n*(1.007226+e*(.015085+r*(.028874*e-.044475-.005916*r)))]}function wl(t,n){return[hu(n)*yu(t),yu(n)]}function Ml(t,n){var e=hu(n),r=1+hu(t)*e;return[e*yu(t)/r,yu(n)/r]}function Nl(t,n){return[vu(mu((iu+n)/2)),-t]}function Tl(t,n){return t.parent===n.parent?1:2}function Al(t,n){return t+n.x}function Sl(t,n){return Math.max(t,n.y)}function kl(t){var n=0,e=t.children,r=e&&e.length;if(r)for(;--r>=0;)n+=e[r].value;else n=1;t.value=n}function El(t,n){var e,r,i,o,a,u=new Rl(t),c=+t.value&&(u.value=t.value),f=[u];for(null==n&&(n=Cl);e=f.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(a=i.length))for(e.children=new Array(a),o=a-1;o>=0;--o)f.push(r=e.children[o]=new Rl(i[o])),r.parent=e,r.depth=e.depth+1;return u.eachBefore(zl)}function Cl(t){return t.children}function Pl(t){t.data=t.data.data}function zl(t){var n=0;do{t.height=n}while((t=t.parent)&&t.height<++n)}function Rl(t){this.data=t,this.depth=this.height=0,this.parent=null}_l.invert=function(t,n){for(var e,r=n,i=r*r,o=i*i*i,a=0;a<12&&(o=(i=(r-=e=(r*(dl+pl*i+o*(vl+gl*i))-n)/(dl+3*pl*i+o*(7*vl+9*gl*i)))*r)*i*i,!(fu(e)<eu));++a);return[yl*t*(dl+3*pl*i+o*(7*vl+9*gl*i))/hu(r),wu(yu(r)/yl)]},bl.invert=il(su),xl.invert=function(t,n){var e,r=n,i=25;do{var o=r*r,a=o*o;r-=e=(r*(1.007226+o*(.015085+a*(.028874*o-.044475-.005916*a)))-n)/(1.007226+o*(.045255+a*(.259866*o-.311325-.005916*11*a)))}while(fu(e)>nu&&--i>0);return[t/(.8707+(o=r*r)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),r]},wl.invert=il(wu),Ml.invert=il(function(t){return 2*su(t)}),Nl.invert=function(t,n){return[-n,2*su(pu(t))-iu]},Rl.prototype=El.prototype={constructor:Rl,count:function(){return this.eachAfter(kl)},each:function(t){var n,e,r,i,o=this,a=[o];do{for(n=a.reverse(),a=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)a.push(e[r])}while(a.length);return this},eachAfter:function(t){for(var n,e,r,i=this,o=[i],a=[];i=o.pop();)if(a.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=a.pop();)t(i);return this},eachBefore:function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},sum:function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},sort:function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},path:function(t){for(var n=this,e=function(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},ancestors:function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},descendants:function(){var t=[];return this.each(function(n){t.push(n)}),t},leaves:function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},links:function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n},copy:function(){return El(this).eachBefore(Pl)}};var Dl=Array.prototype.slice;function ql(t){for(var n,e,r=0,i=(t=function(t){for(var n,e,r=t.length;r;)e=Math.random()*r--|0,n=t[r],t[r]=t[e],t[e]=n;return t}(Dl.call(t))).length,o=[];r<i;)n=t[r],e&&Ol(e,n)?++r:(e=Fl(o=Ll(o,n)),r=0);return e}function Ll(t,n){var e,r;if(Bl(n,t))return[n];for(e=0;e<t.length;++e)if(Ul(n,t[e])&&Bl(Yl(t[e],n),t))return[t[e],n];for(e=0;e<t.length-1;++e)for(r=e+1;r<t.length;++r)if(Ul(Yl(t[e],t[r]),n)&&Ul(Yl(t[e],n),t[r])&&Ul(Yl(t[r],n),t[e])&&Bl(Il(t[e],t[r],n),t))return[t[e],t[r],n];throw new Error}function Ul(t,n){var e=t.r-n.r,r=n.x-t.x,i=n.y-t.y;return e<0||e*e<r*r+i*i}function Ol(t,n){var e=t.r-n.r+1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Bl(t,n){for(var e=0;e<n.length;++e)if(!Ol(t,n[e]))return!1;return!0}function Fl(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0]);case 2:return Yl(t[0],t[1]);case 3:return Il(t[0],t[1],t[2])}}function Yl(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,a=n.y,u=n.r,c=o-e,f=a-r,s=u-i,l=Math.sqrt(c*c+f*f);return{x:(e+o+c/l*s)/2,y:(r+a+f/l*s)/2,r:(l+i+u)/2}}function Il(t,n,e){var r=t.x,i=t.y,o=t.r,a=n.x,u=n.y,c=n.r,f=e.x,s=e.y,l=e.r,h=r-a,d=r-f,p=i-u,v=i-s,g=c-o,y=l-o,_=r*r+i*i-o*o,b=_-a*a-u*u+c*c,m=_-f*f-s*s+l*l,x=d*p-h*v,w=(p*m-v*b)/(2*x)-r,M=(v*g-p*y)/x,N=(d*b-h*m)/(2*x)-i,T=(h*y-d*g)/x,A=M*M+T*T-1,S=2*(o+w*M+N*T),k=w*w+N*N-o*o,E=-(A?(S+Math.sqrt(S*S-4*A*k))/(2*A):k/S);return{x:r+w+M*E,y:i+N+T*E,r:E}}function Hl(t,n,e){var r,i,o,a,u=t.x-n.x,c=t.y-n.y,f=u*u+c*c;f?(i=n.r+e.r,i*=i,a=t.r+e.r,i>(a*=a)?(r=(f+a-i)/(2*f),o=Math.sqrt(Math.max(0,a/f-r*r)),e.x=t.x-r*u-o*c,e.y=t.y-r*c+o*u):(r=(f+i-a)/(2*f),o=Math.sqrt(Math.max(0,i/f-r*r)),e.x=n.x+r*u-o*c,e.y=n.y+r*c+o*u)):(e.x=n.x+e.r,e.y=n.y)}function jl(t,n){var e=t.r+n.r-1e-6,r=n.x-t.x,i=n.y-t.y;return e>0&&e*e>r*r+i*i}function Vl(t){var n=t._,e=t.next._,r=n.r+e.r,i=(n.x*e.r+e.x*n.r)/r,o=(n.y*e.r+e.y*n.r)/r;return i*i+o*o}function Xl(t){this._=t,this.next=null,this.previous=null}function Gl(t){if(!(i=t.length))return 0;var n,e,r,i,o,a,u,c,f,s,l;if((n=t[0]).x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;Hl(e,n,r=t[2]),n=new Xl(n),e=new Xl(e),r=new Xl(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(u=3;u<i;++u){Hl(n._,e._,r=t[u]),r=new Xl(r),c=e.next,f=n.previous,s=e._.r,l=n._.r;do{if(s<=l){if(jl(c._,r._)){e=c,n.next=e,e.previous=n,--u;continue t}s+=c._.r,c=c.next}else{if(jl(f._,r._)){(n=f).next=e,e.previous=n,--u;continue t}l+=f._.r,f=f.previous}}while(c!==f.next);for(r.previous=n,r.next=e,n.next=e.previous=e=r,o=Vl(n);(r=r.next)!==e;)(a=Vl(r))<o&&(n=r,o=a);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=ql(n),u=0;u<i;++u)(n=t[u]).x-=r.x,n.y-=r.y;return r.r}function $l(t){return null==t?null:Wl(t)}function Wl(t){if("function"!=typeof t)throw new Error;return t}function Zl(){return 0}function Ql(t){return function(){return t}}function Kl(t){return Math.sqrt(t.value)}function Jl(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function th(t,n){return function(e){if(r=e.children){var r,i,o,a=r.length,u=t(e)*n||0;if(u)for(i=0;i<a;++i)r[i].r+=u;if(o=Gl(r),u)for(i=0;i<a;++i)r[i].r-=u;e.r=o+u}}}function nh(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function eh(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)}function rh(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(r-n)/t.value;++u<c;)(o=a[u]).y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*f}var ih="$",oh={depth:-1},ah={};function uh(t){return t.id}function ch(t){return t.parentId}function fh(t,n){return t.parent===n.parent?1:2}function sh(t){var n=t.children;return n?n[0]:t.t}function lh(t){var n=t.children;return n?n[n.length-1]:t.t}function hh(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function dh(t,n,e){return t.a.parent===n.parent?t.a:e}function ph(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function vh(t,n,e,r,i){for(var o,a=t.children,u=-1,c=a.length,f=t.value&&(i-e)/t.value;++u<c;)(o=a[u]).x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*f}ph.prototype=Object.create(Rl.prototype);var gh=(1+Math.sqrt(5))/2;function yh(t,n,e,r,i,o){for(var a,u,c,f,s,l,h,d,p,v,g,y=[],_=n.children,b=0,m=0,x=_.length,w=n.value;b<x;){c=i-e,f=o-r;do{s=_[m++].value}while(!s&&m<x);for(l=h=s,g=s*s*(v=Math.max(f/c,c/f)/(w*t)),p=Math.max(h/g,g/l);m<x;++m){if(s+=u=_[m].value,u<l&&(l=u),u>h&&(h=u),g=s*s*v,(d=Math.max(h/g,g/l))>p){s-=u;break}p=d}y.push(a={value:s,dice:c<f,children:_.slice(b,m)}),a.dice?rh(a,e,r,i,w?r+=f*s/w:o):vh(a,e,r,w?e+=c*s/w:i,o),w-=s,b=m}return y}var _h=function t(n){function e(t,e,r,i,o){yh(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(gh);var bh=function t(n){function e(t,e,r,i,o){if((a=t._squarify)&&a.ratio===n)for(var a,u,c,f,s,l=-1,h=a.length,d=t.value;++l<h;){for(c=(u=a[l]).children,f=u.value=0,s=c.length;f<s;++f)u.value+=c[f].value;u.dice?rh(u,e,r,i,r+=(o-r)*u.value/d):vh(u,e,r,e+=(i-e)*u.value/d,o),d-=u.value}else t._squarify=a=yh(n,t,e,r,i,o),a.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(gh);function mh(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function xh(t,n){return t[0]-n[0]||t[1]-n[1]}function wh(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&mh(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function Mh(){return Math.random()}var Nh=function t(n){function e(t,e){return t=null==t?0:+t,e=null==e?1:+e,1===arguments.length?(e=t,t=0):e-=t,function(){return n()*e+t}}return e.source=t,e}(Mh),Th=function t(n){function e(t,e){var r,i;return t=null==t?0:+t,e=null==e?1:+e,function(){var o;if(null!=r)o=r,r=null;else do{r=2*n()-1,o=2*n()-1,i=r*r+o*o}while(!i||i>1);return t+e*o*Math.sqrt(-2*Math.log(i)/i)}}return e.source=t,e}(Mh),Ah=function t(n){function e(){var t=Th.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return e.source=t,e}(Mh),Sh=function t(n){function e(t){return function(){for(var e=0,r=0;r<t;++r)e+=n();return e}}return e.source=t,e}(Mh),kh=function t(n){function e(t){var e=Sh.source(n)(t);return function(){return e()/t}}return e.source=t,e}(Mh),Eh=function t(n){function e(t){return function(){return-Math.log(1-n())/t}}return e.source=t,e}(Mh);function Ch(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function Ph(t,n){switch(arguments.length){case 0:break;case 1:this.interpolator(t);break;default:this.interpolator(n).domain(t)}return this}var zh=Array.prototype,Rh=zh.map,Dh=zh.slice,qh={name:"implicit"};function Lh(){var t=co(),n=[],e=[],r=qh;function i(i){var o=i+"",a=t.get(o);if(!a){if(r!==qh)return r;t.set(o,a=n.push(i))}return e[(a-1)%e.length]}return i.domain=function(e){if(!arguments.length)return n.slice();n=[],t=co();for(var r,o,a=-1,u=e.length;++a<u;)t.has(o=(r=e[a])+"")||t.set(o,n.push(r));return i},i.range=function(t){return arguments.length?(e=Dh.call(t),i):e.slice()},i.unknown=function(t){return arguments.length?(r=t,i):r},i.copy=function(){return Lh(n,e).unknown(r)},Ch.apply(i,arguments),i}function Uh(){var t,n,e=Lh().unknown(void 0),r=e.domain,i=e.range,o=[0,1],a=!1,u=0,c=0,f=.5;function s(){var e=r().length,s=o[1]<o[0],l=o[s-0],h=o[1-s];t=(h-l)/Math.max(1,e-u+2*c),a&&(t=Math.floor(t)),l+=(h-l-t*(e-u))*f,n=t*(1-u),a&&(l=Math.round(l),n=Math.round(n));var d=g(e).map(function(n){return l+t*n});return i(s?d.reverse():d)}return delete e.unknown,e.domain=function(t){return arguments.length?(r(t),s()):r()},e.range=function(t){return arguments.length?(o=[+t[0],+t[1]],s()):o.slice()},e.rangeRound=function(t){return o=[+t[0],+t[1]],a=!0,s()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(a=!!t,s()):a},e.padding=function(t){return arguments.length?(u=Math.min(1,c=+t),s()):u},e.paddingInner=function(t){return arguments.length?(u=Math.min(1,t),s()):u},e.paddingOuter=function(t){return arguments.length?(c=+t,s()):c},e.align=function(t){return arguments.length?(f=Math.max(0,Math.min(1,t)),s()):f},e.copy=function(){return Uh(r(),o).round(a).paddingInner(u).paddingOuter(c).align(f)},Ch.apply(s(),arguments)}function Oh(t){return+t}var Bh=[0,1];function Fh(t){return t}function Yh(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:function(t){return function(){return t}}(isNaN(n)?NaN:.5)}function Ih(t){var n,e=t[0],r=t[t.length-1];return e>r&&(n=e,e=r,r=n),function(t){return Math.max(e,Math.min(r,t))}}function Hh(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=Yh(i,r),o=e(a,o)):(r=Yh(r,i),o=e(o,a)),function(t){return o(r(t))}}function jh(t,n,e){var r=Math.min(t.length,n.length)-1,o=new Array(r),a=new Array(r),u=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<r;)o[u]=Yh(t[u],t[u+1]),a[u]=e(n[u],n[u+1]);return function(n){var e=i(t,n,1,r)-1;return a[e](o[e](n))}}function Vh(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Xh(){var t,n,e,r,i,o,a=Bh,u=Bh,c=Te,f=Fh;function s(){return r=Math.min(a.length,u.length)>2?jh:Hh,i=o=null,l}function l(n){return isNaN(n=+n)?e:(i||(i=r(a.map(t),u,c)))(t(f(n)))}return l.invert=function(e){return f(n((o||(o=r(u,a.map(t),me)))(e)))},l.domain=function(t){return arguments.length?(a=Rh.call(t,Oh),f===Fh||(f=Ih(a)),s()):a.slice()},l.range=function(t){return arguments.length?(u=Dh.call(t),s()):u.slice()},l.rangeRound=function(t){return u=Dh.call(t),c=Ae,s()},l.clamp=function(t){return arguments.length?(f=t?Ih(a):Fh,l):f!==Fh},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(e=t,l):e},function(e,r){return t=e,n=r,s()}}function Gh(t,n){return Xh()(t,n)}function $h(n,e,r,i){var o,a=w(n,e,r);switch((i=Oa(null==i?",f":i)).type){case"s":var u=Math.max(Math.abs(n),Math.abs(e));return null!=i.precision||isNaN(o=Wa(a,u))||(i.precision=o),t.formatPrefix(i,u);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Za(a,Math.max(Math.abs(n),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=$a(a))||(i.precision=o-2*("%"===i.type))}return t.format(i)}function Wh(t){var n=t.domain;return t.ticks=function(t){var e=n();return m(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return $h(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i=n(),o=0,a=i.length-1,u=i[o],c=i[a];return c<u&&(r=u,u=c,c=r,r=o,o=a,a=r),(r=x(u,c,e))>0?r=x(u=Math.floor(u/r)*r,c=Math.ceil(c/r)*r,e):r<0&&(r=x(u=Math.ceil(u*r)/r,c=Math.floor(c*r)/r,e)),r>0?(i[o]=Math.floor(u/r)*r,i[a]=Math.ceil(c/r)*r,n(i)):r<0&&(i[o]=Math.ceil(u*r)/r,i[a]=Math.floor(c*r)/r,n(i)),t},t}function Zh(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],a=t[i];return a<o&&(e=r,r=i,i=e,e=o,o=a,a=e),t[r]=n.floor(o),t[i]=n.ceil(a),t}function Qh(t){return Math.log(t)}function Kh(t){return Math.exp(t)}function Jh(t){return-Math.log(-t)}function td(t){return-Math.exp(-t)}function nd(t){return isFinite(t)?+("1e"+t):t<0?0:t}function ed(t){return function(n){return-t(-n)}}function rd(n){var e,r,i=n(Qh,Kh),o=i.domain,a=10;function u(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(a),r=function(t){return 10===t?nd:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(a),o()[0]<0?(e=ed(e),r=ed(r),n(Jh,td)):n(Qh,Kh),i}return i.base=function(t){return arguments.length?(a=+t,u()):a},i.domain=function(t){return arguments.length?(o(t),u()):o()},i.ticks=function(t){var n,i=o(),u=i[0],c=i[i.length-1];(n=c<u)&&(h=u,u=c,c=h);var f,s,l,h=e(u),d=e(c),p=null==t?10:+t,v=[];if(!(a%1)&&d-h<p){if(h=Math.round(h)-1,d=Math.round(d)+1,u>0){for(;h<d;++h)for(s=1,f=r(h);s<a;++s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else for(;h<d;++h)for(s=a-1,f=r(h);s>=1;--s)if(!((l=f*s)<u)){if(l>c)break;v.push(l)}}else v=m(h,d,Math.min(d-h,p)).map(r);return n?v.reverse():v},i.tickFormat=function(n,o){if(null==o&&(o=10===a?".0e":","),"function"!=typeof o&&(o=t.format(o)),n===1/0)return o;null==n&&(n=10);var u=Math.max(1,a*n/i.ticks().length);return function(t){var n=t/r(Math.round(e(t)));return n*a<a-.5&&(n*=a),n<=u?o(t):""}},i.nice=function(){return o(Zh(o(),{floor:function(t){return r(Math.floor(e(t)))},ceil:function(t){return r(Math.ceil(e(t)))}}))},i}function id(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function od(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function ad(t){var n=1,e=t(id(n),od(n));return e.constant=function(e){return arguments.length?t(id(n=+e),od(n)):n},Wh(e)}function ud(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function cd(t){return t<0?-Math.sqrt(-t):Math.sqrt(t)}function fd(t){return t<0?-t*t:t*t}function sd(t){var n=t(Fh,Fh),e=1;function r(){return 1===e?t(Fh,Fh):.5===e?t(cd,fd):t(ud(e),ud(1/e))}return n.exponent=function(t){return arguments.length?(e=+t,r()):e},Wh(n)}function ld(){var t=sd(Xh());return t.copy=function(){return Vh(t,ld()).exponent(t.exponent())},Ch.apply(t,arguments),t}var hd=new Date,dd=new Date;function pd(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var a,u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do{u.push(a=new Date(+e)),n(e,o),t(e)}while(a<e&&e<r);return u},i.filter=function(e){return pd(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return hd.setTime(+n),dd.setTime(+r),t(hd),t(dd),Math.floor(e(hd,dd))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var vd=pd(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});vd.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?pd(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):vd:null};var gd=vd.range,yd=6e4,_d=6048e5,bd=pd(function(t){t.setTime(t-t.getMilliseconds())},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),md=bd.range,xd=pd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())},function(t,n){t.setTime(+t+n*yd)},function(t,n){return(n-t)/yd},function(t){return t.getMinutes()}),wd=xd.range,Md=pd(function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-t.getMinutes()*yd)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),Nd=Md.range,Td=pd(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*yd)/864e5},function(t){return t.getDate()-1}),Ad=Td.range;function Sd(t){return pd(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*yd)/_d})}var kd=Sd(0),Ed=Sd(1),Cd=Sd(2),Pd=Sd(3),zd=Sd(4),Rd=Sd(5),Dd=Sd(6),qd=kd.range,Ld=Ed.range,Ud=Cd.range,Od=Pd.range,Bd=zd.range,Fd=Rd.range,Yd=Dd.range,Id=pd(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Hd=Id.range,jd=pd(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});jd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?pd(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var Vd=jd.range,Xd=pd(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*yd)},function(t,n){return(n-t)/yd},function(t){return t.getUTCMinutes()}),Gd=Xd.range,$d=pd(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),Wd=$d.range,Zd=pd(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),Qd=Zd.range;function Kd(t){return pd(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/_d})}var Jd=Kd(0),tp=Kd(1),np=Kd(2),ep=Kd(3),rp=Kd(4),ip=Kd(5),op=Kd(6),ap=Jd.range,up=tp.range,cp=np.range,fp=ep.range,sp=rp.range,lp=ip.range,hp=op.range,dp=pd(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),pp=dp.range,vp=pd(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});vp.every=function(t){return isFinite(t=Math.floor(t))&&t>0?pd(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var gp=vp.range;function yp(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function _p(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function bp(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function mp(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,u=t.months,c=t.shortMonths,f=kp(i),s=Ep(i),l=kp(o),h=Ep(o),d=kp(a),p=Ep(a),v=kp(u),g=Ep(u),y=kp(c),_=Ep(c),b={a:function(t){return a[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return u[t.getMonth()]},c:null,d:Zp,e:Zp,f:nv,H:Qp,I:Kp,j:Jp,L:tv,m:ev,M:rv,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Pv,s:zv,S:iv,u:ov,U:av,V:uv,w:cv,W:fv,x:null,X:null,y:sv,Y:lv,Z:hv,"%":Cv},m={a:function(t){return a[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return u[t.getUTCMonth()]},c:null,d:dv,e:dv,f:_v,H:pv,I:vv,j:gv,L:yv,m:bv,M:mv,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Pv,s:zv,S:xv,u:wv,U:Mv,V:Nv,w:Tv,W:Av,x:null,X:null,y:Sv,Y:kv,Z:Ev,"%":Cv},x={a:function(t,n,e){var r=d.exec(n.slice(e));return r?(t.w=p[r[0].toLowerCase()],e+r[0].length):-1},A:function(t,n,e){var r=l.exec(n.slice(e));return r?(t.w=h[r[0].toLowerCase()],e+r[0].length):-1},b:function(t,n,e){var r=y.exec(n.slice(e));return r?(t.m=_[r[0].toLowerCase()],e+r[0].length):-1},B:function(t,n,e){var r=v.exec(n.slice(e));return r?(t.m=g[r[0].toLowerCase()],e+r[0].length):-1},c:function(t,e,r){return N(t,n,e,r)},d:Fp,e:Fp,f:Xp,H:Ip,I:Ip,j:Yp,L:Vp,m:Bp,M:Hp,p:function(t,n,e){var r=f.exec(n.slice(e));return r?(t.p=s[r[0].toLowerCase()],e+r[0].length):-1},q:Op,Q:$p,s:Wp,S:jp,u:Pp,U:zp,V:Rp,w:Cp,W:Dp,x:function(t,n,r){return N(t,e,n,r)},X:function(t,n,e){return N(t,r,n,e)},y:Lp,Y:qp,Z:Up,"%":Gp};function w(t,n){return function(e){var r,i,o,a=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(a.push(t.slice(c,u)),null!=(i=wp[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),a.push(r),c=u+1);return a.push(t.slice(c,u)),a.join("")}}function M(t,n){return function(e){var r,i,o=bp(1900,void 0,1);if(N(o,t,e+="",0)!=e.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(!n||"Z"in o||(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(r=_p(bp(o.y,0,1))).getUTCDay(),r=i>4||0===i?tp.ceil(r):tp(r),r=Zd.offset(r,7*(o.V-1)),o.y=r.getUTCFullYear(),o.m=r.getUTCMonth(),o.d=r.getUTCDate()+(o.w+6)%7):(i=(r=yp(bp(o.y,0,1))).getDay(),r=i>4||0===i?Ed.ceil(r):Ed(r),r=Td.offset(r,7*(o.V-1)),o.y=r.getFullYear(),o.m=r.getMonth(),o.d=r.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?_p(bp(o.y,0,1)).getUTCDay():yp(bp(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,_p(o)):yp(o)}}function N(t,n,e,r){for(var i,o,a=0,u=n.length,c=e.length;a<u;){if(r>=c)return-1;if(37===(i=n.charCodeAt(a++))){if(i=n.charAt(a++),!(o=x[i in wp?n.charAt(a++):i])||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}return b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),m.x=w(e,m),m.X=w(r,m),m.c=w(n,m),{format:function(t){var n=w(t+="",b);return n.toString=function(){return t},n},parse:function(t){var n=M(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=w(t+="",m);return n.toString=function(){return t},n},utcParse:function(t){var n=M(t+="",!0);return n.toString=function(){return t},n}}}var xp,wp={"-":"",_:" ",0:"0"},Mp=/^\s*\d+/,Np=/^%/,Tp=/[\\^$*+?|[\]().{}]/g;function Ap(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Sp(t){return t.replace(Tp,"\\$&")}function kp(t){return new RegExp("^(?:"+t.map(Sp).join("|")+")","i")}function Ep(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Cp(t,n,e){var r=Mp.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Pp(t,n,e){var r=Mp.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function zp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function Rp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function Dp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function qp(t,n,e){var r=Mp.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function Lp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Up(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Op(t,n,e){var r=Mp.exec(n.slice(e,e+1));return r?(t.q=3*r[0]-3,e+r[0].length):-1}function Bp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Fp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Yp(t,n,e){var r=Mp.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Ip(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Hp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function jp(t,n,e){var r=Mp.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Vp(t,n,e){var r=Mp.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Xp(t,n,e){var r=Mp.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function Gp(t,n,e){var r=Np.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function $p(t,n,e){var r=Mp.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function Wp(t,n,e){var r=Mp.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function Zp(t,n){return Ap(t.getDate(),n,2)}function Qp(t,n){return Ap(t.getHours(),n,2)}function Kp(t,n){return Ap(t.getHours()%12||12,n,2)}function Jp(t,n){return Ap(1+Td.count(jd(t),t),n,3)}function tv(t,n){return Ap(t.getMilliseconds(),n,3)}function nv(t,n){return tv(t,n)+"000"}function ev(t,n){return Ap(t.getMonth()+1,n,2)}function rv(t,n){return Ap(t.getMinutes(),n,2)}function iv(t,n){return Ap(t.getSeconds(),n,2)}function ov(t){var n=t.getDay();return 0===n?7:n}function av(t,n){return Ap(kd.count(jd(t)-1,t),n,2)}function uv(t,n){var e=t.getDay();return t=e>=4||0===e?zd(t):zd.ceil(t),Ap(zd.count(jd(t),t)+(4===jd(t).getDay()),n,2)}function cv(t){return t.getDay()}function fv(t,n){return Ap(Ed.count(jd(t)-1,t),n,2)}function sv(t,n){return Ap(t.getFullYear()%100,n,2)}function lv(t,n){return Ap(t.getFullYear()%1e4,n,4)}function hv(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Ap(n/60|0,"0",2)+Ap(n%60,"0",2)}function dv(t,n){return Ap(t.getUTCDate(),n,2)}function pv(t,n){return Ap(t.getUTCHours(),n,2)}function vv(t,n){return Ap(t.getUTCHours()%12||12,n,2)}function gv(t,n){return Ap(1+Zd.count(vp(t),t),n,3)}function yv(t,n){return Ap(t.getUTCMilliseconds(),n,3)}function _v(t,n){return yv(t,n)+"000"}function bv(t,n){return Ap(t.getUTCMonth()+1,n,2)}function mv(t,n){return Ap(t.getUTCMinutes(),n,2)}function xv(t,n){return Ap(t.getUTCSeconds(),n,2)}function wv(t){var n=t.getUTCDay();return 0===n?7:n}function Mv(t,n){return Ap(Jd.count(vp(t)-1,t),n,2)}function Nv(t,n){var e=t.getUTCDay();return t=e>=4||0===e?rp(t):rp.ceil(t),Ap(rp.count(vp(t),t)+(4===vp(t).getUTCDay()),n,2)}function Tv(t){return t.getUTCDay()}function Av(t,n){return Ap(tp.count(vp(t)-1,t),n,2)}function Sv(t,n){return Ap(t.getUTCFullYear()%100,n,2)}function kv(t,n){return Ap(t.getUTCFullYear()%1e4,n,4)}function Ev(){return"+0000"}function Cv(){return"%"}function Pv(t){return+t}function zv(t){return Math.floor(+t/1e3)}function Rv(n){return xp=mp(n),t.timeFormat=xp.format,t.timeParse=xp.parse,t.utcFormat=xp.utcFormat,t.utcParse=xp.utcParse,xp}Rv({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Dv=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ");var qv=+new Date("2000-01-01T00:00:00.000Z")?function(t){var n=new Date(t);return isNaN(n)?null:n}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),Lv=1e3,Uv=60*Lv,Ov=60*Uv,Bv=24*Ov,Fv=7*Bv,Yv=30*Bv,Iv=365*Bv;function Hv(t){return new Date(t)}function jv(t){return t instanceof Date?+t:+new Date(+t)}function Vv(t,n,r,i,o,a,u,c,f){var s=Gh(Fh,Fh),l=s.invert,h=s.domain,d=f(".%L"),p=f(":%S"),v=f("%I:%M"),g=f("%I %p"),y=f("%a %d"),_=f("%b %d"),b=f("%B"),m=f("%Y"),x=[[u,1,Lv],[u,5,5*Lv],[u,15,15*Lv],[u,30,30*Lv],[a,1,Uv],[a,5,5*Uv],[a,15,15*Uv],[a,30,30*Uv],[o,1,Ov],[o,3,3*Ov],[o,6,6*Ov],[o,12,12*Ov],[i,1,Bv],[i,2,2*Bv],[r,1,Fv],[n,1,Yv],[n,3,3*Yv],[t,1,Iv]];function M(e){return(u(e)<e?d:a(e)<e?p:o(e)<e?v:i(e)<e?g:n(e)<e?r(e)<e?y:_:t(e)<e?b:m)(e)}function N(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(i-r)/n,u=e(function(t){return t[2]}).right(x,a);u===x.length?(o=w(r/Iv,i/Iv,n),n=t):u?(o=(u=x[a/x[u-1][2]<x[u][2]/a?u-1:u])[1],n=u[0]):(o=Math.max(w(r,i,n),1),n=c)}return null==o?n:n.every(o)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?h(Rh.call(t,jv)):h().map(Hv)},s.ticks=function(t,n){var e,r=h(),i=r[0],o=r[r.length-1],a=o<i;return a&&(e=i,i=o,o=e),e=(e=N(t,i,o,n))?e.range(i,o+1):[],a?e.reverse():e},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t,n){var e=h();return(t=N(t,e[0],e[e.length-1],n))?h(Zh(e,t)):s},s.copy=function(){return Vh(s,Vv(t,n,r,i,o,a,u,c,f))},s}function Xv(){var t,n,e,r,i,o=0,a=1,u=Fh,c=!1;function f(n){return isNaN(n=+n)?i:u(0===e?.5:(n=(r(n)-t)*e,c?Math.max(0,Math.min(1,n)):n))}return f.domain=function(i){return arguments.length?(t=r(o=+i[0]),n=r(a=+i[1]),e=t===n?0:1/(n-t),f):[o,a]},f.clamp=function(t){return arguments.length?(c=!!t,f):c},f.interpolator=function(t){return arguments.length?(u=t,f):u},f.unknown=function(t){return arguments.length?(i=t,f):i},function(i){return r=i,t=i(o),n=i(a),e=t===n?0:1/(n-t),f}}function Gv(t,n){return n.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown())}function $v(){var t=sd(Xv());return t.copy=function(){return Gv(t,$v()).exponent(t.exponent())},Ph.apply(t,arguments)}function Wv(){var t,n,e,r,i,o,a,u=0,c=.5,f=1,s=Fh,l=!1;function h(t){return isNaN(t=+t)?a:(t=.5+((t=+o(t))-n)*(t<n?r:i),s(l?Math.max(0,Math.min(1,t)):t))}return h.domain=function(a){return arguments.length?(t=o(u=+a[0]),n=o(c=+a[1]),e=o(f=+a[2]),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h):[u,c,f]},h.clamp=function(t){return arguments.length?(l=!!t,h):l},h.interpolator=function(t){return arguments.length?(s=t,h):s},h.unknown=function(t){return arguments.length?(a=t,h):a},function(a){return o=a,t=a(u),n=a(c),e=a(f),r=t===n?0:.5/(n-t),i=n===e?0:.5/(e-n),h}}function Zv(){var t=sd(Wv());return t.copy=function(){return Gv(t,Zv()).exponent(t.exponent())},Ph.apply(t,arguments)}function Qv(t){for(var n=t.length/6|0,e=new Array(n),r=0;r<n;)e[r]="#"+t.slice(6*r,6*++r);return e}var Kv=Qv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),Jv=Qv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),tg=Qv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),ng=Qv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),eg=Qv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),rg=Qv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),ig=Qv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),og=Qv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),ag=Qv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),ug=Qv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function cg(t){return pe(t[t.length-1])}var fg=new Array(3).concat("d8b365f5f5f55ab4ac","a6611adfc27d80cdc1018571","a6611adfc27df5f5f580cdc1018571","8c510ad8b365f6e8c3c7eae55ab4ac01665e","8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e","8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e","8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e","5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30","5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Qv),sg=cg(fg),lg=new Array(3).concat("af8dc3f7f7f77fbf7b","7b3294c2a5cfa6dba0008837","7b3294c2a5cff7f7f7a6dba0008837","762a83af8dc3e7d4e8d9f0d37fbf7b1b7837","762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837","762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837","762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837","40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b","40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Qv),hg=cg(lg),dg=new Array(3).concat("e9a3c9f7f7f7a1d76a","d01c8bf1b6dab8e1864dac26","d01c8bf1b6daf7f7f7b8e1864dac26","c51b7de9a3c9fde0efe6f5d0a1d76a4d9221","c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221","c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221","c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221","8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419","8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Qv),pg=cg(dg),vg=new Array(3).concat("998ec3f7f7f7f1a340","5e3c99b2abd2fdb863e66101","5e3c99b2abd2f7f7f7fdb863e66101","542788998ec3d8daebfee0b6f1a340b35806","542788998ec3d8daebf7f7f7fee0b6f1a340b35806","5427888073acb2abd2d8daebfee0b6fdb863e08214b35806","5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806","2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08","2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Qv),gg=cg(vg),yg=new Array(3).concat("ef8a62f7f7f767a9cf","ca0020f4a58292c5de0571b0","ca0020f4a582f7f7f792c5de0571b0","b2182bef8a62fddbc7d1e5f067a9cf2166ac","b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac","b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac","b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac","67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061","67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Qv),_g=cg(yg),bg=new Array(3).concat("ef8a62ffffff999999","ca0020f4a582bababa404040","ca0020f4a582ffffffbababa404040","b2182bef8a62fddbc7e0e0e09999994d4d4d","b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d","b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d","b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d","67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a","67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Qv),mg=cg(bg),xg=new Array(3).concat("fc8d59ffffbf91bfdb","d7191cfdae61abd9e92c7bb6","d7191cfdae61ffffbfabd9e92c7bb6","d73027fc8d59fee090e0f3f891bfdb4575b4","d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4","d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4","d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4","a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695","a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Qv),wg=cg(xg),Mg=new Array(3).concat("fc8d59ffffbf91cf60","d7191cfdae61a6d96a1a9641","d7191cfdae61ffffbfa6d96a1a9641","d73027fc8d59fee08bd9ef8b91cf601a9850","d73027fc8d59fee08bffffbfd9ef8b91cf601a9850","d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850","d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850","a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837","a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Qv),Ng=cg(Mg),Tg=new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Qv),Ag=cg(Tg),Sg=new Array(3).concat("e5f5f999d8c92ca25f","edf8fbb2e2e266c2a4238b45","edf8fbb2e2e266c2a42ca25f006d2c","edf8fbccece699d8c966c2a42ca25f006d2c","edf8fbccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824","f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Qv),kg=cg(Sg),Eg=new Array(3).concat("e0ecf49ebcda8856a7","edf8fbb3cde38c96c688419d","edf8fbb3cde38c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68856a7810f7c","edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b","f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Qv),Cg=cg(Eg),Pg=new Array(3).concat("e0f3dba8ddb543a2ca","f0f9e8bae4bc7bccc42b8cbe","f0f9e8bae4bc7bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc443a2ca0868ac","f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e","f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Qv),zg=cg(Pg),Rg=new Array(3).concat("fee8c8fdbb84e34a33","fef0d9fdcc8afc8d59d7301f","fef0d9fdcc8afc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59e34a33b30000","fef0d9fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000","fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Qv),Dg=cg(Rg),qg=new Array(3).concat("ece2f0a6bddb1c9099","f6eff7bdc9e167a9cf02818a","f6eff7bdc9e167a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf1c9099016c59","f6eff7d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450","fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Qv),Lg=cg(qg),Ug=new Array(3).concat("ece7f2a6bddb2b8cbe","f1eef6bdc9e174a9cf0570b0","f1eef6bdc9e174a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d","f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b","fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Qv),Og=cg(Ug),Bg=new Array(3).concat("e7e1efc994c7dd1c77","f1eef6d7b5d8df65b0ce1256","f1eef6d7b5d8df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0dd1c77980043","f1eef6d4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f","f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Qv),Fg=cg(Bg),Yg=new Array(3).concat("fde0ddfa9fb5c51b8a","feebe2fbb4b9f768a1ae017e","feebe2fbb4b9f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1c51b8a7a0177","feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177","fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Qv),Ig=cg(Yg),Hg=new Array(3).concat("edf8b17fcdbb2c7fb8","ffffcca1dab441b6c4225ea8","ffffcca1dab441b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c42c7fb8253494","ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84","ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Qv),jg=cg(Hg),Vg=new Array(3).concat("f7fcb9addd8e31a354","ffffccc2e69978c679238443","ffffccc2e69978c67931a354006837","ffffccd9f0a3addd8e78c67931a354006837","ffffccd9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32","ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Qv),Xg=cg(Vg),Gg=new Array(3).concat("fff7bcfec44fd95f0e","ffffd4fed98efe9929cc4c02","ffffd4fed98efe9929d95f0e993404","ffffd4fee391fec44ffe9929d95f0e993404","ffffd4fee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04","ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Qv),$g=cg(Gg),Wg=new Array(3).concat("ffeda0feb24cf03b20","ffffb2fecc5cfd8d3ce31a1c","ffffb2fecc5cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cf03b20bd0026","ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026","ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Qv),Zg=cg(Wg),Qg=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Qv),Kg=cg(Qg),Jg=new Array(3).concat("e5f5e0a1d99b31a354","edf8e9bae4b374c476238b45","edf8e9bae4b374c47631a354006d2c","edf8e9c7e9c0a1d99b74c47631a354006d2c","edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32","f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Qv),ty=cg(Jg),ny=new Array(3).concat("f0f0f0bdbdbd636363","f7f7f7cccccc969696525252","f7f7f7cccccc969696636363252525","f7f7f7d9d9d9bdbdbd969696636363252525","f7f7f7d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525","fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Qv),ey=cg(ny),ry=new Array(3).concat("efedf5bcbddc756bb1","f2f0f7cbc9e29e9ac86a51a3","f2f0f7cbc9e29e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8756bb154278f","f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486","fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Qv),iy=cg(ry),oy=new Array(3).concat("fee0d2fc9272de2d26","fee5d9fcae91fb6a4acb181d","fee5d9fcae91fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4ade2d26a50f15","fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d","fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Qv),ay=cg(oy),uy=new Array(3).concat("fee6cefdae6be6550d","feeddefdbe85fd8d3cd94701","feeddefdbe85fd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3ce6550da63603","feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04","fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Qv),cy=cg(uy);var fy=Qe(ee(300,.5,0),ee(-240,.5,1)),sy=Qe(ee(-100,.75,.35),ee(80,1.5,.8)),ly=Qe(ee(260,.75,.35),ee(80,1.5,.8)),hy=ee();var dy=_n(),py=Math.PI/3,vy=2*Math.PI/3;function gy(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}var yy=gy(Qv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),_y=gy(Qv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),by=gy(Qv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),my=gy(Qv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function xy(t){return function(){return t}}var wy=Math.abs,My=Math.atan2,Ny=Math.cos,Ty=Math.max,Ay=Math.min,Sy=Math.sin,ky=Math.sqrt,Ey=1e-12,Cy=Math.PI,Py=Cy/2,zy=2*Cy;function Ry(t){return t>=1?Py:t<=-1?-Py:Math.asin(t)}function Dy(t){return t.innerRadius}function qy(t){return t.outerRadius}function Ly(t){return t.startAngle}function Uy(t){return t.endAngle}function Oy(t){return t&&t.padAngle}function By(t,n,e,r,i,o,a){var u=t-e,c=n-r,f=(a?o:-o)/ky(u*u+c*c),s=f*c,l=-f*u,h=t+s,d=n+l,p=e+s,v=r+l,g=(h+p)/2,y=(d+v)/2,_=p-h,b=v-d,m=_*_+b*b,x=i-o,w=h*v-p*d,M=(b<0?-1:1)*ky(Ty(0,x*x*m-w*w)),N=(w*b-_*M)/m,T=(-w*_-b*M)/m,A=(w*b+_*M)/m,S=(-w*_+b*M)/m,k=N-g,E=T-y,C=A-g,P=S-y;return k*k+E*E>C*C+P*P&&(N=A,T=S),{cx:N,cy:T,x01:-s,y01:-l,x11:N*(i/x-1),y11:T*(i/x-1)}}function Fy(t){this._context=t}function Yy(t){return new Fy(t)}function Iy(t){return t[0]}function Hy(t){return t[1]}function jy(){var t=Iy,n=Hy,e=xy(!0),r=null,i=Yy,o=null;function a(a){var u,c,f,s=a.length,l=!1;for(null==r&&(o=i(f=no())),u=0;u<=s;++u)!(u<s&&e(c=a[u],u,a))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,u,a),+n(c,u,a));if(f)return o=null,f+""||null}return a.x=function(n){return arguments.length?(t="function"==typeof n?n:xy(+n),a):t},a.y=function(t){return arguments.length?(n="function"==typeof t?t:xy(+t),a):n},a.defined=function(t){return arguments.length?(e="function"==typeof t?t:xy(!!t),a):e},a.curve=function(t){return arguments.length?(i=t,null!=r&&(o=i(r)),a):i},a.context=function(t){return arguments.length?(null==t?r=o=null:o=i(r=t),a):r},a}function Vy(){var t=Iy,n=null,e=xy(0),r=Hy,i=xy(!0),o=null,a=Yy,u=null;function c(c){var f,s,l,h,d,p=c.length,v=!1,g=new Array(p),y=new Array(p);for(null==o&&(u=a(d=no())),f=0;f<=p;++f){if(!(f<p&&i(h=c[f],f,c))===v)if(v=!v)s=f,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),l=f-1;l>=s;--l)u.point(g[l],y[l]);u.lineEnd(),u.areaEnd()}v&&(g[f]=+t(h,f,c),y[f]=+e(h,f,c),u.point(n?+n(h,f,c):g[f],r?+r(h,f,c):y[f]))}if(d)return u=null,d+""||null}function f(){return jy().defined(i).curve(a).context(o)}return c.x=function(e){return arguments.length?(t="function"==typeof e?e:xy(+e),n=null,c):t},c.x0=function(n){return arguments.length?(t="function"==typeof n?n:xy(+n),c):t},c.x1=function(t){return arguments.length?(n=null==t?null:"function"==typeof t?t:xy(+t),c):n},c.y=function(t){return arguments.length?(e="function"==typeof t?t:xy(+t),r=null,c):e},c.y0=function(t){return arguments.length?(e="function"==typeof t?t:xy(+t),c):e},c.y1=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:xy(+t),c):r},c.lineX0=c.lineY0=function(){return f().x(t).y(e)},c.lineY1=function(){return f().x(t).y(r)},c.lineX1=function(){return f().x(n).y(e)},c.defined=function(t){return arguments.length?(i="function"==typeof t?t:xy(!!t),c):i},c.curve=function(t){return arguments.length?(a=t,null!=o&&(u=a(o)),c):a},c.context=function(t){return arguments.length?(null==t?o=u=null:u=a(o=t),c):o},c}function Xy(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function Gy(t){return t}Fy.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var $y=Zy(Yy);function Wy(t){this._curve=t}function Zy(t){function n(n){return new Wy(t(n))}return n._curve=t,n}function Qy(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Zy(t)):n()._curve},t}function Ky(){return Qy(jy().curve($y))}function Jy(){var t=Vy().curve($y),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return Qy(e())},delete t.lineX0,t.lineEndAngle=function(){return Qy(r())},delete t.lineX1,t.lineInnerRadius=function(){return Qy(i())},delete t.lineY0,t.lineOuterRadius=function(){return Qy(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(Zy(t)):n()._curve},t}function t_(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}Wy.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var n_=Array.prototype.slice;function e_(t){return t.source}function r_(t){return t.target}function i_(t){var n=e_,e=r_,r=Iy,i=Hy,o=null;function a(){var a,u=n_.call(arguments),c=n.apply(this,u),f=e.apply(this,u);if(o||(o=a=no()),t(o,+r.apply(this,(u[0]=c,u)),+i.apply(this,u),+r.apply(this,(u[0]=f,u)),+i.apply(this,u)),a)return o=null,a+""||null}return a.source=function(t){return arguments.length?(n=t,a):n},a.target=function(t){return arguments.length?(e=t,a):e},a.x=function(t){return arguments.length?(r="function"==typeof t?t:xy(+t),a):r},a.y=function(t){return arguments.length?(i="function"==typeof t?t:xy(+t),a):i},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a}function o_(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n=(n+r)/2,e,n,i,r,i)}function a_(t,n,e,r,i){t.moveTo(n,e),t.bezierCurveTo(n,e=(e+i)/2,r,e,r,i)}function u_(t,n,e,r,i){var o=t_(n,e),a=t_(n,e=(e+i)/2),u=t_(r,e),c=t_(r,i);t.moveTo(o[0],o[1]),t.bezierCurveTo(a[0],a[1],u[0],u[1],c[0],c[1])}var c_={draw:function(t,n){var e=Math.sqrt(n/Cy);t.moveTo(e,0),t.arc(0,0,e,0,zy)}},f_={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},s_=Math.sqrt(1/3),l_=2*s_,h_={draw:function(t,n){var e=Math.sqrt(n/l_),r=e*s_;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},d_=Math.sin(Cy/10)/Math.sin(7*Cy/10),p_=Math.sin(zy/10)*d_,v_=-Math.cos(zy/10)*d_,g_={draw:function(t,n){var e=Math.sqrt(.8908130915292852*n),r=p_*e,i=v_*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var a=zy*o/5,u=Math.cos(a),c=Math.sin(a);t.lineTo(c*e,-u*e),t.lineTo(u*r-c*i,c*r+u*i)}t.closePath()}},y_={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},__=Math.sqrt(3),b_={draw:function(t,n){var e=-Math.sqrt(n/(3*__));t.moveTo(0,2*e),t.lineTo(-__*e,-e),t.lineTo(__*e,-e),t.closePath()}},m_=Math.sqrt(3)/2,x_=1/Math.sqrt(12),w_=3*(x_/2+1),M_={draw:function(t,n){var e=Math.sqrt(n/w_),r=e/2,i=e*x_,o=r,a=e*x_+e,u=-o,c=a;t.moveTo(r,i),t.lineTo(o,a),t.lineTo(u,c),t.lineTo(-.5*r-m_*i,m_*r+-.5*i),t.lineTo(-.5*o-m_*a,m_*o+-.5*a),t.lineTo(-.5*u-m_*c,m_*u+-.5*c),t.lineTo(-.5*r+m_*i,-.5*i-m_*r),t.lineTo(-.5*o+m_*a,-.5*a-m_*o),t.lineTo(-.5*u+m_*c,-.5*c-m_*u),t.closePath()}},N_=[c_,f_,h_,y_,g_,b_,M_];function T_(){}function A_(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function S_(t){this._context=t}function k_(t){this._context=t}function E_(t){this._context=t}function C_(t,n){this._basis=new S_(t),this._beta=n}S_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:A_(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:A_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},k_.prototype={areaStart:T_,areaEnd:T_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:A_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},E_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:A_(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},C_.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],a=t[e]-i,u=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*a),this._beta*n[c]+(1-this._beta)*(o+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var P_=function t(n){function e(t){return 1===n?new S_(t):new C_(t,n)}return e.beta=function(n){return t(+n)},e}(.85);function z_(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function R_(t,n){this._context=t,this._k=(1-n)/6}R_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:z_(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:z_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var D_=function t(n){function e(t){return new R_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function q_(t,n){this._context=t,this._k=(1-n)/6}q_.prototype={areaStart:T_,areaEnd:T_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:z_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var L_=function t(n){function e(t){return new q_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function U_(t,n){this._context=t,this._k=(1-n)/6}U_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:z_(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var O_=function t(n){function e(t){return new U_(t,n)}return e.tension=function(n){return t(+n)},e}(0);function B_(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>Ey){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>Ey){var f=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,s=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*f+t._x1*t._l23_2a-n*t._l12_2a)/s,a=(a*f+t._y1*t._l23_2a-e*t._l12_2a)/s}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function F_(t,n){this._context=t,this._alpha=n}F_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:B_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var Y_=function t(n){function e(t){return n?new F_(t,n):new R_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function I_(t,n){this._context=t,this._alpha=n}I_.prototype={areaStart:T_,areaEnd:T_,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:B_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var H_=function t(n){function e(t){return n?new I_(t,n):new q_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function j_(t,n){this._context=t,this._alpha=n}j_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:B_(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var V_=function t(n){function e(t){return n?new j_(t,n):new U_(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);function X_(t){this._context=t}function G_(t){return t<0?-1:1}function $_(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),a=(e-t._y1)/(i||r<0&&-0),u=(o*i+a*r)/(r+i);return(G_(o)+G_(a))*Math.min(Math.abs(o),Math.abs(a),.5*Math.abs(u))||0}function W_(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function Z_(t,n,e){var r=t._x0,i=t._y0,o=t._x1,a=t._y1,u=(o-r)/3;t._context.bezierCurveTo(r+u,i+u*n,o-u,a-u*e,o,a)}function Q_(t){this._context=t}function K_(t){this._context=new J_(t)}function J_(t){this._context=t}function tb(t){this._context=t}function nb(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),a=new Array(r);for(i[0]=0,o[0]=2,a[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,a[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,a[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,a[n]-=e*a[n-1];for(i[r-1]=a[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(a[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function eb(t,n){this._context=t,this._t=n}function rb(t,n){if((i=t.length)>1)for(var e,r,i,o=1,a=t[n[0]],u=a.length;o<i;++o)for(r=a,a=t[n[o]],e=0;e<u;++e)a[e][1]+=a[e][0]=isNaN(r[e][1])?r[e][0]:r[e][1]}function ib(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function ob(t,n){return t[n]}function ab(t){var n=t.map(ub);return ib(t).sort(function(t,e){return n[t]-n[e]})}function ub(t){for(var n,e=-1,r=0,i=t.length,o=-1/0;++e<i;)(n=+t[e][1])>o&&(o=n,r=e);return r}function cb(t){var n=t.map(fb);return ib(t).sort(function(t,e){return n[t]-n[e]})}function fb(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function sb(t){return function(){return t}}function lb(t){return t[0]}function hb(t){return t[1]}function db(){this._=null}function pb(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function vb(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function gb(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function yb(t){for(;t.L;)t=t.L;return t}function _b(t,n,e,r){var i=[null,null],o=Ib.push(i)-1;return i.left=t,i.right=n,e&&mb(i,t,n,e),r&&mb(i,n,t,r),Fb[t.index].halfedges.push(o),Fb[n.index].halfedges.push(o),i}function bb(t,n,e){var r=[n,e];return r.left=t,r}function mb(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function xb(t,n,e,r,i){var o,a=t[0],u=t[1],c=a[0],f=a[1],s=0,l=1,h=u[0]-c,d=u[1]-f;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=r-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=e-f,d||!(o>0)){if(o/=d,d<0){if(o<s)return;o<l&&(l=o)}else if(d>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,d||!(o<0)){if(o/=d,d<0){if(o>l)return;o>s&&(s=o)}else if(d>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*d]),l<1&&(t[1]=[c+l*h,f+l*d]),!0)}}}}}function wb(t,n,e,r,i){var o=t[1];if(o)return!0;var a,u,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],d=s[0],p=s[1],v=(l+d)/2,g=(h+p)/2;if(p===h){if(v<n||v>=r)return;if(l>d){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=g-(a=(l-d)/(p-h))*v,a<-1||a>1)if(l>d){if(c){if(c[1]>=i)return}else c=[(e-u)/a,e];o=[(i-u)/a,i]}else{if(c){if(c[1]<e)return}else c=[(i-u)/a,i];o=[(e-u)/a,e]}else if(h<p){if(c){if(c[0]>=r)return}else c=[n,a*n+u];o=[r,a*r+u]}else{if(c){if(c[0]<n)return}else c=[r,a*r+u];o=[n,a*n+u]}return t[0]=c,t[1]=o,!0}function Mb(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Nb(t,n){return n[+(n.left!==t.site)]}function Tb(t,n){return n[+(n.left===t.site)]}X_.prototype={areaStart:T_,areaEnd:T_,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},Q_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Z_(this,this._t0,W_(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(n=+n,(t=+t)!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,Z_(this,W_(this,e=$_(this,t,n)),e);break;default:Z_(this,this._t0,e=$_(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(K_.prototype=Object.create(Q_.prototype)).point=function(t,n){Q_.prototype.point.call(this,n,t)},J_.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},tb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=nb(t),i=nb(n),o=0,a=1;a<e;++o,++a)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[a],n[a]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},eb.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}},db.prototype={constructor:db,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=yb(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(vb(this,e),e=(t=e).U),e.C=!1,r.C=!0,gb(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(gb(this,e),e=(t=e).U),e.C=!1,r.C=!0,vb(this,r)),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,a=t.R;if(e=o?a?yb(a):o:a,i?i.L===t?i.L=e:i.R=e:this._=e,o&&a?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==a?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=a,a.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,vb(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,gb(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,vb(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,gb(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,vb(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,gb(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Ab,Sb=[];function kb(){pb(this),this.x=this.y=this.arc=this.site=this.cy=null}function Eb(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var a=i[0],u=i[1],c=r[0]-a,f=r[1]-u,s=o[0]-a,l=o[1]-u,h=2*(c*l-f*s);if(!(h>=-jb)){var d=c*c+f*f,p=s*s+l*l,v=(l*d-f*p)/h,g=(c*p-s*d)/h,y=Sb.pop()||new kb;y.arc=t,y.site=i,y.x=v+a,y.y=(y.cy=g+u)+Math.sqrt(v*v+g*g),t.circle=y;for(var _=null,b=Yb._;b;)if(y.y<b.y||y.y===b.y&&y.x<=b.x){if(!b.L){_=b.P;break}b=b.L}else{if(!b.R){_=b;break}b=b.R}Yb.insert(_,y),_||(Ab=y)}}}}function Cb(t){var n=t.circle;n&&(n.P||(Ab=n.N),Yb.remove(n),Sb.push(n),pb(n),t.circle=null)}var Pb=[];function zb(){pb(this),this.edge=this.site=this.circle=null}function Rb(t){var n=Pb.pop()||new zb;return n.site=t,n}function Db(t){Cb(t),Bb.remove(t),Pb.push(t),pb(t)}function qb(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,a=t.N,u=[t];Db(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Hb&&Math.abs(r-c.circle.cy)<Hb;)o=c.P,u.unshift(c),Db(c),c=o;u.unshift(c),Cb(c);for(var f=a;f.circle&&Math.abs(e-f.circle.x)<Hb&&Math.abs(r-f.circle.cy)<Hb;)a=f.N,u.push(f),Db(f),f=a;u.push(f),Cb(f);var s,l=u.length;for(s=1;s<l;++s)f=u[s],c=u[s-1],mb(f.edge,c.site,f.site,i);c=u[0],(f=u[l-1]).edge=_b(c.site,f.site,null,i),Eb(c),Eb(f)}function Lb(t){for(var n,e,r,i,o=t[0],a=t[1],u=Bb._;u;)if((r=Ub(u,a)-o)>Hb)u=u.L;else{if(!((i=o-Ob(u,a))>Hb)){r>-Hb?(n=u.P,e=u):i>-Hb?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}!function(t){Fb[t.index]={site:t,halfedges:[]}}(t);var c=Rb(t);if(Bb.insert(n,c),n||e){if(n===e)return Cb(n),e=Rb(n.site),Bb.insert(c,e),c.edge=e.edge=_b(n.site,c.site),Eb(n),void Eb(e);if(e){Cb(n),Cb(e);var f=n.site,s=f[0],l=f[1],h=t[0]-s,d=t[1]-l,p=e.site,v=p[0]-s,g=p[1]-l,y=2*(h*g-d*v),_=h*h+d*d,b=v*v+g*g,m=[(g*_-d*b)/y+s,(h*b-v*_)/y+l];mb(e.edge,f,p,m),c.edge=_b(f,t,null,m),e.edge=_b(t,p,null,m),Eb(n),Eb(e)}else c.edge=_b(n.site,c.site)}}function Ub(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var a=t.P;if(!a)return-1/0;var u=(e=a.site)[0],c=e[1],f=c-n;if(!f)return u;var s=u-r,l=1/o-1/f,h=s/f;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+r:(r+u)/2}function Ob(t,n){var e=t.N;if(e)return Ub(e,n);var r=t.site;return r[1]===n?r[0]:1/0}var Bb,Fb,Yb,Ib,Hb=1e-6,jb=1e-12;function Vb(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Xb(t,n){return n[1]-t[1]||n[0]-t[0]}function Gb(t,n){var e,r,i,o=t.sort(Xb).pop();for(Ib=[],Fb=new Array(t.length),Bb=new db,Yb=new db;;)if(i=Ab,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(Lb(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;qb(i.arc)}if(function(){for(var t,n,e,r,i=0,o=Fb.length;i<o;++i)if((t=Fb[i])&&(r=(n=t.halfedges).length)){var a=new Array(r),u=new Array(r);for(e=0;e<r;++e)a[e]=e,u[e]=Mb(t,Ib[n[e]]);for(a.sort(function(t,n){return u[n]-u[t]}),e=0;e<r;++e)u[e]=n[a[e]];for(e=0;e<r;++e)n[e]=u[e]}}(),n){var a=+n[0][0],u=+n[0][1],c=+n[1][0],f=+n[1][1];!function(t,n,e,r){for(var i,o=Ib.length;o--;)wb(i=Ib[o],t,n,e,r)&&xb(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>Hb||Math.abs(i[0][1]-i[1][1])>Hb)||delete Ib[o]}(a,u,c,f),function(t,n,e,r){var i,o,a,u,c,f,s,l,h,d,p,v,g=Fb.length,y=!0;for(i=0;i<g;++i)if(o=Fb[i]){for(a=o.site,u=(c=o.halfedges).length;u--;)Ib[c[u]]||c.splice(u,1);for(u=0,f=c.length;u<f;)p=(d=Tb(o,Ib[c[u]]))[0],v=d[1],l=(s=Nb(o,Ib[c[++u%f]]))[0],h=s[1],(Math.abs(p-l)>Hb||Math.abs(v-h)>Hb)&&(c.splice(u,0,Ib.push(bb(a,d,Math.abs(p-t)<Hb&&r-v>Hb?[t,Math.abs(l-t)<Hb?h:r]:Math.abs(v-r)<Hb&&e-p>Hb?[Math.abs(h-r)<Hb?l:e,r]:Math.abs(p-e)<Hb&&v-n>Hb?[e,Math.abs(l-e)<Hb?h:n]:Math.abs(v-n)<Hb&&p-t>Hb?[Math.abs(h-n)<Hb?l:t,n]:null))-1),++f);f&&(y=!1)}if(y){var _,b,m,x=1/0;for(i=0,y=null;i<g;++i)(o=Fb[i])&&(m=(_=(a=o.site)[0]-t)*_+(b=a[1]-n)*b)<x&&(x=m,y=o);if(y){var w=[t,n],M=[t,r],N=[e,r],T=[e,n];y.halfedges.push(Ib.push(bb(a=y.site,w,M))-1,Ib.push(bb(a,M,N))-1,Ib.push(bb(a,N,T))-1,Ib.push(bb(a,T,w))-1)}}for(i=0;i<g;++i)(o=Fb[i])&&(o.halfedges.length||delete Fb[i])}(a,u,c,f)}this.edges=Ib,this.cells=Fb,Bb=Yb=Ib=Fb=null}function $b(t){return function(){return t}}function Wb(t,n,e){this.target=t,this.type=n,this.transform=e}function Zb(t,n,e){this.k=t,this.x=n,this.y=e}Gb.prototype={constructor:Gb,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Nb(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){if(o=(i=e.halfedges).length)for(var i,o,a,u=e.site,c=-1,f=n[i[o-1]],s=f.left===u?f.right:f.left;++c<o;)a=s,s=(f=n[i[c]]).left===u?f.right:f.left,a&&s&&r<a.index&&r<s.index&&Vb(u,a,s)<0&&t.push([u.data,a.data,s.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){for(var r,i,o=this,a=o._found||0,u=o.cells.length;!(i=o.cells[a]);)if(++a>=u)return null;var c=t-i.site[0],f=n-i.site[1],s=c*c+f*f;do{i=o.cells[r=a],a=null,i.halfedges.forEach(function(e){var r=o.edges[e],u=r.left;if(u!==i.site&&u||(u=r.right)){var c=t-u[0],f=n-u[1],l=c*c+f*f;l<s&&(s=l,a=u.index)}})}while(null!==a);return o._found=r,null==e||s<=e*e?i.site:null}},Zb.prototype={constructor:Zb,scale:function(t){return 1===t?this:new Zb(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new Zb(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Qb=new Zb(1,0,0);function Kb(t){for(;!t.__zoom;)if(!(t=t.parentNode))return Qb;return t.__zoom}function Jb(){t.event.stopImmediatePropagation()}function tm(){t.event.preventDefault(),t.event.stopImmediatePropagation()}function nm(){return!t.event.ctrlKey&&!t.event.button}function em(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function rm(){return this.__zoom||Qb}function im(){return-t.event.deltaY*(1===t.event.deltaMode?.05:t.event.deltaMode?1:.002)}function om(){return navigator.maxTouchPoints||"ontouchstart"in this}function am(t,n,e){var r=t.invertX(n[0][0])-e[0][0],i=t.invertX(n[1][0])-e[1][0],o=t.invertY(n[0][1])-e[0][1],a=t.invertY(n[1][1])-e[1][1];return t.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>o?(o+a)/2:Math.min(0,o)||Math.max(0,a))}Kb.prototype=Zb.prototype,t.FormatSpecifier=Ba,t.active=function(t,n){var e,r,i=t.__transition;if(i)for(r in n=null==n?null:n+"",i)if((e=i[r]).state>xr&&e.name===n)return new Ur([[t]],yi,n,+r);return null},t.arc=function(){var t=Dy,n=qy,e=xy(0),r=null,i=Ly,o=Uy,a=Oy,u=null;function c(){var c,f,s=+t.apply(this,arguments),l=+n.apply(this,arguments),h=i.apply(this,arguments)-Py,d=o.apply(this,arguments)-Py,p=wy(d-h),v=d>h;if(u||(u=c=no()),l<s&&(f=l,l=s,s=f),l>Ey)if(p>zy-Ey)u.moveTo(l*Ny(h),l*Sy(h)),u.arc(0,0,l,h,d,!v),s>Ey&&(u.moveTo(s*Ny(d),s*Sy(d)),u.arc(0,0,s,d,h,v));else{var g,y,_=h,b=d,m=h,x=d,w=p,M=p,N=a.apply(this,arguments)/2,T=N>Ey&&(r?+r.apply(this,arguments):ky(s*s+l*l)),A=Ay(wy(l-s)/2,+e.apply(this,arguments)),S=A,k=A;if(T>Ey){var E=Ry(T/s*Sy(N)),C=Ry(T/l*Sy(N));(w-=2*E)>Ey?(m+=E*=v?1:-1,x-=E):(w=0,m=x=(h+d)/2),(M-=2*C)>Ey?(_+=C*=v?1:-1,b-=C):(M=0,_=b=(h+d)/2)}var P=l*Ny(_),z=l*Sy(_),R=s*Ny(x),D=s*Sy(x);if(A>Ey){var q,L=l*Ny(b),U=l*Sy(b),O=s*Ny(m),B=s*Sy(m);if(p<Cy&&(q=function(t,n,e,r,i,o,a,u){var c=e-t,f=r-n,s=a-i,l=u-o,h=l*c-s*f;if(!(h*h<Ey))return[t+(h=(s*(n-o)-l*(t-i))/h)*c,n+h*f]}(P,z,O,B,L,U,R,D))){var F=P-q[0],Y=z-q[1],I=L-q[0],H=U-q[1],j=1/Sy(function(t){return t>1?0:t<-1?Cy:Math.acos(t)}((F*I+Y*H)/(ky(F*F+Y*Y)*ky(I*I+H*H)))/2),V=ky(q[0]*q[0]+q[1]*q[1]);S=Ay(A,(s-V)/(j-1)),k=Ay(A,(l-V)/(j+1))}}M>Ey?k>Ey?(g=By(O,B,P,z,l,k,v),y=By(L,U,R,D,l,k,v),u.moveTo(g.cx+g.x01,g.cy+g.y01),k<A?u.arc(g.cx,g.cy,k,My(g.y01,g.x01),My(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,k,My(g.y01,g.x01),My(g.y11,g.x11),!v),u.arc(0,0,l,My(g.cy+g.y11,g.cx+g.x11),My(y.cy+y.y11,y.cx+y.x11),!v),u.arc(y.cx,y.cy,k,My(y.y11,y.x11),My(y.y01,y.x01),!v))):(u.moveTo(P,z),u.arc(0,0,l,_,b,!v)):u.moveTo(P,z),s>Ey&&w>Ey?S>Ey?(g=By(R,D,L,U,s,-S,v),y=By(P,z,O,B,s,-S,v),u.lineTo(g.cx+g.x01,g.cy+g.y01),S<A?u.arc(g.cx,g.cy,S,My(g.y01,g.x01),My(y.y01,y.x01),!v):(u.arc(g.cx,g.cy,S,My(g.y01,g.x01),My(g.y11,g.x11),!v),u.arc(0,0,s,My(g.cy+g.y11,g.cx+g.x11),My(y.cy+y.y11,y.cx+y.x11),v),u.arc(y.cx,y.cy,S,My(y.y11,y.x11),My(y.y01,y.x01),!v))):u.arc(0,0,s,x,m,v):u.lineTo(R,D)}else u.moveTo(0,0);if(u.closePath(),c)return u=null,c+""||null}return c.centroid=function(){var e=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Cy/2;return[Ny(r)*e,Sy(r)*e]},c.innerRadius=function(n){return arguments.length?(t="function"==typeof n?n:xy(+n),c):t},c.outerRadius=function(t){return arguments.length?(n="function"==typeof t?t:xy(+t),c):n},c.cornerRadius=function(t){return arguments.length?(e="function"==typeof t?t:xy(+t),c):e},c.padRadius=function(t){return arguments.length?(r=null==t?null:"function"==typeof t?t:xy(+t),c):r},c.startAngle=function(t){return arguments.length?(i="function"==typeof t?t:xy(+t),c):i},c.endAngle=function(t){return arguments.length?(o="function"==typeof t?t:xy(+t),c):o},c.padAngle=function(t){return arguments.length?(a="function"==typeof t?t:xy(+t),c):a},c.context=function(t){return arguments.length?(u=null==t?null:t,c):u},c},t.area=Vy,t.areaRadial=Jy,t.ascending=n,t.autoType=function(t){for(var n in t){var e,r,i=t[n].trim();if(i)if("true"===i)i=!0;else if("false"===i)i=!1;else if("NaN"===i)i=NaN;else if(isNaN(e=+i)){if(!(r=i.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;ra&&r[4]&&!r[7]&&(i=i.replace(/-/g,"/").replace(/T/," ")),i=new Date(i)}else i=e;else i=null;t[n]=i}return t},t.axisBottom=function(t){return F(D,t)},t.axisLeft=function(t){return F(q,t)},t.axisRight=function(t){return F(R,t)},t.axisTop=function(t){return F(z,t)},t.bisect=i,t.bisectLeft=o,t.bisectRight=i,t.bisector=e,t.blob=function(t,n){return fetch(t,n).then(ia)},t.brush=function(){return Yi(Ci)},t.brushSelection=function(t){var n=t.__brush;return n?n.dim.output(n.selection):null},t.brushX=function(){return Yi(ki)},t.brushY=function(){return Yi(Ei)},t.buffer=function(t,n){return fetch(t,n).then(oa)},t.chord=function(){var t=0,n=null,e=null,r=null;function i(i){var o,a,u,c,f,s,l=i.length,h=[],d=g(l),p=[],v=[],y=v.groups=new Array(l),_=new Array(l*l);for(o=0,f=-1;++f<l;){for(a=0,s=-1;++s<l;)a+=i[f][s];h.push(a),p.push(g(l)),o+=a}for(n&&d.sort(function(t,e){return n(h[t],h[e])}),e&&p.forEach(function(t,n){t.sort(function(t,r){return e(i[n][t],i[n][r])})}),c=(o=Gi(0,Xi-t*l)/o)?t:Xi/l,a=0,f=-1;++f<l;){for(u=a,s=-1;++s<l;){var b=d[f],m=p[b][s],x=i[b][m],w=a,M=a+=x*o;_[m*l+b]={index:b,subindex:m,startAngle:w,endAngle:M,value:x}}y[b]={index:b,startAngle:u,endAngle:a,value:h[b]},a+=c}for(f=-1;++f<l;)for(s=f-1;++s<l;){var N=_[s*l+f],T=_[f*l+s];(N.value||T.value)&&v.push(N.value<T.value?{source:T,target:N}:{source:N,target:T})}return r?v.sort(r):v}return i.padAngle=function(n){return arguments.length?(t=Gi(0,n),i):t},i.sortGroups=function(t){return arguments.length?(n=t,i):n},i.sortSubgroups=function(t){return arguments.length?(e=t,i):e},i.sortChords=function(t){return arguments.length?(null==t?r=null:(r=$i(t))._=t,i):r&&r._},i},t.clientPoint=Ot,t.cluster=function(){var t=Tl,n=1,e=1,r=!1;function i(i){var o,a=0;i.eachAfter(function(n){var e=n.children;e?(n.x=function(t){return t.reduce(Al,0)/t.length}(e),n.y=function(t){return 1+t.reduce(Sl,0)}(e)):(n.x=o?a+=t(n,o):0,n.y=0,o=n)});var u=function(t){for(var n;n=t.children;)t=n[0];return t}(i),c=function(t){for(var n;n=t.children;)t=n[n.length-1];return t}(i),f=u.x-t(u,c)/2,s=c.x+t(c,u)/2;return i.eachAfter(r?function(t){t.x=(t.x-i.x)*n,t.y=(i.y-t.y)*e}:function(t){t.x=(t.x-f)/(s-f)*n,t.y=(1-(i.y?t.y/i.y:1))*e})}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.color=pn,t.contourDensity=function(){var t=ko,n=Eo,e=Co,r=960,i=500,o=20,a=2,u=3*o,c=r+2*u>>a,f=i+2*u>>a,s=bo(20);function l(r){var i=new Float32Array(c*f),l=new Float32Array(c*f);r.forEach(function(r,o,s){var l=+t(r,o,s)+u>>a,h=+n(r,o,s)+u>>a,d=+e(r,o,s);l>=0&&l<c&&h>=0&&h<f&&(i[l+h*c]+=d)}),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a),Ao({width:c,height:f,data:i},{width:c,height:f,data:l},o>>a),So({width:c,height:f,data:l},{width:c,height:f,data:i},o>>a);var d=s(i);if(!Array.isArray(d)){var p=T(i);d=w(0,p,d),(d=g(0,Math.floor(p/d)*d,d)).shift()}return To().thresholds(d).size([c,f])(i).map(h)}function h(t){return t.value*=Math.pow(2,-2*a),t.coordinates.forEach(d),t}function d(t){t.forEach(p)}function p(t){t.forEach(v)}function v(t){t[0]=t[0]*Math.pow(2,a)-u,t[1]=t[1]*Math.pow(2,a)-u}function y(){return c=r+2*(u=3*o)>>a,f=i+2*u>>a,l}return l.x=function(n){return arguments.length?(t="function"==typeof n?n:bo(+n),l):t},l.y=function(t){return arguments.length?(n="function"==typeof t?t:bo(+t),l):n},l.weight=function(t){return arguments.length?(e="function"==typeof t?t:bo(+t),l):e},l.size=function(t){if(!arguments.length)return[r,i];var n=Math.ceil(t[0]),e=Math.ceil(t[1]);if(!(n>=0||n>=0))throw new Error("invalid size");return r=n,i=e,y()},l.cellSize=function(t){if(!arguments.length)return 1<<a;if(!((t=+t)>=1))throw new Error("invalid cell size");return a=Math.floor(Math.log(t)/Math.LN2),y()},l.thresholds=function(t){return arguments.length?(s="function"==typeof t?t:Array.isArray(t)?bo(yo.call(t)):bo(t),l):s},l.bandwidth=function(t){if(!arguments.length)return Math.sqrt(o*(o+1));if(!((t=+t)>=0))throw new Error("invalid bandwidth");return o=Math.round((Math.sqrt(4*t*t+1)-1)/2),y()},l},t.contours=To,t.create=function(t){return Rt(Z(t).call(document.documentElement))},t.creator=Z,t.cross=function(t,n,e){var r,i,o,u,c=t.length,f=n.length,s=new Array(c*f);for(null==e&&(e=a),r=o=0;r<c;++r)for(u=t[r],i=0;i<f;++i,++o)s[o]=e(u,n[i]);return s},t.csv=fa,t.csvFormat=jo,t.csvFormatBody=Vo,t.csvFormatRow=Go,t.csvFormatRows=Xo,t.csvFormatValue=$o,t.csvParse=Io,t.csvParseRows=Ho,t.cubehelix=ee,t.curveBasis=function(t){return new S_(t)},t.curveBasisClosed=function(t){return new k_(t)},t.curveBasisOpen=function(t){return new E_(t)},t.curveBundle=P_,t.curveCardinal=D_,t.curveCardinalClosed=L_,t.curveCardinalOpen=O_,t.curveCatmullRom=Y_,t.curveCatmullRomClosed=H_,t.curveCatmullRomOpen=V_,t.curveLinear=Yy,t.curveLinearClosed=function(t){return new X_(t)},t.curveMonotoneX=function(t){return new Q_(t)},t.curveMonotoneY=function(t){return new K_(t)},t.curveNatural=function(t){return new tb(t)},t.curveStep=function(t){return new eb(t,.5)},t.curveStepAfter=function(t){return new eb(t,1)},t.curveStepBefore=function(t){return new eb(t,0)},t.customEvent=kt,t.descending=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},t.deviation=f,t.dispatch=I,t.drag=function(){var n,e,r,i,o=Gt,a=$t,u=Wt,c=Zt,f={},s=I("start","drag","end"),l=0,h=0;function d(t){t.on("mousedown.drag",p).filter(c).on("touchstart.drag",y).on("touchmove.drag",_).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function p(){if(!i&&o.apply(this,arguments)){var u=m("mouse",a.apply(this,arguments),Bt,this,arguments);u&&(Rt(t.event.view).on("mousemove.drag",v,!0).on("mouseup.drag",g,!0),Ht(t.event.view),Yt(),r=!1,n=t.event.clientX,e=t.event.clientY,u("start"))}}function v(){if(It(),!r){var i=t.event.clientX-n,o=t.event.clientY-e;r=i*i+o*o>h}f.mouse("drag")}function g(){Rt(t.event.view).on("mousemove.drag mouseup.drag",null),jt(t.event.view,r),It(),f.mouse("end")}function y(){if(o.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=a.apply(this,arguments),u=r.length;for(n=0;n<u;++n)(e=m(r[n].identifier,i,Ft,this,arguments))&&(Yt(),e("start"))}}function _(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=f[r[n].identifier])&&(It(),e("drag"))}function b(){var n,e,r=t.event.changedTouches,o=r.length;for(i&&clearTimeout(i),i=setTimeout(function(){i=null},500),n=0;n<o;++n)(e=f[r[n].identifier])&&(Yt(),e("end"))}function m(n,e,r,i,o){var a,c,h,p=r(e,n),v=s.copy();if(kt(new Xt(d,"beforestart",a,n,l,p[0],p[1],0,0,v),function(){return null!=(t.event.subject=a=u.apply(i,o))&&(c=a.x-p[0]||0,h=a.y-p[1]||0,!0)}))return function t(u){var s,g=p;switch(u){case"start":f[n]=t,s=l++;break;case"end":delete f[n],--l;case"drag":p=r(e,n),s=l}kt(new Xt(d,u,a,n,s,p[0]+c,p[1]+h,p[0]-g[0],p[1]-g[1],v),v.apply,v,[u,i,o])}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Vt(!!t),d):o},d.container=function(t){return arguments.length?(a="function"==typeof t?t:Vt(t),d):a},d.subject=function(t){return arguments.length?(u="function"==typeof t?t:Vt(t),d):u},d.touchable=function(t){return arguments.length?(c="function"==typeof t?t:Vt(!!t),d):c},d.on=function(){var t=s.on.apply(s,arguments);return t===s?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d},t.dragDisable=Ht,t.dragEnable=jt,t.dsv=function(t,n,e,r){3===arguments.length&&"function"==typeof e&&(r=e,e=void 0);var i=Fo(t);return ua(n,e).then(function(t){return i.parse(t,r)})},t.dsvFormat=Fo,t.easeBack=si,t.easeBackIn=ci,t.easeBackInOut=si,t.easeBackOut=fi,t.easeBounce=ui,t.easeBounceIn=function(t){return 1-ui(1-t)},t.easeBounceInOut=function(t){return((t*=2)<=1?1-ui(1-t):ui(t-1)+1)/2},t.easeBounceOut=ui,t.easeCircle=Zr,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleInOut=Zr,t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCubic=Ir,t.easeCubicIn=function(t){return t*t*t},t.easeCubicInOut=Ir,t.easeCubicOut=function(t){return--t*t*t+1},t.easeElastic=di,t.easeElasticIn=hi,t.easeElasticInOut=pi,t.easeElasticOut=di,t.easeExp=Wr,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpInOut=Wr,t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeLinear=function(t){return+t},t.easePoly=Vr,t.easePolyIn=Hr,t.easePolyInOut=Vr,t.easePolyOut=jr,t.easeQuad=Yr,t.easeQuadIn=function(t){return t*t},t.easeQuadInOut=Yr,t.easeQuadOut=function(t){return t*(2-t)},t.easeSin=$r,t.easeSinIn=function(t){return 1-Math.cos(t*Gr)},t.easeSinInOut=$r,t.easeSinOut=function(t){return Math.sin(t*Gr)},t.entries=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},t.extent=s,t.forceCenter=function(t,n){var e;function r(){var r,i,o=e.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=e[r]).x,u+=i.y;for(a=a/o-t,u=u/o-n,r=0;r<o;++r)(i=e[r]).x-=a,i.y-=u}return null==t&&(t=0),null==n&&(n=0),r.initialize=function(t){e=t},r.x=function(n){return arguments.length?(t=+n,r):t},r.y=function(t){return arguments.length?(n=+t,r):n},r},t.forceCollide=function(t){var n,e,r=1,i=1;function o(){for(var t,o,u,c,f,s,l,h=n.length,d=0;d<i;++d)for(o=wa(n,Aa,Sa).visitAfter(a),t=0;t<h;++t)u=n[t],s=e[u.index],l=s*s,c=u.x+u.vx,f=u.y+u.vy,o.visit(p);function p(t,n,e,i,o){var a=t.data,h=t.r,d=s+h;if(!a)return n>c+d||i<c-d||e>f+d||o<f-d;if(a.index>u.index){var p=c-a.x-a.vx,v=f-a.y-a.vy,g=p*p+v*v;g<d*d&&(0===p&&(g+=(p=ya())*p),0===v&&(g+=(v=ya())*v),g=(d-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(d=(h*=h)/(l+h)),u.vy+=(v*=g)*d,a.vx-=p*(d=1-d),a.vy-=v*d)}}}function a(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function u(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=ga(null==t?1:+t)),o.initialize=function(t){n=t,u()},o.iterations=function(t){return arguments.length?(i=+t,o):i},o.strength=function(t){return arguments.length?(r=+t,o):r},o.radius=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),u(),o):t},o},t.forceLink=function(t){var n,e,r,i,o,a=ka,u=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},c=ga(30),f=1;function s(r){for(var i=0,a=t.length;i<f;++i)for(var u,c,s,l,h,d,p,v=0;v<a;++v)c=(u=t[v]).source,l=(s=u.target).x+s.vx-c.x-c.vx||ya(),h=s.y+s.vy-c.y-c.vy||ya(),l*=d=((d=Math.sqrt(l*l+h*h))-e[v])/d*r*n[v],h*=d,s.vx-=l*(p=o[v]),s.vy-=h*p,c.vx+=l*(p=1-p),c.vy+=h*p}function l(){if(r){var u,c,f=r.length,s=t.length,l=co(r,a);for(u=0,i=new Array(f);u<s;++u)(c=t[u]).index=u,"object"!=typeof c.source&&(c.source=Ea(l,c.source)),"object"!=typeof c.target&&(c.target=Ea(l,c.target)),i[c.source.index]=(i[c.source.index]||0)+1,i[c.target.index]=(i[c.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)c=t[u],o[u]=i[c.source.index]/(i[c.source.index]+i[c.target.index]);n=new Array(s),h(),e=new Array(s),d()}}function h(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+u(t[e],e,t)}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+c(t[n],n,t)}return null==t&&(t=[]),s.initialize=function(t){r=t,l()},s.links=function(n){return arguments.length?(t=n,l(),s):t},s.id=function(t){return arguments.length?(a=t,s):a},s.iterations=function(t){return arguments.length?(f=+t,s):f},s.strength=function(t){return arguments.length?(u="function"==typeof t?t:ga(+t),h(),s):u},s.distance=function(t){return arguments.length?(c="function"==typeof t?t:ga(+t),d(),s):c},s},t.forceManyBody=function(){var t,n,e,r,i=ga(-30),o=1,a=1/0,u=.81;function c(r){var i,o=t.length,a=wa(t,Ca,Pa).visitAfter(s);for(e=r,i=0;i<o;++i)n=t[i],a.visit(l)}function f(){if(t){var n,e,o=t.length;for(r=new Array(o),n=0;n<o;++n)e=t[n],r[e.index]=+i(e,n,t)}}function s(t){var n,e,i,o,a,u=0,c=0;if(t.length){for(i=o=a=0;a<4;++a)(n=t[a])&&(e=Math.abs(n.value))&&(u+=n.value,c+=e,i+=e*n.x,o+=e*n.y);t.x=i/c,t.y=o/c}else{(n=t).x=n.data.x,n.y=n.data.y;do{u+=r[n.data.index]}while(n=n.next)}t.value=u}function l(t,i,c,f){if(!t.value)return!0;var s=t.x-n.x,l=t.y-n.y,h=f-i,d=s*s+l*l;if(h*h/u<d)return d<a&&(0===s&&(d+=(s=ya())*s),0===l&&(d+=(l=ya())*l),d<o&&(d=Math.sqrt(o*d)),n.vx+=s*t.value*e/d,n.vy+=l*t.value*e/d),!0;if(!(t.length||d>=a)){(t.data!==n||t.next)&&(0===s&&(d+=(s=ya())*s),0===l&&(d+=(l=ya())*l),d<o&&(d=Math.sqrt(o*d)));do{t.data!==n&&(h=r[t.data.index]*e/d,n.vx+=s*h,n.vy+=l*h)}while(t=t.next)}}return c.initialize=function(n){t=n,f()},c.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),f(),c):i},c.distanceMin=function(t){return arguments.length?(o=t*t,c):Math.sqrt(o)},c.distanceMax=function(t){return arguments.length?(a=t*t,c):Math.sqrt(a)},c.theta=function(t){return arguments.length?(u=t*t,c):Math.sqrt(u)},c},t.forceRadial=function(t,n,e){var r,i,o,a=ga(.1);function u(t){for(var a=0,u=r.length;a<u;++a){var c=r[a],f=c.x-n||1e-6,s=c.y-e||1e-6,l=Math.sqrt(f*f+s*s),h=(o[a]-l)*i[a]*t/l;c.vx+=f*h,c.vy+=s*h}}function c(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)o[n]=+t(r[n],n,r),i[n]=isNaN(o[n])?0:+a(r[n],n,r)}}return"function"!=typeof t&&(t=ga(+t)),null==n&&(n=0),null==e&&(e=0),u.initialize=function(t){r=t,c()},u.strength=function(t){return arguments.length?(a="function"==typeof t?t:ga(+t),c(),u):a},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),c(),u):t},u.x=function(t){return arguments.length?(n=+t,u):n},u.y=function(t){return arguments.length?(e=+t,u):e},u},t.forceSimulation=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=co(),c=hr(s),f=I("tick","end");function s(){l(),f.call("tick",n),e<r&&(c.stop(),f.call("end",n))}function l(r){var c,f,s=t.length;void 0===r&&(r=1);for(var l=0;l<r;++l)for(e+=(o-e)*i,u.each(function(t){t(e)}),c=0;c<s;++c)null==(f=t[c]).fx?f.x+=f.vx*=a:(f.x=f.fx,f.vx=0),null==f.fy?f.y+=f.vy*=a:(f.y=f.fy,f.vy=0);return n}function h(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=za*Math.sqrt(e),o=e*Ra;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function d(n){return n.initialize&&n.initialize(t),n}return null==t&&(t=[]),h(),n={tick:l,restart:function(){return c.restart(s),n},stop:function(){return c.stop(),n},nodes:function(e){return arguments.length?(t=e,h(),u.each(d),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(a=1-t,n):1-a},force:function(t,e){return arguments.length>1?(null==e?u.remove(t):u.set(t,d(e)),n):u.get(t)},find:function(n,e,r){var i,o,a,u,c,f=0,s=t.length;for(null==r?r=1/0:r*=r,f=0;f<s;++f)(a=(i=n-(u=t[f]).x)*i+(o=e-u.y)*o)<r&&(c=u,r=a);return c},on:function(t,e){return arguments.length>1?(f.on(t,e),n):f.on(t)}}},t.forceX=function(t){var n,e,r,i=ga(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ga(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),a(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),a(),o):t},o},t.forceY=function(t){var n,e,r,i=ga(.1);function o(t){for(var i,o=0,a=n.length;o<a;++o)(i=n[o]).vy+=(r[o]-i.y)*e[o]*t}function a(){if(n){var o,a=n.length;for(e=new Array(a),r=new Array(a),o=0;o<a;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=ga(null==t?0:+t)),o.initialize=function(t){n=t,a()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:ga(+t),a(),o):i},o.y=function(n){return arguments.length?(t="function"==typeof n?n:ga(+n),a(),o):t},o},t.formatDefaultLocale=Ga,t.formatLocale=Xa,t.formatSpecifier=Oa,t.geoAlbers=el,t.geoAlbersUsa=function(){var t,n,e,r,i,o,a=el(),u=nl().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=nl().rotate([157,0]).center([-3,19.9]).parallels([8,18]),f={point:function(t,n){o=[t,n]}};function s(t){var n=t[0],a=t[1];return o=null,e.point(n,a),o||(r.point(n,a),o)||(i.point(n,a),o)}function l(){return t=n=null,s}return s.invert=function(t){var n=a.scale(),e=a.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?u:i>=.166&&i<.234&&r>=-.214&&r<-.115?c:a).invert(t)},s.stream=function(e){return t&&n===e?t:(r=[a.stream(n=e),u.stream(e),c.stream(e)],i=r.length,t={point:function(t,n){for(var e=-1;++e<i;)r[e].point(t,n)},sphere:function(){for(var t=-1;++t<i;)r[t].sphere()},lineStart:function(){for(var t=-1;++t<i;)r[t].lineStart()},lineEnd:function(){for(var t=-1;++t<i;)r[t].lineEnd()},polygonStart:function(){for(var t=-1;++t<i;)r[t].polygonStart()},polygonEnd:function(){for(var t=-1;++t<i;)r[t].polygonEnd()}});var r,i},s.precision=function(t){return arguments.length?(a.precision(t),u.precision(t),c.precision(t),l()):a.precision()},s.scale=function(t){return arguments.length?(a.scale(t),u.scale(.35*t),c.scale(t),s.translate(a.translate())):a.scale()},s.translate=function(t){if(!arguments.length)return a.translate();var n=a.scale(),o=+t[0],s=+t[1];return e=a.translate(t).clipExtent([[o-.455*n,s-.238*n],[o+.455*n,s+.238*n]]).stream(f),r=u.translate([o-.307*n,s+.201*n]).clipExtent([[o-.425*n+nu,s+.12*n+nu],[o-.214*n-nu,s+.234*n-nu]]).stream(f),i=c.translate([o-.205*n,s+.212*n]).clipExtent([[o-.214*n+nu,s+.166*n+nu],[o-.115*n-nu,s+.234*n-nu]]).stream(f),l()},s.fitExtent=function(t,n){return Is(s,t,n)},s.fitSize=function(t,n){return Hs(s,t,n)},s.fitWidth=function(t,n){return js(s,t,n)},s.fitHeight=function(t,n){return Vs(s,t,n)},s.scale(1070)},t.geoArea=function(t){return Uu.reset(),Cu(t,Ou),2*Uu},t.geoAzimuthalEqualArea=function(){return Qs(ol).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=ol,t.geoAzimuthalEquidistant=function(){return Qs(al).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=al,t.geoBounds=function(t){var n,e,r,i,o,a,u;if(Ju=Ku=-(Zu=Qu=1/0),ic=[],Cu(t,Mc),e=ic.length){for(ic.sort(zc),n=1,o=[r=ic[0]];n<e;++n)Rc(r,(i=ic[n])[0])||Rc(r,i[1])?(Pc(r[0],i[1])>Pc(r[0],r[1])&&(r[1]=i[1]),Pc(i[0],r[1])>Pc(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(a=-1/0,n=0,r=o[e=o.length-1];n<=e;r=i,++n)i=o[n],(u=Pc(r[1],i[0]))>a&&(a=u,Zu=i[0],Ku=r[1])}return ic=oc=null,Zu===1/0||Qu===1/0?[[NaN,NaN],[NaN,NaN]]:[[Zu,Qu],[Ku,Ju]]},t.geoCentroid=function(t){ac=uc=cc=fc=sc=lc=hc=dc=pc=vc=gc=0,Cu(t,Dc);var n=pc,e=vc,r=gc,i=n*n+e*e+r*r;return i<eu&&(n=lc,e=hc,r=dc,uc<nu&&(n=cc,e=fc,r=sc),(i=n*n+e*e+r*r)<eu)?[NaN,NaN]:[lu(e,n)*uu,wu(r/bu(i))*uu]},t.geoCircle=function(){var t,n,e=Vc([0,0]),r=Vc(90),i=Vc(6),o={point:function(e,r){t.push(e=n(e,r)),e[0]*=uu,e[1]*=uu}};function a(){var a=e.apply(this,arguments),u=r.apply(this,arguments)*cu,c=i.apply(this,arguments)*cu;return t=[],n=$c(-a[0]*cu,-a[1]*cu,0).invert,Jc(o,u,c,1),a={type:"Polygon",coordinates:[t]},t=n=null,a}return a.center=function(t){return arguments.length?(e="function"==typeof t?t:Vc([+t[0],+t[1]]),a):e},a.radius=function(t){return arguments.length?(r="function"==typeof t?t:Vc(+t),a):r},a.precision=function(t){return arguments.length?(i="function"==typeof t?t:Vc(+t),a):i},a},t.geoClipAntimeridian=df,t.geoClipCircle=pf,t.geoClipExtent=function(){var t,n,e,r=0,i=0,o=960,a=500;return e={stream:function(e){return t&&n===e?t:t=yf(r,i,o,a)(n=e)},extent:function(u){return arguments.length?(r=+u[0][0],i=+u[0][1],o=+u[1][0],a=+u[1][1],t=n=null,e):[[r,i],[o,a]]}}},t.geoClipRectangle=yf,t.geoConicConformal=function(){return Js(sl).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=sl,t.geoConicEqualArea=nl,t.geoConicEqualAreaRaw=tl,t.geoConicEquidistant=function(){return Js(hl).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=hl,t.geoContains=function(t,n){return(t&&Cf.hasOwnProperty(t.type)?Cf[t.type]:zf)(t,n)},t.geoDistance=Ef,t.geoEqualEarth=function(){return Qs(_l).scale(177.158)},t.geoEqualEarthRaw=_l,t.geoEquirectangular=function(){return Qs(ll).scale(152.63)},t.geoEquirectangularRaw=ll,t.geoGnomonic=function(){return Qs(bl).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=bl,t.geoGraticule=Ff,t.geoGraticule10=function(){return Ff()()},t.geoIdentity=function(){var t,n,e,r,i,o,a=1,u=0,c=0,f=1,s=1,l=Yf,h=null,d=Yf;function p(){return r=i=null,o}return o={stream:function(t){return r&&i===t?r:r=l(d(i=t))},postclip:function(r){return arguments.length?(d=r,h=t=n=e=null,p()):d},clipExtent:function(r){return arguments.length?(d=null==r?(h=t=n=e=null,Yf):yf(h=+r[0][0],t=+r[0][1],n=+r[1][0],e=+r[1][1]),p()):null==h?null:[[h,t],[n,e]]},scale:function(t){return arguments.length?(l=ml((a=+t)*f,a*s,u,c),p()):a},translate:function(t){return arguments.length?(l=ml(a*f,a*s,u=+t[0],c=+t[1]),p()):[u,c]},reflectX:function(t){return arguments.length?(l=ml(a*(f=t?-1:1),a*s,u,c),p()):f<0},reflectY:function(t){return arguments.length?(l=ml(a*f,a*(s=t?-1:1),u,c),p()):s<0},fitExtent:function(t,n){return Is(o,t,n)},fitSize:function(t,n){return Hs(o,t,n)},fitWidth:function(t,n){return js(o,t,n)},fitHeight:function(t,n){return Vs(o,t,n)}}},t.geoInterpolate=function(t,n){var e=t[0]*cu,r=t[1]*cu,i=n[0]*cu,o=n[1]*cu,a=hu(r),u=yu(r),c=hu(o),f=yu(o),s=a*hu(e),l=a*yu(e),h=c*hu(i),d=c*yu(i),p=2*wu(bu(Mu(o-r)+a*c*Mu(i-e))),v=yu(p),g=p?function(t){var n=yu(t*=p)/v,e=yu(p-t)/v,r=e*s+n*h,i=e*l+n*d,o=e*u+n*f;return[lu(i,r)*uu,lu(o,bu(r*r+i*i))*uu]}:function(){return[e*uu,r*uu]};return g.distance=p,g},t.geoLength=Af,t.geoMercator=function(){return cl(ul).scale(961/au)},t.geoMercatorRaw=ul,t.geoNaturalEarth1=function(){return Qs(xl).scale(175.295)},t.geoNaturalEarth1Raw=xl,t.geoOrthographic=function(){return Qs(wl).scale(249.5).clipAngle(90+nu)},t.geoOrthographicRaw=wl,t.geoPath=function(t,n){var e,r,i=4.5;function o(t){return t&&("function"==typeof i&&r.pointRadius(+i.apply(this,arguments)),Cu(t,e(r))),r.result()}return o.area=function(t){return Cu(t,e($f)),$f.result()},o.measure=function(t){return Cu(t,e(Ds)),Ds.result()},o.bounds=function(t){return Cu(t,e(rs)),rs.result()},o.centroid=function(t){return Cu(t,e(ys)),ys.result()},o.projection=function(n){return arguments.length?(e=null==n?(t=null,Yf):(t=n).stream,o):t},o.context=function(t){return arguments.length?(r=null==t?(n=null,new Us):new Ss(n=t),"function"!=typeof i&&r.pointRadius(i),o):n},o.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(r.pointRadius(+t),+t),o):i},o.projection(t).context(n)},t.geoProjection=Qs,t.geoProjectionMutator=Ks,t.geoRotation=Kc,t.geoStereographic=function(){return Qs(Ml).scale(250).clipAngle(142)},t.geoStereographicRaw=Ml,t.geoStream=Cu,t.geoTransform=function(t){return{stream:Bs(t)}},t.geoTransverseMercator=function(){var t=cl(Nl),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):[(t=n())[1],-t[0]]},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):[(t=e())[0],t[1],t[2]-90]},e([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=Nl,t.gray=function(t,n){return new Bn(t,0,0,null==n?1:n)},t.hcl=Vn,t.hierarchy=El,t.histogram=function(){var t=v,n=s,e=M;function r(r){var o,a,u=r.length,c=new Array(u);for(o=0;o<u;++o)c[o]=t(r[o],o,r);var f=n(c),s=f[0],l=f[1],h=e(c,s,l);Array.isArray(h)||(h=w(s,l,h),h=g(Math.ceil(s/h)*h,l,h));for(var d=h.length;h[0]<=s;)h.shift(),--d;for(;h[d-1]>l;)h.pop(),--d;var p,v=new Array(d+1);for(o=0;o<=d;++o)(p=v[o]=[]).x0=o>0?h[o-1]:s,p.x1=o<d?h[o]:l;for(o=0;o<u;++o)s<=(a=c[o])&&a<=l&&v[i(h,a,0,d)].push(r[o]);return v}return r.value=function(n){return arguments.length?(t="function"==typeof n?n:p(n),r):t},r.domain=function(t){return arguments.length?(n="function"==typeof t?t:p([t[0],t[1]]),r):n},r.thresholds=function(t){return arguments.length?(e="function"==typeof t?t:Array.isArray(t)?p(h.call(t)):p(t),r):e},r},t.hsl=Tn,t.html=pa,t.image=function(t,n){return new Promise(function(e,r){var i=new Image;for(var o in n)i[o]=n[o];i.onerror=r,i.onload=function(){e(i)},i.src=t})},t.interpolate=Te,t.interpolateArray=function(t,n){return(ye(n)?ge:_e)(t,n)},t.interpolateBasis=oe,t.interpolateBasisClosed=ae,t.interpolateBlues=Kg,t.interpolateBrBG=sg,t.interpolateBuGn=kg,t.interpolateBuPu=Cg,t.interpolateCividis=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(-4.54-t*(35.34-t*(2381.73-t*(6402.7-t*(7024.72-2710.57*t)))))))+", "+Math.max(0,Math.min(255,Math.round(32.49+t*(170.73+t*(52.82-t*(131.46-t*(176.58-67.37*t)))))))+", "+Math.max(0,Math.min(255,Math.round(81.24+t*(442.36-t*(2482.43-t*(6167.24-t*(6614.94-2475.67*t)))))))+")"},t.interpolateCool=ly,t.interpolateCubehelix=Ze,t.interpolateCubehelixDefault=fy,t.interpolateCubehelixLong=Qe,t.interpolateDate=be,t.interpolateDiscrete=function(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}},t.interpolateGnBu=zg,t.interpolateGreens=ty,t.interpolateGreys=ey,t.interpolateHcl=Ge,t.interpolateHclLong=$e,t.interpolateHsl=je,t.interpolateHslLong=Ve,t.interpolateHue=function(t,n){var e=fe(+t,+n);return function(t){var n=e(t);return n-360*Math.floor(n/360)}},t.interpolateInferno=by,t.interpolateLab=function(t,n){var e=le((t=On(t)).l,(n=On(n)).l),r=le(t.a,n.a),i=le(t.b,n.b),o=le(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}},t.interpolateMagma=_y,t.interpolateNumber=me,t.interpolateNumberArray=ge,t.interpolateObject=xe,t.interpolateOrRd=Dg,t.interpolateOranges=cy,t.interpolatePRGn=hg,t.interpolatePiYG=pg,t.interpolatePlasma=my,t.interpolatePuBu=Og,t.interpolatePuBuGn=Lg,t.interpolatePuOr=gg,t.interpolatePuRd=Fg,t.interpolatePurples=iy,t.interpolateRainbow=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return hy.h=360*t-100,hy.s=1.5-1.5*n,hy.l=.8-.9*n,hy+""},t.interpolateRdBu=_g,t.interpolateRdGy=mg,t.interpolateRdPu=Ig,t.interpolateRdYlBu=wg,t.interpolateRdYlGn=Ng,t.interpolateReds=ay,t.interpolateRgb=he,t.interpolateRgbBasis=pe,t.interpolateRgbBasisClosed=ve,t.interpolateRound=Ae,t.interpolateSinebow=function(t){var n;return t=(.5-t)*Math.PI,dy.r=255*(n=Math.sin(t))*n,dy.g=255*(n=Math.sin(t+py))*n,dy.b=255*(n=Math.sin(t+vy))*n,dy+""},t.interpolateSpectral=Ag,t.interpolateString=Ne,t.interpolateTransformCss=qe,t.interpolateTransformSvg=Le,t.interpolateTurbo=function(t){return t=Math.max(0,Math.min(1,t)),"rgb("+Math.max(0,Math.min(255,Math.round(34.61+t*(1172.33-t*(10793.56-t*(33300.12-t*(38394.49-14825.05*t)))))))+", "+Math.max(0,Math.min(255,Math.round(23.31+t*(557.33+t*(1225.33-t*(3574.96-t*(1073.77+707.56*t)))))))+", "+Math.max(0,Math.min(255,Math.round(27.2+t*(3211.1-t*(15327.97-t*(27814-t*(22569.18-6838.66*t)))))))+")"},t.interpolateViridis=yy,t.interpolateWarm=sy,t.interpolateYlGn=Xg,t.interpolateYlGnBu=jg,t.interpolateYlOrBr=$g,t.interpolateYlOrRd=Zg,t.interpolateZoom=Ie,t.interrupt=Pr,t.interval=function(t,n,e){var r=new lr,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?fr():+e,r.restart(function o(a){a+=i,r.restart(o,i+=n,e),t(a)},n,e),r)},t.isoFormat=Dv,t.isoParse=qv,t.json=function(t,n){return fetch(t,n).then(la)},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n},t.lab=On,t.lch=function(t,n,e,r){return 1===arguments.length?jn(t):new Xn(e,n,t,null==r?1:r)},t.line=jy,t.lineRadial=Ky,t.linkHorizontal=function(){return i_(o_)},t.linkRadial=function(){var t=i_(u_);return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t},t.linkVertical=function(){return i_(a_)},t.local=qt,t.map=co,t.matcher=nt,t.max=T,t.mean=function(t,n){var e,r=t.length,i=r,o=-1,a=0;if(null==n)for(;++o<r;)isNaN(e=u(t[o]))?--i:a+=e;else for(;++o<r;)isNaN(e=u(n(t[o],o,t)))?--i:a+=e;if(i)return a/i},t.median=function(t,e){var r,i=t.length,o=-1,a=[];if(null==e)for(;++o<i;)isNaN(r=u(t[o]))||a.push(r);else for(;++o<i;)isNaN(r=u(e(t[o],o,t)))||a.push(r);return N(a.sort(n),.5)},t.merge=A,t.min=S,t.mouse=Bt,t.namespace=W,t.namespaces=$,t.nest=function(){var t,n,e,r=[],i=[];function o(e,i,a,u){if(i>=r.length)return null!=t&&e.sort(t),null!=n?n(e):e;for(var c,f,s,l=-1,h=e.length,d=r[i++],p=co(),v=a();++l<h;)(s=p.get(c=d(f=e[l])+""))?s.push(f):p.set(c,[f]);return p.each(function(t,n){u(v,n,o(t,i,a,u))}),v}return e={object:function(t){return o(t,0,fo,so)},map:function(t){return o(t,0,lo,ho)},entries:function(t){return function t(e,o){if(++o>r.length)return e;var a,u=i[o-1];return null!=n&&o>=r.length?a=e.entries():(a=[],e.each(function(n,e){a.push({key:e,values:t(n,o)})})),null!=u?a.sort(function(t,n){return u(t.key,n.key)}):a}(o(t,0,lo,ho),0)},key:function(t){return r.push(t),e},sortKeys:function(t){return i[r.length-1]=t,e},sortValues:function(n){return t=n,e},rollup:function(t){return n=t,e}}},t.now=fr,t.pack=function(){var t=null,n=1,e=1,r=Zl;function i(i){return i.x=n/2,i.y=e/2,t?i.eachBefore(Jl(t)).eachAfter(th(r,.5)).eachBefore(nh(1)):i.eachBefore(Jl(Kl)).eachAfter(th(Zl,1)).eachAfter(th(r,i.r/Math.min(n,e))).eachBefore(nh(Math.min(n,e)/(2*i.r))),i}return i.radius=function(n){return arguments.length?(t=$l(n),i):t},i.size=function(t){return arguments.length?(n=+t[0],e=+t[1],i):[n,e]},i.padding=function(t){return arguments.length?(r="function"==typeof t?t:Ql(+t),i):r},i},t.packEnclose=ql,t.packSiblings=function(t){return Gl(t),t},t.pairs=function(t,n){null==n&&(n=a);for(var e=0,r=t.length-1,i=t[0],o=new Array(r<0?0:r);e<r;)o[e]=n(i,i=t[++e]);return o},t.partition=function(){var t=1,n=1,e=0,r=!1;function i(i){var o=i.height+1;return i.x0=i.y0=e,i.x1=t,i.y1=n/o,i.eachBefore(function(t,n){return function(r){r.children&&rh(r,r.x0,t*(r.depth+1)/n,r.x1,t*(r.depth+2)/n);var i=r.x0,o=r.y0,a=r.x1-e,u=r.y1-e;a<i&&(i=a=(i+a)/2),u<o&&(o=u=(o+u)/2),r.x0=i,r.y0=o,r.x1=a,r.y1=u}}(n,o)),r&&i.eachBefore(eh),i}return i.round=function(t){return arguments.length?(r=!!t,i):r},i.size=function(e){return arguments.length?(t=+e[0],n=+e[1],i):[t,n]},i.padding=function(t){return arguments.length?(e=+t,i):e},i},t.path=no,t.permute=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},t.pie=function(){var t=Gy,n=Xy,e=null,r=xy(0),i=xy(zy),o=xy(0);function a(a){var u,c,f,s,l,h=a.length,d=0,p=new Array(h),v=new Array(h),g=+r.apply(this,arguments),y=Math.min(zy,Math.max(-zy,i.apply(this,arguments)-g)),_=Math.min(Math.abs(y)/h,o.apply(this,arguments)),b=_*(y<0?-1:1);for(u=0;u<h;++u)(l=v[p[u]=u]=+t(a[u],u,a))>0&&(d+=l);for(null!=n?p.sort(function(t,e){return n(v[t],v[e])}):null!=e&&p.sort(function(t,n){return e(a[t],a[n])}),u=0,f=d?(y-h*b)/d:0;u<h;++u,g=s)c=p[u],s=g+((l=v[c])>0?l*f:0)+b,v[c]={data:a[c],index:u,value:l,startAngle:g,endAngle:s,padAngle:_};return v}return a.value=function(n){return arguments.length?(t="function"==typeof n?n:xy(+n),a):t},a.sortValues=function(t){return arguments.length?(n=t,e=null,a):n},a.sort=function(t){return arguments.length?(e=t,n=null,a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:xy(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:xy(+t),a):i},a.padAngle=function(t){return arguments.length?(o="function"==typeof t?t:xy(+t),a):o},a},t.piecewise=function(t,n){for(var e=0,r=n.length-1,i=n[0],o=new Array(r<0?0:r);e<r;)o[e]=t(i,i=n[++e]);return function(t){var n=Math.max(0,Math.min(r-1,Math.floor(t*=r)));return o[n](t-n)}},t.pointRadial=t_,t.polygonArea=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},t.polygonCentroid=function(t){for(var n,e,r=-1,i=t.length,o=0,a=0,u=t[i-1],c=0;++r<i;)n=u,u=t[r],c+=e=n[0]*u[1]-u[0]*n[1],o+=(n[0]+u[0])*e,a+=(n[1]+u[1])*e;return[o/(c*=3),a/c]},t.polygonContains=function(t,n){for(var e,r,i=t.length,o=t[i-1],a=n[0],u=n[1],c=o[0],f=o[1],s=!1,l=0;l<i;++l)e=(o=t[l])[0],(r=o[1])>u!=f>u&&a<(c-e)*(u-r)/(f-r)+e&&(s=!s),c=e,f=r;return s},t.polygonHull=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(xh),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=wh(r),a=wh(i),u=a[0]===o[0],c=a[a.length-1]===o[o.length-1],f=[];for(n=o.length-1;n>=0;--n)f.push(t[r[o[n]][2]]);for(n=+u;n<a.length-c;++n)f.push(t[r[a[n]][2]]);return f},t.polygonLength=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],a=o[0],u=o[1],c=0;++r<i;)n=a,e=u,n-=a=(o=t[r])[0],e-=u=o[1],c+=Math.sqrt(n*n+e*e);return c},t.precisionFixed=$a,t.precisionPrefix=Wa,t.precisionRound=Za,t.quadtree=wa,t.quantile=N,t.quantize=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},t.radialArea=Jy,t.radialLine=Ky,t.randomBates=kh,t.randomExponential=Eh,t.randomIrwinHall=Sh,t.randomLogNormal=Ah,t.randomNormal=Th,t.randomUniform=Nh,t.range=g,t.rgb=_n,t.ribbon=function(){var t=eo,n=ro,e=io,r=oo,i=ao,o=null;function a(){var a,u=Wi.call(arguments),c=t.apply(this,u),f=n.apply(this,u),s=+e.apply(this,(u[0]=c,u)),l=r.apply(this,u)-Vi,h=i.apply(this,u)-Vi,d=s*Ii(l),p=s*Hi(l),v=+e.apply(this,(u[0]=f,u)),g=r.apply(this,u)-Vi,y=i.apply(this,u)-Vi;if(o||(o=a=no()),o.moveTo(d,p),o.arc(0,0,s,l,h),l===g&&h===y||(o.quadraticCurveTo(0,0,v*Ii(g),v*Hi(g)),o.arc(0,0,v,g,y)),o.quadraticCurveTo(0,0,d,p),o.closePath(),a)return o=null,a+""||null}return a.radius=function(t){return arguments.length?(e="function"==typeof t?t:Zi(+t),a):e},a.startAngle=function(t){return arguments.length?(r="function"==typeof t?t:Zi(+t),a):r},a.endAngle=function(t){return arguments.length?(i="function"==typeof t?t:Zi(+t),a):i},a.source=function(n){return arguments.length?(t=n,a):t},a.target=function(t){return arguments.length?(n=t,a):n},a.context=function(t){return arguments.length?(o=null==t?null:t,a):o},a},t.scaleBand=Uh,t.scaleDiverging=function t(){var n=Wh(Wv()(Fh));return n.copy=function(){return Gv(n,t())},Ph.apply(n,arguments)},t.scaleDivergingLog=function t(){var n=rd(Wv()).domain([.1,1,10]);return n.copy=function(){return Gv(n,t()).base(n.base())},Ph.apply(n,arguments)},t.scaleDivergingPow=Zv,t.scaleDivergingSqrt=function(){return Zv.apply(null,arguments).exponent(.5)},t.scaleDivergingSymlog=function t(){var n=ad(Wv());return n.copy=function(){return Gv(n,t()).constant(n.constant())},Ph.apply(n,arguments)},t.scaleIdentity=function t(n){var e;function r(t){return isNaN(t=+t)?e:t}return r.invert=r,r.domain=r.range=function(t){return arguments.length?(n=Rh.call(t,Oh),r):n.slice()},r.unknown=function(t){return arguments.length?(e=t,r):e},r.copy=function(){return t(n).unknown(e)},n=arguments.length?Rh.call(n,Oh):[0,1],Wh(r)},t.scaleImplicit=qh,t.scaleLinear=function t(){var n=Gh(Fh,Fh);return n.copy=function(){return Vh(n,t())},Ch.apply(n,arguments),Wh(n)},t.scaleLog=function t(){var n=rd(Xh()).domain([1,10]);return n.copy=function(){return Vh(n,t()).base(n.base())},Ch.apply(n,arguments),n},t.scaleOrdinal=Lh,t.scalePoint=function(){return function t(n){var e=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return t(e())},n}(Uh.apply(null,arguments).paddingInner(1))},t.scalePow=ld,t.scaleQuantile=function t(){var e,r=[],o=[],a=[];function u(){var t=0,n=Math.max(1,o.length);for(a=new Array(n-1);++t<n;)a[t-1]=N(r,t/n);return c}function c(t){return isNaN(t=+t)?e:o[i(a,t)]}return c.invertExtent=function(t){var n=o.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},c.domain=function(t){if(!arguments.length)return r.slice();r=[];for(var e,i=0,o=t.length;i<o;++i)null==(e=t[i])||isNaN(e=+e)||r.push(e);return r.sort(n),u()},c.range=function(t){return arguments.length?(o=Dh.call(t),u()):o.slice()},c.unknown=function(t){return arguments.length?(e=t,c):e},c.quantiles=function(){return a.slice()},c.copy=function(){return t().domain(r).range(o).unknown(e)},Ch.apply(c,arguments)},t.scaleQuantize=function t(){var n,e=0,r=1,o=1,a=[.5],u=[0,1];function c(t){return t<=t?u[i(a,t,0,o)]:n}function f(){var t=-1;for(a=new Array(o);++t<o;)a[t]=((t+1)*r-(t-o)*e)/(o+1);return c}return c.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],f()):[e,r]},c.range=function(t){return arguments.length?(o=(u=Dh.call(t)).length-1,f()):u.slice()},c.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,a[0]]:n>=o?[a[o-1],r]:[a[n-1],a[n]]},c.unknown=function(t){return arguments.length?(n=t,c):c},c.thresholds=function(){return a.slice()},c.copy=function(){return t().domain([e,r]).range(u).unknown(n)},Ch.apply(Wh(c),arguments)},t.scaleSequential=function t(){var n=Wh(Xv()(Fh));return n.copy=function(){return Gv(n,t())},Ph.apply(n,arguments)},t.scaleSequentialLog=function t(){var n=rd(Xv()).domain([1,10]);return n.copy=function(){return Gv(n,t()).base(n.base())},Ph.apply(n,arguments)},t.scaleSequentialPow=$v,t.scaleSequentialQuantile=function t(){var e=[],r=Fh;function o(t){if(!isNaN(t=+t))return r((i(e,t)-1)/(e.length-1))}return o.domain=function(t){if(!arguments.length)return e.slice();e=[];for(var r,i=0,a=t.length;i<a;++i)null==(r=t[i])||isNaN(r=+r)||e.push(r);return e.sort(n),o},o.interpolator=function(t){return arguments.length?(r=t,o):r},o.copy=function(){return t(r).domain(e)},Ph.apply(o,arguments)},t.scaleSequentialSqrt=function(){return $v.apply(null,arguments).exponent(.5)},t.scaleSequentialSymlog=function t(){var n=ad(Xv());return n.copy=function(){return Gv(n,t()).constant(n.constant())},Ph.apply(n,arguments)},t.scaleSqrt=function(){return ld.apply(null,arguments).exponent(.5)},t.scaleSymlog=function t(){var n=ad(Xh());return n.copy=function(){return Vh(n,t()).constant(n.constant())},Ch.apply(n,arguments)},t.scaleThreshold=function t(){var n,e=[.5],r=[0,1],o=1;function a(t){return t<=t?r[i(e,t,0,o)]:n}return a.domain=function(t){return arguments.length?(e=Dh.call(t),o=Math.min(e.length,r.length-1),a):e.slice()},a.range=function(t){return arguments.length?(r=Dh.call(t),o=Math.min(e.length,r.length-1),a):r.slice()},a.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},a.unknown=function(t){return arguments.length?(n=t,a):n},a.copy=function(){return t().domain(e).range(r).unknown(n)},Ch.apply(a,arguments)},t.scaleTime=function(){return Ch.apply(Vv(jd,Id,kd,Td,Md,xd,bd,vd,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)},t.scaleUtc=function(){return Ch.apply(Vv(vp,dp,Jd,Zd,$d,Xd,bd,vd,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)},t.scan=function(t,e){if(r=t.length){var r,i,o=0,a=0,u=t[a];for(null==e&&(e=n);++o<r;)(e(i=t[o],u)<0||0!==e(u,u))&&(u=i,a=o);return 0===e(u,u)?a:void 0}},t.schemeAccent=Jv,t.schemeBlues=Qg,t.schemeBrBG=fg,t.schemeBuGn=Sg,t.schemeBuPu=Eg,t.schemeCategory10=Kv,t.schemeDark2=tg,t.schemeGnBu=Pg,t.schemeGreens=Jg,t.schemeGreys=ny,t.schemeOrRd=Rg,t.schemeOranges=uy,t.schemePRGn=lg,t.schemePaired=ng,t.schemePastel1=eg,t.schemePastel2=rg,t.schemePiYG=dg,t.schemePuBu=Ug,t.schemePuBuGn=qg,t.schemePuOr=vg,t.schemePuRd=Bg,t.schemePurples=ry,t.schemeRdBu=yg,t.schemeRdGy=bg,t.schemeRdPu=Yg,t.schemeRdYlBu=xg,t.schemeRdYlGn=Mg,t.schemeReds=oy,t.schemeSet1=ig,t.schemeSet2=og,t.schemeSet3=ag,t.schemeSpectral=Tg,t.schemeTableau10=ug,t.schemeYlGn=Vg,t.schemeYlGnBu=Hg,t.schemeYlOrBr=Gg,t.schemeYlOrRd=Wg,t.select=Rt,t.selectAll=function(t){return"string"==typeof t?new Pt([document.querySelectorAll(t)],[document.documentElement]):new Pt([null==t?[]:t],Ct)},t.selection=zt,t.selector=K,t.selectorAll=tt,t.set=go,t.shuffle=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},t.stack=function(){var t=xy([]),n=ib,e=rb,r=ob;function i(i){var o,a,u=t.apply(this,arguments),c=i.length,f=u.length,s=new Array(f);for(o=0;o<f;++o){for(var l,h=u[o],d=s[o]=new Array(c),p=0;p<c;++p)d[p]=l=[0,+r(i[p],h,p,i)],l.data=i[p];d.key=h}for(o=0,a=n(s);o<f;++o)s[a[o]].index=o;return e(s,a),s}return i.keys=function(n){return arguments.length?(t="function"==typeof n?n:xy(n_.call(n)),i):t},i.value=function(t){return arguments.length?(r="function"==typeof t?t:xy(+t),i):r},i.order=function(t){return arguments.length?(n=null==t?ib:"function"==typeof t?t:xy(n_.call(t)),i):n},i.offset=function(t){return arguments.length?(e=null==t?rb:t,i):e},i},t.stackOffsetDiverging=function(t,n){if((u=t.length)>0)for(var e,r,i,o,a,u,c=0,f=t[n[0]].length;c<f;++c)for(o=a=0,e=0;e<u;++e)(i=(r=t[n[e]][c])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=a,r[0]=a+=i):(r[0]=0,r[1]=i)},t.stackOffsetExpand=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,a=t[0].length;o<a;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}rb(t,n)}},t.stackOffsetNone=rb,t.stackOffsetSilhouette=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var a=0,u=0;a<e;++a)u+=t[a][r][1]||0;i[r][1]+=i[r][0]=-u/2}rb(t,n)}},t.stackOffsetWiggle=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,a=1;a<r;++a){for(var u=0,c=0,f=0;u<i;++u){for(var s=t[n[u]],l=s[a][1]||0,h=(l-(s[a-1][1]||0))/2,d=0;d<u;++d){var p=t[n[d]];h+=(p[a][1]||0)-(p[a-1][1]||0)}c+=l,f+=h*l}e[a-1][1]+=e[a-1][0]=o,c&&(o-=f/c)}e[a-1][1]+=e[a-1][0]=o,rb(t,n)}},t.stackOrderAppearance=ab,t.stackOrderAscending=cb,t.stackOrderDescending=function(t){return cb(t).reverse()},t.stackOrderInsideOut=function(t){var n,e,r=t.length,i=t.map(fb),o=ab(t),a=0,u=0,c=[],f=[];for(n=0;n<r;++n)e=o[n],a<u?(a+=i[e],c.push(e)):(u+=i[e],f.push(e));return f.reverse().concat(c)},t.stackOrderNone=ib,t.stackOrderReverse=function(t){return ib(t).reverse()},t.stratify=function(){var t=uh,n=ch;function e(e){var r,i,o,a,u,c,f,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new Rl(r),null!=(c=t(r,i,e))&&(c+="")&&(h[f=ih+(u.id=c)]=f in h?ah:u);for(i=0;i<s;++i)if(u=l[i],null!=(c=n(e[i],i,e))&&(c+="")){if(!(a=h[ih+c]))throw new Error("missing: "+c);if(a===ah)throw new Error("ambiguous: "+c);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=oh,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(zl),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=Wl(n),e):t},e.parentId=function(t){return arguments.length?(n=Wl(t),e):n},e},t.style=ft,t.sum=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},t.svg=va,t.symbol=function(){var t=xy(c_),n=xy(64),e=null;function r(){var r;if(e||(e=r=no()),t.apply(this,arguments).draw(e,+n.apply(this,arguments)),r)return e=null,r+""||null}return r.type=function(n){return arguments.length?(t="function"==typeof n?n:xy(n),r):t},r.size=function(t){return arguments.length?(n="function"==typeof t?t:xy(+t),r):n},r.context=function(t){return arguments.length?(e=null==t?null:t,r):e},r},t.symbolCircle=c_,t.symbolCross=f_,t.symbolDiamond=h_,t.symbolSquare=y_,t.symbolStar=g_,t.symbolTriangle=b_,t.symbolWye=M_,t.symbols=N_,t.text=ua,t.thresholdFreedmanDiaconis=function(t,e,r){return t=d.call(t,u).sort(n),Math.ceil((r-e)/(2*(N(t,.75)-N(t,.25))*Math.pow(t.length,-1/3)))},t.thresholdScott=function(t,n,e){return Math.ceil((e-n)/(3.5*f(t)*Math.pow(t.length,-1/3)))},t.thresholdSturges=M,t.tickFormat=$h,t.tickIncrement=x,t.tickStep=w,t.ticks=m,t.timeDay=Td,t.timeDays=Ad,t.timeFormatDefaultLocale=Rv,t.timeFormatLocale=mp,t.timeFriday=Rd,t.timeFridays=Fd,t.timeHour=Md,t.timeHours=Nd,t.timeInterval=pd,t.timeMillisecond=vd,t.timeMilliseconds=gd,t.timeMinute=xd,t.timeMinutes=wd,t.timeMonday=Ed,t.timeMondays=Ld,t.timeMonth=Id,t.timeMonths=Hd,t.timeSaturday=Dd,t.timeSaturdays=Yd,t.timeSecond=bd,t.timeSeconds=md,t.timeSunday=kd,t.timeSundays=qd,t.timeThursday=zd,t.timeThursdays=Bd,t.timeTuesday=Cd,t.timeTuesdays=Ud,t.timeWednesday=Pd,t.timeWednesdays=Od,t.timeWeek=kd,t.timeWeeks=qd,t.timeYear=jd,t.timeYears=Vd,t.timeout=yr,t.timer=hr,t.timerFlush=dr,t.touch=Ft,t.touches=function(t,n){null==n&&(n=Ut().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=Ot(t,n[e]);return i},t.transition=Or,t.transpose=k,t.tree=function(){var t=fh,n=1,e=1,r=null;function i(i){var c=function(t){for(var n,e,r,i,o,a=new ph(t,0),u=[a];n=u.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)u.push(e=n.children[i]=new ph(r[i],i)),e.parent=n;return(a.parent=new ph(null,0)).children=[a],a}(i);if(c.eachAfter(o),c.parent.m=-c.z,c.eachBefore(a),r)i.eachBefore(u);else{var f=i,s=i,l=i;i.eachBefore(function(t){t.x<f.x&&(f=t),t.x>s.x&&(s=t),t.depth>l.depth&&(l=t)});var h=f===s?1:t(f,s)/2,d=h-f.x,p=n/(s.x+h+d),v=e/(l.depth||1);i.eachBefore(function(t){t.x=(t.x+d)*p,t.y=t.depth*v})}return i}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null;if(e){!function(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)(n=i[o]).z+=e,n.m+=e,e+=n.s+(r+=n.c)}(n);var o=(e[0].z+e[e.length-1].z)/2;i?(n.z=i.z+t(n._,i._),n.m=n.z-o):n.z=o}else i&&(n.z=i.z+t(n._,i._));n.parent.A=function(n,e,r){if(e){for(var i,o=n,a=n,u=e,c=o.parent.children[0],f=o.m,s=a.m,l=u.m,h=c.m;u=lh(u),o=sh(o),u&&o;)c=sh(c),(a=lh(a)).a=n,(i=u.z+l-o.z-f+t(u._,o._))>0&&(hh(dh(u,n,r),n,i),f+=i,s+=i),l+=u.m,f+=o.m,h+=c.m,s+=a.m;u&&!lh(a)&&(a.t=u,a.m+=l-s),o&&!sh(c)&&(c.t=o,c.m+=f-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function u(t){t.x*=n,t.y=t.depth*e}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(t){return arguments.length?(r=!1,n=+t[0],e=+t[1],i):r?null:[n,e]},i.nodeSize=function(t){return arguments.length?(r=!0,n=+t[0],e=+t[1],i):r?[n,e]:null},i},t.treemap=function(){var t=_h,n=!1,e=1,r=1,i=[0],o=Zl,a=Zl,u=Zl,c=Zl,f=Zl;function s(t){return t.x0=t.y0=0,t.x1=e,t.y1=r,t.eachBefore(l),i=[0],n&&t.eachBefore(eh),t}function l(n){var e=i[n.depth],r=n.x0+e,s=n.y0+e,l=n.x1-e,h=n.y1-e;l<r&&(r=l=(r+l)/2),h<s&&(s=h=(s+h)/2),n.x0=r,n.y0=s,n.x1=l,n.y1=h,n.children&&(e=i[n.depth+1]=o(n)/2,r+=f(n)-e,s+=a(n)-e,(l-=u(n)-e)<r&&(r=l=(r+l)/2),(h-=c(n)-e)<s&&(s=h=(s+h)/2),t(n,r,s,l,h))}return s.round=function(t){return arguments.length?(n=!!t,s):n},s.size=function(t){return arguments.length?(e=+t[0],r=+t[1],s):[e,r]},s.tile=function(n){return arguments.length?(t=Wl(n),s):t},s.padding=function(t){return arguments.length?s.paddingInner(t).paddingOuter(t):s.paddingInner()},s.paddingInner=function(t){return arguments.length?(o="function"==typeof t?t:Ql(+t),s):o},s.paddingOuter=function(t){return arguments.length?s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t):s.paddingTop()},s.paddingTop=function(t){return arguments.length?(a="function"==typeof t?t:Ql(+t),s):a},s.paddingRight=function(t){return arguments.length?(u="function"==typeof t?t:Ql(+t),s):u},s.paddingBottom=function(t){return arguments.length?(c="function"==typeof t?t:Ql(+t),s):c},s.paddingLeft=function(t){return arguments.length?(f="function"==typeof t?t:Ql(+t),s):f},s},t.treemapBinary=function(t,n,e,r,i){var o,a,u=t.children,c=u.length,f=new Array(c+1);for(f[0]=a=o=0;o<c;++o)f[o+1]=a+=u[o].value;!function t(n,e,r,i,o,a,c){if(n>=e-1){var s=u[n];return s.x0=i,s.y0=o,s.x1=a,void(s.y1=c)}for(var l=f[n],h=r/2+l,d=n+1,p=e-1;d<p;){var v=d+p>>>1;f[v]<h?d=v+1:p=v}h-f[d-1]<f[d]-h&&n+1<d&&--d;var g=f[d]-l,y=r-g;if(a-i>c-o){var _=(i*y+a*g)/r;t(n,d,g,i,o,_,c),t(d,e,y,_,o,a,c)}else{var b=(o*y+c*g)/r;t(n,d,g,i,o,a,b),t(d,e,y,i,b,a,c)}}(0,c,t.value,n,e,r,i)},t.treemapDice=rh,t.treemapResquarify=bh,t.treemapSlice=vh,t.treemapSliceDice=function(t,n,e,r,i){(1&t.depth?vh:rh)(t,n,e,r,i)},t.treemapSquarify=_h,t.tsv=sa,t.tsvFormat=Ko,t.tsvFormatBody=Jo,t.tsvFormatRow=na,t.tsvFormatRows=ta,t.tsvFormatValue=ea,t.tsvParse=Zo,t.tsvParseRows=Qo,t.utcDay=Zd,t.utcDays=Qd,t.utcFriday=ip,t.utcFridays=lp,t.utcHour=$d,t.utcHours=Wd,t.utcMillisecond=vd,t.utcMilliseconds=gd,t.utcMinute=Xd,t.utcMinutes=Gd,t.utcMonday=tp,t.utcMondays=up,t.utcMonth=dp,t.utcMonths=pp,t.utcSaturday=op,t.utcSaturdays=hp,t.utcSecond=bd,t.utcSeconds=md,t.utcSunday=Jd,t.utcSundays=ap,t.utcThursday=rp,t.utcThursdays=sp,t.utcTuesday=np,t.utcTuesdays=cp,t.utcWednesday=ep,t.utcWednesdays=fp,t.utcWeek=Jd,t.utcWeeks=ap,t.utcYear=vp,t.utcYears=gp,t.values=function(t){var n=[];for(var e in t)n.push(t[e]);return n},t.variance=c,t.version="5.15.0",t.voronoi=function(){var t=lb,n=hb,e=null;function r(r){return new Gb(r.map(function(e,i){var o=[Math.round(t(e,i,r)/Hb)*Hb,Math.round(n(e,i,r)/Hb)*Hb];return o.index=i,o.data=e,o}),e)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(n){return arguments.length?(t="function"==typeof n?n:sb(+n),r):t},r.y=function(t){return arguments.length?(n="function"==typeof t?t:sb(+t),r):n},r.extent=function(t){return arguments.length?(e=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):e&&[[e[0][0],e[0][1]],[e[1][0],e[1][1]]]},r.size=function(t){return arguments.length?(e=null==t?null:[[0,0],[+t[0],+t[1]]],r):e&&[e[1][0]-e[0][0],e[1][1]-e[0][1]]},r},t.window=ct,t.xml=da,t.zip=function(){return k(arguments)},t.zoom=function(){var n,e,r=nm,i=em,o=am,a=im,u=om,c=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],s=250,l=Ie,h=I("start","zoom","end"),d=500,p=150,v=0;function g(t){t.property("__zoom",rm).on("wheel.zoom",M).on("mousedown.zoom",N).on("dblclick.zoom",T).filter(u).on("touchstart.zoom",A).on("touchmove.zoom",S).on("touchend.zoom touchcancel.zoom",k).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function y(t,n){return(n=Math.max(c[0],Math.min(c[1],n)))===t.k?t:new Zb(n,t.x,t.y)}function _(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new Zb(t.k,r,i)}function b(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function m(t,n,e){t.on("start.zoom",function(){x(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){x(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,o=x(t,r),a=i.apply(t,r),u=null==e?b(a):"function"==typeof e?e.apply(t,r):e,c=Math.max(a[1][0]-a[0][0],a[1][1]-a[0][1]),f=t.__zoom,s="function"==typeof n?n.apply(t,r):n,h=l(f.invert(u).concat(c/f.k),s.invert(u).concat(c/s.k));return function(t){if(1===t)t=s;else{var n=h(t),e=c/n[2];t=new Zb(e,u[0]-n[0]*e,u[1]-n[1]*e)}o.zoom(null,t)}})}function x(t,n,e){return!e&&t.__zooming||new w(t,n)}function w(t,n){this.that=t,this.args=n,this.active=0,this.extent=i.apply(t,n),this.taps=0}function M(){if(r.apply(this,arguments)){var t=x(this,arguments),n=this.__zoom,e=Math.max(c[0],Math.min(c[1],n.k*Math.pow(2,a.apply(this,arguments)))),i=Bt(this);if(t.wheel)t.mouse[0][0]===i[0]&&t.mouse[0][1]===i[1]||(t.mouse[1]=n.invert(t.mouse[0]=i)),clearTimeout(t.wheel);else{if(n.k===e)return;t.mouse=[i,n.invert(i)],Pr(this),t.start()}tm(),t.wheel=setTimeout(function(){t.wheel=null,t.end()},p),t.zoom("mouse",o(_(y(n,e),t.mouse[0],t.mouse[1]),t.extent,f))}}function N(){if(!e&&r.apply(this,arguments)){var n=x(this,arguments,!0),i=Rt(t.event.view).on("mousemove.zoom",function(){if(tm(),!n.moved){var e=t.event.clientX-u,r=t.event.clientY-c;n.moved=e*e+r*r>v}n.zoom("mouse",o(_(n.that.__zoom,n.mouse[0]=Bt(n.that),n.mouse[1]),n.extent,f))},!0).on("mouseup.zoom",function(){i.on("mousemove.zoom mouseup.zoom",null),jt(t.event.view,n.moved),tm(),n.end()},!0),a=Bt(this),u=t.event.clientX,c=t.event.clientY;Ht(t.event.view),Jb(),n.mouse=[a,this.__zoom.invert(a)],Pr(this),n.start()}}function T(){if(r.apply(this,arguments)){var n=this.__zoom,e=Bt(this),a=n.invert(e),u=n.k*(t.event.shiftKey?.5:2),c=o(_(y(n,u),e,a),i.apply(this,arguments),f);tm(),s>0?Rt(this).transition().duration(s).call(m,c,e):Rt(this).call(g.transform,c)}}function A(){if(r.apply(this,arguments)){var e,i,o,a,u=t.event.touches,c=u.length,f=x(this,arguments,t.event.changedTouches.length===c);for(Jb(),i=0;i<c;++i)a=[a=Ft(this,u,(o=u[i]).identifier),this.__zoom.invert(a),o.identifier],f.touch0?f.touch1||f.touch0[2]===a[2]||(f.touch1=a,f.taps=0):(f.touch0=a,e=!0,f.taps=1+!!n);n&&(n=clearTimeout(n)),e&&(f.taps<2&&(n=setTimeout(function(){n=null},d)),Pr(this),f.start())}}function S(){if(this.__zooming){var e,r,i,a,u=x(this,arguments),c=t.event.changedTouches,s=c.length;for(tm(),n&&(n=clearTimeout(n)),u.taps=0,e=0;e<s;++e)i=Ft(this,c,(r=c[e]).identifier),u.touch0&&u.touch0[2]===r.identifier?u.touch0[0]=i:u.touch1&&u.touch1[2]===r.identifier&&(u.touch1[0]=i);if(r=u.that.__zoom,u.touch1){var l=u.touch0[0],h=u.touch0[1],d=u.touch1[0],p=u.touch1[1],v=(v=d[0]-l[0])*v+(v=d[1]-l[1])*v,g=(g=p[0]-h[0])*g+(g=p[1]-h[1])*g;r=y(r,Math.sqrt(v/g)),i=[(l[0]+d[0])/2,(l[1]+d[1])/2],a=[(h[0]+p[0])/2,(h[1]+p[1])/2]}else{if(!u.touch0)return;i=u.touch0[0],a=u.touch0[1]}u.zoom("touch",o(_(r,i,a),u.extent,f))}}function k(){if(this.__zooming){var n,r,i=x(this,arguments),o=t.event.changedTouches,a=o.length;for(Jb(),e&&clearTimeout(e),e=setTimeout(function(){e=null},d),n=0;n<a;++n)r=o[n],i.touch0&&i.touch0[2]===r.identifier?delete i.touch0:i.touch1&&i.touch1[2]===r.identifier&&delete i.touch1;if(i.touch1&&!i.touch0&&(i.touch0=i.touch1,delete i.touch1),i.touch0)i.touch0[1]=this.__zoom.invert(i.touch0[0]);else if(i.end(),2===i.taps){var u=Rt(this).on("dblclick.zoom");u&&u.apply(this,arguments)}}}return g.transform=function(t,n,e){var r=t.selection?t.selection():t;r.property("__zoom",rm),t!==r?m(t,n,e):r.interrupt().each(function(){x(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},g.scaleBy=function(t,n,e){g.scaleTo(t,function(){var t=this.__zoom.k,e="function"==typeof n?n.apply(this,arguments):n;return t*e},e)},g.scaleTo=function(t,n,e){g.transform(t,function(){var t=i.apply(this,arguments),r=this.__zoom,a=null==e?b(t):"function"==typeof e?e.apply(this,arguments):e,u=r.invert(a),c="function"==typeof n?n.apply(this,arguments):n;return o(_(y(r,c),a,u),t,f)},e)},g.translateBy=function(t,n,e){g.transform(t,function(){return o(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof e?e.apply(this,arguments):e),i.apply(this,arguments),f)})},g.translateTo=function(t,n,e,r){g.transform(t,function(){var t=i.apply(this,arguments),a=this.__zoom,u=null==r?b(t):"function"==typeof r?r.apply(this,arguments):r;return o(Qb.translate(u[0],u[1]).scale(a.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof e?-e.apply(this,arguments):-e),t,f)},r)},w.prototype={start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){kt(new Wb(g,t,this.that.__zoom),h.apply,h,[t,this.that,this.args])}},g.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:$b(+t),g):a},g.filter=function(t){return arguments.length?(r="function"==typeof t?t:$b(!!t),g):r},g.touchable=function(t){return arguments.length?(u="function"==typeof t?t:$b(!!t),g):u},g.extent=function(t){return arguments.length?(i="function"==typeof t?t:$b([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),g):i},g.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],g):[c[0],c[1]]},g.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],g):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},g.constrain=function(t){return arguments.length?(o=t,g):o},g.duration=function(t){return arguments.length?(s=+t,g):s},g.interpolate=function(t){return arguments.length?(l=t,g):l},g.on=function(){var t=h.on.apply(h,arguments);return t===h?g:t},g.clickDistance=function(t){return arguments.length?(v=(t=+t)*t,g):Math.sqrt(v)},g},t.zoomIdentity=Qb,t.zoomTransform=Kb,Object.defineProperty(t,"__esModule",{value:!0})});

function ModelControls(options) {
  const controls = this;
  init(options);
  return controls;

  function init(options) {
    controls.parent = options.parent;
    controls.layout = controls.defineLayout();
    controls.svg = controls.addSvg();
    controls.zoom = controls.addZoom();
  }
}

function ModelDescription(options) {
  const description = this;
  init(options);
  return description;

  function init(options) {
    description.layout = description.defineLayout();

    description.svg = description.addSvg();

  }
}

function ModelDescriptionBody(options) {
  const body = this;
  init(options);
  return body;

  function init(options) {
    body.parent = options.parent;
    body.text = options.model.description;

    body.foreignObject = body.addForeignObject();
    body.htmlBody = body.addHtmlBody();
    body.div = body.addDiv();

  }
}

function ModelDescriptionHeadline(options) {
  const headline = this;
  init(options);
  return headline;

  function init(options) {
    headline.parent = options.parent;
    headline.textString = options.model.name.join(" ");
    headline.coordinates = {"x":0,"y":0,"yStart":headline.parent.layout.size.height};

    headline.group = headline.addGroup();
    headline.rect = headline.addRect();
    headline.text = headline.addText();
    headline.resizeRect();
  }
}

function ModelThumbnail(options) {
  const thumbnail = this;
  init(options);
  return thumbnail;

  function init(options) {
    thumbnail.headlineText = options.name;
    thumbnail.parent = options.parent;
    thumbnail.imagePath = options.imagePath;
    thumbnail.gltfPath = options.gltfPath;
    thumbnail.name = options.name;
    thumbnail.description = options.description;
    thumbnail.cameraPosition = options.cameraPosition;
    thumbnail.cameraRotation = options.cameraRotation;

    thumbnail.isActive = false;

    thumbnail.layout = thumbnail.defineLayout();
    thumbnail.style = thumbnail.defineStyle();

    thumbnail.svg = thumbnail.addSvg();
    thumbnail.layers = thumbnail.addLayers();
    thumbnail.headlines = thumbnail.addHeadline();
    thumbnail.image = thumbnail.addImage();

    thumbnail.layoutHeadline();
    thumbnail.scaleImage();



  }
}

function ThreeContainer(options) {
  const container = this;
  init(options);
  return container;

  function init(options) {
    container.parent = options.parent;
    container.constants = container.defineConstants();
    container.layout = container.defineLayout();
    container.loader = container.defineGltfLoader();

    container.scene = container.addScene();
    container.camera = container.addCamera();
    container.renderer = container.addRenderer();
    container.lights = container.addLights();
    container.empty = container.addEmpty();
    container.orbitControls = container.addOrbitControls();

    container.currentObject;

    container
      .update();

  }
}

function ModelViewer(options) {
  const viewer = this;
  init(options);
  return viewer;

  function init(options) {
    viewer.hasTransitionedIn = false;
    viewer.hasDragged = false;
    viewer.modelThumbnails = viewer.addModelThumbnails();
    viewer.threeContainer = viewer.addThreeContainer();
    viewer.description = viewer.addDescription();
    viewer.dragCallout = viewer.addDragCallout();
    viewer.currentModelPath =  "";
  }
}

ModelControls.prototype.defineLayout = function() {
  const controls = this;

  const layout = {};
  layout.size = {};
  layout.size.width = d3.select("#rightPane").node().getBoundingClientRect().width;
  layout.size.height = layout.size.width * 0.13125;

  return layout;
}

ModelControls.prototype.addSvg = function() {
  const controls = this;

  const svg = d3.select("#rightPane")
    .append("svg")
    .attr("width",controls.layout.size.width)
    .attr("height",controls.layout.size.height)
    .style("position","absolute")
    .style("left",0)
    .style("bottom",0)
    .style("background-color","red")
    .style("z-index",2);

  return svg;
}

ModelControls.prototype.addZoom = function() {
  const controls = this;

  const zoom = new ModelControlSlider({
    "parent":controls,
    "size":{
      "width":500,
      "height":50
    },
    "callback":function(value) {
      controls.parent.threeContainer
        .zoom(value);
    }
  });

  return zoom;
}

ModelDescription.prototype.addSvg = function() {
  const description = this;

  const svg = d3.select("#rightPane")
    .append("svg")
    .attr("width",description.layout.size.width)
    .attr("height",description.layout.size.height)
    .style("position","absolute")
    .style("left",0)
    .style("top",0)
    .style("z-index",2);

  return svg;
}

ModelDescription.prototype.defineLayout = function() {
  const description = this;
  const layout = {};

  layout.size = {};
  layout.size.width = d3.select("#rightPane").node().getBoundingClientRect().width;
  layout.size.height = layout.size.width * 0.13125;

  layout.safeAreas = {};

  layout.safeAreas.title = {};
  layout.safeAreas.title.x = 0;
  layout.safeAreas.title.y = layout.size.height / 6;
  layout.safeAreas.title.width = layout.size.width / 3;
  layout.safeAreas.title.height = layout.size.height * 2 / 3;

  layout.safeAreas.text = {};
  layout.safeAreas.text.x = layout.size.width / 3;
  layout.safeAreas.text.y = 0;
  layout.safeAreas.text.width = layout.size.width * 2 / 3;
  layout.safeAreas.text.height = layout.size.height;


  return layout;
}

ModelDescription.prototype.updateModel = function(model) {
  const description = this;

  description.svg
    .selectAll("*")
    .remove();

  const body = new ModelDescriptionBody({
    "parent":description,
    "model":model
  });

  const headline = new ModelDescriptionHeadline({
    "parent":description,
    "model":model
  });

  body
    .transitionIn();

  headline
    .transitionIn();
}

ModelDescriptionBody.prototype.addDiv = function() {
  const body = this;
  const div = body.htmlBody
    .append("div")
    .style("padding-left","0.5em")
    .style("padding-right","0.5em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("border-left","1px solid orange")
    .html(body.text);

  return div;
}

ModelDescriptionBody.prototype.addForeignObject = function() {
  const body = this;

  const foreignObject = body.parent.svg
    .append("foreignObject")
    .attr("x",body.parent.layout.safeAreas.text.x)
    .attr("y",body.parent.layout.safeAreas.text.y + body.parent.layout.size.height)
    .attr("width",body.parent.layout.safeAreas.text.width)
    .attr("height",body.parent.layout.safeAreas.text.height)
    .attr("opacity",0);

  return foreignObject;
}

ModelDescriptionBody.prototype.addHtmlBody = function() {
  const body = this;
  const htmlBody = body.foreignObject
    .append("xhtml:body")
    .append("xhtml:body")
    .style("width","100%")
    .style("height","100%")
    .style("margin",0)
    .style("padding",0);

  return htmlBody;
}

ModelDescriptionBody.prototype.transitionIn = function(duration = 300, delay = 200, ease = d3.easeLinear) {
  const description = this;

  description.foreignObject
    .transition()
    .duration(duration)
    .delay(delay)
    .ease(ease)
    .attr("y",description.parent.layout.safeAreas.text.y)
    .attr("opacity",1);
}

ModelDescriptionHeadline.prototype.addGroup = function() {
  const headline = this;

  const group = headline.parent.svg
    .append("g")
    .attr("opacity",0)
    .attr("transform","translate(0,"+headline.parent.layout.size.height+")");

  return group;
}

ModelDescriptionHeadline.prototype.addRect = function() {
  const headline = this;

  const rect = headline.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("fill","black");

  return rect;
}

ModelDescriptionHeadline.prototype.addText = function() {
  const headline = this;

  const text = headline.group
    .append("text")
    .attr("font-size","2em")
    .attr("font-family","Oswald")
    .attr("font-weight",500)
    .attr("fill","white")
    .attr("text-anchor","start")
    .attr("dominant-baseline","hanging")
    .text(headline.textString);

  return text;
}

ModelDescriptionHeadline.prototype.resizeRect = function() {
  const headline = this;

  const textSize = headline.text.node().getBBox();

  headline.rect
    .attr("width",textSize.width + 20)
    .attr("height",textSize.height + 5);

  headline.text
    .attr("x",10)
    .attr("y",8);

  headline.coordinates.x = headline.parent.layout.safeAreas.title.width - textSize.width - 25;
  headline.group
    .attr("transform","translate("+headline.coordinates.x+","+headline.coordinates.yStart+")");

}

ModelThumbnail.prototype.activate = function() {
  const thumbnail = this;

  thumbnail.isActive = true;

  thumbnail.layers.headlineScale
    .transition()
    .duration(125)
    .attr("transform","scale(1.15)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(125)
    .attr("fill",thumbnail.style.activeColor);


  return thumbnail;
}

ModelThumbnail.prototype.deactivate = function() {
  const thumbnail = this;

  thumbnail.isActive = false;
  
  thumbnail.layers.headlineScale
    .transition()
    .duration(75)
    .attr("transform","scale(1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(75)
    .attr("fill",thumbnail.style.baseColor);

  return thumbnail;
}

ModelThumbnail.prototype.highlight = function() {
  const thumbnail = this;

  if(thumbnail.isActive)  { return }

  thumbnail.layers.headlineScale
    .transition()
    .duration(125)
    .attr("transform","scale(1.1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(125)
    .attr("fill",thumbnail.style.highlightColor);

  return thumbnail;
}

ModelThumbnail.prototype.unhighlight = function() {
  const thumbnail = this;

  if(thumbnail.isActive)  { return }

  thumbnail.layers.headlineScale
    .transition()
    .duration(75)
    .attr("transform","scale(1)");

  thumbnail.svg
    .selectAll("rect")
    .transition()
    .duration(75)
    .attr("fill",thumbnail.style.baseColor);

  return thumbnail;
}

ModelDescriptionHeadline.prototype.transitionIn = function(duration = 300, delay = 0, ease = d3.easeLinear) {
  const headline = this;

  headline.group
    .transition()
    .duration(duration)
    .delay(delay)
    .ease(ease)
    .attr("opacity",1)
    .attr("transform","translate("+headline.coordinates.x+","+headline.coordinates.y+")");

}

ModelThumbnail.prototype.defineLayout = function() {
  const thumbnail = this;
  const layout = {};

  const containerWidth = d3.select("#leftPane").node().getBoundingClientRect().width;

  layout.size = {};
  layout.size.width = containerWidth * 0.85;
  layout.size.height = containerWidth * 0.5625;

  layout.padding = {};
  layout.padding.left = layout.size.width / 12;
  layout.padding.top = layout.size.height / 12;


  return layout;
}

ModelThumbnail.prototype.defineStyle = function() {
    const thumbnail = this;
    const style = {};

    style.baseColor = "black";
    style.highlightColor = "#984BA3";
    style.activeColor = "#FE8000";

    return style;
}

ModelThumbnail.prototype.addHeadline = function() {
  const thumbnail = this;

  const headlines = [];

  thumbnail.headlineText.forEach((line) => {
    const group = thumbnail.layers.headlineOffset
      .append("g");
    const rect = thumbnail.addHeadlineRect(group);
    const text = thumbnail.addHeadlineText(group,line);
    const textSize = text.node().getBBox();

    rect
      .attr("width",textSize.width + 10)
      .attr("height",textSize.height + 2);

    text
      .attr("x",5)
      .attr("y",textSize.height / 2 + 2);

    headlines
      .push(group);
  });

  return headlines;
}

ModelThumbnail.prototype.addHeadlineRect = function(where) {
  const thumbnail = this;

  const rect = where
    .append("rect")
    .attr("fill",thumbnail.style.baseColor)
    .attr("x",0)
    .attr("y",0);

  return rect;
}

ModelThumbnail.prototype.addHeadlineText = function(where,text) {
  const thumbnail = this;

  const headline = where
    .append("text")
    .attr("fill","white")
    .attr("text-anchor","start")
    .attr("dominant-baseline","middle")
    .attr("font-size","1em")
    .attr("font-family","Oswald")
    .attr("font-weight",500)
    .text(text);

  return headline;
}

ModelThumbnail.prototype.addImage = function() {
  const thumbnail = this;

  const image = thumbnail.layers.background
    .append("image")
    .attr("x",0)
    .attr("y",0)
    .attr("width",1920)
    .attr("height",1080)
    .attr("href",thumbnail.imagePath);
    
  return image;
}

ModelThumbnail.prototype.addLayers = function() {
  const thumbnail = this;

  const layers = {};
  layers.background = addSingleLayer(thumbnail.svg);

  layers.headlineScale = addSingleLayer(thumbnail.svg)
    .attr("transform","scale(1)");
  layers.headlineOffset = addSingleLayer(layers.headlineScale);
  layers.headline = addSingleLayer(layers.headlineOffset);


  return layers;

  function addSingleLayer(where) {
    return where
      .append("g")
      .attr("transform","translate(0,0)");
  }
}

ModelThumbnail.prototype.addSingleHeadline = function(text) {
  const thumbnail = this;



  return thumbnail;
}

ModelThumbnail.prototype.addSvg = function() {
  const thumbnail = this;

  const svg = d3.select("#leftPane")
    .append("svg")
    .attr("width",thumbnail.layout.size.width)
    .attr("height",thumbnail.layout.size.height)
    .attr("cursor","pointer")
    .on('mouseover',function() { thumbnail.highlight(); })
    .on('mouseout',function() { thumbnail.unhighlight(); })
    .on('click',function() { thumbnail.parent.selectModel(thumbnail); });

  return svg;
}

ModelThumbnail.prototype.layoutHeadline = function() {
  const thumbnail = this;

  let runningY = 0;
  thumbnail.headlines.forEach((group,index) => {
    const groupHeight = group.node().getBBox().height;

    group
      .attr("transform","translate(0,"+runningY+")");

    runningY += groupHeight;
  });


  thumbnail.layers.headlineOffset
    .attr("transform","translate("+thumbnail.layout.padding.left+","+thumbnail.layout.padding.top+")");

  return thumbnail;
}

ModelThumbnail.prototype.scaleImage = function() {
  const thumbnail = this;

  const imageScale = thumbnail.layout.size.width / 1920;

  thumbnail.layers.background
    .attr("transform","scale("+imageScale+")");

}

ThreeContainer.prototype.defineConstants = function() {
  const container = this;
  const constants = {};

  // Dev / Prod Mode
  constants.IS_LOGGER_ENABLED = true;

  // Camera Setup
  constants.ASPECT_RATIO = constants.WIDTH / constants.HEIGHT;
  constants.CAMERA_START_X = 10;
  constants.CAMERA_START_Y = 1.5;
  constants.CAMERA_START_Z = -5;
  constants.NEAR = 0.001;
  constants.VIEW_ANGLE = 45;

  // Lighting and Views
  constants.PHYSICALLY_CORRECT_LIGHTS = true;
  constants.GAMMA_FACTOR = 2.2;
  constants.GAMMA_OUTPUT = true;
  constants.EXPOSURE = 1;
  constants.AMBIENT_LIGHT_INTENSITY = 1;
  constants.AMBIENT_LIGHT_COLOR = 0xffffff
  constants.DIRECT_LIGHT_INTENSITY = 1;
  constants.DIRECT_LIGHT_COLOR = 0xffffff;


  return constants;
}

ThreeContainer.prototype.defineGltfLoader = function() {
  const container = this;
  const loader = new THREE.GLTFLoader();
  return loader;
}

ThreeContainer.prototype.defineLayout = function() {
  const viewer = this;
  const layout = {};

  const containerSize = d3.select("#threeContainer").node().getBoundingClientRect();
  layout.size = {};
  layout.size.width = containerSize.width;
  layout.size.height = containerSize.height;

  layout.aspectRatio = layout.size.width / layout.size.height;


  return layout;
}

ThreeContainer.prototype.displayModel = function(model) {
  const container = this;

  container.orbitControls.reset();

  container.camera.position.x = model.cameraPosition.x;
  container.camera.position.y = model.cameraPosition.y;
  container.camera.position.z = model.cameraPosition.z;

  container.camera.rotation.x = model.cameraRotation.x;
  container.camera.rotation.y = model.cameraRotation.y;
  container.camera.rotation.z = model.cameraRotation.z;

  container.camera.frustumCalled = true;

  container
    .loadModel(model.gltfPath)
    .then((model) => {
      container.empty.children = [];
      container.currentObject = model.scene;
      container.empty.add(container.currentObject);
      container.empty.frustumCalled = true;
      container.orbitControls.update();
      container.lights.key.target = container.empty;
      container.lights.fill.target = container.empty;
    });

}

ThreeContainer.prototype.loadModel = function(modelPath) {
  const container = this;

  let promise = new Promise((resolve,reject) => {
    container.loader.load(
      modelPath,
      function(gltf) {
        resolve(gltf);
      },
      function(xhr) {

      },
      function(error) {
        scene.logger.error("ERROR LOADING MODEL", error);
      }
    )
  });

  return promise;
}

ThreeContainer.prototype.zoom = function(level) {
  const container = this;
  container.camera.position.z = level;
}

ThreeContainer.prototype.addCamera = function() {
  const container = this;
  const camera = new THREE.PerspectiveCamera(
    75,
    container.layout.aspectRatio,
    container.constants.NEAR,
    container.constants.FAR
  );

  camera.position.z = 4;
  return camera;
}

ThreeContainer.prototype.addEmpty = function() {
  const container = this;
  const empty = new THREE.Object3D();

  container.scene
    .add(empty);

  return empty;
}

ThreeContainer.prototype.addLights = function() {
  const container = this;
  const lights = {};


  lights.key = new THREE.SpotLight(0xffffff);
  lights.key.position.set(0,5,0);
  lights.key.castShadow = true;
  lights.key.power = 50;

  lights.fill = new THREE.SpotLight(0xffffff);
  lights.fill.position.set(5,0,-2);
  lights.fill.castShadow = true;
  lights.fill.power = 50;

  container.scene.add(lights.key);
  container.scene.add(lights.fill);

  return lights;
}

ThreeContainer.prototype.addOrbitControls = function() {
  const container = this;
  const controls = new THREE.OrbitControls(container.camera,container.renderer.domElement);

  controls.addEventListener("change",function() {
    // const rotation = {};
    // rotation.x = container.camera.rotation.x;
    // rotation.y = container.camera.rotation.y;
    // rotation.z = container.camera.rotation.z;
    // console.log(JSON.stringify(container.camera.position));
    // console.log(JSON.stringify(container.camera.rotation));

  });

  return controls;
}

ThreeContainer.prototype.addRenderer = function() {
  const container = this;

  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(container.layout.size.width,container.layout.size.height);
  renderer.gammaFactor = container.constants.GAMMA_FACTOR;
  renderer.gammaOutput = container.constants.GAMMA_OUTPUT;
  renderer.exposure = container.constants.EXPOSURE;
  renderer.physicallyCorrectLights = container.constants.PHYSICALLY_CORRECT_LIGHTS;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xcccccc );

  const canvas = document.querySelector("#threeContainer")
    .appendChild(renderer.domElement);

  canvas.style.position = "absolute";
  canvas.style.left = 0;
  canvas.style.top = container.layout.size.height;


  return renderer;
}

ThreeContainer.prototype.addScene = function() {
  const container = this;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  return scene;
}

ThreeContainer.prototype.update = function() {
  const container = this;
  container.renderer.render(container.scene,container.camera);


  if(container.currentObject !== undefined){
    // container.currentObject.rotation.x += 0.01;
    // container.currentObject.rotation.y += 0.01;
  }

  requestAnimationFrame(() => { container.update() });
}

ModelViewer.prototype.addDescription = function() {
  const viewer = this;
  const description = new ModelDescription({});
  return description;
}

ModelViewer.prototype.addDragCallout = function() {
  const viewer = this;

  const callout = d3.select("#rightPane")
    .append("div")
    .style("width","100%")
    .style("height","5vh")
    .style("z-index",10)
    .style("position","absolute")
    .style("text-align","center")
    .style("bottom","-5vh");

  callout
    .append("div")
    .style("font-size","2em")
    .style("font-weight",500)
    .style("font-family","Oswald")
    .style("padding-left","1em")
    .style("padding-right","1em")
    .style("padding-top","0.25em")
    .style("padding-bottom","0.25em")
    .style("display","inline-block")
    .style("color","white")
    .style("background-color","#E31A1C")
    .html("CLICK AND DRAG TO ROTATE MODEL");

  return callout;
}

ModelViewer.prototype.addModelThumbnails = function() {
  const viewer = this;
  const thumbnails = [];

  thumbnails.push(new ModelThumbnail({
    "name":["ARDUINO","UNO"],
    "imagePath":"assets/thumbnails/arduino.jpg",
    "gltfPath":"assets/models/arduino.glb",
    "description":"A model of an Arduino Uno I created as part of a concept educational / training video. (1.87 MB)",
    "zoomRange":[0.129,0.439],
    "parent":viewer,
    "cameraPosition": {"x":0.01639015604046701,"y":0.06397744724113906,"z":0.03156335389506952},
    "cameraRotation":{"_x":-1.1124818467243944,"_y":0.22582893667430384,"_z":0.4260625036015186,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["LAPTOP"],
    "imagePath":"assets/thumbnails/macbook.jpg",
    "gltfPath":"assets/models/macbook.glb",
    "description":"Model of my laptop created as part of the Arduino concept video (5.1 MB)",
    "zoomRange":[0.163,0.615],
    "parent":viewer,
    "cameraPosition": {"x":0.21586677917771854,"y":0.2405939950613473,"z":0.3997024560195606},
    "cameraRotation":{"_x":-0.541839421895039,"_y":0.43337320332920504,"_z":0.24758623209789848,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["BREADBOARD"],
    "imagePath":"assets/thumbnails/breadboard.jpg",
    "gltfPath":"assets/models/breadboard.glb",
    "description":"A model of a breadboard created as part of the Arduino concept video (670 KB)",
    "zoomRange":[0.425,0.743],
    "parent":viewer,
    "cameraPosition": {"x":0.055705185806565374,"y":0.06482411441691625,"z":0.04054131795213848},
    "cameraRotation":{"_x":-1.0119059097312968,"_y":0.6296482969356019,"_z":0.7553113939983719,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["CUTTING","MAT"],
    "imagePath":"assets/thumbnails/cuttingMat.jpg",
    "gltfPath":"assets/models/cuttingMat.glb",
    "description":"A craft cutting mat created as part of the Arduino concept video (1.5MB).",
    "zoomRange":[0.425,0.743],
    "parent":viewer,
    "cameraPosition":{"x":0.5758353069773661,"y":0.6837329475655082,"z":-0.007575375650116761},
    "cameraRotation":{"_x":-1.2507823720052051,"_y":0.09144619349122028,"_z":0.2688779657517847,"_order":"XYZ"}
  }));


  thumbnails.push(new ModelThumbnail({
    "name":["ZIG-ZAG","CHAIR"],
    "imagePath":"assets/thumbnails/zigzag.jpg",
    "gltfPath":"assets/models/zigzag.glb",
    "description":"A to-scale model of Gerrit Rietveld's famous <a href='https://en.wikipedia.org/wiki/Zig-Zag_Chair' target='_new'>Zig Zag chair</a> (9KB).",
    "zoomRange":[0.425,0.743],
    "parent":viewer,
    "cameraPosition":{"x":0.6672821411955197,"y":0.7553913378856686,"z":0.6047222453075173},
    "cameraRotation":{"_x":-0.5106503645546324,"_y":0.47882310271896944,"_z":0.25259659562541775,"_order":"XYZ"}
  }));

  thumbnails.push(new ModelThumbnail({
    "name":["MILITARY","TABLE"],
    "imagePath":"assets/thumbnails/militarytable.jpg",
    "gltfPath":"assets/models/militarytable.glb",
    "description":"A to-scale model of Gerrit Rietveld's Military Table & Military Stools (9KB).",
    "zoomRange":[0.425,0.743],
    "parent":viewer,
    "cameraPosition":{"x":2.391294042312594,"y":1.5105665599488698,"z":1.658434809233142},
    "cameraRotation":{"_x":-0.7387711482992004,"_y":0.8173285900122235,"_z":0.5863578599466712,"_order":"XYZ"}
  }));


  return thumbnails;
}

ModelViewer.prototype.addThreeContainer = function() {
  const viewer = this;
  const container = new ThreeContainer({"parent":viewer});
  return container;
}

ModelViewer.prototype.hideDragCallout = function() {
  const viewer = this;
  viewer.hasDragged = true;

  console.log("HIDE DRAG CALLOUT?");
  
  viewer.dragCallout
    .transition()
    .duration(250)
    .style("bottom","-5vh");

  return viewer;
}

ModelViewer.prototype.selectModel = function(model) {
  const viewer = this;

  if(!viewer.hasTransitionedIn) {
      d3.select("canvas")
        .transition()
        .duration(500)
        .style("top","0px")
        .on('end',function(){
          viewer.currentModelPath = model.gltfPath;
          viewer.updateModel(model);
          d3.select("#splashContent").html("");
        });
      viewer.hasTransitionedIn = true;

      viewer.dragCallout
        .transition()
        .delay(750)
        .duration(550)
        .ease(d3.easeBack)
        .style("bottom","2.5vh");

  } else {
    if(viewer.currentModelPath != model.gltfPath)  {
      viewer.currentModelPath = model.gltfPath;
      viewer.updateModel(model);
    }
  }

  return viewer;
}

ModelViewer.prototype.updateModel = function(model) {
  const viewer = this;

  viewer.description
    .updateModel(model);

  viewer.threeContainer
    .displayModel(model);

  viewer.modelThumbnails.forEach((thumbnail) => {
    if(thumbnail.gltfPath == viewer.currentModelPath) {
      thumbnail
        .activate();
    } else {
      thumbnail
        .deactivate();
    }
  })

  return viewer;
}
