// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var org = org || {};

/**
 * @const
 * @namespace
 */
org.herbal3d = org.herbal3d || {};

/**
 * @const
 * @namespace
 */
org.herbal3d.protocol = org.herbal3d.protocol || {};

/**
 * @const
 * @namespace
 */
org.herbal3d.protocol.basil = org.herbal3d.protocol.basil || {};

/**
 * @enum
 */
org.herbal3d.protocol.basil.coordSystem = {
  WGS86: 1, 1: 'WGS86',
  CAMERA: 2, 2: 'CAMERA',
  CAMERAABS: 3, 3: 'CAMERAABS',
  VIRTUAL: 4, 4: 'VIRTUAL',
  MOON: 5, 5: 'MOON',
  MARS: 6, 6: 'MARS',
  REL1: 7, 7: 'REL1',
  REL2: 8, 8: 'REL2',
  REL3: 9, 9: 'REL3'
};

/**
 * @enum
 */
org.herbal3d.protocol.basil.rotationSystem = {
  WORLD: 1, 1: 'WORLD',
  FOR: 2, 2: 'FOR',
  CAMERA: 3, 3: 'CAMERA'
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.Vector3 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.Vector3}
 */
org.herbal3d.protocol.basil.Vector3.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Vector3.prototype.X = function() {
  return this.bb.readFloat64(this.bb_pos);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Vector3.prototype.Y = function() {
  return this.bb.readFloat64(this.bb_pos + 8);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Vector3.prototype.Z = function() {
  return this.bb.readFloat64(this.bb_pos + 16);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} X
 * @param {number} Y
 * @param {number} Z
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.Vector3.createVector3 = function(builder, X, Y, Z) {
  builder.prep(8, 24);
  builder.writeFloat64(Z);
  builder.writeFloat64(Y);
  builder.writeFloat64(X);
  return builder.offset();
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.Vector3F = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.Vector3F}
 */
org.herbal3d.protocol.basil.Vector3F.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Vector3F.prototype.X = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Vector3F.prototype.Y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Vector3F.prototype.Z = function() {
  return this.bb.readFloat32(this.bb_pos + 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} X
 * @param {number} Y
 * @param {number} Z
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.Vector3F.createVector3F = function(builder, X, Y, Z) {
  builder.prep(4, 12);
  builder.writeFloat32(Z);
  builder.writeFloat32(Y);
  builder.writeFloat32(X);
  return builder.offset();
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.Quaternion = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.Quaternion}
 */
org.herbal3d.protocol.basil.Quaternion.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Quaternion.prototype.X = function() {
  return this.bb.readFloat64(this.bb_pos);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Quaternion.prototype.Y = function() {
  return this.bb.readFloat64(this.bb_pos + 8);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Quaternion.prototype.Z = function() {
  return this.bb.readFloat64(this.bb_pos + 16);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Quaternion.prototype.W = function() {
  return this.bb.readFloat64(this.bb_pos + 24);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} X
 * @param {number} Y
 * @param {number} Z
 * @param {number} W
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.Quaternion.createQuaternion = function(builder, X, Y, Z, W) {
  builder.prep(8, 32);
  builder.writeFloat64(W);
  builder.writeFloat64(Z);
  builder.writeFloat64(Y);
  builder.writeFloat64(X);
  return builder.offset();
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.QuaternionF = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.QuaternionF}
 */
org.herbal3d.protocol.basil.QuaternionF.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.QuaternionF.prototype.X = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.QuaternionF.prototype.Y = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.QuaternionF.prototype.Z = function() {
  return this.bb.readFloat32(this.bb_pos + 8);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.QuaternionF.prototype.W = function() {
  return this.bb.readFloat32(this.bb_pos + 12);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} X
 * @param {number} Y
 * @param {number} Z
 * @param {number} W
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.QuaternionF.createQuaternionF = function(builder, X, Y, Z, W) {
  builder.prep(4, 16);
  builder.writeFloat32(W);
  builder.writeFloat32(Z);
  builder.writeFloat32(Y);
  builder.writeFloat32(X);
  return builder.offset();
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.Transform = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.Transform}
 */
org.herbal3d.protocol.basil.Transform.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.Transform=} obj
 * @returns {org.herbal3d.protocol.basil.Transform}
 */
org.herbal3d.protocol.basil.Transform.getRootAsTransform = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.Transform).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @returns {number}
 */
org.herbal3d.protocol.basil.Transform.prototype.matrix = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readFloat64(this.bb.__vector(this.bb_pos + offset) + index * 8) : 0;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.Transform.prototype.matrixLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Float64Array}
 */
org.herbal3d.protocol.basil.Transform.prototype.matrixArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? new Float64Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.Transform.startTransform = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} matrixOffset
 */
org.herbal3d.protocol.basil.Transform.addMatrix = function(builder, matrixOffset) {
  builder.addFieldOffset(0, matrixOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.Transform.createMatrixVector = function(builder, data) {
  builder.startVector(8, data.length, 8);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
org.herbal3d.protocol.basil.Transform.startMatrixVector = function(builder, numElems) {
  builder.startVector(8, numElems, 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.Transform.endTransform = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.PropertyValue = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.PropertyValue}
 */
org.herbal3d.protocol.basil.PropertyValue.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.PropertyValue=} obj
 * @returns {org.herbal3d.protocol.basil.PropertyValue}
 */
org.herbal3d.protocol.basil.PropertyValue.getRootAsPropertyValue = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.PropertyValue).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.PropertyValue.prototype.property = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.PropertyValue.prototype.value = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.PropertyValue.startPropertyValue = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} propertyOffset
 */
org.herbal3d.protocol.basil.PropertyValue.addProperty = function(builder, propertyOffset) {
  builder.addFieldOffset(0, propertyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} valueOffset
 */
org.herbal3d.protocol.basil.PropertyValue.addValue = function(builder, valueOffset) {
  builder.addFieldOffset(1, valueOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.PropertyValue.endPropertyValue = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.BasilException = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.BasilException}
 */
org.herbal3d.protocol.basil.BasilException.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.BasilException=} obj
 * @returns {org.herbal3d.protocol.basil.BasilException}
 */
org.herbal3d.protocol.basil.BasilException.getRootAsBasilException = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.BasilException).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.BasilException.prototype.reason = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @param {org.herbal3d.protocol.basil.PropertyValue=} obj
 * @returns {org.herbal3d.protocol.basil.PropertyValue}
 */
org.herbal3d.protocol.basil.BasilException.prototype.hints = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new org.herbal3d.protocol.basil.PropertyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.BasilException.prototype.hintsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.BasilException.startBasilException = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} reasonOffset
 */
org.herbal3d.protocol.basil.BasilException.addReason = function(builder, reasonOffset) {
  builder.addFieldOffset(0, reasonOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} hintsOffset
 */
org.herbal3d.protocol.basil.BasilException.addHints = function(builder, hintsOffset) {
  builder.addFieldOffset(1, hintsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.BasilException.createHintsVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
org.herbal3d.protocol.basil.BasilException.startHintsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.BasilException.endBasilException = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.coordPosition = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.coordPosition}
 */
org.herbal3d.protocol.basil.coordPosition.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.coordPosition=} obj
 * @returns {org.herbal3d.protocol.basil.coordPosition}
 */
org.herbal3d.protocol.basil.coordPosition.getRootAscoordPosition = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.coordPosition).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {org.herbal3d.protocol.basil.Vector3=} obj
 * @returns {org.herbal3d.protocol.basil.Vector3|null}
 */
org.herbal3d.protocol.basil.coordPosition.prototype.pos = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new org.herbal3d.protocol.basil.Vector3).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {org.herbal3d.protocol.basil.QuaternionF=} obj
 * @returns {org.herbal3d.protocol.basil.QuaternionF|null}
 */
org.herbal3d.protocol.basil.coordPosition.prototype.rot = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new org.herbal3d.protocol.basil.QuaternionF).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {org.herbal3d.protocol.basil.coordSystem}
 */
org.herbal3d.protocol.basil.coordPosition.prototype.posRef = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? /** @type {org.herbal3d.protocol.basil.coordSystem} */ (this.bb.readUint8(this.bb_pos + offset)) : org.herbal3d.protocol.basil.coordSystem.WGS86;
};

