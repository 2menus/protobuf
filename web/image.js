/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.image.v2.Image');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.image.v2.Points');
goog.require('proto.image.v2.Size');


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
proto.image.v2.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.image.v2.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.image.v2.Image.displayName = 'proto.image.v2.Image';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.image.v2.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.image.v2.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.image.v2.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.image.v2.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    size: (f = msg.getSize()) && proto.image.v2.Size.toObject(includeInstance, f),
    points: (f = msg.getPoints()) && proto.image.v2.Points.toObject(includeInstance, f)
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
 * @return {!proto.image.v2.Image}
 */
proto.image.v2.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.image.v2.Image;
  return proto.image.v2.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.image.v2.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.image.v2.Image}
 */
proto.image.v2.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = new proto.image.v2.Size;
      reader.readMessage(value,proto.image.v2.Size.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 11:
      var value = new proto.image.v2.Points;
      reader.readMessage(value,proto.image.v2.Points.deserializeBinaryFromReader);
      msg.setPoints(value);
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
proto.image.v2.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.image.v2.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.image.v2.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.image.v2.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.image.v2.Size.serializeBinaryToWriter
    );
  }
  f = message.getPoints();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.image.v2.Points.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.image.v2.Image.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.image.v2.Image.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.image.v2.Image.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.image.v2.Image.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Size size = 10;
 * @return {?proto.image.v2.Size}
 */
proto.image.v2.Image.prototype.getSize = function() {
  return /** @type{?proto.image.v2.Size} */ (
    jspb.Message.getWrapperField(this, proto.image.v2.Size, 10));
};


/** @param {?proto.image.v2.Size|undefined} value */
proto.image.v2.Image.prototype.setSize = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.image.v2.Image.prototype.clearSize = function() {
  this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.image.v2.Image.prototype.hasSize = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Points points = 11;
 * @return {?proto.image.v2.Points}
 */
proto.image.v2.Image.prototype.getPoints = function() {
  return /** @type{?proto.image.v2.Points} */ (
    jspb.Message.getWrapperField(this, proto.image.v2.Points, 11));
};


/** @param {?proto.image.v2.Points|undefined} value */
proto.image.v2.Image.prototype.setPoints = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.image.v2.Image.prototype.clearPoints = function() {
  this.setPoints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.image.v2.Image.prototype.hasPoints = function() {
  return jspb.Message.getField(this, 11) != null;
};


