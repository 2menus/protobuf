// source: image/v2/image.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.image.v2.Size');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.image.v2.Size = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.image.v2.Size, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.image.v2.Size.displayName = 'proto.image.v2.Size';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.image.v2.Size.prototype.toObject = function(opt_includeInstance) {
  return proto.image.v2.Size.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.image.v2.Size} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.image.v2.Size.toObject = function(includeInstance, msg) {
  var f, obj = {
    original: jspb.Message.getFieldWithDefault(msg, 1, ""),
    small: jspb.Message.getFieldWithDefault(msg, 2, ""),
    medium: jspb.Message.getFieldWithDefault(msg, 3, ""),
    large: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.image.v2.Size}
 */
proto.image.v2.Size.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.image.v2.Size;
  return proto.image.v2.Size.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.image.v2.Size} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.image.v2.Size}
 */
proto.image.v2.Size.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginal(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmall(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMedium(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLarge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.image.v2.Size.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.image.v2.Size.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.image.v2.Size} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.image.v2.Size.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginal();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSmall();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMedium();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLarge();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string original = 1;
 * @return {string}
 */
proto.image.v2.Size.prototype.getOriginal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.image.v2.Size} returns this
 */
proto.image.v2.Size.prototype.setOriginal = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string small = 2;
 * @return {string}
 */
proto.image.v2.Size.prototype.getSmall = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.image.v2.Size} returns this
 */
proto.image.v2.Size.prototype.setSmall = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string medium = 3;
 * @return {string}
 */
proto.image.v2.Size.prototype.getMedium = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.image.v2.Size} returns this
 */
proto.image.v2.Size.prototype.setMedium = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string large = 4;
 * @return {string}
 */
proto.image.v2.Size.prototype.getLarge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.image.v2.Size} returns this
 */
proto.image.v2.Size.prototype.setLarge = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


