# rick-morty-characterpedia



# Task 
  1. Create a reset all button in filterCharacters filter component


# Issues
  1. When not on the first page, dropdown menu will search based on the current page number and often results not mathcing characters 
  2. Pagination -- only show 5 result max 
  ## Not solved 
  1. 7+7 Morty and rick 716 cannot be fetched??
  2. ## When input has one single string it does not give a list of items to display, so when I am on a page > 1 and search with a single string, it renders an error message
  3. Pagination does not show buttons if the 
  4. Need to set up the error handling when no characters found
  ## Solved !!
  1. Cannot get character if the current page is not 1: 
  2. Cannot display the page number button on the page:  -- needs improvement 
  3. Search results have duplicate:  -- needs improvement 
  4. Pagination can go outbound 
  5. Needs to get data back from the api based on page, name, gender -- could use useReducer to improve code readbility



Stretch
1. Use Redux to keep the page number persistant 
2. Use IMDB to provide more espisode information 
3. Use infinite scroll to show all the characters when no input is provided in search bar
4. Better UI
5. Write a test 
   
   