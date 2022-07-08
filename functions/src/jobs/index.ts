import * as admin from 'firebase-admin'

const db = admin.firestore()

// Job
async function addFields() {
  const snaps = await db.collection('Todos').get()

  for (const snap of snaps.docs) {
    const { image } = snap.data()
    if(!image) {
      await snap.ref.update({
        image: null
      })
    }
  }
  console.log('완료!')
}

addFields()
