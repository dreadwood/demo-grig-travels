'use strict'

const DEFAULT_COUNT_PHOTO = 8

const skillsSelect = document.querySelector('select#skills')
const photosSelect = document.querySelector('select#photos')
const skillsGrid = document.querySelector('.grid-skills')
const mainGrid = document.querySelector('.grid-main')


skillsSelect.addEventListener('change', (evt) => {
  const count = +evt.target.value

  if (count > 7) {
    return
  }

  skillsGrid.className = 'grid-skills'
  skillsGrid.innerHTML = ''
  if (count > 4) {
    skillsGrid.classList.add(`grid-skills--${count}`)
  }
  new Array(count).fill(0).forEach((_) => {
    const skills = document.createElement('div')
    skills.className = 'skills'
    skillsGrid.append(skills)
  })
})


photosSelect.addEventListener('change', (evt) => {
  const count = +evt.target.value

  if (count > 10) {
    return
  }

  changePhotoGrid(count)
})


changePhotoGrid(DEFAULT_COUNT_PHOTO)
photosSelect.value = DEFAULT_COUNT_PHOTO


function changePhotoGrid(count) {
  mainGrid.className = `grid-main`
  mainGrid.innerHTML = ''

  if (count !== 0 ) {
    mainGrid.classList.add(`grid-main--${count}`)
  }

  const templateParams = document.querySelector('#templateParams')
  const paramsFragment = templateParams.content.cloneNode(true)
  const params = paramsFragment.querySelector('.params')

  if (
    count === 1 ||
    count === 4 ||
    count === 7 ||
    count === 10
  ) {
    params.classList.add('params--column')
  }

  mainGrid.append(paramsFragment)

  new Array(count).fill(0).forEach((_, i) => {
    const num = i + 1 > 9 ? i + 1 : '0' + (i + 1)

    const templatePhoto = document.querySelector('#templatePhoto')
    const photo = templatePhoto.content.cloneNode(true)
    const img = photo.querySelector('img')

    img.src = `${img.src}${num}.jpg`

    mainGrid.append(photo)
  })
}