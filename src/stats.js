export default function stats (data) {
   return (
      `
      NAME   : ${data.name}
      HEIGHT : ${data.height}
      WEIGHT : ${data.weight}
      BASE XP: ${data.base_experience}
      `
   );
}
