#!/usr/bin/env node
var program = require("commander");
var ncp = require('ncp');
var mkdirp = require('mkdirp');

program
  .version('0.0.1')
  .arguments('<appName>')
  .description('Create a treg app')
  .action(function(appName) {
    console.log('Creating your treg app named %s', appName);
    console.log();
    console.log('...');
    console.log();

    mkdirp(appName, function (err) {
      if (err) {
        console.log('There was an error creating the directory ' + appName);
        console.log();
        console.log(err);
        process.exit(1);
      } else {
        console.log('Successfully created %s directory', appName);
        console.log();
        console.log('...');
        console.log();
        
        // Copy client directory
        ncp(__dirname + '/client', appName + '/client', function (err) {
          if (err) {
            console.log('There was an error copying client directory to ' + appName);
            console.log();
            console.log(err);
            process.exit(1);
          } else {
            console.log('Succesfully moved client directory');
            console.log();
            console.log('...');
            console.log();
          }
        });
        // Copy server directory
        ncp(__dirname + '/server', appName + '/server', function (err) {
          if (err) {
            console.log('There was an error copying server directory to ' + appName);
            console.log();
            console.log(err);
            process.exit(1);
          } else {
            console.log('Successfully moved server directory');
            console.log();
            console.log('...');
            console.log();
            console.log('You are all ready to go. GLHF :D');
            process.exit(0);
          }
        });
      }
    });
  }).parse(process.argv);
