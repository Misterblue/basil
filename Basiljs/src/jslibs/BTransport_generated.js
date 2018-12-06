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
 * @const
 * @namespace
 */
org.herbal3d.protocol.basil.server = org.herbal3d.protocol.basil.server || {};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.BTransportRequest = function() {
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
 * @returns {org.herbal3d.protocol.basil.BTransportRequest}
 */
org.herbal3d.protocol.basil.BTransportRequest.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.BTransportRequest=} obj
 * @returns {org.herbal3d.protocol.basil.BTransportRequest}
 */
org.herbal3d.protocol.basil.BTransportRequest.getRootAsBTransportRequest = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.BTransportRequest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.BTransportRequest.prototype.session = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
org.herbal3d.protocol.basil.BTransportRequest.prototype.sessionKey = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.BTransportRequest.startBTransportRequest = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} session
 */
org.herbal3d.protocol.basil.BTransportRequest.addSession = function(builder, session) {
  builder.addFieldInt32(0, session, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sessionKeyOffset
 */
org.herbal3d.protocol.basil.BTransportRequest.addSessionKey = function(builder, sessionKeyOffset) {
  builder.addFieldOffset(1, sessionKeyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.BTransportRequest.endBTransportRequest = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.BTransportTrace = function() {
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
 * @returns {org.herbal3d.protocol.basil.BTransportTrace}
 */
org.herbal3d.protocol.basil.BTransportTrace.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.BTransportTrace=} obj
 * @returns {org.herbal3d.protocol.basil.BTransportTrace}
 */
org.herbal3d.protocol.basil.BTransportTrace.getRootAsBTransportTrace = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.BTransportTrace).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
org.herbal3d.protocol.basil.BTransportTrace.prototype.traceID = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
org.herbal3d.protocol.basil.BTransportTrace.prototype.parentSpanID = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
org.herbal3d.protocol.basil.BTransportTrace.prototype.spanID = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {boolean}
 */
org.herbal3d.protocol.basil.BTransportTrace.prototype.sampled = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.BTransportTrace.startBTransportTrace = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} traceID
 */
org.herbal3d.protocol.basil.BTransportTrace.addTraceID = function(builder, traceID) {
  builder.addFieldInt64(0, traceID, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} parentSpanID
 */
org.herbal3d.protocol.basil.BTransportTrace.addParentSpanID = function(builder, parentSpanID) {
  builder.addFieldInt64(1, parentSpanID, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} spanID
 */
org.herbal3d.protocol.basil.BTransportTrace.addSpanID = function(builder, spanID) {
  builder.addFieldInt64(2, spanID, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} sampled
 */
org.herbal3d.protocol.basil.BTransportTrace.addSampled = function(builder, sampled) {
  builder.addFieldInt8(3, +sampled, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.BTransportTrace.endBTransportTrace = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
org.herbal3d.protocol.basil.BTransportMsg = function() {
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
 * @returns {org.herbal3d.protocol.basil.BTransportMsg}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {org.herbal3d.protocol.basil.BTransportMsg=} obj
 * @returns {org.herbal3d.protocol.basil.BTransportMsg}
 */
org.herbal3d.protocol.basil.BTransportMsg.getRootAsBTransportMsg = function(bb, obj) {
  return (obj || new org.herbal3d.protocol.basil.BTransportMsg).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.sequenceNum = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.stream = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.queueTime = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.sendTime = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {org.herbal3d.protocol.basil.AccessAuthorization=} obj
 * @returns {org.herbal3d.protocol.basil.AccessAuthorization|null}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.auth = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? (obj || new org.herbal3d.protocol.basil.AccessAuthorization).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {org.herbal3d.protocol.basil.BTransportRequest=} obj
 * @returns {org.herbal3d.protocol.basil.BTransportRequest|null}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.responseRequested = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? (obj || new org.herbal3d.protocol.basil.BTransportRequest).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {org.herbal3d.protocol.basil.BTransportTrace=} obj
 * @returns {org.herbal3d.protocol.basil.BTransportTrace|null}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.trace = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? (obj || new org.herbal3d.protocol.basil.BTransportTrace).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @returns {org.herbal3d.protocol.basil.server.ServerMessage}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.msgType = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? /** @type {org.herbal3d.protocol.basil.server.ServerMessage} */ (this.bb.readUint8(this.bb_pos + offset)) : org.herbal3d.protocol.basil.server.ServerMessage.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
org.herbal3d.protocol.basil.BTransportMsg.prototype.msg = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
org.herbal3d.protocol.basil.BTransportMsg.startBTransportMsg = function(builder) {
  builder.startObject(9);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} sequenceNum
 */
org.herbal3d.protocol.basil.BTransportMsg.addSequenceNum = function(builder, sequenceNum) {
  builder.addFieldInt32(0, sequenceNum, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} stream
 */
org.herbal3d.protocol.basil.BTransportMsg.addStream = function(builder, stream) {
  builder.addFieldInt32(1, stream, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} queueTime
 */
org.herbal3d.protocol.basil.BTransportMsg.addQueueTime = function(builder, queueTime) {
  builder.addFieldInt64(2, queueTime, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} sendTime
 */
org.herbal3d.protocol.basil.BTransportMsg.addSendTime = function(builder, sendTime) {
  builder.addFieldInt64(3, sendTime, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} authOffset
 */
org.herbal3d.protocol.basil.BTransportMsg.addAuth = function(builder, authOffset) {
  builder.addFieldOffset(4, authOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} responseRequestedOffset
 */
org.herbal3d.protocol.basil.BTransportMsg.addResponseRequested = function(builder, responseRequestedOffset) {
  builder.addFieldOffset(5, responseRequestedOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} traceOffset
 */
org.herbal3d.protocol.basil.BTransportMsg.addTrace = function(builder, traceOffset) {
  builder.addFieldOffset(6, traceOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {org.herbal3d.protocol.basil.server.ServerMessage} msgType
 */
org.herbal3d.protocol.basil.BTransportMsg.addMsgType = function(builder, msgType) {
  builder.addFieldInt8(7, msgType, org.herbal3d.protocol.basil.server.ServerMessage.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} msgOffset
 */
org.herbal3d.protocol.basil.BTransportMsg.addMsg = function(builder, msgOffset) {
  builder.addFieldOffset(8, msgOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
org.herbal3d.protocol.basil.BTransportMsg.endBTransportMsg = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.org = org;
