/**
 * DataTables SweetAlert2 callback.
 *
 * @requires https://sweetalert2.github.io/#download
 *
 * -- Laravel Integration --
 *
 * Button::make('ajaxBatch')
 *     ->text('Restore')
 *     ->url(route('batch-restore-action-url'))
 *     ->onSuccess('$.fn.dataTable.callbacks.success')
 *     ->onError('$.fn.dataTable.callbacks.error')
 *
 * -- Response Format --
 * @see https://sweetalert2.github.io/#configuration for customized response.
 *
 * response()->json([
 *   'title' => 'Action Title',
 *   'text' => 'Action Message',
 *   'type' => 'success',
 * ]);
 *
 */

$.fn.dataTable.callbacks = $.fn.dataTable.callbacks || {};

// SweetAlert Response
$.fn.dataTable.callbacks.success = (data) => swal(data);

// Error Response
$.fn.dataTable.callbacks.error = (err) => swal(err.statusText, err.responseJSON.message, 'error');
