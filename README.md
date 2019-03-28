[![Build Status](https://travis-ci.org/siromivel/music-game.svg?branch=master)](https://travis-ci.org/siromivel/music-game)

This is a simple ERC-721 game where any wallet holding a token can mint a token to any wallet not holding a token and receive another token as a reward. Each token is associated with an array of 4 randomly generated uint24 values; these are mapped to hex colors in the UI and used to color an SVG of the relevant instrument type on the front end.

The randomness contract(`PaintMixer.sol`) was adapted from the CryptoKitties GeneScience algorithm with love.
