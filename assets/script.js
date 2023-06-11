const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log('Here are the topics that we learned through prework:');
listTopics();
console.log('Which topic should we study first?')
selectTopic(randomTopic);

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

/**this version of the loop to iterate over an array is the more
 * "correct" JS way of doing it, but it's not as applicable to other languages,
 * which is why (i assume) we haven't learned it yet.
 * topics.forEach((value) => {
 *   console.log(value);
 * })
**/

function selectTopic(topic) {
  if (topic === 'HTML') {
  console.log("Let's study HTML!");
  } else if (topic === 'CSS') {
  console.log("Let's study CSS!");
  } else if (topic === 'Git') {
  console.log("Let's study Git!");
  } else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
  } else {
  console.log('Please try again!');
  }
}