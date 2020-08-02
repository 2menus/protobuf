// source: menu/v1/menu_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.menu.v1.CategoriesRequest');

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
proto.menu.v1.CategoriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.menu.v1.CategoriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.menu.v1.CategoriesRequest.displayName = 'proto.menu.v1.CategoriesRequest';
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
proto.menu.v1.CategoriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.menu.v1.CategoriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.menu.v1.CategoriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.menu.v1.CategoriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ownerId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.menu.v1.CategoriesRequest}
 */
proto.menu.v1.CategoriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.menu.v1.CategoriesRequest;
  return proto.menu.v1.CategoriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.menu.v1.CategoriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.menu.v1.CategoriesRequest}
 */
proto.menu.v1.CategoriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
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
proto.menu.v1.CategoriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.menu.v1.CategoriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.menu.v1.CategoriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.menu.v1.CategoriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string menu_id = 1;
 * @return {string}
 */
proto.menu.v1.CategoriesRequest.prototype.getMenuId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.CategoriesRequest} returns this
 */
proto.menu.v1.CategoriesRequest.prototype.setMenuId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner_id = 2;
 * @return {string}
 */
proto.menu.v1.CategoriesRequest.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.menu.v1.CategoriesRequest} returns this
 */
proto.menu.v1.CategoriesRequest.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