/**
 * @returns {org.herbal3d.protocol.basil.rotationSystem}
 */
org.herbal3d.protocol.basil.coordPosition.prototype.rotRef = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? /** @type {org.herbal3d.protocol.basil.rotationSystem} */ (this.bb.readUint8(this.bb_pos + offset)) : org.herbal3d.protocol.basil.rotationSystem.WORLD;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.coordPosition.startcoordPosition = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} posOffset
 */
org.herbal3d.protocol.basil.coordPosition.addPos = function(builder, posOffset) {
  builder.addFieldStruct(0, posOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} rotOffset
 */
org.herbal3d.protocol.basil.coordPosition.addRot = function(builder, rotOffset) {
  builder.addFieldStruct(1, rotOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {org.herbal3d.protocol.basil.coordSystem} posRef
 */
org.herbal3d.protocol.basil.coordPosition.addPosRef = function(builder, posRef) {
  builder.addFieldInt8(2, posRef, org.herbal3d.protocol.basil.coordSystem.WGS86);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {org.herbal3d.protocol.basil.rotationSystem} rotRef
 */
org.herbal3d.protocol.basil.coordPosition.addRotRef = function(builder, rotRef) {
  builder.addFieldInt8(3, rotRef, org.herbal3d.protocol.basil.rotationSystem.WORLD);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.coordPosition.endcoordPosition = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.AaBoundingBox = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.AaBoundingBox}
 */
org.herbal3d.protocol.basil.AaBoundingBox.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {org.herbal3d.protocol.basil.Vector3=} obj
 * @returns {org.herbal3d.protocol.basil.Vector3|null}
 */
org.herbal3d.protocol.basil.AaBoundingBox.prototype.upperFrontLeft = function(obj) {
  return (obj || new org.herbal3d.protocol.basil.Vector3).__init(this.bb_pos, this.bb);
};

/**
 * @param {org.herbal3d.protocol.basil.Vector3=} obj
 * @returns {org.herbal3d.protocol.basil.Vector3|null}
 */
org.herbal3d.protocol.basil.AaBoundingBox.prototype.lowerBackRight = function(obj) {
  return (obj || new org.herbal3d.protocol.basil.Vector3).__init(this.bb_pos + 24, this.bb);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} upperFrontLeft_X
 * @param {number} upperFrontLeft_Y
 * @param {number} upperFrontLeft_Z
 * @param {number} lowerBackRight_X
 * @param {number} lowerBackRight_Y
 * @param {number} lowerBackRight_Z
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.AaBoundingBox.createAaBoundingBox = function(builder, upperFrontLeft_X, upperFrontLeft_Y, upperFrontLeft_Z, lowerBackRight_X, lowerBackRight_Y, lowerBackRight_Z) {
  builder.prep(8, 48);
  builder.prep(8, 24);
  builder.writeFloat64(lowerBackRight_Z);
  builder.writeFloat64(lowerBackRight_Y);
  builder.writeFloat64(lowerBackRight_X);
  builder.prep(8, 24);
  builder.writeFloat64(upperFrontLeft_Z);
  builder.writeFloat64(upperFrontLeft_Y);
  builder.writeFloat64(upperFrontLeft_X);
  return builder.offset();
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.AssetInformation = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.AssetInformation}
 */
org.herbal3d.protocol.basil.AssetInformation.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.AssetInformation=} obj
 * @returns {org.herbal3d.protocol.basil.AssetInformation}
 */
org.herbal3d.protocol.basil.AssetInformation.getRootAsAssetInformation = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.AssetInformation).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.AssetInformation.prototype.id = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {org.herbal3d.protocol.basil.AaBoundingBox=} obj
 * @returns {org.herbal3d.protocol.basil.AaBoundingBox|null}
 */
org.herbal3d.protocol.basil.AssetInformation.prototype.aabb = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new org.herbal3d.protocol.basil.AaBoundingBox).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.AssetInformation.prototype.displayableType = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {number} index
 * @param {org.herbal3d.protocol.basil.PropertyValue=} obj
 * @returns {org.herbal3d.protocol.basil.PropertyValue}
 */
org.herbal3d.protocol.basil.AssetInformation.prototype.attributes = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new org.herbal3d.protocol.basil.PropertyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.AssetInformation.prototype.attributesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.AssetInformation.startAssetInformation = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
org.herbal3d.protocol.basil.AssetInformation.addId = function(builder, idOffset) {
  builder.addFieldOffset(0, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} aabbOffset
 */
org.herbal3d.protocol.basil.AssetInformation.addAabb = function(builder, aabbOffset) {
  builder.addFieldStruct(1, aabbOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} displayableTypeOffset
 */
org.herbal3d.protocol.basil.AssetInformation.addDisplayableType = function(builder, displayableTypeOffset) {
  builder.addFieldOffset(2, displayableTypeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} attributesOffset
 */
org.herbal3d.protocol.basil.AssetInformation.addAttributes = function(builder, attributesOffset) {
  builder.addFieldOffset(3, attributesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.AssetInformation.createAttributesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
org.herbal3d.protocol.basil.AssetInformation.startAttributesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.AssetInformation.endAssetInformation = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.PathDescription = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.PathDescription}
 */
org.herbal3d.protocol.basil.PathDescription.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.PathDescription=} obj
 * @returns {org.herbal3d.protocol.basil.PathDescription}
 */
org.herbal3d.protocol.basil.PathDescription.getRootAsPathDescription = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.PathDescription).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.PathDescription.prototype.pathType = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.PathDescription.startPathDescription = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} pathTypeOffset
 */
org.herbal3d.protocol.basil.PathDescription.addPathType = function(builder, pathTypeOffset) {
  builder.addFieldOffset(0, pathTypeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.PathDescription.endPathDescription = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.InstancePositionInfo = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.InstancePositionInfo}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.InstancePositionInfo=} obj
 * @returns {org.herbal3d.protocol.basil.InstancePositionInfo}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.getRootAsInstancePositionInfo = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.InstancePositionInfo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.prototype.id = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {org.herbal3d.protocol.basil.coordPosition=} obj
 * @returns {org.herbal3d.protocol.basil.coordPosition|null}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.prototype.pos = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new org.herbal3d.protocol.basil.coordPosition).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {org.herbal3d.protocol.basil.Vector3=} obj
 * @returns {org.herbal3d.protocol.basil.Vector3|null}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.prototype.vel = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? (obj || new org.herbal3d.protocol.basil.Vector3).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {org.herbal3d.protocol.basil.PathDescription=} obj
 * @returns {org.herbal3d.protocol.basil.PathDescription|null}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.prototype.path = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? (obj || new org.herbal3d.protocol.basil.PathDescription).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.InstancePositionInfo.startInstancePositionInfo = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} id
 */
