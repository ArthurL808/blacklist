const express = require('express');
const userRoutes = require('./users/users');
const defendantRoutes = require('./defendants/defendants')

module.exports = {
    users: userRoutes,
    defendants: defendantRoutes
}