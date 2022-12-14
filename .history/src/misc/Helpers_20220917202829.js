export function getNameInitials(name) {
  const splitName = name.toUpperCase().split(' ');
  if (splitName.length > 1) {
    return splitName[0][0] + splitName[1][0];
  }
  return splitName[0][0];
}

export function transformToArrWithId(snapVal) {
  return snapVal
    ? Object.keys(snapVal).map(roomId => {
        return { ...snapVal[roomId], id: roomId };
      })
    : [];
}

export async function getUserUpdates(userId, keyToUpdate, value, db) {
  const updates = {};
  updates[`/profiles/${userId}/${keyToUpdate}`] = value;
  const getMsgs = db
    .ref('/messages')
    .orderByChild('author/uid')
    .equalTo(userId)
    .once('value');

  const getRooms = db
    .ref('/rooms')
    .orderByChild('last/author/uid')
    .equalTo(userId)
    .once('value');

  const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);
}
