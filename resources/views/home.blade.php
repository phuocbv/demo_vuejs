@extends('layouts.app')

@section('content')
<div id="app">
    <app-component></app-component>
</div>
<script src="{{ asset('js/bundle.js') }}"></script>
@endsection
