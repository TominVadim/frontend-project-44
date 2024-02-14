#!/usr/bin/env node
import gameBody from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

function task() {
  const q = Math.round(Math.random() * 100);
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }
  return [q, a];
}

gameBody(description, task);
