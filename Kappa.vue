<template>
    <div>
        Hello world
    </div>
</template>

<script>
import _ from 'lodash'; // @NOTE: invalid reference IndividualMethodImportRule
import html2canvas from 'html2canvas'; // @NOTE: this should not be commented as it's not configured in IndivualMethodImportRule
import cloneDeep from 'lodash/cloneDeep'; // @NOTE: valid lodash reference

export default {}
</script>
