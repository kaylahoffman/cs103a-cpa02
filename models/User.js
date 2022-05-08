'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
  username: String,
  passphrase: String,
  age: Number,
  class_year: Number,
  major: String,
} );

module.exports = mongoose.model( 'User', userSchema );