org.herbal3d.protocol.basil.InstancePositionInfo.addId = function(builder, id) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} posOffset
 */
org.herbal3d.protocol.basil.InstancePositionInfo.addPos = function(builder, posOffset) {
  builder.addFieldOffset(1, posOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} velOffset
 */
org.herbal3d.protocol.basil.InstancePositionInfo.addVel = function(builder, velOffset) {
  builder.addFieldStruct(2, velOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} pathOffset
 */
org.herbal3d.protocol.basil.InstancePositionInfo.addPath = function(builder, pathOffset) {
  builder.addFieldOffset(3, pathOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.InstancePositionInfo.endInstancePositionInfo = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.AccessAuthorization = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.AccessAuthorization}
 */
org.herbal3d.protocol.basil.AccessAuthorization.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.AccessAuthorization=} obj
 * @returns {org.herbal3d.protocol.basil.AccessAuthorization}
 */
org.herbal3d.protocol.basil.AccessAuthorization.getRootAsAccessAuthorization = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.AccessAuthorization).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {number} index
 * @param {org.herbal3d.protocol.basil.PropertyValue=} obj
 * @returns {org.herbal3d.protocol.basil.PropertyValue}
 */
org.herbal3d.protocol.basil.AccessAuthorization.prototype.accessProperties = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new org.herbal3d.protocol.basil.PropertyValue).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.AccessAuthorization.prototype.accessPropertiesLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.AccessAuthorization.startAccessAuthorization = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} accessPropertiesOffset
 */
org.herbal3d.protocol.basil.AccessAuthorization.addAccessProperties = function(builder, accessPropertiesOffset) {
  builder.addFieldOffset(0, accessPropertiesOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.AccessAuthorization.createAccessPropertiesVector = function(builder, data) {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
org.herbal3d.protocol.basil.AccessAuthorization.startAccessPropertiesVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.AccessAuthorization.endAccessAuthorization = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.TraceInfo = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {org.herbal3d.protocol.basil.TraceInfo}
 */
org.herbal3d.protocol.basil.TraceInfo.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.TraceInfo=} obj
 * @returns {org.herbal3d.protocol.basil.TraceInfo}
 */
org.herbal3d.protocol.basil.TraceInfo.getRootAsTraceInfo = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.TraceInfo).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.TraceInfo.prototype.info = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.TraceInfo.startTraceInfo = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} infoOffset
 */
org.herbal3d.protocol.basil.TraceInfo.addInfo = function(builder, infoOffset) {
  builder.addFieldOffset(0, infoOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.TraceInfo.endTraceInfo = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.org = org;
