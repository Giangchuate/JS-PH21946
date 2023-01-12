const gamevents = new Map([
  [17, "Goal1"],
  [46, "Goal2"],
  [(13, "Goal3")],
  [(56, "Goal4")],
  [(34, "Goal5")],
  [(27, "Goal6")],
  [(12, "Goal7")],
  [(89, "Goal8")],
  [(67, "Goal9")],
  [(89, "Goal10")],
  [(74, "Goal11")],
  [(28, "Goal12")],
]);

const events = [...new Set(gamevents.values())];
console.log(events);

gamevents.delete(64);
console.log(90 / gamevents.size);

const time = [...gamevents.keys()].pop();
console.log(time);
console.log(time / gamevents.size);

for (const [min, event] of gamevents) {
  const haft = min <= 45 ? "FIRST" : "SECOND";
  console.log(haft, min, event);
}
