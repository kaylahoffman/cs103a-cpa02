'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var userSchema = Schema( {
  username: String,
  passphrase: String,
  age: String,
  primary_major: String,
  secondary_major: String,
  minor: String
} );

module.exports = mongoose.model( 'User', userSchema );
