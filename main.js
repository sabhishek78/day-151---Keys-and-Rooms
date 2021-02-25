function canVisitAllRooms(rooms){
	let roomNumber=0;
	let keys=[];
	while(roomNumber<rooms.length-1){
	  collectKeys(roomNumber,rooms,keys);
	  if(checkKeyForNextRoom(keys,roomNumber)){
	     roomNumber++;
	  }
	  else{
	    return false;
	  }
	 }
	return true;
}
function collectKeys(roomNumber,rooms,keys){
  rooms[roomNumber].forEach((e)=>keys.push(e));
}
function checkKeyForNextRoom(keys,roomNumber){
  for(let i=0;i<keys.length;i++){
    if(keys[i]===roomNumber+1){
      return true;
    }
  }
  return false;
}
canVisitAllRooms([[13], [15, 29, 15, 22], [5, 18, 9], [7], [27], [27], [6, 28], [26], [34], [1, 44, 11], [8, 36], [17, 35], [11, 45, 46, 10, 49], [19, 38, 47, 39], [20, 30], [34], [32, 31], [25, 19, 21, 29], [36], [], [38], [2, 13, 17, 47], [12], [49, 46], [], [40], [], [39, 16, 24], [24, 41], [14, 3, 40], [14, 43], [], [3, 20, 23], [37, 48], [6, 10], [26, 1, 4], [], [41, 45], [23, 33], [], [22, 18, 37], [4, 33, 43], [28, 31, 42], [30, 48], [16, 35], [5, 8, 44], [2, 25], [9, 21, 42], [7, 12, 32], []]);
// console.log(canVisitAllRooms([[1],[2],[3],[]])===true);
// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])===false);
// console.log(canVisitAllRooms([[1,2,3],[],[],[]])===true);
// console.log(canVisitAllRooms([[1,2,3],[],[],[],[]])===false);
// console.log(canVisitAllRooms([[1],[],[],[],[]])===false);
// console.log(canVisitAllRooms([[1],[2,3],[4],[],[]])===true);
// console.log(canVisitAllRooms([[1],[2],[4],[3],[]])===false);
// console.log(canVisitAllRooms([[],[2],[4],[3],[]])===false);
// console.log(canVisitAllRooms([[],[],[],[],[]])===false);
// console.log(canVisitAllRooms([[1]])===true);
// console.log(canVisitAllRooms([[]])===true);
// console.log(canVisitAllRooms([[1],[]])===true);
// console.log(canVisitAllRooms([[1,2,3,4,5],[]])===true);