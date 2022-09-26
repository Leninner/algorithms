export const appendAndDelete = (s, t, k) => {
  let i

  for (i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) break
  }

  const deletesRequired = s.length - i
  const addsRequired = t.length - i
  const minRequired = deletesRequired + addsRequired
  const max = s.length + t.length

  if (k < minRequired || (k % 2 !== minRequired % 2 && k < max)) return 'No'

  return 'Yes'
}
