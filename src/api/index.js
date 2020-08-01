import flats from './mocks.json';

export async function getFlats() {
  return flats.response;
}

export async function likeFlat(id) {
  return !!id;
}