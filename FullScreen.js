//=============================================================================
// FullScreen.js
//=============================================================================

/*:
 * @plugindesc Bikin start game jadi full screen.
 * @author Rasyid Sholeh Rosena
 *
 */

FSInitStart =
SceneManager.initialize;
SceneManager.initialize = function(){
	FSInitStart.call(this);
Graphics._requestFullScreen();
};